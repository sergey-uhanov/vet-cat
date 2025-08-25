import {collection, getDocs} from "firebase/firestore";
import {db} from "#/firebase.js";
import {getElement} from "@/js/composables/dom-manipulator.js";
import {renderSmallImgCard} from "@/js/ui/render-small-img-card.js";

export async function storiesSliderInner() {

    const wrapper = getElement('.swiper-wrapper', getElement('.stories-slider'))

    try {
        const querySnapshot = await getDocs(collection(db, "cards-stories"));
        const data = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));

        data.forEach(item => {
            wrapper.insertAdjacentHTML('beforeend', renderSmallImgCard(item));
        })
    } catch (e) {
        console.error(e)
    }
}

