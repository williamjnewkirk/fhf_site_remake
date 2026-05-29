import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, Award, Shield, Lightbulb, Heart } from "lucide-react";
import { company } from "@/lib/data";

export const metadata: Metadata = {
  title: "Our Commitment — Beyond Numbers and Deadlines",
  description:
    "Flagel Huber Flagel is committed to going beyond numbers and deadlines to serve as a caring partner. Peer-reviewed by the AICPA, we deliver financial insight, service integrity, and problem-solving innovation.",
  alternates: { canonical: "https://fhf-cpa.com/our-commitment" },
};

const pillars = [
  {
    icon: Lightbulb,
    title: "Financial & Operational Insight",
    description:
      "We study your business deeply — your industry, your competitors, your goals — so our advice reflects your full picture, not just your balance sheet. Our advisors help you understand what the numbers mean for decisions you face today and opportunities ahead.",
  },
  {
    icon: Shield,
    title: "Service Integrity",
    description:
      "We hold ourselves to the highest standards of professional ethics and technical accuracy. Every engagement is reviewed for quality. We are members of the AICPA Private Companies Practice Section and undergo rigorous peer review — consistently earning top marks.",
  },
  {
    icon: Lightbulb,
    title: "Problem-Solving Innovation",
    description:
      "The tax code and business environment change constantly. We invest in staying ahead — through continuing education, specialty credentials, and alliance with BDO USA — so we can bring creative, current solutions to your most complex challenges.",
  },
];

const values = [
  "Treating every client as our most important client",
  "Responding promptly and communicating proactively",
  "Maintaining continuity of service — same faces, same relationships",
  "Acting with transparency when we find issues or opportunities",
  "Caring about your outcomes, not just your returns",
  "Going the extra mile, just as our founder David Flagel did in 1933",
];

export default function OurCommitmentPage() {
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
              <li className="text-white" aria-current="page">Our Commitment</li>
            </ol>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Commitment</h1>
          <p className="text-gray-300 text-xl max-w-2xl">
            Building and Preserving Wealth Since 1933 — going beyond numbers and deadlines to serve as your trusted partner.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 bg-white" aria-labelledby="commitment-heading">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 id="commitment-heading" className="text-3xl md:text-4xl font-bold mb-6" style={{ color: "var(--navy)" }}>
            More Than Accountants
          </h2>
          <p className="text-gray-600 text-xl leading-relaxed mb-6">
            At Flagel Huber Flagel, we believe that truly serving our clients means going beyond the numbers and deadlines. It means caring about your success the way you do — and bringing the expertise, integrity, and creativity to help you achieve it.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            This commitment is not new. It traces directly to our founder, David Flagel, who in 1933 built his practice on the principle of going the extra mile — reviewing every client&apos;s information, finding opportunities others missed, and always treating people with respect regardless of their circumstances. That spirit defines us today.
          </p>
        </div>
      </section>

      {/* Three pillars */}
      <section className="py-20" style={{ backgroundColor: "var(--gray-50)" }} aria-labelledby="pillars-heading">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 id="pillars-heading" className="text-3xl font-bold mb-4" style={{ color: "var(--navy)" }}>Three Pillars of Our Commitment</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((p, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6" style={{ backgroundColor: "rgba(26,46,74,0.08)" }}>
                  <p.icon size={28} style={{ color: "var(--navy)" }} />
                </div>
                <h3 className="font-bold text-xl mb-4" style={{ color: "var(--navy)" }}>{p.title}</h3>
                <p className="text-gray-600 leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white" aria-labelledby="values-heading">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <Heart size={36} className="mx-auto mb-4" style={{ color: "var(--gold)" }} />
            <h2 id="values-heading" className="text-3xl font-bold" style={{ color: "var(--navy)" }}>What That Looks Like in Practice</h2>
          </div>
          <ul className="space-y-4">
            {values.map((v) => (
              <li key={v} className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100">
                <CheckCircle size={20} className="mt-0.5 flex-shrink-0" style={{ color: "var(--gold)" }} />
                <span className="text-gray-700">{v}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Peer review */}
      <section className="py-20" style={{ background: `linear-gradient(135deg, var(--navy-dark) 0%, var(--navy) 100%)` }} aria-labelledby="peerreview-heading">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Award size={48} className="mx-auto mb-6" style={{ color: "var(--gold)" }} />
          <h2 id="peerreview-heading" className="text-3xl font-bold text-white mb-4">AICPA Peer Review</h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            {company.name} is a member of the AICPA Private Companies Practice Section and participates in the peer review program — an independent quality-control review of our accounting and auditing practice.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            We have consistently earned top marks in these reviews, demonstrating that our quality control systems meet the highest professional standards. When you work with FHF, you are working with a firm that holds itself accountable at every level.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white" aria-label="Contact CTA">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--navy)" }}>Experience the FHF Difference</h2>
          <p className="text-gray-600 mb-8">Talk with us — no commitment, just a conversation about your goals.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-lg text-lg font-semibold text-white transition-all hover:opacity-90" style={{ backgroundColor: "var(--gold)" }}>
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
