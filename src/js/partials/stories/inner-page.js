import { classManipulator, getElements } from '@/js/composables/dom-manipulator.js'
import { useQuery } from '@/js/composables/use-query.js'
import { innerCards } from '@/js/partials/stories/inner-cards.js'
import { cardsRequest } from '@/js/partials/stories/cards-request.js'
import { moveSliderTo } from '@/js/ui/selection-button-group.js'

export async function innerPage() {
  const tubsButton = getElements('.button-group__button')
  const queryUse = useQuery()
  let activeQuery = queryUse.getParam('active') ?? tubsButton[0].getAttribute('data-attribute')

  if (activeQuery !== queryUse.getParam('active')) {
    queryUse.setParam('active', tubsButton[0].getAttribute('data-attribute'))
  }

  tubsButton.forEach(button => {
    if (button.innerText.toLowerCase() === activeQuery) {
      classManipulator(button, 'add', 'button-group__button_active')
      moveSliderTo(button)
    }
  })
  const data = await cardsRequest(activeQuery)

  await innerCards(data)
}
