'use client';

import Image from 'next/image';

interface ProductCardProps {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  description: string;
}

export default function ProductCard({
  id,
  title,
  price,
  thumbnail,
  description,
}: ProductCardProps) {
  interface CartItem {
    id: number;
    title: string;
    price: number;
    thumbnail: string;
    quantity: number;
  }

  const handleAddToCart = () => {
  const token = localStorage.getItem('token');
  if (!token) {
    alert('Please log in or register first!');
    window.location.href = '/login';
    return;
  }

  const cart: CartItem[] = JSON.parse(localStorage.getItem('cart') || '[]');
  const existingIndex = cart.findIndex((item: CartItem) => item.id === id);
  if (existingIndex !== -1) {
    cart[existingIndex].quantity += 1;
  } else {
    cart.push({ id, title, price, thumbnail, quantity: 1 });
  }

  localStorage.setItem('cart', JSON.stringify(cart));
  alert(`${title} added to cart!`);
};

  return (
    <div className="group bg-white shadow-xl hover:shadow-2xl rounded-2xl overflow-hidden transform transition duration-300 hover:-translate-y-1">
      <div className="relative">
        <Image
          src={thumbnail}
          alt={title}
          width={400}
          height={300}
          className="h-52 w-full object-cover"
        />
      </div>
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800 group-hover:text-blue-700 transition">
          {title}
        </h2>
        <p className="text-sm text-gray-500 mt-1 line-clamp-2">
          {description}
        </p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-blue-600 font-bold text-lg">${price}</span>
          <button
            onClick={handleAddToCart}
            className="text-sm text-white bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded-lg transition"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
