'use client'; 
import Image from 'next/image';
import styles from './Mero.module.scss';

// ——— РАСПИСАНИЕ МЕРОПРИЯТИЙ ———
// Меняйте только этот массив: добавляйте/удаляйте дни и события
const SCHEDULE_TITLE = 'в июне';

const EVENTS = [
    {
        date: '1 июня',
       weekday: 'Понедельник',
        firstCard: true,
        events: [
            { time: '14:00', name: 'День защиты детей' },
        ],
    },
    {
        date: '6 июня',
        weekday: 'Суббота',
        events: [
            { time: '14:00', name: 'Квест «Сокровища Люмика»' },
        ],
    },
    {
        date: '10 июня',
        weekday: 'Среда',
        events: [
            { time: '18:00', name: 'День мороженого! Весь день дарим детям мороженое' }
        ],
    },
    {
        date: '12 июня',
        weekday: 'Пятница',
        events: [
            { time: '14:00', name: 'Квест «В поисках динозаврика» с минидино' },
        ],
    },
    {
        date: '13 июня',
        weekday: 'Суббота',
        events: [
            { time: '14:00', name: 'Квест-приключение с Львенком KINGSTOR. Розыгрыш безпроводных наушников!' },
        ],
    },
    {
        date: '20 июня',
        weekday: 'Суббота',
        events: [
            { time: '14:00', name: '«День здорового ребёнка», детям — весёлая программа, родителям — лекции от ведущих детских клиник' },
        ],
    },
    {
        date: '23 июня',
        weekday: 'Вторник',
        events: [
            { time: 'Весь день', name: 'День рождения Люмика' }
        ],
    },
    {
        date: '26 июня',
        weekday: 'Пятница',
        events: [
            { time: '18:00', name: '«Гавайская вечеринка», главный праздник июня!' },
        ],
    },
    {
        date: 'Мастер-класс',
        weekday: 'Каждое Воскресенье',
        events: [
            { time: '14:00', name: 'Мастер-класс по бабл-ти' },
        ],
    },
    {
        date: 'Пенсионерам вход бесплатно!',
        weekday: 'Каждый понедельник',
        events: [
            { time: 'Весь день', name: 'Турнир «бабушка + внук» и фотозона #ЯЛюблюБабулю' },
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
