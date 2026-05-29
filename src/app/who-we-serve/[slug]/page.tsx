import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle } from "lucide-react";
import { industries, services } from "@/lib/data";

type Props = { params: Promise<{ slug: string }> };

const industryServices: Record<string, string[]> = {
  "family-closely-held-businesses": ["tax-services", "business-advisory", "business-valuations", "esop", "trust-estate"],
  "real-estate": ["tax-services", "small-business-accounting", "business-advisory", "assurance-services"],
  "manufacturing-distribution": ["tax-services", "assurance-services", "small-business-accounting", "business-advisory"],
  "restaurants-retail": ["tax-services", "small-business-accounting", "business-advisory"],
  "healthcare-medical-practices": ["tax-services", "small-business-accounting", "business-advisory", "assurance-services"],
  "nonprofit-organizations": ["assurance-services", "employee-benefit-plan-audits", "tax-services"],
  "individuals": ["tax-services", "trust-estate", "litigation-support"],
};

const industryHighlights: Record<string, string[]> = {
  "family-closely-held-businesses": [
    "Business succession and transition planning",
    "Buy-sell agreement structuring",
    "Multi-generational tax planning",
    "ESOP feasibility and setup",
    "Family business valuations",
  ],
  "real-estate": [
    "Cost segregation studies",
    "1031 like-kind exchange guidance",
    "Passive activity and at-risk rules",
    "Entity structuring for real estate portfolios",
    "Depreciation recapture planning",
  ],
  "manufacturing-distribution": [
    "Inventory and cost accounting",
    "R&D tax credit identification",
    "Section 179 and bonus depreciation strategies",
    "Multi-state nexus and apportionment",
    "Operational profitability analysis",
  ],
  "restaurants-retail": [
    "Cash management oversight",
    "Sales tax compliance across locations",
    "Payroll and tip reporting",
    "Franchise tax and licensing compliance",
    "Quarterly financial reporting",
  ],
  "healthcare-medical-practices": [
    "Physician entity structuring (PC, LLC, S-Corp)",
    "Practice acquisition tax due diligence",
    "Retirement plan design for physicians",
    "Compensation and reasonable salary benchmarking",
    "Healthcare-specific state tax issues",
  ],
  "nonprofit-organizations": [
    "Form 990 preparation and strategy",
    "Unrelated business income tax (UBIT)",
    "Board fiduciary responsibility training",
    "Grant compliance and fund accounting",
    "Employee benefit plan audits",
  ],
  "individuals": [
    "Personalized multi-year tax planning",
    "Investment portfolio tax efficiency",
    "Estate and gift tax planning",
    "IRS representation and correspondence",
    "Coordination with financial advisors",
  ],
};

export async function generateStaticParams() {
  return industries.map((i) => ({ slug: i.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const industry = industries.find((i) => i.id === slug);
  if (!industry) return {};
  return {
    title: `${industry.title} — CPA Services | Flagel Huber Flagel`,
    description: industry.description.slice(0, 160),
    alternates: { canonical: `https://fhf-cpa.com/who-we-serve/${slug}` },
  };
}

export default async function IndustryPage({ params }: Props) {
  const { slug } = await params;
  const industry = industries.find((i) => i.id === slug);
  if (!industry) notFound();

  const relatedServiceIds = industryServices[slug] || [];
  const relatedSvcs = services.filter((s) => relatedServiceIds.includes(s.id));
  const highlights = industryHighlights[slug] || [];
  const otherIndustries = industries.filter((i) => i.id !== slug).slice(0, 4);

  return (
    <>
      {/* Hero */}
      <section className="py-20" style={{ background: `linear-gradient(135deg, var(--navy-dark) 0%, var(--navy) 100%)` }} aria-label="Page header">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="text-sm text-gray-400 mb-6" aria-label="Breadcrumb">
            <ol className="flex gap-2">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/who-we-serve" className="hover:text-white transition-colors">Who We Serve</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-white" aria-current="page">{industry.title}</li>
            </ol>
          </nav>
          <div className="flex items-center gap-6">
            {industry.iconImg && (
              <div className="w-20 h-20 rounded-2xl flex items-center justify-center flex-shrink-0 bg-white/10">
                <Image src={industry.iconImg} alt="" width={48} height={48} aria-hidden="true" className="brightness-0 invert" />
              </div>
            )}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">{industry.title}</h1>
              <p className="text-gray-300 text-xl max-w-2xl">{industry.description.split(".")[0]}.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-20 bg-white" aria-label="Industry detail">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-6" style={{ color: "var(--navy)" }}>How We Help</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-10">{industry.description}</p>

              {highlights.length > 0 && (
                <>
                  <h3 className="text-xl font-bold mb-6" style={{ color: "var(--navy)" }}>Key Areas of Focus</h3>
                  <ul className="space-y-4 mb-14" aria-label="Key service areas">
                    {highlights.map((h) => (
                      <li key={h} className="flex items-start gap-3">
                        <CheckCircle size={20} className="mt-0.5 flex-shrink-0" style={{ color: "var(--gold)" }} />
                        <span className="text-gray-700">{h}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}

              {relatedSvcs.length > 0 && (
                <>
                  <h3 className="text-xl font-bold mb-6" style={{ color: "var(--navy)" }}>Relevant Services</h3>
                  <div className="grid sm:grid-cols-2 gap-4 mb-14">
                    {relatedSvcs.map((s) => (
                      <Link key={s.id} href={`/what-we-do/${s.id}`} className="group rounded-xl p-5 border border-gray-100 hover:border-blue-200 hover:shadow-sm transition-all flex gap-4 items-start">
                        {s.iconImg && <Image src={s.iconImg} alt="" width={28} height={28} aria-hidden="true" className="flex-shrink-0 mt-0.5" />}
                        <div>
                          <h4 className="font-semibold text-sm text-gray-900 group-hover:text-blue-900 transition-colors mb-1">{s.title}</h4>
                          <p className="text-xs text-gray-500 leading-snug">{s.shortDescription.split(".")[0]}.</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </>
              )}

              {/* Other industries */}
              <h3 className="text-xl font-bold mb-6" style={{ color: "var(--navy)" }}>Other Sectors We Serve</h3>
              <div className="grid grid-cols-2 gap-3">
                {otherIndustries.map((ind) => (
                  <Link key={ind.id} href={`/who-we-serve/${ind.id}`} className="group flex items-center gap-3 p-4 rounded-xl border border-gray-100 hover:border-blue-200 hover:bg-blue-50/30 transition-all">
                    {ind.iconImg && <Image src={ind.iconImg} alt="" width={22} height={22} aria-hidden="true" />}
                    <span className="text-sm font-medium text-gray-700 group-hover:text-blue-900 transition-colors">{ind.title}</span>
                    <ArrowRight size={13} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: "var(--gold)" }} />
                  </Link>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <aside>
              <div className="rounded-2xl p-8 text-white mb-6" style={{ background: `linear-gradient(135deg, var(--navy-dark) 0%, var(--navy) 100%)` }}>
                <h3 className="font-bold text-xl mb-3">Speak With a Specialist</h3>
                <p className="text-gray-300 text-sm mb-6">We understand your industry. Let&apos;s talk about your specific situation.</p>
                <Link href="/contact" className="block text-center py-3 px-6 rounded-lg font-semibold text-white" style={{ backgroundColor: "var(--gold)" }}>
                  Contact Us Today
                </Link>
              </div>
              <div className="rounded-2xl border border-gray-100 p-6" style={{ backgroundColor: "var(--gray-50)" }}>
                <h3 className="font-semibold text-gray-900 mb-3">See Our Work</h3>
                <p className="text-sm text-gray-600 mb-4">Browse real client case studies across the industries we serve.</p>
                <Link href="/case-studies" className="text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all" style={{ color: "var(--navy)" }}>
                  View Case Studies <ArrowRight size={14} />
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
