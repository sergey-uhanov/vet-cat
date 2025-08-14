import {initHeader} from "@/js/base/header.js";
import {heightFirstSection} from "@/js/partials/home/height-first-section.js";
import {tripleSlider} from "@/js/widgets/triple-slider.js";

document.addEventListener('DOMContentLoaded', e => {
    initHeader()
    heightFirstSection()
    tripleSlider('triple-slider')
})