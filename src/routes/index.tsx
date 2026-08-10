import { createFileRoute } from "@tanstack/react-router";
import {
  Laptop,
  Github,
  Linkedin,
  Twitter,
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import profileAsset from "@/assets/profile.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Baizid MD Ashadzzaman — Developer & Engineer Portfolio" },
      {
        name: "description",
        content:
          "Portfolio of Baizid MD Ashadzzaman, a developer, programmer and engineer building fast, modern web experiences.",
      },
      { property: "og:title", content: "Baizid MD Ashadzzaman — Developer Portfolio" },
      {
        property: "og:description",
        content:
          "Developer, programmer and engineer crafting fast, modern and accessible web products.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Project", href: "#project" },
  { label: "Contact", href: "#contact" },
];

const skills = [
  { name: "React & TypeScript", level: "Advanced" },
  { name: "Node.js & APIs", level: "Advanced" },
  { name: "UI / UX Design", level: "Intermediate" },
  { name: "Python & Automation", level: "Intermediate" },
];

const projects = [
  {
    title: "Nova Dashboard",
    tag: "Web App",
    description:
      "Realtime analytics dashboard with role-based access, charts and a lightning-fast data layer.",
  },
  {
    title: "Kettle Commerce",
    tag: "E-commerce",
    description:
      "Headless storefront with instant search, one-tap checkout and a custom CMS for the team.",
  },
  {
    title: "Orbit Scheduler",
    tag: "Product",
    description:
      "Calendar-first scheduling tool with timezone-aware booking links and email automation.",
  },
];

function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border/60 bg-surface/85 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <a href="#home" className="flex items-center gap-2 text-2xl font-semibold text-primary">
            <Laptop className="size-6" />
            Zaman
          </a>
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
                I&rsquo;m <span className="text-gradient">Baizid MD Ashadzzaman</span>
              </h1>
              <p className="mt-5 text-lg text-muted-foreground">
                Developer / Programmer / Engineer
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
                  <a href="#project">Portfolio</a>
                </Button>
              </div>
              <div className="mt-10 flex items-center gap-5 text-muted-foreground">
                <a href="#contact" aria-label="GitHub" className="transition-colors hover:text-primary">
                  <Github className="size-5" />
                </a>
                <a href="#contact" aria-label="LinkedIn" className="transition-colors hover:text-primary">
                  <Linkedin className="size-5" />
                </a>
                <a href="#contact" aria-label="Twitter" className="transition-colors hover:text-primary">
                  <Twitter className="size-5" />
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
                alt="Baizid MD Ashadzzaman, developer and engineer"
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
                Building products that feel effortless
              </h2>
              <p className="mt-5 text-muted-foreground">
                I&rsquo;m a full-stack developer with a designer&rsquo;s eye. I turn rough ideas into
                polished, production-ready web apps — clean architecture on the inside, calm and
                confident interfaces on the outside.
              </p>
              <p className="mt-4 text-muted-foreground">
                Over the past few years I&rsquo;ve shipped dashboards, storefronts and internal tools
                for startups, focusing on performance, accessibility and details that last.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-4">
                {[
                  { k: "4+", v: "Years" },
                  { k: "30+", v: "Projects" },
                  { k: "18", v: "Clients" },
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
            <div className="space-y-4">
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center justify-between rounded-xl border border-border bg-surface px-5 py-4 shadow-[var(--shadow-card)]"
                >
                  <span className="font-medium">{skill.name}</span>
                  <span className="rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
                    {skill.level}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="project" style={{ background: "var(--gradient-soft)" }}>
          <div className="mx-auto max-w-6xl px-6 py-20">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Project</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">Selected work</h2>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {projects.map((project) => (
                <article
                  key={project.title}
                  className="group rounded-2xl border border-border bg-surface p-6 shadow-[var(--shadow-card)] transition-transform hover:-translate-y-1"
                >
                  <div
                    className="blob-shape mb-6 h-32 w-full opacity-80"
                    style={{ background: "var(--gradient-primary)" }}
                    aria-hidden="true"
                  />
                  <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                    {project.tag}
                  </span>
                  <h3 className="mt-2 flex items-center gap-1 text-xl font-semibold">
                    {project.title}
                    <ArrowUpRight className="size-4 text-primary opacity-0 transition-opacity group-hover:opacity-100" />
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground">{project.description}</p>
                </article>
              ))}
            </div>
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
                Available for freelance work and full-time roles. Tell me about your project and
                I&rsquo;ll reply within a day.
              </p>
              <ul className="mt-8 space-y-4 text-sm">
                <li className="flex items-center gap-3">
                  <Mail className="size-4 text-primary" /> hello@zaman.dev
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="size-4 text-primary" /> +91 98765 43210
                </li>
                <li className="flex items-center gap-3">
                  <MapPin className="size-4 text-primary" /> Remote / Worldwide
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
            <Laptop className="size-4" /> Zaman
          </p>
          <p>&copy; {new Date().getFullYear()} Baizid MD Ashadzzaman. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
