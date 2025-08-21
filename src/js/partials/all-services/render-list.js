import {collection, getDocs} from "firebase/firestore";
import {db} from "../../../../firebase.js";
import {getElement} from "@/js/composables/dom-manipulator.js";

export async function renderList() {
    const container = getElement('.list-services__list')
    try {
        const querySnapshot = await getDocs(collection(db, "all-services"));
        const data = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));

        data.forEach(doc => {

            const element = `<li class="list-services__item">
            <a class="list-services__link" href="${doc.link}">${doc.title}</a>
        </li>`

            container.insertAdjacentHTML('beforeend', element);
        })
    }catch(err) {
        console.error(err)
    }
}