mLabs.modules = mLabs.module || [];
mLabs.modules.push('modal');

mLabs.modal = (function() {
  'use strict';

  function init() {
    console.log('Modal >>>');
  }

  return { init: init };
}());