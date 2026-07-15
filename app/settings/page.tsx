import { Sidebar, Topbar } from "@/components/sidebar";
import { Card, Badge } from "@/components/ui";
import { currentUser } from "@/lib/mock-data";
import { User, Lock, Bell, CreditCard, Plug, Trash2 } from "lucide-react";

export default function Settings() {
  return (
    <div className="flex min-h-screen">
      <Sidebar/>
      <div className="flex-1 px-4 py-2">
        <Topbar title="Settings" subtitle="Workspace, billing and integrations."/>
        <div className="grid gap-4 lg:grid-cols-[1fr_280px]">
          <div className="space-y-6">
            <Section icon={<User/>} title="Profile">
              <Row label="Name"  value={currentUser.name}/>
              <Row label="Email" value={currentUser.email}/>
              <Row label="Plan"  value={<Badge tone="brand">{currentUser.plan}</Badge>}/>
            </Section>
            <Section icon={<Bell/>} title="Notifications">
              <Toggle label="Email me when a clip gets > 50K views" />
              <Toggle label="Slack alerts on publish failures" />
              <Toggle label="Weekly performance recap" on />
            </Section>
            <Section icon={<Plug/>} title="Integrations">
              <Row label="Slack"     value={<Badge tone="success">Connected</Badge>}/>
              <Row label="Notion"    value={<Badge tone="muted">Not connected</Badge>}/>
              <Row label="Zapier"    value={<Badge tone="success">Connected</Badge>}/>
              <Row label="Webhook"   value={<code className="text-xs">https://api.clipforge.io/v1/hooks/u1</code>}/>
            </Section>
            <Section icon={<CreditCard/>} title="Billing">
              <Row label="Plan"          value={<Badge tone="brand">Pro - $79/mo</Badge>}/>
              <Row label="Minutes used"  value={currentUser.minutesUsed+" / "+currentUser.minutesQuota}/>
              <Row label="Next charge"   value="Aug 1, 2026"/>
              <div className="mt-3 flex gap-2"><button className="btn-g">Manage subscription</button><button className="btn-g">Invoices</button></div>
            </Section>
            <Section icon={<Trash2/>} title="Danger zone">
              <p className="text-sm text-muted">Deleting your account removes all projects, clips, and connected accounts.</p>
              <button className="btn-g mt-3 text-danger">Delete workspace</button>
            </Section>
          </div>
          <aside className="space-y-4">
            <Card>
              <div className="label">Workspace</div>
              <div className="mt-3 flex items-center gap-3">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand/20 text-lg font-semibold text-brand">CF</span>
                <div><div className="font-semibold">ClipForge Studio</div><div className="text-xs text-muted">Pro - 5 seats</div></div>
              </div>
            </Card>
            <Card>
              <div className="label">Usage</div>
              <div className="mt-2 h-2 overflow-hidden rounded-full bg-surface"><div className="h-full bg-brand" style={{ width: ((currentUser.minutesUsed/currentUser.minutesQuota)*100)+"%" }}/></div>
              <div className="mt-2 text-xs text-muted">{currentUser.minutesUsed} of {currentUser.minutesQuota} min used</div>
            </Card>
            <Card>
              <div className="label">API key</div>
              <div className="mt-2 flex items-center gap-2"><code className="flex-1 truncate rounded-md border border-border bg-surface px-2 py-1 text-xs">cf_sk_live_xxxxxxxxxxxxxxxxxxxx</code><button className="btn-g text-xs">Copy</button></div>
              <p className="mt-2 text-xs text-muted">Use this key for the REST API. Do not share.</p>
            </Card>
          </aside>
        </div>
      </div>
    </div>
  );
}
function Section({ icon, title, children }:{ icon: React.ReactNode; title:string; children: React.ReactNode }) {
  return <Card><div className="mb-3 flex items-center gap-2"><span className="grid h-8 w-8 place-items-center rounded-lg bg-surface text-brand">{icon}</span><div className="font-semibold">{title}</div></div><div className="divide-y divide-border">{children}</div></Card>;
}
function Row({ label, value }:{ label:string; value: React.ReactNode }) {
  return <div className="flex items-center justify-between py-3 text-sm"><div className="text-muted">{label}</div><div>{value}</div></div>;
}
function Toggle({ label, on }:{ label:string; on?:boolean }) {
  return <div className="flex items-center justify-between py-3 text-sm"><div>{label}</div><span className={"relative h-6 w-11 rounded-full transition " + (on?"bg-brand":"bg-surface border border-border")}><span className={"absolute top-0.5 h-5 w-5 rounded-full bg-white transition " + (on?"left-5":"left-0.5")}/></span></div>;
}
