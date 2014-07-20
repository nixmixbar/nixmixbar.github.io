/*!
 * Static Website Starter Kit
 * https://github.com/kriasoft/static-site-starter
 */

(function () {
    'use strict';

    var navbar = $('.navbar').hide().removeClass('hide');
    var menu = $('.nav', navbar);
    var scrollingSpeed = 700;

    // https://github.com/alvarotrigo/fullPage.js/
    $('#fullpage').fullpage({
        anchors: ['home', 'about', 'menu', 'photos', 'contact', 'store'],
        css3: true,
        scrollingSpeed: scrollingSpeed,
        afterLoad: function (anchorLink, index) {
            // console.log('afterLoad(' + anchorLink + ', ' + index + ')');

            // Highlight an active menu item
            $('li', menu).map(function (i) {
                if (i == (index - 2)) {
                    $(this).addClass('active');
                } else {
                    $(this).removeClass('active');
                }
            });
        },
        onLeave: function (index, nextIndex, direction) {
            // console.log('onLeave(' + index + ', ' + nextIndex + ', ' + direction + ')');

            // Hide menu on the home screen
            if (index = 1 && nextIndex == 2) {
                navbar.fadeIn('slow');
                navbar.css({borderBottomColor: '#6d0000'});
            } else if (index = 2 && nextIndex == 1) {
                navbar.fadeOut('slow');
                navbar.css({borderBottomColor: '#6d0000'});
            } else {
                navbar.show();
                if (nextIndex == 5) {
                    navbar.animate({borderBottomColor: '#fff4e8'}, scrollingSpeed);
                } else {
                    navbar.animate({borderBottomColor: '#6d0000'}, scrollingSpeed);
                }
            }
        }
    });
})();