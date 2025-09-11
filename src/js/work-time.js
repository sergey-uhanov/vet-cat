import { initHeader } from '@/js/base/header.js'
import { selectionButtonGroup } from '@/js/ui/selection-button-group.js'
import { innerSlider } from '@/js/partials/work-time/inner-slider.js'
import { toggleLocation } from '@/js/partials/work-time/toggle-location.js'

document.addEventListener('DOMContentLoaded', async e => {
  initHeader()
  selectionButtonGroup('.work-schedule__button-block')
  await innerSlider()
  await toggleLocation()
})
