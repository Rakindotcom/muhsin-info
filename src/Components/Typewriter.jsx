import React, { useEffect, useState } from "react";
import { useTranslation } from "../hooks/useTranslation";

const TypewriterHeading = () => {
  const { t, language } = useTranslation();
  
  const phrases = language === 'en' 
    ? [
        "Islamic Family",
        "Islamic Personal", 
        "Personal Career",
      ]
    : [
        "ইসলামিক পারিবারিক",
        "ইসলামিক ব্যক্তিগত",
        "ব্যক্তিগত ক্যারিয়ার",
      ];

  const [index, setIndex] = useState(0); // index of current phrase
  const [displayedText, setDisplayedText] = useState(""); // text being typed
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;

    const currentPhrase = phrases[index];
    if (!isDeleting && displayedText.length < currentPhrase.length) {
      // Typing effect
      timeout = setTimeout(() => {
        setDisplayedText(currentPhrase.slice(0, displayedText.length + 1));
      }, 150);
    } else if (!isDeleting && displayedText.length === currentPhrase.length) {
      // Pause before deleting
      timeout = setTimeout(() => setIsDeleting(true), 1200);
    } else if (isDeleting && displayedText.length > 0) {
      // Deleting effect
      timeout = setTimeout(() => {
        setDisplayedText(currentPhrase.slice(0, displayedText.length - 1));
      }, 100);
    } else if (isDeleting && displayedText.length === 0) {
      // Move to next phrase
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % phrases.length);
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, index, phrases]);

  return (
    <h1 className="text-4xl pt-10 md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent leading-tight">
      {displayedText} {language === 'en' ? 'Consultation' : 'পরামর্শ'}
    </h1>
  );
};

export default TypewriterHeading;
