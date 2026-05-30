import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "News & Insights — The Flagel Voice",
  description:
    "Tax updates, business insights, and financial planning guidance from the team at Flagel Huber Flagel. Stay informed on changes that affect your business and your bottom line.",
  alternates: { canonical: "https://fhf-cpa.com/news" },
};

const articles = [
  { date: "Aug 4, 2025",  title: "The new law includes a game-changer for business payment reporting", category: "#taxbites", excerpt: "Recent legislation significantly changes how businesses must report certain payments. Here's what you need to know before it affects your operations." },
  { date: "Jul 28, 2025", title: "The QBI deduction and what's new in the One, Big, Beautiful Bill Act", category: "#taxbites", excerpt: "The qualified business income deduction is being revised again. We break down the proposed changes and what they mean for pass-through entity owners." },
  { date: "Jun 30, 2025", title: "Startup costs and taxes: What you need to know before filing", category: "#taxbites", excerpt: "How you handle startup costs on your first tax return can have long-lasting implications. We explain the rules and the elections available to new businesses." },
  { date: "Jun 16, 2025", title: "The One, Big, Beautiful Bill could change the deductibility of R&E expenses", category: "#taxbites", excerpt: "Research and experimentation expense rules have been in flux. Pending legislation may bring significant relief for businesses investing in innovation." },
  { date: "May 5, 2025",  title: "Corporate business owners: Is your salary reasonable in the eyes of the IRS?", category: "#taxbites", excerpt: "S-corporation owners who pay themselves below-market salaries face increasing IRS scrutiny. Here's how to benchmark reasonable compensation." },
  { date: "Apr 28, 2025", title: "An education plan can pay off for your employees — and your business", category: "#taxbites", excerpt: "Educational assistance programs offer valuable tax advantages for both employers and employees. We explore how to structure one effectively." },
  { date: "Apr 22, 2025", title: "Explore SEP and SIMPLE retirement plans for your small business", category: "#taxbites", excerpt: "Choosing the right retirement plan for your small business affects your taxes today and your employees' futures. Here's a comparison of the most accessible options." },
  { date: "Apr 14, 2025", title: "Small business alert: Watch out for the 100% penalty", category: "#taxbites", excerpt: "The trust fund recovery penalty can hold business owners personally liable for unpaid payroll taxes. Here's what triggers it and how to avoid it." },
  { date: "Mar 24, 2025", title: "6 essential tips for small business payroll tax compliance", category: "#taxbites", excerpt: "Payroll tax errors are among the most costly mistakes small businesses make. These six practices will keep you on the right side of the IRS." },
  { date: "Mar 3, 2025",  title: "Ways to manage the limit on the business interest expense deduction", category: "#taxbites", excerpt: "The Section 163(j) limitation continues to trap businesses with significant debt. We outline strategies to manage your exposure and maximize deductions." },
  { date: "Feb 24, 2025", title: "How a business owner's home office can result in tax deductions", category: "#taxbites", excerpt: "The home office deduction remains one of the most misunderstood provisions in the tax code. Here's who qualifies and how to calculate it correctly." },
  { date: "Feb 3, 2025",  title: "Many business tax limits have increased in 2025", category: "#taxbites", excerpt: "Inflation adjustments for 2025 have pushed several key business tax thresholds higher. Make sure your planning reflects the updated numbers." },
  { date: "Jan 27, 2025", title: "Businesses: The Form W-2 and 1099-NEC deadline is coming up fast", category: "#taxbites", excerpt: "January 31 is the deadline to provide W-2s and 1099-NECs to recipients. Here's what you need to have ready and common mistakes to avoid." },
  { date: "Jan 22, 2025", title: "The standard business mileage rate increased in 2025", category: "#taxbites", excerpt: "The IRS has announced a higher standard mileage rate for 2025. Learn what changed and whether you should switch between actual expense and standard rate methods." },
  { date: "Dec 23, 2024", title: "The tax treatment of intangible assets", category: "#taxbites", excerpt: "From goodwill to customer lists to patents, intangible assets are everywhere in modern business transactions — and their tax treatment is nuanced." },
];

const categories = ["All", "#taxbites", "Business Advisory", "ESOP", "Nonprofit", "Real Estate"];

export default function NewsPage() {
  return (
    <>
      {/* Page header */}
      <section className="py-20" style={{ background: `linear-gradient(135deg, var(--navy-dark) 0%, var(--navy) 100%)` }} aria-label="Page header">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="text-sm text-gray-400 mb-6" aria-label="Breadcrumb">
            <ol className="flex gap-2">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-white" aria-current="page">News & Insights</li>
            </ol>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">The Flagel Voice</h1>
          <p className="text-gray-300 text-xl max-w-2xl">
            Tax updates, business insights, and planning guidance from the FHF team.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white border-b border-gray-100" aria-label="Article categories">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex flex-wrap gap-2" aria-label="Filter by topic">
            {categories.map((c) => (
              <span key={c} className={`px-4 py-1.5 rounded-full text-sm font-medium cursor-pointer transition-colors ${c === "All" ? "text-white" : "border border-gray-300 text-gray-600 hover:border-blue-900 hover:text-blue-900"}`} style={c === "All" ? { backgroundColor: "var(--navy)" } : {}}>
                {c}
              </span>
            ))}
          </nav>
        </div>
      </section>

      {/* Articles */}
      <section className="py-20 bg-white" aria-label="Articles">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((a, i) => (
              <article key={i} className="rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col">
                {/* Category color band */}
                <div className="h-1.5 w-full" style={{ backgroundColor: "var(--gold)" }} />
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full" style={{ backgroundColor: "rgba(88,168,207,0.12)", color: "var(--gold)" }}>
                      {a.category}
                    </span>
                    <time className="flex items-center gap-1 text-xs text-gray-400">
                      <Calendar size={11} /> {a.date}
                    </time>
                  </div>
                  <h2 className="font-bold text-gray-900 mb-3 leading-snug text-base flex-1">{a.title}</h2>
                  <p className="text-gray-600 text-sm leading-relaxed mb-5">{a.excerpt}</p>
                  <Link href="/contact" className="text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all mt-auto" style={{ color: "var(--gold)" }}>
                    Talk with an advisor <ArrowRight size={13} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe / CTA */}
      <section className="py-16" style={{ background: `linear-gradient(135deg, var(--navy-dark) 0%, var(--navy) 100%)` }} aria-label="Newsletter CTA">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Get Tax Updates in Your Inbox</h2>
          <p className="text-gray-300 mb-8">We send timely, practical insights on tax law changes and business finance topics — no fluff, no spam.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-lg text-lg font-semibold text-white transition-all hover:opacity-90" style={{ backgroundColor: "var(--green)" }}>
            Subscribe to Updates <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </>
  );
}
