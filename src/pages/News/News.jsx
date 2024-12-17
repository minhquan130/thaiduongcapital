import React from "react";

function News() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">News & Articles</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
            alt="Market Analysis"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              2024 Market Outlook
            </h2>
            <p className="text-gray-600 mb-4">
              Analysis of market trends and investment opportunities in Vietnam
              for 2024.
            </p>
            <span className="text-sm text-gray-500">March 15, 2024</span>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
            alt="Investment Strategy"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Investment Strategies
            </h2>
            <p className="text-gray-600 mb-4">
              Key investment strategies for success in emerging markets.
            </p>
            <span className="text-sm text-gray-500">March 10, 2024</span>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
            alt="Economic Update"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Economic Update
            </h2>
            <p className="text-gray-600 mb-4">
              Latest economic indicators and their impact on investments.
            </p>
            <span className="text-sm text-gray-500">March 5, 2024</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;
