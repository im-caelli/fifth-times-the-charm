$(document).ready(function(){

  // Back to Top & Waypoints
  $('#back-to-top').hide();
  // $('#waypoints').hide();

  $(window).scroll(function() {
		if($(this).scrollTop() > 600) {
      $('#back-to-top').fadeIn();
      $('#waypoints').addClass('make-visible');
		} else {
      $('#back-to-top').fadeOut();
      $('#waypoints').removeClass('make-visible');
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

  $('.frame').inViewport(function(px){
      if(px) {
        $(this).addClass('play');
      } else {
        $(this).removeClass('play');
      }
  });

  $('.scene').each(function( index ) {
    let replay = $(this).find('.replay');
    let frame = $(this).find('.frame');

    replay.on('click', function(){
      frame.removeClass('play');
      setTimeout(function(){ 
        frame.addClass('play');
      }, 500);
    });
  });

  // Accessibility Text
  $('.msg-content').prepend('<span class="sr-only">Start of text.</span>');
  $('.msg-content').append('<span class="sr-only">End of text.</span>');
  $('.msg-receive').prepend('<span class="sr-only">Asami:</span>');
  $('.msg-send').prepend('<span class="sr-only">Korra:</span>');
  
  
  // Gallery 

  // $('.carousel').carousel('pause');


  // Modal
  
  // $('.modal-open').css('padding-right', '0');

  // $('.modal').on('show.bs.modal', function (e) {
  //   var hasScrollbar = window.innerWidth > document.documentElement.clientWidth;

  //   if (hasScrollbar) {
  //     $('.modal-open').css('padding-right', '0px');
  //     console.log('true');
  //   } else {
  //     $('.modal-open').css('padding-right', '15px');
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
