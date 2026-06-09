import "../App.css";

// ── Data ──────────────────────────────────────────────────────────────────────

const CAPABILITIES = [
  "Critical Power Systems Specialist",
  "Infrared Thermography",
  "Load Testing — Generators & ATS",
  "Digital / PLC Control Systems Programming",
  "Generator Paralleling Systems",
  "Engine Overhauls — EMD, Cummins, CAT, MTU, Kohler",
  "Fire Pump Installation & Engine Repair",
  "Engineering Drawings & Calculations",
  "24/7/365 Emergency Service",
  "EMD Engine Rebuild Specialist",
];

const DIFFERENTIATORS = [
  "24/7/365 Emergency Dispatch",
  "Homeland Security Clearances",
  "Multiple OEM Certifications & Licenses",
  "30+ Years of Local Industry Experience",
  "Fully Insured Operations",
  "Engineering Drawings & PE Calculations",
  "EMD Engine Rebuild Specialist",
  "Advanced Generator Paralleling & PLC Controls",
];

const CERTIFICATIONS = [
  "Critical Power Backup & Emergency Systems",
  "Cummins Power Generation",
  "Cummins InPower Software",
  "Kohler Industrial Generators & ATS Controls",
  "Department of the Navy — Engineman Class \"C\" School",
  "Department of the Navy — Generator Static Exciter System",
  "IR Thermography",
];

const NAICS_CODES = [
  { code: "238210", label: "Electrical Contractor" },
  { code: "423610", label: "Electrical Apparatus & Equipment" },
  { code: "221112", label: "Fossil Fuel Electric Power Generation" },
  { code: "221118", label: "Other Electric Power Generation" },
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

// ── Sub-components ─────────────────────────────────────────────────────────────

function SectionLabel({ children }) {
  return (
    <p className="text-amber-500 text-xs font-bold uppercase tracking-[0.25em] mb-2">
      {children}
    </p>
  );
}

function SectionHeading({ children }) {
  return (
    <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-6">
      {children}
    </h2>
  );
}

function CheckItem({ children }) {
  return (
    <li className="flex items-start gap-3 text-gray-700 text-sm">
      <span className="mt-1 w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0" />
      {children}
    </li>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

function About() {
  return (
    <>
      {/* PAGE HERO */}
      <section
        aria-label="About Roland Technologies"
        className="bg-gray-950 pt-32 pb-20 px-6"
      >
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-amber-400 text-xs font-bold uppercase tracking-[0.25em] mb-4">
            Company Profile
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
            Roland Technologies Inc.
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Strategic and Critical Power System Specialists serving Commercial,
            Government, Industrial, Marine, and Rail clients across Southern
            California.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <div className="bg-gray-50 py-16 px-6">
        <div className="max-w-5xl mx-auto space-y-16">

          {/* OVERVIEW */}
          <section aria-labelledby="overview-heading">
            <SectionLabel>Who We Are</SectionLabel>
            <SectionHeading id="overview-heading">Company Overview</SectionHeading>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Roland Technologies provides strategic and critical power services to
                private, commercial, and government clients. We are a small,
                privately held, minority-owned company with over 70 years of
                combined experience working with major generator and ATS
                manufacturers — including Cummins, Caterpillar, Detroit Diesel,
                and EMD.
              </p>
              <p>
                We partner with clients to deliver code-compliant, reliable, and
                competitively priced solutions across Government, Commercial,
                Marine, Rail, and Industrial sectors.
              </p>
            </div>
          </section>

          {/* CAPABILITIES */}
          <section aria-labelledby="capabilities-heading">
            <SectionLabel>Services</SectionLabel>
            <SectionHeading id="capabilities-heading">Core Capabilities</SectionHeading>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {CAPABILITIES.map((item) => (
                <CheckItem key={item}>{item}</CheckItem>
              ))}
            </ul>
          </section>

          {/* DIFFERENTIATORS */}
          <section
            aria-labelledby="differentiators-heading"
            className="bg-gray-950 rounded-2xl p-8 md:p-12"
          >
            <SectionLabel>Competitive Edge</SectionLabel>
            <SectionHeading id="differentiators-heading">
              <span className="text-white">What Sets Us Apart</span>
            </SectionHeading>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {DIFFERENTIATORS.map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-300 text-sm">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {/* CERTIFICATIONS */}
          <section aria-labelledby="certifications-heading">
            <SectionLabel>Credentials</SectionLabel>
            <SectionHeading id="certifications-heading">Certifications</SectionHeading>
            <ul className="space-y-3">
              {CERTIFICATIONS.map((cert) => (
                <CheckItem key={cert}>{cert}</CheckItem>
              ))}
            </ul>
          </section>

          {/* NAICS CODES */}
          <section aria-labelledby="naics-heading">
            <SectionLabel>Procurement</SectionLabel>
            <SectionHeading id="naics-heading">Applicable NAICS Codes</SectionHeading>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {NAICS_CODES.map(({ code, label }) => (
                <div
                  key={code}
                  className="flex items-center gap-4 p-4 bg-white border border-gray-200 rounded-lg"
                >
                  <span className="font-mono text-sm font-bold text-amber-500">
                    {code}
                  </span>
                  <span className="text-gray-700 text-sm">{label}</span>
                </div>
              ))}
            </div>
          </section>

          {/* CLIENTS */}
          <section aria-labelledby="clients-heading">
            <SectionLabel>Our Portfolio</SectionLabel>
            <SectionHeading id="clients-heading">
              Selected Clients & References
            </SectionHeading>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {CLIENTS.map((client) => (
                <div
                  key={client}
                  className="flex items-center gap-3 p-4 bg-white border border-gray-100 rounded-lg text-sm text-gray-700"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0" />
                  {client}
                </div>
              ))}
            </div>
          </section>

        </div>
      </div>

      {/* FOOTER */}
      <footer className="bg-gray-950 border-t border-gray-800 py-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Roland Technologies Inc. All rights reserved.
      </footer>
    </>
  );
}

export default About;