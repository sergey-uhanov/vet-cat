import Swiper from "swiper";
import {getElement} from "@/js/composables/dom-manipulator.js";
import {Navigation} from 'swiper/modules';

export function initSlider(target) {
    const slider = getElement('.item-service__slider', target);
    const prev = getElement('.item-service__button-prev', target)
    const next = getElement('.item-service__button-next', target)

    new Swiper(slider, {
        modules: [Navigation],
        slidesPerView: 7,
        spaceBetween: 16,
        slidesPerGroup: 7,
        navigation: {
            nextEl: next,
            prevEl: prev,
        },
        breakpoints: {
            320: {
                slidesPerView: 2,
                slidesPerGroup: 2,
            },
            415: {
                slidesPerView: 3,
                slidesPerGroup: 3,
            },
            562: {
                slidesPerView: 4,
                slidesPerGroup: 4,
            },
            628: {
                slidesPerView: 5,
                slidesPerGroup: 5,
            },
            889: {
                slidesPerView: 6,
                slidesPerGroup: 6,
                spaceBetween: 0,
            },
            1024: {
                slidesPerView: 7,
                slidesPerGroup: 7,
            },
        }
    });
}