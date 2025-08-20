import{g as i,a as n,c,d as r,i as o}from"./firebase-BJIARRy4.js";async function l(){const t=i(".list-services__list");try{(await n(c(r,"all-services"))).docs.map(e=>({id:e.id,...e.data()})).forEach(e=>{const a=`<li class="list-services__item">
            <a class="list-services__link" href="${e.link}">${e.title}</a>
        </li>`;t.insertAdjacentHTML("beforeend",a)})}catch(s){console.error(s)}}document.addEventListener("DOMContentLoaded",async t=>{o(),await l()});
