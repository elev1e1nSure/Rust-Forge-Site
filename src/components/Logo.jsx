import { memo } from 'react';

const Logo = memo(() => {
  const handleClick = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <a href="#" onClick={handleClick} className="header-logo" aria-label="Rust Forge - на главную">
      <span className="logo-text">Rust <span className="logo-f">F</span>orge</span>
    </a>
  );
});

Logo.displayName = 'Logo';

export default Logo;

