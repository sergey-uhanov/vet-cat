import {toggleListSidebar} from "@/js/base/toggle-lists-sidebar.js";
import {toggleBurgerMenu} from "@/js/base/toggle-sidebar.js";
import {showMobileSearch} from "@/js/base/show-mobile-search.js";

export function initHeader() {
    toggleListSidebar()
    toggleBurgerMenu()
    showMobileSearch()
}