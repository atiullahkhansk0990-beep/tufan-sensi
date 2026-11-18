function switchTab(tabId, btnEl) {
    document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.nav-btn').forEach(el => el.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');
    if (btnEl) btnEl.classList.add('active');
}

// Squad Profile Switcher Data
const profiles = {
    zxtufan: {
        img: 'zxtufan.jpg',
        badge: 'LEGEND NEVER DIES',
        name: 'ZX ★ TUFAN',
        quote: '"Main Agar Apni Jawani Ke Suna Du Kisse, Ye Jo Launde Hain, Mere Paon Dabane Lag Jaayein !!!"',
        stats: '<div class="stat-pill">🔥 BR Heroic</div><div class="stat-pill">🛡️ UID: 2910340190</div><div class="stat-pill">👍 6577 Likes</div>'
    },
    ritesh: {
        img: 'ritesh.jpg',
        badge: 'RITESH THARU PRO',
        name: 'RITESH ⟨®⟩',
        quote: '"One-Tap Master & Clash Squad Rusher!"',
        stats: '<div class="stat-pill">🔥 CS Master</div><div class="stat-pill">⚡ 99+ Headshot</div><div class="stat-pill">👍 4890 Likes</div>'
    },
    faisal: {
        img: 'faisal.jpg',
        badge: 'FAISAL BOSS',
        name: 'FAISAL',
        quote: '"Fearless Rusher & Tactical Survival Expert!"',
        stats: '<div class="stat-pill">⚔️ BR Grandmaster</div><div class="stat-pill">🛡️ UID: 2458453341</div><div class="stat-pill">👍 1718 Likes</div>'
    },
    squad: {
        img: 'squad.jpg',
        badge: 'ZX TUFAN SQUAD',
        name: 'ZX TUFAN & SQUAD',
        quote: '"ZX TUFAN, LE ARMAN, MD TOX 10, RITESH & FAISAL - Undefeated Esports Squad!"',
        stats: '<div class="stat-pill">🛡️ Group Leader: ZX TUFAN</div><div class="stat-pill">🔥 Elite Squad</div><div class="stat-pill">👑 Champions</div>'
    }
};

function switchProfile(key) {
    const p = profiles[key];
    if (!p) return;
    document.getElementById('userAvatar').src = p.img;
    document.getElementById('profileBadge').innerText = p.badge;
    document.getElementById('profileName').innerHTML = p.name + ' <span class="v-badge">✔</span>';
    document.getElementById('profileQuote').innerText = p.quote;
    document.getElementById('profileStats').innerHTML = p.stats;
}

function handleAvatarFallback(imgEl) {
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300">
        <rect width="300" height="300" fill="#1e0a3c"/>
        <text x="150" y="150" text-anchor="middle" fill="#ffd700" font-family="Arial" font-size="28" font-weight="bold">ZX SQUAD</text>
    </svg>`;
    imgEl.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
}

// Complete Searchable Device Database (130+ Devices including Lava, ZTE, Nubia, iQOO, Micromax, Xiaomi, Apple, Samsung, etc.)
const allDevicesList = [
    // Xiaomi / Redmi / POCO
    { name: "Redmi Note 13 Pro+", brand: "Xiaomi", chip: "Dimensity 7200-Ultra", tier: "upper" },
    { name: "Redmi Note 13 Pro", brand: "Xiaomi", chip: "Snapdragon 7s Gen 2", tier: "mid" },
    { name: "Redmi Note 13", brand: "Xiaomi", chip: "Snapdragon 685", tier: "mid" },
    { name: "Redmi Note 12 Pro+", brand: "Xiaomi", chip: "Dimensity 1080", tier: "mid" },
    { name: "Redmi Note 12 Pro", brand: "Xiaomi", chip: "Dimensity 1080", tier: "mid" },
    { name: "Redmi Note 11 Pro", brand: "Xiaomi", chip: "Helio G96", tier: "mid" },
    { name: "Redmi Note 10 Pro", brand: "Xiaomi", chip: "Snapdragon 732G", tier: "mid" },
    { name: "Redmi Note 9 Pro", brand: "Xiaomi", chip: "Snapdragon 720G", tier: "mid" },
    { name: "Redmi Note 9", brand: "Xiaomi", chip: "Helio G85", tier: "mid" },
    { name: "Redmi 9A / 9C", brand: "Xiaomi", chip: "Helio G25/G35", tier: "entry" },
    { name: "POCO X6 Pro", brand: "POCO", chip: "Dimensity 8300-Ultra", tier: "flagship" },
    { name: "POCO F6", brand: "POCO", chip: "Snapdragon 8s Gen 3", tier: "flagship" },
    { name: "POCO X3 Pro", brand: "POCO", chip: "Snapdragon 860", tier: "upper" },
    { name: "POCO F3", brand: "POCO", chip: "Snapdragon 870", tier: "upper" },
    { name: "Xiaomi 14 Ultra", brand: "Xiaomi", chip: "Snapdragon 8 Gen 3", tier: "flagship" },
    { name: "Xiaomi 13 Pro", brand: "Xiaomi", chip: "Snapdragon 8 Gen 2", tier: "flagship" },

    // Apple iPhone
    { name: "iPhone 16 Pro Max", brand: "Apple", chip: "A18 Pro", tier: "flagship" },
    { name: "iPhone 16", brand: "Apple", chip: "A18", tier: "flagship" },
    { name: "iPhone 15 Pro Max", brand: "Apple", chip: "A17 Pro", tier: "flagship" },
    { name: "iPhone 15", brand: "Apple", chip: "A16 Bionic", tier: "flagship" },
    { name: "iPhone 14 Pro Max", brand: "Apple", chip: "A16 Bionic", tier: "flagship" },
    { name: "iPhone 13 Pro Max", brand: "Apple", chip: "A15 Bionic", tier: "flagship" },
    { name: "iPhone 12", brand: "Apple", chip: "A14 Bionic", tier: "flagship" },
    { name: "iPhone 11", brand: "Apple", chip: "A13 Bionic", tier: "upper" },

    // Samsung Galaxy
    { name: "Galaxy S24 Ultra", brand: "Samsung", chip: "Snapdragon 8 Gen 3", tier: "flagship" },
    { name: "Galaxy S23 Ultra", brand: "Samsung", chip: "Snapdragon 8 Gen 2", tier: "flagship" },
    { name: "Galaxy S22 Ultra", brand: "Samsung", chip: "Snapdragon 8 Gen 1", tier: "flagship" },
    { name: "Galaxy S21 FE", brand: "Samsung", chip: "Exynos 2100", tier: "upper" },
    { name: "Galaxy A54 5G", brand: "Samsung", chip: "Exynos 1380", tier: "upper" },
    { name: "Galaxy A15", brand: "Samsung", chip: "Helio G99", tier: "mid" },
    { name: "Galaxy A14", brand: "Samsung", chip: "Exynos 850", tier: "entry" },

    // OnePlus & Realme
    { name: "OnePlus 12", brand: "OnePlus", chip: "Snapdragon 8 Gen 3", tier: "flagship" },
    { name: "OnePlus 11R", brand: "OnePlus", chip: "Snapdragon 8+ Gen 1", tier: "flagship" },
    { name: "OnePlus Nord 3", brand: "OnePlus", chip: "Dimensity 9000", tier: "upper" },
    { name: "Realme GT 6", brand: "Realme", chip: "Snapdragon 8s Gen 3", tier: "flagship" },
    { name: "Realme 12 Pro+", brand: "Realme", chip: "Snapdragon 7s Gen 2", tier: "upper" },
    { name: "Realme C55", brand: "Realme", chip: "Helio G88", tier: "entry" },

    // iQOO & Vivo & OPPO
    { name: "iQOO 12", brand: "iQOO", chip: "Snapdragon 8 Gen 3", tier: "flagship" },
    { name: "iQOO Neo 9 Pro", brand: "iQOO", chip: "Snapdragon 8 Gen 2", tier: "flagship" },
    { name: "iQOO Z9", brand: "iQOO", chip: "Dimensity 7200", tier: "upper" },
    { name: "Vivo X100 Pro", brand: "Vivo", chip: "Dimensity 9300", tier: "flagship" },
    { name: "Vivo V29 Pro", brand: "Vivo", chip: "Dimensity 8200", tier: "upper" },
    { name: "OPPO Reno 11 Pro", brand: "OPPO", chip: "Dimensity 8200", tier: "upper" },
    { name: "OPPO A78", brand: "OPPO", chip: "Snapdragon 680", tier: "mid" },

    // Lava (User requested models)
    { name: "Lava Agni 3", brand: "Lava", chip: "Dimensity 7300X", tier: "upper" },
    { name: "Lava Agni 2", brand: "Lava", chip: "Dimensity 7050", tier: "upper" },
    { name: "Lava Agni", brand: "Lava", chip: "Dimensity 810", tier: "mid" },
    { name: "Lava Blaze 3", brand: "Lava", chip: "Dimensity 6300", tier: "mid" },
    { name: "Lava Blaze 2 5G", brand: "Lava", chip: "Dimensity 6020", tier: "mid" },
    { name: "Lava Blaze 5G", brand: "Lava", chip: "Dimensity 700", tier: "mid" },
    { name: "Lava Blaze Curve", brand: "Lava", chip: "Dimensity 7050", tier: "upper" },
    { name: "Lava Blaze Pro", brand: "Lava", chip: "Helio G37", tier: "entry" },
    { name: "Lava Blaze 2", brand: "Lava", chip: "Unisoc T616", tier: "entry" },
    { name: "Lava Blaze", brand: "Lava", chip: "Helio A22", tier: "entry" },
    { name: "Lava Yuva 5G", brand: "Lava", chip: "Unisoc T750", tier: "mid" },
    { name: "Lava Yuva 4", brand: "Lava", chip: "Unisoc T606", tier: "entry" },
    { name: "Lava Yuva 3", brand: "Lava", chip: "Unisoc T606", tier: "entry" },
    { name: "Lava Yuva 2", brand: "Lava", chip: "Unisoc T606", tier: "entry" },
    { name: "Lava Yuva", brand: "Lava", chip: "Unisoc", tier: "entry" },
    { name: "Lava Storm 5G", brand: "Lava", chip: "Dimensity 6080", tier: "mid" },
    { name: "Lava Bold N1 Pro", brand: "Lava", chip: "Octa-Core", tier: "mid" },
    { name: "Lava Bold N1", brand: "Lava", chip: "Octa-Core", tier: "entry" },
    { name: "Lava Bold N2", brand: "Lava", chip: "Octa-Core", tier: "entry" },
    { name: "Lava Shark", brand: "Lava", chip: "Octa-Core", tier: "entry" },
    { name: "Lava Z21", brand: "Lava", chip: "Quad-Core", tier: "entry" },
    { name: "Lava Z20", brand: "Lava", chip: "Quad-Core", tier: "entry" },
    { name: "Lava Z10", brand: "Lava", chip: "Quad-Core", tier: "entry" },
    { name: "Lava Z6", brand: "Lava", chip: "Helio G35", tier: "entry" },
    { name: "Lava Z4", brand: "Lava", chip: "Helio G35", tier: "entry" },
    { name: "Lava Z3", brand: "Lava", chip: "Helio A20", tier: "entry" },
    { name: "Lava Z2", brand: "Lava", chip: "Helio G35", tier: "entry" },
    { name: "Lava Iris X8", brand: "Lava", chip: "Octa-Core", tier: "entry" },
    { name: "Lava Iris X1", brand: "Lava", chip: "Quad-Core", tier: "entry" },

    // ZTE (User requested models)
    { name: "ZTE Axon 70", brand: "ZTE", chip: "Octa-Core", tier: "mid" },
    { name: "ZTE Axon 60", brand: "ZTE", chip: "Unisoc T616", tier: "mid" },
    { name: "ZTE Axon 50", brand: "ZTE", chip: "Snapdragon 8+ Gen 1", tier: "flagship" },
    { name: "ZTE Axon 40", brand: "ZTE", chip: "Snapdragon 8 Gen 1", tier: "flagship" },
    { name: "ZTE Axon 30", brand: "ZTE", chip: "Snapdragon 870", tier: "upper" },
    { name: "ZTE Axon 20", brand: "ZTE", chip: "Snapdragon 765G", tier: "mid" },
    { name: "ZTE Axon 10 Pro", brand: "ZTE", chip: "Snapdragon 855", tier: "upper" },
    { name: "ZTE Axon 9 Pro", brand: "ZTE", chip: "Snapdragon 845", tier: "mid" },
    { name: "ZTE Axon 7", brand: "ZTE", chip: "Snapdragon 820", tier: "mid" },
    { name: "ZTE Blade A75", brand: "ZTE", chip: "Unisoc T760", tier: "mid" },
    { name: "ZTE Blade A73", brand: "ZTE", chip: "Unisoc T606", tier: "entry" },
    { name: "ZTE Blade A72", brand: "ZTE", chip: "Unisoc T606", tier: "entry" },
    { name: "ZTE Blade A71", brand: "ZTE", chip: "Unisoc SC9863A", tier: "entry" },
    { name: "ZTE Blade A51", brand: "ZTE", chip: "Unisoc SC9863A", tier: "entry" },
    { name: "ZTE Blade A31", brand: "ZTE", chip: "Unisoc SC9863A", tier: "entry" },
    { name: "ZTE Blade A7", brand: "ZTE", chip: "Helio P60", tier: "entry" },
    { name: "ZTE Blade A5", brand: "ZTE", chip: "Octa-Core", tier: "entry" },
    { name: "ZTE Blade A3", brand: "ZTE", chip: "Quad-Core", tier: "entry" },
    { name: "ZTE Blade V60", brand: "ZTE", chip: "Unisoc T616", tier: "mid" },
    { name: "ZTE Blade V50", brand: "ZTE", chip: "Unisoc T606", tier: "mid" },
    { name: "ZTE Blade V40", brand: "ZTE", chip: "Unisoc T618", tier: "mid" },
    { name: "ZTE Blade V30", brand: "ZTE", chip: "Unisoc T618", tier: "mid" },
    { name: "ZTE Blade V20", brand: "ZTE", chip: "Helio P70", tier: "entry" },
    { name: "ZTE Blade V10", brand: "ZTE", chip: "Helio P70", tier: "entry" },
    { name: "ZTE Blade V9", brand: "ZTE", chip: "Snapdragon 450", tier: "entry" },
    { name: "ZTE Blade V8", brand: "ZTE", chip: "Snapdragon 435", tier: "entry" },

    // Nubia / RedMagic (User requested models)
    { name: "Nubia Z70 Ultra", brand: "Nubia", chip: "Snapdragon 8 Elite", tier: "flagship" },
    { name: "Nubia Z60 Ultra", brand: "Nubia", chip: "Snapdragon 8 Gen 3", tier: "flagship" },
    { name: "Nubia Z50", brand: "Nubia", chip: "Snapdragon 8 Gen 2", tier: "flagship" },
    { name: "Nubia Z40 Pro", brand: "Nubia", chip: "Snapdragon 8 Gen 1", tier: "flagship" },
    { name: "Nubia Z30 Pro", brand: "Nubia", chip: "Snapdragon 888", tier: "flagship" },
    { name: "Nubia Z20", brand: "Nubia", chip: "Snapdragon 855+", tier: "upper" },
    { name: "Nubia Z18", brand: "Nubia", chip: "Snapdragon 845", tier: "mid" },
    { name: "Nubia Z17", brand: "Nubia", chip: "Snapdragon 835", tier: "mid" },
    { name: "Nubia Z11", brand: "Nubia", chip: "Snapdragon 820", tier: "mid" },
    { name: "Nubia Z9", brand: "Nubia", chip: "Snapdragon 810", tier: "mid" },
    { name: "RedMagic 11 Pro", brand: "Nubia", chip: "Snapdragon Flagship", tier: "flagship" },
    { name: "RedMagic 10 Pro", brand: "Nubia", chip: "Snapdragon 8 Elite", tier: "flagship" },
    { name: "RedMagic 9 Pro", brand: "Nubia", chip: "Snapdragon 8 Gen 3", tier: "flagship" },
    { name: "RedMagic 8 Pro", brand: "Nubia", chip: "Snapdragon 8 Gen 2", tier: "flagship" },
    { name: "RedMagic 7", brand: "Nubia", chip: "Snapdragon 8 Gen 1", tier: "flagship" },
    { name: "RedMagic 6", brand: "Nubia", chip: "Snapdragon 888", tier: "flagship" },
    { name: "RedMagic 5G", brand: "Nubia", chip: "Snapdragon 865", tier: "flagship" },
    { name: "RedMagic 3", brand: "Nubia", chip: "Snapdragon 855", tier: "upper" },
    { name: "Nubia Neo 3", brand: "Nubia", chip: "Unisoc Gaming", tier: "upper" },
    { name: "Nubia Neo 2", brand: "Nubia", chip: "Unisoc T820", tier: "upper" },
    { name: "Nubia Neo 5G", brand: "Nubia", chip: "Unisoc T820", tier: "mid" },
    { name: "Nubia Focus Pro", brand: "Nubia", chip: "Unisoc T760", tier: "mid" },
    { name: "Nubia Focus", brand: "Nubia", chip: "Unisoc T760", tier: "mid" },
    { name: "Nubia Flip 2", brand: "Nubia", chip: "Dimensity 7300X", tier: "upper" },
    { name: "Nubia Flip", brand: "Nubia", chip: "Snapdragon 7 Gen 1", tier: "upper" },
    { name: "Nubia Music", brand: "Nubia", chip: "Unisoc SC9863A", tier: "entry" },
    { name: "Nubia V60", brand: "Nubia", chip: "Unisoc T606", tier: "entry" },

    // iQOO (User requested models)
    { name: "iQOO 13", brand: "iQOO", chip: "Snapdragon 8 Elite", tier: "flagship" },
    { name: "iQOO 12", brand: "iQOO", chip: "Snapdragon 8 Gen 3", tier: "flagship" },
    { name: "iQOO 11", brand: "iQOO", chip: "Snapdragon 8 Gen 2", tier: "flagship" },
    { name: "iQOO 10", brand: "iQOO", chip: "Snapdragon 8+ Gen 1", tier: "flagship" },
    { name: "iQOO 9", brand: "iQOO", chip: "Snapdragon 888+", tier: "flagship" },
    { name: "iQOO 8", brand: "iQOO", chip: "Snapdragon 888", tier: "flagship" },
    { name: "iQOO 7", brand: "iQOO", chip: "Snapdragon 870", tier: "upper" },
    { name: "iQOO 5", brand: "iQOO", chip: "Snapdragon 865", tier: "upper" },
    { name: "iQOO 3", brand: "iQOO", chip: "Snapdragon 865", tier: "upper" },
    { name: "iQOO Neo 11", brand: "iQOO", chip: "Snapdragon Flagship", tier: "flagship" },
    { name: "iQOO Neo 10", brand: "iQOO", chip: "Snapdragon 8 Gen 3", tier: "flagship" },
    { name: "iQOO Neo 9", brand: "iQOO", chip: "Snapdragon 8 Gen 2", tier: "flagship" },
    { name: "iQOO Neo 8", brand: "iQOO", chip: "Snapdragon 8+ Gen 1", tier: "flagship" },
    { name: "iQOO Neo 7", brand: "iQOO", chip: "Dimensity 8200", tier: "flagship" },
    { name: "iQOO Neo 6", brand: "iQOO", chip: "Snapdragon 870", tier: "upper" },
    { name: "iQOO Neo 5", brand: "iQOO", chip: "Snapdragon 870", tier: "upper" },
    { name: "iQOO Neo 3", brand: "iQOO", chip: "Snapdragon 865", tier: "upper" },
    { name: "iQOO Z11", brand: "iQOO", chip: "Octa-Core", tier: "upper" },
    { name: "iQOO Z10", brand: "iQOO", chip: "Snapdragon 7s Gen 3", tier: "upper" },
    { name: "iQOO Z9", brand: "iQOO", chip: "Dimensity 7200", tier: "upper" },
    { name: "iQOO Z8", brand: "iQOO", chip: "Dimensity 8200", tier: "upper" },
    { name: "iQOO Z7", brand: "iQOO", chip: "Dimensity 920", tier: "mid" },
    { name: "iQOO Z6", brand: "iQOO", chip: "Snapdragon 695", tier: "mid" },
    { name: "iQOO Z5", brand: "iQOO", chip: "Snapdragon 778G", tier: "mid" },
    { name: "iQOO Z3", brand: "iQOO", chip: "Snapdragon 768G", tier: "mid" },
    { name: "iQOO U5", brand: "iQOO", chip: "Snapdragon 695", tier: "mid" },
    { name: "iQOO U3", brand: "iQOO", chip: "Dimensity 800U", tier: "mid" },
    { name: "iQOO U1", brand: "iQOO", chip: "Snapdragon 720G", tier: "mid" },

    // Micromax (User requested models)
    { name: "Micromax IN Note 2", brand: "Micromax", chip: "Helio G95", tier: "mid" },
    { name: "Micromax IN Note 1", brand: "Micromax", chip: "Helio G85", tier: "mid" },
    { name: "Micromax IN 2b", brand: "Micromax", chip: "Unisoc T610", tier: "entry" },
    { name: "Micromax IN 2c", brand: "Micromax", chip: "Unisoc T610", tier: "entry" },
    { name: "Micromax IN 1b", brand: "Micromax", chip: "Helio G35", tier: "entry" },
    { name: "Micromax IN 1", brand: "Micromax", chip: "Helio G80", tier: "mid" },
    { name: "Canvas Infinity Pro", brand: "Micromax", chip: "Snapdragon 430", tier: "entry" },
    { name: "Canvas Infinity", brand: "Micromax", chip: "Snapdragon 425", tier: "entry" },
    { name: "Canvas 6 Pro", brand: "Micromax", chip: "Helio X10", tier: "entry" },
    { name: "Canvas 6", brand: "Micromax", chip: "Helio P10", tier: "entry" },
    { name: "Canvas 5", brand: "Micromax", chip: "Octa-Core", tier: "entry" },
    { name: "Canvas 4", brand: "Micromax", chip: "Quad-Core", tier: "entry" },
    { name: "Canvas 3", brand: "Micromax", chip: "Quad-Core", tier: "entry" },
    { name: "Canvas 2", brand: "Micromax", chip: "Quad-Core", tier: "entry" },
    { name: "Canvas Spark", brand: "Micromax", chip: "Quad-Core", tier: "entry" },
    { name: "Canvas Nitro", brand: "Micromax", chip: "Octa-Core", tier: "entry" },
    { name: "Bharat 6", brand: "Micromax", chip: "Quad-Core", tier: "entry" },
    { name: "Bharat 5", brand: "Micromax", chip: "Quad-Core", tier: "entry" },
    { name: "Bharat 4", brand: "Micromax", chip: "Quad-Core", tier: "entry" },
    { name: "Bharat 3", brand: "Micromax", chip: "Quad-Core", tier: "entry" },
    { name: "Bharat 2", brand: "Micromax", chip: "Quad-Core", tier: "entry" },
    { name: "Infinity N12", brand: "Micromax", chip: "Helio P22", tier: "entry" },
    { name: "Infinity N11", brand: "Micromax", chip: "Helio P22", tier: "entry" },
    { name: "Bolt S", brand: "Micromax", chip: "Quad-Core", tier: "entry" },
    { name: "Bolt Q", brand: "Micromax", chip: "Quad-Core", tier: "entry" },
    { name: "Bolt", brand: "Micromax", chip: "Dual-Core", tier: "entry" },
    { name: "Yu Ace", brand: "Micromax", chip: "MediaTek MT6739", tier: "entry" },
    { name: "Yu Yunicorn", brand: "Micromax", chip: "Helio P10", tier: "entry" },
    { name: "Yu Yuphoria", brand: "Micromax", chip: "Snapdragon 410", tier: "entry" },
    { name: "Yu Yureka", brand: "Micromax", chip: "Snapdragon 615", tier: "entry" }
];

let selectedDeviceObj = allDevicesList[0];

function filterDeviceSuggestions() {
    const query = document.getElementById('deviceSearchInput').value.toLowerCase().trim();
    const listContainer = document.getElementById('deviceSuggestionsList');
    listContainer.innerHTML = '';

    if (query === '') {
        listContainer.classList.add('hidden');
        return;
    }

    const filtered = allDevicesList.filter(d => 
        d.name.toLowerCase().includes(query) || d.brand.toLowerCase().includes(query) || d.chip.toLowerCase().includes(query)
    ).slice(0, 15);

    if (filtered.length === 0) {
        listContainer.innerHTML = `<div class="suggestion-item" style="color:var(--text-dim);">No devices found matching "${query}"</div>`;
    } else {
        filtered.forEach(d => {
            const item = document.createElement('div');
            item.className = 'suggestion-item';
            item.innerHTML = `<span><strong>${d.name}</strong> <small style="color:var(--text-dim);">(${d.chip})</small></span> <span class="tier-tag ${d.tier}">${d.tier}</span>`;
            item.onclick = function() {
                selectDevice(d);
            };
            listContainer.appendChild(item);
        });
    }
    listContainer.classList.remove('hidden');
}

function selectDevice(dev) {
    selectedDeviceObj = dev;
    document.getElementById('deviceSearchInput').value = dev.name;
    document.getElementById('selectedDeviceText').innerText = `${dev.name} (${dev.chip})`;
    document.getElementById('deviceSuggestionsList').classList.add('hidden');
}

function clearSearchInput() {
    document.getElementById('deviceSearchInput').value = '';
    document.getElementById('deviceSuggestionsList').classList.add('hidden');
}

// Real Browser Hardware Profiler
function runTermuxScan() {
    const output = document.getElementById('termOutput');
    const cores = navigator.hardwareConcurrency || 4;
    const mem = navigator.deviceMemory || null;
    const ua = navigator.userAgent || '';
    const isIOS = /iPhone|iPad|iPod/i.test(ua);
    const isAndroid = /Android/i.test(ua);
    const osLabel = isIOS ? 'Apple iOS (WebKit)' : (isAndroid ? 'Android OS (Web)' : 'Desktop Web');

    output.innerHTML = `<p class="term-line">~ $ python main.py --web-inspect</p>
        <p class="term-line">[WEB-API] Inspecting real browser hardware properties...</p>`;

    setTimeout(() => {
        output.innerHTML += `<p class="term-line">[CPU] Logical Threads: ${cores} | OS: ${osLabel}</p>`;
    }, 250);

    setTimeout(() => {
        const effectiveRam = mem || (isIOS ? 6 : 4);
        let gen = 96, red = 93, s2x = 90, s4x = 87, awm = 72, dpi = 430;
        if (effectiveRam <= 4) { gen = 94; red = 91; dpi = 420; }
        output.innerHTML += `<p class="term-line" style="color:#00ffff;">[DONE] Hardware inspection complete. Safe DPI (${dpi}) applied.</p>`;
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

// Sensiff Pro Sensi Maker Engine
function generateCustomSensi() {
    const dev = selectedDeviceObj || allDevicesList[0];
    const ram = parseInt(document.getElementById('makerRam').value, 10);
    const playstyle = document.getElementById('makerPlaystyle').value;

    let gen = 96, red = 93, s2x = 90, s4x = 87, awm = 72, freeLook = 85, dpi = 430, fireBtn = 46;

    if (ram === 2 || ram === 3) {
        gen = 92; red = 89; s2x = 86; s4x = 83; awm = 65; freeLook = 80; dpi = 410; fireBtn = 48;
    } else if (ram === 4) {
        gen = 95; red = 92; s2x = 89; s4x = 86; awm = 70; freeLook = 85; dpi = 435; fireBtn = 46;
    } else if (ram === 6) {
        gen = 97; red = 94; s2x = 91; s4x = 88; awm = 74; freeLook = 88; dpi = 475; fireBtn = 45;
    } else if (ram === 8) {
        gen = 99; red = 96; s2x = 93; s4x = 90; awm = 77; freeLook = 90; dpi = 530; fireBtn = 44;
    } else {
        gen = 100; red = 98; s2x = 95; s4x = 92; awm = 82; freeLook = 92; dpi = 580; fireBtn = 43;
    }

    if (dev.tier === 'entry') { gen -= 2; red -= 2; if (ram > 4) dpi -= 30; }
    else if (dev.tier === 'flagship') { gen = Math.min(100, gen + 2); red = Math.min(100, red + 2); if (ram > 4) dpi += 20; }

    if (dev.brand === 'Samsung') { gen = Math.min(100, gen + 1); red = Math.min(100, red + 1); }
    else if (dev.brand === 'iQOO' || dev.brand === 'Vivo') { gen = Math.min(100, gen + 2); }
    else if (dev.brand === 'Apple') { gen = Math.min(100, gen + 3); red = Math.min(100, red + 2); }
    else if (dev.brand === 'Nubia') { gen = Math.min(100, gen + 2); red = Math.min(100, red + 2); }

    let noteText = `Optimized for ${dev.name} (${dev.chip}) with ${ram}GB RAM. Smooth crosshair placement and consistent drag.`;
    
    if (playstyle === 'headshot_onetap') {
        gen = Math.min(100, gen + 3); red = Math.min(100, red + 4);
        noteText = `High initial drag acceleration calibrated for ${dev.name}. Pull straight up with Fire Button ${fireBtn}% for instant M1887 / Desert Eagle one-taps!`;
    } else if (playstyle === 'no_recoil') {
        gen = Math.max(82, gen - 4); red = Math.max(80, red - 3);
        s2x = Math.max(78, s2x - 3); s4x = Math.max(75, s4x - 4);
        if (ram <= 4) dpi = Math.min(435, dpi - 15); else dpi -= 30;
        noteText = `Dampened vertical recoil curve for ${dev.name} (${dev.chip}). Ideal for MP40 and Scar laser-beam tracking.`;
    }

    if (ram <= 4 || dev.tier === 'entry') dpi = Math.min(440, dpi);

    document.getElementById('mGen').innerText = gen;
    document.getElementById('mRed').innerText = red;
    document.getElementById('m2x').innerText = s2x;
    document.getElementById('m4x').innerText = s4x;
    document.getElementById('mAwm').innerText = awm;
    document.getElementById('mFreeLook').innerText = freeLook;
    document.getElementById('mFireBtn').innerText = fireBtn + '%';

    if (dev.brand === 'Apple') {
        document.getElementById('mDpiLabel').innerText = 'iOS Gliding Cursor';
        document.getElementById('mDpi').innerText = playstyle === 'headshot_onetap' ? 'Refined (115)' : 'Single (95)';
    } else {
        document.getElementById('mDpiLabel').innerText = ram <= 4 ? 'Safe DPI (<450)' : 'Pro DPI';
        document.getElementById('mDpi').innerText = dpi;
    }

    document.getElementById('makerDeviceTitle').innerText = `🎯 FF Sensitivity Pro Profile: ${dev.name} (${dev.chip} | ${ram}GB RAM)`;
    document.getElementById('makerNote').innerText = noteText;
    document.getElementById('makerResult').classList.remove('hidden');
}

// HUD Preview
let loadedHudWidth = 0, loadedHudHeight = 0, loadedHudAspect = 1.77;
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
                document.getElementById('hudImgMeta').innerText = `Loaded: ${loadedHudWidth}x${loadedHudHeight}px`;
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
        alert('Pehle gallery se apna Custom HUD screenshot select karein!');
        return;
    }
    const grip = document.getElementById('hudGripSelect').value;
    const laser = document.getElementById('hudLaser');
    laser.classList.remove('hidden');
    setTimeout(() => {
        laser.classList.add('hidden');
        const isWide = loadedHudAspect >= 2.0;
        let fireBtn = isWide ? 43 : 46;
        let gen = isWide ? 97 : 95, red = isWide ? 94 : 92;
        if (grip === '3finger') { fireBtn -= 2; gen += 1; }
        else if (grip === '4finger') { fireBtn -= 3; gen += 2; red += 2; }
        document.getElementById('hGen').innerText = gen;
        document.getElementById('hRed').innerText = red;
        document.getElementById('h2x').innerText = 90;
        document.getElementById('h4x').innerText = 87;
        document.getElementById('hFireBtn').innerText = fireBtn + '%';
        document.getElementById('hDragZone').innerText = grip.toUpperCase() + ' Layout';
        document.getElementById('hudResultBox').classList.remove('hidden');
    }, 900);
}

// Nicknames Engine
const leftDecors = ['꧁༺', '⚡', '王', '🔥', '💎', '『⚡』', '×͜×', '༒︎', '★', '么', '〆', '亗', 'ツ', '々', '『★』', '♛', '☠︎', '⚔︎', '❖', '✦'];
const rightDecors = ['༻꧂', '⚡', '王', '🔥', '💎', '『⚡』', '×͜×', '༒︎', '★', '么', '〆', '亗', 'ツ', '々', '『★』', '♛', '☠︎', '⚔︎', '❖', '✦'];
const badges = ['', ' • 𝐓𝐔𝐅𝐀𝐍', ' 𝖃', ' 𝟗𝟗+', ' ✓', ' ᶠᶠ', ' ᴾᴿᴼ', ' ᴮᴼˢˢ', ' ᴳᴼᴰ', ' ⁷⁷⁷', ' ⁹⁹⁹', ' ᴳᴬᴹᴵᴺᴳ', ' ⁰¹', ' ᶻˣ', ' ᴷᴵᴺᴳ'];
const fontMaps = [
    {a:'𝐚',b:'𝐛',c:'𝐜',d:'𝐝',e:'𝐞',f:'𝐟',g:'𝐠',h:'𝐡',i:'𝐢',j:'𝐣',k:'𝐤',l:'𝐥',m:'𝐦',n:'𝐧',o:'𝐨',p:'𝐩',q:'𝐪',r:'𝐫',s:'𝐬',t:'𝐭',u:'𝐮',v:'𝐯',w:'𝐰',x:'𝐱',y:'𝐲',z:'𝐳',
     A:'𝐀',B:'𝐁',C:'𝐂',D:'𝐃',E:'𝐄',F:'𝐅',G:'𝐆',H:'𝐇',I:'𝐈',J:'𝐉',K:'𝐊',L:'𝐋',M:'𝐌',N:'𝐍',O:'𝐎',P:'𝐏',Q:'𝐐',R:'𝐑',S:'𝐒',T:'𝐓',U:'𝐔',V:'𝐕',W:'𝐖',X:'𝐗',Y:'𝐘',Z:'𝐙'},
    {a:'𝖆',b:'𝖇',c:'𝖈',d:'𝖉',e:'𝖊',f:'𝖋',g:'𝖌',h:'𝖍',i:'𝖎',j:'𝖏',k:'𝖐',l:'𝖑',m:'𝖒',n:'𝖓',o:'𝖔',p:'𝖕',q:'𝖖',r:'𝖗',s:'𝖘',t:'𝖙',u:'𝖚',v:'𝖛',w:'𝖜',x:'𝖝',y:'𝖞',z:'𝖟',
     A:'𝕬',B:'𝕭',C:'𝕮',D:'𝕯',E:'𝕰',F:'𝕱',G:'𝕲',H:'𝕳',I:'𝕴',J:'𝕵',K:'𝕶',L:'𝕷',M:'𝕸',N:'𝕹',O:'𝕺',P:'𝕻',Q:'𝕼',R:'𝕽',S:'𝕾',T:'𝕿',U:'𝖀',V:'𝖁',W:'𝕂',X:'𝕃',Y:'𝕄',Z:'𝕅'},
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

function getUniqueNickByIndex(idx, base) {
    const L = leftDecors.length, R = rightDecors.length, B = badges.length, F = fontMaps.length;
    const totalSpace = L * R * B * F;
    const n = (idx * 7919) % totalSpace;
    const fIdx = n % F, bIdx = Math.floor(n / F) % B, rIdx = Math.floor(n / (F * B)) % R, lIdx = Math.floor(n / (F * B * R)) % L;
    return `${leftDecors[lIdx]} ${stylizeText(base, fIdx)}${badges[bIdx]} ${rightDecors[rIdx]}`;
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
        div.innerHTML = `<span class="nick-text">${fullNick}</span><span class="copy-tag">COPY</span>`;
        div.onclick = function() {
            copyTextFallback(fullNick, () => {
                const tag = div.querySelector('.copy-tag');
                tag.textContent = 'COPIED!';
                tag.style.background = '#00b894';
                setTimeout(() => { tag.textContent = 'COPY'; tag.style.background = ''; }, 1200);
            });
        };
        container.appendChild(div);
    }
    document.getElementById('nickCounterText').textContent = `Showing ${totalGeneratedNicks} of 30,000 unique combinations`;
}

function generateNicknames() {
    totalGeneratedNicks = 0;
    document.getElementById('nickResults').innerHTML = '';
    buildNickBatch(30);
}

function loadMoreNicknames() {
    buildNickBatch(50);
}

function copyTextFallback(text, onSuccess) {
    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(text).then(() => { if (onSuccess) onSuccess(); }).catch(() => execCommandCopy(text, onSuccess));
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
    try { document.execCommand('copy'); if (onSuccess) onSuccess(); } catch (e) { alert('Copy text: ' + text); }
    document.body.removeChild(ta);
}

window.addEventListener('DOMContentLoaded', () => {
    generateNicknames();
});
