// PAGE FADE TRANSITION
document.querySelectorAll("a").forEach(link=>{
if(link.hostname===window.location.hostname){
link.addEventListener("click",e=>{
e.preventDefault();
document.body.classList.add("fade-out");
setTimeout(()=>{
window.location=link.href;
},400);
});
}
});

// MOBILE MENU
const toggle=document.querySelector(".menu-toggle");
const nav=document.querySelector("nav");

if(toggle){
toggle.addEventListener("click",()=>{
nav.classList.toggle("active");
});
}

// LICZNIKI
const counters=document.querySelectorAll(".counter");

counters.forEach(counter=>{
const update=()=>{
const target=+counter.getAttribute("data-target");
const count=+counter.innerText;
const speed=target/100;

if(count<target){
counter.innerText=Math.ceil(count+speed);
setTimeout(update,20);
}else{
counter.innerText=target;
}
};
update();
});

// SCROLL REVEAL
const reveals=document.querySelectorAll(".reveal");

window.addEventListener("scroll",()=>{
reveals.forEach(el=>{
const windowHeight=window.innerHeight;
const elementTop=el.getBoundingClientRect().top;
if(elementTop<windowHeight-100){
el.classList.add("active");
}
});
});

// LIGHTBOX
function openModal(src){
document.getElementById("modal").style.display="flex";
document.getElementById("modal-img").src=src;
}

function closeModal(){
document.getElementById("modal").style.display="none";
}
