window.onload = function(){

  //Variables
  var sliderTag = '.swiper-container',
      selectors = document.querySelectorAll(sliderTag),
      sliderPopup = document.querySelector('.sliderPopup'),
      closeBtn = sliderPopup.querySelector('.close'),
      templates = [];

  //Options for the slider and create slider when page onload
  callSlider = function(){
    var swiper = new Swiper(sliderTag, {
      effect: 'slide',
      pagination: '.swiper-pagination',
      paginationClickable: true,
      autoplay: 3000
    });
  };

  //Get all default templates
  for(var i=0; i < selectors.length; i++){
    let selector = selectors[i]
    templates.push(selector.cloneNode(true));
  };

  //Init Slider
  callSlider();

  var popupInit = function(e){
    let el = e.target.closest(sliderTag);
    let index = el.dataset.index;
    sliderPopup.appendChild(templates[index]);
    sliderPopup.closest('.popupWrapper').classList.add('-visible');

    //Init Slider
    callSlider()
  };

  for(var i=0; i < selectors.length; i++){
    let selector = selectors[i]
    selector.dataset.index = i
    selector.onclick = function(e){
      popupInit(e);
    };
  };

  closeBtn.onclick = function(e){
    sliderPopup.closest('.popupWrapper').classList.remove('-visible');
    sliderPopup.innerHTML = '';
    sliderPopup.appendChild(closeBtn);
  };

};
