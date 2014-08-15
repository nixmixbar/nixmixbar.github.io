/*!
 * Static Website Starter Kit
 * https://github.com/kriasoft/static-site-starter
 */

(function () {
    'use strict';

    var navbar = $('.navbar').hide().removeClass('hide');
    var designer = $('.designer').hide().removeClass('hide');
    var menu = $('.nav', navbar);
    var navMenu = $('.nav-menu');
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
        normalScrollElements: '.menu',
        verticalCentered: false,
        onLeave: function (index, nextIndex, direction) {
            //console.log('onLeave(index: ' + index + ', nextIndex: ' + nextIndex + ', direction: ' + direction + ')');
            navbar.removeClass('navbar-light');
            designer.removeClass('designer-light');

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
                designer.fadeIn('slow');
            } else if (index = 2 && nextIndex == 1) {
                // Fade out navigation bar on the home screen
                navbar.fadeOut('slow');
                designer.fadeOut('slow');
            } else {
                navbar.show();
                designer.show();

                // Invert navigation bar on the Contact pages
                if (nextIndex == 5) {
                    navbar.addClass('navbar-light');
                    designer.addClass('designer-light');
                }
            }
        },
        onSlideLeave: function(anchorLink, index, slideIndex, direction) {
            var nextSlideIndex = direction === 'right' ? slideIndex + 1 : (direction === 'left' ? slideIndex - 1 : slideIndex);
            //console.log('onLeave(anchorLink: ' + anchorLink + ', index: ' + index + ', slideIndex: ' + slideIndex + ', direction: ' + direction + ')');
            //console.log('nextSlideIndex: ' + nextSlideIndex);

            if (anchorLink === 'menu') {
                $('li', navMenu).removeClass('active');
                $($('li', navMenu)[nextSlideIndex]).addClass('active');
            }
        }
    });

    $('.menu').slimscroll({
        height: ($(window).height() - 355) + 'px'
    });
})();
