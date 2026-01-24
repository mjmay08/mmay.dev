'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "cf1f393c97a7f3cd8c3ceb35c376ab47",
"assets/AssetManifest.bin.json": "5f3f25b116ff4941070d620d47f7c47b",
"assets/AssetManifest.json": "61594d894e6d051d01888f78af48ddee",
"assets/assets/fonts/Cinzel-Bold.ttf": "7fa8033ca19d3d9dea10e6f019712228",
"assets/assets/fonts/Nunito/Nunito-Bold.ttf": "a69d02bf1d69ee833dfefdb5d21eec9b",
"assets/assets/images/arrow.png": "77d9108befe5cb79af5c0ae1f23d88ca",
"assets/assets/images/board.png": "f5c62c6b6d03a80f525f5d8f42156258",
"assets/assets/images/cross.png": "1d1edb0c124b31894bae96bd11bf6575",
"assets/assets/images/remove-ads-icon.svg": "56834e41b4e92be0bf6b7564683c8bfa",
"assets/assets/images/yes.png": "8f7543688287ce9e80f52a0e18263e13",
"assets/assets/sfx/zapsplat_leisure_playing_card_single_place_down_on_table_002_20465.mp3": "459b32971604d160d5663f83ce6d2a1c",
"assets/assets/sfx/zapsplat_multimedia_button_click_bright_001_92098.mp3": "f7604036d9eb1a1a0c6ecb5b0cbde7f0",
"assets/FontManifest.json": "590016a821b24c9b84d142ef2a8a9dbc",
"assets/fonts/MaterialIcons-Regular.otf": "bf03cf3303ea71787987ebe260c303b3",
"assets/NOTICES": "b80999e9da62b703866b333ade14f387",
"assets/packages/material_symbols_icons/lib/fonts/MaterialSymbolsOutlined.ttf": "7280e632ce170f469d18df222fce98b1",
"assets/packages/material_symbols_icons/lib/fonts/MaterialSymbolsRounded.ttf": "871547b681b7ee47ebad5dcd3b316573",
"assets/packages/material_symbols_icons/lib/fonts/MaterialSymbolsSharp.ttf": "e949713f8bb3a755d44ac95a5a424214",
"assets/packages/playing_cards/assets/card_imagery/back_001.png": "28c80e04ab991b80cc2aa5d18aa879aa",
"assets/packages/playing_cards/assets/card_imagery/bw_joker.png": "1d1c6ad3fa8a3bde172cada9104d124d",
"assets/packages/playing_cards/assets/card_imagery/club.png": "d1fd0ca4bd3ccc4c5e852f3ce15dccd8",
"assets/packages/playing_cards/assets/card_imagery/color_joker.png": "11eb99352b7b787e53cf10c122565826",
"assets/packages/playing_cards/assets/card_imagery/diamond.png": "f2eb19afc052c30eb571e4c6c6046d68",
"assets/packages/playing_cards/assets/card_imagery/heart.png": "6f7fcfdfc88ec70f6bc4dcd339568b03",
"assets/packages/playing_cards/assets/card_imagery/jc.png": "104dca27ba3f0734a5fde520f94d0eb3",
"assets/packages/playing_cards/assets/card_imagery/jd.png": "ae263f367ef9e4c4b8ad40563623cea7",
"assets/packages/playing_cards/assets/card_imagery/jh.png": "f7730fbbcf96889e45d2f9958ff825aa",
"assets/packages/playing_cards/assets/card_imagery/js.png": "137bbce282a776498eb8b33618a77db9",
"assets/packages/playing_cards/assets/card_imagery/kc.png": "cf60d0e257ec768bfee576f261e1a644",
"assets/packages/playing_cards/assets/card_imagery/kd.png": "806f30f77fcf9f11249ac3bb0174965b",
"assets/packages/playing_cards/assets/card_imagery/kh.png": "ce45da39c0f70540e158b16a0a8ead86",
"assets/packages/playing_cards/assets/card_imagery/ks.png": "660271be7e65fe06f3b2034a83af6f24",
"assets/packages/playing_cards/assets/card_imagery/qc.png": "85d80978a888f5a7a61eb016dddee679",
"assets/packages/playing_cards/assets/card_imagery/qd.png": "01751a267acc9e7a5fd4b1373e9d3179",
"assets/packages/playing_cards/assets/card_imagery/qh.png": "2d142e0a95f0adbd44b5c7c0172ef577",
"assets/packages/playing_cards/assets/card_imagery/qs.png": "c01ffe97d768bb26c1293749647dfcfd",
"assets/packages/playing_cards/assets/card_imagery/spade.png": "981c0b10f109bd3e9cb408b61f7a33a7",
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
"favicon-16x16.png": "071dc33b570f147b264d4b41b0f94fe2",
"favicon-32x32.png": "ae40e54aa961a7302a460edb6f946e50",
"favicon.ico": "6d1eba27f4aa24e726cedf1c922a8633",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "5c2763f48e7b255b4f4afd8a73d067f9",
"icons/android-chrome-192x192.png": "57a9d71817fe25132c748cfb8f90ba39",
"icons/android-chrome-512x512.png": "9c4048b1b6bb268aa5ce70505ecfc549",
"icons/apple-touch-icon.png": "91c92f08e1bd90564a516f5f4cc276ef",
"index.html": "02ff0ce14d64e0626c07c211e44dda72",
"/": "02ff0ce14d64e0626c07c211e44dda72",
"main.dart.js": "f045a7dcb4c5baa3a939dcf63f541fa7",
"manifest.json": "ae4938e6f297bf30ebe855b459a5dfaa",
"version.json": "c02c6c3ccaa697d945af272479281715"};
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
