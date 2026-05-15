const revealElements=document.querySelectorAll('.reveal');
function revealOnScroll(){revealElements.forEach((el)=>{const top=el.getBoundingClientRect().top;if(top<window.innerHeight-110)el.classList.add('active')})}
window.addEventListener('scroll',revealOnScroll);window.addEventListener('load',revealOnScroll);
const glow=document.querySelector('.cursor-glow');
if(glow){document.addEventListener('mousemove',(e)=>{glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px'})}
const toggle=document.querySelector('.menu-toggle');const nav=document.querySelector('.nav-links');
if(toggle&&nav){toggle.addEventListener('click',()=>nav.classList.toggle('open'))}
