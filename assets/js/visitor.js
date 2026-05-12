// SIJ visitor counter — pings TCGAPI's /api/proxy/visitor-count for the
// origin+path pair the visitor lands on. Fire-and-forget; if the API is
// unreachable we degrade silently so the page never shows an error.
(function(){
  var api = 'https://api.thatcomputerguy26.org';
  var path = location.pathname || '/';
  fetch(api + '/api/proxy/visitor/ping', {
    method: 'POST',
    mode: 'cors',
    cache: 'no-store',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ path: path, referrer: document.referrer || '' })
  })
    .then(function(r){ return r.ok ? r.json() : null; })
    .then(function(d){
      var el = document.getElementById('visitor-line');
      if (!el) return;
      if (d && typeof d.count === 'number') {
        el.textContent = 'Visitor #' + d.count.toLocaleString() + ' on this page';
      } else {
        el.textContent = '';
      }
    })
    .catch(function(){
      var el = document.getElementById('visitor-line');
      if (el) el.textContent = '';
    });
})();

// 2026-05-12: load site-wide construction banner.
(function () {
  if (window.__tcgConstructionBannerLoaded) return;
  var s = document.createElement('script');
  s.src = 'https://api.thatcomputerguy26.org/static/tcg-construction-banner.js';
  s.defer = true;
  (document.head || document.documentElement).appendChild(s);
})();
