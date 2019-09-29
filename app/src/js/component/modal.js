mLabs.modules = mLabs.modules || [];
mLabs.modules.push('modal');

mLabs.modal = (function() {
  'use strict';

  var config = {
    modal: '.m-modal',
    btnOpen: '.m-open-modal',
    btnClose: '.m-close-modal',
    listPage: '.m-list-pages',
    isActive: 'is-active'
  }

  function init() {
    $(document).on('click', config.btnOpen, openModal);
    $(config.btnClose).on('click', closeModal);
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
    var data = JSON.parse(localStorage.getItem('social_networks')) || [];
    
    var channel = data.filter(function(channel) {
      return channel.socialName === redeSocial;
    });

    return createList(channel);
  }

  function createList(channel) {
    channel[0].pages.forEach(function(el, index) {
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

  return { init: init };
}());