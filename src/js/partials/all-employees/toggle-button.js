import { classManipulator, getElements } from '@/js/composables/dom-manipulator.js'
import { useQuery } from '@/js/composables/use-query.js'

export async function toggleButton() {
  const buttons = getElements('.button_list-item')
  const queryUse = useQuery()

  buttons.forEach(button => {
    button.addEventListener('click', async () => {
      if (button.innerText === queryUse.getParam('Expert')) return
      console.log(1)
      console.log(button.innerText === queryUse.getParam('Expert'))
      queryUse.setParam('Expert', button.innerText)

      buttons.forEach(btn => {
        const activeExpertQuery = queryUse.getParam('Expert')
        btn.innerText === activeExpertQuery
          ? classManipulator(btn, 'add', 'button_list-item-active')
          : classManipulator(btn, 'remove', 'button_list-item-active')
      })
    })
  })
}
