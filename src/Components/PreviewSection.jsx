// src/Components/PreviewSection.jsx
import React from "react";

const previews = [
  {
    title: "Academy",
    description: "Explore our courses and learning materials designed for your growth.",
    link: "https://academy.muhsinmashkur.com/",
    image: "/academy.png",
  },
  {
    title: "Media",
    description: "Check out our latest videos, podcasts, and media resources.",
    link: "/media",
    image: "/media.png",
  },
  {
    title: "Consultancy",
    description: "Get expert advice and personalized consultation from our team.",
    link: "/consultancy",
    image: "/consult.png",
  },
];

const PreviewSection = () => {
  return (
    <div className="max-w-6xl mx-auto py-16 px-4 grid md:grid-cols-3 gap-8">
      {previews.map((item, index) => {
        // Check if link is external
        const isExternal = item.link.startsWith("http");

        return (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:scale-105 transition-transform border-4 border-[maroon] hover:border-emerald-600"
          >
            <a
              href={item.link}
              target={isExternal ? "_blank" : "_self"}
              rel={isExternal ? "noopener noreferrer" : undefined}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full object-cover"
              />
              <hr className="border-t-4 border-teal-900" />
              <div className="px-6 pb-4 text-center">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-2 text-gray-600">{item.description}</p>
                <button className="mt-4 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700">
                  Explore
                </button>
              </div>
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default PreviewSection;
