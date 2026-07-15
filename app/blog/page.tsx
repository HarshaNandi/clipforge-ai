import { SiteHeader, SiteFooter } from "@/components/site-header";
import { blogPosts } from "@/lib/mock-data";
import Link from "next/link";
import { formatDate } from "@/lib/utils";

export default function Blog() {
  const [cover, ...rest] = blogPosts;
  return (
    <div className="grid-bg">
      <SiteHeader/>
      <main className="mx-auto max-w-7xl px-4 py-12">
        <div className="mb-12">
          <span className="chip">Blog</span>
          <h1 className="h1 mt-3">Tactics for the short-form era.</h1>
          <p className="mt-3 text-muted">Notes from the ClipForge team and the creators who ship with us.</p>
        </div>

        <Link href={"/blog/"+cover.slug} className="group block rounded-2xl border border-border bg-panel p-6 transition hover:shadow-glow">
          <div className="grid gap-6 md:grid-cols-[280px_1fr]">
            <div className="grid h-40 place-items-center rounded-xl border border-border bg-gradient-to-br from-brand/30 via-surface to-accent/20 text-2xl font-semibold text-white">{cover.cover}</div>
            <div>
              <span className="chip">{cover.tag} - {cover.readTime} min read</span>
              <div className="mt-2 text-2xl font-semibold tracking-tight group-hover:text-brand">{cover.title}</div>
              <p className="mt-2 text-muted">{cover.excerpt}</p>
              <div className="mt-3 text-xs text-muted">By {cover.author} - {formatDate(cover.date)}</div>
            </div>
          </div>
        </Link>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {rest.map(p => (
            <Link key={p.slug} href={"/blog/"+p.slug} className="group block rounded-2xl border border-border bg-panel p-5 transition hover:shadow-glow">
              <div className="grid h-32 place-items-center rounded-xl border border-border bg-gradient-to-br from-brand/30 via-surface to-accent/20 text-xl font-semibold text-white">{p.cover}</div>
              <span className="chip mt-4">{p.tag} - {p.readTime} min read</span>
              <div className="mt-2 text-lg font-semibold tracking-tight group-hover:text-brand">{p.title}</div>
              <p className="mt-2 text-sm text-muted">{p.excerpt}</p>
              <div className="mt-3 text-xs text-muted">By {p.author} - {formatDate(p.date)}</div>
            </Link>
          ))}
        </div>
      </main>
      <SiteFooter/>
    </div>
  );
}
