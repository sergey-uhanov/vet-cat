import {classManipulator, getElement, getElements} from "@/js/composables/dom-manipulator.js";
import {allServicesListRequest} from "@/js/partials/all-services/all-services-list-request.js";
import {renderList} from "@/js/partials/all-services/render-list.js";
import {useQuery} from "@/js/composables/use-query.js";
import {capitalizeName} from "@/js/composables/capitalize-name.js";


export async function toggleTab() {
    const useQueryParam = useQuery()
    const param = useQueryParam.getParam('type')
    const tabsButtons = getElements('.banner__item')
    const title = getElement('.list-services__title')
    let activeTab = param ?? null


    allServicesListRequest(activeTab).then(response => {
        renderList(response)
    })

    tabsButtons.forEach(button => {
        button.getAttribute('data-attribute') === activeTab
            ? classManipulator(button, 'add', 'banner__item_active')
            : classManipulator(button, 'remove', 'banner__item_active')
    })


    tabsButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tempValue = button.getAttribute('data-attribute')
            activeTab !== tempValue ? activeTab = button.getAttribute('data-attribute') : activeTab = null

            activeTab ? useQueryParam.setParam('type', tempValue) : useQueryParam.deleteParam('type')


            title.innerText = capitalizeName(activeTab)

            tabsButtons.forEach(button => {
                classManipulator(button, 'remove', 'banner__item_active')
            })

            if (activeTab !== null && activeTab === button.getAttribute('data-attribute')) {
                classManipulator(button, 'add', 'banner__item_active')
            }

            allServicesListRequest(activeTab).then(response => {
                renderList(response)
            })
        })
    })
}