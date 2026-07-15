import { SiteHeader, SiteFooter } from "@/components/site-header";
import { Mail, MessageSquare, Phone } from "lucide-react";

export default function Contact() {
  return (
    <div className="grid-bg">
      <SiteHeader/>
      <main className="mx-auto max-w-5xl px-4 py-16">
        <div className="text-center">
          <span className="chip">Contact</span>
          <h1 className="h1 mt-3">Talk to the team.</h1>
          <p className="mt-3 text-muted">Sales, support or partnership - we usually reply within 4 hours.</p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-panel p-6">
            <div className="label">Sales</div>
            <div className="mt-3 space-y-3">
              <div className="flex items-center gap-2 text-sm"><Mail className="h-4 w-4 text-brand"/> sales@clipforge.io</div>
              <div className="flex items-center gap-2 text-sm"><Phone className="h-4 w-4 text-brand"/> +1 (415) 555-0142</div>
              <div className="flex items-center gap-2 text-sm"><MessageSquare className="h-4 w-4 text-brand"/> Live chat 9-6 PT</div>
            </div>
            <p className="mt-4 text-sm text-muted">Plan migrations, custom SLAs, security questionnaires.</p>
          </div>
          <form className="rounded-2xl border border-border bg-panel p-6">
            <div className="label">Send us a note</div>
            <label className="label mt-3 block">Email</label>
            <input className="mt-1 w-full rounded-xl border border-border bg-surface px-3 py-2 text-sm focus:border-brand focus:outline-none" placeholder="alex@clipforge.io"/>
            <label className="label mt-4 block">Topic</label>
            <select className="mt-1 w-full rounded-xl border border-border bg-surface px-3 py-2 text-sm focus:border-brand focus:outline-none">
              <option>Sales</option><option>Support</option><option>Partnership</option><option>Security</option>
            </select>
            <label className="label mt-4 block">Message</label>
            <textarea rows={5} className="mt-1 w-full rounded-xl border border-border bg-surface px-3 py-2 text-sm focus:border-brand focus:outline-none" placeholder="What is on your mind?"/>
            <button type="button" className="btn-p mt-5 w-full">Send message</button>
          </form>
        </div>
      </main>
      <SiteFooter/>
    </div>
  );
}
