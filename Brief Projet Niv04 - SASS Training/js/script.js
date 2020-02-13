const input = document.querySelector('.email');
const messageEle = document.querySelector('.message');
const button = document.querySelector('.submit');


const addEmail = "Please enter an email address";
const fixEmail = "Please provide a valid email address";
const thanksEmail = "Thanks for your interest"

button.addEventListener('click', validateEntry);
input.addEventListener('click', clearMessage);

function validateEntry(e) {
    const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    if(!input.value){
      message = addEmail;
      errorMessage(message);
      
    }else if (!re.test(input.value)){
      message = fixEmail;
      input.value = "";
      input.placeholder = "email@example/com";
      errorMessage(message);
    }else{
      message = thanksEmail;
      successMessage(message);
    }
    e.preventDefault();
  }
  function errorMessage(){
      messageEle.className = " message errorMessage";
      messageEle.innerText = message;
      document.querySelector(".email").style.borderColor = "#f96262";
      document.querySelector(".email").style.borderWidth = "2px";
  event.preventDefault();
  
   }
  function successMessage(){
      messageEle.className = " message successMessage";
      messageEle.innerText = message;
      document.querySelector(".email").style.borderColor = "green";
      document.querySelector(".email").style.borderWidth = "2px";
    event.preventDefault();
  }
   function clearMessage(){
     input.value = "";
     input.placeholder= "";
     document.querySelector(".email").style.borderColor = "";
   }