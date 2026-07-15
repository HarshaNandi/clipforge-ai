import { NextResponse } from "next/server";
import { projects } from "@/lib/mock-data";

export async function GET() {
  return NextResponse.json({ data: projects, total: projects.length });
}

export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  const id = "p_" + Date.now().toString(36);
  const created = {
    id,
    title: body.title ?? "Untitled project",
    source: body.source ?? "manual upload",
    durationSec: Number(body.durationSec ?? 0),
    clipCount: 0,
    status: "draft" as const,
    thumbnail: (body.title ?? "NEW").slice(0, 3).toUpperCase(),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    fileSize: "-",
    resolution: "1080p"
  };
  return NextResponse.json({ data: created }, { status: 201 });
}
