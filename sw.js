if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let o={};const l=e=>n(e,t),u={module:{uri:t},exports:o,require:l};s[t]=Promise.all(i.map((e=>u[e]||l(e)))).then((e=>(r(...e),o)))}}define(["./workbox-3625d7b0"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index.6809aeac.js",revision:null},{url:"assets/index.6cb617e7.css",revision:null},{url:"assets/register-sw.215decb5.js",revision:null},{url:"assets/vendor.a8393986.js",revision:null},{url:"assets/vendor.f90dd93b.css",revision:null},{url:"index.html",revision:"e859669bfa3e027884cb4b206f5b95d5"},{url:"./logo@192x192.png",revision:"2141830aeff90ef6988f4e01aba62fad"},{url:"manifest.webmanifest",revision:"d756afaa08532ee66890bc528374b6f6"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));