/* auto-injected by assemble.py — do not edit by hand */
window.__GAME_THEME__ = {
  "id": "mybaby",
  "displayName": "宝宝合成",
  "physics": {
    "gravity": 2600,
    "restitution": 0.38,
    "friction": 0.955,
    "dangerY": 142,
    "overLimit": 1.5,
    "assetFill": 0.92,
    "mergeRatio": 0.98
  },
  "tiers": [
    {
      "src": "grape.jpg",
      "name": "葡萄",
      "r": 17.0,
      "c1": "#b478dc",
      "c2": "#8a4cb8",
      "pc1": "#d4a8f0",
      "pc2": "#6e3a96",
      "meanColor": "#ad856d",
      "file": "assets/01-grape.webp",
      "slug": "grape"
    },
    {
      "src": "cherry.jpg",
      "name": "樱桃",
      "r": 22.0,
      "c1": "#dc465a",
      "c2": "#b0283c",
      "pc1": "#f07080",
      "pc2": "#8c1c2e",
      "meanColor": "#a57a63",
      "file": "assets/02-cherry.webp",
      "slug": "cherry"
    },
    {
      "src": "orange.jpg",
      "name": "橘子",
      "r": 29.0,
      "c1": "#ff963c",
      "c2": "#e07020",
      "pc1": "#ffb870",
      "pc2": "#c05810",
      "meanColor": "#8f6a5c",
      "file": "assets/03-orange.webp",
      "slug": "orange"
    },
    {
      "src": "lemon.jpg",
      "name": "柠檬",
      "r": 35.0,
      "c1": "#ffdc46",
      "c2": "#e0b820",
      "pc1": "#ffec80",
      "pc2": "#c09810",
      "meanColor": "#b48c6e",
      "file": "assets/04-lemon.webp",
      "slug": "lemon"
    },
    {
      "src": "kiwi.jpg",
      "name": "猕猴桃",
      "r": 42.0,
      "c1": "#78b446",
      "c2": "#508828",
      "pc1": "#a0d06a",
      "pc2": "#386818",
      "meanColor": "#8b7167",
      "file": "assets/05-kiwi.webp",
      "slug": "kiwi"
    },
    {
      "src": "tomato.jpg",
      "name": "番茄",
      "r": 50.0,
      "c1": "#e65046",
      "c2": "#c03028",
      "pc1": "#f88078",
      "pc2": "#9c2018",
      "meanColor": "#c2b2a8",
      "file": "assets/06-tomato.webp",
      "slug": "tomato"
    },
    {
      "src": "peach.jpg",
      "name": "桃子",
      "r": 60.0,
      "c1": "#ffaa8c",
      "c2": "#e07860",
      "pc1": "#ffc8b0",
      "pc2": "#c05840",
      "meanColor": "#8e826b",
      "file": "assets/07-peach.webp",
      "slug": "peach"
    },
    {
      "src": "pineapple.jpg",
      "name": "菠萝",
      "r": 72.0,
      "c1": "#f0c83c",
      "c2": "#c8a020",
      "pc1": "#ffe070",
      "pc2": "#a08010",
      "meanColor": "#f1e1d2",
      "file": "assets/08-pineapple.webp",
      "slug": "pineapple"
    },
    {
      "src": "coconut.jpg",
      "name": "椰子",
      "r": 88.0,
      "c1": "#b48250",
      "c2": "#8c6030",
      "pc1": "#d4a878",
      "pc2": "#6e4820",
      "meanColor": "#d2c8bc",
      "file": "assets/09-coconut.webp",
      "slug": "coconut"
    },
    {
      "src": "halfmelon.jpg",
      "name": "半瓜",
      "r": 105.0,
      "c1": "#5ab464",
      "c2": "#388848",
      "pc1": "#88d490",
      "pc2": "#286830",
      "meanColor": "#bcb5a9",
      "file": "assets/10-halfmelon.webp",
      "slug": "halfmelon"
    },
    {
      "src": "watermelon.jpg",
      "name": "大西瓜",
      "r": 124.0,
      "c1": "#28a046",
      "c2": "#187830",
      "pc1": "#50c868",
      "pc2": "#105820",
      "bonus": 500.0,
      "meanColor": "#ecd2b5",
      "file": "assets/11-watermelon.webp",
      "slug": "watermelon"
    }
  ],
  "mergeScore": [
    0,
    1,
    3,
    6,
    10,
    15,
    21,
    28,
    36,
    45,
    55
  ],
  "reviveStep": 2000,
  "colors": {
    "brand": "#ff6b6b",
    "ink": "#4a3325",
    "cream": "#fff7ec"
  },
  "images": {
    "sourceDir": "assets-src/mybaby",
    "qrSponsor": ""
  },
  "leaderboard": {
    "mode": "local",
    "cloudPrefix": ""
  },
  "assets": {
    "dir": "assets",
    "parts": "assets/parts.js",
    "blur": "assets/blur.js"
  },
  "pipeline": {
    "fill": 0.92,
    "size": 512
  }
};

/* ============================================================
 *  ZDHgame · theme-loader
 *  Assemble injects / defines window.__GAME_THEME__ (JSON).
 *  This script merges defaults and re-exports the final theme.
 *  Pure vanilla IIFE — works on file://
 * ============================================================ */
(function () {
  'use strict';

  var DEFAULT_TIERS = [
    { name: '葡萄',   r: 17,  c1: '#c084f5', c2: '#7a3fb0', line: 'rgba(74,26,120,.35)',
      file: 'assets/01-grape.webp',     pc1: '#e9c466', pc2: '#b8903a' },
    { name: '樱桃',   r: 23,  c1: '#ff8a99', c2: '#c62346', line: 'rgba(120,10,40,.35)',
      file: 'assets/02-cherry.webp',    pc1: '#ffe684', pc2: '#d8b44f' },
    { name: '橘子',   r: 31,  c1: '#ffc06a', c2: '#e0741a', line: 'rgba(140,62,0,.32)',
      file: 'assets/03-orange.webp',    pc1: '#fdd865', pc2: '#cfa63f' },
    { name: '柠檬',   r: 39,  c1: '#fff285', c2: '#e0b000', line: 'rgba(140,110,0,.32)',
      file: 'assets/04-lemon.webp',     pc1: '#f6cd63', pc2: '#c9a040' },
    { name: '猕猴桃', r: 48,  c1: '#b9e05a', c2: '#5d8c1c', line: 'rgba(60,90,10,.32)',
      file: 'assets/05-kiwi.webp',      pc1: '#c4a559', pc2: '#94793c' },
    { name: '番茄',   r: 58,  c1: '#ff8a66', c2: '#c62f28', line: 'rgba(120,20,10,.32)',
      file: 'assets/06-tomato.webp',    pc1: '#fbd75a', pc2: '#cba63c' },
    { name: '桃子',   r: 69,  c1: '#ffd0d0', c2: '#ea7f93', line: 'rgba(160,60,80,.3)',
      file: 'assets/07-peach.webp',     pc1: '#f7c45a', pc2: '#c99a3e' },
    { name: '菠萝',   r: 81,  c1: '#ffe07a', c2: '#c88a12', line: 'rgba(130,80,0,.32)',
      file: 'assets/08-pineapple.webp', pc1: '#ffd37b', pc2: '#d1a252' },
    { name: '椰子',   r: 94,  c1: '#f0e2c6', c2: '#9b7b4f', line: 'rgba(90,64,32,.35)',
      file: 'assets/09-coconut.webp',   pc1: '#ffd771', pc2: '#d3a94e' },
    { name: '半瓜',   r: 108, c1: '#ff9d78', c2: '#c23a2c', line: 'rgba(120,24,16,.32)',
      file: 'assets/10-halfmelon.webp', pc1: '#ccab68', pc2: '#9c8047' },
    { name: '大瓜',   r: 124, c1: '#7ce878', c2: '#1c8a33', line: 'rgba(12,70,24,.4)',
      file: 'assets/11-watermelon.webp', pc1: '#eece9b', pc2: '#c0a271', bonus: 500 }
  ];

  var DEFAULT_PHYSICS = {
    gravity: 2600,
    restitution: 0.38,
    wallRestitution: 0.45,
    friction: 0.955,
    dangerY: 142,
    overLimit: 1.5,
    restSpeed: 140,
    restThreshold: 55,
    assetFill: 0.92,
    substeps: 3,
    iter: 6,
    dropMs: 360,
    mergePad: 0.8,
    mergeRatio: 0.98,
    squashMax: 0.30,
    squashDecay: 9,
    freezeMs: 130,
    wall: 10,
    dropY: 74,
    width: 420,
    height: 700
  };

  var DEFAULT_COLORS = {
    brand: '#ff6b6b',
    ink: '#4a3325',
    cream: '#fff7ec',
    brandDark: '#e14b4b',
    inkSoft: '#8a7566'
  };

  function isObj(v) { return v && typeof v === 'object' && !Array.isArray(v); }

  function mergePhysics(src) {
    var out = {};
    var k;
    for (k in DEFAULT_PHYSICS) {
      if (Object.prototype.hasOwnProperty.call(DEFAULT_PHYSICS, k)) {
        out[k] = DEFAULT_PHYSICS[k];
      }
    }
    if (isObj(src)) {
      for (k in src) {
        if (Object.prototype.hasOwnProperty.call(src, k) && src[k] != null) {
          out[k] = src[k];
        }
      }
    }
    return out;
  }

  function mergeColors(src) {
    var out = {};
    var k;
    for (k in DEFAULT_COLORS) {
      if (Object.prototype.hasOwnProperty.call(DEFAULT_COLORS, k)) {
        out[k] = DEFAULT_COLORS[k];
      }
    }
    if (isObj(src)) {
      for (k in src) {
        if (Object.prototype.hasOwnProperty.call(src, k) && src[k] != null) {
          out[k] = src[k];
        }
      }
    }
    return out;
  }

  function normalizeTier(t, i) {
    var d = DEFAULT_TIERS[i] || DEFAULT_TIERS[DEFAULT_TIERS.length - 1];
    t = t || {};
    return {
      name: t.name != null ? String(t.name) : d.name,
      r: Number(t.r != null ? t.r : d.r),
      c1: t.c1 || d.c1,
      c2: t.c2 || d.c2,
      line: t.line || d.line,
      file: t.file || d.file,
      pc1: t.pc1 || d.pc1,
      pc2: t.pc2 || d.pc2,
      bonus: t.bonus != null ? Number(t.bonus) : d.bonus
    };
  }

  function normalizeTiers(list) {
    if (!Array.isArray(list) || !list.length) {
      return DEFAULT_TIERS.map(function (t) {
        return {
          name: t.name, r: t.r, c1: t.c1, c2: t.c2, line: t.line,
          file: t.file, pc1: t.pc1, pc2: t.pc2, bonus: t.bonus
        };
      });
    }
    var out = [];
    var i;
    for (i = 0; i < list.length; i++) out.push(normalizeTier(list[i], i));
    return out;
  }

  function applyCssVars(colors) {
    try {
      var root = document.documentElement;
      if (!root || !root.style) return;
      if (colors.brand) root.style.setProperty('--brand', colors.brand);
      if (colors.brandDark) root.style.setProperty('--brand-dark', colors.brandDark);
      if (colors.ink) root.style.setProperty('--ink', colors.ink);
      if (colors.inkSoft) root.style.setProperty('--ink-soft', colors.inkSoft);
      if (colors.cream) root.style.setProperty('--cream', colors.cream);
    } catch (e) { /* ignore */ }
  }

  var raw = (typeof window !== 'undefined' && window.__GAME_THEME__) || {};
  if (typeof raw === 'string') {
    try { raw = JSON.parse(raw); } catch (e) { raw = {}; }
  }
  if (!isObj(raw)) raw = {};

  var tiers = normalizeTiers(raw.tiers);
  var maxTier = tiers[tiers.length - 1] || {};
  var theme = {
    id: String(raw.id || 'default'),
    displayName: String(raw.displayName || '游戏'),
    physics: mergePhysics(raw.physics),
    tiers: tiers,
    mergeScore: Array.isArray(raw.mergeScore) && raw.mergeScore.length
      ? raw.mergeScore.map(Number)
      : [0, 1, 3, 6, 10, 15, 21, 28, 36, 45, 55],
    reviveStep: Number(raw.reviveStep != null ? raw.reviveStep : 2000),
    colors: mergeColors(raw.colors),
    leaderboard: isObj(raw.leaderboard)
      ? {
          mode: String(raw.leaderboard.mode || 'local'),
          cloudPrefix: String(raw.leaderboard.cloudPrefix || '')
        }
      : { mode: 'local', cloudPrefix: '' },
    maxBonus: Number(
      raw.maxBonus != null
        ? raw.maxBonus
        : (maxTier.bonus != null ? maxTier.bonus : 500)
    )
  };

  applyCssVars(theme.colors);

  /* Title / panel brand hooks when DOM is ready — always apply displayName */
  function paintBrand() {
    try {
      document.title = theme.displayName;
      var h1 = document.querySelector('.panel-head h1');
      if (h1) {
        h1.textContent = theme.displayName;
        h1.setAttribute('data-theme-title', '1');
      }
      var apple = document.querySelector('meta[name="apple-mobile-web-app-title"]');
      if (apple) apple.setAttribute('content', theme.displayName);
    } catch (e) { /* ignore */ }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', paintBrand);
  } else {
    paintBrand();
  }

  window.__GAME_THEME__ = theme;
})();
