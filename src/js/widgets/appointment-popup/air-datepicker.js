import AirDatepicker from 'air-datepicker'
import 'air-datepicker/air-datepicker.css'

export function airDatepicker() {
  new AirDatepicker('#appointment-date', {
    container: '.appointment-form__text_date',
    appendTo: document.body,
    autoClose: true,
    position: ' center',
    minDate: new Date(),
  })
}
