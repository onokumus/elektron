/*!
* elektron - v0.4.0
* An Admin Layout
* https://github.com/onokumus/elektron#readme
*
* Made by Osman Nuri Okumus <onokumus@gmail.com> (https://github.com/onokumus)
* Under MIT License
*/
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('jquery')) :
  typeof define === 'function' && define.amd ? define(['jquery'], factory) :
  (factory(global.jQuery));
}(this, (function ($) { 'use strict';

  $ = $ && $.hasOwnProperty('default') ? $['default'] : $;

  /* eslint-disable no-undef */
  var elkSide = $('.elk-side');

  if ($(window).width() < 992) {
    elkSide.onoffcanvas('hide');
    $('.elk-top-nav').onoffcanvas('hide');
  } else {
    elkSide.onoffcanvas('show');
    $('.elk-top-nav').onoffcanvas('show');
  }

  $('.elk-side-nav .metismenu').metisMenu();
  $('.elk-top-nav .metismenu').metisMenu();
  $('#elk-side-hoverable-toggler').on('click', function () {
    $('.elk-side').toggleClass('is-hoverable');
    $(this).children('i.fa').toggleClass('fa-angle-right fa-angle-left');
  });
  $('.elk-side-switch [name=mini]').change(function () {
    if (this.checked) {
      elkSide.addClass('is-mini');
    } else {
      elkSide.removeClass('is-mini');
    }
  });
  $('.elk-side-switch [name=hoverable]').change(function () {
    if (this.checked) {
      elkSide.addClass('is-hoverable');
    } else {
      elkSide.removeClass('is-hoverable');
    }
  });

})));
//# sourceMappingURL=elektron.js.map
