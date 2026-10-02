import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Home from "./components/Main/Home";
import Skills from "./components/Main/Skills";
import Contact from "./components/Main/Contact";
import About from "./components/Main/About";
import Projects from "./components/Main/Project";
import Aurora from "./components/ui/Aurora";
import Footer from "./components/ui/Footer";

/** Scrolls to top whenever the route changes. */
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);
  return null;
};

function App() {
  const location = useLocation();

  return (
    <>
      <Aurora />
      <ScrollToTop />

      <div className="relative min-h-screen overflow-x-hidden">
        {/* Keyed wrapper = replay entrance animation on every route change */}
        <div key={location.pathname} className="animate-page-in">
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/skill" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="*" element={<Home />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
