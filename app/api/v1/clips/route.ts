import { NextResponse } from "next/server";
import { clips } from "@/lib/mock-data";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const status = url.searchParams.get("status");
  const projectId = url.searchParams.get("projectId");
  const platform = url.searchParams.get("platform");
  let result = clips;
  if (status)    result = result.filter(c => c.status === status);
  if (projectId) result = result.filter(c => c.projectId === projectId);
  if (platform)  result = result.filter(c => c.platforms.includes(platform as any));
  return NextResponse.json({ data: result, total: result.length });
}

export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  if (!body?.title || !body?.projectId) {
    return NextResponse.json({ error: "title and projectId are required" }, { status: 400 });
  }
  const id = "c_" + Date.now().toString(36);
  const created = {
    id,
    projectId: body.projectId,
    title: body.title,
    thumbnail: (body.title as string).slice(0, 3).toUpperCase(),
    durationSec: Math.min(120, Math.max(15, body.durationSec ?? 60)),
    status: "draft" as const,
    score: 0,
    views: 0, likes: 0, comments: 0, shares: 0, saves: 0,
    platforms: (body.platforms ?? []) as any[],
    createdAt: new Date().toISOString(),
    tags: body.tags ?? []
  };
  return NextResponse.json({ data: created }, { status: 201 });
}
