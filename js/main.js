const m=document.querySelector('.menu'),u=document.querySelector('nav ul');
m&&m.addEventListener('click',()=>{const o=u.classList.toggle('open');m.setAttribute('aria-expanded',o)});
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
document.querySelectorAll('form[data-demo]').forEach(f=>f.addEventListener('submit',e=>{e.preventDefault();if(!f.checkValidity()){f.reportValidity();return}f.querySelector('.ok').style.display='block';f.reset()}));
document.getElementById('y')&&(document.getElementById('y').textContent=new Date().getFullYear());
if(/[?&]shot\b/.test(location.search)){document.documentElement.classList.add('shot');}if(/[?&]shot\b/.test(location.search))document.querySelectorAll('.reveal').forEach(e=>e.classList.add('in'));
