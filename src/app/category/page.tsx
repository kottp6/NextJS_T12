import Link from 'next/link';

export async function getCategories(): Promise<any[]> {
  const res = await fetch('https://dummyjson.com/products/categories');
  if (!res.ok) throw new Error('Failed to fetch categories');
  const data = await res.json();

  // Confirm it's an array
  if (!Array.isArray(data)) throw new Error('Invalid category data');
  return data;
}

export default async function CategoryPage() {
  const categories = await getCategories();

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {categories.map((cat: string, index: number) => {
        const categoryName = typeof cat === 'string' ? cat : cat?.name;

        return (
          <Link
            key={`${categoryName}-${index}`}
            href={`/category/${categoryName}`}
            className="bg-white border p-6 rounded-xl text-center shadow hover:shadow-md transition capitalize text-blue-700 font-medium"
          >
            {typeof categoryName === 'string'
              ? categoryName.replace(/-/g, ' ')
              : 'Invalid Category'}
          </Link>
        );
      })}
    </div>
  );
}
