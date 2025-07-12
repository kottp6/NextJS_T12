'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

interface CartItem {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  quantity: number;
}

export default function CartContent() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    setCartItems(cart);
  }, []);

  if (cartItems.length === 0) {
    return (
      <div className="bg-white p-6 rounded-xl shadow text-center text-gray-600">
        Your cart is currently empty.
      </div>
    );
  }

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <ul className="space-y-4">
        {cartItems.map((item) => (
          <li
            key={item.id}
            className="flex items-center gap-4 border-b pb-4 last:border-b-0"
          >
            <Image
              src={item.thumbnail}
              alt={item.title}
              width={80}
              height={80}
              className="rounded object-cover"
            />
            <div className="flex-1">
              <h2 className="font-semibold text-gray-800">{item.title}</h2>
              <p className="text-sm text-gray-500">
                ${item.price} × {item.quantity}
              </p>
            </div>
            <div className="font-bold text-blue-700">
              ${item.price * item.quantity}
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-6 text-right text-lg font-semibold text-blue-800">
        Total: ${total.toFixed(2)}
      </div>
    </div>
  );
}
