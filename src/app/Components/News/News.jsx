"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';

// Стили Swiper (обязательно импортировать!)
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import styles from './styles.module.scss';

// Пример данных с картинками
const newsItems = [
  {
    id: 1,
    title: 'Только в мае — билеты онлайн всего 800 ₽!',
    buttonText: 'Купить билет',
    link: '#',
    imgSrc: '/images/news/may-ticket.jpg', // Путь к картинке
    imgAlt: 'Купить билет со скидкой',
  },
  {
    id: 2,
    title: 'Общегородской выпускной!',
    desc: '29 мая, с 18 до 21 — выпускной, который запомнится! Танцы, флешмоб под Six Seven и коктейли. Всё как у взрослых!',
    buttonText: 'Купить билет',
    link: '#',
    imgSrc: '/images/news/graduation.jpg',
    imgAlt: 'Общегородской выпускной в Lumiland',
  },
  {
    id: 3,
    title: 'Подарочные карты в Lumiland!',
    buttonText: 'Купить сертификат от 1000 рублей',
    link: '#',
    extra: 'Скажите, а можем сделать такой же дизайн этого слайда?',
    imgSrc: '/images/news/gift-card.jpg',
    imgAlt: 'Подарочные карты Lumiland',
  },
];

export default function NewsSlider() {
  return (
    <div className={styles.sliderWrapper}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={24}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className={styles.swiper}
      >
        {newsItems.map((item) => (
          <SwiperSlide key={item.id} className={styles.slide}>
            <div className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image
                  src={item.imgSrc}
                  alt={item.imgAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw"
                  className={styles.image}
                />
              </div>
              <div className={styles.content}>
                <h3>{item.title}</h3>
                {item.desc && <p>{item.desc}</p>}
                {item.extra && <p className={styles.extra}>{item.extra}</p>}
                <a href={item.link} className={styles.button}>
                  {item.buttonText}
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}