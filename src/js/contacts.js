import { initHeader } from '@/js/base/header.js'
import { selectionButtonGroup } from '@/js/ui/selection-button-group.js'
import { toggleButtonLocation } from '@/js/partials/contacts/toggle-button-location.js'
import { feedbackPopup } from '@/js/widgets/feedback-popup/feedback-popup.js'
import { valideteFeedbackForm } from '@/js/widgets/feedback-popup/validete-feedback-form.js'
document.addEventListener('DOMContentLoaded', async e => {
  initHeader()
  await toggleButtonLocation()
  selectionButtonGroup('.main-scene__button-section')
})
