/* ============================================================
 *  ZDHgame · 排行榜（默认本地 localStorage）
 *  窗口 = 最近 20 次提交，再按分数排序展示。
 *  theme.leaderboard.mode === 'cloud' 时仅 stub（不连网）。
 *  暴露 window.DanaiwaBoard = { onGameOver, open, close, refresh, ... }
 * ============================================================ */
(function () {
  'use strict';

  const THEME = (typeof window !== 'undefined' && window.__GAME_THEME__) || {};
  const THEME_ID = String(THEME.id || 'default');
  const MODE = (THEME.leaderboard && THEME.leaderboard.mode) || 'local';

  const NAME_KEY = 'zdhgame.' + THEME_ID + '.name';
  const BOARD_KEY = 'zdhgame.' + THEME_ID + '.board';
  const DEFAULT_NAME = '默认用户';
  const MUTE_MIN_GAP = 3000;
  const MAX_SCORE = 99999999;
  const WINDOW = 20;

  const $ = (id) => document.getElementById(id);

  /* ---------------------------------------------------------
   *  本地存储
   * ------------------------------------------------------- */

  function loadBoard() {
    try {
      const raw = localStorage.getItem(BOARD_KEY);
      if (!raw) return [];
      const arr = JSON.parse(raw);
      return Array.isArray(arr) ? arr : [];
    } catch (e) {
      return [];
    }
  }

  function saveBoard(rows) {
    try {
      localStorage.setItem(BOARD_KEY, JSON.stringify(rows.slice(0, WINDOW)));
    } catch (e) { /* ignore */ }
  }

  function addScore(name, score) {
    const rec = {
      n: String(name || DEFAULT_NAME).slice(0, 16),
      s: Number(score) || 0,
      t: Date.now(),
      tag: 'local_' + Date.now().toString(36) + '_' + Math.random().toString(36).slice(2, 6)
    };
    const all = loadBoard();
    all.push(rec);
    all.sort((a, b) => (b.t - a.t) || (String(b.tag) > String(a.tag) ? 1 : -1));
    saveBoard(all.slice(0, WINDOW));
    return Promise.resolve({ ok: true, rec: rec });
  }

  function fetchTop() {
    if (MODE === 'cloud') {
      /* cloud stub：不连网，回退本地榜 */
    }
    const all = loadBoard().map((rec) => ({
      tag: rec.tag || '',
      name: String(rec.n || '匿名玩家').slice(0, 16),
      score: Number(rec.s) || 0,
      t: Number(rec.t) || 0
    })).filter((r) => isFinite(r.score) && r.score >= 0 && r.score <= MAX_SCORE);

    all.sort((a, b) => (b.t - a.t) || (b.tag > a.tag ? 1 : -1));
    const fresh = all.slice(0, WINDOW);
    fresh.sort((a, b) => (b.score - a.score) || (b.t - a.t));
    return Promise.resolve(fresh);
  }

  /* ---------------------------------------------------------
   *  昵称
   * ------------------------------------------------------- */

  function cleanName(raw) {
    let n = String(raw || '').replace(/[\u0000-\u001f\u007f]/g, '').trim();
    if (n.length > 12) n = n.slice(0, 12);
    return n;
  }

  function loadName() {
    try { return cleanName(localStorage.getItem(NAME_KEY) || ''); } catch (e) { return ''; }
  }

  function saveName(n) {
    try { localStorage.setItem(NAME_KEY, n); } catch (e) { /* ignore */ }
  }

  function myName() {
    return loadName() || DEFAULT_NAME;
  }

  /* ---------------------------------------------------------
   *  界面
   * ------------------------------------------------------- */

  const listEl = $('boardList');
  const modal = $('boardModal');
  const msgEl = $('submitMsg');
  const nickInput = $('nickInput');
  const nameLabel = $('myNameLabel');
  const submitBtn = $('submitBtn');
  const submitBox = $('submitBox');

  let lastSubmitAt = 0;
  let submitting = false;
  let pendingScore = 0;

  function setMsg(text, kind) {
    if (!msgEl) return;
    msgEl.textContent = text || '';
    msgEl.className = 'submit-msg' + (kind ? ' is-' + kind : '');
  }

  function showRetry(show) {
    if (submitBtn) submitBtn.hidden = !show;
  }

  function paintName() {
    const n = myName();
    if (nameLabel) nameLabel.textContent = n;
    if (nickInput && document.activeElement !== nickInput) nickInput.value = loadName();
  }

  function boardMessage(text) {
    if (!listEl) return;
    listEl.textContent = '';
    const p = document.createElement('p');
    p.className = 'board-empty';
    p.textContent = text;
    listEl.appendChild(p);
  }

  function rankClass(i) {
    return i === 0 ? 'r1' : i === 1 ? 'r2' : i === 2 ? 'r3' : '';
  }

  function renderBoard(rows, myScore) {
    if (!listEl) return;
    listEl.textContent = '';
    if (!rows.length) {
      boardMessage('还没有成绩，快去玩一局！');
      return;
    }
    let marked = false;
    rows.forEach((row, i) => {
      const line = document.createElement('div');
      line.className = 'board-row ' + rankClass(i);

      const rank = document.createElement('span');
      rank.className = 'board-rank';
      rank.textContent = i < 3 ? ['🥇', '🥈', '🥉'][i] : String(i + 1);

      const name = document.createElement('span');
      name.className = 'board-name';
      name.textContent = row.name;

      const score = document.createElement('span');
      score.className = 'board-score';
      score.textContent = row.score;

      line.appendChild(rank);
      line.appendChild(name);
      line.appendChild(score);

      if (!marked && myScore != null && row.score === myScore) {
        line.classList.add('is-mine');
        marked = true;
      }
      listEl.appendChild(line);
    });
  }

  function refreshBoard(myScore) {
    boardMessage('正在读取排行榜…');
    return fetchTop().then((rows) => {
      renderBoard(rows, myScore);
      return rows;
    }).catch((err) => {
      boardMessage('读取失败：' + (err && err.message ? err.message : String(err)));
      throw err;
    });
  }

  function openBoard() {
    if (!modal) return;
    modal.classList.add('show');
    modal.setAttribute('aria-hidden', 'false');
    refreshBoard(null).catch(() => {});
  }

  function closeBoard() {
    if (!modal) return;
    modal.classList.remove('show');
    modal.setAttribute('aria-hidden', 'true');
  }

  function pushScore(name, score, viaRetry) {
    if (submitting) return Promise.resolve(false);
    if (!viaRetry) {
      const now = Date.now();
      if (now - lastSubmitAt < MUTE_MIN_GAP) {
        setMsg('刚提交过啦，稍等一下', 'bad');
        return Promise.resolve(false);
      }
    }
    submitting = true;
    showRetry(false);
    setMsg('正在结算…', '');

    return addScore(name, score).then(() => {
      lastSubmitAt = Date.now();
      setMsg('已上榜 ✓　' + name + ' · ' + score + ' 分', 'good');
      return refreshBoard(score).then(() => true, () => true);
    }).catch((err) => {
      setMsg('提交失败：' + (err && err.message ? err.message : String(err)), 'bad');
      showRetry(true);
      return false;
    }).then((ok) => {
      submitting = false;
      return ok;
    });
  }

  function retry() {
    if (!pendingScore) return;
    pushScore(myName(), pendingScore, true);
  }

  function onGameOver(score) {
    if (!submitBox) return;
    pendingScore = Number(score) || 0;
    paintName();
    showRetry(false);

    if (!(pendingScore > 0)) {
      submitBox.style.display = 'none';
      return;
    }
    submitBox.style.display = '';
    setMsg('正在结算…', '');
    pushScore(myName(), pendingScore, true);
  }

  function bind() {
    const boardBtn = $('boardBtn');
    if (boardBtn) boardBtn.addEventListener('click', openBoard);

    const boardBtn2 = $('boardBtn2');
    if (boardBtn2) boardBtn2.addEventListener('click', openBoard);

    const closeBtn = $('boardClose');
    if (closeBtn) closeBtn.addEventListener('click', closeBoard);

    const refreshBtn = $('boardRefresh');
    if (refreshBtn) refreshBtn.addEventListener('click', () => {
      refreshBoard(null).catch(() => {});
    });

    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) closeBoard();
      });
    }

    if (submitBtn) submitBtn.addEventListener('click', retry);

    if (nickInput) {
      nickInput.value = loadName();
      const commit = () => {
        saveName(cleanName(nickInput.value));
        nickInput.value = loadName();
        paintName();
      };
      nickInput.addEventListener('change', commit);
      nickInput.addEventListener('blur', commit);
      nickInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') { e.preventDefault(); commit(); nickInput.blur(); }
      });
    }

    const editNameBtn = $('editNameBtn');
    if (editNameBtn) {
      editNameBtn.addEventListener('click', () => {
        openBoard();
        if (nickInput) setTimeout(() => { nickInput.focus(); nickInput.select(); }, 260);
      });
    }

    paintName();

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeBoard();
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bind);
  } else {
    bind();
  }

  window.DanaiwaBoard = {
    open: openBoard,
    close: closeBoard,
    refresh: refreshBoard,
    onGameOver: onGameOver,
    fetchTop: fetchTop,
    submitScore: addScore,
    myName: myName,
    setName: function (n) { saveName(cleanName(n)); paintName(); },
    hasName: function () { return !!loadName(); },
    mode: MODE
  };
})();
