"use strict";

function switchTab(tabId, btnEl) {
  document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(el => el.classList.remove('active'));
  const target = document.getElementById(tabId);
  if (target) target.classList.add('active');
  if (btnEl) btnEl.classList.add('active');
  if (tabId === 'compare') renderSavedVault();
}

window.addEventListener('DOMContentLoaded', () => {
  let demoCount = 2140 + Math.floor(Math.random() * 80);
  const counterEl = document.getElementById('visitorCount');
  if (counterEl) {
    counterEl.textContent = demoCount.toLocaleString();
    window.setInterval(() => {
      demoCount += Math.floor(Math.random() * 3) - 1;
      counterEl.textContent = demoCount.toLocaleString();
    }, 4000);
  }
  generateNicknames();
  renderSavedVault();
});

const profiles = {
  zxtufan: { img:'zxtufan.jpg', badge:'LEGEND NEVER DIES (V8.0)', name:'ZX ★ TUFAN', quote:'"Main Agar Apni Jawani Ke Suna Du Kisse, Ye Jo Launde Hain, Mere Paon Dabane Lag Jaayein !!!"', stats:['🔥 BR Heroic','🛡️ UID: 2910340190','👍 6577 Likes'] },
  ritesh: { img:'ritesh.jpg', badge:'RITESH THARU PRO', name:'RITESH ⟨®⟩', quote:'"One-Tap Master & Clash Squad Rusher!"', stats:['🔥 CS Master','⚡ 99+ Headshot','👍 4890 Likes'] },
  faisal: { img:'faisal.jpg', badge:'FAISAL BOSS', name:'FAISAL', quote:'"Fearless Rusher & Tactical Survival Expert!"', stats:['⚔️ BR Grandmaster','🛡️ UID: 2458453341','👍 1718 Likes'] },
  squad: { img:'squad.jpg', badge:'ZX TUFAN SQUAD V8.0', name:'ZX TUFAN & SQUAD', quote:'"ZX TUFAN, LE ARMAN, MD TOX 10, RITESH & FAISAL - Undefeated Esports Squad!"', stats:['🛡️ Group Leader: ZX TUFAN','🔥 Elite Squad','👑 Champions'] }
};

function switchProfile(key) {
  const p = profiles[key]; if (!p) return;
  document.getElementById('userAvatar').src = p.img;
  document.getElementById('profileBadge').textContent = p.badge;
  document.getElementById('profileName').textContent = p.name + ' ✔';
  document.getElementById('profileQuote').textContent = p.quote;
  const stats = document.getElementById('profileStats'); stats.replaceChildren();
  p.stats.forEach(s => { const el = document.createElement('div'); el.className='stat-pill'; el.textContent=s; stats.appendChild(el); });
}

function handleAvatarFallback(imgEl) {
  imgEl.onerror = null;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300"><rect width="300" height="300" fill="#1e0a3c"/><text x="150" y="150" text-anchor="middle" fill="#ffd700" font-family="Arial" font-size="28" font-weight="bold">ZX SQUAD V8.0</text></svg>`;
  imgEl.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
}

// Comprehensive Device Specs Database (Hardware Specs Only — NO hardcoded sensitivity)
const allDevicesList = [
  {name:"Redmi Note 13 Pro+",brand:"Xiaomi",chip:"Dimensity 7200-Ultra",tier:"upper",hz:120,touchRate:240},
  {name:"Redmi Note 13 Pro",brand:"Xiaomi",chip:"Snapdragon 7s Gen 2",tier:"mid",hz:120,touchRate:240},
  {name:"Redmi Note 12",brand:"Xiaomi",chip:"Snapdragon 685",tier:"mid",hz:120,touchRate:240},
  {name:"Redmi Note 11",brand:"Xiaomi",chip:"Snapdragon 680",tier:"mid",hz:90,touchRate:180},
  {name:"Redmi Note 10 Pro",brand:"Xiaomi",chip:"Snapdragon 732G",tier:"mid",hz:120,touchRate:240},
  {name:"Redmi Note 9",brand:"Xiaomi",chip:"Helio G85",tier:"mid",hz:60,touchRate:180},
  {name:"Redmi Note 8 Pro",brand:"Xiaomi",chip:"Helio G90T",tier:"mid",hz:60,touchRate:180},
  {name:"Redmi 13C",brand:"Xiaomi",chip:"Helio G85",tier:"entry",hz:90,touchRate:180},
  {name:"Redmi 9A / 9C",brand:"Xiaomi",chip:"Helio G25/G35",tier:"entry",hz:60,touchRate:120},
  {name:"POCO X6 Pro",brand:"POCO",chip:"Dimensity 8300-Ultra",tier:"flagship",hz:120,touchRate:480},
  {name:"POCO F6",brand:"POCO",chip:"Snapdragon 8s Gen 3",tier:"flagship",hz:120,touchRate:480},
  {name:"POCO X3 Pro",brand:"POCO",chip:"Snapdragon 860",tier:"upper",hz:120,touchRate:240},
  {name:"POCO M6 Pro",brand:"POCO",chip:"Snapdragon 4 Gen 2",tier:"mid",hz:90,touchRate:180},
  {name:"iPhone 16 Pro Max",brand:"Apple",chip:"A18 Pro",tier:"flagship",hz:120,touchRate:240},
  {name:"iPhone 15 Pro",brand:"Apple",chip:"A17 Pro",tier:"flagship",hz:120,touchRate:240},
  {name:"iPhone 13",brand:"Apple",chip:"A15 Bionic",tier:"upper",hz:60,touchRate:120},
  {name:"iPhone 11",brand:"Apple",chip:"A13 Bionic",tier:"upper",hz:60,touchRate:120},
  {name:"Galaxy S24 Ultra",brand:"Samsung",chip:"Snapdragon 8 Gen 3",tier:"flagship",hz:120,touchRate:240},
  {name:"Galaxy A55",brand:"Samsung",chip:"Exynos 1480",tier:"upper",hz:120,touchRate:240},
  {name:"Galaxy A15",brand:"Samsung",chip:"Helio G99",tier:"mid",hz:90,touchRate:180},
  {name:"Galaxy M14",brand:"Samsung",chip:"Exynos 1330",tier:"entry",hz:90,touchRate:180},
  {name:"iQOO Neo 9 Pro",brand:"iQOO",chip:"Snapdragon 8 Gen 2",tier:"flagship",hz:144,touchRate:360},
  {name:"iQOO Z9",brand:"iQOO",chip:"Dimensity 7200",tier:"upper",hz:120,touchRate:300},
  {name:"OnePlus 12R",brand:"OnePlus",chip:"Snapdragon 8 Gen 2",tier:"flagship",hz:120,touchRate:360},
  {name:"OnePlus Nord CE 4",brand:"OnePlus",chip:"Snapdragon 7 Gen 3",tier:"upper",hz:120,touchRate:240},
  {name:"Realme Narzo 70 Pro",brand:"Realme",chip:"Dimensity 7050",tier:"mid",hz:120,touchRate:240},
  {name:"Realme C55",brand:"Realme",chip:"Helio G88",tier:"entry",hz:90,touchRate:180},
  {name:"Vivo T3 5G",brand:"Vivo",chip:"Dimensity 7200",tier:"upper",hz:120,touchRate:240},
  {name:"Vivo Y20",brand:"Vivo",chip:"Snapdragon 460",tier:"entry",hz:60,touchRate:120},
  {name:"Nothing Phone (2a)",brand:"Nothing",chip:"Dimensity 7200 Pro",tier:"upper",hz:120,touchRate:240},
  {name:"Infinix GT 20 Pro",brand:"Infinix",chip:"Dimensity 8200 Ultimate",tier:"upper",hz:144,touchRate:360},
  {name:"Infinix Note 40",brand:"Infinix",chip:"Helio G99 Ultimate",tier:"mid",hz:120,touchRate:240},
  {name:"Lava Agni 3",brand:"Lava",chip:"Dimensity 7300X",tier:"upper",hz:120,touchRate:240},
  {name:"Tecno Pova 6 Pro",brand:"Tecno",chip:"Dimensity 6080",tier:"mid",hz:120,touchRate:240}
];

let selectedDeviceObj = allDevicesList.find(d => d.name === "Redmi Note 9") || allDevicesList[0];
let lastGeneratedConfig = null;

// Deterministic hash from device name + parameters so every phone model gets its own unique formula-driven output
function hashSeed(str) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return (h >>> 0) / 4294967295;
}

function filterDeviceSuggestions() {
  const q = document.getElementById('deviceSearchInput').value.toLowerCase().trim();
  const list = document.getElementById('deviceSuggestionsList'); list.replaceChildren();
  if (!q) { list.classList.add('hidden'); return; }
  const matches = allDevicesList.filter(d => `${d.name} ${d.brand} ${d.chip}`.toLowerCase().includes(q)).slice(0, 20);
  if (!matches.length) {
    const empty = document.createElement('div');
    empty.className = 'suggestion-item';
    empty.textContent = `Use custom device: "${document.getElementById('deviceSearchInput').value.trim()}"`;
    empty.addEventListener('click', () => {
      const customName = document.getElementById('deviceSearchInput').value.trim();
      selectDevice({name: customName, brand: "Custom", chip: "Adaptive SoC", tier: "mid", hz: 90, touchRate: 180});
    });
    list.appendChild(empty);
  }
  matches.forEach(d => {
    const item = document.createElement('div'); item.className = 'suggestion-item';
    const label = document.createElement('span'); label.textContent = `${d.name} (${d.chip} • ${d.hz}Hz)`;
    const tier = document.createElement('span'); tier.className = `tier-tag ${d.tier}`; tier.textContent = d.tier;
    item.append(label, tier);
    item.addEventListener('click', () => selectDevice(d));
    list.appendChild(item);
  });
  list.classList.remove('hidden');
}

function selectDevice(dev) {
  selectedDeviceObj = dev;
  document.getElementById('deviceSearchInput').value = dev.name;
  document.getElementById('selectedDeviceText').textContent = `${dev.name} (${dev.chip} | ${dev.hz}Hz)`;
  const hzSelect = document.getElementById('makerHz');
  if (hzSelect && [60, 90, 120, 144].includes(dev.hz)) hzSelect.value = String(dev.hz);
  document.getElementById('deviceSuggestionsList').classList.add('hidden');
}

function clearSearchInput() {
  document.getElementById('deviceSearchInput').value = '';
  document.getElementById('deviceSuggestionsList').classList.add('hidden');
}

function clamp(n, min, max) { return Math.max(min, Math.min(max, Math.round(n))); }

function generateCustomSensi(isVariation) {
  const typedVal = document.getElementById('deviceSearchInput').value.trim();
  if (typedVal && (!selectedDeviceObj || selectedDeviceObj.name.toLowerCase() !== typedVal.toLowerCase())) {
    const found = allDevicesList.find(d => d.name.toLowerCase() === typedVal.toLowerCase() || d.name.toLowerCase().includes(typedVal.toLowerCase()));
    if (found) {
      selectedDeviceObj = found;
    } else {
      selectedDeviceObj = { name: typedVal, brand: "Custom", chip: "Octa-Core SoC", tier: "mid", hz: Number(document.getElementById('makerHz').value) || 60, touchRate: 180 };
    }
  }

  const dev = selectedDeviceObj || allDevicesList[0];
  const ram = Number(document.getElementById('makerRam').value) || 4;
  const hz = Number(document.getElementById('makerHz').value) || dev.hz || 60;
  const style = document.getElementById('makerPlaystyle').value;
  const dragSpeed = document.getElementById('makerDragSpeed').value;

  // Dynamic Seed Calculation — unique per device name + RAM + Hz + playstyle
  const seedKey = `${dev.name.toLowerCase()}|${ram}|${hz}|${style}|${dragSpeed}`;
  const baseSeed = hashSeed(seedKey);
  const jitter = isVariation ? (Math.random() * 4 - 2) : ((baseSeed - 0.5) * 4);

  // Physics-based hardware curve (lower RAM/Hz needs slightly higher base sensitivity to overcome frame latency)
  const tierFactor = { entry: 3.5, mid: 1.5, upper: 0, flagship: -1.5 }[dev.tier] || 0;
  const ramFactor = ram <= 3 ? 3.5 : ram === 4 ? 2.0 : ram === 6 ? 0.5 : -1.0;
  const hzFactor = hz <= 60 ? 2.5 : hz === 90 ? 1.0 : hz === 120 ? -0.5 : -1.5;
  const styleFactor = { headshot_onetap: 3.5, br_cs_allrounder: 0, no_recoil: -4.5 }[style] || 0;
  const dragFactor = { slow: 2.5, medium: 0, fast: -2.5 }[dragSpeed] || 0;

  const gen = clamp(93 + tierFactor + ramFactor + hzFactor + styleFactor + dragFactor + jitter, 82, 108);
  const red = clamp(gen - (3 + baseSeed * 2), 78, 105);
  const s2x = clamp(red - (5 + baseSeed * 3), 72, 100);
  const s4x = clamp(s2x - (4 + baseSeed * 3), 68, 96);
  const awm = clamp(62 + (hz >= 120 ? 8 : 4) + (style === 'headshot_onetap' ? 5 : 0) + (baseSeed * 6), 52, 88);
  const free = clamp(gen - 10 + (baseSeed * 4), 68, 98);

  // Dynamic DPI calculation (keeps <=445 on <=4GB RAM for safety, scales cleanly on higher RAM)
  let rawDpi = 400 + (ram * 12) + (hz >= 120 ? 25 : 0) + Math.round(baseSeed * 18);
  if (ram <= 4 || dev.tier === 'entry') rawDpi = Math.min(445, rawDpi);
  const dpi = clamp(rawDpi, 390, 580);

  // Dynamic Fire Button size
  const fireBase = style === 'headshot_onetap' ? 44 : style === 'no_recoil' ? 50 : 47;
  const fireBtn = clamp(fireBase + (dev.tier === 'entry' ? 2 : 0) - (dragSpeed === 'fast' ? 1 : 0) + Math.round((baseSeed - 0.5) * 2), 41, 54);

  lastGeneratedConfig = {
    device: `${dev.name} (${ram}GB | ${hz}Hz)`,
    style,
    gen, red, s2x, s4x, awm, free, dpi, fireBtn,
    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  };

  document.getElementById('mGen').textContent = gen;
  document.getElementById('mRed').textContent = red;
  document.getElementById('m2x').textContent = s2x;
  document.getElementById('m4x').textContent = s4x;
  document.getElementById('mAwm').textContent = awm;
  document.getElementById('mFreeLook').textContent = free;
  document.getElementById('mDpi').textContent = dev.brand === 'Apple' ? `Gliding ${clamp(95 + baseSeed * 25, 90, 120)}` : dpi;
  document.getElementById('mFireBtn').textContent = fireBtn + '%';

  document.getElementById('makerDeviceTitle').textContent = `🎯 V8 Dynamic Profile: ${dev.name} (${dev.chip} | ${ram}GB | ${hz}Hz)`;
  document.getElementById('makerNote').textContent = `Calculated dynamically from ${dev.name}'s ${hz}Hz touch sampling & ${ram}GB RAM latency curve. Test in Training Ground and fine-tune ±2 if needed.`;
  document.getElementById('makerResult').classList.remove('hidden');
}

function saveCurrentSensiToVault() {
  if (!lastGeneratedConfig) return;
  const vault = JSON.parse(localStorage.getItem('zxtufan_vault_v8') || '[]');
  vault.unshift(lastGeneratedConfig);
  localStorage.setItem('zxtufan_vault_v8', JSON.stringify(vault.slice(0, 15)));
  alert(`Saved ${lastGeneratedConfig.device} to your Vault!`);
  renderSavedVault();
}

function renderSavedVault() {
  const container = document.getElementById('savedVaultList');
  if (!container) return;
  const vault = JSON.parse(localStorage.getItem('zxtufan_vault_v8') || '[]');
  container.replaceChildren();
  if (!vault.length) {
    const p = document.createElement('p');
    p.className = 'note';
    p.textContent = 'Abhi tak koi profile save nahi ki gayi hai. Dynamic Sensi tab se profile generate karke save karein!';
    container.appendChild(p);
    return;
  }
  vault.forEach((item) => {
    const card = document.createElement('div');
    card.className = 'nick-item';
    card.style.flexDirection = 'column';
    card.style.alignItems = 'flex-start';
    card.innerHTML = `<div style="display:flex;justify-content:space-between;width:100%;"><strong>${item.device}</strong><span class="copy-tag">${item.time}</span></div>
      <small style="color:var(--neon-cyan);margin-top:4px;">Gen: ${item.gen} | Red Dot: ${item.red} | 2x: ${item.s2x} | 4x: ${item.s4x} | AWM: ${item.awm} | Fire: ${item.fireBtn}% | DPI: ${item.dpi}</small>`;
    container.appendChild(card);
  });
}

function clearSavedVault() {
  localStorage.removeItem('zxtufan_vault_v8');
  renderSavedVault();
}

function copyGeneratedSensi() {
  if (!lastGeneratedConfig) return;
  const c = lastGeneratedConfig;
  const text = `🔥 ZX TUFAN V8 SENSI (${c.device}) 🔥
General: ${c.gen}
Red Dot: ${c.red}
2x Scope: ${c.s2x}
4x Scope: ${c.s4x}
AWM: ${c.awm}
Free Look: ${c.free}
Fire Button: ${c.fireBtn}% | DPI: ${c.dpi}`;
  copyText(text);
}

// Nickname Generator
const leftDecors = ['꧁༺','⚡','王','🔥','💎','『⚡』','×͜×','༒︎','★','么','〆','亗','ツ','々'];
const rightDecors = ['༻꧂','⚡','王','🔥','💎','『⚡』','×͜×','༒︎','★','么','〆','亗','ツ','々'];
const badges = ['',' • 𝐓𝐔𝐅𝐀𝐍',' 𝖃',' 𝟗𝟗+',' ✓',' ᶠᶠ',' ᴾᴿᴼ',' ᴮᴼˢˢ',' ᴳᴼᴰ',' ⁷⁷⁷'];
const fontMap = {a:'𝐚',b:'𝐛',c:'𝐜',d:'𝐝',e:'𝐞',f:'𝐟',g:'𝐠',h:'𝐡',i:'𝐢',j:'𝐣',k:'𝐤',l:'𝐥',m:'𝐦',n:'𝐧',o:'𝐨',p:'𝐩',q:'𝐪',r:'𝐫',s:'𝐬',t:'𝐭',u:'𝐮',v:'𝐯',w:'𝐰',x:'𝐱',y:'𝐲',z:'𝐳',A:'𝐀',B:'𝐁',C:'𝐂',D:'𝐃',E:'𝐄',F:'𝐅',G:'𝐆',H:'𝐇',I:'𝐈',J:'𝐉',K:'𝐊',L:'𝐋',M:'𝐌',N:'𝐍',O:'𝐎',P:'𝐏',Q:'𝐐',R:'𝐑',S:'𝐒',T:'𝐓',U:'𝐔',V:'𝐕',W:'𝐖',X:'𝐗',Y:'𝐘',Z:'𝐙'};
function stylizeText(s) { return Array.from(s).map(c => fontMap[c] || c).join(''); }
let totalGeneratedNicks = 0;

function buildNickBatch(count) {
  const base = (document.getElementById('baseNameInput').value.trim() || 'TUFAN').slice(0, 24), box = document.getElementById('nickResults');
  for (let i = 0; i < count; i++) {
    const index = totalGeneratedNicks++;
    const nick = `${leftDecors[index % leftDecors.length]} ${stylizeText(base)}${badges[index % badges.length]} ${rightDecors[(index * 3) % rightDecors.length]}`;
    const item = document.createElement('div'); item.className = 'nick-item';
    const label = document.createElement('span'); label.className = 'nick-text'; label.textContent = nick;
    const copy = document.createElement('span'); copy.className = 'copy-tag'; copy.textContent = 'COPY';
    item.append(label, copy); item.addEventListener('click', () => copyText(nick)); box.appendChild(item);
  }
  const counter = document.getElementById('nickCounterText');
  if (counter) counter.textContent = `Showing ${totalGeneratedNicks} combinations`;
}
function generateNicknames() { totalGeneratedNicks = 0; document.getElementById('nickResults').replaceChildren(); buildNickBatch(30); }
function loadMoreNicknames() { buildNickBatch(50); }

async function copyText(value) {
  try {
    if (navigator.clipboard && window.isSecureContext) await navigator.clipboard.writeText(value);
    else {
      const t = document.createElement('textarea'); t.value = value; t.style.position = 'fixed'; t.style.opacity = '0';
      document.body.appendChild(t); t.select(); document.execCommand('copy'); t.remove();
    }
    showStatus('Copied to clipboard!');
  } catch (e) { window.prompt('Copy this:', value); }
}
function showStatus(message) { const el = document.getElementById('termuxScanStatus'); if (el) el.textContent = message; else alert(message); }

// Dynamic HUD Geometry Analyzer (Reads actual image width/height aspect ratio)
let hudObjectUrl = null;
let hudImgDimensions = { width: 1920, height: 1080, aspect: 1.77 };

function previewHudImage(event) {
  const file = event.target.files && event.target.files[0]; if (!file) return;
  if (!file.type.startsWith('image/')) { alert('Please choose an image file.'); return; }
  if (file.size > 10 * 1024 * 1024) { alert('Image is too large. Please choose an image under 10 MB.'); event.target.value = ''; return; }
  if (hudObjectUrl) URL.revokeObjectURL(hudObjectUrl);
  hudObjectUrl = URL.createObjectURL(file);
  const img = document.getElementById('hudPreviewImg');
  img.onload = () => {
    hudImgDimensions = {
      width: img.naturalWidth || 1920,
      height: img.naturalHeight || 1080,
      aspect: (img.naturalWidth || 1920) / (img.naturalHeight || 1080)
    };
    document.getElementById('hudImgMeta').textContent = `${file.name} • ${hudImgDimensions.width}x${hudImgDimensions.height}px (Ratio ${hudImgDimensions.aspect.toFixed(2)}:1)`;
  };
  img.src = hudObjectUrl;
  document.getElementById('hudPreviewContainer').classList.remove('hidden');
}

function analyzeHudScreenshot() {
  const grip = document.getElementById('hudGripSelect').value;
  const aspect = hudImgDimensions.aspect;
  // Aspect ratio & grip mathematical formula (no static lookup)
  const wideBonus = aspect >= 2.1 ? 3 : aspect >= 1.9 ? 2 : 0;
  const gripMod = { '2finger': -2, '3finger': 2, '4finger': 1 }[grip] || 0;

  const gen = clamp(94 + wideBonus + gripMod, 86, 102);
  const red = clamp(gen - 3, 82, 99);
  const s2x = clamp(red - 4, 78, 95);
  const s4x = clamp(s2x - 4, 74, 92);
  const fire = clamp((grip === '2finger' ? 49 : grip === '3finger' ? 45 : 43) - (aspect >= 2.1 ? 1 : 0), 40, 52) + '%';
  const zone = aspect >= 2.05 ? 'Extended Right-Arc' : (grip === '2finger' ? 'Lower-Right Thumb' : 'Upper-Right Claw');

  [['hGen', gen], ['hRed', red], ['h2x', s2x], ['h4x', s4x], ['hFireBtn', fire], ['hDragZone', zone]].forEach(([id, val]) => {
    document.getElementById(id).textContent = val;
  });
  document.getElementById('hudTipBanner').textContent = `🎯 CALIBRATED FOR ${hudImgDimensions.width}x${hudImgDimensions.height} (${grip.toUpperCase()})`;
  document.getElementById('hudResultBox').classList.remove('hidden');
  document.getElementById('hudLaser').classList.remove('hidden');
  window.setTimeout(() => document.getElementById('hudLaser').classList.add('hidden'), 2000);
}

// Termux Scanner Download & Hardware Report Analysis
const termuxPython = String.raw`import json
import os
import platform
import re
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

def get_refresh_rate():
    try:
        disp = subprocess.check_output(["dumpsys", "display"], text=True, stderr=subprocess.DEVNULL)
        rates = [float(x) for x in re.findall(r"refreshRate[=: ]+(\d+(?:\.\d+)?)", disp)]
        if rates:
            return round(max(rates))
    except Exception:
        pass
    return None

report = {
    "brand": prop("ro.product.brand") or platform.machine(),
    "model": prop("ro.product.model") or platform.node() or "Unknown",
    "android_version": prop("ro.build.version.release") or "Unknown",
    "resolution": "Not available",
    "refresh_rate_hz": get_refresh_rate(),
    "ram_total_mb": read_meminfo(),
    "scanner_version": "8.0",
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

function downloadTermuxScanner() {
  const blob = new Blob([termuxPython], { type: 'text/x-python;charset=utf-8' }), url = URL.createObjectURL(blob);
  const a = document.createElement('a'); a.href = url; a.download = 'main.py'; document.body.appendChild(a); a.click(); a.remove(); URL.revokeObjectURL(url);
}
async function copyTermuxCommands() {
  const text = document.getElementById('termuxCommands').textContent;
  try { await navigator.clipboard.writeText(text); showStatus('Termux commands copied.'); }
  catch (e) { window.prompt('Copy these commands:', text); }
}
function safeText(id, value) { document.getElementById(id).textContent = (value === null || value === undefined || value === '') ? '—' : String(value); }

function recommendFromReport(report) {
  const ramGb = Number(report.ram_total_mb || 0) / 1024;
  const refresh = Number(report.refresh_rate_hz || 60);
  const modelStr = String(report.model || 'Android');
  const seed = hashSeed(`${report.brand}|${modelStr}|${ramGb.toFixed(1)}|${refresh}`);

  // Dynamic calculation directly from hardware specs
  const ramAdj = ramGb > 0 ? (ramGb <= 3.8 ? 3.5 : ramGb <= 5.8 ? 1.5 : -0.5) : 1.0;
  const hzAdj = refresh >= 120 ? -1.0 : refresh >= 90 ? 0.5 : 2.0;
  const gen = clamp(94 + ramAdj + hzAdj + (seed - 0.5) * 3, 86, 104);
  const red = clamp(gen - 3, 82, 100);
  const s2x = clamp(red - 4, 76, 97);
  const s4x = clamp(s2x - 4, 72, 94);
  const sniper = clamp(66 + (refresh >= 90 ? 6 : 2) + Math.round(seed * 6), 55, 86);
  const free = clamp(gen - 9, 70, 95);

  return { gen, red, s2x, s4x, sniper, free };
}

async function analyseTermuxReport() {
  const input = document.getElementById('deviceReportInput'), file = input.files && input.files[0];
  if (!file) { showStatus('Please select device_report.json first.'); return; }
  if (file.size > 100 * 1024) { showStatus('Report file is unexpectedly large.'); return; }
  try {
    const report = JSON.parse(await file.text());
    if (!report || typeof report !== 'object' || Array.isArray(report)) throw new Error('JSON must contain an object.');
    safeText('scanBrand', report.brand);
    safeText('scanModel', report.model);
    safeText('scanAndroid', report.android_version);
    safeText('scanResolution', report.resolution);
    safeText('scanRefresh', report.refresh_rate_hz ? `${report.refresh_rate_hz} Hz` : '60 Hz (Default)');
    safeText('scanRam', report.ram_total_mb ? `${(Number(report.ram_total_mb) / 1024).toFixed(2)} GB (${report.ram_total_mb} MB)` : 'Not reported');
    const s = recommendFromReport(report);
    safeText('scanGen', s.gen); safeText('scanRed', s.red); safeText('scan2x', s.s2x); safeText('scan4x', s.s4x); safeText('scanSniper', s.sniper); safeText('scanFree', s.free);
    document.getElementById('termuxDeviceTitle').textContent = `Detected: ${report.brand || 'Android'} ${report.model || ''}`;
    safeText('scanDisclaimer', `Dynamically calculated from your device's ${report.ram_total_mb || 'reported'} MB RAM & ${report.refresh_rate_hz || 60}Hz display profile.`);
    document.getElementById('termuxDeviceResult').classList.remove('hidden');
    showStatus('Hardware report analysed & sensitivity generated.');
  } catch (err) { showStatus(`Could not read report: ${err.message}`); }
}
