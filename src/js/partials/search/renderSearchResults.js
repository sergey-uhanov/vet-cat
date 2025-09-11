import { getElement } from '@/js/composables/dom-manipulator.js'
import { useQuery } from '@/js/composables/use-query.js'

const vetClinicSearchData = [
  {
    type: 'Сотрудники',
    title: 'Хирургия',
    text: 'Хирургия | Ветеринарный центр «ВетКэт» Хирургия Записывайтесь на прием к врачам хирургам',
    href: '/employee/surgery',
  },
  {
    type: 'Услуги',
    title: 'Хирургия',
    text: 'Хирургия — процесс, осуществляемый с целью лечения заболеваний у животных. Ветеринарный хирург — это специалист по операциям. Как правило именно с хирурга начинается сложный случай. Он произведет осмотр и назначит операцию...',
    href: '/service/surgery',
  },
  {
    type: 'Петрова Анна Сергеевна',
    title: 'Петрова Анна Сергеевна',
    text: '... государственную академию ветеринарной медицины в 2015 году. Профессиональные интересы: хирургия, травматология.',
    href: '/doctor/petрова',
  },
  {
    type: 'Ветклиника «Здоровье»',
    title: 'Ветклиника «Здоровье»',
    text: 'Ветклиника «Здоровье» предлагает услуги хирурга для кошек и собак. Специализируется на минимально инвазивной хирургии...',
    href: '/clinic/zdorovie',
  },
  {
    type: 'Услуги',
    title: 'Стерилизация',
    text: 'Стерилизация включает хирургическое удаление репродуктивных органов. Проводится квалифицированными хирургами под анестезией...',
    href: '/service/sterilization',
  },
]

export function renderSearchResults(searchQuery) {
  if (searchQuery.length === 0) return

  const container = getElement('.search__result-container')
  const valueContainer = getElement('.search__quantity-search-value')
  const query = useQuery()
  query.setParam('query', searchQuery)
  const filteredResults = vetClinicSearchData.filter(item => item.text.includes(searchQuery))

  valueContainer.innerText = filteredResults.length

  container.innerHTML = ''

  if (filteredResults.length !== 0) {
    filteredResults.forEach(item => {
      const resultsHtml = `
      <a class="search__result-item item-result" href="${item.href}">
        <p class="item-result__type">${item.type}</p>
        <p class="item-result__title">${item.title}</p>
        <p class="item-result__text">${item.text}</p>
      </a>
    `

      container.insertAdjacentHTML('beforeend', resultsHtml)
    })
    return
  }

  container.innerHTML = '<p class="search__not-found">Ничего не найденно!</p>'
}
