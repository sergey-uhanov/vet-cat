import {classManipulator, getElement, getElements} from "@/js/composables/dom-manipulator.js";

export function selectionButtonGroup(buttonGroup) {
    const containerElement = getElement(buttonGroup);
    const buttons = getElements('.button-group__button', containerElement);
    let activeButton = getElement('.button-group__button_active', containerElement);
    const slider = getElement('.button-group__slider', containerElement);

    function moveSliderTo(button) {


        const {offsetWidth, offsetHeight, offsetLeft, offsetTop} = button;

        slider.style.width = `${offsetWidth}px`;
        slider.style.height = `${offsetHeight}px`;
        slider.style.transform = `translate(${offsetLeft}px, ${offsetTop}px)`;
    }


    moveSliderTo(activeButton);


    buttons.forEach(button => {
        button.addEventListener('click', () => {
            buttons.forEach(b => classManipulator(b, 'remove', 'button-group__button_active'));
            classManipulator(button, 'add', 'button-group__button_active');
            activeButton = button;

            moveSliderTo(activeButton);
        });
    });
}
