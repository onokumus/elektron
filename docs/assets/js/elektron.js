/*! elektron v0.7.1 | MIT License | https://github.com/onokumus/elektron */
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

  const isMobile = () => window.innerWidth < 993;

  const showHideOnoffCanvas = (oc) => {
    if (isMobile()) {
      oc.hide();
    } else {
      oc.show();
    }
  };

  const elkSide = document.querySelector('.elk-side');

  if (elkSide !== null) {
    const elkSideNavOnoffCanvas = new OnoffCanvas(elkSide, {
      hideByEsc: isMobile(),
      createDrawer: isMobile(),
    });

    showHideOnoffCanvas(elkSideNavOnoffCanvas);

    // eslint-disable-next-line no-unused-expressions
    elkSide.classList.contains('disable-resize')
      || window.addEventListener('resize', debounce(showHideOnoffCanvas(elkSideNavOnoffCanvas), 250));

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

    showHideOnoffCanvas(elkTopNavCanvas);
    window.addEventListener('resize', debounce(showHideOnoffCanvas(elkTopNavCanvas), 250));

    // eslint-disable-next-line no-new
    new MetisMenu(elkTopNav.querySelector('.metismenu'));
  }

}));
//# sourceMappingURL=elektron.js.map
