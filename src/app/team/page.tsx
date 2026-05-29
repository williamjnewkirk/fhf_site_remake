import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { User } from "lucide-react";
import { team } from "@/lib/data";

export const metadata: Metadata = {
  title: "Our Team — 30+ Credentialed CPAs",
  description:
    "Meet the Flagel Huber Flagel team: 30+ credentialed CPAs and advisors across Cincinnati, Dayton, and Troy, Ohio. Partners, managers, and specialist staff committed to your success.",
  alternates: { canonical: "https://fhf-cpa.com/team" },
};

const partners = team.filter((m) => m.title.toLowerCase().includes("partner"));
const managers = team.filter((m) => !m.title.toLowerCase().includes("partner"));

export default function TeamPage() {
  return (
    <>
      {/* Page header */}
      <section className="py-20" style={{ background: `linear-gradient(135deg, var(--navy-dark) 0%, var(--navy) 100%)` }} aria-label="Page header">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="text-sm text-gray-400 mb-6" aria-label="Breadcrumb">
            <ol className="flex gap-2">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/who-we-are" className="hover:text-white transition-colors">Who We Are</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-white" aria-current="page">Our Team</li>
            </ol>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Team</h1>
          <p className="text-gray-300 text-xl max-w-2xl">
            50+ professionals dedicated to building lifelong prosperity for our clients. Meet the people behind FHF.
          </p>
        </div>
      </section>

      {/* Partners */}
      <section className="py-20 bg-white" aria-labelledby="partners-heading">
        <div className="max-w-7xl mx-auto px-4">
          <h2 id="partners-heading" className="text-3xl font-bold mb-12" style={{ color: "var(--navy)" }}>Partners &amp; Directors</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {partners.map((member) => (
              <article key={member.name} className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="relative w-full" style={{ aspectRatio: "3/4" }}>
                  {member.photo ? (
                    <Image
                      src={member.photo}
                      alt={`${member.name}${member.credentials ? `, ${member.credentials}` : ""}`}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center" style={{ backgroundColor: "rgba(26,46,74,0.05)" }}>
                      <User size={40} style={{ color: "var(--navy)", opacity: 0.2 }} />
                    </div>
                  )}
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-bold text-gray-900 text-sm leading-tight mb-0.5">{member.name}</h3>
                  {member.credentials && (
                    <p className="text-xs font-semibold mb-0.5" style={{ color: "var(--gold)" }}>{member.credentials}</p>
                  )}
                  <p className="text-xs text-gray-500">{member.title}</p>
                  {member.linkedin && (
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="inline-block mt-2 text-xs hover:opacity-70 transition-opacity" style={{ color: "var(--navy)" }} aria-label={`${member.name} on LinkedIn`}>
                      LinkedIn
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Managers & Staff */}
      <section className="py-20" style={{ backgroundColor: "var(--gray-50)" }} aria-labelledby="managers-heading">
        <div className="max-w-7xl mx-auto px-4">
          <h2 id="managers-heading" className="text-3xl font-bold mb-12" style={{ color: "var(--navy)" }}>Managers &amp; Professional Staff</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {managers.map((member) => (
              <article key={member.name} className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="relative w-full" style={{ aspectRatio: "3/4" }}>
                  {member.photo ? (
                    <Image
                      src={member.photo}
                      alt={`${member.name}${member.credentials ? `, ${member.credentials}` : ""}`}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center" style={{ backgroundColor: "rgba(26,46,74,0.05)" }}>
                      <User size={40} style={{ color: "var(--navy)", opacity: 0.2 }} />
                    </div>
                  )}
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-bold text-gray-900 text-sm leading-tight mb-0.5">{member.name}</h3>
                  {member.credentials && (
                    <p className="text-xs font-semibold mb-0.5" style={{ color: "var(--gold)" }}>{member.credentials}</p>
                  )}
                  <p className="text-xs text-gray-500">{member.title}</p>
                  {member.linkedin && (
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="inline-block mt-2 text-xs hover:opacity-70 transition-opacity" style={{ color: "var(--navy)" }} aria-label={`${member.name} on LinkedIn`}>
                      LinkedIn
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-16 bg-white" aria-label="Team credentials">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--navy)" }}>Our Credentials</h2>
          <p className="text-gray-600 mb-8">FHF team members hold advanced credentials across accounting, valuation, and financial planning.</p>
          <div className="flex flex-wrap justify-center gap-3">
            {["CPA", "ABV — Accredited in Business Valuation", "CFP® — Certified Financial Planner", "CFF — Certified in Financial Forensics", "M.ACC. — Master of Accounting"].map((c) => (
              <span key={c} className="px-4 py-2 rounded-full text-sm font-medium border" style={{ borderColor: "var(--gold)", color: "var(--navy)" }}>{c}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Careers CTA */}
      <section className="py-16" style={{ background: `linear-gradient(135deg, var(--navy-dark) 0%, var(--navy) 100%)` }} aria-label="Careers CTA">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Want to Join This Team?</h2>
          <p className="text-gray-300 mb-8">We are always looking for talented professionals who share our commitment to excellent client service.</p>
          <Link href="/careers" className="inline-flex items-center gap-2 px-8 py-4 rounded-lg text-lg font-semibold text-white transition-all hover:opacity-90" style={{ backgroundColor: "var(--gold)" }}>
            View Open Positions
          </Link>
        </div>
      </section>
    </>
  );
}
