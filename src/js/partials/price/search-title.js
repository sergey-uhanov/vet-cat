import { collection, getDocs, query, orderBy, startAt, endAt } from "firebase/firestore";
import {db} from "#/firebase.js";


export async function searchByTitle(searchText) {
    if (!searchText) return [];

    const q = query(
        collection(db, "price")
    );

    const querySnapshot = await getDocs(q);

    const result = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }));

    console.log(result);
    console.log(searchText);
    return result.filter(item => item.title.toLowerCase().includes(searchText.toLowerCase()));
}
