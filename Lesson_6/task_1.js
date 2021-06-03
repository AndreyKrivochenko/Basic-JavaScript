const catalog = document.querySelector('#catalog');
const basket = document.querySelector('#basket');
const container = document.querySelector('#container');

container.classList.add('container');
basket.classList.add('basket');
catalog.classList.add('catalog');

let bigPict = document.createElement('img');
bigPict.classList.add('big-pict');
container.appendChild(bigPict);

let basketCalc = {
    calculateSumm() {
        let summ = Object.values(this).reduce(function (acc, elem) {
            return acc += elem
        }, 0);
        return summ;
    }
}

let basketList = [];

function createBasket() {
    const title = document.createElement('div');
    title.classList.add('basket-title');
    title.textContent = 'Basket';

    const text = document.createElement('div');
    text.classList.add('basket-text');
    text.textContent = 'The shopping cart is empty';

    basket.appendChild(title);
    basket.appendChild(text);
}

createBasket();

function createCard(name, price, path, pathBig) {
    function addToCart() {
        basketObj = {};
        basketObj.__proto__ = basketCalc;
        basketList.push([name, price]);
        for (let el of basketList) {
            if(basketObj.hasOwnProperty(el[0])) {
                basketObj[el[0]] += el[1];
            } else {
                basketObj[el[0]] = el[1];
            }
        }
        let text = document.querySelector('.basket-text');
        text.textContent = 'Products: ' + basketList.length + ', amount: ' + basketObj.calculateSumm();
    }

    function showBigPict(e) {
        bigPict.setAttribute('src', pathBig);
        bigPict.style.display = 'block';
        bigPict.style.top = e.pageY + 10 + 'px';
        bigPict.style.left = e.pageX + 10 + 'px';
    }

    function hideBigPict() {
        bigPict.style.display = 'none';
        bigPict.setAttribute('src', '');
    }

    let cart = document.createElement('div');
    cart.classList.add('cart');

    let pict = document.createElement('img');
    pict.setAttribute('src', path);
    pict.classList.add('cart-pict');
    pict.addEventListener('mousemove', showBigPict);
    pict.addEventListener('mouseout', hideBigPict);

    let title = document.createElement('div');
    title.classList.add('title');
    title.textContent = name;

    let cartPrice = document.createElement('div');
    cartPrice.classList.add('cart-price');
    cartPrice.textContent = price;

    let divButton = document.createElement('div');
    divButton.classList.add('block-button');

    let button = document.createElement('button');
    button.textContent = 'Buy';
    button.classList.add('button');
    button.addEventListener('click', addToCart);

    divButton.appendChild(button);
    cart.appendChild(pict);
    cart.appendChild(title);
    cart.appendChild(cartPrice);
    cart.appendChild(divButton);
    catalog.appendChild(cart);
}

let product = [{name: 'bread', price: 12, path: 'small_picture/bread.jpeg', pathBig:'big_picture/bread.jpeg'}, {name: 'milk', price: 83, path: 'small_picture/Milk.jpg', pathBig:'big_picture/Milk.jpg'},
{name: 'apple', price: 45, path: 'small_picture/apple.jpg', pathBig:'big_picture/apple.jpg'}, {name: 'cheese', price: 88, path: 'small_picture/cheese.jpeg', pathBig:'big_picture/cheese.jpeg'},
{name: 'meat', price: 129, path: 'small_picture/meat.jpg', pathBig:'big_picture/meat.jpg'}, {name: 'grape', price: 19, path: 'small_picture/grape.jpeg', pathBig:'big_picture/grape.jpeg'},
{name: 'pear', price: 39, path: 'small_picture/pear.jpg', pathBig:'big_picture/pear.jpg'}];

for (let obj of product) {
    createCard(obj.name, obj.price, obj.path, obj.pathBig);
} 