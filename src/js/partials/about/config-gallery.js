import { Fancybox } from '@fancyapps/ui/dist/fancybox/'
import '@fancyapps/ui/dist/fancybox/fancybox.css'
import { getElement, getElements, renderElement } from '@/js/composables/dom-manipulator.js'
import { moveSliderTo } from '@/js/ui/selection-button-group.js'
import { airDatepicker } from '@/js/widgets/appointment-popup/air-datepicker.js'

export function configGallery() {
  const fixedCaptionEl = renderElement('div', 'fixed-gallery-caption')

  const cards = getElements('.gallery__slide')
  cards.forEach(card => {
    card.addEventListener('click', () => {
      const source = getElement('.gallery__slide-text', card)
      fixedCaptionEl.innerHTML = source.innerHTML
    })
  })

  Fancybox.bind('[data-fancybox]', {
    mainStyle: {
      '--f-button-bg': 'transparent',
      '--f-thumb-width': '96px',
      '--f-thumb-height': '64px',
      '--f-thumb-opacity': '0.3',
      '--f-thumb-hover-opacity': '1',
      '--f-thumb-selected-opacity': '1',
      '--f-thumb-selected-shadow': 'inset 0 0 0 3px #1dc3b0',
      '--f-arrow-border-radius': '16px',
      '--f-arrow-bg': '#1dc3b0',
      '--f-button-color': '#1dc3b0',
    },

    Carousel: {
      zoomEffect: false,
      on: {
        init: e => {
          setTimeout(() => {
            const fancybox = getElement('.fancybox__dialog')
            fancybox.append(fixedCaptionEl)
            airDatepicker()
          }, 1000)

          setTimeout(() => {
            moveSliderTo()
          }, 100)
        },
        destroy: fancybox => {
          fixedCaptionEl.textContent = ''
        },
      },
      Thumbs: {
        type: 'classic',
      },
      Toolbar: {
        display: {
          left: [],
          middle: [],
          right: ['close'],
        },
      },
    },
  })
}
