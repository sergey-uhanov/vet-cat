import { getElement } from '@/js/composables/dom-manipulator.js'
import { renderSearchResults } from '@/js/partials/search/renderSearchResults.js'

export function toggleInput() {
  const inputWrapper = getElement('.input__text-search')
  const input = getElement('.input__field', inputWrapper)
  const button = getElement('.input__text-search-button')

  button.addEventListener('click', () => {
    renderSearchResults(input.value)
  })
}
