import JustValidate from 'just-validate'
import { getElement } from '@/js/composables/dom-manipulator.js'
import { Fancybox } from '@fancyapps/ui/dist/fancybox/'
import { createToast } from '@/js/widgets/toast.js'

export function valideteFeedbackForm() {
  console.log(1)

  const validation = new JustValidate('.feedback-form', {})

  validation
    .addField('.feedback-form__textarea', [
      {
        rule: 'required',
        errorMessage: 'Поле обязательно',
      },
      {
        rule: 'minLength',
        value: 10,
        errorMessage: 'Минимум 10 символов',
      },
    ])

    .addField('input[name="user-name"]', [
      {
        rule: 'required',
        errorMessage: 'Введите имя',
      },
      {
        rule: 'customRegexp',
        value: /^[А-Яа-яЁёA-Za-z\s-]+$/,
        errorMessage: 'Допустимы только буквы',
      },
      {
        rule: 'minLength',
        value: 2,
        errorMessage: 'Минимум 2 символа',
      },
    ])

    .addField('input[name="user-email"]', [
      {
        rule: 'required',
        errorMessage: 'Введите email',
      },
      {
        rule: 'email',
        errorMessage: 'Введите корректный email',
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
      getElement('.feedback-form').reset()
      Fancybox.close()
      createToast('Данные успешно отправлены', { duration: 5000 })
    })
}
