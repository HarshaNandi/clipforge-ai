"use client";
import { Sidebar, Topbar } from "@/components/sidebar";
import { Card, Badge, PlatformPill } from "@/components/ui";
import { VideoPreview } from "@/components/video-preview";
import { clips } from "@/lib/mock-data";
import { useMemo, useState } from "react";
import { Search, Filter, Calendar, Sparkles, CheckSquare, Square } from "lucide-react";
import { cn } from "@/lib/utils";

const TABS = ["all","draft","processing","ready","scheduled","published","failed"] as const;
type Tab = typeof TABS[number];

export default function ClipsPage() {
  const [tab, setTab] = useState<Tab>("all");
  const [q, setQ] = useState("");
  const [selected, setSelected] = useState<Set<string>>(new Set());

  const filtered = useMemo(()=> clips.filter(c => (tab==="all" || c.status===tab) && (q==="" || c.title.toLowerCase().includes(q.toLowerCase()))), [tab,q]);
  const toggle = (id:string) => { const ns = new Set(selected); ns.has(id)?ns.delete(id):ns.add(id); setSelected(ns); };

  return (
    <div className="flex min-h-screen">
      <Sidebar/>
      <div className="flex-1 px-4 py-2">
        <Topbar title="Clips" subtitle="Auto-generated short-form clips ready to publish."/>

        <div className="mb-4 flex flex-wrap items-center gap-2">
          <div className="relative flex-1 min-w-[14rem]">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted"/>
            <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search clips..." className="w-full rounded-xl border border-border bg-panel py-2 pl-9 pr-3 text-sm focus:border-brand focus:outline-none"/>
          </div>
          <button className="btn-g"><Filter className="h-4 w-4"/> Filter</button>
          <button className="btn-g"><Calendar className="h-4 w-4"/> Schedule</button>
          <button className="btn-p"><Sparkles className="h-4 w-4"/> Publish {selected.size? "("+selected.size+")":""}</button>
        </div>

        <div className="mb-4 flex flex-wrap gap-2 text-sm">
          {TABS.map(t=> {
            const count = t==="all" ? clips.length : clips.filter(c=>c.status===t).length;
            const active = t===tab;
            return (
              <button key={t} onClick={()=>setTab(t)} className={cn("rounded-full border px-3 py-1", active?"border-brand bg-brand/15 text-brand":"border-border bg-panel text-muted hover:text-ink")}>
                {t}{" "}<span className="text-xs opacity-70">({count})</span>
              </button>
            );
          })}
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map(c => {
            const sel = selected.has(c.id);
            return (
              <Card key={c.id} className={cn("relative", sel && "border-brand shadow-glow")}>
                <button onClick={()=>toggle(c.id)} className="absolute left-3 top-3 z-10 grid h-7 w-7 place-items-center rounded-md border border-border bg-bg/70 backdrop-blur">
                  {sel ? <CheckSquare className="h-4 w-4 text-brand"/> : <Square className="h-4 w-4 text-muted"/>}
                </button>
                <VideoPreview thumbnail={c.thumbnail} label={c.title} durationSec={c.durationSec}/>
                <div className="mt-3 flex items-center justify-between">
                  <Badge tone={c.status==="published"?"success":c.status==="scheduled"?"brand":c.status==="processing"?"warn":c.status==="failed"?"danger":"default"}>{c.status}</Badge>
                  <span className="text-xs text-muted">SCORE {c.score}</span>
                </div>
                <div className="mt-1 truncate text-sm font-medium">{c.title}</div>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {c.platforms.length===0 ? <span className="text-xs text-muted">Unpublished</span> : c.platforms.map(p=> <PlatformPill key={p} platform={p}/>)}
                </div>
                <div className="mt-3 flex justify-between text-xs text-muted">
                  <span>{c.views.toLocaleString()} views</span>
                  <a href={"/clips/"+c.id} className="text-brand hover:underline">Open</a>
                </div>
              </Card>
            );
          })}
        </div>

        {filtered.length===0 && <div className="mt-8 rounded-2xl border border-dashed border-border p-10 text-center text-muted">No clips match these filters.</div>}
      </div>
    </div>
  );
}
