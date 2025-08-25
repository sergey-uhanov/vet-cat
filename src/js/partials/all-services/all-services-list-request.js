import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "#/firebase.js";

export async function allServicesListRequest(params) {

    try {
        const queryReq = query(
            collection(db, "all-services"),
            params? where("type", "==", params) : null
        );

        const querySnapshot = await getDocs(queryReq);

        return querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));

    } catch (err) {
        console.error("Ошибка при получении данных:", err);
        return [];
    }
}
