/*---Animate---*/ 
jQuery(document).ready(function($) {


    if (jQuery.browser.mobile === false) {

           // Pluses
         $('#pluses h2').css('opacity', 0).one('inview', function(isInView) {
            if (isInView) {
              $(this).addClass('animated fadeInUp delay1');
            }
        });

         $('#pluses p').css('opacity', 0).one('inview', function(event, isInView) {
            if (isInView) {$(this).addClass('animated fadeInDown delay2');}
        });

         //Scrinshots
          $('#scrinshots h2').css('opacity', 0).one('inview', function(event, isInView) {
            if (isInView) {$(this).addClass('animated fadeInUp delay3');}
        });

          $('#scrinshots .pull-left').css('opacity', 0).one('inview', function(event, isInView) {
            if (isInView) {$(this).addClass('animated fadeInLeft delay3');}
        });

          $('#scrinshots .media-body h3').css('opacity', 0).one('inview', function(event, isInView) {
            if (isInView) {$(this).addClass('animated fadeInDown delay3');}
        });

          $('#scrinshots .media-body p').css('opacity', 0).one('inview', function(event, isInView) {
            if (isInView) {$(this).addClass('animated fadeInUp delay3');}
        });

        // Buy
        $('#buy h2').css('opacity', 0).one('inview', function(event, isInView) {
        	if (isInView) {$(this).addClass('animated fadeInDown delay1');}
        });

        $('#buy .standart').css('opacity', 0).one('inview', function(event, isInView) {
        	if (isInView) {$(this).addClass('animated fadeInDown delay2');}
        });

        $('#buy .premium').css('opacity', 0).one('inview', function(event, isInView) {
        	if (isInView) {$(this).addClass('animated fadeInUp delay2');}
        });

        $('#buy .lux').css('opacity', 0).one('inview', function(event, isInView) {
        	if (isInView) {$(this).addClass('animated fadeInDown delay3');}
        });

        // // Subscribe
           $('#subs_btn').css('opacity', 0).one('inview', function(event, isInView) {
        	if (isInView) {$(this).addClass('animated fadeInRight');}
        });
    }    

});