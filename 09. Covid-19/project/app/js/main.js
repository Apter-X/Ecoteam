var progress;

function init(){
  this.progress = 1;
}

function moveSlide( n ){
  showSlide( progress += n );
}

function currentSlide( n ){
  showSlide( progress = n );
}

function showSlide(){
  var i;
  var slides = document.getElementsByClassName("mySlider");
  var bar = document.getElementsByClassName("bar");

}