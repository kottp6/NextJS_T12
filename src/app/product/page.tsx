import { Suspense } from 'react';
import ProductsGrid from '@/components/ProductsGrid';
import Spinner from '@/components/Spinner';

export const metadata = {
  title: 'Products',
};

export const revalidate = 60;

interface Props {
  searchParams?: {
    min?: string;
    max?: string;
  };
}

export default function ProductPage({ searchParams }: Props) {
  const min = searchParams?.min || '';
  const max = searchParams?.max || '';

  return (
    <div className="min-h-screen px-6 py-16">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-800 drop-shadow-sm mb-3">
          Featured Products
        </h1>
        <p className="text-gray-600 text-lg max-w-xl mx-auto mb-6">
          Explore our handpicked collection of high-quality, affordable products.
        </p>
        <form method="GET" className="flex justify-center gap-4 flex-wrap items-center mb-10">
          <div>
            <label className="block text-sm font-medium text-gray-700">Min Price</label>
            <input
              type="number"
              name="min"
              defaultValue={min}
              className="border px-3 py-2 rounded-md w-28"
              placeholder="0"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Max Price</label>
            <input
              type="number"
              name="max"
              defaultValue={max}
              className="border px-3 py-2 rounded-md w-28"
              placeholder="1000"
            />
          </div>
          <button
            type="submit"
            className="mt-5 sm:mt-7 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Filter By Price
          </button>
        </form>
      </div>

      {/* Product Grid */}
      <Suspense fallback={<Spinner />}>
        <ProductsGrid
          min={Number(min) || 0}
          max={Number(max) || Infinity}
        />
      </Suspense>
    </div>
  );
}
