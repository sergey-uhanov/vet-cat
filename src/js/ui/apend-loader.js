import { getElement } from '@/js/composables/dom-manipulator.js'

export function innerLoader(target) {
  const content = getElement(`.${target}`)
  content.innerHTML = '<span class="loader"></span>'
}
