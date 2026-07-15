import { SiteHeader, SiteFooter } from "@/components/site-header";
import { blogPosts } from "@/lib/mock-data";
import Link from "next/link";
import { notFound } from "next/navigation";
import { formatDate } from "@/lib/utils";

export default async function BlogPost({ params }:{ params: Promise<{slug:string}> }) {
  const { slug } = await params;
  const post = blogPosts.find(p=>p.slug===slug);
  if (!post) return notFound();
  return (
    <div className="grid-bg">
      <SiteHeader/>
      <main className="mx-auto max-w-3xl px-4 py-16">
        <Link href="/blog" className="btn-g">Back to blog</Link>
        <div className="mt-6 grid h-56 place-items-center rounded-2xl border border-border bg-gradient-to-br from-brand/30 via-surface to-accent/20 text-3xl font-semibold text-white">{post.cover}</div>
        <span className="chip mt-6">{post.tag} - {post.readTime} min read</span>
        <h1 className="h1 mt-3">{post.title}</h1>
        <div className="mt-2 text-sm text-muted">By {post.author} - {formatDate(post.date)}</div>

        <article className="prose-invert mt-8 max-w-none text-ink/90">
          <p>{post.excerpt}</p>
          <p className="mt-4">{post.excerpt}</p>
          <h2 className="mt-8 text-2xl font-semibold">The short version</h2>
          <p className="mt-3">Everyone wants to ship more short-form. The teams that win ship small, often, and reuse the same hooks. ClipForge exists to make that loop 10x faster - and let creators focus on the message, not the editing.</p>
          <h2 className="mt-8 text-2xl font-semibold">What we learned</h2>
          <p className="mt-3">{post.excerpt}</p>
          <p className="mt-3">{post.excerpt}</p>
          <p className="mt-6 text-sm text-muted">Want to try this for yourself? <Link href="/signup" className="text-brand hover:underline">Sign up for free</Link>.</p>
        </article>
      </main>
      <SiteFooter/>
    </div>
  );
}
