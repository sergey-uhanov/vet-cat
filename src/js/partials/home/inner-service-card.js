import { getServiceCards } from '@/js/partials/home/servise-list-request.js'
import { renderServiceCards } from '@/js/partials/home/render-service-cards.js'

export async function innerServiceCard() {
  try {
    const data = await getServiceCards()
    renderServiceCards(data)
  } catch (err) {
    console.error(err)
  }
}
