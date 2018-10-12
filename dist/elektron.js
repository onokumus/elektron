/*!
* elektron - v0.5.3
* An Admin Layout
* https://github.com/onokumus/elektron#readme
*
* Made by Osman Nuri Okumus <onokumus@gmail.com> (https://github.com/onokumus)
* Under MIT License
*/
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (factory());
}(this, (function () { 'use strict';

  /* global OnoffCanvas, MetisMenu */

  /**
   * Returns a function, that, as long as it continues to be invoked, will not
   * be triggered. The function will be called after it stops being called for
   * N milliseconds. If `immediate` is passed, trigger the function on the
   * leading edge, instead of the trailing.
   * The function also has a property 'clear' that is a function which will clear
   * the timer to prevent previously scheduled executions.
   *
   * @source underscore.js
   * @see http://unscriptable.com/2009/03/20/debouncing-javascript-methods/
   * @param {Function} func to wrap
   * @param {Number} wait in ms (`250`)
   * @param {Boolean} immediate to execute at the beginning (`false`)
   */

  /* eslint-disable no-unused-vars */
  function debounce(func, wait, immediate) {
    var timeout, args, context, timestamp, result;

    if (wait === null) {
      wait = 250;
    }

    function later() {
      var last = Date.now() - timestamp;

      if (last < wait && last >= 0) {
        timeout = setTimeout(later, wait - last);
      } else {
        timeout = null;

        if (!immediate) {
          result = func.apply(context, args);
          context = args = null;
        }
      }
    }

    return function () {
      context = this;
      args = arguments;
      timestamp = Date.now();
      var callNow = immediate && !timeout;
      if (!timeout) timeout = setTimeout(later, wait);

      if (callNow) {
        result = func.apply(context, args);
        context = args = null;
      }

      return result;
    };
  }

  var elkSide = document.querySelector('.elk-side');

  if (elkSide !== null) {
    /* eslint-disable-next-line no-inner-declarations */
    var showHideElkSide = function showHideElkSide() {
      if (window.innerWidth < 993) {
        elkSideNavOnoffCanvas.hide();
      } else {
        elkSideNavOnoffCanvas.show();
      }
    };

    /* eslint-disable-next-line no-inner-declarations */
    var changeElkSide = function changeElkSide() {
      var className = "is-" + esi.getAttribute('name');

      if (esi.checked) {
        elkSide.classList.add(className);
      } else {
        elkSide.classList.remove(className);
      }
    };

    var elkSideNavOnoffCanvas = new OnoffCanvas(elkSide, {
      'hideByEsc': window.innerWidth < 993,
      'createDrawer': window.innerWidth < 993
    });
    showHideElkSide();
    window.addEventListener('resize', debounce(showHideElkSide, 250));
    var esi = document.querySelector('.elk-switch-input');

    if (esi !== null) {
      changeElkSide();
      esi.addEventListener('change', changeElkSide);
    }

    var elkSideMM = document.querySelector('.elk-side-nav .metismenu');

    if (elkSideMM !== null) {
      new MetisMenu(elkSideMM);
    }
  }

  var elkTopNav = document.querySelector('.elk-top-nav');
  var elkTopNavCanvas;

  if (elkTopNav !== null) {
    /* eslint-disable-next-line no-inner-declarations */
    var showHideElkTopNav = function showHideElkTopNav() {
      if (window.innerWidth < 993) {
        elkTopNavCanvas.hide();
      } else {
        elkTopNavCanvas.show();
      }
    };

    elkTopNavCanvas = new OnoffCanvas('.elk-top-nav', {
      'hideByEsc': false,
      'createDrawer': false
    });
    showHideElkTopNav();
    window.addEventListener('resize', debounce(showHideElkTopNav, 250));
    new MetisMenu(elkTopNav.querySelector('.metismenu'));
  }

})));
//# sourceMappingURL=elektron.js.map
