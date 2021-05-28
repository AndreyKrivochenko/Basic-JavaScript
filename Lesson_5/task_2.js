function createBasket(count, summ) {
    const basket = document.querySelector('#basket');
    basket.style.cssText = `width: 400px;
                            height: 80px;
                            background-color: orange;
                            border-radius: 10px;
                            margin: 50px;
                            display: flex;
                            flex-direction: column;`;

    const title = document.createElement('div');
    title.style.cssText = ` height: 40px;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            border-bottom: 1px solid black`;
    title.textContent = 'Корзина';

    const text = document.createElement('div');
    text.style.cssText = `  height: 40px;
                            display: flex;
                            justify-content: center;
                            align-items: center;`
    if (count === 0) {
        text.textContent = 'Корзина пуста';
    } else {
        text.textContent = 'В корзине: ' + count + ' товаров на сумму ' + summ + ' рублей';
    }

    basket.appendChild(title);
    basket.appendChild(text);
}

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

createBasket(basketList.length, basket.calculateSumm());