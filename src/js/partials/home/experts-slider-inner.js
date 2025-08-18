import {collection, getDocs} from "firebase/firestore";
import {db} from "../../../../firebase.js";
import {getElement} from "@/js/composables/dom-manipulator.js";
import {renderImgCart} from "@/js/ui/render-img-cards.js";

export async function expertsSliderInner() {
    const container = getElement('.expert-slider')
    const wrapper = getElement('.swiper-wrapper', container)

    try {
        const querySnapshot = await getDocs(collection(db, "cards-experts"));
        const data = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));

        data.forEach(item => {
            wrapper.insertAdjacentHTML('beforeend', renderImgCart(item));
        })
    } catch (e) {
        console.error(e)
    }
}

