import { useState, useRef, useEffect } from "react";
import "../App.css";
import Phone from "../assets/phone-call.png";
import Email from "../assets/gmail.png";
import Facebook from "../assets/facebook.png";
import { Link } from "react-router-dom";

// Custom hook: triggers animation once element enters viewport
function useInView(threshold = 0.2) {
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
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, inView];
}

// Reusable fade-in wrapper
function FadeIn({ children, direction = "up", delay = "0ms", className = "" }) {
  const [ref, inView] = useInView();
  const directionClass = {
    up: "translate-y-8",
    left: "translate-x-8",
    right: "-translate-x-8",
  }[direction];

  return (
    <div
      ref={ref}
      style={{ transitionDelay: delay }}
      className={`transition-all duration-700 ease-out
        ${inView ? "opacity-100 translate-x-0 translate-y-0" : `opacity-0 ${directionClass}`}
        ${className}`}
    >
      {children}
    </div>
  );
}

// Stat card shown in hero
function StatCard({ value, label }) {
  return (
    <div className="text-center px-6 py-4 border-l border-gray-700 first:border-l-0">
      <p className="text-3xl font-bold text-amber-400">{value}</p>
      <p className="text-xs text-gray-400 uppercase tracking-wider mt-0.5">{label}</p>
    </div>
  );
}

// Service card in the capabilities section
function ServiceCard({ icon, title, description }) {
  return (
    <FadeIn direction="up">
      <div className="group bg-white border border-gray-100 rounded-xl p-6 hover:border-amber-400 hover:shadow-lg transition-all duration-300">
        <div className="w-10 h-10 bg-amber-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-amber-400 transition-colors duration-300">
          <span className="text-amber-500 group-hover:text-white text-xl transition-colors duration-300">
            {icon}
          </span>
        </div>
        <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
      </div>
    </FadeIn>
  );
}

const SERVICES = [
  {
    icon: "⚡",
    title: "Critical Power Systems",
    description:
      "Design, installation, and maintenance of emergency and backup power systems for commercial and government facilities.",
  },
  {
    icon: "🔥",
    title: "Engine Overhauls",
    description:
      "Full rebuild and repair services for EMD, Cummins, CAT, MTU, and Kohler generator engines.",
  },
  {
    icon: "🌡️",
    title: "Infrared Thermography",
    description:
      "Non-contact thermal imaging to identify electrical faults, overloads, and heat anomalies before failures occur.",
  },
  {
    icon: "🖥️",
    title: "PLC & Digital Controls",
    description:
      "Programming and commissioning of digital and PLC-based generator control and paralleling systems.",
  },
  {
    icon: "💧",
    title: "Fire Pump Services",
    description:
      "Fire pump installation, testing, and engine repair to keep life-safety systems code-compliant and operational.",
  },
  {
    icon: "📋",
    title: "Engineering & Load Testing",
    description:
      "Certified engineering drawings, load calculations, and full load testing for generators and automatic transfer switches.",
  },
];

const CLIENTS = [
  "SMS Data Center – Irvine",
  "Everport Terminal Services – San Pedro",
  "Courtyard Marriott – LAX",
  "CBRE Univision – Los Angeles",
  "IKEA – Carson",
  "Brookfield Properties Galleria – Glendale",
  "VA Sepulveda – Joint Operation",
  "SpaceX Platform – Pascagoula Naval Station",
  "IRS Headquarters – Ogden, Utah",
  "Orange County Sanitation District",
];

function Home() {
  return (
    <>
      {/* ─── HERO ────────────────────────────────────────────────────── */}
      <section
        aria-label="Hero"
        className="relative min-h-screen flex flex-col justify-center bg-gray-950
          bg-[url('/roland-tech-background-img.jpg')] bg-cover bg-center bg-no-repeat"
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gray-950/75" />

        {/* Amber accent stripe */}
        <div className="absolute top-0 left-0 w-1.5 h-full bg-amber-400" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-28 pb-20">
          {/* Eyebrow */}
          <p className="text-amber-400 text-xs font-bold uppercase tracking-[0.25em] mb-4">
            Southern California's Premier Power Specialists
          </p>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight max-w-3xl">
            Critical Power,
            <br />
            <span className="text-amber-400">When It Matters Most.</span>
          </h1>

          <p className="mt-6 text-gray-300 text-lg max-w-xl leading-relaxed">
            Roland Technologies delivers emergency power solutions for
            government, commercial, marine, rail, and industrial clients —
            backed by 70+ years of combined experience.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="tel:+18189843777"
              className="px-7 py-3.5 bg-amber-400 text-gray-950 font-bold rounded hover:bg-amber-300 transition-colors duration-200 text-sm uppercase tracking-wider"
            >
              Call 24/7 Emergency Line
            </a>
            <Link
              to="/about"
              className="px-7 py-3.5 border border-gray-500 text-white font-semibold rounded hover:border-amber-400 hover:text-amber-400 transition-colors duration-200 text-sm uppercase tracking-wider"
            >
              Our Capabilities
            </Link>
          </div>

          {/* Stats bar */}
          <div className="mt-16 inline-flex flex-wrap bg-gray-900/70 border border-gray-800 rounded-xl overflow-hidden backdrop-blur-sm">
            <StatCard value="70+" label="Years Combined Experience" />
            <StatCard value="24/7" label="Emergency Service" />
            <StatCard value="10+" label="Major Certifications" />
            <StatCard value="Gov / Com" label="Cleared & Insured" />
          </div>
        </div>
      </section>

      {/* ─── SERVICES ────────────────────────────────────────────────── */}
      <section aria-label="Services" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <FadeIn>
            <p className="text-amber-500 text-xs font-bold uppercase tracking-[0.25em] mb-2">
              What We Do
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              Full-Spectrum Power Services
            </h2>
            <p className="text-gray-600 max-w-2xl mb-12">
              From routine maintenance to emergency response, we cover every
              aspect of critical power systems — keeping your operations
              running without interruption.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((svc, i) => (
              <ServiceCard key={i} {...svc} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY US ──────────────────────────────────────────────────── */}
      <section aria-label="Why Roland Technologies" className="py-24 bg-gray-950">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <FadeIn direction="right">
            <p className="text-amber-400 text-xs font-bold uppercase tracking-[0.25em] mb-2">
              Why Choose Us
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
              Trusted by Government,
              <br /> Built for Industry.
            </h2>
            <p className="text-gray-400 leading-relaxed mb-8">
              As a minority-owned, small private company, we bring the
              responsiveness of a specialized firm with the credentials and
              clearances of a major contractor. Our team holds Homeland
              Security clearances, multiple OEM certifications, and decades
              of hands-on field experience.
            </p>
            <ul className="space-y-3">
              {[
                "Homeland Security Clearances",
                "Minority-Owned, Fully Insured",
                "Cummins, CAT, EMD Certified",
                "Engineering Drawings & PE Calculations",
                "Advanced Paralleling & PLC Controls",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-gray-300 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              to="/about"
              className="inline-block mt-8 text-amber-400 text-sm font-semibold hover:text-amber-300 transition-colors underline underline-offset-4"
            >
              View Full Company Profile →
            </Link>
          </FadeIn>

          {/* Right: generator image */}
          <FadeIn direction="left" delay="150ms">
            <figure className="rounded-xl overflow-hidden border border-gray-800 shadow-2xl">
              <img
                src="/ikea_carson_generator.jpg"
                alt="Generator installation completed by Roland Technologies at IKEA Carson"
                className="w-full h-72 md:h-96 object-cover"
              />
              <figcaption className="bg-gray-900 text-gray-500 text-xs px-4 py-2 italic">
                Generator installation — IKEA, Carson, CA
              </figcaption>
            </figure>
          </FadeIn>
        </div>
      </section>

      {/* ─── CLIENTS ─────────────────────────────────────────────────── */}
      <section aria-label="Selected Clients" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <FadeIn>
            <p className="text-amber-500 text-xs font-bold uppercase tracking-[0.25em] mb-2">
              Trusted By
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-10">
              Selected Clients & References
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {CLIENTS.map((client, i) => (
              <FadeIn key={i} delay={`${i * 60}ms`}>
                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg border border-gray-100 text-sm text-gray-700 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0" />
                  {client}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── LOCATION ────────────────────────────────────────────────── */}
      <section aria-label="Location" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <FadeIn>
            <p className="text-amber-500 text-xs font-bold uppercase tracking-[0.25em] mb-2">
              Find Us
            </p>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-2">
              Serving All of Southern California
            </h2>
            <p className="text-gray-600 mb-8">
              Headquartered in Encino, CA — available 24/7 for emergency
              dispatch throughout the region.
            </p>
          </FadeIn>
          <div className="rounded-xl overflow-hidden border border-gray-200 shadow-md h-80 md:h-[420px]">
            <iframe
              title="Roland Technologies Office Location — 5462 Forbes Ave, Encino, CA"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3301.0498090669203!2d-118.50144652452283!3d34.17064417311263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c299cd9b4af085%3A0xc53f5242436b194f!2s5462%20Forbes%20Ave%2C%20Encino%2C%20CA%2091436%2C%20USA!5e0!3m2!1sen!2sph!4v1768895367238!5m2!1sen!2sph"
              className="w-full h-full"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* ─── CTA BANNER ──────────────────────────────────────────────── */}
      <section
        aria-label="Contact call to action"
        className="py-20 bg-gray-950 border-t-4 border-amber-400"
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              Power Emergency? We're Available 24/7.
            </h2>
            <p className="text-gray-400 mb-10">
              Don't wait. Contact our team now for immediate emergency support
              or to schedule a consultation.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a
                href="tel:+18189843777"
                className="flex items-center gap-3 px-6 py-4 bg-amber-400 text-gray-950 font-bold rounded-lg hover:bg-amber-300 transition-colors"
              >
                <img src={Phone} alt="" className="w-5 h-5" aria-hidden="true" />
                (818) 984-3777
              </a>
              <a
                href="mailto:Roland@roland-tech.com"
                className="flex items-center gap-3 px-6 py-4 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-700 transition-colors"
              >
                <img src={Email} alt="" className="w-5 h-5" aria-hidden="true" />
                Roland@roland-tech.com
              </a>
              <a
                href="https://www.facebook.com/roland.reyes.14"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-4 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-700 transition-colors"
              >
                <img src={Facebook} alt="Facebook" className="w-5 h-5" />
                Roland Reyes
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── FOOTER ──────────────────────────────────────────────────── */}
      <footer className="bg-gray-950 border-t border-gray-800 py-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Roland Technologies Inc. All rights reserved.
      </footer>
    </>
  );
}

export default Home;