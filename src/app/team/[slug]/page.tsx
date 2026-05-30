import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Mail, Phone, GraduationCap, Star, Users } from "lucide-react";
import { team } from "@/lib/data";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return team.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const member = team.find((m) => m.slug === slug);
  if (!member) return {};
  const credsSuffix = member.credentials ? `, ${member.credentials}` : "";
  return {
    title: `${member.name}${credsSuffix} — ${member.title} | Flagel Huber Flagel`,
    description: `Meet ${member.name}${credsSuffix}, ${member.title} at Flagel Huber Flagel. ${member.bio.slice(0, 120)}...`,
    alternates: { canonical: `https://fhf-cpa.com/team/${slug}` },
  };
}

export default async function TeamMemberPage({ params }: Props) {
  const { slug } = await params;
  const member = team.find((m) => m.slug === slug);
  if (!member) notFound();

  const memberIndex = team.findIndex((m) => m.slug === slug);
  const prev = team[memberIndex - 1] ?? null;
  const next = team[memberIndex + 1] ?? null;

  return (
    <>
      {/* Hero */}
      <section
        className="py-16"
        style={{ background: "linear-gradient(135deg, var(--navy-dark) 0%, var(--navy) 100%)" }}
        aria-label="Team member header"
      >
        <div className="max-w-7xl mx-auto px-4">
          <nav className="text-sm text-gray-400 mb-8" aria-label="Breadcrumb">
            <ol className="flex gap-2">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/who-we-are" className="hover:text-white transition-colors">Who We Are</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/team" className="hover:text-white transition-colors">Our Team</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-white" aria-current="page">{member.name}</li>
            </ol>
          </nav>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-white/20 flex-shrink-0">
              <Image
                src={member.photo}
                alt={member.name}
                fill
                className="object-cover object-top"
                sizes="96px"
              />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white">
                {member.name}{member.credentials && <span className="text-gold ml-2 text-2xl font-semibold" style={{ color: "var(--gold)" }}>{member.credentials}</span>}
              </h1>
              <p className="text-gray-300 text-lg mt-1">{member.title}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16 bg-white" aria-label="Profile">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">

            {/* Left sidebar: photo + contact */}
            <aside className="lg:col-span-1 space-y-6">
              {/* Large photo */}
              <div className="relative w-full rounded-2xl overflow-hidden shadow-lg" style={{ aspectRatio: "3/4" }}>
                <Image
                  src={member.photo}
                  alt={`${member.name}${member.credentials ? `, ${member.credentials}` : ""}`}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  priority
                />
              </div>

              {/* Contact card */}
              <div className="rounded-2xl border border-gray-100 p-6 space-y-3" style={{ backgroundColor: "var(--gray-50)" }}>
                <h2 className="font-bold text-gray-900 mb-4">Contact</h2>
                {member.email && (
                  <a
                    href={`mailto:${member.email}`}
                    className="flex items-center gap-3 text-sm text-gray-700 hover:text-blue-900 transition-colors"
                  >
                    <Mail size={16} style={{ color: "var(--gold)" }} className="flex-shrink-0" />
                    <span>{member.email}</span>
                  </a>
                )}
                {member.phone && (
                  <a
                    href={`tel:${member.phone.replace(/[^0-9]/g, "")}`}
                    className="flex items-center gap-3 text-sm text-gray-700 hover:text-blue-900 transition-colors"
                  >
                    <Phone size={16} style={{ color: "var(--gold)" }} className="flex-shrink-0" />
                    <span>{member.phone}</span>
                  </a>
                )}
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-gray-700 hover:text-blue-900 transition-colors"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0" style={{ color: "var(--gold)" }} aria-hidden="true">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
                    </svg>
                    <span>LinkedIn Profile</span>
                  </a>
                )}
                {!member.email && !member.phone && !member.linkedin && (
                  <p className="text-sm text-gray-500">Contact us to reach {member.name.split(" ")[0]}.</p>
                )}
              </div>

              {/* General contact CTA */}
              <Link
                href="/contact"
                className="block text-center py-3 px-6 rounded-xl font-semibold text-white transition-all hover:opacity-90"
                style={{ backgroundColor: "var(--navy)" }}
              >
                Get in Touch
              </Link>
            </aside>

            {/* Right: bio + details */}
            <div className="lg:col-span-2 space-y-10">

              {/* Bio */}
              {member.bio && (
                <div>
                  <h2 className="text-2xl font-bold mb-5" style={{ color: "var(--navy)" }}>About {member.name.split(" ")[0]}</h2>
                  <div className="space-y-4">
                    {member.bio.split("\n").filter(Boolean).map((para, i) => (
                      <p key={i} className="text-gray-700 leading-relaxed text-lg">{para}</p>
                    ))}
                  </div>
                </div>
              )}

              {/* Specialties */}
              {member.specialties.length > 0 && (
                <div>
                  <h2 className="text-xl font-bold mb-5 flex items-center gap-2" style={{ color: "var(--navy)" }}>
                    <Star size={20} style={{ color: "var(--gold)" }} />
                    Areas of Expertise
                  </h2>
                  <ul className="grid sm:grid-cols-2 gap-3">
                    {member.specialties.map((s) => (
                      <li
                        key={s}
                        className="flex items-center gap-3 px-4 py-3 rounded-xl border border-gray-100 bg-gray-50 text-sm text-gray-700"
                      >
                        <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: "var(--gold)" }} />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Education */}
              {member.education.length > 0 && (
                <div>
                  <h2 className="text-xl font-bold mb-5 flex items-center gap-2" style={{ color: "var(--navy)" }}>
                    <GraduationCap size={20} style={{ color: "var(--gold)" }} />
                    Education
                  </h2>
                  <ul className="space-y-2">
                    {member.education.map((e) => (
                      <li key={e} className="flex items-start gap-3 text-gray-700">
                        <span className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: "var(--gold)" }} />
                        {e}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Community */}
              {member.community.length > 0 && (
                <div>
                  <h2 className="text-xl font-bold mb-5 flex items-center gap-2" style={{ color: "var(--navy)" }}>
                    <Users size={20} style={{ color: "var(--gold)" }} />
                    Community &amp; Professional Involvement
                  </h2>
                  <ul className="space-y-2">
                    {member.community.map((c) => (
                      <li key={c} className="flex items-start gap-3 text-gray-700">
                        <span className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: "var(--gold)" }} />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Prev / Next navigation */}
      <nav className="py-10 border-t border-gray-100" aria-label="Team member navigation">
        <div className="max-w-7xl mx-auto px-4 flex justify-between gap-4">
          {prev ? (
            <Link
              href={`/team/${prev.slug}`}
              className="flex items-center gap-3 group text-sm font-medium text-gray-600 hover:text-blue-900 transition-colors"
            >
              <ArrowLeft size={16} className="group-hover:-translate-x-0.5 transition-transform" />
              <div>
                <p className="text-xs text-gray-400 mb-0.5">Previous</p>
                <p>{prev.name}</p>
              </div>
            </Link>
          ) : <div />}

          <Link
            href="/team"
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold border transition-all hover:shadow-sm"
            style={{ borderColor: "var(--navy)", color: "var(--navy)" }}
          >
            View Full Team
          </Link>

          {next ? (
            <Link
              href={`/team/${next.slug}`}
              className="flex items-center gap-3 group text-sm font-medium text-gray-600 hover:text-blue-900 transition-colors text-right"
            >
              <div>
                <p className="text-xs text-gray-400 mb-0.5">Next</p>
                <p>{next.name}</p>
              </div>
              <ArrowLeft size={16} className="rotate-180 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          ) : <div />}
        </div>
      </nav>
    </>
  );
}
