$(window).scroll(function() {

  var header = $('header');
  var scroll = $(window).scrollTop();

  if (scroll >= 32) {
    header.addClass('fixed');
  } else {
    header.removeClass('fixed');
  }
});