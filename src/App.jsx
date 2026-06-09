import "./App.css";
import Home from "./view/home.jsx";
import About from "./view/about.jsx";
import Contact from "./view/contact.jsx";
import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  useLocation,
  Navigate
} from "react-router-dom";

function NavBar() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Close menu on route change
  useEffect(() => {
    setMenuIsOpen(false);
  }, [location]);

  // Add shadow/bg on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinkClass = ({ isActive }) =>
    `relative px-4 py-2 text-sm font-semibold uppercase tracking-widest transition-colors duration-200
     after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-amber-400 after:scale-x-0 after:transition-transform after:duration-300
     hover:text-amber-400 hover:after:scale-x-100
     ${isActive ? "text-amber-400 after:scale-x-100" : "text-gray-200"}`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${scrolled ? "bg-gray-950/98 shadow-lg shadow-black/30" : "bg-gray-950/90"}
        backdrop-blur-sm`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2 group">
          <span className="w-1 h-6 bg-amber-400 rounded-full group-hover:h-8 transition-all duration-300" />
          <span className="text-white font-bold text-lg tracking-tight leading-tight">
            Roland <span className="text-amber-400">Technologies</span>
          </span>
        </NavLink>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          <NavLink to="/home" className={navLinkClass}>
            Home
          </NavLink>
          <NavLink to="/about" className={navLinkClass}>
            About
          </NavLink>
          <NavLink to="/contact" className={navLinkClass}>
            Contact
          </NavLink>
          <a
            href="tel:+18189843777"
            className="ml-4 px-4 py-2 bg-amber-400 text-gray-950 text-sm font-bold uppercase tracking-wider rounded hover:bg-amber-300 transition-colors duration-200"
          >
            Call Now
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuIsOpen(!menuIsOpen)}
          aria-label={menuIsOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuIsOpen}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 cursor-pointer"
        > 
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 origin-center
              ${menuIsOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300
              ${menuIsOpen ? "opacity-0 scale-x-0" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 origin-center
              ${menuIsOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out
          ${menuIsOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="bg-gray-950 border-t border-gray-800 px-6 py-4 flex flex-col gap-1">
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>
          <NavLink to="/about" className={navLinkClass}>
            About
          </NavLink>
          <NavLink to="/contact" className={navLinkClass}>
            Contact
          </NavLink>
          <a
            href="tel:+18189843777"
            className="mt-3 px-4 py-2.5 bg-amber-400 text-gray-950 text-sm font-bold uppercase tracking-wider rounded text-center hover:bg-amber-300 transition-colors"
          >
            Call Now
          </a>
        </div>
      </div>
    </header>
  );
}

function App() {
  return (
    <Router>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
