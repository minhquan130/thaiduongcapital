import React from "react";

function Products() {
  return (
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 class="text-4xl font-bold text-gray-900 mb-8">
        Products &amp; Services
      </h1>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div class="bg-white p-6 rounded-lg shadow-lg">
          <h2 class="text-xl font-semibold text-gray-900 mb-4">
            Fund Management
          </h2>
          <p class="text-gray-600">
            Professional management of investment funds with a focus on
            maximizing returns while managing risk through diversified
            portfolios and strategic asset allocation.
          </p>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-lg">
          <h2 class="text-xl font-semibold text-gray-900 mb-4">
            Portfolio Management
          </h2>
          <p class="text-gray-600">
            Customized portfolio solutions designed to meet specific investment
            objectives and risk tolerance levels of individual and institutional
            clients.
          </p>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-lg">
          <h2 class="text-xl font-semibold text-gray-900 mb-4">
            Investment Advisory
          </h2>
          <p class="text-gray-600">
            Expert guidance and strategic advice for making informed investment
            decisions in Vietnamese markets, backed by thorough research and
            analysis.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Products;
