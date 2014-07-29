/*!
 * Static Website Starter Kit
 * https://github.com/kriasoft/static-site-starter
 */

(function () {
    'use strict';

    var navbar = $('.navbar').hide().removeClass('hide');
    var menu = $('.nav', navbar);
    var scrollingSpeed = 700;

    $('.page-home').click(function () {
        window.location = '/#about';
    });

    var navbarBrand = $('.navbar-brand', navbar);
    var logoImageUrl = $('img', navbarBrand).attr('src');

    // Replace <img src="img/logo.svg" /> with <svg />
    navbarBrand.load(logoImageUrl);

    // https://github.com/alvarotrigo/fullPage.js/
    $('#fullpage').fullpage({
        anchors: ['home', 'about', 'menu', 'photos', 'contact', 'store'],
        css3: true,
        scrollingSpeed: scrollingSpeed,
        onLeave: function (index, nextIndex, direction) {
            //console.log('onLeave(index: ' + index + ', nextIndex: ' + nextIndex + ', direction: ' + direction + ')');
            navbar.removeClass('navbar-light');

            // Highlight an active menu item
            $('li', menu).map(function (i) {
                if (i == (nextIndex - 2)) {
                    $(this).addClass('active');
                } else {
                    $(this).removeClass('active');
                }
            });

            if (index = 1 && nextIndex == 2) {
                // Fade in navigation bar on the About screen
                navbar.fadeIn('slow');
            } else if (index = 2 && nextIndex == 1) {
                // Fade out navigation bar on the home screen
                navbar.fadeOut('slow');
            } else {
                navbar.show();

                // Invert navigation bar on the Photos and Contact pages
                if (nextIndex == 4 || nextIndex == 5) {
                    navbar.addClass('navbar-light');
                }
            }
        }
    });
})();
