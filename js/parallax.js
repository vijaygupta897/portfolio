$(window).scroll(function(){
  if( $(window) .width() > 770){
   var wScroll = $(this).scrollTop();

   $('.intro').css({
     'transform' : 'translate(0px, ' + wScroll/3 +'%)'
   });
 }

});
