import React from "react";

function About() {
  return (
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 class="text-4xl font-bold text-gray-900 mb-8">Our Firm</h1>
      <div class="prose max-w-none">
        <p class="text-lg text-gray-600 mb-6">
          Thai Duong Capital is an independent fund manager, incorporated in
          2009, under a business license by State Securities Commission (SSC).
          The Company now is proving professional services in fund and portfolio
          management and investment advisory in Vietnam.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div>
            <h2 class="text-2xl font-semibold text-gray-900 mb-4">
              Our Mission
            </h2>
            <p class="text-gray-600">
              To provide superior investment returns through professional
              management and sound investment strategies while maintaining the
              highest standards of ethics and service to our clients.
            </p>
          </div>
          <div>
            <h2 class="text-2xl font-semibold text-gray-900 mb-4">
              Our Vision
            </h2>
            <p class="text-gray-600">
              To be the leading investment management firm in Vietnam,
              recognized for our excellence, integrity, and innovative
              investment solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
