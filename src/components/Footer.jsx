import { memo } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { SOCIAL_LINKS } from '../constants';
import TelegramIcon from './icons/TelegramIcon';
import YouTubeIcon from './icons/YouTubeIcon';

const Footer = memo(() => {
  const footerRef = useScrollReveal();

  return (
    <footer ref={footerRef} className="footer scroll-reveal">
      <div className="footer-content">
        <div className="footer-text">© 2025 Rust Forge</div>
        <div className="footer-social">
          <a 
            href={SOCIAL_LINKS.telegram} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="footer-social-icon" 
            aria-label="Telegram"
          >
            <TelegramIcon width={18} height={18} />
          </a>
          <a 
            href={SOCIAL_LINKS.youtube} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="footer-social-icon" 
            aria-label="YouTube"
          >
            <YouTubeIcon width={18} height={18} />
          </a>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;

