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

    for (var i = 0; i < boxes.length; i++) {

      if ($(boxes[i].pages).length) {
        createPages(boxes[i].pages);
      } else {
        createSocial(boxes[i]);
      }
    }

  }

  function createPages(box) {
    var h2 = document.createElement('h2');
    $(h2).text(box[0].name);

    $(config.wrapBox).append(h2);
  }
  
  function createSocial(box) {
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
  }

  return { init: init }
}());
