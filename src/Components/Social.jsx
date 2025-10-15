import { useState, useEffect } from "react";
import { FaYoutube, FaLinkedin, FaFacebook, FaWhatsapp, FaExternalLinkAlt } from "react-icons/fa";
import { useTranslation } from "../hooks/useTranslation";

export default function Social() {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const socialPlatforms = [
    { name: "YouTube", icon: FaYoutube, color: "bg-red-500", textColor: "text-red-500", link: "https://www.youtube.com/muhsinmashkur" },
    { name: "LinkedIn", icon: FaLinkedin, color: "bg-blue-600", textColor: "text-blue-600", link: "https://www.linkedin.com/in/muhsinmashkur/" },
    { name: "Facebook", icon: FaFacebook, color: "bg-blue-500", textColor: "text-blue-500", link: "https://www.facebook.com/ustazmuhsinmashkur" },
    { name: "WhatsApp", icon: FaWhatsapp, color: "bg-green-500", textColor: "text-green-500", link: "https://wa.me/+8801811996981" },
  ];

  return (
    <div className="bg-white flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-5xl text-center">
        {/* Header */}
        <div className={`mb-10 transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-snug">
            {t('socialWelcome')}
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed px-2">
            {t('socialDescription')}
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-10 lg:gap-12">
          {socialPlatforms.map((platform, index) => {
            const IconComponent = platform.icon;
            return (
              <div
                key={platform.name}
                className={`transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <a
                  href={platform.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block text-center"
                  aria-label={`Visit our ${platform.name} page`}
                >
                  <div className="relative mb-2 sm:mb-3">
                    <div
                      className={`
                        w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20
                        mx-auto rounded-full ${platform.color}
                        flex items-center justify-center
                        transform transition-all duration-300 ease-out
                        group-hover:scale-110 shadow-md group-hover:shadow-lg
                      `}
                    >
                      <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 text-white transition-transform duration-300 group-hover:scale-110" />
                    </div>
                  </div>
                  <div className="flex items-center justify-center gap-1 sm:gap-2">
                    <FaExternalLinkAlt className={`w-3 h-3 sm:w-4 sm:h-4 ${platform.textColor}`} />
                    <span className={`text-xs sm:text-sm md:text-base lg:text-lg font-semibold ${platform.textColor} group-hover:scale-105 transition-transform`}>
                      {platform.name}
                    </span>
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
