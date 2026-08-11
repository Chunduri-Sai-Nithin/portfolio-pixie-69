import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Laptop,
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  GraduationCap,
  FolderGit2,
  Sun,
  Moon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import profileAsset from "@/assets/profile.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sai Nithin Chunduri — Python Developer Portfolio" },
      {
        name: "description",
        content:
          "Portfolio of Sai Nithin Chunduri, a Computer Science student from Guntur, India with skills in Python programming and database management.",
      },
      { property: "og:title", content: "Sai Nithin Chunduri — Python Developer Portfolio" },
      {
        property: "og:description",
        content:
          "Computer Science student skilled in Python, databases, problem solving and team collaboration.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

const LINKEDIN_URL = "https://www.linkedin.com/in/sai-nithin-45b794284";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const skills = [
  { name: "Python Programming", level: "Core" },
  { name: "Database Management", level: "Core" },
  { name: "Problem Solving", level: "Strong" },
  { name: "Team Collaboration", level: "Strong" },
  { name: "Effective Communication", level: "Strong" },
  { name: "Project Management", level: "Growing" },
  { name: "Critical Thinking", level: "Strong" },
  { name: "Decision Making", level: "Strong" },
];

const education = [
  {
    title: "Bachelor of Technology, Computer Science & Engineering",
    place: "Kits Akshar Institute of Technology, Yanamadala, Guntur",
    year: "2028",
    note: "Currently pursuing",
  },
  {
    title: "Intermediate",
    place: "NRI Junior College, Chandramouli Nagar, Guntur",
    year: "March 2024",
    note: "Ranked in Top 10% of class",
  },
  {
    title: "10th Grade",
    place: "Kendriya Vidyalaya, Nallapadu, Guntur",
    year: "March 2022",
    note: "Secondary schooling",
  },
];

function Portfolio() {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof window === "undefined") return "light";
    const stored = window.localStorage.getItem("theme");
    if (stored === "light" || stored === "dark") return stored;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  });

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border/60 bg-surface/85 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <a href="#home" className="flex items-center gap-2 text-2xl font-semibold text-primary">
            <Laptop className="size-6" />
            Nithin
          </a>
          <div className="flex items-center gap-3">
            <ul className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex">
              {navLinks.map((link, i) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={
                      i === 0
                        ? "text-primary transition-colors"
                        : "transition-colors hover:text-primary"
                    }
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              className="flex size-9 items-center justify-center rounded-full border border-input bg-background text-muted-foreground transition-colors hover:text-primary"
            >
              {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
            </button>
          </div>
        </nav>
      </header>

      <main>
        <section
          id="home"
          className="relative overflow-hidden"
          style={{ background: "var(--gradient-soft)" }}
        >
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 md:grid-cols-2 md:py-24">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
                Hello
              </p>
              <h1 className="mt-4 text-5xl font-bold leading-[1.08] tracking-tight md:text-6xl">
                I&rsquo;m <span className="text-gradient">Sai Nithin Chunduri</span>
              </h1>
              <p className="mt-5 text-lg text-muted-foreground">
                Full Stack Engineer / Web Developer
              </p>
              <p className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="size-4 text-primary" /> Guntur, India 522004
              </p>
              <div className="mt-9 flex flex-wrap gap-4">
                <Button
                  asChild
                  size="lg"
                  className="rounded-lg px-8 shadow-[var(--shadow-soft)]"
                >
                  <a href="#contact">Hire Me</a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-lg border-primary px-8 text-primary hover:bg-accent"
                >
                  <a href="#education">Education</a>
                </Button>
              </div>
              <div className="mt-10 flex items-center gap-5 text-muted-foreground">
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="transition-colors hover:text-primary"
                >
                  <Linkedin className="size-5" />
                </a>
                <a
                  href="mailto:sainithin961@gmail.com"
                  aria-label="Email"
                  className="transition-colors hover:text-primary"
                >
                  <Mail className="size-5" />
                </a>
                <a
                  href="tel:+918179760216"
                  aria-label="Phone"
                  className="transition-colors hover:text-primary"
                >
                  <Phone className="size-5" />
                </a>
              </div>
            </div>

            <div className="relative mx-auto flex w-full max-w-md items-end justify-center">
              <div
                className="blob-shape animate-float absolute inset-x-4 bottom-0 top-8 opacity-70"
                style={{ background: "var(--gradient-primary)" }}
                aria-hidden="true"
              />
              <div
                className="blob-shape absolute inset-x-10 bottom-6 top-16 bg-primary-soft/60"
                aria-hidden="true"
              />
              <img
                src={profileAsset.url}
                alt="Sai Nithin Chunduri, Python developer and computer science student"
                className="relative z-10 max-h-[30rem] w-auto object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                About
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
                Driven by curiosity, built on fundamentals
              </h2>
              <p className="mt-5 text-muted-foreground">
                I&rsquo;m a driven professional with strong skills in Python programming and database
                management. I&rsquo;m recognized for effective problem-solving and time management
                abilities.
              </p>
              <p className="mt-4 text-muted-foreground">
                Prepared to leverage my expertise in a collaborative setting to drive project success
                and improve outcomes. Currently a fresher, actively learning and building.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-4">
                {[
                  { k: "B.Tech", v: "CSE 2028" },
                  { k: "Top 10%", v: "Class rank" },
                  { k: "Open", v: "To work" },
                ].map((s) => (
                  <div
                    key={s.v}
                    className="rounded-xl bg-surface p-4 text-center shadow-[var(--shadow-card)]"
                  >
                    <p className="text-2xl font-bold text-primary">{s.k}</p>
                    <p className="text-xs uppercase tracking-widest text-muted-foreground">{s.v}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center justify-between gap-3 rounded-xl border border-border bg-surface px-5 py-4 shadow-[var(--shadow-card)]"
                >
                  <span className="text-sm font-medium">{skill.name}</span>
                  <span className="rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
                    {skill.level}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="education" style={{ background: "var(--gradient-soft)" }}>
          <div className="mx-auto max-w-6xl px-6 py-20">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              Education &amp; Training
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">My journey so far</h2>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {education.map((item) => (
                <article
                  key={item.title}
                  className="group rounded-2xl border border-border bg-surface p-6 shadow-[var(--shadow-card)] transition-transform hover:-translate-y-1"
                >
                  <div
                    className="blob-shape mb-6 flex h-24 w-24 items-center justify-center opacity-90"
                    style={{ background: "var(--gradient-primary)" }}
                  >
                    <GraduationCap className="size-9 text-primary-foreground" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                    {item.year}
                  </span>
                  <h3 className="mt-2 flex items-start gap-1 text-lg font-semibold">
                    {item.title}
                    <ArrowUpRight className="mt-1 size-4 shrink-0 text-primary opacity-0 transition-opacity group-hover:opacity-100" />
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.place}</p>
                  <p className="mt-3 text-xs font-medium uppercase tracking-widest text-primary">
                    {item.note}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-6xl px-6 py-20">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                Projects
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
                Things I&rsquo;ve built
              </h2>
            </div>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noreferrer"
              className="hidden items-center gap-1 text-sm font-semibold text-primary transition-colors hover:underline sm:flex"
            >
              View all <ArrowUpRight className="size-4" />
            </a>
          </div>
          <div className="mt-10 flex flex-col items-center justify-center rounded-2xl border border-dashed border-border bg-surface px-6 py-20 text-center shadow-[var(--shadow-card)]">
            <div
              className="blob-shape flex size-16 items-center justify-center opacity-90"
              style={{ background: "var(--gradient-primary)" }}
            >
              <FolderGit2 className="size-7 text-primary-foreground" />
            </div>
            <h3 className="mt-5 text-xl font-semibold">Coming soon</h3>
            <p className="mt-2 max-w-md text-sm text-muted-foreground">
              My projects are currently in the works. Check back soon to see what I&rsquo;ve been
              building.
            </p>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                Contact
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
                Let&rsquo;s build something together
              </h2>
              <p className="mt-4 text-muted-foreground">
                Open to internships, entry-level roles and collaborative projects. Send a message and
                I&rsquo;ll get back to you soon.
              </p>
              <ul className="mt-8 space-y-4 text-sm">
                <li className="flex items-center gap-3">
                  <Mail className="size-4 text-primary" />
                  <a href="mailto:sainithin961@gmail.com" className="hover:text-primary">
                    sainithin961@gmail.com
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="size-4 text-primary" />
                  <a href="tel:+918179760216" className="hover:text-primary">
                    +91 81797 60216
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <MapPin className="size-4 text-primary" /> Guntur, India 522004
                </li>
                <li className="flex items-center gap-3">
                  <Linkedin className="size-4 text-primary" />
                  <a
                    href={LINKEDIN_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-primary"
                  >
                    linkedin.com/in/sai-nithin-45b794284
                  </a>
                </li>
              </ul>
            </div>
            <form
              className="rounded-2xl border border-border bg-surface p-6 shadow-[var(--shadow-card)]"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid gap-4">
                <input
                  required
                  placeholder="Your name"
                  className="rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary"
                />
                <input
                  required
                  type="email"
                  placeholder="Email address"
                  className="rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary"
                />
                <textarea
                  required
                  rows={5}
                  placeholder="Tell me about your project"
                  className="rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary"
                />
                <Button type="submit" size="lg" className="rounded-lg shadow-[var(--shadow-soft)]">
                  Send message
                </Button>
              </div>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-border py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 text-sm text-muted-foreground sm:flex-row">
          <p className="flex items-center gap-2 font-semibold text-primary">
            <Laptop className="size-4" /> Nithin
          </p>
          <p>&copy; {new Date().getFullYear()} Sai Nithin Chunduri. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
