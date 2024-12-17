import React from "react";

function Careers() {
  return (
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 class="text-4xl font-bold text-gray-900 mb-8">Careers</h1>
      <p class="text-lg text-gray-600 mb-8">
        Join our team of investment professionals and be part of our journey to
        become the leading investment management firm in Vietnam.
      </p>
      <div class="grid grid-cols-1 gap-8">
        <div class="bg-white p-6 rounded-lg shadow-lg">
          <h2 class="text-xl font-semibold text-gray-900 mb-4">
            Investment Analyst
          </h2>
          <p class="text-gray-600 mb-4">
            We are seeking a talented Investment Analyst to join our research
            team. The ideal candidate will have strong analytical skills and a
            passion for financial markets.
          </p>
          <button class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Apply Now
          </button>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-lg">
          <h2 class="text-xl font-semibold text-gray-900 mb-4">
            Portfolio Manager
          </h2>
          <p class="text-gray-600 mb-4">
            Experienced Portfolio Manager needed to oversee investment
            portfolios and develop investment strategies aligned with client
            objectives.
          </p>
          <button class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Apply Now
          </button>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-lg">
          <h2 class="text-xl font-semibold text-gray-900 mb-4">Risk Manager</h2>
          <p class="text-gray-600 mb-4">
            Looking for a Risk Manager to develop and implement risk management
            strategies across our investment portfolios.
          </p>
          <button class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Careers;
