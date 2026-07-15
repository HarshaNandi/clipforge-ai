import { Sidebar, Topbar } from "@/components/sidebar";
import { Card, Badge } from "@/components/ui";
import { formatDate } from "@/lib/utils";
import { Plus, MoreHorizontal, Mail } from "lucide-react";

const roleMeta: Record<string,{tone:"brand"|"accent"|"warn"|"muted"; desc:string}> = {
  owner:  { tone:"brand",  desc:"Full access, billing" },
  admin:  { tone:"warn",   desc:"Manage members & projects" },
  editor: { tone:"accent", desc:"Create & publish clips" },
  viewer: { tone:"muted",  desc:"View-only access" }
};

const team = [
  { id:"m1", name:"Alex Rivera",  email:"alex@clipforge.io",  role:"owner"  as const, avatar:"AR", joinedAt:"2025-03-12", status:"active"  as const },
  { id:"m2", name:"Priya Patel",  email:"priya@clipforge.io", role:"admin"  as const, avatar:"PP", joinedAt:"2025-10-15", status:"active"  as const },
  { id:"m3", name:"Jordan Lee",   email:"jordan@clipforge.io",role:"editor" as const, avatar:"JL", joinedAt:"2026-01-20", status:"active"  as const },
  { id:"m4", name:"Marco Silva",  email:"marco@clipforge.io", role:"editor" as const, avatar:"MS", joinedAt:"2026-03-04", status:"active"  as const },
  { id:"m5", name:"Sam Chen",     email:"sam@clipforge.io",   role:"editor" as const, avatar:"SC", joinedAt:"2026-05-12", status:"active"  as const },
  { id:"m6", name:"Nina Park",    email:"nina@clipforge.io",  role:"viewer" as const, avatar:"NP", joinedAt:"2026-06-22", status:"invited" as const }
];

export default function TeamPage() {
  return (
    <div className="flex min-h-screen">
      <Sidebar/>
      <div className="flex-1 px-4 py-2">
        <Topbar title="Team" subtitle="Invite teammates and set roles."/>
        <div className="mb-4 flex items-center justify-between">
          <div className="text-sm text-muted">{team.length} members - 5 seats used</div>
          <div className="flex gap-2"><button className="btn-g"><Mail className="h-4 w-4"/> Email invite</button><button className="btn-p"><Plus className="h-4 w-4"/> Add member</button></div>
        </div>
        <Card>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="text-left text-xs uppercase text-muted"><tr><th className="py-2">Member</th><th>Role</th><th>Status</th><th>Joined</th><th></th></tr></thead>
              <tbody>
                {team.map(m => (
                  <tr key={m.id} className="border-t border-border">
                    <td className="py-3">
                      <div className="flex items-center gap-3">
                        <span className="grid h-9 w-9 place-items-center rounded-full bg-brand/20 text-sm font-medium text-brand">{m.avatar}</span>
                        <div><div className="font-medium">{m.name}</div><div className="text-xs text-muted">{m.email}</div></div>
                      </div>
                    </td>
                    <td><Badge tone={roleMeta[m.role].tone}>{m.role}</Badge> <span className="ml-2 text-xs text-muted">{roleMeta[m.role].desc}</span></td>
                    <td><Badge tone={m.status==="active"?"success":"muted"}>{m.status}</Badge></td>
                    <td className="text-muted">{formatDate(m.joinedAt)}</td>
                    <td className="text-right"><button className="grid h-8 w-8 place-items-center rounded-md text-muted hover:bg-surface"><MoreHorizontal className="h-4 w-4"/></button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <Card><div className="label">Approval workflow</div><p className="mt-2 text-sm text-muted">Editors create drafts. Admins approve before publishing.</p><button className="btn-g mt-4">Enable approvals</button></Card>
          <Card><div className="label">Audit log</div><p className="mt-2 text-sm text-muted">See who published, edited, or deleted which clip.</p><button className="btn-g mt-4">Open audit log</button></Card>
          <Card><div className="label">SSO / SAML</div><p className="mt-2 text-sm text-muted">Set up Okta, Azure AD, or JumpCloud for your team.</p><button className="btn-g mt-4">Configure SSO</button></Card>
        </div>
      </div>
    </div>
  );
}
