$(document).ready(function(){
    $(".owl-carousel").owlCarousel(
        {
            items: 1,
            nav:true,
            navText: ["<div class='nav-button owl-prev'>‹</div>", "<div class='nav-button owl-next'>›</div>"],
            autoplay:false,
            autoplaySpeed:1000, 
            loop:true,
        }
    );
  });

  $(document).ready(function(){
    $(".owl-carousel slide-two").owlCarousel(
        {
            items: 3,
            nav:true,
            navText: ["<div class='nav-button owl-prev'>‹</div>", "<div class='nav-button owl-next'>›</div>"],
            autoplay:true,
            autoplaySpeed:1000, 
            loop:true,
        }
    );
  });

  $(document).ready(function(){
    $(".owl-carousel slide-three").owlCarousel(
        {
            items: 1,
            nav:true,
            navText: ["<div class='nav-button owl-prev'>‹</div>", "<div class='nav-button owl-next'>›</div>"],
            autoplay:true,
            autoplaySpeed:1000, 
            loop:true,
        }
    );
  });

  $(document).ready(function(){
    $(".owl-carousel slide-four").owlCarousel(
        {
            items: 1,
            nav:true,
            navText: ["<div class='nav-button owl-prev'>‹</div>", "<div class='nav-button owl-next'>›</div>"],
            autoplay:true,
            autoplaySpeed:1000, 
            loop:true,
        }
    );
  });