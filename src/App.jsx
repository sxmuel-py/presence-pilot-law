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
  Gavel,
  ShieldAlert
} from "lucide-react";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  // Retainer Calculator State
  const [caseType, setCaseType] = useState("litigation");
  const [disputeValuation, setDisputeValuation] = useState(2500000);
  const [urgencyLevel, setUrgencyLevel] = useState("emergency");

  // Form State
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    practiceArea: "commercial_litigation",
    summary: "",
  });

  const baseRetainer =
    caseType === "litigation"
      ? 25000
      : caseType === "ma"
      ? 35000
      : caseType === "estate"
      ? 15000
      : 18000;

  const multiplier = urgencyLevel === "emergency" ? 1.5 : 1.0;
  const estimatedRetainer = Math.round(baseRetainer * multiplier);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const practiceAreas = [
    {
      title: "Commercial & Shareholder Litigation",
      desc: "Aggressive trial counsel for breach of fiduciary duty, partnership lockouts, trade secret theft, and multi-jurisdictional injunctions.",
      icon: <Gavel size={26} className="text-[#f59e0b]" />,
      highlights: ["Emergency TROs & Injunctions", "Shareholder Squeeze-Out Defense", "Trade Secret Infringement"],
    },
    {
      title: "Cross-Border M&A & Private Equity",
      desc: "End-to-end legal command for mid-market acquisitions, leveraged buyouts, corporate recapitalizations, and antitrust filings.",
      icon: <Briefcase size={26} className="text-[#f59e0b]" />,
      highlights: ["Buy-Side & Sell-Side Advisory", "Regulatory Approval Clearance", "Debt & Equity Restructuring"],
    },
    {
      title: "Dynasty Asset Protection & Trusts",
      desc: "Ironclad offshore and domestic trust structures safeguarding ultra-high-net-worth real estate, corporate equity, and family fortunes.",
      icon: <Lock size={26} className="text-[#f59e0b]" />,
      highlights: ["Foreign & Domestic Asset Protection", "Family Office Governance", "Tax Minimization Architecture"],
    },
    {
      title: "Commercial Real Estate Syndication",
      desc: "Lead legal counsel for institutional real estate acquisitions, mezzanine financing, commercial lease negotiations, and zoning disputes.",
      icon: <Building size={26} className="text-[#f59e0b]" />,
      highlights: ["Institutional Debt Syndication", "Land Use & Master Planning", "High-Value Lease Disputes"],
    },
  ];

  const verdicts = [
    { amount: "$42.5 Million", title: "Commercial Breach of Fiduciary Duty Verdict", client: "Tech Enterprise Syndicate", court: "Delaware Chancery Court" },
    { amount: "$18.2 Million", title: "Shareholder Buyout Dispute Settlement", client: "Private Equity Sponsor", court: "New York Commercial Division" },
    { amount: "$12.0 Million", title: "Trade Secret Theft Permanent Injunction", client: "Biotech Innovations Inc", court: "Federal District Court" },
  ];

  const faqs = [
    {
      q: "How does Vanguard maintain absolute confidentiality?",
      a: "All communications sent to our senior partner desk are protected under strict attorney-client privilege. We execute formal NDAs prior to any document disclosure.",
    },
    {
      q: "What is Vanguard's trial response timeline for emergency injunctions?",
      a: "Our rapid-response trial unit can draft and file Emergency Temporary Restraining Orders (TROs) within 6 to 12 hours in federal or state commercial courts.",
    },
    {
      q: "What are your standard fee structures for high-stakes litigation?",
      a: "We offer tailored retainer structures including dedicated monthly corporate counsel retainers, fixed project caps, or litigation retainers credited directly against partner billable hours.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#070a12] text-[#f8fafc] font-sans antialiased selection:bg-[#f59e0b] selection:text-black">
      {/* Executive Top Banner */}
      <div className="bg-[#131927] border-b border-[#f59e0b]/20 py-2.5 px-4 text-center text-xs text-[#d1d5db] flex justify-center items-center gap-3">
        <span className="inline-flex items-center gap-1 text-[#f59e0b] font-bold tracking-wider uppercase text-[11px]">
          <ShieldAlert size={13} /> Strict Attorney-Client Privilege Enforced
        </span>
        <span className="hidden sm:inline text-[#4b5563]">|</span>
        <span className="hidden sm:inline text-[#9ca3af]">Senior Partner Direct Intake: </span>
        <a href="tel:8005550188" className="text-[#f59e0b] font-extrabold hover:underline tracking-wide">
          (800) 555-0188
        </a>
      </div>

      {/* Regal Header */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-[#070a12]/95 border-b border-[#f59e0b]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-22 flex items-center justify-between">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-[#f59e0b] via-[#d97706] to-[#78350f] flex items-center justify-center text-black shadow-lg shadow-[#f59e0b]/20 border border-[#fbbf24]/40">
              <Scale size={24} className="stroke-[2.5]" />
            </div>
            <div>
              <span className="font-serif-legal text-2xl font-black tracking-wider text-white block leading-none">
                VANGUARD
              </span>
              <span className="text-[10px] uppercase font-extrabold tracking-[0.2em] text-[#f59e0b] block mt-1">
                Legal Counsel LLP
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-widest font-bold text-[#9ca3af]">
            <a href="#practices" className="hover:text-[#f59e0b] transition-colors">Practice Areas</a>
            <a href="#verdicts" className="hover:text-[#f59e0b] transition-colors">Verdicts</a>
            <a href="#calculator" className="hover:text-[#f59e0b] transition-colors">Retainer Calculator</a>
            <a href="#faq" className="hover:text-[#f59e0b] transition-colors">FAQ</a>
          </nav>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-gradient-to-r from-[#f59e0b] to-[#d97706] hover:from-[#d97706] hover:to-[#b45309] text-black font-extrabold px-6 py-3 rounded-lg text-xs uppercase tracking-widest transition-all shadow-lg shadow-[#f59e0b]/20 border border-[#fbbf24]/50 flex items-center gap-2"
            >
              <span>Partner Review</span>
              <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-20 pb-28 border-b border-[#1f293d] overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1f190c] via-[#070a12] to-[#070a12]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f59e0b]/10 border border-[#f59e0b]/40 text-[#f59e0b] text-xs font-bold uppercase tracking-widest">
                <Award size={14} />
                <span>Premier Commercial Trial Practice</span>
              </div>

              <h1 className="font-serif-legal text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.15] tracking-tight">
                Relentless Legal Command For High-Stakes Disputes.
              </h1>

              <p className="text-base sm:text-lg text-[#9ca3af] leading-relaxed max-w-2xl">
                Vanguard Legal Counsel represents corporations, managing partners, and ultra-high-net-worth clients in multi-million dollar commercial litigation, corporate acquisitions, and emergency asset protection.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-gradient-to-r from-[#f59e0b] to-[#d97706] hover:from-[#d97706] hover:to-[#b45309] text-black px-8 py-4 rounded-xl font-extrabold text-sm uppercase tracking-widest transition-all shadow-xl shadow-[#f59e0b]/25 border border-[#fbbf24]/50 flex items-center gap-3"
                >
                  <span>Request Partner Consultation</span>
                  <ArrowRight size={18} />
                </button>
                <a
                  href="tel:8005550188"
                  className="bg-[#111726] hover:bg-[#1a233a] text-white border border-[#f59e0b]/30 px-6 py-4 rounded-xl font-bold text-xs uppercase tracking-widest transition-all flex items-center gap-2"
                >
                  <PhoneCall size={18} className="text-[#f59e0b]" />
                  <span>Call (800) 555-0188</span>
                </a>
              </div>

              {/* Stats Bar */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-[#1f293d]">
                <div>
                  <div className="font-serif-legal text-3xl font-bold text-white">$150M+</div>
                  <div className="text-xs text-[#9ca3af] uppercase font-bold tracking-wider mt-1">Recovered & Secured</div>
                </div>
                <div>
                  <div className="font-serif-legal text-3xl font-bold text-[#f59e0b]">25+ Yrs</div>
                  <div className="text-xs text-[#9ca3af] uppercase font-bold tracking-wider mt-1">Federal Trial Counsel</div>
                </div>
                <div>
                  <div className="font-serif-legal text-3xl font-bold text-white">100%</div>
                  <div className="text-xs text-[#9ca3af] uppercase font-bold tracking-wider mt-1">Privileged Privilege</div>
                </div>
              </div>
            </div>

            {/* Confidential Partner Form Card */}
            <div className="lg:col-span-5">
              <div className="bg-[#0f1523] border-2 border-[#f59e0b]/30 rounded-3xl p-7 sm:p-9 shadow-2xl relative shadow-[#f59e0b]/5">
                <div className="flex items-center gap-3.5 mb-6 pb-4 border-b border-[#1f293d]">
                  <div className="w-11 h-11 rounded-xl bg-[#f59e0b]/10 border border-[#f59e0b]/30 flex items-center justify-center text-[#f59e0b]">
                    <Lock size={22} />
                  </div>
                  <div>
                    <h3 className="font-serif-legal text-lg font-bold text-white uppercase tracking-wider">Privileged Case Intake</h3>
                    <p className="text-xs text-[#9ca3af]">Direct Partner Desk Review</p>
                  </div>
                </div>

                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <label className="block text-[11px] font-extrabold text-[#f59e0b] uppercase tracking-wider mb-1.5">
                      Practice Focus Area
                    </label>
                    <select
                      value={formData.practiceArea}
                      onChange={(e) => setFormData({ ...formData, practiceArea: e.target.value })}
                      className="w-full bg-[#070a12] border border-[#1f293d] rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-[#f59e0b]"
                    >
                      <option value="commercial_litigation">Commercial & Shareholder Litigation</option>
                      <option value="ma_transactions">Cross-Border M&A & Private Equity</option>
                      <option value="asset_protection">Dynasty Asset Protection & Trusts</option>
                      <option value="real_estate">Commercial Real Estate Syndication</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-extrabold text-[#f59e0b] uppercase tracking-wider mb-1.5">
                      Company / Organization Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Apex Holdings LLC"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full bg-[#070a12] border border-[#1f293d] rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-[#f59e0b]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-extrabold text-[#f59e0b] uppercase tracking-wider mb-1.5">
                      Contact Name & Title
                    </label>
                    <input
                      type="text"
                      placeholder="Robert Vance, Managing Director"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#070a12] border border-[#1f293d] rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-[#f59e0b]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-extrabold text-[#f59e0b] uppercase tracking-wider mb-1.5">
                      Direct Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="(555) 000-0000"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#070a12] border border-[#1f293d] rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-[#f59e0b]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#f59e0b] to-[#d97706] hover:from-[#d97706] hover:to-[#b45309] text-black py-4 rounded-xl font-extrabold text-xs uppercase tracking-widest transition-all shadow-lg shadow-[#f59e0b]/20 flex items-center justify-center gap-2 mt-2"
                  >
                    <span>Initiate Privileged Consultation</span>
                    <ArrowRight size={16} />
                  </button>
                </form>

                {formSubmitted && (
                  <div className="absolute inset-0 bg-[#0f1523] rounded-3xl p-8 flex flex-col items-center justify-center text-center z-20 border-2 border-[#f59e0b]">
                    <div className="w-14 h-14 rounded-full bg-[#f59e0b]/20 border border-[#f59e0b] flex items-center justify-center text-[#f59e0b] mb-4">
                      <CheckCircle2 size={32} />
                    </div>
                    <h4 className="font-serif-legal text-xl font-bold text-white mb-2">Matter Record Initiated</h4>
                    <p className="text-sm text-[#9ca3af] mb-6">
                      A Senior Legal Partner will examine your claim under attorney-client privilege within 2 hours.
                    </p>
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="text-xs text-[#f59e0b] font-bold uppercase tracking-wider hover:underline"
                    >
                      Submit Another Privileged Record
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section id="practices" className="py-24 border-b border-[#1f293d] bg-[#070a12]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f59e0b]/10 border border-[#f59e0b]/30 text-[#f59e0b] text-xs font-extrabold uppercase tracking-widest">
              <span>Legal Specialties</span>
            </div>
            <h2 className="font-serif-legal text-3xl sm:text-4xl font-bold text-white tracking-tight">
              High-Stakes Legal Capabilities
            </h2>
            <p className="text-[#9ca3af] text-base">
              Built specifically for complex disputes requiring high-velocity trial advocacy and multi-million dollar transaction governance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {practiceAreas.map((area, i) => (
              <div key={i} className="bg-[#0f1523] border border-[#1f293d] rounded-2xl p-7 flex flex-col justify-between hover:border-[#f59e0b]/60 transition-all group">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#f59e0b]/10 border border-[#f59e0b]/20 flex items-center justify-center mb-6 group-hover:bg-[#f59e0b]/20 transition-colors">
                    {area.icon}
                  </div>
                  <h3 className="font-serif-legal text-lg font-bold text-white mb-3 group-hover:text-[#f59e0b] transition-colors">{area.title}</h3>
                  <p className="text-xs text-[#9ca3af] leading-relaxed mb-6">{area.desc}</p>
                </div>

                <div className="space-y-2 pt-4 border-t border-[#1f293d]">
                  {area.highlights.map((h, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-[#d1d5db]">
                      <CheckCircle2 size={13} className="text-[#f59e0b] shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Verdicts */}
      <section id="verdicts" className="py-24 border-b border-[#1f293d] bg-[#0f1523]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f59e0b]/10 border border-[#f59e0b]/30 text-[#f59e0b] text-xs font-extrabold uppercase tracking-widest">
              <TrendingUp size={14} />
              <span>Proven Track Record</span>
            </div>
            <h2 className="font-serif-legal text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Significant Verdicts & Settlements
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {verdicts.map((v, i) => (
              <div key={i} className="bg-[#070a12] border-2 border-[#f59e0b]/30 rounded-2xl p-8 text-center space-y-4 shadow-xl">
                <div className="font-serif-legal text-4xl font-black text-[#f59e0b]">{v.amount}</div>
                <h3 className="font-serif-legal text-base font-bold text-white">{v.title}</h3>
                <div className="text-xs text-[#9ca3af] pt-2 border-t border-[#1f293d] flex justify-between items-center">
                  <span>{v.client}</span>
                  <span className="text-[#f59e0b] font-bold">{v.court}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Retainer Calculator */}
      <section id="calculator" className="py-24 border-b border-[#1f293d] bg-[#070a12]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f59e0b]/10 border border-[#f59e0b]/30 text-[#f59e0b] text-xs font-extrabold uppercase tracking-widest">
                <DollarSign size={14} />
                <span>Transparent Partner Retainers</span>
              </div>

              <h2 className="font-serif-legal text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Litigation & Retainer Budget Calculator
              </h2>

              <p className="text-[#9ca3af] text-base leading-relaxed">
                Calculate estimated initial engagement retainers based on legal complexity, dispute valuation, and emergency filing speed.
              </p>

              <div className="space-y-6 bg-[#0f1523] p-7 rounded-2xl border border-[#1f293d]">
                <div>
                  <label className="block text-xs font-extrabold text-[#f59e0b] uppercase tracking-wider mb-3">Matter Type</label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => setCaseType("litigation")}
                      className={`py-3 px-4 rounded-xl text-xs font-extrabold uppercase tracking-wider border transition-all ${
                        caseType === "litigation" ? "bg-[#f59e0b] text-black border-[#f59e0b]" : "bg-[#070a12] text-[#9ca3af] border-[#1f293d]"
                      }`}
                    >
                      Commercial Litigation
                    </button>
                    <button
                      onClick={() => setCaseType("ma")}
                      className={`py-3 px-4 rounded-xl text-xs font-extrabold uppercase tracking-wider border transition-all ${
                        caseType === "ma" ? "bg-[#f59e0b] text-black border-[#f59e0b]" : "bg-[#070a12] text-[#9ca3af] border-[#1f293d]"
                      }`}
                    >
                      Cross-Border M&A
                    </button>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-extrabold text-[#f59e0b] uppercase tracking-wider">Matter Valuation ($)</label>
                    <span className="font-serif-legal text-base font-bold text-white">${(disputeValuation / 1000000).toFixed(1)} Million</span>
                  </div>
                  <input
                    type="range"
                    min="1000000"
                    max="20000000"
                    step="1000000"
                    value={disputeValuation}
                    onChange={(e) => setDisputeValuation(Number(e.target.value))}
                    className="w-full h-2 bg-[#1f293d] rounded-lg appearance-none cursor-pointer accent-[#f59e0b]"
                  />
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-gradient-to-b from-[#131927] to-[#070a12] border-2 border-[#f59e0b]/40 rounded-3xl p-9 text-center space-y-6 shadow-2xl">
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#f59e0b]">Estimated Initial Retainer</span>
                <div className="font-serif-legal text-5xl font-black text-white">${estimatedRetainer.toLocaleString()}</div>
                <p className="text-xs text-[#9ca3af]">100% applied directly to senior partner billable hours with full trust account transparency.</p>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="w-full bg-gradient-to-r from-[#f59e0b] to-[#d97706] text-black py-4 rounded-xl font-extrabold text-xs uppercase tracking-widest shadow-lg shadow-[#f59e0b]/20 flex items-center justify-center gap-2"
                >
                  <span>Lock In Engagement Retainer</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 border-b border-[#1f293d] bg-[#0f1523]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-serif-legal text-3xl sm:text-4xl font-bold text-white tracking-tight">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-[#070a12] border border-[#1f293d] rounded-2xl overflow-hidden">
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full text-left p-6 font-serif-legal font-bold text-base text-white flex justify-between items-center"
                >
                  <span>{faq.q}</span>
                  <ChevronDown size={20} className={`text-[#f59e0b] transition-transform ${activeFaq === idx ? "rotate-180" : ""}`} />
                </button>
                {activeFaq === idx && (
                  <div className="px-6 pb-6 text-sm text-[#9ca3af] leading-relaxed border-t border-[#1f293d] pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#070a12] border-t border-[#1f293d] py-12 text-[#9ca3af] text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#f59e0b] flex items-center justify-center text-black font-bold">
              <Scale size={16} className="fill-black" />
            </div>
            <span className="font-serif-legal text-white font-bold text-base">Vanguard Legal Counsel</span>
          </div>
          <div>© 2026 Vanguard Legal Counsel LLP. Attorney Advertising. All rights reserved.</div>
        </div>
      </footer>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="bg-[#0f1523] border-2 border-[#f59e0b] rounded-3xl p-8 max-w-lg w-full relative shadow-2xl">
            <button onClick={() => setIsModalOpen(false)} className="absolute top-6 right-6 text-[#9ca3af] hover:text-white">
              <X size={20} />
            </button>
            <h3 className="font-serif-legal text-xl font-bold text-white mb-2 uppercase tracking-wider">Privileged Consultation</h3>
            <p className="text-xs text-[#9ca3af] mb-6">Evaluated directly under attorney-client privilege</p>
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <input type="text" required placeholder="Full Name" className="w-full bg-[#070a12] border border-[#1f293d] rounded-xl px-4 py-3.5 text-sm text-white focus:border-[#f59e0b]" />
              <input type="tel" required placeholder="Direct Phone Number" className="w-full bg-[#070a12] border border-[#1f293d] rounded-xl px-4 py-3.5 text-sm text-white focus:border-[#f59e0b]" />
              <textarea rows="3" placeholder="Brief details of legal dispute or corporate matter..." className="w-full bg-[#070a12] border border-[#1f293d] rounded-xl px-4 py-3.5 text-sm text-white focus:border-[#f59e0b]"></textarea>
              <button type="submit" className="w-full bg-gradient-to-r from-[#f59e0b] to-[#d97706] text-black py-4 rounded-xl font-extrabold text-xs uppercase tracking-widest">
                Submit Privileged Inquiry
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
