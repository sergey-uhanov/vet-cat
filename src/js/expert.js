import { initHeader } from '@/js/base/header.js'
import { initSlider } from '@/js/partials/work-time/init-slider.js'
import { getElement } from '@/js/composables/dom-manipulator.js'
import { initAppointmentPopup } from '@/js/widgets/appointment-popup/init-appointment-popup.js'
import { feedbackPopup } from '@/js/widgets/feedback-popup/feedback-popup.js'

document.addEventListener('DOMContentLoaded', async e => {
  initHeader()
  initSlider(getElement('.work-schedule__wrapper'))
  initAppointmentPopup()
  feedbackPopup()
})
