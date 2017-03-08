$(function() {
  if ($(window).width() < 768) {
    $('#app-side').onoffcanvas('hide')
  } else {
    $('#app-side').onoffcanvas('show')
  }

  $('.side-nav .metismenu').metisMenu();
});
