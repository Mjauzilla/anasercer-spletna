/* anasercer.com v3 homepage motion: cursor trail field, glow/tilt cards, counters, parallax, progress. */
(function(){
  var reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
  var dpr=Math.min(2,devicePixelRatio||1);
  var MX=-1e4,MY=-1e4,trail=[];

  /* progress bar */
  var prog=document.createElement('div');prog.id='prog';document.body.appendChild(prog);

  /* glow + tilt cards */
  var GL='.pain,.stat,.row,.step,.card,.case,.ref,.why-item,.about-photo,.video-card';
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
