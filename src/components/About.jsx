import { memo } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { ABOUT_BADGES } from '../constants';

const About = memo(() => {
  const sectionRef = useScrollReveal();
  const titleRef = useScrollReveal();
  const contentRef = useScrollReveal();

  return (
    <section id="about" ref={sectionRef} className="section scroll-reveal">
      <div className="about-subtitle scroll-reveal">О продукте</div>
      <h2 ref={titleRef} className="about-title scroll-reveal">О проекте</h2>

      <div ref={contentRef} className="about-content scroll-reveal">
        <p className="about-intro">Rust Forge — Абсолютно бесплатная, удобная и безопасная утилита для настройки Rust.</p>
        <p>Конфиги, бинды, авто-бэкапы, чистый интерфейс, настройка графики — программа содержит много параметров, которые скрыты от пользователя в меню в игре.</p>
        <p>Имеет удобное описание биндов и возможность их составления (в разработке), систему настройки графики и пресетов (в разработке).</p>
        
        <div className="about-badges">
          {ABOUT_BADGES.map((badge, index) => (
            <span key={`badge-${index}`} className="about-badge">{badge}</span>
          ))}
        </div>
      </div>
    </section>
  );
});

About.displayName = 'About';

export default About;

