import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Linkedin, Mail } from "lucide-react";
import { Section } from "@/components/site/Section";
import logo from "@/assest/kinetiq-logo.png";
import hero from "@/assest/hero.jpg";

const EMAIL = "business@kinetiqgrowthads.com";
const LINKEDIN = "https://www.linkedin.com/company/101457789/";

const nav = [
  { label: "What we do", href: "#services" },
  { label: "Verticals", href: "#verticals" },
  { label: "Platforms", href: "#platforms" },
  { label: "Approach", href: "#approach" },
];

const platforms = [
  { name: "Meta", note: "Social distribution, creative testing and scalable audience reach." },
  { name: "Google", note: "Search-led acquisition and high-intent demand capture." },
  { name: "TikTok", note: "Fast creative iteration for discovery-driven journeys." },
  { name: "Newsbreak", note: "Local news inventory with strong consumer intent at efficient CPMs." },
  { name: "SmartNews", note: "Contextual news placements built for scaled direct response." },
  { name: "Snapchat", note: "Short-form reach into younger, mobile-first audiences." },
  { name: "Taboola", note: "Native discovery at volume with advertorial-led funnels." },
  { name: "Outbrain", note: "Premium publisher native traffic with quality controls." },
  { name: "Microsoft Ads", note: "Search beyond Google, often with stronger lead economics." },
];

const services = [
  {
    n: "01",
    title: "Performance Acquisition",
    body: "Designing and scaling paid media focused on measurable customer action rather than impressions alone.",
  },
  {
    n: "02",
    title: "Qualified Lead Generation",
    body: "Connecting high-intent consumers with relevant providers through compliant, carefully designed journeys.",
  },
  {
    n: "03",
    title: "Creative & Landing Systems",
    body: "Angle research, advertorials and conversion-focused pages built to be tested, iterated and scaled.",
  },
  {
    n: "04",
    title: "Campaign Intelligence",
    body: "Structured testing, tracking and performance data used to improve quality, conversion rate and scale.",
  },
];

const verticals = [
  {
    title: "Insurance",
    body: "Acquisition programs for consumer insurance categories such as auto, home and related protection products.",
    note: "Kinetiq Growth Media is a marketing and customer-acquisition company. It is not an insurer, carrier, broker or licensed agent.",
  },
  {
    title: "Home Improvement",
    body: "Demand generation for roofing, windows, solar, HVAC, bathroom and kitchen projects and other high-consideration home services.",
    note: "We do not perform the underlying home-improvement work and do not represent ourselves as a contractor.",
  },
  {
    title: "Finance & Legal",
    body: "Consumer finance and legal intake campaigns including debt relief, loans and mass-tort style enquiries.",
    note: "We are not a lender, law firm or financial adviser. We generate and route consumer interest only.",
  },
  {
    title: "Health & Medicare",
    body: "Compliance-aware acquisition for health insurance, Medicare enrolment windows and consumer wellness offers.",
    note: "We are not a health plan or licensed benefits provider. All journeys are built to partner and platform requirements.",
  },
];

const approach = [
  {
    n: "01",
    title: "Discover demand",
    body: "Identify high-intent audiences, search behaviour and creative angles where real consumer demand begins.",
  },
  {
    n: "02",
    title: "Design the journey",
    body: "Build clear acquisition flows that set expectations, reduce friction and support responsible data capture.",
  },
  {
    n: "03",
    title: "Qualify and route",
    body: "Filter for relevance, intent and partner requirements before routing opportunities to the right destination.",
  },
  {
    n: "04",
    title: "Learn and scale",
    body: "Feed performance and quality signals back into media, creative and journey design for sustainable scale.",
  },
];

const principles = [
  "Consent-aware journeys",
  "Clear disclosures",
  "Data minimisation",
  "Partner requirements",
  "Platform policy attention",
  "Consumer experience",
];

const facts: Array<[string, string]> = [
  ["Markets", "United States"],
  ["Model", "Performance acquisition"],
  ["Channels", "Social, search & native"],
  ["Focus", "Quality over volume"],
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kinetiq Growth Media | Performance Marketing & Media Buying" },
      {
        name: "description",
        content:
          "Kinetiq Growth Media is a performance marketing agency scaling customer acquisition across Meta, Google, TikTok, Newsbreak, SmartNews and native.",
      },
      { property: "og:title", content: "Kinetiq Growth Media | Performance Marketing Agency" },
      {
        property: "og:description",
        content:
          "Media buying and qualified lead generation for insurance, home improvement, finance, legal and health verticals.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border bg-navy-deep/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-center">
            <img
              src={logo}
              alt="Kinetiq Growth Media"
              className="h-9 w-auto"
              width={140}
              height={40}
            />
          </a>
          <nav className="hidden items-center gap-8 md:flex">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href={`mailto:${EMAIL}`}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
          >
            Start a conversation
          </a>
        </div>
      </header>

      <main id="top">
        <section className="relative overflow-hidden">
          <img
            src={hero}
            alt=""
            aria-hidden="true"
            width={1920}
            height={1088}
            className="absolute inset-0 h-full w-full object-cover opacity-60"
          />
          <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
          <div className="grid-lines absolute inset-0 opacity-40" />
          <div className="relative mx-auto max-w-6xl px-6 py-28 md:py-40">
            <p className="eyebrow animate-rise">Performance marketing &amp; media buying</p>
            <h1 className="animate-rise mt-6 max-w-4xl text-4xl font-bold leading-[1.05] sm:text-6xl md:text-7xl">
              Demand engineered.
              <span className="block text-primary">Growth delivered.</span>
            </h1>
            <p className="animate-rise mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Kinetiq Growth Media builds and scales performance-based acquisition systems that connect
              high-intent consumers with the businesses ready to serve them.
            </p>
            <div className="animate-rise mt-10 flex flex-wrap gap-4">
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
                style={{ boxShadow: "var(--shadow-glow)" }}
              >
                Discuss a partnership <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="#approach"
                className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-semibold transition-colors hover:bg-secondary"
              >
                Explore our approach
              </a>
            </div>
            <dl className="mt-20 grid max-w-3xl grid-cols-2 gap-8 border-t border-border pt-10 md:grid-cols-4">
              {facts.map(([k, v]) => (
                <div key={k}>
                  <dt className="text-xs uppercase tracking-widest text-muted-foreground">{k}</dt>
                  <dd className="mt-2 font-display text-sm font-semibold">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <Section
          id="platforms"
          eyebrow="Platform credibility"
          title="Built across the platforms where demand begins."
          intro="We operate in the paid-media environments where intent, attention and conversion signals can be shaped into qualified opportunities — including Newsbreak and SmartNews, where news-context inventory delivers efficient, high-converting reach."
        >
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {platforms.map((p) => (
              <article key={p.name} className="surface-card rounded-2xl p-6">
                <h3 className="font-display text-lg font-semibold">{p.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.note}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          id="services"
          eyebrow="What we do"
          title="Customer acquisition with quality built in."
          intro="Full-funnel media buying, creative and measurement operated as one system."
        >
          <div className="grid gap-6 md:grid-cols-2">
            {services.map((s) => (
              <article key={s.n} className="surface-card rounded-2xl p-8">
                <span className="font-display text-sm font-semibold text-primary">{s.n}</span>
                <h3 className="mt-4 text-xl font-semibold">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          id="verticals"
          eyebrow="Verticals"
          title="Focused on high-consideration consumer decisions."
        >
          <div className="grid gap-6 md:grid-cols-2">
            {verticals.map((v) => (
              <article key={v.title} className="surface-card rounded-2xl p-8">
                <h3 className="text-xl font-semibold">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.body}</p>
                <p className="mt-5 border-t border-border pt-4 text-xs leading-relaxed text-muted-foreground/80">
                  {v.note}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section id="approach" eyebrow="Approach" title="A disciplined path from signal to scale.">
          <ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {approach.map((a) => (
              <li key={a.n} className="rounded-2xl border-t-2 border-primary bg-navy-soft/40 p-6">
                <span className="font-display text-sm font-semibold text-primary">{a.n}</span>
                <h3 className="mt-3 text-lg font-semibold">{a.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{a.body}</p>
              </li>
            ))}
          </ol>
        </Section>

        <Section
          id="responsible"
          eyebrow="Responsible growth"
          title="Scale only matters when the experience holds up."
          intro="Campaigns are designed with attention to consumer clarity, partner requirements, platform policies and responsible data practices. The goal is not simply more volume, but better-matched demand."
        >
          <div className="flex flex-wrap gap-3">
            {principles.map((p) => (
              <span
                key={p}
                className="rounded-full border border-border px-5 py-2.5 text-sm text-muted-foreground"
              >
                {p}
              </span>
            ))}
          </div>
        </Section>

        <section className="border-t border-border py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="surface-card rounded-3xl p-10 text-center md:p-16">
              <p className="eyebrow">Get in touch</p>
              <h2 className="mt-4 text-3xl font-semibold sm:text-4xl md:text-5xl">
                Let&apos;s make performance mean something.
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
                Share the markets, verticals and volume you care about — we&apos;ll come back with a media
                plan built around measurable outcomes.
              </p>
              <div className="mt-9 flex flex-wrap justify-center gap-4">
                <a
                  href={`mailto:${EMAIL}`}
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
                >
                  <Mail className="h-4 w-4" /> {EMAIL}
                </a>
                <a
                  href={LINKEDIN}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-semibold transition-colors hover:bg-secondary"
                >
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border py-14">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 md:flex-row md:items-center md:justify-between">
          <nav className="flex flex-wrap gap-6 text-sm text-muted-foreground">
            {nav.map((item) => (
              <a key={item.href} href={item.href} className="transition-colors hover:text-foreground">
                {item.label}
              </a>
            ))}
            <a href={`mailto:${EMAIL}`} className="transition-colors hover:text-foreground">
              Contact
            </a>
          </nav>
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Kinetiq Growth Media. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
