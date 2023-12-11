var image_index = 1

function bannerImageNext() {
    if (image_index == 2) {
        image_index = 1
    } else {
        image_index = image_index + 1
    }
    bannerChange()
}

function bannerImagePrev() {
    if (image_index == 1) {
        image_index = 2
    } else {
        image_index = image_index - 1
    }
    bannerChange()
}

function bannerChange() {
    let image_banner = document.getElementById("header-bn-image")
    let banner_title = document.getElementById("header-bn-emph")

    image_banner.src = "./public/image/background-slider-0" + image_index + ".jpg"

    // Loop for opacity
    var op = 0
    var fade_timer = setInterval(function () {
        if (op >= 1){
            clearInterval(fade_timer);
        }
        image_banner.style.opacity = op;
        image_banner.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += 0.01;
    }, 4);
    
    switch (image_index) {
        case 1:
            banner_title.innerText = "Farm Fresh Vegetables & Foods 100% Organic."
            break
        case 2:
            banner_title.innerText = "Farm Fresh Meat & Poultry 100% Organic."
    }
}