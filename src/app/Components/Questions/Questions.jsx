'use client';
import { useState } from 'react';
import Image from 'next/image';
import styles from './Questions.module.scss';
export default function Questions() {
  const [activeIndex, setActiveIndex] = useState(null);

  const answer = [
    {
      question: 'Есть ли в парке кафе или зона отдыха?',
      answer: [
        'В нашем парке есть уютная зона кафе, где гости могут отдохнуть и перекусить в приятной атмосфере.',
        'Взрослые, сопровождающие ребенка, могут находиться в зоне кафе абсолютно бесплатно.',
        'Здесь можно насладиться ароматным кофе, сладостями, мороженым от «33 Пингвина» или заказать вкусную пиццу от Make Love.',
        'Обратите внимание: продукты и услуги кафе оплачиваются отдельно и не входят в стоимость входного билета в Парк.',
      ],
    },
    {
      question: 'Можно ли прийти в парк без брони?',
      answer: [
        'Конечно! Вы можете прийти без предварительного бронирования и купить билет прямо перед входом.',
        'Но если планируете визит в популярные дни, советуем забронировать место заранее — так вы точно избежите очередей и будете спокойны.',
      ],
    },
    {
      question: 'Что нужно взять с собой?',
      answer: [
        'Берите с собой всего две вещи: носочки и отличное настроение! Всё остальное найдётся в парке.',
      ],
    },
    {
      question: 'Есть ли у вас скидки или акции?',
      answer: [
        'Да! В нашем парке действуют приятные скидки',
        'Дети до 1 года проходят бесплатно, а детям до 3 лет, многодетным семьям, пенсионерам и людям с инвалидностью предоставляется скидка 20%.',
        'Также у нас есть вечерний тариф — с 19:00 до 21:00 вход всего 500 рублей!',
        'Отличный вариант, чтобы весело провести время вместе после детского сада или школы.',
      ],
    },
  ];
  const toggleItem = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <section className={styles.questions} id='questions'>
      <h2 className={styles.questionTitle}>
        ОТВЕТЫ НА <span>ЧАСТЫЕ ВОПРОСЫ</span>
      </h2>
      <div className={styles.questionsAcordion}>
        {answer.map((con, index) => (
          <div
            className={`${styles.questionContainer} ${
              activeIndex === index ? 'Active' : ''
            }`}
            key={index}
            onClick={() => toggleItem(index)}
            role='button'
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleItem(index);
              }
            }}
          >
            <div className={styles.questionText}>
              <h3 className={styles.question}>{con.question}</h3>
              <div
                className={`${styles.questionAnswer} ${
                  activeIndex === index ? styles.questionAnswerOpen : ''
                }`}
              >
                {con.answer.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </div>
            <span className={styles.accordionIcon} aria-hidden='true'>
              <svg
                width='38'
                height='42'
                viewBox='0 0 38 42'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <circle cx='19' cy='19' r='19' fill='black' />
                <path
                  d='M20.6123 24.544H18.3983V19.576H13.1603V17.497H18.3983V12.529H20.6123V17.497H25.8503V19.576H20.6123V24.544Z'
                  fill='white'
                />
              </svg>
            </span>
          </div>
        ))}
      </div>
      <Image
        src={'/images/Questions/Cylinder.webp'}
        width={300}
        height={720}
        alt='lumiland'
        className={styles.iconBg}
      />
    </section>
  );
}
