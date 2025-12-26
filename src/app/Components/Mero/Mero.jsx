'use client';
import Image from 'next/image';
import styles from './Mero.module.scss';

export default function Mero() {
  return (
    <div className={styles.container}>
      <h1 className={styles.titleDesktop}>
        Мероприятия Lumiland <br /> <span>в декабре</span>
      </h1>
      <h1 className={styles.titleMobile}>
        <span>Мероприятия</span> <br /> Lumiland
      </h1>

      <div className={styles.grid}>
        
        {/* Карточка 27 декабря */}
        <div className={`${styles.dayCard} ${styles.firstCard}`}>
            <div className={styles.header}>
                <div className={styles.date}>27 декабря</div>
                <div className={styles.weekday}>Суббота</div>
            </div>
            <div className={styles.eventRow}>
                <div className={styles.timeCol}>11:00</div>
                <div className={styles.dot}>•</div>
                <div className={styles.contentCol}>
                <span className={styles.eventName}>Открытие парка</span>
                </div>
            </div>
            <div className={styles.decorationWrapper}>
                <Image 
                className={styles.Spiral}
                src='/images/Mero/Spiral.png'
                width={300}
                height={300}
                alt=''
                />
            </div>
            </div>

            <div className={styles.dayCard}>
            <div className={`${styles.header} ${styles.headerPurple}`}>
                <div className={styles.date}>28 декабря</div>
                <div className={styles.weekday}>Воскресенье</div>
            </div>
            <div className={styles.eventRow}>
                <div className={styles.timeCol}>11:00</div>
                <div className={styles.dot}>•</div>
                <div className={styles.contentCol}>
                <span className={styles.eventName}>Елка с Дедом Морозом и Снегурочкой</span>
                <span className={styles.eventSubText}>(Новогодняя программа для посетителей парка)</span>
                </div>
            </div>
            <div className={styles.eventRow}>
                <div className={styles.timeCol}>15:00</div>
                <div className={styles.dot}>•</div>
                <div className={styles.contentCol}>
                <span className={styles.eventName}>Елка с Дедом Морозом и Снегурочкой</span>
                <span className={styles.eventSubText}>(Новогодняя программа для посетителей парка)</span>
                </div>
            </div>
            </div>

            <div className={styles.dayCard}>
            <div className={styles.header}>
                <div className={styles.date}>2 января</div>
                <div className={styles.weekday}>Пятница</div>
            </div>
            <div className={styles.eventRow}>
                <div className={styles.timeCol}>11:00</div>
                <div className={styles.dot}>•</div>
                <div className={styles.contentCol}>
                <span className={styles.eventName}>Делаем брелок</span>
                <span className={styles.eventSubText}>(Разукрашиваем спил дерева акриловыми красками)</span>
                </div>
            </div>
            <div className={styles.eventRow}>
                <div className={styles.timeCol}>15:00</div>
                <div className={styles.dot}>•</div>
                <div className={styles.contentCol}>
                <span className={styles.eventName}>Делаем закладку</span>
                <span className={styles.eventSubText}>(Аппликацию для книг и учебников из картона и цветной бумаги)</span>
                </div>
            </div>
            </div>

            <div className={styles.dayCard}>
            <div className={styles.header}>
                <div className={styles.date}>3 января</div>
                <div className={styles.weekday}>Суббота</div>
            </div>
            <div className={styles.eventRow}>
                <div className={styles.timeCol}>11:00</div>
                <div className={styles.dot}>•</div>
                <div className={styles.contentCol}>
                <span className={styles.eventName}>Делаем закладку</span>
                <span className={styles.eventSubText}>(Аппликацию для книг и учебников из картона и цветной бумаги)</span>
                </div>
            </div>
            <div className={styles.eventRow}>
                <div className={styles.timeCol}>15:00</div>
                <div className={styles.dot}>•</div>
                <div className={styles.contentCol}>
                <span className={styles.eventName}>Делаем магнит</span>
                <span className={styles.eventSubText}>(Рисуем на магните-заготовке)</span>
                </div>
            </div>
            </div>
        {/* Пример карточки без подстрочника (например, 4 января) */}
        <div className={styles.dayCard}>
          <div className={styles.header}>
            <div className={styles.date}>4 января</div>
            <div className={styles.weekday}>Воскресенье</div>
          </div>
          <div className={styles.eventRow}>
            <div className={styles.timeCol}>11:00</div>
            <div className={styles.dot}>•</div>
            <div className={styles.contentCol}>
            <span className={styles.eventName}>Делаем магнит</span>
            <span className={styles.eventSubText}>(Рисуем на магните-заготовке)</span>
            </div>
      </div>
          <div className={styles.eventRow}>
            <div className={styles.timeCol}>15:00</div>
            <div className={styles.dot}>•</div>
            <div className={styles.contentCol}>
            <span className={styles.eventName}>Делаем магнит</span>
            <span className={styles.eventSubText}>(Рисуем на магните-заготовке)</span>
            </div>
      </div>
        </div>

                <div className={styles.dayCard}>
        <div className={styles.header}>
            <div className={styles.date}>5 января</div>
            <div className={styles.weekday}>Понедельник</div>
        </div>
        <div className={styles.eventRow}>
            <div className={styles.timeCol}>11:00</div>
            <div className={styles.dot}>•</div>
            <div className={styles.contentCol}>
            <span className={styles.eventName}>Делаем слайм</span>
            </div>
        </div>
        <div className={styles.eventRow}>
            <div className={styles.timeCol}>15:00</div>
            <div className={styles.dot}>•</div>
            <div className={styles.contentCol}>
            <span className={styles.eventName}>Делаем магнит</span>
            <span className={styles.eventSubText}>(Рисуем на магните-заготовке)</span>
            </div>
        </div>
        </div>

        <div className={styles.dayCard}>
        <div className={styles.header}>
            <div className={styles.date}>6 января</div>
            <div className={styles.weekday}>Вторник</div>
        </div>
        <div className={styles.eventRow}>
            <div className={styles.timeCol}>11:00</div>
            <div className={styles.dot}>•</div>
            <div className={styles.contentCol}>
            <span className={styles.eventName}>Делаем магнит</span>
            <span className={styles.eventSubText}>(Рисуем на магните-заготовке)</span>
            </div>
        </div>
        <div className={styles.eventRow}>
            <div className={styles.timeCol}>15:00</div>
            <div className={styles.dot}>•</div>
            <div className={styles.contentCol}>
            <span className={styles.eventName}>Делаем брелок</span>
            <span className={styles.eventSubText}>(Разукрашиваем спил дерева макриловыми красками)</span>
            </div>
        </div>
        </div>

        <div className={styles.dayCard}>
        <div className={styles.header}>
            <div className={styles.date}>7 января</div>
            <div className={styles.weekday}>Среда</div>
        </div>
        <div className={styles.eventRow}>
            <div className={styles.timeCol}>11:00</div>
            <div className={styles.dot}>•</div>
            <div className={styles.contentCol}>
            <span className={styles.eventName}>Делаем брелок</span>
            <span className={styles.eventSubText}>(Разукрашиваем спил дерева макриловыми красками)</span>
            </div>
        </div>
        <div className={styles.eventRow}>
            <div className={styles.timeCol}>15:00</div>
            <div className={styles.dot}>•</div>
            <div className={styles.contentCol}>
            <span className={styles.eventName}>Делаем магнит</span>
            <span className={styles.eventSubText}>(Рисуем на магните-заготовке)</span>
            </div>
        </div>
        </div>

        <div className={styles.dayCard}>
        <div className={styles.header}>
            <div className={styles.date}>8 января</div>
            <div className={styles.weekday}>Четверг</div>
        </div>
        <div className={styles.eventRow}>
            <div className={styles.timeCol}>11:00</div>
            <div className={styles.dot}>•</div>
            <div className={styles.contentCol}>
            <span className={styles.eventName}>Делаем закладку</span>
            <span className={styles.eventSubText}>(Аппликацию для книг и учебников из картона и цветной бумаги)</span>
            </div>
        </div>
        <div className={styles.eventRow}>
            <div className={styles.timeCol}>15:00</div>
            <div className={styles.dot}>•</div>
            <div className={styles.contentCol}>
            <span className={styles.eventName}>Делаем слайм</span>
            </div>
        </div>
        </div>

        <div className={styles.dayCard}>
        <div className={styles.header}>
            <div className={styles.date}>9 января</div>
            <div className={styles.weekday}>Пятница</div>
        </div>
        <div className={styles.eventRow}>
            <div className={styles.timeCol}>11:00</div>
            <div className={styles.dot}>•</div>
            <div className={styles.contentCol}>
            <span className={styles.eventName}>Делаем магнит</span>
            <span className={styles.eventSubText}>(Рисуем на магните-заготовке)</span>
            </div>
        </div>
        <div className={styles.eventRow}>
            <div className={styles.timeCol}>15:00</div>
            <div className={styles.dot}>•</div>
            <div className={styles.contentCol}>
            <span className={styles.eventName}>Делаем брелок</span>
            <span className={styles.eventSubText}>(Разукрашиваем спил дерева макриловыми красками)</span>
            </div>
        </div>
        </div>

        <div className={styles.dayCard}>
        <div className={styles.header}>
            <div className={styles.date}>10 января</div>
            <div className={styles.weekday}>Суббота</div>
        </div>
        <div className={styles.eventRow}>
            <div className={styles.timeCol}>11:00</div>
            <div className={styles.dot}>•</div>
            <div className={styles.contentCol}>
            <span className={styles.eventName}>Делаем брелок</span>
            <span className={styles.eventSubText}>(Разукрашиваем спил дерева макриловыми красками)</span>
            </div>
        </div>
        <div className={styles.eventRow}>
            <div className={styles.timeCol}>15:00</div>
            <div className={styles.dot}>•</div>
            <div className={styles.contentCol}>
            <span className={styles.eventName}>Делаем магнит</span>
            <span className={styles.eventSubText}>(Рисуем на магните-заготовке)</span>
            </div>
        </div>
        </div>

        <div className={styles.dayCard}>
        <div className={styles.header}>
            <div className={styles.date}>11 января</div>
            <div className={styles.weekday}>Воскресенье</div>
        </div>
        <div className={styles.eventRow}>
            <div className={styles.timeCol}>11:00</div>
            <div className={styles.dot}>•</div>
            <div className={styles.contentCol}>
            <span className={styles.eventName}>Делаем слайм</span>
            </div>
        </div>
        <div className={styles.eventRow}>
            <div className={styles.timeCol}>15:00</div>
            <div className={styles.dot}>•</div>
            <div className={styles.contentCol}>
            <span className={styles.eventName}>Делаем закладку</span>
            <span className={styles.eventSubText}>(Аппликацию для книг и учебников из картона и цветной бумаги)</span>
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