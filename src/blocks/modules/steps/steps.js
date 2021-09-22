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
})