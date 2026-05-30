import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Our History — 90 Years of Building and Preserving Wealth",
  description:
    "Flagel Huber Flagel was founded in 1933 by David Flagel during the Great Depression. Learn about our nearly century-long history of serving Ohio families and businesses.",
  alternates: { canonical: "https://fhf-cpa.com/our-history" },
};

const managingPartners = [
  {
    years: "1933–1981",
    name: "David Flagel",
    note: "Founder — launched the firm during the Great Depression, personally recruiting clients and charging $6 for a half-day engagement.",
    photo: "https://fhf-cpa.com/wp-content/uploads/2021/09/david-flagel.jpg",
  },
  {
    years: "1981–1989",
    name: "Gerald P. Flagel",
    note: "David's son, continuing the family's legacy and expanding the firm's client base.",
    photo: "https://fhf-cpa.com/wp-content/uploads/2021/09/gerald-flagel.jpg",
  },
  {
    years: "1989–1992",
    name: "Arthur J. Huber",
    note: "Guided the firm through early 1990s economic challenges.",
    photo: "https://fhf-cpa.com/wp-content/uploads/2021/09/arthur-huber.jpg",
  },
  {
    years: "1992–1996",
    name: "Louis G. Homan",
    note: "Focused on service quality and professional development.",
    photo: "https://fhf-cpa.com/wp-content/uploads/2021/09/louis-homan.jpg",
  },
  {
    years: "1996–2008",
    name: "J.R. Hochwalt",
    note: "Expanded services and geographic reach across the Miami Valley region.",
    photo: "https://fhf-cpa.com/wp-content/uploads/2021/09/jr-hochwalt.jpg",
  },
  {
    years: "2008–2022",
    name: "Randall S. Kuvin, CPA/ABV, CFF",
    note: "Navigated the Great Recession, COVID-19 pandemic, and completed two strategic mergers that strengthened the firm's capabilities.",
    photo: "https://fhf-cpa.com/wp-content/uploads/2023/02/history-randy-kuvin.jpg",
  },
  {
    years: "2022–Present",
    name: "Jeff Woeste, CPA",
    note: "Current Managing Partner, continuing FHF's tradition of proactive client service and thoughtful growth.",
    photo: "https://fhf-cpa.com/wp-content/uploads/2024/05/FlagelHuber-websize-Woeste-sm.jpg",
  },
];

const founderValues = [
  "Doing things 'the right way' — with integrity and professionalism",
  "Treating all people with equal respect, regardless of wealth or status",
  "Prioritizing client service and always going beyond expectations",
  "Caring for client businesses as if they were your own",
  "Pursuing excellence — viewing your work as 'your self-portrait'",
  "Consistently exceeding what clients expect",
];

const milestones = [
  { year: "1933", event: "David Flagel founds the firm during the Great Depression, charging $6 for half-day engagements and differentiating himself by going beyond bookkeeping to offer strategic recommendations." },
  { year: "1960s–70s", event: "Firm expands services into business advisory, audit, and comprehensive tax planning as clients grow and the tax code becomes more complex." },
  { year: "1990s", event: "Business valuation and litigation support capabilities added; staff credentials expand to include ABV and CFF designations." },
  { year: "2000s", event: "Cincinnati office opened to serve the growing southwest Ohio market; client base diversifies across nonprofit, healthcare, and real estate sectors." },
  { year: "2008–2009", event: "Firm helps clients navigate the Great Recession with proactive tax planning, cash flow management, and operational advisory." },
  { year: "2020", event: "FHF guides hundreds of clients through PPP loan applications, forgiveness, and COVID-era tax provisions during the pandemic." },
  { year: "2022", event: "Two strategic mergers completed, expanding the team and deepening expertise in ESOP advisory and employee benefit plan audits." },
  { year: "Today", event: "Three offices, 50+ employees, 30+ CPAs — locally owned, independent, and still building lifelong prosperity for Ohio families and businesses." },
];

export default function OurHistoryPage() {
  return (
    <>
      {/* Page header */}
      <section className="py-20" style={{ background: "linear-gradient(135deg, var(--navy-dark) 0%, var(--navy) 100%)" }} aria-label="Page header">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="text-sm text-gray-400 mb-6" aria-label="Breadcrumb">
            <ol className="flex gap-2">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/who-we-are" className="hover:text-white transition-colors">Who We Are</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-white" aria-current="page">Our History</li>
            </ol>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our History</h1>
          <p className="text-gray-300 text-xl max-w-2xl">
            90 Years of Building and Preserving Wealth — from a one-person practice in 1933 to Ohio&apos;s premier independent CPA firm.
          </p>
        </div>
      </section>

      {/* Founding story */}
      <section className="py-20 bg-white" aria-labelledby="founding-heading">
        <div className="max-w-4xl mx-auto px-4">
          <h2 id="founding-heading" className="text-3xl font-bold mb-6" style={{ color: "var(--navy)" }}>The Beginning: 1933</h2>
          <div className="prose prose-gray max-w-none text-lg">
            <p className="text-gray-700 leading-relaxed mb-6">
              In 1933, at the height of the Great Depression, David Flagel graduated with an accounting degree and found himself unable to secure employment. Rather than wait for an opportunity, he created one — founding what would become Flagel Huber Flagel.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              David built his practice by personally recruiting clients and charging $6 for a half-day engagement, $12 for a full day. But what truly differentiated him was his approach: he didn&apos;t just record numbers. He reviewed every client&apos;s financial information, identified opportunities, and offered strategic recommendations — what he called &quot;going the extra mile.&quot;
            </p>
            <p className="text-gray-700 leading-relaxed">
              That principle — going beyond what&apos;s expected, caring for clients&apos; success as your own — became the foundation of everything FHF has built in the decades since.
            </p>
          </div>
        </div>
      </section>

      {/* Founder values */}
      <section className="py-20" style={{ backgroundColor: "var(--gray-50)" }} aria-labelledby="values-heading">
        <div className="max-w-4xl mx-auto px-4">
          <h2 id="values-heading" className="text-3xl font-bold mb-4" style={{ color: "var(--navy)" }}>David Flagel&apos;s Six Founding Principles</h2>
          <p className="text-gray-600 mb-10">These principles, established at the firm&apos;s founding, still guide how we serve clients today.</p>
          <ol className="space-y-4 list-none">
            {founderValues.map((v, i) => (
              <li key={i} className="flex items-start gap-4 p-5 bg-white rounded-xl border border-gray-100 shadow-sm">
                <span className="text-2xl font-bold flex-shrink-0 w-8" style={{ color: "var(--gold)" }}>{i + 1}</span>
                <span className="text-gray-700 mt-0.5">{v}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white" aria-labelledby="timeline-heading">
        <div className="max-w-4xl mx-auto px-4">
          <h2 id="timeline-heading" className="text-3xl font-bold mb-12 text-center" style={{ color: "var(--navy)" }}>Firm Timeline</h2>
          <ol className="relative border-l-2 border-gray-200 space-y-10 pl-10">
            {milestones.map((m) => (
              <li key={m.year} className="relative">
                <span className="absolute -left-[45px] flex items-center justify-center w-6 h-6 rounded-full bg-white border-2" style={{ borderColor: "var(--gold)" }} />
                <time className="text-sm font-bold block mb-1" style={{ color: "var(--gold)" }}>{m.year}</time>
                <p className="text-gray-700 leading-relaxed">{m.event}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Managing partners with photos */}
      <section className="py-20" style={{ backgroundColor: "var(--gray-50)" }} aria-labelledby="leaders-heading">
        <div className="max-w-5xl mx-auto px-4">
          <h2 id="leaders-heading" className="text-3xl font-bold mb-12 text-center" style={{ color: "var(--navy)" }}>Managing Partners</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {managingPartners.map((p) => (
              <div key={p.name} className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
                {p.photo && (
                  <div className="relative w-full" style={{ aspectRatio: "4/3" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={p.photo}
                      alt={p.name}
                      className="w-full h-full object-cover object-top"
                      loading="lazy"
                    />
                  </div>
                )}
                <div className="p-5">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <h3 className="font-bold text-base" style={{ color: "var(--navy)" }}>{p.name}</h3>
                    <time className="text-xs font-medium px-3 py-1 rounded-full flex-shrink-0" style={{ backgroundColor: "rgba(88,168,207,0.12)", color: "var(--gold)" }}>{p.years}</time>
                  </div>
                  <p className="text-gray-600 text-sm">{p.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16" style={{ background: "linear-gradient(135deg, var(--navy-dark) 0%, var(--navy) 100%)" }} aria-label="CTA">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Become Part of Our Story</h2>
          <p className="text-gray-300 mb-8">Clients have trusted FHF for generations. We would be honored to earn your trust too.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-lg text-lg font-semibold text-white transition-all hover:opacity-90" style={{ backgroundColor: "var(--green)" }}>
            Talk With Us <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </>
  );
}
