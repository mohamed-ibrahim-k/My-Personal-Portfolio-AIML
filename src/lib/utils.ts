/**
 * Shared utility functions and constants
 */

// Site configuration
export const SITE_URL = 'https://mldangelo.com';
export const AUTHOR_NAME = 'Mohamed Ibrahim K';
export const TWITTER_HANDLE = '';
export const SITE_IMAGE_PATH = '/images/profile.svg';
export const SITE_IMAGE_DIMENSIONS = {
  width: 1024,
  height: 1024,
} as const;

// Canonical one-line bio, shared across page metadata, OpenGraph, and JSON-LD.
export const SITE_DESCRIPTION =
  'Electronics and Communication Engineering undergraduate at SASTRA University focused on AI/ML, software engineering, project management, and supply chain analytics.';

// Image dimension constants
export const AVATAR_SIZE = {
  hero: 120,
  footer: 80,
  sidebar: 200,
} as const;

export const PROJECT_IMAGE = {
  width: 600,
  height: 400,
} as const;

// Skill competency
export const MAX_COMPETENCY = 5;

/**
 * Formats a date string to a human-readable format.
 * Parses as UTC to avoid timezone shifts.
 */
export function formatDate(dateStr: string): string {
  if (!dateStr) return '';
  // Parse as UTC to avoid timezone shifts
  const date = new Date(`${dateStr}T12:00:00`);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
