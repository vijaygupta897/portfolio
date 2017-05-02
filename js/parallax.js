$(window).scroll(function(){
  if( $(window) .width() > 769){
   var wScroll = $(this).scrollTop();

   $('.intro').css({
     'transform' : 'translate(0px, ' + wScroll/2 +'%)'
   });
 }

});
