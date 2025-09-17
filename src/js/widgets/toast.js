import { getElement, renderElement } from '@/js/composables/dom-manipulator.js'

export function createToast(message, { duration = 5000 } = {}) {
  const toast = renderElement('div', 'toast toast--hidden')
  toast.setAttribute('role', 'status')
  toast.setAttribute('aria-live', 'polite')

  toast.innerHTML = `
        <div class="toast__body">
          <div class="toast__icon">✓</div>
          <div class="toast__text">${message}</div>
          <button class="toast__close" aria-label="Закрыть">&times;</button>
        </div>
        <div class="toast__progress"><i></i></div>
      `

  document.body.appendChild(toast)

  const gap = +getComputedStyle(document.documentElement).getPropertyValue('--toast-gap') || 20
  const width = +getComputedStyle(toast).width || 320

  toast.style.left = `${(window.innerWidth - width) / 2}px`
  toast.style.top = `${gap}px`

  toast.getBoundingClientRect()

  requestAnimationFrame(() => {
    toast.classList.remove('toast--hidden')
  })

  const rect = toast.getBoundingClientRect()
  const targetLeft = window.innerWidth - gap - rect.width
  const targetTop = window.innerHeight - gap - rect.height

  const dx = Math.round(targetLeft - rect.left)
  const dy = Math.round(targetTop - rect.top)

  let moveAnim
  if (toast.animate) {
    moveAnim = toast.animate(
      [
        { transform: 'translate(0,0) scale(1)', opacity: 1 },
        { transform: `translate(${dx}px, ${dy}px) scale(1)`, opacity: 1 },
      ],
      {
        duration: 420,
        easing: 'cubic-bezier(.2,.9,.3,1)',
        fill: 'forwards',
      }
    )
  } else {
    toast.style.transform = `translate(${dx}px, ${dy}px)`
  }

  const prog = toast.querySelector('.toast__progress > i')
  let progAnim
  if (prog && prog.animate) {
    progAnim = prog.animate([{ transform: 'scaleX(1)' }, { transform: 'scaleX(0)' }], {
      duration: duration,
      easing: 'linear',
      fill: 'forwards',
    })
  } else if (prog) {
    prog.style.transition = `transform ${duration}ms linear`
    requestAnimationFrame(() => (prog.style.transform = 'scaleX(0)'))
  }

  const fadeOut = () => {
    const out = toast.animate(
      [
        { opacity: 1, transform: toast.style.transform || getComputedStyle(toast).transform },
        { opacity: 0, transform: (toast.style.transform || getComputedStyle(toast).transform) + ' scale(0.98)' },
      ],
      { duration: 300, easing: 'ease-in', fill: 'forwards' }
    )

    out.onfinish = () => {
      if (toast.parentNode) toast.parentNode.removeChild(toast)
    }
  }

  const timeoutId = setTimeout(() => {
    fadeOut()
  }, duration)

  getElement('.toast__close', toast).addEventListener('click', () => {
    clearTimeout(timeoutId)
    if (progAnim) progAnim.cancel()
    if (moveAnim) moveAnim.cancel()
    fadeOut()
  })

  return {
    element: toast,
    close: () => {
      clearTimeout(timeoutId)
      fadeOut()
    },
  }
}
