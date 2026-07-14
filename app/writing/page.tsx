import type { Metadata } from 'next';
import PageWrapper from '@/components/Template/PageWrapper';
import { createPageMetadata } from '@/lib/metadata';

export const metadata: Metadata = {
  ...createPageMetadata({
    title: 'Notes',
    description: 'Learning notes and future writing for Mohamed Ibrahim K.',
    path: '/writing/',
  }),
  alternates: {
    types: {
      'application/rss+xml': '/feed.xml',
    },
  },
};

export default function WritingPage() {
  return (
    <PageWrapper>
      <article className="writing-page">
        <header className="writing-header">
          <div className="writing-header-row">
            <h1 className="page-title">Notes</h1>
          </div>
          <p className="page-subtitle">
            Writing will be added here as the portfolio grows. For now, this
            page serves as a placeholder for future notes and articles.
          </p>
        </header>

        <div className="writing-list">
          <div className="writing-item">
            <h2 className="writing-title">Coming soon</h2>
            <p className="writing-description">
              Future posts will focus on AI/ML learning, software engineering,
              project management, and practical lessons from coursework and
              projects.
            </p>
          </div>
        </div>
      </article>
    </PageWrapper>
  );
}
