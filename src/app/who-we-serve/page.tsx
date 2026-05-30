import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { industries, services } from "@/lib/data";

export const metadata: Metadata = {
  title: "Who We Serve — Industries & Client Types",
  description:
    "Flagel Huber Flagel serves family businesses, real estate investors, manufacturers, restaurants, healthcare practices, nonprofits, and individuals across Ohio with specialized CPA and advisory expertise.",
  alternates: { canonical: "https://fhf-cpa.com/who-we-serve" },
};

const industryServices: Record<string, string[]> = {
  "family-closely-held-businesses": ["tax-services", "business-advisory", "business-valuations", "esop", "trust-estate"],
  "real-estate": ["tax-services", "small-business-accounting", "business-advisory", "assurance-services"],
  "manufacturing-distribution": ["tax-services", "assurance-services", "small-business-accounting", "business-advisory"],
  "restaurants-retail": ["tax-services", "small-business-accounting", "business-advisory"],
  "healthcare-medical-practices": ["tax-services", "small-business-accounting", "business-advisory", "assurance-services"],
  "nonprofit-organizations": ["assurance-services", "employee-benefit-plan-audits", "tax-services"],
  "individuals": ["tax-services", "trust-estate", "litigation-support"],
};

export default function WhoWeServePage() {
  return (
    <>
      {/* Page header */}
      <section className="py-20" style={{ background: `linear-gradient(135deg, var(--navy-dark) 0%, var(--navy) 100%)` }} aria-label="Page header">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="text-sm text-gray-400 mb-6" aria-label="Breadcrumb">
            <ol className="flex gap-2">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-white" aria-current="page">Who We Serve</li>
            </ol>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Who We Serve</h1>
          <p className="text-gray-300 text-xl max-w-2xl">
            Deep industry expertise for the businesses, organizations, and individuals who rely on us across Ohio.
          </p>
        </div>
      </section>

      {/* Quick nav */}
      <section className="py-10 bg-white border-b border-gray-100" aria-label="Industry navigation">
        <div className="max-w-7xl mx-auto px-4">
          <ul className="flex flex-wrap gap-3">
            {industries.map((ind) => (
              <li key={ind.id}>
                <a href={`#${ind.id}`} className="inline-block px-4 py-2 rounded-full text-sm font-medium border border-gray-300 text-gray-700 hover:border-blue-900 hover:text-blue-900 transition-colors">
                  {ind.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 bg-white" aria-label="Industry details">
        <div className="max-w-7xl mx-auto px-4 space-y-24">
          {industries.map((industry, i) => {
            const relatedServiceIds = industryServices[industry.id] || [];
            const relatedServices = services.filter((s) => relatedServiceIds.includes(s.id));

            return (
              <article key={industry.id} id={industry.id} className="scroll-mt-24">
                <div className={`grid lg:grid-cols-5 gap-12 items-start ${i % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}>
                  <div className={`lg:col-span-3 ${i % 2 === 1 ? "lg:col-start-3" : ""}`}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "rgba(14,76,133,0.08)" }}>
                        {industry.iconImg && <Image src={industry.iconImg} alt="" width={36} height={36} aria-hidden="true" />}
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold" style={{ color: "var(--navy)" }}>{industry.title}</h2>
                    </div>
                    <p className="text-gray-600 text-lg leading-relaxed mb-8">{industry.description}</p>
                    <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white" style={{ backgroundColor: "var(--green)" }}>
                      Speak with a Specialist <ArrowRight size={16} />
                    </Link>
                  </div>
                  {relatedServices.length > 0 && (
                    <div className={`lg:col-span-2 ${i % 2 === 1 ? "lg:col-start-1" : ""}`}>
                      <div className="rounded-2xl p-6 border border-gray-100" style={{ backgroundColor: "var(--gray-50)" }}>
                        <h3 className="font-semibold text-gray-900 text-sm uppercase tracking-wider mb-4">Relevant Services</h3>
                        <ul className="space-y-2">
                          {relatedServices.map((s) => (
                            <li key={s.id}>
                              <Link href={`/what-we-do#${s.id}`} className="flex items-center gap-2 text-sm font-medium hover:gap-3 transition-all" style={{ color: "var(--navy)" }}>
                                <ArrowRight size={14} style={{ color: "var(--gold)" }} /> {s.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
                {i < industries.length - 1 && <div className="mt-24 border-t border-gray-100" />}
              </article>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16" style={{ background: `linear-gradient(135deg, var(--navy-dark) 0%, var(--navy) 100%)` }} aria-label="Contact CTA">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to work with a CPA who understands your industry?
          </h2>
          <p className="text-gray-300 mb-8">
            Reach out to our team for a conversation about your specific situation.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-lg text-lg font-semibold text-white transition-all hover:opacity-90" style={{ backgroundColor: "var(--green)" }}>
            Contact Us <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </>
  );
}
