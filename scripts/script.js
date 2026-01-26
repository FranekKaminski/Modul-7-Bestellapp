let userName = "Franek"
let basket = [];

// BASKET TOGGLE ON/OFF SWITCH
function toggleBasket() {
    document.getElementById("basket").classList.toggle('basket_closed')
}

// RENDER FOODS FROM DATABASE INTO HTML
function renderFoods() {
    let contentRef = document.getElementById("foodsection");
    contentRef.innerHTML = "";

    for (let i = 0; i < foodList.length; i++) {
        contentRef.innerHTML += foodRenderTemplate(i);
    }
}

// TRANSFORM BUTTON AFTER ADDED TO BASKET
function addToBasket(i) {
    let food = foodList[i];

    basket.push({
        name: food.name,
        price: food.price,
        image: food.image,
        quantity: 1
    });
    renderBasketItems();
    calculateBasket()
}

// RENDER SELECTED FOOD INTO BASKET
function renderBasketItems() {
    let contentRef = document.getElementById("basketitems");
    contentRef.innerHTML = "";

    for (let i = 0; i < basket.length; i++) {
        contentRef.innerHTML += renderBasketItemsTemplate(basket[i], i);
    }
}

// ADD AND SUBTRACT BASKET ITEMS
function minusOneItem(i) {
    let item = basket[i];
    if (item.quantity > 1) {
        item.quantity--;
    } else {
        basket.splice(i, 1);
    }
    renderBasketItems();
    calculateBasket();
}

function plusOneItem(i) {
    let item = basket[i];
    item.quantity++;
    renderBasketItems();
    calculateBasket();
}

// CALCULATE BASKET
function calculateBasket() {
    let subtotal = 0;

    // CALCULATE SUBTOTAL
    for (let i = 0; i < basket.length; i++) {
        subtotal += basket[i].price * basket[i].quantity;
    }

    // DELIVERY FEE + SUBTOTAL
    let deliveryFee = basket.length > 0 ? 6.99 : 0;
    let total = subtotal + deliveryFee;

    // UPDATE HTML
    document.querySelector(".subtotalprice").innerHTML = `$ ${subtotal.toFixed(2)}`;
    document.querySelector(".deliveryprice").innerHTML = `$ ${deliveryFee.toFixed(2)}`;
    document.querySelector(".totalprice").innerHTML = `$ ${total.toFixed(2)}`;

    // UPDATE NAVBAR BASKET COUNT
    let totalItems = 0;
    for (let i = 0; i < basket.length; i++) {
        totalItems += basket[i].quantity;
    }

    document.querySelector(".navbarbasket").innerHTML = totalItems;

    let badge = document.querySelector(".navbarbasket");
    badge.innerHTML = totalItems;

    if (totalItems === 0) {
        badge.style.display = "none";
    } else {
        badge.style.display = "flex"
    }
}

// TRANSFORM ADD TO CART BUTTON ON FOODLIST


// BUY NOW DIALOG POP UP AND CLOSE
const dialogRef = document.getElementById("confirmationDialog");
function openDialog() {
    dialogRef.showModal();
}

function closeDialog() {
    dialogRef.close()
}