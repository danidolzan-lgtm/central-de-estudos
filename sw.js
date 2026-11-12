/* Central de Estudos: funciona offline e atualiza sozinho quando há internet */
const CACHE = "central-estudos-v5";
const BASE = ["./", "./index.html", "./manifest.webmanifest", "./icon-192.png", "./icon-512.png", "./icon-maskable-512.png", "./apple-touch-icon.png"];
self.addEventListener("install", e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(BASE)).then(() => self.skipWaiting())); });
self.addEventListener("activate", e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener("fetch", e => {
  const r = e.request; if (r.method !== "GET") return;
  const u = new URL(r.url);
  const local = u.origin === location.origin;
  const fonte = /fonts\.(googleapis|gstatic)\.com$/.test(u.hostname) || /gstatic\.com$/.test(u.hostname) && u.pathname.includes("/firebasejs/");
  if (!local && !fonte) return; // Firebase (login e progresso) vai direto para a rede
  if (local && (r.mode === "navigate" || u.pathname.endsWith(".html") || u.pathname.endsWith("/"))) {
    // página: tenta a versão nova; sem internet, usa a guardada
    e.respondWith(fetch(r).then(res => { const c = res.clone(); caches.open(CACHE).then(k => k.put("./index.html", c)); return res; })
      .catch(() => caches.match("./index.html")));
    return;
  }
  e.respondWith(caches.match(r).then(hit => {
    const rede = fetch(r).then(res => { if (res.ok || res.type === "opaque") { const c = res.clone(); caches.open(CACHE).then(k => k.put(r, c)); } return res; }).catch(() => hit);
    return hit || rede;
  }));
});
