/*jslint browser: true*/
/*global $, jQuery*/
(function($) {
    "use strict";
    $(function () {
        $(window).scroll(function () {  //Fonction pour déscendre la page
            if ($(this).scrollTop() > 200) {  // A 200pixels du haut de page
                $('#scrollUp').css('right', '10px');  // Replace l'image à 10pixels à droite
            } else {
                $('#scrollUp').removeAttr('style'); // Supprime les attributs CSS affectés par javascript
            }
        });
    });

    $("#scrollUp").click(function () {
        $("html, body").animate({scrollTop: 0}, "slow");
    });

    $(document).ready(function () {
        $('a[href^="#"]').on('click', function (evt) {
            evt.preventDefault();
            var target = $(this).attr('href');
            $('html, body')
                .stop()
                .animate({scrollTop: $(target).offset().top -70}, 1000);
        });
    });
})(jQuery);
