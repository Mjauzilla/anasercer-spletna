/* anasercer.com v3 homepage motion: cursor trail field, glow/tilt cards, counters, parallax, progress. */
(function(){
  var reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
  var dpr=Math.min(2,devicePixelRatio||1);
  var MX=-1e4,MY=-1e4,trail=[];

  /* progress bar */
  var prog=document.createElement('div');prog.id='prog';document.body.appendChild(prog);

  /* glow + tilt cards */
  var GL='.pain,.stat,.row,.step,.card,.case,.ref,.feat,.why-item,.about-photo,.video-card';
  document.querySelectorAll(GL).forEach(function(el){el.classList.add('gl')});

  /* stagger delays inside grids */
  document.querySelectorAll('.grid,.rows,.scroller,.why-panel').forEach(function(g){
    [].forEach.call(g.children,function(c,i){if(c.classList.contains('reveal'))c.classList.add('d'+Math.min(i+1,6))});
  });

  /* footer headline split */
  var fb=document.querySelector('.footer-big');
  if(fb&&fb.innerHTML.indexOf('<br>')>-1){var parts=fb.innerHTML.split('<br>');fb.innerHTML='<span class="sl l">'+parts[0]+'</span><br><span class="sl r">'+parts.slice(1).join('<br>')+'</span>';fb.classList.remove('reveal');}

  /* field canvases: one per section, trail colour follows the background */
  var secs=[].slice.call(document.querySelectorAll('main>section,.site-footer'));
  var fields=secs.map(function(sec){
    if(sec.classList.contains('logos-band')||sec.classList.contains('hero'))return null;
    var cv=document.createElement('canvas');cv.className='field';sec.insertBefore(cv,sec.firstChild);
    var ctx=cv.getContext('2d'),o={sec:sec,cv:cv,ctx:ctx,W:0,H:0};
    var dark=sec.classList.contains('s-green')||sec.classList.contains('s-mahog')||sec.classList.contains('results-band')||sec.classList.contains('site-footer');
    o.col=dark?'255,255,255':getComputedStyle(document.documentElement).getPropertyValue('--spruce-rgb').trim()||'58,74,46';
    if(sec.classList.contains('s-mahog'))o.col=hex2rgb(getComputedStyle(document.documentElement).getPropertyValue('--amber'));
    function size(){o.W=sec.clientWidth;o.H=sec.clientHeight;cv.width=o.W*dpr;cv.height=o.H*dpr;ctx.setTransform(dpr,0,0,dpr,0,0)}
    size();addEventListener('resize',size);return o;
  }).filter(Boolean);
  function hex2rgb(h){h=h.trim();return parseInt(h.slice(1,3),16)+','+parseInt(h.slice(3,5),16)+','+parseInt(h.slice(5,7),16)}

  addEventListener('mousemove',function(e){MX=e.clientX;MY=e.clientY;
    trail.push({x:MX,y:MY+scrollY});if(trail.length>40)trail.shift();
    document.querySelectorAll('.gl').forEach(function(el){var b=el.getBoundingClientRect();if(b.bottom<0||b.top>innerHeight)return;var px=e.clientX-b.left,py=e.clientY-b.top;
      el.style.setProperty('--mx',px+'px');el.style.setProperty('--my',py+'px');
      if(px>=0&&py>=0&&px<=b.width&&py<=b.height){el.style.setProperty('--ry',((px/b.width-.5)*7)+'deg');el.style.setProperty('--rx',((.5-py/b.height)*7)+'deg');}});
  });
  document.addEventListener('mouseleave',function(){MX=MY=-1e4});

  function drawTrail(o){var ctx=o.ctx,r=o.sec.getBoundingClientRect(),top=r.top+scrollY,mx=MX-r.left,my=MY-r.top;
    ctx.clearRect(0,0,o.W,o.H);if(trail.length<3)return;
    ctx.lineCap='round';ctx.lineJoin='round';
    for(var i=1;i<trail.length;i++){var a=trail[i-1],b=trail[i],f=i/trail.length;
      ctx.strokeStyle='rgba('+o.col+','+(f*.9)+')';ctx.lineWidth=1+f*14;
      ctx.beginPath();ctx.moveTo(a.x-r.left,a.y-top);ctx.lineTo(b.x-r.left,b.y-top);ctx.stroke();}
    if(mx>-1e3&&mx>=0&&mx<=o.W&&my>=0&&my<=o.H){ctx.fillStyle='rgba('+o.col+',1)';ctx.beginPath();ctx.arc(mx,my,5,0,6.283);ctx.fill();}}
  function loop(){fields.forEach(function(o){var r=o.sec.getBoundingClientRect();if(r.bottom<0||r.top>innerHeight)return;drawTrail(o)});if(!reduce)requestAnimationFrame(loop)}
  if(!reduce&&matchMedia('(hover:hover)').matches)loop();

  /* counters when a stat reveals */
  function countUp(el){var txt=el.textContent,m=txt.match(/^([^\d]*)(\d+)(.*)$/);if(!m||reduce)return;var n=+m[2],t0=performance.now()+250;el.textContent=m[1]+'0'+m[3];
    (function tick(){var k=Math.max(0,Math.min(1,(performance.now()-t0)/1600)),v=Math.round(n*(1-Math.pow(1-k,3)));el.textContent=m[1]+v+m[3];if(k<1)requestAnimationFrame(tick)})()}
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;e.target.classList.add('in');io.unobserve(e.target);var n=e.target.querySelector('.stat-n');if(n)countUp(n)})},{rootMargin:'0px 0px -12% 0px'});
  document.querySelectorAll('.stat,.footer-big .sl').forEach(function(el){io.observe(el)});

  /* scroll: progress, hero parallax + copy fade, amber band drift, case image parallax */
  var hv=document.querySelector('.hero video'),hc=document.querySelector('.hero-copy'),band=document.querySelector('.s-amber .marquee'),imgs=document.querySelectorAll('.case .img>*');
  function onScroll(){var y=scrollY;
    prog.style.width=(y/(document.documentElement.scrollHeight-innerHeight)*100)+'%';
    if(reduce)return;
    if(hv)hv.style.transform='translateY('+(y*.25)+'px) scale(1.06)';
    if(hc){var k=Math.min(1,y/600);hc.style.transform='translateY('+(y*.18)+'px)';hc.style.opacity=1-k*.9;hc.style.letterSpacing=(k*.02)+'em';}
    if(band){var br=band.parentElement.getBoundingClientRect();if(br.bottom>0&&br.top<innerHeight)band.style.transform='translateX('+((br.top-innerHeight*.5)*.12)+'px)';}
    imgs.forEach(function(im){var r=im.parentElement.getBoundingClientRect();if(r.bottom<0||r.top>innerHeight)return;var k2=(r.top+r.height/2-innerHeight/2)/innerHeight;im.style.transform='translateY('+(k2*-28)+'px) scale(1.12)';});
  }
  addEventListener('scroll',onScroll,{passive:true});onScroll();

  /* magnetic buttons */
  if(matchMedia('(hover:hover)').matches)document.querySelectorAll('.btn').forEach(function(b){
    b.addEventListener('mousemove',function(e){var r=b.getBoundingClientRect();b.style.transform='translate('+((e.clientX-r.left-r.width/2)*.16)+'px,'+((e.clientY-r.top-r.height/2)*.28)+'px)'});
    b.addEventListener('mouseleave',function(){b.style.transform=''});
  });
})();
/* before/after slider: drag sideways, scroll down */
(function(){document.querySelectorAll('.ba').forEach(function(ba){var r=ba.querySelector('.ba-range'),sc=ba.querySelector('.ba-scroll');if(!r)return;
function set(v){v=Math.max(0,Math.min(100,v));ba.style.setProperty('--p',v+'%');r.value=v}
function fromX(x){var b=ba.getBoundingClientRect();set((x-b.left)/b.width*100)}
var down=null;
ba.addEventListener('pointerdown',function(e){if(e.pointerType==='mouse'&&e.offsetX>sc.clientWidth)return;down={x:e.clientX,y:e.clientY,h:e.pointerType==='mouse'};ba.dataset.t=1;if(down.h){fromX(e.clientX);ba.classList.add('drag');ba.setPointerCapture(e.pointerId)}});
ba.addEventListener('pointermove',function(e){if(!down)return;if(!down.h&&Math.abs(e.clientX-down.x)>8&&Math.abs(e.clientX-down.x)>Math.abs(e.clientY-down.y)){down.h=true;try{ba.setPointerCapture(e.pointerId)}catch(_){}}if(down.h){fromX(e.clientX);e.preventDefault()}});
function up(){down=null;ba.classList.remove('drag')}ba.addEventListener('pointerup',up);ba.addEventListener('pointercancel',up);
r.addEventListener('input',function(){set(+r.value);ba.dataset.t=1});
sc.addEventListener('scroll',function(){if(sc.scrollTop>20)ba.classList.add('scrolled')},{passive:true});
if('IntersectionObserver' in window&&!matchMedia('(prefers-reduced-motion: reduce)').matches){var io=new IntersectionObserver(function(es){if(!es[0].isIntersecting)return;io.disconnect();
var t0=performance.now();(function f(t){if(ba.dataset.t)return;var k=Math.min((t-t0)/1800,1);var v=50+Math.sin(k*Math.PI*2)*22*(1-k*.3);if(k>=1)v=50;set(v);if(k<1)requestAnimationFrame(f)})(t0)},{threshold:.5});io.observe(ba)}})})();
/* case preview: gentle auto-scroll until the visitor takes over */
(function(){document.querySelectorAll('.case2-view').forEach(function(v){if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;
var user=false,hover=false,vis=false,dir=1,last=0,pos=0;function stop(){user=true}
['wheel','touchstart','pointerdown','keydown'].forEach(function(ev){v.addEventListener(ev,stop,{passive:true})});
v.addEventListener('mouseenter',function(){hover=true});v.addEventListener('mouseleave',function(){hover=false});
new IntersectionObserver(function(es){vis=es[0].isIntersecting},{threshold:.3}).observe(v);
(function f(t){var dt=last?Math.min(t-last,50):0;last=t;if(!user&&!hover&&vis){var max=v.scrollHeight-v.clientHeight;pos+=dir*dt*0.07;if(pos>=max){pos=max;dir=-1}if(pos<=0){pos=0;dir=1}v.scrollTop=pos}else{pos=v.scrollTop}requestAnimationFrame(f)})(0)})})();
