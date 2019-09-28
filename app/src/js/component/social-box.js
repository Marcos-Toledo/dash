mLabs.modules = mLabs.modules || [];
mLabs.modules.push('socialBox');

mLabs.socialBox = (function() {
  'use strict';

  var config = {
    wrapBox: '.m-wrap-box-social',
    boxes: [
      {label: 'Facebook', href: 'assets/images/image_facebook.png', dataModal: 'facebook'},
      {label: 'Twitter', href: 'assets/images/image_facebook.png', dataModal: 'twitter'},
      {label: 'Instagram', href: 'assets/images/image_facebook.png', dataModal: 'instagram'},
      {label: 'Google Meu Negócio', href: 'assets/images/image_facebook.png', dataModal: 'google'},
      {label: 'Pinterest', href: 'assets/images/image_facebook.png', dataModal: 'pinterest'},
      {label: 'Linkedin', href: 'assets/images/image_facebook.png', dataModal: 'linkedin'},
      {label: 'Youtube', href: 'assets/images/image_facebook.png', dataModal: 'youtube'},
      {label: 'Whatsapp', href: 'assets/images/image_facebook.png', dataModal: 'whatsapp'},
      {label: 'Google Analytics', href: 'assets/images/image_facebook.png', dataModal: 'google_analytics'}
    ]
  }

  function init() {
    createBox();
  }

  function createBox() {
    config.boxes.forEach(function(box, index) {
      var div = document.createElement('div');
      var divBoxImg = document.createElement('div');
      var img = document.createElement('img');
      var ico = document.createElement('i');
      var span = document.createElement('span');
      var a = document.createElement('a');

      $(div).attr('class', 'm-box-social');
      $(divBoxImg).attr('class', 'm-box-social-img');
      $(img).attr('src', box.href);
      $(img).attr('alt', box.label);
      $(ico).attr('class', 'far fa-question-circle');
      $(span).attr('class', 'm-box-social-label');
      $(span).text(box.label);
      $(a).attr('href', '#');
      $(a).attr('class', 'm-btn-secondary m-open-modal');
      $(a).attr('data-social', box.dataModal);
      $(a).text('Adicionar');

      $(config.wrapBox).append(div);
      $(div).append(divBoxImg);
      $(divBoxImg).append(img);
      $(divBoxImg).append(ico);
      $(div).append(span);
      $(div).append(a);
    });
  }

  return { init: init }
}());
