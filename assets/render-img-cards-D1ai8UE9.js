function r(i){const e="/vet-cat/";return` <a class="swiper-slide img-card" href="#">
                    <div class="img-card__img-wrapper">
                        <picture>
                            <source srcset="${e}img/home/${i.imgLinkWebp}" type="image/webp">
                            <img class="img-card__img" src="${e}img/home/${i.imgLinkPng}" width="344" height="400"
                                 alt="expert photo" loading="lazy">
                        </picture>
                        <div class="img-card__hover-information">
                            <div class="img-card__hover-text">Ближайшие
                                приемы
                            </div>
                            <div class="img-card__date">${i.nextDate[0].date} <br> ${i.nextDate[1].time}</div>

                            <div class="img-card__date">${i.nextDate[1].date} <br> ${i.nextDate[1].time}</div>
                        </div>
                    </div>
                    <div class="img-card__full-name">${i.lastName} <br> ${i.firstName} ${i.patronymic}</div>
                    <div class="img-card__position">${i.position}</div>
                </a>`}export{r};
