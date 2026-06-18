const CACHE_NAME = "citation-hyperplasia-performance-v4";

const ASSETS = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./assets/lesions-mobile/lesion_core_main.webp",
  "./assets/lesions-mobile/lesion_membrane_overlay.webp",
  "./assets/lesions-mobile/lesion_tendrils.webp",
  "./assets/lesions-mobile/lesion_edge_debris.webp",
  "./assets/lesions-mobile/lesion_depth_shadow.webp",
  "./assets/lesions-mobile/lesion_micro_citation_dust.webp",
  "./assets/lesions-mobile/lesion_interactive_objects.webp"
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
