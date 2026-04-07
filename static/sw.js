const CACHE_NAME = 'liberty-v1';
const urlsToCache = [
  '/',
  '/dashboard',
  '/static/style.css',
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});

self.addEventListener('push', event => {
  const data = event.data ? event.data.json() : {};
  self.registration.showNotification(data.title || 'Liberty Emporium', {
    body: data.body || 'New update available',
    icon: '/static/icon-192.png'
  });
});