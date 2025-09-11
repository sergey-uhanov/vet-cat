import { initHeader } from '@/js/base/header.js'
import { toggleInput } from '@/js/partials/search/toggle-input.js'
import { initSearch } from '@/js/partials/search/init-search.js'

document.addEventListener('DOMContentLoaded', async e => {
  initHeader()
  initSearch()
  toggleInput()
})
