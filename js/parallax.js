$(window).scroll(function(){
  if( $(window) .width() > 769){
   var wScroll = $(this).scrollTop();

   $('.intro').css({
     'transform' : 'translate(0px, ' + wScroll/2 +'%)'
   });

   $('.parallax1').css({
     'transform' : 'translate(0px, ' + (wScroll-980)/2 +'%)'
   });
 } else {
   $('.intro').css({
     'transform' : 'translate(0px, 0%)'
   });

   $('.parallax1').css({
     'transform' : 'translate(0px, 0%)'
   });
 }

});
