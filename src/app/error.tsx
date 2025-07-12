'use client';

interface ErrorProps {
  error: Error;
}

export default function error({ error }: ErrorProps) {
  return (
      <div className="min-h-screen flex items-center justify-center text-center bg-gray-50 text-gray-800 px-4">
        <div>
          <h1 className="text-4xl font-bold text-red-600 mb-4">Something went wrong</h1>
          <p className="mb-6 text-gray-600">{error.message || 'An unexpected error occurred.'}</p>
          <button
            onClick={() => window.location.reload()}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Try Again
          </button>
        </div>
      </div>
  );
}
