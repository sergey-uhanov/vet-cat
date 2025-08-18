
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyDOWFazlwHsZjgXU5a-7EuHuSOO3o_U2Gg",
    authDomain: "vet-cat.firebaseapp.com",
    projectId: "vet-cat",
    storageBucket: "vet-cat.firebasestorage.app",
    messagingSenderId: "1058557590103",
    appId: "1:1058557590103:web:0918d3d62a4451a0568112"
};


const app = initializeApp(firebaseConfig);



export const db = getFirestore(app);
