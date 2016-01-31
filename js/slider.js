var slide1 = document.getElementById('slide1');
var slide2 = document.getElementById('slide2');

var showS = slide1;
var hideS = slide2;


setInterval(function(){


  start(hideS, showS);
  setTimeout(function(){
    end(hideS, showS);

    var tmp = showS;
    showS = hideS;
    hideS = tmp;

  } , 3000);


}, 30000);


function start(showSlide, hideSlide) {

  showSlide.style.position = "absolute";
  showSlide.style.top = 0;
  showSlide.style.maxWidth = "100%";
  showSlide.style.opacity = 0;
  showSlide.style.display = "block";

  setTimeout(function(){hideSlide.style.opacity = 0;}, 10);
  setTimeout(function(){showSlide.style.opacity = 1;}, 10);

}

function end(showSlide, hideSlide) {

  hideSlide.style.display = "none";

  showSlide.style.position = "relative";
  delete showSlide.style.top;
  delete showSlide.style.maxWidth;
}

