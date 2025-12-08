import { useScrollReveal } from '../hooks/useScrollReveal';

export default function About() {
  const sectionRef = useScrollReveal();
  const titleRef = useScrollReveal();
  const cardRef = useScrollReveal();

  return (
    <section id="about" ref={sectionRef} className="section scroll-reveal">
      <h2 ref={titleRef} className="scroll-reveal">О проекте</h2>

      <div ref={cardRef} className="big-card about-card scroll-reveal">
        <p>Rust Forge — Абсолютно бесплатная, удобная и безопасная утилита для настройки Rust.</p>
        <p>Конфиги, бинды, авто-бэкапы, чистый интерфейс, настройка графики — программа содержит много параметров, которые скрыты от пользователя в меню в игре.</p>
        <p>Имеет удобное описание биндов и возможность их составления (в разработке), систему настройки графики и пресетов (в разработке).</p>
      </div>
    </section>
  );
}

