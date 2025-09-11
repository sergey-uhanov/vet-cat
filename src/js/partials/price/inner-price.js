import { priceRequest } from '@/js/partials/price/price-request.js'
import { createPriceList } from '@/js/partials/price/render-price-list.js'
import { getElement, renderElement } from '@/js/composables/dom-manipulator.js'
import { allServiceTitlesRequest } from '@/js/partials/price/all-service-titles-request.js'
import { setActivePriceButtons } from '@/js/partials/price/set-active-price-buttons.js'
import { useQuery } from '@/js/composables/use-query.js'

export async function innerPrice() {
  const container = getElement('.tubs__lists')
  const wrapper = getElement('.tubs__buttons-list')
  const tubsWrapper = getElement('.tubs')
  const loader = getElement('.loader')
  const queryParams = useQuery()

  const activeButtonName = queryParams.getParam('active')
  const titles = await allServiceTitlesRequest()
  const data = await priceRequest(activeButtonName)

  titles.forEach(title => {
    const button = renderElement('button', ['tubs__button', 'button_list-item'])
    const li = renderElement('li', 'tubs__button-item')

    button.innerText = title
    li.appendChild(button)
    wrapper.appendChild(li)
  })

  setActivePriceButtons(activeButtonName)

  container.append(createPriceList(data))

  tubsWrapper.style.opacity = '1'
  loader.style.opacity = '0'
  loader.style.eventPointer = 'none'
  loader.style.zIndex = '-1'
}
