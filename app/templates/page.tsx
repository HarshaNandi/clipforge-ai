import { Sidebar, Topbar } from "@/components/sidebar";
import { Card, Badge } from "@/components/ui";
import { formatNumber } from "@/lib/utils";
import { Filter, Plus } from "lucide-react";

const templates = [
  { id:"t1", name:"Hook Payoff",         category:"Talk",        preview:"HPP", used:12400 },
  { id:"t2", name:"QA Pullout",          category:"Podcast",     preview:"QAP", used:9800 },
  { id:"t3", name:"Code walkthrough",    category:"Tutorial",    preview:"CWT", used:7200 },
  { id:"t4", name:"Hot take thread",     category:"Shorts",      preview:"HTT", used:21000 },
  { id:"t5", name:"Customer quote",      category:"Testimonial", preview:"CQT", used:5400 },
  { id:"t6", name:"Demo reveal",         category:"Product",     preview:"DRV", used:15600 },
  { id:"t7", name:"Founder deck",        category:"Pitch",       preview:"FDK", used:6200 },
  { id:"t8", name:"Conference mic drop", category:"Event",       preview:"CMD", used:8200 }
];

export default function TemplatesPage() {
  return (
    <div className="flex min-h-screen">
      <Sidebar/>
      <div className="flex-1 px-4 py-2">
        <Topbar title="Templates" subtitle="Save your editing style and reuse it."/>
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <button className="btn-g"><Filter className="h-4 w-4"/> All categories</button>
          <button className="btn-p"><Plus className="h-4 w-4"/> Create template</button>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {templates.map(t=> (
            <Card key={t.id}>
              <div className="grid h-28 place-items-center rounded-xl border border-border bg-gradient-to-br from-brand/30 via-surface to-accent/20 text-xl font-semibold text-white">{t.preview}</div>
              <div className="mt-3 flex items-center justify-between"><Badge tone="brand">{t.category}</Badge><span className="text-xs text-muted">{formatNumber(t.used)} uses</span></div>
              <div className="mt-2 font-medium">{t.name}</div>
              <p className="mt-1 text-sm text-muted">Hook to payoff to CTA. Includes 6 caption presets.</p>
              <div className="mt-4 flex gap-2"><button className="btn-g flex-1 text-sm">Preview</button><button className="btn-p flex-1 text-sm">Use template</button></div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
