import { useState, useRef, useEffect, useCallback, memo, useMemo } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { SCREENSHOTS, CAROUSEL_TRANSITION_DURATION, RESIZE_DEBOUNCE_DELAY } from '../constants';

const Gallery = memo(() => {
  const galleryRef = useScrollReveal();

  // Validate screenshots array
  const screenshots = useMemo(() => {
    if (!SCREENSHOTS || SCREENSHOTS.length === 0) {
      console.warn('Gallery: SCREENSHOTS array is empty or invalid');
      return [];
    }
    return SCREENSHOTS;
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Memoize index calculations - these update when currentIndex changes
  const displayedPrevIndex = useMemo(() => {
    if (screenshots.length === 0) return 0;
    return (currentIndex - 1 + screenshots.length) % screenshots.length;
  }, [currentIndex, screenshots.length]);

  const displayedNextIndex = useMemo(() => {
    if (screenshots.length === 0) return 0;
    return (currentIndex + 1) % screenshots.length;
  }, [currentIndex, screenshots.length]);

  const carouselTrackRef = useRef(null);
  const slideWidthRef = useRef(0);
  const currentPositionRef = useRef(0);
  const transitionEndHandlerRef = useRef(null);

  // Инициализация позиции при монтировании
  useEffect(() => {
    if (screenshots.length === 0) return;
    
    const track = carouselTrackRef.current;
    if (!track || !track.parentElement) return;

    // Вычисляем ширину одного слайда
    const containerWidth = track.parentElement.offsetWidth;
    if (containerWidth <= 0) return;
    
    slideWidthRef.current = containerWidth;

    // Устанавливаем начальную позицию на первое реальное изображение
    // Структура: [clone_last] [img0] [img1] [img2] [clone_first]
    // Начальная позиция: -slideWidth (на img0, индекс 0)
    const initialPosition = -slideWidthRef.current;
    currentPositionRef.current = initialPosition;
    
    track.style.transition = 'none';
    track.style.transform = `translateX(${initialPosition}px)`;
  }, [screenshots.length]);

  // Обновление ширины при изменении размера окна
  useEffect(() => {
    if (screenshots.length === 0) return;
    
    const track = carouselTrackRef.current;
    if (!track || !track.parentElement) return;

    const handleResize = () => {
      if (!track || !track.parentElement) return;
      
      const containerWidth = track.parentElement.offsetWidth;
      if (containerWidth <= 0) return;
      
      slideWidthRef.current = containerWidth;
      
      // Пересчитываем позицию с новой шириной на основе текущего индекса
      // currentIndex соответствует позиции -(index + 1) * slideWidth
      const newPosition = -slideWidthRef.current * (currentIndex + 1);
      currentPositionRef.current = newPosition;
      
      track.style.transition = 'none';
      track.style.transform = `translateX(${newPosition}px)`;
    };

    // Debounce resize for better performance
    let resizeTimeout;
    const debouncedResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(handleResize, RESIZE_DEBOUNCE_DELAY);
    };

    window.addEventListener('resize', debouncedResize, { passive: true });
    return () => {
      window.removeEventListener('resize', debouncedResize);
      clearTimeout(resizeTimeout);
    };
  }, [currentIndex, screenshots.length]);

  const handleNavigation = useCallback((direction) => {
    if (screenshots.length === 0) return;
    
    const track = carouselTrackRef.current;
    if (!track || !track.parentElement) return;

    const slideWidth = slideWidthRef.current || track.parentElement.offsetWidth;
    if (slideWidth <= 0) return;
    
    const currentPos = currentPositionRef.current;

    let newPosition;
    let targetIndex;

    if (direction === 'right') {
      // Движение вправо (показываем следующее) - сдвигаем влево
      newPosition = currentPos - slideWidth;
      targetIndex = (currentIndex + 1) % screenshots.length;
    } else {
      // Движение влево (показываем предыдущее) - сдвигаем вправо
      newPosition = currentPos + slideWidth;
      targetIndex = (currentIndex - 1 + screenshots.length) % screenshots.length;
    }

    // Обновляем позицию в ref
    currentPositionRef.current = newPosition;

    // Проверяем, достигли ли мы клона
    const minPosition = 0; // позиция clone_last
    const maxPosition = -slideWidth * (screenshots.length + 1); // позиция clone_first

    // Применяем плавное перемещение
    track.style.transition = `transform ${CAROUSEL_TRANSITION_DURATION}ms ease-out`;
    track.style.transform = `translateX(${newPosition}px)`;

    // Обновляем индекс
    setCurrentIndex(targetIndex);

    // Удаляем предыдущий обработчик, если он существует
    if (transitionEndHandlerRef.current) {
      track.removeEventListener('transitionend', transitionEndHandlerRef.current);
    }

    // После завершения анимации проверяем границы и корректируем позицию
    const handleTransitionEnd = () => {
      if (!track) return;
      
      track.removeEventListener('transitionend', handleTransitionEnd);
      transitionEndHandlerRef.current = null;
      
      if (newPosition >= minPosition - 1) {
        // Достигли clone_last (начало) - переносимся на последнее реальное изображение
        track.style.transition = 'none';
        track.style.transform = `translateX(${-slideWidth * screenshots.length}px)`;
        currentPositionRef.current = -slideWidth * screenshots.length;
        setCurrentIndex(screenshots.length - 1);
      } else if (newPosition <= maxPosition + 1) {
        // Достигли clone_first (конец) - переносимся на первое реальное изображение
        track.style.transition = 'none';
        track.style.transform = `translateX(${-slideWidth}px)`;
        currentPositionRef.current = -slideWidth;
        setCurrentIndex(0);
      }
    };

    transitionEndHandlerRef.current = handleTransitionEnd;
    track.addEventListener('transitionend', handleTransitionEnd);
  }, [currentIndex, screenshots.length]);

  // Cleanup transition listener on unmount
  useEffect(() => {
    return () => {
      const track = carouselTrackRef.current;
      if (track && transitionEndHandlerRef.current) {
        track.removeEventListener('transitionend', transitionEndHandlerRef.current);
      }
    };
  }, []);

  // Early return if no screenshots
  if (screenshots.length === 0) {
    return null;
  }

  const handlePrevClick = useCallback(() => handleNavigation('left'), [handleNavigation]);
  const handleNextClick = useCallback(() => handleNavigation('right'), [handleNavigation]);

  return (
    <div ref={galleryRef} className="hero-gallery scroll-reveal">
      <div className="side-shot" id="side-left">
        <img 
          src={screenshots[displayedPrevIndex]} 
          alt="Предпросмотр скриншота"
          className="side-shot-img"
          loading="lazy"
        />
      </div>

      <div className="center-shot-wrapper">
        <button 
          className="arrow left" 
          id="prev" 
          onClick={handlePrevClick}
          aria-label="Предыдущий слайд"
          type="button"
        >
          ‹
        </button>
        <div className="center-shot" id="main-shot">
          <div className="carousel-track" ref={carouselTrackRef}>
            {/* Клон последнего изображения для бесконечности */}
            <img 
              src={screenshots[screenshots.length - 1]} 
              alt="Скриншот"
              className="carousel-img"
              data-clone="last"
              loading="lazy"
            />
            {/* Все реальные изображения */}
            {screenshots.map((shot, index) => (
              <img 
                key={`real-${index}`}
                src={shot} 
                alt={`Скриншот ${index + 1}`}
                className="carousel-img"
                data-index={index}
                loading={index === 0 ? 'eager' : 'lazy'}
              />
            ))}
            {/* Клон первого изображения для бесконечности */}
            <img 
              src={screenshots[0]} 
              alt="Скриншот"
              className="carousel-img"
              data-clone="first"
              loading="lazy"
            />
          </div>
        </div>
        <button 
          className="arrow right" 
          id="next" 
          onClick={handleNextClick}
          aria-label="Следующий слайд"
          type="button"
        >
          ›
        </button>
      </div>

      <div className="side-shot" id="side-right">
        <img 
          src={screenshots[displayedNextIndex]} 
          alt="Предпросмотр скриншота"
          className="side-shot-img"
          loading="lazy"
        />
      </div>
    </div>
  );
});

Gallery.displayName = 'Gallery';

export default Gallery;
