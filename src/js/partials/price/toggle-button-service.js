import { getElement, getElements, renderElement } from '@/js/composables/dom-manipulator.js'
import { createPriceList } from '@/js/partials/price/render-price-list.js'
import { priceRequest } from '@/js/partials/price/price-request.js'
import { setActivePriceButtons } from '@/js/partials/price/set-active-price-buttons.js'
import { useQuery } from '@/js/composables/use-query.js'

export async function toggleButton() {
  const container = getElement('.tubs__lists')
  const buttons = getElements('.tubs__button')
  const queryParams = useQuery()

  buttons.forEach(button => {
    button.addEventListener('click', async e => {
      if (queryParams.getParam('active') === button.innerText) return

      const data = await priceRequest(button.innerText)
      container.innerHTML = ''

      container.append(createPriceList(data))
      setActivePriceButtons(button.innerText)
    })
  })
}
