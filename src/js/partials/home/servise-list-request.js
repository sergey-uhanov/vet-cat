import {collection, getDocs} from "firebase/firestore";
import {db} from "#/firebase.js";


export async function getServiceCards() {
    const querySnapshot = await getDocs(collection(db, "cards-services"));
    return querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }));
}
