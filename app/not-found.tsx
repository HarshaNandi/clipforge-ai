import Link from "next/link";

export default function NotFound() {
  return (
    <div className="grid-bg grid min-h-screen place-items-center px-4 text-center">
      <div>
        <div className="text-7xl font-semibold bg-gradient-to-r from-brand to-accent bg-clip-text text-transparent">404</div>
        <div className="mt-3 text-2xl font-semibold">Clip not found.</div>
        <p className="mt-2 text-muted">Maybe it has not been edited yet - or it was unpublished.</p>
        <Link href="/dashboard" className="btn-p mt-6 inline-flex">Back to dashboard</Link>
      </div>
    </div>
  );
}
