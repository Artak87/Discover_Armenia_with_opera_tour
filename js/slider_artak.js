var slider1 = document.getElementById('slide1');
var slider2 = document.getElementById('slide2');

var showS = slider1;
var hideS = slider2;
var inAnimation = false;

setInterval(function () {
  beginAnimation();
}, 5000);


function start(showSlider, hideSlider) {

  showSlider.style.position = 'absolute';
  showSlider.style.top = 0;
  showSlider.style.maxWidth = '100%';
  showSlider.style.width = '100%';
  showSlider.style.opacity = 0;
  showSlider.style.display = 'block';

  setTimeout(function () {
    hideSlider.style.opacity = 0
  }, 10);
  setTimeout(function () {
    showSlider.style.opacity = 1
  }, 10);
}

function end(showSlide, hideSlide) {

  hideSlide.style.display = "none";

  showSlide.style.position = "relative";
  delete showSlide.style.top;
  delete showSlide.style.maxWidth;
  delete showSlide.style.width;
}

function beginAnimation() {
  if (inAnimation == false) {
    inAnimation = true;

    start(hideS, showS);
    setTimeout(function () {
      end(hideS, showS);

      // swap
      var tmp = showS;
      showS = hideS;
      hideS = tmp;

      inAnimation = false;
    }, 3000);
  }
}
