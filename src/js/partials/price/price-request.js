import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "#/firebase.js";

export async function priceRequest(paramReq) {
    try {

        const priceCollection = collection(db, "price");


        const q = paramReq
            ? query(priceCollection, where("title", "==", paramReq))
            : query(priceCollection);

        const querySnapshot = await getDocs(q);


        return querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));

    } catch (e) {
        console.error("Ошибка при получении документов:", e);
    }
}
