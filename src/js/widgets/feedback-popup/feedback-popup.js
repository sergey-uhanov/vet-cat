import { valideteFeedbackForm } from '@/js/widgets/feedback-popup/validete-feedback-form.js'

export function feedbackPopup() {
  const dropdown = document.querySelector('[data-dropdown]')
  const button = dropdown.querySelector('.dropdown__button')
  const list = dropdown.querySelector('.dropdown__list')
  const items = dropdown.querySelectorAll('.dropdown__item')
  const input = dropdown.querySelector('.dropdown__input')

  valideteFeedbackForm()

  button.addEventListener('click', () => {
    dropdown.classList.toggle('open')
  })

  items.forEach(item => {
    item.addEventListener('click', () => {
      button.textContent = item.textContent
      input.value = item.dataset.value
      dropdown.classList.remove('open')
    })
  })

  document.addEventListener('click', e => {
    if (!dropdown.contains(e.target)) {
      dropdown.classList.remove('open')
    }
  })
}
