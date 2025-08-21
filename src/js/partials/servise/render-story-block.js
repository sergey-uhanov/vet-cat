import {renderElement} from "@/js/composables/dom-manipulator.js";

export function renderStoryBlock(block) {

    const classes = {
        container: 'story__text-container',
        paragraph: 'story__paragraph',
        heading: 'story__sub-title',
        list: 'story__list',
        listItem: 'story__list-item'
    }

    const container = renderElement('div', classes.container);


    const frag = document.createDocumentFragment();
    const items = block.story

    items.forEach(item => {
            switch (item.type) {
                case 'paragraph': {
                    const p = renderElement('p', classes.paragraph);
                    p.textContent = item.content
                    frag.appendChild(p);
                    break;
                }

                case 'heading': {
                    const level = item.level;

                    const h = renderElement('h' + level, classes.heading);
                    h.textContent = item.content
                    frag.appendChild(h);
                    break;
                }

                case 'list': {
                    const ul = renderElement('ul', classes.list);

                    item.items.forEach(itemList => {
                        const li = renderElement('li', classes.listItem);
                        li.textContent = itemList;
                        ul.appendChild(li);
                    })

                    frag.appendChild(ul);

                }
            }
        }
    )

    container.appendChild(frag);
    return container;
}


