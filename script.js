'use strict';

function switchTab(tabId, clickedButton) {
    const target = document.getElementById(tabId);
    if (!target) return;

    document.querySelectorAll('.tab-content').forEach((section) => {
        const isActive = section.id === tabId;
        section.classList.toggle('active', isActive);
        section.hidden = !isActive;
    });

    document.querySelectorAll('.nav-btn').forEach((button) => {
        const isActive = button === clickedButton;
        button.classList.toggle('active', isActive);
        button.setAttribute('aria-selected', String(isActive));
    });
}

function generateSensi() {
    const brand = document.getElementById('brandSelect').value;
    const ram = document.getElementById('ramSelect').value;

    const presets = {
        apple:   { gen: 99, red: 96, s2x: 94, s4x: 92, awm: 80, dpi: 560 },
        xiaomi:  { gen: 98, red: 95, s2x: 93, s4x: 90, awm: 75, dpi: 580 },
        samsung: { gen: 96, red: 93, s2x: 90, s4x: 88, awm: 70, dpi: 540 },
        oneplus: { gen: 98, red: 95, s2x: 93, s4x: 90, awm: 76, dpi: 580 },
        rog:     { gen: 100, red: 98, s2x: 95, s4x: 93, awm: 85, dpi: 620 },
        vivo:    { gen: 97, red: 94, s2x: 92, s4x: 89, awm: 73, dpi: 570 }
    };

    const values = { ...(presets[brand] || presets.xiaomi) };
    if (ram === 'low') {
        values.gen -= 3; values.red -= 4; values.dpi -= 60;
    } else if (ram === 'high') {
        values.gen += 1; values.red += 2; values.dpi += 40;
    }

    Object.entries({
        vGen: values.gen, vRed: values.red, v2x: values.s2x,
        v4x: values.s4x, vAwm: values.awm, vDpi: values.dpi
    }).forEach(([id, value]) => {
        document.getElementById(id).textContent = String(value);
    });

    document.getElementById('sensiResult').classList.remove('hidden');
}

function runTermuxScript() {
    const output = document.getElementById('termOutput');
    const lines = [
        '~ $ python main.py',
        '[DEMO] Initializing sample hardware report...',
        '[SAMPLE] CPU Architecture: ARM64 (example only)',
        '[SAMPLE] Display: device-dependent resolution',
        '[SAMPLE] Touch sampling rate: not detected by this demo',
        '[NOTE] This webpage cannot execute Termux or inspect device hardware.',
        '[DONE] Sample report displayed.'
    ];

    output.replaceChildren();
    lines.forEach((line, index) => {
        const paragraph = document.createElement('p');
        paragraph.className = 'term-line';
        paragraph.textContent = line;
        if (index === lines.length - 1) paragraph.style.color = '#00ffff';
        output.appendChild(paragraph);
    });
}

const NICKNAME_LIMIT = 10000;
const PAGE_SIZE = 50;
let allNicknames = [];
let shownNicknames = 0;

const prefixes = [
    '꧁༺', '『', '乂', 'メ', '亗', '么', 'ツ', '彡', '⚡', '🔥',
    '💎', '★', '♛', '♕', '☠', '༒', '◥', '◤', '【', '《',
    '々', '乛', '〆', '×͜×', '࿐', '᭄', 'ঔৣ', '۝', '♠', '♜',
    'ᴳᵒᵈ', 'ᴾᴿᴼ', 'ᴱᴸᴵᵀᴱ', 'ᴹᴿ', '乂ᴳᵒᵈ乂', '亗ᴾᴿᴼ亗',
    '么ᴱᴸᴵᵀᴱ么', '『ᴹᴿ』', '⚔', '☯', '✦', '✧', '⛧', '♚',
    '༺', '༻', '╰', '╯', '⫷', '⫸', '◈', '◇', '◆', '※',
    '•', '乄', '〄', '۩', '๛', 'Ꮓ', 'Ꮶ', 'Ꮆ', 'Ꮢ', 'Ꮇ',
    '꧁', '꧂', '༄', '࿇', '⸙', '⟦', '⟧', '⟬', '⟭', '⌁',
    '♤', '♡', '♧', '♢', '⚜', '☬', '✪', '✯', '✰', '❖',
    '➳', '➵', '➺', '➻', '➼', '➽', '➸', '➹', '➷', '➶'
];
const suffixes = [
    '꧂', '』', '乂', 'メ', '亗', '么', 'ツ', '彡', '⚡', '🔥',
    '💎', '★', '♛', '♕', '☠', '༒', '◥', '◤', '】', '》',
    '々', '乛', '〆', '×͜×', '࿐', '᭄', 'ঔৣ', '۝', '♠', '♜',
    'ᴳᵒᵈ', 'ᴾᴿᴼ', 'ᴱᴸᴵᵀᴱ', 'ᴹᴿ', '乂ᴳᵒᵈ乂', '亗ᴾᴿᴼ亗',
    '么ᴱᴸᴵᵀᴱ么', '『ᴹᴿ』', '⚔', '☯', '✦', '✧', '⛧', '♚',
    '༺', '༻', '╰', '╯', '⫷', '⫸', '◈', '◇', '◆', '※',
    '•', '乄', '〄', '۩', '๛', 'Ꮓ', 'Ꮶ', 'Ꮆ', 'Ꮢ', 'Ꮇ',
    '꧁', '꧂', '༄', '࿇', '⸙', '⟦', '⟧', '⟬', '⟭', '⌁',
    '♤', '♡', '♧', '♢', '⚜', '☬', '✪', '✯', '✰', '❖',
    '➳', '➵', '➺', '➻', '➼', '➽', '➸', '➹', '➷', '➶'
];

function generateNicknames() {
    const input = document.getElementById('baseNameInput');
    const base = (input.value.trim() || 'TUFAN').slice(0, 20).toUpperCase();
    input.value = base;

    const variants = [
        base,
        `Zx ${base}`,
        `亗 ${base}`,
        `乂 ${base}`,
        `么 ${base}`,
        `『${base}』`,
        `⚡ ${base}`,
        `★ ${base}`
    ];
    allNicknames = [];
    const seen = new Set();

    // 100 prefixes × 100 suffixes = 10,000 unique decorated names.
    for (let i = 0; i < prefixes.length && allNicknames.length < NICKNAME_LIMIT; i++) {
        for (let j = 0; j < suffixes.length && allNicknames.length < NICKNAME_LIMIT; j++) {
            const name = `${prefixes[i]} ${variants[(i + j) % variants.length]} ${suffixes[j]}`;
            if (!seen.has(name)) {
                seen.add(name);
                allNicknames.push(name);
            }
        }
    }

    // Ensure the advertised count remains exactly 10,000 if duplicate symbols are added later.
    for (let i = 0; allNicknames.length < NICKNAME_LIMIT; i++) {
        const name = `『${base}』 • ${i + 1}`;
        if (!seen.has(name)) {
            seen.add(name);
            allNicknames.push(name);
        }
    }

    shownNicknames = 0;
    document.getElementById('nickResults').replaceChildren();
    loadMoreNicknames();
}

function loadMoreNicknames() {
    const container = document.getElementById('nickResults');
    const end = Math.min(shownNicknames + PAGE_SIZE, allNicknames.length);
    const fragment = document.createDocumentFragment();

    for (let i = shownNicknames; i < end; i++) {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'nick-item';
        button.textContent = allNicknames[i];
        button.addEventListener('click', () => copyNick(button));
        fragment.appendChild(button);
    }

    container.appendChild(fragment);
    shownNicknames = end;

    document.getElementById('nickCount').textContent =
        `Showing ${shownNicknames.toLocaleString()} of ${allNicknames.length.toLocaleString()} names`;
    document.getElementById('loadMoreBtn').classList.toggle('hidden', shownNicknames >= allNicknames.length);
}

async function copyNick(element) {
    const text = element.textContent.trim();
    const originalText = element.textContent;

    try {
        if (navigator.clipboard && window.isSecureContext) {
            await navigator.clipboard.writeText(text);
        } else {
            const helper = document.createElement('textarea');
            helper.value = text;
            helper.setAttribute('readonly', '');
            helper.style.position = 'fixed';
            helper.style.opacity = '0';
            document.body.appendChild(helper);
            helper.select();
            const copied = document.execCommand('copy');
            helper.remove();
            if (!copied) throw new Error('Clipboard copy failed');
        }

        element.textContent = 'COPIED!';
        element.classList.add('copied');
    } catch (error) {
        element.textContent = 'SELECT & COPY';
        element.title = 'Automatic copy is unavailable. Select the nickname text and copy it manually.';
    }

    window.setTimeout(() => {
        element.textContent = originalText;
        element.classList.remove('copied');
    }, 1400);
}
