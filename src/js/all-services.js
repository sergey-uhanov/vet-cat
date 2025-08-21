import {initHeader} from "@/js/base/header.js";
import {renderList} from "@/js/partials/all-services/render-list.js";


document.addEventListener('DOMContentLoaded', async e => {
    initHeader()
    await renderList()
})