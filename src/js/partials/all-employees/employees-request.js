import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '#/firebase.js'

export async function employeesRequest(location, expertise) {
  try {
    let q = collection(db, 'cards-experts')
    const conditions = []

    if (location && location !== 'Везде') {
      conditions.push(where('location', '==', location))
    }

    if (expertise && expertise !== 'Все специализации') {
      conditions.push(where('expertise', '==', expertise))
    }

    q = query(q, ...conditions)

    const querySnapshot = await getDocs(q)

    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }))
  } catch (error) {
    console.error('Ошибка при получении сотрудников:', error)
    return []
  }
}
