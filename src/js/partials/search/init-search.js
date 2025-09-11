import { useQuery } from '@/js/composables/use-query.js'
import { renderSearchResults } from '@/js/partials/search/renderSearchResults.js'

export function initSearch() {
  const query = useQuery()
  const initValue = query.getParam('query') ?? 'foihodhibolhdfklbkhckljhbfio'

  renderSearchResults(initValue)
}
