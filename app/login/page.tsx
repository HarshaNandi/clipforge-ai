import { SiteHeader, SiteFooter } from "@/components/site-header";
import Link from "next/link";
import { Sparkles } from "lucide-react";

export default function Login() {
  return (
    <div className="grid-bg min-h-screen">
      <SiteHeader/>
      <main className="mx-auto grid min-h-[calc(100vh-3.5rem)] max-w-md place-items-center px-4 py-10">
        <div className="w-full rounded-2xl border border-border bg-panel p-6">
          <div className="flex items-center gap-2"><span className="grid h-9 w-9 place-items-center rounded-lg bg-brand text-white"><Sparkles className="h-4 w-4"/></span><div className="font-semibold">Log in to ClipForge</div></div>
          <p className="mt-1 text-sm text-muted">Welcome back. Pick up where you left off.</p>
          <label className="label mt-6 block">Email</label>
          <input className="mt-1 w-full rounded-xl border border-border bg-surface px-3 py-2 text-sm focus:border-brand focus:outline-none" placeholder="alex@clipforge.io"/>
          <label className="label mt-4 block">Password</label>
          <input type="password" className="mt-1 w-full rounded-xl border border-border bg-surface px-3 py-2 text-sm focus:border-brand focus:outline-none" placeholder="**********"/>
          <button className="btn-p mt-5 w-full">Log in</button>
          <button className="btn-g mt-2 w-full">Continue with Google</button>
          <div className="mt-4 text-center text-xs text-muted">No account yet? <Link href="/signup" className="text-brand hover:underline">Sign up</Link></div>
        </div>
      </main>
    </div>
  );
}
