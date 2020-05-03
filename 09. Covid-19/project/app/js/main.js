var slides = document.getElementsByClassName("slide");
var bar = document.getElementsByClassName("progress-bar");
var labelBar = document.getElementsByClassName("progress-bar__label");
var progress;

init();

function init(){
  progress = 1;
  showSlide(progress);
  console.log();
}

function moveSlides( n ){
  showSlide( progress += n );
}

function currentSlide( n ){
  showSlide( progress = n );
}

function showSlide(n){
  var i;
  if ( n > slides.length ){
    progress = 1;
  } 
  if ( n < 1 ){
    progress = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[progress-1].style.display = "block"; 
}