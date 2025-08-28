(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function e(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=e(i);fetch(i.href,o)}})();function yt(r,t,e,n=!0){if(r&&e){const i={add:()=>r.classList.add(e),remove:()=>r.classList.remove(e),toggle:()=>r.classList.toggle(e),toggleBoolean:()=>r.classList.toggle(e,n),contains:()=>r.classList.contains(e)};if(i[t])return i[t]()}}function Ma(r,t=document){return t.querySelectorAll(r)}function qt(r,t=document){return t?t.querySelector(r):null}function Cp(r,t=null){const e=document.createElement(r);if(t){if(Array.isArray(t))return t.forEach(n=>yt(e,"add",n)),e;yt(e,"add",t)}return e}function Bu(){const r=Ma(".sidebar-sub-list");r.forEach(t=>{t.addEventListener("click",()=>{r.forEach(e=>{t===e?(e.style.pointerEvents="none",yt(e,"toggle","sidebar-sub-list_active"),setTimeout(()=>{e.style.pointerEvents="auto"},300)):yt(e,"remove","sidebar-sub-list_active")})})})}var Rr={exports:{}},ju=Rr.exports,wo;function qu(){return wo||(wo=1,function(r,t){(function(n,i){r.exports=i()})(ju,function(){return function(e){var n={};function i(o){if(n[o])return n[o].exports;var l=n[o]={i:o,l:!1,exports:{}};return e[o].call(l.exports,l,l.exports,i),l.l=!0,l.exports}return i.m=e,i.c=n,i.d=function(o,l,c){i.o(o,l)||Object.defineProperty(o,l,{enumerable:!0,get:c})},i.r=function(o){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})},i.t=function(o,l){if(l&1&&(o=i(o)),l&8||l&4&&typeof o=="object"&&o&&o.__esModule)return o;var c=Object.create(null);if(i.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:o}),l&2&&typeof o!="string")for(var h in o)i.d(c,h,(function(f){return o[f]}).bind(null,h));return c},i.n=function(o){var l=o&&o.__esModule?function(){return o.default}:function(){return o};return i.d(l,"a",l),l},i.o=function(o,l){return Object.prototype.hasOwnProperty.call(o,l)},i.p="",i(i.s=0)}([function(e,n,i){i.r(n);var o=function(g){return Array.isArray(g)?g:[g]},l=function(g){return g instanceof Node},c=function(g){return g instanceof NodeList},h=function(g,V){if(g&&V){g=c(g)?g:[g];for(var O=0;O<g.length&&V(g[O],O,g.length)!==!0;O++);}},f=function(g){return console.error("[scroll-lock] ".concat(g))},_=function(g){if(Array.isArray(g)){var V=g.join(", ");return V}},S=function(g){var V=[];return h(g,function(O){return V.push(O)}),V},w=function(g,V){var O=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0,F=arguments.length>3&&arguments[3]!==void 0?arguments[3]:document;if(O&&S(F.querySelectorAll(V)).indexOf(g)!==-1)return g;for(;(g=g.parentElement)&&S(F.querySelectorAll(V)).indexOf(g)===-1;);return g},P=function(g,V){var O=arguments.length>2&&arguments[2]!==void 0?arguments[2]:document,F=S(O.querySelectorAll(V)).indexOf(g)!==-1;return F},k=function(g){if(g){var V=getComputedStyle(g),O=V.overflow==="hidden";return O}},B=function(g){if(g){if(k(g))return!0;var V=g.scrollTop;return V<=0}},x=function(g){if(g){if(k(g))return!0;var V=g.scrollTop,O=g.scrollHeight,F=V+g.offsetHeight;return F>=O}},J=function(g){if(g){if(k(g))return!0;var V=g.scrollLeft;return V<=0}},G=function(g){if(g){if(k(g))return!0;var V=g.scrollLeft,O=g.scrollWidth,F=V+g.offsetWidth;return F>=O}},Y=function(g){var V='textarea, [contenteditable="true"]';return P(g,V)},rt=function(g){var V='input[type="range"]';return P(g,V)};i.d(n,"disablePageScroll",function(){return v}),i.d(n,"enablePageScroll",function(){return E}),i.d(n,"getScrollState",function(){return I}),i.d(n,"clearQueueScrollLocks",function(){return y}),i.d(n,"getTargetScrollBarWidth",function(){return Ct}),i.d(n,"getCurrentTargetScrollBarWidth",function(){return Ut}),i.d(n,"getPageScrollBarWidth",function(){return cn}),i.d(n,"getCurrentPageScrollBarWidth",function(){return $t}),i.d(n,"addScrollableTarget",function(){return Bt}),i.d(n,"removeScrollableTarget",function(){return Te}),i.d(n,"addScrollableSelector",function(){return hn}),i.d(n,"removeScrollableSelector",function(){return Zn}),i.d(n,"addLockableTarget",function(){return Mt}),i.d(n,"addLockableSelector",function(){return dt}),i.d(n,"setFillGapMethod",function(){return tr}),i.d(n,"addFillGapTarget",function(){return Yt}),i.d(n,"removeFillGapTarget",function(){return er}),i.d(n,"addFillGapSelector",function(){return Xt}),i.d(n,"removeFillGapSelector",function(){return nr}),i.d(n,"refillGaps",function(){return Ne});function Lt(N){for(var g=1;g<arguments.length;g++){var V=arguments[g]!=null?arguments[g]:{},O=Object.keys(V);typeof Object.getOwnPropertySymbols=="function"&&(O=O.concat(Object.getOwnPropertySymbols(V).filter(function(F){return Object.getOwnPropertyDescriptor(V,F).enumerable}))),O.forEach(function(F){ht(N,F,V[F])})}return N}function ht(N,g,V){return g in N?Object.defineProperty(N,g,{value:V,enumerable:!0,configurable:!0,writable:!0}):N[g]=V,N}var T=["padding","margin","width","max-width","none"],m=3,p={scroll:!0,queue:0,scrollableSelectors:["[data-scroll-lock-scrollable]"],lockableSelectors:["body","[data-scroll-lock-lockable]"],fillGapSelectors:["body","[data-scroll-lock-fill-gap]","[data-scroll-lock-lockable]"],fillGapMethod:T[0],startTouchY:0,startTouchX:0},v=function(g){p.queue<=0&&(p.scroll=!1,re(),gn()),Bt(g),p.queue++},E=function(g){p.queue>0&&p.queue--,p.queue<=0&&(p.scroll=!0,ke(),os()),Te(g)},I=function(){return p.scroll},y=function(){p.queue=0},Ct=function(g){var V=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(l(g)){var O=g.style.overflowY;V?I()||(g.style.overflowY=g.getAttribute("data-scroll-lock-saved-overflow-y-property")):g.style.overflowY="scroll";var F=Ut(g);return g.style.overflowY=O,F}else return 0},Ut=function(g){if(l(g))if(g===document.body){var V=document.documentElement.clientWidth,O=window.innerWidth,F=O-V;return F}else{var Nt=g.style.borderLeftWidth,jt=g.style.borderRightWidth;g.style.borderLeftWidth="0px",g.style.borderRightWidth="0px";var kt=g.offsetWidth-g.clientWidth;return g.style.borderLeftWidth=Nt,g.style.borderRightWidth=jt,kt}else return 0},cn=function(){var g=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;return Ct(document.body,g)},$t=function(){return Ut(document.body)},Bt=function(g){if(g){var V=o(g);V.map(function(O){h(O,function(F){l(F)?F.setAttribute("data-scroll-lock-scrollable",""):f('"'.concat(F,'" is not a Element.'))})})}},Te=function(g){if(g){var V=o(g);V.map(function(O){h(O,function(F){l(F)?F.removeAttribute("data-scroll-lock-scrollable"):f('"'.concat(F,'" is not a Element.'))})})}},hn=function(g){if(g){var V=o(g);V.map(function(O){p.scrollableSelectors.push(O)})}},Zn=function(g){if(g){var V=o(g);V.map(function(O){p.scrollableSelectors=p.scrollableSelectors.filter(function(F){return F!==O})})}},Mt=function(g){if(g){var V=o(g);V.map(function(O){h(O,function(F){l(F)?F.setAttribute("data-scroll-lock-lockable",""):f('"'.concat(F,'" is not a Element.'))})}),I()||re()}},dt=function(g){if(g){var V=o(g);V.map(function(O){p.lockableSelectors.push(O)}),I()||re(),Xt(g)}},tr=function(g){if(g)if(T.indexOf(g)!==-1)p.fillGapMethod=g,Ne();else{var V=T.join(", ");f('"'.concat(g,`" method is not available!
Available fill gap methods: `).concat(V,"."))}},Yt=function(g){if(g){var V=o(g);V.map(function(O){h(O,function(F){l(F)?(F.setAttribute("data-scroll-lock-fill-gap",""),p.scroll||yn(F)):f('"'.concat(F,'" is not a Element.'))})})}},er=function(g){if(g){var V=o(g);V.map(function(O){h(O,function(F){l(F)?(F.removeAttribute("data-scroll-lock-fill-gap"),p.scroll||Le(F)):f('"'.concat(F,'" is not a Element.'))})})}},Xt=function(g){if(g){var V=o(g);V.map(function(O){p.fillGapSelectors.indexOf(O)===-1&&(p.fillGapSelectors.push(O),p.scroll||rr(O))})}},nr=function(g){if(g){var V=o(g);V.map(function(O){p.fillGapSelectors=p.fillGapSelectors.filter(function(F){return F!==O}),p.scroll||Oe(O)})}},Ne=function(){p.scroll||gn()},re=function(){var g=_(p.lockableSelectors);dn(g)},ke=function(){var g=_(p.lockableSelectors);fn(g)},dn=function(g){var V=document.querySelectorAll(g);h(V,function(O){pn(O)})},fn=function(g){var V=document.querySelectorAll(g);h(V,function(O){mn(O)})},pn=function(g){if(l(g)&&g.getAttribute("data-scroll-lock-locked")!=="true"){var V=window.getComputedStyle(g);g.setAttribute("data-scroll-lock-saved-overflow-y-property",V.overflowY),g.setAttribute("data-scroll-lock-saved-inline-overflow-property",g.style.overflow),g.setAttribute("data-scroll-lock-saved-inline-overflow-y-property",g.style.overflowY),g.style.overflow="hidden",g.setAttribute("data-scroll-lock-locked","true")}},mn=function(g){l(g)&&g.getAttribute("data-scroll-lock-locked")==="true"&&(g.style.overflow=g.getAttribute("data-scroll-lock-saved-inline-overflow-property"),g.style.overflowY=g.getAttribute("data-scroll-lock-saved-inline-overflow-y-property"),g.removeAttribute("data-scroll-lock-saved-overflow-property"),g.removeAttribute("data-scroll-lock-saved-inline-overflow-property"),g.removeAttribute("data-scroll-lock-saved-inline-overflow-y-property"),g.removeAttribute("data-scroll-lock-locked"))},gn=function(){p.fillGapSelectors.map(function(g){rr(g)})},os=function(){p.fillGapSelectors.map(function(g){Oe(g)})},rr=function(g){var V=document.querySelectorAll(g),O=p.lockableSelectors.indexOf(g)!==-1;h(V,function(F){yn(F,O)})},yn=function(g){var V=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(l(g)){var O;if(g.getAttribute("data-scroll-lock-lockable")===""||V)O=Ct(g,!0);else{var F=w(g,_(p.lockableSelectors));O=Ct(F,!0)}g.getAttribute("data-scroll-lock-filled-gap")==="true"&&Le(g);var Nt=window.getComputedStyle(g);if(g.setAttribute("data-scroll-lock-filled-gap","true"),g.setAttribute("data-scroll-lock-current-fill-gap-method",p.fillGapMethod),p.fillGapMethod==="margin"){var jt=parseFloat(Nt.marginRight);g.style.marginRight="".concat(jt+O,"px")}else if(p.fillGapMethod==="width")g.style.width="calc(100% - ".concat(O,"px)");else if(p.fillGapMethod==="max-width")g.style.maxWidth="calc(100% - ".concat(O,"px)");else if(p.fillGapMethod==="padding"){var kt=parseFloat(Nt.paddingRight);g.style.paddingRight="".concat(kt+O,"px")}}},Oe=function(g){var V=document.querySelectorAll(g);h(V,function(O){Le(O)})},Le=function(g){if(l(g)&&g.getAttribute("data-scroll-lock-filled-gap")==="true"){var V=g.getAttribute("data-scroll-lock-current-fill-gap-method");g.removeAttribute("data-scroll-lock-filled-gap"),g.removeAttribute("data-scroll-lock-current-fill-gap-method"),V==="margin"?g.style.marginRight="":V==="width"?g.style.width="":V==="max-width"?g.style.maxWidth="":V==="padding"&&(g.style.paddingRight="")}},as=function(g){Ne()},_n=function(g){p.scroll||(p.startTouchY=g.touches[0].clientY,p.startTouchX=g.touches[0].clientX)},vn=function(g){if(!p.scroll){var V=p.startTouchY,O=p.startTouchX,F=g.touches[0].clientY,Nt=g.touches[0].clientX;if(g.touches.length<2){var jt=_(p.scrollableSelectors),kt={up:V<F,down:V>F,left:O<Nt,right:O>Nt},Me={up:V+m<F,down:V-m>F,left:O+m<Nt,right:O-m>Nt},ls=function xe(it){var ir=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(it){var Jt=w(it,jt,!1);if(rt(it))return!1;if(ir||Y(it)&&w(it,jt)||P(it,jt)){var se=!1;J(it)&&G(it)?(kt.up&&B(it)||kt.down&&x(it))&&(se=!0):B(it)&&x(it)?(kt.left&&J(it)||kt.right&&G(it))&&(se=!0):(Me.up&&B(it)||Me.down&&x(it)||Me.left&&J(it)||Me.right&&G(it))&&(se=!0),se&&(Jt?xe(Jt,!0):g.cancelable&&g.preventDefault())}else xe(Jt)}else g.cancelable&&g.preventDefault()};ls(g.target)}}},sr=function(g){p.scroll||(p.startTouchY=0,p.startTouchX=0)};typeof window<"u"&&window.addEventListener("resize",as),typeof document<"u"&&(document.addEventListener("touchstart",_n),document.addEventListener("touchmove",vn,{passive:!1}),document.addEventListener("touchend",sr));var mt={hide:function(g){f(`"hide" is deprecated! Use "disablePageScroll" instead. 
 https://github.com/FL3NKEY/scroll-lock#disablepagescrollscrollabletarget`),v(g)},show:function(g){f(`"show" is deprecated! Use "enablePageScroll" instead. 
 https://github.com/FL3NKEY/scroll-lock#enablepagescrollscrollabletarget`),E(g)},toggle:function(g){f('"toggle" is deprecated! Do not use it.'),I()?v():E(g)},getState:function(){return f(`"getState" is deprecated! Use "getScrollState" instead. 
 https://github.com/FL3NKEY/scroll-lock#getscrollstate`),I()},getWidth:function(){return f(`"getWidth" is deprecated! Use "getPageScrollBarWidth" instead. 
 https://github.com/FL3NKEY/scroll-lock#getpagescrollbarwidth`),cn()},getCurrentWidth:function(){return f(`"getCurrentWidth" is deprecated! Use "getCurrentPageScrollBarWidth" instead. 
 https://github.com/FL3NKEY/scroll-lock#getcurrentpagescrollbarwidth`),$t()},setScrollableTargets:function(g){f(`"setScrollableTargets" is deprecated! Use "addScrollableTarget" instead. 
 https://github.com/FL3NKEY/scroll-lock#addscrollabletargetscrollabletarget`),Bt(g)},setFillGapSelectors:function(g){f(`"setFillGapSelectors" is deprecated! Use "addFillGapSelector" instead. 
 https://github.com/FL3NKEY/scroll-lock#addfillgapselectorfillgapselector`),Xt(g)},setFillGapTargets:function(g){f(`"setFillGapTargets" is deprecated! Use "addFillGapTarget" instead. 
 https://github.com/FL3NKEY/scroll-lock#addfillgaptargetfillgaptarget`),Yt(g)},clearQueue:function(){f(`"clearQueue" is deprecated! Use "clearQueueScrollLocks" instead. 
 https://github.com/FL3NKEY/scroll-lock#clearqueuescrolllocks`),y()}},_t=Lt({disablePageScroll:v,enablePageScroll:E,getScrollState:I,clearQueueScrollLocks:y,getTargetScrollBarWidth:Ct,getCurrentTargetScrollBarWidth:Ut,getPageScrollBarWidth:cn,getCurrentPageScrollBarWidth:$t,addScrollableSelector:hn,removeScrollableSelector:Zn,addScrollableTarget:Bt,removeScrollableTarget:Te,addLockableSelector:dt,addLockableTarget:Mt,addFillGapSelector:Xt,removeFillGapSelector:nr,addFillGapTarget:Yt,removeFillGapTarget:er,setFillGapMethod:tr,refillGaps:Ne,_state:p},mt);n.default=_t}]).default})}(Rr)),Rr.exports}var Nr=qu();function Gu(){const r=qt(".burger-icon"),t=qt(".sidebar"),e=qt(".dark-background"),n=Ma(".sidebar-sub-list");function i(l){if(l){yt(t,"add","sidebar_open"),yt(e,"remove","dark-background_hidden"),Nr.disablePageScroll(t);return}yt(t,"remove","sidebar_open"),yt(e,"add","dark-background_hidden"),Nr.enablePageScroll()}e.addEventListener("click",()=>{i(!1),yt(r,"remove","burger-icon_open"),n.forEach(l=>{yt(l,"remove","sidebar-sub-list_active")})});const o=()=>{r.style.pointerEvents="none",n.forEach(c=>{yt(c,"remove","sidebar-sub-list_active")});const l=yt(r,"toggle","burger-icon_open");i(l),setTimeout(()=>{r.style.pointerEvents="auto"},300)};r.addEventListener("click",o)}function zu(){const r=qt(".header__icon-search-icon"),t=qt(".header__search"),e=qt(".input__field",t),n=qt(".dark-background"),i=qt(".header__search-close"),o=qt(".sidebar"),l=qt(".burger-icon");n.addEventListener("click",c),i.addEventListener("click",c);function c(){e.value="",yt(n,"add","dark-background_hidden"),yt(t,"remove","header__search_open"),Nr.enablePageScroll()}r.addEventListener("click",h=>{yt(t,"toggle","header__search_open"),yt(n,"remove","dark-background_hidden"),yt(o,"remove","sidebar_open"),yt(l,"remove","burger-icon_open"),e.focus(),Nr.disablePageScroll()}),window.addEventListener("resize",h=>{window.innerWidth<768&&(t.style.display="none",setTimeout(()=>{t.style.display="block"},0))})}function Pp(){Bu(),Gu(),zu()}const Hu=()=>{};var So={};/**
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
 */const xa=function(r){const t=[];let e=0;for(let n=0;n<r.length;n++){let i=r.charCodeAt(n);i<128?t[e++]=i:i<2048?(t[e++]=i>>6|192,t[e++]=i&63|128):(i&64512)===55296&&n+1<r.length&&(r.charCodeAt(n+1)&64512)===56320?(i=65536+((i&1023)<<10)+(r.charCodeAt(++n)&1023),t[e++]=i>>18|240,t[e++]=i>>12&63|128,t[e++]=i>>6&63|128,t[e++]=i&63|128):(t[e++]=i>>12|224,t[e++]=i>>6&63|128,t[e++]=i&63|128)}return t},Ku=function(r){const t=[];let e=0,n=0;for(;e<r.length;){const i=r[e++];if(i<128)t[n++]=String.fromCharCode(i);else if(i>191&&i<224){const o=r[e++];t[n++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=r[e++],l=r[e++],c=r[e++],h=((i&7)<<18|(o&63)<<12|(l&63)<<6|c&63)-65536;t[n++]=String.fromCharCode(55296+(h>>10)),t[n++]=String.fromCharCode(56320+(h&1023))}else{const o=r[e++],l=r[e++];t[n++]=String.fromCharCode((i&15)<<12|(o&63)<<6|l&63)}}return t.join("")},Fa={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,t){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let i=0;i<r.length;i+=3){const o=r[i],l=i+1<r.length,c=l?r[i+1]:0,h=i+2<r.length,f=h?r[i+2]:0,_=o>>2,S=(o&3)<<4|c>>4;let w=(c&15)<<2|f>>6,P=f&63;h||(P=64,l||(w=64)),n.push(e[_],e[S],e[w],e[P])}return n.join("")},encodeString(r,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(r):this.encodeByteArray(xa(r),t)},decodeString(r,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(r):Ku(this.decodeStringToByteArray(r,t))},decodeStringToByteArray(r,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let i=0;i<r.length;){const o=e[r.charAt(i++)],c=i<r.length?e[r.charAt(i)]:0;++i;const f=i<r.length?e[r.charAt(i)]:64;++i;const S=i<r.length?e[r.charAt(i)]:64;if(++i,o==null||c==null||f==null||S==null)throw new Qu;const w=o<<2|c>>4;if(n.push(w),f!==64){const P=c<<4&240|f>>2;if(n.push(P),S!==64){const k=f<<6&192|S;n.push(k)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class Qu extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Wu=function(r){const t=xa(r);return Fa.encodeByteArray(t,!0)},kr=function(r){return Wu(r).replace(/\./g,"")},$u=function(r){try{return Fa.decodeString(r,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function Yu(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Xu=()=>Yu().__FIREBASE_DEFAULTS__,Ju=()=>{if(typeof process>"u"||typeof So>"u")return;const r=So.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},Zu=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=r&&$u(r[1]);return t&&JSON.parse(t)},ni=()=>{try{return Hu()||Xu()||Ju()||Zu()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},tc=r=>{var t,e;return(e=(t=ni())==null?void 0:t.emulatorHosts)==null?void 0:e[r]},ec=r=>{const t=tc(r);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const n=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),n]:[t.substring(0,e),n]},Ua=()=>{var r;return(r=ni())==null?void 0:r.config};/**
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
 */class nc{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,n))}}}/**
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
 */function ri(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function rc(r){return(await fetch(r,{credentials:"include"})).ok}/**
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
 */function sc(r,t){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},n=t||"demo-project",i=r.iat||0,o=r.sub||r.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const l={iss:`https://securetoken.google.com/${n}`,aud:n,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}},...r};return[kr(JSON.stringify(e)),kr(JSON.stringify(l)),""].join(".")}const Ln={};function ic(){const r={prod:[],emulator:[]};for(const t of Object.keys(Ln))Ln[t]?r.emulator.push(t):r.prod.push(t);return r}function oc(r){let t=document.getElementById(r),e=!1;return t||(t=document.createElement("div"),t.setAttribute("id",r),e=!0),{created:e,element:t}}let Ro=!1;function ac(r,t){if(typeof window>"u"||typeof document>"u"||!ri(window.location.host)||Ln[r]===t||Ln[r]||Ro)return;Ln[r]=t;function e(w){return`__firebase__banner__${w}`}const n="__firebase__banner",o=ic().prod.length>0;function l(){const w=document.getElementById(n);w&&w.remove()}function c(w){w.style.display="flex",w.style.background="#7faaf0",w.style.position="fixed",w.style.bottom="5px",w.style.left="5px",w.style.padding=".5em",w.style.borderRadius="5px",w.style.alignItems="center"}function h(w,P){w.setAttribute("width","24"),w.setAttribute("id",P),w.setAttribute("height","24"),w.setAttribute("viewBox","0 0 24 24"),w.setAttribute("fill","none"),w.style.marginLeft="-6px"}function f(){const w=document.createElement("span");return w.style.cursor="pointer",w.style.marginLeft="16px",w.style.fontSize="24px",w.innerHTML=" &times;",w.onclick=()=>{Ro=!0,l()},w}function _(w,P){w.setAttribute("id",P),w.innerText="Learn more",w.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",w.setAttribute("target","__blank"),w.style.paddingLeft="5px",w.style.textDecoration="underline"}function S(){const w=oc(n),P=e("text"),k=document.getElementById(P)||document.createElement("span"),B=e("learnmore"),x=document.getElementById(B)||document.createElement("a"),J=e("preprendIcon"),G=document.getElementById(J)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(w.created){const Y=w.element;c(Y),_(x,B);const rt=f();h(G,J),Y.append(G,k,x,rt),document.body.appendChild(Y)}o?(k.innerText="Preview backend disconnected.",G.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
 */function lc(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function uc(){var t;const r=(t=ni())==null?void 0:t.forceEnvironment;if(r==="node")return!0;if(r==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function cc(){return!uc()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function hc(){try{return typeof indexedDB=="object"}catch{return!1}}function dc(){return new Promise((r,t)=>{try{let e=!0;const n="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(n);i.onsuccess=()=>{i.result.close(),e||self.indexedDB.deleteDatabase(n),r(!0)},i.onupgradeneeded=()=>{e=!1},i.onerror=()=>{var o;t(((o=i.error)==null?void 0:o.message)||"")}}catch(e){t(e)}})}/**
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
 */const fc="FirebaseError";class rn extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=fc,Object.setPrototypeOf(this,rn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ba.prototype.create)}}class Ba{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},i=`${this.service}/${t}`,o=this.errors[t],l=o?pc(o,n):"Error",c=`${this.serviceName}: ${l} (${i}).`;return new rn(i,c,n)}}function pc(r,t){return r.replace(mc,(e,n)=>{const i=t[n];return i!=null?String(i):`<${n}?>`})}const mc=/\{\$([^}]+)}/g;function Or(r,t){if(r===t)return!0;const e=Object.keys(r),n=Object.keys(t);for(const i of e){if(!n.includes(i))return!1;const o=r[i],l=t[i];if(bo(o)&&bo(l)){if(!Or(o,l))return!1}else if(o!==l)return!1}for(const i of n)if(!e.includes(i))return!1;return!0}function bo(r){return r!==null&&typeof r=="object"}/**
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
 */function Bn(r){return r&&r._delegate?r._delegate:r}class jn{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Re="[DEFAULT]";/**
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
 */class gc{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const n=new nc;if(this.instancesDeferred.set(e,n),this.isInitialized(e)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:e});i&&n.resolve(i)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){const e=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),n=(t==null?void 0:t.optional)??!1;if(this.isInitialized(e)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:e})}catch(i){if(n)return null;throw i}else{if(n)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(_c(t))try{this.getOrInitializeService({instanceIdentifier:Re})}catch{}for(const[e,n]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:i});n.resolve(o)}catch{}}}}clearInstance(t=Re){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Re){return this.instances.has(t)}getOptions(t=Re){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[o,l]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(o);n===c&&l.resolve(i)}return i}onInit(t,e){const n=this.normalizeInstanceIdentifier(e),i=this.onInitCallbacks.get(n)??new Set;i.add(t),this.onInitCallbacks.set(n,i);const o=this.instances.get(n);return o&&t(o,n),()=>{i.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const i of n)try{i(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:yc(t),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch{}return n||null}normalizeInstanceIdentifier(t=Re){return this.component?this.component.multipleInstances?t:Re:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function yc(r){return r===Re?void 0:r}function _c(r){return r.instantiationMode==="EAGER"}/**
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
 */class vc{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new gc(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var K;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(K||(K={}));const Ec={debug:K.DEBUG,verbose:K.VERBOSE,info:K.INFO,warn:K.WARN,error:K.ERROR,silent:K.SILENT},Tc=K.INFO,Ic={[K.DEBUG]:"log",[K.VERBOSE]:"log",[K.INFO]:"info",[K.WARN]:"warn",[K.ERROR]:"error"},Ac=(r,t,...e)=>{if(t<r.logLevel)return;const n=new Date().toISOString(),i=Ic[t];if(i)console[i](`[${n}]  ${r.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class ja{constructor(t){this.name=t,this._logLevel=Tc,this._logHandler=Ac,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in K))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Ec[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,K.DEBUG,...t),this._logHandler(this,K.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,K.VERBOSE,...t),this._logHandler(this,K.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,K.INFO,...t),this._logHandler(this,K.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,K.WARN,...t),this._logHandler(this,K.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,K.ERROR,...t),this._logHandler(this,K.ERROR,...t)}}const wc=(r,t)=>t.some(e=>r instanceof e);let Co,Po;function Sc(){return Co||(Co=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Rc(){return Po||(Po=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const qa=new WeakMap,Ns=new WeakMap,Ga=new WeakMap,Is=new WeakMap,si=new WeakMap;function bc(r){const t=new Promise((e,n)=>{const i=()=>{r.removeEventListener("success",o),r.removeEventListener("error",l)},o=()=>{e(ce(r.result)),i()},l=()=>{n(r.error),i()};r.addEventListener("success",o),r.addEventListener("error",l)});return t.then(e=>{e instanceof IDBCursor&&qa.set(e,r)}).catch(()=>{}),si.set(t,r),t}function Cc(r){if(Ns.has(r))return;const t=new Promise((e,n)=>{const i=()=>{r.removeEventListener("complete",o),r.removeEventListener("error",l),r.removeEventListener("abort",l)},o=()=>{e(),i()},l=()=>{n(r.error||new DOMException("AbortError","AbortError")),i()};r.addEventListener("complete",o),r.addEventListener("error",l),r.addEventListener("abort",l)});Ns.set(r,t)}let ks={get(r,t,e){if(r instanceof IDBTransaction){if(t==="done")return Ns.get(r);if(t==="objectStoreNames")return r.objectStoreNames||Ga.get(r);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return ce(r[t])},set(r,t,e){return r[t]=e,!0},has(r,t){return r instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in r}};function Pc(r){ks=r(ks)}function Vc(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const n=r.call(As(this),t,...e);return Ga.set(n,t.sort?t.sort():[t]),ce(n)}:Rc().includes(r)?function(...t){return r.apply(As(this),t),ce(qa.get(this))}:function(...t){return ce(r.apply(As(this),t))}}function Dc(r){return typeof r=="function"?Vc(r):(r instanceof IDBTransaction&&Cc(r),wc(r,Sc())?new Proxy(r,ks):r)}function ce(r){if(r instanceof IDBRequest)return bc(r);if(Is.has(r))return Is.get(r);const t=Dc(r);return t!==r&&(Is.set(r,t),si.set(t,r)),t}const As=r=>si.get(r);function Nc(r,t,{blocked:e,upgrade:n,blocking:i,terminated:o}={}){const l=indexedDB.open(r,t),c=ce(l);return n&&l.addEventListener("upgradeneeded",h=>{n(ce(l.result),h.oldVersion,h.newVersion,ce(l.transaction),h)}),e&&l.addEventListener("blocked",h=>e(h.oldVersion,h.newVersion,h)),c.then(h=>{o&&h.addEventListener("close",()=>o()),i&&h.addEventListener("versionchange",f=>i(f.oldVersion,f.newVersion,f))}).catch(()=>{}),c}const kc=["get","getKey","getAll","getAllKeys","count"],Oc=["put","add","delete","clear"],ws=new Map;function Vo(r,t){if(!(r instanceof IDBDatabase&&!(t in r)&&typeof t=="string"))return;if(ws.get(t))return ws.get(t);const e=t.replace(/FromIndex$/,""),n=t!==e,i=Oc.includes(e);if(!(e in(n?IDBIndex:IDBObjectStore).prototype)||!(i||kc.includes(e)))return;const o=async function(l,...c){const h=this.transaction(l,i?"readwrite":"readonly");let f=h.store;return n&&(f=f.index(c.shift())),(await Promise.all([f[e](...c),i&&h.done]))[0]};return ws.set(t,o),o}Pc(r=>({...r,get:(t,e,n)=>Vo(t,e)||r.get(t,e,n),has:(t,e)=>!!Vo(t,e)||r.has(t,e)}));/**
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
 */class Lc{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(Mc(e)){const n=e.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(e=>e).join(" ")}}function Mc(r){const t=r.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Os="@firebase/app",Do="0.14.1";/**
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
 */const ee=new ja("@firebase/app"),xc="@firebase/app-compat",Fc="@firebase/analytics-compat",Uc="@firebase/analytics",Bc="@firebase/app-check-compat",jc="@firebase/app-check",qc="@firebase/auth",Gc="@firebase/auth-compat",zc="@firebase/database",Hc="@firebase/data-connect",Kc="@firebase/database-compat",Qc="@firebase/functions",Wc="@firebase/functions-compat",$c="@firebase/installations",Yc="@firebase/installations-compat",Xc="@firebase/messaging",Jc="@firebase/messaging-compat",Zc="@firebase/performance",th="@firebase/performance-compat",eh="@firebase/remote-config",nh="@firebase/remote-config-compat",rh="@firebase/storage",sh="@firebase/storage-compat",ih="@firebase/firestore",oh="@firebase/ai",ah="@firebase/firestore-compat",lh="firebase",uh="12.1.0";/**
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
 */const Ls="[DEFAULT]",ch={[Os]:"fire-core",[xc]:"fire-core-compat",[Uc]:"fire-analytics",[Fc]:"fire-analytics-compat",[jc]:"fire-app-check",[Bc]:"fire-app-check-compat",[qc]:"fire-auth",[Gc]:"fire-auth-compat",[zc]:"fire-rtdb",[Hc]:"fire-data-connect",[Kc]:"fire-rtdb-compat",[Qc]:"fire-fn",[Wc]:"fire-fn-compat",[$c]:"fire-iid",[Yc]:"fire-iid-compat",[Xc]:"fire-fcm",[Jc]:"fire-fcm-compat",[Zc]:"fire-perf",[th]:"fire-perf-compat",[eh]:"fire-rc",[nh]:"fire-rc-compat",[rh]:"fire-gcs",[sh]:"fire-gcs-compat",[ih]:"fire-fst",[ah]:"fire-fst-compat",[oh]:"fire-vertex","fire-js":"fire-js",[lh]:"fire-js-all"};/**
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
 */const Lr=new Map,hh=new Map,Ms=new Map;function No(r,t){try{r.container.addComponent(t)}catch(e){ee.debug(`Component ${t.name} failed to register with FirebaseApp ${r.name}`,e)}}function Mr(r){const t=r.name;if(Ms.has(t))return ee.debug(`There were multiple attempts to register component ${t}.`),!1;Ms.set(t,r);for(const e of Lr.values())No(e,r);for(const e of hh.values())No(e,r);return!0}function dh(r,t){const e=r.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),r.container.getProvider(t)}function fh(r){return r==null?!1:r.settings!==void 0}/**
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
 */const ph={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},he=new Ba("app","Firebase",ph);/**
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
 */class mh{constructor(t,e,n){this._isDeleted=!1,this._options={...t},this._config={...e},this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new jn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw he.create("app-deleted",{appName:this._name})}}/**
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
 */const gh=uh;function za(r,t={}){let e=r;typeof t!="object"&&(t={name:t});const n={name:Ls,automaticDataCollectionEnabled:!0,...t},i=n.name;if(typeof i!="string"||!i)throw he.create("bad-app-name",{appName:String(i)});if(e||(e=Ua()),!e)throw he.create("no-options");const o=Lr.get(i);if(o){if(Or(e,o.options)&&Or(n,o.config))return o;throw he.create("duplicate-app",{appName:i})}const l=new vc(i);for(const h of Ms.values())l.addComponent(h);const c=new mh(e,n,l);return Lr.set(i,c),c}function yh(r=Ls){const t=Lr.get(r);if(!t&&r===Ls&&Ua())return za();if(!t)throw he.create("no-app",{appName:r});return t}function Ke(r,t,e){let n=ch[r]??r;e&&(n+=`-${e}`);const i=n.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const l=[`Unable to register library "${n}" with version "${t}":`];i&&l.push(`library name "${n}" contains illegal characters (whitespace or "/")`),i&&o&&l.push("and"),o&&l.push(`version name "${t}" contains illegal characters (whitespace or "/")`),ee.warn(l.join(" "));return}Mr(new jn(`${n}-version`,()=>({library:n,version:t}),"VERSION"))}/**
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
 */const _h="firebase-heartbeat-database",vh=1,qn="firebase-heartbeat-store";let Ss=null;function Ha(){return Ss||(Ss=Nc(_h,vh,{upgrade:(r,t)=>{switch(t){case 0:try{r.createObjectStore(qn)}catch(e){console.warn(e)}}}}).catch(r=>{throw he.create("idb-open",{originalErrorMessage:r.message})})),Ss}async function Eh(r){try{const e=(await Ha()).transaction(qn),n=await e.objectStore(qn).get(Ka(r));return await e.done,n}catch(t){if(t instanceof rn)ee.warn(t.message);else{const e=he.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});ee.warn(e.message)}}}async function ko(r,t){try{const n=(await Ha()).transaction(qn,"readwrite");await n.objectStore(qn).put(t,Ka(r)),await n.done}catch(e){if(e instanceof rn)ee.warn(e.message);else{const n=he.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});ee.warn(n.message)}}}function Ka(r){return`${r.name}!${r.options.appId}`}/**
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
 */const Th=1024,Ih=30;class Ah{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Sh(e),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){var t,e;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Oo();if(((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(l=>l.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats.length>Ih){const l=Rh(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(l,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(n){ee.warn(n)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Oo(),{heartbeatsToSend:n,unsentEntries:i}=wh(this._heartbeatsCache.heartbeats),o=kr(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return ee.warn(e),""}}}function Oo(){return new Date().toISOString().substring(0,10)}function wh(r,t=Th){const e=[];let n=r.slice();for(const i of r){const o=e.find(l=>l.agent===i.agent);if(o){if(o.dates.push(i.date),Lo(e)>t){o.dates.pop();break}}else if(e.push({agent:i.agent,dates:[i.date]}),Lo(e)>t){e.pop();break}n=n.slice(1)}return{heartbeatsToSend:e,unsentEntries:n}}class Sh{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return hc()?dc().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await Eh(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const n=await this.read();return ko(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const n=await this.read();return ko(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}else return}}function Lo(r){return kr(JSON.stringify({version:2,heartbeats:r})).length}function Rh(r){if(r.length===0)return-1;let t=0,e=r[0].date;for(let n=1;n<r.length;n++)r[n].date<e&&(e=r[n].date,t=n);return t}/**
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
 */function bh(r){Mr(new jn("platform-logger",t=>new Lc(t),"PRIVATE")),Mr(new jn("heartbeat",t=>new Ah(t),"PRIVATE")),Ke(Os,Do,r),Ke(Os,Do,"esm2020"),Ke("fire-js","")}bh("");var Mo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var de,Qa;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(T,m){function p(){}p.prototype=m.prototype,T.D=m.prototype,T.prototype=new p,T.prototype.constructor=T,T.C=function(v,E,I){for(var y=Array(arguments.length-2),Ct=2;Ct<arguments.length;Ct++)y[Ct-2]=arguments[Ct];return m.prototype[E].apply(v,y)}}function e(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(n,e),n.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(T,m,p){p||(p=0);var v=Array(16);if(typeof m=="string")for(var E=0;16>E;++E)v[E]=m.charCodeAt(p++)|m.charCodeAt(p++)<<8|m.charCodeAt(p++)<<16|m.charCodeAt(p++)<<24;else for(E=0;16>E;++E)v[E]=m[p++]|m[p++]<<8|m[p++]<<16|m[p++]<<24;m=T.g[0],p=T.g[1],E=T.g[2];var I=T.g[3],y=m+(I^p&(E^I))+v[0]+3614090360&4294967295;m=p+(y<<7&4294967295|y>>>25),y=I+(E^m&(p^E))+v[1]+3905402710&4294967295,I=m+(y<<12&4294967295|y>>>20),y=E+(p^I&(m^p))+v[2]+606105819&4294967295,E=I+(y<<17&4294967295|y>>>15),y=p+(m^E&(I^m))+v[3]+3250441966&4294967295,p=E+(y<<22&4294967295|y>>>10),y=m+(I^p&(E^I))+v[4]+4118548399&4294967295,m=p+(y<<7&4294967295|y>>>25),y=I+(E^m&(p^E))+v[5]+1200080426&4294967295,I=m+(y<<12&4294967295|y>>>20),y=E+(p^I&(m^p))+v[6]+2821735955&4294967295,E=I+(y<<17&4294967295|y>>>15),y=p+(m^E&(I^m))+v[7]+4249261313&4294967295,p=E+(y<<22&4294967295|y>>>10),y=m+(I^p&(E^I))+v[8]+1770035416&4294967295,m=p+(y<<7&4294967295|y>>>25),y=I+(E^m&(p^E))+v[9]+2336552879&4294967295,I=m+(y<<12&4294967295|y>>>20),y=E+(p^I&(m^p))+v[10]+4294925233&4294967295,E=I+(y<<17&4294967295|y>>>15),y=p+(m^E&(I^m))+v[11]+2304563134&4294967295,p=E+(y<<22&4294967295|y>>>10),y=m+(I^p&(E^I))+v[12]+1804603682&4294967295,m=p+(y<<7&4294967295|y>>>25),y=I+(E^m&(p^E))+v[13]+4254626195&4294967295,I=m+(y<<12&4294967295|y>>>20),y=E+(p^I&(m^p))+v[14]+2792965006&4294967295,E=I+(y<<17&4294967295|y>>>15),y=p+(m^E&(I^m))+v[15]+1236535329&4294967295,p=E+(y<<22&4294967295|y>>>10),y=m+(E^I&(p^E))+v[1]+4129170786&4294967295,m=p+(y<<5&4294967295|y>>>27),y=I+(p^E&(m^p))+v[6]+3225465664&4294967295,I=m+(y<<9&4294967295|y>>>23),y=E+(m^p&(I^m))+v[11]+643717713&4294967295,E=I+(y<<14&4294967295|y>>>18),y=p+(I^m&(E^I))+v[0]+3921069994&4294967295,p=E+(y<<20&4294967295|y>>>12),y=m+(E^I&(p^E))+v[5]+3593408605&4294967295,m=p+(y<<5&4294967295|y>>>27),y=I+(p^E&(m^p))+v[10]+38016083&4294967295,I=m+(y<<9&4294967295|y>>>23),y=E+(m^p&(I^m))+v[15]+3634488961&4294967295,E=I+(y<<14&4294967295|y>>>18),y=p+(I^m&(E^I))+v[4]+3889429448&4294967295,p=E+(y<<20&4294967295|y>>>12),y=m+(E^I&(p^E))+v[9]+568446438&4294967295,m=p+(y<<5&4294967295|y>>>27),y=I+(p^E&(m^p))+v[14]+3275163606&4294967295,I=m+(y<<9&4294967295|y>>>23),y=E+(m^p&(I^m))+v[3]+4107603335&4294967295,E=I+(y<<14&4294967295|y>>>18),y=p+(I^m&(E^I))+v[8]+1163531501&4294967295,p=E+(y<<20&4294967295|y>>>12),y=m+(E^I&(p^E))+v[13]+2850285829&4294967295,m=p+(y<<5&4294967295|y>>>27),y=I+(p^E&(m^p))+v[2]+4243563512&4294967295,I=m+(y<<9&4294967295|y>>>23),y=E+(m^p&(I^m))+v[7]+1735328473&4294967295,E=I+(y<<14&4294967295|y>>>18),y=p+(I^m&(E^I))+v[12]+2368359562&4294967295,p=E+(y<<20&4294967295|y>>>12),y=m+(p^E^I)+v[5]+4294588738&4294967295,m=p+(y<<4&4294967295|y>>>28),y=I+(m^p^E)+v[8]+2272392833&4294967295,I=m+(y<<11&4294967295|y>>>21),y=E+(I^m^p)+v[11]+1839030562&4294967295,E=I+(y<<16&4294967295|y>>>16),y=p+(E^I^m)+v[14]+4259657740&4294967295,p=E+(y<<23&4294967295|y>>>9),y=m+(p^E^I)+v[1]+2763975236&4294967295,m=p+(y<<4&4294967295|y>>>28),y=I+(m^p^E)+v[4]+1272893353&4294967295,I=m+(y<<11&4294967295|y>>>21),y=E+(I^m^p)+v[7]+4139469664&4294967295,E=I+(y<<16&4294967295|y>>>16),y=p+(E^I^m)+v[10]+3200236656&4294967295,p=E+(y<<23&4294967295|y>>>9),y=m+(p^E^I)+v[13]+681279174&4294967295,m=p+(y<<4&4294967295|y>>>28),y=I+(m^p^E)+v[0]+3936430074&4294967295,I=m+(y<<11&4294967295|y>>>21),y=E+(I^m^p)+v[3]+3572445317&4294967295,E=I+(y<<16&4294967295|y>>>16),y=p+(E^I^m)+v[6]+76029189&4294967295,p=E+(y<<23&4294967295|y>>>9),y=m+(p^E^I)+v[9]+3654602809&4294967295,m=p+(y<<4&4294967295|y>>>28),y=I+(m^p^E)+v[12]+3873151461&4294967295,I=m+(y<<11&4294967295|y>>>21),y=E+(I^m^p)+v[15]+530742520&4294967295,E=I+(y<<16&4294967295|y>>>16),y=p+(E^I^m)+v[2]+3299628645&4294967295,p=E+(y<<23&4294967295|y>>>9),y=m+(E^(p|~I))+v[0]+4096336452&4294967295,m=p+(y<<6&4294967295|y>>>26),y=I+(p^(m|~E))+v[7]+1126891415&4294967295,I=m+(y<<10&4294967295|y>>>22),y=E+(m^(I|~p))+v[14]+2878612391&4294967295,E=I+(y<<15&4294967295|y>>>17),y=p+(I^(E|~m))+v[5]+4237533241&4294967295,p=E+(y<<21&4294967295|y>>>11),y=m+(E^(p|~I))+v[12]+1700485571&4294967295,m=p+(y<<6&4294967295|y>>>26),y=I+(p^(m|~E))+v[3]+2399980690&4294967295,I=m+(y<<10&4294967295|y>>>22),y=E+(m^(I|~p))+v[10]+4293915773&4294967295,E=I+(y<<15&4294967295|y>>>17),y=p+(I^(E|~m))+v[1]+2240044497&4294967295,p=E+(y<<21&4294967295|y>>>11),y=m+(E^(p|~I))+v[8]+1873313359&4294967295,m=p+(y<<6&4294967295|y>>>26),y=I+(p^(m|~E))+v[15]+4264355552&4294967295,I=m+(y<<10&4294967295|y>>>22),y=E+(m^(I|~p))+v[6]+2734768916&4294967295,E=I+(y<<15&4294967295|y>>>17),y=p+(I^(E|~m))+v[13]+1309151649&4294967295,p=E+(y<<21&4294967295|y>>>11),y=m+(E^(p|~I))+v[4]+4149444226&4294967295,m=p+(y<<6&4294967295|y>>>26),y=I+(p^(m|~E))+v[11]+3174756917&4294967295,I=m+(y<<10&4294967295|y>>>22),y=E+(m^(I|~p))+v[2]+718787259&4294967295,E=I+(y<<15&4294967295|y>>>17),y=p+(I^(E|~m))+v[9]+3951481745&4294967295,T.g[0]=T.g[0]+m&4294967295,T.g[1]=T.g[1]+(E+(y<<21&4294967295|y>>>11))&4294967295,T.g[2]=T.g[2]+E&4294967295,T.g[3]=T.g[3]+I&4294967295}n.prototype.u=function(T,m){m===void 0&&(m=T.length);for(var p=m-this.blockSize,v=this.B,E=this.h,I=0;I<m;){if(E==0)for(;I<=p;)i(this,T,I),I+=this.blockSize;if(typeof T=="string"){for(;I<m;)if(v[E++]=T.charCodeAt(I++),E==this.blockSize){i(this,v),E=0;break}}else for(;I<m;)if(v[E++]=T[I++],E==this.blockSize){i(this,v),E=0;break}}this.h=E,this.o+=m},n.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var m=1;m<T.length-8;++m)T[m]=0;var p=8*this.o;for(m=T.length-8;m<T.length;++m)T[m]=p&255,p/=256;for(this.u(T),T=Array(16),m=p=0;4>m;++m)for(var v=0;32>v;v+=8)T[p++]=this.g[m]>>>v&255;return T};function o(T,m){var p=c;return Object.prototype.hasOwnProperty.call(p,T)?p[T]:p[T]=m(T)}function l(T,m){this.h=m;for(var p=[],v=!0,E=T.length-1;0<=E;E--){var I=T[E]|0;v&&I==m||(p[E]=I,v=!1)}this.g=p}var c={};function h(T){return-128<=T&&128>T?o(T,function(m){return new l([m|0],0>m?-1:0)}):new l([T|0],0>T?-1:0)}function f(T){if(isNaN(T)||!isFinite(T))return S;if(0>T)return x(f(-T));for(var m=[],p=1,v=0;T>=p;v++)m[v]=T/p|0,p*=4294967296;return new l(m,0)}function _(T,m){if(T.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(T.charAt(0)=="-")return x(_(T.substring(1),m));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var p=f(Math.pow(m,8)),v=S,E=0;E<T.length;E+=8){var I=Math.min(8,T.length-E),y=parseInt(T.substring(E,E+I),m);8>I?(I=f(Math.pow(m,I)),v=v.j(I).add(f(y))):(v=v.j(p),v=v.add(f(y)))}return v}var S=h(0),w=h(1),P=h(16777216);r=l.prototype,r.m=function(){if(B(this))return-x(this).m();for(var T=0,m=1,p=0;p<this.g.length;p++){var v=this.i(p);T+=(0<=v?v:4294967296+v)*m,m*=4294967296}return T},r.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(k(this))return"0";if(B(this))return"-"+x(this).toString(T);for(var m=f(Math.pow(T,6)),p=this,v="";;){var E=rt(p,m).g;p=J(p,E.j(m));var I=((0<p.g.length?p.g[0]:p.h)>>>0).toString(T);if(p=E,k(p))return I+v;for(;6>I.length;)I="0"+I;v=I+v}},r.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function k(T){if(T.h!=0)return!1;for(var m=0;m<T.g.length;m++)if(T.g[m]!=0)return!1;return!0}function B(T){return T.h==-1}r.l=function(T){return T=J(this,T),B(T)?-1:k(T)?0:1};function x(T){for(var m=T.g.length,p=[],v=0;v<m;v++)p[v]=~T.g[v];return new l(p,~T.h).add(w)}r.abs=function(){return B(this)?x(this):this},r.add=function(T){for(var m=Math.max(this.g.length,T.g.length),p=[],v=0,E=0;E<=m;E++){var I=v+(this.i(E)&65535)+(T.i(E)&65535),y=(I>>>16)+(this.i(E)>>>16)+(T.i(E)>>>16);v=y>>>16,I&=65535,y&=65535,p[E]=y<<16|I}return new l(p,p[p.length-1]&-2147483648?-1:0)};function J(T,m){return T.add(x(m))}r.j=function(T){if(k(this)||k(T))return S;if(B(this))return B(T)?x(this).j(x(T)):x(x(this).j(T));if(B(T))return x(this.j(x(T)));if(0>this.l(P)&&0>T.l(P))return f(this.m()*T.m());for(var m=this.g.length+T.g.length,p=[],v=0;v<2*m;v++)p[v]=0;for(v=0;v<this.g.length;v++)for(var E=0;E<T.g.length;E++){var I=this.i(v)>>>16,y=this.i(v)&65535,Ct=T.i(E)>>>16,Ut=T.i(E)&65535;p[2*v+2*E]+=y*Ut,G(p,2*v+2*E),p[2*v+2*E+1]+=I*Ut,G(p,2*v+2*E+1),p[2*v+2*E+1]+=y*Ct,G(p,2*v+2*E+1),p[2*v+2*E+2]+=I*Ct,G(p,2*v+2*E+2)}for(v=0;v<m;v++)p[v]=p[2*v+1]<<16|p[2*v];for(v=m;v<2*m;v++)p[v]=0;return new l(p,0)};function G(T,m){for(;(T[m]&65535)!=T[m];)T[m+1]+=T[m]>>>16,T[m]&=65535,m++}function Y(T,m){this.g=T,this.h=m}function rt(T,m){if(k(m))throw Error("division by zero");if(k(T))return new Y(S,S);if(B(T))return m=rt(x(T),m),new Y(x(m.g),x(m.h));if(B(m))return m=rt(T,x(m)),new Y(x(m.g),m.h);if(30<T.g.length){if(B(T)||B(m))throw Error("slowDivide_ only works with positive integers.");for(var p=w,v=m;0>=v.l(T);)p=Lt(p),v=Lt(v);var E=ht(p,1),I=ht(v,1);for(v=ht(v,2),p=ht(p,2);!k(v);){var y=I.add(v);0>=y.l(T)&&(E=E.add(p),I=y),v=ht(v,1),p=ht(p,1)}return m=J(T,E.j(m)),new Y(E,m)}for(E=S;0<=T.l(m);){for(p=Math.max(1,Math.floor(T.m()/m.m())),v=Math.ceil(Math.log(p)/Math.LN2),v=48>=v?1:Math.pow(2,v-48),I=f(p),y=I.j(m);B(y)||0<y.l(T);)p-=v,I=f(p),y=I.j(m);k(I)&&(I=w),E=E.add(I),T=J(T,y)}return new Y(E,T)}r.A=function(T){return rt(this,T).h},r.and=function(T){for(var m=Math.max(this.g.length,T.g.length),p=[],v=0;v<m;v++)p[v]=this.i(v)&T.i(v);return new l(p,this.h&T.h)},r.or=function(T){for(var m=Math.max(this.g.length,T.g.length),p=[],v=0;v<m;v++)p[v]=this.i(v)|T.i(v);return new l(p,this.h|T.h)},r.xor=function(T){for(var m=Math.max(this.g.length,T.g.length),p=[],v=0;v<m;v++)p[v]=this.i(v)^T.i(v);return new l(p,this.h^T.h)};function Lt(T){for(var m=T.g.length+1,p=[],v=0;v<m;v++)p[v]=T.i(v)<<1|T.i(v-1)>>>31;return new l(p,T.h)}function ht(T,m){var p=m>>5;m%=32;for(var v=T.g.length-p,E=[],I=0;I<v;I++)E[I]=0<m?T.i(I+p)>>>m|T.i(I+p+1)<<32-m:T.i(I+p);return new l(E,T.h)}n.prototype.digest=n.prototype.v,n.prototype.reset=n.prototype.s,n.prototype.update=n.prototype.u,Qa=n,l.prototype.add=l.prototype.add,l.prototype.multiply=l.prototype.j,l.prototype.modulo=l.prototype.A,l.prototype.compare=l.prototype.l,l.prototype.toNumber=l.prototype.m,l.prototype.toString=l.prototype.toString,l.prototype.getBits=l.prototype.i,l.fromNumber=f,l.fromString=_,de=l}).apply(typeof Mo<"u"?Mo:typeof self<"u"?self:typeof window<"u"?window:{});var Tr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Wa,Dn,$a,br,xs,Ya,Xa,Ja;(function(){var r,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(s,a,u){return s==Array.prototype||s==Object.prototype||(s[a]=u.value),s};function e(s){s=[typeof globalThis=="object"&&globalThis,s,typeof window=="object"&&window,typeof self=="object"&&self,typeof Tr=="object"&&Tr];for(var a=0;a<s.length;++a){var u=s[a];if(u&&u.Math==Math)return u}throw Error("Cannot find global object")}var n=e(this);function i(s,a){if(a)t:{var u=n;s=s.split(".");for(var d=0;d<s.length-1;d++){var A=s[d];if(!(A in u))break t;u=u[A]}s=s[s.length-1],d=u[s],a=a(d),a!=d&&a!=null&&t(u,s,{configurable:!0,writable:!0,value:a})}}function o(s,a){s instanceof String&&(s+="");var u=0,d=!1,A={next:function(){if(!d&&u<s.length){var R=u++;return{value:a(R,s[R]),done:!1}}return d=!0,{done:!0,value:void 0}}};return A[Symbol.iterator]=function(){return A},A}i("Array.prototype.values",function(s){return s||function(){return o(this,function(a,u){return u})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var l=l||{},c=this||self;function h(s){var a=typeof s;return a=a!="object"?a:s?Array.isArray(s)?"array":a:"null",a=="array"||a=="object"&&typeof s.length=="number"}function f(s){var a=typeof s;return a=="object"&&s!=null||a=="function"}function _(s,a,u){return s.call.apply(s.bind,arguments)}function S(s,a,u){if(!s)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var A=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(A,d),s.apply(a,A)}}return function(){return s.apply(a,arguments)}}function w(s,a,u){return w=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?_:S,w.apply(null,arguments)}function P(s,a){var u=Array.prototype.slice.call(arguments,1);return function(){var d=u.slice();return d.push.apply(d,arguments),s.apply(this,d)}}function k(s,a){function u(){}u.prototype=a.prototype,s.aa=a.prototype,s.prototype=new u,s.prototype.constructor=s,s.Qb=function(d,A,R){for(var D=Array(arguments.length-2),X=2;X<arguments.length;X++)D[X-2]=arguments[X];return a.prototype[A].apply(d,D)}}function B(s){const a=s.length;if(0<a){const u=Array(a);for(let d=0;d<a;d++)u[d]=s[d];return u}return[]}function x(s,a){for(let u=1;u<arguments.length;u++){const d=arguments[u];if(h(d)){const A=s.length||0,R=d.length||0;s.length=A+R;for(let D=0;D<R;D++)s[A+D]=d[D]}else s.push(d)}}class J{constructor(a,u){this.i=a,this.j=u,this.h=0,this.g=null}get(){let a;return 0<this.h?(this.h--,a=this.g,this.g=a.next,a.next=null):a=this.i(),a}}function G(s){return/^[\s\xa0]*$/.test(s)}function Y(){var s=c.navigator;return s&&(s=s.userAgent)?s:""}function rt(s){return rt[" "](s),s}rt[" "]=function(){};var Lt=Y().indexOf("Gecko")!=-1&&!(Y().toLowerCase().indexOf("webkit")!=-1&&Y().indexOf("Edge")==-1)&&!(Y().indexOf("Trident")!=-1||Y().indexOf("MSIE")!=-1)&&Y().indexOf("Edge")==-1;function ht(s,a,u){for(const d in s)a.call(u,s[d],d,s)}function T(s,a){for(const u in s)a.call(void 0,s[u],u,s)}function m(s){const a={};for(const u in s)a[u]=s[u];return a}const p="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function v(s,a){let u,d;for(let A=1;A<arguments.length;A++){d=arguments[A];for(u in d)s[u]=d[u];for(let R=0;R<p.length;R++)u=p[R],Object.prototype.hasOwnProperty.call(d,u)&&(s[u]=d[u])}}function E(s){var a=1;s=s.split(":");const u=[];for(;0<a&&s.length;)u.push(s.shift()),a--;return s.length&&u.push(s.join(":")),u}function I(s){c.setTimeout(()=>{throw s},0)}function y(){var s=Te;let a=null;return s.g&&(a=s.g,s.g=s.g.next,s.g||(s.h=null),a.next=null),a}class Ct{constructor(){this.h=this.g=null}add(a,u){const d=Ut.get();d.set(a,u),this.h?this.h.next=d:this.g=d,this.h=d}}var Ut=new J(()=>new cn,s=>s.reset());class cn{constructor(){this.next=this.g=this.h=null}set(a,u){this.h=a,this.g=u,this.next=null}reset(){this.next=this.g=this.h=null}}let $t,Bt=!1,Te=new Ct,hn=()=>{const s=c.Promise.resolve(void 0);$t=()=>{s.then(Zn)}};var Zn=()=>{for(var s;s=y();){try{s.h.call(s.g)}catch(u){I(u)}var a=Ut;a.j(s),100>a.h&&(a.h++,s.next=a.g,a.g=s)}Bt=!1};function Mt(){this.s=this.s,this.C=this.C}Mt.prototype.s=!1,Mt.prototype.ma=function(){this.s||(this.s=!0,this.N())},Mt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function dt(s,a){this.type=s,this.g=this.target=a,this.defaultPrevented=!1}dt.prototype.h=function(){this.defaultPrevented=!0};var tr=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var s=!1,a=Object.defineProperty({},"passive",{get:function(){s=!0}});try{const u=()=>{};c.addEventListener("test",u,a),c.removeEventListener("test",u,a)}catch{}return s}();function Yt(s,a){if(dt.call(this,s?s.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,s){var u=this.type=s.type,d=s.changedTouches&&s.changedTouches.length?s.changedTouches[0]:null;if(this.target=s.target||s.srcElement,this.g=a,a=s.relatedTarget){if(Lt){t:{try{rt(a.nodeName);var A=!0;break t}catch{}A=!1}A||(a=null)}}else u=="mouseover"?a=s.fromElement:u=="mouseout"&&(a=s.toElement);this.relatedTarget=a,d?(this.clientX=d.clientX!==void 0?d.clientX:d.pageX,this.clientY=d.clientY!==void 0?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0),this.button=s.button,this.key=s.key||"",this.ctrlKey=s.ctrlKey,this.altKey=s.altKey,this.shiftKey=s.shiftKey,this.metaKey=s.metaKey,this.pointerId=s.pointerId||0,this.pointerType=typeof s.pointerType=="string"?s.pointerType:er[s.pointerType]||"",this.state=s.state,this.i=s,s.defaultPrevented&&Yt.aa.h.call(this)}}k(Yt,dt);var er={2:"touch",3:"pen",4:"mouse"};Yt.prototype.h=function(){Yt.aa.h.call(this);var s=this.i;s.preventDefault?s.preventDefault():s.returnValue=!1};var Xt="closure_listenable_"+(1e6*Math.random()|0),nr=0;function Ne(s,a,u,d,A){this.listener=s,this.proxy=null,this.src=a,this.type=u,this.capture=!!d,this.ha=A,this.key=++nr,this.da=this.fa=!1}function re(s){s.da=!0,s.listener=null,s.proxy=null,s.src=null,s.ha=null}function ke(s){this.src=s,this.g={},this.h=0}ke.prototype.add=function(s,a,u,d,A){var R=s.toString();s=this.g[R],s||(s=this.g[R]=[],this.h++);var D=fn(s,a,d,A);return-1<D?(a=s[D],u||(a.fa=!1)):(a=new Ne(a,this.src,R,!!d,A),a.fa=u,s.push(a)),a};function dn(s,a){var u=a.type;if(u in s.g){var d=s.g[u],A=Array.prototype.indexOf.call(d,a,void 0),R;(R=0<=A)&&Array.prototype.splice.call(d,A,1),R&&(re(a),s.g[u].length==0&&(delete s.g[u],s.h--))}}function fn(s,a,u,d){for(var A=0;A<s.length;++A){var R=s[A];if(!R.da&&R.listener==a&&R.capture==!!u&&R.ha==d)return A}return-1}var pn="closure_lm_"+(1e6*Math.random()|0),mn={};function gn(s,a,u,d,A){if(Array.isArray(a)){for(var R=0;R<a.length;R++)gn(s,a[R],u,d,A);return null}return u=sr(u),s&&s[Xt]?s.K(a,u,f(d)?!!d.capture:!1,A):os(s,a,u,!1,d,A)}function os(s,a,u,d,A,R){if(!a)throw Error("Invalid event type");var D=f(A)?!!A.capture:!!A,X=_n(s);if(X||(s[pn]=X=new ke(s)),u=X.add(a,u,d,D,R),u.proxy)return u;if(d=rr(),u.proxy=d,d.src=s,d.listener=u,s.addEventListener)tr||(A=D),A===void 0&&(A=!1),s.addEventListener(a.toString(),d,A);else if(s.attachEvent)s.attachEvent(Le(a.toString()),d);else if(s.addListener&&s.removeListener)s.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");return u}function rr(){function s(u){return a.call(s.src,s.listener,u)}const a=as;return s}function yn(s,a,u,d,A){if(Array.isArray(a))for(var R=0;R<a.length;R++)yn(s,a[R],u,d,A);else d=f(d)?!!d.capture:!!d,u=sr(u),s&&s[Xt]?(s=s.i,a=String(a).toString(),a in s.g&&(R=s.g[a],u=fn(R,u,d,A),-1<u&&(re(R[u]),Array.prototype.splice.call(R,u,1),R.length==0&&(delete s.g[a],s.h--)))):s&&(s=_n(s))&&(a=s.g[a.toString()],s=-1,a&&(s=fn(a,u,d,A)),(u=-1<s?a[s]:null)&&Oe(u))}function Oe(s){if(typeof s!="number"&&s&&!s.da){var a=s.src;if(a&&a[Xt])dn(a.i,s);else{var u=s.type,d=s.proxy;a.removeEventListener?a.removeEventListener(u,d,s.capture):a.detachEvent?a.detachEvent(Le(u),d):a.addListener&&a.removeListener&&a.removeListener(d),(u=_n(a))?(dn(u,s),u.h==0&&(u.src=null,a[pn]=null)):re(s)}}}function Le(s){return s in mn?mn[s]:mn[s]="on"+s}function as(s,a){if(s.da)s=!0;else{a=new Yt(a,this);var u=s.listener,d=s.ha||s.src;s.fa&&Oe(s),s=u.call(d,a)}return s}function _n(s){return s=s[pn],s instanceof ke?s:null}var vn="__closure_events_fn_"+(1e9*Math.random()>>>0);function sr(s){return typeof s=="function"?s:(s[vn]||(s[vn]=function(a){return s.handleEvent(a)}),s[vn])}function mt(){Mt.call(this),this.i=new ke(this),this.M=this,this.F=null}k(mt,Mt),mt.prototype[Xt]=!0,mt.prototype.removeEventListener=function(s,a,u,d){yn(this,s,a,u,d)};function _t(s,a){var u,d=s.F;if(d)for(u=[];d;d=d.F)u.push(d);if(s=s.M,d=a.type||a,typeof a=="string")a=new dt(a,s);else if(a instanceof dt)a.target=a.target||s;else{var A=a;a=new dt(d,s),v(a,A)}if(A=!0,u)for(var R=u.length-1;0<=R;R--){var D=a.g=u[R];A=N(D,d,!0,a)&&A}if(D=a.g=s,A=N(D,d,!0,a)&&A,A=N(D,d,!1,a)&&A,u)for(R=0;R<u.length;R++)D=a.g=u[R],A=N(D,d,!1,a)&&A}mt.prototype.N=function(){if(mt.aa.N.call(this),this.i){var s=this.i,a;for(a in s.g){for(var u=s.g[a],d=0;d<u.length;d++)re(u[d]);delete s.g[a],s.h--}}this.F=null},mt.prototype.K=function(s,a,u,d){return this.i.add(String(s),a,!1,u,d)},mt.prototype.L=function(s,a,u,d){return this.i.add(String(s),a,!0,u,d)};function N(s,a,u,d){if(a=s.i.g[String(a)],!a)return!0;a=a.concat();for(var A=!0,R=0;R<a.length;++R){var D=a[R];if(D&&!D.da&&D.capture==u){var X=D.listener,vt=D.ha||D.src;D.fa&&dn(s.i,D),A=X.call(vt,d)!==!1&&A}}return A&&!d.defaultPrevented}function g(s,a,u){if(typeof s=="function")u&&(s=w(s,u));else if(s&&typeof s.handleEvent=="function")s=w(s.handleEvent,s);else throw Error("Invalid listener argument");return 2147483647<Number(a)?-1:c.setTimeout(s,a||0)}function V(s){s.g=g(()=>{s.g=null,s.i&&(s.i=!1,V(s))},s.l);const a=s.h;s.h=null,s.m.apply(null,a)}class O extends Mt{constructor(a,u){super(),this.m=a,this.l=u,this.h=null,this.i=!1,this.g=null}j(a){this.h=arguments,this.g?this.i=!0:V(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function F(s){Mt.call(this),this.h=s,this.g={}}k(F,Mt);var Nt=[];function jt(s){ht(s.g,function(a,u){this.g.hasOwnProperty(u)&&Oe(a)},s),s.g={}}F.prototype.N=function(){F.aa.N.call(this),jt(this)},F.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var kt=c.JSON.stringify,Me=c.JSON.parse,ls=class{stringify(s){return c.JSON.stringify(s,void 0)}parse(s){return c.JSON.parse(s,void 0)}};function xe(){}xe.prototype.h=null;function it(s){return s.h||(s.h=s.i())}function ir(){}var Jt={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function se(){dt.call(this,"d")}k(se,dt);function us(){dt.call(this,"c")}k(us,dt);var Ie={},Oi=null;function or(){return Oi=Oi||new mt}Ie.La="serverreachability";function Li(s){dt.call(this,Ie.La,s)}k(Li,dt);function En(s){const a=or();_t(a,new Li(a))}Ie.STAT_EVENT="statevent";function Mi(s,a){dt.call(this,Ie.STAT_EVENT,s),this.stat=a}k(Mi,dt);function Pt(s){const a=or();_t(a,new Mi(a,s))}Ie.Ma="timingevent";function xi(s,a){dt.call(this,Ie.Ma,s),this.size=a}k(xi,dt);function Tn(s,a){if(typeof s!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){s()},a)}function In(){this.g=!0}In.prototype.xa=function(){this.g=!1};function yu(s,a,u,d,A,R){s.info(function(){if(s.g)if(R)for(var D="",X=R.split("&"),vt=0;vt<X.length;vt++){var $=X[vt].split("=");if(1<$.length){var It=$[0];$=$[1];var At=It.split("_");D=2<=At.length&&At[1]=="type"?D+(It+"="+$+"&"):D+(It+"=redacted&")}}else D=null;else D=R;return"XMLHTTP REQ ("+d+") [attempt "+A+"]: "+a+`
`+u+`
`+D})}function _u(s,a,u,d,A,R,D){s.info(function(){return"XMLHTTP RESP ("+d+") [ attempt "+A+"]: "+a+`
`+u+`
`+R+" "+D})}function Fe(s,a,u,d){s.info(function(){return"XMLHTTP TEXT ("+a+"): "+Eu(s,u)+(d?" "+d:"")})}function vu(s,a){s.info(function(){return"TIMEOUT: "+a})}In.prototype.info=function(){};function Eu(s,a){if(!s.g)return a;if(!a)return null;try{var u=JSON.parse(a);if(u){for(s=0;s<u.length;s++)if(Array.isArray(u[s])){var d=u[s];if(!(2>d.length)){var A=d[1];if(Array.isArray(A)&&!(1>A.length)){var R=A[0];if(R!="noop"&&R!="stop"&&R!="close")for(var D=1;D<A.length;D++)A[D]=""}}}}return kt(u)}catch{return a}}var ar={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Fi={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},cs;function lr(){}k(lr,xe),lr.prototype.g=function(){return new XMLHttpRequest},lr.prototype.i=function(){return{}},cs=new lr;function ie(s,a,u,d){this.j=s,this.i=a,this.l=u,this.R=d||1,this.U=new F(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ui}function Ui(){this.i=null,this.g="",this.h=!1}var Bi={},hs={};function ds(s,a,u){s.L=1,s.v=dr(Zt(a)),s.m=u,s.P=!0,ji(s,null)}function ji(s,a){s.F=Date.now(),ur(s),s.A=Zt(s.v);var u=s.A,d=s.R;Array.isArray(d)||(d=[String(d)]),eo(u.i,"t",d),s.C=0,u=s.j.J,s.h=new Ui,s.g=Eo(s.j,u?a:null,!s.m),0<s.O&&(s.M=new O(w(s.Y,s,s.g),s.O)),a=s.U,u=s.g,d=s.ca;var A="readystatechange";Array.isArray(A)||(A&&(Nt[0]=A.toString()),A=Nt);for(var R=0;R<A.length;R++){var D=gn(u,A[R],d||a.handleEvent,!1,a.h||a);if(!D)break;a.g[D.key]=D}a=s.H?m(s.H):{},s.m?(s.u||(s.u="POST"),a["Content-Type"]="application/x-www-form-urlencoded",s.g.ea(s.A,s.u,s.m,a)):(s.u="GET",s.g.ea(s.A,s.u,null,a)),En(),yu(s.i,s.u,s.A,s.l,s.R,s.m)}ie.prototype.ca=function(s){s=s.target;const a=this.M;a&&te(s)==3?a.j():this.Y(s)},ie.prototype.Y=function(s){try{if(s==this.g)t:{const At=te(this.g);var a=this.g.Ba();const je=this.g.Z();if(!(3>At)&&(At!=3||this.g&&(this.h.h||this.g.oa()||lo(this.g)))){this.J||At!=4||a==7||(a==8||0>=je?En(3):En(2)),fs(this);var u=this.g.Z();this.X=u;e:if(qi(this)){var d=lo(this.g);s="";var A=d.length,R=te(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ae(this),An(this);var D="";break e}this.h.i=new c.TextDecoder}for(a=0;a<A;a++)this.h.h=!0,s+=this.h.i.decode(d[a],{stream:!(R&&a==A-1)});d.length=0,this.h.g+=s,this.C=0,D=this.h.g}else D=this.g.oa();if(this.o=u==200,_u(this.i,this.u,this.A,this.l,this.R,At,u),this.o){if(this.T&&!this.K){e:{if(this.g){var X,vt=this.g;if((X=vt.g?vt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!G(X)){var $=X;break e}}$=null}if(u=$)Fe(this.i,this.l,u,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ps(this,u);else{this.o=!1,this.s=3,Pt(12),Ae(this),An(this);break t}}if(this.P){u=!0;let xt;for(;!this.J&&this.C<D.length;)if(xt=Tu(this,D),xt==hs){At==4&&(this.s=4,Pt(14),u=!1),Fe(this.i,this.l,null,"[Incomplete Response]");break}else if(xt==Bi){this.s=4,Pt(15),Fe(this.i,this.l,D,"[Invalid Chunk]"),u=!1;break}else Fe(this.i,this.l,xt,null),ps(this,xt);if(qi(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),At!=4||D.length!=0||this.h.h||(this.s=1,Pt(16),u=!1),this.o=this.o&&u,!u)Fe(this.i,this.l,D,"[Invalid Chunked Response]"),Ae(this),An(this);else if(0<D.length&&!this.W){this.W=!0;var It=this.j;It.g==this&&It.ba&&!It.M&&(It.j.info("Great, no buffering proxy detected. Bytes received: "+D.length),Es(It),It.M=!0,Pt(11))}}else Fe(this.i,this.l,D,null),ps(this,D);At==4&&Ae(this),this.o&&!this.J&&(At==4?go(this.j,this):(this.o=!1,ur(this)))}else Fu(this.g),u==400&&0<D.indexOf("Unknown SID")?(this.s=3,Pt(12)):(this.s=0,Pt(13)),Ae(this),An(this)}}}catch{}finally{}};function qi(s){return s.g?s.u=="GET"&&s.L!=2&&s.j.Ca:!1}function Tu(s,a){var u=s.C,d=a.indexOf(`
`,u);return d==-1?hs:(u=Number(a.substring(u,d)),isNaN(u)?Bi:(d+=1,d+u>a.length?hs:(a=a.slice(d,d+u),s.C=d+u,a)))}ie.prototype.cancel=function(){this.J=!0,Ae(this)};function ur(s){s.S=Date.now()+s.I,Gi(s,s.I)}function Gi(s,a){if(s.B!=null)throw Error("WatchDog timer not null");s.B=Tn(w(s.ba,s),a)}function fs(s){s.B&&(c.clearTimeout(s.B),s.B=null)}ie.prototype.ba=function(){this.B=null;const s=Date.now();0<=s-this.S?(vu(this.i,this.A),this.L!=2&&(En(),Pt(17)),Ae(this),this.s=2,An(this)):Gi(this,this.S-s)};function An(s){s.j.G==0||s.J||go(s.j,s)}function Ae(s){fs(s);var a=s.M;a&&typeof a.ma=="function"&&a.ma(),s.M=null,jt(s.U),s.g&&(a=s.g,s.g=null,a.abort(),a.ma())}function ps(s,a){try{var u=s.j;if(u.G!=0&&(u.g==s||ms(u.h,s))){if(!s.K&&ms(u.h,s)&&u.G==3){try{var d=u.Da.g.parse(a)}catch{d=null}if(Array.isArray(d)&&d.length==3){var A=d;if(A[0]==0){t:if(!u.u){if(u.g)if(u.g.F+3e3<s.F)_r(u),gr(u);else break t;vs(u),Pt(18)}}else u.za=A[1],0<u.za-u.T&&37500>A[2]&&u.F&&u.v==0&&!u.C&&(u.C=Tn(w(u.Za,u),6e3));if(1>=Ki(u.h)&&u.ca){try{u.ca()}catch{}u.ca=void 0}}else Se(u,11)}else if((s.K||u.g==s)&&_r(u),!G(a))for(A=u.Da.g.parse(a),a=0;a<A.length;a++){let $=A[a];if(u.T=$[0],$=$[1],u.G==2)if($[0]=="c"){u.K=$[1],u.ia=$[2];const It=$[3];It!=null&&(u.la=It,u.j.info("VER="+u.la));const At=$[4];At!=null&&(u.Aa=At,u.j.info("SVER="+u.Aa));const je=$[5];je!=null&&typeof je=="number"&&0<je&&(d=1.5*je,u.L=d,u.j.info("backChannelRequestTimeoutMs_="+d)),d=u;const xt=s.g;if(xt){const Er=xt.g?xt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Er){var R=d.h;R.g||Er.indexOf("spdy")==-1&&Er.indexOf("quic")==-1&&Er.indexOf("h2")==-1||(R.j=R.l,R.g=new Set,R.h&&(gs(R,R.h),R.h=null))}if(d.D){const Ts=xt.g?xt.g.getResponseHeader("X-HTTP-Session-Id"):null;Ts&&(d.ya=Ts,tt(d.I,d.D,Ts))}}u.G=3,u.l&&u.l.ua(),u.ba&&(u.R=Date.now()-s.F,u.j.info("Handshake RTT: "+u.R+"ms")),d=u;var D=s;if(d.qa=vo(d,d.J?d.ia:null,d.W),D.K){Qi(d.h,D);var X=D,vt=d.L;vt&&(X.I=vt),X.B&&(fs(X),ur(X)),d.g=D}else po(d);0<u.i.length&&yr(u)}else $[0]!="stop"&&$[0]!="close"||Se(u,7);else u.G==3&&($[0]=="stop"||$[0]=="close"?$[0]=="stop"?Se(u,7):_s(u):$[0]!="noop"&&u.l&&u.l.ta($),u.v=0)}}En(4)}catch{}}var Iu=class{constructor(s,a){this.g=s,this.map=a}};function zi(s){this.l=s||10,c.PerformanceNavigationTiming?(s=c.performance.getEntriesByType("navigation"),s=0<s.length&&(s[0].nextHopProtocol=="hq"||s[0].nextHopProtocol=="h2")):s=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=s?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Hi(s){return s.h?!0:s.g?s.g.size>=s.j:!1}function Ki(s){return s.h?1:s.g?s.g.size:0}function ms(s,a){return s.h?s.h==a:s.g?s.g.has(a):!1}function gs(s,a){s.g?s.g.add(a):s.h=a}function Qi(s,a){s.h&&s.h==a?s.h=null:s.g&&s.g.has(a)&&s.g.delete(a)}zi.prototype.cancel=function(){if(this.i=Wi(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const s of this.g.values())s.cancel();this.g.clear()}};function Wi(s){if(s.h!=null)return s.i.concat(s.h.D);if(s.g!=null&&s.g.size!==0){let a=s.i;for(const u of s.g.values())a=a.concat(u.D);return a}return B(s.i)}function Au(s){if(s.V&&typeof s.V=="function")return s.V();if(typeof Map<"u"&&s instanceof Map||typeof Set<"u"&&s instanceof Set)return Array.from(s.values());if(typeof s=="string")return s.split("");if(h(s)){for(var a=[],u=s.length,d=0;d<u;d++)a.push(s[d]);return a}a=[],u=0;for(d in s)a[u++]=s[d];return a}function wu(s){if(s.na&&typeof s.na=="function")return s.na();if(!s.V||typeof s.V!="function"){if(typeof Map<"u"&&s instanceof Map)return Array.from(s.keys());if(!(typeof Set<"u"&&s instanceof Set)){if(h(s)||typeof s=="string"){var a=[];s=s.length;for(var u=0;u<s;u++)a.push(u);return a}a=[],u=0;for(const d in s)a[u++]=d;return a}}}function $i(s,a){if(s.forEach&&typeof s.forEach=="function")s.forEach(a,void 0);else if(h(s)||typeof s=="string")Array.prototype.forEach.call(s,a,void 0);else for(var u=wu(s),d=Au(s),A=d.length,R=0;R<A;R++)a.call(void 0,d[R],u&&u[R],s)}var Yi=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Su(s,a){if(s){s=s.split("&");for(var u=0;u<s.length;u++){var d=s[u].indexOf("="),A=null;if(0<=d){var R=s[u].substring(0,d);A=s[u].substring(d+1)}else R=s[u];a(R,A?decodeURIComponent(A.replace(/\+/g," ")):"")}}}function we(s){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,s instanceof we){this.h=s.h,cr(this,s.j),this.o=s.o,this.g=s.g,hr(this,s.s),this.l=s.l;var a=s.i,u=new Rn;u.i=a.i,a.g&&(u.g=new Map(a.g),u.h=a.h),Xi(this,u),this.m=s.m}else s&&(a=String(s).match(Yi))?(this.h=!1,cr(this,a[1]||"",!0),this.o=wn(a[2]||""),this.g=wn(a[3]||"",!0),hr(this,a[4]),this.l=wn(a[5]||"",!0),Xi(this,a[6]||"",!0),this.m=wn(a[7]||"")):(this.h=!1,this.i=new Rn(null,this.h))}we.prototype.toString=function(){var s=[],a=this.j;a&&s.push(Sn(a,Ji,!0),":");var u=this.g;return(u||a=="file")&&(s.push("//"),(a=this.o)&&s.push(Sn(a,Ji,!0),"@"),s.push(encodeURIComponent(String(u)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u=this.s,u!=null&&s.push(":",String(u))),(u=this.l)&&(this.g&&u.charAt(0)!="/"&&s.push("/"),s.push(Sn(u,u.charAt(0)=="/"?Cu:bu,!0))),(u=this.i.toString())&&s.push("?",u),(u=this.m)&&s.push("#",Sn(u,Vu)),s.join("")};function Zt(s){return new we(s)}function cr(s,a,u){s.j=u?wn(a,!0):a,s.j&&(s.j=s.j.replace(/:$/,""))}function hr(s,a){if(a){if(a=Number(a),isNaN(a)||0>a)throw Error("Bad port number "+a);s.s=a}else s.s=null}function Xi(s,a,u){a instanceof Rn?(s.i=a,Du(s.i,s.h)):(u||(a=Sn(a,Pu)),s.i=new Rn(a,s.h))}function tt(s,a,u){s.i.set(a,u)}function dr(s){return tt(s,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),s}function wn(s,a){return s?a?decodeURI(s.replace(/%25/g,"%2525")):decodeURIComponent(s):""}function Sn(s,a,u){return typeof s=="string"?(s=encodeURI(s).replace(a,Ru),u&&(s=s.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),s):null}function Ru(s){return s=s.charCodeAt(0),"%"+(s>>4&15).toString(16)+(s&15).toString(16)}var Ji=/[#\/\?@]/g,bu=/[#\?:]/g,Cu=/[#\?]/g,Pu=/[#\?@]/g,Vu=/#/g;function Rn(s,a){this.h=this.g=null,this.i=s||null,this.j=!!a}function oe(s){s.g||(s.g=new Map,s.h=0,s.i&&Su(s.i,function(a,u){s.add(decodeURIComponent(a.replace(/\+/g," ")),u)}))}r=Rn.prototype,r.add=function(s,a){oe(this),this.i=null,s=Ue(this,s);var u=this.g.get(s);return u||this.g.set(s,u=[]),u.push(a),this.h+=1,this};function Zi(s,a){oe(s),a=Ue(s,a),s.g.has(a)&&(s.i=null,s.h-=s.g.get(a).length,s.g.delete(a))}function to(s,a){return oe(s),a=Ue(s,a),s.g.has(a)}r.forEach=function(s,a){oe(this),this.g.forEach(function(u,d){u.forEach(function(A){s.call(a,A,d,this)},this)},this)},r.na=function(){oe(this);const s=Array.from(this.g.values()),a=Array.from(this.g.keys()),u=[];for(let d=0;d<a.length;d++){const A=s[d];for(let R=0;R<A.length;R++)u.push(a[d])}return u},r.V=function(s){oe(this);let a=[];if(typeof s=="string")to(this,s)&&(a=a.concat(this.g.get(Ue(this,s))));else{s=Array.from(this.g.values());for(let u=0;u<s.length;u++)a=a.concat(s[u])}return a},r.set=function(s,a){return oe(this),this.i=null,s=Ue(this,s),to(this,s)&&(this.h-=this.g.get(s).length),this.g.set(s,[a]),this.h+=1,this},r.get=function(s,a){return s?(s=this.V(s),0<s.length?String(s[0]):a):a};function eo(s,a,u){Zi(s,a),0<u.length&&(s.i=null,s.g.set(Ue(s,a),B(u)),s.h+=u.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const s=[],a=Array.from(this.g.keys());for(var u=0;u<a.length;u++){var d=a[u];const R=encodeURIComponent(String(d)),D=this.V(d);for(d=0;d<D.length;d++){var A=R;D[d]!==""&&(A+="="+encodeURIComponent(String(D[d]))),s.push(A)}}return this.i=s.join("&")};function Ue(s,a){return a=String(a),s.j&&(a=a.toLowerCase()),a}function Du(s,a){a&&!s.j&&(oe(s),s.i=null,s.g.forEach(function(u,d){var A=d.toLowerCase();d!=A&&(Zi(this,d),eo(this,A,u))},s)),s.j=a}function Nu(s,a){const u=new In;if(c.Image){const d=new Image;d.onload=P(ae,u,"TestLoadImage: loaded",!0,a,d),d.onerror=P(ae,u,"TestLoadImage: error",!1,a,d),d.onabort=P(ae,u,"TestLoadImage: abort",!1,a,d),d.ontimeout=P(ae,u,"TestLoadImage: timeout",!1,a,d),c.setTimeout(function(){d.ontimeout&&d.ontimeout()},1e4),d.src=s}else a(!1)}function ku(s,a){const u=new In,d=new AbortController,A=setTimeout(()=>{d.abort(),ae(u,"TestPingServer: timeout",!1,a)},1e4);fetch(s,{signal:d.signal}).then(R=>{clearTimeout(A),R.ok?ae(u,"TestPingServer: ok",!0,a):ae(u,"TestPingServer: server error",!1,a)}).catch(()=>{clearTimeout(A),ae(u,"TestPingServer: error",!1,a)})}function ae(s,a,u,d,A){try{A&&(A.onload=null,A.onerror=null,A.onabort=null,A.ontimeout=null),d(u)}catch{}}function Ou(){this.g=new ls}function Lu(s,a,u){const d=u||"";try{$i(s,function(A,R){let D=A;f(A)&&(D=kt(A)),a.push(d+R+"="+encodeURIComponent(D))})}catch(A){throw a.push(d+"type="+encodeURIComponent("_badmap")),A}}function fr(s){this.l=s.Ub||null,this.j=s.eb||!1}k(fr,xe),fr.prototype.g=function(){return new pr(this.l,this.j)},fr.prototype.i=function(s){return function(){return s}}({});function pr(s,a){mt.call(this),this.D=s,this.o=a,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}k(pr,mt),r=pr.prototype,r.open=function(s,a){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=s,this.A=a,this.readyState=1,Cn(this)},r.send=function(s){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const a={headers:this.u,method:this.B,credentials:this.m,cache:void 0};s&&(a.body=s),(this.D||c).fetch(new Request(this.A,a)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,bn(this)),this.readyState=0},r.Sa=function(s){if(this.g&&(this.l=s,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=s.headers,this.readyState=2,Cn(this)),this.g&&(this.readyState=3,Cn(this),this.g)))if(this.responseType==="arraybuffer")s.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in s){if(this.j=s.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;no(this)}else s.text().then(this.Ra.bind(this),this.ga.bind(this))};function no(s){s.j.read().then(s.Pa.bind(s)).catch(s.ga.bind(s))}r.Pa=function(s){if(this.g){if(this.o&&s.value)this.response.push(s.value);else if(!this.o){var a=s.value?s.value:new Uint8Array(0);(a=this.v.decode(a,{stream:!s.done}))&&(this.response=this.responseText+=a)}s.done?bn(this):Cn(this),this.readyState==3&&no(this)}},r.Ra=function(s){this.g&&(this.response=this.responseText=s,bn(this))},r.Qa=function(s){this.g&&(this.response=s,bn(this))},r.ga=function(){this.g&&bn(this)};function bn(s){s.readyState=4,s.l=null,s.j=null,s.v=null,Cn(s)}r.setRequestHeader=function(s,a){this.u.append(s,a)},r.getResponseHeader=function(s){return this.h&&this.h.get(s.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const s=[],a=this.h.entries();for(var u=a.next();!u.done;)u=u.value,s.push(u[0]+": "+u[1]),u=a.next();return s.join(`\r
`)};function Cn(s){s.onreadystatechange&&s.onreadystatechange.call(s)}Object.defineProperty(pr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(s){this.m=s?"include":"same-origin"}});function ro(s){let a="";return ht(s,function(u,d){a+=d,a+=":",a+=u,a+=`\r
`}),a}function ys(s,a,u){t:{for(d in u){var d=!1;break t}d=!0}d||(u=ro(u),typeof s=="string"?u!=null&&encodeURIComponent(String(u)):tt(s,a,u))}function st(s){mt.call(this),this.headers=new Map,this.o=s||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}k(st,mt);var Mu=/^https?$/i,xu=["POST","PUT"];r=st.prototype,r.Ha=function(s){this.J=s},r.ea=function(s,a,u,d){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+s);a=a?a.toUpperCase():"GET",this.D=s,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():cs.g(),this.v=this.o?it(this.o):it(cs),this.g.onreadystatechange=w(this.Ea,this);try{this.B=!0,this.g.open(a,String(s),!0),this.B=!1}catch(R){so(this,R);return}if(s=u||"",u=new Map(this.headers),d)if(Object.getPrototypeOf(d)===Object.prototype)for(var A in d)u.set(A,d[A]);else if(typeof d.keys=="function"&&typeof d.get=="function")for(const R of d.keys())u.set(R,d.get(R));else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(u.keys()).find(R=>R.toLowerCase()=="content-type"),A=c.FormData&&s instanceof c.FormData,!(0<=Array.prototype.indexOf.call(xu,a,void 0))||d||A||u.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[R,D]of u)this.g.setRequestHeader(R,D);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ao(this),this.u=!0,this.g.send(s),this.u=!1}catch(R){so(this,R)}};function so(s,a){s.h=!1,s.g&&(s.j=!0,s.g.abort(),s.j=!1),s.l=a,s.m=5,io(s),mr(s)}function io(s){s.A||(s.A=!0,_t(s,"complete"),_t(s,"error"))}r.abort=function(s){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=s||7,_t(this,"complete"),_t(this,"abort"),mr(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),mr(this,!0)),st.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?oo(this):this.bb())},r.bb=function(){oo(this)};function oo(s){if(s.h&&typeof l<"u"&&(!s.v[1]||te(s)!=4||s.Z()!=2)){if(s.u&&te(s)==4)g(s.Ea,0,s);else if(_t(s,"readystatechange"),te(s)==4){s.h=!1;try{const D=s.Z();t:switch(D){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var a=!0;break t;default:a=!1}var u;if(!(u=a)){var d;if(d=D===0){var A=String(s.D).match(Yi)[1]||null;!A&&c.self&&c.self.location&&(A=c.self.location.protocol.slice(0,-1)),d=!Mu.test(A?A.toLowerCase():"")}u=d}if(u)_t(s,"complete"),_t(s,"success");else{s.m=6;try{var R=2<te(s)?s.g.statusText:""}catch{R=""}s.l=R+" ["+s.Z()+"]",io(s)}}finally{mr(s)}}}}function mr(s,a){if(s.g){ao(s);const u=s.g,d=s.v[0]?()=>{}:null;s.g=null,s.v=null,a||_t(s,"ready");try{u.onreadystatechange=d}catch{}}}function ao(s){s.I&&(c.clearTimeout(s.I),s.I=null)}r.isActive=function(){return!!this.g};function te(s){return s.g?s.g.readyState:0}r.Z=function(){try{return 2<te(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(s){if(this.g){var a=this.g.responseText;return s&&a.indexOf(s)==0&&(a=a.substring(s.length)),Me(a)}};function lo(s){try{if(!s.g)return null;if("response"in s.g)return s.g.response;switch(s.H){case"":case"text":return s.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in s.g)return s.g.mozResponseArrayBuffer}return null}catch{return null}}function Fu(s){const a={};s=(s.g&&2<=te(s)&&s.g.getAllResponseHeaders()||"").split(`\r
`);for(let d=0;d<s.length;d++){if(G(s[d]))continue;var u=E(s[d]);const A=u[0];if(u=u[1],typeof u!="string")continue;u=u.trim();const R=a[A]||[];a[A]=R,R.push(u)}T(a,function(d){return d.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Pn(s,a,u){return u&&u.internalChannelParams&&u.internalChannelParams[s]||a}function uo(s){this.Aa=0,this.i=[],this.j=new In,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Pn("failFast",!1,s),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Pn("baseRetryDelayMs",5e3,s),this.cb=Pn("retryDelaySeedMs",1e4,s),this.Wa=Pn("forwardChannelMaxRetries",2,s),this.wa=Pn("forwardChannelRequestTimeoutMs",2e4,s),this.pa=s&&s.xmlHttpFactory||void 0,this.Xa=s&&s.Tb||void 0,this.Ca=s&&s.useFetchStreams||!1,this.L=void 0,this.J=s&&s.supportsCrossDomainXhr||!1,this.K="",this.h=new zi(s&&s.concurrentRequestLimit),this.Da=new Ou,this.P=s&&s.fastHandshake||!1,this.O=s&&s.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=s&&s.Rb||!1,s&&s.xa&&this.j.xa(),s&&s.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&s&&s.detectBufferingProxy||!1,this.ja=void 0,s&&s.longPollingTimeout&&0<s.longPollingTimeout&&(this.ja=s.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=uo.prototype,r.la=8,r.G=1,r.connect=function(s,a,u,d){Pt(0),this.W=s,this.H=a||{},u&&d!==void 0&&(this.H.OSID=u,this.H.OAID=d),this.F=this.X,this.I=vo(this,null,this.W),yr(this)};function _s(s){if(co(s),s.G==3){var a=s.U++,u=Zt(s.I);if(tt(u,"SID",s.K),tt(u,"RID",a),tt(u,"TYPE","terminate"),Vn(s,u),a=new ie(s,s.j,a),a.L=2,a.v=dr(Zt(u)),u=!1,c.navigator&&c.navigator.sendBeacon)try{u=c.navigator.sendBeacon(a.v.toString(),"")}catch{}!u&&c.Image&&(new Image().src=a.v,u=!0),u||(a.g=Eo(a.j,null),a.g.ea(a.v)),a.F=Date.now(),ur(a)}_o(s)}function gr(s){s.g&&(Es(s),s.g.cancel(),s.g=null)}function co(s){gr(s),s.u&&(c.clearTimeout(s.u),s.u=null),_r(s),s.h.cancel(),s.s&&(typeof s.s=="number"&&c.clearTimeout(s.s),s.s=null)}function yr(s){if(!Hi(s.h)&&!s.s){s.s=!0;var a=s.Ga;$t||hn(),Bt||($t(),Bt=!0),Te.add(a,s),s.B=0}}function Uu(s,a){return Ki(s.h)>=s.h.j-(s.s?1:0)?!1:s.s?(s.i=a.D.concat(s.i),!0):s.G==1||s.G==2||s.B>=(s.Va?0:s.Wa)?!1:(s.s=Tn(w(s.Ga,s,a),yo(s,s.B)),s.B++,!0)}r.Ga=function(s){if(this.s)if(this.s=null,this.G==1){if(!s){this.U=Math.floor(1e5*Math.random()),s=this.U++;const A=new ie(this,this.j,s);let R=this.o;if(this.S&&(R?(R=m(R),v(R,this.S)):R=this.S),this.m!==null||this.O||(A.H=R,R=null),this.P)t:{for(var a=0,u=0;u<this.i.length;u++){e:{var d=this.i[u];if("__data__"in d.map&&(d=d.map.__data__,typeof d=="string")){d=d.length;break e}d=void 0}if(d===void 0)break;if(a+=d,4096<a){a=u;break t}if(a===4096||u===this.i.length-1){a=u+1;break t}}a=1e3}else a=1e3;a=fo(this,A,a),u=Zt(this.I),tt(u,"RID",s),tt(u,"CVER",22),this.D&&tt(u,"X-HTTP-Session-Id",this.D),Vn(this,u),R&&(this.O?a="headers="+encodeURIComponent(String(ro(R)))+"&"+a:this.m&&ys(u,this.m,R)),gs(this.h,A),this.Ua&&tt(u,"TYPE","init"),this.P?(tt(u,"$req",a),tt(u,"SID","null"),A.T=!0,ds(A,u,null)):ds(A,u,a),this.G=2}}else this.G==3&&(s?ho(this,s):this.i.length==0||Hi(this.h)||ho(this))};function ho(s,a){var u;a?u=a.l:u=s.U++;const d=Zt(s.I);tt(d,"SID",s.K),tt(d,"RID",u),tt(d,"AID",s.T),Vn(s,d),s.m&&s.o&&ys(d,s.m,s.o),u=new ie(s,s.j,u,s.B+1),s.m===null&&(u.H=s.o),a&&(s.i=a.D.concat(s.i)),a=fo(s,u,1e3),u.I=Math.round(.5*s.wa)+Math.round(.5*s.wa*Math.random()),gs(s.h,u),ds(u,d,a)}function Vn(s,a){s.H&&ht(s.H,function(u,d){tt(a,d,u)}),s.l&&$i({},function(u,d){tt(a,d,u)})}function fo(s,a,u){u=Math.min(s.i.length,u);var d=s.l?w(s.l.Na,s.l,s):null;t:{var A=s.i;let R=-1;for(;;){const D=["count="+u];R==-1?0<u?(R=A[0].g,D.push("ofs="+R)):R=0:D.push("ofs="+R);let X=!0;for(let vt=0;vt<u;vt++){let $=A[vt].g;const It=A[vt].map;if($-=R,0>$)R=Math.max(0,A[vt].g-100),X=!1;else try{Lu(It,D,"req"+$+"_")}catch{d&&d(It)}}if(X){d=D.join("&");break t}}}return s=s.i.splice(0,u),a.D=s,d}function po(s){if(!s.g&&!s.u){s.Y=1;var a=s.Fa;$t||hn(),Bt||($t(),Bt=!0),Te.add(a,s),s.v=0}}function vs(s){return s.g||s.u||3<=s.v?!1:(s.Y++,s.u=Tn(w(s.Fa,s),yo(s,s.v)),s.v++,!0)}r.Fa=function(){if(this.u=null,mo(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var s=2*this.R;this.j.info("BP detection timer enabled: "+s),this.A=Tn(w(this.ab,this),s)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Pt(10),gr(this),mo(this))};function Es(s){s.A!=null&&(c.clearTimeout(s.A),s.A=null)}function mo(s){s.g=new ie(s,s.j,"rpc",s.Y),s.m===null&&(s.g.H=s.o),s.g.O=0;var a=Zt(s.qa);tt(a,"RID","rpc"),tt(a,"SID",s.K),tt(a,"AID",s.T),tt(a,"CI",s.F?"0":"1"),!s.F&&s.ja&&tt(a,"TO",s.ja),tt(a,"TYPE","xmlhttp"),Vn(s,a),s.m&&s.o&&ys(a,s.m,s.o),s.L&&(s.g.I=s.L);var u=s.g;s=s.ia,u.L=1,u.v=dr(Zt(a)),u.m=null,u.P=!0,ji(u,s)}r.Za=function(){this.C!=null&&(this.C=null,gr(this),vs(this),Pt(19))};function _r(s){s.C!=null&&(c.clearTimeout(s.C),s.C=null)}function go(s,a){var u=null;if(s.g==a){_r(s),Es(s),s.g=null;var d=2}else if(ms(s.h,a))u=a.D,Qi(s.h,a),d=1;else return;if(s.G!=0){if(a.o)if(d==1){u=a.m?a.m.length:0,a=Date.now()-a.F;var A=s.B;d=or(),_t(d,new xi(d,u)),yr(s)}else po(s);else if(A=a.s,A==3||A==0&&0<a.X||!(d==1&&Uu(s,a)||d==2&&vs(s)))switch(u&&0<u.length&&(a=s.h,a.i=a.i.concat(u)),A){case 1:Se(s,5);break;case 4:Se(s,10);break;case 3:Se(s,6);break;default:Se(s,2)}}}function yo(s,a){let u=s.Ta+Math.floor(Math.random()*s.cb);return s.isActive()||(u*=2),u*a}function Se(s,a){if(s.j.info("Error code "+a),a==2){var u=w(s.fb,s),d=s.Xa;const A=!d;d=new we(d||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||cr(d,"https"),dr(d),A?Nu(d.toString(),u):ku(d.toString(),u)}else Pt(2);s.G=0,s.l&&s.l.sa(a),_o(s),co(s)}r.fb=function(s){s?(this.j.info("Successfully pinged google.com"),Pt(2)):(this.j.info("Failed to ping google.com"),Pt(1))};function _o(s){if(s.G=0,s.ka=[],s.l){const a=Wi(s.h);(a.length!=0||s.i.length!=0)&&(x(s.ka,a),x(s.ka,s.i),s.h.i.length=0,B(s.i),s.i.length=0),s.l.ra()}}function vo(s,a,u){var d=u instanceof we?Zt(u):new we(u);if(d.g!="")a&&(d.g=a+"."+d.g),hr(d,d.s);else{var A=c.location;d=A.protocol,a=a?a+"."+A.hostname:A.hostname,A=+A.port;var R=new we(null);d&&cr(R,d),a&&(R.g=a),A&&hr(R,A),u&&(R.l=u),d=R}return u=s.D,a=s.ya,u&&a&&tt(d,u,a),tt(d,"VER",s.la),Vn(s,d),d}function Eo(s,a,u){if(a&&!s.J)throw Error("Can't create secondary domain capable XhrIo object.");return a=s.Ca&&!s.pa?new st(new fr({eb:u})):new st(s.pa),a.Ha(s.J),a}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function To(){}r=To.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function vr(){}vr.prototype.g=function(s,a){return new Dt(s,a)};function Dt(s,a){mt.call(this),this.g=new uo(a),this.l=s,this.h=a&&a.messageUrlParams||null,s=a&&a.messageHeaders||null,a&&a.clientProtocolHeaderRequired&&(s?s["X-Client-Protocol"]="webchannel":s={"X-Client-Protocol":"webchannel"}),this.g.o=s,s=a&&a.initMessageHeaders||null,a&&a.messageContentType&&(s?s["X-WebChannel-Content-Type"]=a.messageContentType:s={"X-WebChannel-Content-Type":a.messageContentType}),a&&a.va&&(s?s["X-WebChannel-Client-Profile"]=a.va:s={"X-WebChannel-Client-Profile":a.va}),this.g.S=s,(s=a&&a.Sb)&&!G(s)&&(this.g.m=s),this.v=a&&a.supportsCrossDomainXhr||!1,this.u=a&&a.sendRawJson||!1,(a=a&&a.httpSessionIdParam)&&!G(a)&&(this.g.D=a,s=this.h,s!==null&&a in s&&(s=this.h,a in s&&delete s[a])),this.j=new Be(this)}k(Dt,mt),Dt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Dt.prototype.close=function(){_s(this.g)},Dt.prototype.o=function(s){var a=this.g;if(typeof s=="string"){var u={};u.__data__=s,s=u}else this.u&&(u={},u.__data__=kt(s),s=u);a.i.push(new Iu(a.Ya++,s)),a.G==3&&yr(a)},Dt.prototype.N=function(){this.g.l=null,delete this.j,_s(this.g),delete this.g,Dt.aa.N.call(this)};function Io(s){se.call(this),s.__headers__&&(this.headers=s.__headers__,this.statusCode=s.__status__,delete s.__headers__,delete s.__status__);var a=s.__sm__;if(a){t:{for(const u in a){s=u;break t}s=void 0}(this.i=s)&&(s=this.i,a=a!==null&&s in a?a[s]:void 0),this.data=a}else this.data=s}k(Io,se);function Ao(){us.call(this),this.status=1}k(Ao,us);function Be(s){this.g=s}k(Be,To),Be.prototype.ua=function(){_t(this.g,"a")},Be.prototype.ta=function(s){_t(this.g,new Io(s))},Be.prototype.sa=function(s){_t(this.g,new Ao)},Be.prototype.ra=function(){_t(this.g,"b")},vr.prototype.createWebChannel=vr.prototype.g,Dt.prototype.send=Dt.prototype.o,Dt.prototype.open=Dt.prototype.m,Dt.prototype.close=Dt.prototype.close,Ja=function(){return new vr},Xa=function(){return or()},Ya=Ie,xs={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ar.NO_ERROR=0,ar.TIMEOUT=8,ar.HTTP_ERROR=6,br=ar,Fi.COMPLETE="complete",$a=Fi,ir.EventType=Jt,Jt.OPEN="a",Jt.CLOSE="b",Jt.ERROR="c",Jt.MESSAGE="d",mt.prototype.listen=mt.prototype.K,Dn=ir,st.prototype.listenOnce=st.prototype.L,st.prototype.getLastError=st.prototype.Ka,st.prototype.getLastErrorCode=st.prototype.Ba,st.prototype.getStatus=st.prototype.Z,st.prototype.getResponseJson=st.prototype.Oa,st.prototype.getResponseText=st.prototype.oa,st.prototype.send=st.prototype.ea,st.prototype.setWithCredentials=st.prototype.Ha,Wa=st}).apply(typeof Tr<"u"?Tr:typeof self<"u"?self:typeof window<"u"?window:{});const xo="@firebase/firestore",Fo="4.9.0";/**
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
 */const Ve=new ja("@firebase/firestore");function qe(){return Ve.logLevel}function M(r,...t){if(Ve.logLevel<=K.DEBUG){const e=t.map(ii);Ve.debug(`Firestore (${sn}): ${r}`,...e)}}function ne(r,...t){if(Ve.logLevel<=K.ERROR){const e=t.map(ii);Ve.error(`Firestore (${sn}): ${r}`,...e)}}function Ye(r,...t){if(Ve.logLevel<=K.WARN){const e=t.map(ii);Ve.warn(`Firestore (${sn}): ${r}`,...e)}}function ii(r){if(typeof r=="string")return r;try{/**
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
 */function q(r,t,e){let n="Unexpected state";typeof t=="string"?n=t:e=t,Za(r,n,e)}function Za(r,t,e){let n=`FIRESTORE (${sn}) INTERNAL ASSERTION FAILED: ${t} (ID: ${r.toString(16)})`;if(e!==void 0)try{n+=" CONTEXT: "+JSON.stringify(e)}catch{n+=" CONTEXT: "+e}throw ne(n),new Error(n)}function nt(r,t,e,n){let i="Unexpected state";typeof e=="string"?i=e:n=e,r||Za(t,i,n)}function Q(r,t){return r}/**
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
 */const C={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class L extends rn{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class fe{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
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
 */class tl{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Ch{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(St.UNAUTHENTICATED))}shutdown(){}}class Ph{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class Vh{constructor(t){this.t=t,this.currentUser=St.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){nt(this.o===void 0,42304);let n=this.i;const i=h=>this.i!==n?(n=this.i,e(h)):Promise.resolve();let o=new fe;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new fe,t.enqueueRetryable(()=>i(this.currentUser))};const l=()=>{const h=o;t.enqueueRetryable(async()=>{await h.promise,await i(this.currentUser)})},c=h=>{M("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),l())};this.t.onInit(h=>c(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?c(h):(M("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new fe)}},0),l()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(n=>this.i!==t?(M("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(nt(typeof n.accessToken=="string",31837,{l:n}),new tl(n.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return nt(t===null||typeof t=="string",2055,{h:t}),new St(t)}}class Dh{constructor(t,e,n){this.P=t,this.T=e,this.I=n,this.type="FirstParty",this.user=St.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Nh{constructor(t,e,n){this.P=t,this.T=e,this.I=n}getToken(){return Promise.resolve(new Dh(this.P,this.T,this.I))}start(t,e){t.enqueueRetryable(()=>e(St.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Uo{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class kh{constructor(t,e){this.V=e,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,fh(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,e){nt(this.o===void 0,3512);const n=o=>{o.error!=null&&M("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const l=o.token!==this.m;return this.m=o.token,M("FirebaseAppCheckTokenProvider",`Received ${l?"new":"existing"} token.`),l?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>n(o))};const i=o=>{M("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?i(o):M("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Uo(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(nt(typeof e.token=="string",44558,{tokenResult:e}),this.m=e.token,new Uo(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function Oh(r){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(r);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let n=0;n<r;n++)e[n]=Math.floor(256*Math.random());return e}/**
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
 */class oi{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let n="";for(;n.length<20;){const i=Oh(40);for(let o=0;o<i.length;++o)n.length<20&&i[o]<e&&(n+=t.charAt(i[o]%62))}return n}}function z(r,t){return r<t?-1:r>t?1:0}function Fs(r,t){const e=Math.min(r.length,t.length);for(let n=0;n<e;n++){const i=r.charAt(n),o=t.charAt(n);if(i!==o)return Rs(i)===Rs(o)?z(i,o):Rs(i)?1:-1}return z(r.length,t.length)}const Lh=55296,Mh=57343;function Rs(r){const t=r.charCodeAt(0);return t>=Lh&&t<=Mh}function Xe(r,t,e){return r.length===t.length&&r.every((n,i)=>e(n,t[i]))}/**
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
 */const Bo="__name__";class Gt{constructor(t,e,n){e===void 0?e=0:e>t.length&&q(637,{offset:e,range:t.length}),n===void 0?n=t.length-e:n>t.length-e&&q(1746,{length:n,range:t.length-e}),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return Gt.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Gt?t.forEach(n=>{e.push(n)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let i=0;i<n;i++){const o=Gt.compareSegments(t.get(i),e.get(i));if(o!==0)return o}return z(t.length,e.length)}static compareSegments(t,e){const n=Gt.isNumericId(t),i=Gt.isNumericId(e);return n&&!i?-1:!n&&i?1:n&&i?Gt.extractNumericId(t).compare(Gt.extractNumericId(e)):Fs(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return de.fromString(t.substring(4,t.length-2))}}class Z extends Gt{construct(t,e,n){return new Z(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new L(C.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter(i=>i.length>0))}return new Z(e)}static emptyPath(){return new Z([])}}const xh=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class bt extends Gt{construct(t,e,n){return new bt(t,e,n)}static isValidIdentifier(t){return xh.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),bt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Bo}static keyField(){return new bt([Bo])}static fromServerFormat(t){const e=[];let n="",i=0;const o=()=>{if(n.length===0)throw new L(C.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let l=!1;for(;i<t.length;){const c=t[i];if(c==="\\"){if(i+1===t.length)throw new L(C.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const h=t[i+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new L(C.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=h,i+=2}else c==="`"?(l=!l,i++):c!=="."||l?(n+=c,i++):(o(),i++)}if(o(),l)throw new L(C.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new bt(e)}static emptyPath(){return new bt([])}}/**
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
 */class U{constructor(t){this.path=t}static fromPath(t){return new U(Z.fromString(t))}static fromName(t){return new U(Z.fromString(t).popFirst(5))}static empty(){return new U(Z.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&Z.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return Z.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new U(new Z(t.slice()))}}/**
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
 */function el(r,t,e){if(!e)throw new L(C.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${t}.`)}function Fh(r,t,e,n){if(t===!0&&n===!0)throw new L(C.INVALID_ARGUMENT,`${r} and ${e} cannot be used together.`)}function jo(r){if(!U.isDocumentKey(r))throw new L(C.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function qo(r){if(U.isDocumentKey(r))throw new L(C.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function nl(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function Kr(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(r);return t?`a custom ${t} object`:"an object"}}return typeof r=="function"?"a function":q(12329,{type:typeof r})}function Gn(r,t){if("_delegate"in r&&(r=r._delegate),!(r instanceof t)){if(t.name===r.constructor.name)throw new L(C.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Kr(r);throw new L(C.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return r}/**
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
 */function ct(r,t){const e={typeString:r};return t&&(e.value=t),e}function Wn(r,t){if(!nl(r))throw new L(C.INVALID_ARGUMENT,"JSON must be an object");let e;for(const n in t)if(t[n]){const i=t[n].typeString,o="value"in t[n]?{value:t[n].value}:void 0;if(!(n in r)){e=`JSON missing required field: '${n}'`;break}const l=r[n];if(i&&typeof l!==i){e=`JSON field '${n}' must be a ${i}.`;break}if(o!==void 0&&l!==o.value){e=`Expected '${n}' field to equal '${o.value}'`;break}}if(e)throw new L(C.INVALID_ARGUMENT,e);return!0}/**
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
 */const Go=-62135596800,zo=1e6;class et{static now(){return et.fromMillis(Date.now())}static fromDate(t){return et.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor((t-1e3*e)*zo);return new et(e,n)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new L(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new L(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<Go)throw new L(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new L(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/zo}_compareTo(t){return this.seconds===t.seconds?z(this.nanoseconds,t.nanoseconds):z(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:et._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(Wn(t,et._jsonSchema))return new et(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-Go;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}et._jsonSchemaVersion="firestore/timestamp/1.0",et._jsonSchema={type:ct("string",et._jsonSchemaVersion),seconds:ct("number"),nanoseconds:ct("number")};/**
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
 */class j{static fromTimestamp(t){return new j(t)}static min(){return new j(new et(0,0))}static max(){return new j(new et(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const zn=-1;function Uh(r,t){const e=r.toTimestamp().seconds,n=r.toTimestamp().nanoseconds+1,i=j.fromTimestamp(n===1e9?new et(e+1,0):new et(e,n));return new me(i,U.empty(),t)}function Bh(r){return new me(r.readTime,r.key,zn)}class me{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new me(j.min(),U.empty(),zn)}static max(){return new me(j.max(),U.empty(),zn)}}function jh(r,t){let e=r.readTime.compareTo(t.readTime);return e!==0?e:(e=U.comparator(r.documentKey,t.documentKey),e!==0?e:z(r.largestBatchId,t.largestBatchId))}/**
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
 */const qh="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Gh{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function Qr(r){if(r.code!==C.FAILED_PRECONDITION||r.message!==qh)throw r;M("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class b{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&q(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new b((n,i)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(n,i)},this.catchCallback=o=>{this.wrapFailure(e,o).next(n,i)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof b?e:b.resolve(e)}catch(e){return b.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):b.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):b.reject(e)}static resolve(t){return new b((e,n)=>{e(t)})}static reject(t){return new b((e,n)=>{n(t)})}static waitFor(t){return new b((e,n)=>{let i=0,o=0,l=!1;t.forEach(c=>{++i,c.next(()=>{++o,l&&o===i&&e()},h=>n(h))}),l=!0,o===i&&e()})}static or(t){let e=b.resolve(!1);for(const n of t)e=e.next(i=>i?b.resolve(i):n());return e}static forEach(t,e){const n=[];return t.forEach((i,o)=>{n.push(e.call(this,i,o))}),this.waitFor(n)}static mapArray(t,e){return new b((n,i)=>{const o=t.length,l=new Array(o);let c=0;for(let h=0;h<o;h++){const f=h;e(t[f]).next(_=>{l[f]=_,++c,c===o&&n(l)},_=>i(_))}})}static doWhile(t,e){return new b((n,i)=>{const o=()=>{t()===!0?e().next(()=>{o()},i):n()};o()})}}function zh(r){const t=r.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function on(r){return r.name==="IndexedDbTransactionError"}/**
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
 */const Hh=-1;function $r(r){return r==null}function xr(r){return r===0&&1/r==-1/0}function Kh(r){return typeof r=="number"&&Number.isInteger(r)&&!xr(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
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
 */const rl="";function Qh(r){let t="";for(let e=0;e<r.length;e++)t.length>0&&(t=Ho(t)),t=Wh(r.get(e),t);return Ho(t)}function Wh(r,t){let e=t;const n=r.length;for(let i=0;i<n;i++){const o=r.charAt(i);switch(o){case"\0":e+="";break;case rl:e+="";break;default:e+=o}}return e}function Ho(r){return r+rl+""}/**
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
 */function Ko(r){let t=0;for(const e in r)Object.prototype.hasOwnProperty.call(r,e)&&t++;return t}function an(r,t){for(const e in r)Object.prototype.hasOwnProperty.call(r,e)&&t(e,r[e])}function sl(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}/**
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
 */class at{constructor(t,e){this.comparator=t,this.root=e||Et.EMPTY}insert(t,e){return new at(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Et.BLACK,null,null))}remove(t){return new at(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Et.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(n===0)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(t,n.key);if(i===0)return e+n.left.size;i<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,n)=>(t(e,n),!1))}toString(){const t=[];return this.inorderTraversal((e,n)=>(t.push(`${e}:${n}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Ir(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Ir(this.root,t,this.comparator,!1)}getReverseIterator(){return new Ir(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Ir(this.root,t,this.comparator,!0)}}class Ir{constructor(t,e,n,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?n(t.key,e):1,e&&i&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Et{constructor(t,e,n,i,o){this.key=t,this.value=e,this.color=n??Et.RED,this.left=i??Et.EMPTY,this.right=o??Et.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,i,o){return new Et(t??this.key,e??this.value,n??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let i=this;const o=n(t,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(t,e,n),null):o===0?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Et.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),e(t,i.key)===0){if(i.right.isEmpty())return Et.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Et.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Et.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw q(43730,{key:this.key,value:this.value});if(this.right.isRed())throw q(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw q(27949);return t+(this.isRed()?0:1)}}Et.EMPTY=null,Et.RED=!0,Et.BLACK=!1;Et.EMPTY=new class{constructor(){this.size=0}get key(){throw q(57766)}get value(){throw q(16141)}get color(){throw q(16727)}get left(){throw q(29726)}get right(){throw q(36894)}copy(t,e,n,i,o){return this}insert(t,e,n){return new Et(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class pt{constructor(t){this.comparator=t,this.data=new at(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,n)=>(t(e),!1))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let n;for(n=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Qo(this.data.getIterator())}getIteratorFrom(t){return new Qo(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(n=>{e=e.add(n)}),e}isEqual(t){if(!(t instanceof pt)||this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=n.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new pt(this.comparator);return e.data=t,e}}class Qo{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class le{constructor(t){this.fields=t,t.sort(bt.comparator)}static empty(){return new le([])}unionWith(t){let e=new pt(bt.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new le(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Xe(this.fields,t.fields,(e,n)=>e.isEqual(n))}}/**
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
 */class il extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Tt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new il("Invalid base64 string: "+o):o}}(t);return new Tt(e)}static fromUint8Array(t){const e=function(i){let o="";for(let l=0;l<i.length;++l)o+=String.fromCharCode(i[l]);return o}(t);return new Tt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let i=0;i<e.length;i++)n[i]=e.charCodeAt(i);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return z(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Tt.EMPTY_BYTE_STRING=new Tt("");const $h=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ge(r){if(nt(!!r,39018),typeof r=="string"){let t=0;const e=$h.exec(r);if(nt(!!e,46558,{timestamp:r}),e[1]){let i=e[1];i=(i+"000000000").substr(0,9),t=Number(i)}const n=new Date(r);return{seconds:Math.floor(n.getTime()/1e3),nanos:t}}return{seconds:ot(r.seconds),nanos:ot(r.nanos)}}function ot(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function ye(r){return typeof r=="string"?Tt.fromBase64String(r):Tt.fromUint8Array(r)}/**
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
 */const ol="server_timestamp",al="__type__",ll="__previous_value__",ul="__local_write_time__";function ai(r){var e,n;return((n=(((e=r==null?void 0:r.mapValue)==null?void 0:e.fields)||{})[al])==null?void 0:n.stringValue)===ol}function Yr(r){const t=r.mapValue.fields[ll];return ai(t)?Yr(t):t}function Hn(r){const t=ge(r.mapValue.fields[ul].timestampValue);return new et(t.seconds,t.nanos)}/**
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
 */class Yh{constructor(t,e,n,i,o,l,c,h,f,_){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=i,this.ssl=o,this.forceLongPolling=l,this.autoDetectLongPolling=c,this.longPollingOptions=h,this.useFetchStreams=f,this.isUsingEmulator=_}}const Fr="(default)";class Kn{constructor(t,e){this.projectId=t,this.database=e||Fr}static empty(){return new Kn("","")}get isDefaultDatabase(){return this.database===Fr}isEqual(t){return t instanceof Kn&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const cl="__type__",Xh="__max__",Ar={mapValue:{}},hl="__vector__",Ur="value";function _e(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?ai(r)?4:Zh(r)?9007199254740991:Jh(r)?10:11:q(28295,{value:r})}function Wt(r,t){if(r===t)return!0;const e=_e(r);if(e!==_e(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===t.booleanValue;case 4:return Hn(r).isEqual(Hn(t));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const l=ge(i.timestampValue),c=ge(o.timestampValue);return l.seconds===c.seconds&&l.nanos===c.nanos}(r,t);case 5:return r.stringValue===t.stringValue;case 6:return function(i,o){return ye(i.bytesValue).isEqual(ye(o.bytesValue))}(r,t);case 7:return r.referenceValue===t.referenceValue;case 8:return function(i,o){return ot(i.geoPointValue.latitude)===ot(o.geoPointValue.latitude)&&ot(i.geoPointValue.longitude)===ot(o.geoPointValue.longitude)}(r,t);case 2:return function(i,o){if("integerValue"in i&&"integerValue"in o)return ot(i.integerValue)===ot(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const l=ot(i.doubleValue),c=ot(o.doubleValue);return l===c?xr(l)===xr(c):isNaN(l)&&isNaN(c)}return!1}(r,t);case 9:return Xe(r.arrayValue.values||[],t.arrayValue.values||[],Wt);case 10:case 11:return function(i,o){const l=i.mapValue.fields||{},c=o.mapValue.fields||{};if(Ko(l)!==Ko(c))return!1;for(const h in l)if(l.hasOwnProperty(h)&&(c[h]===void 0||!Wt(l[h],c[h])))return!1;return!0}(r,t);default:return q(52216,{left:r})}}function Qn(r,t){return(r.values||[]).find(e=>Wt(e,t))!==void 0}function Je(r,t){if(r===t)return 0;const e=_e(r),n=_e(t);if(e!==n)return z(e,n);switch(e){case 0:case 9007199254740991:return 0;case 1:return z(r.booleanValue,t.booleanValue);case 2:return function(o,l){const c=ot(o.integerValue||o.doubleValue),h=ot(l.integerValue||l.doubleValue);return c<h?-1:c>h?1:c===h?0:isNaN(c)?isNaN(h)?0:-1:1}(r,t);case 3:return Wo(r.timestampValue,t.timestampValue);case 4:return Wo(Hn(r),Hn(t));case 5:return Fs(r.stringValue,t.stringValue);case 6:return function(o,l){const c=ye(o),h=ye(l);return c.compareTo(h)}(r.bytesValue,t.bytesValue);case 7:return function(o,l){const c=o.split("/"),h=l.split("/");for(let f=0;f<c.length&&f<h.length;f++){const _=z(c[f],h[f]);if(_!==0)return _}return z(c.length,h.length)}(r.referenceValue,t.referenceValue);case 8:return function(o,l){const c=z(ot(o.latitude),ot(l.latitude));return c!==0?c:z(ot(o.longitude),ot(l.longitude))}(r.geoPointValue,t.geoPointValue);case 9:return $o(r.arrayValue,t.arrayValue);case 10:return function(o,l){var w,P,k,B;const c=o.fields||{},h=l.fields||{},f=(w=c[Ur])==null?void 0:w.arrayValue,_=(P=h[Ur])==null?void 0:P.arrayValue,S=z(((k=f==null?void 0:f.values)==null?void 0:k.length)||0,((B=_==null?void 0:_.values)==null?void 0:B.length)||0);return S!==0?S:$o(f,_)}(r.mapValue,t.mapValue);case 11:return function(o,l){if(o===Ar.mapValue&&l===Ar.mapValue)return 0;if(o===Ar.mapValue)return 1;if(l===Ar.mapValue)return-1;const c=o.fields||{},h=Object.keys(c),f=l.fields||{},_=Object.keys(f);h.sort(),_.sort();for(let S=0;S<h.length&&S<_.length;++S){const w=Fs(h[S],_[S]);if(w!==0)return w;const P=Je(c[h[S]],f[_[S]]);if(P!==0)return P}return z(h.length,_.length)}(r.mapValue,t.mapValue);default:throw q(23264,{he:e})}}function Wo(r,t){if(typeof r=="string"&&typeof t=="string"&&r.length===t.length)return z(r,t);const e=ge(r),n=ge(t),i=z(e.seconds,n.seconds);return i!==0?i:z(e.nanos,n.nanos)}function $o(r,t){const e=r.values||[],n=t.values||[];for(let i=0;i<e.length&&i<n.length;++i){const o=Je(e[i],n[i]);if(o)return o}return z(e.length,n.length)}function Ze(r){return Us(r)}function Us(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(e){const n=ge(e);return`time(${n.seconds},${n.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(e){return ye(e).toBase64()}(r.bytesValue):"referenceValue"in r?function(e){return U.fromName(e).toString()}(r.referenceValue):"geoPointValue"in r?function(e){return`geo(${e.latitude},${e.longitude})`}(r.geoPointValue):"arrayValue"in r?function(e){let n="[",i=!0;for(const o of e.values||[])i?i=!1:n+=",",n+=Us(o);return n+"]"}(r.arrayValue):"mapValue"in r?function(e){const n=Object.keys(e.fields||{}).sort();let i="{",o=!0;for(const l of n)o?o=!1:i+=",",i+=`${l}:${Us(e.fields[l])}`;return i+"}"}(r.mapValue):q(61005,{value:r})}function Cr(r){switch(_e(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=Yr(r);return t?16+Cr(t):16;case 5:return 2*r.stringValue.length;case 6:return ye(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return function(n){return(n.values||[]).reduce((i,o)=>i+Cr(o),0)}(r.arrayValue);case 10:case 11:return function(n){let i=0;return an(n.fields,(o,l)=>{i+=o.length+Cr(l)}),i}(r.mapValue);default:throw q(13486,{value:r})}}function Yo(r,t){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${t.path.canonicalString()}`}}function Bs(r){return!!r&&"integerValue"in r}function li(r){return!!r&&"arrayValue"in r}function Xo(r){return!!r&&"nullValue"in r}function Jo(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function bs(r){return!!r&&"mapValue"in r}function Jh(r){var e,n;return((n=(((e=r==null?void 0:r.mapValue)==null?void 0:e.fields)||{})[cl])==null?void 0:n.stringValue)===hl}function Mn(r){if(r.geoPointValue)return{geoPointValue:{...r.geoPointValue}};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:{...r.timestampValue}};if(r.mapValue){const t={mapValue:{fields:{}}};return an(r.mapValue.fields,(e,n)=>t.mapValue.fields[e]=Mn(n)),t}if(r.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(r.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=Mn(r.arrayValue.values[e]);return t}return{...r}}function Zh(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===Xh}/**
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
 */class zt{constructor(t){this.value=t}static empty(){return new zt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!bs(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Mn(e)}setAll(t){let e=bt.emptyPath(),n={},i=[];t.forEach((l,c)=>{if(!e.isImmediateParentOf(c)){const h=this.getFieldsMap(e);this.applyChanges(h,n,i),n={},i=[],e=c.popLast()}l?n[c.lastSegment()]=Mn(l):i.push(c.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,n,i)}delete(t){const e=this.field(t.popLast());bs(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Wt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let i=e.mapValue.fields[t.get(n)];bs(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,n){an(e,(i,o)=>t[i]=o);for(const i of n)delete t[i]}clone(){return new zt(Mn(this.value))}}/**
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
 */class Rt{constructor(t,e,n,i,o,l,c){this.key=t,this.documentType=e,this.version=n,this.readTime=i,this.createTime=o,this.data=l,this.documentState=c}static newInvalidDocument(t){return new Rt(t,0,j.min(),j.min(),j.min(),zt.empty(),0)}static newFoundDocument(t,e,n,i){return new Rt(t,1,e,j.min(),n,i,0)}static newNoDocument(t,e){return new Rt(t,2,e,j.min(),j.min(),zt.empty(),0)}static newUnknownDocument(t,e){return new Rt(t,3,e,j.min(),j.min(),zt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(j.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=zt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=zt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=j.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Rt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Rt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Br{constructor(t,e){this.position=t,this.inclusive=e}}function Zo(r,t,e){let n=0;for(let i=0;i<r.position.length;i++){const o=t[i],l=r.position[i];if(o.field.isKeyField()?n=U.comparator(U.fromName(l.referenceValue),e.key):n=Je(l,e.data.field(o.field)),o.dir==="desc"&&(n*=-1),n!==0)break}return n}function ta(r,t){if(r===null)return t===null;if(t===null||r.inclusive!==t.inclusive||r.position.length!==t.position.length)return!1;for(let e=0;e<r.position.length;e++)if(!Wt(r.position[e],t.position[e]))return!1;return!0}/**
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
 */class jr{constructor(t,e="asc"){this.field=t,this.dir=e}}function td(r,t){return r.dir===t.dir&&r.field.isEqual(t.field)}/**
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
 */class dl{}class ut extends dl{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,n):new nd(t,e,n):e==="array-contains"?new id(t,n):e==="in"?new od(t,n):e==="not-in"?new ad(t,n):e==="array-contains-any"?new ld(t,n):new ut(t,e,n)}static createKeyFieldInFilter(t,e,n){return e==="in"?new rd(t,n):new sd(t,n)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&e.nullValue===void 0&&this.matchesComparison(Je(e,this.value)):e!==null&&_e(this.value)===_e(e)&&this.matchesComparison(Je(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return q(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ft extends dl{constructor(t,e){super(),this.filters=t,this.op=e,this.Pe=null}static create(t,e){return new Ft(t,e)}matches(t){return fl(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function fl(r){return r.op==="and"}function pl(r){return ed(r)&&fl(r)}function ed(r){for(const t of r.filters)if(t instanceof Ft)return!1;return!0}function js(r){if(r instanceof ut)return r.field.canonicalString()+r.op.toString()+Ze(r.value);if(pl(r))return r.filters.map(t=>js(t)).join(",");{const t=r.filters.map(e=>js(e)).join(",");return`${r.op}(${t})`}}function ml(r,t){return r instanceof ut?function(n,i){return i instanceof ut&&n.op===i.op&&n.field.isEqual(i.field)&&Wt(n.value,i.value)}(r,t):r instanceof Ft?function(n,i){return i instanceof Ft&&n.op===i.op&&n.filters.length===i.filters.length?n.filters.reduce((o,l,c)=>o&&ml(l,i.filters[c]),!0):!1}(r,t):void q(19439)}function gl(r){return r instanceof ut?function(e){return`${e.field.canonicalString()} ${e.op} ${Ze(e.value)}`}(r):r instanceof Ft?function(e){return e.op.toString()+" {"+e.getFilters().map(gl).join(" ,")+"}"}(r):"Filter"}class nd extends ut{constructor(t,e,n){super(t,e,n),this.key=U.fromName(n.referenceValue)}matches(t){const e=U.comparator(t.key,this.key);return this.matchesComparison(e)}}class rd extends ut{constructor(t,e){super(t,"in",e),this.keys=yl("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class sd extends ut{constructor(t,e){super(t,"not-in",e),this.keys=yl("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function yl(r,t){var e;return(((e=t.arrayValue)==null?void 0:e.values)||[]).map(n=>U.fromName(n.referenceValue))}class id extends ut{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return li(e)&&Qn(e.arrayValue,this.value)}}class od extends ut{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&Qn(this.value.arrayValue,e)}}class ad extends ut{constructor(t,e){super(t,"not-in",e)}matches(t){if(Qn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&e.nullValue===void 0&&!Qn(this.value.arrayValue,e)}}class ld extends ut{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!li(e)||!e.arrayValue.values)&&e.arrayValue.values.some(n=>Qn(this.value.arrayValue,n))}}/**
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
 */class ud{constructor(t,e=null,n=[],i=[],o=null,l=null,c=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=i,this.limit=o,this.startAt=l,this.endAt=c,this.Te=null}}function ea(r,t=null,e=[],n=[],i=null,o=null,l=null){return new ud(r,t,e,n,i,o,l)}function ui(r){const t=Q(r);if(t.Te===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(n=>js(n)).join(","),e+="|ob:",e+=t.orderBy.map(n=>function(o){return o.field.canonicalString()+o.dir}(n)).join(","),$r(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>Ze(n)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>Ze(n)).join(",")),t.Te=e}return t.Te}function ci(r,t){if(r.limit!==t.limit||r.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<r.orderBy.length;e++)if(!td(r.orderBy[e],t.orderBy[e]))return!1;if(r.filters.length!==t.filters.length)return!1;for(let e=0;e<r.filters.length;e++)if(!ml(r.filters[e],t.filters[e]))return!1;return r.collectionGroup===t.collectionGroup&&!!r.path.isEqual(t.path)&&!!ta(r.startAt,t.startAt)&&ta(r.endAt,t.endAt)}function qs(r){return U.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
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
 */class $n{constructor(t,e=null,n=[],i=[],o=null,l="F",c=null,h=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=i,this.limit=o,this.limitType=l,this.startAt=c,this.endAt=h,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function cd(r,t,e,n,i,o,l,c){return new $n(r,t,e,n,i,o,l,c)}function hi(r){return new $n(r)}function na(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function _l(r){return r.collectionGroup!==null}function xn(r){const t=Q(r);if(t.Ie===null){t.Ie=[];const e=new Set;for(const o of t.explicitOrderBy)t.Ie.push(o),e.add(o.field.canonicalString());const n=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(l){let c=new pt(bt.comparator);return l.filters.forEach(h=>{h.getFlattenedFilters().forEach(f=>{f.isInequality()&&(c=c.add(f.field))})}),c})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.Ie.push(new jr(o,n))}),e.has(bt.keyField().canonicalString())||t.Ie.push(new jr(bt.keyField(),n))}return t.Ie}function Ht(r){const t=Q(r);return t.Ee||(t.Ee=hd(t,xn(r))),t.Ee}function hd(r,t){if(r.limitType==="F")return ea(r.path,r.collectionGroup,t,r.filters,r.limit,r.startAt,r.endAt);{t=t.map(i=>{const o=i.dir==="desc"?"asc":"desc";return new jr(i.field,o)});const e=r.endAt?new Br(r.endAt.position,r.endAt.inclusive):null,n=r.startAt?new Br(r.startAt.position,r.startAt.inclusive):null;return ea(r.path,r.collectionGroup,t,r.filters,r.limit,e,n)}}function Gs(r,t){const e=r.filters.concat([t]);return new $n(r.path,r.collectionGroup,r.explicitOrderBy.slice(),e,r.limit,r.limitType,r.startAt,r.endAt)}function zs(r,t,e){return new $n(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),t,e,r.startAt,r.endAt)}function Xr(r,t){return ci(Ht(r),Ht(t))&&r.limitType===t.limitType}function vl(r){return`${ui(Ht(r))}|lt:${r.limitType}`}function Ge(r){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(i=>gl(i)).join(", ")}]`),$r(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(i=>function(l){return`${l.field.canonicalString()} (${l.dir})`}(i)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(i=>Ze(i)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(i=>Ze(i)).join(",")),`Target(${n})`}(Ht(r))}; limitType=${r.limitType})`}function Jr(r,t){return t.isFoundDocument()&&function(n,i){const o=i.key.path;return n.collectionGroup!==null?i.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(o):U.isDocumentKey(n.path)?n.path.isEqual(o):n.path.isImmediateParentOf(o)}(r,t)&&function(n,i){for(const o of xn(n))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0}(r,t)&&function(n,i){for(const o of n.filters)if(!o.matches(i))return!1;return!0}(r,t)&&function(n,i){return!(n.startAt&&!function(l,c,h){const f=Zo(l,c,h);return l.inclusive?f<=0:f<0}(n.startAt,xn(n),i)||n.endAt&&!function(l,c,h){const f=Zo(l,c,h);return l.inclusive?f>=0:f>0}(n.endAt,xn(n),i))}(r,t)}function dd(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function El(r){return(t,e)=>{let n=!1;for(const i of xn(r)){const o=fd(i,t,e);if(o!==0)return o;n=n||i.field.isKeyField()}return 0}}function fd(r,t,e){const n=r.field.isKeyField()?U.comparator(t.key,e.key):function(o,l,c){const h=l.data.field(o),f=c.data.field(o);return h!==null&&f!==null?Je(h,f):q(42886)}(r.field,t,e);switch(r.dir){case"asc":return n;case"desc":return-1*n;default:return q(19790,{direction:r.dir})}}/**
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
 */class De{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n!==void 0){for(const[i,o]of n)if(this.equalsFn(i,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const n=this.mapKeyFn(t),i=this.inner[n];if(i===void 0)return this.inner[n]=[[t,e]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],t))return void(i[o]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n===void 0)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],t))return n.length===1?delete this.inner[e]:n.splice(i,1),this.innerSize--,!0;return!1}forEach(t){an(this.inner,(e,n)=>{for(const[i,o]of n)t(i,o)})}isEmpty(){return sl(this.inner)}size(){return this.innerSize}}/**
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
 */const pd=new at(U.comparator);function ve(){return pd}const Tl=new at(U.comparator);function Nn(...r){let t=Tl;for(const e of r)t=t.insert(e.key,e);return t}function md(r){let t=Tl;return r.forEach((e,n)=>t=t.insert(e,n.overlayedDocument)),t}function be(){return Fn()}function Il(){return Fn()}function Fn(){return new De(r=>r.toString(),(r,t)=>r.isEqual(t))}const gd=new pt(U.comparator);function W(...r){let t=gd;for(const e of r)t=t.add(e);return t}const yd=new pt(z);function _d(){return yd}/**
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
 */function di(r,t){if(r.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:xr(t)?"-0":t}}function Al(r){return{integerValue:""+r}}function vd(r,t){return Kh(t)?Al(t):di(r,t)}/**
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
 */class Zr{constructor(){this._=void 0}}function Ed(r,t,e){return r instanceof Hs?function(i,o){const l={fields:{[al]:{stringValue:ol},[ul]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&ai(o)&&(o=Yr(o)),o&&(l.fields[ll]=o),{mapValue:l}}(e,t):r instanceof qr?wl(r,t):r instanceof Gr?Sl(r,t):function(i,o){const l=Id(i,o),c=ra(l)+ra(i.Ae);return Bs(l)&&Bs(i.Ae)?Al(c):di(i.serializer,c)}(r,t)}function Td(r,t,e){return r instanceof qr?wl(r,t):r instanceof Gr?Sl(r,t):e}function Id(r,t){return r instanceof Ks?function(n){return Bs(n)||function(o){return!!o&&"doubleValue"in o}(n)}(t)?t:{integerValue:0}:null}class Hs extends Zr{}class qr extends Zr{constructor(t){super(),this.elements=t}}function wl(r,t){const e=Rl(t);for(const n of r.elements)e.some(i=>Wt(i,n))||e.push(n);return{arrayValue:{values:e}}}class Gr extends Zr{constructor(t){super(),this.elements=t}}function Sl(r,t){let e=Rl(t);for(const n of r.elements)e=e.filter(i=>!Wt(i,n));return{arrayValue:{values:e}}}class Ks extends Zr{constructor(t,e){super(),this.serializer=t,this.Ae=e}}function ra(r){return ot(r.integerValue||r.doubleValue)}function Rl(r){return li(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}function Ad(r,t){return r.field.isEqual(t.field)&&function(n,i){return n instanceof qr&&i instanceof qr||n instanceof Gr&&i instanceof Gr?Xe(n.elements,i.elements,Wt):n instanceof Ks&&i instanceof Ks?Wt(n.Ae,i.Ae):n instanceof Hs&&i instanceof Hs}(r.transform,t.transform)}class Ce{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Ce}static exists(t){return new Ce(void 0,t)}static updateTime(t){return new Ce(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Pr(r,t){return r.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(r.updateTime):r.exists===void 0||r.exists===t.isFoundDocument()}class fi{}function bl(r,t){if(!r.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return r.isNoDocument()?new Sd(r.key,Ce.none()):new pi(r.key,r.data,Ce.none());{const e=r.data,n=zt.empty();let i=new pt(bt.comparator);for(let o of t.fields)if(!i.has(o)){let l=e.field(o);l===null&&o.length>1&&(o=o.popLast(),l=e.field(o)),l===null?n.delete(o):n.set(o,l),i=i.add(o)}return new ts(r.key,n,new le(i.toArray()),Ce.none())}}function wd(r,t,e){r instanceof pi?function(i,o,l){const c=i.value.clone(),h=ia(i.fieldTransforms,o,l.transformResults);c.setAll(h),o.convertToFoundDocument(l.version,c).setHasCommittedMutations()}(r,t,e):r instanceof ts?function(i,o,l){if(!Pr(i.precondition,o))return void o.convertToUnknownDocument(l.version);const c=ia(i.fieldTransforms,o,l.transformResults),h=o.data;h.setAll(Cl(i)),h.setAll(c),o.convertToFoundDocument(l.version,h).setHasCommittedMutations()}(r,t,e):function(i,o,l){o.convertToNoDocument(l.version).setHasCommittedMutations()}(0,t,e)}function Un(r,t,e,n){return r instanceof pi?function(o,l,c,h){if(!Pr(o.precondition,l))return c;const f=o.value.clone(),_=oa(o.fieldTransforms,h,l);return f.setAll(_),l.convertToFoundDocument(l.version,f).setHasLocalMutations(),null}(r,t,e,n):r instanceof ts?function(o,l,c,h){if(!Pr(o.precondition,l))return c;const f=oa(o.fieldTransforms,h,l),_=l.data;return _.setAll(Cl(o)),_.setAll(f),l.convertToFoundDocument(l.version,_).setHasLocalMutations(),c===null?null:c.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(S=>S.field))}(r,t,e,n):function(o,l,c){return Pr(o.precondition,l)?(l.convertToNoDocument(l.version).setHasLocalMutations(),null):c}(r,t,e)}function sa(r,t){return r.type===t.type&&!!r.key.isEqual(t.key)&&!!r.precondition.isEqual(t.precondition)&&!!function(n,i){return n===void 0&&i===void 0||!(!n||!i)&&Xe(n,i,(o,l)=>Ad(o,l))}(r.fieldTransforms,t.fieldTransforms)&&(r.type===0?r.value.isEqual(t.value):r.type!==1||r.data.isEqual(t.data)&&r.fieldMask.isEqual(t.fieldMask))}class pi extends fi{constructor(t,e,n,i=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ts extends fi{constructor(t,e,n,i,o=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Cl(r){const t=new Map;return r.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const n=r.data.field(e);t.set(e,n)}}),t}function ia(r,t,e){const n=new Map;nt(r.length===e.length,32656,{Re:e.length,Ve:r.length});for(let i=0;i<e.length;i++){const o=r[i],l=o.transform,c=t.data.field(o.field);n.set(o.field,Td(l,c,e[i]))}return n}function oa(r,t,e){const n=new Map;for(const i of r){const o=i.transform,l=e.data.field(i.field);n.set(i.field,Ed(o,l,t))}return n}class Sd extends fi{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Rd{constructor(t,e,n,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=i}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(t.key)&&wd(o,t,n[i])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=Un(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=Un(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=Il();return this.mutations.forEach(i=>{const o=t.get(i.key),l=o.overlayedDocument;let c=this.applyToLocalView(l,o.mutatedFields);c=e.has(i.key)?null:c;const h=bl(l,c);h!==null&&n.set(i.key,h),l.isValidDocument()||l.convertToNoDocument(j.min())}),n}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),W())}isEqual(t){return this.batchId===t.batchId&&Xe(this.mutations,t.mutations,(e,n)=>sa(e,n))&&Xe(this.baseMutations,t.baseMutations,(e,n)=>sa(e,n))}}/**
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
 */class bd{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class Cd{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
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
 */var lt,H;function Pl(r){if(r===void 0)return ne("GRPC error has no .code"),C.UNKNOWN;switch(r){case lt.OK:return C.OK;case lt.CANCELLED:return C.CANCELLED;case lt.UNKNOWN:return C.UNKNOWN;case lt.DEADLINE_EXCEEDED:return C.DEADLINE_EXCEEDED;case lt.RESOURCE_EXHAUSTED:return C.RESOURCE_EXHAUSTED;case lt.INTERNAL:return C.INTERNAL;case lt.UNAVAILABLE:return C.UNAVAILABLE;case lt.UNAUTHENTICATED:return C.UNAUTHENTICATED;case lt.INVALID_ARGUMENT:return C.INVALID_ARGUMENT;case lt.NOT_FOUND:return C.NOT_FOUND;case lt.ALREADY_EXISTS:return C.ALREADY_EXISTS;case lt.PERMISSION_DENIED:return C.PERMISSION_DENIED;case lt.FAILED_PRECONDITION:return C.FAILED_PRECONDITION;case lt.ABORTED:return C.ABORTED;case lt.OUT_OF_RANGE:return C.OUT_OF_RANGE;case lt.UNIMPLEMENTED:return C.UNIMPLEMENTED;case lt.DATA_LOSS:return C.DATA_LOSS;default:return q(39323,{code:r})}}(H=lt||(lt={}))[H.OK=0]="OK",H[H.CANCELLED=1]="CANCELLED",H[H.UNKNOWN=2]="UNKNOWN",H[H.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",H[H.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",H[H.NOT_FOUND=5]="NOT_FOUND",H[H.ALREADY_EXISTS=6]="ALREADY_EXISTS",H[H.PERMISSION_DENIED=7]="PERMISSION_DENIED",H[H.UNAUTHENTICATED=16]="UNAUTHENTICATED",H[H.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",H[H.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",H[H.ABORTED=10]="ABORTED",H[H.OUT_OF_RANGE=11]="OUT_OF_RANGE",H[H.UNIMPLEMENTED=12]="UNIMPLEMENTED",H[H.INTERNAL=13]="INTERNAL",H[H.UNAVAILABLE=14]="UNAVAILABLE",H[H.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function Pd(){return new TextEncoder}/**
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
 */const Vd=new de([4294967295,4294967295],0);function aa(r){const t=Pd().encode(r),e=new Qa;return e.update(t),new Uint8Array(e.digest())}function la(r){const t=new DataView(r.buffer),e=t.getUint32(0,!0),n=t.getUint32(4,!0),i=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new de([e,n],0),new de([i,o],0)]}class mi{constructor(t,e,n){if(this.bitmap=t,this.padding=e,this.hashCount=n,e<0||e>=8)throw new kn(`Invalid padding: ${e}`);if(n<0)throw new kn(`Invalid hash count: ${n}`);if(t.length>0&&this.hashCount===0)throw new kn(`Invalid hash count: ${n}`);if(t.length===0&&e!==0)throw new kn(`Invalid padding when bitmap length is 0: ${e}`);this.ge=8*t.length-e,this.pe=de.fromNumber(this.ge)}ye(t,e,n){let i=t.add(e.multiply(de.fromNumber(n)));return i.compare(Vd)===1&&(i=new de([i.getBits(0),i.getBits(1)],0)),i.modulo(this.pe).toNumber()}we(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.ge===0)return!1;const e=aa(t),[n,i]=la(e);for(let o=0;o<this.hashCount;o++){const l=this.ye(n,i,o);if(!this.we(l))return!1}return!0}static create(t,e,n){const i=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),l=new mi(o,i,e);return n.forEach(c=>l.insert(c)),l}insert(t){if(this.ge===0)return;const e=aa(t),[n,i]=la(e);for(let o=0;o<this.hashCount;o++){const l=this.ye(n,i,o);this.Se(l)}}Se(t){const e=Math.floor(t/8),n=t%8;this.bitmap[e]|=1<<n}}class kn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class es{constructor(t,e,n,i,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const i=new Map;return i.set(t,Yn.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new es(j.min(),i,new at(z),ve(),W())}}class Yn{constructor(t,e,n,i,o){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=i,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new Yn(n,e,W(),W(),W())}}/**
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
 */class Vr{constructor(t,e,n,i){this.be=t,this.removedTargetIds=e,this.key=n,this.De=i}}class Vl{constructor(t,e){this.targetId=t,this.Ce=e}}class Dl{constructor(t,e,n=Tt.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=i}}class ua{constructor(){this.ve=0,this.Fe=ca(),this.Me=Tt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(t){t.approximateByteSize()>0&&(this.Oe=!0,this.Me=t)}ke(){let t=W(),e=W(),n=W();return this.Fe.forEach((i,o)=>{switch(o){case 0:t=t.add(i);break;case 2:e=e.add(i);break;case 1:n=n.add(i);break;default:q(38017,{changeType:o})}}),new Yn(this.Me,this.xe,t,e,n)}qe(){this.Oe=!1,this.Fe=ca()}Qe(t,e){this.Oe=!0,this.Fe=this.Fe.insert(t,e)}$e(t){this.Oe=!0,this.Fe=this.Fe.remove(t)}Ue(){this.ve+=1}Ke(){this.ve-=1,nt(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class Dd{constructor(t){this.Ge=t,this.ze=new Map,this.je=ve(),this.Je=wr(),this.He=wr(),this.Ye=new at(z)}Ze(t){for(const e of t.be)t.De&&t.De.isFoundDocument()?this.Xe(e,t.De):this.et(e,t.key,t.De);for(const e of t.removedTargetIds)this.et(e,t.key,t.De)}tt(t){this.forEachTarget(t,e=>{const n=this.nt(e);switch(t.state){case 0:this.rt(e)&&n.Le(t.resumeToken);break;case 1:n.Ke(),n.Ne||n.qe(),n.Le(t.resumeToken);break;case 2:n.Ke(),n.Ne||this.removeTarget(e);break;case 3:this.rt(e)&&(n.We(),n.Le(t.resumeToken));break;case 4:this.rt(e)&&(this.it(e),n.Le(t.resumeToken));break;default:q(56790,{state:t.state})}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.ze.forEach((n,i)=>{this.rt(i)&&e(i)})}st(t){const e=t.targetId,n=t.Ce.count,i=this.ot(e);if(i){const o=i.target;if(qs(o))if(n===0){const l=new U(o.path);this.et(e,l,Rt.newNoDocument(l,j.min()))}else nt(n===1,20013,{expectedCount:n});else{const l=this._t(e);if(l!==n){const c=this.ut(t),h=c?this.ct(c,t,l):1;if(h!==0){this.it(e);const f=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(e,f)}}}}}ut(t){const e=t.Ce.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:n="",padding:i=0},hashCount:o=0}=e;let l,c;try{l=ye(n).toUint8Array()}catch(h){if(h instanceof il)return Ye("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{c=new mi(l,i,o)}catch(h){return Ye(h instanceof kn?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return c.ge===0?null:c}ct(t,e,n){return e.Ce.count===n-this.Pt(t,e.targetId)?0:2}Pt(t,e){const n=this.Ge.getRemoteKeysForTarget(e);let i=0;return n.forEach(o=>{const l=this.Ge.ht(),c=`projects/${l.projectId}/databases/${l.database}/documents/${o.path.canonicalString()}`;t.mightContain(c)||(this.et(e,o,null),i++)}),i}Tt(t){const e=new Map;this.ze.forEach((o,l)=>{const c=this.ot(l);if(c){if(o.current&&qs(c.target)){const h=new U(c.target.path);this.It(h).has(l)||this.Et(l,h)||this.et(l,h,Rt.newNoDocument(h,t))}o.Be&&(e.set(l,o.ke()),o.qe())}});let n=W();this.He.forEach((o,l)=>{let c=!0;l.forEachWhile(h=>{const f=this.ot(h);return!f||f.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(n=n.add(o))}),this.je.forEach((o,l)=>l.setReadTime(t));const i=new es(t,e,this.Ye,this.je,n);return this.je=ve(),this.Je=wr(),this.He=wr(),this.Ye=new at(z),i}Xe(t,e){if(!this.rt(t))return;const n=this.Et(t,e.key)?2:0;this.nt(t).Qe(e.key,n),this.je=this.je.insert(e.key,e),this.Je=this.Je.insert(e.key,this.It(e.key).add(t)),this.He=this.He.insert(e.key,this.dt(e.key).add(t))}et(t,e,n){if(!this.rt(t))return;const i=this.nt(t);this.Et(t,e)?i.Qe(e,1):i.$e(e),this.He=this.He.insert(e,this.dt(e).delete(t)),this.He=this.He.insert(e,this.dt(e).add(t)),n&&(this.je=this.je.insert(e,n))}removeTarget(t){this.ze.delete(t)}_t(t){const e=this.nt(t).ke();return this.Ge.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Ue(t){this.nt(t).Ue()}nt(t){let e=this.ze.get(t);return e||(e=new ua,this.ze.set(t,e)),e}dt(t){let e=this.He.get(t);return e||(e=new pt(z),this.He=this.He.insert(t,e)),e}It(t){let e=this.Je.get(t);return e||(e=new pt(z),this.Je=this.Je.insert(t,e)),e}rt(t){const e=this.ot(t)!==null;return e||M("WatchChangeAggregator","Detected inactive target",t),e}ot(t){const e=this.ze.get(t);return e&&e.Ne?null:this.Ge.At(t)}it(t){this.ze.set(t,new ua),this.Ge.getRemoteKeysForTarget(t).forEach(e=>{this.et(t,e,null)})}Et(t,e){return this.Ge.getRemoteKeysForTarget(t).has(e)}}function wr(){return new at(U.comparator)}function ca(){return new at(U.comparator)}const Nd={asc:"ASCENDING",desc:"DESCENDING"},kd={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Od={and:"AND",or:"OR"};class Ld{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Qs(r,t){return r.useProto3Json||$r(t)?t:{value:t}}function Ws(r,t){return r.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Nl(r,t){return r.useProto3Json?t.toBase64():t.toUint8Array()}function Qe(r){return nt(!!r,49232),j.fromTimestamp(function(e){const n=ge(e);return new et(n.seconds,n.nanos)}(r))}function kl(r,t){return $s(r,t).canonicalString()}function $s(r,t){const e=function(i){return new Z(["projects",i.projectId,"databases",i.database])}(r).child("documents");return t===void 0?e:e.child(t)}function Ol(r){const t=Z.fromString(r);return nt(Ul(t),10190,{key:t.toString()}),t}function Cs(r,t){const e=Ol(t);if(e.get(1)!==r.databaseId.projectId)throw new L(C.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+r.databaseId.projectId);if(e.get(3)!==r.databaseId.database)throw new L(C.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+r.databaseId.database);return new U(Ml(e))}function Ll(r,t){return kl(r.databaseId,t)}function Md(r){const t=Ol(r);return t.length===4?Z.emptyPath():Ml(t)}function ha(r){return new Z(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function Ml(r){return nt(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function xd(r,t){let e;if("targetChange"in t){t.targetChange;const n=function(f){return f==="NO_CHANGE"?0:f==="ADD"?1:f==="REMOVE"?2:f==="CURRENT"?3:f==="RESET"?4:q(39313,{state:f})}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],o=function(f,_){return f.useProto3Json?(nt(_===void 0||typeof _=="string",58123),Tt.fromBase64String(_||"")):(nt(_===void 0||_ instanceof Buffer||_ instanceof Uint8Array,16193),Tt.fromUint8Array(_||new Uint8Array))}(r,t.targetChange.resumeToken),l=t.targetChange.cause,c=l&&function(f){const _=f.code===void 0?C.UNKNOWN:Pl(f.code);return new L(_,f.message||"")}(l);e=new Dl(n,i,o,c||null)}else if("documentChange"in t){t.documentChange;const n=t.documentChange;n.document,n.document.name,n.document.updateTime;const i=Cs(r,n.document.name),o=Qe(n.document.updateTime),l=n.document.createTime?Qe(n.document.createTime):j.min(),c=new zt({mapValue:{fields:n.document.fields}}),h=Rt.newFoundDocument(i,o,l,c),f=n.targetIds||[],_=n.removedTargetIds||[];e=new Vr(f,_,h.key,h)}else if("documentDelete"in t){t.documentDelete;const n=t.documentDelete;n.document;const i=Cs(r,n.document),o=n.readTime?Qe(n.readTime):j.min(),l=Rt.newNoDocument(i,o),c=n.removedTargetIds||[];e=new Vr([],c,l.key,l)}else if("documentRemove"in t){t.documentRemove;const n=t.documentRemove;n.document;const i=Cs(r,n.document),o=n.removedTargetIds||[];e=new Vr([],o,i,null)}else{if(!("filter"in t))return q(11601,{Rt:t});{t.filter;const n=t.filter;n.targetId;const{count:i=0,unchangedNames:o}=n,l=new Cd(i,o),c=n.targetId;e=new Vl(c,l)}}return e}function Fd(r,t){return{documents:[Ll(r,t.path)]}}function Ud(r,t){const e={structuredQuery:{}},n=t.path;let i;t.collectionGroup!==null?(i=n,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=n.popLast(),e.structuredQuery.from=[{collectionId:n.lastSegment()}]),e.parent=Ll(r,i);const o=function(f){if(f.length!==0)return Fl(Ft.create(f,"and"))}(t.filters);o&&(e.structuredQuery.where=o);const l=function(f){if(f.length!==0)return f.map(_=>function(w){return{field:ze(w.field),direction:qd(w.dir)}}(_))}(t.orderBy);l&&(e.structuredQuery.orderBy=l);const c=Qs(r,t.limit);return c!==null&&(e.structuredQuery.limit=c),t.startAt&&(e.structuredQuery.startAt=function(f){return{before:f.inclusive,values:f.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(f){return{before:!f.inclusive,values:f.position}}(t.endAt)),{ft:e,parent:i}}function Bd(r){let t=Md(r.parent);const e=r.structuredQuery,n=e.from?e.from.length:0;let i=null;if(n>0){nt(n===1,65062);const _=e.from[0];_.allDescendants?i=_.collectionId:t=t.child(_.collectionId)}let o=[];e.where&&(o=function(S){const w=xl(S);return w instanceof Ft&&pl(w)?w.getFilters():[w]}(e.where));let l=[];e.orderBy&&(l=function(S){return S.map(w=>function(k){return new jr(He(k.field),function(x){switch(x){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(k.direction))}(w))}(e.orderBy));let c=null;e.limit&&(c=function(S){let w;return w=typeof S=="object"?S.value:S,$r(w)?null:w}(e.limit));let h=null;e.startAt&&(h=function(S){const w=!!S.before,P=S.values||[];return new Br(P,w)}(e.startAt));let f=null;return e.endAt&&(f=function(S){const w=!S.before,P=S.values||[];return new Br(P,w)}(e.endAt)),cd(t,i,l,o,c,"F",h,f)}function jd(r,t){const e=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return q(28987,{purpose:i})}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function xl(r){return r.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=He(e.unaryFilter.field);return ut.create(n,"==",{doubleValue:NaN});case"IS_NULL":const i=He(e.unaryFilter.field);return ut.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=He(e.unaryFilter.field);return ut.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const l=He(e.unaryFilter.field);return ut.create(l,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return q(61313);default:return q(60726)}}(r):r.fieldFilter!==void 0?function(e){return ut.create(He(e.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return q(58110);default:return q(50506)}}(e.fieldFilter.op),e.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(e){return Ft.create(e.compositeFilter.filters.map(n=>xl(n)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return q(1026)}}(e.compositeFilter.op))}(r):q(30097,{filter:r})}function qd(r){return Nd[r]}function Gd(r){return kd[r]}function zd(r){return Od[r]}function ze(r){return{fieldPath:r.canonicalString()}}function He(r){return bt.fromServerFormat(r.fieldPath)}function Fl(r){return r instanceof ut?function(e){if(e.op==="=="){if(Jo(e.value))return{unaryFilter:{field:ze(e.field),op:"IS_NAN"}};if(Xo(e.value))return{unaryFilter:{field:ze(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Jo(e.value))return{unaryFilter:{field:ze(e.field),op:"IS_NOT_NAN"}};if(Xo(e.value))return{unaryFilter:{field:ze(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ze(e.field),op:Gd(e.op),value:e.value}}}(r):r instanceof Ft?function(e){const n=e.getFilters().map(i=>Fl(i));return n.length===1?n[0]:{compositeFilter:{op:zd(e.op),filters:n}}}(r):q(54877,{filter:r})}function Ul(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
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
 */class ue{constructor(t,e,n,i,o=j.min(),l=j.min(),c=Tt.EMPTY_BYTE_STRING,h=null){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=i,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=l,this.resumeToken=c,this.expectedCount=h}withSequenceNumber(t){return new ue(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new ue(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new ue(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new ue(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class Hd{constructor(t){this.yt=t}}function Kd(r){const t=Bd({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?zs(t,t.limit,"L"):t}/**
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
 */class Qd{constructor(){this.Cn=new Wd}addToCollectionParentIndex(t,e){return this.Cn.add(e),b.resolve()}getCollectionParents(t,e){return b.resolve(this.Cn.getEntries(e))}addFieldIndex(t,e){return b.resolve()}deleteFieldIndex(t,e){return b.resolve()}deleteAllFieldIndexes(t){return b.resolve()}createTargetIndexes(t,e){return b.resolve()}getDocumentsMatchingTarget(t,e){return b.resolve(null)}getIndexType(t,e){return b.resolve(0)}getFieldIndexes(t,e){return b.resolve([])}getNextCollectionGroupToUpdate(t){return b.resolve(null)}getMinOffset(t,e){return b.resolve(me.min())}getMinOffsetFromCollectionGroup(t,e){return b.resolve(me.min())}updateCollectionGroup(t,e,n){return b.resolve()}updateIndexEntries(t,e){return b.resolve()}}class Wd{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e]||new pt(Z.comparator),o=!i.has(n);return this.index[e]=i.add(n),o}has(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e];return i&&i.has(n)}getEntries(t){return(this.index[t]||new pt(Z.comparator)).toArray()}}/**
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
 */const da={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Bl=41943040;class Vt{static withCacheSize(t){return new Vt(t,Vt.DEFAULT_COLLECTION_PERCENTILE,Vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}}/**
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
 */Vt.DEFAULT_COLLECTION_PERCENTILE=10,Vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Vt.DEFAULT=new Vt(Bl,Vt.DEFAULT_COLLECTION_PERCENTILE,Vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Vt.DISABLED=new Vt(-1,0,0);/**
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
 */const fa="LruGarbageCollector",$d=1048576;function pa([r,t],[e,n]){const i=z(r,e);return i===0?z(t,n):i}class Yd{constructor(t){this.Ir=t,this.buffer=new pt(pa),this.Er=0}dr(){return++this.Er}Ar(t){const e=[t,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(e);else{const n=this.buffer.last();pa(e,n)<0&&(this.buffer=this.buffer.delete(n).add(e))}}get maxValue(){return this.buffer.last()[0]}}class Xd{constructor(t,e,n){this.garbageCollector=t,this.asyncQueue=e,this.localStore=n,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(t){M(fa,`Garbage collection scheduled in ${t}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){on(e)?M(fa,"Ignoring IndexedDB error during garbage collection: ",e):await Qr(e)}await this.Vr(3e5)})}}class Jd{constructor(t,e){this.mr=t,this.params=e}calculateTargetCount(t,e){return this.mr.gr(t).next(n=>Math.floor(e/100*n))}nthSequenceNumber(t,e){if(e===0)return b.resolve(Wr.ce);const n=new Yd(e);return this.mr.forEachTarget(t,i=>n.Ar(i.sequenceNumber)).next(()=>this.mr.pr(t,i=>n.Ar(i))).next(()=>n.maxValue)}removeTargets(t,e,n){return this.mr.removeTargets(t,e,n)}removeOrphanedDocuments(t,e){return this.mr.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(M("LruGarbageCollector","Garbage collection skipped; disabled"),b.resolve(da)):this.getCacheSize(t).next(n=>n<this.params.cacheSizeCollectionThreshold?(M("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),da):this.yr(t,e))}getCacheSize(t){return this.mr.getCacheSize(t)}yr(t,e){let n,i,o,l,c,h,f;const _=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(S=>(S>this.params.maximumSequenceNumbersToCollect?(M("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${S}`),i=this.params.maximumSequenceNumbersToCollect):i=S,l=Date.now(),this.nthSequenceNumber(t,i))).next(S=>(n=S,c=Date.now(),this.removeTargets(t,n,e))).next(S=>(o=S,h=Date.now(),this.removeOrphanedDocuments(t,n))).next(S=>(f=Date.now(),qe()<=K.DEBUG&&M("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${l-_}ms
	Determined least recently used ${i} in `+(c-l)+`ms
	Removed ${o} targets in `+(h-c)+`ms
	Removed ${S} documents in `+(f-h)+`ms
Total Duration: ${f-_}ms`),b.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:o,documentsRemoved:S})))}}function Zd(r,t){return new Jd(r,t)}/**
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
 */class tf{constructor(){this.changes=new De(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,Rt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return n!==void 0?b.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class ef{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
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
 */class nf{constructor(t,e,n,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=i}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next(i=>(n=i,this.remoteDocumentCache.getEntry(t,e))).next(i=>(n!==null&&Un(n.mutation,i,le.empty(),et.now()),i))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(n=>this.getLocalViewOfDocuments(t,n,W()).next(()=>n))}getLocalViewOfDocuments(t,e,n=W()){const i=be();return this.populateOverlays(t,i,e).next(()=>this.computeViews(t,e,i,n).next(o=>{let l=Nn();return o.forEach((c,h)=>{l=l.insert(c,h.overlayedDocument)}),l}))}getOverlayedDocuments(t,e){const n=be();return this.populateOverlays(t,n,e).next(()=>this.computeViews(t,e,n,W()))}populateOverlays(t,e,n){const i=[];return n.forEach(o=>{e.has(o)||i.push(o)}),this.documentOverlayCache.getOverlays(t,i).next(o=>{o.forEach((l,c)=>{e.set(l,c)})})}computeViews(t,e,n,i){let o=ve();const l=Fn(),c=function(){return Fn()}();return e.forEach((h,f)=>{const _=n.get(f.key);i.has(f.key)&&(_===void 0||_.mutation instanceof ts)?o=o.insert(f.key,f):_!==void 0?(l.set(f.key,_.mutation.getFieldMask()),Un(_.mutation,f,_.mutation.getFieldMask(),et.now())):l.set(f.key,le.empty())}),this.recalculateAndSaveOverlays(t,o).next(h=>(h.forEach((f,_)=>l.set(f,_)),e.forEach((f,_)=>c.set(f,new ef(_,l.get(f)??null))),c))}recalculateAndSaveOverlays(t,e){const n=Fn();let i=new at((l,c)=>l-c),o=W();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(l=>{for(const c of l)c.keys().forEach(h=>{const f=e.get(h);if(f===null)return;let _=n.get(h)||le.empty();_=c.applyToLocalView(f,_),n.set(h,_);const S=(i.get(c.batchId)||W()).add(h);i=i.insert(c.batchId,S)})}).next(()=>{const l=[],c=i.getReverseIterator();for(;c.hasNext();){const h=c.getNext(),f=h.key,_=h.value,S=Il();_.forEach(w=>{if(!o.has(w)){const P=bl(e.get(w),n.get(w));P!==null&&S.set(w,P),o=o.add(w)}}),l.push(this.documentOverlayCache.saveOverlays(t,f,S))}return b.waitFor(l)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(n=>this.recalculateAndSaveOverlays(t,n))}getDocumentsMatchingQuery(t,e,n,i){return function(l){return U.isDocumentKey(l.path)&&l.collectionGroup===null&&l.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):_l(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n,i):this.getDocumentsMatchingCollectionQuery(t,e,n,i)}getNextDocuments(t,e,n,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,i).next(o=>{const l=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,i-o.size):b.resolve(be());let c=zn,h=o;return l.next(f=>b.forEach(f,(_,S)=>(c<S.largestBatchId&&(c=S.largestBatchId),o.get(_)?b.resolve():this.remoteDocumentCache.getEntry(t,_).next(w=>{h=h.insert(_,w)}))).next(()=>this.populateOverlays(t,f,o)).next(()=>this.computeViews(t,h,f,W())).next(_=>({batchId:c,changes:md(_)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new U(e)).next(n=>{let i=Nn();return n.isFoundDocument()&&(i=i.insert(n.key,n)),i})}getDocumentsMatchingCollectionGroupQuery(t,e,n,i){const o=e.collectionGroup;let l=Nn();return this.indexManager.getCollectionParents(t,o).next(c=>b.forEach(c,h=>{const f=function(S,w){return new $n(w,null,S.explicitOrderBy.slice(),S.filters.slice(),S.limit,S.limitType,S.startAt,S.endAt)}(e,h.child(o));return this.getDocumentsMatchingCollectionQuery(t,f,n,i).next(_=>{_.forEach((S,w)=>{l=l.insert(S,w)})})}).next(()=>l))}getDocumentsMatchingCollectionQuery(t,e,n,i){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next(l=>(o=l,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,o,i))).next(l=>{o.forEach((h,f)=>{const _=f.getKey();l.get(_)===null&&(l=l.insert(_,Rt.newInvalidDocument(_)))});let c=Nn();return l.forEach((h,f)=>{const _=o.get(h);_!==void 0&&Un(_.mutation,f,le.empty(),et.now()),Jr(e,f)&&(c=c.insert(h,f))}),c})}}/**
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
 */class rf{constructor(t){this.serializer=t,this.Lr=new Map,this.kr=new Map}getBundleMetadata(t,e){return b.resolve(this.Lr.get(e))}saveBundleMetadata(t,e){return this.Lr.set(e.id,function(i){return{id:i.id,version:i.version,createTime:Qe(i.createTime)}}(e)),b.resolve()}getNamedQuery(t,e){return b.resolve(this.kr.get(e))}saveNamedQuery(t,e){return this.kr.set(e.name,function(i){return{name:i.name,query:Kd(i.bundledQuery),readTime:Qe(i.readTime)}}(e)),b.resolve()}}/**
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
 */class sf{constructor(){this.overlays=new at(U.comparator),this.qr=new Map}getOverlay(t,e){return b.resolve(this.overlays.get(e))}getOverlays(t,e){const n=be();return b.forEach(e,i=>this.getOverlay(t,i).next(o=>{o!==null&&n.set(i,o)})).next(()=>n)}saveOverlays(t,e,n){return n.forEach((i,o)=>{this.St(t,e,o)}),b.resolve()}removeOverlaysForBatchId(t,e,n){const i=this.qr.get(n);return i!==void 0&&(i.forEach(o=>this.overlays=this.overlays.remove(o)),this.qr.delete(n)),b.resolve()}getOverlaysForCollection(t,e,n){const i=be(),o=e.length+1,l=new U(e.child("")),c=this.overlays.getIteratorFrom(l);for(;c.hasNext();){const h=c.getNext().value,f=h.getKey();if(!e.isPrefixOf(f.path))break;f.path.length===o&&h.largestBatchId>n&&i.set(h.getKey(),h)}return b.resolve(i)}getOverlaysForCollectionGroup(t,e,n,i){let o=new at((f,_)=>f-_);const l=this.overlays.getIterator();for(;l.hasNext();){const f=l.getNext().value;if(f.getKey().getCollectionGroup()===e&&f.largestBatchId>n){let _=o.get(f.largestBatchId);_===null&&(_=be(),o=o.insert(f.largestBatchId,_)),_.set(f.getKey(),f)}}const c=be(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach((f,_)=>c.set(f,_)),!(c.size()>=i)););return b.resolve(c)}St(t,e,n){const i=this.overlays.get(n.key);if(i!==null){const l=this.qr.get(i.largestBatchId).delete(n.key);this.qr.set(i.largestBatchId,l)}this.overlays=this.overlays.insert(n.key,new bd(e,n));let o=this.qr.get(e);o===void 0&&(o=W(),this.qr.set(e,o)),this.qr.set(e,o.add(n.key))}}/**
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
 */class of{constructor(){this.sessionToken=Tt.EMPTY_BYTE_STRING}getSessionToken(t){return b.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,b.resolve()}}/**
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
 */class gi{constructor(){this.Qr=new pt(gt.$r),this.Ur=new pt(gt.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(t,e){const n=new gt(t,e);this.Qr=this.Qr.add(n),this.Ur=this.Ur.add(n)}Wr(t,e){t.forEach(n=>this.addReference(n,e))}removeReference(t,e){this.Gr(new gt(t,e))}zr(t,e){t.forEach(n=>this.removeReference(n,e))}jr(t){const e=new U(new Z([])),n=new gt(e,t),i=new gt(e,t+1),o=[];return this.Ur.forEachInRange([n,i],l=>{this.Gr(l),o.push(l.key)}),o}Jr(){this.Qr.forEach(t=>this.Gr(t))}Gr(t){this.Qr=this.Qr.delete(t),this.Ur=this.Ur.delete(t)}Hr(t){const e=new U(new Z([])),n=new gt(e,t),i=new gt(e,t+1);let o=W();return this.Ur.forEachInRange([n,i],l=>{o=o.add(l.key)}),o}containsKey(t){const e=new gt(t,0),n=this.Qr.firstAfterOrEqual(e);return n!==null&&t.isEqual(n.key)}}class gt{constructor(t,e){this.key=t,this.Yr=e}static $r(t,e){return U.comparator(t.key,e.key)||z(t.Yr,e.Yr)}static Kr(t,e){return z(t.Yr,e.Yr)||U.comparator(t.key,e.key)}}/**
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
 */class af{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.tr=1,this.Zr=new pt(gt.$r)}checkEmpty(t){return b.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,n,i){const o=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const l=new Rd(o,e,n,i);this.mutationQueue.push(l);for(const c of i)this.Zr=this.Zr.add(new gt(c.key,o)),this.indexManager.addToCollectionParentIndex(t,c.key.path.popLast());return b.resolve(l)}lookupMutationBatch(t,e){return b.resolve(this.Xr(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,i=this.ei(n),o=i<0?0:i;return b.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return b.resolve(this.mutationQueue.length===0?Hh:this.tr-1)}getAllMutationBatches(t){return b.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new gt(e,0),i=new gt(e,Number.POSITIVE_INFINITY),o=[];return this.Zr.forEachInRange([n,i],l=>{const c=this.Xr(l.Yr);o.push(c)}),b.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new pt(z);return e.forEach(i=>{const o=new gt(i,0),l=new gt(i,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([o,l],c=>{n=n.add(c.Yr)})}),b.resolve(this.ti(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,i=n.length+1;let o=n;U.isDocumentKey(o)||(o=o.child(""));const l=new gt(new U(o),0);let c=new pt(z);return this.Zr.forEachWhile(h=>{const f=h.key.path;return!!n.isPrefixOf(f)&&(f.length===i&&(c=c.add(h.Yr)),!0)},l),b.resolve(this.ti(c))}ti(t){const e=[];return t.forEach(n=>{const i=this.Xr(n);i!==null&&e.push(i)}),e}removeMutationBatch(t,e){nt(this.ni(e.batchId,"removed")===0,55003),this.mutationQueue.shift();let n=this.Zr;return b.forEach(e.mutations,i=>{const o=new gt(i.key,e.batchId);return n=n.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.Zr=n})}ir(t){}containsKey(t,e){const n=new gt(e,0),i=this.Zr.firstAfterOrEqual(n);return b.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,b.resolve()}ni(t,e){return this.ei(t)}ei(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Xr(t){const e=this.ei(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
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
 */class lf{constructor(t){this.ri=t,this.docs=function(){return new at(U.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,i=this.docs.get(n),o=i?i.size:0,l=this.ri(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:l}),this.size+=l-o,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return b.resolve(n?n.document.mutableCopy():Rt.newInvalidDocument(e))}getEntries(t,e){let n=ve();return e.forEach(i=>{const o=this.docs.get(i);n=n.insert(i,o?o.document.mutableCopy():Rt.newInvalidDocument(i))}),b.resolve(n)}getDocumentsMatchingQuery(t,e,n,i){let o=ve();const l=e.path,c=new U(l.child("__id-9223372036854775808__")),h=this.docs.getIteratorFrom(c);for(;h.hasNext();){const{key:f,value:{document:_}}=h.getNext();if(!l.isPrefixOf(f.path))break;f.path.length>l.length+1||jh(Bh(_),n)<=0||(i.has(_.key)||Jr(e,_))&&(o=o.insert(_.key,_.mutableCopy()))}return b.resolve(o)}getAllFromCollectionGroup(t,e,n,i){q(9500)}ii(t,e){return b.forEach(this.docs,n=>e(n))}newChangeBuffer(t){return new uf(this)}getSize(t){return b.resolve(this.size)}}class uf extends tf{constructor(t){super(),this.Nr=t}applyChanges(t){const e=[];return this.changes.forEach((n,i)=>{i.isValidDocument()?e.push(this.Nr.addEntry(t,i)):this.Nr.removeEntry(n)}),b.waitFor(e)}getFromCache(t,e){return this.Nr.getEntry(t,e)}getAllFromCache(t,e){return this.Nr.getEntries(t,e)}}/**
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
 */class cf{constructor(t){this.persistence=t,this.si=new De(e=>ui(e),ci),this.lastRemoteSnapshotVersion=j.min(),this.highestTargetId=0,this.oi=0,this._i=new gi,this.targetCount=0,this.ai=tn.ur()}forEachTarget(t,e){return this.si.forEach((n,i)=>e(i)),b.resolve()}getLastRemoteSnapshotVersion(t){return b.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return b.resolve(this.oi)}allocateTargetId(t){return this.highestTargetId=this.ai.next(),b.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.oi&&(this.oi=e),b.resolve()}Pr(t){this.si.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.ai=new tn(e),this.highestTargetId=e),t.sequenceNumber>this.oi&&(this.oi=t.sequenceNumber)}addTargetData(t,e){return this.Pr(e),this.targetCount+=1,b.resolve()}updateTargetData(t,e){return this.Pr(e),b.resolve()}removeTargetData(t,e){return this.si.delete(e.target),this._i.jr(e.targetId),this.targetCount-=1,b.resolve()}removeTargets(t,e,n){let i=0;const o=[];return this.si.forEach((l,c)=>{c.sequenceNumber<=e&&n.get(c.targetId)===null&&(this.si.delete(l),o.push(this.removeMatchingKeysForTargetId(t,c.targetId)),i++)}),b.waitFor(o).next(()=>i)}getTargetCount(t){return b.resolve(this.targetCount)}getTargetData(t,e){const n=this.si.get(e)||null;return b.resolve(n)}addMatchingKeys(t,e,n){return this._i.Wr(e,n),b.resolve()}removeMatchingKeys(t,e,n){this._i.zr(e,n);const i=this.persistence.referenceDelegate,o=[];return i&&e.forEach(l=>{o.push(i.markPotentiallyOrphaned(t,l))}),b.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this._i.jr(e),b.resolve()}getMatchingKeysForTargetId(t,e){const n=this._i.Hr(e);return b.resolve(n)}containsKey(t,e){return b.resolve(this._i.containsKey(e))}}/**
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
 */class jl{constructor(t,e){this.ui={},this.overlays={},this.ci=new Wr(0),this.li=!1,this.li=!0,this.hi=new of,this.referenceDelegate=t(this),this.Pi=new cf(this),this.indexManager=new Qd,this.remoteDocumentCache=function(i){return new lf(i)}(n=>this.referenceDelegate.Ti(n)),this.serializer=new Hd(e),this.Ii=new rf(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new sf,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.ui[t.toKey()];return n||(n=new af(e,this.referenceDelegate),this.ui[t.toKey()]=n),n}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(t,e,n){M("MemoryPersistence","Starting transaction:",t);const i=new hf(this.ci.next());return this.referenceDelegate.Ei(),n(i).next(o=>this.referenceDelegate.di(i).next(()=>o)).toPromise().then(o=>(i.raiseOnCommittedEvent(),o))}Ai(t,e){return b.or(Object.values(this.ui).map(n=>()=>n.containsKey(t,e)))}}class hf extends Gh{constructor(t){super(),this.currentSequenceNumber=t}}class yi{constructor(t){this.persistence=t,this.Ri=new gi,this.Vi=null}static mi(t){return new yi(t)}get fi(){if(this.Vi)return this.Vi;throw q(60996)}addReference(t,e,n){return this.Ri.addReference(n,e),this.fi.delete(n.toString()),b.resolve()}removeReference(t,e,n){return this.Ri.removeReference(n,e),this.fi.add(n.toString()),b.resolve()}markPotentiallyOrphaned(t,e){return this.fi.add(e.toString()),b.resolve()}removeTarget(t,e){this.Ri.jr(e.targetId).forEach(i=>this.fi.add(i.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next(i=>{i.forEach(o=>this.fi.add(o.toString()))}).next(()=>n.removeTargetData(t,e))}Ei(){this.Vi=new Set}di(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return b.forEach(this.fi,n=>{const i=U.fromPath(n);return this.gi(t,i).next(o=>{o||e.removeEntry(i,j.min())})}).next(()=>(this.Vi=null,e.apply(t)))}updateLimboDocument(t,e){return this.gi(t,e).next(n=>{n?this.fi.delete(e.toString()):this.fi.add(e.toString())})}Ti(t){return 0}gi(t,e){return b.or([()=>b.resolve(this.Ri.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ai(t,e)])}}class zr{constructor(t,e){this.persistence=t,this.pi=new De(n=>Qh(n.path),(n,i)=>n.isEqual(i)),this.garbageCollector=Zd(this,e)}static mi(t,e){return new zr(t,e)}Ei(){}di(t){return b.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}gr(t){const e=this.wr(t);return this.persistence.getTargetCache().getTargetCount(t).next(n=>e.next(i=>n+i))}wr(t){let e=0;return this.pr(t,n=>{e++}).next(()=>e)}pr(t,e){return b.forEach(this.pi,(n,i)=>this.br(t,n,i).next(o=>o?b.resolve():e(i)))}removeTargets(t,e,n){return this.persistence.getTargetCache().removeTargets(t,e,n)}removeOrphanedDocuments(t,e){let n=0;const i=this.persistence.getRemoteDocumentCache(),o=i.newChangeBuffer();return i.ii(t,l=>this.br(t,l,e).next(c=>{c||(n++,o.removeEntry(l,j.min()))})).next(()=>o.apply(t)).next(()=>n)}markPotentiallyOrphaned(t,e){return this.pi.set(e,t.currentSequenceNumber),b.resolve()}removeTarget(t,e){const n=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,n)}addReference(t,e,n){return this.pi.set(n,t.currentSequenceNumber),b.resolve()}removeReference(t,e,n){return this.pi.set(n,t.currentSequenceNumber),b.resolve()}updateLimboDocument(t,e){return this.pi.set(e,t.currentSequenceNumber),b.resolve()}Ti(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=Cr(t.data.value)),e}br(t,e,n){return b.or([()=>this.persistence.Ai(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const i=this.pi.get(e);return b.resolve(i!==void 0&&i>n)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
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
 */class _i{constructor(t,e,n,i){this.targetId=t,this.fromCache=e,this.Es=n,this.ds=i}static As(t,e){let n=W(),i=W();for(const o of e.docChanges)switch(o.type){case 0:n=n.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new _i(t,e.fromCache,n,i)}}/**
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
 */class df{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class ff{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return cc()?8:zh(lc())>0?6:4}()}initialize(t,e){this.ps=t,this.indexManager=e,this.Rs=!0}getDocumentsMatchingQuery(t,e,n,i){const o={result:null};return this.ys(t,e).next(l=>{o.result=l}).next(()=>{if(!o.result)return this.ws(t,e,i,n).next(l=>{o.result=l})}).next(()=>{if(o.result)return;const l=new df;return this.Ss(t,e,l).next(c=>{if(o.result=c,this.Vs)return this.bs(t,e,l,c.size)})}).next(()=>o.result)}bs(t,e,n,i){return n.documentReadCount<this.fs?(qe()<=K.DEBUG&&M("QueryEngine","SDK will not create cache indexes for query:",Ge(e),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),b.resolve()):(qe()<=K.DEBUG&&M("QueryEngine","Query:",Ge(e),"scans",n.documentReadCount,"local documents and returns",i,"documents as results."),n.documentReadCount>this.gs*i?(qe()<=K.DEBUG&&M("QueryEngine","The SDK decides to create cache indexes for query:",Ge(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Ht(e))):b.resolve())}ys(t,e){if(na(e))return b.resolve(null);let n=Ht(e);return this.indexManager.getIndexType(t,n).next(i=>i===0?null:(e.limit!==null&&i===1&&(e=zs(e,null,"F"),n=Ht(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next(o=>{const l=W(...o);return this.ps.getDocuments(t,l).next(c=>this.indexManager.getMinOffset(t,n).next(h=>{const f=this.Ds(e,c);return this.Cs(e,f,l,h.readTime)?this.ys(t,zs(e,null,"F")):this.vs(t,f,e,h)}))})))}ws(t,e,n,i){return na(e)||i.isEqual(j.min())?b.resolve(null):this.ps.getDocuments(t,n).next(o=>{const l=this.Ds(e,o);return this.Cs(e,l,n,i)?b.resolve(null):(qe()<=K.DEBUG&&M("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Ge(e)),this.vs(t,l,e,Uh(i,zn)).next(c=>c))})}Ds(t,e){let n=new pt(El(t));return e.forEach((i,o)=>{Jr(t,o)&&(n=n.add(o))}),n}Cs(t,e,n,i){if(t.limit===null)return!1;if(n.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}Ss(t,e,n){return qe()<=K.DEBUG&&M("QueryEngine","Using full collection scan to execute query:",Ge(e)),this.ps.getDocumentsMatchingQuery(t,e,me.min(),n)}vs(t,e,n,i){return this.ps.getDocumentsMatchingQuery(t,n,i).next(o=>(e.forEach(l=>{o=o.insert(l.key,l)}),o))}}/**
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
 */const vi="LocalStore",pf=3e8;class mf{constructor(t,e,n,i){this.persistence=t,this.Fs=e,this.serializer=i,this.Ms=new at(z),this.xs=new De(o=>ui(o),ci),this.Os=new Map,this.Ns=t.getRemoteDocumentCache(),this.Pi=t.getTargetCache(),this.Ii=t.getBundleCache(),this.Bs(n)}Bs(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new nf(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.Ms))}}function gf(r,t,e,n){return new mf(r,t,e,n)}async function ql(r,t){const e=Q(r);return await e.persistence.runTransaction("Handle user change","readonly",n=>{let i;return e.mutationQueue.getAllMutationBatches(n).next(o=>(i=o,e.Bs(t),e.mutationQueue.getAllMutationBatches(n))).next(o=>{const l=[],c=[];let h=W();for(const f of i){l.push(f.batchId);for(const _ of f.mutations)h=h.add(_.key)}for(const f of o){c.push(f.batchId);for(const _ of f.mutations)h=h.add(_.key)}return e.localDocuments.getDocuments(n,h).next(f=>({Ls:f,removedBatchIds:l,addedBatchIds:c}))})})}function Gl(r){const t=Q(r);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Pi.getLastRemoteSnapshotVersion(e))}function yf(r,t){const e=Q(r),n=t.snapshotVersion;let i=e.Ms;return e.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const l=e.Ns.newChangeBuffer({trackRemovals:!0});i=e.Ms;const c=[];t.targetChanges.forEach((_,S)=>{const w=i.get(S);if(!w)return;c.push(e.Pi.removeMatchingKeys(o,_.removedDocuments,S).next(()=>e.Pi.addMatchingKeys(o,_.addedDocuments,S)));let P=w.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(S)!==null?P=P.withResumeToken(Tt.EMPTY_BYTE_STRING,j.min()).withLastLimboFreeSnapshotVersion(j.min()):_.resumeToken.approximateByteSize()>0&&(P=P.withResumeToken(_.resumeToken,n)),i=i.insert(S,P),function(B,x,J){return B.resumeToken.approximateByteSize()===0||x.snapshotVersion.toMicroseconds()-B.snapshotVersion.toMicroseconds()>=pf?!0:J.addedDocuments.size+J.modifiedDocuments.size+J.removedDocuments.size>0}(w,P,_)&&c.push(e.Pi.updateTargetData(o,P))});let h=ve(),f=W();if(t.documentUpdates.forEach(_=>{t.resolvedLimboDocuments.has(_)&&c.push(e.persistence.referenceDelegate.updateLimboDocument(o,_))}),c.push(_f(o,l,t.documentUpdates).next(_=>{h=_.ks,f=_.qs})),!n.isEqual(j.min())){const _=e.Pi.getLastRemoteSnapshotVersion(o).next(S=>e.Pi.setTargetsMetadata(o,o.currentSequenceNumber,n));c.push(_)}return b.waitFor(c).next(()=>l.apply(o)).next(()=>e.localDocuments.getLocalViewOfDocuments(o,h,f)).next(()=>h)}).then(o=>(e.Ms=i,o))}function _f(r,t,e){let n=W(),i=W();return e.forEach(o=>n=n.add(o)),t.getEntries(r,n).next(o=>{let l=ve();return e.forEach((c,h)=>{const f=o.get(c);h.isFoundDocument()!==f.isFoundDocument()&&(i=i.add(c)),h.isNoDocument()&&h.version.isEqual(j.min())?(t.removeEntry(c,h.readTime),l=l.insert(c,h)):!f.isValidDocument()||h.version.compareTo(f.version)>0||h.version.compareTo(f.version)===0&&f.hasPendingWrites?(t.addEntry(h),l=l.insert(c,h)):M(vi,"Ignoring outdated watch update for ",c,". Current version:",f.version," Watch version:",h.version)}),{ks:l,qs:i}})}function vf(r,t){const e=Q(r);return e.persistence.runTransaction("Allocate target","readwrite",n=>{let i;return e.Pi.getTargetData(n,t).next(o=>o?(i=o,b.resolve(i)):e.Pi.allocateTargetId(n).next(l=>(i=new ue(t,l,"TargetPurposeListen",n.currentSequenceNumber),e.Pi.addTargetData(n,i).next(()=>i))))}).then(n=>{const i=e.Ms.get(n.targetId);return(i===null||n.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(e.Ms=e.Ms.insert(n.targetId,n),e.xs.set(t,n.targetId)),n})}async function Ys(r,t,e){const n=Q(r),i=n.Ms.get(t),o=e?"readwrite":"readwrite-primary";try{e||await n.persistence.runTransaction("Release target",o,l=>n.persistence.referenceDelegate.removeTarget(l,i))}catch(l){if(!on(l))throw l;M(vi,`Failed to update sequence numbers for target ${t}: ${l}`)}n.Ms=n.Ms.remove(t),n.xs.delete(i.target)}function ma(r,t,e){const n=Q(r);let i=j.min(),o=W();return n.persistence.runTransaction("Execute query","readwrite",l=>function(h,f,_){const S=Q(h),w=S.xs.get(_);return w!==void 0?b.resolve(S.Ms.get(w)):S.Pi.getTargetData(f,_)}(n,l,Ht(t)).next(c=>{if(c)return i=c.lastLimboFreeSnapshotVersion,n.Pi.getMatchingKeysForTargetId(l,c.targetId).next(h=>{o=h})}).next(()=>n.Fs.getDocumentsMatchingQuery(l,t,e?i:j.min(),e?o:W())).next(c=>(Ef(n,dd(t),c),{documents:c,Qs:o})))}function Ef(r,t,e){let n=r.Os.get(t)||j.min();e.forEach((i,o)=>{o.readTime.compareTo(n)>0&&(n=o.readTime)}),r.Os.set(t,n)}class ga{constructor(){this.activeTargetIds=_d()}zs(t){this.activeTargetIds=this.activeTargetIds.add(t)}js(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Gs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Tf{constructor(){this.Mo=new ga,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t,e=!0){return e&&this.Mo.zs(t),this.xo[t]||"not-current"}updateQueryState(t,e,n){this.xo[t]=e}removeLocalQueryTarget(t){this.Mo.js(t)}isLocalQueryTarget(t){return this.Mo.activeTargetIds.has(t)}clearQueryState(t){delete this.xo[t]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(t){return this.Mo.activeTargetIds.has(t)}start(){return this.Mo=new ga,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class If{Oo(t){}shutdown(){}}/**
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
 */const ya="ConnectivityMonitor";class _a{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(t){this.qo.push(t)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){M(ya,"Network connectivity changed: AVAILABLE");for(const t of this.qo)t(0)}ko(){M(ya,"Network connectivity changed: UNAVAILABLE");for(const t of this.qo)t(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Sr=null;function Xs(){return Sr===null?Sr=function(){return 268435456+Math.round(2147483648*Math.random())}():Sr++,"0x"+Sr.toString(16)}/**
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
 */const Ps="RestConnection",Af={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class wf{get $o(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Uo=e+"://"+t.host,this.Ko=`projects/${n}/databases/${i}`,this.Wo=this.databaseId.database===Fr?`project_id=${n}`:`project_id=${n}&database_id=${i}`}Go(t,e,n,i,o){const l=Xs(),c=this.zo(t,e.toUriEncodedString());M(Ps,`Sending RPC '${t}' ${l}:`,c,n);const h={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(h,i,o);const{host:f}=new URL(c),_=ri(f);return this.Jo(t,c,h,n,_).then(S=>(M(Ps,`Received RPC '${t}' ${l}: `,S),S),S=>{throw Ye(Ps,`RPC '${t}' ${l} failed with error: `,S,"url: ",c,"request:",n),S})}Ho(t,e,n,i,o,l){return this.Go(t,e,n,i,o)}jo(t,e,n){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+sn}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach((i,o)=>t[o]=i),n&&n.headers.forEach((i,o)=>t[o]=i)}zo(t,e){const n=Af[t];return`${this.Uo}/v1/${e}:${n}`}terminate(){}}/**
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
 */class Sf{constructor(t){this.Yo=t.Yo,this.Zo=t.Zo}Xo(t){this.e_=t}t_(t){this.n_=t}r_(t){this.i_=t}onMessage(t){this.s_=t}close(){this.Zo()}send(t){this.Yo(t)}o_(){this.e_()}__(){this.n_()}a_(t){this.i_(t)}u_(t){this.s_(t)}}/**
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
 */const wt="WebChannelConnection";class Rf extends wf{constructor(t){super(t),this.c_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Jo(t,e,n,i,o){const l=Xs();return new Promise((c,h)=>{const f=new Wa;f.setWithCredentials(!0),f.listenOnce($a.COMPLETE,()=>{try{switch(f.getLastErrorCode()){case br.NO_ERROR:const S=f.getResponseJson();M(wt,`XHR for RPC '${t}' ${l} received:`,JSON.stringify(S)),c(S);break;case br.TIMEOUT:M(wt,`RPC '${t}' ${l} timed out`),h(new L(C.DEADLINE_EXCEEDED,"Request time out"));break;case br.HTTP_ERROR:const w=f.getStatus();if(M(wt,`RPC '${t}' ${l} failed with status:`,w,"response text:",f.getResponseText()),w>0){let P=f.getResponseJson();Array.isArray(P)&&(P=P[0]);const k=P==null?void 0:P.error;if(k&&k.status&&k.message){const B=function(J){const G=J.toLowerCase().replace(/_/g,"-");return Object.values(C).indexOf(G)>=0?G:C.UNKNOWN}(k.status);h(new L(B,k.message))}else h(new L(C.UNKNOWN,"Server responded with status "+f.getStatus()))}else h(new L(C.UNAVAILABLE,"Connection failed."));break;default:q(9055,{l_:t,streamId:l,h_:f.getLastErrorCode(),P_:f.getLastError()})}}finally{M(wt,`RPC '${t}' ${l} completed.`)}});const _=JSON.stringify(i);M(wt,`RPC '${t}' ${l} sending request:`,i),f.send(e,"POST",_,n,15)})}T_(t,e,n){const i=Xs(),o=[this.Uo,"/","google.firestore.v1.Firestore","/",t,"/channel"],l=Ja(),c=Xa(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},f=this.longPollingOptions.timeoutSeconds;f!==void 0&&(h.longPollingTimeout=Math.round(1e3*f)),this.useFetchStreams&&(h.useFetchStreams=!0),this.jo(h.initMessageHeaders,e,n),h.encodeInitMessageHeaders=!0;const _=o.join("");M(wt,`Creating RPC '${t}' stream ${i}: ${_}`,h);const S=l.createWebChannel(_,h);this.I_(S);let w=!1,P=!1;const k=new Sf({Yo:x=>{P?M(wt,`Not sending because RPC '${t}' stream ${i} is closed:`,x):(w||(M(wt,`Opening RPC '${t}' stream ${i} transport.`),S.open(),w=!0),M(wt,`RPC '${t}' stream ${i} sending:`,x),S.send(x))},Zo:()=>S.close()}),B=(x,J,G)=>{x.listen(J,Y=>{try{G(Y)}catch(rt){setTimeout(()=>{throw rt},0)}})};return B(S,Dn.EventType.OPEN,()=>{P||(M(wt,`RPC '${t}' stream ${i} transport opened.`),k.o_())}),B(S,Dn.EventType.CLOSE,()=>{P||(P=!0,M(wt,`RPC '${t}' stream ${i} transport closed`),k.a_(),this.E_(S))}),B(S,Dn.EventType.ERROR,x=>{P||(P=!0,Ye(wt,`RPC '${t}' stream ${i} transport errored. Name:`,x.name,"Message:",x.message),k.a_(new L(C.UNAVAILABLE,"The operation could not be completed")))}),B(S,Dn.EventType.MESSAGE,x=>{var J;if(!P){const G=x.data[0];nt(!!G,16349);const Y=G,rt=(Y==null?void 0:Y.error)||((J=Y[0])==null?void 0:J.error);if(rt){M(wt,`RPC '${t}' stream ${i} received error:`,rt);const Lt=rt.status;let ht=function(p){const v=lt[p];if(v!==void 0)return Pl(v)}(Lt),T=rt.message;ht===void 0&&(ht=C.INTERNAL,T="Unknown error status: "+Lt+" with message "+rt.message),P=!0,k.a_(new L(ht,T)),S.close()}else M(wt,`RPC '${t}' stream ${i} received:`,G),k.u_(G)}}),B(c,Ya.STAT_EVENT,x=>{x.stat===xs.PROXY?M(wt,`RPC '${t}' stream ${i} detected buffering proxy`):x.stat===xs.NOPROXY&&M(wt,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{k.__()},0),k}terminate(){this.c_.forEach(t=>t.close()),this.c_=[]}I_(t){this.c_.push(t)}E_(t){this.c_=this.c_.filter(e=>e===t)}}function Vs(){return typeof document<"u"?document:null}/**
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
 */function ns(r){return new Ld(r,!0)}/**
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
 */class zl{constructor(t,e,n=1e3,i=1.5,o=6e4){this.Mi=t,this.timerId=e,this.d_=n,this.A_=i,this.R_=o,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(t){this.cancel();const e=Math.floor(this.V_+this.y_()),n=Math.max(0,Date.now()-this.f_),i=Math.max(0,e-n);i>0&&M("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.V_} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,i,()=>(this.f_=Date.now(),t())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */const va="PersistentStream";class bf{constructor(t,e,n,i,o,l,c,h){this.Mi=t,this.S_=n,this.b_=i,this.connection=o,this.authCredentialsProvider=l,this.appCheckCredentialsProvider=c,this.listener=h,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new zl(t,e)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(t){this.Q_(),this.stream.send(t)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,e){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,t!==4?this.M_.reset():e&&e.code===C.RESOURCE_EXHAUSTED?(ne(e.toString()),ne("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):e&&e.code===C.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.r_(e)}K_(){}auth(){this.state=1;const t=this.W_(this.D_),e=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([n,i])=>{this.D_===e&&this.G_(n,i)},n=>{t(()=>{const i=new L(C.UNKNOWN,"Fetching auth token failed: "+n.message);return this.z_(i)})})}G_(t,e){const n=this.W_(this.D_);this.stream=this.j_(t,e),this.stream.Xo(()=>{n(()=>this.listener.Xo())}),this.stream.t_(()=>{n(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(i=>{n(()=>this.z_(i))}),this.stream.onMessage(i=>{n(()=>++this.F_==1?this.J_(i):this.onNext(i))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(t){return M(va,`close with error: ${t}`),this.stream=null,this.close(4,t)}W_(t){return e=>{this.Mi.enqueueAndForget(()=>this.D_===t?e():(M(va,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Cf extends bf{constructor(t,e,n,i,o,l){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,i,l),this.serializer=o}j_(t,e){return this.connection.T_("Listen",t,e)}J_(t){return this.onNext(t)}onNext(t){this.M_.reset();const e=xd(this.serializer,t),n=function(o){if(!("targetChange"in o))return j.min();const l=o.targetChange;return l.targetIds&&l.targetIds.length?j.min():l.readTime?Qe(l.readTime):j.min()}(t);return this.listener.H_(e,n)}Y_(t){const e={};e.database=ha(this.serializer),e.addTarget=function(o,l){let c;const h=l.target;if(c=qs(h)?{documents:Fd(o,h)}:{query:Ud(o,h).ft},c.targetId=l.targetId,l.resumeToken.approximateByteSize()>0){c.resumeToken=Nl(o,l.resumeToken);const f=Qs(o,l.expectedCount);f!==null&&(c.expectedCount=f)}else if(l.snapshotVersion.compareTo(j.min())>0){c.readTime=Ws(o,l.snapshotVersion.toTimestamp());const f=Qs(o,l.expectedCount);f!==null&&(c.expectedCount=f)}return c}(this.serializer,t);const n=jd(this.serializer,t);n&&(e.labels=n),this.q_(e)}Z_(t){const e={};e.database=ha(this.serializer),e.removeTarget=t,this.q_(e)}}/**
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
 */class Pf{}class Vf extends Pf{constructor(t,e,n,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new L(C.FAILED_PRECONDITION,"The client has already been terminated.")}Go(t,e,n,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Go(t,$s(e,n),i,o,l)).catch(o=>{throw o.name==="FirebaseError"?(o.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new L(C.UNKNOWN,o.toString())})}Ho(t,e,n,i,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([l,c])=>this.connection.Ho(t,$s(e,n),i,l,c,o)).catch(l=>{throw l.name==="FirebaseError"?(l.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new L(C.UNKNOWN,l.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class Df{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(t){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ca("Offline")))}set(t){this.Pa(),this.oa=0,t==="Online"&&(this.aa=!1),this.ca(t)}ca(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}la(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(ne(e),this.aa=!1):M("OnlineStateTracker",e)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const en="RemoteStore";class Nf{constructor(t,e,n,i,o){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=o,this.Aa.Oo(l=>{n.enqueueAndForget(async()=>{Jn(this)&&(M(en,"Restarting streams for network reachability change."),await async function(h){const f=Q(h);f.Ea.add(4),await Xn(f),f.Ra.set("Unknown"),f.Ea.delete(4),await rs(f)}(this))})}),this.Ra=new Df(n,i)}}async function rs(r){if(Jn(r))for(const t of r.da)await t(!0)}async function Xn(r){for(const t of r.da)await t(!1)}function Hl(r,t){const e=Q(r);e.Ia.has(t.targetId)||(e.Ia.set(t.targetId,t),Ai(e)?Ii(e):ln(e).O_()&&Ti(e,t))}function Ei(r,t){const e=Q(r),n=ln(e);e.Ia.delete(t),n.O_()&&Kl(e,t),e.Ia.size===0&&(n.O_()?n.L_():Jn(e)&&e.Ra.set("Unknown"))}function Ti(r,t){if(r.Va.Ue(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(j.min())>0){const e=r.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}ln(r).Y_(t)}function Kl(r,t){r.Va.Ue(t),ln(r).Z_(t)}function Ii(r){r.Va=new Dd({getRemoteKeysForTarget:t=>r.remoteSyncer.getRemoteKeysForTarget(t),At:t=>r.Ia.get(t)||null,ht:()=>r.datastore.serializer.databaseId}),ln(r).start(),r.Ra.ua()}function Ai(r){return Jn(r)&&!ln(r).x_()&&r.Ia.size>0}function Jn(r){return Q(r).Ea.size===0}function Ql(r){r.Va=void 0}async function kf(r){r.Ra.set("Online")}async function Of(r){r.Ia.forEach((t,e)=>{Ti(r,t)})}async function Lf(r,t){Ql(r),Ai(r)?(r.Ra.ha(t),Ii(r)):r.Ra.set("Unknown")}async function Mf(r,t,e){if(r.Ra.set("Online"),t instanceof Dl&&t.state===2&&t.cause)try{await async function(i,o){const l=o.cause;for(const c of o.targetIds)i.Ia.has(c)&&(await i.remoteSyncer.rejectListen(c,l),i.Ia.delete(c),i.Va.removeTarget(c))}(r,t)}catch(n){M(en,"Failed to remove targets %s: %s ",t.targetIds.join(","),n),await Ea(r,n)}else if(t instanceof Vr?r.Va.Ze(t):t instanceof Vl?r.Va.st(t):r.Va.tt(t),!e.isEqual(j.min()))try{const n=await Gl(r.localStore);e.compareTo(n)>=0&&await function(o,l){const c=o.Va.Tt(l);return c.targetChanges.forEach((h,f)=>{if(h.resumeToken.approximateByteSize()>0){const _=o.Ia.get(f);_&&o.Ia.set(f,_.withResumeToken(h.resumeToken,l))}}),c.targetMismatches.forEach((h,f)=>{const _=o.Ia.get(h);if(!_)return;o.Ia.set(h,_.withResumeToken(Tt.EMPTY_BYTE_STRING,_.snapshotVersion)),Kl(o,h);const S=new ue(_.target,h,f,_.sequenceNumber);Ti(o,S)}),o.remoteSyncer.applyRemoteEvent(c)}(r,e)}catch(n){M(en,"Failed to raise snapshot:",n),await Ea(r,n)}}async function Ea(r,t,e){if(!on(t))throw t;r.Ea.add(1),await Xn(r),r.Ra.set("Offline"),e||(e=()=>Gl(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{M(en,"Retrying IndexedDB access"),await e(),r.Ea.delete(1),await rs(r)})}async function Ta(r,t){const e=Q(r);e.asyncQueue.verifyOperationInProgress(),M(en,"RemoteStore received new credentials");const n=Jn(e);e.Ea.add(3),await Xn(e),n&&e.Ra.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.Ea.delete(3),await rs(e)}async function xf(r,t){const e=Q(r);t?(e.Ea.delete(2),await rs(e)):t||(e.Ea.add(2),await Xn(e),e.Ra.set("Unknown"))}function ln(r){return r.ma||(r.ma=function(e,n,i){const o=Q(e);return o.sa(),new Cf(n,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(r.datastore,r.asyncQueue,{Xo:kf.bind(null,r),t_:Of.bind(null,r),r_:Lf.bind(null,r),H_:Mf.bind(null,r)}),r.da.push(async t=>{t?(r.ma.B_(),Ai(r)?Ii(r):r.Ra.set("Unknown")):(await r.ma.stop(),Ql(r))})),r.ma}/**
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
 */class wi{constructor(t,e,n,i,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=i,this.removalCallback=o,this.deferred=new fe,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(l=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,n,i,o){const l=Date.now()+n,c=new wi(t,e,l,i,o);return c.start(n),c}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new L(C.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Wl(r,t){if(ne("AsyncQueue",`${t}: ${r}`),on(r))return new L(C.UNAVAILABLE,`${t}: ${r}`);throw r}/**
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
 */class We{static emptySet(t){return new We(t.comparator)}constructor(t){this.comparator=t?(e,n)=>t(e,n)||U.comparator(e.key,n.key):(e,n)=>U.comparator(e.key,n.key),this.keyedMap=Nn(),this.sortedSet=new at(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,n)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof We)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=n.getNext().key;if(!i.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const n=new We;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}/**
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
 */class Ia{constructor(){this.ga=new at(U.comparator)}track(t){const e=t.doc.key,n=this.ga.get(e);n?t.type!==0&&n.type===3?this.ga=this.ga.insert(e,t):t.type===3&&n.type!==1?this.ga=this.ga.insert(e,{type:n.type,doc:t.doc}):t.type===2&&n.type===2?this.ga=this.ga.insert(e,{type:2,doc:t.doc}):t.type===2&&n.type===0?this.ga=this.ga.insert(e,{type:0,doc:t.doc}):t.type===1&&n.type===0?this.ga=this.ga.remove(e):t.type===1&&n.type===2?this.ga=this.ga.insert(e,{type:1,doc:n.doc}):t.type===0&&n.type===1?this.ga=this.ga.insert(e,{type:2,doc:t.doc}):q(63341,{Rt:t,pa:n}):this.ga=this.ga.insert(e,t)}ya(){const t=[];return this.ga.inorderTraversal((e,n)=>{t.push(n)}),t}}class nn{constructor(t,e,n,i,o,l,c,h,f){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=i,this.mutatedKeys=o,this.fromCache=l,this.syncStateChanged=c,this.excludesMetadataChanges=h,this.hasCachedResults=f}static fromInitialDocuments(t,e,n,i,o){const l=[];return e.forEach(c=>{l.push({type:0,doc:c})}),new nn(t,e,We.emptySet(e),l,n,i,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Xr(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let i=0;i<e.length;i++)if(e[i].type!==n[i].type||!e[i].doc.isEqual(n[i].doc))return!1;return!0}}/**
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
 */class Ff{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(t=>t.Da())}}class Uf{constructor(){this.queries=Aa(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(e,n){const i=Q(e),o=i.queries;i.queries=Aa(),o.forEach((l,c)=>{for(const h of c.Sa)h.onError(n)})})(this,new L(C.ABORTED,"Firestore shutting down"))}}function Aa(){return new De(r=>vl(r),Xr)}async function $l(r,t){const e=Q(r);let n=3;const i=t.query;let o=e.queries.get(i);o?!o.ba()&&t.Da()&&(n=2):(o=new Ff,n=t.Da()?0:1);try{switch(n){case 0:o.wa=await e.onListen(i,!0);break;case 1:o.wa=await e.onListen(i,!1);break;case 2:await e.onFirstRemoteStoreListen(i)}}catch(l){const c=Wl(l,`Initialization of query '${Ge(t.query)}' failed`);return void t.onError(c)}e.queries.set(i,o),o.Sa.push(t),t.va(e.onlineState),o.wa&&t.Fa(o.wa)&&Si(e)}async function Yl(r,t){const e=Q(r),n=t.query;let i=3;const o=e.queries.get(n);if(o){const l=o.Sa.indexOf(t);l>=0&&(o.Sa.splice(l,1),o.Sa.length===0?i=t.Da()?0:1:!o.ba()&&t.Da()&&(i=2))}switch(i){case 0:return e.queries.delete(n),e.onUnlisten(n,!0);case 1:return e.queries.delete(n),e.onUnlisten(n,!1);case 2:return e.onLastRemoteStoreUnlisten(n);default:return}}function Bf(r,t){const e=Q(r);let n=!1;for(const i of t){const o=i.query,l=e.queries.get(o);if(l){for(const c of l.Sa)c.Fa(i)&&(n=!0);l.wa=i}}n&&Si(e)}function jf(r,t,e){const n=Q(r),i=n.queries.get(t);if(i)for(const o of i.Sa)o.onError(e);n.queries.delete(t)}function Si(r){r.Ca.forEach(t=>{t.next()})}var Js,wa;(wa=Js||(Js={})).Ma="default",wa.Cache="cache";class Xl{constructor(t,e,n){this.query=t,this.xa=e,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=n||{}}Fa(t){if(!this.options.includeMetadataChanges){const n=[];for(const i of t.docChanges)i.type!==3&&n.push(i);t=new nn(t.query,t.docs,t.oldDocs,n,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Oa?this.Ba(t)&&(this.xa.next(t),e=!0):this.La(t,this.onlineState)&&(this.ka(t),e=!0),this.Na=t,e}onError(t){this.xa.error(t)}va(t){this.onlineState=t;let e=!1;return this.Na&&!this.Oa&&this.La(this.Na,t)&&(this.ka(this.Na),e=!0),e}La(t,e){if(!t.fromCache||!this.Da())return!0;const n=e!=="Offline";return(!this.options.qa||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}Ba(t){if(t.docChanges.length>0)return!0;const e=this.Na&&this.Na.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}ka(t){t=nn.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Oa=!0,this.xa.next(t)}Da(){return this.options.source!==Js.Cache}}/**
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
 */class Jl{constructor(t){this.key=t}}class Zl{constructor(t){this.key=t}}class qf{constructor(t,e){this.query=t,this.Ya=e,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=W(),this.mutatedKeys=W(),this.eu=El(t),this.tu=new We(this.eu)}get nu(){return this.Ya}ru(t,e){const n=e?e.iu:new Ia,i=e?e.tu:this.tu;let o=e?e.mutatedKeys:this.mutatedKeys,l=i,c=!1;const h=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,f=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((_,S)=>{const w=i.get(_),P=Jr(this.query,S)?S:null,k=!!w&&this.mutatedKeys.has(w.key),B=!!P&&(P.hasLocalMutations||this.mutatedKeys.has(P.key)&&P.hasCommittedMutations);let x=!1;w&&P?w.data.isEqual(P.data)?k!==B&&(n.track({type:3,doc:P}),x=!0):this.su(w,P)||(n.track({type:2,doc:P}),x=!0,(h&&this.eu(P,h)>0||f&&this.eu(P,f)<0)&&(c=!0)):!w&&P?(n.track({type:0,doc:P}),x=!0):w&&!P&&(n.track({type:1,doc:w}),x=!0,(h||f)&&(c=!0)),x&&(P?(l=l.add(P),o=B?o.add(_):o.delete(_)):(l=l.delete(_),o=o.delete(_)))}),this.query.limit!==null)for(;l.size>this.query.limit;){const _=this.query.limitType==="F"?l.last():l.first();l=l.delete(_.key),o=o.delete(_.key),n.track({type:1,doc:_})}return{tu:l,iu:n,Cs:c,mutatedKeys:o}}su(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n,i){const o=this.tu;this.tu=t.tu,this.mutatedKeys=t.mutatedKeys;const l=t.iu.ya();l.sort((_,S)=>function(P,k){const B=x=>{switch(x){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return q(20277,{Rt:x})}};return B(P)-B(k)}(_.type,S.type)||this.eu(_.doc,S.doc)),this.ou(n),i=i??!1;const c=e&&!i?this._u():[],h=this.Xa.size===0&&this.current&&!i?1:0,f=h!==this.Za;return this.Za=h,l.length!==0||f?{snapshot:new nn(this.query,t.tu,o,l,t.mutatedKeys,h===0,f,!1,!!n&&n.resumeToken.approximateByteSize()>0),au:c}:{au:c}}va(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Ia,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(t){return!this.Ya.has(t)&&!!this.tu.has(t)&&!this.tu.get(t).hasLocalMutations}ou(t){t&&(t.addedDocuments.forEach(e=>this.Ya=this.Ya.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.Ya=this.Ya.delete(e)),this.current=t.current)}_u(){if(!this.current)return[];const t=this.Xa;this.Xa=W(),this.tu.forEach(n=>{this.uu(n.key)&&(this.Xa=this.Xa.add(n.key))});const e=[];return t.forEach(n=>{this.Xa.has(n)||e.push(new Zl(n))}),this.Xa.forEach(n=>{t.has(n)||e.push(new Jl(n))}),e}cu(t){this.Ya=t.Qs,this.Xa=W();const e=this.ru(t.documents);return this.applyChanges(e,!0)}lu(){return nn.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const Ri="SyncEngine";class Gf{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class zf{constructor(t){this.key=t,this.hu=!1}}class Hf{constructor(t,e,n,i,o,l){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=l,this.Pu={},this.Tu=new De(c=>vl(c),Xr),this.Iu=new Map,this.Eu=new Set,this.du=new at(U.comparator),this.Au=new Map,this.Ru=new gi,this.Vu={},this.mu=new Map,this.fu=tn.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function Kf(r,t,e=!0){const n=su(r);let i;const o=n.Tu.get(t);return o?(n.sharedClientState.addLocalQueryTarget(o.targetId),i=o.view.lu()):i=await tu(n,t,e,!0),i}async function Qf(r,t){const e=su(r);await tu(e,t,!0,!1)}async function tu(r,t,e,n){const i=await vf(r.localStore,Ht(t)),o=i.targetId,l=r.sharedClientState.addLocalQueryTarget(o,e);let c;return n&&(c=await Wf(r,t,o,l==="current",i.resumeToken)),r.isPrimaryClient&&e&&Hl(r.remoteStore,i),c}async function Wf(r,t,e,n,i){r.pu=(S,w,P)=>async function(B,x,J,G){let Y=x.view.ru(J);Y.Cs&&(Y=await ma(B.localStore,x.query,!1).then(({documents:T})=>x.view.ru(T,Y)));const rt=G&&G.targetChanges.get(x.targetId),Lt=G&&G.targetMismatches.get(x.targetId)!=null,ht=x.view.applyChanges(Y,B.isPrimaryClient,rt,Lt);return Ra(B,x.targetId,ht.au),ht.snapshot}(r,S,w,P);const o=await ma(r.localStore,t,!0),l=new qf(t,o.Qs),c=l.ru(o.documents),h=Yn.createSynthesizedTargetChangeForCurrentChange(e,n&&r.onlineState!=="Offline",i),f=l.applyChanges(c,r.isPrimaryClient,h);Ra(r,e,f.au);const _=new Gf(t,e,l);return r.Tu.set(t,_),r.Iu.has(e)?r.Iu.get(e).push(t):r.Iu.set(e,[t]),f.snapshot}async function $f(r,t,e){const n=Q(r),i=n.Tu.get(t),o=n.Iu.get(i.targetId);if(o.length>1)return n.Iu.set(i.targetId,o.filter(l=>!Xr(l,t))),void n.Tu.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await Ys(n.localStore,i.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(i.targetId),e&&Ei(n.remoteStore,i.targetId),Zs(n,i.targetId)}).catch(Qr)):(Zs(n,i.targetId),await Ys(n.localStore,i.targetId,!0))}async function Yf(r,t){const e=Q(r),n=e.Tu.get(t),i=e.Iu.get(n.targetId);e.isPrimaryClient&&i.length===1&&(e.sharedClientState.removeLocalQueryTarget(n.targetId),Ei(e.remoteStore,n.targetId))}async function eu(r,t){const e=Q(r);try{const n=await yf(e.localStore,t);t.targetChanges.forEach((i,o)=>{const l=e.Au.get(o);l&&(nt(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?l.hu=!0:i.modifiedDocuments.size>0?nt(l.hu,14607):i.removedDocuments.size>0&&(nt(l.hu,42227),l.hu=!1))}),await ru(e,n,t)}catch(n){await Qr(n)}}function Sa(r,t,e){const n=Q(r);if(n.isPrimaryClient&&e===0||!n.isPrimaryClient&&e===1){const i=[];n.Tu.forEach((o,l)=>{const c=l.view.va(t);c.snapshot&&i.push(c.snapshot)}),function(l,c){const h=Q(l);h.onlineState=c;let f=!1;h.queries.forEach((_,S)=>{for(const w of S.Sa)w.va(c)&&(f=!0)}),f&&Si(h)}(n.eventManager,t),i.length&&n.Pu.H_(i),n.onlineState=t,n.isPrimaryClient&&n.sharedClientState.setOnlineState(t)}}async function Xf(r,t,e){const n=Q(r);n.sharedClientState.updateQueryState(t,"rejected",e);const i=n.Au.get(t),o=i&&i.key;if(o){let l=new at(U.comparator);l=l.insert(o,Rt.newNoDocument(o,j.min()));const c=W().add(o),h=new es(j.min(),new Map,new at(z),l,c);await eu(n,h),n.du=n.du.remove(o),n.Au.delete(t),bi(n)}else await Ys(n.localStore,t,!1).then(()=>Zs(n,t,e)).catch(Qr)}function Zs(r,t,e=null){r.sharedClientState.removeLocalQueryTarget(t);for(const n of r.Iu.get(t))r.Tu.delete(n),e&&r.Pu.yu(n,e);r.Iu.delete(t),r.isPrimaryClient&&r.Ru.jr(t).forEach(n=>{r.Ru.containsKey(n)||nu(r,n)})}function nu(r,t){r.Eu.delete(t.path.canonicalString());const e=r.du.get(t);e!==null&&(Ei(r.remoteStore,e),r.du=r.du.remove(t),r.Au.delete(e),bi(r))}function Ra(r,t,e){for(const n of e)n instanceof Jl?(r.Ru.addReference(n.key,t),Jf(r,n)):n instanceof Zl?(M(Ri,"Document no longer in limbo: "+n.key),r.Ru.removeReference(n.key,t),r.Ru.containsKey(n.key)||nu(r,n.key)):q(19791,{wu:n})}function Jf(r,t){const e=t.key,n=e.path.canonicalString();r.du.get(e)||r.Eu.has(n)||(M(Ri,"New document in limbo: "+e),r.Eu.add(n),bi(r))}function bi(r){for(;r.Eu.size>0&&r.du.size<r.maxConcurrentLimboResolutions;){const t=r.Eu.values().next().value;r.Eu.delete(t);const e=new U(Z.fromString(t)),n=r.fu.next();r.Au.set(n,new zf(e)),r.du=r.du.insert(e,n),Hl(r.remoteStore,new ue(Ht(hi(e.path)),n,"TargetPurposeLimboResolution",Wr.ce))}}async function ru(r,t,e){const n=Q(r),i=[],o=[],l=[];n.Tu.isEmpty()||(n.Tu.forEach((c,h)=>{l.push(n.pu(h,t,e).then(f=>{var _;if((f||e)&&n.isPrimaryClient){const S=f?!f.fromCache:(_=e==null?void 0:e.targetChanges.get(h.targetId))==null?void 0:_.current;n.sharedClientState.updateQueryState(h.targetId,S?"current":"not-current")}if(f){i.push(f);const S=_i.As(h.targetId,f);o.push(S)}}))}),await Promise.all(l),n.Pu.H_(i),await async function(h,f){const _=Q(h);try{await _.persistence.runTransaction("notifyLocalViewChanges","readwrite",S=>b.forEach(f,w=>b.forEach(w.Es,P=>_.persistence.referenceDelegate.addReference(S,w.targetId,P)).next(()=>b.forEach(w.ds,P=>_.persistence.referenceDelegate.removeReference(S,w.targetId,P)))))}catch(S){if(!on(S))throw S;M(vi,"Failed to update sequence numbers: "+S)}for(const S of f){const w=S.targetId;if(!S.fromCache){const P=_.Ms.get(w),k=P.snapshotVersion,B=P.withLastLimboFreeSnapshotVersion(k);_.Ms=_.Ms.insert(w,B)}}}(n.localStore,o))}async function Zf(r,t){const e=Q(r);if(!e.currentUser.isEqual(t)){M(Ri,"User change. New user:",t.toKey());const n=await ql(e.localStore,t);e.currentUser=t,function(o,l){o.mu.forEach(c=>{c.forEach(h=>{h.reject(new L(C.CANCELLED,l))})}),o.mu.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,n.removedBatchIds,n.addedBatchIds),await ru(e,n.Ls)}}function tp(r,t){const e=Q(r),n=e.Au.get(t);if(n&&n.hu)return W().add(n.key);{let i=W();const o=e.Iu.get(t);if(!o)return i;for(const l of o){const c=e.Tu.get(l);i=i.unionWith(c.view.nu)}return i}}function su(r){const t=Q(r);return t.remoteStore.remoteSyncer.applyRemoteEvent=eu.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=tp.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Xf.bind(null,t),t.Pu.H_=Bf.bind(null,t.eventManager),t.Pu.yu=jf.bind(null,t.eventManager),t}class Hr{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=ns(t.databaseInfo.databaseId),this.sharedClientState=this.Du(t),this.persistence=this.Cu(t),await this.persistence.start(),this.localStore=this.vu(t),this.gcScheduler=this.Fu(t,this.localStore),this.indexBackfillerScheduler=this.Mu(t,this.localStore)}Fu(t,e){return null}Mu(t,e){return null}vu(t){return gf(this.persistence,new ff,t.initialUser,this.serializer)}Cu(t){return new jl(yi.mi,this.serializer)}Du(t){return new Tf}async terminate(){var t,e;(t=this.gcScheduler)==null||t.stop(),(e=this.indexBackfillerScheduler)==null||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Hr.provider={build:()=>new Hr};class ep extends Hr{constructor(t){super(),this.cacheSizeBytes=t}Fu(t,e){nt(this.persistence.referenceDelegate instanceof zr,46915);const n=this.persistence.referenceDelegate.garbageCollector;return new Xd(n,t.asyncQueue,e)}Cu(t){const e=this.cacheSizeBytes!==void 0?Vt.withCacheSize(this.cacheSizeBytes):Vt.DEFAULT;return new jl(n=>zr.mi(n,e),this.serializer)}}class ti{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>Sa(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=Zf.bind(null,this.syncEngine),await xf(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new Uf}()}createDatastore(t){const e=ns(t.databaseInfo.databaseId),n=function(o){return new Rf(o)}(t.databaseInfo);return function(o,l,c,h){return new Vf(o,l,c,h)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return function(n,i,o,l,c){return new Nf(n,i,o,l,c)}(this.localStore,this.datastore,t.asyncQueue,e=>Sa(this.syncEngine,e,0),function(){return _a.v()?new _a:new If}())}createSyncEngine(t,e){return function(i,o,l,c,h,f,_){const S=new Hf(i,o,l,c,h,f);return _&&(S.gu=!0),S}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(i){const o=Q(i);M(en,"RemoteStore shutting down."),o.Ea.add(5),await Xn(o),o.Aa.shutdown(),o.Ra.set("Unknown")}(this.remoteStore),(t=this.datastore)==null||t.terminate(),(e=this.eventManager)==null||e.terminate()}}ti.provider={build:()=>new ti};/**
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
 */class iu{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ou(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ou(this.observer.error,t):ne("Uncaught Error in snapshot listener:",t.toString()))}Nu(){this.muted=!0}Ou(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
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
 */const Ee="FirestoreClient";class np{constructor(t,e,n,i,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=i,this.user=St.UNAUTHENTICATED,this.clientId=oi.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(n,async l=>{M(Ee,"Received user=",l.uid),await this.authCredentialListener(l),this.user=l}),this.appCheckCredentials.start(n,l=>(M(Ee,"Received new app check token=",l),this.appCheckCredentialListener(l,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new fe;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=Wl(e,"Failed to shutdown persistence");t.reject(n)}}),t.promise}}async function Ds(r,t){r.asyncQueue.verifyOperationInProgress(),M(Ee,"Initializing OfflineComponentProvider");const e=r.configuration;await t.initialize(e);let n=e.initialUser;r.setCredentialChangeListener(async i=>{n.isEqual(i)||(await ql(t.localStore,i),n=i)}),t.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=t}async function ba(r,t){r.asyncQueue.verifyOperationInProgress();const e=await rp(r);M(Ee,"Initializing OnlineComponentProvider"),await t.initialize(e,r.configuration),r.setCredentialChangeListener(n=>Ta(t.remoteStore,n)),r.setAppCheckTokenChangeListener((n,i)=>Ta(t.remoteStore,i)),r._onlineComponents=t}async function rp(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){M(Ee,"Using user provided OfflineComponentProvider");try{await Ds(r,r._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(i){return i.name==="FirebaseError"?i.code===C.FAILED_PRECONDITION||i.code===C.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(e))throw e;Ye("Error using user provided cache. Falling back to memory cache: "+e),await Ds(r,new Hr)}}else M(Ee,"Using default OfflineComponentProvider"),await Ds(r,new ep(void 0));return r._offlineComponents}async function sp(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(M(Ee,"Using user provided OnlineComponentProvider"),await ba(r,r._uninitializedComponentsProvider._online)):(M(Ee,"Using default OnlineComponentProvider"),await ba(r,new ti))),r._onlineComponents}async function ou(r){const t=await sp(r),e=t.eventManager;return e.onListen=Kf.bind(null,t.syncEngine),e.onUnlisten=$f.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=Qf.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=Yf.bind(null,t.syncEngine),e}function ip(r,t,e={}){const n=new fe;return r.asyncQueue.enqueueAndForget(async()=>function(o,l,c,h,f){const _=new iu({next:w=>{_.Nu(),l.enqueueAndForget(()=>Yl(o,S));const P=w.docs.has(c);!P&&w.fromCache?f.reject(new L(C.UNAVAILABLE,"Failed to get document because the client is offline.")):P&&w.fromCache&&h&&h.source==="server"?f.reject(new L(C.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):f.resolve(w)},error:w=>f.reject(w)}),S=new Xl(hi(c.path),_,{includeMetadataChanges:!0,qa:!0});return $l(o,S)}(await ou(r),r.asyncQueue,t,e,n)),n.promise}function op(r,t,e={}){const n=new fe;return r.asyncQueue.enqueueAndForget(async()=>function(o,l,c,h,f){const _=new iu({next:w=>{_.Nu(),l.enqueueAndForget(()=>Yl(o,S)),w.fromCache&&h.source==="server"?f.reject(new L(C.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):f.resolve(w)},error:w=>f.reject(w)}),S=new Xl(c,_,{includeMetadataChanges:!0,qa:!0});return $l(o,S)}(await ou(r),r.asyncQueue,t,e,n)),n.promise}/**
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
 */function au(r){const t={};return r.timeoutSeconds!==void 0&&(t.timeoutSeconds=r.timeoutSeconds),t}/**
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
 */const Ca=new Map;/**
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
 */const lu="firestore.googleapis.com",Pa=!0;class Va{constructor(t){if(t.host===void 0){if(t.ssl!==void 0)throw new L(C.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=lu,this.ssl=Pa}else this.host=t.host,this.ssl=t.ssl??Pa;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=Bl;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<$d)throw new L(C.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Fh("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=au(t.experimentalLongPollingOptions??{}),function(n){if(n.timeoutSeconds!==void 0){if(isNaN(n.timeoutSeconds))throw new L(C.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (must not be NaN)`);if(n.timeoutSeconds<5)throw new L(C.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (minimum allowed value is 5)`);if(n.timeoutSeconds>30)throw new L(C.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(n,i){return n.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class ss{constructor(t,e,n,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Va({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new L(C.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new L(C.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Va(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Ch;switch(n.type){case"firstParty":return new Nh(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new L(C.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Ca.get(e);n&&(M("ComponentProvider","Removing Datastore"),Ca.delete(e),n.terminate())}(this),Promise.resolve()}}function ap(r,t,e,n={}){var f;r=Gn(r,ss);const i=ri(t),o=r._getSettings(),l={...o,emulatorOptions:r._getEmulatorOptions()},c=`${t}:${e}`;i&&(rc(`https://${c}`),ac("Firestore",!0)),o.host!==lu&&o.host!==c&&Ye("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const h={...o,host:c,ssl:i,emulatorOptions:n};if(!Or(h,l)&&(r._setSettings(h),n.mockUserToken)){let _,S;if(typeof n.mockUserToken=="string")_=n.mockUserToken,S=St.MOCK_USER;else{_=sc(n.mockUserToken,(f=r._app)==null?void 0:f.options.projectId);const w=n.mockUserToken.sub||n.mockUserToken.user_id;if(!w)throw new L(C.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");S=new St(w)}r._authCredentials=new Ph(new tl(_,S))}}/**
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
 */class un{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new un(this.firestore,t,this._query)}}class ft{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new pe(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new ft(this.firestore,t,this._key)}toJSON(){return{type:ft._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,e,n){if(Wn(e,ft._jsonSchema))return new ft(t,n||null,new U(Z.fromString(e.referencePath)))}}ft._jsonSchemaVersion="firestore/documentReference/1.0",ft._jsonSchema={type:ct("string",ft._jsonSchemaVersion),referencePath:ct("string")};class pe extends un{constructor(t,e,n){super(t,e,hi(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new ft(this.firestore,null,new U(t))}withConverter(t){return new pe(this.firestore,t,this._path)}}function Dp(r,t,...e){if(r=Bn(r),el("collection","path",t),r instanceof ss){const n=Z.fromString(t,...e);return qo(n),new pe(r,null,n)}{if(!(r instanceof ft||r instanceof pe))throw new L(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(Z.fromString(t,...e));return qo(n),new pe(r.firestore,null,n)}}function Np(r,t,...e){if(r=Bn(r),arguments.length===1&&(t=oi.newId()),el("doc","path",t),r instanceof ss){const n=Z.fromString(t,...e);return jo(n),new ft(r,null,new U(n))}{if(!(r instanceof ft||r instanceof pe))throw new L(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(Z.fromString(t,...e));return jo(n),new ft(r.firestore,r instanceof pe?r.converter:null,new U(n))}}/**
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
 */const Da="AsyncQueue";class Na{constructor(t=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new zl(this,"async_queue_retry"),this._c=()=>{const n=Vs();n&&M(Da,"Visibility state changed to "+n.visibilityState),this.M_.w_()},this.ac=t;const e=Vs();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.uc(),this.cc(t)}enterRestrictedMode(t){if(!this.ec){this.ec=!0,this.sc=t||!1;const e=Vs();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this._c)}}enqueue(t){if(this.uc(),this.ec)return new Promise(()=>{});const e=new fe;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Xu.push(t),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(t){if(!on(t))throw t;M(Da,"Operation failed with retryable error: "+t)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(t){const e=this.ac.then(()=>(this.rc=!0,t().catch(n=>{throw this.nc=n,this.rc=!1,ne("INTERNAL UNHANDLED ERROR: ",ka(n)),n}).then(n=>(this.rc=!1,n))));return this.ac=e,e}enqueueAfterDelay(t,e,n){this.uc(),this.oc.indexOf(t)>-1&&(e=0);const i=wi.createAndSchedule(this,t,e,n,o=>this.hc(o));return this.tc.push(i),i}uc(){this.nc&&q(47125,{Pc:ka(this.nc)})}verifyOperationInProgress(){}async Tc(){let t;do t=this.ac,await t;while(t!==this.ac)}Ic(t){for(const e of this.tc)if(e.timerId===t)return!0;return!1}Ec(t){return this.Tc().then(()=>{this.tc.sort((e,n)=>e.targetTimeMs-n.targetTimeMs);for(const e of this.tc)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.Tc()})}dc(t){this.oc.push(t)}hc(t){const e=this.tc.indexOf(t);this.tc.splice(e,1)}}function ka(r){let t=r.message||"";return r.stack&&(t=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),t}class Ci extends ss{constructor(t,e,n,i){super(t,e,n,i),this.type="firestore",this._queue=new Na,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Na(t),this._firestoreClient=void 0,await t}}}function lp(r,t){const e=typeof r=="object"?r:yh(),n=typeof r=="string"?r:Fr,i=dh(e,"firestore").getImmediate({identifier:n});if(!i._initialized){const o=ec("firestore");o&&ap(i,...o)}return i}function uu(r){if(r._terminated)throw new L(C.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||up(r),r._firestoreClient}function up(r){var n,i,o;const t=r._freezeSettings(),e=function(c,h,f,_){return new Yh(c,h,f,_.host,_.ssl,_.experimentalForceLongPolling,_.experimentalAutoDetectLongPolling,au(_.experimentalLongPollingOptions),_.useFetchStreams,_.isUsingEmulator)}(r._databaseId,((n=r._app)==null?void 0:n.options.appId)||"",r._persistenceKey,t);r._componentsProvider||(i=t.localCache)!=null&&i._offlineComponentProvider&&((o=t.localCache)!=null&&o._onlineComponentProvider)&&(r._componentsProvider={_offline:t.localCache._offlineComponentProvider,_online:t.localCache._onlineComponentProvider}),r._firestoreClient=new np(r._authCredentials,r._appCheckCredentials,r._queue,e,r._componentsProvider&&function(c){const h=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(h),_online:h}}(r._componentsProvider))}/**
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
 */class Ot{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Ot(Tt.fromBase64String(t))}catch(e){throw new L(C.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Ot(Tt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:Ot._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(Wn(t,Ot._jsonSchema))return Ot.fromBase64String(t.bytes)}}Ot._jsonSchemaVersion="firestore/bytes/1.0",Ot._jsonSchema={type:ct("string",Ot._jsonSchemaVersion),bytes:ct("string")};/**
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
 */class cu{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new L(C.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new bt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class hu{constructor(t){this._methodName=t}}/**
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
 */class Kt{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new L(C.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new L(C.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return z(this._lat,t._lat)||z(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Kt._jsonSchemaVersion}}static fromJSON(t){if(Wn(t,Kt._jsonSchema))return new Kt(t.latitude,t.longitude)}}Kt._jsonSchemaVersion="firestore/geoPoint/1.0",Kt._jsonSchema={type:ct("string",Kt._jsonSchemaVersion),latitude:ct("number"),longitude:ct("number")};/**
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
 */class Qt{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(n,i){if(n.length!==i.length)return!1;for(let o=0;o<n.length;++o)if(n[o]!==i[o])return!1;return!0}(this._values,t._values)}toJSON(){return{type:Qt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(Wn(t,Qt._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every(e=>typeof e=="number"))return new Qt(t.vectorValues);throw new L(C.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Qt._jsonSchemaVersion="firestore/vectorValue/1.0",Qt._jsonSchema={type:ct("string",Qt._jsonSchemaVersion),vectorValues:ct("object")};/**
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
 */const cp=/^__.*__$/;function du(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw q(40011,{Ac:r})}}class Pi{constructor(t,e,n,i,o,l){this.settings=t,this.databaseId=e,this.serializer=n,this.ignoreUndefinedProperties=i,o===void 0&&this.Rc(),this.fieldTransforms=o||[],this.fieldMask=l||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(t){return new Pi({...this.settings,...t},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(t){var i;const e=(i=this.path)==null?void 0:i.child(t),n=this.Vc({path:e,fc:!1});return n.gc(t),n}yc(t){var i;const e=(i=this.path)==null?void 0:i.child(t),n=this.Vc({path:e,fc:!1});return n.Rc(),n}wc(t){return this.Vc({path:void 0,fc:!0})}Sc(t){return ei(t,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}Rc(){if(this.path)for(let t=0;t<this.path.length;t++)this.gc(this.path.get(t))}gc(t){if(t.length===0)throw this.Sc("Document fields must not be empty");if(du(this.Ac)&&cp.test(t))throw this.Sc('Document fields cannot begin and end with "__"')}}class hp{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=n||ns(t)}Cc(t,e,n,i=!1){return new Pi({Ac:t,methodName:e,Dc:n,path:bt.emptyPath(),fc:!1,bc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function dp(r){const t=r._freezeSettings(),e=ns(r._databaseId);return new hp(r._databaseId,!!t.ignoreUndefinedProperties,e)}function fp(r,t,e,n=!1){return Vi(e,r.Cc(n?4:3,t))}function Vi(r,t){if(fu(r=Bn(r)))return mp("Unsupported field value:",t,r),pp(r,t);if(r instanceof hu)return function(n,i){if(!du(i.Ac))throw i.Sc(`${n._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Sc(`${n._methodName}() is not currently supported inside arrays`);const o=n._toFieldTransform(i);o&&i.fieldTransforms.push(o)}(r,t),null;if(r===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),r instanceof Array){if(t.settings.fc&&t.Ac!==4)throw t.Sc("Nested arrays are not supported");return function(n,i){const o=[];let l=0;for(const c of n){let h=Vi(c,i.wc(l));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),l++}return{arrayValue:{values:o}}}(r,t)}return function(n,i){if((n=Bn(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return vd(i.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const o=et.fromDate(n);return{timestampValue:Ws(i.serializer,o)}}if(n instanceof et){const o=new et(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Ws(i.serializer,o)}}if(n instanceof Kt)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Ot)return{bytesValue:Nl(i.serializer,n._byteString)};if(n instanceof ft){const o=i.databaseId,l=n.firestore._databaseId;if(!l.isEqual(o))throw i.Sc(`Document reference is for database ${l.projectId}/${l.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:kl(n.firestore._databaseId||i.databaseId,n._key.path)}}if(n instanceof Qt)return function(l,c){return{mapValue:{fields:{[cl]:{stringValue:hl},[Ur]:{arrayValue:{values:l.toArray().map(f=>{if(typeof f!="number")throw c.Sc("VectorValues must only contain numeric values.");return di(c.serializer,f)})}}}}}}(n,i);throw i.Sc(`Unsupported field value: ${Kr(n)}`)}(r,t)}function pp(r,t){const e={};return sl(r)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):an(r,(n,i)=>{const o=Vi(i,t.mc(n));o!=null&&(e[n]=o)}),{mapValue:{fields:e}}}function fu(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof et||r instanceof Kt||r instanceof Ot||r instanceof ft||r instanceof hu||r instanceof Qt)}function mp(r,t,e){if(!fu(e)||!nl(e)){const n=Kr(e);throw n==="an object"?t.Sc(r+" a custom object"):t.Sc(r+" "+n)}}const gp=new RegExp("[~\\*/\\[\\]]");function yp(r,t,e){if(t.search(gp)>=0)throw ei(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,e);try{return new cu(...t.split("."))._internalPath}catch{throw ei(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,e)}}function ei(r,t,e,n,i){const o=n&&!n.isEmpty(),l=i!==void 0;let c=`Function ${t}() called with invalid data`;e&&(c+=" (via `toFirestore()`)"),c+=". ";let h="";return(o||l)&&(h+=" (found",o&&(h+=` in field ${n}`),l&&(h+=` in document ${i}`),h+=")"),new L(C.INVALID_ARGUMENT,c+r+h)}/**
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
 */class pu{constructor(t,e,n,i,o){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new ft(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new _p(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Di("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class _p extends pu{data(){return super.data()}}function Di(r,t){return typeof t=="string"?yp(r,t):t instanceof cu?t._internalPath:t._delegate._internalPath}/**
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
 */function vp(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new L(C.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ni{}class Ep extends Ni{}function kp(r,t,...e){let n=[];t instanceof Ni&&n.push(t),n=n.concat(e),function(o){const l=o.filter(h=>h instanceof ki).length,c=o.filter(h=>h instanceof is).length;if(l>1||l>0&&c>0)throw new L(C.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(n);for(const i of n)r=i._apply(r);return r}class is extends Ep{constructor(t,e,n){super(),this._field=t,this._op=e,this._value=n,this.type="where"}static _create(t,e,n){return new is(t,e,n)}_apply(t){const e=this._parse(t);return mu(t._query,e),new un(t.firestore,t.converter,Gs(t._query,e))}_parse(t){const e=dp(t.firestore);return function(o,l,c,h,f,_,S){let w;if(f.isKeyField()){if(_==="array-contains"||_==="array-contains-any")throw new L(C.INVALID_ARGUMENT,`Invalid Query. You can't perform '${_}' queries on documentId().`);if(_==="in"||_==="not-in"){La(S,_);const k=[];for(const B of S)k.push(Oa(h,o,B));w={arrayValue:{values:k}}}else w=Oa(h,o,S)}else _!=="in"&&_!=="not-in"&&_!=="array-contains-any"||La(S,_),w=fp(c,l,S,_==="in"||_==="not-in");return ut.create(f,_,w)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}function Op(r,t,e){const n=t,i=Di("where",r);return is._create(i,n,e)}class ki extends Ni{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new ki(t,e)}_parse(t){const e=this._queryConstraints.map(n=>n._parse(t)).filter(n=>n.getFilters().length>0);return e.length===1?e[0]:Ft.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:(function(i,o){let l=i;const c=o.getFlattenedFilters();for(const h of c)mu(l,h),l=Gs(l,h)}(t._query,e),new un(t.firestore,t.converter,Gs(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Oa(r,t,e){if(typeof(e=Bn(e))=="string"){if(e==="")throw new L(C.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!_l(t)&&e.indexOf("/")!==-1)throw new L(C.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const n=t.path.child(Z.fromString(e));if(!U.isDocumentKey(n))throw new L(C.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${n}' is not because it has an odd number of segments (${n.length}).`);return Yo(r,new U(n))}if(e instanceof ft)return Yo(r,e._key);throw new L(C.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Kr(e)}.`)}function La(r,t){if(!Array.isArray(r)||r.length===0)throw new L(C.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function mu(r,t){const e=function(i,o){for(const l of i)for(const c of l.getFlattenedFilters())if(o.indexOf(c.op)>=0)return c.op;return null}(r.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(e!==null)throw e===t.op?new L(C.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new L(C.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}class Tp{convertValue(t,e="none"){switch(_e(t)){case 0:return null;case 1:return t.booleanValue;case 2:return ot(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(ye(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw q(62114,{value:t})}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const n={};return an(t,(i,o)=>{n[i]=this.convertValue(o,e)}),n}convertVectorValue(t){var n,i,o;const e=(o=(i=(n=t.fields)==null?void 0:n[Ur].arrayValue)==null?void 0:i.values)==null?void 0:o.map(l=>ot(l.doubleValue));return new Qt(e)}convertGeoPoint(t){return new Kt(ot(t.latitude),ot(t.longitude))}convertArray(t,e){return(t.values||[]).map(n=>this.convertValue(n,e))}convertServerTimestamp(t,e){switch(e){case"previous":const n=Yr(t);return n==null?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(Hn(t));default:return null}}convertTimestamp(t){const e=ge(t);return new et(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=Z.fromString(t);nt(Ul(n),9688,{name:t});const i=new Kn(n.get(1),n.get(3)),o=new U(n.popFirst(5));return i.isEqual(e)||ne(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}class On{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Pe extends pu{constructor(t,e,n,i,o,l){super(t,e,n,i,l),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Dr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(Di("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new L(C.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,e={};return e.type=Pe._jsonSchemaVersion,e.bundle="",e.bundleSource="DocumentSnapshot",e.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?e:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),e.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),e)}}Pe._jsonSchemaVersion="firestore/documentSnapshot/1.0",Pe._jsonSchema={type:ct("string",Pe._jsonSchemaVersion),bundleSource:ct("string","DocumentSnapshot"),bundleName:ct("string"),bundle:ct("string")};class Dr extends Pe{data(t={}){return super.data(t)}}class $e{constructor(t,e,n,i){this._firestore=t,this._userDataWriter=e,this._snapshot=i,this.metadata=new On(i.hasPendingWrites,i.fromCache),this.query=n}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(n=>{t.call(e,new Dr(this._firestore,this._userDataWriter,n.key,n,new On(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new L(C.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(i,o){if(i._snapshot.oldDocs.isEmpty()){let l=0;return i._snapshot.docChanges.map(c=>{const h=new Dr(i._firestore,i._userDataWriter,c.doc.key,c.doc,new On(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);return c.doc,{type:"added",doc:h,oldIndex:-1,newIndex:l++}})}{let l=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(c=>o||c.type!==3).map(c=>{const h=new Dr(i._firestore,i._userDataWriter,c.doc.key,c.doc,new On(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);let f=-1,_=-1;return c.type!==0&&(f=l.indexOf(c.doc.key),l=l.delete(c.doc.key)),c.type!==1&&(l=l.add(c.doc),_=l.indexOf(c.doc.key)),{type:Ip(c.type),doc:h,oldIndex:f,newIndex:_}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new L(C.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=$e._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=oi.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const e=[],n=[],i=[];return this.docs.forEach(o=>{o._document!==null&&(e.push(o._document),n.push(this._userDataWriter.convertObjectMap(o._document.data.value.mapValue.fields,"previous")),i.push(o.ref.path))}),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function Ip(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return q(61501,{type:r})}}/**
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
 */function Lp(r){r=Gn(r,ft);const t=Gn(r.firestore,Ci);return ip(uu(t),r._key).then(e=>Ap(t,r,e))}$e._jsonSchemaVersion="firestore/querySnapshot/1.0",$e._jsonSchema={type:ct("string",$e._jsonSchemaVersion),bundleSource:ct("string","QuerySnapshot"),bundleName:ct("string"),bundle:ct("string")};class gu extends Tp{constructor(t){super(),this.firestore=t}convertBytes(t){return new Ot(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new ft(this.firestore,null,e)}}function Mp(r){r=Gn(r,un);const t=Gn(r.firestore,Ci),e=uu(t),n=new gu(t);return vp(r._query),op(e,r._query).then(i=>new $e(t,n,r,i))}function Ap(r,t,e){const n=e.docs.get(t._key),i=new gu(r);return new Pe(r,i,t._key,n,new On(e.hasPendingWrites,e.fromCache),t.converter)}(function(t,e=!0){(function(i){sn=i})(gh),Mr(new jn("firestore",(n,{instanceIdentifier:i,options:o})=>{const l=n.getProvider("app").getImmediate(),c=new Ci(new Vh(n.getProvider("auth-internal")),new kh(l,n.getProvider("app-check-internal")),function(f,_){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new L(C.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Kn(f.options.projectId,_)}(l,i),l);return o={useFetchStreams:e,...o},c._setSettings(o),c},"PUBLIC").setMultipleInstances(!0)),Ke(xo,Fo,t),Ke(xo,Fo,"esm2020")})();var wp="firebase",Sp="12.1.0";/**
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
 */Ke(wp,Sp,"app");const Rp={apiKey:"AIzaSyDOWFazlwHsZjgXU5a-7EuHuSOO3o_U2Gg",authDomain:"vet-cat.firebaseapp.com",projectId:"vet-cat",storageBucket:"vet-cat.firebasestorage.app",messagingSenderId:"1058557590103",appId:"1:1058557590103:web:0918d3d62a4451a0568112"},bp=za(Rp),xp=lp(bp);export{Mp as a,Ma as b,Dp as c,xp as d,yt as e,Np as f,qt as g,Lp as h,Pp as i,kp as q,Cp as r,Op as w};
