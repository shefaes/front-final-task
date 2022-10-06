$(function(){
  $('.language').language();
});

$(document).ready(function() {
  $(".minimalist-vertical-menu").on("mouseleave", function() {
    $(".minimalist-tab-content").removeClass("active");
    $(".minimalist-tab-menu>.list-group>li").removeClass("active");
  });
                                                  
  $("li").on( "mouseleave", function() {
     if(!$(".minimalist-tab-content").hasClass("active")) {
      $(this).removeClass("active");
    }
  }).on( "mouseenter", function(e) {
    e.preventDefault();
    $(this)
      .siblings("li.active")
      .removeClass("active");
    $(this).addClass("active");
    var index = $(this).index();
    $(".minimalist-tab-content")
      .removeClass("active")
    $(".minimalist-tab>.minimalist-tab-content")
      .eq(index)
      .addClass("active");
  });
});


$('.slider').slick({
  dots:false,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  autoplay:true,
  
  autoplaySpeed:1000,
  
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
       
        dots:false,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        
      }
    }
   
  ]
});

$('.corusel-category').slick({
  dots:false,
  infinite: true,
  speed: 300,
  slidesToShow: 7,
  autoplay:true,
  
  autoplaySpeed:1000,
  
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
       
        dots:false,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        
      }
    }
   
  ]
});

var timer;

var compareDate = new Date();
compareDate.setDate(compareDate.getDate() + 7); //just for this demo today + 7 days

timer = setInterval(function() {
timeBetweenDates(compareDate);
}, 1000);

function timeBetweenDates(toDate) {
var dateEntered = toDate;
var now = new Date();
var difference = dateEntered.getTime() - now.getTime();

if (difference <= 0) {

  // Timer done
  clearInterval(timer);

} else {
  
  var seconds = Math.floor(difference / 1000);
  var minutes = Math.floor(seconds / 60);
  var hours = Math.floor(minutes / 60);
  var days = Math.floor(hours / 24);

  hours %= 24;
  minutes %= 60;
  seconds %= 60;

  $("#days").text(days);
  $("#hours").text(hours);
  $("#minutes").text(minutes);
  $("#seconds").text(seconds);
}
}

