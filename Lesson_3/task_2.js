function countBasketPrice(basket) {
    let y = basket.reduce(function (acc, elem) {
        return acc += elem
    }, 0);
    return y
}

let basketPrice = [12, 83, 45, 88, 129];

console.log(countBasketPrice(basketPrice));