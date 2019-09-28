mLabs.modules = mLabs.module || [];
mLabs.modules.push('modal');

mLabs.modal = (function() {
  'use strict';

  function init() {
    var data = JSON.parse(localStorage.getItem('social_networks')) || [];
  }

  return { init: init };
}());