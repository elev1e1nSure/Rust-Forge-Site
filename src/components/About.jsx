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
        <p>Программа встретит вас приятным и удобным интерфейсом, обилием интересных надстроек, опций и классной системой конфигураций.</p>
        <p>Создавайте собственные конфигурации настроек игры в целом, биндов и/или графики, удобно переключайтесь между ними и делитесь с друзьями.</p>
        <br></br>
        <p>Rust Forge поддерживается одним разработчиком и в связи с этом любая ваша отдача будет очень полезна. Присоединяйтесь к нам в телеграм, предлагайте свои идеи и репортите о багах и проблемах. Примите своё участие в развитии Rust Forge!</p>
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

