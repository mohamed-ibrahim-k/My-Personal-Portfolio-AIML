import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import EmailLink from '../../Contact/EmailLink';

describe('EmailLink', () => {
  it('renders the email domain', () => {
    render(<EmailLink />);

    expect(screen.getByText('@gmail.com')).toBeInTheDocument();
  });

  it('renders as a link element', () => {
    render(<EmailLink />);

    const link = screen.getByRole('link');
    expect(link).toBeInTheDocument();
  });

  it('generates valid mailto href for valid email prefixes', () => {
    render(<EmailLink />);

    const link = screen.getByRole('link');
    expect(link.getAttribute('href')).toBe(
      'mailto:mohamedibrahimk1706@gmail.com',
    );
  });
});
