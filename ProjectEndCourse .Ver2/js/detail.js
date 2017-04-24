var slideIndex = 1;
showSlidesDesktop(slideIndex);
showSlidesMobile(slideIndex);

function plusDivs(n) {
  showSlidesDesktop(slideIndex += n);
  showSlidesMobile(slideIndex += n);
}

function currentSlide(n) {
    showSlidesDesktop(slideIndex = n);
    showSlidesMobile(slideIndex = n);
}

function showSlidesDesktop(n) {
  var i;
  var slides = document.getElementsByClassName("slide-anh-desktop");
  var item = document.getElementsByClassName("item");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
}

function showSlidesMobile(n) {
  var i;
  var slides = document.getElementsByClassName("slide-anh-mobile");
  var item = document.getElementsByClassName("item");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
}