import { Sidebar, Topbar } from "@/components/sidebar";
import { Badge, Card } from "@/components/ui";
import { projects } from "@/lib/mock-data";
import { formatRelative, formatNumber } from "@/lib/utils";
import Link from "next/link";
import { Plus, Upload, Filter } from "lucide-react";

export default function Projects() {
  return (
    <div className="flex min-h-screen">
      <Sidebar/>
      <div className="flex-1 px-4 py-2">
        <Topbar title="Projects" subtitle="Source long-form videos we will clip."/>
        <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-sm text-muted">
            <button className="btn-g"><Filter className="h-4 w-4"/> All ({projects.length})</button>
            <button className="btn-g">Ready ({projects.filter(p=>p.status==="ready").length})</button>
            <button className="btn-g">Processing ({projects.filter(p=>p.status==="processing").length})</button>
          </div>
          <div className="flex items-center gap-2"><button className="btn-g"><Upload className="h-4 w-4"/> Import URL</button><button className="btn-p"><Plus className="h-4 w-4"/> New project</button></div>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {projects.map(p=> (
            <Link key={p.id} href={"/projects/"+p.id} className="rounded-2xl border border-border bg-panel p-4 hover:shadow-glow">
              <div className="grid h-32 place-items-center rounded-xl border border-border bg-gradient-to-br from-brand/30 via-surface to-accent/20 text-2xl font-semibold text-white">{p.thumbnail}</div>
              <div className="mt-3 flex items-center justify-between"><Badge tone={p.status==="ready"?"success":p.status==="processing"?"warn":"default"}>{p.status}</Badge><span className="text-xs text-muted">{p.resolution}</span></div>
              <div className="mt-2 truncate font-medium">{p.title}</div>
              <div className="mt-1 text-xs text-muted">{p.source}</div>
              <div className="mt-3 grid grid-cols-3 gap-2 text-xs text-muted">
                <div><div className="text-ink/90">{formatNumber(Math.round(p.durationSec/60))}m</div>length</div>
                <div><div className="text-ink/90">{p.clipCount}</div>clips</div>
                <div><div className="text-ink/90">{p.fileSize}</div>size</div>
              </div>
              <div className="mt-3 text-xs text-muted">Updated {formatRelative(p.updatedAt)}</div>
            </Link>
          ))}
        </div>
        <div className="my-6 rounded-2xl border border-dashed border-border bg-panel/40 p-10 text-center"><div className="mx-auto h-10 w-10 text-muted">?</div><div className="mt-3 text-lg font-medium">Need more source video?</div><p className="mt-1 text-sm text-muted">Import a YouTube URL, drop a podcast audio, or paste a Zoom link.</p><button className="btn-p mt-4 inline-flex"><Upload className="h-4 w-4"/> Import source</button></div>
      </div>
    </div>
  );
}
