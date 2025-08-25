import {expertsSliderInner} from "@/js/partials/home/experts-slider-inner.js";
import {getElement, getElements} from "@/js/composables/dom-manipulator.js";

export async function toggleTubs() {
    const buttons = getElements('.button-group__button');
    let activeButton = getElement('.button-group__button_active')

    await expertsSliderInner(activeButton.getAttribute('data-attribute'))

    buttons.forEach(button => {
        button.addEventListener('click', async () => {
            await expertsSliderInner(button.getAttribute('data-attribute'))
        })
    })


}