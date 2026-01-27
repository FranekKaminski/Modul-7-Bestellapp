let basket = [];

// BASKET & TOPNAV TOGGLE ON/OFF SWITCH
function toggleBasket() {
    document.getElementById("basket").classList.toggle('basket_closed')
};

function toggleTopNav() {
    document.querySelector(".topnavbar").classList.toggle("topnav_closed")
};

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
    let basketRef = document.getElementById("basket");
    basket.push({
        name: food.name,
        price: food.price,
        image: food.image,
        quantity: 1
    });
    renderBasketItems();
    calculateBasket();
    if (basketRef.classList.contains("basket_closed")) {
        toggleBasket()
    };
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

    // CALCULATE TOTAL
    for (let i = 0; i < basket.length; i++) {
        subtotal += basket[i].price * basket[i].quantity;
    }
    let deliveryFee = basket.length > 0 ? 6.99 : 0;
    let total = subtotal + deliveryFee;

    // UPDATE HTML
    document.querySelector(".subtotalprice").innerHTML = `$ ${subtotal.toFixed(2)}`;
    document.querySelector(".deliveryprice").innerHTML = `$ ${deliveryFee.toFixed(2)}`;
    document.querySelector(".totalprice").innerHTML = `$ ${total.toFixed(2)}`;
    updateNavbarBasket();
}

// UPDATE NAVBAR BASKET COUNT
function updateNavbarBasket() {
    let totalItems = 0;
    for (let i = 0; i < basket.length; i++) {
        totalItems += basket[i].quantity;
    }

    const topBadge = document.getElementById("navbarbaskettop");
    const bottomBadge = document.getElementById("navbarbasket");

    [topBadge, bottomBadge].forEach(badge => {
        badge.innerHTML = totalItems;
        badge.style.display = totalItems === 0 ? "none" : "flex";
    });
}

// BUY NOW DIALOG POP UP AND CLOSE
const dialogRef = document.getElementById("confirmationDialog");
function openDialog() {
    dialogRef.showModal();
}

function closeDialog() {
    dialogRef.close()
}

// EMPTY BASKET
function checkout() {
    basket = [];
    renderBasketItems();
    calculateBasket();
    openDialog();
}