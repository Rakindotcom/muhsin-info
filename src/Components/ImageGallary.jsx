import React, { useEffect, useState } from "react";

export default function ImageGallery() {
  const [imageData, setImageData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const importImages = async () => {
      try {
        const images = import.meta.glob(
          "../web_images/**/*.{jpg,jpeg,png,gif,webp,JPG,JPEG,PNG,GIF,WEBP}",
          { query: "?url", import: "default" }
        );

        const entries = Object.entries(images);
        const imagePromises = entries.map(async ([, resolver]) => {
          const url = await resolver();
          return { url };
        });

        const imageResults = await Promise.all(imagePromises);
        setImageData(imageResults);
        setLoading(false);
      } catch (error) {
        console.error("Error loading images:", error);
        setLoading(false);
      }
    };

    importImages();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-lg text-gray-600">Loading images...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white py-8 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {imageData.map((image) => (
        <img
          key={image.url}
          src={image.url}
          alt=""
          className="w-full h-56 object-cover rounded"
          loading="lazy"
        />
      ))}
    </div>
  );
}
