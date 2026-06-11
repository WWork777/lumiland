'use client';

import styles from './privacy.module.scss';

const PrivacyPolicy = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Политика конфиденциальности</h1>
      <div className={styles.updateDate}>Дата последнего обновления: 11 июня 2026 г.</div>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>1. Общие положения</h2>
        <p>
          Настоящая Политика конфиденциальности регулирует обработку персональных данных 
          пользователей сайта <strong>lumilandkids.ru</strong>
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>2. Какие данные мы собираем</h2>
        <ul className={styles.list}>
          <li><strong>Обязательные:</strong> Имя, телефон, дата рождения ребёнка.</li>
          <li><strong>Технические:</strong> IP, браузер, cookies, история просмотров.</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>3. Цели обработки</h2>
        <p>Заявки, обратная связь, персонализация, рассылки (с согласия), безопасность.</p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>4. Передача данных третьим лицам</h2>
        <p>Платёжным агрегаторам или по запросу госорганов. <strong>Продажа данных запрещена.</strong></p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>5. Cookies</h2>
        <p>Используются необходимые, аналитические (Яндекс.Метрика) и функциональные cookies. Можно отключить в браузере.</p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>6. Хранение и защита</h2>
        <p>Сервера в РФ, срок хранения — 5 лет. Используется SSL/TLS, антивирусы, аудит.</p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>7. Права пользователей</h2>
        <ul className={styles.list}>
          <li>Запросить свои данные</li>
          <li>Исправить неточную информацию</li>
          <li>Пожаловаться в Роскомнадзор</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>8. Контакты</h2>
        <div className={styles.contact}>
          📞 +7 (952) 880-03-30<br />
          📍 Томск, ул.Говорова 64-24
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>9. Изменения политики</h2>
        <p>Обновления публикуются здесь за 10 дней до вступления в силу.</p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;