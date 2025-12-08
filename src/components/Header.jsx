import { memo, useState, useEffect } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { SOCIAL_LINKS } from '../constants';
import TelegramIcon from './icons/TelegramIcon';
import Logo from './Logo';

const Header = memo(() => {
  const headerRef = useScrollReveal();
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['features', 'about', 'faq'];
      const scrollPosition = window.scrollY + 150;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            return;
          }
        }
      }
      setActiveSection('');
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header ref={headerRef} className="header scroll-reveal">
      <Logo />
      
      <nav className="nav" aria-label="Основная навигация">
        <a 
          href="#features" 
          className={activeSection === 'features' ? 'active' : ''}
        >
          Функции
        </a>
        <a 
          href="#about" 
          className={activeSection === 'about' ? 'active' : ''}
        >
          О проекте
        </a>
        <a 
          href="#faq" 
          className={activeSection === 'faq' ? 'active' : ''}
        >
          FAQ
        </a>
      </nav>

      <div className="header-right">
        <a 
          href={SOCIAL_LINKS.telegram} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="header-telegram-link"
        >
          <TelegramIcon width={16} height={16} />
          <span>Следить за обновлениями</span>
        </a>
      </div>
    </header>
  );
});

Header.displayName = 'Header';

export default Header;

