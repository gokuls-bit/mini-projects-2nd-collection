import React from 'react';
import '../styles/globals.css';

export default function Home() {
  return (
    <div className="container">
      <header className="header">
        <h1 className="logo">Gokul Sant</h1>
        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero" id="home">
        <h2>Gokul Kumar Sant</h2>
        <p>
          Designer & Software Engineer <br />
          <em>"I judge a book by its cover... because if the cover doesn't impress you, what else can?"</em>
        </p>
        <div className="buttons">
          <a href="#about" className="btn">About Me</a>
          <a href="https://your-resume-link.com" target="_blank" className="btn-outline">Resume</a>
        </div>
      </section>

      <footer className="footer">
        © 2025 Gokul Kumar Sant. All rights reserved.
      </footer>
    </div>
  );
}
