
let cart = [];

function addToCart() {
    const selectedItem = document.getElementById('item').value;
    const quantity = document.getElementById('quantity').value;
    const customization = document.getElementById('customization').value;

    cart.push({
        item: selectedItem,
        quantity: quantity,
        customization: customization,
    });

    updateCart();
}

function updateCart() {
    const cartItemsList = document.getElementById('cart-items');
    cartItemsList.innerHTML = '';

    cart.forEach((cartItem) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${cartItem.item} x${cartItem.quantity}`;
        cartItemsList.appendChild(listItem);
    });

    showCheckoutSection();
}

function showCheckoutSection() {
    const checkoutSection = document.getElementById('checkout-section');
    if (cart.length > 0) {
        checkoutSection.style.display = 'block';
    } else {
        checkoutSection.style.display = 'none';
    }
}

function submitOrder() {
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;

    console.log('Order Submitted:');
    console.log('Name:', name);
    console.log('Phone:', phone);
    console.log('Address:', address);
    console.log('Items in Cart:', cart);
}
