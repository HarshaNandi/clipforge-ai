import * as React from "react";
import { cn } from "@/lib/utils";
export function Card({ className, ...p }: React.HTMLAttributes<HTMLDivElement>) { return <div className={cn("panel p-5", className)} {...p} />; }
export function StatCard({ label, value, delta, icon, hue="brand" }:{ label:string; value:string|number; delta?:{ value:string; positive?:boolean }; icon?:React.ReactNode; hue?:"brand"|"accent"|"warn"|"danger"|"success" }) {
  const ring: Record<string,string> = { brand:"from-brand/30", accent:"from-accent/30", warn:"from-warn/30", danger:"from-danger/30", success:"from-success/30" };
  return (
    <div className="relative overflow-hidden rounded-2xl border border-border bg-panel p-5">
      <div className={cn("pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br to-transparent opacity-60 blur-2xl", ring[hue])} />
      <div className="flex items-center justify-between">
        <span className="label">{label}</span>
        {icon && <span className="grid h-8 w-8 place-items-center rounded-lg border border-border bg-surface text-muted">{icon}</span>}
      </div>
      <div className="mt-2 text-3xl font-semibold tracking-tight">{value}</div>
      {delta && <div className={cn("mt-2 inline-flex rounded-full border px-2 py-0.5 text-xs", delta.positive?"border-success/40 bg-success/10 text-success":"border-danger/40 bg-danger/10 text-danger")}>{delta.positive?"UP ":"DOWN "}{delta.value}</div>}
    </div>
  );
}
export function Badge({ children, tone="default", className }:{ children:React.ReactNode; tone?:"default"|"brand"|"accent"|"warn"|"danger"|"success"|"muted"; className?:string }) {
  const tones: Record<string,string> = { default:"border-border bg-surface text-muted", brand:"border-brand/40 bg-brand/15 text-brand", accent:"border-accent/40 bg-accent/15 text-accent", warn:"border-warn/40 bg-warn/15 text-warn", danger:"border-danger/40 bg-danger/15 text-danger", success:"border-success/40 bg-success/15 text-success", muted:"border-border bg-panel text-muted" };
  return <span className={cn("inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-xs font-medium", tones[tone], className)}>{children}</span>;
}
export function PlatformPill({ platform, size="sm" }:{ platform:string; size?:"sm"|"md" }) {
  const meta:Record<string,{c:string;s:string}> = { youtube:{c:"#FF0033",s:"YT"}, tiktok:{c:"#25F4EE",s:"TT"}, instagram:{c:"#E1306C",s:"IG"}, twitter:{c:"#1DA1F2",s:"TW"}, linkedin:{c:"#0A66C2",s:"LI"}, facebook:{c:"#1877F2",s:"FB"} };
  const m = meta[platform] || {c:"#7A8093",s:platform.slice(0,2).toUpperCase()};
  return <span className={cn("inline-flex items-center gap-1.5 rounded-full border border-border bg-surface", size==="sm"?"px-2 py-0.5 text-xs":"px-3 py-1 text-sm")}><span className="rounded-full" style={{background:m.c, width:size==="sm"?8:10, height:size==="sm"?8:10}} />{m.s}</span>;
}
