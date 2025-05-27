// Script para o site da Stampô - Redesign moderno

// Elementos DOM
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const navLinks = document.getElementById('nav-links');
const cartIcon = document.getElementById('cart-icon');
const cartPopup = document.getElementById('cart-popup');
const cartClose = document.getElementById('cart-close');
const cartItems = document.getElementById('cart-items');
const cartTotalPrice = document.getElementById('cart-total-price');
const checkoutBtn = document.getElementById('checkout-btn');

// Produtos (simulação de banco de dados)
const products = [
    {
        id: 1,
        name: "Camiseta Básica Preta",
        price: 49.90,
        image: "images/product-1.jpg"
    },
    {
        id: 2,
        name: "Camiseta Estampada Rock",
        price: 59.90,
        image: "images/product-2.jpg"
    },
    {
        id: 3,
        name: "Camiseta Premium Azul",
        price: 79.90,
        image: "images/product-3.jpg"
    },
    {
        id: 4,
        name: "Camiseta Personalizada",
        price: 69.90,
        image: "images/product-4.jpg"
    }
];

// Carrinho de compras
let cart = [];

// Funções
function toggleMobileMenu() {
    navLinks.classList.toggle('active');
}

function toggleCart() {
    cartPopup.classList.toggle('active');
}

function closeCart() {
    cartPopup.classList.remove('active');
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    
    if (!product) return;
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1
        });
    }
    
    updateCartUI();
    updateCartCount();
    
    // Mostrar o carrinho após adicionar um item
    cartPopup.classList.add('active');
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartUI();
    updateCartCount();
}

function updateQuantity(productId, newQuantity) {
    if (newQuantity < 1) return;
    
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity = newQuantity;
        updateCartUI();
    }
}

function updateCartUI() {
    // Limpar o conteúdo atual do carrinho
    cartItems.innerHTML = '';
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="empty-cart">Seu carrinho está vazio</p>';
        cartTotalPrice.textContent = 'R$ 0,00';
        return;
    }
    
    // Adicionar cada item ao carrinho
    cart.forEach(item => {
        const cartItemElement = document.createElement('div');
        cartItemElement.classList.add('cart-item');
        
        cartItemElement.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="cart-item-img">
            <div class="cart-item-details">
                <h4 class="cart-item-title">${item.name}</h4>
                <p class="cart-item-price">R$ ${item.price.toFixed(2)}</p>
                <div class="cart-item-quantity">
                    <button class="quantity-btn minus" onclick="updateQuantity(${item.id}, ${item.quantity - 1})">-</button>
                    <input type="number" class="quantity-input" value="${item.quantity}" min="1" onchange="updateQuantity(${item.id}, parseInt(this.value))">
                    <button class="quantity-btn plus" onclick="updateQuantity(${item.id}, ${item.quantity + 1})">+</button>
                </div>
            </div>
            <button class="cart-item-remove" onclick="removeFromCart(${item.id})">
                <i class="fas fa-trash"></i>
            </button>
        `;
        
        cartItems.appendChild(cartItemElement);
    });
    
    // Atualizar o preço total
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotalPrice.textContent = `R$ ${total.toFixed(2)}`;
}

function updateCartCount() {
    const cartCount = document.querySelector('.cart-count');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    cartCount.textContent = totalItems;
}

function checkout() {
    if (cart.length === 0) {
        alert('Seu carrinho está vazio!');
        return;
    }
    
    // Preparar a mensagem para o Instagram
    let message = "Olá! Gostaria de fazer o seguinte pedido:\n\n";
    
    cart.forEach(item => {
        message += `${item.quantity}x ${item.name} - R$ ${(item.price * item.quantity).toFixed(2)}\n`;
    });
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    message += `\nTotal: R$ ${total.toFixed(2)}`;
    
    // Codificar a mensagem para URL
    const encodedMessage = encodeURIComponent(message);
    
    // Redirecionar para o Instagram Direct
    window.open(`https://instagram.com/direct/t/stampo?text=${encodedMessage}`, '_blank');
    
    // Limpar o carrinho após o checkout
    cart = [];
    updateCartUI();
    updateCartCount();
    closeCart();
}

// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
    // Menu mobile
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    }
    
    // Carrinho
    if (cartIcon) {
        cartIcon.addEventListener('click', toggleCart);
    }
    
    if (cartClose) {
        cartClose.addEventListener('click', closeCart);
    }
    
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', checkout);
    }
    
    // Botões de adicionar ao carrinho
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            addToCart(productId);
        });
    });
    
    // Inicializar a contagem do carrinho
    updateCartCount();
});

// Fechar o carrinho quando clicar fora dele
document.addEventListener('click', function(event) {
    if (cartPopup.classList.contains('active') && 
        !cartPopup.contains(event.target) && 
        !cartIcon.contains(event.target)) {
        closeCart();
    }
});

// Expor funções para uso global (para os botões inline)
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.updateQuantity = updateQuantity;
