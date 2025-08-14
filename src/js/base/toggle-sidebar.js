import {classManipulator, getElement} from "@/js/composables/dom-manipulator.js";
import { disablePageScroll, enablePageScroll } from 'scroll-lock'

export function toggleBurgerMenu() {
    const burgerBtn = getElement('.burger-icon')
    const burgerMenu = getElement('.sidebar')

    function toggle(isOpen) {
        if (isOpen) {
            classManipulator(burgerMenu, 'add', 'sidebar_open')
            disablePageScroll(burgerMenu)
            return
        }


        classManipulator(burgerMenu, 'remove', 'sidebar_open')

        enablePageScroll()
    }

    const handleClick = () => {
        burgerBtn.style.pointerEvents = 'none'
        const isOpen = classManipulator(burgerBtn, 'toggle', 'burger-icon_open')
        toggle(isOpen)
        setTimeout(() => {
            burgerBtn.style.pointerEvents = 'auto'
        }, 300)
    }


    burgerBtn.addEventListener('click', handleClick)
}