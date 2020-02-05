// Initialize Swiper
var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 60,
      stretch: 0,
      depth: 100,
      modifier: 5,
      slideShadows: true,
    },
    pagination: {
      el: '.swiper-pagination',
    },
  });

  $(function()
{
    $(".navbar-collapse ul li a").on("click touch",function(){
     $(".navbar-toggler").click();
    });
});
