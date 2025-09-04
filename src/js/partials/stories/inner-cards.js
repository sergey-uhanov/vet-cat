import {renderSmallImgCard} from "@/js/ui/render-small-img-card.js";
import {getElement} from "@/js/composables/dom-manipulator.js";
import {cardsRequest} from "@/js/partials/stories/cards-request.js";

export async function innerCards(){
    const wrapper = getElement('.tubs__cards')


    const data = await cardsRequest()
    console.log(data)
    data.forEach(item => {
        wrapper.insertAdjacentHTML('beforeend', renderSmallImgCard(item));
    })
}