import { useProducts } from '../contexts';
// import { updateCart } from "../storage";

function ProductCard({ product }) {
  const { cartState, cartDispatch } = useProducts();
  const productInCart = cartState.cart.find((p) => p.id === product.id);
  const removeClick = () => {
    if (product.qty === 1) {
      cartDispatch({ type: 'remove', product });
      // updateCart(product, "remove");
    } else {
      cartDispatch({ type: 'decrease', product });
      // updateCart(product, "decrease")
    }
  };
  const addClick = () => {
    if (!productInCart) {
      cartDispatch({ type: 'add', product });
      // updateCart(product, "add")
    } else {
      cartDispatch({ type: 'increase', product });
      // updateCart(product, "increase")
    }
  };
  return (
    <div className='card w-3xs flex bg-gray-300 text-primary flex-auto'>
      <figure className='overflow-hidden h-40 p-3 w-full'>
        <img className='object-scale-down w-full h-full' src={product.image} alt={product.title} />
      </figure>
      <div className='flex flex-col justify-around items-center p-3'>
        <h2 className='card-title'>{product.title.length > 20 ? product.title.slice(0, 20) + "..." : product.title}</h2>
        <div className='flex justify-around w-full'>
             <p className=''>{product.rating.rate}</p>
        <p className=''>{product.price}$</p>
        </div>
       
      </div>
      <div className='card-actions justify-center my-3'>
        {!productInCart ? (
          <button className='btn btn-primary' onClick={addClick}>Save to cart</button>
        ) : (
          <div className='flex items-center gap-3'>
            <button className='btn btn-primary' onClick={removeClick}>-</button>
            <p>{productInCart.qty}</p>
            <button className='btn btn-primary' onClick={addClick}>+</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
