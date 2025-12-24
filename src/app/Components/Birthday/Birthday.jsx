"use client"
import Image from 'next/image'; 
import styles from './Birthday.module.scss';

export default function Birthday() {
 
  const BlackCheck = <Image src="/icons/blackCheck.svg" alt="check" width={29} height={29} />;
  const WhiteCheck = <Image src="/icons/whiteCheck.svg" alt="check" width={29} height={29} />;
  return (<>
    <div className={styles.container}>
        <header className={styles.header}>
        <h1 className={styles.birthdayTitle}>ОТПРАЗДНУЙТЕ <span>НЕЗАБЫВАЕМОЕ</span> ДЕНЬ РОЖДЕНИЯ В LUMILAND</h1>
        <h2 >Пакетов рассчитаны на 6 человек</h2>
      </header>
      <div className={styles.grid}>
       
        <div className={`${styles.cell} ${styles.label} ${styles.labelTitle} `}>Пакетные предложения</div>
        <div className={`${styles.cell} ${styles.standart} ${styles.standartTitle}`}>Standart</div>
        <div className={`${styles.cell} ${styles.premium} ${styles.premiumTitle}`}>Premium</div>
        <div className={`${styles.cell} ${styles.vip} ${styles.vipTitle}`}>Vip</div>
        <div className={`${styles.cell} ${styles.custom} ${styles.customTitle}`}>Соберу сам</div>

       
        <div className={`${styles.cell} ${styles.label} ${styles.sellTopic}`}>Персональный банкетный менеджер</div>
        <div className={`${styles.cell} ${styles.standart}`}> {BlackCheck} </div>
        <div className={`${styles.cell} ${styles.premium}`}> {BlackCheck} </div>
        <div className={`${styles.cell} ${styles.vip}`}>{WhiteCheck}</div>
        {/* Оранжевый блок (один на все строки) */}
       <div className={styles.customSideBlock}>
  ОБСУДИТЕ ДЕТАЛИ С ПЕРСОНАЛЬНЫМ МЕНЕДЖЕРОМ И ПРЕВРАТИТЕ ДЕНЬ РОЖДЕНИЯ В НЕЗАБЫВАЕМОЕ ПРИКЛЮЧЕНИЕ
</div>

       
        <div className={`${styles.cell} ${styles.label} ${styles.sellTopic}`}>Пати-рум 3 часа</div>
        <div className={`${styles.cell} ${styles.standart}`}>{BlackCheck}</div>
        <div className={`${styles.cell} ${styles.premium}`}>{BlackCheck}</div>
        <div className={`${styles.cell} ${styles.vip}`}>{WhiteCheck}</div>

        <div className={`${styles.cell} ${styles.label} ${styles.sellTopic}`}>Интерактивный стол</div>
        <div className={`${styles.cell} ${styles.standart}`}>{BlackCheck}</div>
        <div className={`${styles.cell} ${styles.premium}`}>{BlackCheck}</div>
        <div className={`${styles.cell} ${styles.vip}`}>{WhiteCheck}</div>

        <div className={`${styles.cell} ${styles.label} ${styles.sellTopic}`}>Праздничная сервировка стола <span>(одноразовая яркая посуда)</span></div>
        <div className={`${styles.cell} ${styles.standart}`}>{BlackCheck}</div>
        <div className={`${styles.cell} ${styles.premium}`}>{BlackCheck}</div>
        <div className={`${styles.cell} ${styles.vip}`}>{WhiteCheck}</div>

        <div className={`${styles.cell} ${styles.label} ${styles.sellTopic}`}>Электронные приглашения для гостей</div>
        <div className={`${styles.cell} ${styles.standart}`}>{BlackCheck}</div>
        <div className={`${styles.cell} ${styles.premium}`}>{BlackCheck}</div>
        <div className={`${styles.cell} ${styles.vip}`}>{WhiteCheck}</div>

        <div className={`${styles.cell} ${styles.label} ${styles.sellTopic}`}>Подарок имениннику и гостям (пригласительный на посещение парка - бесплатный сертификат имениннику, 50% всем гостям)</div>
        <div className={`${styles.cell} ${styles.standart}`}>{BlackCheck}</div>
        <div className={`${styles.cell} ${styles.premium}`}>{BlackCheck}</div>
        <div className={`${styles.cell} ${styles.vip}`}>{WhiteCheck}</div>

        <div className={`${styles.cell} ${styles.label} ${styles.sellTopic}`}>Оформление воздушными шарами (по шарику привязываем к каждому стульчику с гостем или выдаем на палочках каждому)</div>
        <div className={`${styles.cell} ${styles.standart}`}>{BlackCheck}</div>
        <div className={`${styles.cell} ${styles.premium}`}>{BlackCheck}</div>
        <div className={`${styles.cell} ${styles.vip}`}>{WhiteCheck}</div>

        {/* СТРОКА КВЕСТ (Только Premium и VIP) */}
        <div className={`${styles.cell} ${styles.label} ${styles.sellTopic}`}>Квест по локациям парка (40 минут) с ведущим</div>
        <div className={`${styles.cell} ${styles.standart}`}></div> {/* Пусто */}
        <div className={`${styles.cell} ${styles.premium}`}>{BlackCheck}</div>
        <div className={`${styles.cell} ${styles.vip}`}>{WhiteCheck}</div>

        {/* СТРОКА МК (Только VIP) */}
        <div className={`${styles.cell} ${styles.label} ${styles.sellTopic}`}>МК/Турнир на выбор (айсхук или ралли) на выбор (40 минут)</div>
        <div className={`${styles.cell} ${styles.standart}`}></div> {/* Пусто */}
        <div className={`${styles.cell} ${styles.premium}`}></div> {/* Пусто */}
        <div className={`${styles.cell} ${styles.vip}`}>{WhiteCheck}</div>

       
        <div className={`${styles.cell} ${styles.label} ${styles.sellTariff}`}>Стоимость в будни</div>
        <div className={`${styles.cell} ${styles.standart} ${styles.sellPrice}`}>9 000 ₽</div>
        <div className={`${styles.cell} ${styles.premium} ${styles.sellPrice}`}>12 000 ₽</div>
        <div className={`${styles.cell} ${styles.vip} ${styles.sellPrice}`}>15 000 ₽</div>
        {/* Здесь ячейка под "Соберу сам" уже занята блоком customSideBlock, 
            но нам нужно закрыть строку цены */}

        <div className={`${styles.cell} ${styles.label} ${styles.sellTariff}`}>Стоимость в выходные дни</div>
        <div className={`${styles.cell} ${styles.standart} ${styles.sellPrice}`}>11 000 ₽</div>
        <div className={`${styles.cell} ${styles.premium} ${styles.sellPrice}`}>14 000 ₽</div>
        <div className={`${styles.cell} ${styles.vip} ${styles.sellPrice}`}>17 000 ₽</div>

        <div className={`${styles.cell} ${styles.label} ${styles.sellTariff}`}>Доп. гость в будни</div>
        <div className={`${styles.cell} ${styles.standart} ${styles.sellPrice}`}>9 000 ₽</div>
        <div className={`${styles.cell} ${styles.premium} ${styles.sellPrice}`}>1 100 ₽</div>
        <div className={`${styles.cell} ${styles.vip} ${styles.sellPrice}`}>1 300 ₽</div>

        <div className={`${styles.cell} ${styles.label} ${styles.sellTariff}`}>Доп. гость в выходные</div>
        <div className={`${styles.cell} ${styles.standart} ${styles.sellPrice}`}>1 000 ₽</div>
        <div className={`${styles.cell} ${styles.premium} ${styles.sellPrice}`}>1 300 ₽</div>
        <div className={`${styles.cell} ${styles.vip} ${styles.sellPrice}`}>1 500 ₽</div>

            
        {/* <div className={`${styles.cell} ${styles.label}`}></div>
        <div className={`${styles.cell} ${styles.standart}`}></div>
        <div className={`${styles.cell} ${styles.premium}`}></div>    
        <div className={`${styles.cell} ${styles.custom}`} style={{gridRowStart: 12}}>—</div> */}
      </div>

      {/* КНОПКИ */}
      <div className={styles.footerButtons}>
        <div /> {/* Пустое место под первой колонкой */}
        <button className={`${styles.btn} ${styles.standart}`}>Заказать</button>
        <button className={`${styles.btn} ${styles.premium}`}>Заказать</button>
        <button className={`${styles.btn} ${styles.vip}`}>Заказать</button>
        <button className={`${styles.btn} ${styles.custom}`}>Заказать</button>
      </div>
    </div>
        <Image 
            className={styles.spin} 
            src="/images/Birthday/spinBlue.png" 
            alt='' 
            width={300}
            height={300}
        />
    </>
  );
};

