'use client';
import Image from 'next/image';
import styles from './Price.module.scss';

export default function Price() {
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

          <div className={`${styles.cell} ${styles.time}`}>10:00 – 12:00</div>
          <div className={`${styles.cell} ${styles.price}`}>800 ₽</div>
          <div className={`${styles.cell} ${styles.price}`}>1000 ₽</div>

          <div className={`${styles.cell} ${styles.time}`}>14:00 – 16:00</div>
          <div className={`${styles.cell} ${styles.price}`}>900 ₽</div>
          <div className={`${styles.cell} ${styles.price}`}>1200 ₽</div>

          <div className={`${styles.cell} ${styles.time}`}>19:00 – 21:00</div>
          <div className={`${styles.cell} ${styles.price}`}>800 ₽</div>
          <div className={`${styles.cell} ${styles.price}`}>1000 ₽</div>

          <div className={`${styles.cell} ${styles.ticket}`}>
            Сопровождающий детей взрослый
            <small>(доступ на игровую территорию)</small>
          </div>

          <div className={`${styles.cell} ${styles.time}`}>В ТЕЧЕНИЕ ДНЯ</div>
          <div className={`${styles.cell} ${styles.price}`}>500 ₽</div>
          <div className={`${styles.cell} ${styles.price}`}>500 ₽</div>

          <div className={`${styles.cell} ${styles.ticket}`}>
            Сопровождающий детей взрослый
            <small>(только зона кафе)</small>
          </div>

          <div className={`${styles.cell} ${styles.time}`}>В ТЕЧЕНИЕ ДНЯ</div>
          <div className={`${styles.cell} ${styles.freeWide}`}>БЕСПЛАТНО</div>

          <div className={`${styles.cell} ${styles.ticket}`}>
            Дети до 1 года
          </div>

          <div className={`${styles.cell} ${styles.time}`}>В ТЕЧЕНИЕ ДНЯ</div>
          <div className={`${styles.cell} ${styles.freeWide}`}>БЕСПЛАТНО</div>
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

            <div className={styles.time}>10:00–12:00</div>
            <div className={styles.price}>800 ₽</div>
            <div className={styles.price}>1000 ₽</div>

            <div className={styles.time}>14:00–16:00</div>
            <div className={styles.price}>900 ₽</div>
            <div className={styles.price}>1200 ₽</div>

            <div className={styles.time}>19:00–21:00</div>
            <div className={styles.price}>800 ₽</div>
            <div className={styles.price}>1000 ₽</div>
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
            <div className={styles.price}>500 ₽</div>
            <div className={styles.price}>500 ₽</div>
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
            <div className={`${styles.cell} ${styles.freeWide}`}>БЕСПЛАТНО</div>
          </div>

          <h3 className={styles.blockTitle}> Дети до 1 года </h3>

          <div className={styles.table}>
            <div className={styles.head}>Время</div>
            <div className={styles.head}>Будни</div>
            <div className={styles.head}>Выходные</div>

            <div className={styles.time}>В течение дня</div>
            <div className={`${styles.cell} ${styles.freeWide}`}>БЕСПЛАТНО</div>
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
