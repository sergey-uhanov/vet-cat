export function renderSmallImgCard(data) {
    const base = process.env.NODE_ENV === 'production' ? '/vet-cat/' : '/'

    return ` <a class="swiper-slide small-img-card" href="#">
                    <div class="small-img-card__img-wrapper">
                        <picture>
                            <source srcset="${base}img/home/${data.linkWebp}" type="image/webp">
                            <img class="small-img-card__img" src="${base}img/home/${data.linkPng}" alt="photo animals"
                                 width="248" height="248">
                        </picture>
                    </div>
                    <div class="small-img-card__title">${data.title}</div>

                    <div class="small-img-card__date">${data.date}</div>
                </a>`
}