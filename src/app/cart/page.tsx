import CartContent from '@/components/CartContent';


export const revalidate = 0;

export default function CartPage() {
  return (
    <div className="min-h-screen px-6 py-16">
      <h1 className="text-4xl font-bold text-blue-800 mb-6">Your Shopping Cart</h1>
      <CartContent />
    </div>
  );
}
