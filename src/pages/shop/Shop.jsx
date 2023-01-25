import React from 'react';
import { PRODUCTS } from '../../products';
import { Product } from './product';

export const Shop = () => {
  return (
    <div className="">
      <div className="mt-[100px] text-center text-[40px]">
        <h1 className="font-bold text-[#2D2D2D]">Our Headphones</h1>
        <p className="text-[1.1rem]">Check Them Out Below!</p>
      </div>

      <div className="products w-full h-auto flex flex-1 flex-col lg:flex-row content-center justify-center place-items-center flex-wrap">
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
};
