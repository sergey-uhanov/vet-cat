import { expertsSliderInner } from '@/js/partials/home/experts-slider-inner.js'
import { getElement, getElements } from '@/js/composables/dom-manipulator.js'

export async function toggleTubs() {
  const buttons = getElements('.button-group__button')
  let activeButton = getElement('.button-group__button_active')
  const container = getElement('.container-slider')
  await expertsSliderInner(activeButton.getAttribute('data-attribute'))

  buttons.forEach(button => {
    button.addEventListener('click', async e => {
      if (e.target.classList.contains('button-group__button_active')) return
      container.style.opacity = '0'
      await expertsSliderInner(button.getAttribute('data-attribute'))
      container.style.opacity = '1'
    })
  })
}
