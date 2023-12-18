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
    price_update.innerHTML = '$' + (99/2 * item_count).toFixed(2)
}