'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import TimeClientOnly from '../components/TimeClientOnly';
export default function HomePage() {
  return (
    <div className=" w-full h-screen  px-6 py-10">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-blue-800 mb-4">
          Welcome to Our Store
        </h1>
        <p className="text-lg text-gray-600">
          Discover high-quality products across multiple categories.
        </p>
      </motion.div>

      {/* Features Section */}
      <div className="grid md:grid-cols-3 gap-8 text-center">
        {[
          { title: 'Fast Shipping',},
          { title: 'Secure Payment',},
          { title: 'Customer Support', },
        ].map((feature, i) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 * i, duration: 0.6 }}
            className="bg-white shadow-xl rounded-2xl p-6"
          >
            
            <h3 className="text-xl font-semibold text-blue-700">{feature.title}</h3>
          </motion.div>
        ))}
      </div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="mt-20 text-center"
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Explore Now</h2>
        <Link
          href="/product"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          View Products
        </Link>
      </motion.div>
      <TimeClientOnly />
    </div>
  );
}
