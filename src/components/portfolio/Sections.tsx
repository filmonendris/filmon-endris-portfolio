import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  Briefcase,
  CheckCircle2,
  Code2,
  Download,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Send,
  Shield,
  Database,
  Network,
  Layers,
  Wrench,
  ExternalLink,
} from "lucide-react";
import portrait from "@/assets/filmon-portrait.png";
import {
  CERTIFICATIONS,
  EXPERIENCE,
  PROFILE,
  PROJECTS,
  ROADMAP,
  SKILLS,
  STATS,
} from "./data";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as any } },
};

function PlaceholderTag() {
  return (
    <span
      title="Replace this placeholder before publishing"
      className="ml-2 rounded-md border border-dashed border-brand/50 bg-brand-soft px-1.5 py-0.5 text-[10px] font-mono font-medium uppercase tracking-wider text-brand"
    >
      placeholder
    </span>
  );
}

function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
}: {
  id: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="relative scroll-mt-24 py-24 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="mb-12 max-w-2xl"
        >
          {eyebrow && (
            <div className="mb-3 inline-flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-[0.18em] text-brand">
              <span className="h-px w-6 bg-brand" />
              {eyebrow}
            </div>
          )}
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">{title}</h2>
          {subtitle && <p className="mt-4 text-base text-muted-foreground md:text-lg">{subtitle}</p>}
        </motion.div>
        {children}
      </div>
    </section>
  );
}

/* ───────── HERO ───────── */
export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 md:pt-36">
      <div className="absolute inset-0 -z-10 grid-bg" />
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid items-center gap-12 lg:grid-cols-[1.25fr_1fr]">
          <motion.div initial="hidden" animate="show" variants={fadeUp}>
            <div className="mb-5 inline-flex items-center gap-2 rounded-md border border-border bg-surface/60 px-3 py-1 font-mono text-xs">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand" />
              </span>
              <span className="text-muted-foreground">Available for internships — 2026 / 2027</span>
            </div>
            <h1 className="text-balance text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
              {PROFILE.name}
              <span className="mt-2 block text-muted-foreground">
                Full-Stack Developer building web platforms that replace paper.
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-base text-muted-foreground md:text-lg">{PROFILE.tagline}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-md bg-brand px-5 py-3 text-sm font-medium text-brand-foreground transition hover:opacity-90"
              >
                See case studies <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </a>
              <a
                href={PROFILE.resumeUrl}
                className="inline-flex items-center gap-2 rounded-md border border-border bg-surface/60 px-5 py-3 text-sm font-medium transition hover:bg-surface-elevated"
              >
                <Download className="h-4 w-4" /> Resume
                {PROFILE.resumePlaceholder && <PlaceholderTag />}
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-3 text-sm font-medium transition hover:border-brand hover:text-brand"
              >
                Contact
              </a>
            </div>
            <div className="mt-8 flex items-center gap-5 text-muted-foreground">
              <a href={PROFILE.socials.github.url} aria-label="GitHub" className="transition hover:text-foreground"><Github className="h-5 w-5" /></a>
              <a href={PROFILE.socials.linkedin.url} aria-label="LinkedIn" className="transition hover:text-foreground"><Linkedin className="h-5 w-5" /></a>
              <a href={PROFILE.socials.telegram.url} aria-label="Telegram" className="transition hover:text-foreground"><Send className="h-5 w-5" /></a>
              <a href={`mailto:${PROFILE.email}`} aria-label="Email" className="transition hover:text-foreground"><Mail className="h-5 w-5" /></a>
              <div className="ml-1 hidden items-center gap-1 text-xs sm:flex">
                <MapPin className="h-3.5 w-3.5" /> {PROFILE.location}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-sm"
          >
            {/* Subtle radial backdrop — no neon, no heavy gradient */}
            <div className="absolute inset-x-6 bottom-0 top-10 -z-10 rounded-3xl bg-surface" />
            <div
              aria-hidden
              className="absolute inset-x-0 bottom-0 -z-10 h-3/5 rounded-b-3xl"
              style={{ background: "radial-gradient(60% 70% at 50% 100%, color-mix(in oklab, var(--brand) 18%, transparent), transparent 70%)" }}
            />
            <img
              src={portrait}
              alt="Filmon Endris"
              className="relative mx-auto w-full select-none object-contain"
              loading="eager"
              draggable={false}
            />
            <div className="mt-4 flex items-center justify-between rounded-xl border border-border bg-surface/70 px-4 py-3 backdrop-blur">
              <div>
                <div className="text-[11px] uppercase tracking-wider text-muted-foreground">Currently</div>
                <div className="text-sm font-medium">BSc IT · Haramaya University</div>
              </div>
              <GraduationCap className="h-5 w-5 text-brand" />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-4"
        >
          {STATS.map((s) => (
            <div key={s.label} className="bg-background p-6">
              <div className="font-display text-2xl font-semibold md:text-3xl">{s.value}</div>
              <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ───────── ABOUT ───────── */
export function About() {
  return (
    <Section id="about" eyebrow="About" title="A short, honest version." subtitle={PROFILE.brand}>
      <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="space-y-5 text-muted-foreground">
          <p>
            I'm an Information Technology student at <span className="text-foreground">Haramaya University</span>. Most of what I know about building software I learned by shipping three real systems — for a city licensing office, a university freshman program, and a primary clinic — and then having to support them when they broke.
          </p>
          <p>
            My day-to-day stack is <span className="text-foreground">React + TypeScript</span> on the frontend and <span className="text-foreground">Node.js / Express</span> or <span className="text-foreground">PHP</span> with <span className="text-foreground">MySQL</span> on the backend. I'm also working through Cisco and EC-Council material because understanding what's underneath the API helps me write better software on top of it.
          </p>
          <p>
            I'm looking for an internship in 2026 / 2027 where I can contribute to a real codebase, learn how senior engineers think about review and design, and grow into a software engineer worth keeping.
          </p>
        </motion.div>

        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="space-y-3">
          {[
            { icon: Code2, label: "Full-stack web development" },
            { icon: Database, label: "Relational data modeling" },
            { icon: Shield, label: "Application security basics" },
            { icon: Network, label: "Networking fundamentals" },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-3 rounded-lg border border-border bg-surface/60 p-4">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-background text-brand">
                <Icon className="h-4 w-4" />
              </span>
              <span className="text-sm font-medium">{label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Roadmap */}
      <div className="mt-20">
        <h3 className="mb-8 text-xl font-semibold tracking-tight md:text-2xl">Timeline</h3>
        <ol className="relative border-l border-border pl-6">
          {ROADMAP.map((r, i) => (
            <motion.li
              key={r.title}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ delay: i * 0.04 }}
              className="mb-8 last:mb-0"
            >
              <span className="absolute -left-[5px] mt-1.5 h-2.5 w-2.5 rounded-full bg-brand ring-4 ring-background" />
              <div className="font-mono text-xs text-brand">{r.year}</div>
              <div className="mt-1 text-base font-medium">{r.title}</div>
              <div className="text-sm text-muted-foreground">{r.desc}</div>
            </motion.li>
          ))}
        </ol>
      </div>
    </Section>
  );
}

/* ───────── PROJECTS ───────── */
export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Selected work"
      title="Three real systems, in production."
      subtitle="Not tutorial projects. Each one has actual users, real edge cases, and lessons I only learned by maintaining it."
    >
      <div className="space-y-6">
        {PROJECTS.map((p, i) => (
          <motion.article
            key={p.title}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ delay: i * 0.04 }}
            className="group relative overflow-hidden rounded-2xl border border-border bg-surface/60 p-6 transition hover:border-brand/50 md:p-9"
          >
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="rounded-md bg-brand-soft px-2.5 py-1 font-medium text-brand">{p.category}</span>
              <span className="rounded-md border border-border px-2.5 py-1 font-mono text-muted-foreground">{p.period}</span>
              {p.flagship && <span className="rounded-md border border-brand/40 px-2.5 py-1 font-medium text-brand">Flagship</span>}
              <span className="ml-auto font-mono text-muted-foreground">0{i + 1} / 0{PROJECTS.length}</span>
            </div>

            <h3 className="mt-5 text-2xl font-semibold tracking-tight md:text-3xl">{p.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{p.role}</p>

            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div>
                <div className="mb-1 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">Why it was built</div>
                <p className="text-sm">{p.why}</p>
              </div>
              <div>
                <div className="mb-1 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">Problem</div>
                <p className="text-sm">{p.problem}</p>
              </div>
              <div>
                <div className="mb-1 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">Solution</div>
                <p className="text-sm">{p.solution}</p>
              </div>
              <div>
                <div className="mb-1 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">My role</div>
                <p className="text-sm">{p.role_details}</p>
              </div>
            </div>

            <div className="mt-6">
              <div className="mb-2 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">Technical challenges</div>
              <ul className="space-y-2">
                {p.challenges.map((c) => (
                  <li key={c} className="flex gap-2 text-sm">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 grid gap-4 rounded-xl border border-border bg-background/60 p-4 md:grid-cols-2">
              <div>
                <div className="mb-1 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">Lessons learned</div>
                <p className="text-sm">{p.lessons}</p>
              </div>
              <div>
                <div className="mb-1 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">Future improvements</div>
                <p className="text-sm">{p.future}</p>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-1.5 font-mono text-[11px]">
              {p.stack.map((s) => (
                <span key={s} className="rounded border border-border bg-background px-2 py-0.5 text-muted-foreground">{s}</span>
              ))}
            </div>

            <div className="mt-5 flex flex-wrap gap-4 text-sm">
              <span className="inline-flex items-center gap-1.5 text-muted-foreground">
                <ExternalLink className="h-3.5 w-3.5" /> Live demo
                <PlaceholderTag />
              </span>
              <span className="inline-flex items-center gap-1.5 text-muted-foreground">
                <Github className="h-3.5 w-3.5" /> Source
                <PlaceholderTag />
              </span>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}

/* ───────── SKILLS ───────── */
const SKILL_ICONS: Record<keyof typeof SKILLS, any> = {
  Frontend: Layers,
  Backend: Code2,
  Database: Database,
  Tools: Wrench,
  "Security & Networking": Shield,
};

export function Skills() {
  const keys = Object.keys(SKILLS) as Array<keyof typeof SKILLS>;
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="What I actually use."
      subtitle="Tools I've used in production or on real coursework — not a list of things I've read about."
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {keys.map((key, i) => {
          const Icon = SKILL_ICONS[key];
          return (
            <motion.div
              key={key}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ delay: i * 0.04 }}
              className="rounded-xl border border-border bg-surface/60 p-6 transition hover:bg-surface-elevated"
            >
              <div className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-background text-brand">
                <Icon className="h-4 w-4" />
              </div>
              <h3 className="text-base font-semibold">{key}</h3>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {SKILLS[key].map((s) => (
                  <span key={s} className="rounded-md border border-border bg-background/70 px-2.5 py-1 text-xs text-muted-foreground">
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}

/* ───────── EXPERIENCE ───────── */
export function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Where I've spent my time." subtitle="Short, accurate, no inflation.">
      <div className="grid gap-4 md:grid-cols-2">
        {EXPERIENCE.map((e, i) => (
          <motion.div
            key={e.role}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ delay: i * 0.04 }}
            className="rounded-xl border border-border bg-surface/60 p-6"
          >
            <div className="flex items-start justify-between gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-background text-brand">
                <Briefcase className="h-4 w-4" />
              </span>
              <span className="font-mono text-xs text-muted-foreground">{e.period}</span>
            </div>
            <h3 className="mt-4 text-base font-semibold">{e.role}</h3>
            <div className="text-sm text-brand">{e.org}</div>
            <p className="mt-3 text-sm text-muted-foreground">{e.desc}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

/* ───────── CERTIFICATIONS ───────── */
const STATUS_LABEL: Record<string, string> = {
  "in-progress": "In progress",
  planned: "Planned",
  earned: "Earned",
};

export function Certifications() {
  return (
    <Section
      id="certifications"
      eyebrow="Certifications"
      title="Earned, in progress, and planned."
      subtitle="I'd rather list what I'm actually working on than pad this section with badges I don't hold."
    >
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {CERTIFICATIONS.map((c, i) => (
          <motion.div
            key={c.name}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ delay: i * 0.03 }}
            className="flex items-start gap-3 rounded-lg border border-border bg-surface/60 p-4"
          >
            <span
              className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md ${
                c.status === "earned"
                  ? "bg-brand text-brand-foreground"
                  : c.status === "in-progress"
                  ? "border border-border bg-brand-soft text-brand"
                  : "border border-dashed border-border bg-background text-muted-foreground"
              }`}
            >
              <Award className="h-4 w-4" />
            </span>
            <div className="min-w-0 flex-1">
              <div className="flex items-start justify-between gap-2">
                <div className="text-sm font-medium leading-snug">{c.name}</div>
                <span className={`shrink-0 font-mono text-[10px] uppercase tracking-wider ${c.status === "planned" ? "text-muted-foreground" : "text-brand"}`}>
                  {STATUS_LABEL[c.status] ?? c.status}
                </span>
              </div>
              <div className="text-xs text-muted-foreground">{c.org} · {c.year}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

/* ───────── CONTACT ───────── */
export function Contact() {
  const items = [
    { icon: Mail, label: "Email", value: PROFILE.email, href: `mailto:${PROFILE.email}`, placeholder: PROFILE.emailPlaceholder },
    { icon: Github, label: "GitHub", value: PROFILE.socials.github.handle, href: PROFILE.socials.github.url, placeholder: PROFILE.socials.github.placeholder },
    { icon: Linkedin, label: "LinkedIn", value: PROFILE.socials.linkedin.handle, href: PROFILE.socials.linkedin.url, placeholder: PROFILE.socials.linkedin.placeholder },
    { icon: Send, label: "Telegram", value: PROFILE.socials.telegram.handle, href: PROFILE.socials.telegram.url, placeholder: PROFILE.socials.telegram.placeholder },
    { icon: Download, label: "Resume (PDF)", value: "Download CV", href: PROFILE.resumeUrl, placeholder: PROFILE.resumePlaceholder },
    { icon: MapPin, label: "Location", value: PROFILE.location, href: undefined, placeholder: false },
  ];
  return (
    <Section id="contact" eyebrow="Contact" title="Get in touch." subtitle="The fastest way to reach me is email. I usually reply within a day.">
      <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr]">
        <div className="grid gap-3 sm:grid-cols-2">
          {items.map(({ icon: Icon, label, value, href, placeholder }) => {
            const Tag: any = href ? "a" : "div";
            return (
              <Tag
                key={label}
                href={href}
                className="flex items-center gap-3 rounded-lg border border-border bg-surface/60 p-4 transition hover:border-brand/50"
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-background text-brand">
                  <Icon className="h-4 w-4" />
                </span>
                <div className="min-w-0">
                  <div className="text-[11px] uppercase tracking-wider text-muted-foreground">
                    {label}{placeholder && <PlaceholderTag />}
                  </div>
                  <div className="truncate text-sm font-medium">{value}</div>
                </div>
                {href && <ArrowUpRight className="ml-auto h-4 w-4 text-muted-foreground" />}
              </Tag>
            );
          })}
        </div>

        <form
          onSubmit={(e) => { e.preventDefault(); alert("Thanks — I'll be in touch."); }}
          className="rounded-xl border border-border bg-surface/60 p-6"
        >
          <div className="grid gap-4 md:grid-cols-2">
            <label className="block">
              <span className="mb-1.5 block text-[11px] uppercase tracking-wider text-muted-foreground">Name</span>
              <input required className="w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm outline-none transition focus:border-brand" />
            </label>
            <label className="block">
              <span className="mb-1.5 block text-[11px] uppercase tracking-wider text-muted-foreground">Email</span>
              <input required type="email" className="w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm outline-none transition focus:border-brand" />
            </label>
          </div>
          <label className="mt-4 block">
            <span className="mb-1.5 block text-[11px] uppercase tracking-wider text-muted-foreground">Subject</span>
            <input className="w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm outline-none transition focus:border-brand" />
          </label>
          <label className="mt-4 block">
            <span className="mb-1.5 block text-[11px] uppercase tracking-wider text-muted-foreground">Message</span>
            <textarea required rows={5} className="w-full resize-none rounded-md border border-border bg-background px-3 py-2.5 text-sm outline-none transition focus:border-brand" />
          </label>
          <button className="mt-5 inline-flex items-center gap-2 rounded-md bg-brand px-5 py-3 text-sm font-medium text-brand-foreground transition hover:opacity-90">
            Send message <Send className="h-4 w-4" />
          </button>
        </form>
      </div>
    </Section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 sm:flex-row">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-brand text-[10px] font-bold text-brand-foreground">FE</span>
          <span>© {new Date().getFullYear()} Filmon Endris. Designed and coded by me.</span>
        </div>
        <div className="flex items-center gap-4 text-muted-foreground">
          <a href={PROFILE.socials.github.url} className="hover:text-foreground"><Github className="h-4 w-4" /></a>
          <a href={PROFILE.socials.linkedin.url} className="hover:text-foreground"><Linkedin className="h-4 w-4" /></a>
          <a href={PROFILE.socials.telegram.url} className="hover:text-foreground"><Send className="h-4 w-4" /></a>
          <a href={`mailto:${PROFILE.email}`} className="hover:text-foreground"><Mail className="h-4 w-4" /></a>
          <a href="#home" className="ml-2 rounded-md border border-border px-3 py-1 text-xs hover:border-brand hover:text-brand">Top ↑</a>
        </div>
      </div>
    </footer>
  );
}
