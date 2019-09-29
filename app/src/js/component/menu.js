mLabs.modules = mLabs.modules || []
mLabs.modules.push('menu');

mLabs.menu = (function() {
  'use strict';

  var config = {
    nav: '.m-header-nav',
    btnOpen: '.m-open-nav',
    btnClose: '.m-close-nav',
    isActive: 'is-active'
  }

  function init() {
    $(config.btnOpen).on('click', openNav);
    $(config.btnClose).on('click', closeNav);
  }

  function openNav(el) {
    el.preventDefault();
    $(config.nav).toggleClass(config.isActive);
  }

  function closeNav(el) {
    el.preventDefault();
    $(config.btnClose).closest(config.nav).removeClass(config.isActive);
  }

  return { init: init };
}());