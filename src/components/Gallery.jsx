import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Gallery() {
  const galleryRef = useScrollReveal();
  const shots = [
    "/screen1.jpg",
    "/screen2.jpg",
    "/screen3.jpg"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevIndex = (currentIndex - 1 + shots.length) % shots.length;
  const nextIndex = (currentIndex + 1) % shots.length;

  const [mainOpacity, setMainOpacity] = useState(1);

  const handlePrev = () => {
    setMainOpacity(0);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + shots.length) % shots.length);
      setMainOpacity(1);
    }, 150);
  };

  const handleNext = () => {
    setMainOpacity(0);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % shots.length);
      setMainOpacity(1);
    }, 150);
  };

  return (
    <div ref={galleryRef} className="hero-gallery scroll-reveal">
      <div 
        className="side-shot" 
        style={{ backgroundImage: `url('${shots[prevIndex]}')` }}
      ></div>

      <div className="center-shot-wrapper">
        <div className="arrow left" onClick={handlePrev}>‹</div>
        <div 
          className="center-shot" 
          style={{ 
            backgroundImage: `url('${shots[currentIndex]}')`,
            opacity: mainOpacity
          }}
        ></div>
        <div className="arrow right" onClick={handleNext}>›</div>
      </div>

      <div 
        className="side-shot" 
        style={{ backgroundImage: `url('${shots[nextIndex]}')` }}
      ></div>
    </div>
  );
}

