import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="border-b border-gray-700">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold">
              CoinTech
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link
              href="/trade"
              className="rounded-md px-4 py-2 hover:bg-gray-800 transition-colors"
            >
              거래
            </Link>
            <Link
              href="/portfolio"
              className="rounded-md px-4 py-2 hover:bg-gray-800 transition-colors"
            >
              포트폴리오
            </Link>
            <button className="rounded-md bg-blue-600 px-4 py-2 font-medium hover:bg-blue-700 transition-colors">
              로그인
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
} 