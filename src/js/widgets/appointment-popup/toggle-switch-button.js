import { classManipulator, getElement, getElements } from '@/js/composables/dom-manipulator.js'

export function toggleSwitchButton() {
  const container = getElement('.appointment-form__container')
  const buttons = getElements('.appointment-form__button', container)

  buttons.forEach(button => {
    button.addEventListener('click', e => {
      buttons.forEach(b => {
        classManipulator(b, 'remove', 'appointment-form__button_active')
      })
      if (e.target.innerText === button.innerText) {
        classManipulator(button, 'add', 'appointment-form__button_active')
      }
    })
  })
}
