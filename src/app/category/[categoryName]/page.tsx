import Image from 'next/image';

interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
}

// // not best
// interface Params {
//   categoryName: string;
// }


// best
interface Props{
  params: Promise<{categoryName: string}>
}
// 
export async function generateMetadata({ params }: Props) {
    const {categoryName} = await params
    return {
        title: `${categoryName.replace('-', ' ')} | Category`,
    };
}

async function getCategoryProducts(category: string): Promise<Product[]> {
  const res = await fetch(`https://dummyjson.com/products/category/${category}`);
  const data = await res.json();
  return data.products;
}



export default async function CategoryDetailPage({ params }: Props) {
    const {categoryName} = await params
    const products = await getCategoryProducts(categoryName);
 
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white px-6 py-12">
      <h2 className="text-4xl font-bold text-blue-800 capitalize mb-10 text-center">
        {categoryName.replace('-', ' ')} Products
      </h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            <div className="relative h-52">
              <Image
                src={product.thumbnail}
                alt={product.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-700 transition">
                {product.title}
              </h3>
              <p className="text-sm text-gray-500 mt-1">ID: #{product.id}</p>
              <div className="mt-3">
                <span className="text-blue-600 text-xl font-bold">${product.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
