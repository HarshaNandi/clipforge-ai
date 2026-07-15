import { Sidebar, Topbar } from "@/components/sidebar";
import { Card, StatCard, Badge, PlatformPill } from "@/components/ui";
import { ViewsChart, PlatformBars, PlatformPie } from "@/components/charts";
import { clips, viewsSeries, platformBreakdown } from "@/lib/mock-data";
import { formatNumber } from "@/lib/utils";
import { Eye, Heart, Sparkles, Clock } from "lucide-react";

export default function Analytics() {
  const totalViews = clips.reduce((s,c)=>s+c.views,0);
  const totalLikes = clips.reduce((s,c)=>s+c.likes,0);
  return (
    <div className="flex min-h-screen">
      <Sidebar/>
      <div className="flex-1 px-4 py-2">
        <Topbar title="Analytics" subtitle="Performance across every clip and platform."/>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <StatCard label="Total views" value={formatNumber(totalViews)} delta={{value:"+34%", positive:true}} icon={<Eye/>}/>
          <StatCard label="Total likes" value={formatNumber(totalLikes)} delta={{value:"+22%", positive:true}} icon={<Heart/>} hue="accent"/>
          <StatCard label="Avg viral"   value="88"                     delta={{value:"+3",   positive:true}} icon={<Sparkles/>} hue="warn"/>
          <StatCard label="Watch hours" value="14,210"                 delta={{value:"+8%",  positive:true}} icon={<Clock/>} hue="success"/>
        </div>
        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          <Card className="lg:col-span-2"><div className="label">Daily views (30d)</div><div className="mt-3"><ViewsChart data={viewsSeries}/></div></Card>
          <Card><div className="label">Platform mix</div><div className="mt-3"><PlatformPie data={platformBreakdown}/></div></Card>
        </div>
        <Card className="mt-4">
          <div className="flex items-center justify-between"><div className="label">Top performing clips</div><Badge tone="brand">Updated hourly</Badge></div>
          <div className="mt-3 overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="text-left text-xs uppercase text-muted"><tr><th className="py-2">Clip</th><th>Platforms</th><th>Views</th><th>Likes</th><th>Score</th></tr></thead>
              <tbody>
                {[...clips].filter(c=>c.views>0).sort((a,b)=>b.views-a.views).map(c=> (
                  <tr key={c.id} className="border-t border-border">
                    <td className="py-3"><a href={"/clips/"+c.id} className="font-medium hover:text-brand">{c.title}</a></td>
                    <td><div className="flex flex-wrap gap-1">{c.platforms.map(p=> <PlatformPill key={p} platform={p}/>)}</div></td>
                    <td>{formatNumber(c.views)}</td>
                    <td>{formatNumber(c.likes)}</td>
                    <td><Badge tone={c.score>=90?"success":c.score>=80?"brand":"warn"}>SCORE {c.score}</Badge></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
        <Card className="mt-4"><div className="label">Top platforms</div><div className="mt-3"><PlatformBars data={platformBreakdown}/></div></Card>
      </div>
    </div>
  );
}
