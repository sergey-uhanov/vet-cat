import{g as s,a as m,c as g,d as w,i as _}from"./firebase--kS5HU57.js";import{S as v,t as p,e as u}from"./experts-slider-inner-DzsmCs33.js";function f(){const e=s(".first-screen__background"),t=s(".first-screen");t.style.height=getComputedStyle(e).height,window.addEventListener("resize",()=>{t.style.height=getComputedStyle(e).height})}async function y(){return(await m(g(w,"cards-services"))).docs.map(t=>({id:t.id,...t.data()}))}function b(e){const t=s(".service-slider"),r=s(".swiper-wrapper",t);e.forEach(i=>{const a=`
                             <div class=" triple-slider__slide simple-card swiper-slide">
                                <div class="simple-card__title">${i.title}</div>
                                <div class="simple-card__text">${i.text}
                                </div>
                                <a class="simple-card__link" href="${i.link}"> Подробнее 
                                    <svg width="19" height="10" viewBox="0 0 19 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M-1.74845e-07 5L17 5M17 5C15.3146 3.85714 12.7865 1 12.7865 1M17 5C15.3146 6.14286 12.7865 9 12.7865 9" stroke="white" stroke-width="2" />
                                    </svg>
                                </a>
                            </div>`;r.insertAdjacentHTML("beforeend",a)})}async function S(){try{const e=await y();b(e)}catch(e){console.error(e)}}function k(e,t,r){new v(`.${e}`,{slidesPerView:4,spaceBetween:40,loop:!0,navigation:{nextEl:`.${t}`,prevEl:`.${r}`},breakpoints:{320:{slidesPerView:"auto",spaceBetween:20},1100:{slidesPerView:4,spaceBetween:40}}})}function L(e){return` <a class="swiper-slide small-img-card" href="#">
                    <div class="small-img-card__img-wrapper">
                        <picture>
                            <source srcset="/vet-cat/img/home/${e.linkWebp}" type="image/webp">
                            <img class="small-img-card__img" src="/vet-cat/img/home/${e.linkPng}" alt="photo animals"
                                 width="248" height="248">
                        </picture>
                    </div>
                    <div class="small-img-card__title">${e.title}</div>

                    <div class="small-img-card__date">${e.date}</div>
                </a>`}async function x(){const e=s(".swiper-wrapper",s(".stories-slider"));try{(await m(g(w,"cards-stories"))).docs.map(i=>({id:i.id,...i.data()})).forEach(i=>{e.insertAdjacentHTML("beforeend",L(i))})}catch(t){console.error(t)}}let n;async function C(){const e={lat:50.4194,lng:30.4809},t={lat:50.444,lng:30.619},{Map:r}=await google.maps.importLibrary("maps"),{AdvancedMarkerElement:i}=await google.maps.importLibrary("marker"),{InfoWindow:a}=await google.maps.importLibrary("maps"),c=document.createElement("img");c.src=new URL("/vet-cat/img/home/1.png",import.meta.url).href;const l=document.createElement("img");l.src=new URL("/vet-cat/img/home/2.png",import.meta.url).href,n=new r(document.getElementById("map"),{zoom:11,center:e,mapId:"DEMO_MAP_ID"});const o=new i({map:n,position:e,title:"Первая точка",content:c}),h=new i({map:n,position:t,title:"Вторая точка",content:l}),d=new a({content:`<div class="info-window">
<span>Дополнительная важная информация!</span>
<strong>Кто грустит тот трансвистит</strong>
</div>`});o.addListener("click",()=>{d.open({anchor:o,map:n})}),h.addListener("click",()=>{d.open({anchor:o,map:n})})}document.addEventListener("DOMContentLoaded",async e=>{_(),f(),p("triple-slider_services","triple-slider__button-next-icon_service","triple-slider__button-prev-icon_service"),p("triple-slider_experts","triple-slider__button-next-icon_experts","triple-slider__button-prev-icon_experts"),k("triple-slider_stories","triple-slider__button-next-icon_stories","triple-slider__button-prev-icon_stories"),await S(),await u(),await x(),await C()});
