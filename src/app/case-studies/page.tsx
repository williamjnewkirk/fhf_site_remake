import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Case Studies — Real Results for Real Clients",
  description:
    "See how Flagel Huber Flagel has helped Ohio businesses and families solve complex accounting, tax, valuation, and ESOP challenges. Real client stories, real outcomes.",
  alternates: { canonical: "https://fhf-cpa.com/case-studies" },
};

const caseStudies = [
  {
    id: "rk-hydrovac-esop",
    title: "Ownership Transition to ESOP Builds Value",
    client: "R.K. Hydro-Vac, Inc.",
    industry: "Construction / Services",
    tag: "ESOP",
    excerpt:
      "When the founding partners of a 160-employee roof vacuuming company wanted to exit without selling to an outside buyer, FHF structured a complex ESOP transition that made every employee an owner — and created a multi-million-dollar employee-owned company.",
    images: ["/images/case-studies/rk-owners.jpg", "/images/case-studies/rk-fleet.jpg"],
    outcome: "100% employee-owned by 2019; 160 employees across Ohio, NC, and PA",
  },
  {
    id: "family-business-succession",
    title: "Managing Generational Change",
    client: "Family-Owned Manufacturer",
    industry: "Manufacturing",
    tag: "Business Advisory",
    excerpt:
      "A second-generation manufacturing business needed to transfer ownership to the third generation while minimizing gift and estate taxes and maintaining harmony among multiple family stakeholders.",
    images: [],
    outcome: "Successful ownership transition with significant estate tax savings",
  },
  {
    id: "restaurant-longevity",
    title: "Every Detail Matters in Restaurant Longevity",
    client: "Regional Restaurant Group",
    industry: "Restaurants",
    tag: "Small Business Accounting",
    excerpt:
      "A multi-location restaurant operator engaged FHF for monthly financial oversight, payroll, and tax planning — gaining the financial clarity needed to expand profitably.",
    images: [],
    outcome: "Expanded from 3 to 7 locations over five years with consistent profitability",
  },
  {
    id: "winans-entrepreneurs",
    title: "Expertise and Flexibility for Entrepreneurs",
    client: "Winans Chocolates & Coffees",
    industry: "Retail",
    tag: "Business Advisory",
    excerpt:
      "A beloved Dayton-area retailer needed a trusted advisor who could scale support up or down as the business evolved — from startup accounting to multi-location tax strategy.",
    images: [],
    outcome: "Decades-long partnership supporting sustainable growth",
  },
  {
    id: "bront-machining",
    title: "Supporting Generations of Successful Growth",
    client: "Bront Machining Inc.",
    industry: "Manufacturing",
    tag: "Tax Services",
    excerpt:
      "FHF provided comprehensive tax planning and business advisory services to a precision machining company across multiple ownership generations, helping them optimize structure and minimize tax burden.",
    images: [],
    outcome: "Tax-efficient ownership transitions across two generations",
  },
  {
    id: "nonprofit-st-vincent",
    title: "Strengthening Our Community",
    client: "St. Vincent de Paul of Dayton",
    industry: "Nonprofit",
    tag: "Assurance Services",
    excerpt:
      "A leading Dayton nonprofit needed an audit partner who understood mission-driven organizations. FHF provided annual audits and Form 990 preparation that strengthened donor confidence and board accountability.",
    images: [],
    outcome: "Consistent clean audits; board financial confidence significantly improved",
  },
];

const tags = ["All", "ESOP", "Tax Services", "Business Advisory", "Assurance Services", "Small Business Accounting"];

export default function CaseStudiesPage() {
  return (
    <>
      {/* Page header */}
      <section className="py-20" style={{ background: `linear-gradient(135deg, var(--navy-dark) 0%, var(--navy) 100%)` }} aria-label="Page header">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="text-sm text-gray-400 mb-6" aria-label="Breadcrumb">
            <ol className="flex gap-2">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-white" aria-current="page">Case Studies</li>
            </ol>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Case Studies</h1>
          <p className="text-gray-300 text-xl max-w-2xl">
            Real challenges. Real solutions. Real outcomes. See how we&apos;ve helped Ohio businesses and families.
          </p>
        </div>
      </section>

      {/* Filter nav */}
      <section className="py-10 bg-white border-b border-gray-100" aria-label="Filter by category">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex flex-wrap gap-2" aria-label="Case study categories">
            {tags.map((tag) => (
              <span key={tag} className={`px-4 py-1.5 rounded-full text-sm font-medium cursor-pointer transition-colors ${tag === "All" ? "text-white" : "border border-gray-300 text-gray-600 hover:border-blue-900 hover:text-blue-900"}`} style={tag === "All" ? { backgroundColor: "var(--navy)" } : {}}>
                {tag}
              </span>
            ))}
          </nav>
        </div>
      </section>

      {/* Case studies grid */}
      <section className="py-20 bg-white" aria-label="Case study list">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((cs) => (
              <article key={cs.id} className="rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow flex flex-col">
                {cs.images.length > 0 ? (
                  <div className="relative w-full" style={{ aspectRatio: "16/9" }}>
                    <Image
                      src={cs.images[0]}
                      alt={cs.client}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                ) : (
                  <div className="w-full flex items-center justify-center py-12" style={{ backgroundColor: "rgba(26,46,74,0.06)" }}>
                    <span className="text-4xl font-bold opacity-10" style={{ color: "var(--navy)" }}>FHF</span>
                  </div>
                )}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2.5 py-1 rounded-full text-xs font-medium" style={{ backgroundColor: "rgba(201,168,76,0.12)", color: "var(--gold)" }}>{cs.tag}</span>
                    <span className="text-xs text-gray-400">{cs.industry}</span>
                  </div>
                  <h2 className="font-bold text-xl mb-1" style={{ color: "var(--navy)" }}>{cs.title}</h2>
                  <p className="text-sm font-medium text-gray-500 mb-3">{cs.client}</p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1">{cs.excerpt}</p>
                  <div className="rounded-lg p-3 mb-4 text-xs font-medium" style={{ backgroundColor: "rgba(26,46,74,0.04)", color: "var(--navy)" }}>
                    <strong>Outcome:</strong> {cs.outcome}
                  </div>
                  <Link href="/contact" className="text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all" style={{ color: "var(--gold)" }}>
                    Work with us <ArrowRight size={14} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16" style={{ background: `linear-gradient(135deg, var(--navy-dark) 0%, var(--navy) 100%)` }} aria-label="CTA">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to Write Your Own Success Story?</h2>
          <p className="text-gray-300 mb-8">Our advisors are ready to help you tackle your most pressing financial challenges.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-lg text-lg font-semibold text-white transition-all hover:opacity-90" style={{ backgroundColor: "var(--gold)" }}>
            Start a Conversation <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </>
  );
}
