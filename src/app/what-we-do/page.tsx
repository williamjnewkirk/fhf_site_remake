import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle } from "lucide-react";
import { services, company } from "@/lib/data";

export const metadata: Metadata = {
  title: "Our Services — Tax, Audit, Valuation & Advisory",
  description:
    "Flagel Huber Flagel offers comprehensive CPA services including tax planning, assurance/audits, business valuations, ESOP advisory, litigation support, and business advisory for Ohio businesses and individuals.",
  alternates: { canonical: "https://fhf-cpa.com/what-we-do" },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "CPA Services — Flagel Huber Flagel",
  itemListElement: services.map((s, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Service",
      name: s.title,
      description: s.description,
      provider: { "@type": "Organization", name: company.name },
    },
  })),
};

export default function WhatWeDoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      {/* Page header */}
      <section className="py-20" style={{ background: `linear-gradient(135deg, var(--navy-dark) 0%, var(--navy) 100%)` }} aria-label="Page header">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="text-sm text-gray-400 mb-6" aria-label="Breadcrumb">
            <ol className="flex gap-2">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-white" aria-current="page">What We Do</li>
            </ol>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">What We Do</h1>
          <p className="text-gray-300 text-xl max-w-2xl">
            Comprehensive accounting, tax, and business advisory services delivered by 30+ credentialed CPAs.
          </p>
        </div>
      </section>

      {/* Services list */}
      <section className="py-20 bg-white" aria-label="Services">
        <div className="max-w-7xl mx-auto px-4">
          {/* Quick nav */}
          <nav className="mb-16 p-6 bg-gray-50 rounded-xl border border-gray-200" aria-label="Services quick navigation">
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Jump to a Service</p>
            <ul className="flex flex-wrap gap-3">
              {services.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} className="inline-block px-4 py-2 rounded-full text-sm font-medium border border-gray-300 text-gray-700 hover:border-blue-900 hover:text-blue-900 transition-colors">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="space-y-24">
            {services.map((service, i) => (
                <article key={service.id} id={service.id} className="scroll-mt-24">
                  <div className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}>
                    <div className={i % 2 === 1 ? "lg:col-start-2" : ""}>
                      <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6" style={{ backgroundColor: "rgba(26,46,74,0.08)" }}>
                        {service.iconImg && <Image src={service.iconImg} alt="" width={32} height={32} aria-hidden="true" />}
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: "var(--navy)" }}>
                        {service.title}
                      </h2>
                      <p className="text-gray-600 text-lg leading-relaxed mb-6">{service.description}</p>
                      <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white transition-colors" style={{ backgroundColor: "var(--gold)" }}>
                        Talk to an Expert <ArrowRight size={16} />
                      </Link>
                    </div>
                    <div className={`rounded-2xl p-8 ${i % 2 === 1 ? "lg:col-start-1" : ""}`} style={{ backgroundColor: "var(--gray-50)", border: "1px solid var(--gray-100)" }}>
                      <h3 className="font-semibold text-gray-900 mb-5">What&apos;s included:</h3>
                      <ul className="space-y-3" aria-label={`${service.title} benefits`}>
                        {service.benefits.map((b) => (
                          <li key={b} className="flex items-start gap-3 text-gray-700">
                            <CheckCircle size={18} className="mt-0.5 flex-shrink-0" style={{ color: "var(--gold)" }} />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  {i < services.length - 1 && <div className="mt-24 border-t border-gray-100" />}
                </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16" style={{ backgroundColor: "var(--gray-50)" }} aria-label="Contact CTA">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: "var(--navy)" }}>
            Not sure which service you need?
          </h2>
          <p className="text-gray-600 mb-8">
            We will listen to your situation and point you in the right direction — no commitment required.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-lg text-lg font-semibold text-white transition-all hover:opacity-90" style={{ backgroundColor: "var(--gold)" }}>
            Schedule a Free Consultation <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </>
  );
}
