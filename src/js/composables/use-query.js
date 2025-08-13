/**
 * Provides utilities for working with URL query parameters and slugs in the browser.
 *
 * Allows getting, setting, appending, deleting, and clearing query parameters,
 * as well as navigating with query strings or extracting the last URL segment (slug).
 *
 * @returns {{
 *   getAllParams: () => Object<string, string>,
 *   clearAllParams: () => void,
 *   getParam: (key: string) => string|null,
 *   setParam: (key: string, value: string) => void,
 *   addParam: (key: string, value: string) => void,
 *   deleteParam: (key: string) => void,
 *   goToPage: (url: string, params: Object<string, string>) => void,
 *   getSlug: () => string
 * }}
 */
export function useQuery() {
  /**
   * Returns all query parameters from the current URL as a plain object.
   *
   * @returns {Object<string, string>} An object of all query params.
   */
  function getAllParams() {
    const params = new URLSearchParams(window.location.search)
    const result = {}
    params.forEach(function (value, key) {
      result[key] = value
    })
    return result
  }

  /**
   * Removes all query parameters from the current URL without reloading the page.
   */
  function clearAllParams() {
    const url = new URL(window.location.href)
    url.search = ''
    window.history.replaceState(null, '', url.toString())
  }

  /**
   * Retrieves a specific query parameter from the current URL.
   *
   * @param {string} key - The name of the parameter to retrieve.
   * @returns {string|null} The parameter value or null if not found.
   */
  function getParam(key) {
    const params = new URLSearchParams(window.location.search)
    return params.get(key)
  }

  /**
   * Sets or replaces a query parameter in the current URL.
   * Updates browser history without page reload.
   *
   * @param {string} key - Parameter name.
   * @param {string} value - Parameter value.
   */
  function setParam(key, value) {
    const url = new URL(window.location.href)
    const params = new URLSearchParams(url.search)
    params.set(key, value)
    url.search = params.toString()
    window.history.replaceState(null, '', url.toString())
  }

  /**
   * Appends a query parameter to the current URL.
   * Does not remove existing values with the same key.
   *
   * @param {string} key - Parameter name.
   * @param {string} value - Parameter value.
   */
  function addParam(key, value) {
    const url = new URL(window.location.href)
    const params = new URLSearchParams(url.search)
    params.append(key, value)
    url.search = params.toString()
    window.history.replaceState(null, '', url.toString())
  }

  /**
   * Deletes a query parameter from the current URL.
   * Updates browser history without reload.
   *
   * @param {string} key - Parameter name to remove.
   */
  function deleteParam(key) {
    const url = new URL(window.location.href)
    const params = new URLSearchParams(url.search)
    params.delete(key)
    url.search = params.toString()
    window.history.replaceState(null, '', url.toString())
  }

  /**
   * Navigates to a new URL and appends given parameters as a query string.
   *
   * @param {string} url - Base URL to navigate to.
   * @param {Object<string, string>} params - Query parameters to append.
   */
  function goToPage(url, params) {
    for (const key in params) {
      url += `${key}=${params[key]}&`
    }
    window.location.href = url.replace(/&$/, '')
  }

  /**
   * Returns the last segment (slug) of the current pathname.
   *
   * @returns {string} The last segment of the URL path.
   */
  function getSlug() {
    return window.location.pathname.split('/').pop()
  }

  return {
    getAllParams,
    clearAllParams,
    getParam,
    setParam,
    addParam,
    deleteParam,
    goToPage,
    getSlug,
  }
}
