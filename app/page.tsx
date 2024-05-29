import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-400 to-blue-500">
      <div className="p-10 bg-white rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-gray-800">
          Welcome to My Next.js App
        </h1>
        <p className="mt-4 text-gray-600">This is the home page.</p>
        <div className="mt-6 space-x-4">
          <Link
            href="/dashboard"
            className="text-lg font-medium text-blue-600 hover:underline"
          >
            Go to Dashboard
          </Link>
          <Link
            href="/portfolio"
            className="text-lg font-medium text-blue-600 hover:underline"
          >
            Go to Portfolio
          </Link>
        </div>
      </div>
    </div>
  );
}
