import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Footer() {
  const footerRef = useScrollReveal();

  return (
    <footer ref={footerRef} className="footer scroll-reveal">
      © 2024 Rust Forge
    </footer>
  );
}

