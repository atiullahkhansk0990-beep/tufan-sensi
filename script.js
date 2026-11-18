"use strict";

function switchTab(tabId, btnEl) {
  document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(el => el.classList.remove('active'));
  const target = document.getElementById(tabId);
  if (target) target.classList.add('active');
  if (btnEl) btnEl.classList.add('active');
}

window.addEventListener('DOMContentLoaded', () => {
  // This is intentionally labelled as a demo counter; a real visitor count needs a server/database.
  let demoCount = 1850 + Math.floor(Math.random() * 50);
  const counterEl = document.getElementById('visitorCount');
  if (counterEl) {
    counterEl.textContent = demoCount.toLocaleString();
    window.setInterval(() => {
      demoCount += Math.floor(Math.random() * 3) - 1;
      counterEl.textContent = demoCount.toLocaleString();
    }, 4000);
  }
  generateNicknames();
});

const profiles = {
  zxtufan: { img:'zxtufan.jpg', badge:'LEGEND NEVER DIES (V7.0)', name:'ZX ★ TUFAN', quote:'"Main Agar Apni Jawani Ke Suna Du Kisse, Ye Jo Launde Hain, Mere Paon Dabane Lag Jaayein !!!"', stats:['🔥 BR Heroic','🛡️ UID: 2910340190','👍 6577 Likes'] },
  ritesh: { img:'ritesh.jpg', badge:'RITESH THARU PRO', name:'RITESH ⟨®⟩', quote:'"One-Tap Master & Clash Squad Rusher!"', stats:['🔥 CS Master','⚡ 99+ Headshot','👍 4890 Likes'] },
  faisal: { img:'faisal.jpg', badge:'FAISAL BOSS', name:'FAISAL', quote:'"Fearless Rusher & Tactical Survival Expert!"', stats:['⚔️ BR Grandmaster','🛡️ UID: 2458453341','👍 1718 Likes'] },
  squad: { img:'squad.jpg', badge:'ZX TUFAN SQUAD V7.0', name:'ZX TUFAN & SQUAD', quote:'"ZX TUFAN, LE ARMAN, MD TOX 10, RITESH & FAISAL - Undefeated Esports Squad!"', stats:['🛡️ Group Leader: ZX TUFAN','🔥 Elite Squad','👑 Champions'] }
};

function switchProfile(key) {
  const p = profiles[key]; if (!p) return;
  document.getElementById('userAvatar').src = p.img;
  document.getElementById('profileBadge').textContent = p.badge;
  const name = document.getElementById('profileName');
  name.textContent = p.name + ' ✔';
  document.getElementById('profileQuote').textContent = p.quote;
  const stats = document.getElementById('profileStats'); stats.replaceChildren();
  p.stats.forEach(s => { const el = document.createElement('div'); el.className='stat-pill'; el.textContent=s; stats.appendChild(el); });
}

function handleAvatarFallback(imgEl) {
  imgEl.onerror = null;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300"><rect width="300" height="300" fill="#1e0a3c"/><text x="150" y="150" text-anchor="middle" fill="#ffd700" font-family="Arial" font-size="28" font-weight="bold">ZX SQUAD V7.0</text></svg>`;
  imgEl.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
}

const allDevicesList = [
  {name:"Redmi Note 13 Pro+",brand:"Xiaomi",chip:"Dimensity 7200-Ultra",tier:"upper"},
  {name:"Redmi Note 9",brand:"Xiaomi",chip:"Helio G85",tier:"mid"},
  {name:"POCO X6 Pro",brand:"POCO",chip:"Dimensity 8300-Ultra",tier:"flagship"},
  {name:"iPhone 16 Pro Max",brand:"Apple",chip:"A18 Pro",tier:"flagship"},
  {name:"Galaxy S24 Ultra",brand:"Samsung",chip:"Snapdragon 8 Gen 3",tier:"flagship"},
  {name:"Lava Agni 3",brand:"Lava",chip:"Dimensity 7300X",tier:"upper"},
  {name:"Redmi 13C",brand:"Xiaomi",chip:"Helio G85",tier:"entry"},
  {name:"Samsung Galaxy A15",brand:"Samsung",chip:"Helio G99",tier:"mid"},
  {name:"iQOO Z9",brand:"iQOO",chip:"Dimensity 7200",tier:"upper"},
  {name:"OnePlus Nord CE 4",brand:"OnePlus",chip:"Snapdragon 7 Gen 3",tier:"upper"},
  {name:"Nothing Phone (2a)",brand:"Nothing",chip:"Dimensity 7200 Pro",tier:"upper"},
  {name:"Infinix Note 40",brand:"Infinix",chip:"Helio G99 Ultimate",tier:"mid"}
];
let selectedDeviceObj = allDevicesList.find(d => d.name === "Redmi Note 9") || allDevicesList[0];

function filterDeviceSuggestions() {
  const q = document.getElementById('deviceSearchInput').value.toLowerCase().trim();
  const list = document.getElementById('deviceSuggestionsList'); list.replaceChildren();
  if (!q) { list.classList.add('hidden'); return; }
  const matches = allDevicesList.filter(d => `${d.name} ${d.brand} ${d.chip}`.toLowerCase().includes(q)).slice(0,20);
  if (!matches.length) {
    const empty=document.createElement('div'); empty.className='suggestion-item'; empty.textContent='No matching device in this built-in list'; list.appendChild(empty);
  }
  matches.forEach(d => {
    const item=document.createElement('div'); item.className='suggestion-item';
    const label=document.createElement('span'); label.textContent=`${d.name} (${d.chip})`;
    const tier=document.createElement('span'); tier.className=`tier-tag ${d.tier}`; tier.textContent=d.tier;
    item.append(label,tier); item.addEventListener('click',()=>selectDevice(d)); list.appendChild(item);
  });
  list.classList.remove('hidden');
}
function selectDevice(dev) {
  selectedDeviceObj=dev; document.getElementById('deviceSearchInput').value=dev.name;
  document.getElementById('selectedDeviceText').textContent=`${dev.name} (${dev.chip})`;
  document.getElementById('deviceSuggestionsList').classList.add('hidden');
}
function clearSearchInput() { document.getElementById('deviceSearchInput').value=''; document.getElementById('deviceSuggestionsList').classList.add('hidden'); }

function clamp(n,min,max){return Math.max(min,Math.min(max,Math.round(n)));}
function generateCustomSensi() {
  const dev=selectedDeviceObj||allDevicesList[0], ram=Number(document.getElementById('makerRam').value);
  const style=document.getElementById('makerPlaystyle').value;
  const tierAdj={entry:-4,mid:0,upper:2,flagship:3}[dev.tier]||0;
  const ramAdj=ram<=3?-3:ram>=8?2:0;
  const styleAdj={headshot_onetap:4,br_cs_allrounder:0,no_recoil:-5}[style]||0;
  const vals={gen:clamp(96+tierAdj+ramAdj+styleAdj,80,100),red:clamp(93+tierAdj+ramAdj+styleAdj,75,100),s2x:clamp(90+tierAdj+ramAdj+Math.round(styleAdj*.6),70,100),s4x:clamp(87+tierAdj+ramAdj+Math.round(styleAdj*.4),65,100),awm:clamp(72+tierAdj+Math.round(ramAdj*.5),50,90),free:clamp(85+tierAdj,65,95),dpi:clamp(420+tierAdj*5+ramAdj*3,380,480),fire:clamp((style==='headshot_onetap'?46:style==='no_recoil'?50:47)+(dev.tier==='entry'?2:0),42,55)};
  const ids={gen:'mGen',red:'mRed',s2x:'m2x',s4x:'m4x',awm:'mAwm',free:'mFreeLook',dpi:'mDpi',fire:'mFireBtn'};
  Object.entries(ids).forEach(([k,id])=>document.getElementById(id).textContent=vals[k]+(k==='fire'?'%':''));
  document.getElementById('makerDeviceTitle').textContent=`🎯 Starting profile: ${dev.name} (${dev.chip} | ${ram}GB RAM)`;
  document.getElementById('makerNote').textContent='*Sensitivity, DPI and fire-button values are estimates, not device measurements or guaranteed headshot settings. DPI is optional; do not change system DPI if it makes controls hard to use. Test and adjust in Training Ground.';
  document.getElementById('makerResult').classList.remove('hidden');
}

const leftDecors=['꧁༺','⚡','王','🔥','💎','『⚡』','×͜×','༒︎','★'];
const rightDecors=['༻꧂','⚡','王','🔥','💎','『⚡』','×͜×','༒︎','★'];
const badges=['',' • 𝐓𝐔𝐅𝐀𝐍',' 𝖃',' 𝟗𝟗+',' ✓',' ᶠᶠ',' ᴾᴿᴼ'];
const fontMap={a:'𝐚',b:'𝐛',c:'𝐜',d:'𝐝',e:'𝐞',f:'𝐟',g:'𝐠',h:'𝐡',i:'𝐢',j:'𝐣',k:'𝐤',l:'𝐥',m:'𝐦',n:'𝐧',o:'𝐨',p:'𝐩',q:'𝐪',r:'𝐫',s:'𝐬',t:'𝐭',u:'𝐮',v:'𝐯',w:'𝐰',x:'𝐱',y:'𝐲',z:'𝐳',A:'𝐀',B:'𝐁',C:'𝐂',D:'𝐃',E:'𝐄',F:'𝐅',G:'𝐆',H:'𝐇',I:'𝐈',J:'𝐉',K:'𝐊',L:'𝐋',M:'𝐌',N:'𝐍',O:'𝐎',P:'𝐏',Q:'𝐐',R:'𝐑',S:'𝐒',T:'𝐓',U:'𝐔',V:'𝐕',W:'𝐖',X:'𝐗',Y:'𝐘',Z:'𝐙'};
function stylizeText(s){return Array.from(s).map(c=>fontMap[c]||c).join('');}
let totalGeneratedNicks=0;
function buildNickBatch(count){
  const base=(document.getElementById('baseNameInput').value.trim()||'TUFAN').slice(0,24), box=document.getElementById('nickResults');
  for(let i=0;i<count;i++){
    const index=totalGeneratedNicks++, nick=`${leftDecors[index%leftDecors.length]} ${stylizeText(base)}${badges[index%badges.length]} ${rightDecors[index%rightDecors.length]}`;
    const item=document.createElement('div');item.className='nick-item';
    const label=document.createElement('span');label.className='nick-text';label.textContent=nick;
    const copy=document.createElement('span');copy.className='copy-tag';copy.textContent='COPY';
    item.append(label,copy);item.addEventListener('click',()=>copyText(nick));box.appendChild(item);
  }
  const counter=document.getElementById('nickCounterText');if(counter)counter.textContent=`Showing ${totalGeneratedNicks} combinations`;
}
function generateNicknames(){totalGeneratedNicks=0;document.getElementById('nickResults').replaceChildren();buildNickBatch(30);}
function loadMoreNicknames(){buildNickBatch(50);}
async function copyText(value){
  try{if(navigator.clipboard&&window.isSecureContext)await navigator.clipboard.writeText(value);else{const t=document.createElement('textarea');t.value=value;t.style.position='fixed';t.style.opacity='0';document.body.appendChild(t);t.select();document.execCommand('copy');t.remove();}showStatus('Nickname copied!');}
  catch(e){window.prompt('Copy this nickname:',value);}
}
function showStatus(message){const el=document.getElementById('termuxScanStatus');if(el)el.textContent=message;else alert(message);}

let hudObjectUrl=null;
function previewHudImage(event){
  const file=event.target.files&&event.target.files[0];if(!file)return;
  if(!file.type.startsWith('image/')){alert('Please choose an image file.');return;}
  if(file.size>10*1024*1024){alert('Image is too large. Please choose an image under 10 MB.');event.target.value='';return;}
  if(hudObjectUrl)URL.revokeObjectURL(hudObjectUrl);
  hudObjectUrl=URL.createObjectURL(file);
  document.getElementById('hudPreviewImg').src=hudObjectUrl;
  document.getElementById('hudImgMeta').textContent=`${file.name} • ${(file.size/1024).toFixed(0)} KB`;
  document.getElementById('hudPreviewContainer').classList.remove('hidden');
}
function analyzeHudScreenshot(){
  const grip=document.getElementById('hudGripSelect').value;
  const config={
    '2finger':{gen:94,red:91,s2x:87,s4x:82,fire:'48%',zone:'Lower-Right'},
    '3finger':{gen:98,red:95,s2x:92,s4x:88,fire:'45%',zone:'Upper-Right'},
    '4finger':{gen:96,red:93,s2x:90,s4x:86,fire:'43%',zone:'Upper-Right'}
  }[grip];
  [['hGen','gen'],['hRed','red'],['h2x','s2x'],['h4x','s4x'],['hFireBtn','fire'],['hDragZone','zone']].forEach(([id,key])=>document.getElementById(id).textContent=config[key]);
  document.getElementById('hudResultBox').classList.remove('hidden');
  document.getElementById('hudLaser').classList.remove('hidden');
  window.setTimeout(()=>document.getElementById('hudLaser').classList.add('hidden'),2400);
}

const termuxPython = String.raw`import json
import os
import platform
import subprocess

def prop(name):
    try:
        return subprocess.check_output(["getprop", name], text=True, stderr=subprocess.DEVNULL).strip()
    except Exception:
        return ""

def read_meminfo():
    try:
        with open("/proc/meminfo", "r", encoding="utf-8") as f:
            for line in f:
                if line.startswith("MemTotal:"):
                    return round(int(line.split()[1]) / 1024)
    except Exception:
        pass
    return None

report = {
    "brand": prop("ro.product.brand") or platform.machine(),
    "model": prop("ro.product.model") or platform.node() or "Unknown",
    "android_version": prop("ro.build.version.release") or "Unknown",
    "resolution": "Not available",
    "refresh_rate_hz": None,
    "ram_total_mb": read_meminfo(),
    "scanner_version": "1.0",
    "note": "Basic device properties only; no personal files or account data accessed."
}
try:
    wm = subprocess.check_output(["wm", "size"], text=True, stderr=subprocess.DEVNULL)
    report["resolution"] = wm.strip().splitlines()[-1].replace("Physical size: ", "").replace("Override size: ", "")
except Exception:
    pass

with open("device_report.json", "w", encoding="utf-8") as f:
    json.dump(report, f, indent=2)
print("Saved device_report.json in the current folder.")
`;
function downloadTermuxScanner(){
  const blob=new Blob([termuxPython],{type:'text/x-python;charset=utf-8'}),url=URL.createObjectURL(blob);
  const a=document.createElement('a');a.href=url;a.download='main.py';document.body.appendChild(a);a.click();a.remove();URL.revokeObjectURL(url);
}
async function copyTermuxCommands(){
  const text=document.getElementById('termuxCommands').textContent;
  try{await navigator.clipboard.writeText(text);showStatus('Termux commands copied.');}
  catch(e){window.prompt('Copy these commands:',text);}
}
function safeText(id,value){document.getElementById(id).textContent=(value===null||value===undefined||value==='')?'—':String(value);}
function recommendFromReport(report){
  const ram=Number(report.ram_total_mb||0)/1024;
  const refresh=Number(report.refresh_rate_hz||60);
  const adj=(ram>=8?2:ram>0&&ram<4?-3:0)+(refresh>=90?2:0);
  return {gen:clamp(96+adj,85,100),red:clamp(93+adj,80,100),s2x:clamp(90+adj,75,98),s4x:clamp(87+adj,70,96),sniper:clamp(72+Math.round(adj/2),55,85),free:85};
}
async function analyseTermuxReport(){
  const input=document.getElementById('deviceReportInput'),file=input.files&&input.files[0];
  if(!file){showStatus('Please select device_report.json first.');return;}
  if(file.size>100*1024){showStatus('Report file is unexpectedly large.');return;}
  try{
    const report=JSON.parse(await file.text());
    if(!report||typeof report!=='object'||Array.isArray(report))throw new Error('JSON must contain an object.');
    safeText('scanBrand',report.brand);safeText('scanModel',report.model);safeText('scanAndroid',report.android_version);
    safeText('scanResolution',report.resolution);
    safeText('scanRefresh',report.refresh_rate_hz?`${report.refresh_rate_hz} Hz`:'Not reported');
    safeText('scanRam',report.ram_total_mb?`${(Number(report.ram_total_mb)/1024).toFixed(1)} GB`:'Not reported');
    const s=recommendFromReport(report);
    safeText('scanGen',s.gen);safeText('scanRed',s.red);safeText('scan2x',s.s2x);safeText('scan4x',s.s4x);safeText('scanSniper',s.sniper);safeText('scanFree',s.free);
    safeText('scanDisclaimer','Recommendations are rough starting points based on reported RAM/refresh rate, not a hardware benchmark. Adjust in-game.');
    document.getElementById('termuxDeviceResult').classList.remove('hidden');
    showStatus('Device report analysed successfully.');
  }catch(err){showStatus(`Could not read report: ${err.message}`);}
}
