'use client';
import Image from 'next/image';
import styles from './Mero.module.scss';

export default function Mero() {
  return (
    <div className={styles.container}>
      <h1 className={styles.titleDesktop}>
        Мероприятия Lumiland <br /> <span>в январе–феврале</span>
      </h1>
      <h1 className={styles.titleMobile}>
        <span>Мероприятия</span> <br /> Lumiland
      </h1>

      <div className={styles.grid}>
        
        {/* Карточка 27 декабря */}
        <div className={`${styles.dayCard} ${styles.firstCard}`}>
            <div className={styles.header}>
                <div className={styles.date}>24 января</div>
                <div className={styles.weekday}>Суббота</div>
            </div>
            <div className={styles.eventRow}>
                <div className={styles.timeCol}>14:00</div>
                <div className={styles.dot}>•</div>
                <div className={styles.contentCol}>
                <span className={styles.eventName}>Разукрашиваем магнит</span>
                </div>
            </div>
            {/* <div className={styles.decorationWrapper}>
                <Image 
                className={styles.Spiral}
                src='/images/Mero/Spiral.png'
                width={300}
                height={300}
                alt=''
                />
            </div> */}
            </div>

            <div className={styles.dayCard}>
            <div className={`${styles.header} ${styles.headerPurple}`}>
                <div className={styles.date}>25 января</div>
                <div className={styles.weekday}>Воскресенье</div>
            </div>
            <div className={styles.eventRow}>
                <div className={styles.timeCol}>14:00</div>
                <div className={styles.dot}>•</div>
                <div className={styles.contentCol}>
                <span className={styles.eventName}>Брелок из спила</span>
                {/* <span className={styles.eventSubText}>(Новогодняя программа для посетителей парка)</span> */}
                </div>
            </div>
            {/* <div className={styles.eventRow}>
                <div className={styles.timeCol}>14:00</div>
                <div className={styles.dot}>•</div>
                <div className={styles.contentCol}>
                <span className={styles.eventName}>Слайм</span>
                <span className={styles.eventSubText}>(Новогодняя программа для посетителей парка)</span>
                </div>
            </div> */}
            </div>

            <div className={styles.dayCard}>
            <div className={styles.header}>
                <div className={styles.date}>31 января</div>
                <div className={styles.weekday}>Суббота</div>
            </div>
            
            <div className={styles.eventRow}>
                <div className={styles.timeCol}>14:00</div>
                <div className={styles.dot}>•</div>
                <div className={styles.contentCol}>
                <span className={styles.eventName}>Слайм</span>
                {/* <span className={styles.eventSubText}>(Аппликацию для книг и учебников из картона и цветной бумаги)</span> */}
                </div>
            </div>
            </div>

            <div className={styles.dayCard}>
            <div className={styles.header}>
                <div className={styles.date}>01 февраля</div>
                <div className={styles.weekday}>Воскресенье</div>
            </div>
            <div className={styles.eventRow}>
                <div className={styles.timeCol}>14:00</div>
                <div className={styles.dot}>•</div>
                <div className={styles.contentCol}>
                <span className={styles.eventName}>Брелок из спила</span>
                {/* <span className={styles.eventSubText}>(Аппликацию для книг и учебников из картона и цветной бумаги)</span> */}
                </div>
            </div>
            {/* <div className={styles.eventRow}>
                <div className={styles.timeCol}>15:00</div>
                <div className={styles.dot}>•</div>
                <div className={styles.contentCol}>
                <span className={styles.eventName}>Делаем магнит</span>
                <span className={styles.eventSubText}>(Рисуем на магните-заготовке)</span>
                </div>
            </div> */}
            </div>
        {/* Пример карточки без подстрочника (например, 4 января) */}
        <div className={styles.dayCard}>
          <div className={styles.header}>
            <div className={styles.date}>05 февраля</div>
            <div className={styles.weekday}>Четверг</div>
          </div>
          <div className={styles.eventRow}>
            <div className={styles.timeCol}>19:00</div>
            <div className={styles.dot}>•</div>
            <div className={styles.contentCol}>
            <span className={styles.eventName}>Слайм</span>
            {/* <span className={styles.eventSubText}>(Рисуем на магните-заготовке)</span> */}
            </div>
      </div>
          {/* <div className={styles.eventRow}>
            <div className={styles.timeCol}>15:00</div>
            <div className={styles.dot}>•</div>
            <div className={styles.contentCol}>
            <span className={styles.eventName}>Делаем магнит</span>
            <span className={styles.eventSubText}>(Рисуем на магните-заготовке)</span>
            </div>
      </div> */}
        </div>

                <div className={styles.dayCard}>
        <div className={styles.header}>
            <div className={styles.date}>07 февраля</div>
            <div className={styles.weekday}>Суббота</div>
        </div>
        <div className={styles.eventRow}>
            <div className={styles.timeCol}>14:00</div>
            <div className={styles.dot}>•</div>
            <div className={styles.contentCol}>
            <span className={styles.eventName}>Разукрашиваем магнит</span>
            </div>
        </div>
        {/* <div className={styles.eventRow}>
            <div className={styles.timeCol}>15:00</div>
            <div className={styles.dot}>•</div>
            <div className={styles.contentCol}>
            <span className={styles.eventName}>Делаем магнит</span>
            <span className={styles.eventSubText}>(Рисуем на магните-заготовке)</span>
            </div>
        </div> */}
        </div>

        <div className={styles.dayCard}>
        <div className={styles.header}>
            <div className={styles.date}>08 февраля</div>
            <div className={styles.weekday}>Воскресенье</div>
        </div>
        <div className={styles.eventRow}>
            <div className={styles.timeCol}>14:00</div>
            <div className={styles.dot}>•</div>
            <div className={styles.contentCol}>
            <span className={styles.eventName}>Открытка-валентинка</span>
            {/* <span className={styles.eventSubText}>(Рисуем на магните-заготовке)</span> */}
            </div>
        </div>
        {/* <div className={styles.eventRow}>
            <div className={styles.timeCol}>15:00</div>
            <div className={styles.dot}>•</div>
            <div className={styles.contentCol}>
            <span className={styles.eventName}>Делаем брелок</span>
            <span className={styles.eventSubText}>(Разукрашиваем спил дерева макриловыми красками)</span>
            </div>
        </div> */}
        </div>

        <div className={styles.dayCard}>
        <div className={styles.header}>
            <div className={styles.date}>14 февраля</div>
            <div className={styles.weekday}>Суббота</div>
        </div>
        <div className={styles.eventRow}>
            <div className={styles.timeCol}>14:00</div>
            <div className={styles.dot}>•</div>
            <div className={styles.contentCol}>
            <span className={styles.eventName}>Открытка-валентинка</span>
            {/* <span className={styles.eventSubText}>(Разукрашиваем спил дерева макриловыми красками)</span> */}
            </div>
        </div>
        {/* <div className={styles.eventRow}>
            <div className={styles.timeCol}>15:00</div>
            <div className={styles.dot}>•</div>
            <div className={styles.contentCol}>
            <span className={styles.eventName}>Делаем магнит</span>
            <span className={styles.eventSubText}>(Рисуем на магните-заготовке)</span>
            </div>
        </div> */}
        </div>

        <div className={styles.dayCard}>
        <div className={styles.header}>
            <div className={styles.date}>15 февраля</div>
            <div className={styles.weekday}>Воскресенье</div>
        </div>
        <div className={styles.eventRow}>
            <div className={styles.timeCol}>14:00</div>
            <div className={styles.dot}>•</div>
            <div className={styles.contentCol}>
            <span className={styles.eventName}>Слайм</span>
            {/* <span className={styles.eventSubText}>(Аппликацию для книг и учебников из картона и цветной бумаги)</span> */}
            </div>
        </div>
        {/* <div className={styles.eventRow}>
            <div className={styles.timeCol}>15:00</div>
            <div className={styles.dot}>•</div>
            <div className={styles.contentCol}>
            <span className={styles.eventName}>Делаем слайм</span>
            </div>
        </div> */}
        </div>

        <div className={styles.dayCard}>
        <div className={styles.header}>
            <div className={styles.date}>21 февраля</div>
            <div className={styles.weekday}>Суббота</div>
        </div>
        <div className={styles.eventRow}>
            <div className={styles.timeCol}>14:00</div>
            <div className={styles.dot}>•</div>
            <div className={styles.contentCol}>
            <span className={styles.eventName}>Открытка к 23 февраля</span>
            {/* <span className={styles.eventSubText}>(Рисуем на магните-заготовке)</span> */}
            </div>
        </div>
        {/* <div className={styles.eventRow}>
            <div className={styles.timeCol}>15:00</div>
            <div className={styles.dot}>•</div>
            <div className={styles.contentCol}>
            <span className={styles.eventName}>Делаем брелок</span>
            <span className={styles.eventSubText}>(Разукрашиваем спил дерева макриловыми красками)</span>
            </div>
        </div> */}
        </div>

        <div className={styles.dayCard}>
        <div className={styles.header}>
            <div className={styles.date}>22 февраля</div>
            <div className={styles.weekday}>Воскресенье</div>
        </div>
        <div className={styles.eventRow}>
            <div className={styles.timeCol}>14:00</div>
            <div className={styles.dot}>•</div>
            <div className={styles.contentCol}>
            <span className={styles.eventName}>Разукрашиваем магнит</span>
            {/* <span className={styles.eventSubText}>(Разукрашиваем спил дерева макриловыми красками)</span> */}
            </div>
        </div>
        {/* <div className={styles.eventRow}>
            <div className={styles.timeCol}>15:00</div>
            <div className={styles.dot}>•</div>
            <div className={styles.contentCol}>
            <span className={styles.eventName}>Делаем магнит</span>
            <span className={styles.eventSubText}>(Рисуем на магните-заготовке)</span>
            </div>
        </div> */}
        </div>

        <div className={styles.dayCard}>
        <div className={styles.header}>
            <div className={styles.date}>23 февраля</div>
            <div className={styles.weekday}>Понедельник</div>
        </div>
        <div className={styles.eventRow}>
            <div className={styles.timeCol}>14:00</div>
            <div className={styles.dot}>•</div>
            <div className={styles.contentCol}>
            <span className={styles.eventName}>Открытка к 23 февраля</span>
            </div>
        </div>
        {/* <div className={styles.eventRow}>
            <div className={styles.timeCol}>15:00</div>
            <div className={styles.dot}>•</div>
            <div className={styles.contentCol}>
            <span className={styles.eventName}>Делаем закладку</span>
            <span className={styles.eventSubText}>(Аппликацию для книг и учебников из картона и цветной бумаги)</span>
            </div>
        </div> */}
        </div>

        <div className={styles.dayCard}>
        <div className={styles.header}>
            <div className={styles.date}>28 февраля</div>
            <div className={styles.weekday}>Суббота</div>
        </div>
        <div className={styles.eventRow}>
            <div className={styles.timeCol}>14:00</div>
            <div className={styles.dot}>•</div>
            <div className={styles.contentCol}>
            <span className={styles.eventName}>Открытка к 8 марта</span>
            </div>
        </div>
        
        </div>

      </div>
      <Image 
        className={styles.back}
                src='/images/Mero/Grad.png'
                width={1000}
                height={1000}
                alt=''
      
        />

        
    </div>
  );
}