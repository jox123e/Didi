self.addEventListener('fetch', (event) => {
  // Este script permite que la app funcione incluso offline
  event.respondWith(fetch(event.request));
});