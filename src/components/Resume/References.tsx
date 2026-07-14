import Link from 'next/link';

export default function References() {
  return (
    <div className="references" id="references">
      <p>
        References available upon request. Feel free to{' '}
        <Link href="/contact">get in touch</Link>.
      </p>
    </div>
  );
}
