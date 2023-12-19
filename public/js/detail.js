var item_count = 2

function countIncrease() {
    if (item_count < 10) {
        item_count += 1
    }
    itemcountUpdate()
}

function countDecrease() {
    if (item_count > 2) {
        item_count -= 1
    }
    itemcountUpdate()
}

function itemcountUpdate() {
    let number_count = document.getElementById("product-amount-number")
    let price_update = document.getElementById("product-js-price")

    number_count.innerHTML = item_count
    price_update.innerHTML = '$' + (99 * item_count).toFixed(2)
}

function itemimgUpdate(image) {
    let item_image = document.getElementsByClassName("product-image-main")
    item_image[0].src = image.src

    let img_preview = document.getElementsByClassName("product-image-small")
    for (var i = 0; i < img_preview[0].childNodes.length; i++) {
        if (img_preview[0].childNodes[i].nodeType != 3) {
            img_preview[0].childNodes[i].style.border = "1px solid var(--gray-light)"
            if (img_preview[0].childNodes[i] == image) {
                img_preview[0].childNodes[i].style.border = "1px solid var(--primary-color)"
            }
        }
    }
}