self.addEventListener("install", (event) => {
  console.log("Service Worker installiert");
});

const cacheName = "pwa-cache-v1";
const assetsToCache = [
  "/",
  "/index.html",
  "/style.css", // falls du eine CSS-Datei hast
  "/script.js",
  "/manifest.json",
];

// Installations-Ereignis: Cache anlegen
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll(assetsToCache);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // Falls eine Datei im Cache gefunden wird, wird sie zurückgegeben
      if (response) {
        return response;
      }
      // Falls nicht, wird sie normal über das Netzwerk geladen
      return fetch(event.request);
    })
  );
});
