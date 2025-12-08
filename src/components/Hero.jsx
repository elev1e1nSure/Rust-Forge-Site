import { memo } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import Gallery from './Gallery';
import { DOWNLOAD_LINK } from '../constants';

const Hero = memo(() => {
  const heroRef = useScrollReveal();

  return (
    <section ref={heroRef} className="hero scroll-reveal">
      <h1 className="hero-title">Rust <span className="hero-orange">F</span>orge</h1>
      <p className="hero-sub">
        Большая, цельная и удобная утилита для настройки Rust.<br />
        Конфиги, бинды, авто-бэкапы, чистый интерфейс — без лишней сложности.
      </p>

      <Gallery />

      <a href={DOWNLOAD_LINK} className="big-btn" download>
        <span>Скачать программу</span>
      </a>
    </section>
  );
});

Hero.displayName = 'Hero';

export default Hero;

