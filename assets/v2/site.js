(function(){
  document.documentElement.classList.add('js');
  var btn=document.querySelector('.menu-btn'),nav=document.getElementById('nav');
  if(btn&&nav){btn.addEventListener('click',function(){var o=nav.classList.toggle('open');btn.setAttribute('aria-expanded',o?'true':'false');});}
  var els=document.querySelectorAll('.reveal,.grow');
  if('IntersectionObserver' in window){
    var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});},{rootMargin:'0px 0px -10% 0px'});
    els.forEach(function(el){io.observe(el);});
  } else { els.forEach(function(el){el.classList.add('in');}); }
  var v=document.querySelector('.hero video');
  if(v&&window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches){v.removeAttribute('autoplay');v.pause();}
})();
document.querySelectorAll('.video-card .vmute').forEach(function(b){var v=b.closest('.video-card').querySelector('video');
v.muted=true;v.setAttribute('muted','');var go=function(){if(v.paused&&v.muted){var p=v.play();if(p&&p.catch)p.catch(function(){});}};go();
if('IntersectionObserver' in window){new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting)go();});},{threshold:.25}).observe(v);}
['scroll','touchstart','click'].forEach(function(ev){window.addEventListener(ev,go,{passive:true,once:true});});
b.addEventListener('click',function(){v.muted=!v.muted;if(!v.muted){v.currentTime=0;v.play();}
b.setAttribute('aria-pressed',String(!v.muted));b.querySelector('.ic').textContent=v.muted?'🔇':'🔊';b.querySelector('.tx').textContent=v.muted?b.dataset.off:b.dataset.on;});});
(function(){var h=document.querySelector('.site-header');if(!h)return;var f=function(){h.classList.toggle('scrolled',window.scrollY>40);};f();window.addEventListener('scroll',f,{passive:true});})();
(function(){var tl=document.querySelector('.why-tabs');if(!tl)return;var tabs=[].slice.call(tl.querySelectorAll('.why-tab'));
function sel(t,focus){tabs.forEach(function(x){var on=x===t;x.setAttribute('aria-selected',on);x.tabIndex=on?0:-1;document.getElementById(x.getAttribute('aria-controls')).hidden=!on;});if(focus)t.focus();}
tl.addEventListener('click',function(e){var t=e.target.closest('.why-tab');if(t)sel(t);});
tl.addEventListener('keydown',function(e){var i=tabs.indexOf(document.activeElement);if(i<0)return;if(e.key==='ArrowRight'){e.preventDefault();sel(tabs[(i+1)%tabs.length],1);}if(e.key==='ArrowLeft'){e.preventDefault();sel(tabs[(i-1+tabs.length)%tabs.length],1);}});})();
