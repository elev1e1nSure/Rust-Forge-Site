import { useState, useRef } from 'react';

export default function FAQ() {
  const [openItems, setOpenItems] = useState(new Set());
  const closeTimeouts = useRef({});

  const handleMouseEnter = (index) => {
    if (closeTimeouts.current[index]) {
      clearTimeout(closeTimeouts.current[index]);
      delete closeTimeouts.current[index];
    }
    setOpenItems((prev) => new Set(prev).add(index));
  };

  const handleMouseLeave = (index) => {
    const timeout = setTimeout(() => {
      setOpenItems((prev) => {
        const newSet = new Set(prev);
        newSet.delete(index);
        return newSet;
      });
      delete closeTimeouts.current[index];
    }, 200);
    closeTimeouts.current[index] = timeout;
  };

  const handleClick = (index) => {
    if (closeTimeouts.current[index]) {
      clearTimeout(closeTimeouts.current[index]);
      delete closeTimeouts.current[index];
    }
    setOpenItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  const faqData = [
    {
      question: "Безопасно ли использовать Rust Forge?",
      answer: "Да, программа не работает в фоне, не читает и не изменяет память игры никак не провоцируя EAC."
    },
    {
      question: "Останется ли утилита бесплатной?",
      answer: "Да. Rust Forge всегда был и останется бесплатным навсегда."
    },
    {
      question: "Зачем нужна программа?",
      answer: "Программа нужна для удобной настройки игры, биндов и графики, удобным переключением между разными конфигурациями и оптимизации игры."
    },
    {
      question: "Программа — не вирус?",
      answer: "Нет. Программа не является вредоносным ПО, антивирусы могут ругатся на неё из за отсутствия подписи."
    }
  ];

  return (
    <section id="faq" className="section">
      <h2>FAQ</h2>

      {faqData.map((item, index) => (
        <div
          key={index}
          className={`faq-item ${openItems.has(index) ? 'open' : ''}`}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={() => handleMouseLeave(index)}
          onClick={() => handleClick(index)}
        >
          <div className="faq-question">{item.question}</div>
          <div className="faq-answer-wrapper">
            <div className="faq-answer">{item.answer}</div>
          </div>
        </div>
      ))}
    </section>
  );
}

