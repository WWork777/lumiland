'use client';
import Image from 'next/image';
import styles from './Price.module.scss';

export default function Price() {
  // Все цены в одном месте - меняйте здесь и они обновятся везде
  const prices = {
    standardTicket: {
      morning: { weekday: '800 ₽', weekend: '1000 ₽' }, // 10:00–12:00
      afternoon: { weekday: '900 ₽', weekend: '1200 ₽' }, // 12:00–19:00
      evening: { weekday: '500 ₽', weekend: '500 ₽' }, // 19:00–21:00
    },
    adultWithAccess: {
      weekday: '500 ₽',
      weekend: '500 ₽',
    },
    adultCafeOnly: 'БЕСПЛАТНО',
    childrenUnder1: 'БЕСПЛАТНО',
  };

  return (
    <div className={styles.wrapper}>
      <section className={`${styles.prices} ${styles.desktop}`}>
        <h2 className={styles.title}>
          <span>ЦЕНЫ И БИЛЕТЫ</span> В LUMILAND
        </h2>

        <div className={styles.grid}>
          <div className={`${styles.cell} ${styles.head}`}>Билет</div>
          <div className={`${styles.cell} ${styles.head}`}>Время покупки</div>
          <div className={`${styles.cell} ${styles.head}`}>Будни</div>
          <div className={`${styles.cell} ${styles.head}`}>Выходные</div>

          <div
            className={`${styles.cell} ${styles.ticket} ${styles.ticketBig}`}
          >
            Стандартный
            <br />
            билет
          </div>
          <div className={`${styles.cell} ${styles.time_cont}`} >
            <div className={styles.time}>10:00–12:00</div>
            <div className={styles.text_time}>Безлимит на весь день</div>
          </div>
          {/* <div className={`${styles.cell} ${styles.time}`}>10:00 – 12:00</div> */}
          <div className={`${styles.cell} ${styles.price}`}>{prices.standardTicket.morning.weekday}</div>
          <div className={`${styles.cell} ${styles.price}`}>{prices.standardTicket.morning.weekend}</div>
          <div className={`${styles.cell} ${styles.time_cont}`} >
            <div className={styles.time}>12:00–19:00</div>
            <div className={styles.text_time}>Безлимит на весь день</div>
          </div>
          {/* <div className={`${styles.cell} ${styles.time}`}>12:00 – 19:00</div> */}
          <div className={`${styles.cell} ${styles.price}`}>{prices.standardTicket.afternoon.weekday}</div>
          <div className={`${styles.cell} ${styles.price}`}>{prices.standardTicket.afternoon.weekend}</div>

          <div className={`${styles.cell} ${styles.time_cont}`} >
            <div className={styles.time}>19:00–21:00</div>
            <div className={styles.text_time}>Безлимит на весь день</div>
          </div>
          {/* <div className={`${styles.cell} ${styles.time}`}>19:00 – 21:00</div> */}
          <div className={`${styles.cell} ${styles.price}`}>{prices.standardTicket.evening.weekday}</div>
          <div className={`${styles.cell} ${styles.price}`}>{prices.standardTicket.evening.weekend}</div>

          <div className={`${styles.cell} ${styles.ticket}`}>
            Сопровождающий детей взрослый
            <small>(доступ на игровую территорию)</small>
          </div>

          <div className={`${styles.cell} ${styles.time}`}>В ТЕЧЕНИЕ ДНЯ</div>
          <div className={`${styles.cell} ${styles.price}`}>{prices.adultWithAccess.weekday}</div>
          <div className={`${styles.cell} ${styles.price}`}>{prices.adultWithAccess.weekend}</div>

          <div className={`${styles.cell} ${styles.ticket}`}>
            Сопровождающий детей взрослый
            <small>(только зона кафе)</small>
          </div>

          <div className={`${styles.cell} ${styles.time}`}>В ТЕЧЕНИЕ ДНЯ</div>
          <div className={`${styles.cell} ${styles.freeWide}`}>{prices.adultCafeOnly}</div>

          <div className={`${styles.cell} ${styles.ticket}`}>
            Дети до 1 года
          </div>

          <div className={`${styles.cell} ${styles.time}`}>В ТЕЧЕНИЕ ДНЯ</div>
          <div className={`${styles.cell} ${styles.freeWide}`}>{prices.childrenUnder1}</div>
        </div>
      </section>

      <section className={`${styles.prices} ${styles.mobile}`}>
        <h2 className={styles.title}>
          <span>ЦЕНЫ И БИЛЕТЫ</span> В LUMILAND
        </h2>

        <div className={styles.block}>
          <h3 className={styles.blockTitle}>Стандартный билет</h3>

          <div className={styles.table}>
            <div className={styles.head}>Время</div>
            <div className={styles.head}>Будни</div>
            <div className={styles.head}>Выходные</div>
            <div className={styles.time_cont}>
              <div className={styles.time}>10:00–12:00</div>
              <div className={styles.text_time}>Безлимит на весь день</div>
            </div>
            <div className={styles.price}>{prices.standardTicket.morning.weekday}</div>
            <div className={styles.price}>{prices.standardTicket.morning.weekend}</div>

            <div className={styles.time_cont}>
              <div className={styles.time}>12:00–19:00</div>
              <div className={styles.text_time}>Безлимит на весь день</div>
            </div>
            <div className={styles.price}>{prices.standardTicket.afternoon.weekday}</div>
            <div className={styles.price}>{prices.standardTicket.afternoon.weekend}</div>
            <div className={styles.time_cont} >
              <div className={styles.time}>19:00–21:00</div>
              <div className={styles.text_time}>Безлимит на весь день</div>
            </div>

            <div className={styles.price}>{prices.standardTicket.evening.weekday}</div>
            <div className={styles.price}>{prices.standardTicket.evening.weekend}</div>
          </div>

          <h3 className={styles.blockTitle}>
            {' '}
            Сопровождающий детей взрослый <br />
            <small>(с доступом на игровую территорию)</small>
          </h3>

          <div className={styles.table}>
            <div className={styles.head}>Время</div>
            <div className={styles.head}>Будни</div>
            <div className={styles.head}>Выходные</div>

            <div className={styles.time}>В течение дня</div>
            <div className={styles.price}>{prices.adultWithAccess.weekday}</div>
            <div className={styles.price}>{prices.adultWithAccess.weekend}</div>
          </div>

          <h3 className={styles.blockTitle}>
            {' '}
            Сопровождающий детей взрослый <br />
            <small>(с доступом только в зону кафе)</small>
          </h3>

          <div className={styles.table}>
            <div className={styles.head}>Время</div>
            <div className={styles.head}>Будни</div>
            <div className={styles.head}>Выходные</div>

            <div className={styles.time}>В течение дня</div>
            <div className={`${styles.cell} ${styles.freeWide}`}>{prices.adultCafeOnly}</div>
          </div>

          <h3 className={styles.blockTitle}> Дети до 1 года </h3>

          <div className={styles.table}>
            <div className={styles.head}>Время</div>
            <div className={styles.head}>Будни</div>
            <div className={styles.head}>Выходные</div>

            <div className={styles.time}>В течение дня</div>
            <div className={`${styles.cell} ${styles.freeWide}`}>{prices.childrenUnder1}</div>
          </div>
        </div>
      </section>
      <Image
        className={styles.spin}
        src='/images/Price/spinGreen.webp'
        alt=''
        width={300}
        height={900}
      />
      <div className={styles.WhiteBg2}></div>
    </div>
  );
}
