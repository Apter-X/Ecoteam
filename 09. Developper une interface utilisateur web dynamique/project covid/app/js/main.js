var slides = document.getElementsByClassName("slide");
var bar = document.getElementsByClassName("progress-bar");
var labelBar = document.getElementsByClassName("progress-bar__label");
var btnRight = document.getElementById('btn_right');
var btnLeft = document.getElementById('btn_left');
var progress;

// window.addEventListener("beforeunload", function (e) {
//   var confirmationMessage = "\o/";

//   (e || window.event).returnValue = confirmationMessage; //Gecko + IE
//   return confirmationMessage;                            //Webkit, Safari, Chrome
// });

init();

function init(){
  progress = 1;
  showSlide(progress);
}

function moveSlides( n ){
  showSlide( progress += n );
}

function currentSlide( n ){
  showSlide( progress = n );
}



function showSlide(n){
  var i;

  // if ( n = slides.length ){
  //   btnRight.disabled = true;
  // } 

  // if ( n = 1 ){
  //   btnLeft.disabled = true;
  //   console.log('Button left disabled!');
  // }else{
  //   btnLeft.disabled = false;
  //   console.log('Button left enabled!');
  // }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[progress-1].style.display = "block";
  console.log(progress);
}