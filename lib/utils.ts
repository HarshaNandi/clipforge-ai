import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
export function cn(...i: ClassValue[]) { return twMerge(clsx(i)); }
export function formatNumber(n: number) { if (n>=1_000_000) return (n/1_000_000).toFixed(1)+"M"; if (n>=1_000) return (n/1_000).toFixed(1)+"K"; return String(n); }
export function formatDate(iso: string) { return new Date(iso).toLocaleDateString("en-US",{ month:"short", day:"numeric", year:"numeric" }); }
export function formatRelative(iso: string) { const ms=Date.now()-new Date(iso).getTime(); const m=Math.floor(ms/60000), h=Math.floor(m/60), d=Math.floor(h/24); if (m<1) return "just now"; if (h<1) return m+"m ago"; if (d<1) return h+"h ago"; if (d<7) return d+"d ago"; return formatDate(iso); }
export function clamp(n:number,lo:number,hi:number){ return Math.min(hi, Math.max(lo,n)); }
export function sleep(ms:number){ return new Promise(r=>setTimeout(r,ms)); }
