$(function() {
  if ($(window).width() < 768) {
    $('#app-side').canvas('hide')
  } else {
    $('#app-side').canvas('show')
  }

  $('.side-nav .metismenu').metisMenu();
});
