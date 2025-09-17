import JustValidate from 'just-validate'
import { getElement } from '@/js/composables/dom-manipulator.js'
import { createToast } from '@/js/widgets/toast.js'
import { Fancybox } from '@fancyapps/ui/dist/fancybox/'

export function appointmentValidation() {
  const validation = new JustValidate('#appointment-form')

  validation
    .addField('input[name="user-name"]', [
      {
        rule: 'required',
        errorMessage: 'Введите имя и фамилию',
      },
      {
        rule: 'customRegexp',
        value: /^[А-Яа-яЁёA-Za-z\s-]+$/,
        errorMessage: 'Допустимы только буквы и пробелы',
      },
      {
        rule: 'minLength',
        value: 2,
        errorMessage: 'Минимум 2 символа',
      },
    ])

    .addField('input[name="user-phone"]', [
      {
        rule: 'required',
        errorMessage: 'Введите телефон',
      },
      {
        rule: 'customRegexp',
        value: /^\+?\d{10,15}$/,
        errorMessage: 'Не корректный номер',
      },
    ])

    .addField('#appointment-date', [
      {
        rule: 'required',
        errorMessage: 'Укажите дату приема',
      },
      {
        rule: 'customRegexp',
        value: /^\d{2}\.\d{2}\.\d{4}$/,
        errorMessage: 'Формат даты ДД.ММ.ГГГГ',
      },
    ])

    .addField('input[name="animal-name"]', [
      {
        rule: 'required',
        errorMessage: 'Укажите питомца',
      },
      {
        rule: 'minLength',
        value: 2,
        errorMessage: 'Минимум 2 символа',
      },
    ])
    .addField('input[name="agree"]', [
      {
        rule: 'required',
        errorMessage: 'Необходимо согласие',
      },
    ])
    .onSuccess(event => {
      console.log('success')
      getElement('.appointment-form').reset()
      Fancybox.close()
      createToast('Данные успешно отправлены', { duration: 5000 })
    })
}
