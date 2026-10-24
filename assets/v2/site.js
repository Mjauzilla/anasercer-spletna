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
v.muted=true;var p=v.play();if(p&&p.catch)p.catch(function(){});
b.addEventListener('click',function(){v.muted=!v.muted;if(!v.muted){v.currentTime=0;v.play();}
b.setAttribute('aria-pressed',String(!v.muted));b.querySelector('.ic').textContent=v.muted?'🔇':'🔊';b.querySelector('.tx').textContent=v.muted?b.dataset.off:b.dataset.on;});});
