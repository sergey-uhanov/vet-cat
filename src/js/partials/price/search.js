import {classManipulator, getElement, getElements} from "@/js/composables/dom-manipulator.js";
import {searchByTitle} from "@/js/partials/price/search-title.js";
import {capitalizeName} from "@/js/composables/capitalize-name.js";
import {createPriceList} from "@/js/partials/price/render-price-list.js";
import {priceRequest} from "@/js/partials/price/price-request.js";
import {useQuery} from "@/js/composables/use-query.js";

export async function search() {
    const inputWrapper = getElement('.input__text-search')
    const input = getElement('input', inputWrapper)
    const container = getElement('.tubs__lists')
    const queryParams = useQuery()
    const buttons = getElements('.tubs__button')
    const notFound = getElement('.tubs__not-found')
    input.addEventListener('input', async (e) => {

        if (input.value === '') {
            buttons.forEach(button => {
                button.innerText === 'Все услуги'
                    ? classManipulator(button, 'add', 'button_list-item-active')
                    : classManipulator(button, 'remove', 'button_list-item-active')
            })
        }

        const data = input.value ? await withSearch(capitalizeName(input.value)) : await priceRequest()
        container.innerHTML = ''
        if (!data.length) {
            notFound.style.opacity = '1'
            return
        }
        notFound.style.opacity = '0'
        container.append(createPriceList(data))


    })


    async function withSearch(query) {
        queryParams.deleteParam('active', true)
        buttons.forEach(button => {
            classManipulator(button, 'remove', 'button_list-item-active')
        })

        return await searchByTitle(capitalizeName(query))
    }
}

