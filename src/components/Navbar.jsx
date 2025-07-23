'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem('token');
    setIsLoggedIn(!!user);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    window.location.href = '/login'; // redirect to login
  };

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

        {!isLoggedIn ? (
          <>
            <li><Link href="/login">Login</Link></li>
            <li><Link href="/register">Register</Link></li>
          </>
        ) : (
          <>
            <li><Link href="/profile">Profile</Link></li>
            <li>
              <button
                onClick={handleLogout}
                className="text-white hover:text-gray-300"
              >
                Logout
              </button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
