import { Sidebar, Topbar } from "@/components/sidebar";
import { Card, StatCard, Badge, PlatformPill } from "@/components/ui";
import { ViewsChart, PlatformBars, PlatformPie } from "@/components/charts";
import { currentUser, accounts, clips, projects, viewsSeries, platformBreakdown } from "@/lib/mock-data";
import { Eye, Heart, Sparkles, Film, Wand2, ArrowUpRight, Search } from "lucide-react";
import Link from "next/link";
import { formatRelative, formatNumber } from "@/lib/utils";

export default function Dashboard() {
  const totalViews = clips.reduce((s,c)=>s+c.views,0);
  const totalPublished = clips.filter(c=>c.status==="published").length;
  const minutesLeft = currentUser.minutesQuota - currentUser.minutesUsed;
  return (
    <div className="flex min-h-screen">
      <Sidebar/>
      <div className="flex-1 px-4 py-2">
        <Topbar title={"Welcome back, "+currentUser.name.split(" ")[0]} subtitle="Here is how your content is performing."/>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <StatCard label="Total views (30d)" value={formatNumber(totalViews)} delta={{value:"+34%", positive:true}} icon={<Eye/>}/>
          <StatCard label="Published clips"   value={String(totalPublished)}     delta={{value:"+6 vs last week", positive:true}} icon={<Film/>} hue="accent"/>
          <StatCard label="Avg viral score"   value="88"                         delta={{value:"+3 points", positive:true}} icon={<Sparkles/>} hue="warn"/>
          <StatCard label="Minutes left"      value={minutesLeft+" / "+currentUser.minutesQuota}  delta={{value:"22% used", positive:false}} icon={<Wand2/>} hue="success"/>
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          <Card className="lg:col-span-2">
            <div className="mb-3 flex items-end justify-between">
              <div><div className="label">Daily views (last 30 days)</div><div className="mt-1 text-2xl font-semibold">{formatNumber(viewsSeries.reduce((s,d)=>s+d.views,0))}</div></div>
              <div className="text-sm text-muted">Trend <span className="text-success">UP +18%</span></div>
            </div>
            <ViewsChart data={viewsSeries}/>
          </Card>
          <Card><div className="label">Views by platform</div><div className="mt-3"><PlatformPie data={platformBreakdown}/></div></Card>
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          <Card className="lg:col-span-2">
            <div className="flex items-center justify-between"><div className="label">Leaderboard - top clips</div><Link href="/analytics" className="text-xs text-muted hover:text-ink">Open analytics</Link></div>
            <div className="mt-3 divide-y divide-border">
              {[...clips].filter(c=>c.views>0).sort((a,b)=>b.views-a.views).slice(0,5).map((c,i)=> (
                <div key={c.id} className="flex items-center justify-between py-3 text-sm">
                  <div className="flex items-center gap-3"><span className="grid h-7 w-7 place-items-center rounded-lg bg-surface text-xs text-muted">{i+1}</span><span className="font-medium">{c.title}</span></div>
                  <div className="flex items-center gap-4 text-muted"><span>{formatNumber(c.views)} views</span><Badge tone="brand">SCORE {c.score}</Badge></div>
                </div>
              ))}
            </div>
          </Card>
          <Card>
            <div className="label">Next on schedule</div>
            <div className="mt-3 space-y-3">
              {clips.filter(c=>c.status==="scheduled").map(c=> (
                <div key={c.id} className="rounded-xl border border-border bg-surface p-3">
                  <div className="flex items-center justify-between text-xs text-muted"><span>{c.scheduledAt ? formatRelative(c.scheduledAt) : "tbd"}</span><span>{c.durationSec}s</span></div>
                  <div className="mt-1 font-medium">{c.title}</div>
                  <div className="mt-2 flex flex-wrap gap-1.5">{c.platforms.map(p=> <PlatformPill key={p} platform={p}/>)}</div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          <Card>
            <div className="label">Connected accounts</div>
            <div className="mt-3 space-y-2">
              {accounts.map(a=> (
                <div key={a.id} className="flex items-center justify-between rounded-xl border border-border bg-surface p-3">
                  <div className="flex items-center gap-3"><PlatformPill platform={a.platform}/><div><div className="text-sm font-medium">{a.handle}</div><div className="text-xs text-muted">{formatNumber(a.followers)} followers</div></div></div>
                  <Badge tone={a.connected?"success":"muted"}>{a.connected?"Connected":"Disconnected"}</Badge>
                </div>
              ))}
            </div>
          </Card>
          <Card className="lg:col-span-2">
            <div className="flex items-center justify-between"><div className="label">Recent projects</div><Link href="/projects" className="text-xs text-muted hover:text-ink">All projects</Link></div>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              {projects.slice(0,4).map(p=> (
                <Link key={p.id} href={"/projects/"+p.id} className="rounded-xl border border-border bg-surface p-3 hover:bg-panel">
                  <div className="flex items-center justify-between"><Badge tone={p.status==="ready"?"success":p.status==="processing"?"warn":"default"}>{p.status}</Badge><span className="text-xs text-muted">{p.resolution}</span></div>
                  <div className="mt-2 font-medium">{p.title}</div>
                  <div className="mt-1 text-xs text-muted">{p.clipCount} clips - {p.fileSize}</div>
                </Link>
              ))}
            </div>
          </Card>
        </div>

        <div className="my-6 rounded-2xl border border-dashed border-border bg-panel/40 p-10 text-center">
          <Search className="mx-auto h-10 w-10 text-muted"/>
          <div className="mt-3 text-lg font-medium">Want 3x more views?</div>
          <p className="mt-1 text-sm text-muted">Upgrade to Pro for AI thumbnails, auto-scheduling, and brand kit enforcement.</p>
          <Link href="/pricing" className="btn-p mt-4 inline-flex">Upgrade to Pro <ArrowUpRight className="h-4 w-4"/></Link>
        </div>
      </div>
    </div>
  );
}
