import Link from "next/link";
import { Sparkles } from "lucide-react";
export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-bg/80 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <span className="grid h-7 w-7 place-items-center rounded-lg bg-brand text-white shadow-glow"><Sparkles className="h-4 w-4" /></span>
          ClipForge <span className="text-muted">AI</span>
        </Link>
        <nav className="hidden items-center gap-7 text-sm text-muted md:flex">
          <Link href="/pricing" className="hover:text-ink">Pricing</Link>
          <Link href="/blog" className="hover:text-ink">Blog</Link>
          <Link href="/contact" className="hover:text-ink">Contact</Link>
          <Link href="/compliance" className="hover:text-ink">Compliance</Link>
          <Link href="/changelog" className="hover:text-ink">Changelog</Link>
        </nav>
        <div className="flex items-center gap-2">
          <Link href="/login" className="btn-g text-sm hidden sm:inline-flex">Log in</Link>
          <Link href="/signup" className="btn-p text-sm">Get started</Link>
        </div>
      </div>
    </header>
  );
}
export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border/80">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:grid-cols-5">
        <div className="md:col-span-2">
          <div className="font-semibold">ClipForge AI</div>
          <p className="mt-2 max-w-sm text-sm text-muted">Turn long-form video into platform-ready shorts with AI. Built for creators, teams and brands.</p>
        </div>
        <FCol title="Product" links={[["Features","/"],["Pricing","/pricing"],["Templates","/templates"],["Changelog","/changelog"]]} />
        <FCol title="Resources" links={[["Blog","/blog"],["Help center","/contact"],["Compliance","/compliance"],["API","/api/v1/clips"]]} />
        <FCol title="Company" links={[["Contact","/contact"],["Careers","/contact"],["Press","/contact"],["Log in","/login"]]} />
      </div>
      <div className="border-t border-border/80">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4 text-xs text-muted md:flex-row md:items-center md:justify-between">
          <span>(c) 2026 ClipForge, Inc.</span><span>Made for creators who ship.</span>
        </div>
      </div>
    </footer>
  );
}
function FCol({ title, links }:{ title:string; links:[string,string][] }) {
  return <div><div className="label">{title}</div><ul className="mt-3 space-y-2 text-sm">{links.map(([t,h])=><li key={t}><Link href={h} className="text-muted hover:text-ink">{t}</Link></li>)}</ul></div>;
}
