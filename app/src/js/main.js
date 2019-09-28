var mLabs = mLabs || {};

mLabs = (function() {
  'use strict';

  function init() {
    getApi();
    startModule();
  }

  function getApi() {
    $.get("https://demo2697181.mockable.io/pages", function(data, status){
      var data = JSON.stringify(data.data);

      console.log("Data: " + JSON.stringify(data) + "\nStatus: " + status);
    });
  }

  function startModule() {
    $.each(mLabs.modules, function(i, module) {
      mLabs[module].init();
      $.event.trigger(module,':ready', [i, module]);
    });
  }

  return { init: init }
}());

$(document).ready(mLabs.init);

