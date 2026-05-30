@AGENTS.md

# Site Page Directory

All pages use Next.js App Router. Source files live under `src/app/`. Data for all pages is centralized in `src/lib/data.ts`.

## Top-Level Pages

| Route | File | Description |
|-------|------|-------------|
| `/` | `src/app/page.tsx` | Homepage — hero, stats, services grid, industries grid, testimonials, offices |
| `/who-we-are` | `src/app/who-we-are/page.tsx` | About landing — values, overview, team preview |
| `/what-we-do` | `src/app/what-we-do/page.tsx` | Services listing — all 9 services with icons |
| `/who-we-serve` | `src/app/who-we-serve/page.tsx` | Industries listing — all 7 industries with icons |
| `/contact` | `src/app/contact/page.tsx` | Contact form + 3 office cards |
| `/careers` | `src/app/careers/page.tsx` | Job listings, culture, benefits |
| `/resources` | `src/app/resources/page.tsx` | Insights articles, tax calendar, external tools |
| `/privacy` | `src/app/privacy/page.tsx` | Privacy policy |

## Who We Are Sub-Pages

| Route | File | Description |
|-------|------|-------------|
| `/team` | `src/app/team/page.tsx` | Full team grid — Partners & Managers; each card links to profile |
| `/team/[slug]` | `src/app/team/[slug]/page.tsx` | Individual team member profile — photo, bio, specialties, education, community |
| `/locations` | `src/app/locations/page.tsx` | 3 office locations with photos (Cincinnati, Dayton, Troy) |
| `/our-history` | `src/app/our-history/page.tsx` | 90-year history timeline + managing partner photos |
| `/our-commitment` | `src/app/our-commitment/page.tsx` | AICPA peer review, values, commitment to quality |
| `/bdo-alliance` | `src/app/bdo-alliance/page.tsx` | BDO Alliance USA membership — logo, stats, benefits |

## What We Do (Services) — Dynamic Route

| Route | File | Description |
|-------|------|-------------|
| `/what-we-do/[slug]` | `src/app/what-we-do/[slug]/page.tsx` | Individual service page — description, benefits, related services |

### Service slugs (defined in `data.ts → services[].id`):
- `tax-services`
- `assurance-services`
- `small-business-accounting`
- `business-valuations`
- `litigation-support`
- `esop`
- `employee-benefit-plan-audits`
- `business-advisory`
- `trust-estate`

## Who We Serve (Industries) — Dynamic Route

| Route | File | Description |
|-------|------|-------------|
| `/who-we-serve/[slug]` | `src/app/who-we-serve/[slug]/page.tsx` | Individual industry page — photo, description, key focuses, related services |

### Industry slugs (defined in `data.ts → industries[].id`):
- `family-closely-held-businesses`
- `real-estate`
- `manufacturing-distribution`
- `restaurants-retail`
- `healthcare-medical-practices`
- `nonprofit-organizations`
- `individuals`

## Resources Sub-Pages

| Route | File | Description |
|-------|------|-------------|
| `/news` | `src/app/news/page.tsx` | News & insights article listing |
| `/case-studies` | `src/app/case-studies/page.tsx` | Client case study listing with photos |

## Team Member Slugs (defined in `data.ts → team[].slug`)

| Slug | Name |
|------|------|
| `jeff-woeste` | Jeff Woeste, CPA — Managing Partner |
| `kevin-behrle` | Kevin Behrle, CPA — Partner |
| `dave-dirksen` | Dave Dirksen, CPA/ABV — Partner |
| `sean-costello` | Sean Costello — IT Director |
| `matt-deitsch` | Matt Deitsch, CPA — Partner |
| `liz-downer` | Liz Downer, CPA, CFP® — Partner |
| `joe-gordon` | Joe Gordon, CPA — Partner |
| `kevin-hagstrom` | Kevin Hagstrom, CPA — Partner |
| `matt-jones` | Matt Jones, CPA — Partner |
| `derek-koester` | Derek Koester, CPA — Partner |
| `bruce-kreinbrink` | Bruce Kreinbrink, CPA, CFP® — Partner |
| `randy-kuvin` | Randy Kuvin, CPA/ABV, CFF — Partner |
| `chris-mccaskey` | Chris McCaskey, CPA — Partner |
| `mike-pabst` | Mike Pabst, CPA — Partner |
| `brett-vandeman` | Brett Vandeman, CPA — Partner |
| `amy-bales` | Amy Bales — Human Resources |
| `luke-berning` | Luke Berning, CPA — Supervisor |
| `andee-everman` | Andee Everman — Manager |
| `john-obrien` | John O'Brien, CPA — Manager |
| `erin-kliesch` | Erin Kliesch, CPA — Manager |
| `jenny-lee` | Jenny Lee, CPA — Manager |
| `randy-miller` | Randy Miller, CPA — Manager |
| `mike-owsiany` | Mike Owsiany, CPA — Manager |
| `katie-pavy` | Katie Pavy, CPA, M.ACC. — Manager |

## Static Assets (`public/`)

| Path | Contents |
|------|----------|
| `public/images/team/` | 24 team member headshots (local copies) |
| `public/images/offices/` | Cincinnati, Dayton, Troy office building photos |
| `public/images/icons/` | SVG service and industry icons (11 services + 7 industries) |
| `public/images/logo/` | FHF horizontal and footer logos (SVG) |
| `public/images/case-studies/` | Case study client photos |
| `public/llms.txt` | LLM-readable site summary |
| `public/llms-full.txt` | Full LLM site content |

## Key Source Files

| File | Purpose |
|------|---------|
| `src/lib/data.ts` | Single source of truth — company info, offices, services, industries, team (with bios), testimonials, navLinks |
| `src/lib/path.ts` | `withBasePath()` helper for GitHub Pages base path support |
| `src/app/layout.tsx` | Root layout — Header, Footer, JSON-LD structured data |
| `src/components/Header.tsx` | Site header with mega-menu navigation |
| `src/components/Footer.tsx` | Site footer with office addresses and social links |
| `src/app/sitemap.ts` | Auto-generated XML sitemap |
| `src/app/robots.ts` | robots.txt |
| `next.config.ts` | Next.js config — static export, GitHub Pages base path, unoptimized images |
