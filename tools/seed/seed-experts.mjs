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
        location: "Донской",
        id: "FrUbd34MJMMbPQfdgWd1mL6TL",
        imgLinkPng: "expert-photo11.png",
        imgLinkWebp: "expert-photo11.webp",
        lastName: "Ярославская",
        nextDate: [
            {date: "24 мая", time: "сутки, с 10:00"},
            {date: "24 мая", time: "сутки, с 10:00"}
        ],
        patronymic: "Ивановна",
        position: "Заведующая ветеринарным центром",
        expertise: 'Анестезиология'
    },
    {
        firstName: "Валерия",
        location: "Донской",
        id: "FrUbdMJMMbPQWdfdg1mL6T3",
        imgLinkPng: "expert-photo2.png",
        imgLinkWebp: "expert-photo2.webp",
        lastName: "Малицкая",
        nextDate: [
            {date: "24 мая", time: "сутки, с 10:00"},
            {date: "24 мая", time: "сутки, с 10:00"}
        ],
        patronymic: "Викторовна",
        position: "Главный ветеринарный врач",
        expertise: 'Гастроэнтерология'
    },
    {
        firstName: "Екатерина",
        location: "Донской",
        id: "FrU4bdMJMMbPQW54d1mL644",
        imgLinkPng: "expert-photo11.png",
        imgLinkWebp: "expert-photo11.webp",
        lastName: "Савченко",
        nextDate: [
            {date: "24 мая", time: "сутки, с 10:00"},
            {date: "24 мая", time: "12:00–18:00"}
        ],
        patronymic: "Ивановна",
        position: "Ветеринарный врач",
        expertise: 'Дерматология'
    },
    {
        firstName: "Екатерина",
        location: "Донской",
        id: "F5rUbdMJMMbPQ32Wd1mLdf6TL",
        imgLinkPng: "expert-photo11.png",
        imgLinkWebp: "expert-photo11.webp",
        lastName: "Ярославская",
        nextDate: [
            {date: "24 мая", time: "сутки, с 10:00"},
            {date: "24 мая", time: "сутки, с 10:00"}
        ],
        patronymic: "Ивановна",
        position: "Заведующая ветеринарным центром",
        expertise: 'Кардиология'
    },
    {
        firstName: "Валерия",
        location: "Донской",
        id: "FrUb2dMJMMbPQ33Wу4d1mL6T3",
        imgLinkPng: "expert-photo2.png",
        imgLinkWebp: "expert-photo2.webp",
        lastName: "Малицкая",
        nextDate: [
            {date: "24 мая", time: "сутки, с 10:00"},
            {date: "24 мая", time: "сутки, с 10:00"}
        ],
        patronymic: "Викторовна",
        position: "Главный ветеринарный врач",
        expertise: 'Лабораторная диагностика'
    },
    {
        firstName: "Екатерина",
        location: "Донской",
        id: "FrUbdMJMM345bPQWd4у1mL644",
        imgLinkPng: "expert-photo11.png",
        imgLinkWebp: "expert-photo11.webp",
        lastName: "Савченко",
        nextDate: [
            {date: "24 мая", time: "сутки, с 10:00"},
            {date: "24 мая", time: "12:00–18:00"}
        ],
        patronymic: "Ивановна",
        position: "Ветеринарный врач",
        expertise: 'Нефрология'
    },
    // --------------------
    {
        firstName: "Екатерина",
        location: "Донской",
        id: "FrUbd34MJMMbvbnvnvbnvbWd1mL6TL",
        imgLinkPng: "expert-photo11.png",
        imgLinkWebp: "expert-photo11.webp",
        lastName: "Ярославская",
        nextDate: [
            {date: "24 мая", time: "сутки, с 10:00"},
            {date: "24 мая", time: "сутки, с 10:00"}
        ],
        patronymic: "Ивановна",
        position: "Заведующая ветеринарным центром",
        expertise: 'Онкология'
    },
    {
        firstName: "Валерия",
        location: "Донской",
        id: "FrUbdMJMMbP5675678677687mL6T3",
        imgLinkPng: "expert-photo2.png",
        imgLinkWebp: "expert-photo2.webp",
        lastName: "Малицкая",
        nextDate: [
            {date: "24 мая", time: "сутки, с 10:00"},
            {date: "24 мая", time: "сутки, с 10:00"}
        ],
        patronymic: "Викторовна",
        position: "Главный ветеринарный врач",
        expertise: 'Ортопедия'
    },
    {
        firstName: "Екатерина",
        location: "Донской",
        id: "FrU4bdMJMMbPfbf678676mL644",
        imgLinkPng: "expert-photo11.png",
        imgLinkWebp: "expert-photo11.webp",
        lastName: "Савченко",
        nextDate: [
            {date: "24 мая", time: "сутки, с 10:00"},
            {date: "24 мая", time: "12:00–18:00"}
        ],
        patronymic: "Ивановна",
        position: "Ветеринарный врач",
        expertise: 'Офтальмология'
    },
    {
        firstName: "Екатерина",
        location: "Донской",
        id: "F5rUbdMJ34535435bPQ32Wd1mLdf6TL",
        imgLinkPng: "expert-photo11.png",
        imgLinkWebp: "expert-photo11.webp",
        lastName: "Ярославская",
        nextDate: [
            {date: "24 мая", time: "сутки, с 10:00"},
            {date: "24 мая", time: "сутки, с 10:00"}
        ],
        patronymic: "Ивановна",
        position: "Заведующая ветеринарным центром",
        expertise: 'Реанимация и интенсивная терапия'
    },
    {
        firstName: "Екатерина",
        location: "Донской",
        id: "FrUbd34MJffgdge45e4gfdWd1mL6TL",
        imgLinkPng: "expert-photo11.png",
        imgLinkWebp: "expert-photo11.webp",
        lastName: "Ярославская",
        nextDate: [
            {date: "24 мая", time: "сутки, с 10:00"},
            {date: "24 мая", time: "сутки, с 10:00"}
        ],
        patronymic: "Ивановна",
        position: "Заведующая ветеринарным центром",
        expertise: 'Рентгенография'
    },
    {
        firstName: "Валерия",
        location: "Донской",
        id: "FrUbdMJ567575ghjgjdg1mL6T3",
        imgLinkPng: "expert-photo2.png",
        imgLinkWebp: "expert-photo2.webp",
        lastName: "Малицкая",
        nextDate: [
            {date: "24 мая", time: "сутки, с 10:00"},
            {date: "24 мая", time: "сутки, с 10:00"}
        ],
        patronymic: "Викторовна",
        position: "Главный ветеринарный врач",
        expertise: 'Репродуктология'
    },
    {
        firstName: "Екатерина",
        location: "Донской",
        id: "FrUrrtyghn675677L644",
        imgLinkPng: "expert-photo11.png",
        imgLinkWebp: "expert-photo11.webp",
        lastName: "Савченко",
        nextDate: [
            {date: "24 мая", time: "сутки, с 10:00"},
            {date: "24 мая", time: "12:00–18:00"}
        ],
        patronymic: "Ивановна",
        position: "Ветеринарный врач",
        expertise: 'Стационар'
    },
    {
        firstName: "Екатерина",
        location: "Донской",
        id: "F5rUbdMJfbfg567567Ldf6TL",
        imgLinkPng: "expert-photo11.png",
        imgLinkWebp: "expert-photo11.webp",
        lastName: "Ярославская",
        nextDate: [
            {date: "24 мая", time: "сутки, с 10:00"},
            {date: "24 мая", time: "сутки, с 10:00"}
        ],
        patronymic: "Ивановна",
        position: "Заведующая ветеринарным центром",
        expertise: 'Стоматология'
    },
    {
        firstName: "Валерия",
        location: "Донской",
        id: "FrUb2dMJMMbvdfvfdfd4d1mL6T3",
        imgLinkPng: "expert-photo2.png",
        imgLinkWebp: "expert-photo2.webp",
        lastName: "Малицкая",
        nextDate: [
            {date: "24 мая", time: "сутки, с 10:00"},
            {date: "24 мая", time: "сутки, с 10:00"}
        ],
        patronymic: "Викторовна",
        position: "Главный ветеринарный врач",
        expertise: 'Терапия'
    },
    {
        firstName: "Екатерина",
        location: "Донской",
        id: "FrUbfvdfvd34578975bPQWd4у1mL644",
        imgLinkPng: "expert-photo11.png",
        imgLinkWebp: "expert-photo11.webp",
        lastName: "Савченко",
        nextDate: [
            {date: "24 мая", time: "сутки, с 10:00"},
            {date: "24 мая", time: "12:00–18:00"}
        ],
        patronymic: "Ивановна",
        position: "Ветеринарный врач",
        expertise: 'Травматология'
    },

    // **********************
    {
        firstName: "Екатерина",
        location: "Строгино",
        id: "FrUbdMJу4MMbPQWd1mL6TL",
        imgLinkPng: "expert-photo11.png",
        imgLinkWebp: "expert-photo11.webp",
        lastName: "Ярославская",
        nextDate: [
            {date: "24 мая", time: "сутки, с 10:00"},
            {date: "24 мая", time: "сутки, с 10:00"}
        ],
        patronymic: "Ивановна",
        position: "Заведующая ветеринарным центром",
        expertise: 'Травматология'
    },
    {
        firstName: "Валерия",
        location: "Строгино",
        id: "FrUbdMJMMbPQWd1mL6T3",
        imgLinkPng: "expert-photo2.png",
        imgLinkWebp: "expert-photo2.webp",
        lastName: "Малицкая",
        nextDate: [
            {date: "24 мая", time: "сутки, с 10:00"},
            {date: "24 мая", time: "сутки, с 10:00"}
        ],
        patronymic: "Викторовна",
        position: "Главный ветеринарный врач",
        expertise: 'Травматология'
    },
    {
        firstName: "Екатерина",
        location: "Строгино",
        id: "FrUbdMJMMbPQWd1mL644",
        imgLinkPng: "expert-photo11.png",
        imgLinkWebp: "expert-photo11.webp",
        lastName: "Савченко",
        nextDate: [
            {date: "24 мая", time: "сутки, с 10:00"},
            {date: "24 мая", time: "12:00–18:00"}
        ],
        patronymic: "Ивановна",
        position: "Ветеринарный врач",
        expertise: 'Травматология'
    },
    {
        firstName: "Екатерина",
        location: "Строгино",
        id: "FrUbdMJMMbPQWd1mLdf6TL",
        imgLinkPng: "expert-photo11.png",
        imgLinkWebp: "expert-photo11.webp",
        lastName: "Ярославская",
        nextDate: [
            {date: "24 мая", time: "сутки, с 10:00"},
            {date: "24 мая", time: "сутки, с 10:00"}
        ],
        patronymic: "Ивановна",
        position: "Заведующая ветеринарным центром",
        expertise: 'Травматология'
    },
    {
        firstName: "Валерия",
        location: "Строгино",
        id: "FrUbdMJMMbPQ33Wd1mL6T3",
        imgLinkPng: "expert-photo2.png",
        imgLinkWebp: "expert-photo2.webp",
        lastName: "Малицкая",
        nextDate: [
            {date: "24 мая", time: "сутки, с 10:00"},
            {date: "24 мая", time: "сутки, с 10:00"}
        ],
        patronymic: "Викторовна",
        position: "Главный ветеринарный врач",
        expertise: 'Травматология'
    },
    {
        firstName: "Екатерина",
        location: "Строгино",
        id: "FrUbdMJMM345bPQWd1mL644",
        imgLinkPng: "expert-photo11.png",
        imgLinkWebp: "expert-photo11.webp",
        lastName: "Савченко",
        nextDate: [
            {date: "24 мая", time: "сутки, с 10:00"},
            {date: "24 мая", time: "12:00–18:00"}
        ],
        patronymic: "Ивановна",
        position: "Ветеринарный врач",
        expertise: 'Травматология'
    },

    {
        firstName: "Екатерина",
        location: "Строгино",
        id: "FrUbdMJу4797897897d1mL6TL",
        imgLinkPng: "expert-photo11.png",
        imgLinkWebp: "expert-photo11.webp",
        lastName: "Ярославская",
        nextDate: [
            {date: "24 мая", time: "сутки, с 10:00"},
            {date: "24 мая", time: "сутки, с 10:00"}
        ],
        patronymic: "Ивановна",
        position: "Заведующая ветеринарным центром",
        expertise: 'Терапия'
    },
    {
        firstName: "Валерия",
        location: "Строгино",
        id: "FrUbdvbbcvb789890L6T3",
        imgLinkPng: "expert-photo2.png",
        imgLinkWebp: "expert-photo2.webp",
        lastName: "Малицкая",
        nextDate: [
            {date: "24 мая", time: "сутки, с 10:00"},
            {date: "24 мая", time: "сутки, с 10:00"}
        ],
        patronymic: "Викторовна",
        position: "Главный ветеринарный врач",
        expertise: 'Стоматология'
    },
    {
        firstName: "Екатерина",
        location: "Строгино",
        id: "FrUbdMJbghjhj8898L644",
        imgLinkPng: "expert-photo11.png",
        imgLinkWebp: "expert-photo11.webp",
        lastName: "Савченко",
        nextDate: [
            {date: "24 мая", time: "сутки, с 10:00"},
            {date: "24 мая", time: "12:00–18:00"}
        ],
        patronymic: "Ивановна",
        position: "Ветеринарный врач",
        expertise: 'Стационар'
    },
    {
        firstName: "Екатерина",
        location: "Строгино",
        id: "FrU6756756TL",
        imgLinkPng: "expert-photo11.png",
        imgLinkWebp: "expert-photo11.webp",
        lastName: "Ярославская",
        nextDate: [
            {date: "24 мая", time: "сутки, с 10:00"},
            {date: "24 мая", time: "сутки, с 10:00"}
        ],
        patronymic: "Ивановна",
        position: "Заведующая ветеринарным центром",
        expertise: 'Репродуктология'
    },
    {
        firstName: "Валерия",
        location: "Строгино",
        id: "FrUbdMJMMbPQ6yutyutyL6T3",
        imgLinkPng: "expert-photo2.png",
        imgLinkWebp: "expert-photo2.webp",
        lastName: "Малицкая",
        nextDate: [
            {date: "24 мая", time: "сутки, с 10:00"},
            {date: "24 мая", time: "сутки, с 10:00"}
        ],
        patronymic: "Викторовна",
        position: "Главный ветеринарный врач",
        expertise: 'Рентгенография'
    },
    {
        firstName: "Екатерина",
        location: "Строгино",
        id: "FrUbdM56456867878PQWd1mL644",
        imgLinkPng: "expert-photo11.png",
        imgLinkWebp: "expert-photo11.webp",
        lastName: "Савченко",
        nextDate: [
            {date: "24 мая", time: "сутки, с 10:00"},
            {date: "24 мая", time: "12:00–18:00"}
        ],
        patronymic: "Ивановна",
        position: "Ветеринарный врач",
        expertise: 'Офтальмология'
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