import React, { useContext } from 'react';
import { ShopContext } from '../../context/shop-context';

export const CartItem = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(ShopContext);

  return (
    <div className="cartItem rounded-xl bg-[#fff0db] relative mt-3 h-full m-[100px] flex flex-col justify-center items-center  px-2 py-2">
      <img className="w-[400px] h-auto bg-[#eed9c4] text-center" src={productImage} />
      <div className="description w-full bg-[#eed9c4]">
        <p className="text-center w-full text-[#5C4033]">
          <b className="text-center w-full">{productName}</b>
        </p>
        <p className="text-center text-[#5C4033] w-full"> Price: ${price}</p>
        <div className="countHandler flex items-center justify-center gap-1 mb-3">
          <button className="ml-4 bg-white hover:bg-white/90 text-black font-bold px-2 border border-black/80 rounded" onClick={() => removeFromCart(id)}>
            -
          </button>
          <input className="w-4 text-center px-1 rounded-xl" value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value), id)} />
          <button className="mr-4 bg-white hover:bg-white/90 text-black font-bold px-2 border border-black/80 rounded" onClick={() => addToCart(id)}>
            +
          </button>
        </div>
      </div>
    </div>
  );
};
