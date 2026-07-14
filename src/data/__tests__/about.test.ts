import { describe, expect, it } from 'vitest';

import { aboutMarkdown } from '../about';

describe('about data', () => {
  it('exports aboutMarkdown as a string', () => {
    expect(typeof aboutMarkdown).toBe('string');
    expect(aboutMarkdown.length).toBeGreaterThan(0);
  });

  it('contains the intro section', () => {
    expect(aboutMarkdown).toContain('# Intro');
    expect(aboutMarkdown).toContain('SASTRA University');
  });

  it('contains the languages section', () => {
    expect(aboutMarkdown).toContain('# Languages');
    expect(aboutMarkdown).toContain('Tamil');
    expect(aboutMarkdown).toContain('English');
  });

  it('contains the hobbies section', () => {
    expect(aboutMarkdown).toContain('# Hobbies & Interests');
    expect(aboutMarkdown).toContain('Chess');
  });

  it('contains the summary section', () => {
    expect(aboutMarkdown).toContain('# Summary');
    expect(aboutMarkdown).toContain('AI/ML');
  });

  it('contains properly formatted headers', () => {
    // Check for markdown headers
    const headerRegex = /^#+ .+$/gm;
    const headers = aboutMarkdown.match(headerRegex);

    expect(headers).not.toBeNull();
    expect(headers!.length).toBeGreaterThanOrEqual(4);
  });
});
