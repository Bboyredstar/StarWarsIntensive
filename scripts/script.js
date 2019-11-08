/*
    Arrows for navigation in slider don't display. 
    For display with our styles delete commit in 6 row.
*/ 
$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    navClass:['slider__nav--left' , 'slider__nav--right'],
    margin:10,
    loop:true,
    responsiveClass:true,
    responsive:{
        0:{
            
            items:1,
            nav:true,
            autowidth:false
        },
        600:{
            items:2,
            nav:false,
            autowidth:false
        },
        900:{
            items:2,
            nav:false,
            autowidth:false
        },
        1200:{
            items:4,
            nav:true,
            autowidth:false
        }
    }
})
});