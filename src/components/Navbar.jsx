import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'phosphor-react';
import { Storefront } from 'phosphor-react';
import { Headphones } from 'phosphor-react';

export const Navbar = () => {
  return (
    <div className="w-full h-[40px] flex justify-end">
      <div className="links flex items-center mr-13 px-4 justify-end">
        <Link
          to={'/'}
          className=" mr-5 no-underline flex text-center border-2 border-[#ebe5f9d9] bg-[#ebe5f9d9] rounded-xl w-full justify-between text-black gap-2 px-2 mt-10"
        >
          <p className="items-center text-black/75  justify-center content-center flex">Store</p>
          <Storefront size={35} weight="thin" className="text-[#4C2895]" />
        </Link>
        <Link to={'/cart'}>
          {' '}
          <ShoppingCart
            size={40}
            className="text-white border-3 border-white py-1 px-1 bg-orange-400 rounded-xl  mt-10"
          />{' '}
        </Link>
      </div>
    </div>
  );
};
