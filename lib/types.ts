export type Platform = "youtube" | "tiktok" | "instagram" | "twitter" | "linkedin" | "facebook";
export type ClipStatus = "draft" | "processing" | "ready" | "scheduled" | "published" | "failed";
export interface Account { id:string; platform:Platform; handle:string; avatar:string; followers:number; connected:boolean; verified:boolean; posts:number; avgViews:number; }
export interface Clip { id:string; projectId:string; title:string; thumbnail:string; durationSec:number; status:ClipStatus; score:number; views:number; likes:number; comments:number; shares:number; saves:number; platforms:Platform[]; createdAt:string; publishedAt?:string; scheduledAt?:string; tags:string[]; }
export interface Project { id:string; title:string; source:string; durationSec:number; clipCount:number; status:"ready"|"processing"|"draft"; thumbnail:string; createdAt:string; updatedAt:string; fileSize:string; resolution:string; }
