export function renderSmallImgCard(data) {

    return ` <div class="swiper-slide small-img-card">
                    <div class="small-img-card__img-wrapper">
                        <picture>
                            <source srcset="/img/home/${data.linkWebp}" type="image/webp">
                            <img class="small-img-card__img" src="/img/home/${data.linkPng}" alt="photo animals"
                                 width="248" height="248">
                        </picture>
                    </div>
                    <div class="small-img-card__title">${data.title}</div>

                    <div class="small-img-card__date">${data.date}</div>
                </div>`
}