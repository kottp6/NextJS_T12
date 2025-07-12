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
  const min = Number(searchParams?.min) || 0;
  const max = Number(searchParams?.max) || Infinity;

  return (
    <div className="min-h-screen px-6 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-800 drop-shadow-sm mb-3">
          Featured Products
        </h1>
        <p className="text-gray-600 text-lg max-w-xl mx-auto">
          Explore our handpicked collection of high-quality, affordable products.
        </p>
      </div>

      {/*Filtered Products*/}
      <Suspense fallback={<Spinner />}>
        <ProductsGrid min={min} max={max} />
      </Suspense>
    </div>
  );
}
