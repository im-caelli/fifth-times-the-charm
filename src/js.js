$(document).ready(function(){

  // Back to Top
  $('#back-to-top').hide();

  $(window).scroll(function() {
		if($(this).scrollTop() > 600) {
			$('#back-to-top').fadeIn();
		} else {
			$('#back-to-top').fadeOut();
		}
	});

	$('#back-to-top').click(function() {
		$('body,html').animate({scrollTop:0},800);
  });

  // Trigger Animation

  ;(function($, win) {
    $.fn.inViewport = function(cb) {
       return this.each(function(i,el){
         function visPx(){
           var H = $(this).height(),
               r = el.getBoundingClientRect(), t=r.top, b=r.bottom;
           return cb.call(el, Math.max(0, t>0? H-t : (b<H?b:H)));  
         } visPx();
         $(win).on("resize scroll", visPx);
       });
    };
  }(jQuery, window));
  
  
  
  $(".frame").inViewport(function(px){
      if(px) {
        $(this).addClass("play");
      } else {
        $(this).removeClass("play");
      }
  });

  // Modal

  // $('.modal-open').css('padding-right', '0');

  // $('.modal').on('shown.bs.modal', function (e) {
  //   var hasScrollbar = window.innerWidth > document.documentElement.clientWidth;

  //   if (hasScrollbar) {
  //     $('.modal-open').css('padding-right', '0px');
  //     console.log('true');
  //   } else {
  //     $('.modal-open').css('padding-right', '0px');
  //     console.log('false');
  //   }

  // });


   // Dark Mode
   $('.dm-btn').on('click', function() {
     $('body').toggleClass('dark-mode');

     if ($('body').hasClass('dark-mode')) {
      $('.dm-btn .fas').removeClass('fa-moon').addClass('fa-sun');
     } else {
      $('.dm-btn .fas').removeClass('fa-sun').addClass('fa-moon');
     }
   })
   

});
