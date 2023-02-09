import React, { useContext } from 'react';
import { ShopContext } from '../../context/shop-context';
import { PRODUCTS } from '../../products';
import { CartItem } from './cart-item';
import { useNavigate } from 'react-router-dom';

export const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  return (
    <div className="cart bg-[#fff0db]">
      <div>
        <h1 className="font-bold text-2xl text-center uppercase justify-center mt-2 text-[#5C4033]">
          Your Cart Items
        </h1>
      </div>
      <div className="cart products  h-auto flex flex-1 flex-col lg:flex-row content-center justify-between place-items-center">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>
      {totalAmount > 0 ? (
        <div className="checkout content-center justify-center grid place-items-start">
          <p
            className="text-center 
          "
          >
            Subtotal: ${totalAmount}
          </p>
          <button
            className="rounded-xl content-center justify-center  w-[100px] ml-2 px-2 py-2 bg-orange-400"
            onClick={() => navigate('/')}
          >
            Continue Shopping
          </button>
          <button
            className="rounded-xl   ml-2 w-[100px] mt-2 px-2 py-2 bg-orange-500"
            onClick={() => {
              checkout();
              navigate('/checkout');
            }}
          >
            {' '}
            Checkout{' '}
          </button>
        </div>
      ) : (
        <h1 className="text-center text-[#5C4033]"> Your Shopping Cart is Empty</h1>
      )}
    </div>
  );
};
