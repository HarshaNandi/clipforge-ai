import { Sidebar, Topbar } from "@/components/sidebar";
import { Card, Badge, PlatformPill } from "@/components/ui";
import { clips } from "@/lib/mock-data";

const days = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];
const slots = ["08:00","11:00","14:00","17:00","20:00"];

export default function SchedulePage() {
  const items = clips.filter(c=>c.scheduledAt);
  return (
    <div className="flex min-h-screen">
      <Sidebar/>
      <div className="flex-1 px-4 py-2">
        <Topbar title="Schedule" subtitle="Auto-publish to your connected channels."/>
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <button className="btn-g">Week of Jul 6 - Jul 12</button>
          <span className="ml-auto text-sm text-muted">{items.length} scheduled clips</span>
          <button className="btn-p">Add slot</button>
        </div>
        <div className="grid grid-cols-7 gap-2 text-xs text-muted">{days.map(d=> <div key={d} className="px-2 py-1">{d}</div>)}</div>
        <div className="grid grid-cols-7 gap-2">
          {Array.from({length:7}).map((_,d)=> (
            <Card key={d} className="min-h-[280px] space-y-2 p-3">
              {slots.map((slot)=> {
                const item = items[(d*slots.length + slots.indexOf(slot)) % Math.max(items.length,1)];
                return item ? (
                  <div key={slot} className="rounded-xl border border-border bg-surface p-2">
                    <div className="flex items-center justify-between text-[11px] text-muted"><span>{slot}</span><Badge tone="brand">{item.status}</Badge></div>
                    <div className="mt-1 line-clamp-2 text-sm font-medium">{item.title}</div>
                    <div className="mt-1 flex flex-wrap gap-1">{item.platforms.map(p=> <PlatformPill key={p} platform={p}/>)}</div>
                  </div>
                ) : (
                  <div key={slot} className="rounded-xl border border-dashed border-border p-2 text-[11px] text-muted">{slot} - free</div>
                );
              })}
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
