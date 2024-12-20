import React from "react";

function News() {
  // Create an array with 20 dummy items for news
  const newsItems = Array.from({ length: 12 }, (_, index) => ({
    id: index,
    title: `Economic Update ${index + 1}`,
    description: "Latest economic indicators and their impact on investments.",
    imageUrl: "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    date: "March 5, 2024",
  }));

  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">News & Articles</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Use .map to render news items dynamically */}
        {newsItems.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src={item.imageUrl}
              alt={item.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h2>
              {/* <p className="text-gray-600 mb-4">{item.description}</p>
              <span className="text-sm text-gray-500">{item.date}</span> */}
              <p>Update...</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default News;
