

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('app-cache').then(cache => {
      return cache.addAll([
        '/index.html',
        '/styles.css',
        '/script.js',
        '/manifest.json',
        '/Marianna.jpg' // Assurez-vous que ce fichier est présent
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      /*return response || fetch(event.request);*/
      return response || fetch(event.request).then(networkResponse => {
        // Sinon, il est récupéré du réseau
        return caches.open('app-cache').then(cache => {
            cache.put(event.request, networkResponse.clone());
            return networkResponse;
        });
    });
})
);
});

self.addEventListener('activate', event => {
  const cacheWhitelist = ['app-cache'];
  event.waitUntil(
      caches.keys().then(cacheNames => {
          return Promise.all(
              cacheNames.map(cacheName => {
                  if (!cacheWhitelist.includes(cacheName)) {
                      return caches.delete(cacheName);
                  }
              })
          );
      })
  );
});

