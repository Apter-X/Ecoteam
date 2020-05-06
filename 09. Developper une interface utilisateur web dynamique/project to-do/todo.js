//ADD new To do 
const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const popup = document.querySelector('.popup');
const gPop = document.querySelector('.popup-wrapper');
const btn = document.querySelector('.btn');
const search = document.querySelector('.search input');
var myTodo = [];
gPop.style.display = "none";


/***************reusable function********************/

/* Function pour l'alert et le popup qui va etre afficher (time control)*/
function start(duree)
{
   var o=document.getElementById("sp");
   if(duree > 0)
   {
      o.innerHTML = duree;
      gPop.style.display = "block";
      setTimeout("start("+duree+" -1)", 1000);
   }else{
      alert("enter a valid to do");
   o.innerHTML ="Au revoir";
   gPop.style.display="none";
   popup.style.visibility ="hidden";

   }
};


/* Function Creation dynamique du POPUP */

function create(){
   const div = document.createElement('div');
   div.classList.add('popup-close');
   div.setAttribute('id','closing');
   const text = document.createTextNode('X');
   div.appendChild(text);
   popup.append(div);
   const div2 = document.createElement('div');
   div2.classList.add('popup-content');
   const html = `
      <span id="sp">1</span>
      <h2>Fill the Input</h2>
      <p>Don't forget</p>
      <a href="#">Return</a>`;
   div2.innerHTML=html;
   popup.append(div2); 
   
}

/* Function generation dynamique des TODOS */

const generateTemp = todo =>{
   const html = `
   <li class="list-group-item d-flex justify-content-between align-items-center">
             <span>${todo}</span>
             <i class="fas fa-trash delete"></i>
            </li>
   `;
   myTodo.push(todo);
   list.innerHTML += html;
};


/* function pour controller l'evenement et pour ne pas etre repeté à chaque clique */
function onetime(node, type, callback) {

	node.addEventListener(type, function(e) {
	
		e.target.removeEventListener(e.type, arguments.callee);

		return callback(e);
	});
}

onetime(gPop,'click',handler);

function handler(e){      
   if(e.target.id='closing'){
      
      gPop.style.display ="none";
   }
}

/***************Fin reusable function********************/




/************* Adding TO DO**************/

//Eventlistner Add TODOS
btn.addEventListener('click',e =>{
   e.preventDefault();
   const adding = addForm.add.value;
   let num = 3;
   if (document.querySelector('.popup-content') == null) {
       create();
   }
   if (adding == '') {
       start(num);
       popup.style.visibility = 'visible'

   }else{
      generateTemp(adding);
   }
});

/************* Fin Adding TO DO**************/



/*************Deleting  TO DO**************/
list.addEventListener('click',e =>{
   list.removeChild(e.target.parentNode);
   const index = myTodo.indexOf(e.target.parentNode.querySelector('span').innerText);
   if (index > -1) {
      myTodo.splice(index, 1);
   }
});

/************* Fin Deleting  TO DO**************/




/************************************* SEARCH ITEM********************************************/
//filtering Todos :

//we will apply a class to the Todos that dont match and the that class will

// have keyup event 



const retrieve = (term) =>{

   //function pour faire un filtre i

   const result = myTodo.filter(word => word.includes(term));
   list.innerHTML = "";
   result.forEach(element => {
      list.innerHTML += `
      <li class="list-group-item d-flex justify-content-between align-items-center">
      <span>${element}</span>
      <i class="fas fa-trash delete"></i>
      </li>
      `;
   });
};  


//evenement de recherche des mots clés 
search.addEventListener('keyup', (e) =>{
   retrieve(e.target.value);

})

/*************************************Fin SEARCH ITEM********************************************/