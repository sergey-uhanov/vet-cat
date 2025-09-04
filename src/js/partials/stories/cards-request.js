import {renderSmallImgCard} from "@/js/ui/render-small-img-card.js";
import {collection, getDocs} from "firebase/firestore";
import {db} from "#/firebase.js";

export async function cardsRequest(){
    const querySnapshot = await getDocs(collection(db, "cards-stories"));
   return  querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }));
}