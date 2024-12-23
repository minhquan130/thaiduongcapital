import { Briefcase, MapPin } from "lucide-react";
import React from "react";

function Careers() {
  const careers = [
    {
      id: '1',
      title: 'Investment Analyst',
      description: 'We are seeking a talented Investment Analyst to join our research team. The ideal candidate will have strong analytical skills and a passion for financial markets.',
      requirements: ['5+ years experience', 'requirements 2', 'requirements 3'],
      location: 'Remote',
      type: 'Full-time',
    },
    {
      id: '2',
      title: 'Portfolio Manager',
      description: 'Experienced Portfolio Manager needed to oversee investment portfolios and develop investment strategies aligned with client objectives.',
      requirements: ['3+ years experience', 'requirements 2', 'requirements 3'],
      location: 'New York',
      type: 'Full-time',
    },
  ];
  return (
    // <div className="container mx-auto px-6 py-8">
    //   <h1 className="text-4xl font-bold text-gray-900 mb-8">Careers</h1>
    //   <p className="text-lg text-gray-600 mb-8">
    //     Join our team of investment professionals and be part of our journey to
    //     become the leading investment management firm in Vietnam.
    //   </p>
    //   <div className="grid grid-cols-1 gap-8">
    //     <div className="bg-white p-6 rounded-lg shadow-lg">
    //       <h2 className="text-xl font-semibold text-gray-900 mb-4">
    //         Investment Analyst
    //       </h2>
    //       <p className="text-gray-600 mb-4">
    //         We are seeking a talented Investment Analyst to join our research
    //         team. The ideal candidate will have strong analytical skills and a
    //         passion for financial markets.
    //       </p>
    //       <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
    //         Apply Now
    //       </button>
    //     </div>
    //     <div className="bg-white p-6 rounded-lg shadow-lg">
    //       <h2 className="text-xl font-semibold text-gray-900 mb-4">
    //         Portfolio Manager
    //       </h2>
    //       <p className="text-gray-600 mb-4">
    //         Experienced Portfolio Manager needed to oversee investment
    //         portfolios and develop investment strategies aligned with client
    //         objectives.
    //       </p>
    //       <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
    //         Apply Now
    //       </button>
    //     </div>
    //     <div className="bg-white p-6 rounded-lg shadow-lg">
    //       <h2 className="text-xl font-semibold text-gray-900 mb-4">Risk Manager</h2>
    //       <p className="text-gray-600 mb-4">
    //         Looking for a Risk Manager to develop and implement risk management
    //         strategies across our investment portfolios.
    //       </p>
    //       <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
    //         Apply Now
    //       </button>
    //     </div>
    //   </div>
    // </div>
    <div className="container mx-auto px-6 py-8 space-y-6">
      {
        careers.map((job) => (
          <div key={job.id} className="bg-gray-100 shadow-md rounded-lg p-6">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-xl font-semibold text-gray-900">{job.title}</h2>
                <div className="mt-2 flex items-center text-sm text-gray-500">
                  <Briefcase className="w-4 h-4 mr-1" />
                  <span>{job.type}</span>
                  <span className="mx-2">•</span>
                  <MapPin className="w-4 h-4 mr-1" />
                  <span>{job.location}</span>
                </div>
              </div>
            </div>
            <p className="mt-4 text-gray-600">{job.description}</p>
            <div className="flex justify-between">
              <div className="mt-4">
                <h3 className="text-sm font-medium text-gray-900">Requirements:</h3>
                <ul className="mt-2 list-disc list-inside space-y-1 text-sm text-gray-600">
                  {job.requirements.map((req, index) => (
                    <li key={index}>{req}</li>
                  ))}
                </ul>
              </div>
              <div className="flex items-end">
                <button className="text-red-500 hover:text-[#f99d20]">Read more...</button>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  );
}

export default Careers;
