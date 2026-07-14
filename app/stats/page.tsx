import type { Metadata } from 'next';

import PageWrapper from '@/components/Template/PageWrapper';
import { createPageMetadata } from '@/lib/metadata';

export const metadata: Metadata = createPageMetadata({
  title: 'Highlights',
  description: 'Quick profile highlights for Mohamed Ibrahim K.',
  path: '/stats/',
});

export default function StatsPage() {
  return (
    <PageWrapper>
      <section className="stats-page">
        <header className="stats-header">
          <h1 className="stats-title">Highlights</h1>
          <p className="stats-subtitle">Personal facts and profile signals</p>
        </header>
        <div className="stats-content">
          <section>
            <h2 className="stats-section-title">Education</h2>
            <p>
              B.Tech in Electronics and Communication Engineering at SASTRA
              University, expected graduation in May 2027.
            </p>
          </section>
          <section>
            <h2 className="stats-section-title">Interests</h2>
            <p>
              AI/ML, software engineering, project management, supply chain
              management, cloud computing, and data analytics.
            </p>
          </section>
          <section>
            <h2 className="stats-section-title">Languages</h2>
            <p>Tamil, English, and Arabic reading/writing.</p>
          </section>
        </div>
      </section>
    </PageWrapper>
  );
}
