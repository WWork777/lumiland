'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
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
  const [lightboxImage, setLightboxImage] = useState(null);

  const handleOpenVideo = (url) => {
    setCurrentVideoUrl(url);
    setIsModalOpen(true);
  };

  const handleOpenPhoto = (src) => {
    setLightboxImage(src);
  };

  // Функция для определения типа медиа (видео или фото)
  const isVideo = (item) => {
    if (item.type === 'video') return true;
    if (item.type === 'photo') return false;
    const src = item.src || '';
    const videoExtensions = ['.mp4', '.webm', '.ogg', '.mov', '.avi'];
    return videoExtensions.some((ext) => src.toLowerCase().endsWith(ext));
  };

  // Универсальная функция отрисовки карточки
  const renderCard = (item, isMobile = false) => {
    const videoItem = isVideo(item);

    return (
      <div
        className={`${styles.card} ${item.isWide ? styles.wideCard : ''} ${!videoItem ? styles.clickablePhoto : ''}`}
        onClick={() => {
          if (videoItem) handleOpenVideo(item.src);
          else handleOpenPhoto(item.src);
        }}
      >
        <Image
          src={videoItem ? item.poster : item.src}
          alt='Lumiland'
          fill
          sizes={isMobile ? '250px' : '500px'}
          className={styles.cardImage}
          loading='lazy'
          quality={100}
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
        {/* Пагинация верхнего слайдера — сверху, справа */}
        <div className={styles.paginationRowTop}>
          <button
            type="button"
            className={styles.paginationBtn}
            aria-label="Предыдущий слайд"
            data-swiper-prev-top
          >
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="30" cy="30" r="30" fill="#DCFF00" />
              <path d="M26.2928 30.2929C25.9023 30.6834 25.9023 31.3166 26.2928 31.7071L32.6568 38.0711C33.0473 38.4616 33.6804 38.4616 34.071 38.0711C34.4615 37.6805 34.4615 37.0474 34.071 36.6569L28.4141 31L34.071 25.3431C34.4615 24.9526 34.4615 24.3195 34.071 23.9289C33.6804 23.5384 33.0473 23.5384 32.6568 23.9289L26.2928 30.2929ZM27 31V30H26.9999V31V32H27V31Z" fill="black" />
            </svg>
          </button>
          <button
            type="button"
            className={styles.paginationBtn}
            aria-label="Следующий слайд"
            data-swiper-next-top
          >
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="30" cy="30" r="30" transform="rotate(180 30 30)" fill="#DCFF00" />
              <path d="M35.7072 29.7071C36.0977 29.3166 36.0977 28.6834 35.7072 28.2929L29.3433 21.9289C28.9527 21.5384 28.3196 21.5384 27.929 21.9289C27.5385 22.3195 27.5385 22.9526 27.929 23.3431L33.5859 29L27.929 34.6569C27.5385 35.0474 27.5385 35.6805 27.929 36.0711C28.3196 36.4616 28.9527 36.4616 29.3433 36.0711L35.7072 29.7071ZM35 29L35 30L35.0001 30L35.0001 29L35.0001 28L35 28L35 29Z" fill="black" />
            </svg>
          </button>
        </div>
        <Swiper
          modules={[Navigation]}
          slidesPerView="auto"
          spaceBetween={25}
          className={styles.pcSwiper}
          navigation={{
            nextEl: '[data-swiper-next-top]',
            prevEl: '[data-swiper-prev-top]',
          }}
        >
          {desktopTop.map((item) => (
            <SwiperSlide key={item.id} className={styles.autoSlide}>
              {renderCard(item)}
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          modules={[Navigation]}
          slidesPerView="auto"
          spaceBetween={25}
          className={styles.pcSwiper}
          navigation={{
            nextEl: '[data-swiper-next-bottom]',
            prevEl: '[data-swiper-prev-bottom]',
          }}
        >
          {desktopBottom.map((item) => (
            <SwiperSlide key={item.id} className={styles.autoSlide}>
              {renderCard(item)}
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Пагинация нижнего слайдера — снизу, слева */}
        <div className={styles.paginationRowBottom}>
          <button
            type="button"
            className={styles.paginationBtn}
            aria-label="Предыдущий слайд"
            data-swiper-prev-bottom
          >
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="30" cy="30" r="30" fill="#DCFF00" />
              <path d="M26.2928 30.2929C25.9023 30.6834 25.9023 31.3166 26.2928 31.7071L32.6568 38.0711C33.0473 38.4616 33.6804 38.4616 34.071 38.0711C34.4615 37.6805 34.4615 37.0474 34.071 36.6569L28.4141 31L34.071 25.3431C34.4615 24.9526 34.4615 24.3195 34.071 23.9289C33.6804 23.5384 33.0473 23.5384 32.6568 23.9289L26.2928 30.2929ZM27 31V30H26.9999V31V32H27V31Z" fill="black" />
            </svg>
          </button>
          <button
            type="button"
            className={styles.paginationBtn}
            aria-label="Следующий слайд"
            data-swiper-next-bottom
          >
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="30" cy="30" r="30" transform="rotate(180 30 30)" fill="#DCFF00" />
              <path d="M35.7072 29.7071C36.0977 29.3166 36.0977 28.6834 35.7072 28.2929L29.3433 21.9289C28.9527 21.5384 28.3196 21.5384 27.929 21.9289C27.5385 22.3195 27.5385 22.9526 27.929 23.3431L33.5859 29L27.929 34.6569C27.5385 35.0474 27.5385 35.6805 27.929 36.0711C28.3196 36.4616 28.9527 36.4616 29.3433 36.0711L35.7072 29.7071ZM35 29L35 30L35.0001 30L35.0001 29L35.0001 28L35 28L35 29Z" fill="black" />
            </svg>
          </button>
        </div>
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

      {/* Модальное окно видео */}
      {isModalOpen && (
        <div
          className={styles.modalOverlay}
          onClick={() => setIsModalOpen(false)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Escape' && setIsModalOpen(false)}
        >
          <video
            src={currentVideoUrl}
            controls
            autoPlay
            className={styles.modalVideo}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* Лайтбокс для фото в полном разрешении */}
      {lightboxImage && (
        <div
          className={styles.lightboxOverlay}
          onClick={() => setLightboxImage(null)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Escape' && setLightboxImage(null)}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={lightboxImage}
            alt="Фото Lumiland"
            className={styles.lightboxImage}
            onClick={(e) => e.stopPropagation()}
            draggable={false}
          />
        </div>
      )}
    </section>
  );
}
