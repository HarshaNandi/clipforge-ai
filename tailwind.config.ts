import type { Config } from "tailwindcss";
const config: Config = {
  content:["./app/**/*.{ts,tsx}","./components/**/*.{ts,tsx}","./lib/**/*.{ts,tsx}"],
  theme:{ extend:{
    colors:{ bg:"#0A0B0F",surface:"#11131A",panel:"#161924",border:"#1F2333",muted:"#7A8093",ink:"#E8EAF2",brand:"#7C5CFF",accent:"#26E0C7",warn:"#F2B14B",danger:"#FF5872",success:"#39D98A"},
    fontFamily:{ sans:["Inter","ui-sans-serif","system-ui"], mono:["JetBrains Mono","ui-monospace","monospace"]},
    boxShadow:{ glow:"0 0 0 1px rgba(124,92,255,.25), 0 12px 60px -10px rgba(124,92,255,.45)"},
    backgroundImage:{ "gradient-radial":"radial-gradient(ellipse 60% 60% at 50% 0%, rgba(124,92,255,.18), transparent 70%)","gradient-mesh":"radial-gradient(at 20% 10%, rgba(124,92,255,.18), transparent 40%), radial-gradient(at 80% 0%, rgba(38,224,199,.16), transparent 40%)"}
  }},
  plugins:[]
};
export default config;
