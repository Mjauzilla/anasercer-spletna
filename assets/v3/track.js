/* Consent, Meta pixel, Google Analytics, Google Ads conversions and Calendly booking tracking for anasercer.com */
(function () {
  var PIXEL = '4580454005531022';
  var KEY = 'as-consent';
  var sl = (document.documentElement.lang || 'sl').toLowerCase().indexOf('sl') === 0;
  var store = {
    get: function () { try { return localStorage.getItem(KEY); } catch (e) { return null; } },
    set: function (v) { try { localStorage.setItem(KEY, v); } catch (e) {} }
  };
  var GADS = 'AW-17799635646';
  var GA4 = 'G-WQ9QZVHXFP';
  var GA4EV = { Contact: 'booking_open', Schedule: 'booking_scheduled' };
  var GCONV = { Contact: GADS + '/eIhiCPv-4rodEL7Fw6dC', Schedule: GADS + '/p_tuCPj-4rodEL7Fw6dC' };
  /* Exclude Ana's own devices: open any page with ?jaz=1 once per browser (?jaz=0 undoes it) */
  var me = false;
  try {
    var q = location.search.match(/[?&]jaz=([01])/);
    if (q) { if (q[1] === '1') localStorage.setItem('as-me', '1'); else localStorage.removeItem('as-me'); }
    me = localStorage.getItem('as-me') === '1';
    if (q) setTimeout(function () {
      var t = document.createElement('div');
      t.textContent = me ? 'Ta brskalnik je izključen iz analitike.' : 'Ta brskalnik se spet šteje v analitiko.';
      t.style.cssText = 'position:fixed;left:50%;bottom:24px;transform:translateX(-50%);z-index:99999;background:#2E2A24;color:#fff;padding:12px 18px;border-radius:12px;font:600 14px/1.3 system-ui,sans-serif;box-shadow:0 10px 30px rgba(0,0,0,.3)';
      document.body.appendChild(t); setTimeout(function () { t.remove(); }, 4000);
    }, 300);
  } catch (e) {}
  var queued = [];
  var pixelOn = false;

  function gconv(name) {
    if (window.gtag && GCONV[name]) window.gtag('event', 'conversion', { send_to: GCONV[name], value: 1.0, currency: 'EUR' });
    if (window.gtag && GA4EV[name]) window.gtag('event', GA4EV[name], { send_to: GA4 });
  }
  function loadGoogle() {
    if (me || window.gtag) return;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    window.gtag('config', GA4);
    window.gtag('config', GADS);
    var g = document.createElement('script'); g.async = true;
    g.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA4;
    document.head.appendChild(g);
  }

  function track(kind, name, data) {
    if (pixelOn && window.fbq) { window.fbq(kind, name, data || {}); gconv(name); }
    else { queued.push([kind, name, data]); }
  }

  function loadPixel() {
    if (me) return;
    if (pixelOn) return;
    pixelOn = true;
    loadGoogle();
    !function (f, b, e, v, n, t, s) {
      if (f.fbq) return; n = f.fbq = function () { n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments); };
      if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = '2.0'; n.queue = [];
      t = b.createElement(e); t.async = !0; t.src = v; s = b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t, s);
    }(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
    window.fbq('init', PIXEL);
    window.fbq('track', 'PageView');
    queued.forEach(function (q) { window.fbq(q[0], q[1], q[2] || {}); gconv(q[1]); });
    queued = [];
  }

  /* ---- consent banner ---- */
  function banner() {
    var b = document.createElement('div');
    b.setAttribute('role', 'dialog');
    b.setAttribute('aria-label', sl ? 'Piškotki' : 'Cookies');
    b.style.cssText = 'position:fixed;left:16px;right:16px;bottom:16px;z-index:9999;max-width:560px;margin:0 auto;background:#fff;color:#2E2A24;border-radius:18px;padding:18px 20px;box-shadow:0 20px 60px -20px rgba(0,0,0,.45);font:15px/1.45 Geist,system-ui,sans-serif;display:flex;flex-wrap:wrap;align-items:center;gap:12px 16px';
    var p = document.createElement('p');
    p.style.cssText = 'margin:0;flex:1 1 260px';
    p.textContent = sl
      ? 'Stran uporablja piškotke za merjenje obiska in oglasov. Dovolite?'
      : 'This site uses cookies to measure visits and ads. Is that OK?';
    var more = document.createElement('a');
    more.href = sl ? '/si/zasebnost' : '/privacy';
    more.textContent = sl ? 'Več' : 'More';
    more.style.cssText = 'color:#3A4A2E;margin-left:6px';
    p.appendChild(document.createTextNode(' ')); p.appendChild(more);
    var yes = document.createElement('button');
    yes.textContent = sl ? 'Dovolim' : 'Allow';
    yes.style.cssText = 'background:#E85D3F;color:#2E2A24;border:0;border-radius:999px;padding:11px 20px;font:600 15px Geist,system-ui,sans-serif;cursor:pointer';
    var no = document.createElement('button');
    no.textContent = sl ? 'Ne, hvala' : 'No, thanks';
    no.style.cssText = 'background:transparent;color:#3A4A2E;border:1.5px solid #3A4A2E;border-radius:999px;padding:10px 18px;font:600 15px Geist,system-ui,sans-serif;cursor:pointer';
    yes.onclick = function () { store.set('yes'); b.remove(); loadPixel(); };
    no.onclick = function () { store.set('no'); b.remove(); };
    b.appendChild(p); b.appendChild(yes); b.appendChild(no);
    document.body.appendChild(b);
  }
  document.addEventListener('click', function (e) {
    var r = e.target.closest && e.target.closest('[data-consent-reset]');
    if (!r) return;
    e.preventDefault();
    try { localStorage.removeItem(KEY); } catch (err) {}
    if (pixelOn) { location.reload(); return; }
    banner();
  });
  var c = store.get();
  if (c === 'yes') loadPixel();
  else if (c !== 'no') {
    if (document.body) banner(); else document.addEventListener('DOMContentLoaded', banner);
  }

  /* ---- Calendly opens as a window on this page, so bookings can be counted ---- */
  var calReady = false, calLoading = false, pending = null;
  function loadCalendly(cb) {
    if (calReady) return cb();
    pending = cb;
    if (calLoading) return;
    calLoading = true;
    var l = document.createElement('link'); l.rel = 'stylesheet'; l.href = 'https://assets.calendly.com/assets/external/widget.css'; document.head.appendChild(l);
    var s = document.createElement('script'); s.src = 'https://assets.calendly.com/assets/external/widget.js'; s.async = true;
    s.onload = function () { calReady = true; if (pending) pending(); };
    s.onerror = function () { calLoading = false; if (pending) pending(true); };
    document.head.appendChild(s);
  }
  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a[href*="calendly.com"]');
    if (!a || e.metaKey || e.ctrlKey || e.shiftKey || e.button) return;
    e.preventDefault();
    var url = a.href;
    track('track', 'Contact', { content_name: 'calendly_open' });
    loadCalendly(function (failed) {
      if (failed || !window.Calendly) { window.open(url, '_blank', 'noopener'); return; }
      window.Calendly.initPopupWidget({ url: url + (url.indexOf('?') < 0 ? '?' : '&') + 'hide_gdpr_banner=1' });
    });
  });
  window.addEventListener('message', function (e) {
    if (!e.origin || e.origin.indexOf('calendly.com') < 0) return;
    if (e.data && e.data.event === 'calendly.event_scheduled') {
      track('track', 'Schedule', { content_name: 'discovery_call' });
    }
  });
})();
