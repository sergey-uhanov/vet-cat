import { classManipulator, getElement, getElements } from '@/js/composables/dom-manipulator.js'

const slider = getElement('.button-group__slider')
const buttons = getElements('.button-group__button')
let activeButton = getElement('.button-group__button_active') ?? buttons[0]

export function selectionButtonGroup() {
  moveSliderTo(activeButton)

  buttons.forEach(button => {
    button.addEventListener('click', changeSliderTo)
  })

  window.addEventListener('resize', () => {
    moveSliderTo(activeButton)
  })
}

export function moveSliderTo(button = activeButton) {
  const { offsetWidth, offsetHeight, offsetLeft, offsetTop } = button
  slider.style.width = `${offsetWidth}px`
  slider.style.height = `${offsetHeight}px`
  slider.style.transform = `translate(${offsetLeft}px, ${offsetTop}px)`
}

function changeSliderTo(e) {
  buttons.forEach(b => {
    classManipulator(b, 'remove', 'button-group__button_active')
  })
  classManipulator(e.target, 'add', 'button-group__button_active')
  activeButton = e.target

  moveSliderTo(e.target)
}
