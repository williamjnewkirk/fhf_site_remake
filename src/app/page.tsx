import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle, Star, Phone } from "lucide-react";
import { company, services, industries, testimonials, offices } from "@/lib/data";

export const metadata: Metadata = {
  title: "Flagel Huber Flagel | CPA & Advisory Firm | Ohio Since 1933",
  description:
    "Flagel Huber Flagel is a full-service CPA and advisory firm with offices in Cincinnati, Dayton, and Troy, Ohio. Expert tax, audit, valuation, ESOP, and business advisory services since 1933.",
  alternates: { canonical: "https://fhf-cpa.com" },
};

const stats = [
  { value: "90+", label: "Years in Business", detail: "Founded 1933" },
  { value: "30+", label: "CPAs on Staff", detail: "Expert advisors" },
  { value: "50+", label: "Total Employees", detail: "Full-service team" },
  { value: "3", label: "Ohio Offices", detail: "Cincinnati, Dayton & Troy" },
];

const whyFHF = [
  "Trusted since 1933 — nearly a century of service",
  "30+ credentialed CPAs including ABV, CFP®, and CFF designations",
  "Deep expertise in closely held businesses and family succession",
  "Consistent staff continuity so you never start over",
  "Straightforward advice — no jargon, no surprises",
  "Served across three Ohio markets with local insight",
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden" style={{ background: `linear-gradient(135deg, var(--navy-dark) 0%, var(--navy) 60%, var(--navy-light) 100%)` }} aria-label="Hero section">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 25% 50%, white 1px, transparent 1px), radial-gradient(circle at 75% 50%, white 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-24 md:py-36">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6 text-sm font-medium" style={{ backgroundColor: "rgba(88,168,207,0.15)", color: "var(--gold-light)", border: "1px solid rgba(88,168,207,0.3)" }}>
              <Star size={14} fill="currentColor" /> Trusted CPA Firm Since 1933
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
              Building Lifelong<br />
              <span style={{ color: "var(--gold)" }}>Prosperity</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-10 max-w-2xl">
              Straightforward accounting, tax, and business advice from a dedicated team of 30+ CPAs across three Ohio offices. We are Flagel Huber Flagel.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg text-base font-semibold text-white transition-all hover:opacity-90 hover:translate-y-[-1px]" style={{ backgroundColor: "var(--green)" }}>
                Schedule a Consultation <ArrowRight size={18} />
              </Link>
              <Link href="/what-we-do" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg text-base font-semibold text-white border border-white/30 hover:bg-white/10 transition-all">
                Our Services <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="white" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-12">
            <path d="M0,60 L0,30 Q360,0 720,30 Q1080,60 1440,30 L1440,60 Z" />
          </svg>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white py-16" aria-label="Firm statistics">
        <div className="max-w-7xl mx-auto px-4">
          <dl className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <dd className="text-4xl font-bold mb-1" style={{ color: "var(--navy)" }}>{s.value}</dd>
                <dt className="font-semibold text-gray-800 mb-0.5">{s.label}</dt>
                <p className="text-sm text-gray-500">{s.detail}</p>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Services */}
      <section className="py-20" style={{ backgroundColor: "var(--gray-50)" }} aria-labelledby="services-heading">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 id="services-heading" className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "var(--navy)" }}>
              What We Do
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Comprehensive accounting, tax, and advisory services tailored to your business and personal financial needs.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link key={service.id} href={`/what-we-do#${service.id}`} className="group bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-blue-100 transition-all">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: "rgba(14,76,133,0.08)" }}>
                  {service.iconImg ? (
                    <Image src={service.iconImg} alt="" width={28} height={28} aria-hidden="true" />
                  ) : null}
                </div>
                <h3 className="font-semibold text-lg mb-2" style={{ color: "var(--navy)" }}>{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{service.shortDescription}</p>
                <span className="text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all" style={{ color: "var(--gold)" }}>
                  Learn more <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/what-we-do" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-white transition-colors" style={{ backgroundColor: "var(--navy)" }}>
              View All Services <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 bg-white" aria-labelledby="industries-heading">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 id="industries-heading" className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "var(--navy)" }}>
              Who We Serve
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Deep industry expertise across the sectors that matter most to Ohio&apos;s businesses and families.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {industries.map((industry) => (
              <Link key={industry.id} href={`/who-we-serve#${industry.id}`} className="group flex flex-col items-center text-center p-6 rounded-xl border border-gray-100 hover:border-blue-200 hover:bg-blue-50/30 transition-all">
                <div className="w-14 h-14 rounded-full flex items-center justify-center mb-3" style={{ backgroundColor: "rgba(14,76,133,0.06)" }}>
                  {industry.iconImg && <Image src={industry.iconImg} alt="" width={32} height={32} aria-hidden="true" />}
                </div>
                <h3 className="font-semibold text-sm text-gray-800 group-hover:text-blue-900 transition-colors">{industry.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why FHF */}
      <section className="py-20" style={{ background: `linear-gradient(135deg, var(--navy-dark) 0%, var(--navy) 100%)` }} aria-labelledby="why-heading">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 id="why-heading" className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why Flagel Huber Flagel?
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                We are more than accountants. We are long-term partners in your financial success. Since 1933, clients have trusted us to provide the straightforward advice and consistent service that helps them build lasting prosperity.
              </p>
              <ul className="space-y-4" aria-label="Key differentiators">
                {whyFHF.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-300">
                    <CheckCircle size={20} className="mt-0.5 flex-shrink-0" style={{ color: "var(--gold)" }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <Link href="/who-we-are" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-white border border-white/30 hover:bg-white/10 transition-all">
                  About Our Firm <ArrowRight size={16} />
                </Link>
              </div>
            </div>
            <div>
              {testimonials.map((t, i) => (
                <blockquote key={i} className="bg-white/10 backdrop-blur rounded-2xl p-8 border border-white/10 mb-4">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, s) => <Star key={s} size={16} fill="var(--gold)" style={{ color: "var(--gold)" }} />)}
                  </div>
                  <p className="text-white text-lg leading-relaxed mb-4 italic">&ldquo;{t.quote}&rdquo;</p>
                  <footer className="text-gray-400 text-sm">
                    — <cite>{t.author}</cite>, {t.source}
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Offices CTA */}
      <section className="py-20 bg-white" aria-labelledby="offices-heading">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 id="offices-heading" className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "var(--navy)" }}>
              Three Offices Across Ohio
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              With locations in Cincinnati, Dayton, and Troy, we are close to where you live and do business.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {offices.map((o) => (
              <div key={o.id} className="rounded-xl border border-gray-200 p-8 text-center hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold mb-2" style={{ color: "var(--navy)" }}>{o.city}</h3>
                <address className="not-italic text-gray-600 text-sm mb-4">
                  {o.address}<br />{o.cityStateZip}
                </address>
                <a href={`tel:${o.phone.replace(/-/g, "")}`} className="flex items-center justify-center gap-2 font-semibold hover:opacity-80 transition-opacity" style={{ color: "var(--navy)" }}>
                  <Phone size={16} /> {o.phone}
                </a>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-lg text-lg font-semibold text-white transition-all hover:opacity-90" style={{ backgroundColor: "var(--green)" }}>
              Contact Us Today <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
