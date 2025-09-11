import { classManipulator, getElement } from '@/js/composables/dom-manipulator.js'
import { disablePageScroll, enablePageScroll } from 'scroll-lock'

export function showMobileSearch() {
  const searchIcon = getElement('.header__icon-search-icon')
  const searchInputContainer = getElement('.header__search')
  const searchInput = getElement('.input__field', searchInputContainer)
  const backdrop = getElement('.dark-background')
  const closeBtn = getElement('.header__search-close')
  const burgerMenu = getElement('.sidebar')
  const burgerBtn = getElement('.burger-icon')

  backdrop.addEventListener('click', closeSearch)
  closeBtn.addEventListener('click', closeSearch)

  function closeSearch() {
    searchInput.value = ''
    classManipulator(backdrop, 'add', 'dark-background_hidden')
    classManipulator(searchInputContainer, 'remove', 'header__search_open')

    enablePageScroll()
  }

  searchIcon.addEventListener('click', e => {
    classManipulator(searchInputContainer, 'toggle', 'header__search_open')
    classManipulator(backdrop, 'remove', 'dark-background_hidden')
    classManipulator(burgerMenu, 'remove', 'sidebar_open')
    classManipulator(burgerBtn, 'remove', 'burger-icon_open')
    searchInput.focus()
    disablePageScroll()
  })

  window.addEventListener('resize', e => {
    if (window.innerWidth < 768) {
      searchInputContainer.style.display = 'none'
      setTimeout(() => {
        searchInputContainer.style.display = 'block'
      }, 0)
    }
  })
}
