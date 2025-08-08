import React, { useEffect, useState } from "react";


const FOLDER_TITLES = {
  "conference_at_iml_du": "IML DU Conference Participation",
  "duke_divinity_school_north_carolina_united_states_of_america": "Duke Divinity School Visit",
  "iftar_mahfeel_presentation_at_sheraton_dhaka": "Sheraton Iftar Mahfeel Presentation",
  "malysia_pham2024": "Malaysia PHAM 2024 Event",
  "research_workshops_activities_at_iut-oic": "IUT-OIC Research Workshops",
  "special_images": "Special Moments Collection",
  "television_program": "Television Program Appearance",
  "university_out-of-classroom_activities": "University Extracurricular Activities",
  "worked_as_an_instructor_at_iut-oic_of_the_spoken_arabic_language_course": "IUT-OIC Arabic Instructor"
};

const FOLDER_ORDER = [
  "duke_divinity_school_north_carolina_united_states_of_america",
  "conference_at_iml_du",
  "iftar_mahfeel_presentation_at_sheraton_dhaka",
  "malysia_pham2024",
  "research_workshops_activities_at_iut-oic",
  "worked_as_an_instructor_at_iut-oic_of_the_spoken_arabic_language_course",
  "television_program",
  "university_out-of-classroom_activities",
  "special_images"
];

export default function ImageGallery() {
  const [sections, setSections] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const importImages = async () => {
      try {
        const images = import.meta.glob(
          "../web_images/**/*.{jpg,jpeg,png,gif,webp,JPG,JPEG,PNG,GIF,WEBP}",
          { query: "?url", import: "default" }
        );

        const entries = Object.entries(images);
        const folderGroups = {};
        const detectedFolders = new Set();

        for (const [path, resolver] of entries) {
          const url = await resolver();
          
          // Extract folder path relative to web_images
          const folderPath = path
            .replace(/^\.\.\/web_images\//, '')  // Remove prefix
            .split('/')
            .slice(0, -1)  // Remove filename
            .join('/');
          
          if (folderPath) {
            if (!folderGroups[folderPath]) folderGroups[folderPath] = [];
            folderGroups[folderPath].push(url);
            detectedFolders.add(folderPath);
          }
        }

       


        // Create sections with automatic titles
        const folderNames = FOLDER_ORDER.length > 0 
          ? FOLDER_ORDER 
          : Array.from(detectedFolders).sort();

        const processedSections = folderNames.map(folderPath => ({
          folderPath,
          title: FOLDER_TITLES[folderPath] || folderPath.replace(/\//g, ' › '),
          images: folderGroups[folderPath] || []
        })).filter(section => section.images.length > 0);

        setSections(processedSections);
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
    <div className="min-h-screen bg-white py-8 px-4">
      {sections.map((section) => (
        <div key={section.folderPath} className="mb-12">
          <h2 className="text-3xl text-center font-bold text-blue-900 mb-4 px-2 border-b pb-2">
            {section.title}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {section.images.map((url) => (
              <div key={url} className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
                <img
                  src={url}
                  alt=""
                  className="w-full h-56 object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}