import { useEffect, useRef } from 'react';
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import About from "./components/About";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import "./styles/globals.css";

export default function App() {
  const bgRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (bgRef.current) {
        bgRef.current.style.transform = `translateY(${window.scrollY * 0.12}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="background" ref={bgRef}></div>
      <div className="overlay"></div>
      
      <Header />
      <Hero />
      <Features />
      <About />
      <FAQ />
      <Footer />
    </>
  );
}

