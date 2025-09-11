import { getElement } from '@/js/composables/dom-manipulator'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

let map

export function initMap(position1, position2) {
  const container = getElement('#map')
  if (map) {
    map.remove()
  }
  container.innerHTML = ''

  map = L.map(container).setView([50.4194, 30.4809], 11)

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map)

  const popupContent = `
    <div class="info-window">
      <span>Дополнительная важная информация!</span>
      <strong>Кто грустит тот трансвистит</strong>
    </div>
  `

  if (position1) {
    const icon1 = L.icon({
      iconUrl: new URL('/img/map/1.png', import.meta.url).href,
    })
    const marker1 = L.marker([position1.lat, position1.lng], {
      icon: icon1,
      title: 'Первая точка',
    }).addTo(map)
    marker1.bindPopup(popupContent)
  }

  if (position2) {
    const icon2 = L.icon({
      iconUrl: new URL('/img/map/2.png', import.meta.url).href,
    })
    const marker2 = L.marker([position2.lat, position2.lng], {
      icon: icon2,
      title: 'Вторая точка',
    }).addTo(map)
    marker2.bindPopup(popupContent)
  }
}
