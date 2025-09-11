import { getElement } from '@/js/composables/dom-manipulator.js'

export function heightFirstSection() {
  const backgroundContainer = getElement('.first-screen__background')
  const sectionContainer = getElement('.first-screen')

  sectionContainer.style.height = getComputedStyle(backgroundContainer).height

  window.addEventListener('resize', () => {
    sectionContainer.style.height = getComputedStyle(backgroundContainer).height
  })
}
