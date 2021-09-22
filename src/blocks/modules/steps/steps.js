$(function () {
  $('.btn-next').click(function () {
    $(this).parent().parent().addClass('hidden');
    $(this).parent().parent().removeClass('show');
    $(this).parent().parent().next('.container').addClass('show');
  });

  $('.btn-prev').click(function () {
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
})