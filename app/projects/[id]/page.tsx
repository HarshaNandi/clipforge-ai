import { Sidebar, Topbar } from "@/components/sidebar";
import { Card, Badge, PlatformPill } from "@/components/ui";
import { VideoPreview } from "@/components/video-preview";
import { projects, clips } from "@/lib/mock-data";
import { notFound } from "next/navigation";
import { formatRelative, formatNumber } from "@/lib/utils";
import { Clock, HardDrive, Eye, Star, Download, Scissors } from "lucide-react";

export default async function ProjectDetail({ params }:{ params: Promise<{id:string}> }) {
  const { id } = await params;
  const p = projects.find(x=>x.id===id);
  if (!p) return notFound();
  const projectClips = clips.filter(c=>c.projectId===id);
  return (
    <div className="flex min-h-screen">
      <Sidebar/>
      <div className="flex-1 px-4 py-2">
        <Topbar title={p.title} subtitle={p.resolution+" - "+p.fileSize+" - "+projectClips.length+" clips"}/>
        <div className="grid gap-4 lg:grid-cols-3">
          <Card className="lg:col-span-2">
            <div className="grid gap-3 md:grid-cols-3">
              <Stat label="Length" icon={<Clock className="h-3 w-3"/>} value={formatNumber(Math.round(p.durationSec/60))+" min"} sub={"#"+Math.round(p.durationSec)+" sec"}/>
              <Stat label="Resolution" value={p.resolution} sub="Portrait & landscape export"/>
              <Stat label="File size" icon={<HardDrive className="h-3 w-3"/>} value={p.fileSize} sub="H.264 - AAC"/>
            </div>
            <div className="mt-5 flex flex-wrap items-center gap-2">
              <Badge tone="success">{p.status}</Badge>
              <span className="text-xs text-muted">Updated {formatRelative(p.updatedAt)}</span>
              <span className="ml-auto flex gap-2">
                <button className="btn-g"><Scissors className="h-4 w-4"/> Re-clip</button>
                <button className="btn-g"><Download className="h-4 w-4"/> Source file</button>
                <button className="btn-p">Publish all ready</button>
              </span>
            </div>
            <div className="mt-6">
              <div className="label">Clips generated from this project</div>
              <div className="mt-3 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {projectClips.length === 0 ? (
                  <div className="col-span-full rounded-xl border border-dashed border-border p-6 text-center text-muted text-sm">No clips yet. Run the clipper to generate.</div>
                ) : projectClips.map(c=> (
                  <a key={c.id} href={"/clips/"+c.id} className="group block">
                    <VideoPreview thumbnail={c.thumbnail} label={c.title} durationSec={c.durationSec}/>
                    <div className="mt-2 flex items-center justify-between">
                      <Badge tone={c.status==="published"?"success":c.status==="scheduled"?"brand":c.status==="processing"?"warn":c.status==="failed"?"danger":"default"}>{c.status}</Badge>
                      <span className="text-xs text-muted">SCORE {c.score}</span>
                    </div>
                    <div className="mt-1 text-sm font-medium">{c.title}</div>
                    <div className="flex flex-wrap gap-1.5 pt-1">{c.platforms.map(pp=> <PlatformPill key={pp} platform={pp}/>)}</div>
                  </a>
                ))}
              </div>
            </div>
          </Card>

          <Card>
            <div className="label">Viral score distribution</div>
            <div className="mt-3 space-y-2">
              {projectClips.map(c=> (
                <div key={c.id} className="flex items-center gap-3 text-sm">
                  <span className="w-32 truncate">{c.title}</span>
                  <div className="h-2 flex-1 overflow-hidden rounded-full bg-surface"><div className="h-full bg-gradient-to-r from-brand to-accent" style={{ width: (c.score || 0)+"%" }}/></div>
                  <span className="w-8 text-right text-muted">{c.score}</span>
                </div>
              ))}
              {projectClips.length===0 && <div className="text-sm text-muted">No clips yet.</div>}
            </div>
            <div className="mt-6">
              <div className="label">Total reach</div>
              <div className="mt-1 grid grid-cols-3 gap-3 text-sm">
                <Stat label="Views"    value={formatNumber(projectClips.reduce((s,c)=>s+c.views,0))} icon={<Eye/>}/>
                <Stat label="Top score" value={String(Math.max(0,...projectClips.map(c=>c.score)))} icon={<Star/>}/>
                <Stat label="Platforms" value={String(new Set(projectClips.flatMap(c=>c.platforms)).size)}/>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
function Stat({ label, value, sub, icon }:{ label:string; value:string; sub?:string; icon?:React.ReactNode }) {
  return (
    <div className="rounded-xl border border-border bg-surface p-3">
      <div className="label flex items-center gap-1">{icon}{label}</div>
      <div className="mt-1 text-lg font-semibold">{value}</div>
      {sub && <div className="text-xs text-muted">{sub}</div>}
    </div>
  );
}
