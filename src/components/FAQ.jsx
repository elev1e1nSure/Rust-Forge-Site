import { useState, useRef, useCallback, useEffect, memo } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { FAQ_DATA, FAQ_CLOSE_DELAY } from '../constants';

const FAQ = memo(() => {
  const [openItems, setOpenItems] = useState(new Set());
  const closeTimeouts = useRef({});
  const sectionRef = useScrollReveal();
  const titleRef = useScrollReveal();

  // Cleanup timeouts on unmount
  useEffect(() => {
    return () => {
      Object.values(closeTimeouts.current).forEach((timeout) => {
        if (timeout) clearTimeout(timeout);
      });
      closeTimeouts.current = {};
    };
  }, []);

  const clearTimeoutForIndex = useCallback((index) => {
    if (closeTimeouts.current[index]) {
      clearTimeout(closeTimeouts.current[index]);
      delete closeTimeouts.current[index];
    }
  }, []);

  const handleMouseEnter = useCallback((index) => {
    clearTimeoutForIndex(index);
    setOpenItems((prev) => new Set(prev).add(index));
  }, [clearTimeoutForIndex]);

  const handleMouseLeave = useCallback((index) => {
    const timeout = setTimeout(() => {
      setOpenItems((prev) => {
        const newSet = new Set(prev);
        newSet.delete(index);
        return newSet;
      });
      delete closeTimeouts.current[index];
    }, FAQ_CLOSE_DELAY);
    closeTimeouts.current[index] = timeout;
  }, [clearTimeoutForIndex]);

  const handleClick = useCallback((index) => {
    clearTimeoutForIndex(index);
    setOpenItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  }, [clearTimeoutForIndex]);

  const handleKeyDown = useCallback((e, index) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleClick(index);
    }
  }, [handleClick]);

  return (
    <section id="faq" ref={sectionRef} className="section scroll-reveal">
      <h2 ref={titleRef} className="faq-title scroll-reveal">FAQ</h2>

      {FAQ_DATA.map((item, index) => (
        <div
          key={`faq-${index}`}
          className={`faq-item ${openItems.has(index) ? 'open' : ''}`}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={() => handleMouseLeave(index)}
          onClick={() => handleClick(index)}
          role="button"
          tabIndex={0}
          aria-expanded={openItems.has(index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
        >
          <div className="faq-question">{item.question}</div>
          <div className="faq-answer-wrapper">
            <div className="faq-answer">{item.answer}</div>
          </div>
        </div>
      ))}
    </section>
  );
});

FAQ.displayName = 'FAQ';

export default FAQ;

