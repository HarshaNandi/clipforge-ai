import Link from "next/link";
import { Sparkles, Scissors, Wand2, Calendar, BarChart3, ShieldCheck, ArrowRight, Star } from "lucide-react";
import { SiteHeader, SiteFooter } from "@/components/site-header";

export default function Landing() {
  const phones = [
    {title:"The ONE trick that 3x'd my MRR",  score:94, handle:"@alexr.clipforge", thumb:"ONE", tall:true },
    {title:"Why cold outreach is dead",       score:88, handle:"@alexrivera",     thumb:"COD", tall:false},
    {title:"My real ARR math 2026",           score:86, handle:"@alexr.co",       thumb:"ARR", tall:true },
    {title:"Conference mic drop",             score:92, handle:"@alexr_codes",    thumb:"MIC", tall:true },
    {title:"I raised $4M. Deck reveal.",      score:91, handle:"@alex-rivera",    thumb:"RAI", tall:false},
    {title:"Office hours highlight",          score:83, handle:"@alex.rivera",    thumb:"OHW", tall:true }
  ];

  return (
    <div className="grid-bg">
      <SiteHeader/>
      <main>
        <section className="relative">
          <div className="absolute inset-x-0 -top-10 -z-10 h-[600px] bg-gradient-radial"/>
          <div className="mx-auto max-w-7xl px-4 pb-24 pt-20 md:pt-28">
            <div className="grid items-center gap-10 md:grid-cols-2">
              <div>
                <span className="chip"><Sparkles className="h-3 w-3 text-brand"/> AI clipping  9:16 autoformat  captions in 50 styles</span>
                <h1 className="h1 mt-5">Turn long videos into <span className="bg-gradient-to-r from-brand to-accent bg-clip-text text-transparent">viral shorts</span> in minutes.</h1>
                <p className="mt-5 max-w-xl text-lg text-muted">Drop in a podcast, call, stream or webinar. ClipForge finds the hooks, cuts the highlights, captions them and posts to every platform - even while you sleep.</p>
                <div className="mt-7 flex flex-wrap items-center gap-3">
                  <Link href="/signup" className="btn-p">Start free  <ArrowRight className="h-4 w-4"/></Link>
                  <Link href="/pricing" className="btn-g">See pricing</Link>
                </div>
                <div className="mt-6 flex items-center gap-4 text-sm text-muted">
                  <div className="flex items-center gap-1"><Star className="h-4 w-4 fill-warn stroke-warn"/> 4.9 avg on Product Hunt</div>
                  <div>- 12,400 creators ship with us</div>
                </div>
              </div>
              <div className="relative">
                <div className="grid grid-cols-3 gap-3">
                  {phones.map(p => <PhoneMock key={p.title} {...p}/>)}
                </div>
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-bg to-transparent"/>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-border/80 bg-surface/40">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-3">
            <Feat icon={<Wand2 className="h-5 w-5"/>}          title="Smart clipping"   body="Our model finds hook to payoff to CTA frames in any long-form video."/>
            <Feat icon={<Scissors className="h-5 w-5"/>}       title="Auto captions"    body="99% accurate transcripts in 50 caption styles - burned-in or SRT."/>
            <Feat icon={<Calendar className="h-5 w-5"/>}      title="Auto publishing"  body="Schedule up to 6 platforms per clip. We retry on failures."/>
            <Feat icon={<BarChart3 className="h-5 w-5"/>}     title="Viral scoring"    body="14 audio and visual signals predict which clips will hit."/>
            <Feat icon={<ShieldCheck className="h-5 w-5"/>}   title="Brand safe"       body="Brand kits, watermarks, and approval workflow for teams."/>
            <Feat icon={<Sparkles className="h-5 w-5"/>}       title="Templates"        body="Hook payoff, QA pullout, demo reveal - 8 proven launch templates."/>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-20">
          <div className="h2 max-w-3xl">"ClipForge turned 40 hours of interviews into a TikTok channel that hit 400K subscribers. We cut post-production by 92%."</div>
          <div className="mt-4 text-sm text-muted">- Priya Patel, host of Founder AMA</div>
          <div className="mt-12 grid gap-6 md:grid-cols-4">
            <Stat label="Clips generated" value="1.2M+"/>
            <Stat label="Avg. views / clip" value="38K"/>
            <Stat label="Hours saved / mo"  value="120+"/>
            <Stat label="Platforms covered" value="9"/>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-4 pb-24 text-center">
          <h2 className="h2">Ready to ship 30 clips this week?</h2>
          <p className="mt-3 text-muted">Free 60 minutes. No credit card. Cancel anytime.</p>
          <div className="mt-6 flex justify-center gap-3">
            <Link href="/signup" className="btn-p">Start free</Link>
            <Link href="/contact" className="btn-g">Talk to sales</Link>
          </div>
        </section>
      </main>
      <SiteFooter/>
    </div>
  );
}
function Feat({ icon, title, body }:{ icon:React.ReactNode; title:string; body:string }) {
  return <div className="rounded-2xl border border-border bg-panel p-6"><div className="grid h-10 w-10 place-items-center rounded-xl bg-brand/15 text-brand">{icon}</div><div className="mt-4 font-semibold">{title}</div><p className="mt-1 text-sm text-muted">{body}</p></div>;
}
function PhoneMock({ title, score, handle, thumb, tall=false }:{ title:string; score:number; handle:string; thumb:string; tall?:boolean }) {
  return (
    <div className={"relative "+(tall?"row-span-2 ":"")+"aspect-[9/16] overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-brand/30 via-panel to-accent/20"}>
      <div className="absolute inset-0 grid place-items-center"><span className="grid h-14 w-14 place-items-center rounded-full bg-white/10 text-lg font-semibold text-white/90">{thumb}</span></div>
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-3">
        <div className="line-clamp-2 text-xs font-medium text-white">{title}</div>
        <div className="mt-1 flex items-center justify-between text-[11px] text-white/70"><span>{handle}</span><span>SCORE {score}</span></div>
      </div>
    </div>
  );
}
function Stat({ label, value }:{ label:string; value:string }) {
  return <div><div className="text-3xl font-semibold text-ink">{value}</div><div className="text-sm text-muted">{label}</div></div>;
}
