"use client";
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, Tooltip, ResponsiveContainer, AreaChart, Area, CartesianGrid } from "recharts";
const accent="#7C5CFF"; const mint="#26E0C7";
export function ViewsChart({ data }:{ data:{day:number;views:number}[] }) {
  return (
    <div className="h-64 w-full"><ResponsiveContainer>
      <AreaChart data={data} margin={{ top:10, right:10, bottom:0, left:-10 }}>
        <defs><linearGradient id="grad" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor={accent} stopOpacity={0.6}/><stop offset="100%" stopColor={accent} stopOpacity={0}/></linearGradient></defs>
        <CartesianGrid stroke="#1F2333" vertical={false} />
        <XAxis dataKey="day" stroke="#7A8093" fontSize={11} tickLine={false} axisLine={false}/>
        <YAxis stroke="#7A8093" fontSize={11} tickLine={false} axisLine={false} tickFormatter={v=> v>=1000? (v/1000).toFixed(0)+"k":v}/>
        <Tooltip contentStyle={{background:"#11131A", border:"1px solid #1F2333", borderRadius:12}} labelStyle={{color:"#7A8093"}}/>
        <Area type="monotone" dataKey="views" stroke={accent} strokeWidth={2} fill="url(#grad)"/>
      </AreaChart>
    </ResponsiveContainer></div>
  );
}
export function PlatformBars({ data }:{ data:{platform:string;value:number}[] }) {
  return (
    <div className="h-64 w-full"><ResponsiveContainer>
      <BarChart data={data} margin={{ top:10, right:10, bottom:0, left:-10 }}>
        <CartesianGrid stroke="#1F2333" vertical={false}/>
        <XAxis dataKey="platform" stroke="#7A8093" fontSize={11} tickLine={false} axisLine={false}/>
        <YAxis stroke="#7A8093" fontSize={11} tickLine={false} axisLine={false}/>
        <Tooltip contentStyle={{background:"#11131A", border:"1px solid #1F2333", borderRadius:12}} labelStyle={{color:"#7A8093"}}/>
        <Bar dataKey="value" radius={[8,8,0,0]} fill={mint}/>
      </BarChart>
    </ResponsiveContainer></div>
  );
}
export function PlatformPie({ data }:{ data:{platform:string;value:number}[] }) {
  const palette:Record<string,string>={youtube:"#FF0033",tiktok:"#25F4EE",instagram:"#E1306C",linkedin:"#0A66C2",facebook:"#1877F2",twitter:"#1DA1F2",x:"#1DA1F2"};
  const keyFor=(s:string)=>{ s=s.toLowerCase(); if(s.includes("youtube"))return "youtube"; if(s.includes("tiktok"))return "tiktok"; if(s.includes("instagram"))return "instagram"; if(s.includes("linkedin"))return "linkedin"; if(s.includes("facebook"))return "facebook"; return s.startsWith("x")?"x":"twitter"; };
  return (
    <div className="h-64 w-full"><ResponsiveContainer>
      <PieChart><Pie data={data} dataKey="value" nameKey="platform" innerRadius={45} outerRadius={75} paddingAngle={2}>
        {data.map((d,i)=> <Cell key={i} fill={palette[keyFor(d.platform)]} />)}
      </Pie><Tooltip contentStyle={{background:"#11131A", border:"1px solid #1F2333", borderRadius:12}} labelStyle={{color:"#7A8093"}}/></PieChart>
    </ResponsiveContainer></div>
  );
}
