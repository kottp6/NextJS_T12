'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    username: '',
    password: '',
    firstname: '',
    lastname: '',
    phone: '',
    city: '',
    street: '',
    zipcode: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch('https://fakestoreapi.com/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: `${form.username}@example.com`,
          username: form.username,
          password: form.password,
          name: {
            firstname: form.firstname,
            lastname: form.lastname,
          },
          address: {
            city: form.city,
            street: form.street,
            number: 1,
            zipcode: form.zipcode,
            geolocation: {
              lat: '0',
              long: '0',
            },
          },
          phone: form.phone,
        }),
      });

      if (!res.ok) throw new Error('Registration failed');

      const data = await res.json();

    
      localStorage.setItem('user', JSON.stringify({ id: data.id, ...form }));
      console.log('User registered:', { id: data.id, ...form });

      alert('Registration successful! You can now log in.');
      router.push('/login');
    } catch (err) {
      alert('Registration failed. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <form onSubmit={handleRegister} className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Register</h2>

        <input name="username" type="text" placeholder="Username" className="w-full mb-3 p-2 border rounded" value={form.username} onChange={handleChange} required />
        <input name="password" type="password" placeholder="Password" className="w-full mb-3 p-2 border rounded" value={form.password} onChange={handleChange} required />
        <input name="firstname" type="text" placeholder="First Name" className="w-full mb-3 p-2 border rounded" value={form.firstname} onChange={handleChange} required />
        <input name="lastname" type="text" placeholder="Last Name" className="w-full mb-3 p-2 border rounded" value={form.lastname} onChange={handleChange} required />
        <input name="phone" type="text" placeholder="Phone" className="w-full mb-3 p-2 border rounded" value={form.phone} onChange={handleChange} required />
        <input name="city" type="text" placeholder="City" className="w-full mb-3 p-2 border rounded" value={form.city} onChange={handleChange} required />
        <input name="street" type="text" placeholder="Street" className="w-full mb-3 p-2 border rounded" value={form.street} onChange={handleChange} required />
        <input name="zipcode" type="text" placeholder="Zip Code" className="w-full mb-3 p-2 border rounded" value={form.zipcode} onChange={handleChange} required />

        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded">
          Register
        </button>

        <p className="mt-4 text-sm text-center">
          Already have an account?{' '}
          <a href="/login" className="text-blue-600 underline">
            Login
          </a>
        </p>
      </form>
    </div>
  );
}
