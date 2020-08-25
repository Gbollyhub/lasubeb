
  $(document).ready(function(){
    $(".owl-carousel2").owlCarousel({
      margin: 10,
      nav: false,
      loop: true,
      autoplay: false,
      autoplayTimeout: 2000,
      autoplayHoverPause: true,
      //animateIn:true,
      navText: ["<div class='nav-btn prev-slide'></div>", "<div class='nav-btn next-slide'></div>"],
      responsive: {
        0: {
          items: 4
        },
        600: {
          items: 2
        },
        1000: {
          items: 2
        },
        1500: {
          items: 3
        }
      }
    });
  });