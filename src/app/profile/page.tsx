'use client';

import { useEffect, useState } from 'react';

interface User {
  id: number;
  email: string;
  username: string;
  name: {
    firstname: string;
    lastname: string;
  };
  phone: string;
  address: {
    city: string;
    street: string;
    number: number;
    zipcode: string;
  };
}

export default function ProfilePage() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500">
        Loading user profile...
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 px-6">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-3xl font-bold text-blue-700 mb-6">User Profile</h2>
        <div className="space-y-4">
          <p><span className="font-semibold">Name:</span> {user.name.firstname} {user.name.lastname}</p>
          <p><span className="font-semibold">Username:</span> {user.username}</p>
          <p><span className="font-semibold">Email:</span> {user.email}</p>
          <p><span className="font-semibold">Phone:</span> {user.phone}</p>
          <p><span className="font-semibold">Address:</span> {user.address.number} {user.address.street}, {user.address.city}, {user.address.zipcode}</p>
        </div>
      </div>
    </div>
  );
}
