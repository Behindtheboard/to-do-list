(()=>{"use strict";var t={208:(t,e,n)=>{n.d(e,{A:()=>b});var i=n(601),o=n.n(i),r=n(314),a=n.n(r),d=n(417),s=n.n(d),c=new URL(n(264),n.b),u=new URL(n(110),n.b),l=a()(o()),p=s()(c),m=s()(u);l.push([t.id,`/* CSS Reset */\n    html {\n    line-height: 1; /* 1 */\n    -webkit-text-size-adjust: 100%; /* 2 */\n    }\n    \n    body {\n    margin: 0;\n    }\n    \n    main {\n    display: block;\n    }\n    \n    h1 {\n    font-size: 2em;\n    margin: 0.67em 0;\n    }\n    \n    hr {\n    box-sizing: content-box; /* 1 */\n    height: 0; /* 1 */\n    overflow: visible; /* 2 */\n    }\n    \n    pre {\n    font-family: monospace, monospace; /* 1 */\n    font-size: 1em; /* 2 */\n    }\n    \n    a {\n    background-color: transparent;\n    }\n    \n    abbr[title] {\n    border-bottom: none; /* 1 */\n    text-decoration: underline; /* 2 */\n    text-decoration: underline dotted; /* 2 */\n    }\n    \n    b,\n    strong {\n    font-weight: bold;\n    }\n    \n    code,\n    kbd,\n    samp {\n    font-family: monospace, monospace; /* 1 */\n    font-size: 1em; /* 2 */\n    }\n    \n    small {\n    font-size: 80%;\n    }\n    \n    sub,\n    sup {\n    font-size: 75%;\n    line-height: 0;\n    position: relative;\n    vertical-align: baseline;\n    }\n    \n    sub {\n    bottom: -0.25em;\n    }\n    \n    sup {\n    top: -0.5em;\n    }\n    \n    img {\n    border-style: none;\n    }\n    \n    button,\n    input,\n    optgroup,\n    select,\n    textarea {\n    font-family: inherit; /* 1 */\n    font-size: 100%; /* 1 */\n    line-height: 1.15; /* 1 */\n    margin: 0; /* 2 */\n    }\n    \n    button,\n    input { /* 1 */\n    overflow: visible;\n    }\n    \n    button,\n    select {\n    text-transform: none;\n    }\n    \n    button,\n    [type="button"],\n    [type="reset"],\n    [type="submit"] {\n    -webkit-appearance: button;\n    }\n    \n    button::-moz-focus-inner,\n    [type="button"]::-moz-focus-inner,\n    [type="reset"]::-moz-focus-inner,\n    [type="submit"]::-moz-focus-inner {\n    border-style: none;\n    padding: 0;\n    }\n    \n    button:-moz-focusring,\n    [type="button"]:-moz-focusring,\n    [type="reset"]:-moz-focusring,\n    [type="submit"]:-moz-focusring {\n    outline: 1px dotted ButtonText;\n    }\n    \n    fieldset {\n    padding: 0.35em 0.75em 0.625em;\n    }\n    \n    legend {\n    box-sizing: border-box; /* 1 */\n    color: inherit; /* 2 */\n    display: table; /* 1 */\n    max-width: 100%; /* 1 */\n    padding: 0; /* 3 */\n    white-space: normal; /* 1 */\n    }\n    \n    progress {\n    vertical-align: baseline;\n    }\n    \n    textarea {\n    overflow: auto;\n    }\n    \n    [type="checkbox"],\n    [type="radio"] {\n    box-sizing: border-box; /* 1 */\n    padding: 0; /* 2 */\n    }\n    \n    [type="number"]::-webkit-inner-spin-button,\n    [type="number"]::-webkit-outer-spin-button {\n    height: auto;\n    }\n    \n    [type="search"] {\n    -webkit-appearance: textfield; /* 1 */\n    outline-offset: -2px; /* 2 */\n    }\n    \n    [type="search"]::-webkit-search-decoration {\n    -webkit-appearance: none;\n    }\n    \n    ::-webkit-file-upload-button {\n    -webkit-appearance: button; /* 1 */\n    font: inherit; /* 2 */\n    }\n    \n    details {\n    display: block;\n    }\n    \n    summary {\n    display: list-item;\n    }\n    \n    template {\n    display: none;\n    }\n    \n    [hidden] {\n    display: none;\n    }\n\n@font-face {\n    font-family: 'Open Sans';\n    src: url(${p}) format('woff2'),\n        url(${m}) format('woff');\n    font-weight: 600;\n    font-style: normal;\n    font-display: swap;\n}\n\nbody {\n    display: grid;\n    grid-template: 100vh / 30vw 70vw;\n    color: white;\n    font-family: 'Open Sans';\n    font-size: 16px;\n}\n\n#container, #sidebar, #list-display, #task-list-display, [id$="-display"] {\n    display: flex;\n    flex-direction: column;\n    justify-content: start;\n}\n\nh1, h2 {\n    font-size: 3rem;\n    text-align: center;\n    margin-bottom: 30px;\n}\n\n#sidebar {\n    grid-area: 1 / 1;\n    background-color: rgb(98, 97, 97);\n}\n\n#container {\n    grid-area: 1 / 2;\n    background-color: black;\n}\n\n[id$="-list-display"] {\n    align-items: center;\n}\n\n\n[id$="task-display"], #new-task-button {\n    min-width: 200px;\n    max-width: 600px;\n    width: 50%;\n}\n\n#new-task-button {\n    height: 32px;\n}\n\n.task-display {\n    display: flex;\n    justify-content: space-between;\n    padding-top: 10px;\n    padding-bottom: 10px;\n    height: 30px;\n}\n\n[id$="-checkbox"] {\n    height: 32px;\n    width: 32px;\n}\n\n.task-display label, .task-display div {\n    align-self: center;\n    font-size: 1.5rem;\n}\n\n[id$="info-button"] {\n    height: 32px;\n    width: 32px;\n    border-radius: 16px;\n    border: none;\n}`,""]);const b=l},314:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",i=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),i&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),i&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,i,o,r){"string"==typeof t&&(t=[[null,t,void 0]]);var a={};if(i)for(var d=0;d<this.length;d++){var s=this[d][0];null!=s&&(a[s]=!0)}for(var c=0;c<t.length;c++){var u=[].concat(t[c]);i&&a[u[0]]||(void 0!==r&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=r),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),e.push(u))}},e}},417:t=>{t.exports=function(t,e){return e||(e={}),t?(t=String(t.__esModule?t.default:t),/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]|(%20)/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t):t}},601:t=>{t.exports=function(t){return t[1]}},72:t=>{var e=[];function n(t){for(var n=-1,i=0;i<e.length;i++)if(e[i].identifier===t){n=i;break}return n}function i(t,i){for(var r={},a=[],d=0;d<t.length;d++){var s=t[d],c=i.base?s[0]+i.base:s[0],u=r[c]||0,l="".concat(c," ").concat(u);r[c]=u+1;var p=n(l),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(m);else{var b=o(m,i);i.byIndex=d,e.splice(d,0,{identifier:l,updater:b,references:1})}a.push(l)}return a}function o(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,o){var r=i(t=t||[],o=o||{});return function(t){t=t||[];for(var a=0;a<r.length;a++){var d=n(r[a]);e[d].references--}for(var s=i(t,o),c=0;c<r.length;c++){var u=n(r[c]);0===e[u].references&&(e[u].updater(),e.splice(u,1))}r=s}}},659:t=>{var e={};t.exports=function(t,n){var i=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}},540:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},56:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},825:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var i="";n.supports&&(i+="@supports (".concat(n.supports,") {")),n.media&&(i+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(i+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),i+=n.css,o&&(i+="}"),n.media&&(i+="}"),n.supports&&(i+="}");var r=n.sourceMap;r&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleTagTransform(i,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},113:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}},110:(t,e,n)=>{t.exports=n.p+"dd54b1f7f67a5ab97676.woff"},264:(t,e,n)=>{t.exports=n.p+"c15dd3d94cdef9852e83.woff2"}},e={};function n(i){var o=e[i];if(void 0!==o)return o.exports;var r=e[i]={id:i,exports:{}};return t[i](r,r.exports,n),r.exports}n.m=t,n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t;n.g.importScripts&&(t=n.g.location+"");var e=n.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var i=e.getElementsByTagName("script");if(i.length)for(var o=i.length-1;o>-1&&(!t||!/^http(s?):/.test(t));)t=i[o--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=t})(),n.b=document.baseURI||self.location.href,n.nc=void 0;var i=n(72),o=n.n(i),r=n(825),a=n.n(r),d=n(659),s=n.n(d),c=n(56),u=n.n(c),l=n(540),p=n.n(l),m=n(113),b=n.n(m),h=n(208),f={};function y(t){const e=[];return{name:t,taskList:e,newTask:function(t){e.push(t)}}}f.styleTagTransform=b(),f.setAttributes=u(),f.insert=s().bind(null,"head"),f.domAPI=a(),f.insertStyleElement=p(),o()(h.A,f),h.A&&h.A.locals&&h.A.locals;class v{constructor(t){this.name=t,this.done=!1,this.priority="Low",this.dueDate=""}getName(){return this.name}setName(t){this.name=t}getDone(){return this.done}setDone(){this.done=!0}undoDone(){this.done=!1}getPriority(){return this.priority}setPriority(t){this.priority=t}getDueDate(){return this.dueDate}setDueDate(t){this.dueDate=t}}function g(t){const e=document.querySelector("#container");e.innerHTML="";const n=document.createElement("div");n.setAttribute("id",`${t.name.replace(/\s+/g,"")}-list-display`),e.appendChild(n);const i=document.createElement("h2");i.textContent=t.name,n.appendChild(i);const o=document.createElement("div");o.setAttribute("id",`${t.name.replace(/\s+/g,"")}-task-display`),n.appendChild(o);const r=document.createElement("button");r.setAttribute("id","new-task-button"),r.textContent="New Task",n.appendChild(r)}function C(t){t.taskList.forEach((e=>{const n=document.querySelector(`#${t.name.replace(/\s+/g,"")}-task-display`),i=document.createElement("div");i.classList.add("task-display"),n.appendChild(i);const o=document.createElement("input");o.setAttribute("type","checkbox"),o.setAttribute("id",`${e.name.replace(/\s+/g,"")}-checkbox`),o.setAttribute("value","true"),i.appendChild(o);const r=document.createElement("div");r.setAttribute("id",`${e.name.replace(/\s+/g,"")}`),r.textContent=e.name,i.appendChild(r);const a=document.createElement("div");a.setAttribute("id",`${e.name.replace(/\s+/g,"")}-priority-display`),a.textContent=e.getPriority(),i.appendChild(a);const d=document.createElement("div");d.setAttribute("id",`${e.name.replace(/\s+/g,"")}-due-date-display`),d.textContent=e.getDueDate(),i.appendChild(d);const s=document.createElement("button");s.setAttribute("id",`${e.name.replace(/\s+/g,"")}-info-button`),s.textContent="i",i.appendChild(s)}))}function x(t){const e=document.querySelector("#list-library-display");t.library.forEach((t=>{const n=document.createElement("button");n.setAttribute("id",`${t.name.replace(/\s+/g,"")}-list-button`),n.classList.add("list-button"),n.textContent=t.name,e.appendChild(n)}))}function w(t){const e=document.createElement("dialog");e.setAttribute("id","new-task-dialog"),document.querySelector("#container").appendChild(e);const n=document.createElement("form");n.setAttribute("method","dialog"),n.setAttribute("id","new-task-form"),e.appendChild(n);const i=document.createElement("div"),o=document.createElement("label");o.setAttribute("for","task-name-input"),o.textContent="Task Name";const r=document.createElement("input");r.setAttribute("type","text"),r.setAttribute("id","task-name-input"),r.setAttribute("name","task-name-input"),r.required=!0,i.appendChild(o),i.appendChild(r);const a=document.createElement("div"),d=document.createElement("label");d.setAttribute("for","priority-input"),d.textContent="Priority";const s=document.createElement("select");s.setAttribute("name","priority"),s.setAttribute("id","priority-input");const c=document.createElement("option");c.setAttribute("value","Low"),c.textContent="Low";const u=document.createElement("option");u.setAttribute("value","Mid"),u.textContent="Mid";const l=document.createElement("option");l.setAttribute("value","High"),l.textContent="High",s.appendChild(c),s.appendChild(u),s.appendChild(l),a.appendChild(d),a.appendChild(s);const p=document.createElement("div"),m=document.createElement("label");m.setAttribute("for","due-date-input"),m.textContent="Due Date:";const b=document.createElement("input");b.setAttribute("type","date"),b.setAttribute("id","due-date-input"),p.appendChild(m),p.appendChild(b);const h=document.createElement("div"),f=document.createElement("button");f.setAttribute("type","submit"),f.setAttribute("id","add-task-button"),f.textContent="Add";const y=document.createElement("button");y.setAttribute("id","nvm-button"),y.textContent="Nvm",h.appendChild(f),h.appendChild(y),n.appendChild(i),n.appendChild(a),n.appendChild(p),n.appendChild(h),document.querySelector("#new-task-button").addEventListener("click",(()=>{e.showModal()})),document.querySelector("#nvm-button").addEventListener("click",(()=>{e.close()})),t.library.forEach((t=>{document.querySelector("#add-task-button").addEventListener("click",(()=>{if(""!==r.value){document.querySelector(`#${t.name.replace(/\s+/g,"")}-task-display`).innerHTML="";const e=new v(r.value);e.setPriority(s.value),e.setDueDate(b.value),t.newTask(e),C(t)}}))}))}function E(t){t.library.forEach((t=>{document.querySelector(`#${t.name.replace(/\s+/g,"")}-list-button`).addEventListener("click",(()=>{g(t),C(t),w()}))}))}const A=function(){const t=[];return{library:t,getLibrary:function(){return t},addList:function(e){t.push(e)}}}(),k=y("Default"),L=new v("New Task");k.newTask(L),g(k),C(k),A.addList(k),x(A),E(A),function(t){const e=document.createElement("dialog");e.setAttribute("id","new-list-dialog"),document.querySelector("#sidebar").appendChild(e);const n=document.createElement("form");n.setAttribute("method","dialog"),n.setAttribute("id","new-list-form"),e.appendChild(n);const i=document.createElement("div");i.setAttribute("id","new-name-input-div");const o=document.createElement("label");o.setAttribute("for","new-list-input"),o.setAttribute("id","list-name-input"),o.textContent="New List Name";const r=document.createElement("input");r.setAttribute("type","text"),r.setAttribute("id","new-list-input"),r.setAttribute("name","new-list-input"),r.required=!0,i.appendChild(o),i.appendChild(r);const a=document.createElement("div");a.setAttribute("id","new-list-buttons-div");const d=document.createElement("button");d.setAttribute("type","submit"),d.setAttribute("id","add-list-button-dialog"),d.textContent="Add";const s=document.createElement("button");s.setAttribute("id","nvm-button"),s.textContent="Nvm",a.appendChild(d),a.appendChild(s),n.appendChild(i),n.appendChild(a),document.querySelector("#new-list-button").addEventListener("click",(()=>{e.showModal()})),document.querySelector("#add-list-button-dialog").addEventListener("click",(()=>{document.querySelector("#list-library-display").innerHTML="";const e=y(r.value);t.addList(e),x(t),E(t)})),document.querySelector("#nvm-button").addEventListener("click",(()=>{e.close()}))}(A),w(A),function t(e){const n=document.createElement("dialog");n.setAttribute("id","update-task-priority-dialog"),document.querySelector("#container").appendChild(n);const i=document.createElement("form");i.setAttribute("method","dialog"),i.setAttribute("id","update-task-priority-form"),n.appendChild(i);const o=document.createElement("div"),r=document.createElement("label");r.setAttribute("for","task-name-input"),r.textContent="Task Name";const a=document.createElement("input");a.setAttribute("type","text"),a.setAttribute("id","task-name-input"),a.setAttribute("name","task-name-input"),a.required=!0,o.appendChild(r),o.appendChild(a);const d=document.createElement("div"),s=document.createElement("label");s.setAttribute("for","priority-input"),s.textContent="Priority";const c=document.createElement("select");c.setAttribute("name","priority"),c.setAttribute("id","priority-input");const u=document.createElement("option");u.setAttribute("value","Low"),u.textContent="Low";const l=document.createElement("option");l.setAttribute("value","Mid"),l.textContent="Mid";const p=document.createElement("option");p.setAttribute("value","High"),p.textContent="High",c.appendChild(u),c.appendChild(l),c.appendChild(p),d.appendChild(s),d.appendChild(c);const m=document.createElement("div"),b=document.createElement("label");b.setAttribute("for","due-date-input"),b.textContent="Due Date:";const h=document.createElement("input");h.setAttribute("type","date"),h.setAttribute("id","due-date-input"),m.appendChild(b),m.appendChild(h);const f=document.createElement("div"),y=document.createElement("button");y.setAttribute("type","submit"),y.setAttribute("id","update-task-button"),y.textContent="Update";const v=document.createElement("button");v.setAttribute("id","update-nvm-button"),v.textContent="Nvm",f.appendChild(y),f.appendChild(v),i.appendChild(o),i.appendChild(d),i.appendChild(m),i.appendChild(f),document.querySelector("#update-nvm-button").addEventListener("click",(()=>{n.close()})),e.library.forEach((i=>{i.taskList.forEach((o=>{document.querySelector(`#${o.name.replace(/\s+/g,"")}-info-button`).addEventListener("click",(()=>{n.showModal()})),document.querySelector("#update-task-button").addEventListener("click",(()=>{o.setName(a.value),o.setPriority(c.value),o.setDueDate(h.value),document.querySelector(`#${i.name.replace(/\s+/g,"")}-task-display`).innerHTML="",console.log(`${o.name}`),C(i),t(e)}))}))}))}(A)})();