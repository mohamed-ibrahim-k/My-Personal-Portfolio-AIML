import type { Metadata } from 'next';

import { SchemaGraph } from '@/components/Schema';
import PageWrapper from '@/components/Template/PageWrapper';
import data from '@/data/projects';
import { createPageMetadata } from '@/lib/metadata';
import {
  breadcrumbNode,
  collectionPageNode,
  HOME_URL,
  SITE_URL,
} from '@/lib/schema';

const PROJECTS_URL = `${SITE_URL}/projects/`;

const PROJECTS_DESCRIPTION =
  'Focus areas and representative work themes for Mohamed Ibrahim K across AI, software engineering, project management, and supply chain management.';

export const metadata: Metadata = createPageMetadata({
  title: 'Projects',
  description: PROJECTS_DESCRIPTION,
  path: '/projects/',
});

export default function ProjectsPage() {
  return (
    <PageWrapper>
      <SchemaGraph
        nodes={[
          collectionPageNode({
            url: PROJECTS_URL,
            name: 'Projects',
            description: PROJECTS_DESCRIPTION,
            hasBreadcrumb: true,
          }),
          breadcrumbNode(PROJECTS_URL, [
            { name: 'Home', url: HOME_URL },
            { name: 'Projects', url: PROJECTS_URL },
          ]),
        ]}
      />
      <section className="projects-page">
        <header className="projects-header">
          <h1 className="page-title">Projects</h1>
          <p className="page-subtitle">
            Representative themes and the technologies I keep building with.
          </p>
        </header>

        <div className="projects-grid projects-grid--featured">
          {data.map((project) => (
            <article
              key={project.title}
              className="project-card project-card--static"
            >
              <div className="project-card-static">
                <div className="project-card-content">
                  <header className="project-card-header">
                    <h3 className="project-card-title">{project.title}</h3>
                    {project.subtitle ? (
                      <p className="project-card-subtitle">
                        {project.subtitle}
                      </p>
                    ) : null}
                  </header>
                  <p className="project-card-desc">{project.desc}</p>
                  {project.tech?.length ? (
                    <div className="project-card-tech">
                      {project.tech.map((tech) => (
                        <span key={tech} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </PageWrapper>
  );
}
