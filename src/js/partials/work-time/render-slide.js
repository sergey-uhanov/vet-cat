import { renderElement } from '@/js/composables/dom-manipulator.js'

export function generateScheduleDOM(data) {
  const fragment = document.createDocumentFragment()

  data.forEach(service => {
    const container = renderElement('div', 'work-schedule__content-wrapper')
    const workSchedule = renderElement('div', ['container-work-time', 'work-schedule__content'])

    const sidebar = renderElement('div', 'item-service__sidebar')

    const title = renderElement('div', 'item-service__title')
    title.textContent = service.service
    sidebar.appendChild(title)

    service.staff.forEach(staff => {
      const employer = renderElement('div', 'item-service__employer')

      const name = renderElement('div', 'item-service__employer-name')
      name.textContent = staff.name

      const position = renderElement('div', 'item-service__employer-position')
      position.textContent = staff.position

      employer.appendChild(name)
      employer.appendChild(position)

      sidebar.appendChild(employer)
    })

    workSchedule.appendChild(sidebar)

    const slider = renderElement('div', ['item-service__slider', 'swiper'])
    slider.dataset.attribute = service.id

    const sliderWrapper = renderElement('div', ['swiper-wrapper', 'item-service__slider-wrapper'])

    for (let i = 0; i < 21; i++) {
      const currentDate = new Date()
      currentDate.setDate(currentDate.getDate() + i)

      const slide = renderElement('div', ['swiper-slide', 'item-service__slide', 'slide'])

      const dateWrapper = renderElement('div', 'slide__date-wrapper')
      const dayWeek = renderElement('div', 'slide__day-week')
      const date = renderElement('div', 'slide__date')

      if (i === 0) {
        dayWeek.textContent = 'Сегодня'
      } else if (i === 1) {
        dayWeek.textContent = 'Завтра'
      } else {
        const weekDays = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб']
        dayWeek.textContent = weekDays[currentDate.getDay()]

        if (currentDate.getDay() === 0 || currentDate.getDay() === 6) {
          dayWeek.style.color = 'red'
        }
      }

      const day = renderElement('span', 'slide__date-day')

      day.textContent = currentDate.toLocaleDateString('ru-RU', {
        day: 'numeric',
      })

      date.textContent = currentDate.toLocaleDateString('ru-RU', {
        month: 'long',
      })

      dateWrapper.appendChild(dayWeek)
      date.prepend(day)
      dateWrapper.appendChild(date)
      slide.appendChild(dateWrapper)

      service.staff.forEach(staff => {
        const timeWrapper = renderElement('div', 'slide__times-wrapper')

        const scheduleKeys = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']

        const dayKey = scheduleKeys[currentDate.getDay()]
        timeWrapper.textContent = staff.schedule[dayKey] || '-'

        slide.appendChild(timeWrapper)
      })

      sliderWrapper.appendChild(slide)
    }

    slider.appendChild(sliderWrapper)
    workSchedule.appendChild(slider)

    const prevBtn = renderElement('div', 'item-service__button-prev')
    prevBtn.innerHTML = `<svg class="icon item-service__button-prev-icon">
                                <use xlink:href="#row"></use>
                             </svg>`

    const nextBtn = renderElement('div', 'item-service__button-next')
    nextBtn.innerHTML = `<svg class="icon item-service__button-next-icon">
                                <use xlink:href="#row"></use>
                             </svg>`

    workSchedule.appendChild(prevBtn)
    workSchedule.appendChild(nextBtn)

    container.appendChild(workSchedule)
    fragment.appendChild(container)
  })

  return fragment
}
