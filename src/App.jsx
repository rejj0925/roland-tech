import "./App.css";
import Home from "./view/home.jsx"; // make sure file name casing matches!
import About from "./view/about.jsx";
import Contact from "./view/contact.jsx";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";

function App() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const toggleMenu = () => setMenuIsOpen(!menuIsOpen);

  return (
    <Router>
      <div className="fixed flex flex-col w-screen z-50">
        <nav className="bg-white/95 top-0 flex w-screen h-20 items-center shadow-md z-50 rounded-b-md">
          <div className="flex flex-row justify-around w-full items-center gap-5 h-full">
            <div className="text-2xl text-nowrap ml-5 cursor-pointer">
              Roland Technologies
            </div>
            <div
              className={`${
                menuIsOpen
                  ? "relative w-10 h-10 cursor-pointer"
                  : "flex flex-col w-10 h-10 justify-evenly cursor-pointer"
              }`}
              onClick={toggleMenu}
            >
              <div
                className={`${
                  menuIsOpen
                    ? "absolute top-1/2 transform rotate-45 bg-gray-900 w-full h-1 rounded"
                    : "bg-gray-900 w-full h-1 rounded"
                } transform transition-all duration-1000 ease-in-out`}
              ></div>
              <div
                className={`${
                  menuIsOpen ? "opacity-0" : "bg-gray-900 w-full h-1 rounded"
                } transform transition-all duration-1000 ease-in-out`}
              ></div>
              <div
                className={`${
                  menuIsOpen
                    ? "absolute top-1/2 transform -rotate-45 bg-gray-900 w-full h-1 rounded"
                    : "bg-gray-900 w-full h-1 rounded"
                } transform transition-all duration-1000 ease-in-out`}
              ></div>
            </div>
          </div>
        </nav>

        {/* Menu links */}
        <div
          className={`${
            menuIsOpen ? "animate-menu-open" : "animate-menu-close"
          } flex flex-row h-10 bg-gray-900 justify-around shadow-2xl items-center rounded-md text-white`}
        >
          <NavLink
            to="/"
            className={({ isActive }) =>
              `cursor-pointer w-full h-full text-center flex items-center justify-center transition-all duration-500
            ${isActive ? "bg-gray-700" : "hover:bg-gray-700"}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `cursor-pointer w-full h-full text-center flex items-center justify-center transition-all duration-500
            ${isActive ? "bg-gray-700" : "hover:bg-gray-700"}`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `cursor-pointer w-full h-full text-center flex items-center justify-center transition-all duration-500
            ${isActive ? "bg-gray-700" : "hover:bg-gray-700"}`
            }
          >
            Contact
          </NavLink>
        </div>
      </div>

      {/* Route rendering */}
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
