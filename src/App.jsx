import React from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Section from './components/Section.jsx'
import About from './components/About.jsx'
import Portfolio from './components/projects.jsx'
import ContactSection from './components/ContactSection.jsx'
import Experience from './components/Experience.jsx'

export default function App(){
  return (
    <div>
      <Navbar />
      <Hero />
      <Section id="about" title="About Me">
        <About />
      </Section>
      <Section id="experience" title="Experience">
        <Experience />
      </Section>
      <Section id="projects" title="Projects">
        <Portfolio />
      </Section>
      <div id="contact">
        <ContactSection />
      </div>
      <footer className="footer">© {new Date().getFullYear()} siva sai — All rights reserved.</footer>
    </div>
  )
}