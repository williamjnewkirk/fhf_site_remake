import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock, ExternalLink, Send } from "lucide-react";
import { company, offices } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact Us — Offices in Cincinnati, Dayton & Troy",
  description:
    "Contact Flagel Huber Flagel at our Cincinnati (513-774-0300), Dayton (937-299-3400), or Troy (937-339-3118) offices. Email us at info@fhf-cpa.com.",
  alternates: { canonical: "https://fhf-cpa.com/contact" },
};

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Flagel Huber Flagel",
  url: "https://fhf-cpa.com/contact",
  mainEntity: {
    "@type": "AccountingService",
    name: company.name,
    telephone: offices.map((o) => o.phone),
    email: company.email,
  },
};

const hours = "Monday – Friday, 8:00 AM – 5:00 PM ET";

const inquiryTypes = [
  "Tax Planning & Preparation",
  "Audit / Assurance Services",
  "Business Valuation",
  "ESOP Advisory",
  "Small Business Accounting",
  "Business Advisory",
  "Litigation Support",
  "Estate & Trust Planning",
  "Careers / Employment",
  "Other",
];

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }} />

      {/* Page header */}
      <section className="py-20" style={{ background: `linear-gradient(135deg, var(--navy-dark) 0%, var(--navy) 100%)` }} aria-label="Page header">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="text-sm text-gray-400 mb-6" aria-label="Breadcrumb">
            <ol className="flex gap-2">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-white" aria-current="page">Contact</li>
            </ol>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-gray-300 text-xl max-w-2xl">
            Reach out to start a conversation. We&apos;re here Monday through Friday and always happy to help.
          </p>
        </div>
      </section>

      {/* Contact layout */}
      <section className="py-20 bg-white" aria-label="Contact information and form">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left: Info */}
            <div>
              <h2 className="text-2xl font-bold mb-8" style={{ color: "var(--navy)" }}>Get in Touch</h2>

              {/* Email */}
              <div className="flex gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "rgba(14,76,133,0.08)" }}>
                  <Mail size={20} style={{ color: "var(--navy)" }} />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Email</p>
                  <a href={`mailto:${company.email}`} className="hover:opacity-80 transition-opacity" style={{ color: "var(--navy)" }}>
                    {company.email}
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-4 mb-10">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "rgba(14,76,133,0.08)" }}>
                  <Clock size={20} style={{ color: "var(--navy)" }} />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Office Hours</p>
                  <p className="text-gray-600">{hours}</p>
                </div>
              </div>

              {/* Offices */}
              <div className="space-y-8">
                {offices.map((o) => (
                  <div key={o.id} className="rounded-2xl p-6 border border-gray-100" style={{ backgroundColor: "var(--gray-50)" }}>
                    <h3 className="font-bold text-lg mb-4" style={{ color: "var(--navy)" }}>{o.city} Office</h3>
                    <div className="space-y-3">
                      <a href={o.mapLink} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 text-gray-600 hover:text-blue-900 transition-colors group">
                        <MapPin size={18} className="mt-0.5 flex-shrink-0" />
                        <address className="not-italic">
                          {o.address}<br />{o.cityStateZip}
                          <ExternalLink size={12} className="inline ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </address>
                      </a>
                      <a href={`tel:${o.phone.replace(/-/g, "")}`} className="flex items-center gap-3 text-gray-600 hover:text-blue-900 transition-colors">
                        <Phone size={18} /> {o.phone}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Portal links */}
              <div className="mt-10 p-6 rounded-2xl border border-gray-200 bg-gray-50">
                <h3 className="font-semibold text-gray-900 mb-4">Client Portals</h3>
                <div className="space-y-3">
                  <a href={company.clientPortal} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium hover:opacity-80 transition-opacity" style={{ color: "var(--navy)" }}>
                    <ExternalLink size={14} /> Secure Client Portal (ShareFile)
                  </a>
                  <a href={company.paymentPortal} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium hover:opacity-80 transition-opacity" style={{ color: "var(--navy)" }}>
                    <ExternalLink size={14} /> Make a Payment Online
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div>
              <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
                <h2 className="text-2xl font-bold mb-2" style={{ color: "var(--navy)" }}>Send Us a Message</h2>
                <p className="text-gray-500 text-sm mb-8">We&apos;ll respond within one business day.</p>
                <form
                  action="mailto:info@fhf-cpa.com"
                  method="get"
                  encType="text/plain"
                  aria-label="Contact form"
                  className="space-y-5"
                >
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1.5">First Name <span className="text-red-500">*</span></label>
                      <input id="firstName" name="firstName" type="text" required className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-blue-900 focus:ring-2 focus:ring-blue-900/20 outline-none transition-all text-sm" />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1.5">Last Name <span className="text-red-500">*</span></label>
                      <input id="lastName" name="lastName" type="text" required className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-blue-900 focus:ring-2 focus:ring-blue-900/20 outline-none transition-all text-sm" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">Email Address <span className="text-red-500">*</span></label>
                    <input id="email" name="email" type="email" required className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-blue-900 focus:ring-2 focus:ring-blue-900/20 outline-none transition-all text-sm" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">Phone Number</label>
                    <input id="phone" name="phone" type="tel" className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-blue-900 focus:ring-2 focus:ring-blue-900/20 outline-none transition-all text-sm" />
                  </div>
                  <div>
                    <label htmlFor="office" className="block text-sm font-medium text-gray-700 mb-1.5">Preferred Office</label>
                    <select id="office" name="office" className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-blue-900 focus:ring-2 focus:ring-blue-900/20 outline-none transition-all text-sm bg-white">
                      <option value="">No preference</option>
                      {offices.map((o) => <option key={o.id} value={o.city}>{o.city}</option>)}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="inquiry" className="block text-sm font-medium text-gray-700 mb-1.5">Type of Inquiry <span className="text-red-500">*</span></label>
                    <select id="inquiry" name="inquiry" required className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-blue-900 focus:ring-2 focus:ring-blue-900/20 outline-none transition-all text-sm bg-white">
                      <option value="">Select a topic...</option>
                      {inquiryTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">Message <span className="text-red-500">*</span></label>
                    <textarea id="message" name="message" required rows={5} placeholder="Tell us a bit about your situation..." className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-blue-900 focus:ring-2 focus:ring-blue-900/20 outline-none transition-all text-sm resize-none" />
                  </div>
                  <button type="submit" className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg font-semibold text-white transition-all hover:opacity-90" style={{ backgroundColor: "var(--green)" }}>
                    <Send size={16} /> Send Message
                  </button>
                  <p className="text-xs text-gray-400 text-center">Your information is kept strictly confidential.</p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
