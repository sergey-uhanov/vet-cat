import {employeesRequest} from "@/js/partials/all-employees/employees-request.js";
import {useQuery} from "@/js/composables/use-query.js";
import {renderCards} from "@/js/partials/all-employees/render-cards.js";
import {renderButtons} from "@/js/partials/all-employees/render-buttons.js";
import {toggleButton} from "@/js/partials/all-employees/toggle-button.js";
import {getElement} from "@/js/composables/dom-manipulator.js";

export async function innerEmployees() {
    const contentContainer = getElement('.employees-tubs__content')
    const queryUse = useQuery()
    const getQueryLocation = queryUse.getParam("location")
    const getQueryExpert = queryUse.getParam("Expert");
    contentContainer.style.opacity = "0";

    if (!getQueryLocation) queryUse.setParam("location", 'Везде');
    if (!getQueryExpert) queryUse.setParam("Expert", 'Все специализации');

    try {
         const data = await employeesRequest(queryUse.getParam("location"))

        renderCards(data)

        await renderButtons(data)
        await toggleButton()
        contentContainer.style.opacity = "1";


    } catch (e) {
        console.error(e);
    }

}
