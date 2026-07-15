import { SiteHeader, SiteFooter } from "@/components/site-header";

const entries = [
  { v:"v2.4", date:"Jul 6, 2026", tag:"New",   title:"Viral scoring v3",   body:"14 audio + visual signals now weight longer hooks with a fast payoff."},
  { v:"v2.3", date:"Jun 24, 2026",tag:"New",   title:"Approval workflow",  body:"Editors submit, admins approve. Required before publishing."},
  { v:"v2.2", date:"Jun 12, 2026",tag:"Fix",   title:"Instagram rights check",body:"Auto-detect flagged music and prompt the user before upload."},
  { v:"v2.1", date:"May 28, 2026",tag:"New",   title:"Twitter / X integration",body:"Post 60s clips with native captions."},
  { v:"v2.0", date:"May 4, 2026", tag:"Major", title:"ClipForge 2.0",      body:"New UI, brand kit enforcement, and a public REST API."}
];

export default function Changelog() {
  return (
    <div className="grid-bg">
      <SiteHeader/>
      <main className="mx-auto max-w-3xl px-4 py-16">
        <span className="chip">Changelog</span>
        <h1 className="h1 mt-3">What is new in ClipForge.</h1>
        <p className="mt-3 text-muted">Every shipped release, every fix.</p>
        <div className="mt-12 space-y-4">
          {entries.map(e => (
            <div key={e.v} className="rounded-2xl border border-border bg-panel p-5">
              <div className="flex items-center justify-between">
                <span className={"chip "+(e.tag==="New"?"text-brand":e.tag==="Fix"?"text-warn":e.tag==="Major"?"text-accent":"")}>{e.tag}</span>
                <span className="text-xs text-muted">{e.v} - {e.date}</span>
              </div>
              <div className="mt-2 font-semibold">{e.title}</div>
              <p className="mt-1 text-sm text-muted">{e.body}</p>
            </div>
          ))}
        </div>
      </main>
      <SiteFooter/>
    </div>
  );
}
