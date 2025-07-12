import { ReactNode } from 'react';

export default function CategoryLayout({ children }: { children: ReactNode }) {
  return (
    <div className="px-6 py-8 bg-white min-h-screen">
      <h1 className="text-3xl font-bold text-blue-800 mb-6">Categories</h1>
      {children}
    </div>
  );
}
