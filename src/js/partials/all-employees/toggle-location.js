import {getElement, getElements} from "@/js/composables/dom-manipulator.js";
import {useQuery} from "@/js/composables/use-query.js";
import {innerEmployees} from "@/js/partials/all-employees/inner-employees.js";


export async function toggleLocationExperts() {
    const container = getElement('.button-group__container')

    const switchButtons = getElements('.button-group__button', container)
    const queryUse = useQuery()
    switchButtons.forEach(button => {
        button.addEventListener('click', () => {
            queryUse.setParam('location', button.innerText)
            innerEmployees()
        })
    })
}