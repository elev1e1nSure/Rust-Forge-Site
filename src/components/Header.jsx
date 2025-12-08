import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Header() {
  const headerRef = useScrollReveal();

  return (
    <header ref={headerRef} className="header scroll-reveal">
      <nav className="nav">
        <a href="#features">Функции</a>
        <a href="#about">О проекте</a>
        <a href="#faq">FAQ</a>
      </nav>
    </header>
  );
}

