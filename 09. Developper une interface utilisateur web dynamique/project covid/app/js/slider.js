var barContainer = document.getElementById('sub-bar');
var inputs = document.getElementById('inputs-box');
var bar = document.getElementById("progress-bar");
var labelBar = document.getElementById("label-bar");
var btnRight = document.getElementById('btn_right');
var btnLeft = document.getElementById('btn_left');
var question = document.getElementById('question');
var indicator = document.getElementById('indicator');
var progress = 1;
var answers = [0];
inputs.addEventListener('click', function(){
  btnRight.disabled = false;
});


// window.addEventListener("beforeunload", function (e) {
//   var confirmationMessage = "\o/";

//   (e || window.event).returnValue = confirmationMessage; //Gecko + IE
//   return confirmationMessage;                            //Webkit, Safari, Chrome
// });

showSlide(progress);

function moveSlides( n ){
  if ( n > 0){
    getAnswer(answers);
    clearInput("option");
  }else{
    answers.pop();
    console.log(answers);
  }
  showSlide( progress += n );
  btnRight.disabled = true;
}

function getAnswer(tab){
  let ele = document.getElementsByName("option");

  for(var i=0; i<ele.length; i++){
    if (ele[i].checked){
      tab.push(ele[i].value);
      
    }
  }
  console.log(tab);
}

function showSlide(n){
  if ( n === 1 ){
    btnLeft.style.display = "none";
  }else{
    btnLeft.style.display = "block";
  }
  if ( n === questions.length - 1 ){
    btnRight.innerHTML = "Terminer";
    btnRight.onclick = function(){
      indicator.style.left = '79.2%';
      clearUI();
      decision();
    }
  }else{
    btnRight.innerHTML = "Suivant";
    btnRight.onclick = function(){
      moveSlides(1);
    }
  }

  bar.value = n;
  labelBar.innerHTML = `${n}/${questions.length-1}`;

  question.innerHTML = questions[n];
}

function clearInput(name)
{
  var ele = document.getElementsByName(name);

	for(var i=0;i<ele.length;i++){
    ele[i].checked = false;
  }  
}

function clearUI(){
  btnLeft.style.display = 'none';
  btnRight.style.display = 'none';
  inputs.style.display = 'none';
  barContainer.style.display = 'none';
}