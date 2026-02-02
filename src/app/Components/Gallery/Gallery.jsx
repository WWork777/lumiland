'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import styles from './Gallery.module.scss';
import {
  desktopTop,
  desktopBottom,
  mobRow1,
  mobRow2,
  mobRow3,
  mobRow4,
} from './galleryData';

export default function Gallery() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentVideoUrl, setCurrentVideoUrl] = useState('');

  const handleOpenVideo = (url) => {
    setCurrentVideoUrl(url);
    setIsModalOpen(true);
  };

  // Функция для определения типа медиа (видео или фото)
  const isVideo = (item) => {
    // Если есть явное поле type, используем его
    if (item.type === 'video') return true;
    if (item.type === 'photo') return false;

    // Если type не указан, определяем по расширению файла
    const src = item.src || '';
    const videoExtensions = ['.mp4', '.webm', '.ogg', '.mov', '.avi'];
    return videoExtensions.some((ext) => src.toLowerCase().endsWith(ext));
  };

  // Универсальная функция отрисовки карточки
  const renderCard = (item, isMobile = false) => {
    const videoItem = isVideo(item);

    return (
      <div
        className={`${styles.card} ${item.isWide ? styles.wideCard : ''}`}
        onClick={() => videoItem && handleOpenVideo(item.src)}
      >
        <Image
          src={videoItem ? item.poster : item.src}
          alt='Lumiland'
          fill
          sizes={isMobile ? '250px' : '500px'}
          className={styles.cardImage}
          loading='lazy'
          quality={85}
        />
        {videoItem && (
          <div className={styles.playOverlay}>
            <svg width='60' height='60' viewBox='0 0 92 92'>
              <path
                d='M46 0C71.4051 0 92 20.5949 92 46C92 71.4051 71.4051 92 46 92C20.5949 92 0 71.4051 0 46C0 20.5949 20.5949 0 46 0ZM42.833 30.3135C40.6877 28.6345 37.5502 30.1627 37.5498 32.8867V58.6914C37.5498 61.4158 40.6876 62.9447 42.833 61.2656L59.3193 48.3633C60.9911 47.0547 60.991 44.5244 59.3193 43.2158L42.833 30.3135Z'
                fill='#DFFF32'
              />
            </svg>
          </div>
        )}
      </div>
    );
  };

  return (
    <section className={styles.videosSection} id='gallery'>
      <h2 className={styles.mainTitle}>
        ФОТО И ВИДЕО <span className={styles.purpleText}>LUMILAND</span>
      </h2>

      {/* --- ДЛЯ ПК (2 слайдера) --- */}
      <div className={styles.desktopContainer}>
        <Swiper
          slidesPerView={'auto'}
          spaceBetween={25}
          className={styles.pcSwiper}
        >
          {desktopTop.map((item) => (
            <SwiperSlide key={item.id} className={styles.autoSlide}>
              {renderCard(item)}
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          slidesPerView={'auto'}
          spaceBetween={25}
          className={styles.pcSwiper}
        >
          {desktopBottom.map((item) => (
            <SwiperSlide key={item.id} className={styles.autoSlide}>
              {renderCard(item)}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* --- ДЛЯ МОБИЛКИ (4 слайдера втупую один за другим) --- */}
      <div className={styles.mobileContainer}>
        <Swiper
          slidesPerView={'auto'}
          spaceBetween={10}
          className={styles.mobSwiper}
        >
          {mobRow1.map((item) => (
            <SwiperSlide key={item.id} className={styles.autoSlide}>
              {renderCard(item, true)}
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          slidesPerView={'auto'}
          spaceBetween={10}
          className={styles.mobSwiper}
        >
          {mobRow2.map((item) => (
            <SwiperSlide key={item.id} className={styles.autoSlide}>
              {renderCard(item, true)}
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          slidesPerView={'auto'}
          spaceBetween={10}
          className={styles.mobSwiper}
        >
          {mobRow3.map((item) => (
            <SwiperSlide key={item.id} className={styles.autoSlide}>
              {renderCard(item, true)}
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          slidesPerView={'auto'}
          spaceBetween={10}
          className={styles.mobSwiper}
        >
          {mobRow4.map((item) => (
            <SwiperSlide key={item.id} className={styles.autoSlide}>
              {renderCard(item, true)}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* VideoModal временно отключен - можно добавить позже */}
      {isModalOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            cursor: 'pointer',
          }}
          onClick={() => setIsModalOpen(false)}
        >
          <video
            src={currentVideoUrl}
            controls
            autoPlay
            style={{ maxWidth: '90%', maxHeight: '90%' }}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
