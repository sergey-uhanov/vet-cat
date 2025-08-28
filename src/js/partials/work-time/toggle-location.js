import {getElement, getElements} from "@/js/composables/dom-manipulator.js";
import {workTimeRequest} from "@/js/partials/work-time/work-time-request.js";
import {generateScheduleDOM} from "@/js/partials/work-time/render-slide.js";
import {initSlider} from "@/js/partials/work-time/init-slider.js";

export async function toggleLocation(){
    const container = getElement('.work-schedule__wrapper');
   const buttonGroup = getElement('.button-group__container');

   buttonGroup.addEventListener('click', async () => {
       const activeButton = getElement('.button-group__button_active',buttonGroup );

       try {
           const data = await workTimeRequest(activeButton.innerText)

           container.innerHTML = ``
           container.append(generateScheduleDOM(data))

           const sliders = getElements('.work-schedule__content')
           sliders.forEach(slider => {
               initSlider(slider)
           })

       }catch (e){
           console.log(e);
       }
   })

}