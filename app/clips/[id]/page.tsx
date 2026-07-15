import { Sidebar, Topbar } from "@/components/sidebar";
import { Card, Badge, PlatformPill } from "@/components/ui";
import { VideoPreview } from "@/components/video-preview";
import { accounts, clips } from "@/lib/mock-data";
import { notFound } from "next/navigation";
import { formatRelative, formatNumber } from "@/lib/utils";
import { Eye, Heart, MessageSquare, Share2, Bookmark, Sparkles, Pencil, Send, Repeat2, Wand2 } from "lucide-react";
import Link from "next/link";

export default async function ClipDetail({ params }:{ params: Promise<{id:string}> }) {
  const { id } = await params;
  const c = clips.find(x=>x.id===id);
  if (!c) return notFound();
  const chosenAccounts = accounts.filter(a => c.platforms.includes(a.platform));
  return (
    <div className="flex min-h-screen">
      <Sidebar/>
      <div className="flex-1 px-4 py-2">
        <Topbar title={c.title} subtitle={c.durationSec+"s - "+c.platforms.length+" platforms - viral score "+c.score}/>
        <div className="grid gap-4 lg:grid-cols-3">
          <Card className="lg:col-span-2">
            <div className="grid gap-4 md:grid-cols-[260px_1fr]">
              <VideoPreview thumbnail={c.thumbnail} label={c.title} durationSec={c.durationSec}/>
              <div>
                <Badge tone={c.status==="published"?"success":c.status==="scheduled"?"brand":c.status==="processing"?"warn":c.status==="failed"?"danger":"default"}>{c.status}</Badge>
                <div className="mt-2 text-xl font-semibold">{c.title}</div>
                <p className="mt-2 text-sm text-muted">Hook to payoff to CTA structure. Editor preview uses auto-generated captions (style clean sans, 95% confidence).</p>
                <div className="mt-4 grid grid-cols-3 gap-3 text-sm">
                  <Stat label="Views"    val={formatNumber(c.views)}    icon={<Eye/>} />
                  <Stat label="Likes"    val={formatNumber(c.likes)}    icon={<Heart/>} />
                  <Stat label="Comments" val={formatNumber(c.comments)} icon={<MessageSquare/>}/>
                  <Stat label="Shares"   val={formatNumber(c.shares)}   icon={<Share2/>} />
                  <Stat label="Saves"    val={formatNumber(c.saves)}    icon={<Bookmark/>}/>
                  <Stat label="Score"    val={String(c.score||"-")}     icon={<Sparkles/>}/>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  <button className="btn-g"><Pencil className="h-4 w-4"/> Edit captions</button>
                  <button className="btn-g"><Wand2 className="h-4 w-4"/> Re-format 9:16</button>
                  <button className="btn-g"><Repeat2 className="h-4 w-4"/> Repost</button>
                  <button className="btn-p"><Send className="h-4 w-4"/> Publish / Reschedule</button>
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-border bg-surface p-4">
              <div className="label">Transcript preview</div>
              <p className="mt-2 text-sm leading-relaxed text-ink/90">
                [0:00] <span className="bg-brand/15">If I had to 3x my MRR in 90 days, here is the one thing I would do.</span><br/>
                [0:06] Most founders over-index on output. Under-index on this.
                [0:14] Customer convos. Every. Single. Week. Just 5 calls, ...<br/>
                [0:31] After 30 days we doubled our pipeline, halved CAC, ...
              </p>
            </div>
          </Card>

          <Card>
            <div className="label">Publishing</div>
            <div className="mt-3 space-y-3">
              {chosenAccounts.length===0
                ? <div className="text-sm text-muted">No platforms picked yet. Choose accounts to publish.</div>
                : chosenAccounts.map(a => (
                  <div key={a.id} className="flex items-center justify-between rounded-xl border border-border bg-surface p-3 text-sm">
                    <div className="flex items-center gap-3"><PlatformPill platform={a.platform}/><div><div className="font-medium">{a.handle}</div><div className="text-xs text-muted">{formatNumber(a.followers)} followers</div></div></div>
                    <Badge tone={c.status==="published" ? "success" : (c.status==="scheduled" ? "brand" : "muted")}>{c.status}</Badge>
                  </div>
                ))}
              <Link href="/accounts" className="btn-g w-full">Manage connected accounts</Link>
            </div>

            <div className="mt-6 label">Schedule</div>
            <div className="mt-2 space-y-2 text-sm">
              {c.publishedAt && <div className="flex items-center justify-between"><span>Published</span><span className="text-muted">{formatRelative(c.publishedAt)}</span></div>}
              {c.scheduledAt && <div className="flex items-center justify-between"><span>Scheduled for</span><span className="text-muted">{formatRelative(c.scheduledAt)}</span></div>}
              {c.createdAt   && <div className="flex items-center justify-between"><span>Created</span><span className="text-muted">{formatRelative(c.createdAt)}</span></div>}
            </div>

            {c.tags.length>0 && (
              <div className="mt-6">
                <div className="label">Tags</div>
                <div className="mt-2 flex flex-wrap gap-1.5">{c.tags.map(t => <span key={t} className="chip">{t}</span>)}</div>
              </div>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
}
function Stat({ label, val, icon }:{ label:string; val:string; icon:React.ReactNode }) {
  return <div className="rounded-xl border border-border bg-surface p-3"><div className="label flex items-center gap-1">{icon} {label}</div><div className="mt-1 text-lg font-semibold">{val}</div></div>;
}
