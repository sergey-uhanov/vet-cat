import { getElement } from '@/js/composables/dom-manipulator.js'

export function successfully() {
  const container = getElement('.feedback-popup')
  container.innerHTML = '<p> Отзыв успешно отправлен!!!</p>'
}
