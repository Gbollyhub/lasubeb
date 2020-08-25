
  $(document).ready(function(){
    $(".home-news-list").owlCarousel({
      margin: 10,
      nav: false,
      loop: true,
      autoplay: true,
      autoplayTimeout: 2000,
      autoplayHoverPause: true,
      //animateIn:true,
      navText: ["<div class='nav-btn prev-slide'></div>", "<div class='nav-btn next-slide'></div>"],
      responsive: {
        0: {
          items: 2
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

    $('.board-others-list').owlCarousel({
      margin: 5,
      nav: true,
      loop: true,
      autoplay: false,
      autoplayTimeout: 2000,
      autoplayHoverPause: true,
      //animateIn:true,
      navText: ["<div class='nav-btn prev-slide'></div>", "<div class='nav-btn next-slide'></div>"],
      responsive: {
        0: {
          items: 5
        },
        600: {
          items: 5
        },
        1000: {
          items: 5
        },
        1500: {
          items: 5
        }
      }
    });

  });