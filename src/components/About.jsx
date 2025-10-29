import React from "react";

const SKILLS = {
  "Front-End ": ["React", "TypeScript", "HTML/CSS", "Redux/RTK", "TailwindCSS"],
  "Back-End ": ["Node.js/Express", "Java/Spring Boot", "REST APIs", "GraphQL", "OAuth 2.0"],
  "Database ": ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Firebase"],
  "Tools & Cloud ": ["Git/GitHub", "Docker", "Kubernetes", "CI/CD (Actions/Jenkins)", "AWS/Azure"],
};

const EDUCATION = [
  {
    college: "University of Central Missouri",
    degree: "Masters in Computer Science",
    period: "August 2023 - December 2024",
    note: "Coursework: Advance Data Structures, Neural Networks, Operating System ",
  },
  {
    college: "KLUniversity",
    degree: "Bachelors in Computer Science",
    period: "June 2017 - June 2021",
    note: "Coursework: Data Structures, Algorithms, DBMS, OS, Networks.",

  },
  // add more rows if you have them
];

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container about-centered">
        <div className="about-grid">
          <div className="about-copy full">
            <p>
              I’m a full-stack developer focused on building secure, cloud-ready web applications.
              Back end with Java/Spring Boot and Node.js; front end with React and TypeScript.
              I’ve delivered microservices, event pipelines (Kafka), containerized deployments
              with Docker/Kubernetes, and CI/CD using GitHub Actions/Jenkins.
            </p>

            {/* Skills (always visible) */}
            <h3 style={{marginTop: "1.75rem"}}>Skills</h3>
            <div className="skills-grid">
              {Object.entries(SKILLS).map(([group, list]) => (
                <div key={group} className="skills-card">
                  <h4>{group}</h4>
                  <ul>
                    {list.map((s) => <li key={s}>{s}</li>)}
                  </ul>
                </div>
              ))}
            </div>

            {/* Education (always visible) */}
            <h3 style={{marginTop: "1.75rem"}}>Education</h3>
            <ul className="edu-list">
              {EDUCATION.map((e, i) => (
                <li key={i} className="edu-item">
                  <strong>{e.school}</strong> — {e.degree}
                  <div className="muted">{e.period}</div>
                  {e.note && <div>{e.note}</div>}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
