
export function useQuery() {

  function getAllParams() {
    const params = new URLSearchParams(window.location.search)
    const result = {}
    params.forEach(function (value, key) {
      result[key] = value
    })
    return result
  }


  function clearAllParams() {
    const url = new URL(window.location.href)
    url.search = ''
    window.history.replaceState(null, '', url.toString())
  }


  function getParam(key) {
    const params = new URLSearchParams(window.location.search)
    return params.get(key)
  }


  function setParam(key, value) {
    const url = new URL(window.location.href)
    const params = new URLSearchParams(url.search)
    params.set(key, value)
    url.search = params.toString()
    window.history.replaceState(null, '', url.toString())
  }


  function addParam(key, value) {
    const url = new URL(window.location.href)
    const params = new URLSearchParams(url.search)
    params.append(key, value)
    url.search = params.toString()
    window.history.replaceState(null, '', url.toString())
  }


  function deleteParam(key) {
    const url = new URL(window.location.href)
    const params = new URLSearchParams(url.search)
    params.delete(key)
    url.search = params.toString()
    window.history.replaceState(null, '', url.toString())
  }


  function goToPage(url, params) {
    for (const key in params) {
      url += `${key}=${params[key]}&`
    }
    window.location.href = url.replace(/&$/, '')
  }


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
