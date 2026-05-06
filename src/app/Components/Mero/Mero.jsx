'use client';
import Image from 'next/image';
import styles from './Mero.module.scss';

// ——— РАСПИСАНИЕ МЕРОПРИЯТИЙ ———
// Меняйте только этот массив: добавляйте/удаляйте дни и события
const SCHEDULE_TITLE = 'в апреле';

const EVENTS = [
    {
        date: '10 мая',
        weekday: 'Воскресенье',
        firstCard: true,
        events: [
            { time: '14:00', name: 'Мастер‑класс по бабл-ти' },
        ],
    },
    {
        date: '11 мая',
        weekday: 'Понедельник',
        events: [
            { time: '14:00', name: 'Квест «Сокровища Люмика»' },
        ],
    },
    {
        date: '16 мая',
        weekday: 'Суббота',
        cardPurple: true,
        registrationFormUrl: 'https://forms.gle/uGDcSQCScTzvgzmq9',
        events: [
            { time: '14:00', name: 'Детский фотодень Pro Fashion Models d Минидино & Lumiland' }
        ],
    },
    {
        date: '17 мая',
        weekday: 'Воскресенье',
        events: [
            { time: '14:00', name: 'Мастер‑класс по бабл-ти' },
        ],
    },
    {
        date: '23 мая',
        weekday: 'Суббота',
        events: [
            { time: '14:00', name: 'День рождения зубной пасты: квест и мастер-классы для родителей! Lumiland & Cosmodent' },
        ],
    },
    {
        date: '24 мая',
        weekday: 'Воскресенье',
        events: [
            { time: '14:00', name: 'Мастер‑класс по бабл-ти' },
        ],
    },
    {
        date: '29 мая',
        weekday: 'Пятница',
        events: [
            { time: '18:00', name: 'Общегородской выпускной: танцуем six-seven' }
        ],
    },
    {
        date: '30 мая',
        weekday: 'Суббота',
        events: [
            { time: '14:00', name: 'Квест «Сокровища Люмика»' },
        ],
    },
    {
        date: '31 мая',
        weekday: 'Воскресенье',
        events: [
            { time: '14:00', name: 'Мастер‑класс по бабл-ти' },
        ],
    },
];

export default function Mero() {
    return (
        <div className={styles.container} id="mero">
            <h1 className={styles.titleDesktop}>
                Мероприятия Lumiland <br /> <span>{SCHEDULE_TITLE}</span>
            </h1>
            <h1 className={styles.titleMobile}>
                <span>Мероприятия</span> <br /> Lumiland
            </h1>

            <div className={styles.grid}>
                {EVENTS.map((day, index) => (
                    <div
                        key={`${day.date}-${index}`}
                        className={`${styles.dayCard} ${day.firstCard ? styles.firstCard : ''} ${day.cardPurple ? styles.cardPurple : ''}`}
                    >
                        <div className={`${styles.header} ${day.cardPurple ? styles.headerPurple : ''}`}>
                            <div className={styles.date}>{day.date}</div>
                            <div className={styles.weekday}>{day.weekday}</div>
                        </div>
                        {day.events.map((event, eventIndex) => (
                            <div key={eventIndex} className={styles.eventRow}>
                                <div className={styles.timeCol}>{event.time}</div>
                                <div className={styles.dot}>•</div>
                                <div className={styles.contentCol}>
                                    <span className={styles.eventName}>{event.name}</span>
                                </div>
                            </div>
                        ))}
                        {day.registrationFormUrl && (
                            <a
                                href={day.registrationFormUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.tournamentBtnCard}
                            >
                                Записаться
                            </a>
                        )}
                    </div>
                ))}
            </div>

            <Image
                className={styles.back}
                src="/images/Mero/Grad.png"
                width={1000}
                height={1000}
                alt=""
            />
        </div>
    );
}
