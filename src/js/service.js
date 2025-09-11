import { initHeader } from '@/js/base/header.js'
import { initStory } from '@/js/partials/servise/init-story.js'
import { tripleSlider } from '@/js/widgets/triple-slider.js'
import { selectionButtonGroup } from '@/js/ui/selection-button-group.js'
import { toggleTubs } from '@/js/partials/servise/toggle-tubs.js'

document.addEventListener('DOMContentLoaded', async e => {
  initHeader()
  await initStory()
  tripleSlider(
    'triple-slider_experts',
    'triple-slider__button-next-icon_experts',
    'triple-slider__button-prev-icon_experts'
  )
  await toggleTubs()
  selectionButtonGroup('.service-slider__button-block')
})
