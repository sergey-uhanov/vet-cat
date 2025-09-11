import { initHeader } from '@/js/base/header.js'
import { selectionButtonGroup } from '@/js/ui/selection-button-group.js'
import { innerEmployees } from '@/js/partials/all-employees/inner-employees.js'
import { toggleButton } from '@/js/partials/all-employees/toggle-button.js'
import { toggleLocationExperts } from '@/js/partials/all-employees/toggle-location.js'

document.addEventListener('DOMContentLoaded', async e => {
  initHeader()
  selectionButtonGroup('.employees-tubs__switch-button')
  await innerEmployees()
  await toggleButton()
  await toggleLocationExperts()
})
