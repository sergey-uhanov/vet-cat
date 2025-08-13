import {classManipulator, getElements} from "@/js/composables/dom-manipulator.js";

export function toggleListSidebar() {
    const lists = getElements('.sidebar-sub-list');

    lists.forEach(list => {
        list.addEventListener('click', () => {
            lists.forEach(list2 => {
                if (list === list2) {
                    list2.style.pointerEvents= 'none'
                    classManipulator(list2, 'toggle', 'sidebar-sub-list_active');
                    setTimeout(()=>{
                        list2.style.pointerEvents= 'auto'
                    },300)
                } else {
                    classManipulator(list2, 'remove', 'sidebar-sub-list_active');
                }
            });
        });
    });
}