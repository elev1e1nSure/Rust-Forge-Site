import { memo } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { FEATURES_DATA } from '../constants';

const Features = memo(() => {
  const sectionRef = useScrollReveal();
  const titleRef = useScrollReveal();
  const card1Ref = useScrollReveal();
  const card2Ref = useScrollReveal();
  const card3Ref = useScrollReveal();
  const card4Ref = useScrollReveal();

  // Refs array - stable reference
  const cardRefs = [card1Ref, card2Ref, card3Ref, card4Ref];

  return (
    <section id="features" ref={sectionRef} className="section scroll-reveal">
      <h2 ref={titleRef} className="scroll-reveal">Функции</h2>

      <div className="big-cards">
        {FEATURES_DATA.map((feature, index) => (
          <div 
            key={`feature-${index}`}
            ref={cardRefs[index]} 
            className="big-card scroll-reveal"
          >
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
});

Features.displayName = 'Features';

export default Features;

