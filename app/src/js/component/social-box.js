mLabs.modules = mLabs.modules || [];
mLabs.modules.push('socialBox');

mLabs.socialBox = (function() {
  'use strict';

  var config = {
    wrapBox: '.m-wrap-box-social'
  }

  function init() {
    createBox();
  }

  function createBox() {
    var boxes = JSON.parse(localStorage.getItem('social_networks')) || [];

    boxes.forEach(function(box, index) {
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
      $(a).attr('data-social', box.socialName);
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
