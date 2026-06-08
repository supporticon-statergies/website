const CACHE_NAME = 'supporticon-cache-v1';

// Intercept requests and cache static assets
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // Cache static assets (JS, CSS, images, and fonts)
  const isStaticAsset = url.pathname.includes('/assets/') || 
                        url.pathname.match(/\.(png|jpg|jpeg|gif|webp|svg|mp4|webm|lottie|ico|woff|woff2|ttf|otf)$/i);

  if (isStaticAsset && event.request.method === 'GET') {
    event.respondWith(
      caches.match(event.request).then((cachedResponse) => {
        if (cachedResponse) {
          // Serve from Cache Storage
          return cachedResponse;
        }

        return fetch(event.request).then((networkResponse) => {
          if (!networkResponse || networkResponse.status !== 200) {
            return networkResponse;
          }

          // Cache cloned response
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });

          return networkResponse;
        });
      })
    );
  } else {
    // Default fetch for pages, API, and non-GET requests
    event.respondWith(
      fetch(event.request).catch(() => {
        return caches.match(event.request);
      })
    );
  }
});

// Clean up old caches on activation
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
