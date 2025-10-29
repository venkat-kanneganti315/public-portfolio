import React, { useEffect, useRef, useState } from "react";

/* Populate from your resume/projects */
const INDIA = {
  company: "Zensar Technologies — Dervico (RPG)",
  role: "Software Engineer",
  period: "Jun 2020 – Jul 2023 · India",
  skills: ["Java", "Spring Boot", "Kafka", "Docker", "Kubernetes"],     // top 5 (project-backed)
  responsibilities: [
    "Designed RESTful services for betting flows with Spring Boot. Hardened auth with OAuth2/JWT; added RBAC & audit logging.",
    "Built React dashboards; improved query performance in PostgreSQL/MS SQL.",
    "Containerized services; EKS/AKS deployments with Helm.",
    "Implemented Kafka topics for real-time events; E2E tests with Cypress.",
  ],
};

const CURRENT = {
  company: "Astute Technologies — State Wide Insurance",
  role: "Software Engineer",
  period: "Aug 2024 – Present · Illinois, USA",
  skills: ["Angular", "Microservices", "Azure AKS", "CI/CD", "OAuth 2.0"], // top 5 (project-backed)
  responsibilities: [
    "Microservices for policy & claims (Spring Boot); domain validations.",
    "API contracts, versioning, and SLOs; OAuth2/JWT + service tokens.",
    "Angular portal features; accessibility & performance budgets.",
    "AKS + IaC; GitHub Actions pipelines, preview envs.",
    "Observability (logs/metrics/traces) and cost optimizations.",
  ],
};

export default function ExperienceSketchExpandable() {
  const sectionRef = useRef(null);
  const [play, setPlay] = useState(false);
  const [showIndia, setShowIndia] = useState(false);
  const [showCurrent, setShowCurrent] = useState(false);
  const [dotY, setDotY] = useState(72);

  useEffect(() => {
    const io = new IntersectionObserver((es) => {
      if (es[0].isIntersecting) setPlay(true);
    }, { threshold: 0.45 });
    if (sectionRef.current) io.observe(sectionRef.current);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!play) return;
    setShowIndia(true);
    const start = 72, end = 18, D = 2500;
    const ease = t => (t < .5 ? 4*t*t*t : 1 - Math.pow(-2*t + 2, 3)/2);
    const t0 = performance.now();
    let raf;
    const step = (now) => {
      const k = Math.min(1, (now - t0) / D);
      setDotY(start + (end - start) * ease(k));
      if (k < 1) raf = requestAnimationFrame(step); else setShowCurrent(true);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [play]);

  return (
    <section ref={sectionRef} className="xp-sket-wrap" id="experience">
      <div className="container">

        <div className="xp-sket-grid">
          <div className="sk-col left">
            <Card show={showCurrent} align="top" item={CURRENT} />
          </div>

          <div className="sk-col center">
            <div className="sk-line" />
            <div className="sk-dot" style={{ top: `${dotY}%` }} />
            <div className="sk-station" style={{ top: "18%" }} />
            <div className="sk-station" style={{ top: "72%" }} />
          </div>

          <div className="sk-col right">
            <Card show={showIndia} align="bottom" item={INDIA} />
          </div>
        </div>
      </div>
    </section>
  );
}

function Card({ show, align, item }) {
  const [open, setOpen] = useState(true);
  return (
    <div className={`sk-card-wrap ${align} ${show ? "reveal" : ""}`}>
      <article className="sk-card">
        <h3 className="sk-title">{item.company}</h3>
        <p className="sk-meta"><strong>{item.role}</strong> · {item.period}</p>

        <details className="sk-accordion" open={open} onToggle={(e) => setOpen(e.target.open)}>
          <summary><span>Roles & Responsibilities</span><span className={`chev ${open ? "up" : ""}`}>▾</span></summary>
          <ul className="sk-list">{item.responsibilities.map((r,i)=> <li key={i}>{r}</li>)}</ul>
        </details>

        <div className="sk-tags">
          {item.skills.map((s) => <span key={s} className="sk-tag">{s}</span>)}
        </div>
      </article>
    </div>
  );
}
