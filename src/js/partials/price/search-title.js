import { collection, getDocs, query, orderBy, startAt, endAt } from "firebase/firestore";
import {db} from "#/firebase.js";


export async function searchByTitle(searchText) {
    if (!searchText) return [];

    const q = query(
        collection(db, "price"),
        orderBy("title"),
        startAt(searchText),
        endAt(searchText + "\uf8ff")
    );

    const querySnapshot = await getDocs(q);

    return querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }));
}
