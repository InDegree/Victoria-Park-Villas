window.onload = function(){


  var tagName = '.swiper-container',
      sliderPopup = document.querySelector('.sliderPopup'),
      container = document.querySelectorAll(tagName);

  var popupInit = function(e){
    var parentEl = e.target.closest(tagName),
        parentClone = parentEl.cloneNode(true);
    sliderPopup.appendChild(parentClone);
    sliderPopup.closest('.popupWrapper').classList.add('-visible');

    var closeBtn = sliderPopup.querySelector('.close');

    closeBtn.onclick = function(e){
      sliderPopup.closest('.popupWrapper').classList.remove('-visible');
      sliderPopup.innerHTML = '';
      sliderPopup.appendChild(closeBtn);
    }
  };

  for(i=0; i < container.length; i++){
    container[i].onclick = function(e){
      popupInit(e)
    };
  };
};
