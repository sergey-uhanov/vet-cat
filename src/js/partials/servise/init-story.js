import { storyRequest } from '@/js/partials/servise/story-request.js'
import { getElement, renderElement } from '@/js/composables/dom-manipulator.js'
import { renderStoryBlock } from '@/js/partials/servise/render-story-block.js'
import { useQuery } from '@/js/composables/use-query.js'

export async function initStory() {
  const base = process.env.NODE_ENV === 'production' ? '/vet-cat/' : ''
  const titleContainer = getElement('.story__title')
  const imgWrapper = getElement('.story__img-wrapper')
  const picture = getElement('picture', imgWrapper)
  const source = renderElement('source')
  const img = renderElement('img')
  const lastLink = getElement('.breadcrumbs').lastElementChild
  const useQueryParams = useQuery()

  const paramReq = useQueryParams.getParam('story')

  const data = await storyRequest(paramReq)

  titleContainer.innerText = data.title
  img.src = `${base}${data.img}`
  img.alt = 'animal'
  img.width = '824'
  img.height = '360'
  source.srcset = `${base}${data.imgWebp}`
  source.type = 'image/webp'
  picture.appendChild(source)
  picture.appendChild(img)
  document.title = data.title
  lastLink.innerText = data.title

  getElement('.story__text-block').appendChild(renderStoryBlock(data))
}
