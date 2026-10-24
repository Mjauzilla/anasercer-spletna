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
document.querySelectorAll('.video-card .vplay').forEach(function(b){b.addEventListener('click',function(){var c=b.closest('.video-card'),v=c.querySelector('video');c.classList.add('playing');v.controls=true;v.play();});});
