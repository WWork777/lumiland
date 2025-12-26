'use client';
import { useState } from 'react';
import Image from 'next/image';
import styles from './Questions.module.scss';
export default function Questions() {
  const [activeIndex, setActiveIndex] = useState(null);

  const answer = [
    {
      question: 'Есть ли в парке кафе или зона отдыха?',
      answer:
        'В нашем парках есть выделенная зона кафе, при этом товары и услуги зоны кафе не входят в стоимость билетов на посещение Парка.',
    },
    {
      question: 'Можно ли прийти в парк без брони?',
      answer:
        'Предварительная бронь не обязательна, при этом рекомендуется в популярные дни и периоды. Можно приобрести входной билет по соответствующему тарифу непосредственно перед входом в парк.',
    },
    {
      question: 'Что необходимо будет взять с собой?',
      answer:
        'С собой в парке Вам понадобится 2 вещи: носочки и хорошее настроение',
    },
    {
      question: 'Есть ли у вас скидки или акции?',
      answer:
        'Да, в парке предусмотрены скидки для некоторых категорий посетителей: ⁠Дети до 1 года бесплатно, ⁠cкидка 20% для детей до 3 лет, многодетным семьям, пенсионерам и инвалидам.',
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
          >
            <div className={styles.questionText}>
              <h3 className={styles.question}>{con.question}</h3>
              <p
                className={`${styles.questionAnswer}${
                  activeIndex === index ? 'Active' : ''
                }`}
              >
                {con.answer}
              </p>
            </div>
            <button onClick={() => toggleItem(index)}>
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
            </button>
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
