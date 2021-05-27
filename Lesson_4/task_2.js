// Продолжить работу с интернет-магазином:
// - В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы?
// - Реализуйте такие объекты.
// - Перенести функционал подсчета корзины на объектно-ориентированную базу.


let basketCalc = {
    calculateSumm() {
        let summ = Object.values(this).reduce(function (acc, elem) {
            return acc += elem
        }, 0);
        return summ;
    }
}

let basket = {}
basket.__proto__ = basketCalc;


let basketList = [['bread', 12], ['milk', 83], ['apple', 45], ['cheese', 88], ['meat', 129]];
for (let el in basketList) {
    basket[basketList[el][0]] = basketList[el][1];
}

console.log(basket);
console.log(basket.calculateSumm());