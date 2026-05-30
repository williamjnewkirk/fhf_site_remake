import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar, BookOpen, Calculator, FileText, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Resources — Tax Calendar, Insights & Financial Tools",
  description:
    "Access tax deadline calendars, accounting insights, and financial tools from Flagel Huber Flagel. Helping Ohio businesses and individuals stay informed and prepared.",
  alternates: { canonical: "https://fhf-cpa.com/resources" },
};

const articles = [
  {
    title: "2025 Tax Law Changes Every Business Owner Should Know",
    category: "Tax",
    date: "April 2025",
    description: "A summary of the key federal tax law changes affecting small businesses, including depreciation rules, entity deductions, and retirement plan limits.",
  },
  {
    title: "Is Your Business Ready for a Potential Sale or Transition?",
    category: "Business Advisory",
    date: "March 2025",
    description: "Succession planning is not just for large corporations. We outline the financial and operational steps family business owners should take 3–5 years before a transition.",
  },
  {
    title: "Understanding ESOPs: A Powerful Tool for Business Owners",
    category: "ESOP",
    date: "February 2025",
    description: "Employee Stock Ownership Plans offer unique tax advantages and business succession benefits. Here is a plain-language overview of how they work.",
  },
  {
    title: "Nonprofit Financial Health: Key Metrics Your Board Should Monitor",
    category: "Nonprofit",
    date: "January 2025",
    description: "We break down the financial ratios and indicators that nonprofit boards should review regularly to ensure organizational health and compliance.",
  },
  {
    title: "Real Estate Cost Segregation: Accelerating Depreciation Deductions",
    category: "Real Estate",
    date: "December 2024",
    description: "Cost segregation studies can dramatically accelerate tax deductions for real estate investors. Here is when it makes sense and how it works.",
  },
  {
    title: "Year-End Tax Planning Checklist for Individuals",
    category: "Tax",
    date: "November 2024",
    description: "A practical checklist of actions individuals and families should consider before December 31 to minimize their tax bill.",
  },
];

const taxDates = [
  { date: "Jan 15", description: "Q4 estimated tax payment due (individuals & corporations)" },
  { date: "Jan 31", description: "W-2s and 1099s must be issued to recipients" },
  { date: "Mar 15", description: "S-Corporation and Partnership returns due (or extension)" },
  { date: "Apr 15", description: "Individual and C-Corporation returns due (or extension)" },
  { date: "Jun 16", description: "Q2 estimated tax payment due" },
  { date: "Sep 15", description: "Extended S-Corp, Partnership, and Q3 estimated taxes due" },
  { date: "Oct 15", description: "Extended individual returns due" },
];

const tools = [
  { title: "IRS Withholding Estimator", description: "Check if you are on track with your federal tax withholding.", href: "https://www.irs.gov/individuals/tax-withholding-estimator", icon: Calculator },
  { title: "IRS Where's My Refund", description: "Track the status of your federal tax refund.", href: "https://www.irs.gov/refunds", icon: FileText },
  { title: "Ohio Dept. of Taxation", description: "State tax forms, filing, and payment resources.", href: "https://tax.ohio.gov", icon: BookOpen },
  { title: "IRS Free File", description: "Free federal tax filing for qualifying taxpayers.", href: "https://www.irs.gov/filing/free-file-do-your-federal-taxes-for-free", icon: FileText },
];

const categories = ["All", "Tax", "Business Advisory", "ESOP", "Nonprofit", "Real Estate"];

export default function ResourcesPage() {
  return (
    <>
      {/* Page header */}
      <section className="py-20" style={{ background: `linear-gradient(135deg, var(--navy-dark) 0%, var(--navy) 100%)` }} aria-label="Page header">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="text-sm text-gray-400 mb-6" aria-label="Breadcrumb">
            <ol className="flex gap-2">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-white" aria-current="page">Resources</li>
            </ol>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Resources</h1>
          <p className="text-gray-300 text-xl max-w-2xl">
            Insights, tax calendars, and tools from the FHF team to help you stay informed and prepared.
          </p>
        </div>
      </section>

      {/* Insights */}
      <section className="py-20 bg-white" aria-labelledby="insights-heading">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
            <div>
              <h2 id="insights-heading" className="text-3xl font-bold" style={{ color: "var(--navy)" }}>News & Insights</h2>
              <p className="text-gray-600 mt-2">Timely perspectives from our team on tax law, business strategy, and financial planning.</p>
            </div>
          </div>
          <nav className="flex flex-wrap gap-2 mb-10" aria-label="Article categories">
            {categories.map((c) => (
              <span key={c} className={`px-4 py-1.5 rounded-full text-sm font-medium cursor-pointer transition-colors ${c === "All" ? "text-white" : "border border-gray-300 text-gray-600 hover:border-blue-900 hover:text-blue-900"}`} style={c === "All" ? { backgroundColor: "var(--navy)" } : {}}>
                {c}
              </span>
            ))}
          </nav>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((a) => (
              <article key={a.title} className="rounded-xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2.5 py-1 rounded-full text-xs font-medium" style={{ backgroundColor: "rgba(88,168,207,0.12)", color: "var(--gold)" }}>{a.category}</span>
                    <span className="text-xs text-gray-400">{a.date}</span>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-3 leading-snug">{a.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{a.description}</p>
                  <Link href="/contact" className="text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all" style={{ color: "var(--gold)" }}>
                    Learn More <ArrowRight size={14} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Tax Calendar */}
      <section id="tax-calendar" className="py-20 scroll-mt-24" style={{ backgroundColor: "var(--gray-50)" }} aria-labelledby="calendar-heading">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Calendar size={28} style={{ color: "var(--gold)" }} />
                <h2 id="calendar-heading" className="text-3xl font-bold" style={{ color: "var(--navy)" }}>2025 Tax Calendar</h2>
              </div>
              <p className="text-gray-600 mb-8">Key federal tax deadlines to keep on your radar. Contact us to discuss your specific filing situation.</p>
              <ol className="space-y-4">
                {taxDates.map((d) => (
                  <li key={d.date} className="flex gap-4 items-start bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
                    <time className="text-sm font-bold flex-shrink-0 pt-0.5" style={{ color: "var(--gold)", minWidth: "52px" }}>{d.date}</time>
                    <p className="text-gray-700 text-sm">{d.description}</p>
                  </li>
                ))}
              </ol>
            </div>

            {/* Tools */}
            <div id="tools" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-6">
                <BookOpen size={28} style={{ color: "var(--gold)" }} />
                <h2 className="text-3xl font-bold" style={{ color: "var(--navy)" }}>Useful Tools & Links</h2>
              </div>
              <p className="text-gray-600 mb-8">Curated resources from official sources to help you manage your tax and financial obligations.</p>
              <div className="space-y-4">
                {tools.map((t) => (
                  <a key={t.title} href={t.href} target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 p-5 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "rgba(14,76,133,0.08)" }}>
                      <t.icon size={18} style={{ color: "var(--navy)" }} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold text-gray-900">{t.title}</h3>
                        <ExternalLink size={12} className="text-gray-400 group-hover:text-blue-900 transition-colors" />
                      </div>
                      <p className="text-gray-500 text-sm mt-0.5">{t.description}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16" style={{ background: `linear-gradient(135deg, var(--navy-dark) 0%, var(--navy) 100%)` }} aria-label="Consultation CTA">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Questions about your specific situation?</h2>
          <p className="text-gray-300 mb-8">Our team is happy to answer questions and help you plan ahead.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-lg text-lg font-semibold text-white transition-all hover:opacity-90" style={{ backgroundColor: "var(--green)" }}>
            Contact an Advisor <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </>
  );
}
