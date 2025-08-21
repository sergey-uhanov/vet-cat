import {doc, getDoc} from "firebase/firestore";
import {db} from "../../../../firebase.js";

export async function storyRequest(paramReq) {
const param = paramReq || 'дерматология'
    try {
        const docRef = doc(db, "articles", param);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            return docSnap.data();
        }

    } catch (e) {
        console.error(e)
    }
}