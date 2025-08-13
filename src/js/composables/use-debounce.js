/**
 * Creates and returns a debounced version of the provided function.
 * The debounced function delays the execution of `func` until after `wait` milliseconds
 * have elapsed since the last time it was invoked.
 *
 * Optionally, if `immediate` is `true`, the function is triggered on the leading edge
 * instead of the trailing.
 *
 * @param {Function} func - The function to debounce.
 * @param {number} wait - The number of milliseconds to delay.
 * @param {boolean} [immediate=false] - If true, triggers the function on the leading edge.
 * @returns {Function} A debounced version of the original function.
 */
export const useDebounce = (func, wait, immediate) => {
  let timeout

  return (...args) => {
    const context = this
    const later = function () {
      timeout = null
      if (!immediate) func.apply(context, args)
    }
    const callNow = immediate && !timeout

    clearTimeout(timeout)
    timeout = setTimeout(later, wait)

    if (callNow) func.apply(context, args)
  }
}
