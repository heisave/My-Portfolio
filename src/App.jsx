import "./App.css";
import Aurora from "./components/ui/Aurora";
import Navbar from "./components/Other/Navbar";
import Hero from "./components/Other/Hero";
import Home from "./components/Main/Home";
import About from "./components/Main/About";
import Skills from "./components/Main/Skills";
import Projects from "./components/Main/Project";
import Contact from "./components/Main/Contact";
import Footer from "./components/ui/Footer";

/**
 * Single-page site: everything lives on one scroll, so visitors keep moving
 * through the work instead of clicking between routes. Sections expose ids
 * (`about`, `skills`, `work`, `contact`) that the navbar glides to with Lenis.
 */
function App() {
  return (
    <>
      <Aurora />
      <Navbar />

      <div className="relative min-h-screen overflow-x-hidden">
        <main className="animate-page-in">
          <Hero />
          <Home />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
