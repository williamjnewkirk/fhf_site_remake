import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle, Phone, Mail } from "lucide-react";
import { services, company, offices } from "@/lib/data";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.id === slug);
  if (!service) return {};
  return {
    title: `${service.title} — Ohio CPA Services`,
    description: service.description.slice(0, 160),
    alternates: { canonical: `https://fhf-cpa.com/what-we-do/${slug}` },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.id === slug);
  if (!service) notFound();

  const currentIndex = services.findIndex((s) => s.id === slug);
  const relatedServices = services.filter((_, i) => i !== currentIndex).slice(0, 3);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    provider: { "@type": "Organization", name: company.name, url: "https://fhf-cpa.com" },
    areaServed: { "@type": "State", name: "Ohio" },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      {/* Hero */}
      <section className="py-20" style={{ background: `linear-gradient(135deg, var(--navy-dark) 0%, var(--navy) 100%)` }} aria-label="Page header">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="text-sm text-gray-400 mb-6" aria-label="Breadcrumb">
            <ol className="flex gap-2">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/what-we-do" className="hover:text-white transition-colors">What We Do</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-white" aria-current="page">{service.title}</li>
            </ol>
          </nav>
          <div className="flex items-center gap-6">
            {service.iconImg && (
              <div className="w-20 h-20 rounded-2xl flex items-center justify-center flex-shrink-0 bg-white/10">
                <Image src={service.iconImg} alt="" width={48} height={48} aria-hidden="true" className="brightness-0 invert" />
              </div>
            )}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">{service.title}</h1>
              <p className="text-gray-300 text-xl max-w-2xl">{service.shortDescription}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-20 bg-white" aria-label="Service detail">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-16">
            {/* Left: Description */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-6" style={{ color: "var(--navy)" }}>About This Service</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-10">{service.description}</p>

              <h3 className="text-xl font-bold mb-6" style={{ color: "var(--navy)" }}>What&apos;s Included</h3>
              <ul className="space-y-4 mb-10" aria-label="Service inclusions">
                {service.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <CheckCircle size={20} className="mt-0.5 flex-shrink-0" style={{ color: "var(--gold)" }} />
                    <span className="text-gray-700">{b}</span>
                  </li>
                ))}
              </ul>

              {/* Related services */}
              <div className="mt-14">
                <h3 className="text-xl font-bold mb-6" style={{ color: "var(--navy)" }}>Other Services</h3>
                <div className="grid sm:grid-cols-3 gap-4">
                  {relatedServices.map((s) => (
                    <Link key={s.id} href={`/what-we-do/${s.id}`} className="group rounded-xl p-5 border border-gray-100 hover:border-blue-200 hover:shadow-sm transition-all">
                      {s.iconImg && <Image src={s.iconImg} alt="" width={28} height={28} aria-hidden="true" className="mb-3" />}
                      <h4 className="font-semibold text-sm text-gray-900 group-hover:text-blue-900 transition-colors mb-1">{s.title}</h4>
                      <span className="text-xs flex items-center gap-1" style={{ color: "var(--gold)" }}>
                        Learn more <ArrowRight size={12} />
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Sidebar */}
            <aside>
              {/* CTA card */}
              <div className="rounded-2xl p-8 mb-6 text-white" style={{ background: `linear-gradient(135deg, var(--navy-dark) 0%, var(--navy) 100%)` }}>
                <h3 className="font-bold text-xl mb-3">Ready to Get Started?</h3>
                <p className="text-gray-300 text-sm mb-6">Talk with a {service.title} specialist — no obligation, just a conversation.</p>
                <Link href="/contact" className="block text-center py-3 px-6 rounded-lg font-semibold text-white transition-colors" style={{ backgroundColor: "var(--green)" }}>
                  Schedule a Consultation
                </Link>
              </div>

              {/* Office contacts */}
              <div className="rounded-2xl border border-gray-100 p-6" style={{ backgroundColor: "var(--gray-50)" }}>
                <h3 className="font-semibold text-gray-900 mb-4">Contact an Office</h3>
                <div className="space-y-4">
                  {offices.map((o) => (
                    <div key={o.id}>
                      <p className="font-medium text-sm" style={{ color: "var(--navy)" }}>{o.city}</p>
                      <a href={`tel:${o.phone.replace(/-/g, "")}`} className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-900 transition-colors">
                        <Phone size={13} /> {o.phone}
                      </a>
                    </div>
                  ))}
                  <a href={`mailto:${company.email}`} className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-900 transition-colors">
                    <Mail size={13} /> {company.email}
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
