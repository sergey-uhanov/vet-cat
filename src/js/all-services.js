import {initHeader} from "@/js/base/header.js";
import {renderList} from "@/js/partials/all-services/render-list.js";
import {toggleTab} from "@/js/partials/all-services/toggle-tab.js";


document.addEventListener('DOMContentLoaded', async e => {
    initHeader()
    await toggleTab()
})