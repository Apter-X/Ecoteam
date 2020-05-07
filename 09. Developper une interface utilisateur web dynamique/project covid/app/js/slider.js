var slides = document.getElementsByClassName("slide");
var bar = document.getElementsByClassName("progress-bar");
var labelBar = document.getElementsByClassName("progress-bar__label");
var btnRight = document.getElementById('btn_right');
var btnLeft = document.getElementById('btn_left');
var question = document.getElementById('question');
var progress = 0;

// window.addEventListener("beforeunload", function (e) {
//   var confirmationMessage = "\o/";

//   (e || window.event).returnValue = confirmationMessage; //Gecko + IE
//   return confirmationMessage;                            //Webkit, Safari, Chrome
// });


showSlide(progress);


function moveSlides( n ){
  showSlide( progress += n );
}

function showSlide(n){

  if (n === 0){
    btnLeft.disabled = true;
  }else{
    btnLeft.disabled = false;
  }

  if ( n === questions.length - 1){
    btnRight.disabled = true;
  }else{
    btnRight.disabled = false;
  }

  question.innerHTML = questions[n];
}