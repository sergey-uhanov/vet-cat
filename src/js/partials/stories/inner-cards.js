import { renderSmallImgCard } from '@/js/ui/render-small-img-card.js'
import { getElement } from '@/js/composables/dom-manipulator.js'

export async function innerCards(data) {
  const wrapper = getElement('.tubs__cards')

  wrapper.innerHTML = ''
  data.forEach(item => {
    wrapper.insertAdjacentHTML('beforeend', renderSmallImgCard(item))
  })
}
