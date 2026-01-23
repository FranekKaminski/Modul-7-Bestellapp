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
}

// RENDER SELECTED FOOD INTO BASKET
// RENDER SOMETHING
function renderBasketItems() {
    let contentRef = document.getElementById("basketitems");
    contentRef.innerHTML = "";

    for (let i = 0; i < basket.length; i++) {
        contentRef.innerHTML += renderBasketItemsTemplate(basket[i], i);
    }
}


// ADD AND SUBTRACT BASKET ITEMS
function minusOneItem() {
    let counterRef = document.getElementById("basketitemcounter");
    let count = parseInt(counterRef.innerHTML);
    if (count > 1) {
        count--;
        counterRef.innerHTML = count;
    }
}

function plusOneItem() {
    let counterRef = document.getElementById("basketitemcounter");
    let count = parseInt(counterRef.innerHTML);
    count++;
    counterRef.innerHTML = count;
}


// CALCULATE BASKET
function calculateBasket() {

}


// BUY NOW DIALOG POP UP

// close button closes dialog



// RESPONSIVE MACHEN