'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import styles from './Birthday.module.scss';

export default function Birthday() {
  const [openTabs, setOpenTabs] = useState({
    base: true,
    standart: false,
    vip: false,
    custom: false,
  });

  // Состояние для выбора мессенджера (хранит ID активного пакета)
  const [activeOrder, setActiveOrder] = useState(null);

  const toggleTab = (tab) => {
    const scrollPos = window.scrollY;
    setOpenTabs((prev) => ({ ...prev, [tab]: !prev[tab] }));
    requestAnimationFrame(() => {
      window.scrollTo(0, scrollPos);
    });
  };

  const links = {
    vk: 'https://vk.com/challenge.html?tid=KJXzux_Nzgwyc8yTjfUUWSHFAev1pA&hash429=E5pkTe6EyqxzhnWfGXSfEJcmVA-SUKT_rBEowhC2TQ1XXOhdqfV8H-QGzMbtjS4_C1-rg3qmjNZHsvpfx0TXUGaWw23uazIhbIjD6eP_x7WSaXdDuOsxQ38T3i7RJ8c1ywrzmLn5d4zvt6p2&sign=HYnvjmtVxRNq-RopIImRKg&back=https%3A%2F%2Fvk.com%2Flumiland.kids&origin=&lang_id=',
    tg: 'https://t.me/+79528800330',
    max: 'https://max.ru/u/f9LHodD0cOI9mXJtibRDK-p1ur9gDFWVupyiARE_tbdrCyzutlyeOOEd9Qs',
  };

  const prices = {
    base: {
      weekday: '9 900 ₽',
      weekend: '11 900 ₽',
      extraW: '1 000 ₽',
      extraE: '1 100 ₽',
    },
    standart: {
      weekday: 'от 15 900 ₽',
      weekend: '17 900 ₽',
      extraW: '1 100 ₽',
      extraE: '1 300 ₽',
    },
    vip: {
      weekday: '29 900 ₽',
      weekend: '31 900 ₽',
      extraW: '1 100 ₽',
      extraE: '1 300 ₽',
    },
  };

  const BlackCheck = (
    <Image src="/icons/blackCheck.svg" alt="v" width={26} height={26} />
  );
  const WhiteCheck = (
    <Image src="/icons/whiteCheck.svg" alt="v" width={26} height={26} />
  );

  // Компонент списка ссылок
  const MessengerSelection = ({ isDarkTheme }) => (
    <div
      className={`${styles.messengerList} ${isDarkTheme ? styles.dark : ''}`}
    >
      <a href={links.tg} target="_blank" rel="noopener noreferrer">
        Заказать в Telegram
      </a>
      <a href={links.max} target="_blank" rel="noopener noreferrer">
        Заказать в Макс
      </a>
      <a href={links.vk} target="_blank" rel="noopener noreferrer">
        Заказать в ВКонтакте
      </a>
    </div>
  );

  return (
    <div className={styles.wrapperB}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.birthdayTitle}>
            ОТПРАЗДНУЙТЕ <span>НЕЗАБЫВАЕМЫЙ</span> ДЕНЬ РОЖДЕНИЯ В LUMILAND
          </h1>
          <h2>Три формата праздника!</h2>
          <h2>
            Но в каждый уже включен персональный менеджер, который возьмет все
            под контроль: от заказа торта до финального фото
          </h2>
        </header>

        <div className={styles.grid}>
          {/* Headers */}
          <div
            className={`${styles.cell} ${styles.label} ${styles.labelTitle}`}
          >
            Пакетные предложения
          </div>
          <div
            className={`${styles.cell} ${styles.standart} ${styles.standartTitle}`}
          >
            Базовый
          </div>
          <div
            className={`${styles.cell} ${styles.premium} ${styles.premiumTitle}`}
          >
            Комфорт
          </div>
          <div className={`${styles.cell} ${styles.vip} ${styles.vipTitle}`}>
            Премиум
          </div>
          <div
            className={`${styles.cell} ${styles.custom} ${styles.customTitle}`}
          >
            Соберу сам
          </div>

          {/* Правая оранжевая колонка */}
          <div className={styles.customSideBlock}>
            ОБСУДИТЕ ДЕТАЛИ С ПЕРСОНАЛЬНЫМ МЕНЕДЖЕРОМ И ПРЕВРАТИТЕ ДЕНЬ РОЖДЕНИЯ
            В НЕЗАБЫВАЕМОЕ ПРИКЛЮЧЕНИЕ
          </div>

          {/* Общие услуги (8 строк) */}
          {[
            'Безлимитные билеты для детей',
            'Party-room на 3 часа с яркой праздничной сервировкой',
            'Персональный менеджер',
            'Интерактивный стол с поздравлением именинника',
            'Игра хит-старт “Бургер-бум!”',
            'Электронные приглашения каждому гостю',
            'Тёплое поздравление от команды',
            'Оформление воздушными шарами, которые каждый гость заберёт с собой',
          ].map((text, i) => (
            <React.Fragment key={i}>
              <div
                className={`${styles.cell} ${styles.label} ${styles.sellTopic}`}
              >
                {text}
              </div>
              <div className={`${styles.cell} ${styles.standart}`}>
                {BlackCheck}
              </div>
              <div className={`${styles.cell} ${styles.premium}`}>
                {BlackCheck}
              </div>
              <div className={`${styles.cell} ${styles.vip}`}>{WhiteCheck}</div>
            </React.Fragment>
          ))}

          {/* Услуги базовый + Премиум */}
          <div className={`${styles.cell} ${styles.label} ${styles.sellTopic}`}>
            Единая механика: от стаканчиков до прощания
          </div>
          <div className={`${styles.cell} ${styles.standart}`}></div>
          <div className={`${styles.cell} ${styles.premium}`}>{BlackCheck}</div>
          <div className={`${styles.cell} ${styles.vip}`}>{WhiteCheck}</div>

          <div className={`${styles.cell} ${styles.label} ${styles.sellTopic}`}>
            Тематический квест по всему парку на выбор
          </div>
          <div className={`${styles.cell} ${styles.standart}`}></div>
          <div className={`${styles.cell} ${styles.premium}`}>{BlackCheck}</div>
          <div className={`${styles.cell} ${styles.vip}`}>{WhiteCheck}</div>

          <div className={`${styles.cell} ${styles.label} ${styles.sellTopic}`}>
            Вынос торта с шоу от аниматора
          </div>
          <div className={`${styles.cell} ${styles.standart}`}></div>
          <div className={`${styles.cell} ${styles.premium}`}>{BlackCheck}</div>
          <div className={`${styles.cell} ${styles.vip}`}>{WhiteCheck}</div>

          <div className={`${styles.cell} ${styles.label} ${styles.sellTopic}`}>
            Подарки от партнеров на 3 000+ ₽ и скидки на последующие визиты для именинника!
          </div>

          <div className={`${styles.cell} ${styles.standart}`}></div>
          <div className={`${styles.cell} ${styles.premium}`}>{BlackCheck}</div>
          <div className={`${styles.cell} ${styles.vip}`}>{WhiteCheck}</div>

          {/* Услуги Только Премиум */}
          <div className={`${styles.cell} ${styles.label} ${styles.sellTopic}`}>
            Приглашение с ИИ-генерацией образа вашего ребёнка
          </div>
          <div className={`${styles.cell} ${styles.standart}`}></div>
          <div className={`${styles.cell} ${styles.premium}`}></div>
          <div className={`${styles.cell} ${styles.vip}`}>{WhiteCheck}</div>

          <div className={`${styles.cell} ${styles.label} ${styles.sellTopic}`}>
            ИИ-персонаж с образом именинника прямо на огромных экранах в парке
          </div>
          <div className={`${styles.cell} ${styles.standart}`}></div>
          <div className={`${styles.cell} ${styles.premium}`}></div>
          <div className={`${styles.cell} ${styles.vip}`}>{WhiteCheck}</div>

          <div className={`${styles.cell} ${styles.label} ${styles.sellTopic}`}>
            Персональный инструктор на весь праздник
          </div>
          <div className={`${styles.cell} ${styles.standart}`}></div>
          <div className={`${styles.cell} ${styles.premium}`}></div>
          <div className={`${styles.cell} ${styles.vip}`}>{WhiteCheck}</div>

          <div className={`${styles.cell} ${styles.label} ${styles.sellTopic}`}>
            Час работы фотографа или видеографа
          </div>
          <div className={`${styles.cell} ${styles.standart}`}></div>
          <div className={`${styles.cell} ${styles.premium}`}></div>
          <div className={`${styles.cell} ${styles.vip}`}>{WhiteCheck}</div>
            
          {/* Цены */}
          <div
            className={`${styles.cell} ${styles.label} ${styles.sellTariff}`}
          >
            Будние дни
          </div>
          <div
            className={`${styles.cell} ${styles.standart} ${styles.sellPrice}`}
          >
            {prices.base.weekday}
          </div>
          <div
            className={`${styles.cell} ${styles.premium} ${styles.sellPrice}`}
          >
            {prices.standart.weekday}
          </div>
          <div className={`${styles.cell} ${styles.vip} ${styles.sellPrice}`}>
            {prices.vip.weekday}
          </div>

          <div
            className={`${styles.cell} ${styles.label} ${styles.sellTariff}`}
          >
            Выходные дни
          </div>
          <div
            className={`${styles.cell} ${styles.standart} ${styles.sellPrice}`}
          >
            {prices.base.weekend}
          </div>
          <div
            className={`${styles.cell} ${styles.premium} ${styles.sellPrice}`}
          >
            {prices.standart.weekend}
          </div>
          <div className={`${styles.cell} ${styles.vip} ${styles.sellPrice}`}>
            {prices.vip.weekend}
          </div>

          <div
            className={`${styles.cell} ${styles.label} ${styles.sellTariff}`}
          >
            Доп. гость (будни)
          </div>
          <div
            className={`${styles.cell} ${styles.standart} ${styles.sellPrice}`}
          >
            {prices.base.extraW}
          </div>
          <div
            className={`${styles.cell} ${styles.premium} ${styles.sellPrice}`}
          >
            {prices.standart.extraW}
          </div>
          <div className={`${styles.cell} ${styles.vip} ${styles.sellPrice}`}>
            {prices.vip.extraW}
          </div>

          <div
            className={`${styles.cell} ${styles.label} ${styles.sellTariff}`}
          >
            Доп. гость (выходные)
          </div>
          <div
            className={`${styles.cell} ${styles.standart} ${styles.sellPrice}`}
          >
            {prices.base.extraE}
          </div>
          <div
            className={`${styles.cell} ${styles.premium} ${styles.sellPrice}`}
          >
            {prices.standart.extraE}
          </div>
          <div className={`${styles.cell} ${styles.vip} ${styles.sellPrice}`}>
            {prices.vip.extraE}
          </div>
        </div>

        {/* Кнопки Десктоп */}
        <div className={styles.footerButtons}>
          <div /> {/* Отступ под колонку названий */}
          {['base', 'standart', 'vip', 'custom'].map((id) => (
            <div key={id} className={styles.btnArea}>
              {activeOrder === id ? (
                <MessengerSelection
                />
              ) : (
                <button
                  className={`${styles.btn} ${styles[id === 'base' ? 'standart' : id === 'standart' ? 'premium' : id]}`}
                  onClick={() => setActiveOrder(id)}
                >
                  Заказать
                </button>
              )}
            </div>
          ))}
        </div>
        <span style={{fontSize: '22px', color: "#4c365a", lineHeight: "normal", marginTop: "35px", display: "block"}}>Стоимость пакетов рассчитана на 6 детей. Доплата за каждого дополнительного гостя зависит от пакета и дня недели</span>
      </div>

      {/* --- МОБИЛЬНАЯ ВЕРСИЯ --- */}
      <div className={styles.mobileWrapper}>
        <header className={styles.header}>
          <h1 className={styles.birthdayTitle}>
            ОТПРАЗДНУЙТЕ <span>ДЕНЬ РОЖДЕНИЯ</span>
          </h1>
          <h2>Три формата праздника!</h2>
          <h2>
            Но в каждый уже включен персональный менеджер, который возьмет все
            под контроль: от заказа торта до финального фото
          </h2>
        </header>

        {/* Карточка Стандарт */}
        <div
          className={`${styles.mCard} ${styles.standart} ${openTabs.base ? styles.isOpen : ''}`}
        >
          <div className={styles.mHeader} onClick={() => toggleTab('base')}>
            <span>Базовый</span>
            <div className={styles.mIcon}>{openTabs.base ? '−' : '+'}</div>
          </div>
          <div
            className={`${styles.mContent} ${openTabs.base ? styles.active : ''}`}
          >
            {[
              'Безлимитные билеты для детей',
              'Party-room на 3 часа с яркой праздничной сервировкой',
              'Персональный менеджер',
              'Интерактивный стол с поздравлением именинника',
              'Игра хит-старт “Бургер-бум!”',
              'Электронные приглашения каждому гостю',
              'Тёплое поздравление от команды',
              'Оформление воздушными шарами, которые каждый гость заберет с собой',
            ].map((item) => (
              <div key={item} className={styles.mRow}>
                <p>{item}</p> {BlackCheck}
              </div>
            ))}
            <div className={styles.mPrice}>
              <div className={styles.tariff}>
                <span>Будни: {prices.base.weekday}</span>
                <span>Выходные: {prices.base.weekend}</span>
              </div>
            </div>
            <div className={styles.mOrderArea}>
              {activeOrder === 'm-base' ? (
                <MessengerSelection />
              ) : (
                <button
                  className={styles.mBtn}
                  onClick={() => setActiveOrder('m-base')}
                >
                  Заказать
                </button>
              )}
            </div>
          </div>
          
        </div>

        {/* Карточка Стандарт */}
        <div
          className={`${styles.mCard} ${styles.premium} ${openTabs.standart ? styles.isOpen : ''}`}
        >
          <div className={styles.mHeader} onClick={() => toggleTab('standart')}>
            <span>Комфорт</span>
            <div className={styles.mIcon}>{openTabs.standart ? '−' : '+'}</div>
          </div>
          <div
            className={`${styles.mContent} ${openTabs.standart ? styles.active : ''}`}
          >
            {[
              'Все из пакета «Базовый»',
              'Единая механика: от стаканчиков до прощания',
              'Тематический квест по всему парку на выбор',
              'Вынос торта с шоу от аниматора',
              'Подарки от партнеров на 3 000+ ₽ и скидки на последующие визиты для именинника!',
            ].map((item) => (
              <div key={item} className={styles.mRow}>
                <p>{item}</p> {BlackCheck}
              </div>
            ))}
            <div className={styles.mPrice}>
              <div className={styles.tariff}>
                <span>Будни: {prices.standart.weekday}</span>
                <span>Выходные: {prices.standart.weekend}</span>
              </div>
            </div>
            <div className={styles.mOrderArea}>
              {activeOrder === 'm-standart' ? (
                <MessengerSelection />
              ) : (
                <button
                  className={styles.mBtn}
                  onClick={() => setActiveOrder('m-standart')}
                >
                  Заказать
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Карточка Премиум */}
        <div
          className={`${styles.mCard} ${styles.vip} ${openTabs.vip ? styles.isOpen : ''}`}
        >
          <div className={styles.mHeader} onClick={() => toggleTab('vip')}>
            <span>Премиум</span>
            <div className={styles.mIcon}>{openTabs.vip ? '−' : '+'}</div>
          </div>
          <div
            className={`${styles.mContent} ${openTabs.vip ? styles.active : ''}`}
          >
            {[
              'Все из пакета «Комфорт»',
              'Приглашение с ИИ-генерацией образа вашего ребенка',
              'ИИ-персонаж с образом именинника прямо на огромных экранах в парке',
              'Персональный инструктор на весь праздник',
              'Час работы фотографа или видеографа',
            ].map((item) => (
              <div key={item} className={styles.mRow}>
                <p>{item}</p> {WhiteCheck}
              </div>
            ))}
            <div className={styles.mPrice}>
              <div className={styles.tariff}>
                <span>Будни: {prices.vip.weekday}</span>
                <span>Выходные: {prices.vip.weekend}</span>
              </div>
            </div>
            <div className={styles.mOrderArea}>
              {activeOrder === 'm-vip' ? (
                <MessengerSelection isDarkTheme />
              ) : (
                <button
                  className={`${styles.mBtn} ${styles.mBtn2}`}
                  onClick={() => setActiveOrder('m-vip')}
                >
                  Заказать
                </button>
              )}
            </div>
          </div>
        </div>
        <span style={{fontSize: '14px', color: "#4c365a", lineHeight: "normal"}}>Стоимость пакетов рассчитана на 6 детей. Доплата за каждого дополнительного гостя зависит от пакета и дня недели</span>
      </div>
    
      <div className={styles.summaryContainer}>
        <div className={styles.summaryGrid}>
          {/* Стандарт */}
          <div className={`${styles.summaryCard} ${styles.baseBg}`}>
            <h3 className={styles.summaryTitle}>базовый</h3>
            <h4 className={styles.summarySubtitle}>
              Все что нужно для хорошего дня рождения!
            </h4>
            <p className={styles.summaryText}>
              ● Безлимитные билеты для детей <br />
              ● Party-room на 3 часа с яркой праздничной сервировкой <br />
              ● Персональный менеджер <br />
              ● Интерактивный стол с поздравлением именинника <br />
              ● Игра хит-старт “Бургер-бум!” <br />
              ● Электронные приглашения каждому гостю <br />
              ● Тёплое поздравление от команды <br />
              ● Оформление воздушными шарами, которые каждый гость заберет с собой <br />
            </p>
          </div>

          {/* Стандарт */}
          <div className={`${styles.summaryCard} ${styles.standartBg}`}>
            <h3 className={styles.summaryTitle}>Комфорт</h3>
            <h4 className={styles.summarySubtitle}>
              Тематический праздник под ключ!
            </h4>
            <p className={styles.summaryText}>
              Всё из пакета «Базовый»<br />
              + Единая механика: от стаканчиков до прощания <br />
              + Тематический квест по всему парку на выбор <br />
              + Вынос торта с шоу от аниматора <br />
              + Подарки от партнеров на 3 000+ ₽ и скидки на последующие визиты для именинника!
            </p>
          </div>

          {/* VIP */}
          <div className={`${styles.summaryCard} ${styles.vipBg}`}>
            <h3 className={styles.summaryTitle}>Премиум</h3>
            <h4 className={styles.summarySubtitle}>
              Полная персонализация + тематический ДР
            </h4>
            <p className={styles.summaryText}>
              Всё из пакета «Комфорт»<br />
              + Приглашение с ИИ-генерацией образа вашего ребенка <br />
              + ИИ-персонаж с образом именинника прямо на огромных экранах в парке <br />
              + Персональный инструктор на весь праздник <br />
              + Час работы фотографа или видеографа
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
