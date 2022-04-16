importScripts("/precache-manifest.4c7bb91faf717866b80d08477ddd4bb5.js", "https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");


//workbox.core.setCacheNameDetails({prefix: "imgalign"});


self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();

workbox.routing.registerNavigationRoute('/index.html');
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.googleAnalytics.initialize();

self.addEventListener('install', () => {
  self.skipWaiting();
});
