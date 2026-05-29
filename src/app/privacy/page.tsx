import type { Metadata } from "next";
import Link from "next/link";
import { company } from "@/lib/data";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${company.name} — how we collect, use, and protect your personal information.`,
  robots: { index: false },
};

export default function PrivacyPage() {
  return (
    <>
      <section className="py-16" style={{ background: `linear-gradient(135deg, var(--navy-dark) 0%, var(--navy) 100%)` }}>
        <div className="max-w-4xl mx-auto px-4">
          <nav className="text-sm text-gray-400 mb-6" aria-label="Breadcrumb">
            <ol className="flex gap-2">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-white">Privacy Policy</li>
            </ol>
          </nav>
          <h1 className="text-4xl font-bold text-white">Privacy Policy</h1>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 prose prose-gray max-w-none">
          <p className="text-gray-500 text-sm mb-10">Last updated: January 2025</p>
          <p className="text-gray-700 leading-relaxed mb-8">
            {company.name} (&ldquo;FHF,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is committed to protecting the privacy and confidentiality of our clients and website visitors. This Privacy Policy describes how we collect, use, and safeguard your information when you visit our website or engage our services.
          </p>

          {[
            {
              title: "Information We Collect",
              body: "We may collect personal information you voluntarily provide when you contact us, submit a form, or use our client portal. This may include your name, email address, phone number, company name, and the content of your inquiry. We do not automatically collect sensitive financial data through our public website."
            },
            {
              title: "How We Use Your Information",
              body: "We use your information to respond to your inquiries, provide accounting and advisory services, communicate important updates, and improve our website. We do not sell or rent your personal information to third parties."
            },
            {
              title: "Confidentiality",
              body: "As a CPA firm, we are bound by strict professional confidentiality obligations under state and federal law and the AICPA Code of Professional Conduct. All client information is treated as strictly confidential."
            },
            {
              title: "Cookies",
              body: "Our website may use standard browser cookies to improve your experience. These cookies do not collect personally identifiable information. You may disable cookies in your browser settings."
            },
            {
              title: "Third-Party Links",
              body: "Our website may contain links to external resources (such as the IRS website or client portals). We are not responsible for the privacy practices of these external sites."
            },
            {
              title: "Data Security",
              body: "We implement industry-standard security measures to protect your information. Our client portal uses encrypted, secure file transfer technology."
            },
            {
              title: "Contact Us About Privacy",
              body: `If you have questions about this Privacy Policy or how we handle your information, please contact us at ${company.email} or call any of our offices.`
            }
          ].map((section) => (
            <div key={section.title} className="mb-8">
              <h2 className="text-xl font-bold mb-3" style={{ color: "var(--navy)" }}>{section.title}</h2>
              <p className="text-gray-700 leading-relaxed">{section.body}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
