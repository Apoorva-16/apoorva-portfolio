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
});
