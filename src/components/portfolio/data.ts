// NOTE: Items marked with `placeholder: true` should be replaced with real links/emails before publishing.

export const PROFILE = {
  name: "Filmon Endris",
  title: "Full-Stack Developer · IT Student at Haramaya University",
  tagline:
    "I build full-stack web applications focused on public-sector, education, and healthcare problems. Currently finishing my BSc in Information Technology and looking for an internship where I can ship real software with a team.",
  brand:
    "Web platforms that replace paper-based workflows in government, universities, and clinics — built with React, Node, PHP, and MySQL.",
  location: "Haramaya, Ethiopia",
  email: "filmon.endris@example.com", // TODO: replace with real email
  emailPlaceholder: true,
  socials: {
    github: { url: "https://github.com/", handle: "github.com/your-handle", placeholder: true },
    linkedin: { url: "https://linkedin.com/in/", handle: "linkedin.com/in/your-handle", placeholder: true },
    telegram: { url: "https://t.me/", handle: "@your-handle", placeholder: true },
  },
  resumeUrl: "#", // TODO: replace with hosted PDF
  resumePlaceholder: true,
};

export const NAV = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

export const STATS = [
  { value: "3", label: "Production projects shipped" },
  { value: "BSc IT", label: "Haramaya University, 2023–2027" },
  { value: "Full-stack", label: "React · Node · PHP · MySQL" },
  { value: "Open", label: "Internship 2026 / 2027" },
];

export const ROADMAP = [
  { year: "2023", title: "Started BSc in Information Technology", desc: "Enrolled at Haramaya University. Focused on programming fundamentals, discrete math, and web basics." },
  { year: "2024", title: "Moved beyond coursework", desc: "Self-studied React, Node.js, and relational databases. Started building small projects end-to-end instead of following tutorials." },
  { year: "2025", title: "Shipped first real platforms", desc: "Designed, built, and delivered three full-stack systems for a city office, a university freshman program, and a primary clinic." },
  { year: "2026", title: "Networking & security foundations", desc: "Working through Cisco Networking Academy material and EC-Council fundamentals alongside university coursework." },
  { year: "2026 – 2027", title: "Internship", desc: "Looking for an engineering team where I can contribute code, review PRs, and learn from senior developers." },
  { year: "2027", title: "Graduate", desc: "BSc, Information Technology — Haramaya University." },
];

export const SKILLS = {
  Frontend: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Tailwind CSS"],
  Backend: ["Node.js", "Express", "PHP", "Python (scripting)"],
  Database: ["MySQL", "Schema design", "Basic query optimization"],
  Tools: ["Git", "GitHub", "VS Code", "Postman", "Linux CLI"],
  "Security & Networking": ["Cisco Packet Tracer", "IPv4 / subnetting", "Routing & switching basics", "Auth & input validation", "OWASP Top 10 awareness"],
};

export const PROJECTS = [
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
      "Producing printable license documents that matched the existing official format.",
    ],
    lessons: "Talking to the actual users before writing code saved me from building features nobody needed. The hardest part wasn't the stack — it was modeling the workflow correctly.",
    future: "Add audit logs, SMS notifications for applicants, and a public renewal portal.",
    stack: ["React", "Node.js", "Express", "MySQL", "Tailwind"],
    accent: "blue",
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
      "Keeping the admin interface simple enough that non-technical staff could publish without me.",
    ],
    lessons: "Boring CRUD done well beats clever abstractions. Staff adoption depended entirely on how forgiving the admin UI was.",
    future: "Migrate to Postgres, add a notification feed, and open a public API so student clubs can integrate.",
    stack: ["React", "TypeScript", "Node.js", "MySQL", "Tailwind"],
    accent: "cyan",
    flagship: true,
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
      "Keeping the UI usable for staff who hadn't used web apps for clinical work before.",
    ],
    lessons: "Healthcare software lives or dies by how fast a busy clinician can complete one visit. I removed three quarters of the form fields after the first week of real use.",
    future: "Add lab-result entry, role separation for nurses vs. doctors, and an export for monthly Ministry of Health reporting.",
    stack: ["PHP", "MySQL", "JavaScript", "Tailwind"],
    accent: "slate",
  },
];

export const CERTIFICATIONS = [
  { name: "Cisco Networking Academy — Introduction to Networks", org: "Cisco", year: "2026", status: "in-progress" },
  { name: "EC-Council Essentials Series (Network / Ethical Hacking)", org: "EC-Council", year: "2026", status: "in-progress" },
  { name: "BSc in Information Technology", org: "Haramaya University", year: "2023 – 2027", status: "in-progress" },
  { name: "CCNA", org: "Cisco", year: "Planned", status: "planned" },
  { name: "AWS Certified Cloud Practitioner", org: "Amazon Web Services", year: "Planned", status: "planned" },
  { name: "Google Cybersecurity Certificate", org: "Google / Coursera", year: "Planned", status: "planned" },
  { name: "Meta Front-End Developer", org: "Meta / Coursera", year: "Planned", status: "planned" },
];

export const EXPERIENCE = [
  {
    role: "Independent Full-Stack Developer",
    org: "Project-based · Haramaya",
    period: "2024 — Present",
    desc: "Delivered three end-to-end web platforms for a city licensing office, the university freshman program, and a primary clinic. Handled requirements, schema, backend, frontend, and rollout.",
  },
  {
    role: "BSc Information Technology",
    org: "Haramaya University",
    period: "2023 — 2027 (expected)",
    desc: "Coursework across software engineering, databases, networks, and security. Maintaining strong academic standing while building outside coursework.",
  },
  {
    role: "Open to internships",
    org: "Software engineering · Backend · Web platforms",
    period: "2026 — 2027",
    desc: "Looking for a team where I can contribute production code, learn code review, and grow under experienced engineers.",
  },
];
