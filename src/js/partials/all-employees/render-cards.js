import {renderImgCart} from "@/js/ui/render-img-cards.js";
import {getElement} from "@/js/composables/dom-manipulator.js";

export function renderCards(data) {

    const wrapper = getElement('.employees-tubs__cards')

    if(!data.length){
        wrapper.innerHTML= '<div class="employees-tubs__empty-cards">Нечего не найденно!</div>'
        return
    }

    wrapper.innerHTML = '';

    data.forEach(item => {
        wrapper.insertAdjacentHTML('beforeend', renderImgCart(item))
    })
}