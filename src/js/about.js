import { initHeader } from '@/js/base/header.js'
import { selectionButtonGroup } from '@/js/ui/selection-button-group.js'
import { quadrupleSlider } from '@/js/widgets/quadruple-sleder.js'
import { toggleButton } from '@/js/partials/about/toggle-tubs.js'
import { configGallery } from '@/js/partials/about/config-gallery.js'
import { feedbackPopup } from '@/js/widgets/feedback-popup/feedback-popup.js'

document.addEventListener('DOMContentLoaded', async e => {
  initHeader()
  selectionButtonGroup()
  quadrupleSlider(
    'our-mission__slider',
    'triple-slider__button-next-icon_stories',
    'triple-slider__button-prev-icon_stories',
    16
  )
  toggleButton()
  configGallery()
  feedbackPopup()
})
