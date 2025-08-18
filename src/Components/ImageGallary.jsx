import React, { useState } from "react";

const sections = [
  {
    title: "Duke Divinity School Visit",
    images: Array.from({ length: 37 }, (_, i) => `${i + 1}.webp`)
  },
  {
    title: "IML DU Conference Participation",
    images: ["a.webp", "b.webp", "c.webp", "d.webp"]
  },
  {
    title: "Sheraton Iftar Mahfeel Presentation",
    images: ["aa.webp", "ab.webp", "ac.webp", "ad.webp"]
  },
  {
    title: "Malaysia PHAM 2024 Event",
    images: ["a1.webp","b1.webp","c1.webp","d1.webp","e1.webp","f1.webp","g1.webp","h1.webp"]
  },
  {
    title: "IUT-OIC Research Workshops",
    images: Array.from({ length: 12 }, (_, i) => `aa${i + 1}.webp`)
  },
  {
    title: "University Extracurricular Activities",
    images: ["c2a.webp","c3a.webp","c4a.webp","c5a.webp","c6a.webp","c7a.webp"]
  },
  {
    title: "Television Program Appearance",
    images: Array.from({ length: 12 }, (_, i) => `b${i + 1}b.webp`)
  },
  {
    title: "IUT-OIC Arabic Instructor",
    images: Array.from({ length: 35 }, (_, i) => `1a${i + 1}.webp`)
  },
  {
    title: "Special Moments Collection",
    images: Array.from({ length: 8 }, (_, i) => `a${i + 1}a.webp`)
  }
];

const IMAGES_PER_BATCH = 8;

const ImageGallery = () => {
  const [visibleCount, setVisibleCount] = useState(
    sections.map(() => IMAGES_PER_BATCH)
  );

  const handleLoadMore = (index) => {
    setVisibleCount((prev) => {
      const newCount = [...prev];
      newCount[index] = Math.min(
        sections[index].images.length,
        newCount[index] + IMAGES_PER_BATCH
      );
      return newCount;
    });
  };

  return (
    <div className="min-h-screen bg-white py-8 px-4">
      {sections.map((section, index) => (
        <div key={section.title} className="mb-12">
          <h2 className="text-3xl text-center font-bold text-blue-900 mb-4 px-2 border-b pb-2">
            {section.title}
          </h2>
          <div className="flex space-x-4 overflow-x-auto pb-2">
            {section.images.slice(0, visibleCount[index]).map((url) => (
              <div
                key={url}
                className="flex-shrink-0 overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
              >
                <img
                  src={url}
                  alt={section.title}
                  className="w-full h-56 object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          {visibleCount[index] < section.images.length && (
            <div className="flex justify-center mt-6">
              <button
                onClick={() => handleLoadMore(index)}
                className="relative px-6 py-3 font-bold text-white rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 shadow-lg hover:scale-105 transform transition-all duration-300"
              >
                <span className="absolute inset-0 bg-white opacity-0 rounded-full transition duration-300 group-hover:opacity-10"></span>
                Load More
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
