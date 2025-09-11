import { getElement } from '@/js/composables/dom-manipulator.js'

export function renderServiceCards(data) {
  const sliderContainer = getElement('.service-slider')
  const wrapper = getElement('.swiper-wrapper', sliderContainer)

  data.forEach(element => {
    const card = `
                             <div class=" triple-slider__slide simple-card swiper-slide">
                                <div class="simple-card__title">${element.title}</div>
                                <div class="simple-card__text">${element.text}
                                </div>
                                <a class="simple-card__link" href="${element.link}"> Подробнее 
                                    <svg width="19" height="10" viewBox="0 0 19 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M-1.74845e-07 5L17 5M17 5C15.3146 3.85714 12.7865 1 12.7865 1M17 5C15.3146 6.14286 12.7865 9 12.7865 9" stroke="white" stroke-width="2" />
                                    </svg>
                                </a>
                            </div>`

    wrapper.insertAdjacentHTML('beforeend', card)
  })
}
