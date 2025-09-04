import {initHeader} from "@/js/base/header.js";
import {selectionButtonGroup} from "@/js/ui/selection-button-group.js";
import {innerCards} from "@/js/partials/stories/inner-cards.js";

document.addEventListener('DOMContentLoaded', async e => {
    initHeader()
    selectionButtonGroup('.tubs__buttons')
    await innerCards()
})