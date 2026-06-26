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
    buttonText: 'Купить',
    link: '#certificate_widget',
    bgImage: '/images/PromoSlider/3.png',
    bgColor: '#3b1b7a',
    buttonColor: '#dcff00',
    buttonCenter: true,
  },
  {
    id: 2,
    buttonText: 'Купить билет!',
    link: '#certificate_widget',
    bgImage: '/images/PromoSlider/2.png',
    bgColor: '#3b1b7a',
    buttonColor: '#dcff00',
    buttonCenter: true,
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
        // loop
        watchSlidesProgress
        initialSlide={0}
        breakpoints={{
          320: { spaceBetween: -40 },
          768: { spaceBetween: -60 },
        }}
        className={styles.swiper}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className={styles.slide}>
            <div
              className={`${styles.card} ${slide.bgImage ? '' : styles.textCard}`}
              style={{ background: slide.bgColor }}
            >
              {slide.bgImage && (
                <div className={styles.bgImage}>
                  <Image
                    src={slide.bgImage}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 80vw, 50vw"
                    style={{ objectFit: '100% 100%' }}
                    loading="eager"
                  />
                </div>
              )}
              <div className={styles.content}>
                {slide.title && <h3>{slide.title}</h3>}
                {slide.price && <p className={styles.price}>{slide.price}</p>}
                {slide.desc && <p className={styles.desc}>{slide.desc}</p>}
                <div
                  className={`${styles.buttonWrapper} ${slide.buttonCenter ? styles.buttonWrapperCenter : ''}`}
                >
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
