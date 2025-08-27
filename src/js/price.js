import {initHeader} from "@/js/base/header.js";
import {innerPrice} from "@/js/partials/price/inner-price.js";
import {toggleButton} from "@/js/partials/price/toggle-button-service.js";
import {search} from "@/js/partials/price/search.js";



document.addEventListener('DOMContentLoaded', async e => {
    initHeader()
    await innerPrice()
    await toggleButton()
    await search()
})