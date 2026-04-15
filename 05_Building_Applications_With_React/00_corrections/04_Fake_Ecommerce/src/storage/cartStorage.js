export const saveCart = (value) => {
  localStorage.setItem('cart', JSON.stringify(value));
};

export const getCart = () => {
  const items = localStorage.getItem('cart');
  return JSON.parse(items) || [];
};

// if you want to use the updateCart function to update not only the localStorage
// but also the state of the cart, you need to use the cart state to be able to 
// correctly update the cart.
export const updateCart = (value, cart, method) => {
  //   const cart = getCart();
  let updatedCart;

  switch (method) {
    case 'add':
      updatedCart = [{ ...value, qty: 1, totalPrice: value.price }, ...cart];
      break;
    case 'remove':
      if (cart.length === 1) {
        localStorage.removeItem('cart');
        return [];
      }
      updatedCart = cart.filter((p) => p.id !== value.id);
      break;
    case 'increase':
      updatedCart = cart.map((p) =>
        p.id == value.id ? { ...p, qty: p.qty + 1, totalPrice: p.price * (p.qty + 1) } : p,
      );
      break;
    case 'decrease':
      updatedCart = cart.map((p) =>
        p.id == value.id ? { ...p, qty: p.qty - 1, totalPrice: p.price * (p.qty - 1) } : p,
      );
      break;
  }
  saveCart(updatedCart);
  //   console.log(getCart());
  console.log(updatedCart);
  return updatedCart;
};

// If you only want to update the localStorage without updating the state of the cart,
// you can just retrieve the cart from localStorage to use it to update.
export const updateCartStorageOnly = (value, method) => {
  const cart = getCart();
  let updatedCart;

  switch (method) {
    case 'add':
      updatedCart = [{ ...value, qty: 1, totalPrice: value.price }, ...cart];
      break;
    case 'remove':
      if (cart.length === 1) {
        localStorage.removeItem('cart');
        return [];
      }
      updatedCart = cart.filter((p) => p.id !== value.id);
      break;
    case 'increase':
      updatedCart = cart.map((p) =>
        p.id == value.id ? { ...p, qty: p.qty + 1, totalPrice: p.price * (p.qty + 1) } : p,
      );
      break;
    case 'decrease':
      updatedCart = cart.map((p) =>
        p.id == value.id ? { ...p, qty: p.qty - 1, totalPrice: p.price * (p.qty - 1) } : p,
      );
      break;
  }
  saveCart(updatedCart);
};
