import { Quest } from "./models";
import raft from './img/raft.jpg';
import ring from './img/ring.png';
import dog from './img/dog.png';
import blackbox from './img/blackbox.png';

const quests = [] as Quest[];
quests.push({
    id: 1,
    energy: 20,
    text: "Коли це було?",
    pictureUrl: raft,
    answers: [
        "10.11.2023",
        "03.12.2023",
        "03.11.2023",
        "10.12.2023"
    ],
    correctAnswer: "03.12.2023"
});
quests.push({
    id: 2,
    energy: 10,
    text: "Коли це було?",
    pictureUrl: ring,
    answers: [
        "2019",
        "2020",
        "2021",
        "2022",
    ],
    correctAnswer: "2020"
});
quests.push({
    id: 3,
    energy: 10,
    text: "[для Феді] Вибрати правильний Instagram",
    pictureUrl: null,
    answers: [
        "tsvetusik",
        "svetusikk",
        "svetusik_t",
        "svetusik_k",
        "svetusikt"
    ],
    correctAnswer: "svetusikt"
});
quests.push({
    id: 4,
    energy: 10,
    text: "[для Свєти] Вибрати правильний Instagram",
    pictureUrl: null,
    answers: [
        "fedir1357",
        "fedir1257",
        "fedir1456",
        "fedir1356",
        "fedir1367"
    ],
    correctAnswer: "fedir1357"
});
quests.push({
    id: 5,
    energy: 15,
    text: "Відправити нам ваше фото на фоні квесту",
    pictureUrl: null,
    answers: [
        "2817",
        "1321",
        "1214",
        "9234",
        "1542",
        "4215"
    ],
    correctAnswer: "2817"
});
quests.push({
    id: 6,
    energy: 10,
    text: "Відстаннь вашої крайньої поїздки (в 1 сторону)",
    pictureUrl: null,
    answers: [
        "231км",
        "128км",
        "212км",
        "98км",
        "415км"
    ],
    correctAnswer: "128км"
});
quests.push({
    id: 7,
    energy: 10,
    text: "Хто це?",
    pictureUrl: dog,
    answers: [
        "Гай",
        "Чай",
        "Кай",
        "Алабай"
    ],
    correctAnswer: "Кай"
});
quests.push({
    id: 8,
    energy: 15,
    text: "Що в чорному ящику",
    pictureUrl: blackbox,
    answers: [
        "Шампанське",
        "Запасне колесо",
        "Віник",
        "Лопата",
        "Собака",
    ],
    correctAnswer: "Лопата"
});
quests.push({
    id: 9,
    energy: 10,
    text: "Топ 1 учасник бесіди по кількості повідомлень (з кінця)",
    pictureUrl: null,
    answers: [
        "Ігор М.",
        "Каріна",
        "Федя",
        "Міша",
        "Свєта",
        "Ігор Г.",
        "Сергій",
    ],
    correctAnswer: "Ігор Г."
});

export default quests;