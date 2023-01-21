import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'phosphor-react';

export const Navbar = () => {
  return (
    <div className="w-full h-20 bg-black/90 flex justify-end items-center">
      <div className="links flex items-center mr-13">
        <Link to={'/'} className="text-white text-2xl mr-5 no-underline">
          {' '}
          Shop{' '}
        </Link>
        <Link to={'/cart'}>
          {' '}
          <ShoppingCart size={40} className="text-white" />{' '}
        </Link>
      </div>
      ;
    </div>
  );
};
