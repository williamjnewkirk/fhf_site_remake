import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle, Briefcase, GraduationCap, Heart } from "lucide-react";
import { company } from "@/lib/data";

export const metadata: Metadata = {
  title: "Careers — Join Our Team",
  description:
    "Explore career opportunities at Flagel Huber Flagel. We are hiring CPAs and accounting professionals across our Cincinnati, Dayton, and Troy, Ohio offices.",
  alternates: { canonical: "https://fhf-cpa.com/careers" },
};

const benefits = [
  "Competitive salary and performance-based bonuses",
  "Comprehensive health, dental, and vision insurance",
  "401(k) with employer match",
  "Generous paid time off including CPE days",
  "CPA exam and continuing education support",
  "Clear career advancement pathways",
  "Flexible scheduling during non-peak periods",
  "Collaborative, team-focused culture",
];

const openings = [
  { title: "Tax Senior / Manager", location: "Cincinnati or Dayton, OH", type: "Full-Time", description: "Lead tax engagements for closely held businesses and high-net-worth individuals. 3–7 years of public accounting experience preferred." },
  { title: "Audit Senior", location: "Dayton or Troy, OH", type: "Full-Time", description: "Manage assurance engagements for nonprofit and privately held business clients. CPA or CPA candidate required." },
  { title: "Staff Accountant — Tax", location: "Cincinnati, OH", type: "Full-Time", description: "Prepare individual and business tax returns. 0–2 years of public accounting experience. CPA candidate encouraged." },
  { title: "Business Valuation Analyst", location: "Dayton, OH", type: "Full-Time", description: "Assist with valuation engagements for ESOPs, litigation support, and M&A. ABV candidacy a plus." },
];

export default function CareersPage() {
  return (
    <>
      {/* Page header */}
      <section className="py-20" style={{ background: `linear-gradient(135deg, var(--navy-dark) 0%, var(--navy) 100%)` }} aria-label="Page header">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="text-sm text-gray-400 mb-6" aria-label="Breadcrumb">
            <ol className="flex gap-2">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-white" aria-current="page">Careers</li>
            </ol>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Careers at FHF</h1>
          <p className="text-gray-300 text-xl max-w-2xl">
            Build a meaningful career at a firm that invests in your growth and values your contribution.
          </p>
        </div>
      </section>

      {/* Why work here */}
      <section className="py-20 bg-white" aria-labelledby="why-heading">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 id="why-heading" className="text-3xl font-bold mb-6" style={{ color: "var(--navy)" }}>Why Build Your Career at FHF?</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                At Flagel Huber Flagel, you are not a number. You work alongside experienced partners who mentor and invest in your development. Our firm size means you get real responsibility early, while our depth of services means you keep growing.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                We have been building lifelong prosperity for our clients since 1933 — and we do the same for our team members, with careers that span decades and advancement that rewards performance.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-5">
              {[
                { icon: Briefcase, title: "Real Responsibility", desc: "From day one, you contribute to meaningful client engagements — not busywork." },
                { icon: GraduationCap, title: "Investment in You", desc: "We fund your CPA exam, CPE credits, and advanced credentials like ABV and CFF." },
                { icon: Heart, title: "Culture That Lasts", desc: "Our staff retention is a point of pride — and clients notice the difference." },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 p-5 rounded-xl border border-gray-100 shadow-sm">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "rgba(26,46,74,0.08)" }}>
                    <item.icon size={22} style={{ color: "var(--navy)" }} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1" style={{ color: "var(--navy)" }}>{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20" style={{ backgroundColor: "var(--gray-50)" }} aria-labelledby="benefits-heading">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 id="benefits-heading" className="text-3xl font-bold mb-4" style={{ color: "var(--navy)" }}>Benefits & Perks</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {benefits.map((b) => (
              <div key={b} className="bg-white rounded-xl p-5 border border-gray-100 flex items-start gap-3">
                <CheckCircle size={18} className="flex-shrink-0 mt-0.5" style={{ color: "var(--gold)" }} />
                <span className="text-gray-700 text-sm">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open positions */}
      <section className="py-20 bg-white" aria-labelledby="openings-heading">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 id="openings-heading" className="text-3xl font-bold mb-4" style={{ color: "var(--navy)" }}>Current Openings</h2>
            <p className="text-gray-600">Don&apos;t see the right fit? Send us your resume anyway — we keep a file of great candidates.</p>
          </div>
          <div className="space-y-4">
            {openings.map((job) => (
              <div key={job.title} className="rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="font-bold text-xl mb-2" style={{ color: "var(--navy)" }}>{job.title}</h3>
                    <div className="flex flex-wrap gap-3 mb-3">
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-900">{job.location}</span>
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-yellow-50 text-yellow-800">{job.type}</span>
                    </div>
                    <p className="text-gray-600 text-sm">{job.description}</p>
                  </div>
                  <a href={`mailto:${company.email}?subject=Application: ${job.title}`} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white flex-shrink-0" style={{ backgroundColor: "var(--gold)" }}>
                    Apply Now <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 rounded-2xl text-center" style={{ background: `linear-gradient(135deg, var(--navy-dark) 0%, var(--navy) 100%)` }}>
            <h3 className="text-xl font-bold text-white mb-3">No perfect match above?</h3>
            <p className="text-gray-300 mb-6">We welcome speculative applications from talented accounting professionals at all levels.</p>
            <a href={`mailto:${company.email}?subject=General Application`} className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-white border border-white/30 hover:bg-white/10 transition-colors">
              Send Your Resume <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
