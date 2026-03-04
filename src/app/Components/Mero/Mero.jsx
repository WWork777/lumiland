'use client';
import Image from 'next/image';
import styles from './Mero.module.scss';

// ——— РАСПИСАНИЕ МЕРОПРИЯТИЙ ———
// Меняйте только этот массив: добавляйте/удаляйте дни и события
const SCHEDULE_TITLE = 'в марте';

const EVENTS = [
    {
        date: '7 марта',
        weekday: 'Суббота',
        firstCard: true,
        events: [
            { time: '13:00', name: 'Мастер-класс "Открытка для мамы"' },
            { time: '15:30', name: 'Квест "Сокровища для мамы"' },

        ],
    },
    {
        date: '8 марта',
        weekday: 'Воскресенье',
        events: [
            { time: '13:00', name: 'Мастер-класс "Цветы для мамы"' },
            { time: '15:00', name: 'Волшебная вечеринка "Бал принцесс"' },
        ],
    },
    {
        date: '9 марта',
        weekday: 'Понедельник',
        events: [
            { time: '16:00', name: 'Фиолетовая вечеринка с музыкой и зажигательным танцами' },
            { time: '15:00', name: 'Детский бармен-шоу по коктейлям' },
        ],
    },
    {
        date: '14 марта',
        weekday: 'Суббота',
        events: [
            { time: '14:00', name: 'Мастер-класс "Лепка из воздушного пластилина"' },
        ],
    },
    {
        date: '15 марта',
        weekday: 'Воскресенье',
        events: [
            { time: '14:00', name: 'Мастер-класс по созданию слайма' },
        ],
    },
    {
        date: '21 марта',
        weekday: 'Суббота',
        cardPurple: true,
        events: [
            { time: '16:00', name: 'Интерактивная эстафета "Мама, папа, я - спортивная семья"' },
        ],
    },
    {
        date: '22 марта',
        weekday: 'Воскресенье',
        cardPurple: true,
        events: [
            { time: '16:00', name: 'Интерактивная эстафета "Мама, папа, я - спортивная семья"' },
        ],
    },
    {
        date: '28 марта',
        weekday: 'Суббота',
        events: [
            { time: '13:00', name: 'Начало каникул с Люми! Большой праздник для всей семьи' },
            { time: '15:00', name: 'Мастер-класс "Создаем цветок из воздушных шариков"' },
            { time: '17:00', name: 'Мастер-класс по созданию слайма"' },
        ],
    },
    {
        date: '29 марта',
        weekday: 'Воскресенье',
        events: [
            { time: '16:00', name: 'Мастер-класс "Роспись магнита"' },
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
