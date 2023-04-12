import React from "react";
import { useGallary } from "../../context/gallaryContext";

const CartList = () => {
  const { cartItems, removeFromCart } = useGallary();
  return (
    <div className="px-5 py-10">
      {cartItems.length > 0 &&
        cartItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center w-10 h-10 mb-10 gap-x-5"
          >
            <img
              src={item.url}
              alt=""
              className="object-cover w-full h-full rounded-full"
            />
            <button
              className="px-6 py-3 font-semibold text-white bg-red-500 rounded-md"
              onClick={() => removeFromCart(item.id)}
            >
              Delete
            </button>
          </div>
        ))}
    </div>
  );
};

export default CartList;
