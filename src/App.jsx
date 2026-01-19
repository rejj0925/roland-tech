import { useState } from "react";
import "./App.css";

function App() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const toggleMenu = () => {
    setMenuIsOpen(!menuIsOpen);
  };
  return (
    <>
      <div className="bg-gray-300 min-h-screen">
        <div className="fixed flex flex-col">
          <nav className="bg-white top-0 flex w-screen h-20 items-center shadow-md z-50">
            <div className="flex flex-row justify-around w-full items-center gap-5 h-full">
              <div className="text-2xl text-nowrap ml-5 cursor-pointer">
                Roland Technologies
              </div>
              <div
                className="flex flex-col w-10  h-10 justify-evenly p-2"
                onClick={toggleMenu}
              >
                <div className="bg-gray-400 w-full h-1 rounded"></div>
                <div className="bg-gray-400 w-full h-1 rounded"></div>
                <div className="bg-gray-400 w-full h-1 rounded"></div>
              </div>
            </div>
          </nav>
          <div
            className={`${
              menuIsOpen ? "animate-menu-open" : "animate-menu-close"
            } flex flex-row h-10 bg-white justify-around shadow-md transition-all duration-300 items-center`}
          >
            <div>Home</div>
            <div>About</div>
            <div>Contact</div>
          </div>
        </div>
        <div className="pt-32 flex flex-col justify-center px-2">
          <div className="flex flex-col gap-5 text-center justify-center items-center">
            <h1 className="text-3xl font-bold">
              Licensed Electrical Contractor-Critical Power
            </h1>
            <h2 className="text-2xl font-semibold">
              Roland Technologies, Inc.
            </h2>
            <div className="bg-white p-2 rounded-md shadow-md mx-12 text-center">
              <p>
                When it comes to Emergency and Critical Power, work with the
                best generator system specialist in Southern California.
              </p>
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-white h-12 flex items-center justify-center text-center px-3 mt-3">
        &copy; 2026 Roland Technologies. All rights reserved.
      </footer>
    </>
  );
}

export default App;

/*<ul className="flex justify-around w-full md:text-2xl h-full items-center [&>li:hover]:bg-indigo-400 [&>li]:w-full [&>li]:h-full [&>li]:flex [&>li]:justify-center [&>li]:items-center cursor-pointer [&>li]:transition-colors [&>li]:ease-in-out [&>li]:duration-300">
              <li>Home</li>
              <li>About</li>
              <li>Contacts</li>
            </ul>
*/
