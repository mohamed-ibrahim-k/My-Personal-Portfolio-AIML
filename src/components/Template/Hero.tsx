import Link from 'next/link';

import ThemePortrait from './ThemePortrait';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-avatar">
          <ThemePortrait width={170} height={170} priority />
        </div>

        <p className="hero-greeting">Hi, I'm</p>

        <h1 className="hero-title">
          <span className="hero-name">Mohamed Ibrahim K</span>
        </h1>

        <p className="hero-tagline">
          AI / ML • Software Engineering • Project Management • Supply Chain
        </p>

        <p className="hero-description">
          I'm an Electronics & Communication Engineering student at
          <span className="hero-highlight"> SASTRA University</span> focused on
          AI/ML, software engineering, project management, supply chain
          management, cloud computing, and data analytics.
          <br />
          <br />
          I've completed multiple AI/ML and software development courses, built
          AI/ML projects, completed internships across research, project
          management, and software engineering, and keep expanding through
          certifications and hands-on work.
        </p>

        <div className="hero-chips">
          <span className="hero-chip">AI & Machine Learning</span>
          <span className="hero-chip">Software Engineering</span>
          <span className="hero-chip">Project Management</span>
          <span className="hero-chip">Supply Chain</span>
          <span className="hero-chip">Cloud & DevOps</span>
          <span className="hero-chip">Open to Opportunities</span>
        </div>

        <div className="hero-cta">
          <Link href="/#about" className="button">
            About Me
          </Link>

          <Link href="/resume" className="button button-secondary">
            Download Resume
          </Link>

          <Link href="/#contact" className="button button-outline">
            Contact Me
          </Link>
        </div>
      </div>

      <div className="hero-bg" aria-hidden="true">
        <div className="hero-gradient" />
      </div>
    </section>
  );
}
