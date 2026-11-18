function switchTab(tabId, btnEl) {
    document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.nav-btn').forEach(el => el.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');
    if (btnEl) btnEl.classList.add('active');
}

// Self-contained SVG avatar fallback if 38866.png / 38866.jpg is not present in folder
function handleAvatarFallback(imgEl) {
    if (!imgEl.dataset.triedJpg) {
        imgEl.dataset.triedJpg = '1';
        imgEl.src = '38866.jpg';
        return;
    }
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300">
        <defs>
            <radialGradient id="bg" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stop-color="#1e0a3c"/>
                <stop offset="100%" stop-color="#05030a"/>
            </radialGradient>
            <linearGradient id="neon" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#00f3ff"/>
                <stop offset="100%" stop-color="#9d00ff"/>
            </linearGradient>
        </defs>
        <rect width="300" height="300" fill="url(#bg)"/>
        <circle cx="150" cy="150" r="136" fill="none" stroke="url(#neon)" stroke-width="6"/>
        <text x="150" y="135" text-anchor="middle" fill="#ffd700" font-family="Arial Black, sans-serif" font-size="34" font-weight="900">ZX★TUFAN</text>
        <text x="150" y="172" text-anchor="middle" fill="#00f3ff" font-family="Arial, sans-serif" font-size="16" font-weight="bold">UID: 2910340190</text>
        <text x="150" y="205" text-anchor="middle" fill="#b8b3d1" font-family="Arial, sans-serif" font-size="12">PLAY LIKE A LEGEND</text>
    </svg>`;
    imgEl.onerror = null;
    imgEl.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
}

// Honest Web Browser Hardware Profiler (clearly separated from native Termux script)
function runTermuxScan() {
    const output = document.getElementById('termOutput');
    const cores = navigator.hardwareConcurrency || 4;
    const mem = navigator.deviceMemory || null; // Only available on Chromium browsers
    const dpr = (window.devicePixelRatio || 1).toFixed(2);
    const sw = Math.round(window.screen.width * (window.devicePixelRatio || 1));
    const sh = Math.round(window.screen.height * (window.devicePixelRatio || 1));
    const ua = navigator.userAgent || '';
    const isIOS = /iPhone|iPad|iPod/i.test(ua);
    const isAndroid = /Android/i.test(ua);
    const osLabel = isIOS ? 'Apple iOS (WebKit)' : (isAndroid ? 'Android OS (Web)' : (navigator.platform || 'Desktop Web'));

    output.innerHTML = `<p class="term-line">~ $ python main.py --web-inspect</p>
        <p class="term-line">[WEB-API] Inspecting real browser hardware properties...</p>`;

    setTimeout(() => {
        output.innerHTML += `<p class="term-line">[CPU] Logical Threads (navigator.hardwareConcurrency): ${cores} Threads | OS: ${osLabel}</p>`;
    }, 250);

    setTimeout(() => {
        const memText = mem ? `~${mem} GB (Browser API Cap)` : 'Hidden by Browser Privacy (Assuming 4GB Safe Profile)';
        output.innerHTML += `<p class="term-line">[DISPLAY] Physical Pixels: ${sw}x${sh}px (DPR: ${dpr}x) | Memory: ${memText}</p>`;
    }, 550);

    setTimeout(() => {
        const effectiveRam = mem || (isIOS ? 6 : 4);
        let gen = 96, red = 93, s2x = 90, s4x = 87, awm = 72, dpi = 430;

        if (effectiveRam <= 4) {
            gen = 94; red = 91; s2x = 88; s4x = 85; awm = 68;
            dpi = 420; // Strictly capped under 450 for low-end devices
        } else if (effectiveRam <= 6) {
            gen = 97; red = 94; s2x = 91; s4x = 88; awm = 73;
            dpi = 445;
        } else {
            gen = 99; red = 96; s2x = 94; s4x = 91; awm = 78;
            dpi = 520;
        }

        output.innerHTML += `<p class="term-line" style="color:#00ffff;">[DONE] Web inspection complete. Safe DPI (${dpi}) applied (For exact kernel/RAM, run main.py in Termux).</p>`;
        document.getElementById('tGen').innerText = gen;
        document.getElementById('tRed').innerText = red;
        document.getElementById('t2x').innerText = s2x;
        document.getElementById('t4x').innerText = s4x;
        document.getElementById('tAwm').innerText = awm;
        document.getElementById('tDpi').innerText = isIOS ? 'Default (iOS)' : dpi;
        document.getElementById('termResult').classList.remove('hidden');
    }, 900);
}

function toggleTermuxCode() {
    document.getElementById('realPythonBox').classList.toggle('hidden');
}

function copyPythonScript(btn) {
    const code = document.getElementById('pythonCodeBlock').innerText;
    copyTextFallback(code, () => {
        const orig = btn.innerText;
        btn.innerText = '✅ COPIED main.py TO CLIPBOARD!';
        setTimeout(() => { btn.innerText = orig; }, 1500);
    });
}

// Sensi Maker: Brand-tier + RAM (2,3,4,6,8,12) + Playstyle (Headshot One-Tap, BR+CS All Rounder, No Recoil)
function generateCustomSensi() {
    const selectEl = document.getElementById('makerModelSelect');
    const selectedOpt = selectEl.options[selectEl.selectedIndex];
    const model = selectEl.value;
    const brand = selectedOpt.dataset.brand || 'xiaomi';
    const tier = selectedOpt.dataset.tier || 'mid';
    const ram = parseInt(document.getElementById('makerRam').value, 10);
    const playstyle = document.getElementById('makerPlaystyle').value;

    let gen = 96, red = 93, s2x = 90, s4x = 87, awm = 72, dpi = 430;

    // 1. RAM-based base calibration & strict <450 DPI rule for low-end (2GB, 3GB, 4GB)
    if (ram === 2 || ram === 3) {
        gen = 91; red = 88; s2x = 85; s4x = 82; awm = 64;
        dpi = 405; // strictly < 450
    } else if (ram === 4) {
        gen = 94; red = 91; s2x = 88; s4x = 85; awm = 69;
        dpi = 430; // strictly < 450
    } else if (ram === 6) {
        gen = 96; red = 93; s2x = 90; s4x = 87; awm = 73;
        dpi = 470;
    } else if (ram === 8) {
        gen = 98; red = 95; s2x = 92; s4x = 89; awm = 76;
        dpi = 525;
    } else {
        gen = 99; red = 97; s2x = 94; s4x = 91; awm = 81;
        dpi = 575;
    }

    // 2. Hardware tier & brand touch-response fine-tuning
    if (tier === 'entry') {
        gen -= 1; red -= 1;
        if (ram > 4) dpi -= 25;
    } else if (tier === 'flagship') {
        gen = Math.min(100, gen + 1);
        red = Math.min(100, red + 1);
        if (ram > 4) dpi += 15;
    }

    if (brand === 'samsung' || brand === 'vivo' || brand === 'oppo') {
        // Slightly higher base general needed for OneUI/Funtouch/ColorOS drag curve
        gen = Math.min(100, gen + 1);
    }

    // 3. Playstyle calibration
    let modeLabel = "BR + CS ALL ROUNDER";
    let noteText = "Balanced drag speed and scope stability for both Ranked BR & Clash Squad.";
    if (playstyle === 'headshot_onetap') {
        gen = Math.min(100, gen + 2);
        red = Math.min(100, red + 3);
        modeLabel = "HEADSHOT ONE-TAP";
        noteText = "High initial drag acceleration tuned for M1887, M590 & Desert Eagle one-taps.";
    } else if (playstyle === 'no_recoil') {
        gen = Math.max(84, gen - 3);
        red = Math.max(82, red - 3);
        s2x = Math.max(80, s2x - 2);
        s4x = Math.max(78, s4x - 3);
        if (ram <= 4) dpi = Math.min(440, dpi - 10);
        else dpi -= 25;
        modeLabel = "NO RECOIL CONTROL";
        noteText = "Dampened vertical kick for laser-beam SMG & AR sprays with minimal crosshair shake.";
    }

    // Final safety clamp for low-end devices (2GB, 3GB, 4GB RAM or entry tier)
    if (ram <= 4 || tier === 'entry') {
        dpi = Math.min(445, dpi);
    }

    document.getElementById('mGen').innerText = gen;
    document.getElementById('mRed').innerText = red;
    document.getElementById('m2x').innerText = s2x;
    document.getElementById('m4x').innerText = s4x;
    document.getElementById('mAwm').innerText = awm;

    if (brand === 'apple') {
        document.getElementById('mDpiLabel').innerText = 'iOS Gliding Cursor';
        document.getElementById('mDpi').innerText = playstyle === 'headshot_onetap' ? 'Refined (115)' : 'Single (95)';
    } else {
        document.getElementById('mDpiLabel').innerText = ram <= 4 ? 'Safe DPI (<450)' : 'Pro DPI';
        document.getElementById('mDpi').innerText = dpi;
    }

    document.getElementById('makerDeviceTitle').innerText = `🎯 ${model} (${ram}GB RAM | ${modeLabel}) Ready!`;
    document.getElementById('makerNote').innerText = noteText;
    document.getElementById('makerResult').classList.remove('hidden');
}

// Honest Custom HUD Geometry & Grip Calculator
let loadedHudWidth = 0;
let loadedHudHeight = 0;
let loadedHudAspect = 1.77;

function previewHudImage(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const img = document.getElementById('hudPreviewImg');
            img.onload = function() {
                loadedHudWidth = img.naturalWidth;
                loadedHudHeight = img.naturalHeight;
                loadedHudAspect = (loadedHudWidth / loadedHudHeight);
                const ratioLabel = loadedHudAspect >= 2.0 ? '20:9 / 21:9 Ultra-Wide' : (loadedHudAspect >= 1.6 ? '16:9 / 18:9 Standard' : '4:3 Tablet / Square');
                document.getElementById('hudImgMeta').innerText = `Loaded: ${loadedHudWidth}x${loadedHudHeight}px (${ratioLabel} | Ratio ${loadedHudAspect.toFixed(2)})`;
            };
            img.src = e.target.result;
            document.getElementById('hudPreviewContainer').classList.remove('hidden');
            document.getElementById('hudResultBox').classList.add('hidden');
        };
        reader.readAsDataURL(file);
    }
}

function analyzeHudScreenshot() {
    const fileInput = document.getElementById('hudFileInput');
    if (!fileInput.files || fileInput.files.length === 0) {
        alert('Pehle gallery se apne Custom HUD ka screenshot select karein!');
        return;
    }

    const grip = document.getElementById('hudGripSelect').value;
    const laser = document.getElementById('hudLaser');
    laser.classList.remove('hidden');

    setTimeout(() => {
        laser.classList.add('hidden');

        // Calculate Fire Button % and Sensitivity based on actual image aspect ratio + selected claw grip
        const isWide = loadedHudAspect >= 2.0;
        const isTablet = loadedHudAspect < 1.55;

        let fireBtn = isWide ? 43 : (isTablet ? 50 : 46);
        let gen = isWide ? 97 : (isTablet ? 93 : 95);
        let red = isWide ? 94 : (isTablet ? 90 : 92);
        let s2x = isWide ? 91 : 88;
        let s4x = isWide ? 88 : 85;
        let dragZone = 'Lower-Right Thumb';

        if (grip === '3finger') {
            fireBtn -= 2;
            gen = Math.min(100, gen + 1);
            dragZone = 'Lower-Right + Left Index';
        } else if (grip === '4finger') {
            fireBtn -= 3;
            gen = Math.min(100, gen + 2);
            red = Math.min(100, red + 2);
            dragZone = 'Full 4-Finger Claw Box';
        }

        const screenType = isWide ? '20:9 Wide Display' : (isTablet ? '4:3 Tablet Display' : 'Standard Display');
        document.getElementById('hGen').innerText = gen;
        document.getElementById('hRed').innerText = red;
        document.getElementById('h2x').innerText = s2x;
        document.getElementById('h4x').innerText = s4x;
        document.getElementById('hFireBtn').innerText = fireBtn + '%';
        document.getElementById('hDragZone').innerText = dragZone;
        document.getElementById('hudAnalysisSummary').innerText = `🎯 ${screenType} (${loadedHudWidth}x${loadedHudHeight}) + ${grip.toUpperCase()} Calibrated!`;
        document.getElementById('hudResultBox').classList.remove('hidden');
    }, 900);
}

// 10,000+ Guaranteed Unique Combinatorial Nickname Engine
// 20 leftDecors * 20 rightDecors * 15 badges * 5 fontMaps = 30,000 mathematically unique combinations
const leftDecors = ['꧁༺', '⚡', '王', '🔥', '💎', '『⚡』', '×͜×', '༒︎', '★', '么', '〆', '亗', 'ツ', '々', '『★』', '♛', '☠︎', '⚔︎', '❖', '✦'];
const rightDecors = ['༻꧂', '⚡', '王', '🔥', '💎', '『⚡』', '×͜×', '༒︎', '★', '么', '〆', '亗', 'ツ', '々', '『★』', '♛', '☠︎', '⚔︎', '❖', '✦'];
const badges = ['', ' • 𝐓𝐔𝐅𝐀𝐍', ' 𝖃', ' 𝟗𝟗+', ' ✓', ' ᶠᶠ', ' ᴾᴿᴼ', ' ᴮᴼˢˢ', ' ᴳᴼᴰ', ' ⁷⁷⁷', ' ⁹⁹⁹', ' ᴳᴬᴹᴵᴺᴳ', ' ⁰¹', ' ᶻˣ', ' ᴷᴵᴺᴳ'];

const fontMaps = [
    {a:'𝐚',b:'𝐛',c:'𝐜',d:'𝐝',e:'𝐞',f:'𝐟',g:'𝐠',h:'𝐡',i:'𝐢',j:'𝐣',k:'𝐤',l:'𝐥',m:'𝐦',n:'𝐧',o:'𝐨',p:'𝐩',q:'𝐪',r:'𝐫',s:'𝐬',t:'𝐭',u:'𝐮',v:'𝐯',w:'𝐰',x:'𝐱',y:'𝐲',z:'𝐳',
     A:'𝐀',B:'𝐁',C:'𝐂',D:'𝐃',E:'𝐄',F:'𝐅',G:'𝐆',H:'𝐇',I:'𝐈',J:'𝐉',K:'𝐊',L:'𝐋',M:'𝐌',N:'𝐍',O:'𝐎',P:'𝐏',Q:'𝐐',R:'𝐑',S:'𝐒',T:'𝐓',U:'𝐔',V:'𝐕',W:'𝐖',X:'𝐗',Y:'𝐘',Z:'𝐙'},
    {a:'𝖆',b:'𝖇',c:'𝖈',d:'𝖉',e:'𝖊',f:'𝖋',g:'𝖌',h:'𝖍',i:'𝖎',j:'𝖏',k:'𝖐',l:'𝖑',m:'𝖒',n:'𝖓',o:'𝖔',p:'𝖕',q:'𝖖',r:'𝖗',s:'𝖘',t:'𝖙',u:'𝖚',v:'𝖛',w:'𝖜',x:'𝖝',y:'𝖞',z:'𝖟',
     A:'𝕬',B:'𝕭',C:'𝕮',D:'𝕯',E:'𝕰',F:'𝕱',G:'𝕲',H:'𝕳',I:'𝕴',J:'𝕵',K:'𝕶',L:'𝕷',M:'𝕸',N:'𝕹',O:'𝕺',P:'𝕻',Q:'𝕼',R:'𝕽',S:'𝕾',T:'𝕿',U:'𝖀',V:'𝖁',W:'𝖂',X:'𝖃',Y:'𝖄',Z:'𝖅'},
    {a:'𝓪',b:'𝓫',c:'𝓬',d:'𝓭',e:'𝓮',f:'𝓯',g:'𝓰',h:'𝓱',i:'𝓲',j:'𝓳',k:'𝓴',l:'𝓵',m:'𝓶',n:'𝓷',o:'𝓸',p:'𝓹',q:'𝓺',r:'𝓻',s:'𝓼',t:'𝓽',u:'𝓾',v:'𝓿',w:'𝔀',x:'𝔁',y:'𝔂',z:'𝔃',
     A:'𝓐',B:'𝓑',C:'𝓒',D:'𝓓',E:'𝓔',F:'𝓕',G:'𝓖',H:'𝓗',I:'𝓘',J:'𝓙',K:'𝓚',L:'𝓛',M:'𝓜',N:'𝓝',O:'𝓞',P:'𝓟',Q:'𝓠',R:'𝓡',S:'𝓢',T:'𝓣',U:'𝓤',V:'𝓥',W:'𝓦',X:'𝓧',Y:'𝓨',Z:'𝓩'},
    {a:'ᴀ',b:'ʙ',c:'ᴄ',d:'ᴅ',e:'ᴇ',f:'ғ',g:'ɢ',h:'ʜ',i:'ɪ',j:'ᴊ',k:'ᴋ',l:'ʟ',m:'ᴍ',n:'ɴ',o:'ᴏ',p:'ᴘ',q:'ǫ',r:'ʀ',s:'s',t:'ᴛ',u:'ᴜ',v:'ᴠ',w:'ᴡ',x:'x',y:'ʏ',z:'ᴢ',
     A:'ᴀ',B:'ʙ',C:'ᴄ',D:'ᴅ',E:'ᴇ',F:'ғ',G:'ɢ',H:'ʜ',I:'ɪ',J:'ᴊ',K:'ᴋ',L:'ʟ',M:'ᴍ',N:'ɴ',O:'ᴏ',P:'ᴘ',Q:'ǫ',R:'ʀ',S:'s',T:'ᴛ',U:'ᴜ',V:'ᴠ',W:'ᴡ',X:'x',Y:'ʏ',Z:'ᴢ'},
    {a:'𝗮',b:'𝗯',c:'𝗰',d:'𝗱',e:'𝗲',f:'𝗳',g:'𝗴',h:'𝗵',i:'𝗶',j:'𝗷',k:'𝗸',l:'𝗹',m:'𝗺',n:'𝗻',o:'𝗼',p:'𝗽',q:'𝗾',r:'𝗿',s:'𝘀',t:'𝘁',u:'𝘂',v:'𝘃',w:'𝘄',x:'𝘅',y:'𝘆',z:'𝘇',
     A:'𝗔',B:'𝗕',C:'𝗖',D:'𝗗',E:'𝗘',F:'𝗙',G:'𝗚',H:'𝗛',I:'𝗜',J:'𝗝',K:'𝗞',L:'𝗟',M:'𝗠',N:'𝗡',O:'𝗢',P:'𝗣',Q:'𝗤',R:'𝗥',S:'𝗦',T:'𝗧',U:'𝗨',V:'𝗩',W:'𝗪',X:'𝗫',Y:'𝗬',Z:'𝗭'}
];

function stylizeText(str, mapIdx) {
    const map = fontMaps[mapIdx % fontMaps.length];
    return str.split('').map(ch => map[ch] || ch).join('');
}

// Mixed-radix bijective indexing guarantees zero duplicates across the first 30,000 items
function getUniqueNickByIndex(idx, base) {
    const L = leftDecors.length;   // 20
    const R = rightDecors.length;  // 20
    const B = badges.length;       // 15
    const F = fontMaps.length;     // 5

    // Co-prime stride (7919) scrambles visual order while remaining 1-to-1 bijective over 30,000
    const totalSpace = L * R * B * F; // 30,000
    const n = (idx * 7919) % totalSpace;

    const fIdx = n % F;
    const bIdx = Math.floor(n / F) % B;
    const rIdx = Math.floor(n / (F * B)) % R;
    const lIdx = Math.floor(n / (F * B * R)) % L;

    const styled = stylizeText(base, fIdx);
    return `${leftDecors[lIdx]} ${styled}${badges[bIdx]} ${rightDecors[rIdx]}`;
}

let totalGeneratedNicks = 0;
function buildNickBatch(count) {
    const base = document.getElementById('baseNameInput').value.trim() || 'TUFAN';
    const container = document.getElementById('nickResults');

    for (let i = 0; i < count; i++) {
        const fullNick = getUniqueNickByIndex(totalGeneratedNicks, base);
        totalGeneratedNicks++;

        const div = document.createElement('div');
        div.className = 'nick-item';

        const spanText = document.createElement('span');
        spanText.className = 'nick-text';
        spanText.textContent = fullNick;

        const spanBadge = document.createElement('span');
        spanBadge.className = 'copy-tag';
        spanBadge.textContent = 'COPY';

        div.appendChild(spanText);
        div.appendChild(spanBadge);

        div.onclick = function() {
            copyTextFallback(fullNick, () => {
                spanBadge.textContent = 'COPIED!';
                spanBadge.style.background = '#00b894';
                setTimeout(() => {
                    spanBadge.textContent = 'COPY';
                    spanBadge.style.background = '';
                }, 1200);
            });
        };
        container.appendChild(div);
    }

    const counterEl = document.getElementById('nickCounterText');
    if (counterEl) {
        counterEl.textContent = `Showing ${totalGeneratedNicks} of 30,000 unique combinations (Tap any name to copy)`;
    }
}

function generateNicknames() {
    totalGeneratedNicks = 0;
    document.getElementById('nickResults').innerHTML = '';
    buildNickBatch(30);
}

function loadMoreNicknames() {
    buildNickBatch(50);
}

// Reliable clipboard copy with textarea fallback for mobile WebViews / HTTP pages
function copyTextFallback(text, onSuccess) {
    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(text).then(() => {
            if (onSuccess) onSuccess();
        }).catch(() => {
            execCommandCopy(text, onSuccess);
        });
    } else {
        execCommandCopy(text, onSuccess);
    }
}

function execCommandCopy(text, onSuccess) {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.left = '-9999px';
    document.body.appendChild(ta);
    ta.focus();
    ta.select();
    try {
        document.execCommand('copy');
        if (onSuccess) onSuccess();
    } catch (e) {
        alert('Copy text: ' + text);
    }
    document.body.removeChild(ta);
}

window.addEventListener('DOMContentLoaded', () => {
    generateNicknames();
});
