import { useState, useMemo } from "react";
import {
  Menu, X, Code2, Server, Database, Wrench, Github, ExternalLink,
  Mail, Phone, Linkedin, MapPin, Award, CheckCircle, Star,
  ChevronRight, ArrowRight, Download, Layers, BookOpen, Briefcase,
  Globe, GitCommit, GitPullRequest,
} from "lucide-react";


const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const SKILLS = {
  Frontend: {
    icon: Code2,
    color: "text-blue-600",
    bg: "bg-blue-50",
    border: "border-blue-100",
    items: ["HTML5", "CSS3", "JavaScript", "React.js", "Bootstrap 5", "Ant Design"],
  },
  Backend: {
    icon: Server,
    color: "text-cyan-600",
    bg: "bg-cyan-50",
    border: "border-cyan-100",
    items: ["ASP.NET Core", "C#", "Node.js"],
  },
  Database: {
    icon: Database,
    color: "text-violet-600",
    bg: "bg-violet-50",
    border: "border-violet-100",
    items: ["SQL Server", "MySQL", "MongoDB"],
  },
  Tools: {
    icon: Wrench,
    color: "text-amber-600",
    bg: "bg-amber-50",
    border: "border-amber-100",
    items: ["Git", "GitHub", "Visual Studio", "VS Code", "Postman"],
  },
} as const;

const PROFICIENCY = [
  { skill: "React.js / JavaScript", pct: 85 },
  { skill: "ASP.NET Core / C#", pct: 80 },
  { skill: "HTML / CSS", pct: 92 },
  { skill: "MongoDB", pct: 78 },
  { skill: "Node.js", pct: 70 },
  { skill: "Git / GitHub", pct: 88 },
];

const PROJECTS = [
  {
    title: "Travel Booking System",
    description:
      "A full-featured travel booking platform with flight and hotel search, booking management, user authentication, and secure payment integration.",
    tech: ["React.js", "ASP.NET Core", "SQL Server", "Bootstrap"],
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&h=340&fit=crop&auto=format",
  },
  {
    title: "RedBus Clone",
    description:
      "A bus ticket booking system with real-time seat availability, route management, booking history, and an interactive seat selection UI.",
    tech: ["React.js", "Node.js", "MySQL", "Bootstrap"],
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&h=340&fit=crop&auto=format",
  },
  {
    title: "Vehicle Management System",
    description:
      "Enterprise fleet management solution with maintenance tracking, driver assignment workflows, fuel management, and analytics dashboards.",
    tech: ["ASP.NET Core", "C#", "SQL Server", "React.js"],
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&h=340&fit=crop&auto=format",
  },
  {
    title: "Insurance Management Portal",
    description:
      "Comprehensive insurance policy management with claims processing, agent portal, customer dashboard, and automated notification workflows.",
    tech: ["ASP.NET Core", "C#", "SQL Server", "Ant Design"],
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=340&fit=crop&auto=format",
  },
];

const EXPERIENCE = [
  {
    role: "Full Stack Development Intern",
    company: "Capsitech IT ",
    period: "Oct 2025 – Oct 2026",
    location: "Jodhpur, India",
    type: "Internship",
    points: [
      "Developed and maintained RESTful APIs using ASP.NET Core and C#",
      "Built responsive UI components and feature pages using React.js",
      "Designed and optimized SQL Server database schemas for production use",
      "Collaborated in Agile sprints with daily standups and sprint reviews",
    ],
  },

];

const CERTIFICATIONS = [
  {
    title: "Microsoft Certified: Azure Fundamentals",
    issuer: "Microsoft",
    code: "AZ-900",
    year: "2024",
    accent: "border-blue-500",
    iconColor: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    title: "Full Stack Web Development",
    issuer: "Udemy",
    code: "FSWD-2023",
    year: "2023",
    accent: "border-violet-500",
    iconColor: "text-violet-600",
    bg: "bg-violet-50",
  },
  {
    title: "React.js Advanced Concepts",
    issuer: "Coursera",
    code: "REACT-ADV",
    year: "2023",
    accent: "border-cyan-500",
    iconColor: "text-cyan-600",
    bg: "bg-cyan-50",
  },
  {
    title: "SQL Server Administration",
    issuer: "Microsoft Learn",
    code: "SQL-ADM",
    year: "2024",
    accent: "border-amber-500",
    iconColor: "text-amber-600",
    bg: "bg-amber-50",
  },
];

const GITHUB_STATS = [
  { label: "Repositories", value: "24", icon: Layers },
  { label: "Total Stars", value: "48", icon: Star },
  { label: "Commits (2024)", value: "342", icon: GitCommit },
  { label: "PRs Merged", value: "18", icon: GitPullRequest },
];

const TESTIMONIALS = [
  {
    name: "Priya Sharma",
    role: "Senior Developer · Tech Solutions",
    initials: "PS",
    rating: 5,
    text: "Ramesh is an exceptional developer with strong problem-solving skills and clean coding practices. He consistently delivered quality work ahead of deadlines.",
  },
  {
    name: "Rajesh Kumar",
    role: "Project Manager · Digital Innovations",
    initials: "RK",
    rating: 5,
    text: "Delivered every project on time with excellent attention to detail. His technical depth and professional demeanor make him a standout candidate for any team.",
  },
  {
    name: "Anita Patel",
    role: "UI/UX Designer · Freelance",
    initials: "AP",
    rating: 5,
    text: "Working with Ramesh was seamless. His understanding of both frontend and backend systems bridged the gap between design and implementation perfectly.",
  },
];

// ─── Helpers ─────────────────────────────────────────────────────────────────

function SectionLabel({ children }: { children: string }) {
  return (
    <div className="flex items-center justify-center gap-3 mb-4">
      <div className="h-px w-8 bg-[#2563EB]" />
      <span className="text-[#2563EB] text-xs font-semibold tracking-widest uppercase">{children}</span>
      <div className="h-px w-8 bg-[#2563EB]" />
    </div>
  );
}

function SectionLabelLeft({ children }: { children: string }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <div className="h-px w-8 bg-[#2563EB]" />
      <span className="text-[#2563EB] text-xs font-semibold tracking-widest uppercase">{children}</span>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const contributionGrid = useMemo(() => {
    return Array.from({ length: 52 * 7 }, (_, i) => {
      const seed = (i * 2654435761) >>> 0;
      const rand = (seed % 100) / 100;
      if (rand > 0.72) return "bg-[#06B6D4]";
      if (rand > 0.55) return "bg-[#2563EB]/70";
      if (rand > 0.42) return "bg-[#2563EB]/40";
      if (rand > 0.32) return "bg-[#2563EB]/20";
      return "bg-white/[0.06]";
    });
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* ── Navbar ──────────────────────────────────────────────────────────── */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0F172A]/96 backdrop-blur-md border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="#" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#2563EB] to-[#06B6D4] flex items-center justify-center font-bold text-white text-sm tracking-tight flex-shrink-0">
                RS
              </div>
              <span className="text-white font-semibold text-lg tracking-tight hidden sm:block">
                Ramesh <span className="text-[#06B6D4]">Suthar</span>
              </span>
            </a>

            <nav className="hidden md:flex items-center gap-0.5">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/[0.08] rounded-md transition-all duration-150"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
                className="ml-3 px-4 py-2 text-sm font-semibold bg-[#2563EB] text-white rounded-lg hover:bg-[#1D4ED8] transition-all duration-150"
              >
                Hire Me
              </a>
            </nav>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded-md text-slate-300 hover:text-white hover:bg-white/[0.08] transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="md:hidden bg-[#0F172A] border-t border-white/[0.08] px-4 py-3 flex flex-col gap-0.5">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="px-4 py-2.5 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/[0.08] rounded-md transition-all"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="mt-2 px-4 py-2.5 text-sm font-semibold bg-[#2563EB] text-white rounded-lg text-center hover:bg-[#1D4ED8] transition-all"
            >
              Hire Me
            </a>
          </div>
        )}
      </header>

      {/* ── Hero ────────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen bg-[#0F172A] flex items-center overflow-hidden pt-16">
        {/* Background glows */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-48 -right-48 w-[560px] h-[560px] rounded-full bg-[#2563EB]/[0.12] blur-3xl" />
          <div className="absolute bottom-0 -left-20 w-[400px] h-[400px] rounded-full bg-[#06B6D4]/[0.07] blur-3xl" />
          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

            {/* Left: Copy */}
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#06B6D4]/[0.12] border border-[#06B6D4]/30 mb-7">
                <span className="w-1.5 h-1.5 rounded-full bg-[#06B6D4] animate-pulse" />
                <span className="text-[#06B6D4] text-xs font-semibold tracking-widest uppercase">
                  Available for Opportunities
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white leading-[1.08] tracking-tight mb-6">
                Full Stack Developer{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#06B6D4]">
                  Building Modern
                </span>{" "}
                Web Applications
              </h1>

              <p className="text-slate-400 text-lg leading-relaxed mb-9 max-w-lg">
                Hi, I'm <span className="text-white font-semibold">Ramesh Nagal</span> — a passionate Full Stack
                Developer with expertise in React.js, ASP.NET Core, and SQL Server. I build performant, scalable,
                and user-centric web applications.
              </p>

              <div className="flex flex-wrap gap-3 mb-11">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#2563EB] text-white font-semibold rounded-lg hover:bg-[#1D4ED8] transition-all duration-200 shadow-lg shadow-blue-900/40"
                >
                  View Projects
                  <ArrowRight size={16} />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 text-white font-semibold rounded-lg border border-white/20 hover:bg-white/[0.08] hover:border-white/30 transition-all duration-200"
                >
                  Contact Me
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 px-6 py-3 text-slate-400 font-semibold rounded-lg border border-white/[0.1] hover:text-white hover:border-white/20 transition-all duration-200"
                >
                  <Download size={15} />
                  Resume
                </a>
              </div>

              <div className="flex flex-wrap gap-10">
                {[
                  { v: "4+", l: "Projects Built" },
                  { v: "2+", l: "Years Learning" },
                  { v: "24", l: "GitHub Repos" },
                ].map((s) => (
                  <div key={s.l}>
                    <div className="text-2xl font-bold text-white">{s.v}</div>
                    <div className="text-slate-500 text-sm mt-0.5">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Profile Image */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#2563EB] to-[#06B6D4] blur-2xl opacity-[0.18] scale-110" />
                <div className="relative w-72 h-80 sm:w-80 sm:h-96 lg:w-[380px] lg:h-[460px] rounded-2xl overflow-hidden border border-white/[0.1] bg-[#1E293B]">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=420&h=520&fit=crop&auto=format"
                    alt="Ramesh Nagal — Full Stack Developer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#0F172A]/90 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-[#0F172A]/70 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/[0.1]">
                      <div className="text-white font-semibold text-sm">Ramesh Nagal</div>
                      <div className="text-[#06B6D4] text-xs mt-0.5">Full Stack Developer</div>
                    </div>
                  </div>
                </div>

                {/* Floating badges */}
                <div className="absolute -left-7 top-14 bg-[#1E293B] border border-white/[0.1] rounded-xl px-3.5 py-2.5 shadow-2xl">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-blue-600/20 flex items-center justify-center">
                      <Code2 size={13} className="text-blue-400" />
                    </div>
                    <div>
                      <div className="text-white text-xs font-semibold">React.js</div>
                      <div className="text-slate-500 text-[10px]">Frontend</div>
                    </div>
                  </div>
                </div>

                <div className="absolute -right-7 top-1/2 -translate-y-1/2 bg-[#1E293B] border border-white/[0.1] rounded-xl px-3.5 py-2.5 shadow-2xl">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-cyan-600/20 flex items-center justify-center">
                      <Server size={13} className="text-cyan-400" />
                    </div>
                    <div>
                      <div className="text-white text-xs font-semibold">ASP.NET</div>
                      <div className="text-slate-500 text-[10px]">Backend</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-white to-transparent pointer-events-none" />
      </section>

      {/* ── About ───────────────────────────────────────────────────────────── */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Left */}
            <div>
              <SectionLabelLeft>About Me</SectionLabelLeft>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-6 leading-tight">
                Passionate Developer,{" "}
                <span className="text-[#2563EB]">Dedicated Learner</span>
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed text-[0.95rem]">
                <p>
                  I'm a Full Stack Developer with a strong foundation in building modern web applications using
                  React.js on the frontend and ASP.NET Core / Node.js on the backend. My work spans from crafting
                  pixel-perfect UI components to designing efficient, normalized database schemas.
                </p>
                <p>
                  I graduated with a Bachelor's degree in Computer Science Engineering and have since refined my
                  skills through hands-on internships, full-scale personal projects, and continuous self-learning.
                  I'm driven by clean code, thoughtful architecture, and shipping products people enjoy using.
                </p>
              </div>

              <div className="mt-8 p-5 rounded-xl border border-[#2563EB]/20 bg-blue-50/60">
                <div className="flex items-start gap-2 mb-2">
                  <ChevronRight size={15} className="text-[#2563EB] mt-0.5 flex-shrink-0" />
                  <span className="text-sm font-semibold text-[#0F172A]">Career Objective</span>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed pl-5">
                  To contribute to innovative software teams where I can apply my full stack expertise, grow
                  as an engineer, and help deliver high-quality digital products at scale.
                </p>
              </div>

              <div className="mt-7">
                <p className="text-sm font-semibold text-[#0F172A] mb-3">Personal Strengths</p>
                <div className="flex flex-wrap gap-2">
                  {["Problem Solving", "Team Collaboration", "Fast Learner", "Attention to Detail", "Clean Code", "Deadline Driven"].map((s) => (
                    <span
                      key={s}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 text-slate-700 text-xs font-medium border border-slate-200"
                    >
                      <CheckCircle size={11} className="text-[#2563EB]" />
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right */}
            <div className="space-y-4">
              {/* Education */}
              <div className="p-6 rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <BookOpen size={21} className="text-[#2563EB]" />
                  </div>
                  <div>
                    <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-1">Education</div>
                    <div className="text-[#0F172A] font-bold text-[0.95rem]">BCA — Bachelor of Computer Applications</div>
                    <div className="text-slate-500 text-sm mt-0.5">Parul University, Vadodara      (India)</div>
                    <div className="text-slate-400 text-xs mt-1">2024 – 2027 &nbsp;·&nbsp; Semester Four: 9.0/ 10</div>
                  </div>
                  {/* CGPA: 8.2 / 10 */}
                </div>
              </div>

              {/* Info grid */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Name", value: "Ramesh Nagal" },
                  { label: "Location", value: "Jodhpur, India" },
                  { label: "Email", value: "rameshnagal87@gmail.com" },
                  { label: "Status", value: "Open to Work", pulse: true },
                ].map((item) => (
                  <div key={item.label} className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                    <div className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider mb-1">{item.label}</div>
                    <div className="text-sm font-semibold text-[#0F172A] truncate">
                      {item.pulse ? (
                        <span className="inline-flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse flex-shrink-0" />
                          {item.value}
                        </span>
                      ) : item.value}
                    </div>
                  </div>
                ))}
              </div>


              <div className="p-5 rounded-xl border border-slate-200 bg-white shadow-sm">
                <div className="text-sm font-bold text-[#0F172A] mb-4">Languages</div>
                <div className="space-y-3">
                  {[
                    { lang: "English", level: "Professional", pct: 90 },
                    { lang: "Hindi", level: "Native", pct: 100 },
                    { lang: "Gujrati", level: "Conversational", pct: 60 },
                    { lang: "Telugu", level: "Understanding", pct: 20 }
                  ].map((l) => (
                    <div key={l.lang} className="flex items-center gap-3">
                      <span className="text-sm text-slate-600 w-20 flex-shrink-0">{l.lang}</span>
                      <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-[#2563EB] to-[#06B6D4] rounded-full"
                          style={{ width: `${l.pct}%` }}
                        />
                      </div>
                      <span className="text-xs text-slate-400 w-28 text-right">{l.level}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Skills ──────────────────────────────────────────────────────────── */}
      <section id="skills" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <SectionLabel>Technical Skills</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-4">My Technology Stack</h2>
            <p className="text-slate-500 max-w-lg mx-auto text-[0.95rem]">
              Technologies I've worked with across frontend, backend, databases, and developer tooling.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
            {(Object.entries(SKILLS) as [string, typeof SKILLS[keyof typeof SKILLS]][]).map(([category, data]) => {
              const Icon = data.icon;
              return (
                <div
                  key={category}
                  className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                >
                  <div className={`w-11 h-11 rounded-xl ${data.bg} border ${data.border} flex items-center justify-center mb-4`}>
                    <Icon size={20} className={data.color} />
                  </div>
                  <h3 className="text-sm font-bold text-[#0F172A] mb-3">{category}</h3>
                  <div className="flex flex-wrap gap-1.5">
                    {data.items.map((skill) => (
                      <span
                        key={skill}
                        className={`px-2.5 py-1 rounded-md text-xs font-medium ${data.bg} ${data.color} border ${data.border}`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Proficiency */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
            <h3 className="text-sm font-bold text-[#0F172A] mb-6">Core Proficiency</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4">
              {PROFICIENCY.map((item) => (
                <div key={item.skill}>
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-sm font-medium text-slate-700">{item.skill}</span>
                    <span className="text-xs font-semibold text-slate-400">{item.pct}%</span>
                  </div>
                  <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#2563EB] to-[#06B6D4] rounded-full"
                      style={{ width: `${item.pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Projects ────────────────────────────────────────────────────────── */}
      <section id="projects" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <SectionLabel>Featured Work</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-4">Featured Projects</h2>
            <p className="text-slate-500 max-w-lg mx-auto text-[0.95rem]">
              A selection of full stack applications I've designed and built end-to-end.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {PROJECTS.map((project) => (
              <div
                key={project.title}
                className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative h-52 overflow-hidden bg-slate-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((t) => (
                        <span key={t} className="px-2 py-0.5 rounded-md bg-white/20 backdrop-blur-sm text-white text-xs font-medium border border-white/20">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-base font-bold text-[#0F172A] mb-2 group-hover:text-[#2563EB] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tech.map((t) => (
                      <span key={t} className="px-2.5 py-1 rounded-md bg-blue-50 text-[#2563EB] text-xs font-medium border border-blue-100">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <a
                      href="#"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg border border-slate-200 text-slate-700 text-sm font-semibold hover:border-[#2563EB] hover:text-[#2563EB] hover:bg-blue-50/50 transition-all duration-200"
                    >
                      <Github size={14} />
                      GitHub
                    </a>
                    <a
                      href="#"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg bg-[#2563EB] text-white text-sm font-semibold hover:bg-[#1D4ED8] transition-all duration-200"
                    >
                      <ExternalLink size={14} />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-[#2563EB]/40 text-[#2563EB] font-semibold text-sm hover:bg-blue-50 hover:border-[#2563EB] transition-all duration-200"
            >
              View All Projects on GitHub
              <Github size={15} />
            </a>
          </div>
        </div>
      </section>

      {/* ── Experience ──────────────────────────────────────────────────────── */}
      <section id="experience" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <SectionLabel>Work History</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-4">Experience</h2>
            <p className="text-slate-500 max-w-lg mx-auto text-[0.95rem]">
              Internships and training engagements that have shaped my engineering mindset.
            </p>
          </div>

          <div className="max-w-3xl mx-auto relative">
            <div className="absolute left-6 top-6 bottom-6 w-px bg-slate-200" />
            <div className="space-y-7">
              {EXPERIENCE.map((exp, i) => (
                <div key={i} className="relative flex gap-7">
                  <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full bg-white border-2 border-[#2563EB] flex items-center justify-center shadow-sm">
                    <Briefcase size={17} className="text-[#2563EB]" />
                  </div>
                  <div className="flex-1 bg-white rounded-2xl border border-slate-200 shadow-sm p-6 hover:shadow-md transition-shadow">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                      <h3 className="text-base font-bold text-[#0F172A]">{exp.role}</h3>
                      <span className="px-2.5 py-0.5 rounded-full bg-blue-50 text-[#2563EB] text-xs font-semibold border border-blue-100">
                        {exp.type}
                      </span>
                    </div>
                    <div className="flex flex-wrap items-center gap-2 text-sm text-slate-500 mb-4">
                      <span className="font-semibold text-slate-700">{exp.company}</span>
                      <span className="text-slate-300">·</span>
                      <span>{exp.period}</span>
                      <span className="text-slate-300">·</span>
                      <span className="inline-flex items-center gap-1">
                        <MapPin size={11} />
                        {exp.location}
                      </span>
                    </div>
                    <ul className="space-y-1.5">
                      {exp.points.map((p, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-slate-600">
                          <ChevronRight size={13} className="text-[#2563EB] mt-0.5 flex-shrink-0" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Certifications ──────────────────────────────────────────────────── */}
      <section id="certifications" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <SectionLabel>Credentials</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-4">Certifications</h2>
            <p className="text-slate-500 max-w-lg mx-auto text-[0.95rem]">
              Professional certifications and training I've completed to strengthen my engineering skill set.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {CERTIFICATIONS.map((cert) => (
              <div
                key={cert.title}
                className={`bg-white rounded-2xl border-2 ${cert.accent} p-6 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200`}
              >
                <div className={`w-11 h-11 rounded-xl ${cert.bg} flex items-center justify-center mb-4`}>
                  <Award size={21} className={cert.iconColor} />
                </div>
                <h3 className="text-sm font-bold text-[#0F172A] mb-1.5 leading-snug">{cert.title}</h3>
                <p className="text-slate-500 text-xs mb-4">{cert.issuer}</p>
                <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                  <span className="text-xs font-mono text-slate-400">{cert.code}</span>
                  <span className={`text-xs font-bold ${cert.iconColor}`}>{cert.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GitHub Stats ────────────────────────────────────────────────────── */}
      <section id="github" className="py-24 bg-[#0F172A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#06B6D4]" />
              <span className="text-[#06B6D4] text-xs font-semibold tracking-widest uppercase">Open Source Activity</span>
              <div className="h-px w-8 bg-[#06B6D4]" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">GitHub Statistics</h2>
            <p className="text-slate-400 max-w-lg mx-auto text-[0.95rem]">
              Consistent contributions and active open source engagement across personal and collaborative projects.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {GITHUB_STATS.map(({ label, value, icon: Icon }) => (
              <div
                key={label}
                className="bg-white/[0.05] border border-white/[0.08] rounded-2xl p-6 text-center hover:bg-white/[0.08] hover:border-white/[0.14] transition-all duration-200"
              >
                <div className="w-11 h-11 rounded-xl bg-[#2563EB]/[0.18] flex items-center justify-center mx-auto mb-3">
                  <Icon size={19} className="text-[#06B6D4]" />
                </div>
                <div className="text-3xl font-bold text-white mb-1">{value}</div>
                <div className="text-slate-400 text-sm">{label}</div>
              </div>
            ))}
          </div>

          {/* Contribution graph */}
          <div className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-6 sm:p-8">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div>
                <div className="text-white font-semibold mb-1">Contribution Graph — 2024</div>
                <div className="text-slate-400 text-sm">342 contributions in the last year</div>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-slate-400">
                <span>Less</span>
                {["bg-white/[0.06]", "bg-[#2563EB]/20", "bg-[#2563EB]/45", "bg-[#2563EB]/75", "bg-[#06B6D4]"].map((c, i) => (
                  <div key={i} className={`w-3 h-3 rounded-sm ${c}`} />
                ))}
                <span>More</span>
              </div>
            </div>

            <div className="overflow-x-auto">
              <div
                className="grid gap-[3px]"
                style={{ gridTemplateColumns: "repeat(52, minmax(0, 1fr))", minWidth: "600px" }}
              >
                {contributionGrid.map((cls, i) => (
                  <div
                    key={i}
                    className={`aspect-square rounded-[2px] ${cls} hover:ring-1 hover:ring-white/30 cursor-default`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-white/20 text-white font-semibold text-sm hover:bg-white/[0.08] hover:border-white/30 transition-all duration-200"
            >
              <Github size={15} />
              View GitHub Profile
            </a>
          </div>
        </div>
      </section>

      {/* ── Testimonials ────────────────────────────────────────────────────── */}
      <section id="testimonials" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <SectionLabel>Testimonials</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-4">What People Say</h2>
            <p className="text-slate-500 max-w-lg mx-auto text-[0.95rem]">
              Feedback from colleagues, mentors, and collaborators I've had the pleasure of working with.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.name}
                className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
              >
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={13} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 italic">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#2563EB] to-[#06B6D4] flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[#0F172A]">{t.name}</div>
                    <div className="text-xs text-slate-400 mt-0.5">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section id="contact" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <SectionLabel>Get In Touch</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-4">Let's Work Together</h2>
            <p className="text-slate-500 max-w-lg mx-auto text-[0.95rem]">
              Open to full-time roles, freelance projects, and collaboration opportunities. Let's connect.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Info panel */}
            <div className="lg:col-span-2 flex flex-col gap-4">
              <div className="bg-[#0F172A] rounded-2xl p-6 text-white flex-1">
                <div className="text-base font-bold mb-0.5">Ramesh Nagal</div>
                <div className="text-[#06B6D4] text-sm mb-6">Full Stack Developer · Available for Work</div>
                <div className="space-y-4">
                  {[
                    { icon: Mail, label: "Email", value: "rameshnagal87@gmail.com" },
                    { icon: Phone, label: "Phone", value: "+91 8769732901" },
                    { icon: MapPin, label: "Location", value: "Jodhpur, India" },
                  ].map(({ icon: Icon, label, value }) => (
                    <div key={label} className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-white/[0.08] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Icon size={13} className="text-[#06B6D4]" />
                      </div>
                      <div>
                        <div className="text-slate-400 text-[11px] mb-0.5">{label}</div>
                        <div className="text-white text-sm">{value}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-5 border-t border-white/[0.08]">
                  <div className="text-xs text-slate-400 mb-3">Find me on</div>
                  <div className="flex gap-2.5">
                    {[
                      { icon: Linkedin, label: "LinkedIn" },
                      { icon: Github, label: "GitHub" },
                      { icon: Globe, label: "Portfolio" },
                    ].map(({ icon: Icon, label }) => (
                      <a
                        key={label}
                        href="#"
                        aria-label={label}
                        className="w-9 h-9 rounded-lg bg-white/[0.08] border border-white/[0.08] flex items-center justify-center hover:bg-[#2563EB] hover:border-[#2563EB] transition-all duration-200"
                      >
                        <Icon size={14} className="text-white" />
                      </a>
                    ))}

                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-slate-200 p-4 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0" />
                <span className="text-sm text-slate-600">
                  Usually responds within <strong className="text-[#0F172A]">24 hours</strong>
                </span>
              </div>
            </div>


            <div className="lg:col-span-3 bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
              {submitted ? (
                <div className="h-full min-h-64 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle size={28} className="text-emerald-600" />
                    </div>
                    <div className="text-[#0F172A] font-bold text-lg mb-2">Message Sent!</div>
                    <div className="text-slate-500 text-sm">I'll get back to you as soon as possible.</div>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-[#0F172A] mb-1.5">Full Name</label>
                      <input
                        type="text"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="John Doe"
                        required
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm text-[#0F172A] placeholder-slate-400 bg-white focus:outline-none focus:ring-2 focus:ring-[#2563EB]/25 focus:border-[#2563EB] transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#0F172A] mb-1.5">Email Address</label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="john@company.com"
                        required
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm text-[#0F172A] placeholder-slate-400 bg-white focus:outline-none focus:ring-2 focus:ring-[#2563EB]/25 focus:border-[#2563EB] transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#0F172A] mb-1.5">Subject</label>
                    <input
                      type="text"
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      placeholder="Job Opportunity / Project Collaboration"
                      required
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm text-[#0F172A] placeholder-slate-400 bg-white focus:outline-none focus:ring-2 focus:ring-[#2563EB]/25 focus:border-[#2563EB] transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#0F172A] mb-1.5">Message</label>
                    <textarea
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell me about your project or opportunity..."
                      rows={5}
                      required
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm text-[#0F172A] placeholder-slate-400 bg-white focus:outline-none focus:ring-2 focus:ring-[#2563EB]/25 focus:border-[#2563EB] transition-all resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#2563EB] text-white font-semibold rounded-lg hover:bg-[#1D4ED8] transition-all duration-200 shadow-lg shadow-blue-100"
                  >
                    Send Message
                    <ArrowRight size={15} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ──────────────────────────────────────────────────────────── */}
      <footer className="bg-[#0F172A] border-t border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#2563EB] to-[#06B6D4] flex items-center justify-center font-bold text-white text-sm flex-shrink-0">
                  RN
                </div>
                <span className="text-white font-semibold text-lg tracking-tight">
                  Ramesh <span className="text-[#06B6D4]">Nagal</span>
                </span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
                Full Stack Developer building modern, scalable web applications with clean code and great user experiences.
              </p>
            </div>

            <div>
              <div className="text-white font-semibold text-sm mb-4">Quick Links</div>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4">
                {["About", "Skills", "Projects", "Experience", "Certifications", "Contact"].map((l) => (
                  <a
                    key={l}
                    href={`#${l.toLowerCase()}`}
                    className="text-slate-400 text-sm hover:text-[#06B6D4] transition-colors"
                  >
                    {l}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <div className="text-white font-semibold text-sm mb-4">Contact</div>
              <div className="space-y-2.5">
                <a href="mailto:ramesh.nagal@email.com" className="flex items-center gap-2 text-slate-400 text-sm hover:text-white transition-colors">
                  <Mail size={13} className="text-[#06B6D4] flex-shrink-0" />
                  ramesh.nagal@email.com
                </a>
                <a href="#" className="flex items-center gap-2 text-slate-400 text-sm hover:text-white transition-colors">
                  <Linkedin size={13} className="text-[#06B6D4] flex-shrink-0" />
                  linkedin.com/in/rameshnagal
                </a>
                <a href="#" className="flex items-center gap-2 text-slate-400 text-sm hover:text-white transition-colors">
                  <Github size={13} className="text-[#06B6D4] flex-shrink-0" />
                  github.com/rameshnagal
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/[0.08] pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-slate-500 text-sm">© 2024 Ramesh Nagal. All rights reserved.</p>
            <p className="text-slate-500 text-sm">
              Designed & Built by{" "}
              <span className="text-[#06B6D4] font-medium">Ramesh Nagal</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
