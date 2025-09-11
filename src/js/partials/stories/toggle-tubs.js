import { getElements } from '@/js/composables/dom-manipulator.js'
import { cardsRequest } from '@/js/partials/stories/cards-request.js'
import { innerCards } from '@/js/partials/stories/inner-cards.js'
import { useQuery } from '@/js/composables/use-query.js'

export async function toggleTubs() {
  const tubsButton = getElements('.button-group__button')
  const queryUse = useQuery()

  tubsButton.forEach(button => {
    button.addEventListener('click', async () => {
      const activeParamQuery = button.getAttribute('data-attribute')
      queryUse.setParam('active', activeParamQuery)

      const data = await cardsRequest(activeParamQuery)

      await innerCards(data)
    })
  })
}
