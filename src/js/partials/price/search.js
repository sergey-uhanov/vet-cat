import {classManipulator, getElement, getElements, renderElement} from "@/js/composables/dom-manipulator.js";
import {searchByTitle} from "@/js/partials/price/search-title.js";
import {capitalizeName} from "@/js/composables/capitalize-name.js";
import {createPriceList} from "@/js/partials/price/render-price-list.js";
import {priceRequest} from "@/js/partials/price/price-request.js";
import {useQuery} from "@/js/composables/use-query.js";
import {allServiceTitlesRequest} from "@/js/partials/price/all-service-titles-request.js";
import {setActivePriceButtons} from "@/js/partials/price/set-active-price-buttons.js";
import {toggleButton} from "@/js/partials/price/toggle-button-service.js";

export async function search() {
    const inputWrapper = getElement('.input__text-search')
    const input = getElement('input', inputWrapper)
    const container = getElement('.tubs__lists')
    const queryParams = useQuery()
    const buttons = getElements('.tubs__button')
    const notFound = getElement('.tubs__not-found')
    const searchButton = getElement('.input__text-search-button')
    const tubsButtonWrapper = getElements('.tubs__button-item')
    const allServiceButton = getElement('.button_all-service')

    searchButton.addEventListener('click', async (e) => {

        if (input.value === '') {
            buttons.forEach(button => {
                button.innerText === 'Все услуги'
                    ? classManipulator(button, 'add', 'button_list-item-active')
                    : classManipulator(button, 'remove', 'button_list-item-active')
            })
            tubsButtonWrapper.forEach(buttonWrapper => {
                buttonWrapper.style.display = 'block'
            })
            queryParams.deleteParam('active')
        }

        const data = input.value ? await withSearch(capitalizeName(input.value)) : await priceRequest()
        container.innerHTML = ''

        if (input.value !== '') {

            queryParams.setParam('active', input.value)
            const tubsButtonWrapper = getElements('.tubs__button-item')
            tubsButtonWrapper.forEach(buttonWrapper => {
                const buttonEl = getElement('.button_list-item', buttonWrapper)

                if (buttonEl.innerText === 'Все услуги' || buttonEl.innerText.includes(input.value)) {
                    buttonWrapper.style.display = 'block'
                } else {
                    buttonWrapper.style.display = 'none'
                }
            })
        }

        if (!data.length) {
            notFound.style.opacity = '1'
            return
        }
        notFound.style.opacity = '0'
        container.append(createPriceList(data))
    })

    allServiceButton.addEventListener('click', async (e) => {
        const wrapper = getElement('.tubs__buttons-list')
        const titles = await allServiceTitlesRequest()
        input.value = ''
        queryParams.deleteParam('active')

        wrapper.innerHTML = ''
        titles.unshift( 'Все услуги')

        titles.forEach((title) => {
            const button = renderElement('button', ['tubs__button', 'button_list-item'])
            const li = renderElement('li', 'tubs__button-item')

            button.innerText = title
            li.appendChild(button)
            wrapper.appendChild(li)
        })
        setActivePriceButtons('Все услуги')
         await toggleButton()
    })

    async function withSearch(query) {
        buttons.forEach(button => {
            classManipulator(button, 'remove', 'button_list-item-active')
        })

        return await searchByTitle(capitalizeName(query))
    }
}
