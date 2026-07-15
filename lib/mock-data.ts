import type { Account, Clip, Project } from "./types";
export const currentUser = { id:"u1", name:"Alex Rivera", email:"alex@clipforge.io", plan:"pro" as const, minutesUsed:412, minutesQuota:1800, avatar:"AR", joinedAt:"2025-03-12" };
export const accounts: Account[] = [
  { id:"a1", platform:"youtube",   handle:"@alexrivera",      avatar:"AR", followers:124000, connected:true,  verified:true,  posts:284, avgViews:41000 },
  { id:"a2", platform:"tiktok",    handle:"@alexr.clipforge", avatar:"AR", followers:89200,  connected:true,  verified:false, posts:412, avgViews:38000 },
  { id:"a3", platform:"instagram", handle:"@alexr.co",        avatar:"AR", followers:42100,  connected:true,  verified:true,  posts:198, avgViews:21000 },
  { id:"a4", platform:"twitter",   handle:"@alexr_codes",     avatar:"AR", followers:18400,  connected:false, verified:false, posts:0,   avgViews:0 },
  { id:"a5", platform:"linkedin",  handle:"alex-rivera",      avatar:"AR", followers:12400,  connected:true,  verified:false, posts:54,  avgViews:6200 },
  { id:"a6", platform:"facebook",  handle:"alex.rivera",      avatar:"AR", followers:9100,   connected:false, verified:false, posts:0,   avgViews:0 }
];
export const projects: Project[] = [
  { id:"p1", title:"How I shipped a SaaS in 30 days", source:"youtube.com/watch?v=abc",   durationSec:3600, clipCount:18, status:"ready",      thumbnail:"30D", createdAt:"2026-07-01T10:00:00Z", updatedAt:"2026-07-05T14:30:00Z", fileSize:"1.2 GB", resolution:"1080p" },
  { id:"p2", title:"Founder AMA - June 2026",          source:"podcast-ama-jun26.mp4",     durationSec:4800, clipCount:14, status:"ready",      thumbnail:"FAM", createdAt:"2026-06-20T14:00:00Z", updatedAt:"2026-06-25T11:00:00Z", fileSize:"2.1 GB", resolution:"1440p" },
  { id:"p3", title:"AI tooling deep-dive",             source:"riverside.fm/download/abc", durationSec:5400, clipCount:22, status:"processing", thumbnail:"AID", createdAt:"2026-07-06T08:00:00Z", updatedAt:"2026-07-06T09:00:00Z", fileSize:"3.4 GB", resolution:"1080p" },
  { id:"p4", title:"Customer call: Acme Corp story",   source:"zoom_jul06_acme.mp4",       durationSec:2400, clipCount:9,  status:"draft",      thumbnail:"ACM", createdAt:"2026-07-06T12:00:00Z", updatedAt:"2026-07-06T12:00:00Z", fileSize:"820 MB", resolution:"1080p" },
  { id:"p5", title:"Office hours - week 26",           source:"livestream-week26.mp4",     durationSec:7200, clipCount:28, status:"ready",      thumbnail:"OHW", createdAt:"2026-06-28T16:00:00Z", updatedAt:"2026-07-04T09:00:00Z", fileSize:"4.1 GB", resolution:"1440p" },
  { id:"p6", title:"Conference keynote recording",    source:"vimeo.com/manage/videos/X1",durationSec:3200, clipCount:12, status:"ready",      thumbnail:"CKN", createdAt:"2026-06-12T11:00:00Z", updatedAt:"2026-06-15T15:00:00Z", fileSize:"1.8 GB", resolution:"4K" }
];
export const clips: Clip[] = [
  { id:"c1", projectId:"p1", title:"The ONE framework that 3x my MRR", thumbnail:"ONE", durationSec:58, status:"published", score:94, views:412300, likes:18200, comments:1840, shares:2410, saves:3200, platforms:["youtube","tiktok","instagram"], createdAt:"2026-07-01T10:00:00Z", publishedAt:"2026-07-02T14:00:00Z", tags:["#SaaS"] },
  { id:"c2", projectId:"p1", title:"Why cold outreach is dead",         thumbnail:"COD", durationSec:71, status:"scheduled", score:88, views:198400, likes:9120,  comments:920,  shares:1120, saves:1900, platforms:["linkedin","twitter"],           createdAt:"2026-07-01T10:00:00Z", scheduledAt:"2026-07-08T15:00:00Z", tags:["#sales"] },
  { id:"c3", projectId:"p2", title:"I raised $4M. Here is the deck.",   thumbnail:"RAI", durationSec:84, status:"published", score:91, views:312800, likes:14200, comments:2104, shares:3210, saves:4900, platforms:["youtube","linkedin","twitter"],createdAt:"2026-06-21T10:00:00Z", publishedAt:"2026-06-22T12:00:00Z", tags:["#fundraising"] },
  { id:"c4", projectId:"p1", title:"3 cold truths about AI in 2026",   thumbnail:"CT3", durationSec:64, status:"draft",     score:79, views:0,      likes:0,     comments:0,    shares:0,    saves:0,    platforms:[],                                  createdAt:"2026-07-05T18:00:00Z", tags:["#AI"] },
  { id:"c5", projectId:"p3", title:"Fixing a real prod bug live",      thumbnail:"PBG", durationSec:124,status:"processing",score:92, views:0,      likes:0,     comments:0,    shares:0,    saves:0,    platforms:[],                                  createdAt:"2026-07-06T10:00:00Z", tags:["#coding"] },
  { id:"c6", projectId:"p1", title:"My exact ARR math (real numbers)", thumbnail:"ARR", durationSec:48, status:"ready",     score:86, views:0,      likes:0,     comments:0,    shares:0,    saves:0,    platforms:[],                                  createdAt:"2026-07-06T10:00:00Z", tags:["#SaaS"] },
  { id:"c7", projectId:"p5", title:"The worst bug I ever shipped",     thumbnail:"WBG", durationSec:97, status:"failed",    score:0,  views:0,      likes:0,     comments:0,    shares:0,    saves:0,    platforms:[],                                  createdAt:"2026-07-02T10:00:00Z", tags:[] },
  { id:"c8", projectId:"p6", title:"Conference mic drop moment",       thumbnail:"MIC", durationSec:42, status:"scheduled", score:87, views:0,      likes:0,     comments:0,    shares:0,    saves:0,    platforms:["youtube","tiktok"],               createdAt:"2026-07-05T14:00:00Z", scheduledAt:"2026-07-09T13:00:00Z", tags:["#conference"] },
  { id:"c9", projectId:"p2", title:"Founder lifestyle: real edition",   thumbnail:"FLR", durationSec:62, status:"ready",     score:81, views:0,      likes:0,     comments:0,    shares:0,    saves:0,    platforms:[],                                  createdAt:"2026-07-04T18:00:00Z", tags:["#founderlife"] },
  { id:"c10",projectId:"p6", title:"Why we are not hiring juniors",    thumbnail:"NHJ", durationSec:76, status:"draft",     score:0,  views:0,      likes:0,     comments:0,    shares:0,    saves:0,    platforms:[],                                  createdAt:"2026-07-06T22:00:00Z", tags:[] }
];
export const viewsSeries = Array.from({length:30},(_,i)=>({ day: i+1, views: Math.round(8000 + Math.sin(i/3)*3500 + i*220 + (Math.random()-0.5)*1200) }));
export const platformBreakdown = [
  { platform:"YouTube",   value:412 }, { platform:"TikTok",    value:298 },
  { platform:"Instagram", value:186 }, { platform:"LinkedIn",  value:94  },
  { platform:"X",         value:58  }, { platform:"Facebook",  value:24  }
];
export const blogPosts = [
  { slug:"how-we-shipped-clipforge-in-30-days", title:"How we shipped ClipForge in 30 days", excerpt:"From whiteboard to first paying customer in 30 days.", date:"2026-07-04", author:"Alex Rivera", readTime:7, tag:"Build log", cover:"BLG" },
  { slug:"viral-scoring-is-not-vibes",         title:"Viral scoring is not vibes",       excerpt:"Our scoring model uses 14 signals across audio rhythm and hook frames.", date:"2026-06-28", author:"Priya Patel", readTime:9, tag:"AI", cover:"SCR" },
  { slug:"300-clips-one-podcast",               title:"300 clips from one podcast",       excerpt:"We turned 40 hours of founder interviews into a 400K TikTok channel.", date:"2026-06-21", author:"Marco Silva", readTime:6, tag:"Case study", cover:"POD" }
];
