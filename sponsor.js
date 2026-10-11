/* ============================================================
 *  ZDHgame · 赞助作者弹窗
 *  静态弹窗；QR 图缺失时自动隐藏。
 * ============================================================ */
(function () {
  'use strict';

  const $ = (id) => document.getElementById(id);

  function open() {
    const m = $('sponsorModal');
    if (!m) return;
    m.classList.add('show');
    m.setAttribute('aria-hidden', 'false');
  }

  function close() {
    const m = $('sponsorModal');
    if (!m) return;
    m.classList.remove('show');
    m.setAttribute('aria-hidden', 'true');
  }

  function setupQr() {
    const img = $('sponsorQr');
    const hint = $('sponsorHint');
    if (!img) return;

    const reveal = () => {
      img.hidden = false;
      if (hint) hint.hidden = false;
    };
    const hide = () => {
      img.hidden = true;
      if (hint) hint.hidden = true;
    };

    if (img.complete && img.naturalWidth > 0) {
      reveal();
      return;
    }
    img.addEventListener('load', reveal);
    img.addEventListener('error', hide);
    /* force re-check in case src was cached as broken */
    if (!img.getAttribute('src')) hide();
  }

  function bind() {
    setupQr();

    const btn = $('sponsorBtn');
    if (btn) btn.addEventListener('click', open);

    const x = $('sponsorClose');
    if (x) x.addEventListener('click', close);

    const ok = $('sponsorOk');
    if (ok) ok.addEventListener('click', close);

    const m = $('sponsorModal');
    if (m) {
      m.addEventListener('click', (e) => { if (e.target === m) close(); });
    }

    const restart = $('restartBtn');
    if (restart) restart.addEventListener('click', close);

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') close();
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bind);
  } else {
    bind();
  }

  window.DanaiwaSponsor = { open: open, close: close };
})();
