(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();function yt(r,t,e,n=!0){if(r&&e){const s={add:()=>r.classList.add(e),remove:()=>r.classList.remove(e),toggle:()=>r.classList.toggle(e),toggleBoolean:()=>r.classList.toggle(e,n),contains:()=>r.classList.contains(e)};if(s[t])return s[t]()}}function ja(r,t=document){return t.querySelectorAll(r)}function jt(r,t=document){return t?t.querySelector(r):null}function Np(r,t=null){const e=document.createElement(r);if(t){if(Array.isArray(t))return t.forEach(n=>yt(e,"add",n)),e;yt(e,"add",t)}return e}function $u(){const r=ja(".sidebar-sub-list");r.forEach(t=>{t.addEventListener("click",()=>{r.forEach(e=>{t===e?(e.style.pointerEvents="none",yt(e,"toggle","sidebar-sub-list_active"),setTimeout(()=>{e.style.pointerEvents="auto"},300)):yt(e,"remove","sidebar-sub-list_active")})})})}var Cr={exports:{}},Qu=Cr.exports,Do;function Wu(){return Do||(Do=1,function(r,t){(function(n,s){r.exports=s()})(Qu,function(){return function(e){var n={};function s(o){if(n[o])return n[o].exports;var a=n[o]={i:o,l:!1,exports:{}};return e[o].call(a.exports,a,a.exports,s),a.l=!0,a.exports}return s.m=e,s.c=n,s.d=function(o,a,c){s.o(o,a)||Object.defineProperty(o,a,{enumerable:!0,get:c})},s.r=function(o){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})},s.t=function(o,a){if(a&1&&(o=s(o)),a&8||a&4&&typeof o=="object"&&o&&o.__esModule)return o;var c=Object.create(null);if(s.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:o}),a&2&&typeof o!="string")for(var h in o)s.d(c,h,(function(f){return o[f]}).bind(null,h));return c},s.n=function(o){var a=o&&o.__esModule?function(){return o.default}:function(){return o};return s.d(a,"a",a),a},s.o=function(o,a){return Object.prototype.hasOwnProperty.call(o,a)},s.p="",s(s.s=0)}([function(e,n,s){s.r(n);var o=function(y){return Array.isArray(y)?y:[y]},a=function(y){return y instanceof Node},c=function(y){return y instanceof NodeList},h=function(y,V){if(y&&V){y=c(y)?y:[y];for(var M=0;M<y.length&&V(y[M],M,y.length)!==!0;M++);}},f=function(y){return console.error("[scroll-lock] ".concat(y))},g=function(y){if(Array.isArray(y)){var V=y.join(", ");return V}},S=function(y){var V=[];return h(y,function(M){return V.push(M)}),V},w=function(y,V){var M=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0,U=arguments.length>3&&arguments[3]!==void 0?arguments[3]:document;if(M&&S(U.querySelectorAll(V)).indexOf(y)!==-1)return y;for(;(y=y.parentElement)&&S(U.querySelectorAll(V)).indexOf(y)===-1;);return y},P=function(y,V){var M=arguments.length>2&&arguments[2]!==void 0?arguments[2]:document,U=S(M.querySelectorAll(V)).indexOf(y)!==-1;return U},k=function(y){if(y){var V=getComputedStyle(y),M=V.overflow==="hidden";return M}},F=function(y){if(y){if(k(y))return!0;var V=y.scrollTop;return V<=0}},L=function(y){if(y){if(k(y))return!0;var V=y.scrollTop,M=y.scrollHeight,U=V+y.offsetHeight;return U>=M}},X=function(y){if(y){if(k(y))return!0;var V=y.scrollLeft;return V<=0}},G=function(y){if(y){if(k(y))return!0;var V=y.scrollLeft,M=y.scrollWidth,U=V+y.offsetWidth;return U>=M}},Y=function(y){var V='textarea, [contenteditable="true"]';return P(y,V)},rt=function(y){var V='input[type="range"]';return P(y,V)};s.d(n,"disablePageScroll",function(){return v}),s.d(n,"enablePageScroll",function(){return E}),s.d(n,"getScrollState",function(){return I}),s.d(n,"clearQueueScrollLocks",function(){return _}),s.d(n,"getTargetScrollBarWidth",function(){return Ct}),s.d(n,"getCurrentTargetScrollBarWidth",function(){return Ut}),s.d(n,"getPageScrollBarWidth",function(){return pn}),s.d(n,"getCurrentPageScrollBarWidth",function(){return Wt}),s.d(n,"addScrollableTarget",function(){return Bt}),s.d(n,"removeScrollableTarget",function(){return Ae}),s.d(n,"addScrollableSelector",function(){return mn}),s.d(n,"removeScrollableSelector",function(){return er}),s.d(n,"addLockableTarget",function(){return Mt}),s.d(n,"addLockableSelector",function(){return dt}),s.d(n,"setFillGapMethod",function(){return nr}),s.d(n,"addFillGapTarget",function(){return Yt}),s.d(n,"removeFillGapTarget",function(){return rr}),s.d(n,"addFillGapSelector",function(){return Xt}),s.d(n,"removeFillGapSelector",function(){return sr}),s.d(n,"refillGaps",function(){return Oe});function Lt(O){for(var y=1;y<arguments.length;y++){var V=arguments[y]!=null?arguments[y]:{},M=Object.keys(V);typeof Object.getOwnPropertySymbols=="function"&&(M=M.concat(Object.getOwnPropertySymbols(V).filter(function(U){return Object.getOwnPropertyDescriptor(V,U).enumerable}))),M.forEach(function(U){ht(O,U,V[U])})}return O}function ht(O,y,V){return y in O?Object.defineProperty(O,y,{value:V,enumerable:!0,configurable:!0,writable:!0}):O[y]=V,O}var T=["padding","margin","width","max-width","none"],m=3,p={scroll:!0,queue:0,scrollableSelectors:["[data-scroll-lock-scrollable]"],lockableSelectors:["body","[data-scroll-lock-lockable]"],fillGapSelectors:["body","[data-scroll-lock-fill-gap]","[data-scroll-lock-lockable]"],fillGapMethod:T[0],startTouchY:0,startTouchX:0},v=function(y){p.queue<=0&&(p.scroll=!1,se(),En()),Bt(y),p.queue++},E=function(y){p.queue>0&&p.queue--,p.queue<=0&&(p.scroll=!0,Le(),cs()),Ae(y)},I=function(){return p.scroll},_=function(){p.queue=0},Ct=function(y){var V=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(a(y)){var M=y.style.overflowY;V?I()||(y.style.overflowY=y.getAttribute("data-scroll-lock-saved-overflow-y-property")):y.style.overflowY="scroll";var U=Ut(y);return y.style.overflowY=M,U}else return 0},Ut=function(y){if(a(y))if(y===document.body){var V=document.documentElement.clientWidth,M=window.innerWidth,U=M-V;return U}else{var Nt=y.style.borderLeftWidth,qt=y.style.borderRightWidth;y.style.borderLeftWidth="0px",y.style.borderRightWidth="0px";var kt=y.offsetWidth-y.clientWidth;return y.style.borderLeftWidth=Nt,y.style.borderRightWidth=qt,kt}else return 0},pn=function(){var y=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;return Ct(document.body,y)},Wt=function(){return Ut(document.body)},Bt=function(y){if(y){var V=o(y);V.map(function(M){h(M,function(U){a(U)?U.setAttribute("data-scroll-lock-scrollable",""):f('"'.concat(U,'" is not a Element.'))})})}},Ae=function(y){if(y){var V=o(y);V.map(function(M){h(M,function(U){a(U)?U.removeAttribute("data-scroll-lock-scrollable"):f('"'.concat(U,'" is not a Element.'))})})}},mn=function(y){if(y){var V=o(y);V.map(function(M){p.scrollableSelectors.push(M)})}},er=function(y){if(y){var V=o(y);V.map(function(M){p.scrollableSelectors=p.scrollableSelectors.filter(function(U){return U!==M})})}},Mt=function(y){if(y){var V=o(y);V.map(function(M){h(M,function(U){a(U)?U.setAttribute("data-scroll-lock-lockable",""):f('"'.concat(U,'" is not a Element.'))})}),I()||se()}},dt=function(y){if(y){var V=o(y);V.map(function(M){p.lockableSelectors.push(M)}),I()||se(),Xt(y)}},nr=function(y){if(y)if(T.indexOf(y)!==-1)p.fillGapMethod=y,Oe();else{var V=T.join(", ");f('"'.concat(y,`" method is not available!
Available fill gap methods: `).concat(V,"."))}},Yt=function(y){if(y){var V=o(y);V.map(function(M){h(M,function(U){a(U)?(U.setAttribute("data-scroll-lock-fill-gap",""),p.scroll||Tn(U)):f('"'.concat(U,'" is not a Element.'))})})}},rr=function(y){if(y){var V=o(y);V.map(function(M){h(M,function(U){a(U)?(U.removeAttribute("data-scroll-lock-fill-gap"),p.scroll||xe(U)):f('"'.concat(U,'" is not a Element.'))})})}},Xt=function(y){if(y){var V=o(y);V.map(function(M){p.fillGapSelectors.indexOf(M)===-1&&(p.fillGapSelectors.push(M),p.scroll||ir(M))})}},sr=function(y){if(y){var V=o(y);V.map(function(M){p.fillGapSelectors=p.fillGapSelectors.filter(function(U){return U!==M}),p.scroll||Me(M)})}},Oe=function(){p.scroll||En()},se=function(){var y=g(p.lockableSelectors);gn(y)},Le=function(){var y=g(p.lockableSelectors);yn(y)},gn=function(y){var V=document.querySelectorAll(y);h(V,function(M){_n(M)})},yn=function(y){var V=document.querySelectorAll(y);h(V,function(M){vn(M)})},_n=function(y){if(a(y)&&y.getAttribute("data-scroll-lock-locked")!=="true"){var V=window.getComputedStyle(y);y.setAttribute("data-scroll-lock-saved-overflow-y-property",V.overflowY),y.setAttribute("data-scroll-lock-saved-inline-overflow-property",y.style.overflow),y.setAttribute("data-scroll-lock-saved-inline-overflow-y-property",y.style.overflowY),y.style.overflow="hidden",y.setAttribute("data-scroll-lock-locked","true")}},vn=function(y){a(y)&&y.getAttribute("data-scroll-lock-locked")==="true"&&(y.style.overflow=y.getAttribute("data-scroll-lock-saved-inline-overflow-property"),y.style.overflowY=y.getAttribute("data-scroll-lock-saved-inline-overflow-y-property"),y.removeAttribute("data-scroll-lock-saved-overflow-property"),y.removeAttribute("data-scroll-lock-saved-inline-overflow-property"),y.removeAttribute("data-scroll-lock-saved-inline-overflow-y-property"),y.removeAttribute("data-scroll-lock-locked"))},En=function(){p.fillGapSelectors.map(function(y){ir(y)})},cs=function(){p.fillGapSelectors.map(function(y){Me(y)})},ir=function(y){var V=document.querySelectorAll(y),M=p.lockableSelectors.indexOf(y)!==-1;h(V,function(U){Tn(U,M)})},Tn=function(y){var V=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(a(y)){var M;if(y.getAttribute("data-scroll-lock-lockable")===""||V)M=Ct(y,!0);else{var U=w(y,g(p.lockableSelectors));M=Ct(U,!0)}y.getAttribute("data-scroll-lock-filled-gap")==="true"&&xe(y);var Nt=window.getComputedStyle(y);if(y.setAttribute("data-scroll-lock-filled-gap","true"),y.setAttribute("data-scroll-lock-current-fill-gap-method",p.fillGapMethod),p.fillGapMethod==="margin"){var qt=parseFloat(Nt.marginRight);y.style.marginRight="".concat(qt+M,"px")}else if(p.fillGapMethod==="width")y.style.width="calc(100% - ".concat(M,"px)");else if(p.fillGapMethod==="max-width")y.style.maxWidth="calc(100% - ".concat(M,"px)");else if(p.fillGapMethod==="padding"){var kt=parseFloat(Nt.paddingRight);y.style.paddingRight="".concat(kt+M,"px")}}},Me=function(y){var V=document.querySelectorAll(y);h(V,function(M){xe(M)})},xe=function(y){if(a(y)&&y.getAttribute("data-scroll-lock-filled-gap")==="true"){var V=y.getAttribute("data-scroll-lock-current-fill-gap-method");y.removeAttribute("data-scroll-lock-filled-gap"),y.removeAttribute("data-scroll-lock-current-fill-gap-method"),V==="margin"?y.style.marginRight="":V==="width"?y.style.width="":V==="max-width"?y.style.maxWidth="":V==="padding"&&(y.style.paddingRight="")}},hs=function(y){Oe()},In=function(y){p.scroll||(p.startTouchY=y.touches[0].clientY,p.startTouchX=y.touches[0].clientX)},An=function(y){if(!p.scroll){var V=p.startTouchY,M=p.startTouchX,U=y.touches[0].clientY,Nt=y.touches[0].clientX;if(y.touches.length<2){var qt=g(p.scrollableSelectors),kt={up:V<U,down:V>U,left:M<Nt,right:M>Nt},Fe={up:V+m<U,down:V-m>U,left:M+m<Nt,right:M-m>Nt},ds=function Ue(it){var ar=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(it){var Jt=w(it,qt,!1);if(rt(it))return!1;if(ar||Y(it)&&w(it,qt)||P(it,qt)){var ie=!1;X(it)&&G(it)?(kt.up&&F(it)||kt.down&&L(it))&&(ie=!0):F(it)&&L(it)?(kt.left&&X(it)||kt.right&&G(it))&&(ie=!0):(Fe.up&&F(it)||Fe.down&&L(it)||Fe.left&&X(it)||Fe.right&&G(it))&&(ie=!0),ie&&(Jt?Ue(Jt,!0):y.cancelable&&y.preventDefault())}else Ue(Jt)}else y.cancelable&&y.preventDefault()};ds(y.target)}}},or=function(y){p.scroll||(p.startTouchY=0,p.startTouchX=0)};typeof window<"u"&&window.addEventListener("resize",hs),typeof document<"u"&&(document.addEventListener("touchstart",In),document.addEventListener("touchmove",An,{passive:!1}),document.addEventListener("touchend",or));var mt={hide:function(y){f(`"hide" is deprecated! Use "disablePageScroll" instead. 
 https://github.com/FL3NKEY/scroll-lock#disablepagescrollscrollabletarget`),v(y)},show:function(y){f(`"show" is deprecated! Use "enablePageScroll" instead. 
 https://github.com/FL3NKEY/scroll-lock#enablepagescrollscrollabletarget`),E(y)},toggle:function(y){f('"toggle" is deprecated! Do not use it.'),I()?v():E(y)},getState:function(){return f(`"getState" is deprecated! Use "getScrollState" instead. 
 https://github.com/FL3NKEY/scroll-lock#getscrollstate`),I()},getWidth:function(){return f(`"getWidth" is deprecated! Use "getPageScrollBarWidth" instead. 
 https://github.com/FL3NKEY/scroll-lock#getpagescrollbarwidth`),pn()},getCurrentWidth:function(){return f(`"getCurrentWidth" is deprecated! Use "getCurrentPageScrollBarWidth" instead. 
 https://github.com/FL3NKEY/scroll-lock#getcurrentpagescrollbarwidth`),Wt()},setScrollableTargets:function(y){f(`"setScrollableTargets" is deprecated! Use "addScrollableTarget" instead. 
 https://github.com/FL3NKEY/scroll-lock#addscrollabletargetscrollabletarget`),Bt(y)},setFillGapSelectors:function(y){f(`"setFillGapSelectors" is deprecated! Use "addFillGapSelector" instead. 
 https://github.com/FL3NKEY/scroll-lock#addfillgapselectorfillgapselector`),Xt(y)},setFillGapTargets:function(y){f(`"setFillGapTargets" is deprecated! Use "addFillGapTarget" instead. 
 https://github.com/FL3NKEY/scroll-lock#addfillgaptargetfillgaptarget`),Yt(y)},clearQueue:function(){f(`"clearQueue" is deprecated! Use "clearQueueScrollLocks" instead. 
 https://github.com/FL3NKEY/scroll-lock#clearqueuescrolllocks`),_()}},_t=Lt({disablePageScroll:v,enablePageScroll:E,getScrollState:I,clearQueueScrollLocks:_,getTargetScrollBarWidth:Ct,getCurrentTargetScrollBarWidth:Ut,getPageScrollBarWidth:pn,getCurrentPageScrollBarWidth:Wt,addScrollableSelector:mn,removeScrollableSelector:er,addScrollableTarget:Bt,removeScrollableTarget:Ae,addLockableSelector:dt,addLockableTarget:Mt,addFillGapSelector:Xt,removeFillGapSelector:sr,addFillGapTarget:Yt,removeFillGapTarget:rr,setFillGapMethod:nr,refillGaps:Oe,_state:p},mt);n.default=_t}]).default})}(Cr)),Cr.exports}var Or=Wu();function Yu(){const r=jt(".burger-icon"),t=jt(".sidebar"),e=jt(".dark-background"),n=ja(".sidebar-sub-list");function s(a){if(a){yt(t,"add","sidebar_open"),yt(e,"remove","dark-background_hidden"),Or.disablePageScroll(t);return}yt(t,"remove","sidebar_open"),yt(e,"add","dark-background_hidden"),Or.enablePageScroll()}e.addEventListener("click",()=>{s(!1),yt(r,"remove","burger-icon_open"),n.forEach(a=>{yt(a,"remove","sidebar-sub-list_active")})});const o=()=>{r.style.pointerEvents="none",n.forEach(c=>{yt(c,"remove","sidebar-sub-list_active")});const a=yt(r,"toggle","burger-icon_open");s(a),setTimeout(()=>{r.style.pointerEvents="auto"},300)};r.addEventListener("click",o)}function Xu(){const r=jt(".header__icon-search-icon"),t=jt(".header__search"),e=jt(".input__field",t),n=jt(".dark-background"),s=jt(".header__search-close"),o=jt(".sidebar"),a=jt(".burger-icon");n.addEventListener("click",c),s.addEventListener("click",c);function c(){e.value="",yt(n,"add","dark-background_hidden"),yt(t,"remove","header__search_open"),Or.enablePageScroll()}r.addEventListener("click",h=>{yt(t,"toggle","header__search_open"),yt(n,"remove","dark-background_hidden"),yt(o,"remove","sidebar_open"),yt(a,"remove","burger-icon_open"),e.focus(),Or.disablePageScroll()}),window.addEventListener("resize",h=>{window.innerWidth<768&&(t.style.display="none",setTimeout(()=>{t.style.display="block"},0))})}function kp(){$u(),Yu(),Xu()}const Ju=()=>{};var No={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ga=function(r){const t=[];let e=0;for(let n=0;n<r.length;n++){let s=r.charCodeAt(n);s<128?t[e++]=s:s<2048?(t[e++]=s>>6|192,t[e++]=s&63|128):(s&64512)===55296&&n+1<r.length&&(r.charCodeAt(n+1)&64512)===56320?(s=65536+((s&1023)<<10)+(r.charCodeAt(++n)&1023),t[e++]=s>>18|240,t[e++]=s>>12&63|128,t[e++]=s>>6&63|128,t[e++]=s&63|128):(t[e++]=s>>12|224,t[e++]=s>>6&63|128,t[e++]=s&63|128)}return t},Zu=function(r){const t=[];let e=0,n=0;for(;e<r.length;){const s=r[e++];if(s<128)t[n++]=String.fromCharCode(s);else if(s>191&&s<224){const o=r[e++];t[n++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=r[e++],a=r[e++],c=r[e++],h=((s&7)<<18|(o&63)<<12|(a&63)<<6|c&63)-65536;t[n++]=String.fromCharCode(55296+(h>>10)),t[n++]=String.fromCharCode(56320+(h&1023))}else{const o=r[e++],a=r[e++];t[n++]=String.fromCharCode((s&15)<<12|(o&63)<<6|a&63)}}return t.join("")},za={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,t){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let s=0;s<r.length;s+=3){const o=r[s],a=s+1<r.length,c=a?r[s+1]:0,h=s+2<r.length,f=h?r[s+2]:0,g=o>>2,S=(o&3)<<4|c>>4;let w=(c&15)<<2|f>>6,P=f&63;h||(P=64,a||(w=64)),n.push(e[g],e[S],e[w],e[P])}return n.join("")},encodeString(r,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(r):this.encodeByteArray(Ga(r),t)},decodeString(r,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(r):Zu(this.decodeStringToByteArray(r,t))},decodeStringToByteArray(r,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let s=0;s<r.length;){const o=e[r.charAt(s++)],c=s<r.length?e[r.charAt(s)]:0;++s;const f=s<r.length?e[r.charAt(s)]:64;++s;const S=s<r.length?e[r.charAt(s)]:64;if(++s,o==null||c==null||f==null||S==null)throw new tc;const w=o<<2|c>>4;if(n.push(w),f!==64){const P=c<<4&240|f>>2;if(n.push(P),S!==64){const k=f<<6&192|S;n.push(k)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class tc extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ec=function(r){const t=Ga(r);return za.encodeByteArray(t,!0)},Lr=function(r){return ec(r).replace(/\./g,"")},nc=function(r){try{return za.decodeString(r,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rc(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sc=()=>rc().__FIREBASE_DEFAULTS__,ic=()=>{if(typeof process>"u"||typeof No>"u")return;const r=No.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},oc=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=r&&nc(r[1]);return t&&JSON.parse(t)},oi=()=>{try{return Ju()||sc()||ic()||oc()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},ac=r=>{var t,e;return(e=(t=oi())==null?void 0:t.emulatorHosts)==null?void 0:e[r]},lc=r=>{const t=ac(r);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const n=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),n]:[t.substring(0,e),n]},Ha=()=>{var r;return(r=oi())==null?void 0:r.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uc{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,n))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ai(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function cc(r){return(await fetch(r,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hc(r,t){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},n=t||"demo-project",s=r.iat||0,o=r.sub||r.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${n}`,aud:n,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}},...r};return[Lr(JSON.stringify(e)),Lr(JSON.stringify(a)),""].join(".")}const Un={};function dc(){const r={prod:[],emulator:[]};for(const t of Object.keys(Un))Un[t]?r.emulator.push(t):r.prod.push(t);return r}function fc(r){let t=document.getElementById(r),e=!1;return t||(t=document.createElement("div"),t.setAttribute("id",r),e=!0),{created:e,element:t}}let ko=!1;function pc(r,t){if(typeof window>"u"||typeof document>"u"||!ai(window.location.host)||Un[r]===t||Un[r]||ko)return;Un[r]=t;function e(w){return`__firebase__banner__${w}`}const n="__firebase__banner",o=dc().prod.length>0;function a(){const w=document.getElementById(n);w&&w.remove()}function c(w){w.style.display="flex",w.style.background="#7faaf0",w.style.position="fixed",w.style.bottom="5px",w.style.left="5px",w.style.padding=".5em",w.style.borderRadius="5px",w.style.alignItems="center"}function h(w,P){w.setAttribute("width","24"),w.setAttribute("id",P),w.setAttribute("height","24"),w.setAttribute("viewBox","0 0 24 24"),w.setAttribute("fill","none"),w.style.marginLeft="-6px"}function f(){const w=document.createElement("span");return w.style.cursor="pointer",w.style.marginLeft="16px",w.style.fontSize="24px",w.innerHTML=" &times;",w.onclick=()=>{ko=!0,a()},w}function g(w,P){w.setAttribute("id",P),w.innerText="Learn more",w.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",w.setAttribute("target","__blank"),w.style.paddingLeft="5px",w.style.textDecoration="underline"}function S(){const w=fc(n),P=e("text"),k=document.getElementById(P)||document.createElement("span"),F=e("learnmore"),L=document.getElementById(F)||document.createElement("a"),X=e("preprendIcon"),G=document.getElementById(X)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(w.created){const Y=w.element;c(Y),g(L,F);const rt=f();h(G,X),Y.append(G,k,L,rt),document.body.appendChild(Y)}o?(k.innerText="Preview backend disconnected.",G.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(G.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,k.innerText="Preview backend running in this workspace."),k.setAttribute("id",P)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",S):S()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mc(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function gc(){var t;const r=(t=oi())==null?void 0:t.forceEnvironment;if(r==="node")return!0;if(r==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function yc(){return!gc()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function _c(){try{return typeof indexedDB=="object"}catch{return!1}}function vc(){return new Promise((r,t)=>{try{let e=!0;const n="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(n);s.onsuccess=()=>{s.result.close(),e||self.indexedDB.deleteDatabase(n),r(!0)},s.onupgradeneeded=()=>{e=!1},s.onerror=()=>{var o;t(((o=s.error)==null?void 0:o.message)||"")}}catch(e){t(e)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ec="FirebaseError";class un extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=Ec,Object.setPrototypeOf(this,un.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ka.prototype.create)}}class Ka{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},s=`${this.service}/${t}`,o=this.errors[t],a=o?Tc(o,n):"Error",c=`${this.serviceName}: ${a} (${s}).`;return new un(s,c,n)}}function Tc(r,t){return r.replace(Ic,(e,n)=>{const s=t[n];return s!=null?String(s):`<${n}?>`})}const Ic=/\{\$([^}]+)}/g;function Mr(r,t){if(r===t)return!0;const e=Object.keys(r),n=Object.keys(t);for(const s of e){if(!n.includes(s))return!1;const o=r[s],a=t[s];if(Oo(o)&&Oo(a)){if(!Mr(o,a))return!1}else if(o!==a)return!1}for(const s of n)if(!e.includes(s))return!1;return!0}function Oo(r){return r!==null&&typeof r=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ze(r){return r&&r._delegate?r._delegate:r}class Gn{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ce="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ac{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const n=new uc;if(this.instancesDeferred.set(e,n),this.isInitialized(e)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:e});s&&n.resolve(s)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){const e=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),n=(t==null?void 0:t.optional)??!1;if(this.isInitialized(e)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:e})}catch(s){if(n)return null;throw s}else{if(n)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Sc(t))try{this.getOrInitializeService({instanceIdentifier:Ce})}catch{}for(const[e,n]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:s});n.resolve(o)}catch{}}}}clearInstance(t=Ce){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Ce){return this.instances.has(t)}getOptions(t=Ce){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[o,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(o);n===c&&a.resolve(s)}return s}onInit(t,e){const n=this.normalizeInstanceIdentifier(e),s=this.onInitCallbacks.get(n)??new Set;s.add(t),this.onInitCallbacks.set(n,s);const o=this.instances.get(n);return o&&t(o,n),()=>{s.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const s of n)try{s(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:wc(t),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch{}return n||null}normalizeInstanceIdentifier(t=Ce){return this.component?this.component.multipleInstances?t:Ce:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function wc(r){return r===Ce?void 0:r}function Sc(r){return r.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new Ac(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var K;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(K||(K={}));const bc={debug:K.DEBUG,verbose:K.VERBOSE,info:K.INFO,warn:K.WARN,error:K.ERROR,silent:K.SILENT},Cc=K.INFO,Pc={[K.DEBUG]:"log",[K.VERBOSE]:"log",[K.INFO]:"info",[K.WARN]:"warn",[K.ERROR]:"error"},Vc=(r,t,...e)=>{if(t<r.logLevel)return;const n=new Date().toISOString(),s=Pc[t];if(s)console[s](`[${n}]  ${r.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class $a{constructor(t){this.name=t,this._logLevel=Cc,this._logHandler=Vc,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in K))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?bc[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,K.DEBUG,...t),this._logHandler(this,K.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,K.VERBOSE,...t),this._logHandler(this,K.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,K.INFO,...t),this._logHandler(this,K.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,K.WARN,...t),this._logHandler(this,K.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,K.ERROR,...t),this._logHandler(this,K.ERROR,...t)}}const Dc=(r,t)=>t.some(e=>r instanceof e);let Lo,Mo;function Nc(){return Lo||(Lo=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function kc(){return Mo||(Mo=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Qa=new WeakMap,Ms=new WeakMap,Wa=new WeakMap,Rs=new WeakMap,li=new WeakMap;function Oc(r){const t=new Promise((e,n)=>{const s=()=>{r.removeEventListener("success",o),r.removeEventListener("error",a)},o=()=>{e(he(r.result)),s()},a=()=>{n(r.error),s()};r.addEventListener("success",o),r.addEventListener("error",a)});return t.then(e=>{e instanceof IDBCursor&&Qa.set(e,r)}).catch(()=>{}),li.set(t,r),t}function Lc(r){if(Ms.has(r))return;const t=new Promise((e,n)=>{const s=()=>{r.removeEventListener("complete",o),r.removeEventListener("error",a),r.removeEventListener("abort",a)},o=()=>{e(),s()},a=()=>{n(r.error||new DOMException("AbortError","AbortError")),s()};r.addEventListener("complete",o),r.addEventListener("error",a),r.addEventListener("abort",a)});Ms.set(r,t)}let xs={get(r,t,e){if(r instanceof IDBTransaction){if(t==="done")return Ms.get(r);if(t==="objectStoreNames")return r.objectStoreNames||Wa.get(r);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return he(r[t])},set(r,t,e){return r[t]=e,!0},has(r,t){return r instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in r}};function Mc(r){xs=r(xs)}function xc(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const n=r.call(bs(this),t,...e);return Wa.set(n,t.sort?t.sort():[t]),he(n)}:kc().includes(r)?function(...t){return r.apply(bs(this),t),he(Qa.get(this))}:function(...t){return he(r.apply(bs(this),t))}}function Fc(r){return typeof r=="function"?xc(r):(r instanceof IDBTransaction&&Lc(r),Dc(r,Nc())?new Proxy(r,xs):r)}function he(r){if(r instanceof IDBRequest)return Oc(r);if(Rs.has(r))return Rs.get(r);const t=Fc(r);return t!==r&&(Rs.set(r,t),li.set(t,r)),t}const bs=r=>li.get(r);function Uc(r,t,{blocked:e,upgrade:n,blocking:s,terminated:o}={}){const a=indexedDB.open(r,t),c=he(a);return n&&a.addEventListener("upgradeneeded",h=>{n(he(a.result),h.oldVersion,h.newVersion,he(a.transaction),h)}),e&&a.addEventListener("blocked",h=>e(h.oldVersion,h.newVersion,h)),c.then(h=>{o&&h.addEventListener("close",()=>o()),s&&h.addEventListener("versionchange",f=>s(f.oldVersion,f.newVersion,f))}).catch(()=>{}),c}const Bc=["get","getKey","getAll","getAllKeys","count"],qc=["put","add","delete","clear"],Cs=new Map;function xo(r,t){if(!(r instanceof IDBDatabase&&!(t in r)&&typeof t=="string"))return;if(Cs.get(t))return Cs.get(t);const e=t.replace(/FromIndex$/,""),n=t!==e,s=qc.includes(e);if(!(e in(n?IDBIndex:IDBObjectStore).prototype)||!(s||Bc.includes(e)))return;const o=async function(a,...c){const h=this.transaction(a,s?"readwrite":"readonly");let f=h.store;return n&&(f=f.index(c.shift())),(await Promise.all([f[e](...c),s&&h.done]))[0]};return Cs.set(t,o),o}Mc(r=>({...r,get:(t,e,n)=>xo(t,e)||r.get(t,e,n),has:(t,e)=>!!xo(t,e)||r.has(t,e)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(Gc(e)){const n=e.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(e=>e).join(" ")}}function Gc(r){const t=r.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Fs="@firebase/app",Fo="0.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ee=new $a("@firebase/app"),zc="@firebase/app-compat",Hc="@firebase/analytics-compat",Kc="@firebase/analytics",$c="@firebase/app-check-compat",Qc="@firebase/app-check",Wc="@firebase/auth",Yc="@firebase/auth-compat",Xc="@firebase/database",Jc="@firebase/data-connect",Zc="@firebase/database-compat",th="@firebase/functions",eh="@firebase/functions-compat",nh="@firebase/installations",rh="@firebase/installations-compat",sh="@firebase/messaging",ih="@firebase/messaging-compat",oh="@firebase/performance",ah="@firebase/performance-compat",lh="@firebase/remote-config",uh="@firebase/remote-config-compat",ch="@firebase/storage",hh="@firebase/storage-compat",dh="@firebase/firestore",fh="@firebase/ai",ph="@firebase/firestore-compat",mh="firebase",gh="12.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Us="[DEFAULT]",yh={[Fs]:"fire-core",[zc]:"fire-core-compat",[Kc]:"fire-analytics",[Hc]:"fire-analytics-compat",[Qc]:"fire-app-check",[$c]:"fire-app-check-compat",[Wc]:"fire-auth",[Yc]:"fire-auth-compat",[Xc]:"fire-rtdb",[Jc]:"fire-data-connect",[Zc]:"fire-rtdb-compat",[th]:"fire-fn",[eh]:"fire-fn-compat",[nh]:"fire-iid",[rh]:"fire-iid-compat",[sh]:"fire-fcm",[ih]:"fire-fcm-compat",[oh]:"fire-perf",[ah]:"fire-perf-compat",[lh]:"fire-rc",[uh]:"fire-rc-compat",[ch]:"fire-gcs",[hh]:"fire-gcs-compat",[dh]:"fire-fst",[ph]:"fire-fst-compat",[fh]:"fire-vertex","fire-js":"fire-js",[mh]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xr=new Map,_h=new Map,Bs=new Map;function Uo(r,t){try{r.container.addComponent(t)}catch(e){ee.debug(`Component ${t.name} failed to register with FirebaseApp ${r.name}`,e)}}function Fr(r){const t=r.name;if(Bs.has(t))return ee.debug(`There were multiple attempts to register component ${t}.`),!1;Bs.set(t,r);for(const e of xr.values())Uo(e,r);for(const e of _h.values())Uo(e,r);return!0}function vh(r,t){const e=r.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),r.container.getProvider(t)}function Eh(r){return r==null?!1:r.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Th={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},de=new Ka("app","Firebase",Th);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ih{constructor(t,e,n){this._isDeleted=!1,this._options={...t},this._config={...e},this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Gn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw de.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ah=gh;function Ya(r,t={}){let e=r;typeof t!="object"&&(t={name:t});const n={name:Us,automaticDataCollectionEnabled:!0,...t},s=n.name;if(typeof s!="string"||!s)throw de.create("bad-app-name",{appName:String(s)});if(e||(e=Ha()),!e)throw de.create("no-options");const o=xr.get(s);if(o){if(Mr(e,o.options)&&Mr(n,o.config))return o;throw de.create("duplicate-app",{appName:s})}const a=new Rc(s);for(const h of Bs.values())a.addComponent(h);const c=new Ih(e,n,a);return xr.set(s,c),c}function wh(r=Us){const t=xr.get(r);if(!t&&r===Us&&Ha())return Ya();if(!t)throw de.create("no-app",{appName:r});return t}function Qe(r,t,e){let n=yh[r]??r;e&&(n+=`-${e}`);const s=n.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const a=[`Unable to register library "${n}" with version "${t}":`];s&&a.push(`library name "${n}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),ee.warn(a.join(" "));return}Fr(new Gn(`${n}-version`,()=>({library:n,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sh="firebase-heartbeat-database",Rh=1,zn="firebase-heartbeat-store";let Ps=null;function Xa(){return Ps||(Ps=Uc(Sh,Rh,{upgrade:(r,t)=>{switch(t){case 0:try{r.createObjectStore(zn)}catch(e){console.warn(e)}}}}).catch(r=>{throw de.create("idb-open",{originalErrorMessage:r.message})})),Ps}async function bh(r){try{const e=(await Xa()).transaction(zn),n=await e.objectStore(zn).get(Ja(r));return await e.done,n}catch(t){if(t instanceof un)ee.warn(t.message);else{const e=de.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});ee.warn(e.message)}}}async function Bo(r,t){try{const n=(await Xa()).transaction(zn,"readwrite");await n.objectStore(zn).put(t,Ja(r)),await n.done}catch(e){if(e instanceof un)ee.warn(e.message);else{const n=de.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});ee.warn(n.message)}}}function Ja(r){return`${r.name}!${r.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ch=1024,Ph=30;class Vh{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Nh(e),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){var t,e;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=qo();if(((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats.length>Ph){const a=kh(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(n){ee.warn(n)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=qo(),{heartbeatsToSend:n,unsentEntries:s}=Dh(this._heartbeatsCache.heartbeats),o=Lr(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return ee.warn(e),""}}}function qo(){return new Date().toISOString().substring(0,10)}function Dh(r,t=Ch){const e=[];let n=r.slice();for(const s of r){const o=e.find(a=>a.agent===s.agent);if(o){if(o.dates.push(s.date),jo(e)>t){o.dates.pop();break}}else if(e.push({agent:s.agent,dates:[s.date]}),jo(e)>t){e.pop();break}n=n.slice(1)}return{heartbeatsToSend:e,unsentEntries:n}}class Nh{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return _c()?vc().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await bh(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const n=await this.read();return Bo(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const n=await this.read();return Bo(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}else return}}function jo(r){return Lr(JSON.stringify({version:2,heartbeats:r})).length}function kh(r){if(r.length===0)return-1;let t=0,e=r[0].date;for(let n=1;n<r.length;n++)r[n].date<e&&(e=r[n].date,t=n);return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oh(r){Fr(new Gn("platform-logger",t=>new jc(t),"PRIVATE")),Fr(new Gn("heartbeat",t=>new Vh(t),"PRIVATE")),Qe(Fs,Fo,r),Qe(Fs,Fo,"esm2020"),Qe("fire-js","")}Oh("");var Go=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var fe,Za;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(T,m){function p(){}p.prototype=m.prototype,T.D=m.prototype,T.prototype=new p,T.prototype.constructor=T,T.C=function(v,E,I){for(var _=Array(arguments.length-2),Ct=2;Ct<arguments.length;Ct++)_[Ct-2]=arguments[Ct];return m.prototype[E].apply(v,_)}}function e(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(n,e),n.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(T,m,p){p||(p=0);var v=Array(16);if(typeof m=="string")for(var E=0;16>E;++E)v[E]=m.charCodeAt(p++)|m.charCodeAt(p++)<<8|m.charCodeAt(p++)<<16|m.charCodeAt(p++)<<24;else for(E=0;16>E;++E)v[E]=m[p++]|m[p++]<<8|m[p++]<<16|m[p++]<<24;m=T.g[0],p=T.g[1],E=T.g[2];var I=T.g[3],_=m+(I^p&(E^I))+v[0]+3614090360&4294967295;m=p+(_<<7&4294967295|_>>>25),_=I+(E^m&(p^E))+v[1]+3905402710&4294967295,I=m+(_<<12&4294967295|_>>>20),_=E+(p^I&(m^p))+v[2]+606105819&4294967295,E=I+(_<<17&4294967295|_>>>15),_=p+(m^E&(I^m))+v[3]+3250441966&4294967295,p=E+(_<<22&4294967295|_>>>10),_=m+(I^p&(E^I))+v[4]+4118548399&4294967295,m=p+(_<<7&4294967295|_>>>25),_=I+(E^m&(p^E))+v[5]+1200080426&4294967295,I=m+(_<<12&4294967295|_>>>20),_=E+(p^I&(m^p))+v[6]+2821735955&4294967295,E=I+(_<<17&4294967295|_>>>15),_=p+(m^E&(I^m))+v[7]+4249261313&4294967295,p=E+(_<<22&4294967295|_>>>10),_=m+(I^p&(E^I))+v[8]+1770035416&4294967295,m=p+(_<<7&4294967295|_>>>25),_=I+(E^m&(p^E))+v[9]+2336552879&4294967295,I=m+(_<<12&4294967295|_>>>20),_=E+(p^I&(m^p))+v[10]+4294925233&4294967295,E=I+(_<<17&4294967295|_>>>15),_=p+(m^E&(I^m))+v[11]+2304563134&4294967295,p=E+(_<<22&4294967295|_>>>10),_=m+(I^p&(E^I))+v[12]+1804603682&4294967295,m=p+(_<<7&4294967295|_>>>25),_=I+(E^m&(p^E))+v[13]+4254626195&4294967295,I=m+(_<<12&4294967295|_>>>20),_=E+(p^I&(m^p))+v[14]+2792965006&4294967295,E=I+(_<<17&4294967295|_>>>15),_=p+(m^E&(I^m))+v[15]+1236535329&4294967295,p=E+(_<<22&4294967295|_>>>10),_=m+(E^I&(p^E))+v[1]+4129170786&4294967295,m=p+(_<<5&4294967295|_>>>27),_=I+(p^E&(m^p))+v[6]+3225465664&4294967295,I=m+(_<<9&4294967295|_>>>23),_=E+(m^p&(I^m))+v[11]+643717713&4294967295,E=I+(_<<14&4294967295|_>>>18),_=p+(I^m&(E^I))+v[0]+3921069994&4294967295,p=E+(_<<20&4294967295|_>>>12),_=m+(E^I&(p^E))+v[5]+3593408605&4294967295,m=p+(_<<5&4294967295|_>>>27),_=I+(p^E&(m^p))+v[10]+38016083&4294967295,I=m+(_<<9&4294967295|_>>>23),_=E+(m^p&(I^m))+v[15]+3634488961&4294967295,E=I+(_<<14&4294967295|_>>>18),_=p+(I^m&(E^I))+v[4]+3889429448&4294967295,p=E+(_<<20&4294967295|_>>>12),_=m+(E^I&(p^E))+v[9]+568446438&4294967295,m=p+(_<<5&4294967295|_>>>27),_=I+(p^E&(m^p))+v[14]+3275163606&4294967295,I=m+(_<<9&4294967295|_>>>23),_=E+(m^p&(I^m))+v[3]+4107603335&4294967295,E=I+(_<<14&4294967295|_>>>18),_=p+(I^m&(E^I))+v[8]+1163531501&4294967295,p=E+(_<<20&4294967295|_>>>12),_=m+(E^I&(p^E))+v[13]+2850285829&4294967295,m=p+(_<<5&4294967295|_>>>27),_=I+(p^E&(m^p))+v[2]+4243563512&4294967295,I=m+(_<<9&4294967295|_>>>23),_=E+(m^p&(I^m))+v[7]+1735328473&4294967295,E=I+(_<<14&4294967295|_>>>18),_=p+(I^m&(E^I))+v[12]+2368359562&4294967295,p=E+(_<<20&4294967295|_>>>12),_=m+(p^E^I)+v[5]+4294588738&4294967295,m=p+(_<<4&4294967295|_>>>28),_=I+(m^p^E)+v[8]+2272392833&4294967295,I=m+(_<<11&4294967295|_>>>21),_=E+(I^m^p)+v[11]+1839030562&4294967295,E=I+(_<<16&4294967295|_>>>16),_=p+(E^I^m)+v[14]+4259657740&4294967295,p=E+(_<<23&4294967295|_>>>9),_=m+(p^E^I)+v[1]+2763975236&4294967295,m=p+(_<<4&4294967295|_>>>28),_=I+(m^p^E)+v[4]+1272893353&4294967295,I=m+(_<<11&4294967295|_>>>21),_=E+(I^m^p)+v[7]+4139469664&4294967295,E=I+(_<<16&4294967295|_>>>16),_=p+(E^I^m)+v[10]+3200236656&4294967295,p=E+(_<<23&4294967295|_>>>9),_=m+(p^E^I)+v[13]+681279174&4294967295,m=p+(_<<4&4294967295|_>>>28),_=I+(m^p^E)+v[0]+3936430074&4294967295,I=m+(_<<11&4294967295|_>>>21),_=E+(I^m^p)+v[3]+3572445317&4294967295,E=I+(_<<16&4294967295|_>>>16),_=p+(E^I^m)+v[6]+76029189&4294967295,p=E+(_<<23&4294967295|_>>>9),_=m+(p^E^I)+v[9]+3654602809&4294967295,m=p+(_<<4&4294967295|_>>>28),_=I+(m^p^E)+v[12]+3873151461&4294967295,I=m+(_<<11&4294967295|_>>>21),_=E+(I^m^p)+v[15]+530742520&4294967295,E=I+(_<<16&4294967295|_>>>16),_=p+(E^I^m)+v[2]+3299628645&4294967295,p=E+(_<<23&4294967295|_>>>9),_=m+(E^(p|~I))+v[0]+4096336452&4294967295,m=p+(_<<6&4294967295|_>>>26),_=I+(p^(m|~E))+v[7]+1126891415&4294967295,I=m+(_<<10&4294967295|_>>>22),_=E+(m^(I|~p))+v[14]+2878612391&4294967295,E=I+(_<<15&4294967295|_>>>17),_=p+(I^(E|~m))+v[5]+4237533241&4294967295,p=E+(_<<21&4294967295|_>>>11),_=m+(E^(p|~I))+v[12]+1700485571&4294967295,m=p+(_<<6&4294967295|_>>>26),_=I+(p^(m|~E))+v[3]+2399980690&4294967295,I=m+(_<<10&4294967295|_>>>22),_=E+(m^(I|~p))+v[10]+4293915773&4294967295,E=I+(_<<15&4294967295|_>>>17),_=p+(I^(E|~m))+v[1]+2240044497&4294967295,p=E+(_<<21&4294967295|_>>>11),_=m+(E^(p|~I))+v[8]+1873313359&4294967295,m=p+(_<<6&4294967295|_>>>26),_=I+(p^(m|~E))+v[15]+4264355552&4294967295,I=m+(_<<10&4294967295|_>>>22),_=E+(m^(I|~p))+v[6]+2734768916&4294967295,E=I+(_<<15&4294967295|_>>>17),_=p+(I^(E|~m))+v[13]+1309151649&4294967295,p=E+(_<<21&4294967295|_>>>11),_=m+(E^(p|~I))+v[4]+4149444226&4294967295,m=p+(_<<6&4294967295|_>>>26),_=I+(p^(m|~E))+v[11]+3174756917&4294967295,I=m+(_<<10&4294967295|_>>>22),_=E+(m^(I|~p))+v[2]+718787259&4294967295,E=I+(_<<15&4294967295|_>>>17),_=p+(I^(E|~m))+v[9]+3951481745&4294967295,T.g[0]=T.g[0]+m&4294967295,T.g[1]=T.g[1]+(E+(_<<21&4294967295|_>>>11))&4294967295,T.g[2]=T.g[2]+E&4294967295,T.g[3]=T.g[3]+I&4294967295}n.prototype.u=function(T,m){m===void 0&&(m=T.length);for(var p=m-this.blockSize,v=this.B,E=this.h,I=0;I<m;){if(E==0)for(;I<=p;)s(this,T,I),I+=this.blockSize;if(typeof T=="string"){for(;I<m;)if(v[E++]=T.charCodeAt(I++),E==this.blockSize){s(this,v),E=0;break}}else for(;I<m;)if(v[E++]=T[I++],E==this.blockSize){s(this,v),E=0;break}}this.h=E,this.o+=m},n.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var m=1;m<T.length-8;++m)T[m]=0;var p=8*this.o;for(m=T.length-8;m<T.length;++m)T[m]=p&255,p/=256;for(this.u(T),T=Array(16),m=p=0;4>m;++m)for(var v=0;32>v;v+=8)T[p++]=this.g[m]>>>v&255;return T};function o(T,m){var p=c;return Object.prototype.hasOwnProperty.call(p,T)?p[T]:p[T]=m(T)}function a(T,m){this.h=m;for(var p=[],v=!0,E=T.length-1;0<=E;E--){var I=T[E]|0;v&&I==m||(p[E]=I,v=!1)}this.g=p}var c={};function h(T){return-128<=T&&128>T?o(T,function(m){return new a([m|0],0>m?-1:0)}):new a([T|0],0>T?-1:0)}function f(T){if(isNaN(T)||!isFinite(T))return S;if(0>T)return L(f(-T));for(var m=[],p=1,v=0;T>=p;v++)m[v]=T/p|0,p*=4294967296;return new a(m,0)}function g(T,m){if(T.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(T.charAt(0)=="-")return L(g(T.substring(1),m));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var p=f(Math.pow(m,8)),v=S,E=0;E<T.length;E+=8){var I=Math.min(8,T.length-E),_=parseInt(T.substring(E,E+I),m);8>I?(I=f(Math.pow(m,I)),v=v.j(I).add(f(_))):(v=v.j(p),v=v.add(f(_)))}return v}var S=h(0),w=h(1),P=h(16777216);r=a.prototype,r.m=function(){if(F(this))return-L(this).m();for(var T=0,m=1,p=0;p<this.g.length;p++){var v=this.i(p);T+=(0<=v?v:4294967296+v)*m,m*=4294967296}return T},r.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(k(this))return"0";if(F(this))return"-"+L(this).toString(T);for(var m=f(Math.pow(T,6)),p=this,v="";;){var E=rt(p,m).g;p=X(p,E.j(m));var I=((0<p.g.length?p.g[0]:p.h)>>>0).toString(T);if(p=E,k(p))return I+v;for(;6>I.length;)I="0"+I;v=I+v}},r.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function k(T){if(T.h!=0)return!1;for(var m=0;m<T.g.length;m++)if(T.g[m]!=0)return!1;return!0}function F(T){return T.h==-1}r.l=function(T){return T=X(this,T),F(T)?-1:k(T)?0:1};function L(T){for(var m=T.g.length,p=[],v=0;v<m;v++)p[v]=~T.g[v];return new a(p,~T.h).add(w)}r.abs=function(){return F(this)?L(this):this},r.add=function(T){for(var m=Math.max(this.g.length,T.g.length),p=[],v=0,E=0;E<=m;E++){var I=v+(this.i(E)&65535)+(T.i(E)&65535),_=(I>>>16)+(this.i(E)>>>16)+(T.i(E)>>>16);v=_>>>16,I&=65535,_&=65535,p[E]=_<<16|I}return new a(p,p[p.length-1]&-2147483648?-1:0)};function X(T,m){return T.add(L(m))}r.j=function(T){if(k(this)||k(T))return S;if(F(this))return F(T)?L(this).j(L(T)):L(L(this).j(T));if(F(T))return L(this.j(L(T)));if(0>this.l(P)&&0>T.l(P))return f(this.m()*T.m());for(var m=this.g.length+T.g.length,p=[],v=0;v<2*m;v++)p[v]=0;for(v=0;v<this.g.length;v++)for(var E=0;E<T.g.length;E++){var I=this.i(v)>>>16,_=this.i(v)&65535,Ct=T.i(E)>>>16,Ut=T.i(E)&65535;p[2*v+2*E]+=_*Ut,G(p,2*v+2*E),p[2*v+2*E+1]+=I*Ut,G(p,2*v+2*E+1),p[2*v+2*E+1]+=_*Ct,G(p,2*v+2*E+1),p[2*v+2*E+2]+=I*Ct,G(p,2*v+2*E+2)}for(v=0;v<m;v++)p[v]=p[2*v+1]<<16|p[2*v];for(v=m;v<2*m;v++)p[v]=0;return new a(p,0)};function G(T,m){for(;(T[m]&65535)!=T[m];)T[m+1]+=T[m]>>>16,T[m]&=65535,m++}function Y(T,m){this.g=T,this.h=m}function rt(T,m){if(k(m))throw Error("division by zero");if(k(T))return new Y(S,S);if(F(T))return m=rt(L(T),m),new Y(L(m.g),L(m.h));if(F(m))return m=rt(T,L(m)),new Y(L(m.g),m.h);if(30<T.g.length){if(F(T)||F(m))throw Error("slowDivide_ only works with positive integers.");for(var p=w,v=m;0>=v.l(T);)p=Lt(p),v=Lt(v);var E=ht(p,1),I=ht(v,1);for(v=ht(v,2),p=ht(p,2);!k(v);){var _=I.add(v);0>=_.l(T)&&(E=E.add(p),I=_),v=ht(v,1),p=ht(p,1)}return m=X(T,E.j(m)),new Y(E,m)}for(E=S;0<=T.l(m);){for(p=Math.max(1,Math.floor(T.m()/m.m())),v=Math.ceil(Math.log(p)/Math.LN2),v=48>=v?1:Math.pow(2,v-48),I=f(p),_=I.j(m);F(_)||0<_.l(T);)p-=v,I=f(p),_=I.j(m);k(I)&&(I=w),E=E.add(I),T=X(T,_)}return new Y(E,T)}r.A=function(T){return rt(this,T).h},r.and=function(T){for(var m=Math.max(this.g.length,T.g.length),p=[],v=0;v<m;v++)p[v]=this.i(v)&T.i(v);return new a(p,this.h&T.h)},r.or=function(T){for(var m=Math.max(this.g.length,T.g.length),p=[],v=0;v<m;v++)p[v]=this.i(v)|T.i(v);return new a(p,this.h|T.h)},r.xor=function(T){for(var m=Math.max(this.g.length,T.g.length),p=[],v=0;v<m;v++)p[v]=this.i(v)^T.i(v);return new a(p,this.h^T.h)};function Lt(T){for(var m=T.g.length+1,p=[],v=0;v<m;v++)p[v]=T.i(v)<<1|T.i(v-1)>>>31;return new a(p,T.h)}function ht(T,m){var p=m>>5;m%=32;for(var v=T.g.length-p,E=[],I=0;I<v;I++)E[I]=0<m?T.i(I+p)>>>m|T.i(I+p+1)<<32-m:T.i(I+p);return new a(E,T.h)}n.prototype.digest=n.prototype.v,n.prototype.reset=n.prototype.s,n.prototype.update=n.prototype.u,Za=n,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=f,a.fromString=g,fe=a}).apply(typeof Go<"u"?Go:typeof self<"u"?self:typeof window<"u"?window:{});var Ar=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var tl,Ln,el,Pr,qs,nl,rl,sl;(function(){var r,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(i,l,u){return i==Array.prototype||i==Object.prototype||(i[l]=u.value),i};function e(i){i=[typeof globalThis=="object"&&globalThis,i,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ar=="object"&&Ar];for(var l=0;l<i.length;++l){var u=i[l];if(u&&u.Math==Math)return u}throw Error("Cannot find global object")}var n=e(this);function s(i,l){if(l)t:{var u=n;i=i.split(".");for(var d=0;d<i.length-1;d++){var A=i[d];if(!(A in u))break t;u=u[A]}i=i[i.length-1],d=u[i],l=l(d),l!=d&&l!=null&&t(u,i,{configurable:!0,writable:!0,value:l})}}function o(i,l){i instanceof String&&(i+="");var u=0,d=!1,A={next:function(){if(!d&&u<i.length){var R=u++;return{value:l(R,i[R]),done:!1}}return d=!0,{done:!0,value:void 0}}};return A[Symbol.iterator]=function(){return A},A}s("Array.prototype.values",function(i){return i||function(){return o(this,function(l,u){return u})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},c=this||self;function h(i){var l=typeof i;return l=l!="object"?l:i?Array.isArray(i)?"array":l:"null",l=="array"||l=="object"&&typeof i.length=="number"}function f(i){var l=typeof i;return l=="object"&&i!=null||l=="function"}function g(i,l,u){return i.call.apply(i.bind,arguments)}function S(i,l,u){if(!i)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var A=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(A,d),i.apply(l,A)}}return function(){return i.apply(l,arguments)}}function w(i,l,u){return w=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?g:S,w.apply(null,arguments)}function P(i,l){var u=Array.prototype.slice.call(arguments,1);return function(){var d=u.slice();return d.push.apply(d,arguments),i.apply(this,d)}}function k(i,l){function u(){}u.prototype=l.prototype,i.aa=l.prototype,i.prototype=new u,i.prototype.constructor=i,i.Qb=function(d,A,R){for(var D=Array(arguments.length-2),J=2;J<arguments.length;J++)D[J-2]=arguments[J];return l.prototype[A].apply(d,D)}}function F(i){const l=i.length;if(0<l){const u=Array(l);for(let d=0;d<l;d++)u[d]=i[d];return u}return[]}function L(i,l){for(let u=1;u<arguments.length;u++){const d=arguments[u];if(h(d)){const A=i.length||0,R=d.length||0;i.length=A+R;for(let D=0;D<R;D++)i[A+D]=d[D]}else i.push(d)}}class X{constructor(l,u){this.i=l,this.j=u,this.h=0,this.g=null}get(){let l;return 0<this.h?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function G(i){return/^[\s\xa0]*$/.test(i)}function Y(){var i=c.navigator;return i&&(i=i.userAgent)?i:""}function rt(i){return rt[" "](i),i}rt[" "]=function(){};var Lt=Y().indexOf("Gecko")!=-1&&!(Y().toLowerCase().indexOf("webkit")!=-1&&Y().indexOf("Edge")==-1)&&!(Y().indexOf("Trident")!=-1||Y().indexOf("MSIE")!=-1)&&Y().indexOf("Edge")==-1;function ht(i,l,u){for(const d in i)l.call(u,i[d],d,i)}function T(i,l){for(const u in i)l.call(void 0,i[u],u,i)}function m(i){const l={};for(const u in i)l[u]=i[u];return l}const p="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function v(i,l){let u,d;for(let A=1;A<arguments.length;A++){d=arguments[A];for(u in d)i[u]=d[u];for(let R=0;R<p.length;R++)u=p[R],Object.prototype.hasOwnProperty.call(d,u)&&(i[u]=d[u])}}function E(i){var l=1;i=i.split(":");const u=[];for(;0<l&&i.length;)u.push(i.shift()),l--;return i.length&&u.push(i.join(":")),u}function I(i){c.setTimeout(()=>{throw i},0)}function _(){var i=Ae;let l=null;return i.g&&(l=i.g,i.g=i.g.next,i.g||(i.h=null),l.next=null),l}class Ct{constructor(){this.h=this.g=null}add(l,u){const d=Ut.get();d.set(l,u),this.h?this.h.next=d:this.g=d,this.h=d}}var Ut=new X(()=>new pn,i=>i.reset());class pn{constructor(){this.next=this.g=this.h=null}set(l,u){this.h=l,this.g=u,this.next=null}reset(){this.next=this.g=this.h=null}}let Wt,Bt=!1,Ae=new Ct,mn=()=>{const i=c.Promise.resolve(void 0);Wt=()=>{i.then(er)}};var er=()=>{for(var i;i=_();){try{i.h.call(i.g)}catch(u){I(u)}var l=Ut;l.j(i),100>l.h&&(l.h++,i.next=l.g,l.g=i)}Bt=!1};function Mt(){this.s=this.s,this.C=this.C}Mt.prototype.s=!1,Mt.prototype.ma=function(){this.s||(this.s=!0,this.N())},Mt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function dt(i,l){this.type=i,this.g=this.target=l,this.defaultPrevented=!1}dt.prototype.h=function(){this.defaultPrevented=!0};var nr=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var i=!1,l=Object.defineProperty({},"passive",{get:function(){i=!0}});try{const u=()=>{};c.addEventListener("test",u,l),c.removeEventListener("test",u,l)}catch{}return i}();function Yt(i,l){if(dt.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i){var u=this.type=i.type,d=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;if(this.target=i.target||i.srcElement,this.g=l,l=i.relatedTarget){if(Lt){t:{try{rt(l.nodeName);var A=!0;break t}catch{}A=!1}A||(l=null)}}else u=="mouseover"?l=i.fromElement:u=="mouseout"&&(l=i.toElement);this.relatedTarget=l,d?(this.clientX=d.clientX!==void 0?d.clientX:d.pageX,this.clientY=d.clientY!==void 0?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=typeof i.pointerType=="string"?i.pointerType:rr[i.pointerType]||"",this.state=i.state,this.i=i,i.defaultPrevented&&Yt.aa.h.call(this)}}k(Yt,dt);var rr={2:"touch",3:"pen",4:"mouse"};Yt.prototype.h=function(){Yt.aa.h.call(this);var i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var Xt="closure_listenable_"+(1e6*Math.random()|0),sr=0;function Oe(i,l,u,d,A){this.listener=i,this.proxy=null,this.src=l,this.type=u,this.capture=!!d,this.ha=A,this.key=++sr,this.da=this.fa=!1}function se(i){i.da=!0,i.listener=null,i.proxy=null,i.src=null,i.ha=null}function Le(i){this.src=i,this.g={},this.h=0}Le.prototype.add=function(i,l,u,d,A){var R=i.toString();i=this.g[R],i||(i=this.g[R]=[],this.h++);var D=yn(i,l,d,A);return-1<D?(l=i[D],u||(l.fa=!1)):(l=new Oe(l,this.src,R,!!d,A),l.fa=u,i.push(l)),l};function gn(i,l){var u=l.type;if(u in i.g){var d=i.g[u],A=Array.prototype.indexOf.call(d,l,void 0),R;(R=0<=A)&&Array.prototype.splice.call(d,A,1),R&&(se(l),i.g[u].length==0&&(delete i.g[u],i.h--))}}function yn(i,l,u,d){for(var A=0;A<i.length;++A){var R=i[A];if(!R.da&&R.listener==l&&R.capture==!!u&&R.ha==d)return A}return-1}var _n="closure_lm_"+(1e6*Math.random()|0),vn={};function En(i,l,u,d,A){if(Array.isArray(l)){for(var R=0;R<l.length;R++)En(i,l[R],u,d,A);return null}return u=or(u),i&&i[Xt]?i.K(l,u,f(d)?!!d.capture:!1,A):cs(i,l,u,!1,d,A)}function cs(i,l,u,d,A,R){if(!l)throw Error("Invalid event type");var D=f(A)?!!A.capture:!!A,J=In(i);if(J||(i[_n]=J=new Le(i)),u=J.add(l,u,d,D,R),u.proxy)return u;if(d=ir(),u.proxy=d,d.src=i,d.listener=u,i.addEventListener)nr||(A=D),A===void 0&&(A=!1),i.addEventListener(l.toString(),d,A);else if(i.attachEvent)i.attachEvent(xe(l.toString()),d);else if(i.addListener&&i.removeListener)i.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");return u}function ir(){function i(u){return l.call(i.src,i.listener,u)}const l=hs;return i}function Tn(i,l,u,d,A){if(Array.isArray(l))for(var R=0;R<l.length;R++)Tn(i,l[R],u,d,A);else d=f(d)?!!d.capture:!!d,u=or(u),i&&i[Xt]?(i=i.i,l=String(l).toString(),l in i.g&&(R=i.g[l],u=yn(R,u,d,A),-1<u&&(se(R[u]),Array.prototype.splice.call(R,u,1),R.length==0&&(delete i.g[l],i.h--)))):i&&(i=In(i))&&(l=i.g[l.toString()],i=-1,l&&(i=yn(l,u,d,A)),(u=-1<i?l[i]:null)&&Me(u))}function Me(i){if(typeof i!="number"&&i&&!i.da){var l=i.src;if(l&&l[Xt])gn(l.i,i);else{var u=i.type,d=i.proxy;l.removeEventListener?l.removeEventListener(u,d,i.capture):l.detachEvent?l.detachEvent(xe(u),d):l.addListener&&l.removeListener&&l.removeListener(d),(u=In(l))?(gn(u,i),u.h==0&&(u.src=null,l[_n]=null)):se(i)}}}function xe(i){return i in vn?vn[i]:vn[i]="on"+i}function hs(i,l){if(i.da)i=!0;else{l=new Yt(l,this);var u=i.listener,d=i.ha||i.src;i.fa&&Me(i),i=u.call(d,l)}return i}function In(i){return i=i[_n],i instanceof Le?i:null}var An="__closure_events_fn_"+(1e9*Math.random()>>>0);function or(i){return typeof i=="function"?i:(i[An]||(i[An]=function(l){return i.handleEvent(l)}),i[An])}function mt(){Mt.call(this),this.i=new Le(this),this.M=this,this.F=null}k(mt,Mt),mt.prototype[Xt]=!0,mt.prototype.removeEventListener=function(i,l,u,d){Tn(this,i,l,u,d)};function _t(i,l){var u,d=i.F;if(d)for(u=[];d;d=d.F)u.push(d);if(i=i.M,d=l.type||l,typeof l=="string")l=new dt(l,i);else if(l instanceof dt)l.target=l.target||i;else{var A=l;l=new dt(d,i),v(l,A)}if(A=!0,u)for(var R=u.length-1;0<=R;R--){var D=l.g=u[R];A=O(D,d,!0,l)&&A}if(D=l.g=i,A=O(D,d,!0,l)&&A,A=O(D,d,!1,l)&&A,u)for(R=0;R<u.length;R++)D=l.g=u[R],A=O(D,d,!1,l)&&A}mt.prototype.N=function(){if(mt.aa.N.call(this),this.i){var i=this.i,l;for(l in i.g){for(var u=i.g[l],d=0;d<u.length;d++)se(u[d]);delete i.g[l],i.h--}}this.F=null},mt.prototype.K=function(i,l,u,d){return this.i.add(String(i),l,!1,u,d)},mt.prototype.L=function(i,l,u,d){return this.i.add(String(i),l,!0,u,d)};function O(i,l,u,d){if(l=i.i.g[String(l)],!l)return!0;l=l.concat();for(var A=!0,R=0;R<l.length;++R){var D=l[R];if(D&&!D.da&&D.capture==u){var J=D.listener,vt=D.ha||D.src;D.fa&&gn(i.i,D),A=J.call(vt,d)!==!1&&A}}return A&&!d.defaultPrevented}function y(i,l,u){if(typeof i=="function")u&&(i=w(i,u));else if(i&&typeof i.handleEvent=="function")i=w(i.handleEvent,i);else throw Error("Invalid listener argument");return 2147483647<Number(l)?-1:c.setTimeout(i,l||0)}function V(i){i.g=y(()=>{i.g=null,i.i&&(i.i=!1,V(i))},i.l);const l=i.h;i.h=null,i.m.apply(null,l)}class M extends Mt{constructor(l,u){super(),this.m=l,this.l=u,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:V(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function U(i){Mt.call(this),this.h=i,this.g={}}k(U,Mt);var Nt=[];function qt(i){ht(i.g,function(l,u){this.g.hasOwnProperty(u)&&Me(l)},i),i.g={}}U.prototype.N=function(){U.aa.N.call(this),qt(this)},U.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var kt=c.JSON.stringify,Fe=c.JSON.parse,ds=class{stringify(i){return c.JSON.stringify(i,void 0)}parse(i){return c.JSON.parse(i,void 0)}};function Ue(){}Ue.prototype.h=null;function it(i){return i.h||(i.h=i.i())}function ar(){}var Jt={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ie(){dt.call(this,"d")}k(ie,dt);function fs(){dt.call(this,"c")}k(fs,dt);var we={},qi=null;function lr(){return qi=qi||new mt}we.La="serverreachability";function ji(i){dt.call(this,we.La,i)}k(ji,dt);function wn(i){const l=lr();_t(l,new ji(l))}we.STAT_EVENT="statevent";function Gi(i,l){dt.call(this,we.STAT_EVENT,i),this.stat=l}k(Gi,dt);function Pt(i){const l=lr();_t(l,new Gi(l,i))}we.Ma="timingevent";function zi(i,l){dt.call(this,we.Ma,i),this.size=l}k(zi,dt);function Sn(i,l){if(typeof i!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){i()},l)}function Rn(){this.g=!0}Rn.prototype.xa=function(){this.g=!1};function wu(i,l,u,d,A,R){i.info(function(){if(i.g)if(R)for(var D="",J=R.split("&"),vt=0;vt<J.length;vt++){var W=J[vt].split("=");if(1<W.length){var It=W[0];W=W[1];var At=It.split("_");D=2<=At.length&&At[1]=="type"?D+(It+"="+W+"&"):D+(It+"=redacted&")}}else D=null;else D=R;return"XMLHTTP REQ ("+d+") [attempt "+A+"]: "+l+`
`+u+`
`+D})}function Su(i,l,u,d,A,R,D){i.info(function(){return"XMLHTTP RESP ("+d+") [ attempt "+A+"]: "+l+`
`+u+`
`+R+" "+D})}function Be(i,l,u,d){i.info(function(){return"XMLHTTP TEXT ("+l+"): "+bu(i,u)+(d?" "+d:"")})}function Ru(i,l){i.info(function(){return"TIMEOUT: "+l})}Rn.prototype.info=function(){};function bu(i,l){if(!i.g)return l;if(!l)return null;try{var u=JSON.parse(l);if(u){for(i=0;i<u.length;i++)if(Array.isArray(u[i])){var d=u[i];if(!(2>d.length)){var A=d[1];if(Array.isArray(A)&&!(1>A.length)){var R=A[0];if(R!="noop"&&R!="stop"&&R!="close")for(var D=1;D<A.length;D++)A[D]=""}}}}return kt(u)}catch{return l}}var ur={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Hi={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ps;function cr(){}k(cr,Ue),cr.prototype.g=function(){return new XMLHttpRequest},cr.prototype.i=function(){return{}},ps=new cr;function oe(i,l,u,d){this.j=i,this.i=l,this.l=u,this.R=d||1,this.U=new U(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ki}function Ki(){this.i=null,this.g="",this.h=!1}var $i={},ms={};function gs(i,l,u){i.L=1,i.v=pr(Zt(l)),i.m=u,i.P=!0,Qi(i,null)}function Qi(i,l){i.F=Date.now(),hr(i),i.A=Zt(i.v);var u=i.A,d=i.R;Array.isArray(d)||(d=[String(d)]),lo(u.i,"t",d),i.C=0,u=i.j.J,i.h=new Ki,i.g=bo(i.j,u?l:null,!i.m),0<i.O&&(i.M=new M(w(i.Y,i,i.g),i.O)),l=i.U,u=i.g,d=i.ca;var A="readystatechange";Array.isArray(A)||(A&&(Nt[0]=A.toString()),A=Nt);for(var R=0;R<A.length;R++){var D=En(u,A[R],d||l.handleEvent,!1,l.h||l);if(!D)break;l.g[D.key]=D}l=i.H?m(i.H):{},i.m?(i.u||(i.u="POST"),l["Content-Type"]="application/x-www-form-urlencoded",i.g.ea(i.A,i.u,i.m,l)):(i.u="GET",i.g.ea(i.A,i.u,null,l)),wn(),wu(i.i,i.u,i.A,i.l,i.R,i.m)}oe.prototype.ca=function(i){i=i.target;const l=this.M;l&&te(i)==3?l.j():this.Y(i)},oe.prototype.Y=function(i){try{if(i==this.g)t:{const At=te(this.g);var l=this.g.Ba();const Ge=this.g.Z();if(!(3>At)&&(At!=3||this.g&&(this.h.h||this.g.oa()||go(this.g)))){this.J||At!=4||l==7||(l==8||0>=Ge?wn(3):wn(2)),ys(this);var u=this.g.Z();this.X=u;e:if(Wi(this)){var d=go(this.g);i="";var A=d.length,R=te(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Se(this),bn(this);var D="";break e}this.h.i=new c.TextDecoder}for(l=0;l<A;l++)this.h.h=!0,i+=this.h.i.decode(d[l],{stream:!(R&&l==A-1)});d.length=0,this.h.g+=i,this.C=0,D=this.h.g}else D=this.g.oa();if(this.o=u==200,Su(this.i,this.u,this.A,this.l,this.R,At,u),this.o){if(this.T&&!this.K){e:{if(this.g){var J,vt=this.g;if((J=vt.g?vt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!G(J)){var W=J;break e}}W=null}if(u=W)Be(this.i,this.l,u,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,_s(this,u);else{this.o=!1,this.s=3,Pt(12),Se(this),bn(this);break t}}if(this.P){u=!0;let xt;for(;!this.J&&this.C<D.length;)if(xt=Cu(this,D),xt==ms){At==4&&(this.s=4,Pt(14),u=!1),Be(this.i,this.l,null,"[Incomplete Response]");break}else if(xt==$i){this.s=4,Pt(15),Be(this.i,this.l,D,"[Invalid Chunk]"),u=!1;break}else Be(this.i,this.l,xt,null),_s(this,xt);if(Wi(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),At!=4||D.length!=0||this.h.h||(this.s=1,Pt(16),u=!1),this.o=this.o&&u,!u)Be(this.i,this.l,D,"[Invalid Chunked Response]"),Se(this),bn(this);else if(0<D.length&&!this.W){this.W=!0;var It=this.j;It.g==this&&It.ba&&!It.M&&(It.j.info("Great, no buffering proxy detected. Bytes received: "+D.length),ws(It),It.M=!0,Pt(11))}}else Be(this.i,this.l,D,null),_s(this,D);At==4&&Se(this),this.o&&!this.J&&(At==4?Ao(this.j,this):(this.o=!1,hr(this)))}else Hu(this.g),u==400&&0<D.indexOf("Unknown SID")?(this.s=3,Pt(12)):(this.s=0,Pt(13)),Se(this),bn(this)}}}catch{}finally{}};function Wi(i){return i.g?i.u=="GET"&&i.L!=2&&i.j.Ca:!1}function Cu(i,l){var u=i.C,d=l.indexOf(`
`,u);return d==-1?ms:(u=Number(l.substring(u,d)),isNaN(u)?$i:(d+=1,d+u>l.length?ms:(l=l.slice(d,d+u),i.C=d+u,l)))}oe.prototype.cancel=function(){this.J=!0,Se(this)};function hr(i){i.S=Date.now()+i.I,Yi(i,i.I)}function Yi(i,l){if(i.B!=null)throw Error("WatchDog timer not null");i.B=Sn(w(i.ba,i),l)}function ys(i){i.B&&(c.clearTimeout(i.B),i.B=null)}oe.prototype.ba=function(){this.B=null;const i=Date.now();0<=i-this.S?(Ru(this.i,this.A),this.L!=2&&(wn(),Pt(17)),Se(this),this.s=2,bn(this)):Yi(this,this.S-i)};function bn(i){i.j.G==0||i.J||Ao(i.j,i)}function Se(i){ys(i);var l=i.M;l&&typeof l.ma=="function"&&l.ma(),i.M=null,qt(i.U),i.g&&(l=i.g,i.g=null,l.abort(),l.ma())}function _s(i,l){try{var u=i.j;if(u.G!=0&&(u.g==i||vs(u.h,i))){if(!i.K&&vs(u.h,i)&&u.G==3){try{var d=u.Da.g.parse(l)}catch{d=null}if(Array.isArray(d)&&d.length==3){var A=d;if(A[0]==0){t:if(!u.u){if(u.g)if(u.g.F+3e3<i.F)Er(u),_r(u);else break t;As(u),Pt(18)}}else u.za=A[1],0<u.za-u.T&&37500>A[2]&&u.F&&u.v==0&&!u.C&&(u.C=Sn(w(u.Za,u),6e3));if(1>=Zi(u.h)&&u.ca){try{u.ca()}catch{}u.ca=void 0}}else be(u,11)}else if((i.K||u.g==i)&&Er(u),!G(l))for(A=u.Da.g.parse(l),l=0;l<A.length;l++){let W=A[l];if(u.T=W[0],W=W[1],u.G==2)if(W[0]=="c"){u.K=W[1],u.ia=W[2];const It=W[3];It!=null&&(u.la=It,u.j.info("VER="+u.la));const At=W[4];At!=null&&(u.Aa=At,u.j.info("SVER="+u.Aa));const Ge=W[5];Ge!=null&&typeof Ge=="number"&&0<Ge&&(d=1.5*Ge,u.L=d,u.j.info("backChannelRequestTimeoutMs_="+d)),d=u;const xt=i.g;if(xt){const Ir=xt.g?xt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ir){var R=d.h;R.g||Ir.indexOf("spdy")==-1&&Ir.indexOf("quic")==-1&&Ir.indexOf("h2")==-1||(R.j=R.l,R.g=new Set,R.h&&(Es(R,R.h),R.h=null))}if(d.D){const Ss=xt.g?xt.g.getResponseHeader("X-HTTP-Session-Id"):null;Ss&&(d.ya=Ss,tt(d.I,d.D,Ss))}}u.G=3,u.l&&u.l.ua(),u.ba&&(u.R=Date.now()-i.F,u.j.info("Handshake RTT: "+u.R+"ms")),d=u;var D=i;if(d.qa=Ro(d,d.J?d.ia:null,d.W),D.K){to(d.h,D);var J=D,vt=d.L;vt&&(J.I=vt),J.B&&(ys(J),hr(J)),d.g=D}else To(d);0<u.i.length&&vr(u)}else W[0]!="stop"&&W[0]!="close"||be(u,7);else u.G==3&&(W[0]=="stop"||W[0]=="close"?W[0]=="stop"?be(u,7):Is(u):W[0]!="noop"&&u.l&&u.l.ta(W),u.v=0)}}wn(4)}catch{}}var Pu=class{constructor(i,l){this.g=i,this.map=l}};function Xi(i){this.l=i||10,c.PerformanceNavigationTiming?(i=c.performance.getEntriesByType("navigation"),i=0<i.length&&(i[0].nextHopProtocol=="hq"||i[0].nextHopProtocol=="h2")):i=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=i?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ji(i){return i.h?!0:i.g?i.g.size>=i.j:!1}function Zi(i){return i.h?1:i.g?i.g.size:0}function vs(i,l){return i.h?i.h==l:i.g?i.g.has(l):!1}function Es(i,l){i.g?i.g.add(l):i.h=l}function to(i,l){i.h&&i.h==l?i.h=null:i.g&&i.g.has(l)&&i.g.delete(l)}Xi.prototype.cancel=function(){if(this.i=eo(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const i of this.g.values())i.cancel();this.g.clear()}};function eo(i){if(i.h!=null)return i.i.concat(i.h.D);if(i.g!=null&&i.g.size!==0){let l=i.i;for(const u of i.g.values())l=l.concat(u.D);return l}return F(i.i)}function Vu(i){if(i.V&&typeof i.V=="function")return i.V();if(typeof Map<"u"&&i instanceof Map||typeof Set<"u"&&i instanceof Set)return Array.from(i.values());if(typeof i=="string")return i.split("");if(h(i)){for(var l=[],u=i.length,d=0;d<u;d++)l.push(i[d]);return l}l=[],u=0;for(d in i)l[u++]=i[d];return l}function Du(i){if(i.na&&typeof i.na=="function")return i.na();if(!i.V||typeof i.V!="function"){if(typeof Map<"u"&&i instanceof Map)return Array.from(i.keys());if(!(typeof Set<"u"&&i instanceof Set)){if(h(i)||typeof i=="string"){var l=[];i=i.length;for(var u=0;u<i;u++)l.push(u);return l}l=[],u=0;for(const d in i)l[u++]=d;return l}}}function no(i,l){if(i.forEach&&typeof i.forEach=="function")i.forEach(l,void 0);else if(h(i)||typeof i=="string")Array.prototype.forEach.call(i,l,void 0);else for(var u=Du(i),d=Vu(i),A=d.length,R=0;R<A;R++)l.call(void 0,d[R],u&&u[R],i)}var ro=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Nu(i,l){if(i){i=i.split("&");for(var u=0;u<i.length;u++){var d=i[u].indexOf("="),A=null;if(0<=d){var R=i[u].substring(0,d);A=i[u].substring(d+1)}else R=i[u];l(R,A?decodeURIComponent(A.replace(/\+/g," ")):"")}}}function Re(i){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,i instanceof Re){this.h=i.h,dr(this,i.j),this.o=i.o,this.g=i.g,fr(this,i.s),this.l=i.l;var l=i.i,u=new Vn;u.i=l.i,l.g&&(u.g=new Map(l.g),u.h=l.h),so(this,u),this.m=i.m}else i&&(l=String(i).match(ro))?(this.h=!1,dr(this,l[1]||"",!0),this.o=Cn(l[2]||""),this.g=Cn(l[3]||"",!0),fr(this,l[4]),this.l=Cn(l[5]||"",!0),so(this,l[6]||"",!0),this.m=Cn(l[7]||"")):(this.h=!1,this.i=new Vn(null,this.h))}Re.prototype.toString=function(){var i=[],l=this.j;l&&i.push(Pn(l,io,!0),":");var u=this.g;return(u||l=="file")&&(i.push("//"),(l=this.o)&&i.push(Pn(l,io,!0),"@"),i.push(encodeURIComponent(String(u)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u=this.s,u!=null&&i.push(":",String(u))),(u=this.l)&&(this.g&&u.charAt(0)!="/"&&i.push("/"),i.push(Pn(u,u.charAt(0)=="/"?Lu:Ou,!0))),(u=this.i.toString())&&i.push("?",u),(u=this.m)&&i.push("#",Pn(u,xu)),i.join("")};function Zt(i){return new Re(i)}function dr(i,l,u){i.j=u?Cn(l,!0):l,i.j&&(i.j=i.j.replace(/:$/,""))}function fr(i,l){if(l){if(l=Number(l),isNaN(l)||0>l)throw Error("Bad port number "+l);i.s=l}else i.s=null}function so(i,l,u){l instanceof Vn?(i.i=l,Fu(i.i,i.h)):(u||(l=Pn(l,Mu)),i.i=new Vn(l,i.h))}function tt(i,l,u){i.i.set(l,u)}function pr(i){return tt(i,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),i}function Cn(i,l){return i?l?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function Pn(i,l,u){return typeof i=="string"?(i=encodeURI(i).replace(l,ku),u&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function ku(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var io=/[#\/\?@]/g,Ou=/[#\?:]/g,Lu=/[#\?]/g,Mu=/[#\?@]/g,xu=/#/g;function Vn(i,l){this.h=this.g=null,this.i=i||null,this.j=!!l}function ae(i){i.g||(i.g=new Map,i.h=0,i.i&&Nu(i.i,function(l,u){i.add(decodeURIComponent(l.replace(/\+/g," ")),u)}))}r=Vn.prototype,r.add=function(i,l){ae(this),this.i=null,i=qe(this,i);var u=this.g.get(i);return u||this.g.set(i,u=[]),u.push(l),this.h+=1,this};function oo(i,l){ae(i),l=qe(i,l),i.g.has(l)&&(i.i=null,i.h-=i.g.get(l).length,i.g.delete(l))}function ao(i,l){return ae(i),l=qe(i,l),i.g.has(l)}r.forEach=function(i,l){ae(this),this.g.forEach(function(u,d){u.forEach(function(A){i.call(l,A,d,this)},this)},this)},r.na=function(){ae(this);const i=Array.from(this.g.values()),l=Array.from(this.g.keys()),u=[];for(let d=0;d<l.length;d++){const A=i[d];for(let R=0;R<A.length;R++)u.push(l[d])}return u},r.V=function(i){ae(this);let l=[];if(typeof i=="string")ao(this,i)&&(l=l.concat(this.g.get(qe(this,i))));else{i=Array.from(this.g.values());for(let u=0;u<i.length;u++)l=l.concat(i[u])}return l},r.set=function(i,l){return ae(this),this.i=null,i=qe(this,i),ao(this,i)&&(this.h-=this.g.get(i).length),this.g.set(i,[l]),this.h+=1,this},r.get=function(i,l){return i?(i=this.V(i),0<i.length?String(i[0]):l):l};function lo(i,l,u){oo(i,l),0<u.length&&(i.i=null,i.g.set(qe(i,l),F(u)),i.h+=u.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const i=[],l=Array.from(this.g.keys());for(var u=0;u<l.length;u++){var d=l[u];const R=encodeURIComponent(String(d)),D=this.V(d);for(d=0;d<D.length;d++){var A=R;D[d]!==""&&(A+="="+encodeURIComponent(String(D[d]))),i.push(A)}}return this.i=i.join("&")};function qe(i,l){return l=String(l),i.j&&(l=l.toLowerCase()),l}function Fu(i,l){l&&!i.j&&(ae(i),i.i=null,i.g.forEach(function(u,d){var A=d.toLowerCase();d!=A&&(oo(this,d),lo(this,A,u))},i)),i.j=l}function Uu(i,l){const u=new Rn;if(c.Image){const d=new Image;d.onload=P(le,u,"TestLoadImage: loaded",!0,l,d),d.onerror=P(le,u,"TestLoadImage: error",!1,l,d),d.onabort=P(le,u,"TestLoadImage: abort",!1,l,d),d.ontimeout=P(le,u,"TestLoadImage: timeout",!1,l,d),c.setTimeout(function(){d.ontimeout&&d.ontimeout()},1e4),d.src=i}else l(!1)}function Bu(i,l){const u=new Rn,d=new AbortController,A=setTimeout(()=>{d.abort(),le(u,"TestPingServer: timeout",!1,l)},1e4);fetch(i,{signal:d.signal}).then(R=>{clearTimeout(A),R.ok?le(u,"TestPingServer: ok",!0,l):le(u,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(A),le(u,"TestPingServer: error",!1,l)})}function le(i,l,u,d,A){try{A&&(A.onload=null,A.onerror=null,A.onabort=null,A.ontimeout=null),d(u)}catch{}}function qu(){this.g=new ds}function ju(i,l,u){const d=u||"";try{no(i,function(A,R){let D=A;f(A)&&(D=kt(A)),l.push(d+R+"="+encodeURIComponent(D))})}catch(A){throw l.push(d+"type="+encodeURIComponent("_badmap")),A}}function mr(i){this.l=i.Ub||null,this.j=i.eb||!1}k(mr,Ue),mr.prototype.g=function(){return new gr(this.l,this.j)},mr.prototype.i=function(i){return function(){return i}}({});function gr(i,l){mt.call(this),this.D=i,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}k(gr,mt),r=gr.prototype,r.open=function(i,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=i,this.A=l,this.readyState=1,Nn(this)},r.send=function(i){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const l={headers:this.u,method:this.B,credentials:this.m,cache:void 0};i&&(l.body=i),(this.D||c).fetch(new Request(this.A,l)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Dn(this)),this.readyState=0},r.Sa=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,Nn(this)),this.g&&(this.readyState=3,Nn(this),this.g)))if(this.responseType==="arraybuffer")i.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in i){if(this.j=i.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;uo(this)}else i.text().then(this.Ra.bind(this),this.ga.bind(this))};function uo(i){i.j.read().then(i.Pa.bind(i)).catch(i.ga.bind(i))}r.Pa=function(i){if(this.g){if(this.o&&i.value)this.response.push(i.value);else if(!this.o){var l=i.value?i.value:new Uint8Array(0);(l=this.v.decode(l,{stream:!i.done}))&&(this.response=this.responseText+=l)}i.done?Dn(this):Nn(this),this.readyState==3&&uo(this)}},r.Ra=function(i){this.g&&(this.response=this.responseText=i,Dn(this))},r.Qa=function(i){this.g&&(this.response=i,Dn(this))},r.ga=function(){this.g&&Dn(this)};function Dn(i){i.readyState=4,i.l=null,i.j=null,i.v=null,Nn(i)}r.setRequestHeader=function(i,l){this.u.append(i,l)},r.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const i=[],l=this.h.entries();for(var u=l.next();!u.done;)u=u.value,i.push(u[0]+": "+u[1]),u=l.next();return i.join(`\r
`)};function Nn(i){i.onreadystatechange&&i.onreadystatechange.call(i)}Object.defineProperty(gr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(i){this.m=i?"include":"same-origin"}});function co(i){let l="";return ht(i,function(u,d){l+=d,l+=":",l+=u,l+=`\r
`}),l}function Ts(i,l,u){t:{for(d in u){var d=!1;break t}d=!0}d||(u=co(u),typeof i=="string"?u!=null&&encodeURIComponent(String(u)):tt(i,l,u))}function st(i){mt.call(this),this.headers=new Map,this.o=i||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}k(st,mt);var Gu=/^https?$/i,zu=["POST","PUT"];r=st.prototype,r.Ha=function(i){this.J=i},r.ea=function(i,l,u,d){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+i);l=l?l.toUpperCase():"GET",this.D=i,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ps.g(),this.v=this.o?it(this.o):it(ps),this.g.onreadystatechange=w(this.Ea,this);try{this.B=!0,this.g.open(l,String(i),!0),this.B=!1}catch(R){ho(this,R);return}if(i=u||"",u=new Map(this.headers),d)if(Object.getPrototypeOf(d)===Object.prototype)for(var A in d)u.set(A,d[A]);else if(typeof d.keys=="function"&&typeof d.get=="function")for(const R of d.keys())u.set(R,d.get(R));else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(u.keys()).find(R=>R.toLowerCase()=="content-type"),A=c.FormData&&i instanceof c.FormData,!(0<=Array.prototype.indexOf.call(zu,l,void 0))||d||A||u.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[R,D]of u)this.g.setRequestHeader(R,D);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{mo(this),this.u=!0,this.g.send(i),this.u=!1}catch(R){ho(this,R)}};function ho(i,l){i.h=!1,i.g&&(i.j=!0,i.g.abort(),i.j=!1),i.l=l,i.m=5,fo(i),yr(i)}function fo(i){i.A||(i.A=!0,_t(i,"complete"),_t(i,"error"))}r.abort=function(i){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=i||7,_t(this,"complete"),_t(this,"abort"),yr(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),yr(this,!0)),st.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?po(this):this.bb())},r.bb=function(){po(this)};function po(i){if(i.h&&typeof a<"u"&&(!i.v[1]||te(i)!=4||i.Z()!=2)){if(i.u&&te(i)==4)y(i.Ea,0,i);else if(_t(i,"readystatechange"),te(i)==4){i.h=!1;try{const D=i.Z();t:switch(D){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break t;default:l=!1}var u;if(!(u=l)){var d;if(d=D===0){var A=String(i.D).match(ro)[1]||null;!A&&c.self&&c.self.location&&(A=c.self.location.protocol.slice(0,-1)),d=!Gu.test(A?A.toLowerCase():"")}u=d}if(u)_t(i,"complete"),_t(i,"success");else{i.m=6;try{var R=2<te(i)?i.g.statusText:""}catch{R=""}i.l=R+" ["+i.Z()+"]",fo(i)}}finally{yr(i)}}}}function yr(i,l){if(i.g){mo(i);const u=i.g,d=i.v[0]?()=>{}:null;i.g=null,i.v=null,l||_t(i,"ready");try{u.onreadystatechange=d}catch{}}}function mo(i){i.I&&(c.clearTimeout(i.I),i.I=null)}r.isActive=function(){return!!this.g};function te(i){return i.g?i.g.readyState:0}r.Z=function(){try{return 2<te(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(i){if(this.g){var l=this.g.responseText;return i&&l.indexOf(i)==0&&(l=l.substring(i.length)),Fe(l)}};function go(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.H){case"":case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch{return null}}function Hu(i){const l={};i=(i.g&&2<=te(i)&&i.g.getAllResponseHeaders()||"").split(`\r
`);for(let d=0;d<i.length;d++){if(G(i[d]))continue;var u=E(i[d]);const A=u[0];if(u=u[1],typeof u!="string")continue;u=u.trim();const R=l[A]||[];l[A]=R,R.push(u)}T(l,function(d){return d.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function kn(i,l,u){return u&&u.internalChannelParams&&u.internalChannelParams[i]||l}function yo(i){this.Aa=0,this.i=[],this.j=new Rn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=kn("failFast",!1,i),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=kn("baseRetryDelayMs",5e3,i),this.cb=kn("retryDelaySeedMs",1e4,i),this.Wa=kn("forwardChannelMaxRetries",2,i),this.wa=kn("forwardChannelRequestTimeoutMs",2e4,i),this.pa=i&&i.xmlHttpFactory||void 0,this.Xa=i&&i.Tb||void 0,this.Ca=i&&i.useFetchStreams||!1,this.L=void 0,this.J=i&&i.supportsCrossDomainXhr||!1,this.K="",this.h=new Xi(i&&i.concurrentRequestLimit),this.Da=new qu,this.P=i&&i.fastHandshake||!1,this.O=i&&i.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=i&&i.Rb||!1,i&&i.xa&&this.j.xa(),i&&i.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&i&&i.detectBufferingProxy||!1,this.ja=void 0,i&&i.longPollingTimeout&&0<i.longPollingTimeout&&(this.ja=i.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=yo.prototype,r.la=8,r.G=1,r.connect=function(i,l,u,d){Pt(0),this.W=i,this.H=l||{},u&&d!==void 0&&(this.H.OSID=u,this.H.OAID=d),this.F=this.X,this.I=Ro(this,null,this.W),vr(this)};function Is(i){if(_o(i),i.G==3){var l=i.U++,u=Zt(i.I);if(tt(u,"SID",i.K),tt(u,"RID",l),tt(u,"TYPE","terminate"),On(i,u),l=new oe(i,i.j,l),l.L=2,l.v=pr(Zt(u)),u=!1,c.navigator&&c.navigator.sendBeacon)try{u=c.navigator.sendBeacon(l.v.toString(),"")}catch{}!u&&c.Image&&(new Image().src=l.v,u=!0),u||(l.g=bo(l.j,null),l.g.ea(l.v)),l.F=Date.now(),hr(l)}So(i)}function _r(i){i.g&&(ws(i),i.g.cancel(),i.g=null)}function _o(i){_r(i),i.u&&(c.clearTimeout(i.u),i.u=null),Er(i),i.h.cancel(),i.s&&(typeof i.s=="number"&&c.clearTimeout(i.s),i.s=null)}function vr(i){if(!Ji(i.h)&&!i.s){i.s=!0;var l=i.Ga;Wt||mn(),Bt||(Wt(),Bt=!0),Ae.add(l,i),i.B=0}}function Ku(i,l){return Zi(i.h)>=i.h.j-(i.s?1:0)?!1:i.s?(i.i=l.D.concat(i.i),!0):i.G==1||i.G==2||i.B>=(i.Va?0:i.Wa)?!1:(i.s=Sn(w(i.Ga,i,l),wo(i,i.B)),i.B++,!0)}r.Ga=function(i){if(this.s)if(this.s=null,this.G==1){if(!i){this.U=Math.floor(1e5*Math.random()),i=this.U++;const A=new oe(this,this.j,i);let R=this.o;if(this.S&&(R?(R=m(R),v(R,this.S)):R=this.S),this.m!==null||this.O||(A.H=R,R=null),this.P)t:{for(var l=0,u=0;u<this.i.length;u++){e:{var d=this.i[u];if("__data__"in d.map&&(d=d.map.__data__,typeof d=="string")){d=d.length;break e}d=void 0}if(d===void 0)break;if(l+=d,4096<l){l=u;break t}if(l===4096||u===this.i.length-1){l=u+1;break t}}l=1e3}else l=1e3;l=Eo(this,A,l),u=Zt(this.I),tt(u,"RID",i),tt(u,"CVER",22),this.D&&tt(u,"X-HTTP-Session-Id",this.D),On(this,u),R&&(this.O?l="headers="+encodeURIComponent(String(co(R)))+"&"+l:this.m&&Ts(u,this.m,R)),Es(this.h,A),this.Ua&&tt(u,"TYPE","init"),this.P?(tt(u,"$req",l),tt(u,"SID","null"),A.T=!0,gs(A,u,null)):gs(A,u,l),this.G=2}}else this.G==3&&(i?vo(this,i):this.i.length==0||Ji(this.h)||vo(this))};function vo(i,l){var u;l?u=l.l:u=i.U++;const d=Zt(i.I);tt(d,"SID",i.K),tt(d,"RID",u),tt(d,"AID",i.T),On(i,d),i.m&&i.o&&Ts(d,i.m,i.o),u=new oe(i,i.j,u,i.B+1),i.m===null&&(u.H=i.o),l&&(i.i=l.D.concat(i.i)),l=Eo(i,u,1e3),u.I=Math.round(.5*i.wa)+Math.round(.5*i.wa*Math.random()),Es(i.h,u),gs(u,d,l)}function On(i,l){i.H&&ht(i.H,function(u,d){tt(l,d,u)}),i.l&&no({},function(u,d){tt(l,d,u)})}function Eo(i,l,u){u=Math.min(i.i.length,u);var d=i.l?w(i.l.Na,i.l,i):null;t:{var A=i.i;let R=-1;for(;;){const D=["count="+u];R==-1?0<u?(R=A[0].g,D.push("ofs="+R)):R=0:D.push("ofs="+R);let J=!0;for(let vt=0;vt<u;vt++){let W=A[vt].g;const It=A[vt].map;if(W-=R,0>W)R=Math.max(0,A[vt].g-100),J=!1;else try{ju(It,D,"req"+W+"_")}catch{d&&d(It)}}if(J){d=D.join("&");break t}}}return i=i.i.splice(0,u),l.D=i,d}function To(i){if(!i.g&&!i.u){i.Y=1;var l=i.Fa;Wt||mn(),Bt||(Wt(),Bt=!0),Ae.add(l,i),i.v=0}}function As(i){return i.g||i.u||3<=i.v?!1:(i.Y++,i.u=Sn(w(i.Fa,i),wo(i,i.v)),i.v++,!0)}r.Fa=function(){if(this.u=null,Io(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var i=2*this.R;this.j.info("BP detection timer enabled: "+i),this.A=Sn(w(this.ab,this),i)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Pt(10),_r(this),Io(this))};function ws(i){i.A!=null&&(c.clearTimeout(i.A),i.A=null)}function Io(i){i.g=new oe(i,i.j,"rpc",i.Y),i.m===null&&(i.g.H=i.o),i.g.O=0;var l=Zt(i.qa);tt(l,"RID","rpc"),tt(l,"SID",i.K),tt(l,"AID",i.T),tt(l,"CI",i.F?"0":"1"),!i.F&&i.ja&&tt(l,"TO",i.ja),tt(l,"TYPE","xmlhttp"),On(i,l),i.m&&i.o&&Ts(l,i.m,i.o),i.L&&(i.g.I=i.L);var u=i.g;i=i.ia,u.L=1,u.v=pr(Zt(l)),u.m=null,u.P=!0,Qi(u,i)}r.Za=function(){this.C!=null&&(this.C=null,_r(this),As(this),Pt(19))};function Er(i){i.C!=null&&(c.clearTimeout(i.C),i.C=null)}function Ao(i,l){var u=null;if(i.g==l){Er(i),ws(i),i.g=null;var d=2}else if(vs(i.h,l))u=l.D,to(i.h,l),d=1;else return;if(i.G!=0){if(l.o)if(d==1){u=l.m?l.m.length:0,l=Date.now()-l.F;var A=i.B;d=lr(),_t(d,new zi(d,u)),vr(i)}else To(i);else if(A=l.s,A==3||A==0&&0<l.X||!(d==1&&Ku(i,l)||d==2&&As(i)))switch(u&&0<u.length&&(l=i.h,l.i=l.i.concat(u)),A){case 1:be(i,5);break;case 4:be(i,10);break;case 3:be(i,6);break;default:be(i,2)}}}function wo(i,l){let u=i.Ta+Math.floor(Math.random()*i.cb);return i.isActive()||(u*=2),u*l}function be(i,l){if(i.j.info("Error code "+l),l==2){var u=w(i.fb,i),d=i.Xa;const A=!d;d=new Re(d||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||dr(d,"https"),pr(d),A?Uu(d.toString(),u):Bu(d.toString(),u)}else Pt(2);i.G=0,i.l&&i.l.sa(l),So(i),_o(i)}r.fb=function(i){i?(this.j.info("Successfully pinged google.com"),Pt(2)):(this.j.info("Failed to ping google.com"),Pt(1))};function So(i){if(i.G=0,i.ka=[],i.l){const l=eo(i.h);(l.length!=0||i.i.length!=0)&&(L(i.ka,l),L(i.ka,i.i),i.h.i.length=0,F(i.i),i.i.length=0),i.l.ra()}}function Ro(i,l,u){var d=u instanceof Re?Zt(u):new Re(u);if(d.g!="")l&&(d.g=l+"."+d.g),fr(d,d.s);else{var A=c.location;d=A.protocol,l=l?l+"."+A.hostname:A.hostname,A=+A.port;var R=new Re(null);d&&dr(R,d),l&&(R.g=l),A&&fr(R,A),u&&(R.l=u),d=R}return u=i.D,l=i.ya,u&&l&&tt(d,u,l),tt(d,"VER",i.la),On(i,d),d}function bo(i,l,u){if(l&&!i.J)throw Error("Can't create secondary domain capable XhrIo object.");return l=i.Ca&&!i.pa?new st(new mr({eb:u})):new st(i.pa),l.Ha(i.J),l}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function Co(){}r=Co.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function Tr(){}Tr.prototype.g=function(i,l){return new Dt(i,l)};function Dt(i,l){mt.call(this),this.g=new yo(l),this.l=i,this.h=l&&l.messageUrlParams||null,i=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.o=i,i=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(i?i["X-WebChannel-Content-Type"]=l.messageContentType:i={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.va&&(i?i["X-WebChannel-Client-Profile"]=l.va:i={"X-WebChannel-Client-Profile":l.va}),this.g.S=i,(i=l&&l.Sb)&&!G(i)&&(this.g.m=i),this.v=l&&l.supportsCrossDomainXhr||!1,this.u=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!G(l)&&(this.g.D=l,i=this.h,i!==null&&l in i&&(i=this.h,l in i&&delete i[l])),this.j=new je(this)}k(Dt,mt),Dt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Dt.prototype.close=function(){Is(this.g)},Dt.prototype.o=function(i){var l=this.g;if(typeof i=="string"){var u={};u.__data__=i,i=u}else this.u&&(u={},u.__data__=kt(i),i=u);l.i.push(new Pu(l.Ya++,i)),l.G==3&&vr(l)},Dt.prototype.N=function(){this.g.l=null,delete this.j,Is(this.g),delete this.g,Dt.aa.N.call(this)};function Po(i){ie.call(this),i.__headers__&&(this.headers=i.__headers__,this.statusCode=i.__status__,delete i.__headers__,delete i.__status__);var l=i.__sm__;if(l){t:{for(const u in l){i=u;break t}i=void 0}(this.i=i)&&(i=this.i,l=l!==null&&i in l?l[i]:void 0),this.data=l}else this.data=i}k(Po,ie);function Vo(){fs.call(this),this.status=1}k(Vo,fs);function je(i){this.g=i}k(je,Co),je.prototype.ua=function(){_t(this.g,"a")},je.prototype.ta=function(i){_t(this.g,new Po(i))},je.prototype.sa=function(i){_t(this.g,new Vo)},je.prototype.ra=function(){_t(this.g,"b")},Tr.prototype.createWebChannel=Tr.prototype.g,Dt.prototype.send=Dt.prototype.o,Dt.prototype.open=Dt.prototype.m,Dt.prototype.close=Dt.prototype.close,sl=function(){return new Tr},rl=function(){return lr()},nl=we,qs={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ur.NO_ERROR=0,ur.TIMEOUT=8,ur.HTTP_ERROR=6,Pr=ur,Hi.COMPLETE="complete",el=Hi,ar.EventType=Jt,Jt.OPEN="a",Jt.CLOSE="b",Jt.ERROR="c",Jt.MESSAGE="d",mt.prototype.listen=mt.prototype.K,Ln=ar,st.prototype.listenOnce=st.prototype.L,st.prototype.getLastError=st.prototype.Ka,st.prototype.getLastErrorCode=st.prototype.Ba,st.prototype.getStatus=st.prototype.Z,st.prototype.getResponseJson=st.prototype.Oa,st.prototype.getResponseText=st.prototype.oa,st.prototype.send=st.prototype.ea,st.prototype.setWithCredentials=st.prototype.Ha,tl=st}).apply(typeof Ar<"u"?Ar:typeof self<"u"?self:typeof window<"u"?window:{});const zo="@firebase/firestore",Ho="4.9.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}St.UNAUTHENTICATED=new St(null),St.GOOGLE_CREDENTIALS=new St("google-credentials-uid"),St.FIRST_PARTY=new St("first-party-uid"),St.MOCK_USER=new St("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cn="12.0.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ne=new $a("@firebase/firestore");function ze(){return Ne.logLevel}function x(r,...t){if(Ne.logLevel<=K.DEBUG){const e=t.map(ui);Ne.debug(`Firestore (${cn}): ${r}`,...e)}}function ne(r,...t){if(Ne.logLevel<=K.ERROR){const e=t.map(ui);Ne.error(`Firestore (${cn}): ${r}`,...e)}}function tn(r,...t){if(Ne.logLevel<=K.WARN){const e=t.map(ui);Ne.warn(`Firestore (${cn}): ${r}`,...e)}}function ui(r){if(typeof r=="string")return r;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(e){return JSON.stringify(e)}(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j(r,t,e){let n="Unexpected state";typeof t=="string"?n=t:e=t,il(r,n,e)}function il(r,t,e){let n=`FIRESTORE (${cn}) INTERNAL ASSERTION FAILED: ${t} (ID: ${r.toString(16)})`;if(e!==void 0)try{n+=" CONTEXT: "+JSON.stringify(e)}catch{n+=" CONTEXT: "+e}throw ne(n),new Error(n)}function nt(r,t,e,n){let s="Unexpected state";typeof e=="string"?s=e:n=e,r||il(t,s,n)}function $(r,t){return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class N extends un{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Lh{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(St.UNAUTHENTICATED))}shutdown(){}}class Mh{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class xh{constructor(t){this.t=t,this.currentUser=St.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){nt(this.o===void 0,42304);let n=this.i;const s=h=>this.i!==n?(n=this.i,e(h)):Promise.resolve();let o=new pe;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new pe,t.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const h=o;t.enqueueRetryable(async()=>{await h.promise,await s(this.currentUser)})},c=h=>{x("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(h=>c(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?c(h):(x("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new pe)}},0),a()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(n=>this.i!==t?(x("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(nt(typeof n.accessToken=="string",31837,{l:n}),new ol(n.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return nt(t===null||typeof t=="string",2055,{h:t}),new St(t)}}class Fh{constructor(t,e,n){this.P=t,this.T=e,this.I=n,this.type="FirstParty",this.user=St.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Uh{constructor(t,e,n){this.P=t,this.T=e,this.I=n}getToken(){return Promise.resolve(new Fh(this.P,this.T,this.I))}start(t,e){t.enqueueRetryable(()=>e(St.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Ko{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Bh{constructor(t,e){this.V=e,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Eh(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,e){nt(this.o===void 0,3512);const n=o=>{o.error!=null&&x("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.m;return this.m=o.token,x("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>n(o))};const s=o=>{x("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(o=>s(o)),setTimeout(()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?s(o):x("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Ko(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(nt(typeof e.token=="string",44558,{tokenResult:e}),this.m=e.token,new Ko(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qh(r){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(r);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let n=0;n<r;n++)e[n]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let n="";for(;n.length<20;){const s=qh(40);for(let o=0;o<s.length;++o)n.length<20&&s[o]<e&&(n+=t.charAt(s[o]%62))}return n}}function z(r,t){return r<t?-1:r>t?1:0}function js(r,t){const e=Math.min(r.length,t.length);for(let n=0;n<e;n++){const s=r.charAt(n),o=t.charAt(n);if(s!==o)return Vs(s)===Vs(o)?z(s,o):Vs(s)?1:-1}return z(r.length,t.length)}const jh=55296,Gh=57343;function Vs(r){const t=r.charCodeAt(0);return t>=jh&&t<=Gh}function en(r,t,e){return r.length===t.length&&r.every((n,s)=>e(n,t[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $o="__name__";class Gt{constructor(t,e,n){e===void 0?e=0:e>t.length&&j(637,{offset:e,range:t.length}),n===void 0?n=t.length-e:n>t.length-e&&j(1746,{length:n,range:t.length-e}),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return Gt.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Gt?t.forEach(n=>{e.push(n)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let s=0;s<n;s++){const o=Gt.compareSegments(t.get(s),e.get(s));if(o!==0)return o}return z(t.length,e.length)}static compareSegments(t,e){const n=Gt.isNumericId(t),s=Gt.isNumericId(e);return n&&!s?-1:!n&&s?1:n&&s?Gt.extractNumericId(t).compare(Gt.extractNumericId(e)):js(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return fe.fromString(t.substring(4,t.length-2))}}class Z extends Gt{construct(t,e,n){return new Z(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new N(C.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter(s=>s.length>0))}return new Z(e)}static emptyPath(){return new Z([])}}const zh=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class bt extends Gt{construct(t,e,n){return new bt(t,e,n)}static isValidIdentifier(t){return zh.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),bt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===$o}static keyField(){return new bt([$o])}static fromServerFormat(t){const e=[];let n="",s=0;const o=()=>{if(n.length===0)throw new N(C.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let a=!1;for(;s<t.length;){const c=t[s];if(c==="\\"){if(s+1===t.length)throw new N(C.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const h=t[s+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new N(C.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=h,s+=2}else c==="`"?(a=!a,s++):c!=="."||a?(n+=c,s++):(o(),s++)}if(o(),a)throw new N(C.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new bt(e)}static emptyPath(){return new bt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(t){this.path=t}static fromPath(t){return new B(Z.fromString(t))}static fromName(t){return new B(Z.fromString(t).popFirst(5))}static empty(){return new B(Z.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&Z.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return Z.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new B(new Z(t.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function al(r,t,e){if(!e)throw new N(C.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${t}.`)}function Hh(r,t,e,n){if(t===!0&&n===!0)throw new N(C.INVALID_ARGUMENT,`${r} and ${e} cannot be used together.`)}function Qo(r){if(!B.isDocumentKey(r))throw new N(C.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function Wo(r){if(B.isDocumentKey(r))throw new N(C.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function ll(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function $r(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(r);return t?`a custom ${t} object`:"an object"}}return typeof r=="function"?"a function":j(12329,{type:typeof r})}function Hn(r,t){if("_delegate"in r&&(r=r._delegate),!(r instanceof t)){if(t.name===r.constructor.name)throw new N(C.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=$r(r);throw new N(C.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return r}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(r,t){const e={typeString:r};return t&&(e.value=t),e}function Xn(r,t){if(!ll(r))throw new N(C.INVALID_ARGUMENT,"JSON must be an object");let e;for(const n in t)if(t[n]){const s=t[n].typeString,o="value"in t[n]?{value:t[n].value}:void 0;if(!(n in r)){e=`JSON missing required field: '${n}'`;break}const a=r[n];if(s&&typeof a!==s){e=`JSON field '${n}' must be a ${s}.`;break}if(o!==void 0&&a!==o.value){e=`Expected '${n}' field to equal '${o.value}'`;break}}if(e)throw new N(C.INVALID_ARGUMENT,e);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yo=-62135596800,Xo=1e6;class et{static now(){return et.fromMillis(Date.now())}static fromDate(t){return et.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor((t-1e3*e)*Xo);return new et(e,n)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new N(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new N(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<Yo)throw new N(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new N(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Xo}_compareTo(t){return this.seconds===t.seconds?z(this.nanoseconds,t.nanoseconds):z(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:et._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(Xn(t,et._jsonSchema))return new et(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-Yo;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}et._jsonSchemaVersion="firestore/timestamp/1.0",et._jsonSchema={type:ct("string",et._jsonSchemaVersion),seconds:ct("number"),nanoseconds:ct("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{static fromTimestamp(t){return new q(t)}static min(){return new q(new et(0,0))}static max(){return new q(new et(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kn=-1;function Kh(r,t){const e=r.toTimestamp().seconds,n=r.toTimestamp().nanoseconds+1,s=q.fromTimestamp(n===1e9?new et(e+1,0):new et(e,n));return new ge(s,B.empty(),t)}function $h(r){return new ge(r.readTime,r.key,Kn)}class ge{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new ge(q.min(),B.empty(),Kn)}static max(){return new ge(q.max(),B.empty(),Kn)}}function Qh(r,t){let e=r.readTime.compareTo(t.readTime);return e!==0?e:(e=B.comparator(r.documentKey,t.documentKey),e!==0?e:z(r.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wh="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Yh{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qr(r){if(r.code!==C.FAILED_PRECONDITION||r.message!==Wh)throw r;x("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&j(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new b((n,s)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(n,s)},this.catchCallback=o=>{this.wrapFailure(e,o).next(n,s)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof b?e:b.resolve(e)}catch(e){return b.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):b.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):b.reject(e)}static resolve(t){return new b((e,n)=>{e(t)})}static reject(t){return new b((e,n)=>{n(t)})}static waitFor(t){return new b((e,n)=>{let s=0,o=0,a=!1;t.forEach(c=>{++s,c.next(()=>{++o,a&&o===s&&e()},h=>n(h))}),a=!0,o===s&&e()})}static or(t){let e=b.resolve(!1);for(const n of t)e=e.next(s=>s?b.resolve(s):n());return e}static forEach(t,e){const n=[];return t.forEach((s,o)=>{n.push(e.call(this,s,o))}),this.waitFor(n)}static mapArray(t,e){return new b((n,s)=>{const o=t.length,a=new Array(o);let c=0;for(let h=0;h<o;h++){const f=h;e(t[f]).next(g=>{a[f]=g,++c,c===o&&n(a)},g=>s(g))}})}static doWhile(t,e){return new b((n,s)=>{const o=()=>{t()===!0?e().next(()=>{o()},s):n()};o()})}}function Xh(r){const t=r.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function hn(r){return r.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=n=>this.ae(n),this.ue=n=>e.writeSequenceNumber(n))}ae(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ue&&this.ue(t),t}}Wr.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jh=-1;function Yr(r){return r==null}function Ur(r){return r===0&&1/r==-1/0}function Zh(r){return typeof r=="number"&&Number.isInteger(r)&&!Ur(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ul="";function td(r){let t="";for(let e=0;e<r.length;e++)t.length>0&&(t=Jo(t)),t=ed(r.get(e),t);return Jo(t)}function ed(r,t){let e=t;const n=r.length;for(let s=0;s<n;s++){const o=r.charAt(s);switch(o){case"\0":e+="";break;case ul:e+="";break;default:e+=o}}return e}function Jo(r){return r+ul+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zo(r){let t=0;for(const e in r)Object.prototype.hasOwnProperty.call(r,e)&&t++;return t}function dn(r,t){for(const e in r)Object.prototype.hasOwnProperty.call(r,e)&&t(e,r[e])}function cl(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(t,e){this.comparator=t,this.root=e||Et.EMPTY}insert(t,e){return new at(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Et.BLACK,null,null))}remove(t){return new at(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Et.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(n===0)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(s===0)return e+n.left.size;s<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,n)=>(t(e,n),!1))}toString(){const t=[];return this.inorderTraversal((e,n)=>(t.push(`${e}:${n}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new wr(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new wr(this.root,t,this.comparator,!1)}getReverseIterator(){return new wr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new wr(this.root,t,this.comparator,!0)}}class wr{constructor(t,e,n,s){this.isReverse=s,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?n(t.key,e):1,e&&s&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Et{constructor(t,e,n,s,o){this.key=t,this.value=e,this.color=n??Et.RED,this.left=s??Et.EMPTY,this.right=o??Et.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,s,o){return new Et(t??this.key,e??this.value,n??this.color,s??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let s=this;const o=n(t,s.key);return s=o<0?s.copy(null,null,null,s.left.insert(t,e,n),null):o===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,n)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Et.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return Et.EMPTY;n=s.right.min(),s=s.copy(n.key,n.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Et.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Et.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw j(43730,{key:this.key,value:this.value});if(this.right.isRed())throw j(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw j(27949);return t+(this.isRed()?0:1)}}Et.EMPTY=null,Et.RED=!0,Et.BLACK=!1;Et.EMPTY=new class{constructor(){this.size=0}get key(){throw j(57766)}get value(){throw j(16141)}get color(){throw j(16727)}get left(){throw j(29726)}get right(){throw j(36894)}copy(t,e,n,s,o){return this}insert(t,e,n){return new Et(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(t){this.comparator=t,this.data=new at(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,n)=>(t(e),!1))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const s=n.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let n;for(n=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new ta(this.data.getIterator())}getIteratorFrom(t){return new ta(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(n=>{e=e.add(n)}),e}isEqual(t){if(!(t instanceof pt)||this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=n.getNext().key;if(this.comparator(s,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new pt(this.comparator);return e.data=t,e}}class ta{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(t){this.fields=t,t.sort(bt.comparator)}static empty(){return new ue([])}unionWith(t){let e=new pt(bt.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new ue(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return en(this.fields,t.fields,(e,n)=>e.isEqual(n))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(s){try{return atob(s)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new hl("Invalid base64 string: "+o):o}}(t);return new Tt(e)}static fromUint8Array(t){const e=function(s){let o="";for(let a=0;a<s.length;++a)o+=String.fromCharCode(s[a]);return o}(t);return new Tt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return z(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Tt.EMPTY_BYTE_STRING=new Tt("");const nd=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ye(r){if(nt(!!r,39018),typeof r=="string"){let t=0;const e=nd.exec(r);if(nt(!!e,46558,{timestamp:r}),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const n=new Date(r);return{seconds:Math.floor(n.getTime()/1e3),nanos:t}}return{seconds:ot(r.seconds),nanos:ot(r.nanos)}}function ot(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function _e(r){return typeof r=="string"?Tt.fromBase64String(r):Tt.fromUint8Array(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dl="server_timestamp",fl="__type__",pl="__previous_value__",ml="__local_write_time__";function Xr(r){var e,n;return((n=(((e=r==null?void 0:r.mapValue)==null?void 0:e.fields)||{})[fl])==null?void 0:n.stringValue)===dl}function Jr(r){const t=r.mapValue.fields[pl];return Xr(t)?Jr(t):t}function $n(r){const t=ye(r.mapValue.fields[ml].timestampValue);return new et(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rd{constructor(t,e,n,s,o,a,c,h,f,g){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=s,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=h,this.useFetchStreams=f,this.isUsingEmulator=g}}const Br="(default)";class Qn{constructor(t,e){this.projectId=t,this.database=e||Br}static empty(){return new Qn("","")}get isDefaultDatabase(){return this.database===Br}isEqual(t){return t instanceof Qn&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gl="__type__",sd="__max__",Sr={mapValue:{}},yl="__vector__",qr="value";function ve(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?Xr(r)?4:od(r)?9007199254740991:id(r)?10:11:j(28295,{value:r})}function Qt(r,t){if(r===t)return!0;const e=ve(r);if(e!==ve(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===t.booleanValue;case 4:return $n(r).isEqual($n(t));case 3:return function(s,o){if(typeof s.timestampValue=="string"&&typeof o.timestampValue=="string"&&s.timestampValue.length===o.timestampValue.length)return s.timestampValue===o.timestampValue;const a=ye(s.timestampValue),c=ye(o.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos}(r,t);case 5:return r.stringValue===t.stringValue;case 6:return function(s,o){return _e(s.bytesValue).isEqual(_e(o.bytesValue))}(r,t);case 7:return r.referenceValue===t.referenceValue;case 8:return function(s,o){return ot(s.geoPointValue.latitude)===ot(o.geoPointValue.latitude)&&ot(s.geoPointValue.longitude)===ot(o.geoPointValue.longitude)}(r,t);case 2:return function(s,o){if("integerValue"in s&&"integerValue"in o)return ot(s.integerValue)===ot(o.integerValue);if("doubleValue"in s&&"doubleValue"in o){const a=ot(s.doubleValue),c=ot(o.doubleValue);return a===c?Ur(a)===Ur(c):isNaN(a)&&isNaN(c)}return!1}(r,t);case 9:return en(r.arrayValue.values||[],t.arrayValue.values||[],Qt);case 10:case 11:return function(s,o){const a=s.mapValue.fields||{},c=o.mapValue.fields||{};if(Zo(a)!==Zo(c))return!1;for(const h in a)if(a.hasOwnProperty(h)&&(c[h]===void 0||!Qt(a[h],c[h])))return!1;return!0}(r,t);default:return j(52216,{left:r})}}function Wn(r,t){return(r.values||[]).find(e=>Qt(e,t))!==void 0}function nn(r,t){if(r===t)return 0;const e=ve(r),n=ve(t);if(e!==n)return z(e,n);switch(e){case 0:case 9007199254740991:return 0;case 1:return z(r.booleanValue,t.booleanValue);case 2:return function(o,a){const c=ot(o.integerValue||o.doubleValue),h=ot(a.integerValue||a.doubleValue);return c<h?-1:c>h?1:c===h?0:isNaN(c)?isNaN(h)?0:-1:1}(r,t);case 3:return ea(r.timestampValue,t.timestampValue);case 4:return ea($n(r),$n(t));case 5:return js(r.stringValue,t.stringValue);case 6:return function(o,a){const c=_e(o),h=_e(a);return c.compareTo(h)}(r.bytesValue,t.bytesValue);case 7:return function(o,a){const c=o.split("/"),h=a.split("/");for(let f=0;f<c.length&&f<h.length;f++){const g=z(c[f],h[f]);if(g!==0)return g}return z(c.length,h.length)}(r.referenceValue,t.referenceValue);case 8:return function(o,a){const c=z(ot(o.latitude),ot(a.latitude));return c!==0?c:z(ot(o.longitude),ot(a.longitude))}(r.geoPointValue,t.geoPointValue);case 9:return na(r.arrayValue,t.arrayValue);case 10:return function(o,a){var w,P,k,F;const c=o.fields||{},h=a.fields||{},f=(w=c[qr])==null?void 0:w.arrayValue,g=(P=h[qr])==null?void 0:P.arrayValue,S=z(((k=f==null?void 0:f.values)==null?void 0:k.length)||0,((F=g==null?void 0:g.values)==null?void 0:F.length)||0);return S!==0?S:na(f,g)}(r.mapValue,t.mapValue);case 11:return function(o,a){if(o===Sr.mapValue&&a===Sr.mapValue)return 0;if(o===Sr.mapValue)return 1;if(a===Sr.mapValue)return-1;const c=o.fields||{},h=Object.keys(c),f=a.fields||{},g=Object.keys(f);h.sort(),g.sort();for(let S=0;S<h.length&&S<g.length;++S){const w=js(h[S],g[S]);if(w!==0)return w;const P=nn(c[h[S]],f[g[S]]);if(P!==0)return P}return z(h.length,g.length)}(r.mapValue,t.mapValue);default:throw j(23264,{he:e})}}function ea(r,t){if(typeof r=="string"&&typeof t=="string"&&r.length===t.length)return z(r,t);const e=ye(r),n=ye(t),s=z(e.seconds,n.seconds);return s!==0?s:z(e.nanos,n.nanos)}function na(r,t){const e=r.values||[],n=t.values||[];for(let s=0;s<e.length&&s<n.length;++s){const o=nn(e[s],n[s]);if(o)return o}return z(e.length,n.length)}function rn(r){return Gs(r)}function Gs(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(e){const n=ye(e);return`time(${n.seconds},${n.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(e){return _e(e).toBase64()}(r.bytesValue):"referenceValue"in r?function(e){return B.fromName(e).toString()}(r.referenceValue):"geoPointValue"in r?function(e){return`geo(${e.latitude},${e.longitude})`}(r.geoPointValue):"arrayValue"in r?function(e){let n="[",s=!0;for(const o of e.values||[])s?s=!1:n+=",",n+=Gs(o);return n+"]"}(r.arrayValue):"mapValue"in r?function(e){const n=Object.keys(e.fields||{}).sort();let s="{",o=!0;for(const a of n)o?o=!1:s+=",",s+=`${a}:${Gs(e.fields[a])}`;return s+"}"}(r.mapValue):j(61005,{value:r})}function Vr(r){switch(ve(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=Jr(r);return t?16+Vr(t):16;case 5:return 2*r.stringValue.length;case 6:return _e(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return function(n){return(n.values||[]).reduce((s,o)=>s+Vr(o),0)}(r.arrayValue);case 10:case 11:return function(n){let s=0;return dn(n.fields,(o,a)=>{s+=o.length+Vr(a)}),s}(r.mapValue);default:throw j(13486,{value:r})}}function jr(r,t){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${t.path.canonicalString()}`}}function zs(r){return!!r&&"integerValue"in r}function hi(r){return!!r&&"arrayValue"in r}function ra(r){return!!r&&"nullValue"in r}function sa(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function Ds(r){return!!r&&"mapValue"in r}function id(r){var e,n;return((n=(((e=r==null?void 0:r.mapValue)==null?void 0:e.fields)||{})[gl])==null?void 0:n.stringValue)===yl}function Bn(r){if(r.geoPointValue)return{geoPointValue:{...r.geoPointValue}};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:{...r.timestampValue}};if(r.mapValue){const t={mapValue:{fields:{}}};return dn(r.mapValue.fields,(e,n)=>t.mapValue.fields[e]=Bn(n)),t}if(r.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(r.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=Bn(r.arrayValue.values[e]);return t}return{...r}}function od(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===sd}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(t){this.value=t}static empty(){return new zt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!Ds(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Bn(e)}setAll(t){let e=bt.emptyPath(),n={},s=[];t.forEach((a,c)=>{if(!e.isImmediateParentOf(c)){const h=this.getFieldsMap(e);this.applyChanges(h,n,s),n={},s=[],e=c.popLast()}a?n[c.lastSegment()]=Bn(a):s.push(c.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,n,s)}delete(t){const e=this.field(t.popLast());Ds(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Qt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let s=e.mapValue.fields[t.get(n)];Ds(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,n){dn(e,(s,o)=>t[s]=o);for(const s of n)delete t[s]}clone(){return new zt(Bn(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(t,e,n,s,o,a,c){this.key=t,this.documentType=e,this.version=n,this.readTime=s,this.createTime=o,this.data=a,this.documentState=c}static newInvalidDocument(t){return new Rt(t,0,q.min(),q.min(),q.min(),zt.empty(),0)}static newFoundDocument(t,e,n,s){return new Rt(t,1,e,q.min(),n,s,0)}static newNoDocument(t,e){return new Rt(t,2,e,q.min(),q.min(),zt.empty(),0)}static newUnknownDocument(t,e){return new Rt(t,3,e,q.min(),q.min(),zt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(q.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=zt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=zt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=q.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Rt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Rt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(t,e){this.position=t,this.inclusive=e}}function ia(r,t,e){let n=0;for(let s=0;s<r.position.length;s++){const o=t[s],a=r.position[s];if(o.field.isKeyField()?n=B.comparator(B.fromName(a.referenceValue),e.key):n=nn(a,e.data.field(o.field)),o.dir==="desc"&&(n*=-1),n!==0)break}return n}function oa(r,t){if(r===null)return t===null;if(t===null||r.inclusive!==t.inclusive||r.position.length!==t.position.length)return!1;for(let e=0;e<r.position.length;e++)if(!Qt(r.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn{constructor(t,e="asc"){this.field=t,this.dir=e}}function ad(r,t){return r.dir===t.dir&&r.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _l{}class ut extends _l{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,n):new ud(t,e,n):e==="array-contains"?new dd(t,n):e==="in"?new fd(t,n):e==="not-in"?new pd(t,n):e==="array-contains-any"?new md(t,n):new ut(t,e,n)}static createKeyFieldInFilter(t,e,n){return e==="in"?new cd(t,n):new hd(t,n)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&e.nullValue===void 0&&this.matchesComparison(nn(e,this.value)):e!==null&&ve(this.value)===ve(e)&&this.matchesComparison(nn(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return j(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ft extends _l{constructor(t,e){super(),this.filters=t,this.op=e,this.Pe=null}static create(t,e){return new Ft(t,e)}matches(t){return vl(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function vl(r){return r.op==="and"}function El(r){return ld(r)&&vl(r)}function ld(r){for(const t of r.filters)if(t instanceof Ft)return!1;return!0}function Hs(r){if(r instanceof ut)return r.field.canonicalString()+r.op.toString()+rn(r.value);if(El(r))return r.filters.map(t=>Hs(t)).join(",");{const t=r.filters.map(e=>Hs(e)).join(",");return`${r.op}(${t})`}}function Tl(r,t){return r instanceof ut?function(n,s){return s instanceof ut&&n.op===s.op&&n.field.isEqual(s.field)&&Qt(n.value,s.value)}(r,t):r instanceof Ft?function(n,s){return s instanceof Ft&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((o,a,c)=>o&&Tl(a,s.filters[c]),!0):!1}(r,t):void j(19439)}function Il(r){return r instanceof ut?function(e){return`${e.field.canonicalString()} ${e.op} ${rn(e.value)}`}(r):r instanceof Ft?function(e){return e.op.toString()+" {"+e.getFilters().map(Il).join(" ,")+"}"}(r):"Filter"}class ud extends ut{constructor(t,e,n){super(t,e,n),this.key=B.fromName(n.referenceValue)}matches(t){const e=B.comparator(t.key,this.key);return this.matchesComparison(e)}}class cd extends ut{constructor(t,e){super(t,"in",e),this.keys=Al("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class hd extends ut{constructor(t,e){super(t,"not-in",e),this.keys=Al("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function Al(r,t){var e;return(((e=t.arrayValue)==null?void 0:e.values)||[]).map(n=>B.fromName(n.referenceValue))}class dd extends ut{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return hi(e)&&Wn(e.arrayValue,this.value)}}class fd extends ut{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&Wn(this.value.arrayValue,e)}}class pd extends ut{constructor(t,e){super(t,"not-in",e)}matches(t){if(Wn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&e.nullValue===void 0&&!Wn(this.value.arrayValue,e)}}class md extends ut{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!hi(e)||!e.arrayValue.values)&&e.arrayValue.values.some(n=>Wn(this.value.arrayValue,n))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gd{constructor(t,e=null,n=[],s=[],o=null,a=null,c=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=s,this.limit=o,this.startAt=a,this.endAt=c,this.Te=null}}function aa(r,t=null,e=[],n=[],s=null,o=null,a=null){return new gd(r,t,e,n,s,o,a)}function di(r){const t=$(r);if(t.Te===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(n=>Hs(n)).join(","),e+="|ob:",e+=t.orderBy.map(n=>function(o){return o.field.canonicalString()+o.dir}(n)).join(","),Yr(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>rn(n)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>rn(n)).join(",")),t.Te=e}return t.Te}function fi(r,t){if(r.limit!==t.limit||r.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<r.orderBy.length;e++)if(!ad(r.orderBy[e],t.orderBy[e]))return!1;if(r.filters.length!==t.filters.length)return!1;for(let e=0;e<r.filters.length;e++)if(!Tl(r.filters[e],t.filters[e]))return!1;return r.collectionGroup===t.collectionGroup&&!!r.path.isEqual(t.path)&&!!oa(r.startAt,t.startAt)&&oa(r.endAt,t.endAt)}function Ks(r){return B.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(t,e=null,n=[],s=[],o=null,a="F",c=null,h=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=s,this.limit=o,this.limitType=a,this.startAt=c,this.endAt=h,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function yd(r,t,e,n,s,o,a,c){return new Ie(r,t,e,n,s,o,a,c)}function pi(r){return new Ie(r)}function la(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function mi(r){return r.collectionGroup!==null}function We(r){const t=$(r);if(t.Ie===null){t.Ie=[];const e=new Set;for(const o of t.explicitOrderBy)t.Ie.push(o),e.add(o.field.canonicalString());const n=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new pt(bt.comparator);return a.filters.forEach(h=>{h.getFlattenedFilters().forEach(f=>{f.isInequality()&&(c=c.add(f.field))})}),c})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.Ie.push(new Yn(o,n))}),e.has(bt.keyField().canonicalString())||t.Ie.push(new Yn(bt.keyField(),n))}return t.Ie}function Ht(r){const t=$(r);return t.Ee||(t.Ee=_d(t,We(r))),t.Ee}function _d(r,t){if(r.limitType==="F")return aa(r.path,r.collectionGroup,t,r.filters,r.limit,r.startAt,r.endAt);{t=t.map(s=>{const o=s.dir==="desc"?"asc":"desc";return new Yn(s.field,o)});const e=r.endAt?new sn(r.endAt.position,r.endAt.inclusive):null,n=r.startAt?new sn(r.startAt.position,r.startAt.inclusive):null;return aa(r.path,r.collectionGroup,t,r.filters,r.limit,e,n)}}function $s(r,t){const e=r.filters.concat([t]);return new Ie(r.path,r.collectionGroup,r.explicitOrderBy.slice(),e,r.limit,r.limitType,r.startAt,r.endAt)}function Qs(r,t,e){return new Ie(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),t,e,r.startAt,r.endAt)}function Zr(r,t){return fi(Ht(r),Ht(t))&&r.limitType===t.limitType}function wl(r){return`${di(Ht(r))}|lt:${r.limitType}`}function He(r){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>Il(s)).join(", ")}]`),Yr(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>rn(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>rn(s)).join(",")),`Target(${n})`}(Ht(r))}; limitType=${r.limitType})`}function ts(r,t){return t.isFoundDocument()&&function(n,s){const o=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(o):B.isDocumentKey(n.path)?n.path.isEqual(o):n.path.isImmediateParentOf(o)}(r,t)&&function(n,s){for(const o of We(n))if(!o.field.isKeyField()&&s.data.field(o.field)===null)return!1;return!0}(r,t)&&function(n,s){for(const o of n.filters)if(!o.matches(s))return!1;return!0}(r,t)&&function(n,s){return!(n.startAt&&!function(a,c,h){const f=ia(a,c,h);return a.inclusive?f<=0:f<0}(n.startAt,We(n),s)||n.endAt&&!function(a,c,h){const f=ia(a,c,h);return a.inclusive?f>=0:f>0}(n.endAt,We(n),s))}(r,t)}function vd(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function Sl(r){return(t,e)=>{let n=!1;for(const s of We(r)){const o=Ed(s,t,e);if(o!==0)return o;n=n||s.field.isKeyField()}return 0}}function Ed(r,t,e){const n=r.field.isKeyField()?B.comparator(t.key,e.key):function(o,a,c){const h=a.data.field(o),f=c.data.field(o);return h!==null&&f!==null?nn(h,f):j(42886)}(r.field,t,e);switch(r.dir){case"asc":return n;case"desc":return-1*n;default:return j(19790,{direction:r.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n!==void 0){for(const[s,o]of n)if(this.equalsFn(s,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const n=this.mapKeyFn(t),s=this.inner[n];if(s===void 0)return this.inner[n]=[[t,e]],void this.innerSize++;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],t))return void(s[o]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n===void 0)return!1;for(let s=0;s<n.length;s++)if(this.equalsFn(n[s][0],t))return n.length===1?delete this.inner[e]:n.splice(s,1),this.innerSize--,!0;return!1}forEach(t){dn(this.inner,(e,n)=>{for(const[s,o]of n)t(s,o)})}isEmpty(){return cl(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Td=new at(B.comparator);function Ee(){return Td}const Rl=new at(B.comparator);function Mn(...r){let t=Rl;for(const e of r)t=t.insert(e.key,e);return t}function Id(r){let t=Rl;return r.forEach((e,n)=>t=t.insert(e,n.overlayedDocument)),t}function Pe(){return qn()}function bl(){return qn()}function qn(){return new ke(r=>r.toString(),(r,t)=>r.isEqual(t))}const Ad=new pt(B.comparator);function Q(...r){let t=Ad;for(const e of r)t=t.add(e);return t}const wd=new pt(z);function Sd(){return wd}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gi(r,t){if(r.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ur(t)?"-0":t}}function Cl(r){return{integerValue:""+r}}function Rd(r,t){return Zh(t)?Cl(t):gi(r,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(){this._=void 0}}function bd(r,t,e){return r instanceof Ws?function(s,o){const a={fields:{[fl]:{stringValue:dl},[ml]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return o&&Xr(o)&&(o=Jr(o)),o&&(a.fields[pl]=o),{mapValue:a}}(e,t):r instanceof Gr?Pl(r,t):r instanceof zr?Vl(r,t):function(s,o){const a=Pd(s,o),c=ua(a)+ua(s.Ae);return zs(a)&&zs(s.Ae)?Cl(c):gi(s.serializer,c)}(r,t)}function Cd(r,t,e){return r instanceof Gr?Pl(r,t):r instanceof zr?Vl(r,t):e}function Pd(r,t){return r instanceof Ys?function(n){return zs(n)||function(o){return!!o&&"doubleValue"in o}(n)}(t)?t:{integerValue:0}:null}class Ws extends es{}class Gr extends es{constructor(t){super(),this.elements=t}}function Pl(r,t){const e=Dl(t);for(const n of r.elements)e.some(s=>Qt(s,n))||e.push(n);return{arrayValue:{values:e}}}class zr extends es{constructor(t){super(),this.elements=t}}function Vl(r,t){let e=Dl(t);for(const n of r.elements)e=e.filter(s=>!Qt(s,n));return{arrayValue:{values:e}}}class Ys extends es{constructor(t,e){super(),this.serializer=t,this.Ae=e}}function ua(r){return ot(r.integerValue||r.doubleValue)}function Dl(r){return hi(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}function Vd(r,t){return r.field.isEqual(t.field)&&function(n,s){return n instanceof Gr&&s instanceof Gr||n instanceof zr&&s instanceof zr?en(n.elements,s.elements,Qt):n instanceof Ys&&s instanceof Ys?Qt(n.Ae,s.Ae):n instanceof Ws&&s instanceof Ws}(r.transform,t.transform)}class Ve{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Ve}static exists(t){return new Ve(void 0,t)}static updateTime(t){return new Ve(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Dr(r,t){return r.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(r.updateTime):r.exists===void 0||r.exists===t.isFoundDocument()}class yi{}function Nl(r,t){if(!r.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return r.isNoDocument()?new Nd(r.key,Ve.none()):new _i(r.key,r.data,Ve.none());{const e=r.data,n=zt.empty();let s=new pt(bt.comparator);for(let o of t.fields)if(!s.has(o)){let a=e.field(o);a===null&&o.length>1&&(o=o.popLast(),a=e.field(o)),a===null?n.delete(o):n.set(o,a),s=s.add(o)}return new ns(r.key,n,new ue(s.toArray()),Ve.none())}}function Dd(r,t,e){r instanceof _i?function(s,o,a){const c=s.value.clone(),h=ha(s.fieldTransforms,o,a.transformResults);c.setAll(h),o.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(r,t,e):r instanceof ns?function(s,o,a){if(!Dr(s.precondition,o))return void o.convertToUnknownDocument(a.version);const c=ha(s.fieldTransforms,o,a.transformResults),h=o.data;h.setAll(kl(s)),h.setAll(c),o.convertToFoundDocument(a.version,h).setHasCommittedMutations()}(r,t,e):function(s,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()}(0,t,e)}function jn(r,t,e,n){return r instanceof _i?function(o,a,c,h){if(!Dr(o.precondition,a))return c;const f=o.value.clone(),g=da(o.fieldTransforms,h,a);return f.setAll(g),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),null}(r,t,e,n):r instanceof ns?function(o,a,c,h){if(!Dr(o.precondition,a))return c;const f=da(o.fieldTransforms,h,a),g=a.data;return g.setAll(kl(o)),g.setAll(f),a.convertToFoundDocument(a.version,g).setHasLocalMutations(),c===null?null:c.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(S=>S.field))}(r,t,e,n):function(o,a,c){return Dr(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c}(r,t,e)}function ca(r,t){return r.type===t.type&&!!r.key.isEqual(t.key)&&!!r.precondition.isEqual(t.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&en(n,s,(o,a)=>Vd(o,a))}(r.fieldTransforms,t.fieldTransforms)&&(r.type===0?r.value.isEqual(t.value):r.type!==1||r.data.isEqual(t.data)&&r.fieldMask.isEqual(t.fieldMask))}class _i extends yi{constructor(t,e,n,s=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class ns extends yi{constructor(t,e,n,s,o=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=s,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function kl(r){const t=new Map;return r.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const n=r.data.field(e);t.set(e,n)}}),t}function ha(r,t,e){const n=new Map;nt(r.length===e.length,32656,{Re:e.length,Ve:r.length});for(let s=0;s<e.length;s++){const o=r[s],a=o.transform,c=t.data.field(o.field);n.set(o.field,Cd(a,c,e[s]))}return n}function da(r,t,e){const n=new Map;for(const s of r){const o=s.transform,a=e.data.field(s.field);n.set(s.field,bd(o,a,t))}return n}class Nd extends yi{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kd{constructor(t,e,n,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=s}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const o=this.mutations[s];o.key.isEqual(t.key)&&Dd(o,t,n[s])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=jn(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=jn(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=bl();return this.mutations.forEach(s=>{const o=t.get(s.key),a=o.overlayedDocument;let c=this.applyToLocalView(a,o.mutatedFields);c=e.has(s.key)?null:c;const h=Nl(a,c);h!==null&&n.set(s.key,h),a.isValidDocument()||a.convertToNoDocument(q.min())}),n}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),Q())}isEqual(t){return this.batchId===t.batchId&&en(this.mutations,t.mutations,(e,n)=>ca(e,n))&&en(this.baseMutations,t.baseMutations,(e,n)=>ca(e,n))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Od{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ld{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var lt,H;function Ol(r){if(r===void 0)return ne("GRPC error has no .code"),C.UNKNOWN;switch(r){case lt.OK:return C.OK;case lt.CANCELLED:return C.CANCELLED;case lt.UNKNOWN:return C.UNKNOWN;case lt.DEADLINE_EXCEEDED:return C.DEADLINE_EXCEEDED;case lt.RESOURCE_EXHAUSTED:return C.RESOURCE_EXHAUSTED;case lt.INTERNAL:return C.INTERNAL;case lt.UNAVAILABLE:return C.UNAVAILABLE;case lt.UNAUTHENTICATED:return C.UNAUTHENTICATED;case lt.INVALID_ARGUMENT:return C.INVALID_ARGUMENT;case lt.NOT_FOUND:return C.NOT_FOUND;case lt.ALREADY_EXISTS:return C.ALREADY_EXISTS;case lt.PERMISSION_DENIED:return C.PERMISSION_DENIED;case lt.FAILED_PRECONDITION:return C.FAILED_PRECONDITION;case lt.ABORTED:return C.ABORTED;case lt.OUT_OF_RANGE:return C.OUT_OF_RANGE;case lt.UNIMPLEMENTED:return C.UNIMPLEMENTED;case lt.DATA_LOSS:return C.DATA_LOSS;default:return j(39323,{code:r})}}(H=lt||(lt={}))[H.OK=0]="OK",H[H.CANCELLED=1]="CANCELLED",H[H.UNKNOWN=2]="UNKNOWN",H[H.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",H[H.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",H[H.NOT_FOUND=5]="NOT_FOUND",H[H.ALREADY_EXISTS=6]="ALREADY_EXISTS",H[H.PERMISSION_DENIED=7]="PERMISSION_DENIED",H[H.UNAUTHENTICATED=16]="UNAUTHENTICATED",H[H.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",H[H.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",H[H.ABORTED=10]="ABORTED",H[H.OUT_OF_RANGE=11]="OUT_OF_RANGE",H[H.UNIMPLEMENTED=12]="UNIMPLEMENTED",H[H.INTERNAL=13]="INTERNAL",H[H.UNAVAILABLE=14]="UNAVAILABLE",H[H.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Md(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xd=new fe([4294967295,4294967295],0);function fa(r){const t=Md().encode(r),e=new Za;return e.update(t),new Uint8Array(e.digest())}function pa(r){const t=new DataView(r.buffer),e=t.getUint32(0,!0),n=t.getUint32(4,!0),s=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new fe([e,n],0),new fe([s,o],0)]}class vi{constructor(t,e,n){if(this.bitmap=t,this.padding=e,this.hashCount=n,e<0||e>=8)throw new xn(`Invalid padding: ${e}`);if(n<0)throw new xn(`Invalid hash count: ${n}`);if(t.length>0&&this.hashCount===0)throw new xn(`Invalid hash count: ${n}`);if(t.length===0&&e!==0)throw new xn(`Invalid padding when bitmap length is 0: ${e}`);this.ge=8*t.length-e,this.pe=fe.fromNumber(this.ge)}ye(t,e,n){let s=t.add(e.multiply(fe.fromNumber(n)));return s.compare(xd)===1&&(s=new fe([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.ge===0)return!1;const e=fa(t),[n,s]=pa(e);for(let o=0;o<this.hashCount;o++){const a=this.ye(n,s,o);if(!this.we(a))return!1}return!0}static create(t,e,n){const s=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),a=new vi(o,s,e);return n.forEach(c=>a.insert(c)),a}insert(t){if(this.ge===0)return;const e=fa(t),[n,s]=pa(e);for(let o=0;o<this.hashCount;o++){const a=this.ye(n,s,o);this.Se(a)}}Se(t){const e=Math.floor(t/8),n=t%8;this.bitmap[e]|=1<<n}}class xn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(t,e,n,s,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=s,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const s=new Map;return s.set(t,Jn.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new rs(q.min(),s,new at(z),Ee(),Q())}}class Jn{constructor(t,e,n,s,o){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=s,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new Jn(n,e,Q(),Q(),Q())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr{constructor(t,e,n,s){this.be=t,this.removedTargetIds=e,this.key=n,this.De=s}}class Ll{constructor(t,e){this.targetId=t,this.Ce=e}}class Ml{constructor(t,e,n=Tt.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=s}}class ma{constructor(){this.ve=0,this.Fe=ga(),this.Me=Tt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(t){t.approximateByteSize()>0&&(this.Oe=!0,this.Me=t)}ke(){let t=Q(),e=Q(),n=Q();return this.Fe.forEach((s,o)=>{switch(o){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:n=n.add(s);break;default:j(38017,{changeType:o})}}),new Jn(this.Me,this.xe,t,e,n)}qe(){this.Oe=!1,this.Fe=ga()}Qe(t,e){this.Oe=!0,this.Fe=this.Fe.insert(t,e)}$e(t){this.Oe=!0,this.Fe=this.Fe.remove(t)}Ue(){this.ve+=1}Ke(){this.ve-=1,nt(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class Fd{constructor(t){this.Ge=t,this.ze=new Map,this.je=Ee(),this.Je=Rr(),this.He=Rr(),this.Ye=new at(z)}Ze(t){for(const e of t.be)t.De&&t.De.isFoundDocument()?this.Xe(e,t.De):this.et(e,t.key,t.De);for(const e of t.removedTargetIds)this.et(e,t.key,t.De)}tt(t){this.forEachTarget(t,e=>{const n=this.nt(e);switch(t.state){case 0:this.rt(e)&&n.Le(t.resumeToken);break;case 1:n.Ke(),n.Ne||n.qe(),n.Le(t.resumeToken);break;case 2:n.Ke(),n.Ne||this.removeTarget(e);break;case 3:this.rt(e)&&(n.We(),n.Le(t.resumeToken));break;case 4:this.rt(e)&&(this.it(e),n.Le(t.resumeToken));break;default:j(56790,{state:t.state})}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.ze.forEach((n,s)=>{this.rt(s)&&e(s)})}st(t){const e=t.targetId,n=t.Ce.count,s=this.ot(e);if(s){const o=s.target;if(Ks(o))if(n===0){const a=new B(o.path);this.et(e,a,Rt.newNoDocument(a,q.min()))}else nt(n===1,20013,{expectedCount:n});else{const a=this._t(e);if(a!==n){const c=this.ut(t),h=c?this.ct(c,t,a):1;if(h!==0){this.it(e);const f=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(e,f)}}}}}ut(t){const e=t.Ce.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:n="",padding:s=0},hashCount:o=0}=e;let a,c;try{a=_e(n).toUint8Array()}catch(h){if(h instanceof hl)return tn("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{c=new vi(a,s,o)}catch(h){return tn(h instanceof xn?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return c.ge===0?null:c}ct(t,e,n){return e.Ce.count===n-this.Pt(t,e.targetId)?0:2}Pt(t,e){const n=this.Ge.getRemoteKeysForTarget(e);let s=0;return n.forEach(o=>{const a=this.Ge.ht(),c=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;t.mightContain(c)||(this.et(e,o,null),s++)}),s}Tt(t){const e=new Map;this.ze.forEach((o,a)=>{const c=this.ot(a);if(c){if(o.current&&Ks(c.target)){const h=new B(c.target.path);this.It(h).has(a)||this.Et(a,h)||this.et(a,h,Rt.newNoDocument(h,t))}o.Be&&(e.set(a,o.ke()),o.qe())}});let n=Q();this.He.forEach((o,a)=>{let c=!0;a.forEachWhile(h=>{const f=this.ot(h);return!f||f.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(n=n.add(o))}),this.je.forEach((o,a)=>a.setReadTime(t));const s=new rs(t,e,this.Ye,this.je,n);return this.je=Ee(),this.Je=Rr(),this.He=Rr(),this.Ye=new at(z),s}Xe(t,e){if(!this.rt(t))return;const n=this.Et(t,e.key)?2:0;this.nt(t).Qe(e.key,n),this.je=this.je.insert(e.key,e),this.Je=this.Je.insert(e.key,this.It(e.key).add(t)),this.He=this.He.insert(e.key,this.dt(e.key).add(t))}et(t,e,n){if(!this.rt(t))return;const s=this.nt(t);this.Et(t,e)?s.Qe(e,1):s.$e(e),this.He=this.He.insert(e,this.dt(e).delete(t)),this.He=this.He.insert(e,this.dt(e).add(t)),n&&(this.je=this.je.insert(e,n))}removeTarget(t){this.ze.delete(t)}_t(t){const e=this.nt(t).ke();return this.Ge.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Ue(t){this.nt(t).Ue()}nt(t){let e=this.ze.get(t);return e||(e=new ma,this.ze.set(t,e)),e}dt(t){let e=this.He.get(t);return e||(e=new pt(z),this.He=this.He.insert(t,e)),e}It(t){let e=this.Je.get(t);return e||(e=new pt(z),this.Je=this.Je.insert(t,e)),e}rt(t){const e=this.ot(t)!==null;return e||x("WatchChangeAggregator","Detected inactive target",t),e}ot(t){const e=this.ze.get(t);return e&&e.Ne?null:this.Ge.At(t)}it(t){this.ze.set(t,new ma),this.Ge.getRemoteKeysForTarget(t).forEach(e=>{this.et(t,e,null)})}Et(t,e){return this.Ge.getRemoteKeysForTarget(t).has(e)}}function Rr(){return new at(B.comparator)}function ga(){return new at(B.comparator)}const Ud={asc:"ASCENDING",desc:"DESCENDING"},Bd={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},qd={and:"AND",or:"OR"};class jd{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Xs(r,t){return r.useProto3Json||Yr(t)?t:{value:t}}function Js(r,t){return r.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function xl(r,t){return r.useProto3Json?t.toBase64():t.toUint8Array()}function Ye(r){return nt(!!r,49232),q.fromTimestamp(function(e){const n=ye(e);return new et(n.seconds,n.nanos)}(r))}function Fl(r,t){return Zs(r,t).canonicalString()}function Zs(r,t){const e=function(s){return new Z(["projects",s.projectId,"databases",s.database])}(r).child("documents");return t===void 0?e:e.child(t)}function Ul(r){const t=Z.fromString(r);return nt(zl(t),10190,{key:t.toString()}),t}function Ns(r,t){const e=Ul(t);if(e.get(1)!==r.databaseId.projectId)throw new N(C.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+r.databaseId.projectId);if(e.get(3)!==r.databaseId.database)throw new N(C.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+r.databaseId.database);return new B(ql(e))}function Bl(r,t){return Fl(r.databaseId,t)}function Gd(r){const t=Ul(r);return t.length===4?Z.emptyPath():ql(t)}function ya(r){return new Z(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function ql(r){return nt(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function zd(r,t){let e;if("targetChange"in t){t.targetChange;const n=function(f){return f==="NO_CHANGE"?0:f==="ADD"?1:f==="REMOVE"?2:f==="CURRENT"?3:f==="RESET"?4:j(39313,{state:f})}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],o=function(f,g){return f.useProto3Json?(nt(g===void 0||typeof g=="string",58123),Tt.fromBase64String(g||"")):(nt(g===void 0||g instanceof Buffer||g instanceof Uint8Array,16193),Tt.fromUint8Array(g||new Uint8Array))}(r,t.targetChange.resumeToken),a=t.targetChange.cause,c=a&&function(f){const g=f.code===void 0?C.UNKNOWN:Ol(f.code);return new N(g,f.message||"")}(a);e=new Ml(n,s,o,c||null)}else if("documentChange"in t){t.documentChange;const n=t.documentChange;n.document,n.document.name,n.document.updateTime;const s=Ns(r,n.document.name),o=Ye(n.document.updateTime),a=n.document.createTime?Ye(n.document.createTime):q.min(),c=new zt({mapValue:{fields:n.document.fields}}),h=Rt.newFoundDocument(s,o,a,c),f=n.targetIds||[],g=n.removedTargetIds||[];e=new Nr(f,g,h.key,h)}else if("documentDelete"in t){t.documentDelete;const n=t.documentDelete;n.document;const s=Ns(r,n.document),o=n.readTime?Ye(n.readTime):q.min(),a=Rt.newNoDocument(s,o),c=n.removedTargetIds||[];e=new Nr([],c,a.key,a)}else if("documentRemove"in t){t.documentRemove;const n=t.documentRemove;n.document;const s=Ns(r,n.document),o=n.removedTargetIds||[];e=new Nr([],o,s,null)}else{if(!("filter"in t))return j(11601,{Rt:t});{t.filter;const n=t.filter;n.targetId;const{count:s=0,unchangedNames:o}=n,a=new Ld(s,o),c=n.targetId;e=new Ll(c,a)}}return e}function Hd(r,t){return{documents:[Bl(r,t.path)]}}function Kd(r,t){const e={structuredQuery:{}},n=t.path;let s;t.collectionGroup!==null?(s=n,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=n.popLast(),e.structuredQuery.from=[{collectionId:n.lastSegment()}]),e.parent=Bl(r,s);const o=function(f){if(f.length!==0)return Gl(Ft.create(f,"and"))}(t.filters);o&&(e.structuredQuery.where=o);const a=function(f){if(f.length!==0)return f.map(g=>function(w){return{field:Ke(w.field),direction:Wd(w.dir)}}(g))}(t.orderBy);a&&(e.structuredQuery.orderBy=a);const c=Xs(r,t.limit);return c!==null&&(e.structuredQuery.limit=c),t.startAt&&(e.structuredQuery.startAt=function(f){return{before:f.inclusive,values:f.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(f){return{before:!f.inclusive,values:f.position}}(t.endAt)),{ft:e,parent:s}}function $d(r){let t=Gd(r.parent);const e=r.structuredQuery,n=e.from?e.from.length:0;let s=null;if(n>0){nt(n===1,65062);const g=e.from[0];g.allDescendants?s=g.collectionId:t=t.child(g.collectionId)}let o=[];e.where&&(o=function(S){const w=jl(S);return w instanceof Ft&&El(w)?w.getFilters():[w]}(e.where));let a=[];e.orderBy&&(a=function(S){return S.map(w=>function(k){return new Yn($e(k.field),function(L){switch(L){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(k.direction))}(w))}(e.orderBy));let c=null;e.limit&&(c=function(S){let w;return w=typeof S=="object"?S.value:S,Yr(w)?null:w}(e.limit));let h=null;e.startAt&&(h=function(S){const w=!!S.before,P=S.values||[];return new sn(P,w)}(e.startAt));let f=null;return e.endAt&&(f=function(S){const w=!S.before,P=S.values||[];return new sn(P,w)}(e.endAt)),yd(t,s,a,o,c,"F",h,f)}function Qd(r,t){const e=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return j(28987,{purpose:s})}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function jl(r){return r.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=$e(e.unaryFilter.field);return ut.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=$e(e.unaryFilter.field);return ut.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=$e(e.unaryFilter.field);return ut.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=$e(e.unaryFilter.field);return ut.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return j(61313);default:return j(60726)}}(r):r.fieldFilter!==void 0?function(e){return ut.create($e(e.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return j(58110);default:return j(50506)}}(e.fieldFilter.op),e.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(e){return Ft.create(e.compositeFilter.filters.map(n=>jl(n)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return j(1026)}}(e.compositeFilter.op))}(r):j(30097,{filter:r})}function Wd(r){return Ud[r]}function Yd(r){return Bd[r]}function Xd(r){return qd[r]}function Ke(r){return{fieldPath:r.canonicalString()}}function $e(r){return bt.fromServerFormat(r.fieldPath)}function Gl(r){return r instanceof ut?function(e){if(e.op==="=="){if(sa(e.value))return{unaryFilter:{field:Ke(e.field),op:"IS_NAN"}};if(ra(e.value))return{unaryFilter:{field:Ke(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(sa(e.value))return{unaryFilter:{field:Ke(e.field),op:"IS_NOT_NAN"}};if(ra(e.value))return{unaryFilter:{field:Ke(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ke(e.field),op:Yd(e.op),value:e.value}}}(r):r instanceof Ft?function(e){const n=e.getFilters().map(s=>Gl(s));return n.length===1?n[0]:{compositeFilter:{op:Xd(e.op),filters:n}}}(r):j(54877,{filter:r})}function zl(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{constructor(t,e,n,s,o=q.min(),a=q.min(),c=Tt.EMPTY_BYTE_STRING,h=null){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=s,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=h}withSequenceNumber(t){return new ce(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new ce(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new ce(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new ce(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jd{constructor(t){this.yt=t}}function Zd(r){const t=$d({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?Qs(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tf{constructor(){this.Cn=new ef}addToCollectionParentIndex(t,e){return this.Cn.add(e),b.resolve()}getCollectionParents(t,e){return b.resolve(this.Cn.getEntries(e))}addFieldIndex(t,e){return b.resolve()}deleteFieldIndex(t,e){return b.resolve()}deleteAllFieldIndexes(t){return b.resolve()}createTargetIndexes(t,e){return b.resolve()}getDocumentsMatchingTarget(t,e){return b.resolve(null)}getIndexType(t,e){return b.resolve(0)}getFieldIndexes(t,e){return b.resolve([])}getNextCollectionGroupToUpdate(t){return b.resolve(null)}getMinOffset(t,e){return b.resolve(ge.min())}getMinOffsetFromCollectionGroup(t,e){return b.resolve(ge.min())}updateCollectionGroup(t,e,n){return b.resolve()}updateIndexEntries(t,e){return b.resolve()}}class ef{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e]||new pt(Z.comparator),o=!s.has(n);return this.index[e]=s.add(n),o}has(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e];return s&&s.has(n)}getEntries(t){return(this.index[t]||new pt(Z.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _a={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Hl=41943040;class Vt{static withCacheSize(t){return new Vt(t,Vt.DEFAULT_COLLECTION_PERCENTILE,Vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Vt.DEFAULT_COLLECTION_PERCENTILE=10,Vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Vt.DEFAULT=new Vt(Hl,Vt.DEFAULT_COLLECTION_PERCENTILE,Vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Vt.DISABLED=new Vt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(t){this.ar=t}next(){return this.ar+=2,this.ar}static ur(){return new on(0)}static cr(){return new on(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const va="LruGarbageCollector",nf=1048576;function Ea([r,t],[e,n]){const s=z(r,e);return s===0?z(t,n):s}class rf{constructor(t){this.Ir=t,this.buffer=new pt(Ea),this.Er=0}dr(){return++this.Er}Ar(t){const e=[t,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(e);else{const n=this.buffer.last();Ea(e,n)<0&&(this.buffer=this.buffer.delete(n).add(e))}}get maxValue(){return this.buffer.last()[0]}}class sf{constructor(t,e,n){this.garbageCollector=t,this.asyncQueue=e,this.localStore=n,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(t){x(va,`Garbage collection scheduled in ${t}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){hn(e)?x(va,"Ignoring IndexedDB error during garbage collection: ",e):await Qr(e)}await this.Vr(3e5)})}}class of{constructor(t,e){this.mr=t,this.params=e}calculateTargetCount(t,e){return this.mr.gr(t).next(n=>Math.floor(e/100*n))}nthSequenceNumber(t,e){if(e===0)return b.resolve(Wr.ce);const n=new rf(e);return this.mr.forEachTarget(t,s=>n.Ar(s.sequenceNumber)).next(()=>this.mr.pr(t,s=>n.Ar(s))).next(()=>n.maxValue)}removeTargets(t,e,n){return this.mr.removeTargets(t,e,n)}removeOrphanedDocuments(t,e){return this.mr.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(x("LruGarbageCollector","Garbage collection skipped; disabled"),b.resolve(_a)):this.getCacheSize(t).next(n=>n<this.params.cacheSizeCollectionThreshold?(x("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),_a):this.yr(t,e))}getCacheSize(t){return this.mr.getCacheSize(t)}yr(t,e){let n,s,o,a,c,h,f;const g=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(S=>(S>this.params.maximumSequenceNumbersToCollect?(x("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${S}`),s=this.params.maximumSequenceNumbersToCollect):s=S,a=Date.now(),this.nthSequenceNumber(t,s))).next(S=>(n=S,c=Date.now(),this.removeTargets(t,n,e))).next(S=>(o=S,h=Date.now(),this.removeOrphanedDocuments(t,n))).next(S=>(f=Date.now(),ze()<=K.DEBUG&&x("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-g}ms
	Determined least recently used ${s} in `+(c-a)+`ms
	Removed ${o} targets in `+(h-c)+`ms
	Removed ${S} documents in `+(f-h)+`ms
Total Duration: ${f-g}ms`),b.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:o,documentsRemoved:S})))}}function af(r,t){return new of(r,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lf{constructor(){this.changes=new ke(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,Rt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return n!==void 0?b.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uf{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cf{constructor(t,e,n,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=s}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next(s=>(n=s,this.remoteDocumentCache.getEntry(t,e))).next(s=>(n!==null&&jn(n.mutation,s,ue.empty(),et.now()),s))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(n=>this.getLocalViewOfDocuments(t,n,Q()).next(()=>n))}getLocalViewOfDocuments(t,e,n=Q()){const s=Pe();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,n).next(o=>{let a=Mn();return o.forEach((c,h)=>{a=a.insert(c,h.overlayedDocument)}),a}))}getOverlayedDocuments(t,e){const n=Pe();return this.populateOverlays(t,n,e).next(()=>this.computeViews(t,e,n,Q()))}populateOverlays(t,e,n){const s=[];return n.forEach(o=>{e.has(o)||s.push(o)}),this.documentOverlayCache.getOverlays(t,s).next(o=>{o.forEach((a,c)=>{e.set(a,c)})})}computeViews(t,e,n,s){let o=Ee();const a=qn(),c=function(){return qn()}();return e.forEach((h,f)=>{const g=n.get(f.key);s.has(f.key)&&(g===void 0||g.mutation instanceof ns)?o=o.insert(f.key,f):g!==void 0?(a.set(f.key,g.mutation.getFieldMask()),jn(g.mutation,f,g.mutation.getFieldMask(),et.now())):a.set(f.key,ue.empty())}),this.recalculateAndSaveOverlays(t,o).next(h=>(h.forEach((f,g)=>a.set(f,g)),e.forEach((f,g)=>c.set(f,new uf(g,a.get(f)??null))),c))}recalculateAndSaveOverlays(t,e){const n=qn();let s=new at((a,c)=>a-c),o=Q();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(a=>{for(const c of a)c.keys().forEach(h=>{const f=e.get(h);if(f===null)return;let g=n.get(h)||ue.empty();g=c.applyToLocalView(f,g),n.set(h,g);const S=(s.get(c.batchId)||Q()).add(h);s=s.insert(c.batchId,S)})}).next(()=>{const a=[],c=s.getReverseIterator();for(;c.hasNext();){const h=c.getNext(),f=h.key,g=h.value,S=bl();g.forEach(w=>{if(!o.has(w)){const P=Nl(e.get(w),n.get(w));P!==null&&S.set(w,P),o=o.add(w)}}),a.push(this.documentOverlayCache.saveOverlays(t,f,S))}return b.waitFor(a)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(n=>this.recalculateAndSaveOverlays(t,n))}getDocumentsMatchingQuery(t,e,n,s){return function(a){return B.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):mi(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n,s):this.getDocumentsMatchingCollectionQuery(t,e,n,s)}getNextDocuments(t,e,n,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,s).next(o=>{const a=s-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,s-o.size):b.resolve(Pe());let c=Kn,h=o;return a.next(f=>b.forEach(f,(g,S)=>(c<S.largestBatchId&&(c=S.largestBatchId),o.get(g)?b.resolve():this.remoteDocumentCache.getEntry(t,g).next(w=>{h=h.insert(g,w)}))).next(()=>this.populateOverlays(t,f,o)).next(()=>this.computeViews(t,h,f,Q())).next(g=>({batchId:c,changes:Id(g)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new B(e)).next(n=>{let s=Mn();return n.isFoundDocument()&&(s=s.insert(n.key,n)),s})}getDocumentsMatchingCollectionGroupQuery(t,e,n,s){const o=e.collectionGroup;let a=Mn();return this.indexManager.getCollectionParents(t,o).next(c=>b.forEach(c,h=>{const f=function(S,w){return new Ie(w,null,S.explicitOrderBy.slice(),S.filters.slice(),S.limit,S.limitType,S.startAt,S.endAt)}(e,h.child(o));return this.getDocumentsMatchingCollectionQuery(t,f,n,s).next(g=>{g.forEach((S,w)=>{a=a.insert(S,w)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(t,e,n,s){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next(a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,o,s))).next(a=>{o.forEach((h,f)=>{const g=f.getKey();a.get(g)===null&&(a=a.insert(g,Rt.newInvalidDocument(g)))});let c=Mn();return a.forEach((h,f)=>{const g=o.get(h);g!==void 0&&jn(g.mutation,f,ue.empty(),et.now()),ts(e,f)&&(c=c.insert(h,f))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hf{constructor(t){this.serializer=t,this.Lr=new Map,this.kr=new Map}getBundleMetadata(t,e){return b.resolve(this.Lr.get(e))}saveBundleMetadata(t,e){return this.Lr.set(e.id,function(s){return{id:s.id,version:s.version,createTime:Ye(s.createTime)}}(e)),b.resolve()}getNamedQuery(t,e){return b.resolve(this.kr.get(e))}saveNamedQuery(t,e){return this.kr.set(e.name,function(s){return{name:s.name,query:Zd(s.bundledQuery),readTime:Ye(s.readTime)}}(e)),b.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class df{constructor(){this.overlays=new at(B.comparator),this.qr=new Map}getOverlay(t,e){return b.resolve(this.overlays.get(e))}getOverlays(t,e){const n=Pe();return b.forEach(e,s=>this.getOverlay(t,s).next(o=>{o!==null&&n.set(s,o)})).next(()=>n)}saveOverlays(t,e,n){return n.forEach((s,o)=>{this.St(t,e,o)}),b.resolve()}removeOverlaysForBatchId(t,e,n){const s=this.qr.get(n);return s!==void 0&&(s.forEach(o=>this.overlays=this.overlays.remove(o)),this.qr.delete(n)),b.resolve()}getOverlaysForCollection(t,e,n){const s=Pe(),o=e.length+1,a=new B(e.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const h=c.getNext().value,f=h.getKey();if(!e.isPrefixOf(f.path))break;f.path.length===o&&h.largestBatchId>n&&s.set(h.getKey(),h)}return b.resolve(s)}getOverlaysForCollectionGroup(t,e,n,s){let o=new at((f,g)=>f-g);const a=this.overlays.getIterator();for(;a.hasNext();){const f=a.getNext().value;if(f.getKey().getCollectionGroup()===e&&f.largestBatchId>n){let g=o.get(f.largestBatchId);g===null&&(g=Pe(),o=o.insert(f.largestBatchId,g)),g.set(f.getKey(),f)}}const c=Pe(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach((f,g)=>c.set(f,g)),!(c.size()>=s)););return b.resolve(c)}St(t,e,n){const s=this.overlays.get(n.key);if(s!==null){const a=this.qr.get(s.largestBatchId).delete(n.key);this.qr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(n.key,new Od(e,n));let o=this.qr.get(e);o===void 0&&(o=Q(),this.qr.set(e,o)),this.qr.set(e,o.add(n.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ff{constructor(){this.sessionToken=Tt.EMPTY_BYTE_STRING}getSessionToken(t){return b.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,b.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(){this.Qr=new pt(gt.$r),this.Ur=new pt(gt.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(t,e){const n=new gt(t,e);this.Qr=this.Qr.add(n),this.Ur=this.Ur.add(n)}Wr(t,e){t.forEach(n=>this.addReference(n,e))}removeReference(t,e){this.Gr(new gt(t,e))}zr(t,e){t.forEach(n=>this.removeReference(n,e))}jr(t){const e=new B(new Z([])),n=new gt(e,t),s=new gt(e,t+1),o=[];return this.Ur.forEachInRange([n,s],a=>{this.Gr(a),o.push(a.key)}),o}Jr(){this.Qr.forEach(t=>this.Gr(t))}Gr(t){this.Qr=this.Qr.delete(t),this.Ur=this.Ur.delete(t)}Hr(t){const e=new B(new Z([])),n=new gt(e,t),s=new gt(e,t+1);let o=Q();return this.Ur.forEachInRange([n,s],a=>{o=o.add(a.key)}),o}containsKey(t){const e=new gt(t,0),n=this.Qr.firstAfterOrEqual(e);return n!==null&&t.isEqual(n.key)}}class gt{constructor(t,e){this.key=t,this.Yr=e}static $r(t,e){return B.comparator(t.key,e.key)||z(t.Yr,e.Yr)}static Kr(t,e){return z(t.Yr,e.Yr)||B.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pf{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.tr=1,this.Zr=new pt(gt.$r)}checkEmpty(t){return b.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,n,s){const o=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new kd(o,e,n,s);this.mutationQueue.push(a);for(const c of s)this.Zr=this.Zr.add(new gt(c.key,o)),this.indexManager.addToCollectionParentIndex(t,c.key.path.popLast());return b.resolve(a)}lookupMutationBatch(t,e){return b.resolve(this.Xr(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,s=this.ei(n),o=s<0?0:s;return b.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return b.resolve(this.mutationQueue.length===0?Jh:this.tr-1)}getAllMutationBatches(t){return b.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new gt(e,0),s=new gt(e,Number.POSITIVE_INFINITY),o=[];return this.Zr.forEachInRange([n,s],a=>{const c=this.Xr(a.Yr);o.push(c)}),b.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new pt(z);return e.forEach(s=>{const o=new gt(s,0),a=new gt(s,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([o,a],c=>{n=n.add(c.Yr)})}),b.resolve(this.ti(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,s=n.length+1;let o=n;B.isDocumentKey(o)||(o=o.child(""));const a=new gt(new B(o),0);let c=new pt(z);return this.Zr.forEachWhile(h=>{const f=h.key.path;return!!n.isPrefixOf(f)&&(f.length===s&&(c=c.add(h.Yr)),!0)},a),b.resolve(this.ti(c))}ti(t){const e=[];return t.forEach(n=>{const s=this.Xr(n);s!==null&&e.push(s)}),e}removeMutationBatch(t,e){nt(this.ni(e.batchId,"removed")===0,55003),this.mutationQueue.shift();let n=this.Zr;return b.forEach(e.mutations,s=>{const o=new gt(s.key,e.batchId);return n=n.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.Zr=n})}ir(t){}containsKey(t,e){const n=new gt(e,0),s=this.Zr.firstAfterOrEqual(n);return b.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,b.resolve()}ni(t,e){return this.ei(t)}ei(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Xr(t){const e=this.ei(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mf{constructor(t){this.ri=t,this.docs=function(){return new at(B.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,s=this.docs.get(n),o=s?s.size:0,a=this.ri(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return b.resolve(n?n.document.mutableCopy():Rt.newInvalidDocument(e))}getEntries(t,e){let n=Ee();return e.forEach(s=>{const o=this.docs.get(s);n=n.insert(s,o?o.document.mutableCopy():Rt.newInvalidDocument(s))}),b.resolve(n)}getDocumentsMatchingQuery(t,e,n,s){let o=Ee();const a=e.path,c=new B(a.child("__id-9223372036854775808__")),h=this.docs.getIteratorFrom(c);for(;h.hasNext();){const{key:f,value:{document:g}}=h.getNext();if(!a.isPrefixOf(f.path))break;f.path.length>a.length+1||Qh($h(g),n)<=0||(s.has(g.key)||ts(e,g))&&(o=o.insert(g.key,g.mutableCopy()))}return b.resolve(o)}getAllFromCollectionGroup(t,e,n,s){j(9500)}ii(t,e){return b.forEach(this.docs,n=>e(n))}newChangeBuffer(t){return new gf(this)}getSize(t){return b.resolve(this.size)}}class gf extends lf{constructor(t){super(),this.Nr=t}applyChanges(t){const e=[];return this.changes.forEach((n,s)=>{s.isValidDocument()?e.push(this.Nr.addEntry(t,s)):this.Nr.removeEntry(n)}),b.waitFor(e)}getFromCache(t,e){return this.Nr.getEntry(t,e)}getAllFromCache(t,e){return this.Nr.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yf{constructor(t){this.persistence=t,this.si=new ke(e=>di(e),fi),this.lastRemoteSnapshotVersion=q.min(),this.highestTargetId=0,this.oi=0,this._i=new Ei,this.targetCount=0,this.ai=on.ur()}forEachTarget(t,e){return this.si.forEach((n,s)=>e(s)),b.resolve()}getLastRemoteSnapshotVersion(t){return b.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return b.resolve(this.oi)}allocateTargetId(t){return this.highestTargetId=this.ai.next(),b.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.oi&&(this.oi=e),b.resolve()}Pr(t){this.si.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.ai=new on(e),this.highestTargetId=e),t.sequenceNumber>this.oi&&(this.oi=t.sequenceNumber)}addTargetData(t,e){return this.Pr(e),this.targetCount+=1,b.resolve()}updateTargetData(t,e){return this.Pr(e),b.resolve()}removeTargetData(t,e){return this.si.delete(e.target),this._i.jr(e.targetId),this.targetCount-=1,b.resolve()}removeTargets(t,e,n){let s=0;const o=[];return this.si.forEach((a,c)=>{c.sequenceNumber<=e&&n.get(c.targetId)===null&&(this.si.delete(a),o.push(this.removeMatchingKeysForTargetId(t,c.targetId)),s++)}),b.waitFor(o).next(()=>s)}getTargetCount(t){return b.resolve(this.targetCount)}getTargetData(t,e){const n=this.si.get(e)||null;return b.resolve(n)}addMatchingKeys(t,e,n){return this._i.Wr(e,n),b.resolve()}removeMatchingKeys(t,e,n){this._i.zr(e,n);const s=this.persistence.referenceDelegate,o=[];return s&&e.forEach(a=>{o.push(s.markPotentiallyOrphaned(t,a))}),b.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this._i.jr(e),b.resolve()}getMatchingKeysForTargetId(t,e){const n=this._i.Hr(e);return b.resolve(n)}containsKey(t,e){return b.resolve(this._i.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kl{constructor(t,e){this.ui={},this.overlays={},this.ci=new Wr(0),this.li=!1,this.li=!0,this.hi=new ff,this.referenceDelegate=t(this),this.Pi=new yf(this),this.indexManager=new tf,this.remoteDocumentCache=function(s){return new mf(s)}(n=>this.referenceDelegate.Ti(n)),this.serializer=new Jd(e),this.Ii=new hf(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new df,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.ui[t.toKey()];return n||(n=new pf(e,this.referenceDelegate),this.ui[t.toKey()]=n),n}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(t,e,n){x("MemoryPersistence","Starting transaction:",t);const s=new _f(this.ci.next());return this.referenceDelegate.Ei(),n(s).next(o=>this.referenceDelegate.di(s).next(()=>o)).toPromise().then(o=>(s.raiseOnCommittedEvent(),o))}Ai(t,e){return b.or(Object.values(this.ui).map(n=>()=>n.containsKey(t,e)))}}class _f extends Yh{constructor(t){super(),this.currentSequenceNumber=t}}class Ti{constructor(t){this.persistence=t,this.Ri=new Ei,this.Vi=null}static mi(t){return new Ti(t)}get fi(){if(this.Vi)return this.Vi;throw j(60996)}addReference(t,e,n){return this.Ri.addReference(n,e),this.fi.delete(n.toString()),b.resolve()}removeReference(t,e,n){return this.Ri.removeReference(n,e),this.fi.add(n.toString()),b.resolve()}markPotentiallyOrphaned(t,e){return this.fi.add(e.toString()),b.resolve()}removeTarget(t,e){this.Ri.jr(e.targetId).forEach(s=>this.fi.add(s.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next(s=>{s.forEach(o=>this.fi.add(o.toString()))}).next(()=>n.removeTargetData(t,e))}Ei(){this.Vi=new Set}di(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return b.forEach(this.fi,n=>{const s=B.fromPath(n);return this.gi(t,s).next(o=>{o||e.removeEntry(s,q.min())})}).next(()=>(this.Vi=null,e.apply(t)))}updateLimboDocument(t,e){return this.gi(t,e).next(n=>{n?this.fi.delete(e.toString()):this.fi.add(e.toString())})}Ti(t){return 0}gi(t,e){return b.or([()=>b.resolve(this.Ri.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ai(t,e)])}}class Hr{constructor(t,e){this.persistence=t,this.pi=new ke(n=>td(n.path),(n,s)=>n.isEqual(s)),this.garbageCollector=af(this,e)}static mi(t,e){return new Hr(t,e)}Ei(){}di(t){return b.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}gr(t){const e=this.wr(t);return this.persistence.getTargetCache().getTargetCount(t).next(n=>e.next(s=>n+s))}wr(t){let e=0;return this.pr(t,n=>{e++}).next(()=>e)}pr(t,e){return b.forEach(this.pi,(n,s)=>this.br(t,n,s).next(o=>o?b.resolve():e(s)))}removeTargets(t,e,n){return this.persistence.getTargetCache().removeTargets(t,e,n)}removeOrphanedDocuments(t,e){let n=0;const s=this.persistence.getRemoteDocumentCache(),o=s.newChangeBuffer();return s.ii(t,a=>this.br(t,a,e).next(c=>{c||(n++,o.removeEntry(a,q.min()))})).next(()=>o.apply(t)).next(()=>n)}markPotentiallyOrphaned(t,e){return this.pi.set(e,t.currentSequenceNumber),b.resolve()}removeTarget(t,e){const n=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,n)}addReference(t,e,n){return this.pi.set(n,t.currentSequenceNumber),b.resolve()}removeReference(t,e,n){return this.pi.set(n,t.currentSequenceNumber),b.resolve()}updateLimboDocument(t,e){return this.pi.set(e,t.currentSequenceNumber),b.resolve()}Ti(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=Vr(t.data.value)),e}br(t,e,n){return b.or([()=>this.persistence.Ai(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const s=this.pi.get(e);return b.resolve(s!==void 0&&s>n)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{constructor(t,e,n,s){this.targetId=t,this.fromCache=e,this.Es=n,this.ds=s}static As(t,e){let n=Q(),s=Q();for(const o of e.docChanges)switch(o.type){case 0:n=n.add(o.doc.key);break;case 1:s=s.add(o.doc.key)}return new Ii(t,e.fromCache,n,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vf{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ef{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return yc()?8:Xh(mc())>0?6:4}()}initialize(t,e){this.ps=t,this.indexManager=e,this.Rs=!0}getDocumentsMatchingQuery(t,e,n,s){const o={result:null};return this.ys(t,e).next(a=>{o.result=a}).next(()=>{if(!o.result)return this.ws(t,e,s,n).next(a=>{o.result=a})}).next(()=>{if(o.result)return;const a=new vf;return this.Ss(t,e,a).next(c=>{if(o.result=c,this.Vs)return this.bs(t,e,a,c.size)})}).next(()=>o.result)}bs(t,e,n,s){return n.documentReadCount<this.fs?(ze()<=K.DEBUG&&x("QueryEngine","SDK will not create cache indexes for query:",He(e),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),b.resolve()):(ze()<=K.DEBUG&&x("QueryEngine","Query:",He(e),"scans",n.documentReadCount,"local documents and returns",s,"documents as results."),n.documentReadCount>this.gs*s?(ze()<=K.DEBUG&&x("QueryEngine","The SDK decides to create cache indexes for query:",He(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Ht(e))):b.resolve())}ys(t,e){if(la(e))return b.resolve(null);let n=Ht(e);return this.indexManager.getIndexType(t,n).next(s=>s===0?null:(e.limit!==null&&s===1&&(e=Qs(e,null,"F"),n=Ht(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next(o=>{const a=Q(...o);return this.ps.getDocuments(t,a).next(c=>this.indexManager.getMinOffset(t,n).next(h=>{const f=this.Ds(e,c);return this.Cs(e,f,a,h.readTime)?this.ys(t,Qs(e,null,"F")):this.vs(t,f,e,h)}))})))}ws(t,e,n,s){return la(e)||s.isEqual(q.min())?b.resolve(null):this.ps.getDocuments(t,n).next(o=>{const a=this.Ds(e,o);return this.Cs(e,a,n,s)?b.resolve(null):(ze()<=K.DEBUG&&x("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),He(e)),this.vs(t,a,e,Kh(s,Kn)).next(c=>c))})}Ds(t,e){let n=new pt(Sl(t));return e.forEach((s,o)=>{ts(t,o)&&(n=n.add(o))}),n}Cs(t,e,n,s){if(t.limit===null)return!1;if(n.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(s)>0)}Ss(t,e,n){return ze()<=K.DEBUG&&x("QueryEngine","Using full collection scan to execute query:",He(e)),this.ps.getDocumentsMatchingQuery(t,e,ge.min(),n)}vs(t,e,n,s){return this.ps.getDocumentsMatchingQuery(t,n,s).next(o=>(e.forEach(a=>{o=o.insert(a.key,a)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ai="LocalStore",Tf=3e8;class If{constructor(t,e,n,s){this.persistence=t,this.Fs=e,this.serializer=s,this.Ms=new at(z),this.xs=new ke(o=>di(o),fi),this.Os=new Map,this.Ns=t.getRemoteDocumentCache(),this.Pi=t.getTargetCache(),this.Ii=t.getBundleCache(),this.Bs(n)}Bs(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new cf(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.Ms))}}function Af(r,t,e,n){return new If(r,t,e,n)}async function $l(r,t){const e=$(r);return await e.persistence.runTransaction("Handle user change","readonly",n=>{let s;return e.mutationQueue.getAllMutationBatches(n).next(o=>(s=o,e.Bs(t),e.mutationQueue.getAllMutationBatches(n))).next(o=>{const a=[],c=[];let h=Q();for(const f of s){a.push(f.batchId);for(const g of f.mutations)h=h.add(g.key)}for(const f of o){c.push(f.batchId);for(const g of f.mutations)h=h.add(g.key)}return e.localDocuments.getDocuments(n,h).next(f=>({Ls:f,removedBatchIds:a,addedBatchIds:c}))})})}function Ql(r){const t=$(r);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Pi.getLastRemoteSnapshotVersion(e))}function wf(r,t){const e=$(r),n=t.snapshotVersion;let s=e.Ms;return e.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const a=e.Ns.newChangeBuffer({trackRemovals:!0});s=e.Ms;const c=[];t.targetChanges.forEach((g,S)=>{const w=s.get(S);if(!w)return;c.push(e.Pi.removeMatchingKeys(o,g.removedDocuments,S).next(()=>e.Pi.addMatchingKeys(o,g.addedDocuments,S)));let P=w.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(S)!==null?P=P.withResumeToken(Tt.EMPTY_BYTE_STRING,q.min()).withLastLimboFreeSnapshotVersion(q.min()):g.resumeToken.approximateByteSize()>0&&(P=P.withResumeToken(g.resumeToken,n)),s=s.insert(S,P),function(F,L,X){return F.resumeToken.approximateByteSize()===0||L.snapshotVersion.toMicroseconds()-F.snapshotVersion.toMicroseconds()>=Tf?!0:X.addedDocuments.size+X.modifiedDocuments.size+X.removedDocuments.size>0}(w,P,g)&&c.push(e.Pi.updateTargetData(o,P))});let h=Ee(),f=Q();if(t.documentUpdates.forEach(g=>{t.resolvedLimboDocuments.has(g)&&c.push(e.persistence.referenceDelegate.updateLimboDocument(o,g))}),c.push(Sf(o,a,t.documentUpdates).next(g=>{h=g.ks,f=g.qs})),!n.isEqual(q.min())){const g=e.Pi.getLastRemoteSnapshotVersion(o).next(S=>e.Pi.setTargetsMetadata(o,o.currentSequenceNumber,n));c.push(g)}return b.waitFor(c).next(()=>a.apply(o)).next(()=>e.localDocuments.getLocalViewOfDocuments(o,h,f)).next(()=>h)}).then(o=>(e.Ms=s,o))}function Sf(r,t,e){let n=Q(),s=Q();return e.forEach(o=>n=n.add(o)),t.getEntries(r,n).next(o=>{let a=Ee();return e.forEach((c,h)=>{const f=o.get(c);h.isFoundDocument()!==f.isFoundDocument()&&(s=s.add(c)),h.isNoDocument()&&h.version.isEqual(q.min())?(t.removeEntry(c,h.readTime),a=a.insert(c,h)):!f.isValidDocument()||h.version.compareTo(f.version)>0||h.version.compareTo(f.version)===0&&f.hasPendingWrites?(t.addEntry(h),a=a.insert(c,h)):x(Ai,"Ignoring outdated watch update for ",c,". Current version:",f.version," Watch version:",h.version)}),{ks:a,qs:s}})}function Rf(r,t){const e=$(r);return e.persistence.runTransaction("Allocate target","readwrite",n=>{let s;return e.Pi.getTargetData(n,t).next(o=>o?(s=o,b.resolve(s)):e.Pi.allocateTargetId(n).next(a=>(s=new ce(t,a,"TargetPurposeListen",n.currentSequenceNumber),e.Pi.addTargetData(n,s).next(()=>s))))}).then(n=>{const s=e.Ms.get(n.targetId);return(s===null||n.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(e.Ms=e.Ms.insert(n.targetId,n),e.xs.set(t,n.targetId)),n})}async function ti(r,t,e){const n=$(r),s=n.Ms.get(t),o=e?"readwrite":"readwrite-primary";try{e||await n.persistence.runTransaction("Release target",o,a=>n.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!hn(a))throw a;x(Ai,`Failed to update sequence numbers for target ${t}: ${a}`)}n.Ms=n.Ms.remove(t),n.xs.delete(s.target)}function Ta(r,t,e){const n=$(r);let s=q.min(),o=Q();return n.persistence.runTransaction("Execute query","readwrite",a=>function(h,f,g){const S=$(h),w=S.xs.get(g);return w!==void 0?b.resolve(S.Ms.get(w)):S.Pi.getTargetData(f,g)}(n,a,Ht(t)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,n.Pi.getMatchingKeysForTargetId(a,c.targetId).next(h=>{o=h})}).next(()=>n.Fs.getDocumentsMatchingQuery(a,t,e?s:q.min(),e?o:Q())).next(c=>(bf(n,vd(t),c),{documents:c,Qs:o})))}function bf(r,t,e){let n=r.Os.get(t)||q.min();e.forEach((s,o)=>{o.readTime.compareTo(n)>0&&(n=o.readTime)}),r.Os.set(t,n)}class Ia{constructor(){this.activeTargetIds=Sd()}zs(t){this.activeTargetIds=this.activeTargetIds.add(t)}js(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Gs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Cf{constructor(){this.Mo=new Ia,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t,e=!0){return e&&this.Mo.zs(t),this.xo[t]||"not-current"}updateQueryState(t,e,n){this.xo[t]=e}removeLocalQueryTarget(t){this.Mo.js(t)}isLocalQueryTarget(t){return this.Mo.activeTargetIds.has(t)}clearQueryState(t){delete this.xo[t]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(t){return this.Mo.activeTargetIds.has(t)}start(){return this.Mo=new Ia,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pf{Oo(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Aa="ConnectivityMonitor";class wa{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(t){this.qo.push(t)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){x(Aa,"Network connectivity changed: AVAILABLE");for(const t of this.qo)t(0)}ko(){x(Aa,"Network connectivity changed: UNAVAILABLE");for(const t of this.qo)t(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let br=null;function ei(){return br===null?br=function(){return 268435456+Math.round(2147483648*Math.random())}():br++,"0x"+br.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ks="RestConnection",Vf={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Df{get $o(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Uo=e+"://"+t.host,this.Ko=`projects/${n}/databases/${s}`,this.Wo=this.databaseId.database===Br?`project_id=${n}`:`project_id=${n}&database_id=${s}`}Go(t,e,n,s,o){const a=ei(),c=this.zo(t,e.toUriEncodedString());x(ks,`Sending RPC '${t}' ${a}:`,c,n);const h={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(h,s,o);const{host:f}=new URL(c),g=ai(f);return this.Jo(t,c,h,n,g).then(S=>(x(ks,`Received RPC '${t}' ${a}: `,S),S),S=>{throw tn(ks,`RPC '${t}' ${a} failed with error: `,S,"url: ",c,"request:",n),S})}Ho(t,e,n,s,o,a){return this.Go(t,e,n,s,o)}jo(t,e,n){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+cn}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach((s,o)=>t[o]=s),n&&n.headers.forEach((s,o)=>t[o]=s)}zo(t,e){const n=Vf[t];return`${this.Uo}/v1/${e}:${n}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nf{constructor(t){this.Yo=t.Yo,this.Zo=t.Zo}Xo(t){this.e_=t}t_(t){this.n_=t}r_(t){this.i_=t}onMessage(t){this.s_=t}close(){this.Zo()}send(t){this.Yo(t)}o_(){this.e_()}__(){this.n_()}a_(t){this.i_(t)}u_(t){this.s_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wt="WebChannelConnection";class kf extends Df{constructor(t){super(t),this.c_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Jo(t,e,n,s,o){const a=ei();return new Promise((c,h)=>{const f=new tl;f.setWithCredentials(!0),f.listenOnce(el.COMPLETE,()=>{try{switch(f.getLastErrorCode()){case Pr.NO_ERROR:const S=f.getResponseJson();x(wt,`XHR for RPC '${t}' ${a} received:`,JSON.stringify(S)),c(S);break;case Pr.TIMEOUT:x(wt,`RPC '${t}' ${a} timed out`),h(new N(C.DEADLINE_EXCEEDED,"Request time out"));break;case Pr.HTTP_ERROR:const w=f.getStatus();if(x(wt,`RPC '${t}' ${a} failed with status:`,w,"response text:",f.getResponseText()),w>0){let P=f.getResponseJson();Array.isArray(P)&&(P=P[0]);const k=P==null?void 0:P.error;if(k&&k.status&&k.message){const F=function(X){const G=X.toLowerCase().replace(/_/g,"-");return Object.values(C).indexOf(G)>=0?G:C.UNKNOWN}(k.status);h(new N(F,k.message))}else h(new N(C.UNKNOWN,"Server responded with status "+f.getStatus()))}else h(new N(C.UNAVAILABLE,"Connection failed."));break;default:j(9055,{l_:t,streamId:a,h_:f.getLastErrorCode(),P_:f.getLastError()})}}finally{x(wt,`RPC '${t}' ${a} completed.`)}});const g=JSON.stringify(s);x(wt,`RPC '${t}' ${a} sending request:`,s),f.send(e,"POST",g,n,15)})}T_(t,e,n){const s=ei(),o=[this.Uo,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=sl(),c=rl(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},f=this.longPollingOptions.timeoutSeconds;f!==void 0&&(h.longPollingTimeout=Math.round(1e3*f)),this.useFetchStreams&&(h.useFetchStreams=!0),this.jo(h.initMessageHeaders,e,n),h.encodeInitMessageHeaders=!0;const g=o.join("");x(wt,`Creating RPC '${t}' stream ${s}: ${g}`,h);const S=a.createWebChannel(g,h);this.I_(S);let w=!1,P=!1;const k=new Nf({Yo:L=>{P?x(wt,`Not sending because RPC '${t}' stream ${s} is closed:`,L):(w||(x(wt,`Opening RPC '${t}' stream ${s} transport.`),S.open(),w=!0),x(wt,`RPC '${t}' stream ${s} sending:`,L),S.send(L))},Zo:()=>S.close()}),F=(L,X,G)=>{L.listen(X,Y=>{try{G(Y)}catch(rt){setTimeout(()=>{throw rt},0)}})};return F(S,Ln.EventType.OPEN,()=>{P||(x(wt,`RPC '${t}' stream ${s} transport opened.`),k.o_())}),F(S,Ln.EventType.CLOSE,()=>{P||(P=!0,x(wt,`RPC '${t}' stream ${s} transport closed`),k.a_(),this.E_(S))}),F(S,Ln.EventType.ERROR,L=>{P||(P=!0,tn(wt,`RPC '${t}' stream ${s} transport errored. Name:`,L.name,"Message:",L.message),k.a_(new N(C.UNAVAILABLE,"The operation could not be completed")))}),F(S,Ln.EventType.MESSAGE,L=>{var X;if(!P){const G=L.data[0];nt(!!G,16349);const Y=G,rt=(Y==null?void 0:Y.error)||((X=Y[0])==null?void 0:X.error);if(rt){x(wt,`RPC '${t}' stream ${s} received error:`,rt);const Lt=rt.status;let ht=function(p){const v=lt[p];if(v!==void 0)return Ol(v)}(Lt),T=rt.message;ht===void 0&&(ht=C.INTERNAL,T="Unknown error status: "+Lt+" with message "+rt.message),P=!0,k.a_(new N(ht,T)),S.close()}else x(wt,`RPC '${t}' stream ${s} received:`,G),k.u_(G)}}),F(c,nl.STAT_EVENT,L=>{L.stat===qs.PROXY?x(wt,`RPC '${t}' stream ${s} detected buffering proxy`):L.stat===qs.NOPROXY&&x(wt,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{k.__()},0),k}terminate(){this.c_.forEach(t=>t.close()),this.c_=[]}I_(t){this.c_.push(t)}E_(t){this.c_=this.c_.filter(e=>e===t)}}function Os(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ss(r){return new jd(r,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl{constructor(t,e,n=1e3,s=1.5,o=6e4){this.Mi=t,this.timerId=e,this.d_=n,this.A_=s,this.R_=o,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(t){this.cancel();const e=Math.floor(this.V_+this.y_()),n=Math.max(0,Date.now()-this.f_),s=Math.max(0,e-n);s>0&&x("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),t())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sa="PersistentStream";class Of{constructor(t,e,n,s,o,a,c,h){this.Mi=t,this.S_=n,this.b_=s,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=h,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Wl(t,e)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(t){this.Q_(),this.stream.send(t)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,e){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,t!==4?this.M_.reset():e&&e.code===C.RESOURCE_EXHAUSTED?(ne(e.toString()),ne("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):e&&e.code===C.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.r_(e)}K_(){}auth(){this.state=1;const t=this.W_(this.D_),e=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([n,s])=>{this.D_===e&&this.G_(n,s)},n=>{t(()=>{const s=new N(C.UNKNOWN,"Fetching auth token failed: "+n.message);return this.z_(s)})})}G_(t,e){const n=this.W_(this.D_);this.stream=this.j_(t,e),this.stream.Xo(()=>{n(()=>this.listener.Xo())}),this.stream.t_(()=>{n(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(s=>{n(()=>this.z_(s))}),this.stream.onMessage(s=>{n(()=>++this.F_==1?this.J_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(t){return x(Sa,`close with error: ${t}`),this.stream=null,this.close(4,t)}W_(t){return e=>{this.Mi.enqueueAndForget(()=>this.D_===t?e():(x(Sa,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Lf extends Of{constructor(t,e,n,s,o,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,s,a),this.serializer=o}j_(t,e){return this.connection.T_("Listen",t,e)}J_(t){return this.onNext(t)}onNext(t){this.M_.reset();const e=zd(this.serializer,t),n=function(o){if(!("targetChange"in o))return q.min();const a=o.targetChange;return a.targetIds&&a.targetIds.length?q.min():a.readTime?Ye(a.readTime):q.min()}(t);return this.listener.H_(e,n)}Y_(t){const e={};e.database=ya(this.serializer),e.addTarget=function(o,a){let c;const h=a.target;if(c=Ks(h)?{documents:Hd(o,h)}:{query:Kd(o,h).ft},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=xl(o,a.resumeToken);const f=Xs(o,a.expectedCount);f!==null&&(c.expectedCount=f)}else if(a.snapshotVersion.compareTo(q.min())>0){c.readTime=Js(o,a.snapshotVersion.toTimestamp());const f=Xs(o,a.expectedCount);f!==null&&(c.expectedCount=f)}return c}(this.serializer,t);const n=Qd(this.serializer,t);n&&(e.labels=n),this.q_(e)}Z_(t){const e={};e.database=ya(this.serializer),e.removeTarget=t,this.q_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mf{}class xf extends Mf{constructor(t,e,n,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new N(C.FAILED_PRECONDITION,"The client has already been terminated.")}Go(t,e,n,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Go(t,Zs(e,n),s,o,a)).catch(o=>{throw o.name==="FirebaseError"?(o.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new N(C.UNKNOWN,o.toString())})}Ho(t,e,n,s,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,c])=>this.connection.Ho(t,Zs(e,n),s,a,c,o)).catch(a=>{throw a.name==="FirebaseError"?(a.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new N(C.UNKNOWN,a.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class Ff{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(t){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ca("Offline")))}set(t){this.Pa(),this.oa=0,t==="Online"&&(this.aa=!1),this.ca(t)}ca(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}la(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(ne(e),this.aa=!1):x("OnlineStateTracker",e)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const an="RemoteStore";class Uf{constructor(t,e,n,s,o){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=o,this.Aa.Oo(a=>{n.enqueueAndForget(async()=>{tr(this)&&(x(an,"Restarting streams for network reachability change."),await async function(h){const f=$(h);f.Ea.add(4),await Zn(f),f.Ra.set("Unknown"),f.Ea.delete(4),await is(f)}(this))})}),this.Ra=new Ff(n,s)}}async function is(r){if(tr(r))for(const t of r.da)await t(!0)}async function Zn(r){for(const t of r.da)await t(!1)}function Yl(r,t){const e=$(r);e.Ia.has(t.targetId)||(e.Ia.set(t.targetId,t),bi(e)?Ri(e):fn(e).O_()&&Si(e,t))}function wi(r,t){const e=$(r),n=fn(e);e.Ia.delete(t),n.O_()&&Xl(e,t),e.Ia.size===0&&(n.O_()?n.L_():tr(e)&&e.Ra.set("Unknown"))}function Si(r,t){if(r.Va.Ue(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(q.min())>0){const e=r.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}fn(r).Y_(t)}function Xl(r,t){r.Va.Ue(t),fn(r).Z_(t)}function Ri(r){r.Va=new Fd({getRemoteKeysForTarget:t=>r.remoteSyncer.getRemoteKeysForTarget(t),At:t=>r.Ia.get(t)||null,ht:()=>r.datastore.serializer.databaseId}),fn(r).start(),r.Ra.ua()}function bi(r){return tr(r)&&!fn(r).x_()&&r.Ia.size>0}function tr(r){return $(r).Ea.size===0}function Jl(r){r.Va=void 0}async function Bf(r){r.Ra.set("Online")}async function qf(r){r.Ia.forEach((t,e)=>{Si(r,t)})}async function jf(r,t){Jl(r),bi(r)?(r.Ra.ha(t),Ri(r)):r.Ra.set("Unknown")}async function Gf(r,t,e){if(r.Ra.set("Online"),t instanceof Ml&&t.state===2&&t.cause)try{await async function(s,o){const a=o.cause;for(const c of o.targetIds)s.Ia.has(c)&&(await s.remoteSyncer.rejectListen(c,a),s.Ia.delete(c),s.Va.removeTarget(c))}(r,t)}catch(n){x(an,"Failed to remove targets %s: %s ",t.targetIds.join(","),n),await Ra(r,n)}else if(t instanceof Nr?r.Va.Ze(t):t instanceof Ll?r.Va.st(t):r.Va.tt(t),!e.isEqual(q.min()))try{const n=await Ql(r.localStore);e.compareTo(n)>=0&&await function(o,a){const c=o.Va.Tt(a);return c.targetChanges.forEach((h,f)=>{if(h.resumeToken.approximateByteSize()>0){const g=o.Ia.get(f);g&&o.Ia.set(f,g.withResumeToken(h.resumeToken,a))}}),c.targetMismatches.forEach((h,f)=>{const g=o.Ia.get(h);if(!g)return;o.Ia.set(h,g.withResumeToken(Tt.EMPTY_BYTE_STRING,g.snapshotVersion)),Xl(o,h);const S=new ce(g.target,h,f,g.sequenceNumber);Si(o,S)}),o.remoteSyncer.applyRemoteEvent(c)}(r,e)}catch(n){x(an,"Failed to raise snapshot:",n),await Ra(r,n)}}async function Ra(r,t,e){if(!hn(t))throw t;r.Ea.add(1),await Zn(r),r.Ra.set("Offline"),e||(e=()=>Ql(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{x(an,"Retrying IndexedDB access"),await e(),r.Ea.delete(1),await is(r)})}async function ba(r,t){const e=$(r);e.asyncQueue.verifyOperationInProgress(),x(an,"RemoteStore received new credentials");const n=tr(e);e.Ea.add(3),await Zn(e),n&&e.Ra.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.Ea.delete(3),await is(e)}async function zf(r,t){const e=$(r);t?(e.Ea.delete(2),await is(e)):t||(e.Ea.add(2),await Zn(e),e.Ra.set("Unknown"))}function fn(r){return r.ma||(r.ma=function(e,n,s){const o=$(e);return o.sa(),new Lf(n,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(r.datastore,r.asyncQueue,{Xo:Bf.bind(null,r),t_:qf.bind(null,r),r_:jf.bind(null,r),H_:Gf.bind(null,r)}),r.da.push(async t=>{t?(r.ma.B_(),bi(r)?Ri(r):r.Ra.set("Unknown")):(await r.ma.stop(),Jl(r))})),r.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{constructor(t,e,n,s,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=s,this.removalCallback=o,this.deferred=new pe,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,n,s,o){const a=Date.now()+n,c=new Ci(t,e,a,s,o);return c.start(n),c}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new N(C.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Zl(r,t){if(ne("AsyncQueue",`${t}: ${r}`),hn(r))return new N(C.UNAVAILABLE,`${t}: ${r}`);throw r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{static emptySet(t){return new Xe(t.comparator)}constructor(t){this.comparator=t?(e,n)=>t(e,n)||B.comparator(e.key,n.key):(e,n)=>B.comparator(e.key,n.key),this.keyedMap=Mn(),this.sortedSet=new at(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,n)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Xe)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=n.getNext().key;if(!s.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const n=new Xe;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ca{constructor(){this.ga=new at(B.comparator)}track(t){const e=t.doc.key,n=this.ga.get(e);n?t.type!==0&&n.type===3?this.ga=this.ga.insert(e,t):t.type===3&&n.type!==1?this.ga=this.ga.insert(e,{type:n.type,doc:t.doc}):t.type===2&&n.type===2?this.ga=this.ga.insert(e,{type:2,doc:t.doc}):t.type===2&&n.type===0?this.ga=this.ga.insert(e,{type:0,doc:t.doc}):t.type===1&&n.type===0?this.ga=this.ga.remove(e):t.type===1&&n.type===2?this.ga=this.ga.insert(e,{type:1,doc:n.doc}):t.type===0&&n.type===1?this.ga=this.ga.insert(e,{type:2,doc:t.doc}):j(63341,{Rt:t,pa:n}):this.ga=this.ga.insert(e,t)}ya(){const t=[];return this.ga.inorderTraversal((e,n)=>{t.push(n)}),t}}class ln{constructor(t,e,n,s,o,a,c,h,f){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=s,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=h,this.hasCachedResults=f}static fromInitialDocuments(t,e,n,s,o){const a=[];return e.forEach(c=>{a.push({type:0,doc:c})}),new ln(t,e,Xe.emptySet(e),a,n,s,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Zr(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==n[s].type||!e[s].doc.isEqual(n[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hf{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(t=>t.Da())}}class Kf{constructor(){this.queries=Pa(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(e,n){const s=$(e),o=s.queries;s.queries=Pa(),o.forEach((a,c)=>{for(const h of c.Sa)h.onError(n)})})(this,new N(C.ABORTED,"Firestore shutting down"))}}function Pa(){return new ke(r=>wl(r),Zr)}async function tu(r,t){const e=$(r);let n=3;const s=t.query;let o=e.queries.get(s);o?!o.ba()&&t.Da()&&(n=2):(o=new Hf,n=t.Da()?0:1);try{switch(n){case 0:o.wa=await e.onListen(s,!0);break;case 1:o.wa=await e.onListen(s,!1);break;case 2:await e.onFirstRemoteStoreListen(s)}}catch(a){const c=Zl(a,`Initialization of query '${He(t.query)}' failed`);return void t.onError(c)}e.queries.set(s,o),o.Sa.push(t),t.va(e.onlineState),o.wa&&t.Fa(o.wa)&&Pi(e)}async function eu(r,t){const e=$(r),n=t.query;let s=3;const o=e.queries.get(n);if(o){const a=o.Sa.indexOf(t);a>=0&&(o.Sa.splice(a,1),o.Sa.length===0?s=t.Da()?0:1:!o.ba()&&t.Da()&&(s=2))}switch(s){case 0:return e.queries.delete(n),e.onUnlisten(n,!0);case 1:return e.queries.delete(n),e.onUnlisten(n,!1);case 2:return e.onLastRemoteStoreUnlisten(n);default:return}}function $f(r,t){const e=$(r);let n=!1;for(const s of t){const o=s.query,a=e.queries.get(o);if(a){for(const c of a.Sa)c.Fa(s)&&(n=!0);a.wa=s}}n&&Pi(e)}function Qf(r,t,e){const n=$(r),s=n.queries.get(t);if(s)for(const o of s.Sa)o.onError(e);n.queries.delete(t)}function Pi(r){r.Ca.forEach(t=>{t.next()})}var ni,Va;(Va=ni||(ni={})).Ma="default",Va.Cache="cache";class nu{constructor(t,e,n){this.query=t,this.xa=e,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=n||{}}Fa(t){if(!this.options.includeMetadataChanges){const n=[];for(const s of t.docChanges)s.type!==3&&n.push(s);t=new ln(t.query,t.docs,t.oldDocs,n,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Oa?this.Ba(t)&&(this.xa.next(t),e=!0):this.La(t,this.onlineState)&&(this.ka(t),e=!0),this.Na=t,e}onError(t){this.xa.error(t)}va(t){this.onlineState=t;let e=!1;return this.Na&&!this.Oa&&this.La(this.Na,t)&&(this.ka(this.Na),e=!0),e}La(t,e){if(!t.fromCache||!this.Da())return!0;const n=e!=="Offline";return(!this.options.qa||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}Ba(t){if(t.docChanges.length>0)return!0;const e=this.Na&&this.Na.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}ka(t){t=ln.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Oa=!0,this.xa.next(t)}Da(){return this.options.source!==ni.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ru{constructor(t){this.key=t}}class su{constructor(t){this.key=t}}class Wf{constructor(t,e){this.query=t,this.Ya=e,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Q(),this.mutatedKeys=Q(),this.eu=Sl(t),this.tu=new Xe(this.eu)}get nu(){return this.Ya}ru(t,e){const n=e?e.iu:new Ca,s=e?e.tu:this.tu;let o=e?e.mutatedKeys:this.mutatedKeys,a=s,c=!1;const h=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,f=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((g,S)=>{const w=s.get(g),P=ts(this.query,S)?S:null,k=!!w&&this.mutatedKeys.has(w.key),F=!!P&&(P.hasLocalMutations||this.mutatedKeys.has(P.key)&&P.hasCommittedMutations);let L=!1;w&&P?w.data.isEqual(P.data)?k!==F&&(n.track({type:3,doc:P}),L=!0):this.su(w,P)||(n.track({type:2,doc:P}),L=!0,(h&&this.eu(P,h)>0||f&&this.eu(P,f)<0)&&(c=!0)):!w&&P?(n.track({type:0,doc:P}),L=!0):w&&!P&&(n.track({type:1,doc:w}),L=!0,(h||f)&&(c=!0)),L&&(P?(a=a.add(P),o=F?o.add(g):o.delete(g)):(a=a.delete(g),o=o.delete(g)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const g=this.query.limitType==="F"?a.last():a.first();a=a.delete(g.key),o=o.delete(g.key),n.track({type:1,doc:g})}return{tu:a,iu:n,Cs:c,mutatedKeys:o}}su(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n,s){const o=this.tu;this.tu=t.tu,this.mutatedKeys=t.mutatedKeys;const a=t.iu.ya();a.sort((g,S)=>function(P,k){const F=L=>{switch(L){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return j(20277,{Rt:L})}};return F(P)-F(k)}(g.type,S.type)||this.eu(g.doc,S.doc)),this.ou(n),s=s??!1;const c=e&&!s?this._u():[],h=this.Xa.size===0&&this.current&&!s?1:0,f=h!==this.Za;return this.Za=h,a.length!==0||f?{snapshot:new ln(this.query,t.tu,o,a,t.mutatedKeys,h===0,f,!1,!!n&&n.resumeToken.approximateByteSize()>0),au:c}:{au:c}}va(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Ca,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(t){return!this.Ya.has(t)&&!!this.tu.has(t)&&!this.tu.get(t).hasLocalMutations}ou(t){t&&(t.addedDocuments.forEach(e=>this.Ya=this.Ya.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.Ya=this.Ya.delete(e)),this.current=t.current)}_u(){if(!this.current)return[];const t=this.Xa;this.Xa=Q(),this.tu.forEach(n=>{this.uu(n.key)&&(this.Xa=this.Xa.add(n.key))});const e=[];return t.forEach(n=>{this.Xa.has(n)||e.push(new su(n))}),this.Xa.forEach(n=>{t.has(n)||e.push(new ru(n))}),e}cu(t){this.Ya=t.Qs,this.Xa=Q();const e=this.ru(t.documents);return this.applyChanges(e,!0)}lu(){return ln.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const Vi="SyncEngine";class Yf{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class Xf{constructor(t){this.key=t,this.hu=!1}}class Jf{constructor(t,e,n,s,o,a){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=s,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.Pu={},this.Tu=new ke(c=>wl(c),Zr),this.Iu=new Map,this.Eu=new Set,this.du=new at(B.comparator),this.Au=new Map,this.Ru=new Ei,this.Vu={},this.mu=new Map,this.fu=on.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function Zf(r,t,e=!0){const n=uu(r);let s;const o=n.Tu.get(t);return o?(n.sharedClientState.addLocalQueryTarget(o.targetId),s=o.view.lu()):s=await iu(n,t,e,!0),s}async function tp(r,t){const e=uu(r);await iu(e,t,!0,!1)}async function iu(r,t,e,n){const s=await Rf(r.localStore,Ht(t)),o=s.targetId,a=r.sharedClientState.addLocalQueryTarget(o,e);let c;return n&&(c=await ep(r,t,o,a==="current",s.resumeToken)),r.isPrimaryClient&&e&&Yl(r.remoteStore,s),c}async function ep(r,t,e,n,s){r.pu=(S,w,P)=>async function(F,L,X,G){let Y=L.view.ru(X);Y.Cs&&(Y=await Ta(F.localStore,L.query,!1).then(({documents:T})=>L.view.ru(T,Y)));const rt=G&&G.targetChanges.get(L.targetId),Lt=G&&G.targetMismatches.get(L.targetId)!=null,ht=L.view.applyChanges(Y,F.isPrimaryClient,rt,Lt);return Na(F,L.targetId,ht.au),ht.snapshot}(r,S,w,P);const o=await Ta(r.localStore,t,!0),a=new Wf(t,o.Qs),c=a.ru(o.documents),h=Jn.createSynthesizedTargetChangeForCurrentChange(e,n&&r.onlineState!=="Offline",s),f=a.applyChanges(c,r.isPrimaryClient,h);Na(r,e,f.au);const g=new Yf(t,e,a);return r.Tu.set(t,g),r.Iu.has(e)?r.Iu.get(e).push(t):r.Iu.set(e,[t]),f.snapshot}async function np(r,t,e){const n=$(r),s=n.Tu.get(t),o=n.Iu.get(s.targetId);if(o.length>1)return n.Iu.set(s.targetId,o.filter(a=>!Zr(a,t))),void n.Tu.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await ti(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),e&&wi(n.remoteStore,s.targetId),ri(n,s.targetId)}).catch(Qr)):(ri(n,s.targetId),await ti(n.localStore,s.targetId,!0))}async function rp(r,t){const e=$(r),n=e.Tu.get(t),s=e.Iu.get(n.targetId);e.isPrimaryClient&&s.length===1&&(e.sharedClientState.removeLocalQueryTarget(n.targetId),wi(e.remoteStore,n.targetId))}async function ou(r,t){const e=$(r);try{const n=await wf(e.localStore,t);t.targetChanges.forEach((s,o)=>{const a=e.Au.get(o);a&&(nt(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.hu=!0:s.modifiedDocuments.size>0?nt(a.hu,14607):s.removedDocuments.size>0&&(nt(a.hu,42227),a.hu=!1))}),await lu(e,n,t)}catch(n){await Qr(n)}}function Da(r,t,e){const n=$(r);if(n.isPrimaryClient&&e===0||!n.isPrimaryClient&&e===1){const s=[];n.Tu.forEach((o,a)=>{const c=a.view.va(t);c.snapshot&&s.push(c.snapshot)}),function(a,c){const h=$(a);h.onlineState=c;let f=!1;h.queries.forEach((g,S)=>{for(const w of S.Sa)w.va(c)&&(f=!0)}),f&&Pi(h)}(n.eventManager,t),s.length&&n.Pu.H_(s),n.onlineState=t,n.isPrimaryClient&&n.sharedClientState.setOnlineState(t)}}async function sp(r,t,e){const n=$(r);n.sharedClientState.updateQueryState(t,"rejected",e);const s=n.Au.get(t),o=s&&s.key;if(o){let a=new at(B.comparator);a=a.insert(o,Rt.newNoDocument(o,q.min()));const c=Q().add(o),h=new rs(q.min(),new Map,new at(z),a,c);await ou(n,h),n.du=n.du.remove(o),n.Au.delete(t),Di(n)}else await ti(n.localStore,t,!1).then(()=>ri(n,t,e)).catch(Qr)}function ri(r,t,e=null){r.sharedClientState.removeLocalQueryTarget(t);for(const n of r.Iu.get(t))r.Tu.delete(n),e&&r.Pu.yu(n,e);r.Iu.delete(t),r.isPrimaryClient&&r.Ru.jr(t).forEach(n=>{r.Ru.containsKey(n)||au(r,n)})}function au(r,t){r.Eu.delete(t.path.canonicalString());const e=r.du.get(t);e!==null&&(wi(r.remoteStore,e),r.du=r.du.remove(t),r.Au.delete(e),Di(r))}function Na(r,t,e){for(const n of e)n instanceof ru?(r.Ru.addReference(n.key,t),ip(r,n)):n instanceof su?(x(Vi,"Document no longer in limbo: "+n.key),r.Ru.removeReference(n.key,t),r.Ru.containsKey(n.key)||au(r,n.key)):j(19791,{wu:n})}function ip(r,t){const e=t.key,n=e.path.canonicalString();r.du.get(e)||r.Eu.has(n)||(x(Vi,"New document in limbo: "+e),r.Eu.add(n),Di(r))}function Di(r){for(;r.Eu.size>0&&r.du.size<r.maxConcurrentLimboResolutions;){const t=r.Eu.values().next().value;r.Eu.delete(t);const e=new B(Z.fromString(t)),n=r.fu.next();r.Au.set(n,new Xf(e)),r.du=r.du.insert(e,n),Yl(r.remoteStore,new ce(Ht(pi(e.path)),n,"TargetPurposeLimboResolution",Wr.ce))}}async function lu(r,t,e){const n=$(r),s=[],o=[],a=[];n.Tu.isEmpty()||(n.Tu.forEach((c,h)=>{a.push(n.pu(h,t,e).then(f=>{var g;if((f||e)&&n.isPrimaryClient){const S=f?!f.fromCache:(g=e==null?void 0:e.targetChanges.get(h.targetId))==null?void 0:g.current;n.sharedClientState.updateQueryState(h.targetId,S?"current":"not-current")}if(f){s.push(f);const S=Ii.As(h.targetId,f);o.push(S)}}))}),await Promise.all(a),n.Pu.H_(s),await async function(h,f){const g=$(h);try{await g.persistence.runTransaction("notifyLocalViewChanges","readwrite",S=>b.forEach(f,w=>b.forEach(w.Es,P=>g.persistence.referenceDelegate.addReference(S,w.targetId,P)).next(()=>b.forEach(w.ds,P=>g.persistence.referenceDelegate.removeReference(S,w.targetId,P)))))}catch(S){if(!hn(S))throw S;x(Ai,"Failed to update sequence numbers: "+S)}for(const S of f){const w=S.targetId;if(!S.fromCache){const P=g.Ms.get(w),k=P.snapshotVersion,F=P.withLastLimboFreeSnapshotVersion(k);g.Ms=g.Ms.insert(w,F)}}}(n.localStore,o))}async function op(r,t){const e=$(r);if(!e.currentUser.isEqual(t)){x(Vi,"User change. New user:",t.toKey());const n=await $l(e.localStore,t);e.currentUser=t,function(o,a){o.mu.forEach(c=>{c.forEach(h=>{h.reject(new N(C.CANCELLED,a))})}),o.mu.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,n.removedBatchIds,n.addedBatchIds),await lu(e,n.Ls)}}function ap(r,t){const e=$(r),n=e.Au.get(t);if(n&&n.hu)return Q().add(n.key);{let s=Q();const o=e.Iu.get(t);if(!o)return s;for(const a of o){const c=e.Tu.get(a);s=s.unionWith(c.view.nu)}return s}}function uu(r){const t=$(r);return t.remoteStore.remoteSyncer.applyRemoteEvent=ou.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=ap.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=sp.bind(null,t),t.Pu.H_=$f.bind(null,t.eventManager),t.Pu.yu=Qf.bind(null,t.eventManager),t}class Kr{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=ss(t.databaseInfo.databaseId),this.sharedClientState=this.Du(t),this.persistence=this.Cu(t),await this.persistence.start(),this.localStore=this.vu(t),this.gcScheduler=this.Fu(t,this.localStore),this.indexBackfillerScheduler=this.Mu(t,this.localStore)}Fu(t,e){return null}Mu(t,e){return null}vu(t){return Af(this.persistence,new Ef,t.initialUser,this.serializer)}Cu(t){return new Kl(Ti.mi,this.serializer)}Du(t){return new Cf}async terminate(){var t,e;(t=this.gcScheduler)==null||t.stop(),(e=this.indexBackfillerScheduler)==null||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Kr.provider={build:()=>new Kr};class lp extends Kr{constructor(t){super(),this.cacheSizeBytes=t}Fu(t,e){nt(this.persistence.referenceDelegate instanceof Hr,46915);const n=this.persistence.referenceDelegate.garbageCollector;return new sf(n,t.asyncQueue,e)}Cu(t){const e=this.cacheSizeBytes!==void 0?Vt.withCacheSize(this.cacheSizeBytes):Vt.DEFAULT;return new Kl(n=>Hr.mi(n,e),this.serializer)}}class si{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>Da(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=op.bind(null,this.syncEngine),await zf(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new Kf}()}createDatastore(t){const e=ss(t.databaseInfo.databaseId),n=function(o){return new kf(o)}(t.databaseInfo);return function(o,a,c,h){return new xf(o,a,c,h)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return function(n,s,o,a,c){return new Uf(n,s,o,a,c)}(this.localStore,this.datastore,t.asyncQueue,e=>Da(this.syncEngine,e,0),function(){return wa.v()?new wa:new Pf}())}createSyncEngine(t,e){return function(s,o,a,c,h,f,g){const S=new Jf(s,o,a,c,h,f);return g&&(S.gu=!0),S}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(s){const o=$(s);x(an,"RemoteStore shutting down."),o.Ea.add(5),await Zn(o),o.Aa.shutdown(),o.Ra.set("Unknown")}(this.remoteStore),(t=this.datastore)==null||t.terminate(),(e=this.eventManager)==null||e.terminate()}}si.provider={build:()=>new si};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cu{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ou(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ou(this.observer.error,t):ne("Uncaught Error in snapshot listener:",t.toString()))}Nu(){this.muted=!0}Ou(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Te="FirestoreClient";class up{constructor(t,e,n,s,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=s,this.user=St.UNAUTHENTICATED,this.clientId=ci.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(n,async a=>{x(Te,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(n,a=>(x(Te,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new pe;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=Zl(e,"Failed to shutdown persistence");t.reject(n)}}),t.promise}}async function Ls(r,t){r.asyncQueue.verifyOperationInProgress(),x(Te,"Initializing OfflineComponentProvider");const e=r.configuration;await t.initialize(e);let n=e.initialUser;r.setCredentialChangeListener(async s=>{n.isEqual(s)||(await $l(t.localStore,s),n=s)}),t.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=t}async function ka(r,t){r.asyncQueue.verifyOperationInProgress();const e=await cp(r);x(Te,"Initializing OnlineComponentProvider"),await t.initialize(e,r.configuration),r.setCredentialChangeListener(n=>ba(t.remoteStore,n)),r.setAppCheckTokenChangeListener((n,s)=>ba(t.remoteStore,s)),r._onlineComponents=t}async function cp(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){x(Te,"Using user provided OfflineComponentProvider");try{await Ls(r,r._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(s){return s.name==="FirebaseError"?s.code===C.FAILED_PRECONDITION||s.code===C.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(e))throw e;tn("Error using user provided cache. Falling back to memory cache: "+e),await Ls(r,new Kr)}}else x(Te,"Using default OfflineComponentProvider"),await Ls(r,new lp(void 0));return r._offlineComponents}async function hp(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(x(Te,"Using user provided OnlineComponentProvider"),await ka(r,r._uninitializedComponentsProvider._online)):(x(Te,"Using default OnlineComponentProvider"),await ka(r,new si))),r._onlineComponents}async function hu(r){const t=await hp(r),e=t.eventManager;return e.onListen=Zf.bind(null,t.syncEngine),e.onUnlisten=np.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=tp.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=rp.bind(null,t.syncEngine),e}function dp(r,t,e={}){const n=new pe;return r.asyncQueue.enqueueAndForget(async()=>function(o,a,c,h,f){const g=new cu({next:w=>{g.Nu(),a.enqueueAndForget(()=>eu(o,S));const P=w.docs.has(c);!P&&w.fromCache?f.reject(new N(C.UNAVAILABLE,"Failed to get document because the client is offline.")):P&&w.fromCache&&h&&h.source==="server"?f.reject(new N(C.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):f.resolve(w)},error:w=>f.reject(w)}),S=new nu(pi(c.path),g,{includeMetadataChanges:!0,qa:!0});return tu(o,S)}(await hu(r),r.asyncQueue,t,e,n)),n.promise}function fp(r,t,e={}){const n=new pe;return r.asyncQueue.enqueueAndForget(async()=>function(o,a,c,h,f){const g=new cu({next:w=>{g.Nu(),a.enqueueAndForget(()=>eu(o,S)),w.fromCache&&h.source==="server"?f.reject(new N(C.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):f.resolve(w)},error:w=>f.reject(w)}),S=new nu(c,g,{includeMetadataChanges:!0,qa:!0});return tu(o,S)}(await hu(r),r.asyncQueue,t,e,n)),n.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function du(r){const t={};return r.timeoutSeconds!==void 0&&(t.timeoutSeconds=r.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oa=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fu="firestore.googleapis.com",La=!0;class Ma{constructor(t){if(t.host===void 0){if(t.ssl!==void 0)throw new N(C.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=fu,this.ssl=La}else this.host=t.host,this.ssl=t.ssl??La;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=Hl;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<nf)throw new N(C.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Hh("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=du(t.experimentalLongPollingOptions??{}),function(n){if(n.timeoutSeconds!==void 0){if(isNaN(n.timeoutSeconds))throw new N(C.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (must not be NaN)`);if(n.timeoutSeconds<5)throw new N(C.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (minimum allowed value is 5)`);if(n.timeoutSeconds>30)throw new N(C.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(n,s){return n.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class os{constructor(t,e,n,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ma({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new N(C.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new N(C.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ma(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Lh;switch(n.type){case"firstParty":return new Uh(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new N(C.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Oa.get(e);n&&(x("ComponentProvider","Removing Datastore"),Oa.delete(e),n.terminate())}(this),Promise.resolve()}}function pp(r,t,e,n={}){var f;r=Hn(r,os);const s=ai(t),o=r._getSettings(),a={...o,emulatorOptions:r._getEmulatorOptions()},c=`${t}:${e}`;s&&(cc(`https://${c}`),pc("Firestore",!0)),o.host!==fu&&o.host!==c&&tn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const h={...o,host:c,ssl:s,emulatorOptions:n};if(!Mr(h,a)&&(r._setSettings(h),n.mockUserToken)){let g,S;if(typeof n.mockUserToken=="string")g=n.mockUserToken,S=St.MOCK_USER;else{g=hc(n.mockUserToken,(f=r._app)==null?void 0:f.options.projectId);const w=n.mockUserToken.sub||n.mockUserToken.user_id;if(!w)throw new N(C.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");S=new St(w)}r._authCredentials=new Mh(new ol(g,S))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new re(this.firestore,t,this._query)}}class ft{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new me(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new ft(this.firestore,t,this._key)}toJSON(){return{type:ft._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,e,n){if(Xn(e,ft._jsonSchema))return new ft(t,n||null,new B(Z.fromString(e.referencePath)))}}ft._jsonSchemaVersion="firestore/documentReference/1.0",ft._jsonSchema={type:ct("string",ft._jsonSchemaVersion),referencePath:ct("string")};class me extends re{constructor(t,e,n){super(t,e,pi(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new ft(this.firestore,null,new B(t))}withConverter(t){return new me(this.firestore,t,this._path)}}function Lp(r,t,...e){if(r=Ze(r),al("collection","path",t),r instanceof os){const n=Z.fromString(t,...e);return Wo(n),new me(r,null,n)}{if(!(r instanceof ft||r instanceof me))throw new N(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(Z.fromString(t,...e));return Wo(n),new me(r.firestore,null,n)}}function Mp(r,t,...e){if(r=Ze(r),arguments.length===1&&(t=ci.newId()),al("doc","path",t),r instanceof os){const n=Z.fromString(t,...e);return Qo(n),new ft(r,null,new B(n))}{if(!(r instanceof ft||r instanceof me))throw new N(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(Z.fromString(t,...e));return Qo(n),new ft(r.firestore,r instanceof me?r.converter:null,new B(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xa="AsyncQueue";class Fa{constructor(t=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Wl(this,"async_queue_retry"),this._c=()=>{const n=Os();n&&x(xa,"Visibility state changed to "+n.visibilityState),this.M_.w_()},this.ac=t;const e=Os();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.uc(),this.cc(t)}enterRestrictedMode(t){if(!this.ec){this.ec=!0,this.sc=t||!1;const e=Os();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this._c)}}enqueue(t){if(this.uc(),this.ec)return new Promise(()=>{});const e=new pe;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Xu.push(t),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(t){if(!hn(t))throw t;x(xa,"Operation failed with retryable error: "+t)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(t){const e=this.ac.then(()=>(this.rc=!0,t().catch(n=>{throw this.nc=n,this.rc=!1,ne("INTERNAL UNHANDLED ERROR: ",Ua(n)),n}).then(n=>(this.rc=!1,n))));return this.ac=e,e}enqueueAfterDelay(t,e,n){this.uc(),this.oc.indexOf(t)>-1&&(e=0);const s=Ci.createAndSchedule(this,t,e,n,o=>this.hc(o));return this.tc.push(s),s}uc(){this.nc&&j(47125,{Pc:Ua(this.nc)})}verifyOperationInProgress(){}async Tc(){let t;do t=this.ac,await t;while(t!==this.ac)}Ic(t){for(const e of this.tc)if(e.timerId===t)return!0;return!1}Ec(t){return this.Tc().then(()=>{this.tc.sort((e,n)=>e.targetTimeMs-n.targetTimeMs);for(const e of this.tc)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.Tc()})}dc(t){this.oc.push(t)}hc(t){const e=this.tc.indexOf(t);this.tc.splice(e,1)}}function Ua(r){let t=r.message||"";return r.stack&&(t=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),t}class Ni extends os{constructor(t,e,n,s){super(t,e,n,s),this.type="firestore",this._queue=new Fa,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Fa(t),this._firestoreClient=void 0,await t}}}function mp(r,t){const e=typeof r=="object"?r:wh(),n=typeof r=="string"?r:Br,s=vh(e,"firestore").getImmediate({identifier:n});if(!s._initialized){const o=lc("firestore");o&&pp(s,...o)}return s}function pu(r){if(r._terminated)throw new N(C.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||gp(r),r._firestoreClient}function gp(r){var n,s,o;const t=r._freezeSettings(),e=function(c,h,f,g){return new rd(c,h,f,g.host,g.ssl,g.experimentalForceLongPolling,g.experimentalAutoDetectLongPolling,du(g.experimentalLongPollingOptions),g.useFetchStreams,g.isUsingEmulator)}(r._databaseId,((n=r._app)==null?void 0:n.options.appId)||"",r._persistenceKey,t);r._componentsProvider||(s=t.localCache)!=null&&s._offlineComponentProvider&&((o=t.localCache)!=null&&o._onlineComponentProvider)&&(r._componentsProvider={_offline:t.localCache._offlineComponentProvider,_online:t.localCache._onlineComponentProvider}),r._firestoreClient=new up(r._authCredentials,r._appCheckCredentials,r._queue,e,r._componentsProvider&&function(c){const h=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(h),_online:h}}(r._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Ot(Tt.fromBase64String(t))}catch(e){throw new N(C.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Ot(Tt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:Ot._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(Xn(t,Ot._jsonSchema))return Ot.fromBase64String(t.bytes)}}Ot._jsonSchemaVersion="firestore/bytes/1.0",Ot._jsonSchema={type:ct("string",Ot._jsonSchemaVersion),bytes:ct("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mu{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new N(C.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new bt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gu{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new N(C.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new N(C.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return z(this._lat,t._lat)||z(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Kt._jsonSchemaVersion}}static fromJSON(t){if(Xn(t,Kt._jsonSchema))return new Kt(t.latitude,t.longitude)}}Kt._jsonSchemaVersion="firestore/geoPoint/1.0",Kt._jsonSchema={type:ct("string",Kt._jsonSchemaVersion),latitude:ct("number"),longitude:ct("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(n,s){if(n.length!==s.length)return!1;for(let o=0;o<n.length;++o)if(n[o]!==s[o])return!1;return!0}(this._values,t._values)}toJSON(){return{type:$t._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(Xn(t,$t._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every(e=>typeof e=="number"))return new $t(t.vectorValues);throw new N(C.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}$t._jsonSchemaVersion="firestore/vectorValue/1.0",$t._jsonSchema={type:ct("string",$t._jsonSchemaVersion),vectorValues:ct("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yp=/^__.*__$/;function yu(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw j(40011,{Ac:r})}}class ki{constructor(t,e,n,s,o,a){this.settings=t,this.databaseId=e,this.serializer=n,this.ignoreUndefinedProperties=s,o===void 0&&this.Rc(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(t){return new ki({...this.settings,...t},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(t){var s;const e=(s=this.path)==null?void 0:s.child(t),n=this.Vc({path:e,fc:!1});return n.gc(t),n}yc(t){var s;const e=(s=this.path)==null?void 0:s.child(t),n=this.Vc({path:e,fc:!1});return n.Rc(),n}wc(t){return this.Vc({path:void 0,fc:!0})}Sc(t){return ii(t,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}Rc(){if(this.path)for(let t=0;t<this.path.length;t++)this.gc(this.path.get(t))}gc(t){if(t.length===0)throw this.Sc("Document fields must not be empty");if(yu(this.Ac)&&yp.test(t))throw this.Sc('Document fields cannot begin and end with "__"')}}class _p{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=n||ss(t)}Cc(t,e,n,s=!1){return new ki({Ac:t,methodName:e,Dc:n,path:bt.emptyPath(),fc:!1,bc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function _u(r){const t=r._freezeSettings(),e=ss(r._databaseId);return new _p(r._databaseId,!!t.ignoreUndefinedProperties,e)}function vu(r,t,e,n=!1){return Oi(e,r.Cc(n?4:3,t))}function Oi(r,t){if(Eu(r=Ze(r)))return Ep("Unsupported field value:",t,r),vp(r,t);if(r instanceof gu)return function(n,s){if(!yu(s.Ac))throw s.Sc(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Sc(`${n._methodName}() is not currently supported inside arrays`);const o=n._toFieldTransform(s);o&&s.fieldTransforms.push(o)}(r,t),null;if(r===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),r instanceof Array){if(t.settings.fc&&t.Ac!==4)throw t.Sc("Nested arrays are not supported");return function(n,s){const o=[];let a=0;for(const c of n){let h=Oi(c,s.wc(a));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),a++}return{arrayValue:{values:o}}}(r,t)}return function(n,s){if((n=Ze(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Rd(s.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const o=et.fromDate(n);return{timestampValue:Js(s.serializer,o)}}if(n instanceof et){const o=new et(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Js(s.serializer,o)}}if(n instanceof Kt)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Ot)return{bytesValue:xl(s.serializer,n._byteString)};if(n instanceof ft){const o=s.databaseId,a=n.firestore._databaseId;if(!a.isEqual(o))throw s.Sc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:Fl(n.firestore._databaseId||s.databaseId,n._key.path)}}if(n instanceof $t)return function(a,c){return{mapValue:{fields:{[gl]:{stringValue:yl},[qr]:{arrayValue:{values:a.toArray().map(f=>{if(typeof f!="number")throw c.Sc("VectorValues must only contain numeric values.");return gi(c.serializer,f)})}}}}}}(n,s);throw s.Sc(`Unsupported field value: ${$r(n)}`)}(r,t)}function vp(r,t){const e={};return cl(r)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):dn(r,(n,s)=>{const o=Oi(s,t.mc(n));o!=null&&(e[n]=o)}),{mapValue:{fields:e}}}function Eu(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof et||r instanceof Kt||r instanceof Ot||r instanceof ft||r instanceof gu||r instanceof $t)}function Ep(r,t,e){if(!Eu(e)||!ll(e)){const n=$r(e);throw n==="an object"?t.Sc(r+" a custom object"):t.Sc(r+" "+n)}}const Tp=new RegExp("[~\\*/\\[\\]]");function Ip(r,t,e){if(t.search(Tp)>=0)throw ii(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,e);try{return new mu(...t.split("."))._internalPath}catch{throw ii(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,e)}}function ii(r,t,e,n,s){const o=n&&!n.isEmpty(),a=s!==void 0;let c=`Function ${t}() called with invalid data`;e&&(c+=" (via `toFirestore()`)"),c+=". ";let h="";return(o||a)&&(h+=" (found",o&&(h+=` in field ${n}`),a&&(h+=` in document ${s}`),h+=")"),new N(C.INVALID_ARGUMENT,c+r+h)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li{constructor(t,e,n,s,o){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=s,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new ft(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Ap(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(as("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class Ap extends Li{data(){return super.data()}}function as(r,t){return typeof t=="string"?Ip(r,t):t instanceof mu?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wp(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new N(C.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Mi{}class ls extends Mi{}function xp(r,t,...e){let n=[];t instanceof Mi&&n.push(t),n=n.concat(e),function(o){const a=o.filter(h=>h instanceof xi).length,c=o.filter(h=>h instanceof us).length;if(a>1||a>0&&c>0)throw new N(C.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(n);for(const s of n)r=s._apply(r);return r}class us extends ls{constructor(t,e,n){super(),this._field=t,this._op=e,this._value=n,this.type="where"}static _create(t,e,n){return new us(t,e,n)}_apply(t){const e=this._parse(t);return Iu(t._query,e),new re(t.firestore,t.converter,$s(t._query,e))}_parse(t){const e=_u(t.firestore);return function(o,a,c,h,f,g,S){let w;if(f.isKeyField()){if(g==="array-contains"||g==="array-contains-any")throw new N(C.INVALID_ARGUMENT,`Invalid Query. You can't perform '${g}' queries on documentId().`);if(g==="in"||g==="not-in"){qa(S,g);const k=[];for(const F of S)k.push(Ba(h,o,F));w={arrayValue:{values:k}}}else w=Ba(h,o,S)}else g!=="in"&&g!=="not-in"&&g!=="array-contains-any"||qa(S,g),w=vu(c,a,S,g==="in"||g==="not-in");return ut.create(f,g,w)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}function Fp(r,t,e){const n=t,s=as("where",r);return us._create(s,n,e)}class xi extends Mi{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new xi(t,e)}_parse(t){const e=this._queryConstraints.map(n=>n._parse(t)).filter(n=>n.getFilters().length>0);return e.length===1?e[0]:Ft.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:(function(s,o){let a=s;const c=o.getFlattenedFilters();for(const h of c)Iu(a,h),a=$s(a,h)}(t._query,e),new re(t.firestore,t.converter,$s(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Fi extends ls{constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}static _create(t,e){return new Fi(t,e)}_apply(t){const e=function(s,o,a){if(s.startAt!==null)throw new N(C.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new N(C.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Yn(o,a)}(t._query,this._field,this._direction);return new re(t.firestore,t.converter,function(s,o){const a=s.explicitOrderBy.concat([o]);return new Ie(s.path,s.collectionGroup,a,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(t._query,e))}}function Up(r,t="asc"){const e=t,n=as("orderBy",r);return Fi._create(n,e)}class Ui extends ls{constructor(t,e,n){super(),this.type=t,this._docOrFields=e,this._inclusive=n}static _create(t,e,n){return new Ui(t,e,n)}_apply(t){const e=Tu(t,this.type,this._docOrFields,this._inclusive);return new re(t.firestore,t.converter,function(s,o){return new Ie(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),s.limit,s.limitType,o,s.endAt)}(t._query,e))}}function Bp(...r){return Ui._create("startAt",r,!0)}class Bi extends ls{constructor(t,e,n){super(),this.type=t,this._docOrFields=e,this._inclusive=n}static _create(t,e,n){return new Bi(t,e,n)}_apply(t){const e=Tu(t,this.type,this._docOrFields,this._inclusive);return new re(t.firestore,t.converter,function(s,o){return new Ie(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),s.limit,s.limitType,s.startAt,o)}(t._query,e))}}function qp(...r){return Bi._create("endAt",r,!0)}function Tu(r,t,e,n){if(e[0]=Ze(e[0]),e[0]instanceof Li)return function(o,a,c,h,f){if(!h)throw new N(C.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${c}().`);const g=[];for(const S of We(o))if(S.field.isKeyField())g.push(jr(a,h.key));else{const w=h.data.field(S.field);if(Xr(w))throw new N(C.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+S.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(w===null){const P=S.field.canonicalString();throw new N(C.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${P}' (used as the orderBy) does not exist.`)}g.push(w)}return new sn(g,f)}(r._query,r.firestore._databaseId,t,e[0]._document,n);{const s=_u(r.firestore);return function(a,c,h,f,g,S){const w=a.explicitOrderBy;if(g.length>w.length)throw new N(C.INVALID_ARGUMENT,`Too many arguments provided to ${f}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const P=[];for(let k=0;k<g.length;k++){const F=g[k];if(w[k].field.isKeyField()){if(typeof F!="string")throw new N(C.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${f}(), but got a ${typeof F}`);if(!mi(a)&&F.indexOf("/")!==-1)throw new N(C.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${f}() must be a plain document ID, but '${F}' contains a slash.`);const L=a.path.child(Z.fromString(F));if(!B.isDocumentKey(L))throw new N(C.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${f}() must result in a valid document path, but '${L}' is not because it contains an odd number of segments.`);const X=new B(L);P.push(jr(c,X))}else{const L=vu(h,f,F);P.push(L)}}return new sn(P,S)}(r._query,r.firestore._databaseId,s,t,e,n)}}function Ba(r,t,e){if(typeof(e=Ze(e))=="string"){if(e==="")throw new N(C.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!mi(t)&&e.indexOf("/")!==-1)throw new N(C.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const n=t.path.child(Z.fromString(e));if(!B.isDocumentKey(n))throw new N(C.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${n}' is not because it has an odd number of segments (${n.length}).`);return jr(r,new B(n))}if(e instanceof ft)return jr(r,e._key);throw new N(C.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${$r(e)}.`)}function qa(r,t){if(!Array.isArray(r)||r.length===0)throw new N(C.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function Iu(r,t){const e=function(s,o){for(const a of s)for(const c of a.getFlattenedFilters())if(o.indexOf(c.op)>=0)return c.op;return null}(r.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(e!==null)throw e===t.op?new N(C.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new N(C.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}class Sp{convertValue(t,e="none"){switch(ve(t)){case 0:return null;case 1:return t.booleanValue;case 2:return ot(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(_e(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw j(62114,{value:t})}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const n={};return dn(t,(s,o)=>{n[s]=this.convertValue(o,e)}),n}convertVectorValue(t){var n,s,o;const e=(o=(s=(n=t.fields)==null?void 0:n[qr].arrayValue)==null?void 0:s.values)==null?void 0:o.map(a=>ot(a.doubleValue));return new $t(e)}convertGeoPoint(t){return new Kt(ot(t.latitude),ot(t.longitude))}convertArray(t,e){return(t.values||[]).map(n=>this.convertValue(n,e))}convertServerTimestamp(t,e){switch(e){case"previous":const n=Jr(t);return n==null?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp($n(t));default:return null}}convertTimestamp(t){const e=ye(t);return new et(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=Z.fromString(t);nt(zl(n),9688,{name:t});const s=new Qn(n.get(1),n.get(3)),o=new B(n.popFirst(5));return s.isEqual(e)||ne(`Document ${o} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}class Fn{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class De extends Li{constructor(t,e,n,s,o,a){super(t,e,n,s,a),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new kr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(as("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new N(C.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,e={};return e.type=De._jsonSchemaVersion,e.bundle="",e.bundleSource="DocumentSnapshot",e.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?e:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),e.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),e)}}De._jsonSchemaVersion="firestore/documentSnapshot/1.0",De._jsonSchema={type:ct("string",De._jsonSchemaVersion),bundleSource:ct("string","DocumentSnapshot"),bundleName:ct("string"),bundle:ct("string")};class kr extends De{data(t={}){return super.data(t)}}class Je{constructor(t,e,n,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new Fn(s.hasPendingWrites,s.fromCache),this.query=n}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(n=>{t.call(e,new kr(this._firestore,this._userDataWriter,n.key,n,new Fn(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new N(C.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(s,o){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(c=>{const h=new kr(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Fn(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:h,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>o||c.type!==3).map(c=>{const h=new kr(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Fn(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let f=-1,g=-1;return c.type!==0&&(f=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),g=a.indexOf(c.doc.key)),{type:Rp(c.type),doc:h,oldIndex:f,newIndex:g}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new N(C.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=Je._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=ci.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const e=[],n=[],s=[];return this.docs.forEach(o=>{o._document!==null&&(e.push(o._document),n.push(this._userDataWriter.convertObjectMap(o._document.data.value.mapValue.fields,"previous")),s.push(o.ref.path))}),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function Rp(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return j(61501,{type:r})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jp(r){r=Hn(r,ft);const t=Hn(r.firestore,Ni);return dp(pu(t),r._key).then(e=>bp(t,r,e))}Je._jsonSchemaVersion="firestore/querySnapshot/1.0",Je._jsonSchema={type:ct("string",Je._jsonSchemaVersion),bundleSource:ct("string","QuerySnapshot"),bundleName:ct("string"),bundle:ct("string")};class Au extends Sp{constructor(t){super(),this.firestore=t}convertBytes(t){return new Ot(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new ft(this.firestore,null,e)}}function Gp(r){r=Hn(r,re);const t=Hn(r.firestore,Ni),e=pu(t),n=new Au(t);return wp(r._query),fp(e,r._query).then(s=>new Je(t,n,r,s))}function bp(r,t,e){const n=e.docs.get(t._key),s=new Au(r);return new De(r,s,t._key,n,new Fn(e.hasPendingWrites,e.fromCache),t.converter)}(function(t,e=!0){(function(s){cn=s})(Ah),Fr(new Gn("firestore",(n,{instanceIdentifier:s,options:o})=>{const a=n.getProvider("app").getImmediate(),c=new Ni(new xh(n.getProvider("auth-internal")),new Bh(a,n.getProvider("app-check-internal")),function(f,g){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new N(C.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Qn(f.options.projectId,g)}(a,s),a);return o={useFetchStreams:e,...o},c._setSettings(o),c},"PUBLIC").setMultipleInstances(!0)),Qe(zo,Ho,t),Qe(zo,Ho,"esm2020")})();var Cp="firebase",Pp="12.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Qe(Cp,Pp,"app");const Vp={apiKey:"AIzaSyDOWFazlwHsZjgXU5a-7EuHuSOO3o_U2Gg",authDomain:"vet-cat.firebaseapp.com",projectId:"vet-cat",storageBucket:"vet-cat.firebasestorage.app",messagingSenderId:"1058557590103",appId:"1:1058557590103:web:0918d3d62a4451a0568112"},Dp=Ya(Vp),zp=mp(Dp);export{Gp as a,ja as b,Lp as c,zp as d,yt as e,Mp as f,jt as g,jp as h,kp as i,qp as j,Up as o,xp as q,Np as r,Bp as s,Fp as w};
