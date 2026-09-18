import Link from "next/link";

export default function NotFound() {
  return (
    <main className="on-ink page-top contact">
      <div className="shell">
        <h1 className="t-display">This page is not here.</h1>
        <p className="hero-sub">The link may be old, or mistyped.</p>
        <p className="cta-row">
          <Link href="/" className="btn btn-light">
            Back to the homepage
          </Link>
          <Link href="/work" className="btn btn-outline">
            See the work
          </Link>
        </p>
      </div>
    </main>
  );
}
