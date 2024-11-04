import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AddToCart = () => {
  const [quantity, setQuantity] = useState(1);
  const pricePerItem = 10; // Set the price per item here
  const totalPrice = pricePerItem * quantity;

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-5 border rounded-lg shadow-lg">
      <h1 className="text-xl font-bold mb-4">Add to Cart</h1>
      <p className="mb-2">Price per item: ${pricePerItem}</p>
      <label className="block mb-2" htmlFor="quantity">Quantity:</label>
      <input
        type="number"
        id="quantity"
        value={quantity}
        onChange={handleQuantityChange}
        min="1"
        className="border rounded p-2 w-full mb-4"
      />
      <p className="font-bold mb-4">Total Price: ${totalPrice}</p>
      <Link to="/">
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Add to Cart
        </button>
      </Link>
    </div>
  );
};

export default AddToCart;
