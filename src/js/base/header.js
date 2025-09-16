import { toggleListSidebar } from '@/js/base/toggle-lists-sidebar.js'
import { toggleBurgerMenu } from '@/js/base/toggle-sidebar.js'
import { showMobileSearch } from '@/js/base/show-mobile-search.js'
import { initAppointmentPopup } from '@/js/widgets/appointment-popup/init-appointment-popup.js'

export function initHeader() {
  toggleListSidebar()
  toggleBurgerMenu()
  showMobileSearch()
  initAppointmentPopup()
}
