import { SiteHeader, SiteFooter } from "@/components/site-header";
import { Shield, Lock, FileCheck, Globe } from "lucide-react";

export default function Compliance() {
  return (
    <div className="grid-bg">
      <SiteHeader/>
      <main className="mx-auto max-w-5xl px-4 py-16">
        <span className="chip">Trust &amp; Compliance</span>
        <h1 className="h1 mt-3">Enterprise-grade by default.</h1>
        <p className="mt-3 text-muted">We store and process your data in SOC2-aligned environments. Questionnaires available on request.</p>
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          <Item icon={<Shield/>}    title="SOC2-aligned controls" body="Annual independent audits. Trust report available under NDA."/>
          <Item icon={<Lock/>}      title="AES-256 at rest"        body="Customer media encrypted in S3 with KMS."/>
          <Item icon={<FileCheck/>} title="GDPR & CCPA ready"      body="DPA, SCC, and data subject request workflows."/>
          <Item icon={<Globe/>}     title="EU + US regions"        body="Pick region per workspace. Data never crosses borders."/>
        </div>
        <div className="mt-12 rounded-2xl border border-border bg-panel p-6">
          <div className="label">Sub-processors</div>
          <ul className="mt-3 grid gap-2 text-sm text-muted md:grid-cols-2">
            <li>- AWS (S3, EC2, MediaConvert)</li><li>- Stripe (billing)</li>
            <li>- PostHog (product analytics)</li><li>- Resend (transactional email)</li>
            <li>- Sentry (errors)</li><li>- OpenAI / Anthropic (captioning, scoring)</li>
          </ul>
        </div>
      </main>
      <SiteFooter/>
    </div>
  );
}
function Item({ icon, title, body }:{ icon:React.ReactNode; title:string; body:string }) {
  return <div className="rounded-2xl border border-border bg-panel p-6"><div className="grid h-10 w-10 place-items-center rounded-xl bg-brand/15 text-brand">{icon}</div><div className="mt-3 font-semibold">{title}</div><p className="mt-1 text-sm text-muted">{body}</p></div>;
}
