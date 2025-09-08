import fs from 'fs';
import path from 'path';
import admin from 'firebase-admin';

const SERVICE_PATH = path.resolve('./tools/seed/adminsdk.json');


if (!fs.existsSync(SERVICE_PATH)) {
    console.error('Service account file not found at', SERVICE_PATH);
    process.exit(1);
}
const serviceAccount = JSON.parse(fs.readFileSync(SERVICE_PATH, 'utf8'));


if (!admin.apps.length) {
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
    });
}
const db = admin.firestore();


const items = [
    {
        id: "FrUbdMJMMbPQ34543",
        linkWebp: 'story.webp',
        linkPng: 'story.png',
        title: 'Непростое лечение перелома нижней челюсти у кошки Маруськи',
        date: '2018-05-07',
    },
    {
        id: "FrUbdMJMMbPQ345454",
        linkWebp: 'story2.webp',
        linkPng: 'story2.png',
        title: 'Отравление немытым виноградом у пекинеса Гремлина',
        date: '2018-05-07',
    },
    {
        id: "FrUbdMJMMbP3453453",
        linkWebp: 'story3.webp',
        linkPng: 'story3.png',
        title: 'Патологические роды и кесарево сечение у крысы Анфисы',
        date: '2018-05-07',
    },
    {
        id: "FrUbdMJMMb45756",
        linkWebp: 'story4.webp',
        linkPng: 'story4.png',
        title: 'Острый панкреатит у йоркширского терьера  Луи II Саксонского',
        date: '2018-05-07',
    },
    {
        id: "FrUbdMJMMbPQ4553453",
        linkWebp: 'story.webp',
        linkPng: 'story.png',
        title: 'Непростое лечение перелома нижней челюсти у кошки Маруськи',
        date: '2018-05-07',
    },
    {
        id: "FrUbdMJM456456454",
        linkWebp: 'small-img-card1.webp',
        linkPng: 'small-img-card1.png',
        title: 'Отравление немытым виноградом у пекинеса Гремлина',
        date: '2018-05-07',
    },
    {
        id: "FrUbd8767453453",
        linkWebp: 'small-img-card2.webp',
        linkPng: 'small-img-card2.png',
        title: 'Патологические роды и кесарево сечение у крысы Анфисы',
        date: '2018-05-07',
    },
    {
        id: "FrU7899877895756",
        linkWebp: 'small-img-card3.webp',
        linkPng: 'small-img-card3.png',
        title: 'Острый панкреатит у йоркширского терьера  Луи II Саксонского',
        date: '2018-05-07',
    },
];


const CHUNK = 500;
const chunk = (arr, size) => {
    const out = [];
    for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
    return out;
};

async function insertBatch(collectionName, arr) {
    const parts = chunk(arr, CHUNK);
    for (let i = 0; i < parts.length; i++) {
        const batch = db.batch();
        parts[i].forEach(item => {
            const docRef = db.collection(collectionName).doc(item.id || undefined);
            batch.set(docRef, item);
        });
        await batch.commit();
        console.log(`Committed batch ${i + 1}/${parts.length}`);
    }
}

(async () => {
    try {
        await insertBatch('истории-статьи', items);
        console.log('Seeding finished');
        process.exit(0);
    } catch (err) {
        console.error('Seeding error:', err);
        process.exit(1);
    }
})();


//node --experimental-json-modules tools/seed/seed-stories-cards.mjs