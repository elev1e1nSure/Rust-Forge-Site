import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import About from "./components/About";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import "./styles/globals.css";

function App() {
  return (
    <>
      <div className="background" aria-hidden="true"></div>
      <div className="overlay" aria-hidden="true"></div>
      
      <Header />
      <main>
        <Hero />
        <Features />
        <About />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}

export default App;

