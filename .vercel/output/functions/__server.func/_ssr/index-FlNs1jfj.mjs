import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { X, M as Menu, A as ArrowRight, D as Download, G as Github, L as Linkedin, S as Send, a as Mail, b as MapPin, c as GraduationCap, C as CodeXml, d as Database, e as Shield, N as Network, f as CircleCheck, E as ExternalLink, W as Wrench, g as Layers, B as Briefcase, h as Award, i as ArrowUpRight, j as Sun, k as Moon } from "../_libs/lucide-react.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const PROFILE = {
  name: "Filmon Endris",
  tagline: "I build full-stack web applications focused on public-sector, education, and healthcare problems. Currently finishing my BSc in Information Technology and looking for an internship where I can ship real software with a team.",
  brand: "Web platforms that replace paper-based workflows in government, universities, and clinics — built with React, Node, PHP, and MySQL.",
  location: "Haramaya, Ethiopia",
  email: "filmon.endris@example.com",
  // TODO: replace with real email
  emailPlaceholder: true,
  socials: {
    github: { url: "https://github.com/", handle: "github.com/your-handle", placeholder: true },
    linkedin: { url: "https://linkedin.com/in/", handle: "linkedin.com/in/your-handle", placeholder: true },
    telegram: { url: "https://t.me/", handle: "@your-handle", placeholder: true }
  },
  resumeUrl: "#",
  // TODO: replace with hosted PDF
  resumePlaceholder: true
};
const NAV = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" }
];
const STATS = [
  { value: "3", label: "Production projects shipped" },
  { value: "BSc IT", label: "Haramaya University, 2023–2027" },
  { value: "Full-stack", label: "React · Node · PHP · MySQL" },
  { value: "Open", label: "Internship 2026 / 2027" }
];
const ROADMAP = [
  { year: "2023", title: "Started BSc in Information Technology", desc: "Enrolled at Haramaya University. Focused on programming fundamentals, discrete math, and web basics." },
  { year: "2024", title: "Moved beyond coursework", desc: "Self-studied React, Node.js, and relational databases. Started building small projects end-to-end instead of following tutorials." },
  { year: "2025", title: "Shipped first real platforms", desc: "Designed, built, and delivered three full-stack systems for a city office, a university freshman program, and a primary clinic." },
  { year: "2026", title: "Networking & security foundations", desc: "Working through Cisco Networking Academy material and EC-Council fundamentals alongside university coursework." },
  { year: "2026 – 2027", title: "Internship", desc: "Looking for an engineering team where I can contribute code, review PRs, and learn from senior developers." },
  { year: "2027", title: "Graduate", desc: "BSc, Information Technology — Haramaya University." }
];
const SKILLS = {
  Frontend: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Tailwind CSS"],
  Backend: ["Node.js", "Express", "PHP", "Python (scripting)"],
  Database: ["MySQL", "Schema design", "Basic query optimization"],
  Tools: ["Git", "GitHub", "VS Code", "Postman", "Linux CLI"],
  "Security & Networking": ["Cisco Packet Tracer", "IPv4 / subnetting", "Routing & switching basics", "Auth & input validation", "OWASP Top 10 awareness"]
};
const PROJECTS = [
  {
    title: "Haramaya City Digital License System",
    category: "Government · Civic tech",
    period: "2025",
    role: "Sole developer — requirements, schema, backend, frontend, deployment.",
    why: "The licensing office still processed applications on paper. A single application could take days of back-and-forth and records were stored in physical folders, which made lookups and reporting painful.",
    problem: "Paper-based application intake, manual approval routing, and no central record of issued licenses or renewal dates.",
    solution: "A web app that handles application submission, reviewer approvals, license issuance, and exports — built on React + Node/Express + MySQL with role-based access for applicants, reviewers, and admins.",
    role_details: "Mapped the existing paper process with staff, designed the relational schema, built the REST API, implemented the React UI, and handled deployment.",
    challenges: [
      "Designing an approval workflow that mirrored the real office hierarchy without forcing staff to learn a new process.",
      "Handling concurrent edits on the same application without losing reviewer comments.",
      "Producing printable license documents that matched the existing official format."
    ],
    lessons: "Talking to the actual users before writing code saved me from building features nobody needed. The hardest part wasn't the stack — it was modeling the workflow correctly.",
    future: "Add audit logs, SMS notifications for applicants, and a public renewal portal.",
    stack: ["React", "Node.js", "Express", "MySQL", "Tailwind"],
    accent: "blue"
  },
  {
    title: "Haramaya University Freshman Resource Center",
    category: "Education · Web platform",
    period: "2025",
    role: "Lead developer.",
    why: "Every September, freshmen arrived on campus with no central place to find course outlines, scholarship info, dorm rules, or department contacts. Information lived in scattered PDFs and Telegram groups.",
    problem: "New students wasted weeks finding basic academic and campus information; the university had no single source of truth for freshman onboarding.",
    solution: "A centralized resource portal with searchable academic materials, department guides, a student dashboard, and an admin panel for staff to publish updates.",
    role_details: "Owned the frontend architecture and search experience, designed the content model in MySQL, and built the admin publishing interface.",
    challenges: [
      "Designing a content model that worked for both structured items (courses, departments) and free-form announcements.",
      "Building search that was useful with limited content and still worked once the catalogue grew.",
      "Keeping the admin interface simple enough that non-technical staff could publish without me."
    ],
    lessons: "Boring CRUD done well beats clever abstractions. Staff adoption depended entirely on how forgiving the admin UI was.",
    future: "Migrate to Postgres, add a notification feed, and open a public API so student clubs can integrate.",
    stack: ["React", "TypeScript", "Node.js", "MySQL", "Tailwind"],
    accent: "cyan",
    flagship: true
  },
  {
    title: "Afyia Primary Clinic Management System",
    category: "Healthcare · Internal tool",
    period: "2024 – 2025",
    role: "Sole developer.",
    why: "A small primary clinic was tracking patient visits, prescriptions, and follow-ups in handwritten notebooks. Finding a returning patient's history meant flipping through pages.",
    problem: "No structured patient records, no appointment view, and no way to see basic clinic activity at the end of the day.",
    solution: "A LAMP-stack web app for patient registration, visit notes, appointment scheduling, prescription history, and a simple daily/weekly activity report.",
    role_details: "Wrote the schema, the PHP backend, the JS frontend, and trained the clinic staff on using it.",
    challenges: [
      "Working offline-tolerant on intermittent connections common at the site.",
      "Modeling patient identity correctly when many patients share names and lack national IDs.",
      "Keeping the UI usable for staff who hadn't used web apps for clinical work before."
    ],
    lessons: "Healthcare software lives or dies by how fast a busy clinician can complete one visit. I removed three quarters of the form fields after the first week of real use.",
    future: "Add lab-result entry, role separation for nurses vs. doctors, and an export for monthly Ministry of Health reporting.",
    stack: ["PHP", "MySQL", "JavaScript", "Tailwind"],
    accent: "slate"
  }
];
const CERTIFICATIONS = [
  { name: "Cisco Networking Academy — Introduction to Networks", org: "Cisco", year: "2026", status: "in-progress" },
  { name: "EC-Council Essentials Series (Network / Ethical Hacking)", org: "EC-Council", year: "2026", status: "in-progress" },
  { name: "BSc in Information Technology", org: "Haramaya University", year: "2023 – 2027", status: "in-progress" },
  { name: "CCNA", org: "Cisco", year: "Planned", status: "planned" },
  { name: "AWS Certified Cloud Practitioner", org: "Amazon Web Services", year: "Planned", status: "planned" },
  { name: "Google Cybersecurity Certificate", org: "Google / Coursera", year: "Planned", status: "planned" },
  { name: "Meta Front-End Developer", org: "Meta / Coursera", year: "Planned", status: "planned" }
];
const EXPERIENCE = [
  {
    role: "Independent Full-Stack Developer",
    org: "Project-based · Haramaya",
    period: "2024 — Present",
    desc: "Delivered three end-to-end web platforms for a city licensing office, the university freshman program, and a primary clinic. Handled requirements, schema, backend, frontend, and rollout."
  },
  {
    role: "BSc Information Technology",
    org: "Haramaya University",
    period: "2023 — 2027 (expected)",
    desc: "Coursework across software engineering, databases, networks, and security. Maintaining strong academic standing while building outside coursework."
  },
  {
    role: "Open to internships",
    org: "Software engineering · Backend · Web platforms",
    period: "2026 — 2027",
    desc: "Looking for a team where I can contribute production code, learn code review, and grow under experienced engineers."
  }
];
function ThemeToggle() {
  const [light, setLight] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const saved = localStorage.getItem("theme");
    const isLight = saved === "light";
    setLight(isLight);
    document.documentElement.classList.toggle("light", isLight);
  }, []);
  const toggle = () => {
    const next = !light;
    setLight(next);
    document.documentElement.classList.toggle("light", next);
    localStorage.setItem("theme", next ? "light" : "dark");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "button",
    {
      onClick: toggle,
      "aria-label": "Toggle theme",
      className: "inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface/60 text-foreground transition hover:bg-surface-elevated hover:text-brand",
      children: light ? /* @__PURE__ */ jsxRuntimeExports.jsx(Sun, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Moon, { className: "h-4 w-4" })
    }
  );
}
function Nav() {
  const [open, setOpen] = reactExports.useState(false);
  const [scrolled, setScrolled] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "header",
    {
      className: `fixed inset-x-0 top-0 z-50 transition-all ${scrolled ? "py-2" : "py-4"}`,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex items-center justify-between rounded-xl border border-border px-4 py-2 transition-all ${scrolled ? "glass shadow-elegant" : "bg-transparent"}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#home", className: "flex items-center gap-2 font-display text-sm font-semibold tracking-tight", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex h-7 w-7 items-center justify-center rounded-md bg-brand text-brand-foreground text-xs font-bold", children: "FE" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "Filmon Endris" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden items-center gap-1 lg:flex", children: NAV.map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: `#${n.id}`,
              className: "rounded-md px-3 py-1.5 text-sm text-muted-foreground transition hover:bg-surface hover:text-foreground",
              children: n.label
            },
            n.id
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: "#contact",
                className: "hidden rounded-md bg-brand px-4 py-1.5 text-sm font-medium text-brand-foreground transition hover:opacity-90 sm:inline-flex",
                children: "Get in touch"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ThemeToggle, {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                className: "inline-flex h-9 w-9 items-center justify-center rounded-md border border-border lg:hidden",
                onClick: () => setOpen(!open),
                "aria-label": "Menu",
                children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "h-4 w-4" })
              }
            )
          ] })
        ] }),
        open && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 rounded-2xl glass p-3 lg:hidden", children: NAV.map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: `#${n.id}`,
            onClick: () => setOpen(false),
            className: "block rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-surface hover:text-foreground",
            children: n.label
          },
          n.id
        )) })
      ] })
    }
  );
}
const portrait = "/assets/filmon-portrait-DVKy7Wy3.png";
const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
};
function PlaceholderTag() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "span",
    {
      title: "Replace this placeholder before publishing",
      className: "ml-2 rounded-md border border-dashed border-brand/50 bg-brand-soft px-1.5 py-0.5 text-[10px] font-mono font-medium uppercase tracking-wider text-brand",
      children: "placeholder"
    }
  );
}
function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id, className: "relative scroll-mt-24 py-24 md:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: "hidden",
        whileInView: "show",
        viewport: { once: true, margin: "-80px" },
        variants: fadeUp,
        className: "mb-12 max-w-2xl",
        children: [
          eyebrow && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 inline-flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-[0.18em] text-brand", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-6 bg-brand" }),
            eyebrow
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-semibold tracking-tight md:text-4xl", children: title }),
          subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-base text-muted-foreground md:text-lg", children: subtitle })
        ]
      }
    ),
    children
  ] }) });
}
function Hero() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "home", className: "relative overflow-hidden pt-32 md:pt-36", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 -z-10 grid-bg" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid items-center gap-12 lg:grid-cols-[1.25fr_1fr]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: "hidden", animate: "show", variants: fadeUp, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-5 inline-flex items-center gap-2 rounded-md border border-border bg-surface/60 px-3 py-1 font-mono text-xs", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative flex h-1.5 w-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-75" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative inline-flex h-1.5 w-1.5 rounded-full bg-brand" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Available for internships — 2026 / 2027" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-balance text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl", children: [
            PROFILE.name,
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-2 block text-muted-foreground", children: "Full-Stack Developer building web platforms that replace paper." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-xl text-base text-muted-foreground md:text-lg", children: PROFILE.tagline }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: "#projects",
                className: "group inline-flex items-center gap-2 rounded-md bg-brand px-5 py-3 text-sm font-medium text-brand-foreground transition hover:opacity-90",
                children: [
                  "See case studies ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4 transition group-hover:translate-x-0.5" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: PROFILE.resumeUrl,
                className: "inline-flex items-center gap-2 rounded-md border border-border bg-surface/60 px-5 py-3 text-sm font-medium transition hover:bg-surface-elevated",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "h-4 w-4" }),
                  " Resume",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(PlaceholderTag, {})
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: "#contact",
                className: "inline-flex items-center gap-2 rounded-md border border-border px-5 py-3 text-sm font-medium transition hover:border-brand hover:text-brand",
                children: "Contact"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex items-center gap-5 text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: PROFILE.socials.github.url, "aria-label": "GitHub", className: "transition hover:text-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Github, { className: "h-5 w-5" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: PROFILE.socials.linkedin.url, "aria-label": "LinkedIn", className: "transition hover:text-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Linkedin, { className: "h-5 w-5" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: PROFILE.socials.telegram.url, "aria-label": "Telegram", className: "transition hover:text-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "h-5 w-5" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `mailto:${PROFILE.email}`, "aria-label": "Email", className: "transition hover:text-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-5 w-5" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ml-1 hidden items-center gap-1 text-xs sm:flex", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-3.5 w-3.5" }),
              " ",
              PROFILE.location
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 18 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
            className: "relative mx-auto w-full max-w-sm",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-6 bottom-0 top-10 -z-10 rounded-3xl bg-surface" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  "aria-hidden": true,
                  className: "absolute inset-x-0 bottom-0 -z-10 h-3/5 rounded-b-3xl",
                  style: { background: "radial-gradient(60% 70% at 50% 100%, color-mix(in oklab, var(--brand) 18%, transparent), transparent 70%)" }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: portrait,
                  alt: "Filmon Endris",
                  className: "relative mx-auto w-full select-none object-contain",
                  loading: "eager",
                  draggable: false
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex items-center justify-between rounded-xl border border-border bg-surface/70 px-4 py-3 backdrop-blur", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] uppercase tracking-wider text-muted-foreground", children: "Currently" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium", children: "BSc IT · Haramaya University" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(GraduationCap, { className: "h-5 w-5 text-brand" })
              ] })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: "hidden",
          whileInView: "show",
          viewport: { once: true },
          variants: fadeUp,
          className: "mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-4",
          children: STATS.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background p-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-2xl font-semibold md:text-3xl", children: s.value }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-xs uppercase tracking-wider text-muted-foreground", children: s.label })
          ] }, s.label))
        }
      )
    ] })
  ] });
}
function About() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { id: "about", eyebrow: "About", title: "A short, honest version.", subtitle: PROFILE.brand, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-10 lg:grid-cols-[1.4fr_1fr]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: "hidden", whileInView: "show", viewport: { once: true }, variants: fadeUp, className: "space-y-5 text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
          "I'm an Information Technology student at ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: "Haramaya University" }),
          ". Most of what I know about building software I learned by shipping three real systems — for a city licensing office, a university freshman program, and a primary clinic — and then having to support them when they broke."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
          "My day-to-day stack is ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: "React + TypeScript" }),
          " on the frontend and ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: "Node.js / Express" }),
          " or ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: "PHP" }),
          " with ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: "MySQL" }),
          " on the backend. I'm also working through Cisco and EC-Council material because understanding what's underneath the API helps me write better software on top of it."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "I'm looking for an internship in 2026 / 2027 where I can contribute to a real codebase, learn how senior engineers think about review and design, and grow into a software engineer worth keeping." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: "hidden", whileInView: "show", viewport: { once: true }, variants: fadeUp, className: "space-y-3", children: [
        { icon: CodeXml, label: "Full-stack web development" },
        { icon: Database, label: "Relational data modeling" },
        { icon: Shield, label: "Application security basics" },
        { icon: Network, label: "Networking fundamentals" }
      ].map(({ icon: Icon, label }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 rounded-lg border border-border bg-surface/60 p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-background text-brand", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium", children: label })
      ] }, label)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mb-8 text-xl font-semibold tracking-tight md:text-2xl", children: "Timeline" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "relative border-l border-border pl-6", children: ROADMAP.map((r, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.li,
        {
          initial: "hidden",
          whileInView: "show",
          viewport: { once: true },
          variants: fadeUp,
          transition: { delay: i * 0.04 },
          className: "mb-8 last:mb-0",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -left-[5px] mt-1.5 h-2.5 w-2.5 rounded-full bg-brand ring-4 ring-background" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-xs text-brand", children: r.year }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-base font-medium", children: r.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground", children: r.desc })
          ]
        },
        r.title
      )) })
    ] })
  ] });
}
function Projects() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Section,
    {
      id: "projects",
      eyebrow: "Selected work",
      title: "Three real systems, in production.",
      subtitle: "Not tutorial projects. Each one has actual users, real edge cases, and lessons I only learned by maintaining it.",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-6", children: PROJECTS.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.article,
        {
          initial: "hidden",
          whileInView: "show",
          viewport: { once: true },
          variants: fadeUp,
          transition: { delay: i * 0.04 },
          className: "group relative overflow-hidden rounded-2xl border border-border bg-surface/60 p-6 transition hover:border-brand/50 md:p-9",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2 text-xs", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-md bg-brand-soft px-2.5 py-1 font-medium text-brand", children: p.category }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-md border border-border px-2.5 py-1 font-mono text-muted-foreground", children: p.period }),
              p.flagship && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-md border border-brand/40 px-2.5 py-1 font-medium text-brand", children: "Flagship" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "ml-auto font-mono text-muted-foreground", children: [
                "0",
                i + 1,
                " / 0",
                PROJECTS.length
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-5 text-2xl font-semibold tracking-tight md:text-3xl", children: p.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: p.role }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 grid gap-6 md:grid-cols-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-1 font-mono text-[11px] uppercase tracking-wider text-muted-foreground", children: "Why it was built" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: p.why })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-1 font-mono text-[11px] uppercase tracking-wider text-muted-foreground", children: "Problem" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: p.problem })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-1 font-mono text-[11px] uppercase tracking-wider text-muted-foreground", children: "Solution" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: p.solution })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-1 font-mono text-[11px] uppercase tracking-wider text-muted-foreground", children: "My role" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: p.role_details })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-2 font-mono text-[11px] uppercase tracking-wider text-muted-foreground", children: "Technical challenges" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: p.challenges.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-2 text-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "mt-0.5 h-4 w-4 shrink-0 text-brand" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: c })
              ] }, c)) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 grid gap-4 rounded-xl border border-border bg-background/60 p-4 md:grid-cols-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-1 font-mono text-[11px] uppercase tracking-wider text-muted-foreground", children: "Lessons learned" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: p.lessons })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-1 font-mono text-[11px] uppercase tracking-wider text-muted-foreground", children: "Future improvements" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: p.future })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 flex flex-wrap gap-1.5 font-mono text-[11px]", children: p.stack.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded border border-border bg-background px-2 py-0.5 text-muted-foreground", children: s }, s)) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 flex flex-wrap gap-4 text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5 text-muted-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "h-3.5 w-3.5" }),
                " Live demo",
                /* @__PURE__ */ jsxRuntimeExports.jsx(PlaceholderTag, {})
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5 text-muted-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Github, { className: "h-3.5 w-3.5" }),
                " Source",
                /* @__PURE__ */ jsxRuntimeExports.jsx(PlaceholderTag, {})
              ] })
            ] })
          ]
        },
        p.title
      )) })
    }
  );
}
const SKILL_ICONS = {
  Frontend: Layers,
  Backend: CodeXml,
  Database,
  Tools: Wrench,
  "Security & Networking": Shield
};
function Skills() {
  const keys = Object.keys(SKILLS);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Section,
    {
      id: "skills",
      eyebrow: "Skills",
      title: "What I actually use.",
      subtitle: "Tools I've used in production or on real coursework — not a list of things I've read about.",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 md:grid-cols-2 lg:grid-cols-3", children: keys.map((key, i) => {
        const Icon = SKILL_ICONS[key];
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: "hidden",
            whileInView: "show",
            viewport: { once: true },
            variants: fadeUp,
            transition: { delay: i * 0.04 },
            className: "rounded-xl border border-border bg-surface/60 p-6 transition hover:bg-surface-elevated",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4 inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-background text-brand", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-semibold", children: key }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 flex flex-wrap gap-1.5", children: SKILLS[key].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-md border border-border bg-background/70 px-2.5 py-1 text-xs text-muted-foreground", children: s }, s)) })
            ]
          },
          key
        );
      }) })
    }
  );
}
function Experience() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { id: "experience", eyebrow: "Experience", title: "Where I've spent my time.", subtitle: "Short, accurate, no inflation.", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 md:grid-cols-2", children: EXPERIENCE.map((e, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: "hidden",
      whileInView: "show",
      viewport: { once: true },
      variants: fadeUp,
      transition: { delay: i * 0.04 },
      className: "rounded-xl border border-border bg-surface/60 p-6",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-background text-brand", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Briefcase, { className: "h-4 w-4" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-xs text-muted-foreground", children: e.period })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 text-base font-semibold", children: e.role }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-brand", children: e.org }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-muted-foreground", children: e.desc })
      ]
    },
    e.role
  )) }) });
}
const STATUS_LABEL = {
  "in-progress": "In progress",
  planned: "Planned",
  earned: "Earned"
};
function Certifications() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Section,
    {
      id: "certifications",
      eyebrow: "Certifications",
      title: "Earned, in progress, and planned.",
      subtitle: "I'd rather list what I'm actually working on than pad this section with badges I don't hold.",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-3", children: CERTIFICATIONS.map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: "hidden",
          whileInView: "show",
          viewport: { once: true },
          variants: fadeUp,
          transition: { delay: i * 0.03 },
          className: "flex items-start gap-3 rounded-lg border border-border bg-surface/60 p-4",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: `inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md ${c.status === "earned" ? "bg-brand text-brand-foreground" : c.status === "in-progress" ? "border border-border bg-brand-soft text-brand" : "border border-dashed border-border bg-background text-muted-foreground"}`,
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "h-4 w-4" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium leading-snug", children: c.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `shrink-0 font-mono text-[10px] uppercase tracking-wider ${c.status === "planned" ? "text-muted-foreground" : "text-brand"}`, children: STATUS_LABEL[c.status] ?? c.status })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground", children: [
                c.org,
                " · ",
                c.year
              ] })
            ] })
          ]
        },
        c.name
      )) })
    }
  );
}
function Contact() {
  const items = [
    { icon: Mail, label: "Email", value: PROFILE.email, href: `mailto:${PROFILE.email}`, placeholder: PROFILE.emailPlaceholder },
    { icon: Github, label: "GitHub", value: PROFILE.socials.github.handle, href: PROFILE.socials.github.url, placeholder: PROFILE.socials.github.placeholder },
    { icon: Linkedin, label: "LinkedIn", value: PROFILE.socials.linkedin.handle, href: PROFILE.socials.linkedin.url, placeholder: PROFILE.socials.linkedin.placeholder },
    { icon: Send, label: "Telegram", value: PROFILE.socials.telegram.handle, href: PROFILE.socials.telegram.url, placeholder: PROFILE.socials.telegram.placeholder },
    { icon: Download, label: "Resume (PDF)", value: "Download CV", href: PROFILE.resumeUrl, placeholder: PROFILE.resumePlaceholder },
    { icon: MapPin, label: "Location", value: PROFILE.location, href: void 0, placeholder: false }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { id: "contact", eyebrow: "Contact", title: "Get in touch.", subtitle: "The fastest way to reach me is email. I usually reply within a day.", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-8 lg:grid-cols-[1fr_1.1fr]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-3 sm:grid-cols-2", children: items.map(({ icon: Icon, label, value, href, placeholder }) => {
      const Tag = href ? "a" : "div";
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Tag,
        {
          href,
          className: "flex items-center gap-3 rounded-lg border border-border bg-surface/60 p-4 transition hover:border-brand/50",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-background text-brand", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] uppercase tracking-wider text-muted-foreground", children: [
                label,
                placeholder && /* @__PURE__ */ jsxRuntimeExports.jsx(PlaceholderTag, {})
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "truncate text-sm font-medium", children: value })
            ] }),
            href && /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "ml-auto h-4 w-4 text-muted-foreground" })
          ]
        },
        label
      );
    }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "form",
      {
        onSubmit: (e) => {
          e.preventDefault();
          alert("Thanks — I'll be in touch.");
        },
        className: "rounded-xl border border-border bg-surface/60 p-6",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 md:grid-cols-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mb-1.5 block text-[11px] uppercase tracking-wider text-muted-foreground", children: "Name" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, className: "w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm outline-none transition focus:border-brand" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mb-1.5 block text-[11px] uppercase tracking-wider text-muted-foreground", children: "Email" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, type: "email", className: "w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm outline-none transition focus:border-brand" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "mt-4 block", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mb-1.5 block text-[11px] uppercase tracking-wider text-muted-foreground", children: "Subject" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm outline-none transition focus:border-brand" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "mt-4 block", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mb-1.5 block text-[11px] uppercase tracking-wider text-muted-foreground", children: "Message" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { required: true, rows: 5, className: "w-full resize-none rounded-md border border-border bg-background px-3 py-2.5 text-sm outline-none transition focus:border-brand" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "mt-5 inline-flex items-center gap-2 rounded-md bg-brand px-5 py-3 text-sm font-medium text-brand-foreground transition hover:opacity-90", children: [
            "Send message ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "h-4 w-4" })
          ] })
        ]
      }
    )
  ] }) });
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "border-t border-border py-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 sm:flex-row", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex h-6 w-6 items-center justify-center rounded-md bg-brand text-[10px] font-bold text-brand-foreground", children: "FE" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " Filmon Endris. Designed and coded by me."
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: PROFILE.socials.github.url, className: "hover:text-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Github, { className: "h-4 w-4" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: PROFILE.socials.linkedin.url, className: "hover:text-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Linkedin, { className: "h-4 w-4" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: PROFILE.socials.telegram.url, className: "hover:text-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "h-4 w-4" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `mailto:${PROFILE.email}`, className: "hover:text-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-4 w-4" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#home", className: "ml-2 rounded-md border border-border px-3 py-1 text-xs hover:border-brand hover:text-brand", children: "Top ↑" })
    ] })
  ] }) });
}
function Index() {
  reactExports.useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "light") document.documentElement.classList.add("light");
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "min-h-dvh overflow-x-clip bg-background text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(About, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Projects, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Skills, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Experience, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Certifications, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Contact, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  Index as component
};
