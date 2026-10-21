/* ════════════════════════════════════════════════════════════════════════
   STARFLEX — what the team publishes in /admin, shown on the public pages.

   1. TEXT. A text saved under a page's own key (the same key the language
      switcher uses, e.g. "rs.4") replaces that sentence in French. A second
      text under "rs.4@ht" replaces it in Kreyòl; without one, the Kreyòl
      version stays as it was.
   2. NEWS & EVENTS. Published posts fill the "Actualités" and "Événements"
      sections of resources.html. With nothing published, the built-in cards
      stay — the page is never left empty.

   If the server is slow or down, nothing changes: the page keeps its own text.
   ════════════════════════════════════════════════════════════════════════ */
(function () {
  var API = (typeof SF_API !== 'undefined' && SF_API) || 'https://starflex-api.onrender.com';
  var CACHE_KEY = 'sf_cms_v1';
  var CACHE_MS = 2 * 60 * 1000;

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  /* CMS text is plain text: escaped, line breaks kept. */
  function asHtml(s) { return esc(s).replace(/\n/g, '<br>'); }

  function lang() { return (typeof sfLang === 'function') ? sfLang() : 'fr'; }

  var MONTHS = {
    fr: ['janv.', 'févr.', 'mars', 'avr.', 'mai', 'juin', 'juil.', 'août', 'sept.', 'oct.', 'nov.', 'déc.'],
    ht: ['janv.', 'fevr.', 'mas', 'avr.', 'me', 'jen', 'jiy.', 'out', 'sept.', 'okt.', 'nov.', 'des.']
  };
  function fmtDate(iso) {
    if (!iso) return '';
    var d = new Date(iso);
    if (isNaN(d)) return '';
    var m = (MONTHS[lang()] || MONTHS.fr)[d.getMonth()];
    return d.getDate() + ' ' + m + ' ' + d.getFullYear();
  }

  var content = null;

  function applyText(blocks) {
    if (typeof SF_I18N === 'undefined') return;
    Object.keys(blocks).forEach(function (key) {
      var v = blocks[key];
      if (v == null || String(v).trim() === '') return;      // an empty text never blanks the page
      var m = key.match(/^(.+)@ht$/);
      if (m) { if (SF_I18N.ht) SF_I18N.ht[m[1]] = asHtml(v); }
      else if (SF_I18N.fr) SF_I18N.fr[key] = asHtml(v);
    });
    if (typeof sfApplyLang === 'function') sfApplyLang();
  }

  function postCard(p, i) {
    var thumb = p.image_id
      ? '<div class="news-thumb" style="background:#e9eef5 url(\'' + API + '/api/cms/media/' + Number(p.image_id) + '\') center/cover no-repeat"></div>'
      : '<div class="news-thumb">' + (p.kind === 'event' ? '📅' : '📰') + '</div>';
    var when = p.kind === 'event'
      ? fmtDate(p.starts_at) + (p.ends_at ? ' – ' + fmtDate(p.ends_at) : '')
      : fmtDate(p.starts_at || p.created_at);
    var more = p.body
      ? '<details class="sf-more"><summary>' + (lang() === 'ht' ? 'Li plis' : 'Lire la suite') + '</summary><p>' + asHtml(p.body) + '</p></details>'
      : '';
    return '<article class="news-card' + (i % 2 ? ' o' : '') + '" data-post="' + Number(p.id) + '">' + thumb +
      '<div class="news-body"><div class="news-date">' + esc(when) + '</div>' +
      '<h3>' + esc(p.title) + '</h3>' +
      (p.location ? '<p style="font-weight:600;margin-bottom:6px">📍 ' + esc(p.location) + '</p>' : '') +
      (p.excerpt ? '<p>' + asHtml(p.excerpt) + '</p>' : '') + more +
      '</div></article>';
  }

  function fill(sectionId, posts) {
    var sec = document.getElementById(sectionId);
    if (!sec || !posts.length) return;
    var grid = sec.querySelector('.grid');
    if (!grid) return;
    grid.innerHTML = posts.map(postCard).join('');
  }

  function applyPosts(posts) {
    posts = posts || [];
    fill('news', posts.filter(function (p) { return p.kind !== 'event'; }));
    /* Events: upcoming first (soonest at the top), then the most recent past ones. */
    var now = Date.now();
    var ev = posts.filter(function (p) { return p.kind === 'event'; });
    var up = ev.filter(function (p) { return !p.starts_at || new Date(p.ends_at || p.starts_at) >= now; })
      .sort(function (a, b) { return new Date(a.starts_at || 0) - new Date(b.starts_at || 0); });
    var past = ev.filter(function (p) { return up.indexOf(p) === -1; });
    fill('events', up.concat(past).slice(0, 9));
  }

  function apply(c) {
    content = c;
    applyText(c.blocks || {});
    applyPosts(c.posts || []);
  }

  /* Re-render dates/labels after FR ⇄ KR. */
  var prev = window.sfOnLangChange;
  window.sfOnLangChange = function () {
    if (typeof prev === 'function') prev();
    if (content) applyPosts(content.posts || []);
  };

  function load() {
    try {
      var c = JSON.parse(sessionStorage.getItem(CACHE_KEY) || 'null');
      if (c && Date.now() - c.at < CACHE_MS) { apply(c.data); return; }
    } catch (e) {}
    var ctl = ('AbortController' in window) ? new AbortController() : null;
    var t = setTimeout(function () { if (ctl) ctl.abort(); }, 9000);
    fetch(API + '/api/cms/public/content', ctl ? { signal: ctl.signal } : {})
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (d) {
        clearTimeout(t);
        if (!d || !d.success) return;
        var data = { blocks: d.blocks || {}, posts: d.posts || [] };
        try { sessionStorage.setItem(CACHE_KEY, JSON.stringify({ at: Date.now(), data: data })); } catch (e) {}
        apply(data);
      })
      .catch(function () { clearTimeout(t); });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', load);
  else load();
})();
