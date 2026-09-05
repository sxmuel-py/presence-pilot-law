import React, { useState } from "react";
import {
  Scale,
  ShieldCheck,
  FileText,
  PhoneCall,
  Award,
  Briefcase,
  Building,
  CheckCircle2,
  ArrowRight,
  Lock,
  X,
  ChevronDown,
  UserCheck,
  TrendingUp,
  DollarSign,
  Check
} from "lucide-react";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  // Retainer Calculator State
  const [caseType, setCaseType] = useState("litigation");
  const [disputeValuation, setDisputeValuation] = useState(1500000);
  const [urgencyLevel, setUrgencyLevel] = useState("high");

  // Intake Modal Form State
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    practiceArea: "commercial_litigation",
    summary: "",
  });

  // Calculate estimated retainer range
  const baseRetainer =
    caseType === "litigation"
      ? 15000
      : caseType === "ma"
      ? 25000
      : caseType === "estate"
      ? 10000
      : 12000;

  const multiplier = urgencyLevel === "high" ? 1.4 : 1.0;
  const estimatedRetainer = Math.round(baseRetainer * multiplier);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const practiceAreas = [
    {
      title: "Commercial Litigation",
      desc: "Aggressive advocacy for shareholder disputes, breach of contract, intellectual property, and trade secret infringement.",
      icon: <Scale size={24} color="#3b82f6" />,
      highlights: ["Shareholder & Partner Disputes", "Breach of Fiduciary Duty", "Emergency Injunctions"],
    },
    {
      title: "M&A & Corporate Transactions",
      desc: "End-to-end legal structuring for mid-market acquisitions, divestitures, joint ventures, and capital raises.",
      icon: <Briefcase size={24} color="#3b82f6" />,
      highlights: ["Cross-Border Buy-Side Deals", "Regulatory Approvals", "Debt & Equity Structuring"],
    },
    {
      title: "Asset Protection & Estate Planning",
      desc: "Comprehensive trust and estate strategies safeguarding private family wealth, real estate holdings, and corporate equity.",
      icon: <Lock size={24} color="#3b82f6" />,
      highlights: ["Family Office Structuring", "Dynasty & Domestic Trusts", "Tax Optimization"],
    },
    {
      title: "Commercial Real Estate Counsel",
      desc: "Representation for developers, institutional lenders, and landlords in high-value leasing and property acquisitions.",
      icon: <Building size={24} color="#3b82f6" />,
      highlights: ["Zoning & Land Use Permits", "Commercial Lease Agreements", "Title & Syndication"],
    },
  ];

  const verdicts = [
    { amount: "$42.5 Million", title: "Commercial Breach of Contract Verdict", client: "Tech Enterprise Client" },
    { amount: "$18.0 Million", title: "Shareholder Buyout Settlement", client: "Private Equity Syndicate" },
    { amount: "$9.2 Million", title: "Trade Secret Infringement Recovery", client: "SaaS Software Platform" },
  ];

  const faqs = [
    {
      q: "How does Vanguard handle confidential legal intake?",
      a: "All initial consultations are protected under strict attorney-client privilege. Information submitted via our encrypted portal is reviewed solely by senior legal partners.",
    },
    {
      q: "What is your standard fee structure for corporate retainer representation?",
      a: "We offer tailored retainer structures depending on matter complexity, including fixed monthly corporate counsel retainers, capped project fees, or structured litigation retainers.",
    },
    {
      q: "How fast can Vanguard initiate emergency court filings or injunctions?",
      a: "Our rapid-response litigation team can prepare temporary restraining orders (TROs) and emergency injunctions within 6 to 12 hours of engagement.",
    },
    {
      q: "Do you represent out-of-state or international corporate entities?",
      a: "Yes. Our senior partners are admitted to federal district courts nationwide and regularly serve as lead corporate counsel for international parent corporations.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0b0f19] text-[#f8fafc] font-sans antialiased">
      {/* Top Privilege Bar */}
      <div className="bg-[#1e293b] border-b border-[#334155] py-2 px-4 text-center text-xs text-[#94a3b8] flex justify-center items-center gap-2">
        <Lock size={12} className="text-[#60a5fa]" />
        <span>Confidential Partner Consultation Hotline: </span>
        <a href="tel:8005550188" className="text-[#60a5fa] font-bold hover:underline">
          (800) 555-0188
        </a>
      </div>

      {/* Header Navigation */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-[#0b0f19]/90 border-b border-[#1e293b]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#3b82f6] to-[#60a5fa] flex items-center justify-center text-white shadow-lg shadow-[#3b82f6]/20">
              <Scale size={22} className="fill-white" />
            </div>
            <div>
              <span className="text-xl font-extrabold tracking-tight text-white block leading-none">
                Vanguard Legal
              </span>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#60a5fa] block mt-1">
                Corporate & High-Stakes Counsel
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-[#94a3b8]">
            <a href="#practices" className="hover:text-white transition-colors">Practice Areas</a>
            <a href="#results" className="hover:text-white transition-colors">Case Results</a>
            <a href="#calculator" className="hover:text-white transition-colors">Retainer Estimator</a>
            <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
          </nav>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-[#3b82f6] hover:bg-[#2563eb] text-white px-5 py-2.5 rounded-xl font-bold text-sm transition-all shadow-md shadow-[#3b82f6]/25 hover:shadow-lg flex items-center gap-2"
            >
              <span>Schedule Case Evaluation</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-16 pb-24 border-b border-[#1e293b] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#3b82f6]/10 via-transparent to-transparent pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Copy Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#3b82f6]/10 border border-[#3b82f6]/30 text-[#60a5fa] text-xs font-bold uppercase tracking-wider">
                <Award size={14} />
                <span>Premier Commercial & Corporate Litigation</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Decisive Legal Counsel for High-Stakes Business Matters.
              </h1>

              <p className="text-lg text-[#94a3b8] leading-relaxed max-w-2xl">
                Vanguard Legal Practice delivers elite litigation, corporate transaction structuring, and asset preservation for corporations, founders, and high-net-worth individuals.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-[#3b82f6] hover:bg-[#2563eb] text-white px-8 py-4 rounded-xl font-bold text-base transition-all shadow-lg shadow-[#3b82f6]/30 flex items-center gap-3"
                >
                  <span>Request Confidential Partner Review</span>
                  <ArrowRight size={18} />
                </button>
                <a
                  href="tel:8005550188"
                  className="bg-[#111827] hover:bg-[#1e293b] text-white border border-[#334155] px-6 py-4 rounded-xl font-bold text-base transition-all flex items-center gap-2"
                >
                  <PhoneCall size={18} className="text-[#60a5fa]" />
                  <span>Call (800) 555-0188</span>
                </a>
              </div>

              {/* Badges */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#1e293b]">
                <div>
                  <div className="text-2xl font-extrabold text-white">$150M+</div>
                  <div className="text-xs text-[#94a3b8] font-medium">Verdict & Settlement Total</div>
                </div>
                <div>
                  <div className="text-2xl font-extrabold text-[#60a5fa]">25+ Yrs</div>
                  <div className="text-xs text-[#94a3b8] font-medium">Senior Trial Practice</div>
                </div>
                <div>
                  <div className="text-2xl font-extrabold text-white">100%</div>
                  <div className="text-xs text-[#94a3b8] font-medium">Confidential & Privileged</div>
                </div>
              </div>
            </div>

            {/* Right Quick Case Evaluation Intake */}
            <div className="lg:col-span-5">
              <div className="bg-[#111827] border border-[#1e293b] rounded-2xl p-6 sm:p-8 shadow-2xl relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-[#3b82f6]/10 border border-[#3b82f6]/30 flex items-center justify-center text-[#60a5fa]">
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Confidential Case Intake</h3>
                    <p className="text-xs text-[#94a3b8]">Evaluated directly by a Senior Partner</p>
                  </div>
                </div>

                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#94a3b8] uppercase mb-1">
                      Practice Focus Area
                    </label>
                    <select
                      value={formData.practiceArea}
                      onChange={(e) => setFormData({ ...formData, practiceArea: e.target.value })}
                      className="w-full bg-[#0b0f19] border border-[#1e293b] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#3b82f6]"
                    >
                      <option value="commercial_litigation">Commercial Litigation & Disputes</option>
                      <option value="ma_transactions">M&A & Corporate Restructuring</option>
                      <option value="asset_protection">High-Net-Worth Asset Protection</option>
                      <option value="real_estate">Commercial Real Estate Counsel</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#94a3b8] uppercase mb-1">
                      Company / Organization Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Apex Holdings LLC"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full bg-[#0b0f19] border border-[#1e293b] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#3b82f6]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#94a3b8] uppercase mb-1">
                      Contact Name
                    </label>
                    <input
                      type="text"
                      placeholder="Robert Vance, Managing Director"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#0b0f19] border border-[#1e293b] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#3b82f6]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#94a3b8] uppercase mb-1">
                      Direct Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="(555) 000-0000"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#0b0f19] border border-[#1e293b] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#3b82f6]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#3b82f6] hover:bg-[#2563eb] text-white py-3.5 rounded-xl font-bold text-sm transition-all shadow-md shadow-[#3b82f6]/20 flex items-center justify-center gap-2 mt-2"
                  >
                    <span>Request Confidential Evaluation</span>
                    <ArrowRight size={16} />
                  </button>
                </form>

                {formSubmitted && (
                  <div className="absolute inset-0 bg-[#111827] rounded-2xl p-6 flex flex-col items-center justify-center text-center z-20">
                    <div className="w-12 h-12 rounded-full bg-[#10b981]/20 border border-[#10b981]/40 flex items-center justify-center text-[#10b981] mb-4">
                      <CheckCircle2 size={28} />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2">Matter Record Created</h4>
                    <p className="text-sm text-[#94a3b8] mb-6">
                      A Senior Legal Partner will review your details under attorney privilege and reach out within 2 hours.
                    </p>
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="text-xs text-[#60a5fa] font-bold hover:underline"
                    >
                      Submit Another Record
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section id="practices" className="py-20 border-b border-[#1e293b] bg-[#0b0f19]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#3b82f6]/10 border border-[#3b82f6]/30 text-[#60a5fa] text-xs font-bold uppercase tracking-wider">
              <span>Key Counsel Sectors</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Specialized High-Stakes Practice Areas
            </h2>
            <p className="text-[#94a3b8] text-base">
              Engineered for complex commercial legal challenges requiring rapid response and relentless execution.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {practiceAreas.map((area, i) => (
              <div key={i} className="bg-[#111827] border border-[#1e293b] rounded-2xl p-6 flex flex-col justify-between hover:border-[#3b82f6]/50 transition-all">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#3b82f6]/10 border border-[#3b82f6]/20 flex items-center justify-center mb-5">
                    {area.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{area.title}</h3>
                  <p className="text-sm text-[#94a3b8] leading-relaxed mb-6">{area.desc}</p>
                </div>

                <div className="space-y-2 pt-4 border-t border-[#1e293b]">
                  {area.highlights.map((h, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-[#94a3b8]">
                      <CheckCircle2 size={14} className="text-[#3b82f6] shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Verdicts & Results */}
      <section id="results" className="py-20 border-b border-[#1e293b] bg-[#111827]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#3b82f6]/10 border border-[#3b82f6]/30 text-[#60a5fa] text-xs font-bold uppercase tracking-wider">
              <TrendingUp size={14} />
              <span>Proven Results</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Notable Verdicts, Recoveries & Deals
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {verdicts.map((v, i) => (
              <div key={i} className="bg-[#0b0f19] border border-[#1e293b] rounded-2xl p-8 text-center space-y-4">
                <div className="text-4xl font-extrabold text-[#60a5fa]">{v.amount}</div>
                <h3 className="text-base font-bold text-white">{v.title}</h3>
                <p className="text-xs text-[#94a3b8]">{v.client}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Retainer Estimator */}
      <section id="calculator" className="py-20 border-b border-[#1e293b] bg-[#0b0f19]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#3b82f6]/10 border border-[#3b82f6]/30 text-[#60a5fa] text-xs font-bold uppercase tracking-wider">
                <DollarSign size={14} />
                <span>Transparent Budgeting</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Litigation & Retainer Budget Estimator
              </h2>

              <p className="text-[#94a3b8] text-base leading-relaxed">
                Estimate initial legal retainer requirements based on matter complexity, dispute scope, and emergency filing speed.
              </p>

              <div className="space-y-6 bg-[#111827] p-6 rounded-2xl border border-[#1e293b]">
                <div>
                  <label className="block text-xs font-bold text-[#94a3b8] uppercase mb-3">Matter Type</label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => setCaseType("litigation")}
                      className={`py-3 px-4 rounded-xl text-xs font-bold border ${
                        caseType === "litigation" ? "bg-[#3b82f6] text-white border-[#3b82f6]" : "bg-[#0b0f19] text-[#94a3b8] border-[#1e293b]"
                      }`}
                    >
                      Commercial Litigation
                    </button>
                    <button
                      onClick={() => setCaseType("ma")}
                      className={`py-3 px-4 rounded-xl text-xs font-bold border ${
                        caseType === "ma" ? "bg-[#3b82f6] text-white border-[#3b82f6]" : "bg-[#0b0f19] text-[#94a3b8] border-[#1e293b]"
                      }`}
                    >
                      M&A / Acquisition
                    </button>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-bold text-[#94a3b8] uppercase">Matter Valuation ($)</label>
                    <span className="text-sm font-extrabold text-[#60a5fa]">${(disputeValuation / 1000000).toFixed(1)} Million</span>
                  </div>
                  <input
                    type="range"
                    min="500000"
                    max="10000000"
                    step="500000"
                    value={disputeValuation}
                    onChange={(e) => setDisputeValuation(Number(e.target.value))}
                    className="w-full h-2 bg-[#1e293b] rounded-lg appearance-none cursor-pointer accent-[#3b82f6]"
                  />
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-gradient-to-b from-[#1e293b] to-[#0b0f19] border border-[#334155] rounded-3xl p-8 text-center space-y-6">
                <span className="text-xs font-extrabold uppercase text-[#60a5fa] tracking-wider">Estimated Engagement Retainer</span>
                <div className="text-5xl font-extrabold text-white">${estimatedRetainer.toLocaleString()}</div>
                <p className="text-xs text-[#94a3b8]">Applies directly to senior partner billable hours with full trust account transparency.</p>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="w-full bg-[#3b82f6] hover:bg-[#2563eb] text-white py-4 rounded-xl font-bold text-sm shadow-lg shadow-[#3b82f6]/25 flex items-center justify-center gap-2"
                >
                  <span>Request Full Legal Fee Quote</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 border-b border-[#1e293b] bg-[#111827]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-[#0b0f19] border border-[#1e293b] rounded-2xl overflow-hidden">
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full text-left p-6 font-bold text-base text-white flex justify-between items-center"
                >
                  <span>{faq.q}</span>
                  <ChevronDown size={20} className={`text-[#60a5fa] transition-transform ${activeFaq === idx ? "rotate-180" : ""}`} />
                </button>
                {activeFaq === idx && (
                  <div className="px-6 pb-6 text-sm text-[#94a3b8] leading-relaxed border-t border-[#1e293b]/50 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0b0f19] border-t border-[#1e293b] py-12 text-[#94a3b8] text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#3b82f6] flex items-center justify-center text-white font-bold">
              <Scale size={16} className="fill-white" />
            </div>
            <span className="text-white font-bold text-base">Vanguard Legal Practice</span>
          </div>
          <div>© 2026 Vanguard Legal Counsel LLP. Confidential Attorney Advertising.</div>
        </div>
      </footer>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-[#111827] border border-[#1e293b] rounded-3xl p-6 sm:p-8 max-w-lg w-full relative shadow-2xl">
            <button onClick={() => setIsModalOpen(false)} className="absolute top-6 right-6 text-[#94a3b8] hover:text-white">
              <X size={20} />
            </button>
            <h3 className="text-xl font-bold text-white mb-4">Confidential Legal Consultation</h3>
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <input type="text" required placeholder="Full Name" className="w-full bg-[#0b0f19] border border-[#1e293b] rounded-xl px-4 py-3 text-sm text-white" />
              <input type="tel" required placeholder="Phone Number" className="w-full bg-[#0b0f19] border border-[#1e293b] rounded-xl px-4 py-3 text-sm text-white" />
              <textarea rows="3" placeholder="Briefly describe your legal dispute or matter..." className="w-full bg-[#0b0f19] border border-[#1e293b] rounded-xl px-4 py-3 text-sm text-white"></textarea>
              <button type="submit" className="w-full bg-[#3b82f6] hover:bg-[#2563eb] text-white py-3.5 rounded-xl font-bold text-sm">
                Submit Consultation Request
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
