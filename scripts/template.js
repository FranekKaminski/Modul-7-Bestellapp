function foodRenderTemplate(i) {
    let food = foodList[i]
    return `<article class="foodarticle">
                        <div class="foodimageandname">
                            <img class="foodimages" src="${food.image}" alt="${food.name} Bild">
                            <div>
                                <h4>${food.name}</h4>
                            </div>
                        </div>
                        <div class="priceandname">

                            <h5>${food.description}</h5>
                            <div class="priceandaddbutton">
                                <div>
                                    <p class="startingprice">Starting from</p>
                                    <p class="price" id="price">$ ${food.price}</p>
                                </div>
                                <div class="plusicon" onclick="addToBasket(${i})"><img src="./img/icons/add.png" alt="plus icon"></div>
                            </div>
                        </div>
                    </article>`
}

function renderBasketItemsTemplate(item, i) {
    return `
    <div class="orderinbasket">
        <div>
            <img class="foodimageinbasket" src="${item.image}" alt="${item.name}">
        </div>
        <div>
            <div>
                <p class="foodname">${item.name}</p>
            </div>
            <div>
                <p class="greyprice">$ ${item.price}</p>
            </div>
        </div>
        <div>
            <div class="numberofitems">
                <img class="basketsigns" src="./img/icons/minuswhite.png" onclick="minusOneItem(${i})" alt="Minus Sign">
                <p class="counter" id="basketitemcounter-${i}">${item.quantity}</p>
                <img class="basketsigns" src="./img/icons/pluswhite.png" onclick="plusOneItem(${i})" alt="Plus sign">
            </div>
            <div>
                <p class="combinedprice">$ ${ (item.price * item.quantity).toFixed(2) }</p>
            </div>
        </div>
    </div>`;
}
function renderBasketItemsTemplate(item, i) {
    return `
    <div class="orderinbasket">
        <div>
            <img class="foodimageinbasket" src="${item.image}" alt="${item.name}">
        </div>
        <div>
            <div>
                <p class="foodname">${item.name}</p>
            </div>
            <div>
                <p class="greyprice">$ ${item.price}</p>
            </div>
        </div>
        <div>
            <div class="numberofitems">
                <img class="basketsigns" src="./img/icons/minuswhite.png" onclick="minusOneItem(${i})" alt="Minus Sign">
                <p class="counter" id="basketitemcounter-${i}">${item.quantity}</p>
                <img class="basketsigns" src="./img/icons/pluswhite.png" onclick="plusOneItem(${i})" alt="Plus sign">
            </div>
            <div>
                <p class="combinedprice">$ ${ (item.price * item.quantity).toFixed(2) }</p>
            </div>
        </div>
    </div>`;
}
function renderBasketItemsTemplate(item, i) {
    return `
    <div class="orderinbasket">
        <div>
            <img class="foodimageinbasket" src="${item.image}" alt="${item.name}">
        </div>
        <div>
            <div>
                <p class="foodname">${item.name}</p>
            </div>
            <div>
                <p class="greyprice">$ ${item.price}</p>
            </div>
        </div>
        <div>
            <div class="numberofitems">
                <img class="basketsigns" src="./img/icons/minuswhite.png" onclick="minusOneItem(${i})" alt="Minus Sign">
                <p class="counter" id="basketitemcounter-${i}">${item.quantity}</p>
                <img class="basketsigns" src="./img/icons/pluswhite.png" onclick="plusOneItem(${i})" alt="Plus sign">
            </div>
            <div>
                <p class="combinedprice">$ ${ (item.price * item.quantity).toFixed(2) }</p>
            </div>
        </div>
    </div>`;
}
