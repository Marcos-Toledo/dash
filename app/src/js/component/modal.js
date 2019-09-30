mLabs.modules = mLabs.modules || [];
mLabs.modules.push('modal');

mLabs.modal = (function() {
  'use strict';

  var config = {
    modal: '.m-modal',
    btnOpen: '.m-open-modal',
    btnClose: '.m-close-modal',
    btnSave: '.m-save',
    listPage: '.m-list-pages',
    inputRadio: '[name="social_pages"]',
    isActive: 'is-active'
  }

  function init() {
    $(document).on('click', config.btnOpen, openModal);
    $(config.btnClose).on('click', closeModal);
    $(config.btnSave).on('click', save);
  }
  
  function openModal(el) {
    el.preventDefault();
    $(config.modal).addClass(config.isActive);
    
    var redeSocial = $(this).attr('data-social');
    rederList(redeSocial);
  }

  function closeModal(el) {
    el.preventDefault();
    
    $('.m-list-pages li').remove();
    $(this).closest(config.modal).removeClass(config.isActive);
  }

  function rederList(redeSocial) {
    var networks = JSON.parse(localStorage.getItem('social_networks')) || [];
    var pages = JSON.parse(localStorage.getItem('social_pages')) || [];
    
    var socialNetwork = networks.filter(function(obj) { return obj.socialName === redeSocial });
    var channels = pages.filter(function(obj) { return obj.channel_key === redeSocial });

    detailModal(socialNetwork);

    setTimeout(function() {
      createList(channels);
    }, 200);
  }

  function detailModal(socialNetwork) {
    var logoImg = $('.m-modal-topo-ico img');
    var namePage = $('.m-name-page');

    $(logoImg).attr('src', socialNetwork[0].href);
    $(logoImg).attr('alt', socialNetwork[0].label);
    $(config.btnSave).attr('data-social', socialNetwork[0].socialName);
    namePage.text(socialNetwork[0].label);
  }

  function createList(channel) {
    channel.forEach(function(el, index) {
      var li = document.createElement('li');
      var div = document.createElement('div');
      var img = document.createElement('img');
      var p = document.createElement('p');
      var a = document.createElement('a');
      var input = document.createElement('input');
      var label = document.createElement('label');

      $(div).attr('class', 'm-list-pages-picture');
      $(img).attr('src', el.picture);
      
      $(p).attr('class', 'm-list-pages-name');
      $(p).text(el.name);
      
      $(a).attr('class', 'm-list-pages-url');
      $(a).attr('href', el.url);
      $(a).attr('title', el.name);
      $(a).text(el.url);
      
      $(input).attr('type', 'radio');
      $(input).attr('name', 'social_pages');
      $(input).attr('id', 'social-page-' + index);
      $(input).attr('class', 'm-input-radio');
      $(input).attr('data-name', el.name);

      $(label).attr('for', 'social-page-' + index);
      $(label).attr('class', 'm-custom-input-radio');

      $(config.listPage).append(li);
      $(li).append(div);
      $(div).append(img);
      $(li).append(p);
      $(li).append(a);
      $(li).append(input);
      $(li).append(label);
    })
  }

  function save(el) {
    el.preventDefault();
    var redeSocial = $(this).attr('data-social');
    var networks = JSON.parse(localStorage.getItem('social_networks')) || [];
    var pages = JSON.parse(localStorage.getItem('social_pages')) || [];
    var inputs = $(config.inputRadio);

    for (var i = 0; i < inputs.length; i++) {
      if ($(inputs[i]).is(':checked')) {
        var namePage = $(inputs[i]).attr('data-name');

        var socialNetwork = networks.filter(function(obj) { return obj.socialName === redeSocial });
        var channels = pages.filter(function(obj) { return obj.name === namePage });

        var pos = networks.map(function(obj) { return obj.socialName }).indexOf(redeSocial);

        socialNetwork[0].pages.push(channels[0]);
        networks.splice(pos, 1, socialNetwork[0]);

        localStorage.setItem('social_networks', JSON.stringify(networks));

        $('.m-list-pages li').remove();
        $(this).closest(config.modal).removeClass(config.isActive);
      }
    }

    setTimeout(function() {
      document.location.reload(true);
    }, 300);
  }

  return { init: init };
}());