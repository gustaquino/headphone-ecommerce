import React from 'react';
import { PRODUCTS } from '../../products';
import { Product } from './product';

export const Shop = () => {
  return (
    <div className="">
      <div className="mt-[100px] text-center text-[40px]">
        <h1 className="font-bold text-[#5C4033] uppercase px-[2px]">Our Headphones</h1>
        <p className="text-[1.1rem] text-[#5C4033]">Check Them Out Below!</p>
      </div>

      <div className="products w-full h-auto flex flex-1 flex-col lg:flex-row content-center justify-between place-items-center flex-wrap">
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
};
