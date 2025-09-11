import { getElement } from '@/js/composables/dom-manipulator'
import { Loader } from '@googlemaps/js-api-loader'

const loader = new Loader({
  apiKey: 'AIzaSyAnK7hs2Wafw6R5Vt0TLBebz4C4eSqskWU',
  version: 'weekly',
  libraries: ['maps', 'marker'],
})

let map

export async function initMap() {
  console.log(1)
  const google = await loader.load()

  const position1 = { lat: 50.4194, lng: 30.4809 }
  const position2 = { lat: 50.444, lng: 30.619 }

  const beachFlagImg1 = document.createElement('img')
  beachFlagImg1.src = new URL('/img/map/1.png', import.meta.url).href

  const beachFlagImg2 = document.createElement('img')
  beachFlagImg2.src = new URL('/img/map/2.png', import.meta.url).href

  map = new google.maps.Map(getElement('#map'), {
    zoom: 11,
    center: position1,
    mapId: 'DEMO_MAP_ID',
  })

  const marker1 = new google.maps.marker.AdvancedMarkerElement({
    map,
    position: position1,
    title: 'Первая точка',
    content: beachFlagImg1,
  })

  const marker2 = new google.maps.marker.AdvancedMarkerElement({
    map,
    position: position2,
    title: 'Вторая точка',
    content: beachFlagImg2,
  })

  const infoWindow = new google.maps.InfoWindow({
    content: `
      <div class="info-window">
        <span>Дополнительная важная информация!</span>
        <strong>Кто грустит тот трансвистит</strong>
      </div>`,
  })

  marker1.addListener('click', () => {
    infoWindow.open({
      anchor: marker1,
      map,
    })
  })

  marker2.addListener('click', () => {
    infoWindow.open({
      anchor: marker2,
      map,
    })
  })
}
