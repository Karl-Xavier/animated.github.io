if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
} 

function ready() {

    var addToCart = document.getElementsByClassName("order-button")
    for(let i = 0; i < addToCart.length; i++) {

        var button = addToCart[i]
        button.addEventListener("click", addToCartClicked)
    }

   var removeCartItemButtons = document.getElementsByClassName('btn-danger')
    for(var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener("click", removeCartItem)
    }

    var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for(let i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }

    document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchasedClicked)

}

function purchasedClicked() {
    alert("Thank You For Your Purchase")
    var cartItem = document.getElementsByClassName('cart-items')[0]
    while (cartItem.hasChildNodes) {
        cartItem.removeChild(cartItem.firstChild)
        updateCartTotal()
    }
   
}

function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}

function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
}

function addToCartClicked(event) {
    var button = event.target
    var shopItem = button.parentElement.parentElement
    var title = shopItem.getElementsByClassName("order-p")[0].innerText
    var prices = shopItem.getElementsByClassName("price")[0].innerHTML
    var imageSrc = shopItem.getElementsByClassName("image")[0].src
    console.log(title, prices, imageSrc)
    addItemToCart(title, prices, imageSrc)
    updateCartTotal()
}

function addItemToCart(title, prices, imageSrc) {
    var cartRow = document.createElement("div")
    cartRow.classList.add("cart-row")
    var cartItems = document.getElementsByClassName("cart-items")[0]
    var cartItemsNames = cartItems.getElementsByClassName("cart-item-title")
    for (let i = 0; i < cartItemsNames.length; i++) {
        if (cartItemsNames[i].innerHTML == title) {
            alert("This item is already added")
            return
        }
    }
    var cartRowContents = `
    <div class="cart-item cart-column">
        <img class="img image" src="${imageSrc}" height="180" width="180" style="border-radius: 10px;">
        <span class="cart-item-title" style="font-weight: bold;">${title}</span>
    </div>
    <span class="cart-price cart-column price">${prices}</span>
    <div class="cart-quantity cart-column">
        <input type="number" value="1" class="cart-quantity-input">
        <button class="btn btn-danger" type="button">REMOVE</button>
    </div>`
    cartRow.innerHTML = cartRowContents
   cartItems.append(cartRow)
   cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
   cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
}

function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    for(var i = 0; i < cartRows.length; i++) {
    var cartRow = cartRows[i]
    var priceElement = cartRow.getElementsByClassName('cart-price')[0]
    var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
    var price = parseFloat(priceElement.innerText.replace('$', ''))
    var quantity = quantityElement.value
    total = total + (price * quantity)
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cart-total-price')[0].innerText ='$' + total
}