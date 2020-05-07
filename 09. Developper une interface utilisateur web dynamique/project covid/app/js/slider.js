var bar = document.getElementById("progress-bar");
var labelBar = document.getElementById("label-bar");
var btnRight = document.getElementById('btn_right');
var btnLeft = document.getElementById('btn_left');
var question = document.getElementById('question');
var progress = 1;

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
  if (n === 1){
    btnLeft.disabled = true;
  }else{
    btnLeft.disabled = false;
  }

  if ( n === questions.length - 1){
    btnRight.disabled = true;
  }else{
    btnRight.disabled = false;
  }

  bar.value = n;
  labelBar.innerHTML = `${progress}/${questions.length-1}`;

  console.log(bar.value);

  question.innerHTML = questions[n];
}