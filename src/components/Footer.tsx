import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, ExternalLink } from "lucide-react";

function FacebookIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function LinkedinIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}
import { company, offices, services, industries } from "@/lib/data";
import { withBasePath } from "@/lib/path";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer style={{ backgroundColor: "var(--navy-dark)" }} className="text-gray-300" aria-label="Site footer">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand column */}
          <div>
            <Link href="/" className="block mb-4" aria-label="Flagel Huber Flagel — Home">
              <Image
                src={withBasePath("/images/logo/fhf-logo-footer.svg")}
                alt="Flagel Huber Flagel"
                width={220}
                height={44}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed mb-5">
              {company.tagline} — serving clients since {company.founded} with straightforward accounting, tax, and business advice.
            </p>
            <div className="flex gap-3">
              <a href={company.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                <FacebookIcon size={16} />
              </a>
              <a href={company.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                <LinkedinIcon size={16} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Services</h3>
            <ul className="space-y-2">
              {services.slice(0, 6).map((s) => (
                <li key={s.id}>
                  <Link href={`/what-we-do#${s.id}`} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Who We Serve</h3>
            <ul className="space-y-2">
              {industries.map((i) => (
                <li key={i.id}>
                  <Link href={`/who-we-serve#${i.id}`} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {i.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Offices */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Our Offices</h3>
            <div className="space-y-5">
              {offices.map((o) => (
                <address key={o.id} className="not-italic">
                  <p className="text-white text-sm font-medium mb-1">{o.city}</p>
                  <a href={o.mapLink} target="_blank" rel="noopener noreferrer" className="flex gap-2 text-sm text-gray-400 hover:text-white transition-colors mb-1">
                    <MapPin size={14} className="mt-0.5 flex-shrink-0" />
                    <span>{o.address}<br />{o.cityStateZip}</span>
                  </a>
                  <a href={`tel:${o.phone.replace(/-/g, "")}`} className="flex gap-2 text-sm text-gray-400 hover:text-white transition-colors">
                    <Phone size={14} className="flex-shrink-0" /> {o.phone}
                  </a>
                </address>
              ))}
              <a href={`mailto:${company.email}`} className="flex gap-2 text-sm text-gray-400 hover:text-white transition-colors">
                <Mail size={14} className="flex-shrink-0" /> {company.email}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>&copy; {year} {company.name}. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <a href={company.clientPortal} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-white transition-colors">
              Client Portal <ExternalLink size={12} />
            </a>
            <a href={company.paymentPortal} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-white transition-colors">
              Make a Payment <ExternalLink size={12} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}