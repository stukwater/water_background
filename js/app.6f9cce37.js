(function(e){function t(t){for(var o,r,c=t[0],l=t[1],f=t[2],i=0,d=[];i<c.length;i++)r=c[i],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&d.push(a[r][0]),a[r]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);s&&s(t);while(d.length)d.shift()();return u.push.apply(u,f||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],o=!0,r=1;r<n.length;r++){var c=n[r];0!==a[c]&&(o=!1)}o&&(u.splice(t--,1),e=l(l.s=n[0]))}return e}var o={},r={app:0},a={app:0},u=[];function c(e){return l.p+"js/"+({}[e]||e)+"."+{"chunk-1845fbec":"477bd805"}[e]+".js"}function l(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n={"chunk-1845fbec":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var o="css/"+({}[e]||e)+"."+{"chunk-1845fbec":"5b90119c"}[e]+".css",a=l.p+o,u=document.getElementsByTagName("link"),c=0;c<u.length;c++){var f=u[c],i=f.getAttribute("data-href")||f.getAttribute("href");if("stylesheet"===f.rel&&(i===o||i===a))return t()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){f=d[c],i=f.getAttribute("data-href");if(i===o||i===a)return t()}var s=document.createElement("link");s.rel="stylesheet",s.type="text/css",s.onload=t,s.onerror=function(t){var o=t&&t.target&&t.target.src||a,u=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=o,delete r[e],s.parentNode.removeChild(s),n(u)},s.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(s)})).then((function(){r[e]=0})));var o=a[e];if(0!==o)if(o)t.push(o[2]);else{var u=new Promise((function(t,n){o=a[e]=[t,n]}));t.push(o[2]=u);var f,i=document.createElement("script");i.charset="utf-8",i.timeout=120,l.nc&&i.setAttribute("nonce",l.nc),i.src=c(e);var d=new Error;f=function(t){i.onerror=i.onload=null,clearTimeout(s);var n=a[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+o+": "+r+")",d.name="ChunkLoadError",d.type=o,d.request=r,n[1](d)}a[e]=void 0}};var s=setTimeout((function(){f({type:"timeout",target:i})}),12e4);i.onerror=i.onload=f,document.head.appendChild(i)}return Promise.all(t)},l.m=e,l.c=o,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)l.d(n,o,function(t){return e[t]}.bind(null,o));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="",l.oe=function(e){throw console.error(e),e};var f=window["webpackJsonp"]=window["webpackJsonp"]||[],i=f.push.bind(f);f.push=t,f=f.slice();for(var d=0;d<f.length;d++)t(f[d]);var s=i;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1:function(e,t){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},a=[],u=n("5530"),c=n("2f62"),l={data:function(){return{}},components:{},computed:Object(u["a"])({},Object(c["b"])({nowChooseIndex:function(e){return e.nowChooseIndex}})),methods:{showheader:function(e){this.header=e}},watch:{nowChooseIndex:function(){console.log(this.nowChooseIndex)}}},f=l,i=n("2877"),d=Object(i["a"])(f,r,a,!1,null,null,null),s=d.exports,p=n("8c4f");o["default"].use(p["a"]);var h=[{path:"/",name:"Home",component:function(e){return n.e("chunk-1845fbec").then(function(){var t=[n("6511")];e.apply(null,t)}.bind(this)).catch(n.oe)}}],m=new p["a"]({base:"",routes:h}),b=m;o["default"].use(c["a"]);var g=new c["a"].Store({state:{nowChooseIndex:""},mutations:{changeIndex:function(e,t){e.nowChooseIndex=t}},actions:{},modules:{}}),v=n("1157"),y=n.n(v),w=(n("4989"),n("ab8b"),n("77ed")),C=n.n(w),O=n("5c96"),j=n.n(O),k=(n("0fae"),n("9ca8")),x=(n("94b1"),n("c037"),n("ef97"),n("675c"),n("627c"),n("d28f"),n("007d"),n("6cc54"),n("2699")),A=n("a40a"),L=n("4e2b"),S=n("f60f"),_=n("fbba"),E=n("635f"),P=n("31dc"),I=n("0dbd"),T=n("258a"),U=n("28dd"),M=n("68f6"),R={localURL:"http://127.0.0.1:3001/",remoteURL:"http://kaushiungwater.im.nuk.edu.tw:3001/"},N={URL:R};o["default"].use(M["a"],{defaultCountryCode:"TW",defaultLanguage:null,defaultMode:"address",googleMapsApiKey:"AIzaSyBC3GZqvpAjach-lKAGOgAhc-irFvFg1fA"}),o["default"].use(U["a"]),o["default"].component("l-map",x["a"]),o["default"].component("l-tile-layer",A["a"]),o["default"].component("l-marker",L["a"]),o["default"].component("l-popup",S["a"]),o["default"].component("l-icon",_["a"]),o["default"].component("l-polyline",E["a"]),o["default"].component("l-tooltip",P["a"]),o["default"].component("l-circle",I["a"]),o["default"].component("l-polygon",T["a"]),o["default"].component("chart",k["a"]),o["default"].prototype.$=y.a,o["default"].config.productionTip=!1,o["default"].prototype.allURL=N.URL.remoteURL,o["default"].use(C.a),o["default"].use(j.a),new o["default"]({router:b,store:g,render:function(e){return e(s)}}).$mount("#app")}});
//# sourceMappingURL=app.6f9cce37.js.map