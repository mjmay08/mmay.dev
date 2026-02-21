'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "f51d6ce44ffe7a5a568cc73573d67073",
"assets/AssetManifest.bin.json": "0b783995a07a35217526a66836b0f257",
"assets/AssetManifest.json": "29c2423ef6e16009ea2e3eef7d84d037",
"assets/assets/fonts/Arial_Rounded_MT_Bold/arialroundedmtbold.ttf": "200135e8e5aec51916af96b03c1ee8fc",
"assets/assets/images/6-9_flip.png": "b1c6f293322acc444bc60144782b9da4",
"assets/assets/images/app_store.png": "5bec94a6c68f73df81d9c38294eddc93",
"assets/assets/images/blocker.png": "73984dfc52ffc27b311133dae836a9a0",
"assets/assets/images/board_overview.png": "b4739ab48449e08a41c537260d675430",
"assets/assets/images/cribbler_icon.jpg": "fb472dfea43642756ef2af233a0cccd4",
"assets/assets/images/cross_cribbage_icon.png": "1fa8e5e252103f7080e63e701e1ced1e",
"assets/assets/images/dark-tile.png": "8f145189ca11f919a88c8000eb6ff36a",
"assets/assets/images/google_play.png": "8fc7519888c83965f50b93d15f8bd1b4",
"assets/assets/images/gray-tile.png": "1af1b295007403da4c3f7c4b743a03f6",
"assets/assets/images/invalid_tile.png": "4f9db0b4b1086b31e25abaf40cb4dd8e",
"assets/assets/images/last_played.png": "e67c36b4b828153f353018c735efb162",
"assets/assets/images/light-tile.png": "d706bdbd901745564458ced305a451d9",
"assets/assets/images/prosaic.png": "0eba0399b4a5e5db7eb7a1f6fa28bbfe",
"assets/assets/images/sack.png": "2c5fc655be422b37c926572d2014cfcc",
"assets/assets/sfx/click4.mp3": "cc7dfb7ff0d5923d857caeaf7d586637",
"assets/assets/sfx/drop1.mp3": "c6154750a1902eb0e3f884b313c951ac",
"assets/assets/sfx/drop5.mp3": "9165449387fbb16327d0fa08edb5f29b",
"assets/assets/sfx/pick2.mp3": "204d43db7d865cffe79b64812ba48f44",
"assets/assets/sfx/win.mp3": "bb81be530bec88972df97509c8df98ce",
"assets/FontManifest.json": "c041a4bbc9526f9b40fb6d987c9f110d",
"assets/fonts/MaterialIcons-Regular.otf": "a7f17a67bda2c794aaea5e0ff8fe3702",
"assets/NOTICES": "6307bfd609ed2803736909603fbf32f0",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon-16x16.png": "c67bd41c4d7990b13417e809c6d2b4b6",
"favicon-32x32.png": "e100ee9549bd2ea0a566e060058f6cff",
"favicon.ico": "4919f4dee4bb4492a45dcdaaf6773f10",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "5c2763f48e7b255b4f4afd8a73d067f9",
"icons/android-chrome-192x192.png": "734bfa070086d86e8206d3c59ba0f127",
"icons/android-chrome-512x512.png": "17f98786aea8ba2dc86738d4822831c9",
"icons/apple-touch-icon.png": "4ef08c943f144be06b9b6e6faf0437f7",
"index.html": "f2c6c7c70fb21970e2d6c1e2fd12adeb",
"/": "f2c6c7c70fb21970e2d6c1e2fd12adeb",
"main.dart.js": "f2e2e1726cbb1c24d0d31bc0e64b78b7",
"manifest.json": "9cb2e69b2206d64a09036d4924f0e180",
"version.json": "3143dc26bbcb7523ca0006b41c5c5037"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
