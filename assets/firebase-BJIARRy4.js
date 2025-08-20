(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function e(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=e(i);fetch(i.href,o)}})();function At(r,t,e,n=!0){if(r&&e){const i={add:()=>r.classList.add(e),remove:()=>r.classList.remove(e),toggle:()=>r.classList.toggle(e),toggleBoolean:()=>r.classList.toggle(e,n),contains:()=>r.classList.contains(e)};if(i[t])return i[t]()}}function ya(r,t=document){return t.querySelectorAll(r)}function Bt(r,t=document){return t?t.querySelector(r):null}function ou(){const r=ya(".sidebar-sub-list");r.forEach(t=>{t.addEventListener("click",()=>{r.forEach(e=>{t===e?(e.style.pointerEvents="none",At(e,"toggle","sidebar-sub-list_active"),setTimeout(()=>{e.style.pointerEvents="auto"},300)):At(e,"remove","sidebar-sub-list_active")})})})}var Ir={exports:{}},au=Ir.exports,ao;function lu(){return ao||(ao=1,function(r,t){(function(n,i){r.exports=i()})(au,function(){return function(e){var n={};function i(o){if(n[o])return n[o].exports;var l=n[o]={i:o,l:!1,exports:{}};return e[o].call(l.exports,l,l.exports,i),l.l=!0,l.exports}return i.m=e,i.c=n,i.d=function(o,l,c){i.o(o,l)||Object.defineProperty(o,l,{enumerable:!0,get:c})},i.r=function(o){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})},i.t=function(o,l){if(l&1&&(o=i(o)),l&8||l&4&&typeof o=="object"&&o&&o.__esModule)return o;var c=Object.create(null);if(i.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:o}),l&2&&typeof o!="string")for(var d in o)i.d(c,d,(function(f){return o[f]}).bind(null,d));return c},i.n=function(o){var l=o&&o.__esModule?function(){return o.default}:function(){return o};return i.d(l,"a",l),l},i.o=function(o,l){return Object.prototype.hasOwnProperty.call(o,l)},i.p="",i(i.s=0)}([function(e,n,i){i.r(n);var o=function(m){return Array.isArray(m)?m:[m]},l=function(m){return m instanceof Node},c=function(m){return m instanceof NodeList},d=function(m,P){if(m&&P){m=c(m)?m:[m];for(var N=0;N<m.length&&P(m[N],N,m.length)!==!0;N++);}},f=function(m){return console.error("[scroll-lock] ".concat(m))},_=function(m){if(Array.isArray(m)){var P=m.join(", ");return P}},w=function(m){var P=[];return d(m,function(N){return P.push(N)}),P},S=function(m,P){var N=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0,x=arguments.length>3&&arguments[3]!==void 0?arguments[3]:document;if(N&&w(x.querySelectorAll(P)).indexOf(m)!==-1)return m;for(;(m=m.parentElement)&&w(x.querySelectorAll(P)).indexOf(m)===-1;);return m},C=function(m,P){var N=arguments.length>2&&arguments[2]!==void 0?arguments[2]:document,x=w(N.querySelectorAll(P)).indexOf(m)!==-1;return x},L=function(m){if(m){var P=getComputedStyle(m),N=P.overflow==="hidden";return N}},U=function(m){if(m){if(L(m))return!0;var P=m.scrollTop;return P<=0}},M=function(m){if(m){if(L(m))return!0;var P=m.scrollTop,N=m.scrollHeight,x=P+m.offsetHeight;return x>=N}},J=function(m){if(m){if(L(m))return!0;var P=m.scrollLeft;return P<=0}},G=function(m){if(m){if(L(m))return!0;var P=m.scrollLeft,N=m.scrollWidth,x=P+m.offsetWidth;return x>=N}},Y=function(m){var P='textarea, [contenteditable="true"]';return C(m,P)},nt=function(m){var P='input[type="range"]';return C(m,P)};i.d(n,"disablePageScroll",function(){return v}),i.d(n,"enablePageScroll",function(){return E}),i.d(n,"getScrollState",function(){return I}),i.d(n,"clearQueueScrollLocks",function(){return y}),i.d(n,"getTargetScrollBarWidth",function(){return Rt}),i.d(n,"getCurrentTargetScrollBarWidth",function(){return xt}),i.d(n,"getPageScrollBarWidth",function(){return ln}),i.d(n,"getCurrentPageScrollBarWidth",function(){return Wt}),i.d(n,"addScrollableTarget",function(){return Ft}),i.d(n,"removeScrollableTarget",function(){return ve}),i.d(n,"addScrollableSelector",function(){return un}),i.d(n,"removeScrollableSelector",function(){return Qn}),i.d(n,"addLockableTarget",function(){return Lt}),i.d(n,"addLockableSelector",function(){return ht}),i.d(n,"setFillGapMethod",function(){return $n}),i.d(n,"addFillGapTarget",function(){return Qt}),i.d(n,"removeFillGapTarget",function(){return Yn}),i.d(n,"addFillGapSelector",function(){return $t}),i.d(n,"removeFillGapSelector",function(){return Xn}),i.d(n,"refillGaps",function(){return Ve});function Ot(k){for(var m=1;m<arguments.length;m++){var P=arguments[m]!=null?arguments[m]:{},N=Object.keys(P);typeof Object.getOwnPropertySymbols=="function"&&(N=N.concat(Object.getOwnPropertySymbols(P).filter(function(x){return Object.getOwnPropertyDescriptor(P,x).enumerable}))),N.forEach(function(x){ct(k,x,P[x])})}return k}function ct(k,m,P){return m in k?Object.defineProperty(k,m,{value:P,enumerable:!0,configurable:!0,writable:!0}):k[m]=P,k}var T=["padding","margin","width","max-width","none"],p=3,g={scroll:!0,queue:0,scrollableSelectors:["[data-scroll-lock-scrollable]"],lockableSelectors:["body","[data-scroll-lock-lockable]"],fillGapSelectors:["body","[data-scroll-lock-fill-gap]","[data-scroll-lock-lockable]"],fillGapMethod:T[0],startTouchY:0,startTouchX:0},v=function(m){g.queue<=0&&(g.scroll=!1,ee(),gn()),Ft(m),g.queue++},E=function(m){g.queue>0&&g.queue--,g.queue<=0&&(g.scroll=!0,De(),Jr()),ve(m)},I=function(){return g.scroll},y=function(){g.queue=0},Rt=function(m){var P=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(l(m)){var N=m.style.overflowY;P?I()||(m.style.overflowY=m.getAttribute("data-scroll-lock-saved-overflow-y-property")):m.style.overflowY="scroll";var x=xt(m);return m.style.overflowY=N,x}else return 0},xt=function(m){if(l(m))if(m===document.body){var P=document.documentElement.clientWidth,N=window.innerWidth,x=N-P;return x}else{var Dt=m.style.borderLeftWidth,Ut=m.style.borderRightWidth;m.style.borderLeftWidth="0px",m.style.borderRightWidth="0px";var kt=m.offsetWidth-m.clientWidth;return m.style.borderLeftWidth=Dt,m.style.borderRightWidth=Ut,kt}else return 0},ln=function(){var m=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;return Rt(document.body,m)},Wt=function(){return xt(document.body)},Ft=function(m){if(m){var P=o(m);P.map(function(N){d(N,function(x){l(x)?x.setAttribute("data-scroll-lock-scrollable",""):f('"'.concat(x,'" is not a Element.'))})})}},ve=function(m){if(m){var P=o(m);P.map(function(N){d(N,function(x){l(x)?x.removeAttribute("data-scroll-lock-scrollable"):f('"'.concat(x,'" is not a Element.'))})})}},un=function(m){if(m){var P=o(m);P.map(function(N){g.scrollableSelectors.push(N)})}},Qn=function(m){if(m){var P=o(m);P.map(function(N){g.scrollableSelectors=g.scrollableSelectors.filter(function(x){return x!==N})})}},Lt=function(m){if(m){var P=o(m);P.map(function(N){d(N,function(x){l(x)?x.setAttribute("data-scroll-lock-lockable",""):f('"'.concat(x,'" is not a Element.'))})}),I()||ee()}},ht=function(m){if(m){var P=o(m);P.map(function(N){g.lockableSelectors.push(N)}),I()||ee(),$t(m)}},$n=function(m){if(m)if(T.indexOf(m)!==-1)g.fillGapMethod=m,Ve();else{var P=T.join(", ");f('"'.concat(m,`" method is not available!
Available fill gap methods: `).concat(P,"."))}},Qt=function(m){if(m){var P=o(m);P.map(function(N){d(N,function(x){l(x)?(x.setAttribute("data-scroll-lock-fill-gap",""),g.scroll||pn(x)):f('"'.concat(x,'" is not a Element.'))})})}},Yn=function(m){if(m){var P=o(m);P.map(function(N){d(N,function(x){l(x)?(x.removeAttribute("data-scroll-lock-fill-gap"),g.scroll||Ne(x)):f('"'.concat(x,'" is not a Element.'))})})}},$t=function(m){if(m){var P=o(m);P.map(function(N){g.fillGapSelectors.indexOf(N)===-1&&(g.fillGapSelectors.push(N),g.scroll||Jn(N))})}},Xn=function(m){if(m){var P=o(m);P.map(function(N){g.fillGapSelectors=g.fillGapSelectors.filter(function(x){return x!==N}),g.scroll||ke(N)})}},Ve=function(){g.scroll||gn()},ee=function(){var m=_(g.lockableSelectors);cn(m)},De=function(){var m=_(g.lockableSelectors);hn(m)},cn=function(m){var P=document.querySelectorAll(m);d(P,function(N){dn(N)})},hn=function(m){var P=document.querySelectorAll(m);d(P,function(N){fn(N)})},dn=function(m){if(l(m)&&m.getAttribute("data-scroll-lock-locked")!=="true"){var P=window.getComputedStyle(m);m.setAttribute("data-scroll-lock-saved-overflow-y-property",P.overflowY),m.setAttribute("data-scroll-lock-saved-inline-overflow-property",m.style.overflow),m.setAttribute("data-scroll-lock-saved-inline-overflow-y-property",m.style.overflowY),m.style.overflow="hidden",m.setAttribute("data-scroll-lock-locked","true")}},fn=function(m){l(m)&&m.getAttribute("data-scroll-lock-locked")==="true"&&(m.style.overflow=m.getAttribute("data-scroll-lock-saved-inline-overflow-property"),m.style.overflowY=m.getAttribute("data-scroll-lock-saved-inline-overflow-y-property"),m.removeAttribute("data-scroll-lock-saved-overflow-property"),m.removeAttribute("data-scroll-lock-saved-inline-overflow-property"),m.removeAttribute("data-scroll-lock-saved-inline-overflow-y-property"),m.removeAttribute("data-scroll-lock-locked"))},gn=function(){g.fillGapSelectors.map(function(m){Jn(m)})},Jr=function(){g.fillGapSelectors.map(function(m){ke(m)})},Jn=function(m){var P=document.querySelectorAll(m),N=g.lockableSelectors.indexOf(m)!==-1;d(P,function(x){pn(x,N)})},pn=function(m){var P=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(l(m)){var N;if(m.getAttribute("data-scroll-lock-lockable")===""||P)N=Rt(m,!0);else{var x=S(m,_(g.lockableSelectors));N=Rt(x,!0)}m.getAttribute("data-scroll-lock-filled-gap")==="true"&&Ne(m);var Dt=window.getComputedStyle(m);if(m.setAttribute("data-scroll-lock-filled-gap","true"),m.setAttribute("data-scroll-lock-current-fill-gap-method",g.fillGapMethod),g.fillGapMethod==="margin"){var Ut=parseFloat(Dt.marginRight);m.style.marginRight="".concat(Ut+N,"px")}else if(g.fillGapMethod==="width")m.style.width="calc(100% - ".concat(N,"px)");else if(g.fillGapMethod==="max-width")m.style.maxWidth="calc(100% - ".concat(N,"px)");else if(g.fillGapMethod==="padding"){var kt=parseFloat(Dt.paddingRight);m.style.paddingRight="".concat(kt+N,"px")}}},ke=function(m){var P=document.querySelectorAll(m);d(P,function(N){Ne(N)})},Ne=function(m){if(l(m)&&m.getAttribute("data-scroll-lock-filled-gap")==="true"){var P=m.getAttribute("data-scroll-lock-current-fill-gap-method");m.removeAttribute("data-scroll-lock-filled-gap"),m.removeAttribute("data-scroll-lock-current-fill-gap-method"),P==="margin"?m.style.marginRight="":P==="width"?m.style.width="":P==="max-width"?m.style.maxWidth="":P==="padding"&&(m.style.paddingRight="")}},Zr=function(m){Ve()},mn=function(m){g.scroll||(g.startTouchY=m.touches[0].clientY,g.startTouchX=m.touches[0].clientX)},yn=function(m){if(!g.scroll){var P=g.startTouchY,N=g.startTouchX,x=m.touches[0].clientY,Dt=m.touches[0].clientX;if(m.touches.length<2){var Ut=_(g.scrollableSelectors),kt={up:P<x,down:P>x,left:N<Dt,right:N>Dt},Oe={up:P+p<x,down:P-p>x,left:N+p<Dt,right:N-p>Dt},ts=function Le(st){var tr=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(st){var Yt=S(st,Ut,!1);if(nt(st))return!1;if(tr||Y(st)&&S(st,Ut)||C(st,Ut)){var ne=!1;J(st)&&G(st)?(kt.up&&U(st)||kt.down&&M(st))&&(ne=!0):U(st)&&M(st)?(kt.left&&J(st)||kt.right&&G(st))&&(ne=!0):(Oe.up&&U(st)||Oe.down&&M(st)||Oe.left&&J(st)||Oe.right&&G(st))&&(ne=!0),ne&&(Yt?Le(Yt,!0):m.cancelable&&m.preventDefault())}else Le(Yt)}else m.cancelable&&m.preventDefault()};ts(m.target)}}},Zn=function(m){g.scroll||(g.startTouchY=0,g.startTouchX=0)};typeof window<"u"&&window.addEventListener("resize",Zr),typeof document<"u"&&(document.addEventListener("touchstart",mn),document.addEventListener("touchmove",yn,{passive:!1}),document.addEventListener("touchend",Zn));var gt={hide:function(m){f(`"hide" is deprecated! Use "disablePageScroll" instead. 
 https://github.com/FL3NKEY/scroll-lock#disablepagescrollscrollabletarget`),v(m)},show:function(m){f(`"show" is deprecated! Use "enablePageScroll" instead. 
 https://github.com/FL3NKEY/scroll-lock#enablepagescrollscrollabletarget`),E(m)},toggle:function(m){f('"toggle" is deprecated! Do not use it.'),I()?v():E(m)},getState:function(){return f(`"getState" is deprecated! Use "getScrollState" instead. 
 https://github.com/FL3NKEY/scroll-lock#getscrollstate`),I()},getWidth:function(){return f(`"getWidth" is deprecated! Use "getPageScrollBarWidth" instead. 
 https://github.com/FL3NKEY/scroll-lock#getpagescrollbarwidth`),ln()},getCurrentWidth:function(){return f(`"getCurrentWidth" is deprecated! Use "getCurrentPageScrollBarWidth" instead. 
 https://github.com/FL3NKEY/scroll-lock#getcurrentpagescrollbarwidth`),Wt()},setScrollableTargets:function(m){f(`"setScrollableTargets" is deprecated! Use "addScrollableTarget" instead. 
 https://github.com/FL3NKEY/scroll-lock#addscrollabletargetscrollabletarget`),Ft(m)},setFillGapSelectors:function(m){f(`"setFillGapSelectors" is deprecated! Use "addFillGapSelector" instead. 
 https://github.com/FL3NKEY/scroll-lock#addfillgapselectorfillgapselector`),$t(m)},setFillGapTargets:function(m){f(`"setFillGapTargets" is deprecated! Use "addFillGapTarget" instead. 
 https://github.com/FL3NKEY/scroll-lock#addfillgaptargetfillgaptarget`),Qt(m)},clearQueue:function(){f(`"clearQueue" is deprecated! Use "clearQueueScrollLocks" instead. 
 https://github.com/FL3NKEY/scroll-lock#clearqueuescrolllocks`),y()}},mt=Ot({disablePageScroll:v,enablePageScroll:E,getScrollState:I,clearQueueScrollLocks:y,getTargetScrollBarWidth:Rt,getCurrentTargetScrollBarWidth:xt,getPageScrollBarWidth:ln,getCurrentPageScrollBarWidth:Wt,addScrollableSelector:un,removeScrollableSelector:Qn,addScrollableTarget:Ft,removeScrollableTarget:ve,addLockableSelector:ht,addLockableTarget:Lt,addFillGapSelector:$t,removeFillGapSelector:Xn,addFillGapTarget:Qt,removeFillGapTarget:Yn,setFillGapMethod:$n,refillGaps:Ve,_state:g},gt);n.default=mt}]).default})}(Ir)),Ir.exports}var Cr=lu();function uu(){const r=Bt(".burger-icon"),t=Bt(".sidebar"),e=Bt(".dark-background"),n=ya(".sidebar-sub-list");function i(l){if(l){At(t,"add","sidebar_open"),At(e,"remove","dark-background_hidden"),Cr.disablePageScroll(t);return}At(t,"remove","sidebar_open"),At(e,"add","dark-background_hidden"),Cr.enablePageScroll()}e.addEventListener("click",()=>{i(!1),At(r,"remove","burger-icon_open"),n.forEach(l=>{At(l,"remove","sidebar-sub-list_active")})});const o=()=>{r.style.pointerEvents="none",n.forEach(c=>{At(c,"remove","sidebar-sub-list_active")});const l=At(r,"toggle","burger-icon_open");i(l),setTimeout(()=>{r.style.pointerEvents="auto"},300)};r.addEventListener("click",o)}function cu(){const r=Bt(".header__icon-search-icon"),t=Bt(".header__search"),e=Bt(".input__field",t),n=Bt(".dark-background"),i=Bt(".header__search-close"),o=Bt(".sidebar"),l=Bt(".burger-icon");n.addEventListener("click",c),i.addEventListener("click",c);function c(){e.value="",At(n,"add","dark-background_hidden"),At(t,"remove","header__search_open"),Cr.enablePageScroll()}r.addEventListener("click",d=>{At(t,"toggle","header__search_open"),At(n,"remove","dark-background_hidden"),At(o,"remove","sidebar_open"),At(l,"remove","burger-icon_open"),e.focus(),Cr.disablePageScroll()}),window.addEventListener("resize",d=>{window.innerWidth<768&&(t.style.display="none",setTimeout(()=>{t.style.display="block"},0))})}function rg(){ou(),uu(),cu()}const hu=()=>{};var lo={};/**
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
 */const _a=function(r){const t=[];let e=0;for(let n=0;n<r.length;n++){let i=r.charCodeAt(n);i<128?t[e++]=i:i<2048?(t[e++]=i>>6|192,t[e++]=i&63|128):(i&64512)===55296&&n+1<r.length&&(r.charCodeAt(n+1)&64512)===56320?(i=65536+((i&1023)<<10)+(r.charCodeAt(++n)&1023),t[e++]=i>>18|240,t[e++]=i>>12&63|128,t[e++]=i>>6&63|128,t[e++]=i&63|128):(t[e++]=i>>12|224,t[e++]=i>>6&63|128,t[e++]=i&63|128)}return t},du=function(r){const t=[];let e=0,n=0;for(;e<r.length;){const i=r[e++];if(i<128)t[n++]=String.fromCharCode(i);else if(i>191&&i<224){const o=r[e++];t[n++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=r[e++],l=r[e++],c=r[e++],d=((i&7)<<18|(o&63)<<12|(l&63)<<6|c&63)-65536;t[n++]=String.fromCharCode(55296+(d>>10)),t[n++]=String.fromCharCode(56320+(d&1023))}else{const o=r[e++],l=r[e++];t[n++]=String.fromCharCode((i&15)<<12|(o&63)<<6|l&63)}}return t.join("")},va={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,t){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let i=0;i<r.length;i+=3){const o=r[i],l=i+1<r.length,c=l?r[i+1]:0,d=i+2<r.length,f=d?r[i+2]:0,_=o>>2,w=(o&3)<<4|c>>4;let S=(c&15)<<2|f>>6,C=f&63;d||(C=64,l||(S=64)),n.push(e[_],e[w],e[S],e[C])}return n.join("")},encodeString(r,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(r):this.encodeByteArray(_a(r),t)},decodeString(r,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(r):du(this.decodeStringToByteArray(r,t))},decodeStringToByteArray(r,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let i=0;i<r.length;){const o=e[r.charAt(i++)],c=i<r.length?e[r.charAt(i)]:0;++i;const f=i<r.length?e[r.charAt(i)]:64;++i;const w=i<r.length?e[r.charAt(i)]:64;if(++i,o==null||c==null||f==null||w==null)throw new fu;const S=o<<2|c>>4;if(n.push(S),f!==64){const C=c<<4&240|f>>2;if(n.push(C),w!==64){const L=f<<6&192|w;n.push(L)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class fu extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const gu=function(r){const t=_a(r);return va.encodeByteArray(t,!0)},Pr=function(r){return gu(r).replace(/\./g,"")},pu=function(r){try{return va.decodeString(r,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function mu(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const yu=()=>mu().__FIREBASE_DEFAULTS__,_u=()=>{if(typeof process>"u"||typeof lo>"u")return;const r=lo.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},vu=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=r&&pu(r[1]);return t&&JSON.parse(t)},Qs=()=>{try{return hu()||yu()||_u()||vu()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},Eu=r=>{var t,e;return(e=(t=Qs())==null?void 0:t.emulatorHosts)==null?void 0:e[r]},Tu=r=>{const t=Eu(r);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const n=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),n]:[t.substring(0,e),n]},Ea=()=>{var r;return(r=Qs())==null?void 0:r.config};/**
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
 */class Iu{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,n))}}}/**
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
 */function $s(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Au(r){return(await fetch(r,{credentials:"include"})).ok}/**
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
 */function wu(r,t){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},n=t||"demo-project",i=r.iat||0,o=r.sub||r.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const l={iss:`https://securetoken.google.com/${n}`,aud:n,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}},...r};return[Pr(JSON.stringify(e)),Pr(JSON.stringify(l)),""].join(".")}const kn={};function Su(){const r={prod:[],emulator:[]};for(const t of Object.keys(kn))kn[t]?r.emulator.push(t):r.prod.push(t);return r}function Ru(r){let t=document.getElementById(r),e=!1;return t||(t=document.createElement("div"),t.setAttribute("id",r),e=!0),{created:e,element:t}}let uo=!1;function bu(r,t){if(typeof window>"u"||typeof document>"u"||!$s(window.location.host)||kn[r]===t||kn[r]||uo)return;kn[r]=t;function e(S){return`__firebase__banner__${S}`}const n="__firebase__banner",o=Su().prod.length>0;function l(){const S=document.getElementById(n);S&&S.remove()}function c(S){S.style.display="flex",S.style.background="#7faaf0",S.style.position="fixed",S.style.bottom="5px",S.style.left="5px",S.style.padding=".5em",S.style.borderRadius="5px",S.style.alignItems="center"}function d(S,C){S.setAttribute("width","24"),S.setAttribute("id",C),S.setAttribute("height","24"),S.setAttribute("viewBox","0 0 24 24"),S.setAttribute("fill","none"),S.style.marginLeft="-6px"}function f(){const S=document.createElement("span");return S.style.cursor="pointer",S.style.marginLeft="16px",S.style.fontSize="24px",S.innerHTML=" &times;",S.onclick=()=>{uo=!0,l()},S}function _(S,C){S.setAttribute("id",C),S.innerText="Learn more",S.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",S.setAttribute("target","__blank"),S.style.paddingLeft="5px",S.style.textDecoration="underline"}function w(){const S=Ru(n),C=e("text"),L=document.getElementById(C)||document.createElement("span"),U=e("learnmore"),M=document.getElementById(U)||document.createElement("a"),J=e("preprendIcon"),G=document.getElementById(J)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(S.created){const Y=S.element;c(Y),_(M,U);const nt=f();d(G,J),Y.append(G,L,M,nt),document.body.appendChild(Y)}o?(L.innerText="Preview backend disconnected.",G.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,L.innerText="Preview backend running in this workspace."),L.setAttribute("id",C)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",w):w()}/**
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
 */function Cu(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Pu(){var t;const r=(t=Qs())==null?void 0:t.forceEnvironment;if(r==="node")return!0;if(r==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Vu(){return!Pu()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Du(){try{return typeof indexedDB=="object"}catch{return!1}}function ku(){return new Promise((r,t)=>{try{let e=!0;const n="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(n);i.onsuccess=()=>{i.result.close(),e||self.indexedDB.deleteDatabase(n),r(!0)},i.onupgradeneeded=()=>{e=!1},i.onerror=()=>{var o;t(((o=i.error)==null?void 0:o.message)||"")}}catch(e){t(e)}})}/**
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
 */const Nu="FirebaseError";class rn extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=Nu,Object.setPrototypeOf(this,rn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ta.prototype.create)}}class Ta{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},i=`${this.service}/${t}`,o=this.errors[t],l=o?Ou(o,n):"Error",c=`${this.serviceName}: ${l} (${i}).`;return new rn(i,c,n)}}function Ou(r,t){return r.replace(Lu,(e,n)=>{const i=t[n];return i!=null?String(i):`<${n}?>`})}const Lu=/\{\$([^}]+)}/g;function Vr(r,t){if(r===t)return!0;const e=Object.keys(r),n=Object.keys(t);for(const i of e){if(!n.includes(i))return!1;const o=r[i],l=t[i];if(co(o)&&co(l)){if(!Vr(o,l))return!1}else if(o!==l)return!1}for(const i of n)if(!e.includes(i))return!1;return!0}function co(r){return r!==null&&typeof r=="object"}/**
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
 */function Mu(r){return r&&r._delegate?r._delegate:r}class xn{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const we="[DEFAULT]";/**
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
 */class xu{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const n=new Iu;if(this.instancesDeferred.set(e,n),this.isInitialized(e)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:e});i&&n.resolve(i)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){const e=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),n=(t==null?void 0:t.optional)??!1;if(this.isInitialized(e)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:e})}catch(i){if(n)return null;throw i}else{if(n)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Uu(t))try{this.getOrInitializeService({instanceIdentifier:we})}catch{}for(const[e,n]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:i});n.resolve(o)}catch{}}}}clearInstance(t=we){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=we){return this.instances.has(t)}getOptions(t=we){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[o,l]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(o);n===c&&l.resolve(i)}return i}onInit(t,e){const n=this.normalizeInstanceIdentifier(e),i=this.onInitCallbacks.get(n)??new Set;i.add(t),this.onInitCallbacks.set(n,i);const o=this.instances.get(n);return o&&t(o,n),()=>{i.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const i of n)try{i(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:Fu(t),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch{}return n||null}normalizeInstanceIdentifier(t=we){return this.component?this.component.multipleInstances?t:we:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Fu(r){return r===we?void 0:r}function Uu(r){return r.instantiationMode==="EAGER"}/**
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
 */class Bu{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new xu(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var K;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(K||(K={}));const ju={debug:K.DEBUG,verbose:K.VERBOSE,info:K.INFO,warn:K.WARN,error:K.ERROR,silent:K.SILENT},qu=K.INFO,Gu={[K.DEBUG]:"log",[K.VERBOSE]:"log",[K.INFO]:"info",[K.WARN]:"warn",[K.ERROR]:"error"},zu=(r,t,...e)=>{if(t<r.logLevel)return;const n=new Date().toISOString(),i=Gu[t];if(i)console[i](`[${n}]  ${r.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Ia{constructor(t){this.name=t,this._logLevel=qu,this._logHandler=zu,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in K))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?ju[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,K.DEBUG,...t),this._logHandler(this,K.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,K.VERBOSE,...t),this._logHandler(this,K.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,K.INFO,...t),this._logHandler(this,K.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,K.WARN,...t),this._logHandler(this,K.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,K.ERROR,...t),this._logHandler(this,K.ERROR,...t)}}const Hu=(r,t)=>t.some(e=>r instanceof e);let ho,fo;function Ku(){return ho||(ho=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Wu(){return fo||(fo=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Aa=new WeakMap,ws=new WeakMap,wa=new WeakMap,gs=new WeakMap,Ys=new WeakMap;function Qu(r){const t=new Promise((e,n)=>{const i=()=>{r.removeEventListener("success",o),r.removeEventListener("error",l)},o=()=>{e(le(r.result)),i()},l=()=>{n(r.error),i()};r.addEventListener("success",o),r.addEventListener("error",l)});return t.then(e=>{e instanceof IDBCursor&&Aa.set(e,r)}).catch(()=>{}),Ys.set(t,r),t}function $u(r){if(ws.has(r))return;const t=new Promise((e,n)=>{const i=()=>{r.removeEventListener("complete",o),r.removeEventListener("error",l),r.removeEventListener("abort",l)},o=()=>{e(),i()},l=()=>{n(r.error||new DOMException("AbortError","AbortError")),i()};r.addEventListener("complete",o),r.addEventListener("error",l),r.addEventListener("abort",l)});ws.set(r,t)}let Ss={get(r,t,e){if(r instanceof IDBTransaction){if(t==="done")return ws.get(r);if(t==="objectStoreNames")return r.objectStoreNames||wa.get(r);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return le(r[t])},set(r,t,e){return r[t]=e,!0},has(r,t){return r instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in r}};function Yu(r){Ss=r(Ss)}function Xu(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const n=r.call(ps(this),t,...e);return wa.set(n,t.sort?t.sort():[t]),le(n)}:Wu().includes(r)?function(...t){return r.apply(ps(this),t),le(Aa.get(this))}:function(...t){return le(r.apply(ps(this),t))}}function Ju(r){return typeof r=="function"?Xu(r):(r instanceof IDBTransaction&&$u(r),Hu(r,Ku())?new Proxy(r,Ss):r)}function le(r){if(r instanceof IDBRequest)return Qu(r);if(gs.has(r))return gs.get(r);const t=Ju(r);return t!==r&&(gs.set(r,t),Ys.set(t,r)),t}const ps=r=>Ys.get(r);function Zu(r,t,{blocked:e,upgrade:n,blocking:i,terminated:o}={}){const l=indexedDB.open(r,t),c=le(l);return n&&l.addEventListener("upgradeneeded",d=>{n(le(l.result),d.oldVersion,d.newVersion,le(l.transaction),d)}),e&&l.addEventListener("blocked",d=>e(d.oldVersion,d.newVersion,d)),c.then(d=>{o&&d.addEventListener("close",()=>o()),i&&d.addEventListener("versionchange",f=>i(f.oldVersion,f.newVersion,f))}).catch(()=>{}),c}const tc=["get","getKey","getAll","getAllKeys","count"],ec=["put","add","delete","clear"],ms=new Map;function go(r,t){if(!(r instanceof IDBDatabase&&!(t in r)&&typeof t=="string"))return;if(ms.get(t))return ms.get(t);const e=t.replace(/FromIndex$/,""),n=t!==e,i=ec.includes(e);if(!(e in(n?IDBIndex:IDBObjectStore).prototype)||!(i||tc.includes(e)))return;const o=async function(l,...c){const d=this.transaction(l,i?"readwrite":"readonly");let f=d.store;return n&&(f=f.index(c.shift())),(await Promise.all([f[e](...c),i&&d.done]))[0]};return ms.set(t,o),o}Yu(r=>({...r,get:(t,e,n)=>go(t,e)||r.get(t,e,n),has:(t,e)=>!!go(t,e)||r.has(t,e)}));/**
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
 */class nc{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(rc(e)){const n=e.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(e=>e).join(" ")}}function rc(r){const t=r.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Rs="@firebase/app",po="0.14.1";/**
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
 */const Zt=new Ia("@firebase/app"),sc="@firebase/app-compat",ic="@firebase/analytics-compat",oc="@firebase/analytics",ac="@firebase/app-check-compat",lc="@firebase/app-check",uc="@firebase/auth",cc="@firebase/auth-compat",hc="@firebase/database",dc="@firebase/data-connect",fc="@firebase/database-compat",gc="@firebase/functions",pc="@firebase/functions-compat",mc="@firebase/installations",yc="@firebase/installations-compat",_c="@firebase/messaging",vc="@firebase/messaging-compat",Ec="@firebase/performance",Tc="@firebase/performance-compat",Ic="@firebase/remote-config",Ac="@firebase/remote-config-compat",wc="@firebase/storage",Sc="@firebase/storage-compat",Rc="@firebase/firestore",bc="@firebase/ai",Cc="@firebase/firestore-compat",Pc="firebase",Vc="12.1.0";/**
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
 */const bs="[DEFAULT]",Dc={[Rs]:"fire-core",[sc]:"fire-core-compat",[oc]:"fire-analytics",[ic]:"fire-analytics-compat",[lc]:"fire-app-check",[ac]:"fire-app-check-compat",[uc]:"fire-auth",[cc]:"fire-auth-compat",[hc]:"fire-rtdb",[dc]:"fire-data-connect",[fc]:"fire-rtdb-compat",[gc]:"fire-fn",[pc]:"fire-fn-compat",[mc]:"fire-iid",[yc]:"fire-iid-compat",[_c]:"fire-fcm",[vc]:"fire-fcm-compat",[Ec]:"fire-perf",[Tc]:"fire-perf-compat",[Ic]:"fire-rc",[Ac]:"fire-rc-compat",[wc]:"fire-gcs",[Sc]:"fire-gcs-compat",[Rc]:"fire-fst",[Cc]:"fire-fst-compat",[bc]:"fire-vertex","fire-js":"fire-js",[Pc]:"fire-js-all"};/**
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
 */const Dr=new Map,kc=new Map,Cs=new Map;function mo(r,t){try{r.container.addComponent(t)}catch(e){Zt.debug(`Component ${t.name} failed to register with FirebaseApp ${r.name}`,e)}}function kr(r){const t=r.name;if(Cs.has(t))return Zt.debug(`There were multiple attempts to register component ${t}.`),!1;Cs.set(t,r);for(const e of Dr.values())mo(e,r);for(const e of kc.values())mo(e,r);return!0}function Nc(r,t){const e=r.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),r.container.getProvider(t)}function Oc(r){return r==null?!1:r.settings!==void 0}/**
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
 */const Lc={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ue=new Ta("app","Firebase",Lc);/**
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
 */class Mc{constructor(t,e,n){this._isDeleted=!1,this._options={...t},this._config={...e},this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new xn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw ue.create("app-deleted",{appName:this._name})}}/**
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
 */const xc=Vc;function Sa(r,t={}){let e=r;typeof t!="object"&&(t={name:t});const n={name:bs,automaticDataCollectionEnabled:!0,...t},i=n.name;if(typeof i!="string"||!i)throw ue.create("bad-app-name",{appName:String(i)});if(e||(e=Ea()),!e)throw ue.create("no-options");const o=Dr.get(i);if(o){if(Vr(e,o.options)&&Vr(n,o.config))return o;throw ue.create("duplicate-app",{appName:i})}const l=new Bu(i);for(const d of Cs.values())l.addComponent(d);const c=new Mc(e,n,l);return Dr.set(i,c),c}function Fc(r=bs){const t=Dr.get(r);if(!t&&r===bs&&Ea())return Sa();if(!t)throw ue.create("no-app",{appName:r});return t}function ze(r,t,e){let n=Dc[r]??r;e&&(n+=`-${e}`);const i=n.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const l=[`Unable to register library "${n}" with version "${t}":`];i&&l.push(`library name "${n}" contains illegal characters (whitespace or "/")`),i&&o&&l.push("and"),o&&l.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Zt.warn(l.join(" "));return}kr(new xn(`${n}-version`,()=>({library:n,version:t}),"VERSION"))}/**
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
 */const Uc="firebase-heartbeat-database",Bc=1,Fn="firebase-heartbeat-store";let ys=null;function Ra(){return ys||(ys=Zu(Uc,Bc,{upgrade:(r,t)=>{switch(t){case 0:try{r.createObjectStore(Fn)}catch(e){console.warn(e)}}}}).catch(r=>{throw ue.create("idb-open",{originalErrorMessage:r.message})})),ys}async function jc(r){try{const e=(await Ra()).transaction(Fn),n=await e.objectStore(Fn).get(ba(r));return await e.done,n}catch(t){if(t instanceof rn)Zt.warn(t.message);else{const e=ue.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Zt.warn(e.message)}}}async function yo(r,t){try{const n=(await Ra()).transaction(Fn,"readwrite");await n.objectStore(Fn).put(t,ba(r)),await n.done}catch(e){if(e instanceof rn)Zt.warn(e.message);else{const n=ue.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});Zt.warn(n.message)}}}function ba(r){return`${r.name}!${r.options.appId}`}/**
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
 */const qc=1024,Gc=30;class zc{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Kc(e),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){var t,e;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=_o();if(((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(l=>l.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats.length>Gc){const l=Wc(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(l,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(n){Zt.warn(n)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=_o(),{heartbeatsToSend:n,unsentEntries:i}=Hc(this._heartbeatsCache.heartbeats),o=Pr(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return Zt.warn(e),""}}}function _o(){return new Date().toISOString().substring(0,10)}function Hc(r,t=qc){const e=[];let n=r.slice();for(const i of r){const o=e.find(l=>l.agent===i.agent);if(o){if(o.dates.push(i.date),vo(e)>t){o.dates.pop();break}}else if(e.push({agent:i.agent,dates:[i.date]}),vo(e)>t){e.pop();break}n=n.slice(1)}return{heartbeatsToSend:e,unsentEntries:n}}class Kc{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Du()?ku().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await jc(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const n=await this.read();return yo(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const n=await this.read();return yo(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}else return}}function vo(r){return Pr(JSON.stringify({version:2,heartbeats:r})).length}function Wc(r){if(r.length===0)return-1;let t=0,e=r[0].date;for(let n=1;n<r.length;n++)r[n].date<e&&(e=r[n].date,t=n);return t}/**
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
 */function Qc(r){kr(new xn("platform-logger",t=>new nc(t),"PRIVATE")),kr(new xn("heartbeat",t=>new zc(t),"PRIVATE")),ze(Rs,po,r),ze(Rs,po,"esm2020"),ze("fire-js","")}Qc("");var Eo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ce,Ca;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(T,p){function g(){}g.prototype=p.prototype,T.D=p.prototype,T.prototype=new g,T.prototype.constructor=T,T.C=function(v,E,I){for(var y=Array(arguments.length-2),Rt=2;Rt<arguments.length;Rt++)y[Rt-2]=arguments[Rt];return p.prototype[E].apply(v,y)}}function e(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(n,e),n.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(T,p,g){g||(g=0);var v=Array(16);if(typeof p=="string")for(var E=0;16>E;++E)v[E]=p.charCodeAt(g++)|p.charCodeAt(g++)<<8|p.charCodeAt(g++)<<16|p.charCodeAt(g++)<<24;else for(E=0;16>E;++E)v[E]=p[g++]|p[g++]<<8|p[g++]<<16|p[g++]<<24;p=T.g[0],g=T.g[1],E=T.g[2];var I=T.g[3],y=p+(I^g&(E^I))+v[0]+3614090360&4294967295;p=g+(y<<7&4294967295|y>>>25),y=I+(E^p&(g^E))+v[1]+3905402710&4294967295,I=p+(y<<12&4294967295|y>>>20),y=E+(g^I&(p^g))+v[2]+606105819&4294967295,E=I+(y<<17&4294967295|y>>>15),y=g+(p^E&(I^p))+v[3]+3250441966&4294967295,g=E+(y<<22&4294967295|y>>>10),y=p+(I^g&(E^I))+v[4]+4118548399&4294967295,p=g+(y<<7&4294967295|y>>>25),y=I+(E^p&(g^E))+v[5]+1200080426&4294967295,I=p+(y<<12&4294967295|y>>>20),y=E+(g^I&(p^g))+v[6]+2821735955&4294967295,E=I+(y<<17&4294967295|y>>>15),y=g+(p^E&(I^p))+v[7]+4249261313&4294967295,g=E+(y<<22&4294967295|y>>>10),y=p+(I^g&(E^I))+v[8]+1770035416&4294967295,p=g+(y<<7&4294967295|y>>>25),y=I+(E^p&(g^E))+v[9]+2336552879&4294967295,I=p+(y<<12&4294967295|y>>>20),y=E+(g^I&(p^g))+v[10]+4294925233&4294967295,E=I+(y<<17&4294967295|y>>>15),y=g+(p^E&(I^p))+v[11]+2304563134&4294967295,g=E+(y<<22&4294967295|y>>>10),y=p+(I^g&(E^I))+v[12]+1804603682&4294967295,p=g+(y<<7&4294967295|y>>>25),y=I+(E^p&(g^E))+v[13]+4254626195&4294967295,I=p+(y<<12&4294967295|y>>>20),y=E+(g^I&(p^g))+v[14]+2792965006&4294967295,E=I+(y<<17&4294967295|y>>>15),y=g+(p^E&(I^p))+v[15]+1236535329&4294967295,g=E+(y<<22&4294967295|y>>>10),y=p+(E^I&(g^E))+v[1]+4129170786&4294967295,p=g+(y<<5&4294967295|y>>>27),y=I+(g^E&(p^g))+v[6]+3225465664&4294967295,I=p+(y<<9&4294967295|y>>>23),y=E+(p^g&(I^p))+v[11]+643717713&4294967295,E=I+(y<<14&4294967295|y>>>18),y=g+(I^p&(E^I))+v[0]+3921069994&4294967295,g=E+(y<<20&4294967295|y>>>12),y=p+(E^I&(g^E))+v[5]+3593408605&4294967295,p=g+(y<<5&4294967295|y>>>27),y=I+(g^E&(p^g))+v[10]+38016083&4294967295,I=p+(y<<9&4294967295|y>>>23),y=E+(p^g&(I^p))+v[15]+3634488961&4294967295,E=I+(y<<14&4294967295|y>>>18),y=g+(I^p&(E^I))+v[4]+3889429448&4294967295,g=E+(y<<20&4294967295|y>>>12),y=p+(E^I&(g^E))+v[9]+568446438&4294967295,p=g+(y<<5&4294967295|y>>>27),y=I+(g^E&(p^g))+v[14]+3275163606&4294967295,I=p+(y<<9&4294967295|y>>>23),y=E+(p^g&(I^p))+v[3]+4107603335&4294967295,E=I+(y<<14&4294967295|y>>>18),y=g+(I^p&(E^I))+v[8]+1163531501&4294967295,g=E+(y<<20&4294967295|y>>>12),y=p+(E^I&(g^E))+v[13]+2850285829&4294967295,p=g+(y<<5&4294967295|y>>>27),y=I+(g^E&(p^g))+v[2]+4243563512&4294967295,I=p+(y<<9&4294967295|y>>>23),y=E+(p^g&(I^p))+v[7]+1735328473&4294967295,E=I+(y<<14&4294967295|y>>>18),y=g+(I^p&(E^I))+v[12]+2368359562&4294967295,g=E+(y<<20&4294967295|y>>>12),y=p+(g^E^I)+v[5]+4294588738&4294967295,p=g+(y<<4&4294967295|y>>>28),y=I+(p^g^E)+v[8]+2272392833&4294967295,I=p+(y<<11&4294967295|y>>>21),y=E+(I^p^g)+v[11]+1839030562&4294967295,E=I+(y<<16&4294967295|y>>>16),y=g+(E^I^p)+v[14]+4259657740&4294967295,g=E+(y<<23&4294967295|y>>>9),y=p+(g^E^I)+v[1]+2763975236&4294967295,p=g+(y<<4&4294967295|y>>>28),y=I+(p^g^E)+v[4]+1272893353&4294967295,I=p+(y<<11&4294967295|y>>>21),y=E+(I^p^g)+v[7]+4139469664&4294967295,E=I+(y<<16&4294967295|y>>>16),y=g+(E^I^p)+v[10]+3200236656&4294967295,g=E+(y<<23&4294967295|y>>>9),y=p+(g^E^I)+v[13]+681279174&4294967295,p=g+(y<<4&4294967295|y>>>28),y=I+(p^g^E)+v[0]+3936430074&4294967295,I=p+(y<<11&4294967295|y>>>21),y=E+(I^p^g)+v[3]+3572445317&4294967295,E=I+(y<<16&4294967295|y>>>16),y=g+(E^I^p)+v[6]+76029189&4294967295,g=E+(y<<23&4294967295|y>>>9),y=p+(g^E^I)+v[9]+3654602809&4294967295,p=g+(y<<4&4294967295|y>>>28),y=I+(p^g^E)+v[12]+3873151461&4294967295,I=p+(y<<11&4294967295|y>>>21),y=E+(I^p^g)+v[15]+530742520&4294967295,E=I+(y<<16&4294967295|y>>>16),y=g+(E^I^p)+v[2]+3299628645&4294967295,g=E+(y<<23&4294967295|y>>>9),y=p+(E^(g|~I))+v[0]+4096336452&4294967295,p=g+(y<<6&4294967295|y>>>26),y=I+(g^(p|~E))+v[7]+1126891415&4294967295,I=p+(y<<10&4294967295|y>>>22),y=E+(p^(I|~g))+v[14]+2878612391&4294967295,E=I+(y<<15&4294967295|y>>>17),y=g+(I^(E|~p))+v[5]+4237533241&4294967295,g=E+(y<<21&4294967295|y>>>11),y=p+(E^(g|~I))+v[12]+1700485571&4294967295,p=g+(y<<6&4294967295|y>>>26),y=I+(g^(p|~E))+v[3]+2399980690&4294967295,I=p+(y<<10&4294967295|y>>>22),y=E+(p^(I|~g))+v[10]+4293915773&4294967295,E=I+(y<<15&4294967295|y>>>17),y=g+(I^(E|~p))+v[1]+2240044497&4294967295,g=E+(y<<21&4294967295|y>>>11),y=p+(E^(g|~I))+v[8]+1873313359&4294967295,p=g+(y<<6&4294967295|y>>>26),y=I+(g^(p|~E))+v[15]+4264355552&4294967295,I=p+(y<<10&4294967295|y>>>22),y=E+(p^(I|~g))+v[6]+2734768916&4294967295,E=I+(y<<15&4294967295|y>>>17),y=g+(I^(E|~p))+v[13]+1309151649&4294967295,g=E+(y<<21&4294967295|y>>>11),y=p+(E^(g|~I))+v[4]+4149444226&4294967295,p=g+(y<<6&4294967295|y>>>26),y=I+(g^(p|~E))+v[11]+3174756917&4294967295,I=p+(y<<10&4294967295|y>>>22),y=E+(p^(I|~g))+v[2]+718787259&4294967295,E=I+(y<<15&4294967295|y>>>17),y=g+(I^(E|~p))+v[9]+3951481745&4294967295,T.g[0]=T.g[0]+p&4294967295,T.g[1]=T.g[1]+(E+(y<<21&4294967295|y>>>11))&4294967295,T.g[2]=T.g[2]+E&4294967295,T.g[3]=T.g[3]+I&4294967295}n.prototype.u=function(T,p){p===void 0&&(p=T.length);for(var g=p-this.blockSize,v=this.B,E=this.h,I=0;I<p;){if(E==0)for(;I<=g;)i(this,T,I),I+=this.blockSize;if(typeof T=="string"){for(;I<p;)if(v[E++]=T.charCodeAt(I++),E==this.blockSize){i(this,v),E=0;break}}else for(;I<p;)if(v[E++]=T[I++],E==this.blockSize){i(this,v),E=0;break}}this.h=E,this.o+=p},n.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var p=1;p<T.length-8;++p)T[p]=0;var g=8*this.o;for(p=T.length-8;p<T.length;++p)T[p]=g&255,g/=256;for(this.u(T),T=Array(16),p=g=0;4>p;++p)for(var v=0;32>v;v+=8)T[g++]=this.g[p]>>>v&255;return T};function o(T,p){var g=c;return Object.prototype.hasOwnProperty.call(g,T)?g[T]:g[T]=p(T)}function l(T,p){this.h=p;for(var g=[],v=!0,E=T.length-1;0<=E;E--){var I=T[E]|0;v&&I==p||(g[E]=I,v=!1)}this.g=g}var c={};function d(T){return-128<=T&&128>T?o(T,function(p){return new l([p|0],0>p?-1:0)}):new l([T|0],0>T?-1:0)}function f(T){if(isNaN(T)||!isFinite(T))return w;if(0>T)return M(f(-T));for(var p=[],g=1,v=0;T>=g;v++)p[v]=T/g|0,g*=4294967296;return new l(p,0)}function _(T,p){if(T.length==0)throw Error("number format error: empty string");if(p=p||10,2>p||36<p)throw Error("radix out of range: "+p);if(T.charAt(0)=="-")return M(_(T.substring(1),p));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var g=f(Math.pow(p,8)),v=w,E=0;E<T.length;E+=8){var I=Math.min(8,T.length-E),y=parseInt(T.substring(E,E+I),p);8>I?(I=f(Math.pow(p,I)),v=v.j(I).add(f(y))):(v=v.j(g),v=v.add(f(y)))}return v}var w=d(0),S=d(1),C=d(16777216);r=l.prototype,r.m=function(){if(U(this))return-M(this).m();for(var T=0,p=1,g=0;g<this.g.length;g++){var v=this.i(g);T+=(0<=v?v:4294967296+v)*p,p*=4294967296}return T},r.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(L(this))return"0";if(U(this))return"-"+M(this).toString(T);for(var p=f(Math.pow(T,6)),g=this,v="";;){var E=nt(g,p).g;g=J(g,E.j(p));var I=((0<g.g.length?g.g[0]:g.h)>>>0).toString(T);if(g=E,L(g))return I+v;for(;6>I.length;)I="0"+I;v=I+v}},r.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function L(T){if(T.h!=0)return!1;for(var p=0;p<T.g.length;p++)if(T.g[p]!=0)return!1;return!0}function U(T){return T.h==-1}r.l=function(T){return T=J(this,T),U(T)?-1:L(T)?0:1};function M(T){for(var p=T.g.length,g=[],v=0;v<p;v++)g[v]=~T.g[v];return new l(g,~T.h).add(S)}r.abs=function(){return U(this)?M(this):this},r.add=function(T){for(var p=Math.max(this.g.length,T.g.length),g=[],v=0,E=0;E<=p;E++){var I=v+(this.i(E)&65535)+(T.i(E)&65535),y=(I>>>16)+(this.i(E)>>>16)+(T.i(E)>>>16);v=y>>>16,I&=65535,y&=65535,g[E]=y<<16|I}return new l(g,g[g.length-1]&-2147483648?-1:0)};function J(T,p){return T.add(M(p))}r.j=function(T){if(L(this)||L(T))return w;if(U(this))return U(T)?M(this).j(M(T)):M(M(this).j(T));if(U(T))return M(this.j(M(T)));if(0>this.l(C)&&0>T.l(C))return f(this.m()*T.m());for(var p=this.g.length+T.g.length,g=[],v=0;v<2*p;v++)g[v]=0;for(v=0;v<this.g.length;v++)for(var E=0;E<T.g.length;E++){var I=this.i(v)>>>16,y=this.i(v)&65535,Rt=T.i(E)>>>16,xt=T.i(E)&65535;g[2*v+2*E]+=y*xt,G(g,2*v+2*E),g[2*v+2*E+1]+=I*xt,G(g,2*v+2*E+1),g[2*v+2*E+1]+=y*Rt,G(g,2*v+2*E+1),g[2*v+2*E+2]+=I*Rt,G(g,2*v+2*E+2)}for(v=0;v<p;v++)g[v]=g[2*v+1]<<16|g[2*v];for(v=p;v<2*p;v++)g[v]=0;return new l(g,0)};function G(T,p){for(;(T[p]&65535)!=T[p];)T[p+1]+=T[p]>>>16,T[p]&=65535,p++}function Y(T,p){this.g=T,this.h=p}function nt(T,p){if(L(p))throw Error("division by zero");if(L(T))return new Y(w,w);if(U(T))return p=nt(M(T),p),new Y(M(p.g),M(p.h));if(U(p))return p=nt(T,M(p)),new Y(M(p.g),p.h);if(30<T.g.length){if(U(T)||U(p))throw Error("slowDivide_ only works with positive integers.");for(var g=S,v=p;0>=v.l(T);)g=Ot(g),v=Ot(v);var E=ct(g,1),I=ct(v,1);for(v=ct(v,2),g=ct(g,2);!L(v);){var y=I.add(v);0>=y.l(T)&&(E=E.add(g),I=y),v=ct(v,1),g=ct(g,1)}return p=J(T,E.j(p)),new Y(E,p)}for(E=w;0<=T.l(p);){for(g=Math.max(1,Math.floor(T.m()/p.m())),v=Math.ceil(Math.log(g)/Math.LN2),v=48>=v?1:Math.pow(2,v-48),I=f(g),y=I.j(p);U(y)||0<y.l(T);)g-=v,I=f(g),y=I.j(p);L(I)&&(I=S),E=E.add(I),T=J(T,y)}return new Y(E,T)}r.A=function(T){return nt(this,T).h},r.and=function(T){for(var p=Math.max(this.g.length,T.g.length),g=[],v=0;v<p;v++)g[v]=this.i(v)&T.i(v);return new l(g,this.h&T.h)},r.or=function(T){for(var p=Math.max(this.g.length,T.g.length),g=[],v=0;v<p;v++)g[v]=this.i(v)|T.i(v);return new l(g,this.h|T.h)},r.xor=function(T){for(var p=Math.max(this.g.length,T.g.length),g=[],v=0;v<p;v++)g[v]=this.i(v)^T.i(v);return new l(g,this.h^T.h)};function Ot(T){for(var p=T.g.length+1,g=[],v=0;v<p;v++)g[v]=T.i(v)<<1|T.i(v-1)>>>31;return new l(g,T.h)}function ct(T,p){var g=p>>5;p%=32;for(var v=T.g.length-g,E=[],I=0;I<v;I++)E[I]=0<p?T.i(I+g)>>>p|T.i(I+g+1)<<32-p:T.i(I+g);return new l(E,T.h)}n.prototype.digest=n.prototype.v,n.prototype.reset=n.prototype.s,n.prototype.update=n.prototype.u,Ca=n,l.prototype.add=l.prototype.add,l.prototype.multiply=l.prototype.j,l.prototype.modulo=l.prototype.A,l.prototype.compare=l.prototype.l,l.prototype.toNumber=l.prototype.m,l.prototype.toString=l.prototype.toString,l.prototype.getBits=l.prototype.i,l.fromNumber=f,l.fromString=_,ce=l}).apply(typeof Eo<"u"?Eo:typeof self<"u"?self:typeof window<"u"?window:{});var mr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Pa,Pn,Va,Ar,Ps,Da,ka,Na;(function(){var r,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(s,a,u){return s==Array.prototype||s==Object.prototype||(s[a]=u.value),s};function e(s){s=[typeof globalThis=="object"&&globalThis,s,typeof window=="object"&&window,typeof self=="object"&&self,typeof mr=="object"&&mr];for(var a=0;a<s.length;++a){var u=s[a];if(u&&u.Math==Math)return u}throw Error("Cannot find global object")}var n=e(this);function i(s,a){if(a)t:{var u=n;s=s.split(".");for(var h=0;h<s.length-1;h++){var A=s[h];if(!(A in u))break t;u=u[A]}s=s[s.length-1],h=u[s],a=a(h),a!=h&&a!=null&&t(u,s,{configurable:!0,writable:!0,value:a})}}function o(s,a){s instanceof String&&(s+="");var u=0,h=!1,A={next:function(){if(!h&&u<s.length){var R=u++;return{value:a(R,s[R]),done:!1}}return h=!0,{done:!0,value:void 0}}};return A[Symbol.iterator]=function(){return A},A}i("Array.prototype.values",function(s){return s||function(){return o(this,function(a,u){return u})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var l=l||{},c=this||self;function d(s){var a=typeof s;return a=a!="object"?a:s?Array.isArray(s)?"array":a:"null",a=="array"||a=="object"&&typeof s.length=="number"}function f(s){var a=typeof s;return a=="object"&&s!=null||a=="function"}function _(s,a,u){return s.call.apply(s.bind,arguments)}function w(s,a,u){if(!s)throw Error();if(2<arguments.length){var h=Array.prototype.slice.call(arguments,2);return function(){var A=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(A,h),s.apply(a,A)}}return function(){return s.apply(a,arguments)}}function S(s,a,u){return S=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?_:w,S.apply(null,arguments)}function C(s,a){var u=Array.prototype.slice.call(arguments,1);return function(){var h=u.slice();return h.push.apply(h,arguments),s.apply(this,h)}}function L(s,a){function u(){}u.prototype=a.prototype,s.aa=a.prototype,s.prototype=new u,s.prototype.constructor=s,s.Qb=function(h,A,R){for(var D=Array(arguments.length-2),X=2;X<arguments.length;X++)D[X-2]=arguments[X];return a.prototype[A].apply(h,D)}}function U(s){const a=s.length;if(0<a){const u=Array(a);for(let h=0;h<a;h++)u[h]=s[h];return u}return[]}function M(s,a){for(let u=1;u<arguments.length;u++){const h=arguments[u];if(d(h)){const A=s.length||0,R=h.length||0;s.length=A+R;for(let D=0;D<R;D++)s[A+D]=h[D]}else s.push(h)}}class J{constructor(a,u){this.i=a,this.j=u,this.h=0,this.g=null}get(){let a;return 0<this.h?(this.h--,a=this.g,this.g=a.next,a.next=null):a=this.i(),a}}function G(s){return/^[\s\xa0]*$/.test(s)}function Y(){var s=c.navigator;return s&&(s=s.userAgent)?s:""}function nt(s){return nt[" "](s),s}nt[" "]=function(){};var Ot=Y().indexOf("Gecko")!=-1&&!(Y().toLowerCase().indexOf("webkit")!=-1&&Y().indexOf("Edge")==-1)&&!(Y().indexOf("Trident")!=-1||Y().indexOf("MSIE")!=-1)&&Y().indexOf("Edge")==-1;function ct(s,a,u){for(const h in s)a.call(u,s[h],h,s)}function T(s,a){for(const u in s)a.call(void 0,s[u],u,s)}function p(s){const a={};for(const u in s)a[u]=s[u];return a}const g="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function v(s,a){let u,h;for(let A=1;A<arguments.length;A++){h=arguments[A];for(u in h)s[u]=h[u];for(let R=0;R<g.length;R++)u=g[R],Object.prototype.hasOwnProperty.call(h,u)&&(s[u]=h[u])}}function E(s){var a=1;s=s.split(":");const u=[];for(;0<a&&s.length;)u.push(s.shift()),a--;return s.length&&u.push(s.join(":")),u}function I(s){c.setTimeout(()=>{throw s},0)}function y(){var s=ve;let a=null;return s.g&&(a=s.g,s.g=s.g.next,s.g||(s.h=null),a.next=null),a}class Rt{constructor(){this.h=this.g=null}add(a,u){const h=xt.get();h.set(a,u),this.h?this.h.next=h:this.g=h,this.h=h}}var xt=new J(()=>new ln,s=>s.reset());class ln{constructor(){this.next=this.g=this.h=null}set(a,u){this.h=a,this.g=u,this.next=null}reset(){this.next=this.g=this.h=null}}let Wt,Ft=!1,ve=new Rt,un=()=>{const s=c.Promise.resolve(void 0);Wt=()=>{s.then(Qn)}};var Qn=()=>{for(var s;s=y();){try{s.h.call(s.g)}catch(u){I(u)}var a=xt;a.j(s),100>a.h&&(a.h++,s.next=a.g,a.g=s)}Ft=!1};function Lt(){this.s=this.s,this.C=this.C}Lt.prototype.s=!1,Lt.prototype.ma=function(){this.s||(this.s=!0,this.N())},Lt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ht(s,a){this.type=s,this.g=this.target=a,this.defaultPrevented=!1}ht.prototype.h=function(){this.defaultPrevented=!0};var $n=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var s=!1,a=Object.defineProperty({},"passive",{get:function(){s=!0}});try{const u=()=>{};c.addEventListener("test",u,a),c.removeEventListener("test",u,a)}catch{}return s}();function Qt(s,a){if(ht.call(this,s?s.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,s){var u=this.type=s.type,h=s.changedTouches&&s.changedTouches.length?s.changedTouches[0]:null;if(this.target=s.target||s.srcElement,this.g=a,a=s.relatedTarget){if(Ot){t:{try{nt(a.nodeName);var A=!0;break t}catch{}A=!1}A||(a=null)}}else u=="mouseover"?a=s.fromElement:u=="mouseout"&&(a=s.toElement);this.relatedTarget=a,h?(this.clientX=h.clientX!==void 0?h.clientX:h.pageX,this.clientY=h.clientY!==void 0?h.clientY:h.pageY,this.screenX=h.screenX||0,this.screenY=h.screenY||0):(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0),this.button=s.button,this.key=s.key||"",this.ctrlKey=s.ctrlKey,this.altKey=s.altKey,this.shiftKey=s.shiftKey,this.metaKey=s.metaKey,this.pointerId=s.pointerId||0,this.pointerType=typeof s.pointerType=="string"?s.pointerType:Yn[s.pointerType]||"",this.state=s.state,this.i=s,s.defaultPrevented&&Qt.aa.h.call(this)}}L(Qt,ht);var Yn={2:"touch",3:"pen",4:"mouse"};Qt.prototype.h=function(){Qt.aa.h.call(this);var s=this.i;s.preventDefault?s.preventDefault():s.returnValue=!1};var $t="closure_listenable_"+(1e6*Math.random()|0),Xn=0;function Ve(s,a,u,h,A){this.listener=s,this.proxy=null,this.src=a,this.type=u,this.capture=!!h,this.ha=A,this.key=++Xn,this.da=this.fa=!1}function ee(s){s.da=!0,s.listener=null,s.proxy=null,s.src=null,s.ha=null}function De(s){this.src=s,this.g={},this.h=0}De.prototype.add=function(s,a,u,h,A){var R=s.toString();s=this.g[R],s||(s=this.g[R]=[],this.h++);var D=hn(s,a,h,A);return-1<D?(a=s[D],u||(a.fa=!1)):(a=new Ve(a,this.src,R,!!h,A),a.fa=u,s.push(a)),a};function cn(s,a){var u=a.type;if(u in s.g){var h=s.g[u],A=Array.prototype.indexOf.call(h,a,void 0),R;(R=0<=A)&&Array.prototype.splice.call(h,A,1),R&&(ee(a),s.g[u].length==0&&(delete s.g[u],s.h--))}}function hn(s,a,u,h){for(var A=0;A<s.length;++A){var R=s[A];if(!R.da&&R.listener==a&&R.capture==!!u&&R.ha==h)return A}return-1}var dn="closure_lm_"+(1e6*Math.random()|0),fn={};function gn(s,a,u,h,A){if(Array.isArray(a)){for(var R=0;R<a.length;R++)gn(s,a[R],u,h,A);return null}return u=Zn(u),s&&s[$t]?s.K(a,u,f(h)?!!h.capture:!1,A):Jr(s,a,u,!1,h,A)}function Jr(s,a,u,h,A,R){if(!a)throw Error("Invalid event type");var D=f(A)?!!A.capture:!!A,X=mn(s);if(X||(s[dn]=X=new De(s)),u=X.add(a,u,h,D,R),u.proxy)return u;if(h=Jn(),u.proxy=h,h.src=s,h.listener=u,s.addEventListener)$n||(A=D),A===void 0&&(A=!1),s.addEventListener(a.toString(),h,A);else if(s.attachEvent)s.attachEvent(Ne(a.toString()),h);else if(s.addListener&&s.removeListener)s.addListener(h);else throw Error("addEventListener and attachEvent are unavailable.");return u}function Jn(){function s(u){return a.call(s.src,s.listener,u)}const a=Zr;return s}function pn(s,a,u,h,A){if(Array.isArray(a))for(var R=0;R<a.length;R++)pn(s,a[R],u,h,A);else h=f(h)?!!h.capture:!!h,u=Zn(u),s&&s[$t]?(s=s.i,a=String(a).toString(),a in s.g&&(R=s.g[a],u=hn(R,u,h,A),-1<u&&(ee(R[u]),Array.prototype.splice.call(R,u,1),R.length==0&&(delete s.g[a],s.h--)))):s&&(s=mn(s))&&(a=s.g[a.toString()],s=-1,a&&(s=hn(a,u,h,A)),(u=-1<s?a[s]:null)&&ke(u))}function ke(s){if(typeof s!="number"&&s&&!s.da){var a=s.src;if(a&&a[$t])cn(a.i,s);else{var u=s.type,h=s.proxy;a.removeEventListener?a.removeEventListener(u,h,s.capture):a.detachEvent?a.detachEvent(Ne(u),h):a.addListener&&a.removeListener&&a.removeListener(h),(u=mn(a))?(cn(u,s),u.h==0&&(u.src=null,a[dn]=null)):ee(s)}}}function Ne(s){return s in fn?fn[s]:fn[s]="on"+s}function Zr(s,a){if(s.da)s=!0;else{a=new Qt(a,this);var u=s.listener,h=s.ha||s.src;s.fa&&ke(s),s=u.call(h,a)}return s}function mn(s){return s=s[dn],s instanceof De?s:null}var yn="__closure_events_fn_"+(1e9*Math.random()>>>0);function Zn(s){return typeof s=="function"?s:(s[yn]||(s[yn]=function(a){return s.handleEvent(a)}),s[yn])}function gt(){Lt.call(this),this.i=new De(this),this.M=this,this.F=null}L(gt,Lt),gt.prototype[$t]=!0,gt.prototype.removeEventListener=function(s,a,u,h){pn(this,s,a,u,h)};function mt(s,a){var u,h=s.F;if(h)for(u=[];h;h=h.F)u.push(h);if(s=s.M,h=a.type||a,typeof a=="string")a=new ht(a,s);else if(a instanceof ht)a.target=a.target||s;else{var A=a;a=new ht(h,s),v(a,A)}if(A=!0,u)for(var R=u.length-1;0<=R;R--){var D=a.g=u[R];A=k(D,h,!0,a)&&A}if(D=a.g=s,A=k(D,h,!0,a)&&A,A=k(D,h,!1,a)&&A,u)for(R=0;R<u.length;R++)D=a.g=u[R],A=k(D,h,!1,a)&&A}gt.prototype.N=function(){if(gt.aa.N.call(this),this.i){var s=this.i,a;for(a in s.g){for(var u=s.g[a],h=0;h<u.length;h++)ee(u[h]);delete s.g[a],s.h--}}this.F=null},gt.prototype.K=function(s,a,u,h){return this.i.add(String(s),a,!1,u,h)},gt.prototype.L=function(s,a,u,h){return this.i.add(String(s),a,!0,u,h)};function k(s,a,u,h){if(a=s.i.g[String(a)],!a)return!0;a=a.concat();for(var A=!0,R=0;R<a.length;++R){var D=a[R];if(D&&!D.da&&D.capture==u){var X=D.listener,yt=D.ha||D.src;D.fa&&cn(s.i,D),A=X.call(yt,h)!==!1&&A}}return A&&!h.defaultPrevented}function m(s,a,u){if(typeof s=="function")u&&(s=S(s,u));else if(s&&typeof s.handleEvent=="function")s=S(s.handleEvent,s);else throw Error("Invalid listener argument");return 2147483647<Number(a)?-1:c.setTimeout(s,a||0)}function P(s){s.g=m(()=>{s.g=null,s.i&&(s.i=!1,P(s))},s.l);const a=s.h;s.h=null,s.m.apply(null,a)}class N extends Lt{constructor(a,u){super(),this.m=a,this.l=u,this.h=null,this.i=!1,this.g=null}j(a){this.h=arguments,this.g?this.i=!0:P(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function x(s){Lt.call(this),this.h=s,this.g={}}L(x,Lt);var Dt=[];function Ut(s){ct(s.g,function(a,u){this.g.hasOwnProperty(u)&&ke(a)},s),s.g={}}x.prototype.N=function(){x.aa.N.call(this),Ut(this)},x.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var kt=c.JSON.stringify,Oe=c.JSON.parse,ts=class{stringify(s){return c.JSON.stringify(s,void 0)}parse(s){return c.JSON.parse(s,void 0)}};function Le(){}Le.prototype.h=null;function st(s){return s.h||(s.h=s.i())}function tr(){}var Yt={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ne(){ht.call(this,"d")}L(ne,ht);function es(){ht.call(this,"c")}L(es,ht);var Ee={},_i=null;function er(){return _i=_i||new gt}Ee.La="serverreachability";function vi(s){ht.call(this,Ee.La,s)}L(vi,ht);function _n(s){const a=er();mt(a,new vi(a))}Ee.STAT_EVENT="statevent";function Ei(s,a){ht.call(this,Ee.STAT_EVENT,s),this.stat=a}L(Ei,ht);function bt(s){const a=er();mt(a,new Ei(a,s))}Ee.Ma="timingevent";function Ti(s,a){ht.call(this,Ee.Ma,s),this.size=a}L(Ti,ht);function vn(s,a){if(typeof s!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){s()},a)}function En(){this.g=!0}En.prototype.xa=function(){this.g=!1};function xl(s,a,u,h,A,R){s.info(function(){if(s.g)if(R)for(var D="",X=R.split("&"),yt=0;yt<X.length;yt++){var $=X[yt].split("=");if(1<$.length){var Et=$[0];$=$[1];var Tt=Et.split("_");D=2<=Tt.length&&Tt[1]=="type"?D+(Et+"="+$+"&"):D+(Et+"=redacted&")}}else D=null;else D=R;return"XMLHTTP REQ ("+h+") [attempt "+A+"]: "+a+`
`+u+`
`+D})}function Fl(s,a,u,h,A,R,D){s.info(function(){return"XMLHTTP RESP ("+h+") [ attempt "+A+"]: "+a+`
`+u+`
`+R+" "+D})}function Me(s,a,u,h){s.info(function(){return"XMLHTTP TEXT ("+a+"): "+Bl(s,u)+(h?" "+h:"")})}function Ul(s,a){s.info(function(){return"TIMEOUT: "+a})}En.prototype.info=function(){};function Bl(s,a){if(!s.g)return a;if(!a)return null;try{var u=JSON.parse(a);if(u){for(s=0;s<u.length;s++)if(Array.isArray(u[s])){var h=u[s];if(!(2>h.length)){var A=h[1];if(Array.isArray(A)&&!(1>A.length)){var R=A[0];if(R!="noop"&&R!="stop"&&R!="close")for(var D=1;D<A.length;D++)A[D]=""}}}}return kt(u)}catch{return a}}var nr={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ii={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ns;function rr(){}L(rr,Le),rr.prototype.g=function(){return new XMLHttpRequest},rr.prototype.i=function(){return{}},ns=new rr;function re(s,a,u,h){this.j=s,this.i=a,this.l=u,this.R=h||1,this.U=new x(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ai}function Ai(){this.i=null,this.g="",this.h=!1}var wi={},rs={};function ss(s,a,u){s.L=1,s.v=ar(Xt(a)),s.m=u,s.P=!0,Si(s,null)}function Si(s,a){s.F=Date.now(),sr(s),s.A=Xt(s.v);var u=s.A,h=s.R;Array.isArray(h)||(h=[String(h)]),Ui(u.i,"t",h),s.C=0,u=s.j.J,s.h=new Ai,s.g=ro(s.j,u?a:null,!s.m),0<s.O&&(s.M=new N(S(s.Y,s,s.g),s.O)),a=s.U,u=s.g,h=s.ca;var A="readystatechange";Array.isArray(A)||(A&&(Dt[0]=A.toString()),A=Dt);for(var R=0;R<A.length;R++){var D=gn(u,A[R],h||a.handleEvent,!1,a.h||a);if(!D)break;a.g[D.key]=D}a=s.H?p(s.H):{},s.m?(s.u||(s.u="POST"),a["Content-Type"]="application/x-www-form-urlencoded",s.g.ea(s.A,s.u,s.m,a)):(s.u="GET",s.g.ea(s.A,s.u,null,a)),_n(),xl(s.i,s.u,s.A,s.l,s.R,s.m)}re.prototype.ca=function(s){s=s.target;const a=this.M;a&&Jt(s)==3?a.j():this.Y(s)},re.prototype.Y=function(s){try{if(s==this.g)t:{const Tt=Jt(this.g);var a=this.g.Ba();const Ue=this.g.Z();if(!(3>Tt)&&(Tt!=3||this.g&&(this.h.h||this.g.oa()||Ki(this.g)))){this.J||Tt!=4||a==7||(a==8||0>=Ue?_n(3):_n(2)),is(this);var u=this.g.Z();this.X=u;e:if(Ri(this)){var h=Ki(this.g);s="";var A=h.length,R=Jt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Te(this),Tn(this);var D="";break e}this.h.i=new c.TextDecoder}for(a=0;a<A;a++)this.h.h=!0,s+=this.h.i.decode(h[a],{stream:!(R&&a==A-1)});h.length=0,this.h.g+=s,this.C=0,D=this.h.g}else D=this.g.oa();if(this.o=u==200,Fl(this.i,this.u,this.A,this.l,this.R,Tt,u),this.o){if(this.T&&!this.K){e:{if(this.g){var X,yt=this.g;if((X=yt.g?yt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!G(X)){var $=X;break e}}$=null}if(u=$)Me(this.i,this.l,u,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,os(this,u);else{this.o=!1,this.s=3,bt(12),Te(this),Tn(this);break t}}if(this.P){u=!0;let Mt;for(;!this.J&&this.C<D.length;)if(Mt=jl(this,D),Mt==rs){Tt==4&&(this.s=4,bt(14),u=!1),Me(this.i,this.l,null,"[Incomplete Response]");break}else if(Mt==wi){this.s=4,bt(15),Me(this.i,this.l,D,"[Invalid Chunk]"),u=!1;break}else Me(this.i,this.l,Mt,null),os(this,Mt);if(Ri(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Tt!=4||D.length!=0||this.h.h||(this.s=1,bt(16),u=!1),this.o=this.o&&u,!u)Me(this.i,this.l,D,"[Invalid Chunked Response]"),Te(this),Tn(this);else if(0<D.length&&!this.W){this.W=!0;var Et=this.j;Et.g==this&&Et.ba&&!Et.M&&(Et.j.info("Great, no buffering proxy detected. Bytes received: "+D.length),ds(Et),Et.M=!0,bt(11))}}else Me(this.i,this.l,D,null),os(this,D);Tt==4&&Te(this),this.o&&!this.J&&(Tt==4?Zi(this.j,this):(this.o=!1,sr(this)))}else su(this.g),u==400&&0<D.indexOf("Unknown SID")?(this.s=3,bt(12)):(this.s=0,bt(13)),Te(this),Tn(this)}}}catch{}finally{}};function Ri(s){return s.g?s.u=="GET"&&s.L!=2&&s.j.Ca:!1}function jl(s,a){var u=s.C,h=a.indexOf(`
`,u);return h==-1?rs:(u=Number(a.substring(u,h)),isNaN(u)?wi:(h+=1,h+u>a.length?rs:(a=a.slice(h,h+u),s.C=h+u,a)))}re.prototype.cancel=function(){this.J=!0,Te(this)};function sr(s){s.S=Date.now()+s.I,bi(s,s.I)}function bi(s,a){if(s.B!=null)throw Error("WatchDog timer not null");s.B=vn(S(s.ba,s),a)}function is(s){s.B&&(c.clearTimeout(s.B),s.B=null)}re.prototype.ba=function(){this.B=null;const s=Date.now();0<=s-this.S?(Ul(this.i,this.A),this.L!=2&&(_n(),bt(17)),Te(this),this.s=2,Tn(this)):bi(this,this.S-s)};function Tn(s){s.j.G==0||s.J||Zi(s.j,s)}function Te(s){is(s);var a=s.M;a&&typeof a.ma=="function"&&a.ma(),s.M=null,Ut(s.U),s.g&&(a=s.g,s.g=null,a.abort(),a.ma())}function os(s,a){try{var u=s.j;if(u.G!=0&&(u.g==s||as(u.h,s))){if(!s.K&&as(u.h,s)&&u.G==3){try{var h=u.Da.g.parse(a)}catch{h=null}if(Array.isArray(h)&&h.length==3){var A=h;if(A[0]==0){t:if(!u.u){if(u.g)if(u.g.F+3e3<s.F)fr(u),hr(u);else break t;hs(u),bt(18)}}else u.za=A[1],0<u.za-u.T&&37500>A[2]&&u.F&&u.v==0&&!u.C&&(u.C=vn(S(u.Za,u),6e3));if(1>=Vi(u.h)&&u.ca){try{u.ca()}catch{}u.ca=void 0}}else Ae(u,11)}else if((s.K||u.g==s)&&fr(u),!G(a))for(A=u.Da.g.parse(a),a=0;a<A.length;a++){let $=A[a];if(u.T=$[0],$=$[1],u.G==2)if($[0]=="c"){u.K=$[1],u.ia=$[2];const Et=$[3];Et!=null&&(u.la=Et,u.j.info("VER="+u.la));const Tt=$[4];Tt!=null&&(u.Aa=Tt,u.j.info("SVER="+u.Aa));const Ue=$[5];Ue!=null&&typeof Ue=="number"&&0<Ue&&(h=1.5*Ue,u.L=h,u.j.info("backChannelRequestTimeoutMs_="+h)),h=u;const Mt=s.g;if(Mt){const pr=Mt.g?Mt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(pr){var R=h.h;R.g||pr.indexOf("spdy")==-1&&pr.indexOf("quic")==-1&&pr.indexOf("h2")==-1||(R.j=R.l,R.g=new Set,R.h&&(ls(R,R.h),R.h=null))}if(h.D){const fs=Mt.g?Mt.g.getResponseHeader("X-HTTP-Session-Id"):null;fs&&(h.ya=fs,Z(h.I,h.D,fs))}}u.G=3,u.l&&u.l.ua(),u.ba&&(u.R=Date.now()-s.F,u.j.info("Handshake RTT: "+u.R+"ms")),h=u;var D=s;if(h.qa=no(h,h.J?h.ia:null,h.W),D.K){Di(h.h,D);var X=D,yt=h.L;yt&&(X.I=yt),X.B&&(is(X),sr(X)),h.g=D}else Xi(h);0<u.i.length&&dr(u)}else $[0]!="stop"&&$[0]!="close"||Ae(u,7);else u.G==3&&($[0]=="stop"||$[0]=="close"?$[0]=="stop"?Ae(u,7):cs(u):$[0]!="noop"&&u.l&&u.l.ta($),u.v=0)}}_n(4)}catch{}}var ql=class{constructor(s,a){this.g=s,this.map=a}};function Ci(s){this.l=s||10,c.PerformanceNavigationTiming?(s=c.performance.getEntriesByType("navigation"),s=0<s.length&&(s[0].nextHopProtocol=="hq"||s[0].nextHopProtocol=="h2")):s=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=s?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Pi(s){return s.h?!0:s.g?s.g.size>=s.j:!1}function Vi(s){return s.h?1:s.g?s.g.size:0}function as(s,a){return s.h?s.h==a:s.g?s.g.has(a):!1}function ls(s,a){s.g?s.g.add(a):s.h=a}function Di(s,a){s.h&&s.h==a?s.h=null:s.g&&s.g.has(a)&&s.g.delete(a)}Ci.prototype.cancel=function(){if(this.i=ki(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const s of this.g.values())s.cancel();this.g.clear()}};function ki(s){if(s.h!=null)return s.i.concat(s.h.D);if(s.g!=null&&s.g.size!==0){let a=s.i;for(const u of s.g.values())a=a.concat(u.D);return a}return U(s.i)}function Gl(s){if(s.V&&typeof s.V=="function")return s.V();if(typeof Map<"u"&&s instanceof Map||typeof Set<"u"&&s instanceof Set)return Array.from(s.values());if(typeof s=="string")return s.split("");if(d(s)){for(var a=[],u=s.length,h=0;h<u;h++)a.push(s[h]);return a}a=[],u=0;for(h in s)a[u++]=s[h];return a}function zl(s){if(s.na&&typeof s.na=="function")return s.na();if(!s.V||typeof s.V!="function"){if(typeof Map<"u"&&s instanceof Map)return Array.from(s.keys());if(!(typeof Set<"u"&&s instanceof Set)){if(d(s)||typeof s=="string"){var a=[];s=s.length;for(var u=0;u<s;u++)a.push(u);return a}a=[],u=0;for(const h in s)a[u++]=h;return a}}}function Ni(s,a){if(s.forEach&&typeof s.forEach=="function")s.forEach(a,void 0);else if(d(s)||typeof s=="string")Array.prototype.forEach.call(s,a,void 0);else for(var u=zl(s),h=Gl(s),A=h.length,R=0;R<A;R++)a.call(void 0,h[R],u&&u[R],s)}var Oi=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Hl(s,a){if(s){s=s.split("&");for(var u=0;u<s.length;u++){var h=s[u].indexOf("="),A=null;if(0<=h){var R=s[u].substring(0,h);A=s[u].substring(h+1)}else R=s[u];a(R,A?decodeURIComponent(A.replace(/\+/g," ")):"")}}}function Ie(s){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,s instanceof Ie){this.h=s.h,ir(this,s.j),this.o=s.o,this.g=s.g,or(this,s.s),this.l=s.l;var a=s.i,u=new wn;u.i=a.i,a.g&&(u.g=new Map(a.g),u.h=a.h),Li(this,u),this.m=s.m}else s&&(a=String(s).match(Oi))?(this.h=!1,ir(this,a[1]||"",!0),this.o=In(a[2]||""),this.g=In(a[3]||"",!0),or(this,a[4]),this.l=In(a[5]||"",!0),Li(this,a[6]||"",!0),this.m=In(a[7]||"")):(this.h=!1,this.i=new wn(null,this.h))}Ie.prototype.toString=function(){var s=[],a=this.j;a&&s.push(An(a,Mi,!0),":");var u=this.g;return(u||a=="file")&&(s.push("//"),(a=this.o)&&s.push(An(a,Mi,!0),"@"),s.push(encodeURIComponent(String(u)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u=this.s,u!=null&&s.push(":",String(u))),(u=this.l)&&(this.g&&u.charAt(0)!="/"&&s.push("/"),s.push(An(u,u.charAt(0)=="/"?Ql:Wl,!0))),(u=this.i.toString())&&s.push("?",u),(u=this.m)&&s.push("#",An(u,Yl)),s.join("")};function Xt(s){return new Ie(s)}function ir(s,a,u){s.j=u?In(a,!0):a,s.j&&(s.j=s.j.replace(/:$/,""))}function or(s,a){if(a){if(a=Number(a),isNaN(a)||0>a)throw Error("Bad port number "+a);s.s=a}else s.s=null}function Li(s,a,u){a instanceof wn?(s.i=a,Xl(s.i,s.h)):(u||(a=An(a,$l)),s.i=new wn(a,s.h))}function Z(s,a,u){s.i.set(a,u)}function ar(s){return Z(s,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),s}function In(s,a){return s?a?decodeURI(s.replace(/%25/g,"%2525")):decodeURIComponent(s):""}function An(s,a,u){return typeof s=="string"?(s=encodeURI(s).replace(a,Kl),u&&(s=s.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),s):null}function Kl(s){return s=s.charCodeAt(0),"%"+(s>>4&15).toString(16)+(s&15).toString(16)}var Mi=/[#\/\?@]/g,Wl=/[#\?:]/g,Ql=/[#\?]/g,$l=/[#\?@]/g,Yl=/#/g;function wn(s,a){this.h=this.g=null,this.i=s||null,this.j=!!a}function se(s){s.g||(s.g=new Map,s.h=0,s.i&&Hl(s.i,function(a,u){s.add(decodeURIComponent(a.replace(/\+/g," ")),u)}))}r=wn.prototype,r.add=function(s,a){se(this),this.i=null,s=xe(this,s);var u=this.g.get(s);return u||this.g.set(s,u=[]),u.push(a),this.h+=1,this};function xi(s,a){se(s),a=xe(s,a),s.g.has(a)&&(s.i=null,s.h-=s.g.get(a).length,s.g.delete(a))}function Fi(s,a){return se(s),a=xe(s,a),s.g.has(a)}r.forEach=function(s,a){se(this),this.g.forEach(function(u,h){u.forEach(function(A){s.call(a,A,h,this)},this)},this)},r.na=function(){se(this);const s=Array.from(this.g.values()),a=Array.from(this.g.keys()),u=[];for(let h=0;h<a.length;h++){const A=s[h];for(let R=0;R<A.length;R++)u.push(a[h])}return u},r.V=function(s){se(this);let a=[];if(typeof s=="string")Fi(this,s)&&(a=a.concat(this.g.get(xe(this,s))));else{s=Array.from(this.g.values());for(let u=0;u<s.length;u++)a=a.concat(s[u])}return a},r.set=function(s,a){return se(this),this.i=null,s=xe(this,s),Fi(this,s)&&(this.h-=this.g.get(s).length),this.g.set(s,[a]),this.h+=1,this},r.get=function(s,a){return s?(s=this.V(s),0<s.length?String(s[0]):a):a};function Ui(s,a,u){xi(s,a),0<u.length&&(s.i=null,s.g.set(xe(s,a),U(u)),s.h+=u.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const s=[],a=Array.from(this.g.keys());for(var u=0;u<a.length;u++){var h=a[u];const R=encodeURIComponent(String(h)),D=this.V(h);for(h=0;h<D.length;h++){var A=R;D[h]!==""&&(A+="="+encodeURIComponent(String(D[h]))),s.push(A)}}return this.i=s.join("&")};function xe(s,a){return a=String(a),s.j&&(a=a.toLowerCase()),a}function Xl(s,a){a&&!s.j&&(se(s),s.i=null,s.g.forEach(function(u,h){var A=h.toLowerCase();h!=A&&(xi(this,h),Ui(this,A,u))},s)),s.j=a}function Jl(s,a){const u=new En;if(c.Image){const h=new Image;h.onload=C(ie,u,"TestLoadImage: loaded",!0,a,h),h.onerror=C(ie,u,"TestLoadImage: error",!1,a,h),h.onabort=C(ie,u,"TestLoadImage: abort",!1,a,h),h.ontimeout=C(ie,u,"TestLoadImage: timeout",!1,a,h),c.setTimeout(function(){h.ontimeout&&h.ontimeout()},1e4),h.src=s}else a(!1)}function Zl(s,a){const u=new En,h=new AbortController,A=setTimeout(()=>{h.abort(),ie(u,"TestPingServer: timeout",!1,a)},1e4);fetch(s,{signal:h.signal}).then(R=>{clearTimeout(A),R.ok?ie(u,"TestPingServer: ok",!0,a):ie(u,"TestPingServer: server error",!1,a)}).catch(()=>{clearTimeout(A),ie(u,"TestPingServer: error",!1,a)})}function ie(s,a,u,h,A){try{A&&(A.onload=null,A.onerror=null,A.onabort=null,A.ontimeout=null),h(u)}catch{}}function tu(){this.g=new ts}function eu(s,a,u){const h=u||"";try{Ni(s,function(A,R){let D=A;f(A)&&(D=kt(A)),a.push(h+R+"="+encodeURIComponent(D))})}catch(A){throw a.push(h+"type="+encodeURIComponent("_badmap")),A}}function lr(s){this.l=s.Ub||null,this.j=s.eb||!1}L(lr,Le),lr.prototype.g=function(){return new ur(this.l,this.j)},lr.prototype.i=function(s){return function(){return s}}({});function ur(s,a){gt.call(this),this.D=s,this.o=a,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}L(ur,gt),r=ur.prototype,r.open=function(s,a){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=s,this.A=a,this.readyState=1,Rn(this)},r.send=function(s){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const a={headers:this.u,method:this.B,credentials:this.m,cache:void 0};s&&(a.body=s),(this.D||c).fetch(new Request(this.A,a)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Sn(this)),this.readyState=0},r.Sa=function(s){if(this.g&&(this.l=s,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=s.headers,this.readyState=2,Rn(this)),this.g&&(this.readyState=3,Rn(this),this.g)))if(this.responseType==="arraybuffer")s.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in s){if(this.j=s.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Bi(this)}else s.text().then(this.Ra.bind(this),this.ga.bind(this))};function Bi(s){s.j.read().then(s.Pa.bind(s)).catch(s.ga.bind(s))}r.Pa=function(s){if(this.g){if(this.o&&s.value)this.response.push(s.value);else if(!this.o){var a=s.value?s.value:new Uint8Array(0);(a=this.v.decode(a,{stream:!s.done}))&&(this.response=this.responseText+=a)}s.done?Sn(this):Rn(this),this.readyState==3&&Bi(this)}},r.Ra=function(s){this.g&&(this.response=this.responseText=s,Sn(this))},r.Qa=function(s){this.g&&(this.response=s,Sn(this))},r.ga=function(){this.g&&Sn(this)};function Sn(s){s.readyState=4,s.l=null,s.j=null,s.v=null,Rn(s)}r.setRequestHeader=function(s,a){this.u.append(s,a)},r.getResponseHeader=function(s){return this.h&&this.h.get(s.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const s=[],a=this.h.entries();for(var u=a.next();!u.done;)u=u.value,s.push(u[0]+": "+u[1]),u=a.next();return s.join(`\r
`)};function Rn(s){s.onreadystatechange&&s.onreadystatechange.call(s)}Object.defineProperty(ur.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(s){this.m=s?"include":"same-origin"}});function ji(s){let a="";return ct(s,function(u,h){a+=h,a+=":",a+=u,a+=`\r
`}),a}function us(s,a,u){t:{for(h in u){var h=!1;break t}h=!0}h||(u=ji(u),typeof s=="string"?u!=null&&encodeURIComponent(String(u)):Z(s,a,u))}function rt(s){gt.call(this),this.headers=new Map,this.o=s||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}L(rt,gt);var nu=/^https?$/i,ru=["POST","PUT"];r=rt.prototype,r.Ha=function(s){this.J=s},r.ea=function(s,a,u,h){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+s);a=a?a.toUpperCase():"GET",this.D=s,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ns.g(),this.v=this.o?st(this.o):st(ns),this.g.onreadystatechange=S(this.Ea,this);try{this.B=!0,this.g.open(a,String(s),!0),this.B=!1}catch(R){qi(this,R);return}if(s=u||"",u=new Map(this.headers),h)if(Object.getPrototypeOf(h)===Object.prototype)for(var A in h)u.set(A,h[A]);else if(typeof h.keys=="function"&&typeof h.get=="function")for(const R of h.keys())u.set(R,h.get(R));else throw Error("Unknown input type for opt_headers: "+String(h));h=Array.from(u.keys()).find(R=>R.toLowerCase()=="content-type"),A=c.FormData&&s instanceof c.FormData,!(0<=Array.prototype.indexOf.call(ru,a,void 0))||h||A||u.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[R,D]of u)this.g.setRequestHeader(R,D);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Hi(this),this.u=!0,this.g.send(s),this.u=!1}catch(R){qi(this,R)}};function qi(s,a){s.h=!1,s.g&&(s.j=!0,s.g.abort(),s.j=!1),s.l=a,s.m=5,Gi(s),cr(s)}function Gi(s){s.A||(s.A=!0,mt(s,"complete"),mt(s,"error"))}r.abort=function(s){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=s||7,mt(this,"complete"),mt(this,"abort"),cr(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),cr(this,!0)),rt.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?zi(this):this.bb())},r.bb=function(){zi(this)};function zi(s){if(s.h&&typeof l<"u"&&(!s.v[1]||Jt(s)!=4||s.Z()!=2)){if(s.u&&Jt(s)==4)m(s.Ea,0,s);else if(mt(s,"readystatechange"),Jt(s)==4){s.h=!1;try{const D=s.Z();t:switch(D){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var a=!0;break t;default:a=!1}var u;if(!(u=a)){var h;if(h=D===0){var A=String(s.D).match(Oi)[1]||null;!A&&c.self&&c.self.location&&(A=c.self.location.protocol.slice(0,-1)),h=!nu.test(A?A.toLowerCase():"")}u=h}if(u)mt(s,"complete"),mt(s,"success");else{s.m=6;try{var R=2<Jt(s)?s.g.statusText:""}catch{R=""}s.l=R+" ["+s.Z()+"]",Gi(s)}}finally{cr(s)}}}}function cr(s,a){if(s.g){Hi(s);const u=s.g,h=s.v[0]?()=>{}:null;s.g=null,s.v=null,a||mt(s,"ready");try{u.onreadystatechange=h}catch{}}}function Hi(s){s.I&&(c.clearTimeout(s.I),s.I=null)}r.isActive=function(){return!!this.g};function Jt(s){return s.g?s.g.readyState:0}r.Z=function(){try{return 2<Jt(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(s){if(this.g){var a=this.g.responseText;return s&&a.indexOf(s)==0&&(a=a.substring(s.length)),Oe(a)}};function Ki(s){try{if(!s.g)return null;if("response"in s.g)return s.g.response;switch(s.H){case"":case"text":return s.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in s.g)return s.g.mozResponseArrayBuffer}return null}catch{return null}}function su(s){const a={};s=(s.g&&2<=Jt(s)&&s.g.getAllResponseHeaders()||"").split(`\r
`);for(let h=0;h<s.length;h++){if(G(s[h]))continue;var u=E(s[h]);const A=u[0];if(u=u[1],typeof u!="string")continue;u=u.trim();const R=a[A]||[];a[A]=R,R.push(u)}T(a,function(h){return h.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function bn(s,a,u){return u&&u.internalChannelParams&&u.internalChannelParams[s]||a}function Wi(s){this.Aa=0,this.i=[],this.j=new En,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=bn("failFast",!1,s),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=bn("baseRetryDelayMs",5e3,s),this.cb=bn("retryDelaySeedMs",1e4,s),this.Wa=bn("forwardChannelMaxRetries",2,s),this.wa=bn("forwardChannelRequestTimeoutMs",2e4,s),this.pa=s&&s.xmlHttpFactory||void 0,this.Xa=s&&s.Tb||void 0,this.Ca=s&&s.useFetchStreams||!1,this.L=void 0,this.J=s&&s.supportsCrossDomainXhr||!1,this.K="",this.h=new Ci(s&&s.concurrentRequestLimit),this.Da=new tu,this.P=s&&s.fastHandshake||!1,this.O=s&&s.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=s&&s.Rb||!1,s&&s.xa&&this.j.xa(),s&&s.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&s&&s.detectBufferingProxy||!1,this.ja=void 0,s&&s.longPollingTimeout&&0<s.longPollingTimeout&&(this.ja=s.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=Wi.prototype,r.la=8,r.G=1,r.connect=function(s,a,u,h){bt(0),this.W=s,this.H=a||{},u&&h!==void 0&&(this.H.OSID=u,this.H.OAID=h),this.F=this.X,this.I=no(this,null,this.W),dr(this)};function cs(s){if(Qi(s),s.G==3){var a=s.U++,u=Xt(s.I);if(Z(u,"SID",s.K),Z(u,"RID",a),Z(u,"TYPE","terminate"),Cn(s,u),a=new re(s,s.j,a),a.L=2,a.v=ar(Xt(u)),u=!1,c.navigator&&c.navigator.sendBeacon)try{u=c.navigator.sendBeacon(a.v.toString(),"")}catch{}!u&&c.Image&&(new Image().src=a.v,u=!0),u||(a.g=ro(a.j,null),a.g.ea(a.v)),a.F=Date.now(),sr(a)}eo(s)}function hr(s){s.g&&(ds(s),s.g.cancel(),s.g=null)}function Qi(s){hr(s),s.u&&(c.clearTimeout(s.u),s.u=null),fr(s),s.h.cancel(),s.s&&(typeof s.s=="number"&&c.clearTimeout(s.s),s.s=null)}function dr(s){if(!Pi(s.h)&&!s.s){s.s=!0;var a=s.Ga;Wt||un(),Ft||(Wt(),Ft=!0),ve.add(a,s),s.B=0}}function iu(s,a){return Vi(s.h)>=s.h.j-(s.s?1:0)?!1:s.s?(s.i=a.D.concat(s.i),!0):s.G==1||s.G==2||s.B>=(s.Va?0:s.Wa)?!1:(s.s=vn(S(s.Ga,s,a),to(s,s.B)),s.B++,!0)}r.Ga=function(s){if(this.s)if(this.s=null,this.G==1){if(!s){this.U=Math.floor(1e5*Math.random()),s=this.U++;const A=new re(this,this.j,s);let R=this.o;if(this.S&&(R?(R=p(R),v(R,this.S)):R=this.S),this.m!==null||this.O||(A.H=R,R=null),this.P)t:{for(var a=0,u=0;u<this.i.length;u++){e:{var h=this.i[u];if("__data__"in h.map&&(h=h.map.__data__,typeof h=="string")){h=h.length;break e}h=void 0}if(h===void 0)break;if(a+=h,4096<a){a=u;break t}if(a===4096||u===this.i.length-1){a=u+1;break t}}a=1e3}else a=1e3;a=Yi(this,A,a),u=Xt(this.I),Z(u,"RID",s),Z(u,"CVER",22),this.D&&Z(u,"X-HTTP-Session-Id",this.D),Cn(this,u),R&&(this.O?a="headers="+encodeURIComponent(String(ji(R)))+"&"+a:this.m&&us(u,this.m,R)),ls(this.h,A),this.Ua&&Z(u,"TYPE","init"),this.P?(Z(u,"$req",a),Z(u,"SID","null"),A.T=!0,ss(A,u,null)):ss(A,u,a),this.G=2}}else this.G==3&&(s?$i(this,s):this.i.length==0||Pi(this.h)||$i(this))};function $i(s,a){var u;a?u=a.l:u=s.U++;const h=Xt(s.I);Z(h,"SID",s.K),Z(h,"RID",u),Z(h,"AID",s.T),Cn(s,h),s.m&&s.o&&us(h,s.m,s.o),u=new re(s,s.j,u,s.B+1),s.m===null&&(u.H=s.o),a&&(s.i=a.D.concat(s.i)),a=Yi(s,u,1e3),u.I=Math.round(.5*s.wa)+Math.round(.5*s.wa*Math.random()),ls(s.h,u),ss(u,h,a)}function Cn(s,a){s.H&&ct(s.H,function(u,h){Z(a,h,u)}),s.l&&Ni({},function(u,h){Z(a,h,u)})}function Yi(s,a,u){u=Math.min(s.i.length,u);var h=s.l?S(s.l.Na,s.l,s):null;t:{var A=s.i;let R=-1;for(;;){const D=["count="+u];R==-1?0<u?(R=A[0].g,D.push("ofs="+R)):R=0:D.push("ofs="+R);let X=!0;for(let yt=0;yt<u;yt++){let $=A[yt].g;const Et=A[yt].map;if($-=R,0>$)R=Math.max(0,A[yt].g-100),X=!1;else try{eu(Et,D,"req"+$+"_")}catch{h&&h(Et)}}if(X){h=D.join("&");break t}}}return s=s.i.splice(0,u),a.D=s,h}function Xi(s){if(!s.g&&!s.u){s.Y=1;var a=s.Fa;Wt||un(),Ft||(Wt(),Ft=!0),ve.add(a,s),s.v=0}}function hs(s){return s.g||s.u||3<=s.v?!1:(s.Y++,s.u=vn(S(s.Fa,s),to(s,s.v)),s.v++,!0)}r.Fa=function(){if(this.u=null,Ji(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var s=2*this.R;this.j.info("BP detection timer enabled: "+s),this.A=vn(S(this.ab,this),s)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,bt(10),hr(this),Ji(this))};function ds(s){s.A!=null&&(c.clearTimeout(s.A),s.A=null)}function Ji(s){s.g=new re(s,s.j,"rpc",s.Y),s.m===null&&(s.g.H=s.o),s.g.O=0;var a=Xt(s.qa);Z(a,"RID","rpc"),Z(a,"SID",s.K),Z(a,"AID",s.T),Z(a,"CI",s.F?"0":"1"),!s.F&&s.ja&&Z(a,"TO",s.ja),Z(a,"TYPE","xmlhttp"),Cn(s,a),s.m&&s.o&&us(a,s.m,s.o),s.L&&(s.g.I=s.L);var u=s.g;s=s.ia,u.L=1,u.v=ar(Xt(a)),u.m=null,u.P=!0,Si(u,s)}r.Za=function(){this.C!=null&&(this.C=null,hr(this),hs(this),bt(19))};function fr(s){s.C!=null&&(c.clearTimeout(s.C),s.C=null)}function Zi(s,a){var u=null;if(s.g==a){fr(s),ds(s),s.g=null;var h=2}else if(as(s.h,a))u=a.D,Di(s.h,a),h=1;else return;if(s.G!=0){if(a.o)if(h==1){u=a.m?a.m.length:0,a=Date.now()-a.F;var A=s.B;h=er(),mt(h,new Ti(h,u)),dr(s)}else Xi(s);else if(A=a.s,A==3||A==0&&0<a.X||!(h==1&&iu(s,a)||h==2&&hs(s)))switch(u&&0<u.length&&(a=s.h,a.i=a.i.concat(u)),A){case 1:Ae(s,5);break;case 4:Ae(s,10);break;case 3:Ae(s,6);break;default:Ae(s,2)}}}function to(s,a){let u=s.Ta+Math.floor(Math.random()*s.cb);return s.isActive()||(u*=2),u*a}function Ae(s,a){if(s.j.info("Error code "+a),a==2){var u=S(s.fb,s),h=s.Xa;const A=!h;h=new Ie(h||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||ir(h,"https"),ar(h),A?Jl(h.toString(),u):Zl(h.toString(),u)}else bt(2);s.G=0,s.l&&s.l.sa(a),eo(s),Qi(s)}r.fb=function(s){s?(this.j.info("Successfully pinged google.com"),bt(2)):(this.j.info("Failed to ping google.com"),bt(1))};function eo(s){if(s.G=0,s.ka=[],s.l){const a=ki(s.h);(a.length!=0||s.i.length!=0)&&(M(s.ka,a),M(s.ka,s.i),s.h.i.length=0,U(s.i),s.i.length=0),s.l.ra()}}function no(s,a,u){var h=u instanceof Ie?Xt(u):new Ie(u);if(h.g!="")a&&(h.g=a+"."+h.g),or(h,h.s);else{var A=c.location;h=A.protocol,a=a?a+"."+A.hostname:A.hostname,A=+A.port;var R=new Ie(null);h&&ir(R,h),a&&(R.g=a),A&&or(R,A),u&&(R.l=u),h=R}return u=s.D,a=s.ya,u&&a&&Z(h,u,a),Z(h,"VER",s.la),Cn(s,h),h}function ro(s,a,u){if(a&&!s.J)throw Error("Can't create secondary domain capable XhrIo object.");return a=s.Ca&&!s.pa?new rt(new lr({eb:u})):new rt(s.pa),a.Ha(s.J),a}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function so(){}r=so.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function gr(){}gr.prototype.g=function(s,a){return new Vt(s,a)};function Vt(s,a){gt.call(this),this.g=new Wi(a),this.l=s,this.h=a&&a.messageUrlParams||null,s=a&&a.messageHeaders||null,a&&a.clientProtocolHeaderRequired&&(s?s["X-Client-Protocol"]="webchannel":s={"X-Client-Protocol":"webchannel"}),this.g.o=s,s=a&&a.initMessageHeaders||null,a&&a.messageContentType&&(s?s["X-WebChannel-Content-Type"]=a.messageContentType:s={"X-WebChannel-Content-Type":a.messageContentType}),a&&a.va&&(s?s["X-WebChannel-Client-Profile"]=a.va:s={"X-WebChannel-Client-Profile":a.va}),this.g.S=s,(s=a&&a.Sb)&&!G(s)&&(this.g.m=s),this.v=a&&a.supportsCrossDomainXhr||!1,this.u=a&&a.sendRawJson||!1,(a=a&&a.httpSessionIdParam)&&!G(a)&&(this.g.D=a,s=this.h,s!==null&&a in s&&(s=this.h,a in s&&delete s[a])),this.j=new Fe(this)}L(Vt,gt),Vt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Vt.prototype.close=function(){cs(this.g)},Vt.prototype.o=function(s){var a=this.g;if(typeof s=="string"){var u={};u.__data__=s,s=u}else this.u&&(u={},u.__data__=kt(s),s=u);a.i.push(new ql(a.Ya++,s)),a.G==3&&dr(a)},Vt.prototype.N=function(){this.g.l=null,delete this.j,cs(this.g),delete this.g,Vt.aa.N.call(this)};function io(s){ne.call(this),s.__headers__&&(this.headers=s.__headers__,this.statusCode=s.__status__,delete s.__headers__,delete s.__status__);var a=s.__sm__;if(a){t:{for(const u in a){s=u;break t}s=void 0}(this.i=s)&&(s=this.i,a=a!==null&&s in a?a[s]:void 0),this.data=a}else this.data=s}L(io,ne);function oo(){es.call(this),this.status=1}L(oo,es);function Fe(s){this.g=s}L(Fe,so),Fe.prototype.ua=function(){mt(this.g,"a")},Fe.prototype.ta=function(s){mt(this.g,new io(s))},Fe.prototype.sa=function(s){mt(this.g,new oo)},Fe.prototype.ra=function(){mt(this.g,"b")},gr.prototype.createWebChannel=gr.prototype.g,Vt.prototype.send=Vt.prototype.o,Vt.prototype.open=Vt.prototype.m,Vt.prototype.close=Vt.prototype.close,Na=function(){return new gr},ka=function(){return er()},Da=Ee,Ps={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},nr.NO_ERROR=0,nr.TIMEOUT=8,nr.HTTP_ERROR=6,Ar=nr,Ii.COMPLETE="complete",Va=Ii,tr.EventType=Yt,Yt.OPEN="a",Yt.CLOSE="b",Yt.ERROR="c",Yt.MESSAGE="d",gt.prototype.listen=gt.prototype.K,Pn=tr,rt.prototype.listenOnce=rt.prototype.L,rt.prototype.getLastError=rt.prototype.Ka,rt.prototype.getLastErrorCode=rt.prototype.Ba,rt.prototype.getStatus=rt.prototype.Z,rt.prototype.getResponseJson=rt.prototype.Oa,rt.prototype.getResponseText=rt.prototype.oa,rt.prototype.send=rt.prototype.ea,rt.prototype.setWithCredentials=rt.prototype.Ha,Pa=rt}).apply(typeof mr<"u"?mr:typeof self<"u"?self:typeof window<"u"?window:{});const To="@firebase/firestore",Io="4.9.0";/**
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
 */class wt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}wt.UNAUTHENTICATED=new wt(null),wt.GOOGLE_CREDENTIALS=new wt("google-credentials-uid"),wt.FIRST_PARTY=new wt("first-party-uid"),wt.MOCK_USER=new wt("mock-user");/**
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
 */let sn="12.0.0";/**
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
 */const Ce=new Ia("@firebase/firestore");function Be(){return Ce.logLevel}function O(r,...t){if(Ce.logLevel<=K.DEBUG){const e=t.map(Xs);Ce.debug(`Firestore (${sn}): ${r}`,...e)}}function te(r,...t){if(Ce.logLevel<=K.ERROR){const e=t.map(Xs);Ce.error(`Firestore (${sn}): ${r}`,...e)}}function Ye(r,...t){if(Ce.logLevel<=K.WARN){const e=t.map(Xs);Ce.warn(`Firestore (${sn}): ${r}`,...e)}}function Xs(r){if(typeof r=="string")return r;try{/**
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
 */function q(r,t,e){let n="Unexpected state";typeof t=="string"?n=t:e=t,Oa(r,n,e)}function Oa(r,t,e){let n=`FIRESTORE (${sn}) INTERNAL ASSERTION FAILED: ${t} (ID: ${r.toString(16)})`;if(e!==void 0)try{n+=" CONTEXT: "+JSON.stringify(e)}catch{n+=" CONTEXT: "+e}throw te(n),new Error(n)}function et(r,t,e,n){let i="Unexpected state";typeof e=="string"?i=e:n=e,r||Oa(t,i,n)}function W(r,t){return r}/**
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
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class F extends rn{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Re{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
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
 */class La{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class $c{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(wt.UNAUTHENTICATED))}shutdown(){}}class Yc{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class Xc{constructor(t){this.t=t,this.currentUser=wt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){et(this.o===void 0,42304);let n=this.i;const i=d=>this.i!==n?(n=this.i,e(d)):Promise.resolve();let o=new Re;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Re,t.enqueueRetryable(()=>i(this.currentUser))};const l=()=>{const d=o;t.enqueueRetryable(async()=>{await d.promise,await i(this.currentUser)})},c=d=>{O("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=d,this.o&&(this.auth.addAuthTokenListener(this.o),l())};this.t.onInit(d=>c(d)),setTimeout(()=>{if(!this.auth){const d=this.t.getImmediate({optional:!0});d?c(d):(O("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Re)}},0),l()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(n=>this.i!==t?(O("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(et(typeof n.accessToken=="string",31837,{l:n}),new La(n.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return et(t===null||typeof t=="string",2055,{h:t}),new wt(t)}}class Jc{constructor(t,e,n){this.P=t,this.T=e,this.I=n,this.type="FirstParty",this.user=wt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Zc{constructor(t,e,n){this.P=t,this.T=e,this.I=n}getToken(){return Promise.resolve(new Jc(this.P,this.T,this.I))}start(t,e){t.enqueueRetryable(()=>e(wt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Ao{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class th{constructor(t,e){this.V=e,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Oc(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,e){et(this.o===void 0,3512);const n=o=>{o.error!=null&&O("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const l=o.token!==this.m;return this.m=o.token,O("FirebaseAppCheckTokenProvider",`Received ${l?"new":"existing"} token.`),l?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>n(o))};const i=o=>{O("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?i(o):O("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Ao(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(et(typeof e.token=="string",44558,{tokenResult:e}),this.m=e.token,new Ao(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function eh(r){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(r);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let n=0;n<r;n++)e[n]=Math.floor(256*Math.random());return e}/**
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
 */class Ma{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let n="";for(;n.length<20;){const i=eh(40);for(let o=0;o<i.length;++o)n.length<20&&i[o]<e&&(n+=t.charAt(i[o]%62))}return n}}function z(r,t){return r<t?-1:r>t?1:0}function Vs(r,t){const e=Math.min(r.length,t.length);for(let n=0;n<e;n++){const i=r.charAt(n),o=t.charAt(n);if(i!==o)return _s(i)===_s(o)?z(i,o):_s(i)?1:-1}return z(r.length,t.length)}const nh=55296,rh=57343;function _s(r){const t=r.charCodeAt(0);return t>=nh&&t<=rh}function Xe(r,t,e){return r.length===t.length&&r.every((n,i)=>e(n,t[i]))}/**
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
 */const wo="__name__";class jt{constructor(t,e,n){e===void 0?e=0:e>t.length&&q(637,{offset:e,range:t.length}),n===void 0?n=t.length-e:n>t.length-e&&q(1746,{length:n,range:t.length-e}),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return jt.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof jt?t.forEach(n=>{e.push(n)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let i=0;i<n;i++){const o=jt.compareSegments(t.get(i),e.get(i));if(o!==0)return o}return z(t.length,e.length)}static compareSegments(t,e){const n=jt.isNumericId(t),i=jt.isNumericId(e);return n&&!i?-1:!n&&i?1:n&&i?jt.extractNumericId(t).compare(jt.extractNumericId(e)):Vs(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return ce.fromString(t.substring(4,t.length-2))}}class tt extends jt{construct(t,e,n){return new tt(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new F(V.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter(i=>i.length>0))}return new tt(e)}static emptyPath(){return new tt([])}}const sh=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ct extends jt{construct(t,e,n){return new Ct(t,e,n)}static isValidIdentifier(t){return sh.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ct.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===wo}static keyField(){return new Ct([wo])}static fromServerFormat(t){const e=[];let n="",i=0;const o=()=>{if(n.length===0)throw new F(V.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let l=!1;for(;i<t.length;){const c=t[i];if(c==="\\"){if(i+1===t.length)throw new F(V.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const d=t[i+1];if(d!=="\\"&&d!=="."&&d!=="`")throw new F(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=d,i+=2}else c==="`"?(l=!l,i++):c!=="."||l?(n+=c,i++):(o(),i++)}if(o(),l)throw new F(V.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Ct(e)}static emptyPath(){return new Ct([])}}/**
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
 */class B{constructor(t){this.path=t}static fromPath(t){return new B(tt.fromString(t))}static fromName(t){return new B(tt.fromString(t).popFirst(5))}static empty(){return new B(tt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&tt.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return tt.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new B(new tt(t.slice()))}}/**
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
 */function ih(r,t,e){if(!e)throw new F(V.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${t}.`)}function oh(r,t,e,n){if(t===!0&&n===!0)throw new F(V.INVALID_ARGUMENT,`${r} and ${e} cannot be used together.`)}function So(r){if(B.isDocumentKey(r))throw new F(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function ah(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function lh(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(r);return t?`a custom ${t} object`:"an object"}}return typeof r=="function"?"a function":q(12329,{type:typeof r})}function Ds(r,t){if("_delegate"in r&&(r=r._delegate),!(r instanceof t)){if(t.name===r.constructor.name)throw new F(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=lh(r);throw new F(V.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return r}/**
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
 */function ut(r,t){const e={typeString:r};return t&&(e.value=t),e}function Gn(r,t){if(!ah(r))throw new F(V.INVALID_ARGUMENT,"JSON must be an object");let e;for(const n in t)if(t[n]){const i=t[n].typeString,o="value"in t[n]?{value:t[n].value}:void 0;if(!(n in r)){e=`JSON missing required field: '${n}'`;break}const l=r[n];if(i&&typeof l!==i){e=`JSON field '${n}' must be a ${i}.`;break}if(o!==void 0&&l!==o.value){e=`Expected '${n}' field to equal '${o.value}'`;break}}if(e)throw new F(V.INVALID_ARGUMENT,e);return!0}/**
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
 */const Ro=-62135596800,bo=1e6;class lt{static now(){return lt.fromMillis(Date.now())}static fromDate(t){return lt.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor((t-1e3*e)*bo);return new lt(e,n)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new F(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new F(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<Ro)throw new F(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new F(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/bo}_compareTo(t){return this.seconds===t.seconds?z(this.nanoseconds,t.nanoseconds):z(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:lt._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(Gn(t,lt._jsonSchema))return new lt(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-Ro;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}lt._jsonSchemaVersion="firestore/timestamp/1.0",lt._jsonSchema={type:ut("string",lt._jsonSchemaVersion),seconds:ut("number"),nanoseconds:ut("number")};/**
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
 */class j{static fromTimestamp(t){return new j(t)}static min(){return new j(new lt(0,0))}static max(){return new j(new lt(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Un=-1;function uh(r,t){const e=r.toTimestamp().seconds,n=r.toTimestamp().nanoseconds+1,i=j.fromTimestamp(n===1e9?new lt(e+1,0):new lt(e,n));return new fe(i,B.empty(),t)}function ch(r){return new fe(r.readTime,r.key,Un)}class fe{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new fe(j.min(),B.empty(),Un)}static max(){return new fe(j.max(),B.empty(),Un)}}function hh(r,t){let e=r.readTime.compareTo(t.readTime);return e!==0?e:(e=B.comparator(r.documentKey,t.documentKey),e!==0?e:z(r.largestBatchId,t.largestBatchId))}/**
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
 */const dh="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class fh{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function Br(r){if(r.code!==V.FAILED_PRECONDITION||r.message!==dh)throw r;O("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class b{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&q(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new b((n,i)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(n,i)},this.catchCallback=o=>{this.wrapFailure(e,o).next(n,i)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof b?e:b.resolve(e)}catch(e){return b.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):b.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):b.reject(e)}static resolve(t){return new b((e,n)=>{e(t)})}static reject(t){return new b((e,n)=>{n(t)})}static waitFor(t){return new b((e,n)=>{let i=0,o=0,l=!1;t.forEach(c=>{++i,c.next(()=>{++o,l&&o===i&&e()},d=>n(d))}),l=!0,o===i&&e()})}static or(t){let e=b.resolve(!1);for(const n of t)e=e.next(i=>i?b.resolve(i):n());return e}static forEach(t,e){const n=[];return t.forEach((i,o)=>{n.push(e.call(this,i,o))}),this.waitFor(n)}static mapArray(t,e){return new b((n,i)=>{const o=t.length,l=new Array(o);let c=0;for(let d=0;d<o;d++){const f=d;e(t[f]).next(_=>{l[f]=_,++c,c===o&&n(l)},_=>i(_))}})}static doWhile(t,e){return new b((n,i)=>{const o=()=>{t()===!0?e().next(()=>{o()},i):n()};o()})}}function gh(r){const t=r.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function on(r){return r.name==="IndexedDbTransactionError"}/**
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
 */class jr{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=n=>this.ae(n),this.ue=n=>e.writeSequenceNumber(n))}ae(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ue&&this.ue(t),t}}jr.ce=-1;/**
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
 */const ph=-1;function qr(r){return r==null}function ks(r){return r===0&&1/r==-1/0}/**
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
 */const xa="";function mh(r){let t="";for(let e=0;e<r.length;e++)t.length>0&&(t=Co(t)),t=yh(r.get(e),t);return Co(t)}function yh(r,t){let e=t;const n=r.length;for(let i=0;i<n;i++){const o=r.charAt(i);switch(o){case"\0":e+="";break;case xa:e+="";break;default:e+=o}}return e}function Co(r){return r+xa+""}/**
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
 */function Po(r){let t=0;for(const e in r)Object.prototype.hasOwnProperty.call(r,e)&&t++;return t}function zn(r,t){for(const e in r)Object.prototype.hasOwnProperty.call(r,e)&&t(e,r[e])}function _h(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}/**
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
 */class ot{constructor(t,e){this.comparator=t,this.root=e||_t.EMPTY}insert(t,e){return new ot(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,_t.BLACK,null,null))}remove(t){return new ot(this.comparator,this.root.remove(t,this.comparator).copy(null,null,_t.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(n===0)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(t,n.key);if(i===0)return e+n.left.size;i<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,n)=>(t(e,n),!1))}toString(){const t=[];return this.inorderTraversal((e,n)=>(t.push(`${e}:${n}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new yr(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new yr(this.root,t,this.comparator,!1)}getReverseIterator(){return new yr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new yr(this.root,t,this.comparator,!0)}}class yr{constructor(t,e,n,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?n(t.key,e):1,e&&i&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class _t{constructor(t,e,n,i,o){this.key=t,this.value=e,this.color=n??_t.RED,this.left=i??_t.EMPTY,this.right=o??_t.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,i,o){return new _t(t??this.key,e??this.value,n??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let i=this;const o=n(t,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(t,e,n),null):o===0?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return _t.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),e(t,i.key)===0){if(i.right.isEmpty())return _t.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,_t.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,_t.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw q(43730,{key:this.key,value:this.value});if(this.right.isRed())throw q(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw q(27949);return t+(this.isRed()?0:1)}}_t.EMPTY=null,_t.RED=!0,_t.BLACK=!1;_t.EMPTY=new class{constructor(){this.size=0}get key(){throw q(57766)}get value(){throw q(16141)}get color(){throw q(16727)}get left(){throw q(29726)}get right(){throw q(36894)}copy(t,e,n,i,o){return this}insert(t,e,n){return new _t(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ft{constructor(t){this.comparator=t,this.data=new ot(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,n)=>(t(e),!1))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let n;for(n=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Vo(this.data.getIterator())}getIteratorFrom(t){return new Vo(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(n=>{e=e.add(n)}),e}isEqual(t){if(!(t instanceof ft)||this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=n.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new ft(this.comparator);return e.data=t,e}}class Vo{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class oe{constructor(t){this.fields=t,t.sort(Ct.comparator)}static empty(){return new oe([])}unionWith(t){let e=new ft(Ct.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new oe(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Xe(this.fields,t.fields,(e,n)=>e.isEqual(n))}}/**
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
 */class Fa extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class vt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new Fa("Invalid base64 string: "+o):o}}(t);return new vt(e)}static fromUint8Array(t){const e=function(i){let o="";for(let l=0;l<i.length;++l)o+=String.fromCharCode(i[l]);return o}(t);return new vt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let i=0;i<e.length;i++)n[i]=e.charCodeAt(i);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return z(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}vt.EMPTY_BYTE_STRING=new vt("");const vh=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ge(r){if(et(!!r,39018),typeof r=="string"){let t=0;const e=vh.exec(r);if(et(!!e,46558,{timestamp:r}),e[1]){let i=e[1];i=(i+"000000000").substr(0,9),t=Number(i)}const n=new Date(r);return{seconds:Math.floor(n.getTime()/1e3),nanos:t}}return{seconds:it(r.seconds),nanos:it(r.nanos)}}function it(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function pe(r){return typeof r=="string"?vt.fromBase64String(r):vt.fromUint8Array(r)}/**
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
 */const Ua="server_timestamp",Ba="__type__",ja="__previous_value__",qa="__local_write_time__";function Js(r){var e,n;return((n=(((e=r==null?void 0:r.mapValue)==null?void 0:e.fields)||{})[Ba])==null?void 0:n.stringValue)===Ua}function Gr(r){const t=r.mapValue.fields[ja];return Js(t)?Gr(t):t}function Bn(r){const t=ge(r.mapValue.fields[qa].timestampValue);return new lt(t.seconds,t.nanos)}/**
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
 */class Eh{constructor(t,e,n,i,o,l,c,d,f,_){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=i,this.ssl=o,this.forceLongPolling=l,this.autoDetectLongPolling=c,this.longPollingOptions=d,this.useFetchStreams=f,this.isUsingEmulator=_}}const Nr="(default)";class jn{constructor(t,e){this.projectId=t,this.database=e||Nr}static empty(){return new jn("","")}get isDefaultDatabase(){return this.database===Nr}isEqual(t){return t instanceof jn&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const Th="__type__",Ih="__max__",_r={mapValue:{}},Ah="__vector__",Ns="value";function me(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?Js(r)?4:Sh(r)?9007199254740991:wh(r)?10:11:q(28295,{value:r})}function Ht(r,t){if(r===t)return!0;const e=me(r);if(e!==me(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===t.booleanValue;case 4:return Bn(r).isEqual(Bn(t));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const l=ge(i.timestampValue),c=ge(o.timestampValue);return l.seconds===c.seconds&&l.nanos===c.nanos}(r,t);case 5:return r.stringValue===t.stringValue;case 6:return function(i,o){return pe(i.bytesValue).isEqual(pe(o.bytesValue))}(r,t);case 7:return r.referenceValue===t.referenceValue;case 8:return function(i,o){return it(i.geoPointValue.latitude)===it(o.geoPointValue.latitude)&&it(i.geoPointValue.longitude)===it(o.geoPointValue.longitude)}(r,t);case 2:return function(i,o){if("integerValue"in i&&"integerValue"in o)return it(i.integerValue)===it(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const l=it(i.doubleValue),c=it(o.doubleValue);return l===c?ks(l)===ks(c):isNaN(l)&&isNaN(c)}return!1}(r,t);case 9:return Xe(r.arrayValue.values||[],t.arrayValue.values||[],Ht);case 10:case 11:return function(i,o){const l=i.mapValue.fields||{},c=o.mapValue.fields||{};if(Po(l)!==Po(c))return!1;for(const d in l)if(l.hasOwnProperty(d)&&(c[d]===void 0||!Ht(l[d],c[d])))return!1;return!0}(r,t);default:return q(52216,{left:r})}}function qn(r,t){return(r.values||[]).find(e=>Ht(e,t))!==void 0}function Je(r,t){if(r===t)return 0;const e=me(r),n=me(t);if(e!==n)return z(e,n);switch(e){case 0:case 9007199254740991:return 0;case 1:return z(r.booleanValue,t.booleanValue);case 2:return function(o,l){const c=it(o.integerValue||o.doubleValue),d=it(l.integerValue||l.doubleValue);return c<d?-1:c>d?1:c===d?0:isNaN(c)?isNaN(d)?0:-1:1}(r,t);case 3:return Do(r.timestampValue,t.timestampValue);case 4:return Do(Bn(r),Bn(t));case 5:return Vs(r.stringValue,t.stringValue);case 6:return function(o,l){const c=pe(o),d=pe(l);return c.compareTo(d)}(r.bytesValue,t.bytesValue);case 7:return function(o,l){const c=o.split("/"),d=l.split("/");for(let f=0;f<c.length&&f<d.length;f++){const _=z(c[f],d[f]);if(_!==0)return _}return z(c.length,d.length)}(r.referenceValue,t.referenceValue);case 8:return function(o,l){const c=z(it(o.latitude),it(l.latitude));return c!==0?c:z(it(o.longitude),it(l.longitude))}(r.geoPointValue,t.geoPointValue);case 9:return ko(r.arrayValue,t.arrayValue);case 10:return function(o,l){var S,C,L,U;const c=o.fields||{},d=l.fields||{},f=(S=c[Ns])==null?void 0:S.arrayValue,_=(C=d[Ns])==null?void 0:C.arrayValue,w=z(((L=f==null?void 0:f.values)==null?void 0:L.length)||0,((U=_==null?void 0:_.values)==null?void 0:U.length)||0);return w!==0?w:ko(f,_)}(r.mapValue,t.mapValue);case 11:return function(o,l){if(o===_r.mapValue&&l===_r.mapValue)return 0;if(o===_r.mapValue)return 1;if(l===_r.mapValue)return-1;const c=o.fields||{},d=Object.keys(c),f=l.fields||{},_=Object.keys(f);d.sort(),_.sort();for(let w=0;w<d.length&&w<_.length;++w){const S=Vs(d[w],_[w]);if(S!==0)return S;const C=Je(c[d[w]],f[_[w]]);if(C!==0)return C}return z(d.length,_.length)}(r.mapValue,t.mapValue);default:throw q(23264,{he:e})}}function Do(r,t){if(typeof r=="string"&&typeof t=="string"&&r.length===t.length)return z(r,t);const e=ge(r),n=ge(t),i=z(e.seconds,n.seconds);return i!==0?i:z(e.nanos,n.nanos)}function ko(r,t){const e=r.values||[],n=t.values||[];for(let i=0;i<e.length&&i<n.length;++i){const o=Je(e[i],n[i]);if(o)return o}return z(e.length,n.length)}function Ze(r){return Os(r)}function Os(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(e){const n=ge(e);return`time(${n.seconds},${n.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(e){return pe(e).toBase64()}(r.bytesValue):"referenceValue"in r?function(e){return B.fromName(e).toString()}(r.referenceValue):"geoPointValue"in r?function(e){return`geo(${e.latitude},${e.longitude})`}(r.geoPointValue):"arrayValue"in r?function(e){let n="[",i=!0;for(const o of e.values||[])i?i=!1:n+=",",n+=Os(o);return n+"]"}(r.arrayValue):"mapValue"in r?function(e){const n=Object.keys(e.fields||{}).sort();let i="{",o=!0;for(const l of n)o?o=!1:i+=",",i+=`${l}:${Os(e.fields[l])}`;return i+"}"}(r.mapValue):q(61005,{value:r})}function wr(r){switch(me(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=Gr(r);return t?16+wr(t):16;case 5:return 2*r.stringValue.length;case 6:return pe(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return function(n){return(n.values||[]).reduce((i,o)=>i+wr(o),0)}(r.arrayValue);case 10:case 11:return function(n){let i=0;return zn(n.fields,(o,l)=>{i+=o.length+wr(l)}),i}(r.mapValue);default:throw q(13486,{value:r})}}function Ls(r){return!!r&&"integerValue"in r}function Zs(r){return!!r&&"arrayValue"in r}function No(r){return!!r&&"nullValue"in r}function Oo(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function vs(r){return!!r&&"mapValue"in r}function wh(r){var e,n;return((n=(((e=r==null?void 0:r.mapValue)==null?void 0:e.fields)||{})[Th])==null?void 0:n.stringValue)===Ah}function Nn(r){if(r.geoPointValue)return{geoPointValue:{...r.geoPointValue}};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:{...r.timestampValue}};if(r.mapValue){const t={mapValue:{fields:{}}};return zn(r.mapValue.fields,(e,n)=>t.mapValue.fields[e]=Nn(n)),t}if(r.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(r.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=Nn(r.arrayValue.values[e]);return t}return{...r}}function Sh(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===Ih}/**
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
 */class qt{constructor(t){this.value=t}static empty(){return new qt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!vs(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Nn(e)}setAll(t){let e=Ct.emptyPath(),n={},i=[];t.forEach((l,c)=>{if(!e.isImmediateParentOf(c)){const d=this.getFieldsMap(e);this.applyChanges(d,n,i),n={},i=[],e=c.popLast()}l?n[c.lastSegment()]=Nn(l):i.push(c.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,n,i)}delete(t){const e=this.field(t.popLast());vs(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Ht(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let i=e.mapValue.fields[t.get(n)];vs(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,n){zn(e,(i,o)=>t[i]=o);for(const i of n)delete t[i]}clone(){return new qt(Nn(this.value))}}/**
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
 */class St{constructor(t,e,n,i,o,l,c){this.key=t,this.documentType=e,this.version=n,this.readTime=i,this.createTime=o,this.data=l,this.documentState=c}static newInvalidDocument(t){return new St(t,0,j.min(),j.min(),j.min(),qt.empty(),0)}static newFoundDocument(t,e,n,i){return new St(t,1,e,j.min(),n,i,0)}static newNoDocument(t,e){return new St(t,2,e,j.min(),j.min(),qt.empty(),0)}static newUnknownDocument(t,e){return new St(t,3,e,j.min(),j.min(),qt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(j.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=qt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=qt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=j.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof St&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new St(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Or{constructor(t,e){this.position=t,this.inclusive=e}}function Lo(r,t,e){let n=0;for(let i=0;i<r.position.length;i++){const o=t[i],l=r.position[i];if(o.field.isKeyField()?n=B.comparator(B.fromName(l.referenceValue),e.key):n=Je(l,e.data.field(o.field)),o.dir==="desc"&&(n*=-1),n!==0)break}return n}function Mo(r,t){if(r===null)return t===null;if(t===null||r.inclusive!==t.inclusive||r.position.length!==t.position.length)return!1;for(let e=0;e<r.position.length;e++)if(!Ht(r.position[e],t.position[e]))return!1;return!0}/**
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
 */class Lr{constructor(t,e="asc"){this.field=t,this.dir=e}}function Rh(r,t){return r.dir===t.dir&&r.field.isEqual(t.field)}/**
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
 */class Ga{}class dt extends Ga{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,n):new Ch(t,e,n):e==="array-contains"?new Dh(t,n):e==="in"?new kh(t,n):e==="not-in"?new Nh(t,n):e==="array-contains-any"?new Oh(t,n):new dt(t,e,n)}static createKeyFieldInFilter(t,e,n){return e==="in"?new Ph(t,n):new Vh(t,n)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&e.nullValue===void 0&&this.matchesComparison(Je(e,this.value)):e!==null&&me(this.value)===me(e)&&this.matchesComparison(Je(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return q(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Kt extends Ga{constructor(t,e){super(),this.filters=t,this.op=e,this.Pe=null}static create(t,e){return new Kt(t,e)}matches(t){return za(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function za(r){return r.op==="and"}function Ha(r){return bh(r)&&za(r)}function bh(r){for(const t of r.filters)if(t instanceof Kt)return!1;return!0}function Ms(r){if(r instanceof dt)return r.field.canonicalString()+r.op.toString()+Ze(r.value);if(Ha(r))return r.filters.map(t=>Ms(t)).join(",");{const t=r.filters.map(e=>Ms(e)).join(",");return`${r.op}(${t})`}}function Ka(r,t){return r instanceof dt?function(n,i){return i instanceof dt&&n.op===i.op&&n.field.isEqual(i.field)&&Ht(n.value,i.value)}(r,t):r instanceof Kt?function(n,i){return i instanceof Kt&&n.op===i.op&&n.filters.length===i.filters.length?n.filters.reduce((o,l,c)=>o&&Ka(l,i.filters[c]),!0):!1}(r,t):void q(19439)}function Wa(r){return r instanceof dt?function(e){return`${e.field.canonicalString()} ${e.op} ${Ze(e.value)}`}(r):r instanceof Kt?function(e){return e.op.toString()+" {"+e.getFilters().map(Wa).join(" ,")+"}"}(r):"Filter"}class Ch extends dt{constructor(t,e,n){super(t,e,n),this.key=B.fromName(n.referenceValue)}matches(t){const e=B.comparator(t.key,this.key);return this.matchesComparison(e)}}class Ph extends dt{constructor(t,e){super(t,"in",e),this.keys=Qa("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class Vh extends dt{constructor(t,e){super(t,"not-in",e),this.keys=Qa("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function Qa(r,t){var e;return(((e=t.arrayValue)==null?void 0:e.values)||[]).map(n=>B.fromName(n.referenceValue))}class Dh extends dt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Zs(e)&&qn(e.arrayValue,this.value)}}class kh extends dt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&qn(this.value.arrayValue,e)}}class Nh extends dt{constructor(t,e){super(t,"not-in",e)}matches(t){if(qn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&e.nullValue===void 0&&!qn(this.value.arrayValue,e)}}class Oh extends dt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Zs(e)||!e.arrayValue.values)&&e.arrayValue.values.some(n=>qn(this.value.arrayValue,n))}}/**
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
 */class Lh{constructor(t,e=null,n=[],i=[],o=null,l=null,c=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=i,this.limit=o,this.startAt=l,this.endAt=c,this.Te=null}}function xo(r,t=null,e=[],n=[],i=null,o=null,l=null){return new Lh(r,t,e,n,i,o,l)}function ti(r){const t=W(r);if(t.Te===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(n=>Ms(n)).join(","),e+="|ob:",e+=t.orderBy.map(n=>function(o){return o.field.canonicalString()+o.dir}(n)).join(","),qr(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>Ze(n)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>Ze(n)).join(",")),t.Te=e}return t.Te}function ei(r,t){if(r.limit!==t.limit||r.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<r.orderBy.length;e++)if(!Rh(r.orderBy[e],t.orderBy[e]))return!1;if(r.filters.length!==t.filters.length)return!1;for(let e=0;e<r.filters.length;e++)if(!Ka(r.filters[e],t.filters[e]))return!1;return r.collectionGroup===t.collectionGroup&&!!r.path.isEqual(t.path)&&!!Mo(r.startAt,t.startAt)&&Mo(r.endAt,t.endAt)}function xs(r){return B.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
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
 */class zr{constructor(t,e=null,n=[],i=[],o=null,l="F",c=null,d=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=i,this.limit=o,this.limitType=l,this.startAt=c,this.endAt=d,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function Mh(r,t,e,n,i,o,l,c){return new zr(r,t,e,n,i,o,l,c)}function $a(r){return new zr(r)}function Fo(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function xh(r){return r.collectionGroup!==null}function On(r){const t=W(r);if(t.Ie===null){t.Ie=[];const e=new Set;for(const o of t.explicitOrderBy)t.Ie.push(o),e.add(o.field.canonicalString());const n=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(l){let c=new ft(Ct.comparator);return l.filters.forEach(d=>{d.getFlattenedFilters().forEach(f=>{f.isInequality()&&(c=c.add(f.field))})}),c})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.Ie.push(new Lr(o,n))}),e.has(Ct.keyField().canonicalString())||t.Ie.push(new Lr(Ct.keyField(),n))}return t.Ie}function zt(r){const t=W(r);return t.Ee||(t.Ee=Fh(t,On(r))),t.Ee}function Fh(r,t){if(r.limitType==="F")return xo(r.path,r.collectionGroup,t,r.filters,r.limit,r.startAt,r.endAt);{t=t.map(i=>{const o=i.dir==="desc"?"asc":"desc";return new Lr(i.field,o)});const e=r.endAt?new Or(r.endAt.position,r.endAt.inclusive):null,n=r.startAt?new Or(r.startAt.position,r.startAt.inclusive):null;return xo(r.path,r.collectionGroup,t,r.filters,r.limit,e,n)}}function Fs(r,t,e){return new zr(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),t,e,r.startAt,r.endAt)}function Hr(r,t){return ei(zt(r),zt(t))&&r.limitType===t.limitType}function Ya(r){return`${ti(zt(r))}|lt:${r.limitType}`}function je(r){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(i=>Wa(i)).join(", ")}]`),qr(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(i=>function(l){return`${l.field.canonicalString()} (${l.dir})`}(i)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(i=>Ze(i)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(i=>Ze(i)).join(",")),`Target(${n})`}(zt(r))}; limitType=${r.limitType})`}function Kr(r,t){return t.isFoundDocument()&&function(n,i){const o=i.key.path;return n.collectionGroup!==null?i.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(o):B.isDocumentKey(n.path)?n.path.isEqual(o):n.path.isImmediateParentOf(o)}(r,t)&&function(n,i){for(const o of On(n))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0}(r,t)&&function(n,i){for(const o of n.filters)if(!o.matches(i))return!1;return!0}(r,t)&&function(n,i){return!(n.startAt&&!function(l,c,d){const f=Lo(l,c,d);return l.inclusive?f<=0:f<0}(n.startAt,On(n),i)||n.endAt&&!function(l,c,d){const f=Lo(l,c,d);return l.inclusive?f>=0:f>0}(n.endAt,On(n),i))}(r,t)}function Uh(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function Xa(r){return(t,e)=>{let n=!1;for(const i of On(r)){const o=Bh(i,t,e);if(o!==0)return o;n=n||i.field.isKeyField()}return 0}}function Bh(r,t,e){const n=r.field.isKeyField()?B.comparator(t.key,e.key):function(o,l,c){const d=l.data.field(o),f=c.data.field(o);return d!==null&&f!==null?Je(d,f):q(42886)}(r.field,t,e);switch(r.dir){case"asc":return n;case"desc":return-1*n;default:return q(19790,{direction:r.dir})}}/**
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
 */class Pe{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n!==void 0){for(const[i,o]of n)if(this.equalsFn(i,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const n=this.mapKeyFn(t),i=this.inner[n];if(i===void 0)return this.inner[n]=[[t,e]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],t))return void(i[o]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n===void 0)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],t))return n.length===1?delete this.inner[e]:n.splice(i,1),this.innerSize--,!0;return!1}forEach(t){zn(this.inner,(e,n)=>{for(const[i,o]of n)t(i,o)})}isEmpty(){return _h(this.inner)}size(){return this.innerSize}}/**
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
 */const jh=new ot(B.comparator);function ye(){return jh}const Ja=new ot(B.comparator);function Vn(...r){let t=Ja;for(const e of r)t=t.insert(e.key,e);return t}function qh(r){let t=Ja;return r.forEach((e,n)=>t=t.insert(e,n.overlayedDocument)),t}function Se(){return Ln()}function Za(){return Ln()}function Ln(){return new Pe(r=>r.toString(),(r,t)=>r.isEqual(t))}const Gh=new ft(B.comparator);function Q(...r){let t=Gh;for(const e of r)t=t.add(e);return t}const zh=new ft(z);function Hh(){return zh}/**
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
 */function Kh(r,t){if(r.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ks(t)?"-0":t}}function Wh(r){return{integerValue:""+r}}/**
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
 */class Wr{constructor(){this._=void 0}}function Qh(r,t,e){return r instanceof Us?function(i,o){const l={fields:{[Ba]:{stringValue:Ua},[qa]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&Js(o)&&(o=Gr(o)),o&&(l.fields[ja]=o),{mapValue:l}}(e,t):r instanceof Mr?tl(r,t):r instanceof xr?el(r,t):function(i,o){const l=Yh(i,o),c=Uo(l)+Uo(i.Ae);return Ls(l)&&Ls(i.Ae)?Wh(c):Kh(i.serializer,c)}(r,t)}function $h(r,t,e){return r instanceof Mr?tl(r,t):r instanceof xr?el(r,t):e}function Yh(r,t){return r instanceof Bs?function(n){return Ls(n)||function(o){return!!o&&"doubleValue"in o}(n)}(t)?t:{integerValue:0}:null}class Us extends Wr{}class Mr extends Wr{constructor(t){super(),this.elements=t}}function tl(r,t){const e=nl(t);for(const n of r.elements)e.some(i=>Ht(i,n))||e.push(n);return{arrayValue:{values:e}}}class xr extends Wr{constructor(t){super(),this.elements=t}}function el(r,t){let e=nl(t);for(const n of r.elements)e=e.filter(i=>!Ht(i,n));return{arrayValue:{values:e}}}class Bs extends Wr{constructor(t,e){super(),this.serializer=t,this.Ae=e}}function Uo(r){return it(r.integerValue||r.doubleValue)}function nl(r){return Zs(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}function Xh(r,t){return r.field.isEqual(t.field)&&function(n,i){return n instanceof Mr&&i instanceof Mr||n instanceof xr&&i instanceof xr?Xe(n.elements,i.elements,Ht):n instanceof Bs&&i instanceof Bs?Ht(n.Ae,i.Ae):n instanceof Us&&i instanceof Us}(r.transform,t.transform)}class be{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new be}static exists(t){return new be(void 0,t)}static updateTime(t){return new be(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Sr(r,t){return r.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(r.updateTime):r.exists===void 0||r.exists===t.isFoundDocument()}class ni{}function rl(r,t){if(!r.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return r.isNoDocument()?new Zh(r.key,be.none()):new ri(r.key,r.data,be.none());{const e=r.data,n=qt.empty();let i=new ft(Ct.comparator);for(let o of t.fields)if(!i.has(o)){let l=e.field(o);l===null&&o.length>1&&(o=o.popLast(),l=e.field(o)),l===null?n.delete(o):n.set(o,l),i=i.add(o)}return new Qr(r.key,n,new oe(i.toArray()),be.none())}}function Jh(r,t,e){r instanceof ri?function(i,o,l){const c=i.value.clone(),d=jo(i.fieldTransforms,o,l.transformResults);c.setAll(d),o.convertToFoundDocument(l.version,c).setHasCommittedMutations()}(r,t,e):r instanceof Qr?function(i,o,l){if(!Sr(i.precondition,o))return void o.convertToUnknownDocument(l.version);const c=jo(i.fieldTransforms,o,l.transformResults),d=o.data;d.setAll(sl(i)),d.setAll(c),o.convertToFoundDocument(l.version,d).setHasCommittedMutations()}(r,t,e):function(i,o,l){o.convertToNoDocument(l.version).setHasCommittedMutations()}(0,t,e)}function Mn(r,t,e,n){return r instanceof ri?function(o,l,c,d){if(!Sr(o.precondition,l))return c;const f=o.value.clone(),_=qo(o.fieldTransforms,d,l);return f.setAll(_),l.convertToFoundDocument(l.version,f).setHasLocalMutations(),null}(r,t,e,n):r instanceof Qr?function(o,l,c,d){if(!Sr(o.precondition,l))return c;const f=qo(o.fieldTransforms,d,l),_=l.data;return _.setAll(sl(o)),_.setAll(f),l.convertToFoundDocument(l.version,_).setHasLocalMutations(),c===null?null:c.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(w=>w.field))}(r,t,e,n):function(o,l,c){return Sr(o.precondition,l)?(l.convertToNoDocument(l.version).setHasLocalMutations(),null):c}(r,t,e)}function Bo(r,t){return r.type===t.type&&!!r.key.isEqual(t.key)&&!!r.precondition.isEqual(t.precondition)&&!!function(n,i){return n===void 0&&i===void 0||!(!n||!i)&&Xe(n,i,(o,l)=>Xh(o,l))}(r.fieldTransforms,t.fieldTransforms)&&(r.type===0?r.value.isEqual(t.value):r.type!==1||r.data.isEqual(t.data)&&r.fieldMask.isEqual(t.fieldMask))}class ri extends ni{constructor(t,e,n,i=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Qr extends ni{constructor(t,e,n,i,o=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function sl(r){const t=new Map;return r.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const n=r.data.field(e);t.set(e,n)}}),t}function jo(r,t,e){const n=new Map;et(r.length===e.length,32656,{Re:e.length,Ve:r.length});for(let i=0;i<e.length;i++){const o=r[i],l=o.transform,c=t.data.field(o.field);n.set(o.field,$h(l,c,e[i]))}return n}function qo(r,t,e){const n=new Map;for(const i of r){const o=i.transform,l=e.data.field(i.field);n.set(i.field,Qh(o,l,t))}return n}class Zh extends ni{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class td{constructor(t,e,n,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=i}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(t.key)&&Jh(o,t,n[i])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=Mn(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=Mn(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=Za();return this.mutations.forEach(i=>{const o=t.get(i.key),l=o.overlayedDocument;let c=this.applyToLocalView(l,o.mutatedFields);c=e.has(i.key)?null:c;const d=rl(l,c);d!==null&&n.set(i.key,d),l.isValidDocument()||l.convertToNoDocument(j.min())}),n}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),Q())}isEqual(t){return this.batchId===t.batchId&&Xe(this.mutations,t.mutations,(e,n)=>Bo(e,n))&&Xe(this.baseMutations,t.baseMutations,(e,n)=>Bo(e,n))}}/**
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
 */class ed{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class nd{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
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
 */var at,H;function il(r){if(r===void 0)return te("GRPC error has no .code"),V.UNKNOWN;switch(r){case at.OK:return V.OK;case at.CANCELLED:return V.CANCELLED;case at.UNKNOWN:return V.UNKNOWN;case at.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case at.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case at.INTERNAL:return V.INTERNAL;case at.UNAVAILABLE:return V.UNAVAILABLE;case at.UNAUTHENTICATED:return V.UNAUTHENTICATED;case at.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case at.NOT_FOUND:return V.NOT_FOUND;case at.ALREADY_EXISTS:return V.ALREADY_EXISTS;case at.PERMISSION_DENIED:return V.PERMISSION_DENIED;case at.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case at.ABORTED:return V.ABORTED;case at.OUT_OF_RANGE:return V.OUT_OF_RANGE;case at.UNIMPLEMENTED:return V.UNIMPLEMENTED;case at.DATA_LOSS:return V.DATA_LOSS;default:return q(39323,{code:r})}}(H=at||(at={}))[H.OK=0]="OK",H[H.CANCELLED=1]="CANCELLED",H[H.UNKNOWN=2]="UNKNOWN",H[H.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",H[H.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",H[H.NOT_FOUND=5]="NOT_FOUND",H[H.ALREADY_EXISTS=6]="ALREADY_EXISTS",H[H.PERMISSION_DENIED=7]="PERMISSION_DENIED",H[H.UNAUTHENTICATED=16]="UNAUTHENTICATED",H[H.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",H[H.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",H[H.ABORTED=10]="ABORTED",H[H.OUT_OF_RANGE=11]="OUT_OF_RANGE",H[H.UNIMPLEMENTED=12]="UNIMPLEMENTED",H[H.INTERNAL=13]="INTERNAL",H[H.UNAVAILABLE=14]="UNAVAILABLE",H[H.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function rd(){return new TextEncoder}/**
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
 */const sd=new ce([4294967295,4294967295],0);function Go(r){const t=rd().encode(r),e=new Ca;return e.update(t),new Uint8Array(e.digest())}function zo(r){const t=new DataView(r.buffer),e=t.getUint32(0,!0),n=t.getUint32(4,!0),i=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new ce([e,n],0),new ce([i,o],0)]}class si{constructor(t,e,n){if(this.bitmap=t,this.padding=e,this.hashCount=n,e<0||e>=8)throw new Dn(`Invalid padding: ${e}`);if(n<0)throw new Dn(`Invalid hash count: ${n}`);if(t.length>0&&this.hashCount===0)throw new Dn(`Invalid hash count: ${n}`);if(t.length===0&&e!==0)throw new Dn(`Invalid padding when bitmap length is 0: ${e}`);this.ge=8*t.length-e,this.pe=ce.fromNumber(this.ge)}ye(t,e,n){let i=t.add(e.multiply(ce.fromNumber(n)));return i.compare(sd)===1&&(i=new ce([i.getBits(0),i.getBits(1)],0)),i.modulo(this.pe).toNumber()}we(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.ge===0)return!1;const e=Go(t),[n,i]=zo(e);for(let o=0;o<this.hashCount;o++){const l=this.ye(n,i,o);if(!this.we(l))return!1}return!0}static create(t,e,n){const i=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),l=new si(o,i,e);return n.forEach(c=>l.insert(c)),l}insert(t){if(this.ge===0)return;const e=Go(t),[n,i]=zo(e);for(let o=0;o<this.hashCount;o++){const l=this.ye(n,i,o);this.Se(l)}}Se(t){const e=Math.floor(t/8),n=t%8;this.bitmap[e]|=1<<n}}class Dn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class $r{constructor(t,e,n,i,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const i=new Map;return i.set(t,Hn.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new $r(j.min(),i,new ot(z),ye(),Q())}}class Hn{constructor(t,e,n,i,o){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=i,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new Hn(n,e,Q(),Q(),Q())}}/**
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
 */class Rr{constructor(t,e,n,i){this.be=t,this.removedTargetIds=e,this.key=n,this.De=i}}class ol{constructor(t,e){this.targetId=t,this.Ce=e}}class al{constructor(t,e,n=vt.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=i}}class Ho{constructor(){this.ve=0,this.Fe=Ko(),this.Me=vt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(t){t.approximateByteSize()>0&&(this.Oe=!0,this.Me=t)}ke(){let t=Q(),e=Q(),n=Q();return this.Fe.forEach((i,o)=>{switch(o){case 0:t=t.add(i);break;case 2:e=e.add(i);break;case 1:n=n.add(i);break;default:q(38017,{changeType:o})}}),new Hn(this.Me,this.xe,t,e,n)}qe(){this.Oe=!1,this.Fe=Ko()}Qe(t,e){this.Oe=!0,this.Fe=this.Fe.insert(t,e)}$e(t){this.Oe=!0,this.Fe=this.Fe.remove(t)}Ue(){this.ve+=1}Ke(){this.ve-=1,et(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class id{constructor(t){this.Ge=t,this.ze=new Map,this.je=ye(),this.Je=vr(),this.He=vr(),this.Ye=new ot(z)}Ze(t){for(const e of t.be)t.De&&t.De.isFoundDocument()?this.Xe(e,t.De):this.et(e,t.key,t.De);for(const e of t.removedTargetIds)this.et(e,t.key,t.De)}tt(t){this.forEachTarget(t,e=>{const n=this.nt(e);switch(t.state){case 0:this.rt(e)&&n.Le(t.resumeToken);break;case 1:n.Ke(),n.Ne||n.qe(),n.Le(t.resumeToken);break;case 2:n.Ke(),n.Ne||this.removeTarget(e);break;case 3:this.rt(e)&&(n.We(),n.Le(t.resumeToken));break;case 4:this.rt(e)&&(this.it(e),n.Le(t.resumeToken));break;default:q(56790,{state:t.state})}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.ze.forEach((n,i)=>{this.rt(i)&&e(i)})}st(t){const e=t.targetId,n=t.Ce.count,i=this.ot(e);if(i){const o=i.target;if(xs(o))if(n===0){const l=new B(o.path);this.et(e,l,St.newNoDocument(l,j.min()))}else et(n===1,20013,{expectedCount:n});else{const l=this._t(e);if(l!==n){const c=this.ut(t),d=c?this.ct(c,t,l):1;if(d!==0){this.it(e);const f=d===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(e,f)}}}}}ut(t){const e=t.Ce.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:n="",padding:i=0},hashCount:o=0}=e;let l,c;try{l=pe(n).toUint8Array()}catch(d){if(d instanceof Fa)return Ye("Decoding the base64 bloom filter in existence filter failed ("+d.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw d}try{c=new si(l,i,o)}catch(d){return Ye(d instanceof Dn?"BloomFilter error: ":"Applying bloom filter failed: ",d),null}return c.ge===0?null:c}ct(t,e,n){return e.Ce.count===n-this.Pt(t,e.targetId)?0:2}Pt(t,e){const n=this.Ge.getRemoteKeysForTarget(e);let i=0;return n.forEach(o=>{const l=this.Ge.ht(),c=`projects/${l.projectId}/databases/${l.database}/documents/${o.path.canonicalString()}`;t.mightContain(c)||(this.et(e,o,null),i++)}),i}Tt(t){const e=new Map;this.ze.forEach((o,l)=>{const c=this.ot(l);if(c){if(o.current&&xs(c.target)){const d=new B(c.target.path);this.It(d).has(l)||this.Et(l,d)||this.et(l,d,St.newNoDocument(d,t))}o.Be&&(e.set(l,o.ke()),o.qe())}});let n=Q();this.He.forEach((o,l)=>{let c=!0;l.forEachWhile(d=>{const f=this.ot(d);return!f||f.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(n=n.add(o))}),this.je.forEach((o,l)=>l.setReadTime(t));const i=new $r(t,e,this.Ye,this.je,n);return this.je=ye(),this.Je=vr(),this.He=vr(),this.Ye=new ot(z),i}Xe(t,e){if(!this.rt(t))return;const n=this.Et(t,e.key)?2:0;this.nt(t).Qe(e.key,n),this.je=this.je.insert(e.key,e),this.Je=this.Je.insert(e.key,this.It(e.key).add(t)),this.He=this.He.insert(e.key,this.dt(e.key).add(t))}et(t,e,n){if(!this.rt(t))return;const i=this.nt(t);this.Et(t,e)?i.Qe(e,1):i.$e(e),this.He=this.He.insert(e,this.dt(e).delete(t)),this.He=this.He.insert(e,this.dt(e).add(t)),n&&(this.je=this.je.insert(e,n))}removeTarget(t){this.ze.delete(t)}_t(t){const e=this.nt(t).ke();return this.Ge.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Ue(t){this.nt(t).Ue()}nt(t){let e=this.ze.get(t);return e||(e=new Ho,this.ze.set(t,e)),e}dt(t){let e=this.He.get(t);return e||(e=new ft(z),this.He=this.He.insert(t,e)),e}It(t){let e=this.Je.get(t);return e||(e=new ft(z),this.Je=this.Je.insert(t,e)),e}rt(t){const e=this.ot(t)!==null;return e||O("WatchChangeAggregator","Detected inactive target",t),e}ot(t){const e=this.ze.get(t);return e&&e.Ne?null:this.Ge.At(t)}it(t){this.ze.set(t,new Ho),this.Ge.getRemoteKeysForTarget(t).forEach(e=>{this.et(t,e,null)})}Et(t,e){return this.Ge.getRemoteKeysForTarget(t).has(e)}}function vr(){return new ot(B.comparator)}function Ko(){return new ot(B.comparator)}const od={asc:"ASCENDING",desc:"DESCENDING"},ad={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},ld={and:"AND",or:"OR"};class ud{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function js(r,t){return r.useProto3Json||qr(t)?t:{value:t}}function cd(r,t){return r.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function hd(r,t){return r.useProto3Json?t.toBase64():t.toUint8Array()}function He(r){return et(!!r,49232),j.fromTimestamp(function(e){const n=ge(e);return new lt(n.seconds,n.nanos)}(r))}function dd(r,t){return qs(r,t).canonicalString()}function qs(r,t){const e=function(i){return new tt(["projects",i.projectId,"databases",i.database])}(r).child("documents");return t===void 0?e:e.child(t)}function ll(r){const t=tt.fromString(r);return et(fl(t),10190,{key:t.toString()}),t}function Es(r,t){const e=ll(t);if(e.get(1)!==r.databaseId.projectId)throw new F(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+r.databaseId.projectId);if(e.get(3)!==r.databaseId.database)throw new F(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+r.databaseId.database);return new B(cl(e))}function ul(r,t){return dd(r.databaseId,t)}function fd(r){const t=ll(r);return t.length===4?tt.emptyPath():cl(t)}function Wo(r){return new tt(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function cl(r){return et(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function gd(r,t){let e;if("targetChange"in t){t.targetChange;const n=function(f){return f==="NO_CHANGE"?0:f==="ADD"?1:f==="REMOVE"?2:f==="CURRENT"?3:f==="RESET"?4:q(39313,{state:f})}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],o=function(f,_){return f.useProto3Json?(et(_===void 0||typeof _=="string",58123),vt.fromBase64String(_||"")):(et(_===void 0||_ instanceof Buffer||_ instanceof Uint8Array,16193),vt.fromUint8Array(_||new Uint8Array))}(r,t.targetChange.resumeToken),l=t.targetChange.cause,c=l&&function(f){const _=f.code===void 0?V.UNKNOWN:il(f.code);return new F(_,f.message||"")}(l);e=new al(n,i,o,c||null)}else if("documentChange"in t){t.documentChange;const n=t.documentChange;n.document,n.document.name,n.document.updateTime;const i=Es(r,n.document.name),o=He(n.document.updateTime),l=n.document.createTime?He(n.document.createTime):j.min(),c=new qt({mapValue:{fields:n.document.fields}}),d=St.newFoundDocument(i,o,l,c),f=n.targetIds||[],_=n.removedTargetIds||[];e=new Rr(f,_,d.key,d)}else if("documentDelete"in t){t.documentDelete;const n=t.documentDelete;n.document;const i=Es(r,n.document),o=n.readTime?He(n.readTime):j.min(),l=St.newNoDocument(i,o),c=n.removedTargetIds||[];e=new Rr([],c,l.key,l)}else if("documentRemove"in t){t.documentRemove;const n=t.documentRemove;n.document;const i=Es(r,n.document),o=n.removedTargetIds||[];e=new Rr([],o,i,null)}else{if(!("filter"in t))return q(11601,{Rt:t});{t.filter;const n=t.filter;n.targetId;const{count:i=0,unchangedNames:o}=n,l=new nd(i,o),c=n.targetId;e=new ol(c,l)}}return e}function pd(r,t){return{documents:[ul(r,t.path)]}}function md(r,t){const e={structuredQuery:{}},n=t.path;let i;t.collectionGroup!==null?(i=n,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=n.popLast(),e.structuredQuery.from=[{collectionId:n.lastSegment()}]),e.parent=ul(r,i);const o=function(f){if(f.length!==0)return dl(Kt.create(f,"and"))}(t.filters);o&&(e.structuredQuery.where=o);const l=function(f){if(f.length!==0)return f.map(_=>function(S){return{field:qe(S.field),direction:vd(S.dir)}}(_))}(t.orderBy);l&&(e.structuredQuery.orderBy=l);const c=js(r,t.limit);return c!==null&&(e.structuredQuery.limit=c),t.startAt&&(e.structuredQuery.startAt=function(f){return{before:f.inclusive,values:f.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(f){return{before:!f.inclusive,values:f.position}}(t.endAt)),{ft:e,parent:i}}function yd(r){let t=fd(r.parent);const e=r.structuredQuery,n=e.from?e.from.length:0;let i=null;if(n>0){et(n===1,65062);const _=e.from[0];_.allDescendants?i=_.collectionId:t=t.child(_.collectionId)}let o=[];e.where&&(o=function(w){const S=hl(w);return S instanceof Kt&&Ha(S)?S.getFilters():[S]}(e.where));let l=[];e.orderBy&&(l=function(w){return w.map(S=>function(L){return new Lr(Ge(L.field),function(M){switch(M){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(L.direction))}(S))}(e.orderBy));let c=null;e.limit&&(c=function(w){let S;return S=typeof w=="object"?w.value:w,qr(S)?null:S}(e.limit));let d=null;e.startAt&&(d=function(w){const S=!!w.before,C=w.values||[];return new Or(C,S)}(e.startAt));let f=null;return e.endAt&&(f=function(w){const S=!w.before,C=w.values||[];return new Or(C,S)}(e.endAt)),Mh(t,i,l,o,c,"F",d,f)}function _d(r,t){const e=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return q(28987,{purpose:i})}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function hl(r){return r.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=Ge(e.unaryFilter.field);return dt.create(n,"==",{doubleValue:NaN});case"IS_NULL":const i=Ge(e.unaryFilter.field);return dt.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Ge(e.unaryFilter.field);return dt.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const l=Ge(e.unaryFilter.field);return dt.create(l,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return q(61313);default:return q(60726)}}(r):r.fieldFilter!==void 0?function(e){return dt.create(Ge(e.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return q(58110);default:return q(50506)}}(e.fieldFilter.op),e.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(e){return Kt.create(e.compositeFilter.filters.map(n=>hl(n)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return q(1026)}}(e.compositeFilter.op))}(r):q(30097,{filter:r})}function vd(r){return od[r]}function Ed(r){return ad[r]}function Td(r){return ld[r]}function qe(r){return{fieldPath:r.canonicalString()}}function Ge(r){return Ct.fromServerFormat(r.fieldPath)}function dl(r){return r instanceof dt?function(e){if(e.op==="=="){if(Oo(e.value))return{unaryFilter:{field:qe(e.field),op:"IS_NAN"}};if(No(e.value))return{unaryFilter:{field:qe(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Oo(e.value))return{unaryFilter:{field:qe(e.field),op:"IS_NOT_NAN"}};if(No(e.value))return{unaryFilter:{field:qe(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:qe(e.field),op:Ed(e.op),value:e.value}}}(r):r instanceof Kt?function(e){const n=e.getFilters().map(i=>dl(i));return n.length===1?n[0]:{compositeFilter:{op:Td(e.op),filters:n}}}(r):q(54877,{filter:r})}function fl(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
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
 */class ae{constructor(t,e,n,i,o=j.min(),l=j.min(),c=vt.EMPTY_BYTE_STRING,d=null){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=i,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=l,this.resumeToken=c,this.expectedCount=d}withSequenceNumber(t){return new ae(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new ae(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new ae(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new ae(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class Id{constructor(t){this.yt=t}}function Ad(r){const t=yd({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?Fs(t,t.limit,"L"):t}/**
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
 */class wd{constructor(){this.Cn=new Sd}addToCollectionParentIndex(t,e){return this.Cn.add(e),b.resolve()}getCollectionParents(t,e){return b.resolve(this.Cn.getEntries(e))}addFieldIndex(t,e){return b.resolve()}deleteFieldIndex(t,e){return b.resolve()}deleteAllFieldIndexes(t){return b.resolve()}createTargetIndexes(t,e){return b.resolve()}getDocumentsMatchingTarget(t,e){return b.resolve(null)}getIndexType(t,e){return b.resolve(0)}getFieldIndexes(t,e){return b.resolve([])}getNextCollectionGroupToUpdate(t){return b.resolve(null)}getMinOffset(t,e){return b.resolve(fe.min())}getMinOffsetFromCollectionGroup(t,e){return b.resolve(fe.min())}updateCollectionGroup(t,e,n){return b.resolve()}updateIndexEntries(t,e){return b.resolve()}}class Sd{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e]||new ft(tt.comparator),o=!i.has(n);return this.index[e]=i.add(n),o}has(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e];return i&&i.has(n)}getEntries(t){return(this.index[t]||new ft(tt.comparator)).toArray()}}/**
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
 */const Qo={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},gl=41943040;class Pt{static withCacheSize(t){return new Pt(t,Pt.DEFAULT_COLLECTION_PERCENTILE,Pt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}}/**
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
 */Pt.DEFAULT_COLLECTION_PERCENTILE=10,Pt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Pt.DEFAULT=new Pt(gl,Pt.DEFAULT_COLLECTION_PERCENTILE,Pt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Pt.DISABLED=new Pt(-1,0,0);/**
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
 */class tn{constructor(t){this.ar=t}next(){return this.ar+=2,this.ar}static ur(){return new tn(0)}static cr(){return new tn(-1)}}/**
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
 */const $o="LruGarbageCollector",Rd=1048576;function Yo([r,t],[e,n]){const i=z(r,e);return i===0?z(t,n):i}class bd{constructor(t){this.Ir=t,this.buffer=new ft(Yo),this.Er=0}dr(){return++this.Er}Ar(t){const e=[t,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(e);else{const n=this.buffer.last();Yo(e,n)<0&&(this.buffer=this.buffer.delete(n).add(e))}}get maxValue(){return this.buffer.last()[0]}}class Cd{constructor(t,e,n){this.garbageCollector=t,this.asyncQueue=e,this.localStore=n,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(t){O($o,`Garbage collection scheduled in ${t}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){on(e)?O($o,"Ignoring IndexedDB error during garbage collection: ",e):await Br(e)}await this.Vr(3e5)})}}class Pd{constructor(t,e){this.mr=t,this.params=e}calculateTargetCount(t,e){return this.mr.gr(t).next(n=>Math.floor(e/100*n))}nthSequenceNumber(t,e){if(e===0)return b.resolve(jr.ce);const n=new bd(e);return this.mr.forEachTarget(t,i=>n.Ar(i.sequenceNumber)).next(()=>this.mr.pr(t,i=>n.Ar(i))).next(()=>n.maxValue)}removeTargets(t,e,n){return this.mr.removeTargets(t,e,n)}removeOrphanedDocuments(t,e){return this.mr.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(O("LruGarbageCollector","Garbage collection skipped; disabled"),b.resolve(Qo)):this.getCacheSize(t).next(n=>n<this.params.cacheSizeCollectionThreshold?(O("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Qo):this.yr(t,e))}getCacheSize(t){return this.mr.getCacheSize(t)}yr(t,e){let n,i,o,l,c,d,f;const _=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(w=>(w>this.params.maximumSequenceNumbersToCollect?(O("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${w}`),i=this.params.maximumSequenceNumbersToCollect):i=w,l=Date.now(),this.nthSequenceNumber(t,i))).next(w=>(n=w,c=Date.now(),this.removeTargets(t,n,e))).next(w=>(o=w,d=Date.now(),this.removeOrphanedDocuments(t,n))).next(w=>(f=Date.now(),Be()<=K.DEBUG&&O("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${l-_}ms
	Determined least recently used ${i} in `+(c-l)+`ms
	Removed ${o} targets in `+(d-c)+`ms
	Removed ${w} documents in `+(f-d)+`ms
Total Duration: ${f-_}ms`),b.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:o,documentsRemoved:w})))}}function Vd(r,t){return new Pd(r,t)}/**
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
 */class Dd{constructor(){this.changes=new Pe(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,St.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return n!==void 0?b.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class kd{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
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
 */class Nd{constructor(t,e,n,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=i}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next(i=>(n=i,this.remoteDocumentCache.getEntry(t,e))).next(i=>(n!==null&&Mn(n.mutation,i,oe.empty(),lt.now()),i))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(n=>this.getLocalViewOfDocuments(t,n,Q()).next(()=>n))}getLocalViewOfDocuments(t,e,n=Q()){const i=Se();return this.populateOverlays(t,i,e).next(()=>this.computeViews(t,e,i,n).next(o=>{let l=Vn();return o.forEach((c,d)=>{l=l.insert(c,d.overlayedDocument)}),l}))}getOverlayedDocuments(t,e){const n=Se();return this.populateOverlays(t,n,e).next(()=>this.computeViews(t,e,n,Q()))}populateOverlays(t,e,n){const i=[];return n.forEach(o=>{e.has(o)||i.push(o)}),this.documentOverlayCache.getOverlays(t,i).next(o=>{o.forEach((l,c)=>{e.set(l,c)})})}computeViews(t,e,n,i){let o=ye();const l=Ln(),c=function(){return Ln()}();return e.forEach((d,f)=>{const _=n.get(f.key);i.has(f.key)&&(_===void 0||_.mutation instanceof Qr)?o=o.insert(f.key,f):_!==void 0?(l.set(f.key,_.mutation.getFieldMask()),Mn(_.mutation,f,_.mutation.getFieldMask(),lt.now())):l.set(f.key,oe.empty())}),this.recalculateAndSaveOverlays(t,o).next(d=>(d.forEach((f,_)=>l.set(f,_)),e.forEach((f,_)=>c.set(f,new kd(_,l.get(f)??null))),c))}recalculateAndSaveOverlays(t,e){const n=Ln();let i=new ot((l,c)=>l-c),o=Q();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(l=>{for(const c of l)c.keys().forEach(d=>{const f=e.get(d);if(f===null)return;let _=n.get(d)||oe.empty();_=c.applyToLocalView(f,_),n.set(d,_);const w=(i.get(c.batchId)||Q()).add(d);i=i.insert(c.batchId,w)})}).next(()=>{const l=[],c=i.getReverseIterator();for(;c.hasNext();){const d=c.getNext(),f=d.key,_=d.value,w=Za();_.forEach(S=>{if(!o.has(S)){const C=rl(e.get(S),n.get(S));C!==null&&w.set(S,C),o=o.add(S)}}),l.push(this.documentOverlayCache.saveOverlays(t,f,w))}return b.waitFor(l)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(n=>this.recalculateAndSaveOverlays(t,n))}getDocumentsMatchingQuery(t,e,n,i){return function(l){return B.isDocumentKey(l.path)&&l.collectionGroup===null&&l.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):xh(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n,i):this.getDocumentsMatchingCollectionQuery(t,e,n,i)}getNextDocuments(t,e,n,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,i).next(o=>{const l=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,i-o.size):b.resolve(Se());let c=Un,d=o;return l.next(f=>b.forEach(f,(_,w)=>(c<w.largestBatchId&&(c=w.largestBatchId),o.get(_)?b.resolve():this.remoteDocumentCache.getEntry(t,_).next(S=>{d=d.insert(_,S)}))).next(()=>this.populateOverlays(t,f,o)).next(()=>this.computeViews(t,d,f,Q())).next(_=>({batchId:c,changes:qh(_)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new B(e)).next(n=>{let i=Vn();return n.isFoundDocument()&&(i=i.insert(n.key,n)),i})}getDocumentsMatchingCollectionGroupQuery(t,e,n,i){const o=e.collectionGroup;let l=Vn();return this.indexManager.getCollectionParents(t,o).next(c=>b.forEach(c,d=>{const f=function(w,S){return new zr(S,null,w.explicitOrderBy.slice(),w.filters.slice(),w.limit,w.limitType,w.startAt,w.endAt)}(e,d.child(o));return this.getDocumentsMatchingCollectionQuery(t,f,n,i).next(_=>{_.forEach((w,S)=>{l=l.insert(w,S)})})}).next(()=>l))}getDocumentsMatchingCollectionQuery(t,e,n,i){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next(l=>(o=l,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,o,i))).next(l=>{o.forEach((d,f)=>{const _=f.getKey();l.get(_)===null&&(l=l.insert(_,St.newInvalidDocument(_)))});let c=Vn();return l.forEach((d,f)=>{const _=o.get(d);_!==void 0&&Mn(_.mutation,f,oe.empty(),lt.now()),Kr(e,f)&&(c=c.insert(d,f))}),c})}}/**
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
 */class Od{constructor(t){this.serializer=t,this.Lr=new Map,this.kr=new Map}getBundleMetadata(t,e){return b.resolve(this.Lr.get(e))}saveBundleMetadata(t,e){return this.Lr.set(e.id,function(i){return{id:i.id,version:i.version,createTime:He(i.createTime)}}(e)),b.resolve()}getNamedQuery(t,e){return b.resolve(this.kr.get(e))}saveNamedQuery(t,e){return this.kr.set(e.name,function(i){return{name:i.name,query:Ad(i.bundledQuery),readTime:He(i.readTime)}}(e)),b.resolve()}}/**
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
 */class Ld{constructor(){this.overlays=new ot(B.comparator),this.qr=new Map}getOverlay(t,e){return b.resolve(this.overlays.get(e))}getOverlays(t,e){const n=Se();return b.forEach(e,i=>this.getOverlay(t,i).next(o=>{o!==null&&n.set(i,o)})).next(()=>n)}saveOverlays(t,e,n){return n.forEach((i,o)=>{this.St(t,e,o)}),b.resolve()}removeOverlaysForBatchId(t,e,n){const i=this.qr.get(n);return i!==void 0&&(i.forEach(o=>this.overlays=this.overlays.remove(o)),this.qr.delete(n)),b.resolve()}getOverlaysForCollection(t,e,n){const i=Se(),o=e.length+1,l=new B(e.child("")),c=this.overlays.getIteratorFrom(l);for(;c.hasNext();){const d=c.getNext().value,f=d.getKey();if(!e.isPrefixOf(f.path))break;f.path.length===o&&d.largestBatchId>n&&i.set(d.getKey(),d)}return b.resolve(i)}getOverlaysForCollectionGroup(t,e,n,i){let o=new ot((f,_)=>f-_);const l=this.overlays.getIterator();for(;l.hasNext();){const f=l.getNext().value;if(f.getKey().getCollectionGroup()===e&&f.largestBatchId>n){let _=o.get(f.largestBatchId);_===null&&(_=Se(),o=o.insert(f.largestBatchId,_)),_.set(f.getKey(),f)}}const c=Se(),d=o.getIterator();for(;d.hasNext()&&(d.getNext().value.forEach((f,_)=>c.set(f,_)),!(c.size()>=i)););return b.resolve(c)}St(t,e,n){const i=this.overlays.get(n.key);if(i!==null){const l=this.qr.get(i.largestBatchId).delete(n.key);this.qr.set(i.largestBatchId,l)}this.overlays=this.overlays.insert(n.key,new ed(e,n));let o=this.qr.get(e);o===void 0&&(o=Q(),this.qr.set(e,o)),this.qr.set(e,o.add(n.key))}}/**
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
 */class Md{constructor(){this.sessionToken=vt.EMPTY_BYTE_STRING}getSessionToken(t){return b.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,b.resolve()}}/**
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
 */class ii{constructor(){this.Qr=new ft(pt.$r),this.Ur=new ft(pt.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(t,e){const n=new pt(t,e);this.Qr=this.Qr.add(n),this.Ur=this.Ur.add(n)}Wr(t,e){t.forEach(n=>this.addReference(n,e))}removeReference(t,e){this.Gr(new pt(t,e))}zr(t,e){t.forEach(n=>this.removeReference(n,e))}jr(t){const e=new B(new tt([])),n=new pt(e,t),i=new pt(e,t+1),o=[];return this.Ur.forEachInRange([n,i],l=>{this.Gr(l),o.push(l.key)}),o}Jr(){this.Qr.forEach(t=>this.Gr(t))}Gr(t){this.Qr=this.Qr.delete(t),this.Ur=this.Ur.delete(t)}Hr(t){const e=new B(new tt([])),n=new pt(e,t),i=new pt(e,t+1);let o=Q();return this.Ur.forEachInRange([n,i],l=>{o=o.add(l.key)}),o}containsKey(t){const e=new pt(t,0),n=this.Qr.firstAfterOrEqual(e);return n!==null&&t.isEqual(n.key)}}class pt{constructor(t,e){this.key=t,this.Yr=e}static $r(t,e){return B.comparator(t.key,e.key)||z(t.Yr,e.Yr)}static Kr(t,e){return z(t.Yr,e.Yr)||B.comparator(t.key,e.key)}}/**
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
 */class xd{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.tr=1,this.Zr=new ft(pt.$r)}checkEmpty(t){return b.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,n,i){const o=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const l=new td(o,e,n,i);this.mutationQueue.push(l);for(const c of i)this.Zr=this.Zr.add(new pt(c.key,o)),this.indexManager.addToCollectionParentIndex(t,c.key.path.popLast());return b.resolve(l)}lookupMutationBatch(t,e){return b.resolve(this.Xr(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,i=this.ei(n),o=i<0?0:i;return b.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return b.resolve(this.mutationQueue.length===0?ph:this.tr-1)}getAllMutationBatches(t){return b.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new pt(e,0),i=new pt(e,Number.POSITIVE_INFINITY),o=[];return this.Zr.forEachInRange([n,i],l=>{const c=this.Xr(l.Yr);o.push(c)}),b.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new ft(z);return e.forEach(i=>{const o=new pt(i,0),l=new pt(i,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([o,l],c=>{n=n.add(c.Yr)})}),b.resolve(this.ti(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,i=n.length+1;let o=n;B.isDocumentKey(o)||(o=o.child(""));const l=new pt(new B(o),0);let c=new ft(z);return this.Zr.forEachWhile(d=>{const f=d.key.path;return!!n.isPrefixOf(f)&&(f.length===i&&(c=c.add(d.Yr)),!0)},l),b.resolve(this.ti(c))}ti(t){const e=[];return t.forEach(n=>{const i=this.Xr(n);i!==null&&e.push(i)}),e}removeMutationBatch(t,e){et(this.ni(e.batchId,"removed")===0,55003),this.mutationQueue.shift();let n=this.Zr;return b.forEach(e.mutations,i=>{const o=new pt(i.key,e.batchId);return n=n.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.Zr=n})}ir(t){}containsKey(t,e){const n=new pt(e,0),i=this.Zr.firstAfterOrEqual(n);return b.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,b.resolve()}ni(t,e){return this.ei(t)}ei(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Xr(t){const e=this.ei(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
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
 */class Fd{constructor(t){this.ri=t,this.docs=function(){return new ot(B.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,i=this.docs.get(n),o=i?i.size:0,l=this.ri(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:l}),this.size+=l-o,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return b.resolve(n?n.document.mutableCopy():St.newInvalidDocument(e))}getEntries(t,e){let n=ye();return e.forEach(i=>{const o=this.docs.get(i);n=n.insert(i,o?o.document.mutableCopy():St.newInvalidDocument(i))}),b.resolve(n)}getDocumentsMatchingQuery(t,e,n,i){let o=ye();const l=e.path,c=new B(l.child("__id-9223372036854775808__")),d=this.docs.getIteratorFrom(c);for(;d.hasNext();){const{key:f,value:{document:_}}=d.getNext();if(!l.isPrefixOf(f.path))break;f.path.length>l.length+1||hh(ch(_),n)<=0||(i.has(_.key)||Kr(e,_))&&(o=o.insert(_.key,_.mutableCopy()))}return b.resolve(o)}getAllFromCollectionGroup(t,e,n,i){q(9500)}ii(t,e){return b.forEach(this.docs,n=>e(n))}newChangeBuffer(t){return new Ud(this)}getSize(t){return b.resolve(this.size)}}class Ud extends Dd{constructor(t){super(),this.Nr=t}applyChanges(t){const e=[];return this.changes.forEach((n,i)=>{i.isValidDocument()?e.push(this.Nr.addEntry(t,i)):this.Nr.removeEntry(n)}),b.waitFor(e)}getFromCache(t,e){return this.Nr.getEntry(t,e)}getAllFromCache(t,e){return this.Nr.getEntries(t,e)}}/**
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
 */class Bd{constructor(t){this.persistence=t,this.si=new Pe(e=>ti(e),ei),this.lastRemoteSnapshotVersion=j.min(),this.highestTargetId=0,this.oi=0,this._i=new ii,this.targetCount=0,this.ai=tn.ur()}forEachTarget(t,e){return this.si.forEach((n,i)=>e(i)),b.resolve()}getLastRemoteSnapshotVersion(t){return b.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return b.resolve(this.oi)}allocateTargetId(t){return this.highestTargetId=this.ai.next(),b.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.oi&&(this.oi=e),b.resolve()}Pr(t){this.si.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.ai=new tn(e),this.highestTargetId=e),t.sequenceNumber>this.oi&&(this.oi=t.sequenceNumber)}addTargetData(t,e){return this.Pr(e),this.targetCount+=1,b.resolve()}updateTargetData(t,e){return this.Pr(e),b.resolve()}removeTargetData(t,e){return this.si.delete(e.target),this._i.jr(e.targetId),this.targetCount-=1,b.resolve()}removeTargets(t,e,n){let i=0;const o=[];return this.si.forEach((l,c)=>{c.sequenceNumber<=e&&n.get(c.targetId)===null&&(this.si.delete(l),o.push(this.removeMatchingKeysForTargetId(t,c.targetId)),i++)}),b.waitFor(o).next(()=>i)}getTargetCount(t){return b.resolve(this.targetCount)}getTargetData(t,e){const n=this.si.get(e)||null;return b.resolve(n)}addMatchingKeys(t,e,n){return this._i.Wr(e,n),b.resolve()}removeMatchingKeys(t,e,n){this._i.zr(e,n);const i=this.persistence.referenceDelegate,o=[];return i&&e.forEach(l=>{o.push(i.markPotentiallyOrphaned(t,l))}),b.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this._i.jr(e),b.resolve()}getMatchingKeysForTargetId(t,e){const n=this._i.Hr(e);return b.resolve(n)}containsKey(t,e){return b.resolve(this._i.containsKey(e))}}/**
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
 */class pl{constructor(t,e){this.ui={},this.overlays={},this.ci=new jr(0),this.li=!1,this.li=!0,this.hi=new Md,this.referenceDelegate=t(this),this.Pi=new Bd(this),this.indexManager=new wd,this.remoteDocumentCache=function(i){return new Fd(i)}(n=>this.referenceDelegate.Ti(n)),this.serializer=new Id(e),this.Ii=new Od(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Ld,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.ui[t.toKey()];return n||(n=new xd(e,this.referenceDelegate),this.ui[t.toKey()]=n),n}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(t,e,n){O("MemoryPersistence","Starting transaction:",t);const i=new jd(this.ci.next());return this.referenceDelegate.Ei(),n(i).next(o=>this.referenceDelegate.di(i).next(()=>o)).toPromise().then(o=>(i.raiseOnCommittedEvent(),o))}Ai(t,e){return b.or(Object.values(this.ui).map(n=>()=>n.containsKey(t,e)))}}class jd extends fh{constructor(t){super(),this.currentSequenceNumber=t}}class oi{constructor(t){this.persistence=t,this.Ri=new ii,this.Vi=null}static mi(t){return new oi(t)}get fi(){if(this.Vi)return this.Vi;throw q(60996)}addReference(t,e,n){return this.Ri.addReference(n,e),this.fi.delete(n.toString()),b.resolve()}removeReference(t,e,n){return this.Ri.removeReference(n,e),this.fi.add(n.toString()),b.resolve()}markPotentiallyOrphaned(t,e){return this.fi.add(e.toString()),b.resolve()}removeTarget(t,e){this.Ri.jr(e.targetId).forEach(i=>this.fi.add(i.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next(i=>{i.forEach(o=>this.fi.add(o.toString()))}).next(()=>n.removeTargetData(t,e))}Ei(){this.Vi=new Set}di(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return b.forEach(this.fi,n=>{const i=B.fromPath(n);return this.gi(t,i).next(o=>{o||e.removeEntry(i,j.min())})}).next(()=>(this.Vi=null,e.apply(t)))}updateLimboDocument(t,e){return this.gi(t,e).next(n=>{n?this.fi.delete(e.toString()):this.fi.add(e.toString())})}Ti(t){return 0}gi(t,e){return b.or([()=>b.resolve(this.Ri.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ai(t,e)])}}class Fr{constructor(t,e){this.persistence=t,this.pi=new Pe(n=>mh(n.path),(n,i)=>n.isEqual(i)),this.garbageCollector=Vd(this,e)}static mi(t,e){return new Fr(t,e)}Ei(){}di(t){return b.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}gr(t){const e=this.wr(t);return this.persistence.getTargetCache().getTargetCount(t).next(n=>e.next(i=>n+i))}wr(t){let e=0;return this.pr(t,n=>{e++}).next(()=>e)}pr(t,e){return b.forEach(this.pi,(n,i)=>this.br(t,n,i).next(o=>o?b.resolve():e(i)))}removeTargets(t,e,n){return this.persistence.getTargetCache().removeTargets(t,e,n)}removeOrphanedDocuments(t,e){let n=0;const i=this.persistence.getRemoteDocumentCache(),o=i.newChangeBuffer();return i.ii(t,l=>this.br(t,l,e).next(c=>{c||(n++,o.removeEntry(l,j.min()))})).next(()=>o.apply(t)).next(()=>n)}markPotentiallyOrphaned(t,e){return this.pi.set(e,t.currentSequenceNumber),b.resolve()}removeTarget(t,e){const n=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,n)}addReference(t,e,n){return this.pi.set(n,t.currentSequenceNumber),b.resolve()}removeReference(t,e,n){return this.pi.set(n,t.currentSequenceNumber),b.resolve()}updateLimboDocument(t,e){return this.pi.set(e,t.currentSequenceNumber),b.resolve()}Ti(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=wr(t.data.value)),e}br(t,e,n){return b.or([()=>this.persistence.Ai(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const i=this.pi.get(e);return b.resolve(i!==void 0&&i>n)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
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
 */class ai{constructor(t,e,n,i){this.targetId=t,this.fromCache=e,this.Es=n,this.ds=i}static As(t,e){let n=Q(),i=Q();for(const o of e.docChanges)switch(o.type){case 0:n=n.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new ai(t,e.fromCache,n,i)}}/**
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
 */class qd{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class Gd{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return Vu()?8:gh(Cu())>0?6:4}()}initialize(t,e){this.ps=t,this.indexManager=e,this.Rs=!0}getDocumentsMatchingQuery(t,e,n,i){const o={result:null};return this.ys(t,e).next(l=>{o.result=l}).next(()=>{if(!o.result)return this.ws(t,e,i,n).next(l=>{o.result=l})}).next(()=>{if(o.result)return;const l=new qd;return this.Ss(t,e,l).next(c=>{if(o.result=c,this.Vs)return this.bs(t,e,l,c.size)})}).next(()=>o.result)}bs(t,e,n,i){return n.documentReadCount<this.fs?(Be()<=K.DEBUG&&O("QueryEngine","SDK will not create cache indexes for query:",je(e),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),b.resolve()):(Be()<=K.DEBUG&&O("QueryEngine","Query:",je(e),"scans",n.documentReadCount,"local documents and returns",i,"documents as results."),n.documentReadCount>this.gs*i?(Be()<=K.DEBUG&&O("QueryEngine","The SDK decides to create cache indexes for query:",je(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,zt(e))):b.resolve())}ys(t,e){if(Fo(e))return b.resolve(null);let n=zt(e);return this.indexManager.getIndexType(t,n).next(i=>i===0?null:(e.limit!==null&&i===1&&(e=Fs(e,null,"F"),n=zt(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next(o=>{const l=Q(...o);return this.ps.getDocuments(t,l).next(c=>this.indexManager.getMinOffset(t,n).next(d=>{const f=this.Ds(e,c);return this.Cs(e,f,l,d.readTime)?this.ys(t,Fs(e,null,"F")):this.vs(t,f,e,d)}))})))}ws(t,e,n,i){return Fo(e)||i.isEqual(j.min())?b.resolve(null):this.ps.getDocuments(t,n).next(o=>{const l=this.Ds(e,o);return this.Cs(e,l,n,i)?b.resolve(null):(Be()<=K.DEBUG&&O("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),je(e)),this.vs(t,l,e,uh(i,Un)).next(c=>c))})}Ds(t,e){let n=new ft(Xa(t));return e.forEach((i,o)=>{Kr(t,o)&&(n=n.add(o))}),n}Cs(t,e,n,i){if(t.limit===null)return!1;if(n.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}Ss(t,e,n){return Be()<=K.DEBUG&&O("QueryEngine","Using full collection scan to execute query:",je(e)),this.ps.getDocumentsMatchingQuery(t,e,fe.min(),n)}vs(t,e,n,i){return this.ps.getDocumentsMatchingQuery(t,n,i).next(o=>(e.forEach(l=>{o=o.insert(l.key,l)}),o))}}/**
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
 */const li="LocalStore",zd=3e8;class Hd{constructor(t,e,n,i){this.persistence=t,this.Fs=e,this.serializer=i,this.Ms=new ot(z),this.xs=new Pe(o=>ti(o),ei),this.Os=new Map,this.Ns=t.getRemoteDocumentCache(),this.Pi=t.getTargetCache(),this.Ii=t.getBundleCache(),this.Bs(n)}Bs(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Nd(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.Ms))}}function Kd(r,t,e,n){return new Hd(r,t,e,n)}async function ml(r,t){const e=W(r);return await e.persistence.runTransaction("Handle user change","readonly",n=>{let i;return e.mutationQueue.getAllMutationBatches(n).next(o=>(i=o,e.Bs(t),e.mutationQueue.getAllMutationBatches(n))).next(o=>{const l=[],c=[];let d=Q();for(const f of i){l.push(f.batchId);for(const _ of f.mutations)d=d.add(_.key)}for(const f of o){c.push(f.batchId);for(const _ of f.mutations)d=d.add(_.key)}return e.localDocuments.getDocuments(n,d).next(f=>({Ls:f,removedBatchIds:l,addedBatchIds:c}))})})}function yl(r){const t=W(r);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Pi.getLastRemoteSnapshotVersion(e))}function Wd(r,t){const e=W(r),n=t.snapshotVersion;let i=e.Ms;return e.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const l=e.Ns.newChangeBuffer({trackRemovals:!0});i=e.Ms;const c=[];t.targetChanges.forEach((_,w)=>{const S=i.get(w);if(!S)return;c.push(e.Pi.removeMatchingKeys(o,_.removedDocuments,w).next(()=>e.Pi.addMatchingKeys(o,_.addedDocuments,w)));let C=S.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(w)!==null?C=C.withResumeToken(vt.EMPTY_BYTE_STRING,j.min()).withLastLimboFreeSnapshotVersion(j.min()):_.resumeToken.approximateByteSize()>0&&(C=C.withResumeToken(_.resumeToken,n)),i=i.insert(w,C),function(U,M,J){return U.resumeToken.approximateByteSize()===0||M.snapshotVersion.toMicroseconds()-U.snapshotVersion.toMicroseconds()>=zd?!0:J.addedDocuments.size+J.modifiedDocuments.size+J.removedDocuments.size>0}(S,C,_)&&c.push(e.Pi.updateTargetData(o,C))});let d=ye(),f=Q();if(t.documentUpdates.forEach(_=>{t.resolvedLimboDocuments.has(_)&&c.push(e.persistence.referenceDelegate.updateLimboDocument(o,_))}),c.push(Qd(o,l,t.documentUpdates).next(_=>{d=_.ks,f=_.qs})),!n.isEqual(j.min())){const _=e.Pi.getLastRemoteSnapshotVersion(o).next(w=>e.Pi.setTargetsMetadata(o,o.currentSequenceNumber,n));c.push(_)}return b.waitFor(c).next(()=>l.apply(o)).next(()=>e.localDocuments.getLocalViewOfDocuments(o,d,f)).next(()=>d)}).then(o=>(e.Ms=i,o))}function Qd(r,t,e){let n=Q(),i=Q();return e.forEach(o=>n=n.add(o)),t.getEntries(r,n).next(o=>{let l=ye();return e.forEach((c,d)=>{const f=o.get(c);d.isFoundDocument()!==f.isFoundDocument()&&(i=i.add(c)),d.isNoDocument()&&d.version.isEqual(j.min())?(t.removeEntry(c,d.readTime),l=l.insert(c,d)):!f.isValidDocument()||d.version.compareTo(f.version)>0||d.version.compareTo(f.version)===0&&f.hasPendingWrites?(t.addEntry(d),l=l.insert(c,d)):O(li,"Ignoring outdated watch update for ",c,". Current version:",f.version," Watch version:",d.version)}),{ks:l,qs:i}})}function $d(r,t){const e=W(r);return e.persistence.runTransaction("Allocate target","readwrite",n=>{let i;return e.Pi.getTargetData(n,t).next(o=>o?(i=o,b.resolve(i)):e.Pi.allocateTargetId(n).next(l=>(i=new ae(t,l,"TargetPurposeListen",n.currentSequenceNumber),e.Pi.addTargetData(n,i).next(()=>i))))}).then(n=>{const i=e.Ms.get(n.targetId);return(i===null||n.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(e.Ms=e.Ms.insert(n.targetId,n),e.xs.set(t,n.targetId)),n})}async function Gs(r,t,e){const n=W(r),i=n.Ms.get(t),o=e?"readwrite":"readwrite-primary";try{e||await n.persistence.runTransaction("Release target",o,l=>n.persistence.referenceDelegate.removeTarget(l,i))}catch(l){if(!on(l))throw l;O(li,`Failed to update sequence numbers for target ${t}: ${l}`)}n.Ms=n.Ms.remove(t),n.xs.delete(i.target)}function Xo(r,t,e){const n=W(r);let i=j.min(),o=Q();return n.persistence.runTransaction("Execute query","readwrite",l=>function(d,f,_){const w=W(d),S=w.xs.get(_);return S!==void 0?b.resolve(w.Ms.get(S)):w.Pi.getTargetData(f,_)}(n,l,zt(t)).next(c=>{if(c)return i=c.lastLimboFreeSnapshotVersion,n.Pi.getMatchingKeysForTargetId(l,c.targetId).next(d=>{o=d})}).next(()=>n.Fs.getDocumentsMatchingQuery(l,t,e?i:j.min(),e?o:Q())).next(c=>(Yd(n,Uh(t),c),{documents:c,Qs:o})))}function Yd(r,t,e){let n=r.Os.get(t)||j.min();e.forEach((i,o)=>{o.readTime.compareTo(n)>0&&(n=o.readTime)}),r.Os.set(t,n)}class Jo{constructor(){this.activeTargetIds=Hh()}zs(t){this.activeTargetIds=this.activeTargetIds.add(t)}js(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Gs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Xd{constructor(){this.Mo=new Jo,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t,e=!0){return e&&this.Mo.zs(t),this.xo[t]||"not-current"}updateQueryState(t,e,n){this.xo[t]=e}removeLocalQueryTarget(t){this.Mo.js(t)}isLocalQueryTarget(t){return this.Mo.activeTargetIds.has(t)}clearQueryState(t){delete this.xo[t]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(t){return this.Mo.activeTargetIds.has(t)}start(){return this.Mo=new Jo,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class Jd{Oo(t){}shutdown(){}}/**
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
 */const Zo="ConnectivityMonitor";class ta{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(t){this.qo.push(t)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){O(Zo,"Network connectivity changed: AVAILABLE");for(const t of this.qo)t(0)}ko(){O(Zo,"Network connectivity changed: UNAVAILABLE");for(const t of this.qo)t(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Er=null;function zs(){return Er===null?Er=function(){return 268435456+Math.round(2147483648*Math.random())}():Er++,"0x"+Er.toString(16)}/**
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
 */const Ts="RestConnection",Zd={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class tf{get $o(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Uo=e+"://"+t.host,this.Ko=`projects/${n}/databases/${i}`,this.Wo=this.databaseId.database===Nr?`project_id=${n}`:`project_id=${n}&database_id=${i}`}Go(t,e,n,i,o){const l=zs(),c=this.zo(t,e.toUriEncodedString());O(Ts,`Sending RPC '${t}' ${l}:`,c,n);const d={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(d,i,o);const{host:f}=new URL(c),_=$s(f);return this.Jo(t,c,d,n,_).then(w=>(O(Ts,`Received RPC '${t}' ${l}: `,w),w),w=>{throw Ye(Ts,`RPC '${t}' ${l} failed with error: `,w,"url: ",c,"request:",n),w})}Ho(t,e,n,i,o,l){return this.Go(t,e,n,i,o)}jo(t,e,n){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+sn}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach((i,o)=>t[o]=i),n&&n.headers.forEach((i,o)=>t[o]=i)}zo(t,e){const n=Zd[t];return`${this.Uo}/v1/${e}:${n}`}terminate(){}}/**
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
 */class ef{constructor(t){this.Yo=t.Yo,this.Zo=t.Zo}Xo(t){this.e_=t}t_(t){this.n_=t}r_(t){this.i_=t}onMessage(t){this.s_=t}close(){this.Zo()}send(t){this.Yo(t)}o_(){this.e_()}__(){this.n_()}a_(t){this.i_(t)}u_(t){this.s_(t)}}/**
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
 */const It="WebChannelConnection";class nf extends tf{constructor(t){super(t),this.c_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Jo(t,e,n,i,o){const l=zs();return new Promise((c,d)=>{const f=new Pa;f.setWithCredentials(!0),f.listenOnce(Va.COMPLETE,()=>{try{switch(f.getLastErrorCode()){case Ar.NO_ERROR:const w=f.getResponseJson();O(It,`XHR for RPC '${t}' ${l} received:`,JSON.stringify(w)),c(w);break;case Ar.TIMEOUT:O(It,`RPC '${t}' ${l} timed out`),d(new F(V.DEADLINE_EXCEEDED,"Request time out"));break;case Ar.HTTP_ERROR:const S=f.getStatus();if(O(It,`RPC '${t}' ${l} failed with status:`,S,"response text:",f.getResponseText()),S>0){let C=f.getResponseJson();Array.isArray(C)&&(C=C[0]);const L=C==null?void 0:C.error;if(L&&L.status&&L.message){const U=function(J){const G=J.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(G)>=0?G:V.UNKNOWN}(L.status);d(new F(U,L.message))}else d(new F(V.UNKNOWN,"Server responded with status "+f.getStatus()))}else d(new F(V.UNAVAILABLE,"Connection failed."));break;default:q(9055,{l_:t,streamId:l,h_:f.getLastErrorCode(),P_:f.getLastError()})}}finally{O(It,`RPC '${t}' ${l} completed.`)}});const _=JSON.stringify(i);O(It,`RPC '${t}' ${l} sending request:`,i),f.send(e,"POST",_,n,15)})}T_(t,e,n){const i=zs(),o=[this.Uo,"/","google.firestore.v1.Firestore","/",t,"/channel"],l=Na(),c=ka(),d={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},f=this.longPollingOptions.timeoutSeconds;f!==void 0&&(d.longPollingTimeout=Math.round(1e3*f)),this.useFetchStreams&&(d.useFetchStreams=!0),this.jo(d.initMessageHeaders,e,n),d.encodeInitMessageHeaders=!0;const _=o.join("");O(It,`Creating RPC '${t}' stream ${i}: ${_}`,d);const w=l.createWebChannel(_,d);this.I_(w);let S=!1,C=!1;const L=new ef({Yo:M=>{C?O(It,`Not sending because RPC '${t}' stream ${i} is closed:`,M):(S||(O(It,`Opening RPC '${t}' stream ${i} transport.`),w.open(),S=!0),O(It,`RPC '${t}' stream ${i} sending:`,M),w.send(M))},Zo:()=>w.close()}),U=(M,J,G)=>{M.listen(J,Y=>{try{G(Y)}catch(nt){setTimeout(()=>{throw nt},0)}})};return U(w,Pn.EventType.OPEN,()=>{C||(O(It,`RPC '${t}' stream ${i} transport opened.`),L.o_())}),U(w,Pn.EventType.CLOSE,()=>{C||(C=!0,O(It,`RPC '${t}' stream ${i} transport closed`),L.a_(),this.E_(w))}),U(w,Pn.EventType.ERROR,M=>{C||(C=!0,Ye(It,`RPC '${t}' stream ${i} transport errored. Name:`,M.name,"Message:",M.message),L.a_(new F(V.UNAVAILABLE,"The operation could not be completed")))}),U(w,Pn.EventType.MESSAGE,M=>{var J;if(!C){const G=M.data[0];et(!!G,16349);const Y=G,nt=(Y==null?void 0:Y.error)||((J=Y[0])==null?void 0:J.error);if(nt){O(It,`RPC '${t}' stream ${i} received error:`,nt);const Ot=nt.status;let ct=function(g){const v=at[g];if(v!==void 0)return il(v)}(Ot),T=nt.message;ct===void 0&&(ct=V.INTERNAL,T="Unknown error status: "+Ot+" with message "+nt.message),C=!0,L.a_(new F(ct,T)),w.close()}else O(It,`RPC '${t}' stream ${i} received:`,G),L.u_(G)}}),U(c,Da.STAT_EVENT,M=>{M.stat===Ps.PROXY?O(It,`RPC '${t}' stream ${i} detected buffering proxy`):M.stat===Ps.NOPROXY&&O(It,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{L.__()},0),L}terminate(){this.c_.forEach(t=>t.close()),this.c_=[]}I_(t){this.c_.push(t)}E_(t){this.c_=this.c_.filter(e=>e===t)}}function Is(){return typeof document<"u"?document:null}/**
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
 */function _l(r){return new ud(r,!0)}/**
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
 */class vl{constructor(t,e,n=1e3,i=1.5,o=6e4){this.Mi=t,this.timerId=e,this.d_=n,this.A_=i,this.R_=o,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(t){this.cancel();const e=Math.floor(this.V_+this.y_()),n=Math.max(0,Date.now()-this.f_),i=Math.max(0,e-n);i>0&&O("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.V_} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,i,()=>(this.f_=Date.now(),t())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */const ea="PersistentStream";class rf{constructor(t,e,n,i,o,l,c,d){this.Mi=t,this.S_=n,this.b_=i,this.connection=o,this.authCredentialsProvider=l,this.appCheckCredentialsProvider=c,this.listener=d,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new vl(t,e)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(t){this.Q_(),this.stream.send(t)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,e){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,t!==4?this.M_.reset():e&&e.code===V.RESOURCE_EXHAUSTED?(te(e.toString()),te("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):e&&e.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.r_(e)}K_(){}auth(){this.state=1;const t=this.W_(this.D_),e=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([n,i])=>{this.D_===e&&this.G_(n,i)},n=>{t(()=>{const i=new F(V.UNKNOWN,"Fetching auth token failed: "+n.message);return this.z_(i)})})}G_(t,e){const n=this.W_(this.D_);this.stream=this.j_(t,e),this.stream.Xo(()=>{n(()=>this.listener.Xo())}),this.stream.t_(()=>{n(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(i=>{n(()=>this.z_(i))}),this.stream.onMessage(i=>{n(()=>++this.F_==1?this.J_(i):this.onNext(i))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(t){return O(ea,`close with error: ${t}`),this.stream=null,this.close(4,t)}W_(t){return e=>{this.Mi.enqueueAndForget(()=>this.D_===t?e():(O(ea,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class sf extends rf{constructor(t,e,n,i,o,l){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,i,l),this.serializer=o}j_(t,e){return this.connection.T_("Listen",t,e)}J_(t){return this.onNext(t)}onNext(t){this.M_.reset();const e=gd(this.serializer,t),n=function(o){if(!("targetChange"in o))return j.min();const l=o.targetChange;return l.targetIds&&l.targetIds.length?j.min():l.readTime?He(l.readTime):j.min()}(t);return this.listener.H_(e,n)}Y_(t){const e={};e.database=Wo(this.serializer),e.addTarget=function(o,l){let c;const d=l.target;if(c=xs(d)?{documents:pd(o,d)}:{query:md(o,d).ft},c.targetId=l.targetId,l.resumeToken.approximateByteSize()>0){c.resumeToken=hd(o,l.resumeToken);const f=js(o,l.expectedCount);f!==null&&(c.expectedCount=f)}else if(l.snapshotVersion.compareTo(j.min())>0){c.readTime=cd(o,l.snapshotVersion.toTimestamp());const f=js(o,l.expectedCount);f!==null&&(c.expectedCount=f)}return c}(this.serializer,t);const n=_d(this.serializer,t);n&&(e.labels=n),this.q_(e)}Z_(t){const e={};e.database=Wo(this.serializer),e.removeTarget=t,this.q_(e)}}/**
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
 */class of{}class af extends of{constructor(t,e,n,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new F(V.FAILED_PRECONDITION,"The client has already been terminated.")}Go(t,e,n,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Go(t,qs(e,n),i,o,l)).catch(o=>{throw o.name==="FirebaseError"?(o.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new F(V.UNKNOWN,o.toString())})}Ho(t,e,n,i,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([l,c])=>this.connection.Ho(t,qs(e,n),i,l,c,o)).catch(l=>{throw l.name==="FirebaseError"?(l.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new F(V.UNKNOWN,l.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class lf{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(t){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ca("Offline")))}set(t){this.Pa(),this.oa=0,t==="Online"&&(this.aa=!1),this.ca(t)}ca(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}la(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(te(e),this.aa=!1):O("OnlineStateTracker",e)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const en="RemoteStore";class uf{constructor(t,e,n,i,o){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=o,this.Aa.Oo(l=>{n.enqueueAndForget(async()=>{Wn(this)&&(O(en,"Restarting streams for network reachability change."),await async function(d){const f=W(d);f.Ea.add(4),await Kn(f),f.Ra.set("Unknown"),f.Ea.delete(4),await Yr(f)}(this))})}),this.Ra=new lf(n,i)}}async function Yr(r){if(Wn(r))for(const t of r.da)await t(!0)}async function Kn(r){for(const t of r.da)await t(!1)}function El(r,t){const e=W(r);e.Ia.has(t.targetId)||(e.Ia.set(t.targetId,t),di(e)?hi(e):an(e).O_()&&ci(e,t))}function ui(r,t){const e=W(r),n=an(e);e.Ia.delete(t),n.O_()&&Tl(e,t),e.Ia.size===0&&(n.O_()?n.L_():Wn(e)&&e.Ra.set("Unknown"))}function ci(r,t){if(r.Va.Ue(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(j.min())>0){const e=r.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}an(r).Y_(t)}function Tl(r,t){r.Va.Ue(t),an(r).Z_(t)}function hi(r){r.Va=new id({getRemoteKeysForTarget:t=>r.remoteSyncer.getRemoteKeysForTarget(t),At:t=>r.Ia.get(t)||null,ht:()=>r.datastore.serializer.databaseId}),an(r).start(),r.Ra.ua()}function di(r){return Wn(r)&&!an(r).x_()&&r.Ia.size>0}function Wn(r){return W(r).Ea.size===0}function Il(r){r.Va=void 0}async function cf(r){r.Ra.set("Online")}async function hf(r){r.Ia.forEach((t,e)=>{ci(r,t)})}async function df(r,t){Il(r),di(r)?(r.Ra.ha(t),hi(r)):r.Ra.set("Unknown")}async function ff(r,t,e){if(r.Ra.set("Online"),t instanceof al&&t.state===2&&t.cause)try{await async function(i,o){const l=o.cause;for(const c of o.targetIds)i.Ia.has(c)&&(await i.remoteSyncer.rejectListen(c,l),i.Ia.delete(c),i.Va.removeTarget(c))}(r,t)}catch(n){O(en,"Failed to remove targets %s: %s ",t.targetIds.join(","),n),await na(r,n)}else if(t instanceof Rr?r.Va.Ze(t):t instanceof ol?r.Va.st(t):r.Va.tt(t),!e.isEqual(j.min()))try{const n=await yl(r.localStore);e.compareTo(n)>=0&&await function(o,l){const c=o.Va.Tt(l);return c.targetChanges.forEach((d,f)=>{if(d.resumeToken.approximateByteSize()>0){const _=o.Ia.get(f);_&&o.Ia.set(f,_.withResumeToken(d.resumeToken,l))}}),c.targetMismatches.forEach((d,f)=>{const _=o.Ia.get(d);if(!_)return;o.Ia.set(d,_.withResumeToken(vt.EMPTY_BYTE_STRING,_.snapshotVersion)),Tl(o,d);const w=new ae(_.target,d,f,_.sequenceNumber);ci(o,w)}),o.remoteSyncer.applyRemoteEvent(c)}(r,e)}catch(n){O(en,"Failed to raise snapshot:",n),await na(r,n)}}async function na(r,t,e){if(!on(t))throw t;r.Ea.add(1),await Kn(r),r.Ra.set("Offline"),e||(e=()=>yl(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{O(en,"Retrying IndexedDB access"),await e(),r.Ea.delete(1),await Yr(r)})}async function ra(r,t){const e=W(r);e.asyncQueue.verifyOperationInProgress(),O(en,"RemoteStore received new credentials");const n=Wn(e);e.Ea.add(3),await Kn(e),n&&e.Ra.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.Ea.delete(3),await Yr(e)}async function gf(r,t){const e=W(r);t?(e.Ea.delete(2),await Yr(e)):t||(e.Ea.add(2),await Kn(e),e.Ra.set("Unknown"))}function an(r){return r.ma||(r.ma=function(e,n,i){const o=W(e);return o.sa(),new sf(n,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(r.datastore,r.asyncQueue,{Xo:cf.bind(null,r),t_:hf.bind(null,r),r_:df.bind(null,r),H_:ff.bind(null,r)}),r.da.push(async t=>{t?(r.ma.B_(),di(r)?hi(r):r.Ra.set("Unknown")):(await r.ma.stop(),Il(r))})),r.ma}/**
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
 */class fi{constructor(t,e,n,i,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=i,this.removalCallback=o,this.deferred=new Re,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(l=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,n,i,o){const l=Date.now()+n,c=new fi(t,e,l,i,o);return c.start(n),c}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new F(V.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Al(r,t){if(te("AsyncQueue",`${t}: ${r}`),on(r))return new F(V.UNAVAILABLE,`${t}: ${r}`);throw r}/**
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
 */class Ke{static emptySet(t){return new Ke(t.comparator)}constructor(t){this.comparator=t?(e,n)=>t(e,n)||B.comparator(e.key,n.key):(e,n)=>B.comparator(e.key,n.key),this.keyedMap=Vn(),this.sortedSet=new ot(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,n)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Ke)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=n.getNext().key;if(!i.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const n=new Ke;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}/**
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
 */class sa{constructor(){this.ga=new ot(B.comparator)}track(t){const e=t.doc.key,n=this.ga.get(e);n?t.type!==0&&n.type===3?this.ga=this.ga.insert(e,t):t.type===3&&n.type!==1?this.ga=this.ga.insert(e,{type:n.type,doc:t.doc}):t.type===2&&n.type===2?this.ga=this.ga.insert(e,{type:2,doc:t.doc}):t.type===2&&n.type===0?this.ga=this.ga.insert(e,{type:0,doc:t.doc}):t.type===1&&n.type===0?this.ga=this.ga.remove(e):t.type===1&&n.type===2?this.ga=this.ga.insert(e,{type:1,doc:n.doc}):t.type===0&&n.type===1?this.ga=this.ga.insert(e,{type:2,doc:t.doc}):q(63341,{Rt:t,pa:n}):this.ga=this.ga.insert(e,t)}ya(){const t=[];return this.ga.inorderTraversal((e,n)=>{t.push(n)}),t}}class nn{constructor(t,e,n,i,o,l,c,d,f){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=i,this.mutatedKeys=o,this.fromCache=l,this.syncStateChanged=c,this.excludesMetadataChanges=d,this.hasCachedResults=f}static fromInitialDocuments(t,e,n,i,o){const l=[];return e.forEach(c=>{l.push({type:0,doc:c})}),new nn(t,e,Ke.emptySet(e),l,n,i,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Hr(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let i=0;i<e.length;i++)if(e[i].type!==n[i].type||!e[i].doc.isEqual(n[i].doc))return!1;return!0}}/**
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
 */class pf{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(t=>t.Da())}}class mf{constructor(){this.queries=ia(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(e,n){const i=W(e),o=i.queries;i.queries=ia(),o.forEach((l,c)=>{for(const d of c.Sa)d.onError(n)})})(this,new F(V.ABORTED,"Firestore shutting down"))}}function ia(){return new Pe(r=>Ya(r),Hr)}async function yf(r,t){const e=W(r);let n=3;const i=t.query;let o=e.queries.get(i);o?!o.ba()&&t.Da()&&(n=2):(o=new pf,n=t.Da()?0:1);try{switch(n){case 0:o.wa=await e.onListen(i,!0);break;case 1:o.wa=await e.onListen(i,!1);break;case 2:await e.onFirstRemoteStoreListen(i)}}catch(l){const c=Al(l,`Initialization of query '${je(t.query)}' failed`);return void t.onError(c)}e.queries.set(i,o),o.Sa.push(t),t.va(e.onlineState),o.wa&&t.Fa(o.wa)&&gi(e)}async function _f(r,t){const e=W(r),n=t.query;let i=3;const o=e.queries.get(n);if(o){const l=o.Sa.indexOf(t);l>=0&&(o.Sa.splice(l,1),o.Sa.length===0?i=t.Da()?0:1:!o.ba()&&t.Da()&&(i=2))}switch(i){case 0:return e.queries.delete(n),e.onUnlisten(n,!0);case 1:return e.queries.delete(n),e.onUnlisten(n,!1);case 2:return e.onLastRemoteStoreUnlisten(n);default:return}}function vf(r,t){const e=W(r);let n=!1;for(const i of t){const o=i.query,l=e.queries.get(o);if(l){for(const c of l.Sa)c.Fa(i)&&(n=!0);l.wa=i}}n&&gi(e)}function Ef(r,t,e){const n=W(r),i=n.queries.get(t);if(i)for(const o of i.Sa)o.onError(e);n.queries.delete(t)}function gi(r){r.Ca.forEach(t=>{t.next()})}var Hs,oa;(oa=Hs||(Hs={})).Ma="default",oa.Cache="cache";class Tf{constructor(t,e,n){this.query=t,this.xa=e,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=n||{}}Fa(t){if(!this.options.includeMetadataChanges){const n=[];for(const i of t.docChanges)i.type!==3&&n.push(i);t=new nn(t.query,t.docs,t.oldDocs,n,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Oa?this.Ba(t)&&(this.xa.next(t),e=!0):this.La(t,this.onlineState)&&(this.ka(t),e=!0),this.Na=t,e}onError(t){this.xa.error(t)}va(t){this.onlineState=t;let e=!1;return this.Na&&!this.Oa&&this.La(this.Na,t)&&(this.ka(this.Na),e=!0),e}La(t,e){if(!t.fromCache||!this.Da())return!0;const n=e!=="Offline";return(!this.options.qa||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}Ba(t){if(t.docChanges.length>0)return!0;const e=this.Na&&this.Na.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}ka(t){t=nn.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Oa=!0,this.xa.next(t)}Da(){return this.options.source!==Hs.Cache}}/**
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
 */class wl{constructor(t){this.key=t}}class Sl{constructor(t){this.key=t}}class If{constructor(t,e){this.query=t,this.Ya=e,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Q(),this.mutatedKeys=Q(),this.eu=Xa(t),this.tu=new Ke(this.eu)}get nu(){return this.Ya}ru(t,e){const n=e?e.iu:new sa,i=e?e.tu:this.tu;let o=e?e.mutatedKeys:this.mutatedKeys,l=i,c=!1;const d=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,f=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((_,w)=>{const S=i.get(_),C=Kr(this.query,w)?w:null,L=!!S&&this.mutatedKeys.has(S.key),U=!!C&&(C.hasLocalMutations||this.mutatedKeys.has(C.key)&&C.hasCommittedMutations);let M=!1;S&&C?S.data.isEqual(C.data)?L!==U&&(n.track({type:3,doc:C}),M=!0):this.su(S,C)||(n.track({type:2,doc:C}),M=!0,(d&&this.eu(C,d)>0||f&&this.eu(C,f)<0)&&(c=!0)):!S&&C?(n.track({type:0,doc:C}),M=!0):S&&!C&&(n.track({type:1,doc:S}),M=!0,(d||f)&&(c=!0)),M&&(C?(l=l.add(C),o=U?o.add(_):o.delete(_)):(l=l.delete(_),o=o.delete(_)))}),this.query.limit!==null)for(;l.size>this.query.limit;){const _=this.query.limitType==="F"?l.last():l.first();l=l.delete(_.key),o=o.delete(_.key),n.track({type:1,doc:_})}return{tu:l,iu:n,Cs:c,mutatedKeys:o}}su(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n,i){const o=this.tu;this.tu=t.tu,this.mutatedKeys=t.mutatedKeys;const l=t.iu.ya();l.sort((_,w)=>function(C,L){const U=M=>{switch(M){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return q(20277,{Rt:M})}};return U(C)-U(L)}(_.type,w.type)||this.eu(_.doc,w.doc)),this.ou(n),i=i??!1;const c=e&&!i?this._u():[],d=this.Xa.size===0&&this.current&&!i?1:0,f=d!==this.Za;return this.Za=d,l.length!==0||f?{snapshot:new nn(this.query,t.tu,o,l,t.mutatedKeys,d===0,f,!1,!!n&&n.resumeToken.approximateByteSize()>0),au:c}:{au:c}}va(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new sa,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(t){return!this.Ya.has(t)&&!!this.tu.has(t)&&!this.tu.get(t).hasLocalMutations}ou(t){t&&(t.addedDocuments.forEach(e=>this.Ya=this.Ya.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.Ya=this.Ya.delete(e)),this.current=t.current)}_u(){if(!this.current)return[];const t=this.Xa;this.Xa=Q(),this.tu.forEach(n=>{this.uu(n.key)&&(this.Xa=this.Xa.add(n.key))});const e=[];return t.forEach(n=>{this.Xa.has(n)||e.push(new Sl(n))}),this.Xa.forEach(n=>{t.has(n)||e.push(new wl(n))}),e}cu(t){this.Ya=t.Qs,this.Xa=Q();const e=this.ru(t.documents);return this.applyChanges(e,!0)}lu(){return nn.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const pi="SyncEngine";class Af{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class wf{constructor(t){this.key=t,this.hu=!1}}class Sf{constructor(t,e,n,i,o,l){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=l,this.Pu={},this.Tu=new Pe(c=>Ya(c),Hr),this.Iu=new Map,this.Eu=new Set,this.du=new ot(B.comparator),this.Au=new Map,this.Ru=new ii,this.Vu={},this.mu=new Map,this.fu=tn.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function Rf(r,t,e=!0){const n=Vl(r);let i;const o=n.Tu.get(t);return o?(n.sharedClientState.addLocalQueryTarget(o.targetId),i=o.view.lu()):i=await Rl(n,t,e,!0),i}async function bf(r,t){const e=Vl(r);await Rl(e,t,!0,!1)}async function Rl(r,t,e,n){const i=await $d(r.localStore,zt(t)),o=i.targetId,l=r.sharedClientState.addLocalQueryTarget(o,e);let c;return n&&(c=await Cf(r,t,o,l==="current",i.resumeToken)),r.isPrimaryClient&&e&&El(r.remoteStore,i),c}async function Cf(r,t,e,n,i){r.pu=(w,S,C)=>async function(U,M,J,G){let Y=M.view.ru(J);Y.Cs&&(Y=await Xo(U.localStore,M.query,!1).then(({documents:T})=>M.view.ru(T,Y)));const nt=G&&G.targetChanges.get(M.targetId),Ot=G&&G.targetMismatches.get(M.targetId)!=null,ct=M.view.applyChanges(Y,U.isPrimaryClient,nt,Ot);return la(U,M.targetId,ct.au),ct.snapshot}(r,w,S,C);const o=await Xo(r.localStore,t,!0),l=new If(t,o.Qs),c=l.ru(o.documents),d=Hn.createSynthesizedTargetChangeForCurrentChange(e,n&&r.onlineState!=="Offline",i),f=l.applyChanges(c,r.isPrimaryClient,d);la(r,e,f.au);const _=new Af(t,e,l);return r.Tu.set(t,_),r.Iu.has(e)?r.Iu.get(e).push(t):r.Iu.set(e,[t]),f.snapshot}async function Pf(r,t,e){const n=W(r),i=n.Tu.get(t),o=n.Iu.get(i.targetId);if(o.length>1)return n.Iu.set(i.targetId,o.filter(l=>!Hr(l,t))),void n.Tu.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await Gs(n.localStore,i.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(i.targetId),e&&ui(n.remoteStore,i.targetId),Ks(n,i.targetId)}).catch(Br)):(Ks(n,i.targetId),await Gs(n.localStore,i.targetId,!0))}async function Vf(r,t){const e=W(r),n=e.Tu.get(t),i=e.Iu.get(n.targetId);e.isPrimaryClient&&i.length===1&&(e.sharedClientState.removeLocalQueryTarget(n.targetId),ui(e.remoteStore,n.targetId))}async function bl(r,t){const e=W(r);try{const n=await Wd(e.localStore,t);t.targetChanges.forEach((i,o)=>{const l=e.Au.get(o);l&&(et(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?l.hu=!0:i.modifiedDocuments.size>0?et(l.hu,14607):i.removedDocuments.size>0&&(et(l.hu,42227),l.hu=!1))}),await Pl(e,n,t)}catch(n){await Br(n)}}function aa(r,t,e){const n=W(r);if(n.isPrimaryClient&&e===0||!n.isPrimaryClient&&e===1){const i=[];n.Tu.forEach((o,l)=>{const c=l.view.va(t);c.snapshot&&i.push(c.snapshot)}),function(l,c){const d=W(l);d.onlineState=c;let f=!1;d.queries.forEach((_,w)=>{for(const S of w.Sa)S.va(c)&&(f=!0)}),f&&gi(d)}(n.eventManager,t),i.length&&n.Pu.H_(i),n.onlineState=t,n.isPrimaryClient&&n.sharedClientState.setOnlineState(t)}}async function Df(r,t,e){const n=W(r);n.sharedClientState.updateQueryState(t,"rejected",e);const i=n.Au.get(t),o=i&&i.key;if(o){let l=new ot(B.comparator);l=l.insert(o,St.newNoDocument(o,j.min()));const c=Q().add(o),d=new $r(j.min(),new Map,new ot(z),l,c);await bl(n,d),n.du=n.du.remove(o),n.Au.delete(t),mi(n)}else await Gs(n.localStore,t,!1).then(()=>Ks(n,t,e)).catch(Br)}function Ks(r,t,e=null){r.sharedClientState.removeLocalQueryTarget(t);for(const n of r.Iu.get(t))r.Tu.delete(n),e&&r.Pu.yu(n,e);r.Iu.delete(t),r.isPrimaryClient&&r.Ru.jr(t).forEach(n=>{r.Ru.containsKey(n)||Cl(r,n)})}function Cl(r,t){r.Eu.delete(t.path.canonicalString());const e=r.du.get(t);e!==null&&(ui(r.remoteStore,e),r.du=r.du.remove(t),r.Au.delete(e),mi(r))}function la(r,t,e){for(const n of e)n instanceof wl?(r.Ru.addReference(n.key,t),kf(r,n)):n instanceof Sl?(O(pi,"Document no longer in limbo: "+n.key),r.Ru.removeReference(n.key,t),r.Ru.containsKey(n.key)||Cl(r,n.key)):q(19791,{wu:n})}function kf(r,t){const e=t.key,n=e.path.canonicalString();r.du.get(e)||r.Eu.has(n)||(O(pi,"New document in limbo: "+e),r.Eu.add(n),mi(r))}function mi(r){for(;r.Eu.size>0&&r.du.size<r.maxConcurrentLimboResolutions;){const t=r.Eu.values().next().value;r.Eu.delete(t);const e=new B(tt.fromString(t)),n=r.fu.next();r.Au.set(n,new wf(e)),r.du=r.du.insert(e,n),El(r.remoteStore,new ae(zt($a(e.path)),n,"TargetPurposeLimboResolution",jr.ce))}}async function Pl(r,t,e){const n=W(r),i=[],o=[],l=[];n.Tu.isEmpty()||(n.Tu.forEach((c,d)=>{l.push(n.pu(d,t,e).then(f=>{var _;if((f||e)&&n.isPrimaryClient){const w=f?!f.fromCache:(_=e==null?void 0:e.targetChanges.get(d.targetId))==null?void 0:_.current;n.sharedClientState.updateQueryState(d.targetId,w?"current":"not-current")}if(f){i.push(f);const w=ai.As(d.targetId,f);o.push(w)}}))}),await Promise.all(l),n.Pu.H_(i),await async function(d,f){const _=W(d);try{await _.persistence.runTransaction("notifyLocalViewChanges","readwrite",w=>b.forEach(f,S=>b.forEach(S.Es,C=>_.persistence.referenceDelegate.addReference(w,S.targetId,C)).next(()=>b.forEach(S.ds,C=>_.persistence.referenceDelegate.removeReference(w,S.targetId,C)))))}catch(w){if(!on(w))throw w;O(li,"Failed to update sequence numbers: "+w)}for(const w of f){const S=w.targetId;if(!w.fromCache){const C=_.Ms.get(S),L=C.snapshotVersion,U=C.withLastLimboFreeSnapshotVersion(L);_.Ms=_.Ms.insert(S,U)}}}(n.localStore,o))}async function Nf(r,t){const e=W(r);if(!e.currentUser.isEqual(t)){O(pi,"User change. New user:",t.toKey());const n=await ml(e.localStore,t);e.currentUser=t,function(o,l){o.mu.forEach(c=>{c.forEach(d=>{d.reject(new F(V.CANCELLED,l))})}),o.mu.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,n.removedBatchIds,n.addedBatchIds),await Pl(e,n.Ls)}}function Of(r,t){const e=W(r),n=e.Au.get(t);if(n&&n.hu)return Q().add(n.key);{let i=Q();const o=e.Iu.get(t);if(!o)return i;for(const l of o){const c=e.Tu.get(l);i=i.unionWith(c.view.nu)}return i}}function Vl(r){const t=W(r);return t.remoteStore.remoteSyncer.applyRemoteEvent=bl.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Of.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Df.bind(null,t),t.Pu.H_=vf.bind(null,t.eventManager),t.Pu.yu=Ef.bind(null,t.eventManager),t}class Ur{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=_l(t.databaseInfo.databaseId),this.sharedClientState=this.Du(t),this.persistence=this.Cu(t),await this.persistence.start(),this.localStore=this.vu(t),this.gcScheduler=this.Fu(t,this.localStore),this.indexBackfillerScheduler=this.Mu(t,this.localStore)}Fu(t,e){return null}Mu(t,e){return null}vu(t){return Kd(this.persistence,new Gd,t.initialUser,this.serializer)}Cu(t){return new pl(oi.mi,this.serializer)}Du(t){return new Xd}async terminate(){var t,e;(t=this.gcScheduler)==null||t.stop(),(e=this.indexBackfillerScheduler)==null||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ur.provider={build:()=>new Ur};class Lf extends Ur{constructor(t){super(),this.cacheSizeBytes=t}Fu(t,e){et(this.persistence.referenceDelegate instanceof Fr,46915);const n=this.persistence.referenceDelegate.garbageCollector;return new Cd(n,t.asyncQueue,e)}Cu(t){const e=this.cacheSizeBytes!==void 0?Pt.withCacheSize(this.cacheSizeBytes):Pt.DEFAULT;return new pl(n=>Fr.mi(n,e),this.serializer)}}class Ws{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>aa(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=Nf.bind(null,this.syncEngine),await gf(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new mf}()}createDatastore(t){const e=_l(t.databaseInfo.databaseId),n=function(o){return new nf(o)}(t.databaseInfo);return function(o,l,c,d){return new af(o,l,c,d)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return function(n,i,o,l,c){return new uf(n,i,o,l,c)}(this.localStore,this.datastore,t.asyncQueue,e=>aa(this.syncEngine,e,0),function(){return ta.v()?new ta:new Jd}())}createSyncEngine(t,e){return function(i,o,l,c,d,f,_){const w=new Sf(i,o,l,c,d,f);return _&&(w.gu=!0),w}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(i){const o=W(i);O(en,"RemoteStore shutting down."),o.Ea.add(5),await Kn(o),o.Aa.shutdown(),o.Ra.set("Unknown")}(this.remoteStore),(t=this.datastore)==null||t.terminate(),(e=this.eventManager)==null||e.terminate()}}Ws.provider={build:()=>new Ws};/**
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
 */class Mf{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ou(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ou(this.observer.error,t):te("Uncaught Error in snapshot listener:",t.toString()))}Nu(){this.muted=!0}Ou(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
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
 */const _e="FirestoreClient";class xf{constructor(t,e,n,i,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=i,this.user=wt.UNAUTHENTICATED,this.clientId=Ma.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(n,async l=>{O(_e,"Received user=",l.uid),await this.authCredentialListener(l),this.user=l}),this.appCheckCredentials.start(n,l=>(O(_e,"Received new app check token=",l),this.appCheckCredentialListener(l,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Re;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=Al(e,"Failed to shutdown persistence");t.reject(n)}}),t.promise}}async function As(r,t){r.asyncQueue.verifyOperationInProgress(),O(_e,"Initializing OfflineComponentProvider");const e=r.configuration;await t.initialize(e);let n=e.initialUser;r.setCredentialChangeListener(async i=>{n.isEqual(i)||(await ml(t.localStore,i),n=i)}),t.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=t}async function ua(r,t){r.asyncQueue.verifyOperationInProgress();const e=await Ff(r);O(_e,"Initializing OnlineComponentProvider"),await t.initialize(e,r.configuration),r.setCredentialChangeListener(n=>ra(t.remoteStore,n)),r.setAppCheckTokenChangeListener((n,i)=>ra(t.remoteStore,i)),r._onlineComponents=t}async function Ff(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){O(_e,"Using user provided OfflineComponentProvider");try{await As(r,r._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(i){return i.name==="FirebaseError"?i.code===V.FAILED_PRECONDITION||i.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(e))throw e;Ye("Error using user provided cache. Falling back to memory cache: "+e),await As(r,new Ur)}}else O(_e,"Using default OfflineComponentProvider"),await As(r,new Lf(void 0));return r._offlineComponents}async function Uf(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(O(_e,"Using user provided OnlineComponentProvider"),await ua(r,r._uninitializedComponentsProvider._online)):(O(_e,"Using default OnlineComponentProvider"),await ua(r,new Ws))),r._onlineComponents}async function Bf(r){const t=await Uf(r),e=t.eventManager;return e.onListen=Rf.bind(null,t.syncEngine),e.onUnlisten=Pf.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=bf.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=Vf.bind(null,t.syncEngine),e}function jf(r,t,e={}){const n=new Re;return r.asyncQueue.enqueueAndForget(async()=>function(o,l,c,d,f){const _=new Mf({next:S=>{_.Nu(),l.enqueueAndForget(()=>_f(o,w)),S.fromCache&&d.source==="server"?f.reject(new F(V.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):f.resolve(S)},error:S=>f.reject(S)}),w=new Tf(c,_,{includeMetadataChanges:!0,qa:!0});return yf(o,w)}(await Bf(r),r.asyncQueue,t,e,n)),n.promise}/**
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
 */function Dl(r){const t={};return r.timeoutSeconds!==void 0&&(t.timeoutSeconds=r.timeoutSeconds),t}/**
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
 */const ca=new Map;/**
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
 */const kl="firestore.googleapis.com",ha=!0;class da{constructor(t){if(t.host===void 0){if(t.ssl!==void 0)throw new F(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=kl,this.ssl=ha}else this.host=t.host,this.ssl=t.ssl??ha;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=gl;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<Rd)throw new F(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}oh("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Dl(t.experimentalLongPollingOptions??{}),function(n){if(n.timeoutSeconds!==void 0){if(isNaN(n.timeoutSeconds))throw new F(V.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (must not be NaN)`);if(n.timeoutSeconds<5)throw new F(V.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (minimum allowed value is 5)`);if(n.timeoutSeconds>30)throw new F(V.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(n,i){return n.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class yi{constructor(t,e,n,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new da({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new F(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new F(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new da(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new $c;switch(n.type){case"firstParty":return new Zc(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new F(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=ca.get(e);n&&(O("ComponentProvider","Removing Datastore"),ca.delete(e),n.terminate())}(this),Promise.resolve()}}function qf(r,t,e,n={}){var f;r=Ds(r,yi);const i=$s(t),o=r._getSettings(),l={...o,emulatorOptions:r._getEmulatorOptions()},c=`${t}:${e}`;i&&(Au(`https://${c}`),bu("Firestore",!0)),o.host!==kl&&o.host!==c&&Ye("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const d={...o,host:c,ssl:i,emulatorOptions:n};if(!Vr(d,l)&&(r._setSettings(d),n.mockUserToken)){let _,w;if(typeof n.mockUserToken=="string")_=n.mockUserToken,w=wt.MOCK_USER;else{_=wu(n.mockUserToken,(f=r._app)==null?void 0:f.options.projectId);const S=n.mockUserToken.sub||n.mockUserToken.user_id;if(!S)throw new F(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");w=new wt(S)}r._authCredentials=new Yc(new La(_,w))}}/**
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
 */class Xr{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new Xr(this.firestore,t,this._query)}}class Nt{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new We(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Nt(this.firestore,t,this._key)}toJSON(){return{type:Nt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,e,n){if(Gn(e,Nt._jsonSchema))return new Nt(t,n||null,new B(tt.fromString(e.referencePath)))}}Nt._jsonSchemaVersion="firestore/documentReference/1.0",Nt._jsonSchema={type:ut("string",Nt._jsonSchemaVersion),referencePath:ut("string")};class We extends Xr{constructor(t,e,n){super(t,e,$a(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Nt(this.firestore,null,new B(t))}withConverter(t){return new We(this.firestore,t,this._path)}}function ig(r,t,...e){if(r=Mu(r),ih("collection","path",t),r instanceof yi){const n=tt.fromString(t,...e);return So(n),new We(r,null,n)}{if(!(r instanceof Nt||r instanceof We))throw new F(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(tt.fromString(t,...e));return So(n),new We(r.firestore,null,n)}}/**
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
 */const fa="AsyncQueue";class ga{constructor(t=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new vl(this,"async_queue_retry"),this._c=()=>{const n=Is();n&&O(fa,"Visibility state changed to "+n.visibilityState),this.M_.w_()},this.ac=t;const e=Is();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.uc(),this.cc(t)}enterRestrictedMode(t){if(!this.ec){this.ec=!0,this.sc=t||!1;const e=Is();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this._c)}}enqueue(t){if(this.uc(),this.ec)return new Promise(()=>{});const e=new Re;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Xu.push(t),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(t){if(!on(t))throw t;O(fa,"Operation failed with retryable error: "+t)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(t){const e=this.ac.then(()=>(this.rc=!0,t().catch(n=>{throw this.nc=n,this.rc=!1,te("INTERNAL UNHANDLED ERROR: ",pa(n)),n}).then(n=>(this.rc=!1,n))));return this.ac=e,e}enqueueAfterDelay(t,e,n){this.uc(),this.oc.indexOf(t)>-1&&(e=0);const i=fi.createAndSchedule(this,t,e,n,o=>this.hc(o));return this.tc.push(i),i}uc(){this.nc&&q(47125,{Pc:pa(this.nc)})}verifyOperationInProgress(){}async Tc(){let t;do t=this.ac,await t;while(t!==this.ac)}Ic(t){for(const e of this.tc)if(e.timerId===t)return!0;return!1}Ec(t){return this.Tc().then(()=>{this.tc.sort((e,n)=>e.targetTimeMs-n.targetTimeMs);for(const e of this.tc)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.Tc()})}dc(t){this.oc.push(t)}hc(t){const e=this.tc.indexOf(t);this.tc.splice(e,1)}}function pa(r){let t=r.message||"";return r.stack&&(t=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),t}class Nl extends yi{constructor(t,e,n,i){super(t,e,n,i),this.type="firestore",this._queue=new ga,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new ga(t),this._firestoreClient=void 0,await t}}}function Gf(r,t){const e=typeof r=="object"?r:Fc(),n=typeof r=="string"?r:Nr,i=Nc(e,"firestore").getImmediate({identifier:n});if(!i._initialized){const o=Tu("firestore");o&&qf(i,...o)}return i}function zf(r){if(r._terminated)throw new F(V.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||Hf(r),r._firestoreClient}function Hf(r){var n,i,o;const t=r._freezeSettings(),e=function(c,d,f,_){return new Eh(c,d,f,_.host,_.ssl,_.experimentalForceLongPolling,_.experimentalAutoDetectLongPolling,Dl(_.experimentalLongPollingOptions),_.useFetchStreams,_.isUsingEmulator)}(r._databaseId,((n=r._app)==null?void 0:n.options.appId)||"",r._persistenceKey,t);r._componentsProvider||(i=t.localCache)!=null&&i._offlineComponentProvider&&((o=t.localCache)!=null&&o._onlineComponentProvider)&&(r._componentsProvider={_offline:t.localCache._offlineComponentProvider,_online:t.localCache._onlineComponentProvider}),r._firestoreClient=new xf(r._authCredentials,r._appCheckCredentials,r._queue,e,r._componentsProvider&&function(c){const d=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(d),_online:d}}(r._componentsProvider))}/**
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
 */class Gt{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Gt(vt.fromBase64String(t))}catch(e){throw new F(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Gt(vt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:Gt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(Gn(t,Gt._jsonSchema))return Gt.fromBase64String(t.bytes)}}Gt._jsonSchemaVersion="firestore/bytes/1.0",Gt._jsonSchema={type:ut("string",Gt._jsonSchemaVersion),bytes:ut("string")};/**
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
 */class Ol{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new F(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ct(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class he{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new F(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new F(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return z(this._lat,t._lat)||z(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:he._jsonSchemaVersion}}static fromJSON(t){if(Gn(t,he._jsonSchema))return new he(t.latitude,t.longitude)}}he._jsonSchemaVersion="firestore/geoPoint/1.0",he._jsonSchema={type:ut("string",he._jsonSchemaVersion),latitude:ut("number"),longitude:ut("number")};/**
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
 */class de{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(n,i){if(n.length!==i.length)return!1;for(let o=0;o<n.length;++o)if(n[o]!==i[o])return!1;return!0}(this._values,t._values)}toJSON(){return{type:de._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(Gn(t,de._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every(e=>typeof e=="number"))return new de(t.vectorValues);throw new F(V.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}de._jsonSchemaVersion="firestore/vectorValue/1.0",de._jsonSchema={type:ut("string",de._jsonSchemaVersion),vectorValues:ut("object")};const Kf=new RegExp("[~\\*/\\[\\]]");function Wf(r,t,e){if(t.search(Kf)>=0)throw ma(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,r);try{return new Ol(...t.split("."))._internalPath}catch{throw ma(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r)}}function ma(r,t,e,n,i){let o=`Function ${t}() called with invalid data`;o+=". ";let l="";return new F(V.INVALID_ARGUMENT,o+r+l)}/**
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
 */class Ll{constructor(t,e,n,i,o){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new Nt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Qf(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Ml("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class Qf extends Ll{data(){return super.data()}}function Ml(r,t){return typeof t=="string"?Wf(r,t):t instanceof Ol?t._internalPath:t._delegate._internalPath}/**
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
 */function $f(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new F(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Yf{convertValue(t,e="none"){switch(me(t)){case 0:return null;case 1:return t.booleanValue;case 2:return it(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(pe(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw q(62114,{value:t})}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const n={};return zn(t,(i,o)=>{n[i]=this.convertValue(o,e)}),n}convertVectorValue(t){var n,i,o;const e=(o=(i=(n=t.fields)==null?void 0:n[Ns].arrayValue)==null?void 0:i.values)==null?void 0:o.map(l=>it(l.doubleValue));return new de(e)}convertGeoPoint(t){return new he(it(t.latitude),it(t.longitude))}convertArray(t,e){return(t.values||[]).map(n=>this.convertValue(n,e))}convertServerTimestamp(t,e){switch(e){case"previous":const n=Gr(t);return n==null?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(Bn(t));default:return null}}convertTimestamp(t){const e=ge(t);return new lt(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=tt.fromString(t);et(fl(n),9688,{name:t});const i=new jn(n.get(1),n.get(3)),o=new B(n.popFirst(5));return i.isEqual(e)||te(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}class Tr{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Qe extends Ll{constructor(t,e,n,i,o,l){super(t,e,n,i,l),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new br(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(Ml("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new F(V.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,e={};return e.type=Qe._jsonSchemaVersion,e.bundle="",e.bundleSource="DocumentSnapshot",e.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?e:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),e.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),e)}}Qe._jsonSchemaVersion="firestore/documentSnapshot/1.0",Qe._jsonSchema={type:ut("string",Qe._jsonSchemaVersion),bundleSource:ut("string","DocumentSnapshot"),bundleName:ut("string"),bundle:ut("string")};class br extends Qe{data(t={}){return super.data(t)}}class $e{constructor(t,e,n,i){this._firestore=t,this._userDataWriter=e,this._snapshot=i,this.metadata=new Tr(i.hasPendingWrites,i.fromCache),this.query=n}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(n=>{t.call(e,new br(this._firestore,this._userDataWriter,n.key,n,new Tr(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new F(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(i,o){if(i._snapshot.oldDocs.isEmpty()){let l=0;return i._snapshot.docChanges.map(c=>{const d=new br(i._firestore,i._userDataWriter,c.doc.key,c.doc,new Tr(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);return c.doc,{type:"added",doc:d,oldIndex:-1,newIndex:l++}})}{let l=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(c=>o||c.type!==3).map(c=>{const d=new br(i._firestore,i._userDataWriter,c.doc.key,c.doc,new Tr(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);let f=-1,_=-1;return c.type!==0&&(f=l.indexOf(c.doc.key),l=l.delete(c.doc.key)),c.type!==1&&(l=l.add(c.doc),_=l.indexOf(c.doc.key)),{type:Xf(c.type),doc:d,oldIndex:f,newIndex:_}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new F(V.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=$e._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=Ma.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const e=[],n=[],i=[];return this.docs.forEach(o=>{o._document!==null&&(e.push(o._document),n.push(this._userDataWriter.convertObjectMap(o._document.data.value.mapValue.fields,"previous")),i.push(o.ref.path))}),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function Xf(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return q(61501,{type:r})}}$e._jsonSchemaVersion="firestore/querySnapshot/1.0",$e._jsonSchema={type:ut("string",$e._jsonSchemaVersion),bundleSource:ut("string","QuerySnapshot"),bundleName:ut("string"),bundle:ut("string")};class Jf extends Yf{constructor(t){super(),this.firestore=t}convertBytes(t){return new Gt(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Nt(this.firestore,null,e)}}function og(r){r=Ds(r,Xr);const t=Ds(r.firestore,Nl),e=zf(t),n=new Jf(t);return $f(r._query),jf(e,r._query).then(i=>new $e(t,n,r,i))}(function(t,e=!0){(function(i){sn=i})(xc),kr(new xn("firestore",(n,{instanceIdentifier:i,options:o})=>{const l=n.getProvider("app").getImmediate(),c=new Nl(new Xc(n.getProvider("auth-internal")),new th(l,n.getProvider("app-check-internal")),function(f,_){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new F(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new jn(f.options.projectId,_)}(l,i),l);return o={useFetchStreams:e,...o},c._setSettings(o),c},"PUBLIC").setMultipleInstances(!0)),ze(To,Io,t),ze(To,Io,"esm2020")})();var Zf="firebase",tg="12.1.0";/**
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
 */ze(Zf,tg,"app");const eg={apiKey:"AIzaSyDOWFazlwHsZjgXU5a-7EuHuSOO3o_U2Gg",authDomain:"vet-cat.firebaseapp.com",projectId:"vet-cat",storageBucket:"vet-cat.firebasestorage.app",messagingSenderId:"1058557590103",appId:"1:1058557590103:web:0918d3d62a4451a0568112"},ng=Sa(eg),ag=Gf(ng);export{og as a,ig as c,ag as d,Bt as g,rg as i};
