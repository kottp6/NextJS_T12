'use client';
import Link from 'next/link';
import { useState } from 'react';

// don't use state separate from component
const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-lg font-bold">My Application</h1>
      <button onClick={() => setOpen(!open)} className="lg:hidden">
        ☰
      </button>
      <ul className={`lg:flex gap-6 ${open ? 'block' : 'hidden'} lg:block`}>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/product">Product</Link></li>
        <li><Link href="/category">Category</Link></li>
        <li><Link href="/cart">Cart</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
