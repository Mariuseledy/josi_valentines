var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function currentDiv(n) {
    showDivs(slideIndex = n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("photos");

    if (n > x.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = x.length }

    for (i = 0; i < x.length; i++) {
        x[i].style.transition = "opacity 0.8s";
        x[i].style.opacity = 0;
        x[i].style.display = "none";
    }

    x[slideIndex - 1].style.display = "block";
    setTimeout(function() {
        x[slideIndex - 1].style.opacity = 1;
    }, 0.10);
}