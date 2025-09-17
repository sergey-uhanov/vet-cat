import { appointmentValidation } from '@/js/widgets/appointment-popup/appointment-validation.js'
import { configGallery } from '@/js/partials/about/config-gallery.js'
import { toggleSwitchButton } from '@/js/widgets/appointment-popup/toggle-switch-button.js'

export function initAppointmentPopup() {
  appointmentValidation()
  configGallery()
  toggleSwitchButton()
}
