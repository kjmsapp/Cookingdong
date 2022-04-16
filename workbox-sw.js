importScripts("/precache-manifest.d9c74225ee32d3e65d60d17bc9e6a210.js", "https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");


workbox.core.setCacheNameDetails({prefix: "imgalign"});


self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();

workbox.routing.registerNavigationRoute('/imgalign/index.html');
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

//workbox.googleAnalytics.initialize();

self.addEventListener('install', () => {
  self.skipWaiting();
});
