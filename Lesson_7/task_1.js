'use strict'

const $catalog = document.querySelector('#catalog');
const $basket = document.querySelector('#basket');
const $container = document.querySelector('#container');
const $popup = document.querySelector('#popup');
const $popupBasket = $popup.querySelector('#popup-basket');
const $closePopupBtn = document.querySelector('#closePopupBtn');

$container.classList.add('container');
$basket.classList.add('basket');
$catalog.classList.add('catalog');

let basketList = [];
let windowForNext = 0;

function showPopup() {
    windowForNext = 0;
    $popup.style.display = 'block';
    $popupBasket.textContent = '';
    showPopupBasket();
}

function closePopup(e) {
    if (e.type === 'click' || e.key === 'Escape') {
        $popup.style.display = 'none';
    }
}

$closePopupBtn.addEventListener('click', closePopup);
$basket.addEventListener('mousemove', function () {
    $basket.style.cursor = 'pointer';
})
$basket.addEventListener('click', showPopup);

function showPopupBasket() {
    const htmlBasket = `<div id="body-basket"></div>
                        <div id="nxt"></div>`;
    $popup.querySelector('#popup-basket').insertAdjacentHTML('beforeend', htmlBasket);
    drawProducts();
    drawButtonNext();
}

function drawButtonNext() {
    const $button = $popup.querySelector('#nxt');
    $button.insertAdjacentHTML('beforeend', '<button class="btn-next">Next</button>');
}

function drawProducts() {
    const $productList = $popup.querySelector('#body-basket');
    $productList.textContent = '';
    if (basketList.length === 0) {
        $productList.insertAdjacentHTML('beforeend', `<div class="prod-item">
        <p class="prod-item__name">The shopping cart is empty</p>
      </div>`);
    } else {
        basketList.forEach(function(prod, i) {
            drawProduct(prod, i, $productList);
        })
    }
}

function drawProduct(prod, id, $container) {
    const html = `<div id="prod-${id}" class="prod-item">
                    <p class="prod-item__name">${prod[0]}</p>
                    <p class="prod-item__price">${prod[1]}</p>
                    <button data-id="${id}" class="prod-item__btn">del</button>
                  </div>`;
    $container.insertAdjacentHTML('beforeend', html);
}

function drawAddress() {
    const $address = $popup.querySelector('#body-basket');
    $address.textContent = '';
    const html = `<form>
    Name: <input type="text" placeholder="type your name"><br>
    Surname: <input type="text" placeholder="type your surname"><br>
    e-mail: <input type=""email><br>
    <textarea name="address" cols="30" rows="4" placeholder="type your address"></textarea>
    </form>`;
    $address.insertAdjacentHTML('beforeend', html);
}

function drawComment() {
    const $comment = $popup.querySelector('#body-basket');
    $comment.textContent = '';
    const html = `<textarea name="comments" cols="30" rows="4" placeholder="type your comments"></textarea>`;
    $comment.insertAdjacentHTML('beforeend', html);
}


$popupBasket.addEventListener('click', function(e) {
    if (e.target.tagName === 'BUTTON' && e.target.textContent === 'del') {
        const index = Number(e.target.dataset.id);
        basketList = basketList.filter(function (task, i) {
          return i !== index
        });
        let basketObj = {};
        basketObj.__proto__ = basketCalc;
        for (let el of basketList) {
            if (basketObj.hasOwnProperty(el[0])) {
                basketObj[el[0]] += el[1];
            } else {
                basketObj[el[0]] = el[1];
            }
        }
        let text = document.querySelector('.basket-text');
        if (basketList.length === 0) {
            text.textContent = 'The shopping cart is empty';
        } else {
            text.textContent = 'Products: ' + basketList.length + ', amount: ' + basketObj.calculateSumm();
        }
        showPopup();
        
    } else if (e.target.tagName === 'BUTTON' && e.target.textContent === 'Next') {
        if (windowForNext == 0) {
            windowForNext++;
            drawAddress();
        } else if (windowForNext == 1) {
            windowForNext++;
            drawComment();
        } else {
            windowForNext = 0;
            $popup.style.display = 'none';
        }
        
    }
})


let bigPict = document.createElement('img');
bigPict.classList.add('big-pict');
$container.appendChild(bigPict);

let basketCalc = {
    calculateSumm() {
        let summ = Object.values(this).reduce(function (acc, elem) {
            return acc += elem
        }, 0);
        return summ;
    }
}

function createBasket() {
    const title = document.createElement('div');
    title.classList.add('basket-title');
    title.textContent = 'Basket';

    const text = document.createElement('div');
    text.classList.add('basket-text');
    text.textContent = 'The shopping cart is empty';

    $basket.appendChild(title);
    $basket.appendChild(text);
}

createBasket();



function createCard(name, price, path, pathBig) {
    function addToCart() {
        let basketObj = {};
        basketObj.__proto__ = basketCalc;
        basketList.push([name, price]);
        for (let el of basketList) {
            if (basketObj.hasOwnProperty(el[0])) {
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
    $catalog.appendChild(cart);
}

const products = [{ name: 'bread', price: 12, path: 'small_picture/bread.jpeg', pathBig: 'big_picture/bread.jpeg' }, { name: 'milk', price: 83, path: 'small_picture/Milk.jpg', pathBig: 'big_picture/Milk.jpg' },
{ name: 'apple', price: 45, path: 'small_picture/apple.jpg', pathBig: 'big_picture/apple.jpg' }, { name: 'cheese', price: 88, path: 'small_picture/cheese.jpeg', pathBig: 'big_picture/cheese.jpeg' },
{ name: 'meat', price: 129, path: 'small_picture/meat.jpg', pathBig: 'big_picture/meat.jpg' }, { name: 'grape', price: 19, path: 'small_picture/grape.jpeg', pathBig: 'big_picture/grape.jpeg' },
{ name: 'pear', price: 39, path: 'small_picture/pear.jpg', pathBig: 'big_picture/pear.jpg' }];


for (let obj of products) {
    createCard(obj.name, obj.price, obj.path, obj.pathBig);
}