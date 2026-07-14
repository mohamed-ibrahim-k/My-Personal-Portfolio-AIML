import type { Metadata } from 'next';

import { SchemaGraph } from '@/components/Schema';
import Hero from '@/components/Template/Hero';
import HomeSections from '@/components/Template/HomeSections';
import PageWrapper from '@/components/Template/PageWrapper';
import { HOME_URL, profilePageNode } from '@/lib/schema';
import { AUTHOR_NAME, SITE_DESCRIPTION } from '@/lib/utils';

export const metadata: Metadata = {
  description: SITE_DESCRIPTION,
};

export default function HomePage() {
  return (
    <PageWrapper mainClassName="page-main--home">
      <SchemaGraph
        nodes={[profilePageNode({ url: HOME_URL, name: AUTHOR_NAME })]}
      />
      <Hero />
      <HomeSections />
    </PageWrapper>
  );
}
