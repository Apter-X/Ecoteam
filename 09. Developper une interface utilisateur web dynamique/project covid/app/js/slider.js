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
// localStorage.clear();
var answers = JSON.parse(localStorage.getItem('Answers'));
if (!answers){
  var answers = [1];
}
progress = answers[0];

init();

function init(){
  showSlide(progress);
  form(progress);
  inputListener();
}

function moveSlides( n ){
  if ( n > 0){
    btnRight.style.cursor = 'not-allowed';
    getAnswer(answers);
    clearInputs("option");
  }
  if (n < 0){
    btnRight.style.cursor = 'not-allowed';
    clearInputs("option");
    answers.pop();
    form(progress);
  }
  showSlide( progress += n );
  answers[0] = progress;
  form(progress);
  btnRight.disabled = true;
  localStorage.setItem('Answers', JSON.stringify(answers));
  console.log(answers);
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

function getAnswer(tab){
  let ele = document.getElementsByName("option");

  if ( inputNbr.value > 0 ){
    tab.push(ele[4].value);
    return;
  }

  for(var i=0; i<ele.length; i++){
    if (ele[i].checked){
      tab.push(ele[i].value);
    }
  }
  console.log(tab);
}

function clearInputs(name)
{
  var ele = document.getElementsByName(name);
  inputNbr.value = '';
	for(var i=0;i<ele.length;i++){
    ele[i].checked = false;
  }
}

function switchRadio( key, label1, label2, label3, label4){
  document.getElementById('nbr-box').style.display = 'none';
  radiosContainer.style.display = 'block';
  switch (key) {
    case 2:
      document.getElementById('choice1').style.display = "block";
      document.getElementById('label1').innerHTML = `<span><span></span></span>${label1}`;
      document.getElementById('choice2').style.display = "block";
      document.getElementById('label2').innerHTML = `<span><span></span></span>${label2}`;
      document.getElementById('choice3').style.display = "none";
      document.getElementById('choice4').style.display = "none";
      break;
    case 3:
      document.getElementById('choice1').style.display = "block";
      document.getElementById('label1').innerHTML = `<span><span></span></span>${label1}`;
      document.getElementById('choice2').style.display = "block";
      document.getElementById('label2').innerHTML = `<span><span></span></span>${label2}`;
      document.getElementById('choice3').style.display = "block";
      document.getElementById('label3').innerHTML = `<span><span></span></span>${label3}`;
      document.getElementById('choice4').style.display = "none";
      break;
    case 4:
      document.getElementById('choice1').style.display = "block";
      document.getElementById('label1').innerHTML = `<span><span></span></span>${label1}`;
      document.getElementById('choice2').style.display = "block";
      document.getElementById('label2').innerHTML = `<span><span></span></span>${label2}`;
      document.getElementById('choice3').style.display = "block";
      document.getElementById('label3').innerHTML = `<span><span></span></span>${label3}`;
      document.getElementById('choice4').style.display = "block";
      document.getElementById('label4').innerHTML = `<span><span></span></span>${label4}`;
      break;
    default:
      console.log('Select a key between 2 - 4!')
      break;
  }
}

function switchNbr( placeholder, min, max, label ){
  radiosContainer.style.display = 'none';
  nbrContainer.style.display = 'block';
  inputNbr.placeholder = placeholder;
  inputNbr.min = min;
  inputNbr.max = max;
  labelNbr.innerHTML = label;
}

function inputListener(){
  document.getElementById('radio1').addEventListener('click', function(){
    btnRight.disabled = false;
    btnRight.style.cursor = 'default';
  });
  document.getElementById('radio2').addEventListener('click', function(){
    btnRight.disabled = false;
    btnRight.style.cursor = 'default';
  });
  document.getElementById('radio3').addEventListener('click', function(){
    btnRight.disabled = false;
    btnRight.style.cursor = 'default';
  });
  document.getElementById('radio4').addEventListener('click', function(){
    btnRight.disabled = false;
    btnRight.style.cursor = 'default';
  });
  inputNbr.addEventListener('input', function(){
    btnRight.disabled = false;
    btnRight.style.cursor = 'default';
  });
  inputNbr.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      document.getElementById('btn_right').click();
    }
  });
}

function clearUI(){
  btnLeft.style.display = 'none';
  btnRight.style.display = 'none';
  inputs.style.display = 'none';
  barContainer.style.display = 'none';
}