/**
 * Manipulates the class list of a DOM element.
 *
 * Supported actions: 'add', 'remove', 'toggle', 'toggleBoolean', 'contains'.
 *
 * @param {Element} element - The target DOM element.
 * @param {'add'|'remove'|'toggle'|'toggleBoolean'|'contains'} action - The class manipulation action.
 * @param {string} className - The class name to apply.
 * @param {boolean} [toggleValue=true] - Used only with 'toggleBoolean'; determines whether to add or remove the class.
 * @returns {boolean|undefined} Returns a boolean for 'contains', otherwise undefined.
 */
function classManipulator(element, action, className, toggleValue = true) {
  if (element && className) {
    const actions = {
      add: () => element.classList.add(className),
      remove: () => element.classList.remove(className),
      toggle: () => element.classList.toggle(className),
      toggleBoolean: () => element.classList.toggle(className, toggleValue),
      contains: () => element.classList.contains(className),
    }

    if (actions[action]) {
      return actions[action]()
    }
  }
}

/**
 * Selects multiple elements matching the CSS selector within the given target.
 *
 * @param {string} elements - The CSS selector to match.
 * @param {ParentNode} [target=document] - The target DOM node to search within.
 * @returns {NodeListOf<Element>} A NodeList of matched elements.
 */
function getElements(elements, target = document) {
  return target.querySelectorAll(elements)
}

/**
 * Selects a single element matching the CSS selector within the given target.
 *
 * @param {string} element - The CSS selector to match.
 * @param {ParentNode} [target=document] - The target DOM node to search within.
 * @returns {Element|null} The matched element, or null if not found.
 */
function getElement(element, target = document) {
  if (!target) return null
  return target.querySelector(element)
}

/**
 * Gets an element by its ID.
 *
 * @param {string} element - The ID of the element to retrieve.
 * @returns {HTMLElement|null} The element with the specified ID, or null if not found.
 */
function getElementId(element) {
  return document.getElementById(element)
}

/**
 * Gets elements by class name within the given target.
 *
 * @param {string} element - The class name to match.
 * @param {ParentNode} [target=document] - The target DOM node to search within.
 * @returns {HTMLCollectionOf<Element>} A live HTMLCollection of found elements.
 */
function getElementsByClassName(element, target = document) {
  return target.getElementsByClassName(element)
}

/**
 * Creates a new DOM element and optionally adds one or more class names.
 *
 * @param {string} element - The tag name of the element to create.
 * @param {string|string[]|null} [elementsClass=null] - A class name or array of class names to add.
 * @returns {HTMLElement} The created DOM element.
 */
function renderElement(element, elementsClass = null) {
  const domElement = document.createElement(element)

  if (elementsClass) {
    if (Array.isArray(elementsClass)) {
      elementsClass.forEach(item => classManipulator(domElement, 'add', item))
      return domElement
    }

    classManipulator(domElement, 'add', elementsClass)
  }

  return domElement
}

/**
 * Removes the active class from all matching elements and adds it to the specified element.
 *
 * @param {Element} element - The element to mark as active.
 * @param {string} elementsClass - The CSS selector for the group of elements.
 * @param {string} activeClass - The class name to designate the active element.
 */
function addActiveClass(element, elementsClass, activeClass) {
  const allCards = getElements(elementsClass)

  allCards.forEach(card => classManipulator(card, 'remove', activeClass))

  classManipulator(element, 'add', activeClass)
}

export {
  classManipulator,
  getElements,
  getElement,
  renderElement,
  getElementId,
  addActiveClass,
  getElementsByClassName,
}
