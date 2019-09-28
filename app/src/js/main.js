var mLabs = mLabs || {};

mLabs = (function() {
  'use strict';

  function init() {
    startModule();
    getApi();
  }

  function startModule() {
    $.each(mLabs.modules, function(i, module) {
      mLabs[module].init();
      $.event.trigger(module+':ready', [i, module]);
    });
  }

  function getApi() {
    $.get("https://demo2697181.mockable.io/pages", function(data, status){
      var data = data.data;
      
      createLocalStorage(data);
    });
  }

  function createLocalStorage(data) {
    var socialNetworks = [
      {socialName: 'facebook', pages: []},
      {socialName: 'twitter', pages: []},
      {socialName: 'instagram', pages: []},
      {socialName: 'google_analytics', pages: []},
      {socialName: 'pinterest', pages: []},
      {socialName: 'youtube', pages: []},
    ];

    $.each(socialNetworks, function(i, socialNetwork) {
      var socialName = socialNetwork.socialName;
      
      socialNetwork.pages = data.filter(function(obj) { return obj.channel_key === socialName });
    });

    localStorage.setItem('social_networks', JSON.stringify(socialNetworks));
  }

  return { init: init }
}());

$(document).ready(mLabs.init);

