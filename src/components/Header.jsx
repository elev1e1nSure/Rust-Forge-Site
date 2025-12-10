import { memo, useState, useEffect, useCallback } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { SOCIAL_LINKS } from '../constants';
import TelegramIcon from './icons/TelegramIcon';
import GitHubIcon from './icons/GitHubIcon';
import YouTubeIcon from './icons/YouTubeIcon';
import Logo from './Logo';

const Header = memo(() => {
  const headerRef = useScrollReveal();
  const [activeSection, setActiveSection] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  return (
    <header ref={headerRef} className="header scroll-reveal">
      <Logo />
      
      <nav className="nav" aria-label="Основная навигация">
        <a 
          href="#features" 
          className={activeSection === 'features' ? 'active' : ''}
        >
          Возможности
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

      <button
        type="button"
        className={`burger-btn ${isMobileMenuOpen ? 'is-open' : ''}`}
        aria-label="Открыть меню"
        aria-expanded={isMobileMenuOpen}
        onClick={toggleMobileMenu}
      >
        <span />
        <span />
        <span />
      </button>

      <div className={`mobile-overlay ${isMobileMenuOpen ? 'is-open' : ''}`} onClick={closeMobileMenu} />

      <div className={`mobile-menu ${isMobileMenuOpen ? 'is-open' : ''}`}>
        <h3 className="mobile-menu-title">Что умеет Rust Forge</h3>

        <nav className="mobile-menu-nav" aria-label="Мобильная навигация">
          <a 
            href="#features" 
            className={activeSection === 'features' ? 'active' : ''}
            onClick={closeMobileMenu}
          >
            Возможности
          </a>
          <a 
            href="#about" 
            className={activeSection === 'about' ? 'active' : ''}
            onClick={closeMobileMenu}
          >
            О проекте
          </a>
          <a 
            href="#faq" 
            className={activeSection === 'faq' ? 'active' : ''}
            onClick={closeMobileMenu}
          >
            FAQ
          </a>
        </nav>

        <div className="mobile-menu-socials">
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
      </div>
    </header>
  );
});

Header.displayName = 'Header';

export default Header;

