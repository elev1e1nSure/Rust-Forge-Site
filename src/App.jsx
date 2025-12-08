import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import About from "./components/About";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import "./styles/globals.css";

export default function App() {
  return (
    <>
      <div className="background"></div>
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

