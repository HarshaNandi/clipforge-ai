import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  const { clipId, platform } = body ?? {};
  if (!clipId || !platform) {
    return NextResponse.json({ error: "clipId and platform are required" }, { status: 400 });
  }
  return NextResponse.json({
    data: {
      clipId,
      platform,
      status: "queued",
      url: "https://" + platform + ".example/" + clipId,
      scheduledFor: body.scheduledFor ?? new Date(Date.now() + 600_000).toISOString()
    }
  });
}
