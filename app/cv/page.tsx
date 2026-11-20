import type { Metadata } from "next";
import Link from "next/link";
import { cv, CV_PDF_PATH } from "@/data/cv";
import styles from "./cv.module.css";

export const metadata: Metadata = {
  title: "CV · Hoàng Xuân Trường",
  description: "Printable CV of Hoàng Xuân Trường, backend engineer focused on Go and distributed systems.",
};

export default function CvPage() {
  const { contact } = cv;

  return (
    <div className={styles.screen}>
      <nav className={styles.toolbar} aria-label="CV actions">
        <Link href="/" className={styles.toolbarLink}>← Portfolio</Link>
        <a href={CV_PDF_PATH} download className={styles.toolbarButton}>Download PDF</a>
      </nav>

      <article className={styles.paper}>
        <header className={styles.header}>
          <div>
            <h1 className={styles.name}>{cv.name}</h1>
            <p className={styles.title}>{cv.title}</p>
          </div>
          <ul className={styles.contact}>
            <li><a href={`mailto:${contact.email}`}>{contact.email}</a></li>
            <li><a href={`tel:${contact.phone.replace(/\s/g, "")}`}>{contact.phone}</a></li>
            <li><a href={`https://${contact.github}`}>{contact.github}</a></li>
            <li>{contact.location}</li>
          </ul>
        </header>

        <p className={styles.summary}>{cv.summary}</p>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Skills</h2>
          <dl className={styles.skills}>
            {cv.skills.map((s) => (
              <div key={s.group} className={styles.skillRow}>
                <dt>{s.group}</dt>
                <dd>{s.items}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className={`${styles.section} ${styles.twoCol}`}>
          <div>
            <h2 className={styles.sectionTitle}>Education</h2>
            {cv.education.map((e) => (
              <div key={e.school} className={styles.entry}>
                <strong>{e.school}</strong>
                <span>{e.detail} · {e.period}</span>
              </div>
            ))}
          </div>
          <div>
            <h2 className={styles.sectionTitle}>Certifications</h2>
            {cv.certifications.map((c) => (
              <div key={c.name} className={styles.entry}>
                <strong>{c.name}</strong>
                <span>{c.detail} · {c.period}</span>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Experience</h2>
          {cv.experience.map((job) => (
            <div key={job.company} className={styles.job}>
              <div className={styles.jobHead}>
                <h3>
                  {job.role} <span className={styles.at}>·</span> {job.company}
                </h3>
                <span className={styles.period}>{job.period}</span>
              </div>
              {"summary" in job && job.summary && <p className={styles.jobSummary}>{job.summary}</p>}
              {job.projects.map((p) => (
                <div key={p.name} className={styles.project}>
                  <h4>
                    {p.name}
                    {"context" in p && p.context && <span className={styles.context}> — {p.context}</span>}
                  </h4>
                  <ul>
                    {p.bullets.map((b) => <li key={b}>{b}</li>)}
                  </ul>
                  {"stack" in p && p.stack && <p className={styles.stack}>{p.stack}</p>}
                </div>
              ))}
            </div>
          ))}
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Projects</h2>
          <div className={styles.project}>
            <h4>
              {cv.hexta.name} <span className={styles.context}>— {cv.hexta.tagline}</span>{" "}
              <a className={styles.status} href={`https://${cv.hexta.url}`}>{cv.hexta.url}</a>
            </h4>
            <ul>
              {cv.hexta.apps.map((app) => (
                <li key={app.name}>
                  <strong>{app.name}:</strong> {app.detail} <span className={styles.stack}>({app.stack})</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </article>
    </div>
  );
}
