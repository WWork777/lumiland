'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectCoverflow,
} from 'swiper/modules';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

import styles from './styles.module.scss';

const slides = [
  {
    id: 1,
    buttonText: 'Купить билет',
    link: '#vidget',
    bgImage: '/images/PromoSlider/01.png',
    bgColor: '#F9A825',
    buttonColor: '#dcff00',
  },
  {
    id: 2,
    buttonText: 'Купить билет',
    buttonSubtext: '',
    link: '#vidget',
    bgImage: '/images/PromoSlider/02.png',
    bgColor: '#7B1FA2',
    buttonColor: '#dcff00',
  },
  {
    id: 3,
    buttonText: 'Купить сертификат',
    link: '#vidget',
    bgImage: '/images/PromoSlider/03.png',
    bgColor: '#D32F2F',
    buttonColor: '#dcff00',
  },
];

export default function PromoSlider() {
  return (
    <div className={styles.sliderWrapper}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
        effect="coverflow"
        grabCursor
        centeredSlides
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1.5,
          slideShadows: false,
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        watchSlidesProgress
        breakpoints={{
          320: { spaceBetween: -40 },
          768: { spaceBetween: -60 },
        }}
        className={styles.swiper}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className={styles.slide}>
            <div className={styles.card} style={{ backgroundColor: slide.bgColor }}>
              <div className={styles.bgImage}>
                <Image
                  src={slide.bgImage}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 80vw, 50vw"
                  style={{ objectFit: 'cover' }}
                  loading="eager"
                />
              </div>
              <div className={styles.content}>
                <h3>{slide.title}</h3>
                {slide.price && <p className={styles.price}>{slide.price}</p>}
                {slide.desc && <p className={styles.desc}>{slide.desc}</p>}
                <div className={styles.buttonWrapper}>
                  <a
                    href={slide.link}
                    className={styles.button}
                    style={{ background: `${slide.buttonColor}` }}
                  >
                    {slide.buttonText}
                  </a>
                  {slide.buttonSubtext && (
                    <span className={styles.buttonSubtext}>
                      {slide.buttonSubtext}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
