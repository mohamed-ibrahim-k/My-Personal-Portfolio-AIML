import type { Metadata } from 'next';

import Courses from '@/components/Resume/Courses';
import Education from '@/components/Resume/Education';
import Experience from '@/components/Resume/Experience';
import ResumeNav from '@/components/Resume/ResumeNav';
import Skills from '@/components/Resume/Skills';
import PageWrapper from '@/components/Template/PageWrapper';
import courses from '@/data/resume/courses';
import degrees from '@/data/resume/degrees';
import { categories, skills } from '@/data/resume/skills';
import work from '@/data/resume/work';
import { createPageMetadata } from '@/lib/metadata';

export const metadata: Metadata = createPageMetadata({
  title: 'Resume',
  description:
    'Mohamed Ibrahim K Resume. B.Tech ECE at SASTRA University, AI/ML, software engineering, project management, and supply chain interests.',
  path: '/resume/',
});

export default function ResumePage() {
  const orderedWork = [...work].sort((a, b) => {
    const priority = new Map([
      ['Software Engineering Intern', 0],
      ['Project Management Intern', 1],
      ['Research Intern', 2],
      ['Core Team Member, Infrastructure, Logistics & Finance', 3],
      ['B.Tech ECE Student', 4],
    ]);

    return (priority.get(a.position) ?? 99) - (priority.get(b.position) ?? 99);
  });

  return (
    <PageWrapper>
      <section className="resume-page">
        <header className="resume-header">
          <h1 className="resume-title">Resume</h1>
          <p className="resume-summary">
            Electronics and Communication Engineering undergraduate at SASTRA
            University with a broad profile across AI/ML, software engineering,
            project management, supply chain management, cloud computing, and
            data analytics.
          </p>
        </header>

        <ResumeNav />

        <div className="resume-content">
          <section id="experience" className="resume-section">
            <Experience data={orderedWork} />
          </section>

          <section id="education" className="resume-section">
            <Education data={degrees} />
          </section>

          <section id="skills" className="resume-section">
            <Skills skills={skills} categories={categories} />
          </section>

          <section id="courses" className="resume-section">
            <Courses data={courses} />
          </section>
        </div>
      </section>
    </PageWrapper>
  );
}
