import { useEffect, useRef } from 'react';
import { SCROLL_REVEAL_OPTIONS } from '../constants';

/**
 * Custom hook for scroll reveal animation using Intersection Observer
 * @returns {React.RefObject} Ref to attach to the element that should be revealed
 */
export function useScrollReveal() {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('scroll-reveal-visible');
          } else {
            entry.target.classList.remove('scroll-reveal-visible');
          }
        });
      },
      SCROLL_REVEAL_OPTIONS
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  return elementRef;
}

