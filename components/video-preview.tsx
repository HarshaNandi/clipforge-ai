export function VideoPreview({ thumbnail, label, durationSec }:{ thumbnail:string; label:string; durationSec:number }) {
  const m = Math.floor(durationSec/60), s = String(durationSec%60).padStart(2,"0");
  return (
    <div className="relative aspect-[9/16] w-full overflow-hidden rounded-xl border border-border bg-gradient-to-br from-brand/30 via-panel to-accent/20">
      <div className="absolute inset-0 grid place-items-center">
        <span className="grid h-16 w-16 place-items-center rounded-full bg-white/10 text-2xl font-semibold text-white/90 backdrop-blur">{thumbnail}</span>
      </div>
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-3">
        <div className="line-clamp-2 text-sm font-medium text-white">{label}</div>
        <div className="mt-1 flex items-center justify-between text-xs text-white/70"><span>{String(m).padStart(2,"0")}:{s}</span><span className="rounded-full bg-white/15 px-2 py-0.5">9:16</span></div>
      </div>
      <div className="absolute right-2 top-2 rounded-full bg-black/60 px-2 py-0.5 text-xs font-medium text-white backdrop-blur">play preview</div>
    </div>
  );
}
