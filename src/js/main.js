import { initHeader } from '@/js/base/header.js'
import { heightFirstSection } from '@/js/partials/home/height-first-section.js'
import { tripleSlider } from '@/js/widgets/triple-slider.js'
import { innerServiceCard } from '@/js/partials/home/inner-service-card.js'
import { expertsSliderInner } from '@/js/partials/home/experts-slider-inner.js'
import { quadrupleSlider } from '@/js/widgets/quadruple-sleder.js'
import { storiesSliderInner } from '@/js/partials/home/inner-stories-cards.js'
import { initMap } from '@/js/partials/home/init-map.js'

document.addEventListener('DOMContentLoaded', async e => {
  initHeader()
  heightFirstSection()
  tripleSlider(
    'triple-slider_services',
    'triple-slider__button-next-icon_service',
    'triple-slider__button-prev-icon_service'
  )
  tripleSlider(
    'triple-slider_experts',
    'triple-slider__button-next-icon_experts',
    'triple-slider__button-prev-icon_experts'
  )
  quadrupleSlider(
    'triple-slider_stories',
    'triple-slider__button-next-icon_stories',
    'triple-slider__button-prev-icon_stories'
  )
  await innerServiceCard()
  await expertsSliderInner()
  await storiesSliderInner()
  await initMap()
})
