'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import styles from './Gallery.module.scss';

export default function Gallery() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentVideoUrl, setCurrentVideoUrl] = useState('');

  const desktopTop = [
    { id: 'dt1', type: 'photo', src: '/images/Gallery/01.webp' },
    {
      id: 'dt2',
      type: 'video',
      src: '/images/Videos/01.mp4',
      poster: '/images/Gallery/02.webp',
      isWide: true,
    },
    { id: 'dt3', type: 'photo', src: '/images/Gallery/03.webp' },
    { id: 'dt4', type: 'photo', src: '/images/Gallery/04.webp' },
    { id: 'dt5', type: 'photo', src: '/images/Gallery/05.webp' },
    { id: 'dt6', type: 'photo', src: '/images/Gallery/06.webp' },
    { id: 'dt7', type: 'photo', src: '/images/Gallery/07.webp' },
    { id: 'dt8', type: 'photo', src: '/images/Gallery/08.webp' },
    { id: 'dt9', type: 'photo', src: '/images/Gallery/09.webp' },
    { id: 'dt10', type: 'photo', src: '/images/Gallery/10.webp' },
    { id: 'dt11', type: 'photo', src: '/images/Gallery/11.webp' },
    {
      id: 'dt12',
      type: 'video',
      src: '/images/Videos/02.mp4',
      poster: '/images/Gallery/12.webp',
    },
    { id: 'dt13', type: 'photo', src: '/images/Gallery/13.webp' },
    { id: 'dt14', type: 'photo', src: '/images/Gallery/14.webp' },
    { id: 'dt15', type: 'photo', src: '/images/Gallery/15.webp' },
    { id: 'dt16', type: 'photo', src: '/images/Gallery/16.webp' },
    { id: 'dt17', type: 'photo', src: '/images/Gallery/17.webp' },
    { id: 'dt18', type: 'photo', src: '/images/Gallery/18.webp' },
    { id: 'dt19', type: 'photo', src: '/images/Gallery/19.webp' },
    { id: 'dt20', type: 'photo', src: '/images/Gallery/20.webp' },
    { id: 'dt21', type: 'photo', src: '/images/Gallery/21.webp' },
    {
      id: 'dt22',
      type: 'video',
      src: '/images/Videos/03.mp4',
      poster: '/images/Gallery/22.webp',
      isWide: true,
    },
    { id: 'dt23', type: 'photo', src: '/images/Gallery/23.webp' },
    { id: 'dt24', type: 'photo', src: '/images/Gallery/24.webp' },
    { id: 'dt25', type: 'photo', src: '/images/Gallery/25.webp' },
    { id: 'dt26', type: 'photo', src: '/images/Gallery/26.webp' },
    { id: 'dt27', type: 'photo', src: '/images/Gallery/27.webp' },
    { id: 'dt28', type: 'photo', src: '/images/Gallery/28.webp' },
    { id: 'dt29', type: 'photo', src: '/images/Gallery/29.webp' },
    { id: 'dt30', type: 'photo', src: '/images/Gallery/30.webp' },
    { id: 'dt31', type: 'photo', src: '/images/Gallery/31.webp' },
    { id: 'dt32', type: 'photo', src: '/images/Gallery/32.webp' },
    {
      id: 'dt33',
      type: 'video',
      src: '/images/Videos/04.mp4',
      poster: '/images/Gallery/33.webp',
    },
    { id: 'dt34', type: 'photo', src: '/images/Gallery/34.webp' },
    { id: 'dt35', type: 'photo', src: '/images/Gallery/35.webp' },
    { id: 'dt36', type: 'photo', src: '/images/Gallery/36.webp' },
    { id: 'dt37', type: 'photo', src: '/images/Gallery/37.webp' },
    { id: 'dt38', type: 'photo', src: '/images/Gallery/38.webp' },
    { id: 'dt39', type: 'photo', src: '/images/Gallery/39.webp' },
    { id: 'dt40', type: 'photo', src: '/images/Gallery/40.webp' },
    { id: 'dt41', type: 'photo', src: '/images/Gallery/41.webp' },
    { id: 'dt42', type: 'photo', src: '/images/Gallery/42.webp' },
    {
      id: 'dt43',
      type: 'video',
      src: '/images/Videos/05.mp4',
      poster: '/images/Gallery/43.webp',
      isWide: true,
    },
    { id: 'dt44', type: 'photo', src: '/images/Gallery/44.webp' },
    { id: 'dt45', type: 'photo', src: '/images/Gallery/45.webp' },
    { id: 'dt46', type: 'photo', src: '/images/Gallery/46.webp' },
    { id: 'dt47', type: 'photo', src: '/images/Gallery/47.webp' },
    { id: 'dt48', type: 'photo', src: '/images/Gallery/48.webp' },
    { id: 'dt49', type: 'photo', src: '/images/Gallery/49.webp' },
    { id: 'dt50', type: 'photo', src: '/images/Gallery/50.webp' },
    { id: 'dt51', type: 'photo', src: '/images/Gallery/51.webp' },
    { id: 'dt52', type: 'photo', src: '/images/Gallery/52.webp' },
    {
      id: 'dt53',
      type: 'video',
      src: '/images/Videos/06.mp4',
      poster: '/images/Gallery/53.webp',
    },
    { id: 'dt54', type: 'photo', src: '/images/Gallery/54.webp' },
    { id: 'dt55', type: 'photo', src: '/images/Gallery/55.webp' },
    { id: 'dt56', type: 'photo', src: '/images/Gallery/56.webp' },
    { id: 'dt57', type: 'photo', src: '/images/Gallery/57.webp' },
    { id: 'dt58', type: 'photo', src: '/images/Gallery/58.webp' },
    { id: 'dt59', type: 'photo', src: '/images/Gallery/59.webp' },
    { id: 'dt60', type: 'photo', src: '/images/Gallery/60.webp' },
    { id: 'dt61', type: 'photo', src: '/images/Gallery/61.webp' },
    { id: 'dt62', type: 'photo', src: '/images/Gallery/62.webp' },
    {
      id: 'dt63',
      type: 'video',
      src: '/images/Videos/07.mp4',
      poster: '/images/Gallery/63.webp',
      isWide: true,
    },
    { id: 'dt64', type: 'photo', src: '/images/Gallery/64.webp' },
    { id: 'dt65', type: 'photo', src: '/images/Gallery/65.webp' },
    { id: 'dt66', type: 'photo', src: '/images/Gallery/66.webp' },
    { id: 'dt67', type: 'photo', src: '/images/Gallery/67.webp' },
    { id: 'dt68', type: 'photo', src: '/images/Gallery/68.webp' },
    { id: 'dt69', type: 'photo', src: '/images/Gallery/69.webp' },
  ];

  const desktopBottom = [
    { id: 'db1', type: 'photo', src: '/images/Gallery/70.webp' },
    { id: 'db2', type: 'photo', src: '/images/Gallery/71.webp' },
    { id: 'db3', type: 'photo', src: '/images/Gallery/72.webp' },
    { id: 'db4', type: 'photo', src: '/images/Gallery/73.webp' },
    { id: 'db5', type: 'photo', src: '/images/Gallery/74.webp' },
    { id: 'db6', type: 'photo', src: '/images/Gallery/75.webp' },
    { id: 'db7', type: 'photo', src: '/images/Gallery/76.webp' },
    { id: 'db8', type: 'photo', src: '/images/Gallery/77.webp' },
    { id: 'db9', type: 'photo', src: '/images/Gallery/78.webp' },
    { id: 'db10', type: 'photo', src: '/images/Gallery/79.webp' },
    {
      id: 'db11',
      type: 'video',
      src: '/images/Videos/08.mp4',
      poster: '/images/Gallery/80.webp',
    },
    { id: 'db12', type: 'photo', src: '/images/Gallery/81.webp' },
    { id: 'db13', type: 'photo', src: '/images/Gallery/82.webp' },
    { id: 'db14', type: 'photo', src: '/images/Gallery/83.webp' },
    { id: 'db15', type: 'photo', src: '/images/Gallery/84.webp' },
    { id: 'db16', type: 'photo', src: '/images/Gallery/85.webp' },
    { id: 'db17', type: 'photo', src: '/images/Gallery/86.webp' },
    { id: 'db18', type: 'photo', src: '/images/Gallery/87.webp' },
    { id: 'db19', type: 'photo', src: '/images/Gallery/88.webp' },
    { id: 'db20', type: 'photo', src: '/images/Gallery/89.webp' },
    {
      id: 'db21',
      type: 'video',
      src: '/images/Videos/09.mp4',
      poster: '/images/Gallery/90.webp',
      isWide: true,
    },
    { id: 'db22', type: 'photo', src: '/images/Gallery/91.webp' },
    { id: 'db23', type: 'photo', src: '/images/Gallery/92.webp' },
    { id: 'db24', type: 'photo', src: '/images/Gallery/93.webp' },
    { id: 'db25', type: 'photo', src: '/images/Gallery/94.webp' },
    { id: 'db26', type: 'photo', src: '/images/Gallery/95.webp' },
    { id: 'db27', type: 'photo', src: '/images/Gallery/96.webp' },
    { id: 'db28', type: 'photo', src: '/images/Gallery/97.webp' },
    { id: 'db29', type: 'photo', src: '/images/Gallery/98.webp' },
    { id: 'db30', type: 'photo', src: '/images/Gallery/99.webp' },
    { id: 'db31', type: 'photo', src: '/images/Gallery/100.webp' },
    {
      id: 'db32',
      type: 'video',
      src: '/images/Videos/10.mp4',
      poster: '/images/Gallery/101.webp',
    },
    { id: 'db33', type: 'photo', src: '/images/Gallery/102.webp' },
    { id: 'db34', type: 'photo', src: '/images/Gallery/103.webp' },
    { id: 'db35', type: 'photo', src: '/images/Gallery/104.webp' },
    { id: 'db36', type: 'photo', src: '/images/Gallery/105.webp' },
    { id: 'db37', type: 'photo', src: '/images/Gallery/106.webp' },
    { id: 'db38', type: 'photo', src: '/images/Gallery/107.webp' },
    { id: 'db39', type: 'photo', src: '/images/Gallery/108.webp' },
    { id: 'db40', type: 'photo', src: '/images/Gallery/109.webp' },
    { id: 'db41', type: 'photo', src: '/images/Gallery/110.webp' },
    {
      id: 'db42',
      type: 'video',
      src: '/images/Videos/11.mp4',
      poster: '/images/Gallery/111.webp',
      isWide: true,
    },
    { id: 'db43', type: 'photo', src: '/images/Gallery/112.webp' },
    { id: 'db44', type: 'photo', src: '/images/Gallery/113.webp' },
    { id: 'db45', type: 'photo', src: '/images/Gallery/114.webp' },
    { id: 'db46', type: 'photo', src: '/images/Gallery/115.webp' },
    { id: 'db47', type: 'photo', src: '/images/Gallery/116.webp' },
    { id: 'db48', type: 'photo', src: '/images/Gallery/117.webp' },
    { id: 'db49', type: 'photo', src: '/images/Gallery/118.webp' },
    { id: 'db50', type: 'photo', src: '/images/Gallery/119.webp' },
    { id: 'db51', type: 'photo', src: '/images/Gallery/120.webp' },
    {
      id: 'db52',
      type: 'video',
      src: '/images/Videos/12.mp4',
      poster: '/images/Gallery/121.webp',
    },
    { id: 'db53', type: 'photo', src: '/images/Gallery/122.webp' },
    { id: 'db54', type: 'photo', src: '/images/Gallery/123.webp' },
    { id: 'db55', type: 'photo', src: '/images/Gallery/124.webp' },
    { id: 'db56', type: 'photo', src: '/images/Gallery/125.webp' },
    { id: 'db57', type: 'photo', src: '/images/Gallery/126.webp' },
    { id: 'db58', type: 'photo', src: '/images/Gallery/127.webp' },
    { id: 'db59', type: 'photo', src: '/images/Gallery/128.webp' },
    { id: 'db60', type: 'photo', src: '/images/Gallery/129.webp' },
    { id: 'db61', type: 'photo', src: '/images/Gallery/130.webp' },
    {
      id: 'db62',
      type: 'video',
      src: '/images/Videos/13.mp4',
      poster: '/images/Gallery/131.webp',
      isWide: true,
    },
    { id: 'db63', type: 'photo', src: '/images/Gallery/132.webp' },
    { id: 'db64', type: 'photo', src: '/images/Gallery/133.webp' },
    { id: 'db65', type: 'photo', src: '/images/Gallery/134.webp' },
    { id: 'db66', type: 'photo', src: '/images/Gallery/135.webp' },
    { id: 'db67', type: 'photo', src: '/images/Gallery/136.webp' },
    { id: 'db68', type: 'photo', src: '/images/Gallery/137.webp' },
    { id: 'db69', type: 'photo', src: '/images/Gallery/138.webp' },
    { id: 'db70', type: 'photo', src: '/images/Gallery/139.webp' },
  ];

  // --- ДАННЫЕ ДЛЯ МОБИЛКИ (4 РЯДА) ---
  // Сюда вставляй свои 100 фото, распределяя их по рядам
  const mobRow1 = [
    { id: 'm1_1', src: '/images/Gallery/01.webp' },
    { id: 'm1_2', src: '/images/Gallery/02.webp', isWide: true },
    { id: 'm1_3', src: '/images/Gallery/03.webp' },
    { id: 'm1_4', src: '/images/Gallery/04.webp' },
    { id: 'm1_5', src: '/images/Gallery/05.webp' },
    { id: 'm1_6', src: '/images/Gallery/06.webp' },
    { id: 'm1_7', src: '/images/Gallery/07.webp' },
    { id: 'm1_8', src: '/images/Gallery/08.webp' },
    { id: 'm1_9', src: '/images/Gallery/09.webp' },
    { id: 'm1_10', src: '/images/Gallery/10.webp' },
    { id: 'm1_11', src: '/images/Gallery/11.webp', isWide: true },
    { id: 'm1_12', src: '/images/Gallery/12.webp' },
    { id: 'm1_13', src: '/images/Gallery/13.webp' },
    { id: 'm1_14', src: '/images/Gallery/14.webp' },
    { id: 'm1_15', src: '/images/Gallery/15.webp' },
    { id: 'm1_16', src: '/images/Gallery/16.webp' },
    { id: 'm1_17', src: '/images/Gallery/17.webp' },
    { id: 'm1_18', src: '/images/Gallery/18.webp' },
    { id: 'm1_19', src: '/images/Gallery/19.webp' },
    { id: 'm1_20', src: '/images/Gallery/20.webp', isWide: true },
    { id: 'm1_21', src: '/images/Gallery/21.webp' },
    { id: 'm1_22', src: '/images/Gallery/22.webp' },
    { id: 'm1_23', src: '/images/Gallery/23.webp' },
    { id: 'm1_24', src: '/images/Gallery/24.webp' },
    { id: 'm1_25', src: '/images/Gallery/25.webp' },
    { id: 'm1_26', src: '/images/Gallery/26.webp' },
    { id: 'm1_27', src: '/images/Gallery/27.webp' },
    { id: 'm1_28', src: '/images/Gallery/28.webp' },
    { id: 'm1_29', src: '/images/Gallery/29.webp' },
    { id: 'm1_30', src: '/images/Gallery/30.webp', isWide: true },
    { id: 'm1_31', src: '/images/Gallery/31.webp' },
    { id: 'm1_32', src: '/images/Gallery/32.webp' },
    { id: 'm1_33', src: '/images/Gallery/33.webp' },
    { id: 'm1_34', src: '/images/Gallery/34.webp' },
  ];

  const mobRow2 = [
    { id: 'm2_1', src: '/images/Gallery/35.webp' },
    { id: 'm2_2', src: '/images/Gallery/36.webp' },
    { id: 'm2_3', src: '/images/Gallery/37.webp', isWide: true },
    { id: 'm2_4', src: '/images/Gallery/38.webp' },
    { id: 'm2_5', src: '/images/Gallery/39.webp' },
    { id: 'm2_6', src: '/images/Gallery/40.webp' },
    { id: 'm2_7', src: '/images/Gallery/41.webp' },
    { id: 'm2_8', src: '/images/Gallery/42.webp' },
    { id: 'm2_9', src: '/images/Gallery/43.webp' },
    { id: 'm2_10', src: '/images/Gallery/44.webp' },
    { id: 'm2_11', src: '/images/Gallery/45.webp' },
    { id: 'm2_12', src: '/images/Gallery/46.webp', isWide: true },
    { id: 'm2_13', src: '/images/Gallery/47.webp' },
    { id: 'm2_14', src: '/images/Gallery/48.webp' },
    { id: 'm2_15', src: '/images/Gallery/49.webp' },
    { id: 'm2_16', src: '/images/Gallery/50.webp' },
    { id: 'm2_17', src: '/images/Gallery/51.webp' },
    { id: 'm2_18', src: '/images/Gallery/52.webp' },
    { id: 'm2_19', src: '/images/Gallery/53.webp' },
    { id: 'm2_20', src: '/images/Gallery/54.webp' },
    { id: 'm2_21', src: '/images/Gallery/55.webp', isWide: true },
    { id: 'm2_22', src: '/images/Gallery/56.webp' },
    { id: 'm2_23', src: '/images/Gallery/57.webp' },
    { id: 'm2_24', src: '/images/Gallery/58.webp' },
    { id: 'm2_25', src: '/images/Gallery/59.webp' },
    { id: 'm2_26', src: '/images/Gallery/60.webp' },
    { id: 'm2_27', src: '/images/Gallery/61.webp' },
    { id: 'm2_28', src: '/images/Gallery/62.webp' },
    { id: 'm2_29', src: '/images/Gallery/63.webp' },
    { id: 'm2_30', src: '/images/Gallery/64.webp' },
    { id: 'm2_31', src: '/images/Gallery/65.webp', isWide: true },
    { id: 'm2_32', src: '/images/Gallery/66.webp' },
    { id: 'm2_33', src: '/images/Gallery/67.webp' },
    { id: 'm2_34', src: '/images/Gallery/68.webp' },
    { id: 'm2_35', src: '/images/Gallery/69.webp' },
  ];

  const mobRow3 = [
    { id: 'm3_1', src: '/images/Gallery/70.webp' },
    { id: 'm3_2', src: '/images/Gallery/71.webp' },
    { id: 'm3_3', src: '/images/Gallery/72.webp' },
    { id: 'm3_4', src: '/images/Gallery/73.webp' },
    { id: 'm3_5', src: '/images/Gallery/74.webp' },
    { id: 'm3_6', src: '/images/Gallery/75.webp', isWide: true },
    { id: 'm3_7', src: '/images/Gallery/76.webp' },
    { id: 'm3_8', src: '/images/Gallery/77.webp' },
    { id: 'm3_9', src: '/images/Gallery/78.webp' },
    { id: 'm3_10', src: '/images/Gallery/79.webp' },
    { id: 'm3_11', src: '/images/Gallery/80.webp' },
    { id: 'm3_12', src: '/images/Gallery/81.webp' },
    { id: 'm3_13', src: '/images/Gallery/82.webp' },
    { id: 'm3_14', src: '/images/Gallery/83.webp', isWide: true },
    { id: 'm3_15', src: '/images/Gallery/84.webp' },
    { id: 'm3_16', src: '/images/Gallery/85.webp' },
    { id: 'm3_17', src: '/images/Gallery/86.webp' },
    { id: 'm3_18', src: '/images/Gallery/87.webp' },
    { id: 'm3_19', src: '/images/Gallery/88.webp' },
    { id: 'm3_20', src: '/images/Gallery/89.webp' },
    { id: 'm3_21', src: '/images/Gallery/90.webp' },
    { id: 'm3_22', src: '/images/Gallery/91.webp' },
    { id: 'm3_23', src: '/images/Gallery/92.webp', isWide: true },
    { id: 'm3_24', src: '/images/Gallery/93.webp' },
    { id: 'm3_25', src: '/images/Gallery/94.webp' },
    { id: 'm3_26', src: '/images/Gallery/95.webp' },
    { id: 'm3_27', src: '/images/Gallery/96.webp' },
    { id: 'm3_28', src: '/images/Gallery/97.webp' },
    { id: 'm3_29', src: '/images/Gallery/98.webp' },
    { id: 'm3_30', src: '/images/Gallery/99.webp' },
    { id: 'm3_31', src: '/images/Gallery/100.webp' },
    { id: 'm3_32', src: '/images/Gallery/101.webp' },
    { id: 'm3_33', src: '/images/Gallery/102.webp', isWide: true },
    { id: 'm3_34', src: '/images/Gallery/103.webp' },
    { id: 'm3_35', src: '/images/Gallery/104.webp' },
  ];

  const mobRow4 = [
    { id: 'm4_1', src: '/images/Gallery/105.webp' },
    { id: 'm4_2', src: '/images/Gallery/106.webp' },
    { id: 'm4_3', src: '/images/Gallery/107.webp' },
    { id: 'm4_4', src: '/images/Gallery/108.webp' },
    { id: 'm4_5', src: '/images/Gallery/109.webp', isWide: true },
    { id: 'm4_6', src: '/images/Gallery/110.webp' },
    { id: 'm4_7', src: '/images/Gallery/111.webp' },
    { id: 'm4_8', src: '/images/Gallery/112.webp' },
    { id: 'm4_9', src: '/images/Gallery/113.webp' },
    { id: 'm4_10', src: '/images/Gallery/114.webp' },
    { id: 'm4_11', src: '/images/Gallery/115.webp' },
    { id: 'm4_12', src: '/images/Gallery/116.webp' },
    { id: 'm4_13', src: '/images/Gallery/117.webp' },
    { id: 'm4_14', src: '/images/Gallery/118.webp', isWide: true },
    { id: 'm4_15', src: '/images/Gallery/119.webp' },
    { id: 'm4_16', src: '/images/Gallery/120.webp' },
    { id: 'm4_17', src: '/images/Gallery/121.webp' },
    { id: 'm4_18', src: '/images/Gallery/122.webp' },
    { id: 'm4_19', src: '/images/Gallery/123.webp' },
    { id: 'm4_20', src: '/images/Gallery/124.webp' },
    { id: 'm4_21', src: '/images/Gallery/125.webp' },
    { id: 'm4_22', src: '/images/Gallery/126.webp' },
    { id: 'm4_23', src: '/images/Gallery/127.webp', isWide: true },
    { id: 'm4_24', src: '/images/Gallery/128.webp' },
    { id: 'm4_25', src: '/images/Gallery/129.webp' },
    { id: 'm4_26', src: '/images/Gallery/130.webp' },
    { id: 'm4_27', src: '/images/Gallery/131.webp' },
    { id: 'm4_28', src: '/images/Gallery/132.webp' },
    { id: 'm4_29', src: '/images/Gallery/133.webp' },
    { id: 'm4_30', src: '/images/Gallery/134.webp' },
    { id: 'm4_31', src: '/images/Gallery/135.webp' },
    { id: 'm4_32', src: '/images/Gallery/136.webp' },
    { id: 'm4_33', src: '/images/Gallery/137.webp', isWide: true },
    { id: 'm4_34', src: '/images/Gallery/138.webp' },
    { id: 'm4_35', src: '/images/Gallery/139.webp' },
  ];
  const handleOpenVideo = (url) => {
    setCurrentVideoUrl(url);
    setIsModalOpen(true);
  };

  // Универсальная функция отрисовки карточки
  const renderCard = (item, isMobile = false) => (
    <div
      className={`${styles.card} ${item.isWide ? styles.wideCard : ''}`}
      onClick={() => item.type === 'video' && handleOpenVideo(item.src)}
    >
      <Image
        src={item.type === 'video' ? item.poster : item.src}
        alt='Lumiland'
        fill
        sizes={isMobile ? '250px' : '500px'}
        className={styles.cardImage}
        loading='lazy'
        quality={85}
      />
      {item.type === 'video' && (
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
