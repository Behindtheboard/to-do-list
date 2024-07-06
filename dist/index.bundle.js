(()=>{"use strict";var n={208:(n,e,t)=>{t.d(e,{A:()=>m});var o=t(601),r=t.n(o),i=t(314),a=t.n(i),s=t(417),c=t.n(s),l=new URL(t(264),t.b),u=new URL(t(110),t.b),d=a()(r()),p=c()(l),f=c()(u);d.push([n.id,`/* CSS Reset */\n    html {\n    line-height: 1; /* 1 */\n    -webkit-text-size-adjust: 100%; /* 2 */\n    }\n    \n    body {\n    margin: 0;\n    }\n    \n    main {\n    display: block;\n    }\n    \n    h1 {\n    font-size: 2em;\n    margin: 0.67em 0;\n    }\n    \n    hr {\n    box-sizing: content-box; /* 1 */\n    height: 0; /* 1 */\n    overflow: visible; /* 2 */\n    }\n    \n    pre {\n    font-family: monospace, monospace; /* 1 */\n    font-size: 1em; /* 2 */\n    }\n    \n    a {\n    background-color: transparent;\n    }\n    \n    abbr[title] {\n    border-bottom: none; /* 1 */\n    text-decoration: underline; /* 2 */\n    text-decoration: underline dotted; /* 2 */\n    }\n    \n    b,\n    strong {\n    font-weight: bold;\n    }\n    \n    code,\n    kbd,\n    samp {\n    font-family: monospace, monospace; /* 1 */\n    font-size: 1em; /* 2 */\n    }\n    \n    small {\n    font-size: 80%;\n    }\n    \n    sub,\n    sup {\n    font-size: 75%;\n    line-height: 0;\n    position: relative;\n    vertical-align: baseline;\n    }\n    \n    sub {\n    bottom: -0.25em;\n    }\n    \n    sup {\n    top: -0.5em;\n    }\n    \n    img {\n    border-style: none;\n    }\n    \n    button,\n    input,\n    optgroup,\n    select,\n    textarea {\n    font-family: inherit; /* 1 */\n    font-size: 100%; /* 1 */\n    line-height: 1.15; /* 1 */\n    margin: 0; /* 2 */\n    }\n    \n    button,\n    input { /* 1 */\n    overflow: visible;\n    }\n    \n    button,\n    select {\n    text-transform: none;\n    }\n    \n    button,\n    [type="button"],\n    [type="reset"],\n    [type="submit"] {\n    -webkit-appearance: button;\n    }\n    \n    button::-moz-focus-inner,\n    [type="button"]::-moz-focus-inner,\n    [type="reset"]::-moz-focus-inner,\n    [type="submit"]::-moz-focus-inner {\n    border-style: none;\n    padding: 0;\n    }\n    \n    button:-moz-focusring,\n    [type="button"]:-moz-focusring,\n    [type="reset"]:-moz-focusring,\n    [type="submit"]:-moz-focusring {\n    outline: 1px dotted ButtonText;\n    }\n    \n    fieldset {\n    padding: 0.35em 0.75em 0.625em;\n    }\n    \n    legend {\n    box-sizing: border-box; /* 1 */\n    color: inherit; /* 2 */\n    display: table; /* 1 */\n    max-width: 100%; /* 1 */\n    padding: 0; /* 3 */\n    white-space: normal; /* 1 */\n    }\n    \n    progress {\n    vertical-align: baseline;\n    }\n    \n    textarea {\n    overflow: auto;\n    }\n    \n    [type="checkbox"],\n    [type="radio"] {\n    box-sizing: border-box; /* 1 */\n    padding: 0; /* 2 */\n    }\n    \n    [type="number"]::-webkit-inner-spin-button,\n    [type="number"]::-webkit-outer-spin-button {\n    height: auto;\n    }\n    \n    [type="search"] {\n    -webkit-appearance: textfield; /* 1 */\n    outline-offset: -2px; /* 2 */\n    }\n    \n    [type="search"]::-webkit-search-decoration {\n    -webkit-appearance: none;\n    }\n    \n    ::-webkit-file-upload-button {\n    -webkit-appearance: button; /* 1 */\n    font: inherit; /* 2 */\n    }\n    \n    details {\n    display: block;\n    }\n    \n    summary {\n    display: list-item;\n    }\n    \n    template {\n    display: none;\n    }\n    \n    [hidden] {\n    display: none;\n    }\n\n@font-face {\n    font-family: 'Open Sans';\n    src: url(${p}) format('woff2'),\n        url(${f}) format('woff');\n    font-weight: 600;\n    font-style: normal;\n    font-display: swap;\n}\n\nbody {\n    display: grid;\n    grid-template: 100vh / 30vw 70vw;\n    color: white;\n    font-family: 'Open Sans';\n    font-size: 16px;\n}\n\n#container, #sidebar, #list-display, #task-list-display, [id$="-display"] {\n    display: flex;\n    flex-direction: column;\n    justify-content: start;\n}\n\nh1, h2 {\n    font-size: 2rem;\n    text-align: center;\n    margin-bottom: 30px;\n}\n\n#sidebar {\n    grid-area: 1 / 1;\n    background-color: rgb(98, 97, 97);\n}\n\n#container {\n    grid-area: 1 / 2;\n    background-color: black;\n}\n\n[id$="-list-display"] {\n    align-items: center;\n}\n\n\n[id$="task-display"] {\n    min-width: 200px;\n    max-width: 600px;\n    width: 50%;\n}\n\n#task {\n    padding: 10px;\n}\n\n#task label {\n    padding-left: 10px;\n}`,""]);const m=d},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(o)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var l=0;l<n.length;l++){var u=[].concat(n[l]);o&&a[u[0]]||(void 0!==i&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=i),t&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=t):u[2]=t),r&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=r):u[4]="".concat(r)),e.push(u))}},e}},417:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var i={},a=[],s=0;s<n.length;s++){var c=n[s],l=o.base?c[0]+o.base:c[0],u=i[l]||0,d="".concat(l," ").concat(u);i[l]=u+1;var p=t(d),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var m=r(f,o);o.byIndex=s,e.splice(s,0,{identifier:d,updater:m,references:1})}a.push(d)}return a}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var i=o(n=n||[],r=r||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var s=t(i[a]);e[s].references--}for(var c=o(n,r),l=0;l<i.length;l++){var u=t(i[l]);0===e[u].references&&(e[u].updater(),e.splice(u,1))}i=c}}},659:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},110:(n,e,t)=>{n.exports=t.p+"dd54b1f7f67a5ab97676.woff"},264:(n,e,t)=>{n.exports=t.p+"c15dd3d94cdef9852e83.woff2"}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={id:o,exports:{}};return n[o](i,i.exports,t),i.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&(!n||!/^http(s?):/.test(n));)n=o[r--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0;var o=t(72),r=t.n(o),i=t(825),a=t.n(i),s=t(659),c=t.n(s),l=t(56),u=t.n(l),d=t(540),p=t.n(d),f=t(113),m=t.n(f),b=t(208),h={};function y(n){const e=[];return{name:n,taskList:e,newTask:function(n){e.push(n)}}}h.styleTagTransform=m(),h.setAttributes=u(),h.insert=c().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=p(),r()(b.A,h),b.A&&b.A.locals&&b.A.locals;class g{constructor(n){this.name=n,this.done=!1,this.priority="low"}getDone(){return this.done}setDone(){this.done=!0}undoDone(){this.done=!1}getPriority(){return this.priority}setPriority(n){this.priority=n}}const v=function(){const n=[];return{library:n,getLibrary:function(){return n},addList:function(e){n.push(e)}}}(),w=y("Default"),x=y("groceries"),k=new g("New Task"),z=new g("do hw"),C=new g("apple");w.newTask(k),w.newTask(z),x.newTask(C),console.log(x.taskList),function(n){const e=document.querySelector("#container");e.innerHTML="";const t=document.createElement("div");t.setAttribute("id",`${n.name.replace(/\s+/g,"")}-list-display`),e.appendChild(t);const o=document.createElement("h2");o.textContent=n.name,t.appendChild(o);const r=document.createElement("div");r.setAttribute("id",`${n.name.replace(/\s+/g,"")}-task-display`),t.appendChild(r)}(x),function(n){n.taskList.forEach((e=>{const t=document.querySelector(`#${n.name.replace(/\s+/g,"")}-task-display`),o=document.createElement("div");o.setAttribute("id","task"),t.appendChild(o);const r=document.createElement("input");r.setAttribute("type","checkbox"),r.setAttribute("id",`${e.name.replace(/\s+/g,"")}-checkbox`),r.setAttribute("value","true");const i=document.createElement("label");i.setAttribute("for","task"),i.textContent=e.name,o.appendChild(r),o.appendChild(i)}))}(x),v.addList(w),v.addList(x),console.log(v.library),function(n){const e=document.querySelector("#list-library-display");document.querySelector("#sidebar").appendChild(e),n.library.forEach((n=>{const t=document.createElement("button");t.setAttribute("id",`${n.name.replace(/\s+/g,"")}-list-button`),t.textContent=n.name,e.appendChild(t)}))}(v)})();