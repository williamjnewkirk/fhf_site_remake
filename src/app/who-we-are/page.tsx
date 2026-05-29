import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle, Award, User } from "lucide-react";
import { company, team } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Our Firm — History, Team & Values",
  description:
    "Learn about Flagel Huber Flagel's nearly century-long history serving Ohio families and businesses. Meet our team of 30+ credentialed CPAs across Cincinnati, Dayton, and Troy.",
  alternates: { canonical: "https://fhf-cpa.com/who-we-are" },
};

const teamSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: company.name,
  foundingDate: String(company.founded),
  numberOfEmployees: { "@type": "QuantitativeValue", minValue: 50, maxValue: 60 },
  member: team.map((m) => ({
    "@type": "Person",
    name: m.name,
    jobTitle: m.title,
    description: m.credentials,
  })),
};

const values = [
  { title: "Integrity", description: "We hold ourselves to the highest ethical standards in every client interaction and every recommendation we make." },
  { title: "Expertise", description: "Our team invests continuously in technical education and credentials to deliver the best advice in a complex and changing environment." },
  { title: "Relationships", description: "We build long-term partnerships grounded in trust. Client continuity and staff continuity are hallmarks of who we are." },
  { title: "Clarity", description: "We translate complex financial and tax concepts into plain language — because good advice you don't understand isn't good advice." },
];

const timeline = [
  { year: "1933", event: "Firm founded in Dayton, Ohio during a time when businesses needed trustworthy guidance most." },
  { year: "1960s–80s", event: "Expanded services to include business advisory, audit, and specialized tax planning as clients grew." },
  { year: "1990s", event: "Added business valuation and ESOP advisory capabilities; expanded credentialed staff." },
  { year: "2000s", event: "Opened the Cincinnati office to serve the growing southwest Ohio market." },
  { year: "Today", event: "Three offices, 50+ employees, 30+ CPAs — still locally owned and independent, still focused on building lifelong prosperity for our clients." },
];

const credentials = ["CPA — Certified Public Accountant", "ABV — Accredited in Business Valuation", "CFP® — Certified Financial Planner", "CFF — Certified in Financial Forensics"];

export default function WhoWeArePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(teamSchema) }} />

      {/* Page header */}
      <section className="py-20" style={{ background: `linear-gradient(135deg, var(--navy-dark) 0%, var(--navy) 100%)` }} aria-label="Page header">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="text-sm text-gray-400 mb-6" aria-label="Breadcrumb">
            <ol className="flex gap-2">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-white" aria-current="page">Who We Are</li>
            </ol>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Who We Are</h1>
          <p className="text-gray-300 text-xl max-w-2xl">
            An independent CPA and advisory firm building lifelong prosperity for Ohio families and businesses since 1933.
          </p>
        </div>
      </section>

      {/* About */}
      <section className="py-20 bg-white" aria-labelledby="about-heading">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 id="about-heading" className="text-3xl md:text-4xl font-bold mb-6" style={{ color: "var(--navy)" }}>
                Our Firm
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Flagel Huber Flagel is an independent certified public accounting and advisory firm with roots stretching back to 1933. With over 50 employees and more than 30 CPAs on staff, we are large enough to offer a full range of specialized services — and focused enough to know our clients personally.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                We are not a national chain. We are a local firm with deep ties to the communities we serve across Cincinnati, Dayton, and Troy. Our advisors live here, our clients work here, and we are invested in this region&apos;s success.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Our tagline — <strong className="text-gray-800">Building Lifelong Prosperity</strong> — is more than a slogan. It reflects how we approach every relationship: not just for the next tax season, but for your entire financial life.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Founded", value: "1933" },
                { label: "Employees", value: "50+" },
                { label: "CPAs on Staff", value: "30+" },
                { label: "Offices", value: "3" },
              ].map((stat) => (
                <div key={stat.label} className="rounded-2xl p-8 text-center" style={{ backgroundColor: "var(--gray-50)", border: "1px solid var(--gray-100)" }}>
                  <div className="text-4xl font-bold mb-2" style={{ color: "var(--navy)" }}>{stat.value}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20" style={{ backgroundColor: "var(--gray-50)" }} aria-labelledby="values-heading">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 id="values-heading" className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "var(--navy)" }}>Our Values</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                <CheckCircle size={24} className="mb-4" style={{ color: "var(--gold)" }} />
                <h3 className="font-bold text-lg mb-2" style={{ color: "var(--navy)" }}>{v.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white" aria-labelledby="history-heading">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 id="history-heading" className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "var(--navy)" }}>Our History</h2>
            <p className="text-gray-600 text-lg">Nearly a century of service to Ohio businesses and families.</p>
          </div>
          <ol className="relative border-l-2 border-gray-200 space-y-10 pl-8">
            {timeline.map((t) => (
              <li key={t.year} className="relative">
                <span className="absolute -left-[41px] flex items-center justify-center w-5 h-5 rounded-full bg-white border-2" style={{ borderColor: "var(--gold)" }} />
                <time className="text-sm font-bold" style={{ color: "var(--gold)" }}>{t.year}</time>
                <p className="mt-1 text-gray-700 leading-relaxed">{t.event}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="py-20 scroll-mt-24" style={{ backgroundColor: "var(--gray-50)" }} aria-labelledby="team-heading">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 id="team-heading" className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "var(--navy)" }}>Our Leadership</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Our partners bring decades of experience and hold advanced credentials across accounting, valuation, and financial planning.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-14">
            {team.map((member) => (
              <div key={member.name} className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm text-center">
                <div className="relative w-full aspect-[3/4] bg-gray-100">
                  {member.photo ? (
                    <Image
                      src={member.photo}
                      alt={`${member.name}${member.credentials ? `, ${member.credentials}` : ""}`}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center" style={{ backgroundColor: "rgba(26,46,74,0.06)" }}>
                      <User size={40} style={{ color: "var(--navy)", opacity: 0.3 }} />
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-900 text-sm mb-0.5">{member.name}</h3>
                  {member.credentials && <p className="text-xs font-medium mb-0.5" style={{ color: "var(--gold)" }}>{member.credentials}</p>}
                  <p className="text-xs text-gray-500">{member.title}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Credentials */}
          <div className="bg-white rounded-2xl p-8 border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <Award size={24} style={{ color: "var(--gold)" }} />
              <h3 className="font-bold text-xl" style={{ color: "var(--navy)" }}>Team Credentials</h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {credentials.map((c) => (
                <div key={c} className="flex items-center gap-2 text-gray-700">
                  <CheckCircle size={16} style={{ color: "var(--gold)" }} />
                  <span className="text-sm">{c}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Careers CTA */}
      <section className="py-16" style={{ background: `linear-gradient(135deg, var(--navy-dark) 0%, var(--navy) 100%)` }} aria-label="Careers CTA">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Join Our Team</h2>
          <p className="text-gray-300 mb-8">
            We are always looking for talented accounting professionals who share our commitment to client service and lifelong prosperity.
          </p>
          <Link href="/careers" className="inline-flex items-center gap-2 px-8 py-4 rounded-lg text-lg font-semibold text-white transition-all hover:opacity-90" style={{ backgroundColor: "var(--gold)" }}>
            View Open Positions <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </>
  );
}
