document.addEventListener('DOMContentLoaded',function(){
  const navToggle = document.getElementById('navToggle');
  const nav = document.getElementById('nav');
  navToggle && navToggle.addEventListener('click', ()=>{
    if(nav.style.display === 'block'){
      nav.style.display = '';
      navToggle.setAttribute('aria-expanded','false');
    } else {
      nav.style.display = 'block';
      navToggle.setAttribute('aria-expanded','true');
    }
  });
  
  // Typing effect for hero
  const phrases = ['I build data-driven products.', 'I translate data into decisions.', 'I care about reliable, scalable systems.'];
  const typed = document.getElementById('typed');
  let pi = 0, ci = 0, forward = true;
  function typeTick(){
    const text = phrases[pi];
    if(forward){
      typed.textContent = text.slice(0, ++ci);
      if(ci === text.length){ forward = false; setTimeout(typeTick,1200); return }
    } else {
      typed.textContent = text.slice(0, --ci);
      if(ci === 0){ forward = true; pi = (pi+1) % phrases.length }
    }
    setTimeout(typeTick, forward ? 70 : 30);
  }
  if(typed) typeTick();

  // Simple reveal for elements with .fade-in when they enter viewport
  const faders = document.querySelectorAll('.fade-in');
  const obs = new IntersectionObserver(entries=>{
    entries.forEach(e=>{ if(e.isIntersecting){ e.target.style.animationPlayState='running'; obs.unobserve(e.target) } })
  },{threshold:0.15});
  faders.forEach(f=>{ f.style.animationPlayState='paused'; obs.observe(f) });
});
