import {collection, getDocs, query} from "firebase/firestore";
import {db} from "#/firebase.js";

export async function allServiceTitlesRequest() {
    try {
        const priceCollection = collection(db, "price");

        const querySnapshot = await getDocs(query(priceCollection));


        return querySnapshot.docs
            .map(doc => doc.data().title)
            .filter(Boolean);

    } catch (e) {
        console.error("Ошибка при получении документов:", e);

    }
}