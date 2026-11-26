import { createFileRoute } from "@tanstack/react-router";
import { Download, ExternalLink, Eye, EyeOff, FileText, Menu, X } from "lucide-react";
import { useState } from "react";
import portraitUrl from "@/assets/madhumitha_portrait.jpg";

const portrait = { url: portraitUrl };
const RESUME_PDF_PATH = "/resume.pdf";
const RESUME_DOWNLOAD_NAME = "Madhumitha_Resume.pdf";
const NAV_SECTIONS = ["work", "skills", "experience", "education", "resume", "contact"] as const;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Madhumitha M — Data Scientist & AI Engineer" },
      { name: "description", content: "Data scientist building ML models, SQL analytics and RAG-powered AI agents. Based in Coimbatore, India." },
      { property: "og:title", content: "Madhumitha M — Data Scientist & AI Engineer" },
      { property: "og:description", content: "ML models, SQL analytics and RAG-powered AI agents." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const GITHUB = "https://github.com/madhumurugan09";
const LINKEDIN = "https://linkedin.com/in/madhumitha-m";
const EMAIL = "madhumurugan29@gmail.com";

const projects = [
  { n: "01", title: "Automotive RFQ Automation Agent", desc: "A RAG-powered agent that drafts automotive RFQs automatically — Jina CLIP for semantic image retrieval, Llama 3 via Groq for drafting, pgvector for storage, with PDF/DOCX export.", tech: ["Python", "FastAPI", "LangGraph", "LangChain", "RAG", "JinaCLIP", "pgvector", "Groq", "Docker"] },
  { n: "02", title: "Customer Churn Prediction", desc: "Predicts which customers are likely to leave using historical usage data. Feature engineering and EDA surfaced key churn drivers; models compared on accuracy, precision, recall and F1.", tech: ["Python", "Pandas", "NumPy", "Scikit-learn", "Seaborn"] },
  { n: "03", title: "Sales Data Analysis", desc: "Uncovered revenue trends, top products and regional performance with SQL joins, subqueries and aggregates — then cleaned and visualised the results for business decisions.", tech: ["SQL", "MySQL", "Python", "Pandas", "Matplotlib"] },
  { n: "04", title: "Diabetes Risk Prediction App", desc: "An interactive web app predicting diabetes risk from glucose, BMI and age, backed by a tuned classifier trained on a medical dataset.", tech: ["Python", "Scikit-learn", "Streamlit"] },
];

const skills = [
  { group: "Programming & Analysis", items: ["Python", "SQL", "NumPy", "Pandas", "EDA", "Data Cleaning", "Feature Engineering", "Matplotlib", "Seaborn", "Streamlit"] },
  { group: "Machine & Deep Learning", items: ["Scikit-learn", "XGBoost", "Regression", "Classification", "Random Forest", "SVM", "KNN", "K-Means", "PCA", "TensorFlow", "Keras", "PyTorch"] },
  { group: "Generative AI", items: ["LangChain", "LangGraph", "RAG", "pgvector", "Groq / Llama 3", "FastAPI", "Docker"] },
  { group: "Statistics", items: ["Descriptive Stats", "Probability", "t-test", "z-test", "Chi-square", "ANOVA", "Correlation"] },
  { group: "Databases & Tools", items: ["MySQL", "Joins & Subqueries", "GROUP BY / HAVING", "Jupyter", "VS Code", "Git", "GitHub"] },
];

const experience = [
  { role: "Data Scientist Intern", org: "Pumo Technovation", when: "May 2026 — Dec 2026", desc: "Data cleaning, exploratory analysis and machine learning model building with Python and SQL." },
  { role: "Full Stack Web Development Intern", org: "Net Tel Solution, Coimbatore", when: "May 2024", desc: "Helped build responsive web applications across frontend and backend." },
];

function Section({ id, label, title, children }: { id: string; label: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="border-t border-border py-20 md:py-28">
      <div className="grid gap-10 md:grid-cols-[200px_1fr]">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">{label}</p>
        <div>
          <h2 className="mb-12 text-4xl md:text-5xl">{title}</h2>
          {children}
        </div>
      </div>
    </section>
  );
}

function Index() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showPreview, setShowPreview] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-10 border-b border-border bg-background/85 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="font-serif text-xl italic">Madhumitha M.</a>
          <div className="hidden gap-8 text-sm text-muted-foreground md:flex">
            {NAV_SECTIONS.map((s) => (
              <a key={s} href={`#${s}`} className="capitalize transition-colors hover:text-primary">{s}</a>
            ))}
          </div>
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
            className="inline-flex items-center justify-center rounded-sm p-2 text-muted-foreground transition-colors hover:text-primary md:hidden"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
        {mobileMenuOpen && (
          <div className="border-t border-border bg-background px-6 py-4 md:hidden">
            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              {NAV_SECTIONS.map((s) => (
                <a
                  key={s}
                  href={`#${s}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-1 capitalize transition-colors hover:text-primary"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      <main id="top" className="mx-auto max-w-6xl px-6">
        <section className="grid items-center gap-12 py-16 md:grid-cols-[1.3fr_1fr] md:py-24">
          <div className="fade-up">
            <p className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Coimbatore, India · Open to roles</p>
            <h1 className="text-5xl leading-[1.05] md:text-7xl">
              Turning data into <em className="text-primary">decisions</em> & AI into tools.
            </h1>
            <p className="mt-8 max-w-xl text-lg text-muted-foreground">
              I'm Madhumitha — a data scientist and AI engineer working across machine learning, SQL analytics and RAG-powered agents for automotive and enterprise problems.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href="#work" className="rounded-sm bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90">See my work</a>
              <a href={`mailto:${EMAIL}`} className="rounded-sm border border-foreground px-6 py-3 text-sm font-medium transition-colors hover:bg-foreground hover:text-background">Get in touch</a>
            </div>
          </div>
          <div className="fade-up flex items-center justify-center">
            <div className="w-full max-w-[280px] pr-3 pb-3 sm:max-w-[320px] sm:pr-4 sm:pb-4 md:max-w-sm">
              <div className="relative aspect-[3/4] w-full">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 translate-x-3 translate-y-3 rounded-sm bg-accent sm:translate-x-4 sm:translate-y-4"
                />
                <img
                  src={portrait.url}
                  alt="Portrait of Madhumitha M"
                  className="relative block h-full w-full rounded-sm object-cover object-top"
                />
              </div>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-2 gap-6 border-t border-border py-10 md:grid-cols-4">
          {[["4+", "ML & AI projects"], ["2", "Internships"], ["8.06", "B.Sc IT CGPA"], ["30+", "Tools & libraries"]].map(([k, v]) => (
            <div key={v}><p className="font-serif text-4xl text-primary">{k}</p><p className="mt-1 text-sm text-muted-foreground">{v}</p></div>
          ))}
        </div>

        <Section id="work" label="Selected work" title="Projects">
          <div className="divide-y divide-border">
            {projects.map((p) => (
              <article key={p.n} className="group grid gap-4 py-8 md:grid-cols-[60px_1fr]">
                <span className="font-mono text-sm text-muted-foreground">{p.n}</span>
                <div>
                  <h3 className="text-2xl transition-colors group-hover:text-primary md:text-3xl">{p.title}</h3>
                  <p className="mt-3 max-w-2xl text-muted-foreground">{p.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tech.map((t) => <span key={t} className="rounded-full border border-border px-3 py-1 font-mono text-xs">{t}</span>)}
                  </div>
                  <a href={GITHUB} target="_blank" rel="noreferrer" className="mt-5 inline-block text-sm text-primary underline-offset-4 hover:underline">View on GitHub →</a>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section id="skills" label="Toolkit" title="Technical skills">
          <div className="grid gap-10 md:grid-cols-2">
            {skills.map((s) => (
              <div key={s.group}>
                <h3 className="mb-4 text-xl italic">{s.group}</h3>
                <div className="flex flex-wrap gap-2">
                  {s.items.map((i) => <span key={i} className="rounded-sm bg-secondary px-3 py-1.5 text-sm">{i}</span>)}
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="experience" label="Experience" title="Where I've worked">
          <div className="space-y-10">
            {experience.map((e) => (
              <div key={e.role} className="grid gap-2 md:grid-cols-[1fr_auto]">
                <div>
                  <h3 className="text-2xl">{e.role}</h3>
                  <p className="text-primary">{e.org}</p>
                  <p className="mt-2 max-w-xl text-muted-foreground">{e.desc}</p>
                </div>
                <p className="font-mono text-xs text-muted-foreground">{e.when}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="education" label="Education" title="Learning & certifications">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-sm border border-border bg-card p-6">
              <p className="font-mono text-xs text-muted-foreground">2022 — 2025</p>
              <h3 className="mt-2 text-xl">B.Sc Information Technology</h3>
              <p className="text-muted-foreground">Dr. SNS Rajalakshmi College of Arts and Science · CGPA 8.06</p>
            </div>
            <div className="rounded-sm border border-border bg-card p-6">
              <p className="font-mono text-xs text-muted-foreground">2021 — 2022</p>
              <h3 className="mt-2 text-xl">Higher Secondary — 89.5%</h3>
              <p className="text-muted-foreground">Sri Avinashilingam Hr. Sec. School for Girls</p>
            </div>
            <div className="rounded-sm border border-border bg-card p-6">
              <p className="font-mono text-xs text-primary">Certification</p>
              <h3 className="mt-2 text-xl">Data Science</h3>
              <p className="text-muted-foreground">Python, SQL, Pandas, NumPy, Scikit-learn, Visualisation</p>
            </div>
            <div className="rounded-sm border border-border bg-card p-6">
              <p className="font-mono text-xs text-primary">Certification</p>
              <h3 className="mt-2 text-xl">Prompt-X Next Gen AI</h3>
              <p className="text-muted-foreground">Generative AI & prompt engineering</p>
            </div>
          </div>
        </Section>

        <Section id="resume" label="Resume" title="My Resume">
          <div className="space-y-8">
            <p className="max-w-2xl text-muted-foreground">
              Explore my professional background, technical skills, education, and experience.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={RESUME_PDF_PATH}
                download={RESUME_DOWNLOAD_NAME}
                className="inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </a>
              <a
                href={RESUME_PDF_PATH}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-sm border border-foreground px-6 py-3 text-sm font-medium transition-colors hover:bg-foreground hover:text-background"
              >
                <ExternalLink className="h-4 w-4" />
                View Resume
              </a>
              <button
                type="button"
                onClick={() => setShowPreview((prev) => !prev)}
                className="inline-flex items-center gap-2 rounded-sm border border-border px-5 py-3 text-sm font-medium text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
              >
                {showPreview ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                {showPreview ? "Hide Preview" : "Preview Resume"}
              </button>
            </div>

            {showPreview && (
              <div className="overflow-hidden rounded-sm border border-border bg-card">
                <div className="flex items-center justify-between border-b border-border px-4 py-3 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-2 font-mono">
                    <FileText className="h-3.5 w-3.5 text-primary" />
                    {RESUME_DOWNLOAD_NAME}
                  </span>
                  <a
                    href={RESUME_PDF_PATH}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 hover:text-primary"
                  >
                    Full screen <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
                <iframe
                  src={`${RESUME_PDF_PATH}#view=FitH`}
                  title="Madhumitha M Resume Preview"
                  className="h-[520px] w-full sm:h-[680px] md:h-[780px]"
                />
              </div>
            )}
          </div>
        </Section>

        <section id="contact" className="border-t border-border py-24 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">Contact</p>
          <h2 className="mx-auto mt-6 max-w-3xl text-4xl md:text-6xl">Let's build something <em>intelligent</em> together.</h2>
          <a href={`mailto:${EMAIL}`} className="mt-10 inline-block font-serif text-2xl text-primary underline underline-offset-8 md:text-3xl">{EMAIL}</a>
          <div className="mt-10 flex justify-center gap-8 text-sm text-muted-foreground">
            <a href={GITHUB} target="_blank" rel="noreferrer" className="hover:text-primary">GitHub</a>
            <a href={LINKEDIN} target="_blank" rel="noreferrer" className="hover:text-primary">LinkedIn</a>
            <a href="tel:+917358685471" className="hover:text-primary">+91 73586 85471</a>
          </div>
        </section>
      </main>

      <footer className="border-t border-border py-8 text-center text-xs text-muted-foreground">
        © 2026 Madhumitha M · Tamil · English
      </footer>
    </div>
  );
}
