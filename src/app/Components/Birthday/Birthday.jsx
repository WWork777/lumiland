'use client';
import { useState } from 'react';
import Image from 'next/image';
import styles from './Birthday.module.scss';

export default function Birthday() {
  // Храним состояние открытости для каждого блока отдельно
  // Изначально только стандарт открыт
  const [openTabs, setOpenTabs] = useState({
    standart: true,
    premium: false,
    vip: false,
    custom: false,
  });

  const toggleTab = (tab) => {
    // Запоминаем текущую позицию скролла
    const scrollPos = window.scrollY;

    // Переключаем только конкретный блок, не трогая остальные
    setOpenTabs((prev) => ({
      ...prev,
      [tab]: !prev[tab],
    }));

    // Возвращаем скролл на место в следующем кадре анимации
    requestAnimationFrame(() => {
      window.scrollTo(0, scrollPos);
    });
  };

  const handleOrder = (packageName) => {
    const telegramUrl = `https://t.me/+79528800330?text=${encodeURIComponent(
      `Хочу заказать праздник по пакету: ${packageName}`
    )}`;
    window.open(telegramUrl, '_blank');
  };

  const services = [
    { name: 'Персональный банкетный менеджер', s: true, p: true, v: true },
    { name: 'Посещение парка безлимит', s: true, p: true, v: true },
    { name: 'Пати-рум 3 часа', s: true, p: true, v: true },
    { name: 'Интерактивный стол', s: true, p: true, v: true },
    { name: 'Праздничная сервировка стола', s: true, p: true, v: true },
    { name: 'Электронные приглашения', s: true, p: true, v: true },
    { name: 'Подарок имениннику и гостям', s: true, p: true, v: true },
    { name: 'Оформление воздушными шарами', s: true, p: true, v: true },
    { name: 'Квест по локациям парка', s: false, p: true, v: true },
    { name: 'МК/Турнир на выбор', s: false, p: false, v: true },
  ];
  const BlackCheck = (
    <Image src='/icons/blackCheck.svg' alt='check' width={29} height={29} />
  );
  const WhiteCheck = (
    <Image src='/icons/whiteCheck.svg' alt='check' width={29} height={29} />
  );
  return (
    <div className={styles.wrapperB}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.birthdayTitle}>
            ОТПРАЗДНУЙТЕ <span>НЕЗАБЫВАЕМЫЙ</span> ДЕНЬ РОЖДЕНИЯ В LUMILAND
          </h1>
          <h2>Пакетов рассчитаны на 6 человек</h2>
        </header>
        <div className={styles.grid}>
          <div
            className={`${styles.cell} ${styles.label} ${styles.labelTitle} `}
          >
            Пакетные предложения
          </div>
          <div
            className={`${styles.cell} ${styles.standart} ${styles.standartTitle}`}
          >
            Standart
          </div>
          <div
            className={`${styles.cell} ${styles.premium} ${styles.premiumTitle}`}
          >
            Premium
          </div>
          <div className={`${styles.cell} ${styles.vip} ${styles.vipTitle}`}>
            Vip
          </div>
          <div
            className={`${styles.cell} ${styles.custom} ${styles.customTitle}`}
          >
            Соберу сам
          </div>
          <div className={`${styles.cell} ${styles.label} ${styles.sellTopic}`}>
            Персональный банкетный менеджер
          </div>
          <div className={`${styles.cell} ${styles.standart}`}>
            {' '}
            {BlackCheck}{' '}
          </div>
          <div className={`${styles.cell} ${styles.premium}`}>
            {' '}
            {BlackCheck}{' '}
          </div>
          <div className={`${styles.cell} ${styles.vip}`}>{WhiteCheck}</div>
          {/* Оранжевый блок (один на все строки) */}
          <div className={styles.customSideBlock}>
            ОБСУДИТЕ ДЕТАЛИ С ПЕРСОНАЛЬНЫМ МЕНЕДЖЕРОМ И ПРЕВРАТИТЕ ДЕНЬ РОЖДЕНИЯ
            В НЕЗАБЫВАЕМОЕ ПРИКЛЮЧЕНИЕ
          </div>
          <div className={`${styles.cell} ${styles.label} ${styles.sellTopic}`}>
            Посещение парка безлимит
          </div>
          <div className={`${styles.cell} ${styles.standart}`}>
            {BlackCheck}
          </div>
          <div className={`${styles.cell} ${styles.premium}`}>{BlackCheck}</div>
          <div className={`${styles.cell} ${styles.vip}`}>{WhiteCheck}</div>
          <div className={`${styles.cell} ${styles.label} ${styles.sellTopic}`}>
            Пати-рум 3 часа
          </div>
          <div className={`${styles.cell} ${styles.standart}`}>
            {BlackCheck}
          </div>
          <div className={`${styles.cell} ${styles.premium}`}>{BlackCheck}</div>
          <div className={`${styles.cell} ${styles.vip}`}>{WhiteCheck}</div>
          <div className={`${styles.cell} ${styles.label} ${styles.sellTopic}`}>
            Интерактивный стол
          </div>
          <div className={`${styles.cell} ${styles.standart}`}>
            {BlackCheck}
          </div>
          <div className={`${styles.cell} ${styles.premium}`}>{BlackCheck}</div>
          <div className={`${styles.cell} ${styles.vip}`}>{WhiteCheck}</div>
          <div className={`${styles.cell} ${styles.label} ${styles.sellTopic}`}>
            Праздничная сервировка стола{' '}
            <small>(одноразовая яркая посуда)</small>
          </div>
          <div className={`${styles.cell} ${styles.standart}`}>
            {BlackCheck}
          </div>
          <div className={`${styles.cell} ${styles.premium}`}>{BlackCheck}</div>
          <div className={`${styles.cell} ${styles.vip}`}>{WhiteCheck}</div>
          <div className={`${styles.cell} ${styles.label} ${styles.sellTopic}`}>
            Электронные приглашения для гостей
          </div>
          <div className={`${styles.cell} ${styles.standart}`}>
            {BlackCheck}
          </div>
          <div className={`${styles.cell} ${styles.premium}`}>{BlackCheck}</div>
          <div className={`${styles.cell} ${styles.vip}`}>{WhiteCheck}</div>
          <div className={`${styles.cell} ${styles.label} ${styles.sellTopic}`}>
            Подарок имениннику и гостям{' '}
            <small>
              (пригласительный на посещение парка - бесплатный сертификат
              имениннику, 50% всем гостям)
            </small>
          </div>
          <div className={`${styles.cell} ${styles.standart}`}>
            {BlackCheck}
          </div>
          <div className={`${styles.cell} ${styles.premium}`}>{BlackCheck}</div>
          <div className={`${styles.cell} ${styles.vip}`}>{WhiteCheck}</div>
          <div className={`${styles.cell} ${styles.label} ${styles.sellTopic}`}>
            Оформление воздушными шарами{' '}
            <small>
              (по шарику привязываем к каждому стульчику с гостем или выдаем на
              палочках каждому)
            </small>
          </div>
          <div className={`${styles.cell} ${styles.standart}`}>
            {BlackCheck}
          </div>
          <div className={`${styles.cell} ${styles.premium}`}>{BlackCheck}</div>
          <div className={`${styles.cell} ${styles.vip}`}>{WhiteCheck}</div>
          {/* СТРОКА КВЕСТ (Только Premium и VIP) */}
          <div className={`${styles.cell} ${styles.label} ${styles.sellTopic}`}>
            Квест по локациям парка <small>(40 минут) с ведущим</small>
          </div>
          <div className={`${styles.cell} ${styles.standart}`}></div>{' '}
          {/* Пусто */}
          <div className={`${styles.cell} ${styles.premium}`}>{BlackCheck}</div>
          <div className={`${styles.cell} ${styles.vip}`}>{WhiteCheck}</div>
          {/* СТРОКА МК (Только VIP) */}
          <div className={`${styles.cell} ${styles.label} ${styles.sellTopic}`}>
            МК/Турнир на выбор (айсхук или ралли) на выбор (40 минут)
          </div>
          <div className={`${styles.cell} ${styles.standart}`}></div>{' '}
          {/* Пусто */}
          <div className={`${styles.cell} ${styles.premium}`}></div>{' '}
          {/* Пусто */}
          <div className={`${styles.cell} ${styles.vip}`}>{WhiteCheck}</div>
          <div
            className={`${styles.cell} ${styles.label} ${styles.sellTariff}`}
          >
            Стоимость в будние дни
          </div>
          <div
            className={`${styles.cell} ${styles.standart} ${styles.sellPrice}`}
          >
            9 000 ₽
          </div>
          <div
            className={`${styles.cell} ${styles.premium} ${styles.sellPrice}`}
          >
            12 000 ₽
          </div>
          <div className={`${styles.cell} ${styles.vip} ${styles.sellPrice}`}>
            15 000 ₽
          </div>
          {/* Здесь ячейка под "Соберу сам" уже занята блоком customSideBlock, 
            но нам нужно закрыть строку цены */}
          <div
            className={`${styles.cell} ${styles.label} ${styles.sellTariff}`}
          >
            Стоимость в выходные дни
          </div>
          <div
            className={`${styles.cell} ${styles.standart} ${styles.sellPrice}`}
          >
            11 000 ₽
          </div>
          <div
            className={`${styles.cell} ${styles.premium} ${styles.sellPrice}`}
          >
            14 000 ₽
          </div>
          <div className={`${styles.cell} ${styles.vip} ${styles.sellPrice}`}>
            17 000 ₽
          </div>
          <div
            className={`${styles.cell} ${styles.label} ${styles.sellTariff}`}
          >
            Доп. гость в будни
          </div>
          <div
            className={`${styles.cell} ${styles.standart} ${styles.sellPrice}`}
          >
            900 ₽
          </div>
          <div
            className={`${styles.cell} ${styles.premium} ${styles.sellPrice}`}
          >
            1 100 ₽
          </div>
          <div className={`${styles.cell} ${styles.vip} ${styles.sellPrice}`}>
            1 300 ₽
          </div>
          <div
            className={`${styles.cell} ${styles.label} ${styles.sellTariff}`}
          >
            Доп. гость в выходные
          </div>
          <div
            className={`${styles.cell} ${styles.standart} ${styles.sellPrice}`}
          >
            1 000 ₽
          </div>
          <div
            className={`${styles.cell} ${styles.premium} ${styles.sellPrice}`}
          >
            1 300 ₽
          </div>
          <div className={`${styles.cell} ${styles.vip} ${styles.sellPrice}`}>
            1 500 ₽
          </div>
          {/* <div className={`${styles.cell} ${styles.label}`}></div>
        <div className={`${styles.cell} ${styles.standart}`}></div>
        <div className={`${styles.cell} ${styles.premium}`}></div>    
        <div className={`${styles.cell} ${styles.custom}`} style={{gridRowStart: 12}}>—</div> */}
        </div>

        {/* КНОПКИ */}
        <div className={styles.footerButtons}>
          <div /> {/* Пустое место под первой колонкой */}
          <button
            className={`${styles.btn} ${styles.standart}`}
            onClick={() => handleOrder('Standart')}
          >
            Заказать
          </button>
          <button
            className={`${styles.btn} ${styles.premium}`}
            onClick={() => handleOrder('Premium')}
          >
            Заказать
          </button>
          <button
            className={`${styles.btn} ${styles.vip}`}
            onClick={() => handleOrder('VIP')}
          >
            Заказать
          </button>
          <button
            className={`${styles.btn} ${styles.custom}`}
            onClick={() => handleOrder('Соберу сам')}
          >
            Заказать
          </button>
        </div>
      </div>
      <Image
        className={styles.spin}
        src='/images/Birthday/spinBlue.webp'
        alt=''
        width={250}
        height={250}
      />

      <div className={styles.mobileWrapper}>
        <header className={styles.header}>
          <h1 className={styles.birthdayTitle}>
            ОТПРАЗДНУЙТЕ <span>НЕЗАБЫВАЕМЫЙ ДЕНЬ РОЖДЕНИЯ</span> В LUMILAND
          </h1>
          <h2>Пакет рассчитан на 6 человек</h2>
        </header>

        {/* --- STANDART CARD --- */}
        <div
          className={`${styles.mCard} ${styles.standart}  ${
            openTabs.standart ? styles.isOpen : ''
          }`}
        >
          <div className={styles.mHeader} onClick={() => toggleTab('standart')}>
            <span>STANDART</span>
            <div className={styles.mIcon}>{openTabs.standart ? '−' : '+'}</div>
          </div>
          <div
            className={`${styles.mContent} ${
              openTabs.standart ? styles.active : ''
            }`}
          >
            <div className={styles.mRow}>
              <p>Персональный банкетный менеджер</p> {BlackCheck}
            </div>
            <div className={styles.mRow}>
              <p>Посещение парка безлимит</p> {BlackCheck}
            </div>
            <div className={styles.mRow}>
              <p>Пати-рум 3 часа</p> {BlackCheck}
            </div>
            <div className={styles.mRow}>
              <p>Интерактивный стол</p> {BlackCheck}
            </div>
            <div className={styles.mRow}>
              <p>Праздничная сервировка стола</p> {BlackCheck}
            </div>
            <div className={styles.mRow}>
              <p>Электронные приглашения</p> {BlackCheck}
            </div>
            <div className={styles.mRow}>
              <p>Подарок имениннику и гостям</p> {BlackCheck}
            </div>
            <div className={styles.mRow}>
              <p>Оформление воздушными шарами</p> {BlackCheck}
            </div>
            <div className={styles.mPrice}>
              <div className={styles.tariff}>
                <span>Будние дни</span> <strong>9 000 ₽</strong>
              </div>
              <div className={styles.tariff}>
                <span>Выходные дни</span> <strong>11 000 ₽</strong>
              </div>
              <div className={styles.tariff}>
                <span>Доп. гость в будни</span> <strong>900 ₽</strong>
              </div>
              <div className={styles.tariff}>
                <span>Доп. гость в выходные</span> <strong>1 000 ₽</strong>
              </div>
            </div>
            <button
              className={styles.mBtn}
              onClick={() => handleOrder('Standart')}
            >
              Заказать
            </button>
          </div>
        </div>

        {/* --- PREMIUM CARD --- */}
        <div
          className={`${styles.mCard} ${styles.premium} ${
            openTabs.premium ? styles.isOpen : ''
          }`}
        >
          <div className={styles.mHeader} onClick={() => toggleTab('premium')}>
            <span>PREMIUM</span>
            <div className={styles.mIcon}>{openTabs.premium ? '−' : '+'}</div>
          </div>
          <div
            className={`${styles.mContent} ${
              openTabs.premium ? styles.active : ''
            }`}
          >
            <div className={styles.mRow}>
              <p>Персональный банкетный менеджер</p> {BlackCheck}
            </div>
            <div className={styles.mRow}>
              <p>Посещение парка безлимит</p> {BlackCheck}
            </div>
            <div className={styles.mRow}>
              <p>Пати-рум 3 часа</p> {BlackCheck}
            </div>
            <div className={styles.mRow}>
              <p>Интерактивный стол</p> {BlackCheck}
            </div>
            <div className={styles.mRow}>
              <p>Праздничная сервировка стола</p> {BlackCheck}
            </div>
            <div className={styles.mRow}>
              <p>Электронные приглашения</p> {BlackCheck}
            </div>
            <div className={styles.mRow}>
              <p>Подарок имениннику и гостям</p> {BlackCheck}
            </div>
            <div className={styles.mRow}>
              <p>Оформление воздушными шарами</p> {BlackCheck}
            </div>
            <div className={styles.mRow}>
              <p>Квест по локациям парка (40 мин)</p> {BlackCheck}
            </div>

            <div className={styles.mPrice}>
              <div className={styles.tariff}>
                <span>Будние дни</span> <strong>12 000 ₽</strong>
              </div>
              <div className={styles.tariff}>
                <span>Выходные дни</span> <strong>14 000 ₽</strong>
              </div>
              <div className={styles.tariff}>
                <span>Доп. гость в будни</span> <strong>1 100 ₽</strong>
              </div>
              <div className={styles.tariff}>
                <span>Доп. гость в выходные</span> <strong>1 300 ₽</strong>
              </div>
            </div>
            <button
              className={`${styles.mBtn}`}
              onClick={() => handleOrder('Premium')}
            >
              Заказать
            </button>
          </div>
        </div>

        {/* --- VIP CARD --- */}
        <div
          className={`${styles.mCard} ${styles.vip} ${
            openTabs.vip ? styles.isOpen : ''
          }`}
        >
          <div className={styles.mHeader} onClick={() => toggleTab('vip')}>
            <span>VIP</span>
            <div className={styles.mIcon}>{openTabs.vip ? '−' : '+'}</div>
          </div>
          <div
            className={`${styles.mContent} ${
              openTabs.vip ? styles.active : ''
            }`}
          >
            <div className={styles.mRow}>
              <p>Персональный банкетный менеджер</p> {WhiteCheck}
            </div>
            <div className={styles.mRow}>
              <p>Посещение парка безлимит</p> {WhiteCheck}
            </div>
            <div className={styles.mRow}>
              <p>Пати-рум 3 часа</p> {WhiteCheck}
            </div>
            <div className={styles.mRow}>
              <p>Интерактивный стол</p> {WhiteCheck}
            </div>
            <div className={styles.mRow}>
              <p>Праздничная сервировка стола</p> {WhiteCheck}
            </div>
            <div className={styles.mRow}>
              <p>Электронные приглашения</p> {WhiteCheck}
            </div>
            <div className={styles.mRow}>
              <p>Подарок имениннику и гостям</p> {WhiteCheck}
            </div>
            <div className={styles.mRow}>
              <p>Оформление воздушными шарами</p> {WhiteCheck}
            </div>
            <div className={styles.mRow}>
              <p>Квест по локациям парка (40 мин)</p> {WhiteCheck}
            </div>
            <div className={styles.mRow}>
              <p>МК/Турнир (айсхук или ралли) на выбор (40 мин)</p> {WhiteCheck}
            </div>
            <div className={styles.mPrice}>
              <div className={styles.tariff}>
                <span>Будние дни</span> <strong>15 000 ₽</strong>
              </div>
              <div className={styles.tariff}>
                <span>Выходные дни</span> <strong>17 000 ₽</strong>
              </div>
              <div className={styles.tariff}>
                <span>Доп. гость в будни</span> <strong>1 300 ₽</strong>
              </div>
              <div className={styles.tariff}>
                <span>Доп. гость в выходные</span> <strong>1 500 ₽</strong>
              </div>
            </div>
            <button
              className={`${styles.mBtn} ${styles.mBtn2}`}
              onClick={() => handleOrder('VIP')}
            >
              Заказать
            </button>
          </div>
        </div>

        {/* --- CUSTOM CARD --- */}
        <div
          className={`${styles.mCard} ${styles.custom} ${
            openTabs.custom ? styles.isOpen : ''
          }`}
        >
          <div className={styles.mHeader} onClick={() => toggleTab('custom')}>
            <span>СОБЕРУ САМ</span>
            <div className={styles.mIcon}>{openTabs.custom ? '−' : '+'}</div>
          </div>
          <div
            className={`${styles.mContent} ${
              openTabs.custom ? styles.active : ''
            }`}
          >
            <p className={styles.customText}>
              Обсудите детали с персональным менеджером и превратите день
              рождения в незабываемое приключение
            </p>
            <button
              className={`${styles.mBtn} ${styles.mBtn2}`}
              onClick={() => handleOrder('Соберу сам')}
            >
              Заказать
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
