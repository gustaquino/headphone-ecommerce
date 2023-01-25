import React, { useContext } from 'react';

export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;

  return (
    <div className="product rounded-xl w-[300px] h-[350px] m-[100px] flex flex-col justify-center items-center">
      <img src={productImage} className="w-[400px] h-auto " />
      <div className="description text-center">
        <p>
          <b>{productName}</b>
        </p>
        <p> ${price}</p>
      </div>
      <button className="addToCartBtn border-2 mt-1 border-white text-white bg-[#4C2895] rounded-2xl py-2 px-4 hover:bg-[#5d3d9f] hover:scale-110">
        Add to Cart
      </button>
    </div>
  );
};
