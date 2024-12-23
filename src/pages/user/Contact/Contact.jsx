import React from "react";
import Captcha1 from '../../../assets/images/captcha1.png'

function Contact() {
  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Contact Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <p className="text-gray-600 mb-8">
            We'd love to hear from you. Please fill out the form below and we'll
            get back to you as soon as possible.
          </p>

          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                className="block w-full px-4 py-2 mt-1 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label htmlFor="cellPhone" className="block text-sm font-medium text-gray-700">
                Cell phone
              </label>
              <input
                type="tel"
                id="cellPhone"
                className="block w-full px-4 py-2 mt-1 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300"
                placeholder="Enter your cell phone"
              />
            </div>
            <div>
              <label htmlFor="homePhone" className="block text-sm font-medium text-gray-700">
                Home phone
              </label>
              <input
                type="tel"
                id="homePhone"
                className="block w-full px-4 py-2 mt-1 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300"
                placeholder="Enter your home phone"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                className="block w-full px-4 py-2 mt-1 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                rows="4"
                className="block w-full px-4 py-2 mt-1 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300"
                placeholder="Write your message"
              ></textarea>
            </div>
            <div>
              <div className="mt-2">
                <img
                  src={Captcha1}
                  alt="Captcha"
                  className="w-full max-w-xs mx-auto rounded-md"
                />
              </div>
              <label htmlFor="code" className="block text-sm font-medium text-gray-700">
                Code <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="code"
                className="block w-full px-4 py-2 mt-1 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300"
                placeholder="Enter the code"
              />
            </div>
            <div className="flex justify-between">
              <button
                type="reset"
                className="px-6 py-2 text-gray-600 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
              >
                Reset
              </button>
              <button
                type="submit"
                className="px-6 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Send
              </button>
            </div>
          </form>

        </div>
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Office Location
          </h2>
          <p className="text-gray-600 mb-4">
            Thai Duong Capital
            <br />
            Unit 28-10, 28th Floor, Petroland Tower, 12 Tan Trao, Tan Phu Ward, District 7, Ho Chi Minh City, Vietnam
          </p>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
            Contact Information
          </h2>
          <p className="text-gray-600">
            Phone: +84-28-54160779
            <br />
            Fax: +84-28-54160780
            <br />
            Email: info@thaiduongcapital.com.vn
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
