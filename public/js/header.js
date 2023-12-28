window.onscroll = function () {keepHeader() };

// Get the header
var header_big = document.getElementById("header-big");
var header_arrow = document.getElementById("header-to-top")

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function keepHeader() {
    if (window.scrollY > 250) {
        header_big.classList.add("header-big-stick");
        header_arrow.style.opacity = 1
        header_arrow.style.pointerEvents = "auto"
    } else {
        header_big.classList.remove("header-big-stick");
        header_arrow.style.opacity = 0
        header_arrow.style.pointerEvents = "none"
    }
}