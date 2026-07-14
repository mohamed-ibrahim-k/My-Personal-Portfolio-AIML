import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { createPageMetadata } from '@/lib/metadata';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return [];
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  return createPageMetadata({
    title: 'Notes',
    description: 'Writing is not yet published for this portfolio.',
    path: `/writing/${slug}/`,
  });
}

export default async function PostPage({ params }: PageProps) {
  await params;
  notFound();
}
