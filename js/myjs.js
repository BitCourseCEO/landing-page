$('.responsive').slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 6,
  slidesToScroll: 4,
  prevArrow: '<button type="button" class="hr-slick-prev" ><img src="img/arrow.svg"></button>',
  nextArrow: '<button type="button" class="hr-slick-next"><img src="img/arrow.svg"></button>',
  responsive: [
    {
      breakpoint: 1775,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: false
      }
    },
    {
      breakpoint: 1573,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: false
      }
    },
    {
      breakpoint: 1387,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: false
      }
    },
    {
      breakpoint: 958,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: false
      }
    }
    ,
    {
      breakpoint: 630,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


$('.open-popup-link').magnificPopup({
  type:'inline',
   removalDelay: 300,
   midClick: true,
  mainClass: 'mfp-fade'
});
$(document).on('click', '.popup-modal-dismiss', function (e) {
          e.preventDefault();
          $.magnificPopup.close();
        });

 $(document).ready(function(){
    $("#menu1").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
     $("#menu2").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
      $("#menu3").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});

 var slideout = new Slideout({
  'panel': document.getElementById('panel'),
  'menu': document.getElementById('menu'),
  'side': 'right'
});

 document.querySelector('.toggle-button').addEventListener('click', function() {
        slideout.toggle();
      });

 $(document).ready(function(){
    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});