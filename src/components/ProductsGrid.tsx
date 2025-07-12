import ProductsList from './ProductsList';

export interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  description: string;
}

// Optional: Accept min/max filtering (if needed)
interface ProductsGridProps {
  min?: number;
  max?: number;
}


async function getProducts(): Promise<Product[]> {
  const res = await fetch('https://dummyjson.com/products?limit=100', {
    next: { revalidate: 60 },
  });
  const data = await res.json();
  return data.products;
}

export default async function ProductsGrid({ min = 0, max = Infinity }: ProductsGridProps) {
  const products = await getProducts();

  const filteredProducts = products.filter(
    (product) => product.price >= min && product.price <= max
  );

  return <ProductsList products={filteredProducts} />;
}
