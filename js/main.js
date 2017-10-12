(function () {
  'use strict';

  $('a[href*=#]:not([href=#])').on('click', hyperlinkClickHandler);

  // $('body').scrollspy({
  //     target: '#scrollspy-course',
  //     offset: 100
  // });

  function hyperlinkClickHandler() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if ($(window).width() > 768) {
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top - 80
                }, 1000);
                return false;
            }
        } else {
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top - 80
                }, 1000);
                return false;
            }
        }
    }
  }

  $('#intro').find(".item-wrapper").slick({
    dots: true,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: '15px',
    arrows: true,
    appendArrows: $('#arrow-control'),
    prevArrow: '<i class="fa fa-chevron-left"></i>',
    nextArrow: '<i class="fa fa-chevron-right"></i>',
    autoplay: true,
    autoplaySpeed: 5000//,
  });

  var contactForm = $('#contact_form');
  $(contactForm).submit(formSubmitHandler);

  function formSubmitHandler(event) {
    event.preventDefault();
  }

  function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

})();
