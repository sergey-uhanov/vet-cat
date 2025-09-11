import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '#/firebase.js'

export async function workTimeRequest(filter) {
  try {
    const priceCollection = collection(db, 'work-time')

    const q = query(priceCollection, where('location', '==', filter))

    const querySnapshot = await getDocs(q)

    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }))
  } catch (e) {
    console.error('Ошибка при получении документов:', e)
  }
}
