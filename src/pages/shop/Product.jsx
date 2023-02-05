import React, { useContext } from 'react';
import { ShopContext } from '../../context/shop-context';

export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemCount = cartItems[id];

  return (
    <div className="product rounded-xl w-[300px] bg-[#eed9c4] relative   h-full m-[100px] flex flex-col justify-center items-center  px-2 py-2  shadow-outline shadow-2xl">
      <img src={productImage} className="w-[400px] h-auto bg-[#eed9c4]" />
      <div className="description text-center text-[#5C4033] bg-[#eed9c4]">
        <p>
          <b>{productName}</b>
        </p>
        <p> ${price}</p>
      </div>
      <button
        className="addToCartBtn mt-2 mb-2 text-white bg-[#DAA06D] rounded-2xl py-2 px-4 hover:bg-orange-300 hover:scale-110"
        onClick={() => addToCart(id)}
      >
        Add to Cart{cartItemCount > 0 && <> ({cartItemCount})</>}
      </button>
    </div>
  );
};
