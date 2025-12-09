import { memo, useState, useEffect } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { SOCIAL_LINKS } from '../constants';
import TelegramIcon from './icons/TelegramIcon';
import GitHubIcon from './icons/GitHubIcon';
import YouTubeIcon from './icons/YouTubeIcon';
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
          Что умеет Rust Forge
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
          className="header-social-link"
        >
          <TelegramIcon width={18} height={18} />
          <span className="header-social-text">Telegram</span>
        </a>
        <a 
          href={SOCIAL_LINKS.github} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="header-social-link"
        >
          <GitHubIcon width={18} height={18} />
          <span className="header-social-text">GitHub</span>
        </a>
        <a 
          href={SOCIAL_LINKS.youtube} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="header-social-link"
        >
          <YouTubeIcon width={18} height={18} />
          <span className="header-social-text">YouTube</span>
        </a>
      </div>
    </header>
  );
});

Header.displayName = 'Header';

export default Header;

