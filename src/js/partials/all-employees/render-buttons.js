import {getElement, renderElement} from "@/js/composables/dom-manipulator.js";
import {useQuery} from "@/js/composables/use-query.js";
import {employeesRequest} from "@/js/partials/all-employees/employees-request.js";

export async function renderButtons() {
    const wrapper = getElement('.employees-tubs__buttons-block')
    const queryUse = useQuery()
    const getQueryLocation = queryUse.getParam("location") ? queryUse.getParam("location") : 'Везде'
    const getQueryExpert = queryUse.getParam("Expert") ? queryUse.getParam("Expert") : 'Все специализации'
    const data = await employeesRequest(getQueryLocation)

    const arrExperts = data.reduce((acc, {expertise}) => {
        !acc.includes(expertise) ? acc.push(expertise) : null
        return acc
    }, [])


    arrExperts.unshift('Все специализации')
    wrapper.innerHTML = ''

    arrExperts.forEach(item => {
        const button = renderElement('button', ['button_list-item', 'button_all-service', getQueryExpert === item ? 'button_list-item-active' : ''])
        button.innerText = item
        wrapper.append(button)
    })


}