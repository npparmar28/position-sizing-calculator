const CACHE_NAME = 'position-calc-v1';
const ASSETS = [
  '/position-sizing-calculator/',
  '/position-sizing-calculator/index.html',
  '/position-sizing-calculator/styles.css',
  '/position-sizing-calculator/app.js',
  '/position-sizing-calculator/manifest.json',
  '/position-sizing-calculator/icons/icon-192x192.png',
  '/position-sizing-calculator/icons/icon-512x512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => response || fetch(event.request))
  );
});