import type { Metadata } from 'next';

import { SchemaGraph } from '@/components/Schema';
import PageWrapper from '@/components/Template/PageWrapper';
import internships from '@/data/internships';
import { createPageMetadata } from '@/lib/metadata';
import {
  breadcrumbNode,
  collectionPageNode,
  HOME_URL,
  SITE_URL,
} from '@/lib/schema';

const INTERNSHIPS_URL = `${SITE_URL}/internships/`;

const INTERNSHIPS_DESCRIPTION =
  'Internship experience for Mohamed Ibrahim K across research, project management, and software engineering.';

export const metadata: Metadata = createPageMetadata({
  title: 'Internships',
  description: INTERNSHIPS_DESCRIPTION,
  path: '/internships/',
});

export default function InternshipsPage() {
  return (
    <PageWrapper>
      <SchemaGraph
        nodes={[
          collectionPageNode({
            url: INTERNSHIPS_URL,
            name: 'Internships',
            description: INTERNSHIPS_DESCRIPTION,
            hasBreadcrumb: true,
          }),
          breadcrumbNode(INTERNSHIPS_URL, [
            { name: 'Home', url: HOME_URL },
            { name: 'Internships', url: INTERNSHIPS_URL },
          ]),
        ]}
      />
      <section className="projects-page">
        <header className="projects-header">
          <h1 className="page-title">Internships</h1>
          <p className="page-subtitle">
            Research, project coordination, and software engineering experience.
          </p>
        </header>

        <div className="projects-grid projects-grid--featured internships-grid">
          {internships.map((internship) => (
            <article
              key={internship.title}
              className="project-card project-card--static internship-card"
            >
              <div className="project-card-static">
                <div className="project-card-content">
                  <header className="project-card-header">
                    <h3 className="project-card-title">{internship.title}</h3>
                    <p className="project-card-subtitle">
                      {internship.organization} • {internship.period} •{' '}
                      {internship.role}
                    </p>
                  </header>
                  <p className="project-card-desc">{internship.summary}</p>
                  <ul className="internship-details">
                    {internship.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                  <div className="project-card-tech">
                    <span className="tech-tag">{internship.organization}</span>
                    <span className="tech-tag">{internship.period}</span>
                    <span className="tech-tag">{internship.role}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </PageWrapper>
  );
}
