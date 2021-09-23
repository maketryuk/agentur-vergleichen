$(function () {
  $('.btn-next').click(function (e) {
    e.preventDefault()
    $(this).parent().parent().addClass('hidden');
    $(this).parent().parent().removeClass('show');
    $(this).parent().parent().next('.container').addClass('show');
  });

  $('.step-1-btn').click(function () {
    if (step1(false)) {
      $(this).parent().parent().addClass('hidden');
      $(this).parent().parent().removeClass('show');
      $(this).parent().parent().next('.container').addClass('show');
    } else {
      $(this).parent().parent().removeClass('hidden');
      $(this).parent().parent().addClass('show');
      $(this).parent().parent().next('.container').removeClass('show');
    }
  })

  $('.step-3-btn').click(function () {
    if (step3(false)) {
      $(this).parent().parent().addClass('hidden');
      $(this).parent().parent().removeClass('show');
      $(this).parent().parent().next('.container').addClass('show');
    } else {
      $(this).parent().parent().removeClass('hidden');
      $(this).parent().parent().addClass('show');
      $(this).parent().parent().next('.container').removeClass('show');
    }
  })

  $('.step-4-btn').click(function () {
    if (step4(false)) {
      $(this).parent().parent().addClass('hidden');
      $(this).parent().parent().removeClass('show');
      $(this).parent().parent().next('.container').addClass('show');
    } else {
      $(this).parent().parent().removeClass('hidden');
      $(this).parent().parent().addClass('show');
      $(this).parent().parent().next('.container').removeClass('show');
    }
  })

  $('.step-5-btn').click(function () {
    if (step5(false)) {
      $(this).parent().parent().addClass('hidden');
      $(this).parent().parent().removeClass('show');
      $(this).parent().parent().next('.container').addClass('show');
    } else {
      $(this).parent().parent().removeClass('hidden');
      $(this).parent().parent().addClass('show');
      $(this).parent().parent().next('.container').removeClass('show');
    }
  })

  $('.step-6-btn').click(function () {
    if (step6(false)) {
      $(this).parent().parent().addClass('hidden');
      $(this).parent().parent().removeClass('show');
      $(this).parent().parent().next('.container').addClass('show');
    } else {
      $(this).parent().parent().removeClass('hidden');
      $(this).parent().parent().addClass('show');
      $(this).parent().parent().next('.container').removeClass('show');
    }
  })

  $('.step-7-btn').click(function () {
    if (step7(false)) {
      $(this).parent().parent().addClass('hidden');
      $(this).parent().parent().removeClass('show');
      $(this).parent().parent().next('.container').addClass('show');
    } else {
      $(this).parent().parent().removeClass('hidden');
      $(this).parent().parent().addClass('show');
      $(this).parent().parent().next('.container').removeClass('show');
    }
  })

  function step1() {
    var radios = document.getElementsByName('step-1')

    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
        return true;
      }
    };
    return false;
  };
  function step3() {
    var radios = document.getElementsByName('step-3')

    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
        return true;
      }
    };
    return false;
  };
  function step4() {
    var radios = document.getElementsByName('step-4')

    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
        return true;
      }
    };
    return false;
  };
  function step5() {
    var radios = document.getElementsByName('step-5')

    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
        return true;
      }
    };
    return false;
  };
  function step6() {
    var radios = document.getElementsByName('step-6')

    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
        return true;
      }
    };
    return false;
  };
  function step7() {
    var radios = document.getElementsByName('step-7')

    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
        return true;
      }
    };
    return false;
  };
  
  $('.btn-prev').click(function (e) {
    e.preventDefault()
    $(this).parent().parent().addClass('hidden');
    $(this).parent().parent().removeClass('show');
    $(this).parent().parent().prev('.container').addClass('show');
  });

  $(".scroll-to").click(function (e){
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $(".steps").offset().top
    }, 800);
  });

  $('.btn-next-validate').click(function() {
    if($('.input-validate').length && $('.input-validate').val().length) {
      $('.input-validate').removeClass('not-validate')
      $(this).parent().parent().addClass('hidden');
      $(this).parent().parent().removeClass('show');
      $(this).parent().parent().next('.container').addClass('show');
    } else {
      $('.input-validate').addClass('not-validate')
      $(this).parent().parent().removeClass('hidden');
      $(this).parent().parent().addClass('show');
      $(this).parent().parent().next('.container').removeClass('show');
    }
  });

  $('.steps form').submit(function() {
    $('.form-send').text('Form was submitted').addClass('submitted');
    return false;
  });
})