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

function getElements(elements, target = document) {
  return target.querySelectorAll(elements)
}

function getElement(element, target = document) {
  if (!target) return null
  return target.querySelector(element)
}

function getElementId(element) {
  return document.getElementById(element)
}

function getElementsByClassName(element, target = document) {
  return target.getElementsByClassName(element)
}

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
