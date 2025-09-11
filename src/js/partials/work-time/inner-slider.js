import { workTimeRequest } from '@/js/partials/work-time/work-time-request.js'
import { getElement, getElements } from '@/js/composables/dom-manipulator.js'
import { generateScheduleDOM } from '@/js/partials/work-time/render-slide.js'
import { initSlider } from '@/js/partials/work-time/init-slider.js'

export async function innerSlider() {
  const container = getElement('.work-schedule__wrapper')
  try {
    const data = await workTimeRequest('Строгино')
    console.log(data)
    container.append(generateScheduleDOM(data))

    const sliders = getElements('.work-schedule__content')
    sliders.forEach(slider => {
      initSlider(slider)
    })
  } catch (e) {
    console.log(e)
  }
}
