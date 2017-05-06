

$(window).scroll(function(){
  if( $(window) .width() > 769){
   var wScroll = $(this).scrollTop();

   $('.intro').css({
     'transform' : 'translate(0px, ' + wScroll/2 +'%)'
   });

   var parallax1 = (($(".parallax1").offset().top - wScroll) - (($( window ).height()/2 )- 45)) *-1
   $('.parallax1').css({
     'transform' : 'translate(0px, ' + parallax1/2 +'%)'
   });

   var parallax2 = (($(".parallax2").offset().top - wScroll) - (($( window ).height()/2 )- 45)) *-1
   $('.parallax2').css({
     'transform' : 'translate(0px, ' + parallax2/2 +'%)'
   });

 } else {
   $('.intro').css({
     'transform' : 'translate(0px, 0%)'
   });

   $('.parallax1').css({
     'transform' : 'translate(0px, 0%)'
   });
   $('.parallax2').css({
     'transform' : 'translate(0px, 0%)'
   });

 }

});
