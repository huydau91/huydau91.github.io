var slideIndex = 1;
slidedesktop(slideIndex);
slidemobile(slideIndex);

function plusDivs(n) {
    slidedesktop(slideIndex += n);
    slidemobile(slideIndex += n);
}

function slidedesktop(n) {
    var i;
    var x = document.getElementsByClassName("slide-anh-desktop");
    if (n > x.length) {slideIndex = 1} 
    if (n < 1) {slideIndex = x.length} ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"; 
    }
    x[slideIndex-1].style.display = "block"; 
}
function slidemobile(n) {
    var i;
    var x = document.getElementsByClassName("slide-anh-mobile");
    if (n > x.length) {slideIndex = 1} 
    if (n < 1) {slideIndex = x.length} ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"; 
    }
    x[slideIndex-1].style.display = "block"; 
}