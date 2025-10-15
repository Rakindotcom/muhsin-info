// src/Components/PreviewSection.jsx
import React from "react";
import { useTranslation } from "../hooks/useTranslation";

const PreviewSection = () => {
  const { t } = useTranslation();
  
  const previews = [
    {
      title: t('previewAcademy'),
      description: t('previewAcademyDesc'),
      link: "https://academy.muhsinmashkur.com/",
      image: "/academy.png",
    },
    {
      title: t('previewMedia'),
      description: t('previewMediaDesc'),
      link: "/media",
      image: "/media.png",
    },
    {
      title: t('previewConsultancy'),
      description: t('previewConsultancyDesc'),
      link: "/consultancy",
      image: "/consult.png",
    },
  ];
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
                  {t('explore')}
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
