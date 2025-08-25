import {getElement} from "@/js/composables/dom-manipulator.js";

export async function renderList(data) {
    const container = getElement('.list-services__list')

    container.innerHTML = '';
    data.forEach(doc => {

        const element = `<li class="list-services__item">
            <a class="list-services__link" href="${doc.link}">${doc.title}</a>
        </li>`

        container.insertAdjacentHTML('beforeend', element);
    })

}