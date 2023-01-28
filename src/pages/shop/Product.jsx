import React, { useContext } from 'react';
import { ShopContext } from '../../context/shop-context';

export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemCount = cartItems[id];

  return (
    <div className="product rounded-xl w-[300px] bg-white relative   h-full m-[100px] flex flex-col justify-center items-center border-2 border-white px-2 py-2  shadow-xl ">
      <img src={productImage} className="w-[400px] h-auto bg-white" />
      <div className="description text-center bg-white">
        <p>
          <b>{productName}</b>
        </p>
        <p> ${price}</p>
      </div>
      <button
        className="addToCartBtn border-2 mt-1 border-white text-white bg-orange-400 rounded-2xl py-2 px-4 hover:bg-orange-300 hover:scale-110"
        onClick={() => addToCart(id)}
      >
        Add to Cart{cartItemCount > 0 && <> ({cartItemCount})</>}
      </button>
    </div>
  );
};
