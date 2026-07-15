import { SiteHeader, SiteFooter } from "@/components/site-header";
import Link from "next/link";
import { Sparkles, Check } from "lucide-react";

export default function Signup() {
  return (
    <div className="grid-bg min-h-screen">
      <SiteHeader/>
      <main className="mx-auto grid min-h-[calc(100vh-3.5rem)] max-w-md place-items-center px-4 py-10">
        <div className="w-full rounded-2xl border border-border bg-panel p-6">
          <div className="flex items-center gap-2"><span className="grid h-9 w-9 place-items-center rounded-lg bg-brand text-white"><Sparkles className="h-4 w-4"/></span><div className="font-semibold">Create your account</div></div>
          <p className="mt-1 text-sm text-muted">Free 60 minutes. No credit card.</p>
          <label className="label mt-6 block">Full name</label>
          <input className="mt-1 w-full rounded-xl border border-border bg-surface px-3 py-2 text-sm focus:border-brand focus:outline-none" placeholder="Alex Rivera"/>
          <label className="label mt-4 block">Work email</label>
          <input className="mt-1 w-full rounded-xl border border-border bg-surface px-3 py-2 text-sm focus:border-brand focus:outline-none" placeholder="alex@clipforge.io"/>
          <label className="label mt-4 block">Password</label>
          <input type="password" className="mt-1 w-full rounded-xl border border-border bg-surface px-3 py-2 text-sm focus:border-brand focus:outline-none" placeholder="8+ characters"/>
          <ul className="mt-4 space-y-1 text-xs text-muted">
            <li className="flex items-center gap-2"><Check className="h-3.5 w-3.5 text-accent"/> 60 minutes free monthly processing</li>
            <li className="flex items-center gap-2"><Check className="h-3.5 w-3.5 text-accent"/> 2 connected platforms</li>
            <li className="flex items-center gap-2"><Check className="h-3.5 w-3.5 text-accent"/> Cancel anytime</li>
          </ul>
          <Link href="/dashboard" className="btn-p mt-5 block w-full text-center">Create account</Link>
          <div className="mt-4 text-center text-xs text-muted">Already have one? <Link href="/login" className="text-brand hover:underline">Log in</Link></div>
        </div>
      </main>
    </div>
  );
}
