'use client';
import { useEffect, useState } from 'react';

export default function TimeClientOnly() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const now = new Date().toLocaleTimeString();
    setTime(now);
  }, []);

  return <p className="text-gray-600">Current Time: {time}</p>;
}
