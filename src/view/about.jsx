import "../App.css";

function About() {
  return (
    <>
      <div className="bg-gray-200 min-h-screen py-36 px-4 md:px-8">
        <div className="max-w-6xl mx-auto bg-white shadow-xl md:shadow-2xl rounded-2xl md:rounded-3xl p-6 md:p-12 space-y-12 md:space-y-16">

          {/* HEADER */}
          <div className="text-center space-y-3 md:space-y-4">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              Roland Technologies Inc.
            </h1>
            <p className="text-sm md:text-lg text-gray-700 max-w-3xl mx-auto">
              Strategic and Critical Power System Specialists Serving
              Commercial, Government, Industrial, Marine, and Rail Clients.
            </p>
          </div>

          {/* COMPANY OVERVIEW */}
          <section className="space-y-3 md:space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold">
              Company Overview
            </h2>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
              Roland Technologies provides strategic and critical services to
              private, commercial, and government clients. We are a small
              private minority owned company with over 70 years of combined
              experience with major generator and ATS manufacturers including
              Cummins, Caterpillar, Detroit Diesel, and EMD.
            </p>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
              We partner with clients to deliver code-compliant, reliable, and
              competitively priced solutions across Government, Commercial,
              Marine, Rail, and Industrial sectors.
            </p>
          </section>

          {/* CORE CAPABILITIES */}
          <section>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 md:mb-6">
              Core Capabilities
            </h2>

            <div className="grid gap-4 md:grid-cols-2 md:gap-8">
              <ul className="space-y-2 text-sm md:text-base text-gray-700 list-disc list-inside">
                <li>Critical Power Systems Specialists</li>
                <li>Infrared Thermography</li>
                <li>Load Testing (Generators & ATS)</li>
                <li>Digital / PLC Control Systems Programming</li>
                <li>Generator Paralleling Systems</li>
              </ul>

              <ul className="space-y-2 text-sm md:text-base text-gray-700 list-disc list-inside">
                <li>Engine Overhauls (EMD, Cummins, CAT, MTU, Kohler)</li>
                <li>Fire Pump Installation & Engine Repair</li>
                <li>Engineering Drawings & Calculations</li>
                <li>24/7/365 Emergency Service</li>
                <li>EMD Engine Rebuild Specialists</li>
              </ul>
            </div>
          </section>

          {/* DIFFERENCES */}
          <section>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 md:mb-6">
              What Sets Us Apart
            </h2>

            <div className="bg-gray-100 rounded-xl p-6 md:p-8 shadow-inner">
              <div className="grid gap-4 md:grid-cols-2 md:gap-8 text-sm md:text-base text-gray-700">
                <ul className="space-y-2 list-disc list-inside">
                  <li>24/7/365 Emergency Service</li>
                  <li>Homeland Security Clearances</li>
                  <li>Multiple Certifications & Licenses</li>
                  <li>30+ Years of Local Industry Experience</li>
                </ul>

                <ul className="space-y-2 list-disc list-inside">
                  <li>Fully Insured Operations</li>
                  <li>Engineering Drawings & Calculations</li>
                  <li>EMD Engine Rebuild Specialists</li>
                  <li>Advanced Generator Paralleling & PLC Controls</li>
                </ul>
              </div>
            </div>
          </section>

          {/* CERTIFICATIONS */}
          <section>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 md:mb-6">
              Certifications
            </h2>

            <ul className="space-y-2 text-sm md:text-base text-gray-700 list-disc list-inside">
              <li>Critical Power Backup & Emergency Systems</li>
              <li>Cummins Power Generation</li>
              <li>Cummins InPower Software</li>
              <li>Kohler Industrial Generators & ATS Controls</li>
              <li>Department of the Navy – Engineman Class “C” School</li>
              <li>Department of the Navy – Generator Static Exciter System</li>
              <li>IR Thermography</li>
            </ul>
          </section>

          {/* NAICS */}
          <section>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 md:mb-6">
              Applicable NAICS Codes
            </h2>

            <ul className="space-y-2 text-sm md:text-base text-gray-700 list-disc list-inside">
              <li>238210 – Electrical Contractor</li>
              <li>423610 – Electrical Apparatus & Equipment</li>
              <li>221112 – Fossil Fuel Electric Power Generation</li>
              <li>221118 – Other Electric Power Generation</li>
            </ul>
          </section>

          {/* REFERENCES */}
          <section>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 md:mb-6">
              Selected Clients & References
            </h2>

            <div className="grid gap-2 md:grid-cols-2 md:gap-4 text-sm md:text-base text-gray-700">
              <p>SMS Data Center – Irvine</p>
              <p>Everport Terminal Services – San Pedro</p>
              <p>Courtyard Marriott – LAX</p>
              <p>CBRE Univision – Los Angeles</p>
              <p>IKEA – Carson</p>
              <p>Brookfield Properties Galleria – Glendale</p>
              <p>VA Sepulveda – Joint Operation</p>
              <p>SpaceX Platform – Pascagoula Naval Station</p>
              <p>IRS Headquarters – Ogden, Utah</p>
              <p>Orange County Sanitation District</p>
            </div>
          </section>

        </div>
      </div>

      <footer className="bg-white py-4 text-sm md:text-base flex items-center justify-center text-center shadow-md">
        &copy; 2026 Roland Technologies Inc. All rights reserved.
      </footer>
    </>
  );
}

export default About;