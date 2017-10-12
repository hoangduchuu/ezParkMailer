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
    // event.preventDefault();
    var formData = $(contactForm).serialize();
    var email = $("#email").val();
    var subject = $('#subject').val();
    var note = $('#note').val();
    var buttonSubmit = $(contactForm).find(".btn-send");

    if (validateEmail(email)) {
      $(buttonSubmit).prop('disabled', true);
      $(buttonSubmit).addClass("loading");
      $('#myModal').modal('show');

      var data = {
    	    "fromAddress": email,
    	    "toAddress": "support@ezpark.vn",
    	    "subject": subject,
    	    "content": note
    	};

      debugger;

      $.ajax({
        type: 'POST',
        url: 'http://mail.zoho.com/api/accounts/3317580000000008001/messages',
        data: data,
        dataType: 'application/json',
        beforeSend: function (xhr) {
          xhr.setRequestHeader('Authorization', 'Zoho-authtoken 7f7dd8c696d5a35407caca08c4e398f5')
        },
        success: function (rps) {
          debugger;
        }

      })

      $('#myModal').on('hidden.bs.modal', function () {
        $(buttonSubmit).prop('disabled', false);
        $(buttonSubmit).removeClass("loading");
        $('#name').val('');
        $('#email').val('');
        $('#subject').val('');
        $('#note').val('');
      });

    }else {
      console.log("Email is not valid");
      $(buttonSubmit).prop('disabled', false);
      $(buttonSubmit).removeClass("loading");
    }
  }

  function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

})();
