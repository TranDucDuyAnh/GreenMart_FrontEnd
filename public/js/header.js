window.onscroll = function () {keepHeader() };

// Get the header
var header_big = document.getElementById("header-big");

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function keepHeader() {
    if (window.scrollY > 250) {
        header_big.classList.add("header-big-stick");
    } else {
        header_big.classList.remove("header-big-stick");
    }
}