"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, FolderKanban, Scissors, Users, Calendar, Sparkles, BarChart3, Settings, Video } from "lucide-react";
import { cn } from "@/lib/utils";
const items = [
  { href:"/dashboard", label:"Dashboard", icon:LayoutDashboard },
  { href:"/projects",  label:"Projects",  icon:FolderKanban },
  { href:"/clips",     label:"Clips",     icon:Scissors },
  { href:"/accounts",  label:"Accounts",  icon:Users },
  { href:"/schedule",  label:"Schedule",  icon:Calendar },
  { href:"/templates", label:"Templates", icon:Sparkles },
  { href:"/team",      label:"Team",      icon:Users },
  { href:"/analytics", label:"Analytics", icon:BarChart3 },
  { href:"/settings",  label:"Settings",  icon:Settings }
];
export function Sidebar() {
  const path = usePathname();
  return (
    <aside className="sticky top-14 hidden h-[calc(100vh-3.5rem)] w-60 shrink-0 border-r border-border/80 bg-bg/40 p-3 lg:block">
      <div className="mb-4 px-2 text-xs font-medium uppercase tracking-wider text-muted">Workspace</div>
      <nav className="flex flex-col gap-1">
        {items.map(({ href, label, icon:Icon }) => {
          const active = path?.startsWith(href);
          return (
            <Link key={href} href={href} className={cn("flex items-center gap-3 rounded-xl px-3 py-2 text-sm transition", active?"bg-panel text-ink shadow-glow":"text-muted hover:bg-panel/70 hover:text-ink")}>
              <Icon className="h-4 w-4" />{label}
            </Link>
          );
        })}
      </nav>
      <div className="mt-6 rounded-2xl border border-border bg-panel p-4 text-sm">
        <div className="flex items-center gap-2 font-medium"><Video className="h-4 w-4 text-brand"/>Need a hand?</div>
        <p className="mt-1 text-muted">See the docs or jump into our weekly office hours.</p>
        <Link href="/contact" className="btn-g mt-3 w-full">Open help center</Link>
      </div>
    </aside>
  );
}
export function Topbar({ title, subtitle }:{ title:string; subtitle?:string }) {
  return (
    <div className="sticky top-14 z-30 -mx-4 mb-4 flex items-center justify-between border-b border-border/80 bg-bg/70 px-4 py-3 backdrop-blur">
      <div><h1 className="text-xl font-semibold tracking-tight">{title}</h1>{subtitle && <p className="text-sm text-muted">{subtitle}</p>}</div>
      <div className="flex items-center gap-2"><button className="btn-g text-sm">Import video</button><button className="btn-p text-sm">New project</button></div>
    </div>
  );
}
