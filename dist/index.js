(()=>{"use strict";var n={767:(n,t,e)=>{e.d(t,{Z:()=>g});var r=e(645),i=e.n(r),o=e(667),a=e.n(o),c=e(449),s=e(172),u=e(320),d=i()((function(n){return n[1]})),l=a()(c.Z),v=a()(s.Z),f=a()(u.Z);d.push([n.id,"* {\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n.container {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 10px;\r\n    padding: 10px;\r\n}\r\n\r\n.container-crud {\r\n    padding-top: 20px;\r\n}\r\n\r\n.button {\r\n    padding: 10px;\r\n    border: none;\r\n    border-radius: 10px;\r\n    box-shadow: 1px 5px 5px 0px rgba(212, 148, 45, 0.51);\r\n    background-color: rgb(248, 228, 46);\r\n    font-size: 14px;\r\n}\r\n\r\n.button:hover {\r\n    box-shadow: 1px 7px 7px 0px rgba(212, 148, 45, 0.51);\r\n    background-color: rgb(214, 198, 52);\r\n    transition: 1s;\r\n    cursor: pointer;\r\n}\r\n\r\n.input {\r\n    height: 25px;\r\n    padding: 5px;\r\n    border-radius: 5px;\r\n    font-size: 16px;\r\n}\r\n\r\n.input:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n.button-generate {\r\n    width: 210px;\r\n}\r\n\r\n.button-generate,\r\n.button-create,\r\n.button-update {\r\n    background-color: rgb(232, 157, 28);\r\n}\r\n\r\n.container-track {\r\n    padding-top: 40px;\r\n}\r\n\r\n.label {\r\n    font-size: 24px;\r\n}\r\n\r\n.car-image {\r\n    position: absolute;\r\n    top: -13px;\r\n    left: 20px;\r\n    width: 60px;\r\n}\r\n\r\n.bottom-container {\r\n    position: relative;\r\n    height: fit-content;\r\n    border-bottom: dotted 2px black;\r\n}\r\n\r\n.finish-image {\r\n    position: absolute;\r\n    top: 15px;\r\n    right: 90px;\r\n    width: 40px;\r\n}\r\n\r\n.split-layer {\r\n    position: fixed;\r\n    top: 0;\r\n    width: 100vw;\r\n    height: 100%;\r\n    background-color: azure;\r\n    z-index: 1;\r\n}\r\n\r\n.upper-layer {\r\n    position: relative;\r\n    padding-left: 20px;\r\n    z-index: 2;\r\n}\r\n\r\n.go-top {\r\n    position: absolute;\r\n    top:60px;\r\n}\r\n\r\n.table-item {\r\n    text-align: center;\r\n    padding: 0 18px;\r\n}\r\n\r\n.inactive,\r\n.inactive:hover {\r\n    background-color: gray;\r\n}\r\n\r\n.pagination {\r\n    display: flex;\r\n    justify-content: center;\r\n    gap: 20px;\r\n    padding: 30px 0;\r\n}\r\n\r\n.button-prev,\r\n.button-next {\r\n    width: 120px;   \r\n}\r\n\r\n.car-svg-container {\r\n    position: relative;\r\n}\r\n\r\n.winner-label-container {\r\n    position: fixed;\r\n    top: 50vh;\r\n    left: calc(50vw - 120px);\r\n    z-index: 10;\r\n}\r\n\r\n.winner-label {\r\n    font-size: 32px;\r\n    color: red;\r\n}\r\n\r\n.car-item {\r\n    position: static;\r\n    width: 45px;\r\n}\r\n\r\n.sort {\r\n    background: url("+l+");\r\n    background-repeat: no-repeat ;\r\n    background-position: 100%;\r\n    user-select: none;\r\n}\r\n\r\n.sort:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n.ascending {\r\n    background: url("+v+");\r\n    background-repeat: no-repeat ;\r\n    background-position: 100%;\r\n}\r\n\r\n.descending {\r\n    background: url("+f+");\r\n    background-repeat: no-repeat ;\r\n    background-position: 100%;\r\n}",""]);const g=d},645:n=>{n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e=n(t);return t[2]?"@media ".concat(t[2]," {").concat(e,"}"):e})).join("")},t.i=function(n,e,r){"string"==typeof n&&(n=[[null,n,""]]);var i={};if(r)for(var o=0;o<this.length;o++){var a=this[o][0];null!=a&&(i[a]=!0)}for(var c=0;c<n.length;c++){var s=[].concat(n[c]);r&&i[s[0]]||(e&&(s[2]?s[2]="".concat(e," and ").concat(s[2]):s[2]=e),t.push(s))}},t}},667:n=>{n.exports=function(n,t){return t||(t={}),"string"!=typeof(n=n&&n.__esModule?n.default:n)?n:(/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),t.hash&&(n+=t.hash),/["'() \t\n]/.test(n)||t.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n)}},172:(n,t,e)=>{e.d(t,{Z:()=>r});const r=e.p+"assets/img/asc.gif"},449:(n,t,e)=>{e.d(t,{Z:()=>r});const r=e.p+"assets/img/bg.gif"},320:(n,t,e)=>{e.d(t,{Z:()=>r});const r=e.p+"assets/img/desc.gif"},163:(n,t,e)=>{e.r(t),e.d(t,{default:()=>r});const r=e.p+"assets/img/finish.png"},807:(n,t,e)=>{e.r(t),e.d(t,{default:()=>r});const r=e.p+"assets/img/sports-car.svg"},379:(n,t,e)=>{var r,i=function(){var n={};return function(t){if(void 0===n[t]){var e=document.querySelector(t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}n[t]=e}return n[t]}}(),o=[];function a(n){for(var t=-1,e=0;e<o.length;e++)if(o[e].identifier===n){t=e;break}return t}function c(n,t){for(var e={},r=[],i=0;i<n.length;i++){var c=n[i],s=t.base?c[0]+t.base:c[0],u=e[s]||0,d="".concat(s," ").concat(u);e[s]=u+1;var l=a(d),v={css:c[1],media:c[2],sourceMap:c[3]};-1!==l?(o[l].references++,o[l].updater(v)):o.push({identifier:d,updater:p(v,t),references:1}),r.push(d)}return r}function s(n){var t=document.createElement("style"),r=n.attributes||{};if(void 0===r.nonce){var o=e.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(n){t.setAttribute(n,r[n])})),"function"==typeof n.insert)n.insert(t);else{var a=i(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var u,d=(u=[],function(n,t){return u[n]=t,u.filter(Boolean).join("\n")});function l(n,t,e,r){var i=e?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(n.styleSheet)n.styleSheet.cssText=d(t,i);else{var o=document.createTextNode(i),a=n.childNodes;a[t]&&n.removeChild(a[t]),a.length?n.insertBefore(o,a[t]):n.appendChild(o)}}function v(n,t,e){var r=e.css,i=e.media,o=e.sourceMap;if(i?n.setAttribute("media",i):n.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}var f=null,g=0;function p(n,t){var e,r,i;if(t.singleton){var o=g++;e=f||(f=s(t)),r=l.bind(null,e,o,!1),i=l.bind(null,e,o,!0)}else e=s(t),r=v.bind(null,e,t),i=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)};return r(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap)return;r(n=t)}else i()}}n.exports=function(n,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var e=c(n=n||[],t);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var r=0;r<e.length;r++){var i=a(e[r]);o[i].references--}for(var s=c(n,t),u=0;u<e.length;u++){var d=a(e[u]);0===o[d].references&&(o[d].updater(),o.splice(d,1))}e=s}}}}},t={};function e(r){var i=t[r];if(void 0!==i)return i.exports;var o=t[r]={id:r,exports:{}};return n[r](o,o.exports,e),o.exports}e.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return e.d(t,{a:t}),t},e.d=(n,t)=>{for(var r in t)e.o(t,r)&&!e.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:t[r]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),e.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),e.r=n=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},(()=>{var n;e.g.importScripts&&(n=e.g.location+"");var t=e.g.document;if(!n&&t&&(t.currentScript&&(n=t.currentScript.src),!n)){var r=t.getElementsByTagName("script");r.length&&(n=r[r.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=n})(),e.nc=void 0,(()=>{const n="http://127.0.0.1:3000",t=`${n}/garage`,r=`${n}/engine`,i=`${n}/winners`,o="container",a={Moscvich:["400","402","408","415","2150","2142"],BMW:["2","3","4","5","6","7"],Lexus:["RX","ES","NX","GX","LX","LS"],Ferrari:["296 GTB","Roma","F8 Tributo","812 Superfast","SF90 Stradale"],LADA:["Granta","Vesta","XRAY","Largus","4x4","Niva"],Nissan:["Pathfinder","X-Trail","Qashqai","Terrano","Murano","Juke"],Toyota:["Corolla","Camry","C-HR","RAV4","Highlander","Fortuner"]},c={DESC:"descending",ASC:"ascending"},s={activeLayer:"garage",page:1,pageWinners:1,sort:"wins",order:"DESC",maxPagesGarage:1,maxPagesWinners:1,isRace:!1,carStatus:new Map,carCurrentX:new Map,carDriveStatus:new Map},u=s;var d=function(n,t,e,r){return new(e||(e=Promise))((function(i,o){function a(n){try{s(r.next(n))}catch(n){o(n)}}function c(n){try{s(r.throw(n))}catch(n){o(n)}}function s(n){var t;n.done?i(n.value):(t=n.value,t instanceof e?t:new e((function(n){n(t)}))).then(a,c)}s((r=r.apply(n,t||[])).next())}))};function l(n,t,e=!1){const r=`<svg xmlns="http://www.w3.org/2000/svg" class = "car-image ${e?"car-item":""}" enable-background="new 0 0 512 512" viewBox="0 0 512 512"><path fill="${t}" d="M417.3 349c-29.6 0-53.7-24.1-53.7-53.7s24.1-53.7 53.7-53.7 53.7 24.1 53.7 53.7S446.9 349 417.3 349zM417.3 251.5c-24.1 0-43.7 19.6-43.7 43.7s19.6 43.7 43.7 43.7 43.7-19.6 43.7-43.7S441.4 251.5 417.3 251.5zM93.1 349c-29.6 0-53.7-24.1-53.7-53.7s24.1-53.7 53.7-53.7 53.7 24.1 53.7 53.7S122.7 349 93.1 349zM93.1 251.5c-24.1 0-43.7 19.6-43.7 43.7S69 339 93.1 339s43.7-19.6 43.7-43.7S117.2 251.5 93.1 251.5z"/><path fill="${t}" d="M93.1 324.2c-15.9 0-28.9-13-28.9-28.9s13-28.9 28.9-28.9 28.9 13 28.9 28.9S109 324.2 93.1 324.2zM93.1 276.3c-10.4 0-18.9 8.5-18.9 18.9s8.5 18.9 18.9 18.9 18.9-8.5 18.9-18.9S103.5 276.3 93.1 276.3zM417.1 324.2c-15.9 0-28.9-13-28.9-28.9s13-28.9 28.9-28.9 28.9 13 28.9 28.9S433 324.2 417.1 324.2zM417.1 276.3c-10.4 0-18.9 8.5-18.9 18.9s8.5 18.9 18.9 18.9 18.9-8.5 18.9-18.9S427.5 276.3 417.1 276.3z"/><path fill="${t}" d="M495,324h-35.3v-10H490v-18.8c0-0.7,0.1-1.4,0.4-2l10.4-23.7l-19.9-14.9\n    c-22-16.5-49.2-25.6-76.7-25.6H362c-1,0-2-0.3-2.8-0.9l-44.3-30.1c-24.2-16.4-52.4-25.1-81.6-25.1H128.7L10,209.2v4.8h6\n    c2.8,0,5,2.2,5,5v43c0,2.8-2.2,5-5,5h-6v27.3L25,314h25.6v10H22.5c-1.6,0-3-0.7-4-2L1,299c-0.7-0.9-1-1.9-1-3v-34\n    c0-2.8,2.2-5,5-5h6v-33H5c-2.8,0-5-2.2-5-5v-13.5c0-2.2,1.4-4.1,3.5-4.8l123-37.5c0.5-0.1,1-0.2,1.5-0.2h105.3\n    c31.2,0,61.4,9.3,87.2,26.8l43,29.2h40.7c29.6,0,59,9.8,82.7,27.6l23.1,17.3c1.9,1.4,2.5,3.9,1.6,6L500,296.3V319\n    C500,321.8,497.8,324,495,324z"/><rect width="71.6" height="10" x="303.2" y="314" fill="${t}"/><rect width="147.7" height="10" x="135.5" y="314" fill="${t}"/><path fill="${t}" d="M37.7 267H16c-2.8 0-5-2.2-5-5v-43c0-2.8 2.2-5 5-5h21.8c2 0 3.8 1.2 4.6 3l10.5 24.5c.6 1.4.5 3.1-.2 4.4l-10.5 18.5C41.2 266 39.5 267 37.7 267zM21 257h13.8l7.8-13.8L34.5 224H21V257zM331 227h-75c-.3 0-.5 0-.8-.1l-100.5-15.5 1.5-9.9L256.4 217h59l-4.1-2.9c-24.8-17.7-54-27.1-84.5-27.1h-89.1l-26.2 7.7 24.8 3.8-1.5 9.9-47-7.2c-2.3-.4-4.1-2.3-4.2-4.6-.2-2.3 1.3-4.5 3.6-5.1l48.5-14.2c.5-.1.9-.2 1.4-.2h89.8c32.6 0 63.8 10 90.3 28.9l16.8 12c1.8 1.3 2.5 3.5 1.9 5.6C335.1 225.6 333.2 227 331 227z"/><path fill="${t}" d="M195.2 217.7c-.3 0-.5 0-.8-.1l-20.4-3.1c-2.4-.4-4.2-2.5-4.2-4.9V182c0-2.8 2.2-5 5-5h20.4c2.8 0 5 2.2 5 5v30.6c0 1.5-.6 2.8-1.7 3.8C197.6 217.2 196.4 217.7 195.2 217.7zM179.8 205.2l10.4 1.6V187h-10.4V205.2zM356.2 300.2l-162.6-9.7c-1.4-.1-2.7-.8-3.6-1.9l-30.9-39c-1-1.2-1.3-2.8-.9-4.3s1.4-2.7 2.8-3.4l32.3-14.5c.9-.4 1.8-.5 2.8-.4l158.4 24-1.5 9.9L196 237.2l-25 11.2 25.5 32.2 160.4 9.6L356.2 300.2z"/><rect width="31" height="10" x="476" y="263" fill="${t}"/></svg>`;return e||n.insertAdjacentHTML("beforeend",r),r}function v(n,t){const e=I("div",n,[o,`container-${t}`],"",[],"garage");return I("input",e,["input",`text-${t}`],"",[["type","text"]],"garage"),I("input",e,["input",`color-${t}`],"",[["type","color"]],"garage"),I("button",e,["button",`button-${t}`,"inactive"],t.toUpperCase(),[],"garage"),e}function f(n,t,e){const r=I("div",n,[o],"",[],e.toLowerCase());I("p",r,[`${e}-items`,"label"],`${e.toUpperCase()} (${t||"0"})`,[],e.toLowerCase()),function(n,t){if("garage"===t){const t=n%7>0?1:0,e=Math.floor(n/7)+t;s.maxPagesGarage=e}else if("winners"===t){const t=n%10>0?1:0,e=Math.floor(n/7)+t;s.maxPagesWinners=e}}(Number(t),e.toLowerCase())}function g(n,t,e){const r=I("div",n,[o],"",[],`${e||"garage"}`);I("p",r,["page-number","label"],`Page #${t}`,[],`${e||"garage"}`)}function p(n,t){const e=I("div",n,["pagination"],"",[],t);I("button",e,["button","button-prev",`button-${t}-prev`],"PREV",[],t),I("button",e,["button","button-next",`button-${t}-next`],"NEXT",[],t),function(n){"garage"===n?(1===s.page?z("button-garage-prev",!1):z("button-garage-prev",!0),s.page>=s.maxPagesGarage?z("button-garage-next",!1):z("button-garage-next",!0)):"winners"===n&&(1===s.pageWinners?z("button-winners-prev",!1):z("button-winners-prev",!0),s.pageWinners>=s.maxPagesWinners?z("button-winners-next",!1):z("button-winners-next",!0))}(t)}function h(n){return d(this,void 0,void 0,(function*(){const t=I("div",document.body,["garage","garage"===s.activeLayer?"upper-layer":""],"",[],"garage");!function(n){const t=I("div",n,["container-crud"],"",[],"garage");v(t,"create"),v(t,"update");const e=I("div",t,[o],"",[],"garage");I("button",e,["button","button-race"],"RACE",[],"garage"),I("button",e,["button","button-reset","inactive"],"RESET",[],"garage"),I("button",e,["button","button-generate"],"GENERATE CARS",[],"garage")}(t),yield function(n,t){return d(this,void 0,void 0,(function*(){const e=I("div",n,["container-track"],"",[],"garage"),r=yield t;f(e,r.count,"garage"),g(e,s.page),function(n,t){t.forEach((t=>{!function(n,t){var e;const r=I("div",n,["container-car"],"",[],"garage"),i=I("div",r,[o],"",[],"garage");I("button",i,["button","button-select"],"SELECT",[["value",`${t.id||""}`]],"garage"),I("button",i,["button","button-remove"],"REMOVE",[["value",`${t.id||""}`]],"garage"),I("p",i,["car-name"],t.name,[],"garage");const a=I("div",n,[o,"bottom-container"],"",[],"garage");I("button",a,["button","button-start"],"A",[["value",`${t.id||""}`]],"garage"),I("button",a,["button","button-stop","inactive"],"B",[["value",`${t.id||""}`]],"garage"),l(I("div",a,["car-svg-container"],"",[["value",`${t.id||""}`]],"garage"),t.color),I("img",a,["finish-image"],"",[["src","./assets/img/finish.png"],["alt","finish flag"]],"garage"),t.id&&F(null===(e=t.id)||void 0===e?void 0:e.toString(),"stopped")}(n,t)}))}(I("div",e,["container-cars"],"",[],"garage"),r.items)}))}(t,n),p(t,"garage")}))}e(807),e(163);var b=function(n,t,e,r){return new(e||(e=Promise))((function(i,o){function a(n){try{s(r.next(n))}catch(n){o(n)}}function c(n){try{s(r.throw(n))}catch(n){o(n)}}function s(n){var t;n.done?i(n.value):(t=n.value,t instanceof e?t:new e((function(n){n(t)}))).then(a,c)}s((r=r.apply(n,t||[])).next())}))};function y(n,t){var e;null===(e=O.get(n))||void 0===e||e.forEach((n=>{n.removeEventListener("click",t,!1),n.classList.add("inactive")}))}function m(n,t){var e;null===(e=O.get(n))||void 0===e||e.forEach((n=>{n.addEventListener("click",t),n.classList.remove("inactive")}))}function w(){"garage"===s.activeLayer?(m("garage-button",w),y("winners-button",w),s.activeLayer="winners"):(y("garage-button",w),m("winners-button",w),s.activeLayer="garage"),["garage","winners"].forEach((n=>{var t;null===(t=O.get(n))||void 0===t||t.forEach((n=>{n.classList.toggle("upper-layer")}))}))}function x(n,t,e){const r=I("tr",n,["row"],"",[],"winners"),i=e?"th":"td";t[1]&&t.forEach((n=>{I(i,r,["table-item",e&&["Wins","Best time (seconds)"].includes(n)?"sort":"item",`${S(n)===s.sort?c[s.order]:"auto"}`],"",[],"winners").innerHTML=n}))}const E=function(n){return t=this,e=void 0,i=function*(){const t=I("div",document.body,["winners","go-top","winners"===s.activeLayer?"upper-layer":"bottom"],"",[],"winners");f(t,n.count,"winners"),g(t,s.pageWinners,"winners"),yield function(n,t){const e=I("table",n,["table"],"",[],"winners");x(e,["Number","Car","Name","Wins","Best time (seconds)"],!0);for(let n=0;n<t.length;n+=1){const{wins:r,time:i,car:o}=t[n];o&&x(e,[(n+1).toString(),l(document.body,o.color,!0),o.name,r.toString(),i.toString()])}}(t,n.items),p(t,"winners")},new((r=void 0)||(r=Promise))((function(n,o){function a(n){try{s(i.next(n))}catch(n){o(n)}}function c(n){try{s(i.throw(n))}catch(n){o(n)}}function s(t){var e;t.done?n(t.value):(e=t.value,e instanceof r?e:new r((function(n){n(e)}))).then(a,c)}s((i=i.apply(t,e||[])).next())}));var t,e,r,i};var L=function(n,t,e,r){return new(e||(e=Promise))((function(i,o){function a(n){try{s(r.next(n))}catch(n){o(n)}}function c(n){try{s(r.throw(n))}catch(n){o(n)}}function s(n){var t;n.done?i(n.value):(t=n.value,t instanceof e?t:new e((function(n){n(t)}))).then(a,c)}s((r=r.apply(n,t||[])).next())}))};function $(n){return L(this,void 0,void 0,(function*(){j("winners"),U("winners"),yield E(n),T()}))}function S(n){return n?"Wins"===n?"wins":"time"===n.split(" ")[1]?"time":"id":"id"}const C=$;function M(){var n;(function(){var n;null===(n=O.get("winners-button"))||void 0===n||n.forEach((n=>{n.addEventListener("click",w)}))})(),function(){var n;null===(n=O.get("button-create"))||void 0===n||n.forEach((n=>{n.addEventListener("click",(()=>b(this,void 0,void 0,(function*(){const n=R("text-create"),t=R("color-create");n&&t&&(yield Y({name:n,color:t}),P())}))))}))}(),null===(n=O.get("text-create"))||void 0===n||n.forEach((n=>{n.addEventListener("keyup",(()=>{var t;const e=null===(t=O.get("button-create"))||void 0===t?void 0:t.slice(-1)[0];e&&(n.value?e.classList.remove("inactive"):e.classList.add("inactive"))}))})),function(){var n;null===(n=O.get("button-select"))||void 0===n||n.forEach((n=>{n.addEventListener("click",(()=>k(this,void 0,void 0,(function*(){const t=n.value;var e;A("text-update",(e=yield Q(t)).name),A("color-update",e.color),function(n,t){var e;t&&(null===(e=O.get("text-update"))||void 0===e||e.forEach((n=>{n.id=t.toString()})))}(0,e.id),z("button-update",!0),z("button-select",!0),n.classList.add("inactive")}))))}))}(),function(){var n;null===(n=O.get("button-update"))||void 0===n||n.forEach((n=>{n.addEventListener("click",(()=>b(this,void 0,void 0,(function*(){const n=R("text-update"),e=R("color-update"),r=R("text-update",!0);n&&e&&(yield function(n,e){return q(this,void 0,void 0,(function*(){return(yield fetch(`${t}/${n}`,{method:"PUT",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}})).json()}))}(r,{name:n,color:e}),P())}))))}))}(),function(){var n;null===(n=O.get("button-remove"))||void 0===n||n.forEach((n=>{n.addEventListener("click",(e=>k(this,void 0,void 0,(function*(){e.preventDefault();const r=n.value;yield function(n){return q(this,void 0,void 0,(function*(){yield fetch(`${t}/${n}`,{method:"DELETE"})}))}(r),yield P(),yield function(n){return q(this,void 0,void 0,(function*(){return(yield fetch(`${i}/${n}`,{method:"DELETE"})).json()}))}(r);const o=yield K(u.pageWinners,u.sort,u.order);C(o)}))))}))}(),function(){var n;null===(n=O.get("button-generate"))||void 0===n||n.forEach((n=>{n.addEventListener("click",(()=>b(this,void 0,void 0,(function*(){const n=[];for(let t=0;t<100;t+=1){const t=X(),e=_();n.push(Y({name:e,color:t}))}yield Promise.allSettled(n),P()}))))}))}(),function(){var n;null===(n=O.get("button-garage-next"))||void 0===n||n.forEach((n=>{n.addEventListener("click",(()=>{n.classList.contains("inactive")||(u.page+=1,P())}))}))}(),function(){var n;null===(n=O.get("button-garage-prev"))||void 0===n||n.forEach((n=>{n.addEventListener("click",(()=>{n.classList.contains("inactive")||(u.page-=1,P())}))}))}(),function(){var n;null===(n=O.get("button-start"))||void 0===n||n.forEach((n=>{n.addEventListener("click",(()=>k(this,void 0,void 0,(function*(){if(!n.classList.contains("inactive")){const t=n.value;z("button-start",!1,t),z("button-stop",!0,t),z("button-reset",!0),z("button-race",!1),yield G(t),B(t)}}))))}))}(),function(){var n;null===(n=O.get("button-stop"))||void 0===n||n.forEach((n=>{n.addEventListener("click",(()=>{n.classList.contains("inactive")||(Z(n.value),function(){var n;let t=!0;return null===(n=O.get("button-start"))||void 0===n||n.forEach((n=>{n.classList.contains("inactive")&&(t=!1)})),t}()&&(z("button-reset",!1),z("button-race",!0)))}))}))}(),function(){var n;null===(n=O.get("button-reset"))||void 0===n||n.forEach((n=>{n.addEventListener("click",(()=>b(this,void 0,void 0,(function*(){const n=yield nn(u.page);let t=0;n.items.forEach((e=>b(this,void 0,void 0,(function*(){e.id&&(yield Z(e.id.toString())),t===n.items.length-1&&(z("button-reset",!1),z("button-race",!0)),t+=1}))))}))))}))}(),function(){var n;null===(n=O.get("button-race"))||void 0===n||n.forEach((n=>{n.addEventListener("click",(()=>b(this,void 0,void 0,(function*(){if(!n.classList.contains("inactive")){n.classList.add("inactive");const t=yield nn(u.page);u.isRace=!0,z("button-reset",!0);const e=[];t.items.forEach((n=>{if(n.id){const t=n.id.toString(),r=new Promise((n=>{n(function(n){return N(this,void 0,void 0,(function*(){z("button-start",!1,n),z("button-stop",!0,n),yield G(n),B(n)}))}(t))}));e.push(r)}})),Promise.all(e)}}))))}))}()}function T(){(function(){var n;null===(n=O.get("sort"))||void 0===n||n.forEach((n=>{n.addEventListener("click",(n=>L(this,void 0,void 0,(function*(){const t=n.target,e=t.innerText;!function(n,t){var e;null===(e=O.get("sort"))||void 0===e||e.forEach((n=>{n!==t&&(n.classList.remove("ascending"),n.classList.remove("descending"))}))}(0,t),function(n){const t=n.classList;t.contains("ascending")?(t.remove("ascending"),t.add("descending")):t.contains("descending")&&t.remove("descending"),t.add("ascending")}(t),s.order=function(n){return n.classList.contains("descending")?"DESC":"ASC"}(t),s.sort=S(e),$(yield K(s.pageWinners,s.sort,s.order))}))))}))})(),function(){var n;null===(n=O.get("button-winners-next"))||void 0===n||n.forEach((n=>{n.addEventListener("click",(()=>L(this,void 0,void 0,(function*(){n.classList.contains("inactive")||(s.pageWinners+=1,$(yield K(s.pageWinners,s.sort,s.order)))}))))}))}(),function(){var n;null===(n=O.get("button-winners-prev"))||void 0===n||n.forEach((n=>{n.addEventListener("click",(()=>L(this,void 0,void 0,(function*(){n.classList.contains("inactive")||(s.pageWinners-=1,$(yield K(s.pageWinners,s.sort,s.order)))}))))}))}()}var k=function(n,t,e,r){return new(e||(e=Promise))((function(i,o){function a(n){try{s(r.next(n))}catch(n){o(n)}}function c(n){try{s(r.throw(n))}catch(n){o(n)}}function s(n){var t;n.done?i(n.value):(t=n.value,t instanceof e?t:new e((function(n){n(t)}))).then(a,c)}s((r=r.apply(n,t||[])).next())}))};function j(n){var t;null===(t=O.get(n))||void 0===t||t.forEach((n=>{n.remove()}))}function P(){return k(this,void 0,void 0,(function*(){const n=nn(u.page);j("garage"),U("garage"),yield h(n),M()}))}function A(n,t){var e;null===(e=O.get(n))||void 0===e||e.forEach((n=>{n.value=t}))}function z(n,t,e){var r;null===(r=O.get(n))||void 0===r||r.forEach((n=>{e?n.value===e&&(t?n.classList.remove("inactive"):n.classList.add("inactive")):t?n.classList.remove("inactive"):n.classList.add("inactive")}))}var N=function(n,t,e,r){return new(e||(e=Promise))((function(i,o){function a(n){try{s(r.next(n))}catch(n){o(n)}}function c(n){try{s(r.throw(n))}catch(n){o(n)}}function s(n){var t;n.done?i(n.value):(t=n.value,t instanceof e?t:new e((function(n){n(t)}))).then(a,c)}s((r=r.apply(n,t||[])).next())}))};const O=new Map,W=new Map;function R(n,t){var e;let r="";return null===(e=O.get(n))||void 0===e||e.forEach((n=>{r=t?n.id:n.value})),r}function H(n,t){return Math.floor(Math.random()*(t+n)+n)}function X(){const n=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"],t=n.length;let e="#";for(let r=0;r<6;r+=1)e+=n[H(0,t)];return e}function _(){const n=Object.keys(a),t=H(0,n.length),e=H(0,a[n[t]].length);return`${n[t]} ${a[n[t]][e]}`}function B(n){return N(this,void 0,void 0,(function*(){const t=yield function(n){return q(this,void 0,void 0,(function*(){const t=yield fetch(`${r}?id=${n}&status=drive`,{method:"PATCH"}).catch();return 200===t.status?Object.assign({},yield t.json()):{success:!1}}))}(n);t.success||s.carStatus.set(n,"drive")}))}function D(n,t){return N(this,void 0,void 0,(function*(){(function(n,t){const e=I("div",document.body,["winner-label-container"]);I("p",e,["winner-label"],`${n} wins with result ${t/1e3} seconds!`)})(n.name,t),setTimeout((()=>{var n;null===(n=O.get("winner-label-container"))||void 0===n||n.forEach((n=>{n.style.display="none"})),O.delete("winner-label-container")}),5e3)}))}function V(n){var t,e;return null===(t=O.get("car-svg-container"))||void 0===t?void 0:t.reduce(((t,e)=>{var r;return(null===(r=e.attributes.getNamedItem("value"))||void 0===r?void 0:r.nodeValue)===n&&(t.item=e),t}),{item:null===(e=O.get("car-svg-container"))||void 0===e?void 0:e[0]}).item}function F(n,t){s.carStatus.get(n)!==t&&s.carStatus.set(n,t)}function G(n){var t;return N(this,void 0,void 0,(function*(){const e=yield function(n){return q(this,void 0,void 0,(function*(){return(yield fetch(`${r}?id=${n}&status=started`,{method:"PATCH"})).json()}))}(n),o=Math.floor(e.distance/e.velocity);let a=null===(t=O.get("bottom-container"))||void 0===t?void 0:t[0].offsetWidth;a=a?a-200:0;const c=V(n);a&&c&&(F(n,"started"),function(n,t,e,r){let o=e.offsetLeft-89;console.log(o);const a=(n-o)/(t/1e3*60),c=e,u=()=>N(this,void 0,void 0,(function*(){if(o+=a,c.style.transform=`translateX(${o}px)`,o<n&&"started"===s.carStatus.get(r))requestAnimationFrame(u);else if("stopped"===s.carStatus.get(r))c.style.transform="translateX(0px)";else if(s.isRace&&"started"===s.carStatus.get(r)){s.isRace=!1,D(yield Q(r),t),yield function(n,t){return q(this,void 0,void 0,(function*(){const e=yield function(n){return q(this,void 0,void 0,(function*(){return(yield fetch(`${i}/${n}`)).json()}))}(n);e.id?(e.wins+=1,e.time=e.time<t?e.time:t,yield function(n,t){return q(this,void 0,void 0,(function*(){return(yield fetch(`${i}/${n}`,{method:"PUT",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}})).json()}))}(n,e)):yield function(n){return q(this,void 0,void 0,(function*(){return(yield fetch(`${i}`,{method:"POST",body:JSON.stringify(n),headers:{"Content-Type":"application/json"}})).json()}))}({id:Number(n),wins:1,time:t})}))}(r,t/1e3);const n=yield K(s.pageWinners,s.sort,s.order);yield $(n)}}));u()}(a,o,c,n))}))}function Z(n){return N(this,void 0,void 0,(function*(){F(n,"stopped"),z("button-start",!0,n),z("button-stop",!1,n);const t=V(n);yield function(n){return q(this,void 0,void 0,(function*(){return(yield fetch(`${r}?id=${n}&status=stopped`,{method:"PATCH"})).json()}))}(n),t&&(t.style.transform="translateX(0px)")}))}function J(n,t,e){var r;n.has(t)?null===(r=n.get(t))||void 0===r||r.push(e):n.set(t,[e])}function U(n){var t;null===(t=new Set(W.get(n)))||void 0===t||t.forEach((n=>{O.delete(n)}))}function I(n,t,e,r,i,o){if(n&&t&&"string"==typeof n&&t instanceof HTMLElement){const a=document.createElement(n);if(e&&a.classList.add(...e),a.textContent=r||"",i)for(let n=0;n<i.length;n+=1)a.setAttribute(...i[n]);return t.appendChild(a),function(n,t){n&&n.classList&&n.classList.forEach((e=>{J(O,e,n),t&&J(W,t,e)}))}(a,o),a}throw new Error("You gave me a wrong data !")}var q=function(n,t,e,r){return new(e||(e=Promise))((function(i,o){function a(n){try{s(r.next(n))}catch(n){o(n)}}function c(n){try{s(r.throw(n))}catch(n){o(n)}}function s(n){var t;n.done?i(n.value):(t=n.value,t instanceof e?t:new e((function(n){n(t)}))).then(a,c)}s((r=r.apply(n,t||[])).next())}))};function Q(n){return q(this,void 0,void 0,(function*(){return(yield fetch(`${t}/${n}`)).json()}))}function Y(n){return q(this,void 0,void 0,(function*(){return(yield fetch(t,{method:"POST",body:JSON.stringify(n),headers:{"Content-Type":"application/json"}})).json()}))}function K(n,t,e,r=10){return q(this,void 0,void 0,(function*(){const o=yield fetch(`${i}?_page=${n}&_limit=${r}${function(n,t){return n&&t?`&_sort=${n}&_order=${t}`:""}(t,e)}`),a=yield o.json();return{items:yield Promise.all(a.map((n=>q(this,void 0,void 0,(function*(){return Object.assign(Object.assign({},n),{car:yield Q(n.id.toString())})}))))),count:o.headers.get("X-Total-Count")}}))}const nn=function(n,e=7){return q(this,void 0,void 0,(function*(){const r=yield fetch(`${t}?_page=${n}&_limit=${e}`);return{items:yield r.json(),count:r.headers.get("X-Total-Count")}}))};var tn=e(379),en=e.n(tn),rn=e(767);en()(rn.Z,{insert:"head",singleton:!1}),rn.Z.locals;const on=function(n,t){return e=this,r=void 0,a=function*(){!function(){const n=I("div",document.body,[o,"upper-layer"]);I("button",n,["button","garage-button","inactive"],"TO GARAGE"),I("button",n,["button","winners-button"],"TO WINNERS")}(),yield h(n),yield E(t),I("div",document.body,["split-layer"])},new((i=void 0)||(i=Promise))((function(n,t){function o(n){try{s(a.next(n))}catch(n){t(n)}}function c(n){try{s(a.throw(n))}catch(n){t(n)}}function s(t){var e;t.done?n(t.value):(e=t.value,e instanceof i?e:new i((function(n){n(e)}))).then(o,c)}s((a=a.apply(e,r||[])).next())}));var e,r,i,a};!function(){var n,t,e,r;n=this,t=void 0,r=function*(){const n=nn(s.page),t=yield K(s.pageWinners,s.sort,s.order);yield on(n,t),M(),T()},new((e=void 0)||(e=Promise))((function(i,o){function a(n){try{s(r.next(n))}catch(n){o(n)}}function c(n){try{s(r.throw(n))}catch(n){o(n)}}function s(n){var t;n.done?i(n.value):(t=n.value,t instanceof e?t:new e((function(n){n(t)}))).then(a,c)}s((r=r.apply(n,t||[])).next())}))}()})()})();