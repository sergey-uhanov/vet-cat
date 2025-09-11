import { classManipulator, getElement, getElements } from '@/js/composables/dom-manipulator.js'
import { useQuery } from '@/js/composables/use-query.js'
import { moveSliderTo } from '@/js/ui/selection-button-group.js'

export function toggleButton() {
  const buttons = getElements('.button-group__button ')
  const tubsWrapper = getElement('.about-tubs')
  const queryUse = useQuery()
  const breadcrumbs = getElement('.breadcrumbs').children
  let activeParam = queryUse.getParam('active')

  if (!activeParam) {
    activeParam = buttons[0].getAttribute('data-attribute')
    queryUse.setParam('active', activeParam)
  }

  Array.from(tubsWrapper.children).forEach(child => {
    const isActive = child.getAttribute('data-attribute') === activeParam

    if (isActive) {
      classManipulator(child, 'add', 'tub_active')
      breadcrumbs[breadcrumbs.length - 1].innerText = activeParam
    } else {
      classManipulator(child, 'remove', 'tub_active')
    }
  })

  buttons.forEach(button => {
    if (activeParam === button.getAttribute('data-attribute')) {
      classManipulator(button, 'add', 'button-group__button_active')
      moveSliderTo(button)
    }

    button.addEventListener('click', e => {
      Array.from(tubsWrapper.children).forEach(child => {
        const isActive = child.getAttribute('data-attribute') === e.currentTarget.getAttribute('data-attribute')

        if (isActive) {
          classManipulator(child, 'add', 'tub_active')
          queryUse.setParam('active', e.currentTarget.getAttribute('data-attribute'))
          breadcrumbs[breadcrumbs.length - 1].innerText = e.currentTarget.getAttribute('data-attribute')
        } else {
          classManipulator(child, 'remove', 'tub_active')
        }
      })
    })
  })
}
