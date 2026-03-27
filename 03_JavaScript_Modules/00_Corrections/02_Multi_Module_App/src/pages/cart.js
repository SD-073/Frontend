import {
  clearCart,
  getCart,
  removeFromCart,
  updateQuantity,
} from '../utils/storage';

const calcTotal = (cart) =>
  cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

const calcTotalItems = (cart) =>
  cart.reduce((sum, item) => sum + item.quantity, 0);

const createCartItem = (item, onUpdate) => {
  const row = document.createElement('div');
  row.className = 'cart-item';

  row.innerHTML = `
    <img src="${item.image}" alt="${item.title}" class="cart-img" />
    <div class="cart-item-info">
        <h2 class="cart-item-title">${item.title} </h2>
        <p class="cart-item-price">$${item.price} </p>
    </div>

    <div class="qty-controls">
        <button class="btn-qty">-</button>
        <span class="qty">${item.quantity}</span>
        <button class="btn-qty">+</button>
    </div>

    <button class="btn btn-remove">Remove</button>  
  `;

  const [btnMinus, btnPlus] = row.querySelectorAll('.btn-qty');

  btnMinus.addEventListener('click', () => {
    if (item.quantity === 1) {
      removeFromCart(item.id);
    } else {
      updateQuantity(item.id, item.quantity - 1);
    }
    onUpdate(); // will be used to re-render!
  });

  btnPlus.addEventListener('click', () => {
    updateQuantity(item.id, item.quantity + 1);
    onUpdate();
  });

  row.querySelector('.btn-remove').addEventListener('click', () => {
    removeFromCart(item.id);
    onUpdate();
  });

  return row;
};

export const renderCart = (container) => {
  const cart = getCart();

  container.innerHTML = '<h1 class="page-title">Shopping Cart</h1>';

  if (cart.length === 0) {
    container.innerHTML += '<p class="empty">Your cart is empty.</p>';
    return;
  }

  const list = document.createElement('div');
  list.className = 'cart-list';

  cart.forEach((item) =>
    list.appendChild(createCartItem(item, () => renderCart(container))),
  );

  container.appendChild(list);

  const summary = document.createElement('div');
  summary.className = 'cart-summary';

  summary.innerHTML = `
    <p>Total items: <strong>${calcTotalItems(cart)}</strong></p>
    <p> Total price: <strong>$${calcTotal(cart).toFixed(2)}</strong></p>  
  `;

  const btnCheckout = document.createElement('button');
  btnCheckout.className = 'btn btn-checkout';
  btnCheckout.textContent = 'Place Order';

  btnCheckout.addEventListener('click', () => {
    clearCart();

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = 'Order confirmed';
    document.body.appendChild(toast);

    setTimeout(() => {
      toast.remove();
      renderCart(container);
    }, 3000);
  });

  summary.appendChild(btnCheckout);
  container.appendChild(summary);
};
