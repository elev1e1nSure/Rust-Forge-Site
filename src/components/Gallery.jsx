import { memo, useCallback, useMemo, useRef, useState, useEffect } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { SCREENSHOTS } from '../constants';

const SLIDE_DURATION = 450;

const Gallery = memo(() => {
  const galleryRef = useScrollReveal();
  const images = useMemo(() => (Array.isArray(SCREENSHOTS) ? SCREENSHOTS : []), []);
  const total = images.length;

  const [{ left, center, right }, setIndexes] = useState(() => ({
    left: total > 1 ? total - 1 : 0,
    center: 0,
    right: total > 1 ? 1 : 0
  }));

  const [direction, setDirection] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isResetting, setIsResetting] = useState(false);
  const timerRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(
    () => () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    },
    []
  );

  const getStyle = useCallback(
    (index) => ({
      backgroundImage: total > 0 ? `url(${images[index % total]})` : 'none'
    }),
    [images, total]
  );

  const handleNext = useCallback(() => {
    if (isAnimating || total < 2) return;
    setDirection('next');
    setIsAnimating(true);

    timerRef.current = setTimeout(() => {
      setIsResetting(true);
      setIndexes((prev) => ({
        left: prev.center,
        center: prev.right,
        right: (prev.right + 1) % total
      }));
      setDirection(null);
      setIsAnimating(false);

      rafRef.current = requestAnimationFrame(() => {
        setIsResetting(false);
      });
    }, SLIDE_DURATION);
  }, [isAnimating, total]);

  const handlePrev = useCallback(() => {
    if (isAnimating || total < 2) return;
    setDirection('prev');
    setIsAnimating(true);

    timerRef.current = setTimeout(() => {
      setIsResetting(true);
      setIndexes((prev) => ({
        left: (prev.left - 1 + total) % total,
        center: prev.left,
        right: prev.center
      }));
      setDirection(null);
      setIsAnimating(false);

      rafRef.current = requestAnimationFrame(() => {
        setIsResetting(false);
      });
    }, SLIDE_DURATION);
  }, [isAnimating, total]);

  if (total === 0) {
    return null;
  }

  return (
    <div ref={galleryRef} className="hero-gallery scroll-reveal" role="region" aria-label="Галерея скриншотов">
      <div className={`slider ${direction ? `is-${direction}` : ''} ${isAnimating ? 'is-animating' : ''} ${isResetting ? 'no-transition' : ''}`}>
        <div
          className="slide slide-left"
          style={getStyle(left)}
          aria-hidden="true"
        />
        <div
          className="slide slide-center"
          style={getStyle(center)}
        />
        <div
          className="slide slide-right"
          style={getStyle(right)}
          aria-hidden="true"
        />

        <button
          className="slider-arrow left"
          type="button"
          onClick={handlePrev}
          aria-label="Предыдущий слайд"
          disabled={isAnimating || total < 2}
        >
          ‹
        </button>
        <button
          className="slider-arrow right"
          type="button"
          onClick={handleNext}
          aria-label="Следующий слайд"
          disabled={isAnimating || total < 2}
        >
          ›
        </button>
      </div>
    </div>
  );
});

Gallery.displayName = 'Gallery';

export default Gallery;
