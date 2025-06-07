let bgcc=0;
let hue=0;
let imgno=1;

const button = document.getElementById("button");
const button2 = document.getElementById("button2");
const sun=document.getElementById("sun");

button.addEventListener("click", () => {
if(bgcc===0){
    bgcc=1
}else{
    bgcc=0
}
});

setInterval(() => {
    if(bgcc===1){
    hue=(hue+1)%360;
    sun.style.filter=`hue-rotate(${hue}deg)`;
    }
}, 10);
let buttonpadding=document.getElementById("buttonpadding");
    
button.addEventListener("mouseenter", () => {
  button.classList.add("hovered");  
});

button.addEventListener("mouseleave", () => {
  button.classList.remove("hovered");
});

button2.addEventListener("mouseenter", () => {
  button2.classList.add("hovered");  
});

button2.addEventListener("mouseleave", () => {
  button2.classList.remove("hovered");
});
  
button2.addEventListener("click", () => {
  imgno = imgno+1;
  if(imgno===6){
    imgno=1;
  } 
  sun.src = `html-image/${imgno}.png`;
});


