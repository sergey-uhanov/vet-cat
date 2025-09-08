import {renderSmallImgCard} from "@/js/ui/render-small-img-card.js";
import {classManipulator, getElement, getElements} from "@/js/composables/dom-manipulator.js";
import {cardsRequest} from "@/js/partials/stories/cards-request.js";
import {useQuery} from "@/js/composables/use-query.js";

export async function innerCards(data) {
    const wrapper = getElement('.tubs__cards')


    wrapper.innerHTML = '';
    data.forEach(item => {
        wrapper.insertAdjacentHTML('beforeend', renderSmallImgCard(item));
    })
}