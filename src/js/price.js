import {initHeader} from "@/js/base/header.js";
import {innerPrice} from "@/js/partials/price/inner-price.js";


document.addEventListener('DOMContentLoaded', async e => {
    initHeader()
     await innerPrice()
})