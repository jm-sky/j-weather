if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let c=Promise.resolve();return i[e]||(c=new Promise(async c=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=c}else importScripts(e),c()})),c.then(()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]})},c=(c,i)=>{Promise.all(c.map(e)).then(e=>i(1===e.length?e[0]:e))},i={require:Promise.resolve(c)};self.define=(c,s,r)=>{i[c]||(i[c]=Promise.resolve().then(()=>{let i={};const n={uri:location.origin+c.slice(1)};return Promise.all(s.map(c=>{switch(c){case"exports":return i;case"module":return n;default:return e(c)}})).then(e=>{const c=r(...e);return i.default||(i.default=c),i})}))}}define("./service-worker.js",["./workbox-e170c028"],(function(e){"use strict";e.setCacheNameDetails({prefix:"j-weather"}),self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"css/2.a13f5d31.css",revision:"f3afcde81c09998f25c6b50815f3343c"},{url:"css/3.335dc59f.css",revision:"73a7ccec6bd394e693cf0d9d331b9219"},{url:"css/app.0e433876.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"css/vendor.90a0c239.css",revision:"012076c86ac4f14660fcf6782b80320a"},{url:"favicon.ico",revision:"47932516364bcbc5923f6efe21cd7c85"},{url:"fonts/KFOkCnqEu92Fr1MmgVxIIzQ.9391e6e2.woff",revision:"04b7fd97f88b82dccce5ec446ccc29e6"},{url:"fonts/KFOlCnqEu92Fr1MmEU9fBBc-.ddd11dab.woff",revision:"da2721c68b4bc80db8d4c404f76b118c"},{url:"fonts/KFOlCnqEu92Fr1MmSU5fBBc-.877b9231.woff",revision:"bf0f407102faf3a0b521d3b545f547a5"},{url:"fonts/KFOlCnqEu92Fr1MmWUlfBBc-.0344cc3c.woff",revision:"68d6dabfe54e245e7d5d5c16c3c4b1a9"},{url:"fonts/KFOlCnqEu92Fr1MmYUtfBBc-.b555d228.woff",revision:"64bba9c4e8156c152050c657e9d24bf1"},{url:"fonts/KFOmCnqEu92Fr1Mu4mxM.9b78ea3b.woff",revision:"dc3e086fc0c5addc09702e111d2adb42"},{url:"fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.55e9c550.woff",revision:"852cf9255305bdf184a8b38cd38691ae"},{url:"fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.c934fe77.woff2",revision:"8bf5ee9f803346f0b0de2c97f649f97f"},{url:"icons/apple-icon-120x120.png",revision:"a1701ea0ba784c23cc9b3b589efb7468"},{url:"icons/apple-icon-152x152.png",revision:"eb8298cbac5d99d2c2c7d128b4a42cd4"},{url:"icons/apple-icon-167x167.png",revision:"4851d886d9e0184d4f4f9596918279ad"},{url:"icons/apple-icon-180x180.png",revision:"1a1b14b3e218047c025361f95ac15518"},{url:"icons/icon-128x128.png",revision:"282e77b870c116b7d5da83d7e4056999"},{url:"icons/icon-16x16.png",revision:"8257244317bd2e07cda7aeb30bc1073e"},{url:"icons/icon-192x192.png",revision:"63aa267f76bf2f7523d3d2cd934b4dd3"},{url:"icons/icon-256x256.png",revision:"ba600a0bc2ecb03f4e967ed85f92a233"},{url:"icons/icon-32x32.png",revision:"88e8b47e73ef7063cd2905f13fc1ff82"},{url:"icons/icon-384x384.png",revision:"5bd41a18f95d43a395d83db5b2b5e487"},{url:"icons/icon-512x512.png",revision:"fe8fde2aff0881d488c8d5a664f34ed7"},{url:"icons/icon-96x96.png",revision:"7280841c0e52e8c58b56266129fb88d3"},{url:"icons/ms-icon-144x144.png",revision:"7d55643af3d3d4a6083665d9c3f13844"},{url:"icons/safari-pinned-tab.svg",revision:"3e4c3730b00c89591de9505efb73afd3"},{url:"index.html",revision:"26ecda4e645650abf20a296998bfd4a2"},{url:"js/2.1f2a196b.js",revision:"46cd74d958901325d65f21601565ae30"},{url:"js/3.f8f92a61.js",revision:"67c5f20a7b4af94181163e583a7966a2"},{url:"js/4.efd95bd9.js",revision:"26a66b7c99b1f1216a1762a93be2d2fc"},{url:"js/5.34148791.js",revision:"95b1b469b46a06bffa8b286b91ba3c64"},{url:"js/app.7b8aedda.js",revision:"0b132e18fdcb922916ed359e8bae472c"},{url:"js/vendor.641d4cb8.js",revision:"7c626fa880755e16b0d410d7f16f355e"},{url:"manifest.json",revision:"1217290d3dec8954621156950e145fed"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"),{denylist:[/service-worker\.js$/,/workbox-(.)*\.js$/]}))}));