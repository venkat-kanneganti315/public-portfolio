import React from "react";

const projects = [
  {
    title: "Blackjack Game",
    stack: ["Core Java", "HTML", "CSS", "JavaScript"],
    desc:
      "A browser-based blackjack game that includes scoring, player actions such as split and stand, and automatic deck shuffling for replayable gameplay.",
    img: "/download.jpeg",
    // link: "#"
  },
  {
    title: "Weather Application",
    stack: ["React", "OpenWeather API"],
    desc:
      "An interactive weather application that allows users to search for cities and view current conditions, along with a 5-day forecast presented in a clean and responsive user interface.",
    img: "/weather.jpeg",
    // link: "#"
  },
  {
    title: "E-Commerce Backend Application",
    stack: ["Java", "Spring Boot", "REST APIs", "Node/Express", "MongoDB", "Stripe"],
    desc:
      "A full-stack e-commerce platform featuring authentication, product catalog, cart and checkout functionality, order management, and an admin dashboard with integrated payment processing via Stripe.",
    img: "/ecommerce.png",
    // link: "#"
  },
];

export default function Portfolio() {
  return (
    <div className="projects-grid">
      {projects.map((p) => (
        <a
          key={p.title}
          className="portfolio-item"
          href={p.link || "#"}
          target={p.link ? "_blank" : undefined}
          rel={p.link ? "noreferrer" : undefined}
          aria-label={p.title}
        >
          <div
            className="thumb"
            style={{ backgroundImage: `url(${p.img})` }}
            role="img"
            aria-label={`${p.title} preview`}
          />
          <div className="meta">
            <h4>{p.title}</h4>
            <span>{p.stack.join(" · ")}</span>
          </div>
            <p className="proj-desc">{p.desc}</p>
        </a>
      ))}
    </div>
  );
}
