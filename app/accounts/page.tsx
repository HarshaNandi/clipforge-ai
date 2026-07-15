import { Sidebar, Topbar } from "@/components/sidebar";
import { Card, Badge, PlatformPill } from "@/components/ui";
import { accounts } from "@/lib/mock-data";
import { formatNumber } from "@/lib/utils";
import { CheckCircle2, Plug, Unplug } from "lucide-react";

export default function AccountsPage() {
  return (
    <div className="flex min-h-screen">
      <Sidebar/>
      <div className="flex-1 px-4 py-2">
        <Topbar title="Connected accounts" subtitle="Publish to your channels with one click."/>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {accounts.map(a=> (
            <Card key={a.id}>
              <div className="flex items-center justify-between">
                <PlatformPill platform={a.platform} size="md"/>
                <Badge tone={a.connected?"success":"muted"}>{a.connected? <><CheckCircle2 className="h-3.5 w-3.5"/> Connected</> : <><Unplug className="h-3.5 w-3.5"/> Disconnected</>}</Badge>
              </div>
              <div className="mt-4 text-xl font-semibold">{a.handle}</div>
              <div className="mt-1 text-sm text-muted">{a.verified?"Verified account":"Standard account"}</div>
              <div className="mt-5 grid grid-cols-3 gap-2 text-sm">
                <Small label="Followers" value={formatNumber(a.followers)}/>
                <Small label="Avg views" value={formatNumber(a.avgViews)}/>
                <Small label="Posts"     value={String(a.posts)}/>
              </div>
              <div className="mt-5 flex gap-2">{a.connected? <button className="btn-g flex-1"><Unplug className="h-4 w-4"/> Disconnect</button> : <button className="btn-p flex-1"><Plug className="h-4 w-4"/> Connect</button>}</div>
            </Card>
          ))}
        </div>

        <Card className="mt-6">
          <div className="label">OAuth scopes requested</div>
          <ul className="mt-3 grid gap-2 text-sm text-muted md:grid-cols-2">
            <li>* Read your public profile, follower count, posts.</li>
            <li>* Upload short-form video (max 60s, 9:16).</li>
            <li>* Schedule posts to your queue.</li>
            <li>* Read post analytics (views, likes, comments, shares).</li>
          </ul>
          <p className="mt-3 text-xs text-muted">We never write to your DMs or modify existing posts. Tokens stored AES-256 at rest. You can revoke at any time.</p>
        </Card>
      </div>
    </div>
  );
}
function Small({ label, value }:{ label:string; value:string }) {
  return <div className="rounded-xl border border-border bg-surface p-3"><div className="label">{label}</div><div className="mt-1 text-base font-semibold">{value}</div></div>;
}
