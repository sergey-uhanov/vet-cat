import { classManipulator, getElements } from '@/js/composables/dom-manipulator.js'

export function setActivePriceButtons(type) {
  const activeButtonText = type ?? 'Все услуги'
  const buttons = getElements('.button_list-item')
  buttons.forEach(button => {
    button.innerText === activeButtonText
      ? classManipulator(button, 'add', 'button_list-item-active')
      : classManipulator(button, 'remove', 'button_list-item-active')
  })
}
