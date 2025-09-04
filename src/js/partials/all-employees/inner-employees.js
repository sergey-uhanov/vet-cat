import {employeesRequest} from "@/js/partials/all-employees/employees-request.js";
import {useQuery} from "@/js/composables/use-query.js";
import {renderCards} from "@/js/partials/all-employees/render-cards.js";
import {renderButtons} from "@/js/partials/all-employees/render-buttons.js";
import {classManipulator, getElement, getElements} from "@/js/composables/dom-manipulator.js";
import {moveSliderTo} from "@/js/ui/selection-button-group.js";
import {innerLoader} from "@/js/ui/apend-loader.js";

export async function innerEmployees() {
    const contentContainer = getElement('.employees-tubs__content')
    const queryUse = useQuery()
    const getQueryLocation = queryUse.getParam("location")
    const getQueryExpert = queryUse.getParam("Expert");
    contentContainer.style.opacity = "0";
    let data

    if (!getQueryLocation) queryUse.setParam("location", 'Везде');
    if (!getQueryExpert) queryUse.setParam("Expert", 'Все специализации');

    try {
        data = await employeesRequest(queryUse.getParam("location"))

         rerenderCards(data, getQueryExpert)

        await renderButtons(data)
        await toggleButton()
        initActiveButton(getQueryLocation)
        contentContainer.style.opacity = "1";


    } catch (e) {
        console.error(e);
    }

    function toggleButton() {
        const buttons = getElements('.button_list-item')


        buttons.forEach(button => {
            button.addEventListener("click", async () => {

                queryUse.setParam('Expert', button.innerText)

                buttons.forEach((btn) => {
                    const activeExpertQuery = queryUse.getParam('Expert')
                    btn.innerText === activeExpertQuery
                        ? classManipulator(btn, 'add', 'button_list-item-active')
                        : classManipulator(btn, 'remove', 'button_list-item-active')
                })

                rerenderCards(data, button.innerText)
            })
        })
    }

}

function rerenderCards(data, innerText) {
    innerLoader('employees-tubs__cards')

    const filterArr = data.filter((item) => {
        if (innerText === 'Все специализации') return true

        return innerText === item.expertise
    })


    renderCards(filterArr)
}

function initActiveButton(query) {
    const buttons = getElements('.button-group__button')


    buttons.forEach(btn => {
            if (btn.innerText === query) {
                classManipulator(btn, 'add', 'button-group__button_active')
                moveSliderTo(btn)
            } else {
                classManipulator(btn, 'remove', 'button-group__button_active')
            }
        }
    )


}