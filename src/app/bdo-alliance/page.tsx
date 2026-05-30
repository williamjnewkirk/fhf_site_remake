import type { Metadata } from "next";
import Link from "next/link";
import { Globe, Users, Building2, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "BDO Alliance USA — Our National & Global Network",
  description:
    "Flagel Huber Flagel is a member of BDO Alliance USA, giving clients access to 88,000+ professionals across 1,800+ offices in 167 countries while retaining local, personal service.",
  alternates: { canonical: "https://fhf-cpa.com/bdo-alliance" },
};

const stats = [
  { icon: Building2, value: "100+", label: "Years BDO Has Operated" },
  { icon: Users, value: "88,000+", label: "Professionals Worldwide" },
  { icon: Globe, value: "167", label: "Countries in the Network" },
  { icon: Building2, value: "1,800+", label: "Offices Globally" },
];

const benefits = [
  "Access to specialized technical expertise beyond our own staff",
  "National and international service coverage for clients with complex needs",
  "Current tax law guidance and technical resources updated continuously",
  "Training and professional development from a global leader",
  "Connection to experienced professionals across all major industries",
  "Greater flexibility, efficiency, and cost-effectiveness for clients",
  "Domestic alliance network: 60+ offices and 700+ independent firm locations",
];

export default function BDOAlliancePage() {
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
              <li className="text-white" aria-current="page">BDO Alliance USA</li>
            </ol>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">BDO Alliance USA</h1>
          <p className="text-gray-300 text-xl max-w-2xl">
            Local expertise backed by a world-class national and global network.
          </p>
        </div>
      </section>

      {/* Intro with BDO logo */}
      <section className="py-20 bg-white" aria-labelledby="bdo-heading">
        <div className="max-w-4xl mx-auto px-4">
          {/* BDO Logo from original site */}
          <div className="mb-10 flex justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://fhf-cpa.com/wp-content/uploads/2021/10/bdo-logo.png"
              alt="BDO Alliance USA logo"
              className="h-16 w-auto object-contain"
              loading="lazy"
            />
          </div>

          <h2 id="bdo-heading" className="text-3xl font-bold mb-6" style={{ color: "var(--navy)" }}>What Is BDO Alliance USA?</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            BDO Alliance USA is a nationwide association of independently owned local and regional accounting, consulting, and service firms with aligned client service goals. It operates as a subsidiary of BDO USA, LLP — one of the largest accounting and advisory firms in the United States and part of the BDO International network.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            As a member, Flagel Huber Flagel retains its independence and the personal service model our clients value — while gaining access to the resources, expertise, and reach of a major international organization.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            For our clients, that means you get the best of both: a local firm that knows you, your industry, and your Ohio market — backed by a network with specialists in virtually every technical area and every geography.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16" style={{ backgroundColor: "var(--gray-50)" }} aria-label="BDO network statistics">
        <div className="max-w-7xl mx-auto px-4">
          <dl className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
                <s.icon size={28} className="mx-auto mb-3" style={{ color: "var(--gold)" }} />
                <dd className="text-3xl font-bold mb-1" style={{ color: "var(--navy)" }}>{s.value}</dd>
                <dt className="text-sm text-gray-600">{s.label}</dt>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white" aria-labelledby="benefits-heading">
        <div className="max-w-4xl mx-auto px-4">
          <h2 id="benefits-heading" className="text-3xl font-bold mb-10 text-center" style={{ color: "var(--navy)" }}>
            What This Means for FHF Clients
          </h2>
          <ul className="space-y-4">
            {benefits.map((b) => (
              <li key={b} className="flex items-start gap-4 p-5 rounded-xl border border-gray-100 bg-gray-50">
                <CheckCircle size={20} className="mt-0.5 flex-shrink-0" style={{ color: "var(--gold)" }} />
                <span className="text-gray-700">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16" style={{ background: "linear-gradient(135deg, var(--navy-dark) 0%, var(--navy) 100%)" }} aria-label="CTA">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Local Relationship. Global Capability.</h2>
          <p className="text-gray-300 mb-8">
            Whether your needs are local or international, FHF has the connections to help you navigate them.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-lg text-lg font-semibold text-white transition-all hover:opacity-90" style={{ backgroundColor: "var(--green)" }}>
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
