// selecting elements

// let openShopping = document.querySelector('.shopping');
// let closeShopping = document.querySelector('.closeShopping');
// let list = document.querySelector('.list');
// let body = document.querySelector('body');
// let total = document.querySelector('total');
// let quantity = document.querySelector('.quantity');

// openShopping.addEventListener('click', () => {
//     body.classList.add('active');
// })
// closeShopping.addEventListener('click', () => {
//     body.classList.remove('active');
// })

// // Products

// let products = [
//     {
//         id: 1,
//         name: 'PRODUCT NAME 1' ,
//         image:'7.PNG',
//         price: '$27.8'
//     },
//     {
//         id: 1,
//         name: 'CLOSE CALL PERFUME' ,
//         image: '5.PNG',
//         price: '$59.5' 
//     },
//     {
//         id: 3,
//         name: 'BLACK BAGGY FIT JEANS' ,
//         image: '1.PNG',
//         price: '$55.9'
//     },
//     {
//         id: 4,
//         name: 'CORDIAL GREEN RIBBED T-SHIRT' ,
//         image: '2.PNG',
//         price: '$75.2'
//     },
//     {
//         id: 5,
//         name: ' ENVY BLACK BAGGY JOGGER' ,
//         image: '3.PNG',
//         price: '$42.5'
//     },
//     {
//         id: 6,
//         name: 'SUMMER VIBE GREEN CO-ORDS' ,
//         image: '4.PNG',
//         price: '$43.33'
//     },
// ];

// let listCards = [];

// function initApp(){
//     products.forEach((value, key) => {
//         let newDiv = document.createElement('div');
//         newDiv.classList.add('item');
//         newDiv.innerHTML= `
//         <img src="image/${value.image}"/>
//         <div class="title">${value.name}</div>
//         <div class="price">${value.price.toLocaleString()}</div>
//         <button onclick="addToCart(${key})">Add To Cart </button>
//         `;
//         list.appendChild(newDiv)
//     })
// }
// initApp();

// function addToCart(key){
//     if(listCards[key] == null){
//         listCards[key] = products[key];
//         listCards[key].quantity = 1;
//     }
//     // addToCart();
//     reloadCard();
// }
// function reloadCard(){
//     listCard.innerHTML = '';
//     let count = 0;
//     let totalPrice = 0;
//     listCards.forEach((value, key) => {
//         totalPrice = totalPrice + value.price;
//         count = count + value.quantity;
//     })
//     total.innerText = totalPrice.toLocaleString();
//     quantity.innerText = count;

// }

// ////////////////////////////////////

let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'PRODUCT NAME 1' ,
        image:'7.PNG',
        price: 1200
    },
    {
        id: 1,
        name: 'CLOSE CALL PERFUME' ,
        image: '5.PNG',
        price:  999
    },
    {
        id: 3,
        name: 'BLACK BAGGY FIT JEANS' ,
        image: '1.PNG',
        price:  2229
    },
    {
        id: 4,
        name: 'CORDIAL GREEN RIBBED T-SHIRT' ,
        image: '2.PNG',
        price: 1199
    },
    {
        id: 5,
        name: ' ENVY BLACK BAGGY JOGGER' ,
        image: '3.PNG',
        price: 1699
    },
    {
        id: 6,
        name: 'SUMMER VIBE GREEN CO-ORDS' ,
        image: '4.PNG',
        price:  899
    },
    {
        id: 7,
        name: "AIR JORDAN 1 LOW 'SKY J PURPLE/ACTION GRAPE-SAIL'" ,
        image: '8.PNG',
        price:  5699
    },
    {
        id: 8,
        name: "AIR JORDAN 1 MID SE 'BLACK/VIVID ORANGE'" ,
        image: '9.PNG',
        price:  15899
    },
    {
        id: 9,
        name: "AIR JORDAN 5 RETRO SE 'DEEP BURGUNDY/LT GRAPHITE'" ,
        image: '10.PNG',
        price:  13599
    },
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">&#8377;${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}

