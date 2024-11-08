import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">
              Trade Crypto with <span className="text-[var(--primary)]">Confidence</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Your trusted platform for cryptocurrency trading
            </p>
            <div className="flex justify-center gap-4">
              <button className="bg-[var(--primary)] text-white px-8 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity">
                Start Trading
              </button>
              <button className="border border-[var(--primary)] text-[var(--primary)] px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Secure Trading</h3>
              <p className="text-gray-600">Advanced security measures to protect your assets</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Real-time Data</h3>
              <p className="text-gray-600">Live cryptocurrency prices and market insights</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-3">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock customer service and support</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 