import Swiper from 'swiper/bundle'
import '@/styles/modules/swiper.css'

export function tripleSlider(target, next, prev) {
  new Swiper(`.${target}`, {
    slidesPerView: 3,
    spaceBetween: 40,
    loop: true,
    navigation: {
      nextEl: `.${next}`,
      prevEl: `.${prev}`,
    },
    breakpoints: {
      320: {
        slidesPerView: 'auto',
        spaceBetween: 10,
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      769: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
    },
  })
}
