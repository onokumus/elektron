/*! elektron v0.7.0 | MIT License | https://github.com/onokumus/elektron */
(function (factory) {
  typeof define === 'function' && define.amd ? define(factory) :
  factory();
})((function () { 'use strict';

  /* global OnoffCanvas, MetisMenu */

  const debounce = (func, wait = 0) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(func, wait, ...args);
    };
  };

  const elkSide = document.querySelector('.elk-side');

  if (elkSide !== null) {
    const elkSideNavOnoffCanvas = new OnoffCanvas(elkSide, {
      hideByEsc: window.innerWidth < 993,
      createDrawer: window.innerWidth < 993,
    });
    /* eslint-disable-next-line no-inner-declarations */
    function showHideElkSide() {
      if (window.innerWidth < 993) {
        elkSideNavOnoffCanvas.hide();
      } else {
        elkSideNavOnoffCanvas.show();
      }
    }

    showHideElkSide();

    window.addEventListener('resize', debounce(showHideElkSide, 250));

    const esi = document.querySelector('.elk-switch-input');

    /* eslint-disable-next-line no-inner-declarations */
    function changeElkSide() {
      const className = `is-${esi.getAttribute('name')}`;
      if (esi.checked) {
        elkSide.classList.add(className);
      } else {
        elkSide.classList.remove(className);
      }
    }
    if (esi !== null) {
      changeElkSide();
      esi.addEventListener('change', changeElkSide);
    }

    const elkSideMM = document.querySelector('.elk-side-nav .metismenu');
    if (elkSideMM !== null) {
      // eslint-disable-next-line no-new
      new MetisMenu(elkSideMM);
    }
  }

  const elkTopNav = document.querySelector('.elk-top-nav');
  let elkTopNavCanvas;

  if (elkTopNav !== null) {
    elkTopNavCanvas = new OnoffCanvas('.elk-top-nav', {
      hideByEsc: false,
      createDrawer: false,
    });

    /* eslint-disable-next-line no-inner-declarations */
    function showHideElkTopNav() {
      if (window.innerWidth < 993) {
        elkTopNavCanvas.hide();
      } else {
        elkTopNavCanvas.show();
      }
    }
    showHideElkTopNav();
    window.addEventListener('resize', debounce(showHideElkTopNav, 250));

    // eslint-disable-next-line no-new
    new MetisMenu(elkTopNav.querySelector('.metismenu'));
  }

}));
//# sourceMappingURL=elektron.js.map
