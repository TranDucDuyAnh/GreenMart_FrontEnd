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

    banner_title.style.opacity = 0;
    banner_title.style.y = '-100px'

    // Loop for opacity
    var banner_op = 0

    var fade_timer = setInterval(function () {
        if (banner_op >= 1) {
            clearInterval(fade_timer);
        }
        image_banner.style.opacity = banner_op;
        image_banner.style.filter = 'alpha(opacity=' + banner_op * 100 + ")";
        banner_op += 0.01;
    }, 10);

    setTimeout(function () {
        var text_op = 0
        var text_pos = -100

        var fade_timer = setInterval(function () {
            if (text_op >= 1) {
                clearInterval(fade_timer);
            }
            banner_title.style.opacity = text_op;
            banner_title.style.top = text_pos + 'px'
            banner_title.style.filter = 'alpha(opacity=' + text_op * 100 + ")";
            text_op += 0.01;
            text_pos += 1;
        }, 3);
    }, 600)

    switch (image_index) {
        case 1:
            banner_title.innerText = "Farm Fresh Vegetables & Foods 100% Organic."
            break
        case 2:
            banner_title.innerText = "Farm Fresh Meat & Poultry 100% Organic."
    }
}