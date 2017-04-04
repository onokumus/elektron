/* eslint-disable no-undef */
$(() => {
  if ($(window).width() < 992) {
    $('#app-side').onoffcanvas('hide');
    $('#top-nav').onoffcanvas('hide');
  } else {
    $('#app-side').onoffcanvas('show');
    $('#top-nav').onoffcanvas('show');
  }

  $('.side-nav .metismenu').metisMenu({ toggle: true });

  $('#app-side-hoverable-toggler').on('click', () => {
    $('.app-side').toggleClass('is-hoverable');
    $(this).children('i.fa').toggleClass('fa-angle-right fa-angle-left');
  });
});
