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
    document.querySelector("deliveryprice").innerHTML = `$ ${deliveryFee.toFixed(2)}`;
    document.querySelector("totalprice").innerHTML = `$ ${total.toFixed(2)}`;

    // UPDATE NAVBAR BASKET COUNT
    let totalItems = 0;
    for (let i = 0; i < basket.length; i++) {
        totalItems += basket[i].quantity;
    }
    document.querySelector("navbarbasket").innerHTML = totalItems;
}