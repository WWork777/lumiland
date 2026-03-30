'use client';
import Image from 'next/image';
import styles from './Mero.module.scss';

// ——— РАСПИСАНИЕ МЕРОПРИЯТИЙ ———
// Меняйте только этот массив: добавляйте/удаляйте дни и события
const SCHEDULE_TITLE = 'в марте';

const EVENTS = [
    {
        date: '3 апреля',
        weekday: 'Пятница',
        firstCard: true,
        events: [
            { time: '14:00', name: 'Мастер‑класс «Сотворим свой слайм!»' },
        ],
    },
    {
        date: '4 апреля',
        weekday: 'Суббота',
        registrationFormUrl: 'https://forms.gle/cE5fBUXGrSM37jXZ9',
        events: [
            { time: '14:00', name: 'Квест «Сокровища Люмика»' },
        ],
    },
    {
        date: '5 апреля',
        weekday: 'Воскресенье',
        events: [
            { time: '14:00', name: 'Провожаем каникулы ярко!Готовим вкусные коктейли и танцуем с Беззубиком!' }
        ],
    },
    {
        date: '12 апреля',
        weekday: 'Воскресенье',
        events: [
            { time: '14:00', name: 'Вперёд к звёздам! Космический квест для детей' },
        ],
    },
    {
        date: '18 апреля',
        weekday: 'Суботта',
        events: [
            { time: '14:00', name: 'Мастер‑класс «Сотворим свой слайм!»' },
        ],
    },
    {
        date: '19 апреля',
        weekday: 'Воскресенье',
        cardPurple: true,
        events: [
            { time: '14:00', name: 'Создай свой напиток мечты — бабл-ти!' },
        ],
    },
    {
        date: '25 апреля',
        weekday: 'Суббота',
        registrationFormUrl: 'https://forms.gle/i1FyETJmNUKzc5FeA',
        events: [
            { time: '14:00', name: 'Квест «Сокровища Люмика»' }
        ],
    },
    {
        date: '26 апреля',
        weekday: 'Воскресенье',
        events: [
            { time: '14:00', name: 'Мастер-класс "Создаем цветок из воздушных шариков' },
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
