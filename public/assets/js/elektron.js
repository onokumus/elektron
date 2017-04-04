/**
 * Elektron - An Admin Toolkit
 * @version 0.3.0
 * @license MIT
 * @link https://github.com/onokumus/elektron#readme
 */
'use strict';

/* eslint-disable no-undef */
$(function () {
  if ($(window).width() < 992) {
    $('#app-side').onoffcanvas('hide');
    $('#top-nav').onoffcanvas('hide');
  } else {
    $('#app-side').onoffcanvas('show');
    $('#top-nav').onoffcanvas('show');
  }

  $('.side-nav .metismenu').metisMenu({ toggle: true });

  $('#app-side-hoverable-toggler').on('click', function () {
    $('.app-side').toggleClass('is-hoverable');
    $(undefined).children('i.fa').toggleClass('fa-angle-right fa-angle-left');
  });
});