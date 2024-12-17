import React from "react";

function Contact() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Contact Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-600 mb-8">
            We'd love to hear from you. Please fill out the form below and we'll
            get back to you as soon as possible.
          </p>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              ></textarea>
            </div>
            <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
              Send Message
            </button>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Office Location
          </h2>
          <p className="text-gray-600 mb-4">
            Thai Duong Capital
            <br />
            Ho Chi Minh City, Vietnam
          </p>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
            Contact Information
          </h2>
          <p className="text-gray-600">
            Email: info@thaiduongcapital.com
            <br />
            Phone: +84 xxx xxx xxx
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;