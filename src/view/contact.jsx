import { useState } from "react";
import "../App.css";
import Phone from "../assets/phone-call.png";
import Email from "../assets/gmail.png";

// ── Contact card sub-component ────────────────────────────────────────────────

function ContactCard({ role, name, email, phone }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 space-y-3 shadow-sm hover:border-amber-400 transition-colors duration-200">
      <p className="text-xs font-bold text-amber-500 uppercase tracking-widest">{role}</p>
      <p className="text-lg font-bold text-gray-900">{name}</p>
      <a
        href={`mailto:${email}`}
        className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-500 transition-colors"
      >
        <img src={Email} alt="" className="w-4 h-4" aria-hidden="true" />
        {email}
      </a>
      <a
        href={`tel:${phone.replace(/\D/g, "")}`}
        className="flex items-center gap-2 text-sm text-gray-700 hover:text-amber-500 transition-colors"
      >
        <img src={Phone} alt="" className="w-4 h-4" aria-hidden="true" />
        {phone}
      </a>
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: wire up to backend/email service
    setSubmitted(true);
  };

  const inputClass =
    "w-full px-4 py-3 border border-gray-200 rounded-lg text-sm text-gray-900 placeholder-gray-400 bg-white focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition";

  return (
    <>
      {/* PAGE HERO */}
      <section
        aria-label="Contact Roland Technologies"
        className="bg-gray-950 pt-32 pb-16 px-6 text-center"
      >
        <p className="text-amber-400 text-xs font-bold uppercase tracking-[0.25em] mb-4">
          Get in Touch
        </p>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
          Contact Us
        </h1>
        <p className="text-gray-400 text-lg max-w-xl mx-auto">
          Available 24 hours a day, 7 days a week, 365 days a year — for
          emergency and critical power support.
        </p>
      </section>

      {/* CONTENT */}
      <div className="bg-gray-50 py-16 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">

          {/* LEFT: Company info */}
          <div className="space-y-8">
            {/* Address */}
            <div>
              <p className="text-xs font-bold text-amber-500 uppercase tracking-widest mb-3">
                Head Office
              </p>
              <address className="not-italic text-gray-700 leading-relaxed">
                <p className="font-semibold text-gray-900">
                  Roland Technologies Inc.
                </p>
                <p>5462 Forbes Ave</p>
                <p>Encino, California 91436</p>
              </address>
            </div>

            {/* Emergency line */}
            <div className="bg-amber-400 rounded-xl p-5">
              <p className="text-xs font-bold text-gray-900 uppercase tracking-widest mb-1">
                24/7 Emergency Line
              </p>
              <a
                href="tel:+18189843777"
                className="text-2xl font-extrabold text-gray-950 hover:text-gray-700 transition-colors"
              >
                (818) 984-3777
              </a>
            </div>

            {/* Contact people */}
            <div className="space-y-4">
              <ContactCard
                role="President"
                name="Roland Orteza"
                email="roland@roland-tech.com"
                phone="+1 (562) 244-9684"
              />
              <ContactCard
                role="Operations Manager"
                name="Steve Benedict"
                email="steve@roland-tech.com"
                phone="+1 (323) 547-0935"
              />
            </div>
          </div>

          {/* RIGHT: Contact form */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-12 space-y-4">
                <div className="w-14 h-14 rounded-full bg-amber-100 flex items-center justify-center text-2xl">
                  ✓
                </div>
                <h2 className="text-xl font-bold text-gray-900">
                  Message Sent!
                </h2>
                <p className="text-gray-600 text-sm max-w-xs">
                  Thank you for reaching out. We'll get back to you as soon
                  as possible.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: "", email: "", phone: "", message: "" });
                  }}
                  className="mt-2 text-sm text-amber-500 hover:text-amber-400 underline underline-offset-2"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <>
                <h2 className="text-xl font-bold text-gray-900 mb-6">
                  Send Us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-gray-600 mb-1 uppercase tracking-wider">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Jane Smith"
                      value={formData.name}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-gray-600 mb-1 uppercase tracking-wider">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="jane@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-xs font-semibold text-gray-600 mb-1 uppercase tracking-wider">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="(555) 000-0000"
                      value={formData.phone}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-gray-600 mb-1 uppercase tracking-wider">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Tell us about your power system needs..."
                      value={formData.message}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-gray-950 text-white text-sm font-bold uppercase tracking-wider rounded-lg hover:bg-gray-800 active:bg-amber-500 transition-colors duration-200"
                  >
                    Send Message
                  </button>
                </form>
              </>
            )}
          </div>

        </div>
      </div>

      {/* FOOTER */}
      <footer className="bg-gray-950 border-t border-gray-800 py-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Roland Technologies Inc. All rights reserved.
      </footer>
    </>
  );
}

export default Contact;