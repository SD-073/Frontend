import { useState, useReducer } from 'react';
import { ProductsContext } from '.';
import { getCart, updateCart } from '../storage';

const reducer = (state, action) => {
  switch(action.type) {
    case "add":
      // return {...state, cart: [{...action.product, qty:1, totalPrice: action.product.price}, ...state.cart]}
      return {...state, cart: updateCart(action.product,state.cart , "add")}
    case "remove":
        // return {...state, cart: state.cart.filter((p) => p.id !== action.product.id)}
        return {...state, cart: updateCart(action.product, state.cart, "remove")}
    case "increase":
        // return {
        //   ...state,
        //   cart: state.cart.map((p) =>
        //     p.id == action.product.id ? { ...p, qty: p.qty + 1, totalPrice: p.price * (p.qty + 1) } : p,
        //   ),
        // };
        return { ...state, cart: updateCart(action.product, state.cart, "increase")}
    case "decrease":
      // return {...state, cart: state.cart.map((p) => p.id === action.product.id? { ...p, qty: p.qty - 1, totalPrice: p.price * (p.qty - 1) } : p )}
      return {...state, cart: updateCart(action.product, state.cart, "decrease")}
  }
}

function ProductsStates({ children }) {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cartState, cartDispatch] = useReducer(reducer, {
    cart: getCart(),
    totalAmountProducts: getCart().reduce((acc, currentValue) => acc + currentValue.qty, 0),
    totalPrice: getCart().reduce((acc, currentValue) => acc + currentValue.totalPrice, 0),
  });


  return (
    <ProductsContext.Provider
      value={{
        products,
        setProducts,
        categories,
        setCategories,
        loading,
        setLoading,
        error,
        setError,
        cartState,
        cartDispatch
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}

export default ProductsStates;
