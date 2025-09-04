import {initMap} from "@/js/partials/contacts/init-map.js";
import {classManipulator, getElement, getElements} from "@/js/composables/dom-manipulator.js";

export async function toggleButtonLocation() {
    const wrapper = getElement('.main-scene__button-section')
    const buttons = getElements('.button-group__button', wrapper)
    const containers = getElements('.address-card')


    let activeButton

    await initMap({lat: 50.4194, lng: 30.4809})

    buttons.forEach(button => {
        button.addEventListener('click', async () => {
            if (button.innerText === activeButton) return

            activeButton = button.innerText
            containers.forEach(container => {
                classManipulator(container, 'toggle', 'address-card_hidden')
            })

            activeButton === 'суворовский' ? await initMap(null,{ lat: 50.444, lng: 30.619 })
                : await initMap({lat: 50.4194, lng: 30.4809})
        })
    })



}