import { useScrollReveal } from '../hooks/useScrollReveal';
import Gallery from './Gallery';

export default function Hero() {
  const heroRef = useScrollReveal();

  return (
    <section ref={heroRef} className="hero scroll-reveal">
      <h1>Rust Forge</h1>
      <p className="hero-sub">
        Большая, цельная и удобная утилита для настройки Rust.<br />
        Конфиги, бинды, авто-бэкапы, чистый интерфейс — без лишней сложности.
      </p>

      <Gallery />

      <a href="#" className="big-btn">Скачать программу</a>
    </section>
  );
}

