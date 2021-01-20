

$(document).ready(function(){
//owl caroousel
$(function(){
    $('#Grid').mixitup();
});
$('#owl1').owlCarousel({
  loop:true,
  margin:10,
  nav:false,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:2
      },
      1000:{
          items:2
      }
  }
});

$('#owl2').owlCarousel({
  loop:true,
  margin:60,
  nav:false,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:4
      },
      1000:{
          items:6
      }
  }
});
$('#owl3').owlCarousel({
  loop:true,
  margin:60,
  nav:false,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:1
      }
  }
});

    $(function() {
        $('[data-toggle="tooltip"]').tooltip({
          trigger: 'manual'
        }).tooltip('show');
      });
      
      $(window).scroll(function() {
        // if($( window ).scrollTop() > 10){   scroll down abit and get the action   
        $(".progress-bar").each(function() {
          each_bar_width = $(this).attr('aria-valuenow');
          $(this).width(each_bar_width + '%');
        });
      
        //  }  
      });

      //MIX IT UP
      $('.portfolio_img_show').mixItUp();
     // $('.portfolio_img_show').mixItUp();

      //Happy Clients
  });