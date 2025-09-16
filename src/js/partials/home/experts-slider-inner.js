import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '#/firebase.js'
import { getElement } from '@/js/composables/dom-manipulator.js'
import { renderImgCart } from '@/js/ui/render-img-cards.js'

export async function expertsSliderInner(params) {
  const container = getElement('.expert-slider')
  const wrapper = getElement('.swiper-wrapper', container)
  console.log(params)
  try {
    const q = query(collection(db, 'cards-experts'), ...(params ? [where('location', '==', params)] : []))

    const querySnapshot = await getDocs(q)

    const data = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }))

    wrapper.innerHTML = ''

    console.log(data)

    data.forEach(item => {
      wrapper.insertAdjacentHTML('beforeend', renderImgCart(item))
    })
  } catch (e) {
    console.error(e)
  }
}
