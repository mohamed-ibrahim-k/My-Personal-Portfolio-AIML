'use client';

import Link from 'next/link';

import ContactIcons from '@/components/Contact/ContactIcons';
import internships from '@/data/internships';
import degrees from '@/data/resume/degrees';
import { skills } from '@/data/resume/skills';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

function HomeSectionShell({
  id,
  eyebrow,
  title,
  description,
  children,
  layout = 'split',
}: {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  children: React.ReactNode;
  layout?: 'split' | 'stack';
}) {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>({
    threshold: 0.2,
  });

  return (
    <section
      id={id}
      ref={ref}
      className={`home-section home-section--scroll section-reveal ${isVisible ? 'section-reveal--visible' : ''} ${layout === 'stack' ? 'home-section--compact' : 'home-section--wide home-section--split'}`}
    >
      <div
        className={
          layout === 'stack'
            ? 'home-section-copy home-section-copy--centered'
            : 'home-section-inner'
        }
      >
        <div className="home-section-copy">
          <p className="home-section-eyebrow">{eyebrow}</p>
          <h2 className="home-section-title">{title}</h2>
          <p className="home-section-description">{description}</p>
        </div>
        {children}
      </div>
    </section>
  );
}

export default function HomeSections() {
  const topSkills = skills.slice(0, 6);
  const degree = degrees[0];

  return (
    <div className="home-stack">
      <HomeSectionShell
        id="about"
        eyebrow="About"
        title="Building across AI, software, project management, and supply chain management."
        description="I am an Electronics and Communication Engineering undergraduate at SASTRA University with a broad set of interests that span technical work, coordination, and practical problem solving."
      >
        <div className="home-section-stack">
          <div className="home-section-card">
            <p className="home-section-card-desc">
              My interests include AI/ML, frontend and backend development,
              cloud and DevOps fundamentals, project management, and supply
              chain analytics.
            </p>
          </div>
          <div className="home-section-card-tags">
            {topSkills.map((skill) => (
              <span key={skill.title} className="home-section-card-tag">
                {skill.title}
              </span>
            ))}
          </div>
          <div className="home-section-actions">
            <Link href="/about" className="button button-secondary">
              Full About
            </Link>
            <Link href="/resume" className="button button-outline">
              Resume
            </Link>
          </div>
        </div>
      </HomeSectionShell>

      <HomeSectionShell
        id="resume"
        eyebrow="Resume"
        title="A B.Tech profile built around technical breadth and hands-on learning."
        description="A quick snapshot of the degree, current focus areas, and the kinds of roles I am open to exploring."
      >
        <div className="home-section-stack">
          <div className="home-section-card">
            <h3 className="home-section-card-title">{degree.degree}</h3>
            <p className="home-section-card-subtitle">
              {degree.school} • Expected {degree.year}
            </p>
            <p className="home-section-card-desc">
              Interested in AI/ML, software engineering, project management,
              supply chain management, cloud computing, and data analytics.
            </p>
          </div>
          <div className="home-section-actions">
            <Link href="/resume" className="button">
              Open Resume
            </Link>
          </div>
        </div>
      </HomeSectionShell>

      <HomeSectionShell
        id="internships"
        eyebrow="Internships"
        title="Hands-on experience across research, project coordination, and software engineering."
        description="These are the internships that shaped how I work across technical and cross-functional environments."
      >
        <div className="home-section-grid">
          {internships.map((internship) => (
            <article key={internship.title} className="home-section-card">
              <p className="home-section-card-subtitle">
                {internship.organization} • {internship.period}
              </p>
              <h3 className="home-section-card-title">{internship.title}</h3>
              <p className="home-section-card-desc">{internship.summary}</p>
              <p className="home-section-card-desc">{internship.role}</p>
            </article>
          ))}
        </div>
        <div className="home-section-actions">
          <Link href="/internships" className="button button-outline">
            View Internships
          </Link>
        </div>
      </HomeSectionShell>

      <HomeSectionShell
        id="projects"
        eyebrow="Projects"
        title="Focus areas I keep building around."
        description="These are the main domains I continue developing through coursework, projects, certifications, and self-study."
      >
        <div className="home-section-grid">
          <article className="home-section-card">
            <h3 className="home-section-card-title">AI / Machine Learning</h3>
            <p className="home-section-card-desc">
              AI engineer, machine learning engineer, deep learning engineer,
              generative AI engineer, LLM engineer, computer vision engineer,
              NLP engineer, AI research engineer, AI solutions engineer, data
              scientist, applied AI engineer, and AI software engineer.
            </p>
          </article>
          <article className="home-section-card">
            <h3 className="home-section-card-title">Software Engineering</h3>
            <p className="home-section-card-desc">
              Software engineer, backend developer, full stack developer,
              frontend developer, cloud engineer, DevOps engineer, platform
              engineer, and solutions engineer.
            </p>
          </article>
          <article className="home-section-card">
            <h3 className="home-section-card-title">Project Management</h3>
            <p className="home-section-card-desc">
              Associate project manager, junior project manager, project
              coordinator, PMO analyst, technical project manager, and IT
              project coordinator.
            </p>
          </article>
          <article className="home-section-card">
            <h3 className="home-section-card-title">Supply Chain Management</h3>
            <p className="home-section-card-desc">
              Supply chain analyst, operations analyst, logistics analyst,
              procurement analyst, inventory analyst, and supply chain
              coordinator.
            </p>
          </article>
        </div>
        <div className="home-section-actions">
          <Link href="/projects" className="button button-outline">
            View Details
          </Link>
        </div>
      </HomeSectionShell>

      <HomeSectionShell
        id="contact"
        eyebrow="Contact"
        title="Reach me if you want to talk about AI, software, or internships."
        description="My current priority is to keep learning, keep building, and connect with teams that value curiosity and practical execution."
        layout="stack"
      >
        <div className="home-section-card">
          <ContactIcons />
          <p className="home-section-card-desc" style={{ marginTop: '1rem' }}>
            Personal email, college email, GitHub, LinkedIn, and mobile number
            are available on the contact page.
          </p>
        </div>
        <div className="home-section-actions">
          <Link href="/contact" className="button">
            Contact Page
          </Link>
        </div>
      </HomeSectionShell>
    </div>
  );
}
