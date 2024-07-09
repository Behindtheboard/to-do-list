(()=>{"use strict";var n={208:(n,t,e)=>{e.d(t,{A:()=>f});var o=e(601),r=e.n(o),i=e(314),a=e.n(i),s=e(417),c=e.n(s),d=new URL(e(264),e.b),u=new URL(e(110),e.b),l=a()(r()),p=c()(d),m=c()(u);l.push([n.id,`/* CSS Reset */\n    html {\n    line-height: 1; /* 1 */\n    -webkit-text-size-adjust: 100%; /* 2 */\n    }\n    \n    body {\n    margin: 0;\n    }\n    \n    main {\n    display: block;\n    }\n    \n    h1 {\n    font-size: 2em;\n    margin: 0.67em 0;\n    }\n    \n    hr {\n    box-sizing: content-box; /* 1 */\n    height: 0; /* 1 */\n    overflow: visible; /* 2 */\n    }\n    \n    pre {\n    font-family: monospace, monospace; /* 1 */\n    font-size: 1em; /* 2 */\n    }\n    \n    a {\n    background-color: transparent;\n    }\n    \n    abbr[title] {\n    border-bottom: none; /* 1 */\n    text-decoration: underline; /* 2 */\n    text-decoration: underline dotted; /* 2 */\n    }\n    \n    b,\n    strong {\n    font-weight: bold;\n    }\n    \n    code,\n    kbd,\n    samp {\n    font-family: monospace, monospace; /* 1 */\n    font-size: 1em; /* 2 */\n    }\n    \n    small {\n    font-size: 80%;\n    }\n    \n    sub,\n    sup {\n    font-size: 75%;\n    line-height: 0;\n    position: relative;\n    vertical-align: baseline;\n    }\n    \n    sub {\n    bottom: -0.25em;\n    }\n    \n    sup {\n    top: -0.5em;\n    }\n    \n    img {\n    border-style: none;\n    }\n    \n    button,\n    input,\n    optgroup,\n    select,\n    textarea {\n    font-family: inherit; /* 1 */\n    font-size: 100%; /* 1 */\n    line-height: 1.15; /* 1 */\n    margin: 0; /* 2 */\n    }\n    \n    button,\n    input { /* 1 */\n    overflow: visible;\n    }\n    \n    button,\n    select {\n    text-transform: none;\n    }\n    \n    button,\n    [type="button"],\n    [type="reset"],\n    [type="submit"] {\n    -webkit-appearance: button;\n    }\n    \n    button::-moz-focus-inner,\n    [type="button"]::-moz-focus-inner,\n    [type="reset"]::-moz-focus-inner,\n    [type="submit"]::-moz-focus-inner {\n    border-style: none;\n    padding: 0;\n    }\n    \n    button:-moz-focusring,\n    [type="button"]:-moz-focusring,\n    [type="reset"]:-moz-focusring,\n    [type="submit"]:-moz-focusring {\n    outline: 1px dotted ButtonText;\n    }\n    \n    fieldset {\n    padding: 0.35em 0.75em 0.625em;\n    }\n    \n    legend {\n    box-sizing: border-box; /* 1 */\n    color: inherit; /* 2 */\n    display: table; /* 1 */\n    max-width: 100%; /* 1 */\n    padding: 0; /* 3 */\n    white-space: normal; /* 1 */\n    }\n    \n    progress {\n    vertical-align: baseline;\n    }\n    \n    textarea {\n    overflow: auto;\n    }\n    \n    [type="checkbox"],\n    [type="radio"] {\n    box-sizing: border-box; /* 1 */\n    padding: 0; /* 2 */\n    }\n    \n    [type="number"]::-webkit-inner-spin-button,\n    [type="number"]::-webkit-outer-spin-button {\n    height: auto;\n    }\n    \n    [type="search"] {\n    -webkit-appearance: textfield; /* 1 */\n    outline-offset: -2px; /* 2 */\n    }\n    \n    [type="search"]::-webkit-search-decoration {\n    -webkit-appearance: none;\n    }\n    \n    ::-webkit-file-upload-button {\n    -webkit-appearance: button; /* 1 */\n    font: inherit; /* 2 */\n    }\n    \n    details {\n    display: block;\n    }\n    \n    summary {\n    display: list-item;\n    }\n    \n    template {\n    display: none;\n    }\n    \n    [hidden] {\n    display: none;\n    }\n\n@font-face {\n    font-family: 'Open Sans';\n    src: url(${p}) format('woff2'),\n        url(${m}) format('woff');\n    font-weight: 600;\n    font-style: normal;\n    font-display: swap;\n}\n\nbody {\n    display: grid;\n    grid-template: 100vh / 30vw 70vw;\n    color: white;\n    font-family: 'Open Sans';\n    font-size: 16px;\n}\n\n#container, #sidebar, #list-display, #task-list-display, [id$="-display"] {\n    display: flex;\n    flex-direction: column;\n    justify-content: start;\n}\n\nh1, h2 {\n    font-size: 3rem;\n    text-align: center;\n    margin-bottom: 30px;\n}\n\n#sidebar {\n    grid-area: 1 / 1;\n    background-color: rgb(98, 97, 97);\n}\n\n#container {\n    grid-area: 1 / 2;\n    background-color: black;\n}\n\n[id$="-list-display"] {\n    align-items: center;\n}\n\n\n[id$="task-display"], #new-task-button {\n    min-width: 200px;\n    max-width: 600px;\n    width: 50%;\n}\n\n#new-task-button {\n    height: 32px;\n}\n\n#task {\n    display: flex;\n    justify-content: space-between;\n    padding-top: 10px;\n    padding-bottom: 10px;\n    height: 30px;\n}\n\n[id$="-checkbox"] {\n    height: 32px;\n    width: 32px;\n}\n\n#task label {\n    align-self: center;\n    font-size: 1.5rem;\n}\n\n[id$="info-button"] {\n    height: 32px;\n    width: 32px;\n    border-radius: 16px;\n    border: none;\n}`,""]);const f=l},314:n=>{n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e="",o=void 0!==t[5];return t[4]&&(e+="@supports (".concat(t[4],") {")),t[2]&&(e+="@media ".concat(t[2]," {")),o&&(e+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),e+=n(t),o&&(e+="}"),t[2]&&(e+="}"),t[4]&&(e+="}"),e})).join("")},t.i=function(n,e,o,r,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(o)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var d=0;d<n.length;d++){var u=[].concat(n[d]);o&&a[u[0]]||(void 0!==i&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=i),e&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=e):u[2]=e),r&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=r):u[4]="".concat(r)),t.push(u))}},t}},417:n=>{n.exports=function(n,t){return t||(t={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),t.hash&&(n+=t.hash),/["'() \t\n]|(%20)/.test(n)||t.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var t=[];function e(n){for(var e=-1,o=0;o<t.length;o++)if(t[o].identifier===n){e=o;break}return e}function o(n,o){for(var i={},a=[],s=0;s<n.length;s++){var c=n[s],d=o.base?c[0]+o.base:c[0],u=i[d]||0,l="".concat(d," ").concat(u);i[d]=u+1;var p=e(l),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var f=r(m,o);o.byIndex=s,t.splice(s,0,{identifier:l,updater:f,references:1})}a.push(l)}return a}function r(n,t){var e=t.domAPI(t);return e.update(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap&&t.supports===n.supports&&t.layer===n.layer)return;e.update(n=t)}else e.remove()}}n.exports=function(n,r){var i=o(n=n||[],r=r||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var s=e(i[a]);t[s].references--}for(var c=o(n,r),d=0;d<i.length;d++){var u=e(i[d]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}i=c}}},659:n=>{var t={};n.exports=function(n,e){var o=function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}t[n]=e}return t[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(e)}},540:n=>{n.exports=function(n){var t=document.createElement("style");return n.setAttributes(t,n.attributes),n.insert(t,n.options),t}},56:(n,t,e)=>{n.exports=function(n){var t=e.nc;t&&n.setAttribute("nonce",t)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=n.insertStyleElement(n);return{update:function(e){!function(n,t,e){var o="";e.supports&&(o+="@supports (".concat(e.supports,") {")),e.media&&(o+="@media ".concat(e.media," {"));var r=void 0!==e.layer;r&&(o+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),o+=e.css,r&&(o+="}"),e.media&&(o+="}"),e.supports&&(o+="}");var i=e.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(o,n,t.options)}(t,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)}}}},113:n=>{n.exports=function(n,t){if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}},110:(n,t,e)=>{n.exports=e.p+"dd54b1f7f67a5ab97676.woff"},264:(n,t,e)=>{n.exports=e.p+"c15dd3d94cdef9852e83.woff2"}},t={};function e(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={id:o,exports:{}};return n[o](i,i.exports,e),i.exports}e.m=n,e.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return e.d(t,{a:t}),t},e.d=(n,t)=>{for(var o in t)e.o(t,o)&&!e.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:t[o]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),e.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),(()=>{var n;e.g.importScripts&&(n=e.g.location+"");var t=e.g.document;if(!n&&t&&(t.currentScript&&(n=t.currentScript.src),!n)){var o=t.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&(!n||!/^http(s?):/.test(n));)n=o[r--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=n})(),e.b=document.baseURI||self.location.href,e.nc=void 0;var o=e(72),r=e.n(o),i=e(825),a=e.n(i),s=e(659),c=e.n(s),d=e(56),u=e.n(d),l=e(540),p=e.n(l),m=e(113),f=e.n(m),b=e(208),h={};function y(n){const t=[];return{name:n,taskList:t,newTask:function(n){t.push(n)}}}h.styleTagTransform=f(),h.setAttributes=u(),h.insert=c().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=p(),r()(b.A,h),b.A&&b.A.locals&&b.A.locals;class g{constructor(n){this.name=n,this.done=!1,this.priority="low"}getDone(){return this.done}setDone(){this.done=!0}undoDone(){this.done=!1}getPriority(){return this.priority}setPriority(n){this.priority=n}}function v(n){const t=document.querySelector("#container");t.innerHTML="";const e=document.createElement("div");e.setAttribute("id",`${n.name.replace(/\s+/g,"")}-list-display`),t.appendChild(e);const o=document.createElement("h2");o.textContent=n.name,e.appendChild(o);const r=document.createElement("div");r.setAttribute("id",`${n.name.replace(/\s+/g,"")}-task-display`),e.appendChild(r);const i=document.createElement("button");i.setAttribute("id","new-task-button"),i.textContent="New Task",e.appendChild(i)}function x(n){n.taskList.forEach((t=>{const e=document.querySelector(`#${n.name.replace(/\s+/g,"")}-task-display`),o=document.createElement("div");o.setAttribute("id","task"),e.appendChild(o);const r=document.createElement("input");r.setAttribute("type","checkbox"),r.setAttribute("id",`${t.name.replace(/\s+/g,"")}-checkbox`),r.setAttribute("value","true");const i=document.createElement("label");i.setAttribute("for","task"),i.textContent=t.name,o.appendChild(r),o.appendChild(i);const a=document.createElement("button");a.setAttribute("id",`${t.name.replace(/\s+/g,"")}-info-button`),a.textContent="i",o.appendChild(a)}))}const w=function(){const n=[];return{library:n,getLibrary:function(){return n},addList:function(t){n.push(t)}}}(),k=y("Default"),C=new g("New Task");k.newTask(C),v(k),x(k),w.addList(k);const A=y("groceries"),E=new g("apple");A.newTask(E),w.addList(A),function(n){const t=document.querySelector("#list-library-display");document.querySelector("#sidebar").appendChild(t),n.library.forEach((n=>{const e=document.createElement("button");e.setAttribute("id",`${n.name.replace(/\s+/g,"")}-list-button`),e.classList.add("list-button"),e.textContent=n.name,t.appendChild(e)}))}(w),w.library.forEach((n=>{document.querySelector(`#${n.name.replace(/\s+/g,"")}-list-button`).addEventListener("click",(()=>{v(n),x(n)}))})),function(n){const t=document.createElement("dialog");t.setAttribute("id","new-task-dialog"),document.querySelector("#container").appendChild(t);const e=document.createElement("form");e.setAttribute("method","dialog"),e.setAttribute("id","new-task-form"),t.appendChild(e);const o=document.createElement("div"),r=document.createElement("label");r.setAttribute("for","task-name-input"),r.textContent="Task Name";const i=document.createElement("input");i.setAttribute("type","text"),i.setAttribute("id","task-name-input"),i.setAttribute("name","task-name-input"),i.required=!0,o.appendChild(r),o.appendChild(i);const a=document.createElement("div"),s=document.createElement("label");s.setAttribute("for","priority-input"),s.textContent="Priority";const c=document.createElement("select");c.setAttribute("name","priority"),c.setAttribute("id","priority-input");const d=document.createElement("option");d.setAttribute("value","1"),d.textContent="Low";const u=document.createElement("option");u.setAttribute("value","2"),u.textContent="Mid";const l=document.createElement("option");l.setAttribute("value","3"),l.textContent="High",c.appendChild(d),c.appendChild(u),c.appendChild(l),a.appendChild(s),a.appendChild(c);const p=document.createElement("div"),m=document.createElement("button");m.setAttribute("type","submit"),m.setAttribute("id","add-task-button"),m.textContent="Add";const f=document.createElement("button");f.setAttribute("id","nvm-button"),f.textContent="Nvm",p.appendChild(m),p.appendChild(f),e.appendChild(o),e.appendChild(a),e.appendChild(p),document.querySelector("#new-task-button").addEventListener("click",(()=>{t.showModal()})),n.library.forEach((n=>{document.querySelector("#add-task-button").addEventListener("click",(()=>{const t=new g(i.value);n.newTask(t),x(n)}))}))}(w)})();