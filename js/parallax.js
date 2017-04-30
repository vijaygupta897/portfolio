$(window).scroll(function(){

   var wScroll = $(this).scrollTop();

   $('.intro').css({
     'transform' : 'translate(0px, ' + wScroll/3 +'%)'
   });

});
