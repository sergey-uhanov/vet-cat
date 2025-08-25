import {priceRequest} from "@/js/partials/price/price-request.js";
import {createPriceList} from "@/js/partials/price/render-price-list.js";
import {getElement} from "@/js/composables/dom-manipulator.js";

export async function innerPrice() {
    const data = await priceRequest()
    const container = getElement('.tubs__lists-wrapper')
    container.append(createPriceList(data))

}