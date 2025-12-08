import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Features() {
  const sectionRef = useScrollReveal();
  const titleRef = useScrollReveal();
  const card1Ref = useScrollReveal();
  const card2Ref = useScrollReveal();
  const card3Ref = useScrollReveal();
  const card4Ref = useScrollReveal();

  return (
    <section id="features" ref={sectionRef} className="section scroll-reveal">
      <h2 ref={titleRef} className="scroll-reveal">Функции</h2>

      <div className="big-cards">
        <div ref={card1Ref} className="big-card scroll-reveal">
          <h3>Удобная система конфигов</h3>
          <p>Возможность создавать и редактировать конфиги, менять их тип — настройки игры, настройки управления или все сразу</p>
        </div>

        <div ref={card2Ref} className="big-card scroll-reveal">
          <h3>Автоматический бэкап</h3>
          <p>Автоматический бэкап перед первым запуском и быстрый возврат исходных настроек.</p>
        </div>

        <div ref={card3Ref} className="big-card scroll-reveal">
          <h3>Редактор биндов</h3>
          <p>Редактор биндов (в разработке) с поддержкой составных действий и пресетов.</p>
        </div>

        <div ref={card4Ref} className="big-card scroll-reveal">
          <h3>Настройка графики</h3>
          <p>Система настройки графики и пресетов для оптимальной производительности игры.</p>
        </div>
      </div>
    </section>
  );
}

