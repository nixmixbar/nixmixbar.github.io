/*!
 * Static Website Starter Kit
 * https://github.com/kriasoft/static-site-starter
 */

(function () {
    'use strict';

    var navbar = $('.navbar').hide().removeClass('hide');
    var menu = $('.nav', navbar);

    // https://github.com/alvarotrigo/fullPage.js/
    $('#fullpage').fullpage({
        anchors: ['#home', '#about', '#menu', '#photos', '#contact', '#store'],
        css3: true,
        afterLoad: function (anchorLink, index) {
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
            // Hide menu on the home screen
            if (index = 1 && nextIndex == 2) {
                navbar.fadeIn('slow');
            } else if (index = 2 && nextIndex == 1) {
                navbar.fadeOut('slow');
            }
        }
    });
})();