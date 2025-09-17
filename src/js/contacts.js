import { initHeader } from '@/js/base/header.js'
import { selectionButtonGroup } from '@/js/ui/selection-button-group.js'
import { toggleButtonLocation } from '@/js/partials/contacts/toggle-button-location.js'
document.addEventListener('DOMContentLoaded', async e => {
  initHeader()
  await toggleButtonLocation()
  selectionButtonGroup('.main-scene__button-section')
})
