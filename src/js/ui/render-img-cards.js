export function renderImgCart(data) {
  const base = process.env.NODE_ENV === 'production' ? '/vet-cat/' : '/'
  const origin = window.location.origin
  return ` <a class="swiper-slide img-card" href="${origin}${base}pages/expert.html">
                    <div class="img-card__img-wrapper">
                        <picture>
                            <source srcset="${base}img/home/${data.imgLinkWebp}" type="image/webp">
                            <img class="img-card__img" src="${base}img/home/${data.imgLinkPng}" width="344" height="400"
                                 alt="expert photo" loading="lazy">
                        </picture>
                        <div class="img-card__hover-information">
                            <div class="img-card__hover-text">Ближайшие
                                приемы
                            </div>
                            <div class="img-card__date">${data.nextDate[0].date} <br> ${data.nextDate[1].time}</div>

                            <div class="img-card__date">${data.nextDate[1].date} <br> ${data.nextDate[1].time}</div>
                        </div>
                    </div>
                    <div class="img-card__full-name">${data.lastName} <br> ${data.firstName} ${data.patronymic}</div>
                    <div class="img-card__position">${data.position}</div>
                </a>`
}
