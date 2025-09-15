import { useQuery } from '@/js/composables/use-query.js'
import { renderSearchResults } from '@/js/partials/search/renderSearchResults.js'
import { getElement } from '@/js/composables/dom-manipulator.js'

export function initSearch() {
  const query = useQuery()
  const initValue = query.getParam('query') ?? ''
  const inputWrapper = getElement('.input__text-search')
  const input = getElement('.input__field', inputWrapper)
  input.value = initValue

  renderSearchResults(initValue)
}
