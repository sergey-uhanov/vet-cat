import {renderElement} from "@/js/composables/dom-manipulator.js"

function renderServices(services) {
    const ulServices = renderElement("ul", "type-price__list")

    services.forEach(service => {
        const liService = renderElement("li", "type-price__service-price")

        const name = renderElement("p", "type-price__name-service")
        name.textContent = service.name

        const price = renderElement("p", "type-price__price-service")
        price.textContent = service.price

        liService.appendChild(name)
        liService.appendChild(price)
        ulServices.appendChild(liService)
    })

    return ulServices
}

export function createPriceList(data) {
    const ul = document.createDocumentFragment()

    data.forEach(block => {
        const li = renderElement("li", ["tubs__lists-item", "type-price"])


        const h5 = renderElement("h5", "type-price__title")
        h5.textContent = block.title
        li.appendChild(h5)


        const p = renderElement("p", "type-price__description")
        p.textContent =
            "Цены указаны в молдавских леях за одну процедуру/сеанс для одного животного"
        li.appendChild(p)


        if (block.categories) {
            block.categories.forEach(category => {
                const div = renderElement("div", "type-price__sub-title")
                div.textContent = category.subTitle
                li.appendChild(div)

                li.appendChild(renderServices(category.services))
            })
        }


        if (block.services) {
            li.appendChild(renderServices(block.services))
        }

        ul.appendChild(li)
    })

    return ul
}
