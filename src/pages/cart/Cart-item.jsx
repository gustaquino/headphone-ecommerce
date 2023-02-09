import React, { useContext } from 'react';
import { ShopContext } from '../../context/shop-context';

export const CartItem = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(ShopContext);

  return (
    <div className="cartItem rounded-xl bg-[#fff0db] relative   h-full m-[100px] flex flex-col justify-center items-center  px-2 py-2">
      <img className="w-[400px] h-auto bg-[#eed9c4] text-center" src={productImage} />
      <div className="description  bg-[#eed9c4]">
        <p className="text-center text-[#5C4033]">
          <b className="text-center">{productName}</b>
        </p>
        <p className="text-center text-[#5C4033]"> Price: ${price}</p>
        <div className="countHandler">
          <button className="ml-4" onClick={() => removeFromCart(id)}>
            -
          </button>
          <input
            className="w-4"
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <button className="mr-4   " onClick={() => addToCart(id)}>
            +
          </button>
        </div>
      </div>
    </div>
  );
};
