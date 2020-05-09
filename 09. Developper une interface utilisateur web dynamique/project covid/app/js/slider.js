var barContainer = document.getElementById('sub-bar');
var inputs = document.getElementById('inputs-box');
var bar = document.getElementById("progress-bar");
var labelBar = document.getElementById("label-bar");
var btnRight = document.getElementById('btn_right');
var btnLeft = document.getElementById('btn_left');
var question = document.getElementById('question');
var indicator = document.getElementById('indicator');
var radiosContainer = document.getElementById('radios-box');
var nbrContainer = document.getElementById('nbr-box');
var inputNbr = document.getElementById('input-nbr');
var labelNbr = document.getElementById('label-nbr');
var answers = JSON.parse(localStorage.getItem('Answers'));

btnRight.style.cursor = 'not-allowed';

if (!answers){
  var answers = [1];
}
progress = answers[0];

radio1 = document.getElementById('radio1').addEventListener('click', function(){
  btnRight.disabled = false;
  btnRight.style.cursor = 'default';
});
radio2 = document.getElementById('radio2').addEventListener('click', function(){
  btnRight.disabled = false;
  btnRight.style.cursor = 'default';
});

showSlide(progress);
switchNbr('34 - 42', '34', '42', 'degree');

function moveSlides( n ){
  if ( n > 0){
    getAnswer(answers);
    clearInputs("option");
    btnRight.style.cursor = 'not-allowed';
  }else{
    btnRight.style.cursor = 'not-allowed';
    clearInputs("option");
    answers.pop();
    console.log(answers);
  }
  showSlide( progress += n );
  btnRight.disabled = true;
  answers[0] = progress;
  localStorage.setItem('Answers', JSON.stringify(answers));
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
      localStorage.clear();
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

function clearInputs(name)
{
  var ele = document.getElementsByName(name);

	for(var i=0;i<ele.length;i++){
    ele[i].checked = false;
  }  
}

function switchNbr(placeholder, min, max, label){
  radiosContainer.style.display = 'none';

  nbrContainer.style.display = 'block';
  inputNbr.placeholder = placeholder;
  inputNbr.min = min;
  inputNbr.max = max;

  labelNbr.innerHTML = label;
}

function clearUI(){
  btnLeft.style.display = 'none';
  btnRight.style.display = 'none';
  inputs.style.display = 'none';
  barContainer.style.display = 'none';
}