import {getElement} from "@/js/composables/dom-manipulator.js";

export function slider() {
    const wrapper = getElement('.slider__wrapper')
    const slide = getElement('.slider__item')
    const nextButton = getElement('.slider__next')
    const prevButton = getElement('.slider__prev')
    const gap = 56
    let activePosition = 0


    nextButton.addEventListener('click', () => {
        const width = slide.clientWidth
        if ((activePosition - width + gap) < 0) return
        activePosition -= width + gap
        wrapper.style.transform = `translateX(${activePosition}px)`


    })

    prevButton.addEventListener('click', () => {
        const width = slide.clientWidth
        if ((activePosition + width + gap) > wrapper.clientWidth ) return

        activePosition += width + gap
        wrapper.style.transform = `translateX(${activePosition}px)`

    })

}