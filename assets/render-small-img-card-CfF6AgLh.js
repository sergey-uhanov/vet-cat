function s(i){const e="/vet-cat/";return` <a class="swiper-slide small-img-card" href="#">
                    <div class="small-img-card__img-wrapper">
                        <picture>
                            <source srcset="${e}img/home/${i.linkWebp}" type="image/webp">
                            <img class="small-img-card__img" src="${e}img/home/${i.linkPng}" alt="photo animals"
                                 width="248" height="248">
                        </picture>
                    </div>
                    <div class="small-img-card__title">${i.title}</div>

                    <div class="small-img-card__date">${i.date}</div>
                </a>`}export{s as r};
