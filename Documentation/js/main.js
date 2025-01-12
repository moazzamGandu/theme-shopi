/*==============================
    popup js
==============================*/
$(window).on('load',function(){
    var popup = localStorage.getItem('popup_value');
    if(popup != 1){
        $('#news-letter-modal').modal('show');
    }

    /*==============================
        pre-loader js
    ==============================*/

    $('.preloader').delay(100).fadeOut('fast');
});

(function($) {
    "use strict";

    /*==========================================================================
        PrettyPhoto
    ==========================================================================*/    
    if( $(window).width() >= 768 ){
        $('a[rel^="prettyphoto"], .prettyphoto').prettyPhoto({
            show_title      : false,
            deeplinking     : false,
            social_tools    : false,
            default_width   : 853,
            default_height  : 480
        });
    }

    /*==============================
        tab js
    ==============================*/
    var $nav_active = $(".main-wrap");
    $nav_active.onePageNav({
        navItems: "a.link-title",
        currentClass: "active",
        changeHash: false,
        easing: "swing",
        filter: "",
        scrollSpeed: 100,
        scrollThreshold: 0.5,
        begin: false,
        end: false,
        scrollChange: false
    });

    /*==============================
        back-to-top js
    ==============================*/
    $(window).on("scroll",function() {
        if ($(this).scrollTop() > 600) {
            $('#top').addClass('show');
        } 
        else {
            $('#top').removeClass('show');
        }
    });

    $('.zoom').on('click', function() {
      $('.product_img_top').magnificPopup({
        delegate: 'a',
        type:'image',
        showCloseBtn: true,
        closeBtnInside: false,
        midClick: true,
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
          enabled: true,
          navigateByImgClick: true,
          preload: [0,1]
        }
      }).magnificPopup('open');
    });

    $('#top').on("click",function() {
        $("html, body").animate({ scrollTop: 0 }, 0);
        return false;
    });


})(jQuery);