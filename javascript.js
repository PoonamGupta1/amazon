let slideBtnLeft = document.getElementById("slide-btn-left");
let slideBtnLeft2 = document.getElementById("slide-btn-left2");
let slideBtnRight= document.getElementById("slide-btn-right");
let imgItem = document.querySelectorAll(".image-item")
let slideBtnRight2= document.getElementById("slide-btn-right");

console.log(imgItem.length-1);
let startSlider = 0;
let endsSlider = [imgItem.length-1] *100;

slideBtnLeft.addEventListener("click",handleLeftBtn);

function handleLeftBtn(){
    if(startSlider < 0){
        startSlider = startSlider +100;
    }
    imgItem.forEach(element=>{
        element.style.transform = `translate(${startSlider}%)`;
       
    })
}


slideBtnRight.addEventListener("click",handleRightBtn);

function handleRightBtn(){
    if(startSlider >= -endsSlider+100){
        startSlider = startSlider -100;
    }
    imgItem.forEach(element =>{
        element.style.transform = `translate(${startSlider}%)`;
    })
}
//  side bar navigation
const sideBarNavigationsidebar1 = document.getElementById("sidebar-container-navigation");

// render automatic
function renderSlideAuto(){

 if(startSlider >= -endsSlider+100){
    handleRightBtn()
 }
 else {
    startSlider = 100;
 }
}

setInterval (renderSlideAuto,5000);



// image-slider
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (4 > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
