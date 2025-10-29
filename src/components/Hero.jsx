import React from "react";

export default function Hero() {
  return (
    <section id="home" className="hero hero-centered">
      <div className="hero-copy center">
        <p className="role">Full-Stack Developer</p>
        <h1 className="hero-title">
          Hi, I’m <span className="accent">Siva Sai</span><br />
          I build fast, scalable web apps.
        </h1>
        <p className="hero-sub">
          From microservices to slick UIs — I love turning ideas into reliable, deployed software.
        </p>
        <div className="hero-cta">
          <a className="btn" href="/cv/Siva_Sai_CV.pdf" download>Download CV</a>
          <a className="btn ghost" href="#contact">Contact Me</a>
        </div>
      </div>
    </section>
  );
}
