

$(window).scroll(function(){
  if( $(window) .width() > 769){
   var wScroll = $(this).scrollTop();
   var winHeight = $(window).height();

   //if(wScroll < winHeight){
     $('.intro').css({
       'transform' : 'translate(0px, ' + wScroll/3 +'%)'
     });
  //}

   var parallax1 = (($(".parallax1").offset().top - wScroll) - ((winHeight/2 )- 45)) *-1
   $('.parallax1').css({
     'transform' : 'translate(0px, ' + parallax1/3 +'%)'
   });
   //if ($(".parallax2").offset().top - wScroll <= winHeight ){
     var parallax2 = (($(".parallax2").offset().top - wScroll) - ((winHeight/2 )- 45)) *-1
     $('.parallax2').css({
       'transform' : 'translate(0px, ' + parallax2/3 +'%)'
     });
  //}

  var parallax3 = (($(".parallax3").offset().top - wScroll) - ((winHeight/2 )- 45)) *-1
  $('.parallax3').css({
    'transform' : 'translate(0px, ' + parallax3/3 +'%)'
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
   $('.parallax3').css({
     'transform' : 'translate(0px, 0%)'
   });

 }

});
