import { classManipulator, getElement, getElements } from '@/js/composables/dom-manipulator.js'
import { disablePageScroll, enablePageScroll } from 'scroll-lock'

export function toggleBurgerMenu() {
  const burgerBtn = getElement('.burger-icon')
  const burgerMenu = getElement('.sidebar')
  const backdrop = getElement('.dark-background')
  const lists = getElements('.sidebar-sub-list')

  function toggle(isOpen) {
    if (isOpen) {
      classManipulator(burgerMenu, 'add', 'sidebar_open')
      classManipulator(backdrop, 'remove', 'dark-background_hidden')
      disablePageScroll(burgerMenu)
      return
    }

    classManipulator(burgerMenu, 'remove', 'sidebar_open')
    classManipulator(backdrop, 'add', 'dark-background_hidden')
    enablePageScroll()
  }

  backdrop.addEventListener('click', () => {
    toggle(false)
    classManipulator(burgerBtn, 'remove', 'burger-icon_open')
    lists.forEach(list => {
      classManipulator(list, 'remove', 'sidebar-sub-list_active')
    })
  })

  const handleClick = () => {
    burgerBtn.style.pointerEvents = 'none'
    lists.forEach(list => {
      classManipulator(list, 'remove', 'sidebar-sub-list_active')
    })
    const isOpen = classManipulator(burgerBtn, 'toggle', 'burger-icon_open')

    toggle(isOpen)
    setTimeout(() => {
      burgerBtn.style.pointerEvents = 'auto'
    }, 300)
  }

  burgerBtn.addEventListener('click', handleClick)
}
