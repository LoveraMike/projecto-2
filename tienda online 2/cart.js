// Initialize an empty cart array
let cart = [];

// Function to add a product to the cart
function addToCart(productName, price, imageUrl) {
    const product = {
        name: productName,
        price: price,
        image: imageUrl,
    };
    cart.push(product);
    updateCart();
}

// Function to update the cart's HTML representation
function updateCart() {
    const cartItemElement = document.getElementById('cartItem');
    const totalCartElement = document.getElementById('totalC');

    if (cart.length === 0) {
        cartItemElement.textContent = 'Tu canasta está vacía';
        totalCartElement.textContent = '₲ 0'; // Update the total symbol here
    } else {
        let cartItemsHTML = '';
        let total = 0;

        for (const product of cart) {
            // Format the price with two decimal places and the Paraguayan Guarani symbol
            const formattedPrice = `₲ ${product.price.toFixed(0)}`;

            cartItemsHTML += `<div class="cart-item">
                <img src="${product.image}" alt="${product.name}" class="cart-item-image">
                <div class="cart-item-details">
                    <p>${product.name}</p>
                    <p class="cart-item-price">${formattedPrice}</p>
                </div>
            </div>`;

            total += product.price;
        }

        // Format the total price with two decimal places and the Paraguayan Guarani symbol
        const formattedTotal = `₲ ${total.toFixed(0)}`;

        cartItemElement.innerHTML = cartItemsHTML;
        totalCartElement.textContent = formattedTotal;
    }
}

// Example: Add an event listener to each "Add to Cart" button
const addToCartButtons = document.querySelectorAll('.cart');
addToCartButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        const productName = document.querySelectorAll('.des h5')[index].textContent;
        const productPrice = parseFloat(document.querySelectorAll('.des h4')[index].textContent.replace('₲ ', '')); // Update the currency symbol here
        const productImage = document.querySelectorAll('.pro img')[index].getAttribute('src');
        addToCart(productName, productPrice, productImage);
    });
});
