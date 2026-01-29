import { useState, useRef, useEffect } from "react";
import "../App.css";
import Phone from "../assets/phone-call.png";
import Email from "../assets/gmail.png";

function useInView(options) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5, ...options },
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [options]);

  return [ref, inView];
}

function Home() {
  const [ref1, view1] = useInView();
  const [ref2, view2] = useInView();
  const [ref3, view3] = useInView();
  const [ref4, view4] = useInView();

  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleMenu = () => {
    setMenuIsOpen(!menuIsOpen);
  };
  const imgRef = useRef(null);

  const goFullscreen = () => {
    if (imgRef.current.requestFullscreen) {
      imgRef.current.requestFullscreen();
    } else if (imgRef.current.mozRequestFullScreen) {
      /* Firefox */
      imgRef.current.mozRequestFullScreen();
    } else if (imgRef.current.webkitRequestFullscreen) {
      /* Chrome, Safari & Opera */
      imgRef.current.webkitRequestFullscreen();
    } else if (imgRef.current.msRequestFullscreen) {
      /* IE/Edge */
      imgRef.current.msRequestFullscreen();
    }
  };

  const exitFullscreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      /* Firefox */
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      /* Chrome, Safari and Opera */
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      /* IE/Edge */
      document.msExitFullscreen();
    }
  };

  useEffect(() => {
    const handler = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", handler);
    return () => {
      document.removeEventListener("fullscreenchange", handler);
    };
  }, []);

  return (
    <>
      <div className="bg-gray-300 min-h-screen overflow-x-hidden p-0 m-0">
        <div className="fixed flex flex-col w-screen z-50">
          <nav className="bg-white/95 top-0 flex w-screen h-20 items-center shadow-md z-50 rounded-b-md">
            <div className="flex flex-row justify-around w-full items-center gap-5 h-full">
              <div className="text-2xl text-nowrap ml-5 cursor-pointer">
                Roland Technologies
              </div>
              <div
                className="flex flex-col w-10  h-10 justify-evenly p-2 cursor-pointer"
                onClick={toggleMenu}
              >
                <div className="bg-gray-900 w-full h-1 rounded"></div>
                <div className="bg-gray-900 w-full h-1 rounded"></div>
                <div className="bg-gray-900 w-full h-1 rounded"></div>
              </div>
            </div>
          </nav>
          <div
            className={`${
              menuIsOpen ? "animate-menu-open" : "animate-menu-close"
            } flex flex-row h-10 bg-gray-900 justify-around shadow-2xl items-center rounded-md text-white`}
          >
            <div className="cursor-pointer hover:bg-gray-700 w-full h-full text-center flex items-center justify-center">
              Home
            </div>
            <div className="cursor-pointer hover:bg-gray-700 w-full h-full text-center flex items-center justify-center">
              About
            </div>
            <div className="cursor-pointer hover:bg-gray-700 w-full h-full text-center flex items-center justify-center">
              Contact
            </div>
          </div>
        </div>

        {/* HERO SECTION */}
        <div className="flex flex-col px-2 items-center min-h-screen bg-[url('/roland-tech-background-img.jpg')] bg-cover bg-center bg-fixed">
          <div className="flex justify-center items-center h-screen w-full px-4">
            <div className="font-bold text-center bg-gray-900 p-4 mx-4 rounded-md flex justify-center items-center shadow-lg">
              <h1 className="text-white text-5xl animate-typing border-r-2 border-white overflow-hidden p-1 flex-nowrap lg:text-nowrap">
                Roland Technologies.
              </h1>
            </div>
          </div>

          {/*ABOUT*/}
          <div className="flex flex-col mt-11 bg-gray-200 pt-10 shadow-2xl gap-20 w-screen min-h-screen rounded-t-4xl justify-around py-10">
            <div className="flex flex-col gap-5 text-center justify-center items-center w-full px-10">
              <h2 className="text-5xl font-semibold">
                Roland Technologies, Inc.
              </h2>
              <div
                ref={ref1}
                className={`${view1 ? "animate-fade-in-right" : "opacity-0"} bg-white p-2 rounded-md shadow-md w-full text-center`}
              >
                <p className="text-2xl">
                  When it comes to Emergency and Critical Power, work with the
                  best generator system specialist in Southern California.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-5 text-center justify-center items-center px-10">
              <h2 className="text-5xl font-semibold mt-10">
                About Roland Technologies
              </h2>
              <div
                ref={ref1}
                className={`${view1 ? "animate-fade-in-right" : "opacity-0"} bg-white p-2 rounded-md shadow-md w-full text-center`}
              >
                <p className="text-2xl">
                  An experienced generator systems specialist with many
                  satisfied clients ranging from industrial as well as
                  commercial businesses and even cities. Stay up to code and
                  connected, also worry less if your systems are in check.
                </p>
              </div>
              <div className="flex flex-col justify-center items-center gap-0">
                <div
                  ref={imgRef}
                  onClick={goFullscreen}
                  className="border-2 rounded-md overflow-hidden shadow-lg aspect-square w-60 cursor-pointer"
                >
                  <img
                    src="/ikea_carson_generator.jpg"
                    alt="Generator"
                    className="object-cover overflow-hidden shadow-lg aspect-square w-60 cursor-pointer"
                  />
                  {isFullscreen && (
                    <button
                      onClick={exitFullscreen}
                      className="fixed top-10 right-5 bg-gray-600 text-white px-3 py-2 rounded z-50 cursor-pointer"
                    >
                      ✕
                    </button>
                  )}
                </div>

                <p className="italic text-gray-700 text-sm">
                  Generator Installation
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* SERVICE PROMO */}
        <div className="py-10 bg-white w-screen h-screen flex justify-center items-center font-bold text-center gap-20 flex-col shadow-md">
          <div
            ref={ref2}
            className={`${view2 ? "animate-fade-in-up" : "opacity-0"} w-full transition duration-700`}
          >
            <h1 className="text-4xl">Stay Connected, Reliable Service</h1>
          </div>
          <div className="w-full h-full flex justify-center flex-col px-10">
            <p className="flex justify-start italic text-gray-700 text-xs">
              Location of Roland Technologies
            </p>
            <div className="flex justify-center items-center border-2 w-full h-full rounded-md overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3301.0498090669203!2d-118.50144652452283!3d34.17064417311263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c299cd9b4af085%3A0xc53f5242436b194f!2s5462%20Forbes%20Ave%2C%20Encino%2C%20CA%2091436%2C%20USA!5e0!3m2!1sen!2sph!4v1768895367238!5m2!1sen!2sph"
                className="w-full h-full"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        {/* SOCIALS */}
        <div className="flex flex-col justify-center items-center gap-5 p-5 shadow-lg">
          <h2 className="text-2xl font-medium text-center flex flex-nowrap transition-all animate-pulse ease-in-out">
            We would love to hear from you!
          </h2>
          <div className="flex flex-row gap-5 justify-around text-gray-700">
            <div className="items-center justify-around">
              <a href="tel:+18189843777">
                <img
                  src={Phone}
                  alt="Phone Icon"
                  className="w-6 h-6 mx-auto mb-1"
                />
              </a>
              <p className="whitespace-nowrap">(818) 984-3777</p>
            </div>
            <div className="items-center justify-around">
              <a href="mailto:Roland@roland-tech.com" target="_blank">
                <img
                  src={Email}
                  alt="Email Icon"
                  className="w-6 h-6 mx-auto mb-1"
                />
              </a>
              <p className="whitespace-nowrap">Roland@roland-tech.com</p>
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-white h-12 flex items-center justify-center text-center p-5 mt-5 shadow-md">
        &copy; 2026 Roland Technologies. All rights reserved.
      </footer>
    </>
  );
}

export default Home;

/*<ul className="flex justify-around w-full md:text-2xl h-full items-center [&>li:hover]:bg-indigo-400 [&>li]:w-full [&>li]:h-full [&>li]:flex [&>li]:justify-center [&>li]:items-center cursor-pointer [&>li]:transition-colors [&>li]:ease-in-out [&>li]:duration-300">
              <li>Home</li>
              <li>About</li>
              <li>Contacts</li>
            </ul>
*/
