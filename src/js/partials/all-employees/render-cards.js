import {renderImgCart} from "@/js/ui/render-img-cards.js";
import {getElement} from "@/js/composables/dom-manipulator.js";

export function renderCards(data) {

    const wrapper = getElement('.employees-tubs__cards')
    wrapper.innerHTML = '';

    data.forEach(item => {
        wrapper.insertAdjacentHTML('beforeend', renderImgCart(item))
    })
}