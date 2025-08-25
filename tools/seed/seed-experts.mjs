
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
        firstName: "Екатерина",
        location:"донской",
        id: "FrUbd34MJMMbPQfdgWd1mL6TL",
        imgLinkPng: "expert-photo11.png",
        imgLinkWebp: "expert-photo11.webp",
        lastName: "Ярославская",
        nextDate: [
            { date: "24 мая", time: "сутки, с 10:00" },
            { date: "24 мая", time: "сутки, с 10:00" }
        ],
        patronymic: "Ивановна",
        position: "Заведующая ветеринарным центром"
    },
    {
        firstName: "Валерия",
        location:"донской",
        id: "FrUbdMJMMbPQWdfdg1mL6T3",
        imgLinkPng: "expert-photo2.png",
        imgLinkWebp: "expert-photo2.webp",
        lastName: "Малицкая",
        nextDate: [
            { date: "24 мая", time: "сутки, с 10:00" },
            { date: "24 мая", time: "сутки, с 10:00" }
        ],
        patronymic: "Викторовна",
        position: "Главный ветеринарный врач"
    },
    {
        firstName: "Екатерина",
        location:"донской",
        id: "FrU4bdMJMMbPQW54d1mL644",
        imgLinkPng: "expert-photo11.png",
        imgLinkWebp: "expert-photo11.webp",
        lastName: "Савченко",
        nextDate: [
            { date: "24 мая", time: "сутки, с 10:00" },
            { date: "24 мая", time: "12:00–18:00" }
        ],
        patronymic: "Ивановна",
        position: "Ветеринарный врач"
    },
    {
        firstName: "Екатерина",
        location:"донской",
        id: "F5rUbdMJMMbPQ32Wd1mLdf6TL",
        imgLinkPng: "expert-photo11.png",
        imgLinkWebp: "expert-photo11.webp",
        lastName: "Ярославская",
        nextDate: [
            { date: "24 мая", time: "сутки, с 10:00" },
            { date: "24 мая", time: "сутки, с 10:00" }
        ],
        patronymic: "Ивановна",
        position: "Заведующая ветеринарным центром"
    },
    {
        firstName: "Валерия",
        location:"донской",
        id: "FrUb2dMJMMbPQ33Wу4d1mL6T3",
        imgLinkPng: "expert-photo2.png",
        imgLinkWebp: "expert-photo2.webp",
        lastName: "Малицкая",
        nextDate: [
            { date: "24 мая", time: "сутки, с 10:00" },
            { date: "24 мая", time: "сутки, с 10:00" }
        ],
        patronymic: "Викторовна",
        position: "Главный ветеринарный врач"
    },
    {
        firstName: "Екатерина",
        location:"донской",
        id: "FrUbdMJMM345bPQWd4у1mL644",
        imgLinkPng: "expert-photo11.png",
        imgLinkWebp: "expert-photo11.webp",
        lastName: "Савченко",
        nextDate: [
            { date: "24 мая", time: "сутки, с 10:00" },
            { date: "24 мая", time: "12:00–18:00" }
        ],
        patronymic: "Ивановна",
        position: "Ветеринарный врач"
    },
    {
        firstName: "Екатерина",
        location:"строгино",
        id: "FrUbdMJу4MMbPQWd1mL6TL",
        imgLinkPng: "expert-photo11.png",
        imgLinkWebp: "expert-photo11.webp",
        lastName: "Ярославская",
        nextDate: [
            { date: "24 мая", time: "сутки, с 10:00" },
            { date: "24 мая", time: "сутки, с 10:00" }
        ],
        patronymic: "Ивановна",
        position: "Заведующая ветеринарным центром"
    },
    {
        firstName: "Валерия",
        location:"строгино",
        id: "FrUbdMJMMbPQWd1mL6T3",
        imgLinkPng: "expert-photo2.png",
        imgLinkWebp: "expert-photo2.webp",
        lastName: "Малицкая",
        nextDate: [
            { date: "24 мая", time: "сутки, с 10:00" },
            { date: "24 мая", time: "сутки, с 10:00" }
        ],
        patronymic: "Викторовна",
        position: "Главный ветеринарный врач"
    },
    {
        firstName: "Екатерина",
        location:"строгино",
        id: "FrUbdMJMMbPQWd1mL644",
        imgLinkPng: "expert-photo11.png",
        imgLinkWebp: "expert-photo11.webp",
        lastName: "Савченко",
        nextDate: [
            { date: "24 мая", time: "сутки, с 10:00" },
            { date: "24 мая", time: "12:00–18:00" }
        ],
        patronymic: "Ивановна",
        position: "Ветеринарный врач"
    },
    {
        firstName: "Екатерина",
        location:"строгино",
        id: "FrUbdMJMMbPQWd1mLdf6TL",
        imgLinkPng: "expert-photo11.png",
        imgLinkWebp: "expert-photo11.webp",
        lastName: "Ярославская",
        nextDate: [
            { date: "24 мая", time: "сутки, с 10:00" },
            { date: "24 мая", time: "сутки, с 10:00" }
        ],
        patronymic: "Ивановна",
        position: "Заведующая ветеринарным центром"
    },
    {
        firstName: "Валерия",
        location:"строгино",
        id: "FrUbdMJMMbPQ33Wd1mL6T3",
        imgLinkPng: "expert-photo2.png",
        imgLinkWebp: "expert-photo2.webp",
        lastName: "Малицкая",
        nextDate: [
            { date: "24 мая", time: "сутки, с 10:00" },
            { date: "24 мая", time: "сутки, с 10:00" }
        ],
        patronymic: "Викторовна",
        position: "Главный ветеринарный врач"
    },
    {
        firstName: "Екатерина",
        location:"строгино",
        id: "FrUbdMJMM345bPQWd1mL644",
        imgLinkPng: "expert-photo11.png",
        imgLinkWebp: "expert-photo11.webp",
        lastName: "Савченко",
        nextDate: [
            { date: "24 мая", time: "сутки, с 10:00" },
            { date: "24 мая", time: "12:00–18:00" }
        ],
        patronymic: "Ивановна",
        position: "Ветеринарный врач"
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
        await insertBatch('cards-experts', items);
        console.log('Seeding finished');
        process.exit(0);
    } catch (err) {
        console.error('Seeding error:', err);
        process.exit(1);
    }
})();


//node --experimental-json-modules tools/seed/seed-experts.mjs