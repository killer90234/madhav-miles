import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="container-shell py-20 text-center">
      <h1 className="font-display text-4xl font-semibold text-charcoal">Page not found</h1>
      <p className="mt-3 text-charcoal-muted">The page you are looking for does not exist.</p>
      <Link href="/" className="btn-primary mt-6">
        Go home
      </Link>
    </div>
  );
}
