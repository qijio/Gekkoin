"use strict";
$(function () {
    $(function () {
      $('[data-toggle="tooltip"]').tooltip()
    })

    $('a[href*="#"]')// Select all links with hashes
    .not('[href="#"]')// Remove links that don't actually link to anything
    .not('[href="#0"]')
    .not('[data-toggle="collapse"]')
        .click(smoothScroll);
    
    
});


function smoothScroll(event) {
    // On-page links
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
        && location.hostname == this.hostname) {
        // Figure out element to scroll to
        let target = $(this.hash);
        target = target.length
            ? target
            : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top,
            }, 1000, function() {
                // Callback after animation
                // Must change focus!
                let $target = $(target);
                $target.focus();
                // Checking if the target was focused
                if ($target.is(':focus')) {
                    return false;
                } else {
                    // Adding tabindex for elements not focusable
                    $target.attr('tabindex', '-1');
                    $target.focus(); // Set focus again
                };
            });
        }
    }
}