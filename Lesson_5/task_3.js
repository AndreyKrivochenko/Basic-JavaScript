let product = [{name: 'bread', price: 12}, {name: 'milk', price: 83}, {name: 'apple', price: 45},
{name: 'cheese', price: 88}, {name: 'meat', price: 129}, {name: 'grape', price: 19},
{name: 'pear', price: 39}];

const catalog = document.querySelector('#catalog');
catalog.style.cssText = `width: 800px;
                        margin: 0 auto;
                        border: 1px solid black;
                        display: flex;
                        flex-wrap: wrap;`;

function createCard(name, price) {
    let cart = document.createElement('div');
    cart.style.cssText = `width: 200px;
                            height: 100px;
                            margin: 32px;
                            border: 1px solid black;
                            border-radius: 10px;
                            display: flex;
                            flex-direction: column;`;
    let title = document.createElement('div');
    title.style.cssText = ` height: 50px;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            font-size: 30px;`;
    title.textContent = name;
    let cartPrice = document.createElement('div');
    cartPrice.style.cssText = ` height: 50px;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            font-size: 30px;
                            font-weight: bold;`;
    cartPrice.textContent = price;
    cart.appendChild(title);
    cart.appendChild(cartPrice);
    catalog.appendChild(cart);
}

for (let obj of product) {
    createCard(obj.name, obj.price);
}