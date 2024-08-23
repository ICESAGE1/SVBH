let cart = [];
const fixedPricePerItem = 25;

function addToCart() {
    const itemName = document.getElementById('item-name').value;
    const itemQuantity = parseInt(document.getElementById('item-quantity').value);

    if (itemName && itemQuantity > 0) {
        const itemTotalPrice = itemQuantity * fixedPricePerItem;
        cart.push({ item: itemName, quantity: itemQuantity, price: itemTotalPrice });
        updateCart();
        clearInputFields();
    } else {
        alert('Please enter a valid item name and quantity.');
    }
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const total = document.getElementById('total');
    cartItems.innerHTML = '';
    let totalPrice = 0;

    cart.forEach(cartItem => {
        const li = document.createElement('li');
        li.textContent = `${cartItem.item} (x${cartItem.quantity}) - ₹${cartItem.price}`;
        cartItems.appendChild(li);
        totalPrice += cartItem.price;
    });

    total.textContent = `Total: ₹${totalPrice}`;
}

function clearInputFields() {
    document.getElementById('item-name').value = '';
    document.getElementById('item-quantity').value = '1';
}

function checkout() {
    if (cart.length > 0) {
        alert(`Thank you for your purchase! Your total is ₹${cart.reduce((total, item) => total + item.price, 0)}.`);
        cart = [];
        updateCart();
    } else {
        alert('Your cart is empty.');
    }
}