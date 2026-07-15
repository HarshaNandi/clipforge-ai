import { SiteHeader, SiteFooter } from "@/components/site-header";
import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const ALL_PLANS = [
  { id:"free",    name:"Free",    price:0,   desc:"Try ClipForge risk-free.",
    minutes:60, clipsPerMonth:5, platforms:2,
    features:["60 minutes of processing/month","Watermark on exports","2 connected platforms","Community support","720p export"],
    cta:"Start free" },
  { id:"creator", name:"Creator", price:24,  desc:"For solo creators who ship daily.",
    minutes:600, clipsPerMonth:50, platforms:6,
    features:["600 minutes per month","No watermark","6 connected platforms","AI captions in 50 styles","Viral scoring","1080p export"],
    cta:"Choose Creator" },
  { id:"pro",     name:"Pro",     price:79,  desc:"For growing brands and podcasts.",
    minutes:1800, clipsPerMonth:200, platforms:12,
    features:["1800 minutes per month","12 connected platforms","Auto-scheduling","Brand kit & templates","Advanced analytics","Priority support","API access"],
    highlighted:true, badge:"Most popular", cta:"Choose Pro" },
  { id:"team",    name:"Team",    price:199, desc:"For content teams & agencies.",
    minutes:5000, clipsPerMonth:"Unlimited", platforms:12,
    features:["5000 minutes per month","5 seats included","Roles & permissions","Approval workflow","SSO / SAML","Dedicated CSM","Custom exports"],
    cta:"Talk to sales" }
];

export default function Pricing() {
  return (
    <div className="grid-bg">
      <SiteHeader/>
      <main className="mx-auto max-w-7xl px-4 py-16">
        <div className="text-center">
          <span className="chip">Pricing</span>
          <h1 className="h1 mt-3">Simple pricing, fair usage.</h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted">Start free. Upgrade when you ship more clips. Cancel anytime.</p>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {ALL_PLANS.map(p => (
            <div key={p.id} className={cn("relative flex flex-col rounded-2xl border bg-panel p-6", p.highlighted?"border-brand shadow-glow":"border-border")}>
              {p.badge && <span className="absolute -top-2 left-6 rounded-full bg-brand px-2.5 py-0.5 text-xs font-medium text-white">{p.badge}</span>}
              <div className="font-semibold">{p.name}</div>
              <div className="mt-1 text-sm text-muted">{p.desc}</div>
              <div className="mt-6"><span className="text-4xl font-semibold">${p.price}</span><span className="ml-1 text-sm text-muted">/mo</span></div>
              <div className="mt-1 text-xs text-muted">{p.minutes} min - {p.clipsPerMonth} clips/mo - {p.platforms} platforms</div>
              <ul className="mt-6 flex-1 space-y-2 text-sm">{p.features.map(f=> <li key={f} className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-accent"/> {f}</li>)}</ul>
              <Link href={p.id==="team"?"/contact":"/signup"} className={cn("mt-6", p.highlighted?"btn-p":"btn-g")}>{p.cta} <ArrowRight className="h-4 w-4"/></Link>
            </div>
          ))}
        </div>
        <div className="mx-auto mt-16 max-w-3xl">
          <h2 className="text-xl font-semibold">Frequently asked</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <Faq q="Do you take a percentage of my revenue?" a="Never. Pricing is flat per month."/>
            <Faq q="Can I bring my own captions?" a="Yes. Upload .srt, .vtt or paste a transcript."/>
            <Faq q="Is my video data used to train models?" a="No. Customers on Pro+ get an enterprise no-train configuration."/>
            <Faq q="How fast is processing?" a="Most clips render in under 4 minutes for a 60-minute source."/>
          </div>
        </div>
      </main>
      <SiteFooter/>
    </div>
  );
}
function Faq({ q, a }:{ q:string; a:string }) {
  return <div className="rounded-2xl border border-border bg-panel p-5"><div className="font-medium">{q}</div><p className="mt-1 text-sm text-muted">{a}</p></div>;
}
