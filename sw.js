const CacheStatic = "estatico-1";
const CacheDinamic = "dinamico-1";
const CacheInmutable = "inmutable-1";

self.addEventListener("install", (event) => {
	const cacheStatic = caches.open(CacheStatic).then((cache) => {
		cache.addAll([
			"/",
			"index.html",
			"app.js",
            "db_functions.php",
            "update.php"
		]);
	});
	const cacheInmutable = caches.open(CacheInmutable).then((cache) => {
		cache.addAll([
			"error.html",
			"error.png",
			"https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css",
			"https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js",
			"https://code.jquery.com/jquery-3.6.0.js"
		]);
	});
	event.waitUntil(Promise.all([cacheStatic, cacheInmutable]));
	console.log("Instalado");
	self.skipWaiting();
});

self.addEventListener("activate", (event) => {
	console.log("Evento activate");
	caches.keys().then((keys) => {
		keys.forEach((cache) => {
			if (cache.includes("estatico") && !cache.includes(CacheStatic)) {
				caches.delete(cache);
			}
		});
	});
});

self.addEventListener("fetch", (event) => {
	const respuesta = fetch(event.request)
		.then((res) => {
			if (res) {
				caches.match(event.request).then((cache) => {
					if (!cache) {
						caches.open(CacheDinamic).then((cache) => {
							cache.add(event.request.url);
						});
					}
				});
				return res;
			} else {
				return caches.match(event.request.url).then((newRes) => {
					if (newRes) {
						return newRes;
					} else {
						if (/\.(png|jpg)$/.test(event.request.url)) {
							return caches.match("error.png");
						}
						return caches.match("error.html");
					}
				});
			}
		})
		.catch((error) => {
			return caches.match(event.request.url).then((newRes) => {
				if (newRes) {
					return newRes;
				} else {
					if (/\.(png|jpg)$/.test(event.request.url)) {
						return caches.match("error.png");
					}
					return caches.match("error.html");
				}
			});
		});
	event.respondWith(respuesta);
});
