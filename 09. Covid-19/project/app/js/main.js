class Slider{
  constructor(){
    this.progress = progress;
  }

  init(){
    this.progress = 1;
  }

  moveSlide( n ){
    showSlide( progress += n );
  }

  currentSlide( n ){
    showSlide( progress = n );
  }

  showSlide(){
    var i;
    var slides = document.getElementsByClassName("mySlider");
    var bar = document.getElementsByClassName("bar");

  }
}