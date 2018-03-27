
  $(document).ready(function() {
    $('.fadebox').css('opacity', 0);
    $('.fadebox').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
        if (isInView) {
            $(this).stop().animate({opacity: 1}, 1000);
        }
        else {
            $(this).stop().animate({opacity: 0}, 1000);
        }
    });

    $('.fadebox2').css('opacity', 0);
    $('.fadebox2').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
        if (isInView) {
            $(this).stop().animate({opacity: 1}, 2000);
        }
        else {
            $(this).stop().animate({opacity: 0}, 1000);
        }
    });

    $('.fadebox3').css('opacity', 0);
    $('.fadebox3').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
        if (isInView) {
            $(this).stop().animate({opacity: 1}, 3000);
        }
        else {
            $(this).stop().animate({opacity: 0}, 1000);
        }
    });

    });