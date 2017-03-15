/**
 * Elektron - An Admin Toolkit
 * @version 0.2.0
 * @license MIT
 * @link https://github.com/onokumus/elektron#readme
 */
'use strict';

$(function () {
  if ($(window).width() < 768) {
    $('#app-side').onoffcanvas('hide');
  } else {
    $('#app-side').onoffcanvas('show');
  }

  $('.side-nav .metismenu').metisMenu({ toggle: true });
});