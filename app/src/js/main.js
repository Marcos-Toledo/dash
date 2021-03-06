var mLabs = mLabs || {};
mLabs.module || [];

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
      {socialName: 'facebook', label: 'Facebook', href: 'assets/images/image_facebook.png', pages: []},
      {socialName: 'twitter', label: 'Twitter', href: 'assets/images/image_twitter.png', pages: []},
      {socialName: 'instagram', label: 'Instagram', href: 'assets/images/image_instagram.png', pages: []},
      {socialName: 'google', label: 'Google Meu Negócio', href: 'assets/images/image_google-my-business.png', pages: []},
      {socialName: 'pinterest', label: 'Pinterest', href: 'assets/images/image_pinterest.png', pages: []},
      {socialName: 'linkedin', label: 'Linkedin', href: 'assets/images/image_linkedin.png', pages: []},
      {socialName: 'youtube', label: 'Youtube', href: 'assets/images/image_youtube.png', pages: []},
      {socialName: 'whatsapp', label: 'Whatsapp', href: 'assets/images/image_whatsapp.png', pages: []},
      {socialName: 'google_analytics', label: 'Google analytics', href: 'assets/images/image_analytics.png', pages: []},
    ];

    if (localStorage.length) return true;

    localStorage.setItem('social_networks', JSON.stringify(socialNetworks));
    localStorage.setItem('social_pages', JSON.stringify(data));
  }

  return { init: init }
}());

$(document).ready(mLabs.init);

