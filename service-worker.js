const CACHE_NAME = "citation-hyperplasia-mac-exhibition-v12";

const ASSETS = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./assets/lesions-opt/lesion_core_main.webp",
  "./assets/lesions-opt/lesion_membrane_overlay.webp",
  "./assets/lesions-opt/lesion_tendrils.webp",
  "./assets/lesions-opt/lesion_auxiliary_composite.webp",
  "./assets/lesions-opt/lesion_interactive_objects.webp"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;
      return fetch(event.request).then((response) => {
        const copy = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
        return response;
      });
    })
  );
});
