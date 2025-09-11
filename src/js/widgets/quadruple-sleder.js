import Swiper from 'swiper/bundle'
import '@/styles/modules/swiper.css'

export function quadrupleSlider(target, next, prev, space = 40) {
  new Swiper(`.${target}`, {
    slidesPerView: 4,
    // spaceBetween: 40,
    loop: true,
    navigation: {
      nextEl: `.${next}`,
      prevEl: `.${prev}`,
    },
    breakpoints: {
      320: {
        slidesPerView: 'auto',
        spaceBetween: 20,
      },
      1100: {
        slidesPerView: 4,
        spaceBetween: space,
      },
    },
  })
}
