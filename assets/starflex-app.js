/* STARFLEX — shared front-end layer for the citizen platform (Phase 2).
   Talks to the Node/PostgreSQL API and keeps the JWT session in one place so
   Phase 3 (admin) and the future Flutter app reuse the same contract. */

var SF_API = 'https://starflex-api.onrender.com';
var SF_TOKEN_KEY = 'sf_token';
var SF_USER_KEY = 'sf_user';

/* ── Session ─────────────────────────────────────────────────────────────── */
function sfToken()  { try { return localStorage.getItem(SF_TOKEN_KEY); } catch (e) { return null; } }
function sfUser()   { try { return JSON.parse(localStorage.getItem(SF_USER_KEY) || 'null'); } catch (e) { return null; } }
function sfSetSession(token, user) {
  localStorage.setItem(SF_TOKEN_KEY, token);
  localStorage.setItem(SF_USER_KEY, JSON.stringify(user || {}));
}
function sfLogout() {
  localStorage.removeItem(SF_TOKEN_KEY);
  localStorage.removeItem(SF_USER_KEY);
  location.href = 'login.html';
}
/* Pages behind the login call this first. */
function sfRequireAuth() {
  if (!sfToken()) { location.href = 'login.html?next=' + encodeURIComponent(location.pathname.split('/').pop()); return false; }
  return true;
}

/* ── API ─────────────────────────────────────────────────────────────────── */
function sfApi(path, opts) {
  opts = opts || {};
  var headers = { 'Content-Type': 'application/json' };
  var t = sfToken();
  if (t) headers.Authorization = 'Bearer ' + t;

  return fetch(SF_API + path, {
    method: opts.method || 'GET',
    headers: headers,
    body: opts.body ? JSON.stringify(opts.body) : undefined
  }).then(function (r) {
    return r.json().catch(function () { return {}; }).then(function (data) {
      // An expired/invalid token should drop the session rather than loop.
      if (r.status === 401 && sfToken()) {
        localStorage.removeItem(SF_TOKEN_KEY);
        localStorage.removeItem(SF_USER_KEY);
        location.href = 'login.html';
        throw new Error('session');
      }
      if (!r.ok || data.success === false) {
        var err = new Error(data.message || 'Une erreur est survenue. Réessayez.');
        err.status = r.status;
        err.data = data;
        throw err;
      }
      return data;
    });
  });
}

/* ── Small UI helpers ────────────────────────────────────────────────────── */
function sfMsg(el, text, kind) {
  if (typeof el === 'string') el = document.getElementById(el);
  if (!el) return;
  el.textContent = text || '';
  el.className = 'form-msg' + (text ? ' show ' + (kind || 'err') : '');
}
function sfBusy(btn, busy, labelWhenBusy) {
  if (!btn) return;
  if (busy) {
    btn.dataset.label = btn.dataset.label || btn.textContent;
    btn.disabled = true;
    btn.textContent = labelWhenBusy || 'Un instant…';
  } else {
    btn.disabled = false;
    if (btn.dataset.label) btn.textContent = btn.dataset.label;
  }
}
function sfEsc(s) {
  return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
    return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
  });
}
function sfDate(d) {
  if (!d) return '';
  try {
    return new Date(d).toLocaleDateString('fr-FR', { day: '2-digit', month: 'short', year: 'numeric' });
  } catch (e) { return ''; }
}

var SF_DEPARTMENTS = ['Ouest', 'Nord', 'Nord-Est', 'Nord-Ouest', 'Artibonite',
                      'Centre', 'Sud', 'Sud-Est', "Grand'Anse", 'Nippes'];

/* Certificate levels — mirrors services/points.js on the API side. */
var SF_LEVELS = [
  { level: 'bronze', min: 30,  label: 'Bronze', next: 75 },
  { level: 'argent', min: 75,  label: 'Argent', next: 150 },
  { level: 'or',     min: 150, label: 'Or',     next: null }
];
function sfLevelName(level) {
  var key = 'lvl.' + String(level || '').toLowerCase();
  var out = typeof sfT === 'function' ? sfT(key) : key;
  return out === key ? level : out;
}
function sfNextLevel(points) {
  if (points < 30)  return { label: sfLevelName('bronze'), need: 30 - points,  target: 30 };
  if (points < 75)  return { label: sfLevelName('argent'), need: 75 - points,  target: 75 };
  if (points < 150) return { label: sfLevelName('or'),     need: 150 - points, target: 150 };
  return null;
}

/* Shared mobile nav toggle used by every portal page. */
function sfToggleNav() {
  var n = document.getElementById('navLinks');
  if (n) n.classList.toggle('open');
}
