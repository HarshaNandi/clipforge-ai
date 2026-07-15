import "./globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";
export const metadata: Metadata = {
  title: { default:"ClipForge AI - Turn long videos into viral shorts", template:"%s - ClipForge AI" },
  description:"AI short-form clip generator for podcasts, calls, streams and webinars. Auto-captions, viral scoring, multi-platform publishing."
};
export default function RootLayout({ children }:{ children: ReactNode }) {
  return (<html lang="en" className="dark"><body className="min-h-screen bg-bg text-ink antialiased">{children}</body></html>);
}
