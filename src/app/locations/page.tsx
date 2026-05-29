import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Printer } from "lucide-react";
import { offices, company } from "@/lib/data";

export const metadata: Metadata = {
  title: "Our Locations — Cincinnati, Dayton & Troy, Ohio",
  description:
    "Flagel Huber Flagel has three Ohio offices: Cincinnati (513-774-0300), Dayton (937-299-3400), and Troy (937-339-3118). Find the office nearest you.",
  alternates: { canonical: "https://fhf-cpa.com/locations" },
};

const officePhotos: Record<string, string> = {
  cincinnati: "/images/offices/cincinnati.jpg",
  dayton: "/images/offices/dayton.jpg",
  troy: "/images/offices/troy.jpg",
};

export default function LocationsPage() {
  return (
    <>
      {/* Page header */}
      <section className="py-20" style={{ background: `linear-gradient(135deg, var(--navy-dark) 0%, var(--navy) 100%)` }} aria-label="Page header">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="text-sm text-gray-400 mb-6" aria-label="Breadcrumb">
            <ol className="flex gap-2">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-white" aria-current="page">Our Locations</li>
            </ol>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Locations</h1>
          <p className="text-gray-300 text-xl max-w-2xl">
            Three offices across Ohio — close to where you live and do business.
          </p>
        </div>
      </section>

      {/* Offices */}
      <section className="py-20 bg-white" aria-label="Office locations">
        <div className="max-w-7xl mx-auto px-4 space-y-20">
          {offices.map((office, i) => (
            <article key={office.id} className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}>
              {/* Photo */}
              <div className={`relative rounded-2xl overflow-hidden shadow-lg ${i % 2 === 1 ? "lg:col-start-2" : ""}`} style={{ aspectRatio: "16/9" }}>
                {officePhotos[office.id] ? (
                  <Image
                    src={officePhotos[office.id]}
                    alt={`Flagel Huber Flagel ${office.city} office`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center" style={{ backgroundColor: "rgba(26,46,74,0.06)" }}>
                    <MapPin size={48} style={{ color: "var(--navy)", opacity: 0.3 }} />
                  </div>
                )}
              </div>

              {/* Info */}
              <div className={i % 2 === 1 ? "lg:col-start-1" : ""}>
                <h2 className="text-3xl font-bold mb-6" style={{ color: "var(--navy)" }}>{office.city} Office</h2>
                <div className="space-y-4 mb-8">
                  <a href={office.mapLink} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 text-gray-700 hover:text-blue-900 transition-colors group">
                    <MapPin size={20} className="mt-0.5 flex-shrink-0" style={{ color: "var(--gold)" }} />
                    <address className="not-italic">
                      {office.address}<br />{office.cityStateZip}
                      <span className="text-xs text-gray-400 ml-2 group-hover:text-blue-900 transition-colors">(view map)</span>
                    </address>
                  </a>
                  <a href={`tel:${office.phone.replace(/-/g, "")}`} className="flex items-center gap-3 text-gray-700 hover:text-blue-900 transition-colors">
                    <Phone size={20} className="flex-shrink-0" style={{ color: "var(--gold)" }} />
                    <span>{office.phone}</span>
                  </a>
                  <div className="flex items-center gap-3 text-gray-600">
                    <Printer size={20} className="flex-shrink-0" style={{ color: "var(--gold)" }} />
                    <span>Fax: {company.fax}</span>
                  </div>
                  <a href={`mailto:${company.email}`} className="flex items-center gap-3 text-gray-700 hover:text-blue-900 transition-colors">
                    <Mail size={20} className="flex-shrink-0" style={{ color: "var(--gold)" }} />
                    <span>{company.email}</span>
                  </a>
                </div>
                <div className="flex flex-wrap gap-3">
                  <a href={office.mapLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white transition-colors" style={{ backgroundColor: "var(--navy)" }}>
                    <MapPin size={15} /> Get Directions
                  </a>
                  <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white transition-colors" style={{ backgroundColor: "var(--gold)" }}>
                    Contact This Office
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Hours info */}
      <section className="py-16" style={{ backgroundColor: "var(--gray-50)" }} aria-label="Office hours">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--navy)" }}>Office Hours</h2>
          <p className="text-gray-600 text-lg mb-2">Monday – Friday, 8:00 AM – 5:00 PM ET</p>
          <p className="text-gray-500 text-sm">All three locations observe the same business hours. Client portal available 24/7.</p>
        </div>
      </section>
    </>
  );
}
