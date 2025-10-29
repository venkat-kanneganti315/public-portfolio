import React from 'react'
export default function Navbar(){
  return (
    <header className="nav">
      <a href="#home" className="logo"><span className="accent"></span></a>
      <nav className="links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  )
}