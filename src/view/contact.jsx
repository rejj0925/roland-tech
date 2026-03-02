import "../App.css";

function Contact() {
  return (
    <>
      <div className="bg-gray-200 min-h-screen py-36 px-6">
        <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-3xl p-10 space-y-10">

          <div className="text-center space-y-4">
            <h1 className="text-5xl font-bold">Contact Us</h1>
            <p className="text-gray-700">
              24/7/365 Emergency and Critical Power Support
            </p>
          </div>

          {/* COMPANY INFO */}
          <div className="space-y-6 text-gray-700">

            <div>
              <h2 className="text-2xl font-semibold">Head Office</h2>
              <p>5462 Forbes Ave</p>
              <p>Encino, California 91436</p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">President</h2>
              <p>Roland Orteza</p>
              <a
                href="mailto:roland@roland-tech.com"
                className="text-blue-600 hover:underline"
              >
                roland@roland-tech.com
              </a>
              <p>Tel: +1 562 244 9684</p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">Operations Manager</h2>
              <p>Steve Benedict</p>
              <a
                href="mailto:Steve@roland-tech.com"
                className="text-blue-600 hover:underline"
              >
                Steve@roland-tech.com
              </a>
              <p>Tel: +1 323 547 0935</p>
            </div>

          </div>

          {/* SIMPLE CONTACT FORM */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Send Us a Message</h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border p-3 rounded-md"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full border p-3 rounded-md"
              />
              <textarea
                placeholder="Your Message"
                rows="4"
                className="w-full border p-3 rounded-md"
              ></textarea>
              <button
                type="submit"
                className="bg-gray-900 text-white px-6 py-3 rounded-md hover:bg-gray-700 transition"
              >
                Submit
              </button>
            </form>
          </div>

        </div>
      </div>

      <footer className="bg-white h-12 flex items-center justify-center text-center shadow-md">
        &copy; 2026 Roland Technologies Inc. All rights reserved.
      </footer>
    </>
  );
}

export default Contact;