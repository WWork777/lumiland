// components/Hero/Hero.jsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from './Hero.module.scss';
import { useEffect, useRef } from 'react';

export default function Hero() {
  const imageMainRef = useRef(null);
  const maxScrollRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      let currentProgress = Math.min(scrollTop / scrollHeight, 1);
      // Сохраняем максимальный прогресс
      currentProgress = Math.pow(currentProgress, 0.5);
      maxScrollRef.current = Math.max(maxScrollRef.current, currentProgress);

      // Масштабируем от 0.5 до 1
      const scale = 0.5 + maxScrollRef.current * 0.4;

      if (imageMainRef.current) {
        imageMainRef.current.style.transform = `scale(${scale})`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Инициализация при загрузке
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.imageTop}>
        <div className={styles.imageLeft}>
            <Image
              src='/images/Hero/imageLeft.webp'
              alt='lumiland'
              fill
              sizes="(max-width: 768px) 150px, 260px" // Подсказка для браузера
              className={styles.responsiveImg}
            />
          </div>

          <div className={styles.imageRight}>
            <Image
              src='/images/Hero/imageRight.webp'
              alt='lumiland'
              fill
              sizes="(max-width: 768px) 160px, 281px"
              className={styles.responsiveImg}
            />
          </div>
      </div>
      <div className={styles.imageBg}>
        <div className={styles.imageBgLeft}>
          <Image
            src={'/images/Hero/imageBgLeft.webp'}
            width={464}
            height={460}
            alt='lumiland'
          />
        </div>
        <div className={styles.imageBgRight}>
          <Image
            src={'/images/Hero/imageBgRight.webp'}
            width={1000}
            height={700}
            alt='lumiland'
          />
        </div>
      </div>
      <div className={styles.heroContent}>
        <div className={styles.sloganTop}>
          <p>Детские и взрослые мечты сбываются в LUMILAND</p>
        </div>
        <h1>
          <span>ЖДЕМ ВАС В ПЕРВОМ</span>
          <br />
          <span>МУЛЬТИМЕДИЙНОМ</span>
          <br />
          <span className={styles.titleWithGeo}>
            <span>ПАРКЕ В ТОМСКЕ</span>
            <span className={styles.geoInline}>
              <Image
                src={'/icons/geo.svg'}
                width={53}
                height={53}
                alt='ул. Котовского 19/1, ТЦ Смайлcity'
              />
              <span>
                ул. Котовского 19/1,
                <br />
                ТЦ Смайлcity
              </span>
            </span>
          </span>
        </h1>
        <div className={styles.buttonsContainer}>
          <Link href='tel:79528800330' className={styles.phoneButton}>
            <span>Позвонить в парк</span>
            <Image
              src={'/icons/phone.svg'}
              width={24}
              height={24}
              alt='телефон'
            />
          </Link>
          <Link href='#info' className={styles.infoButton}>
            Подробнее о парке
          </Link>
        </div>
        <div className={styles.WhiteBg}></div>
        <div
          ref={imageMainRef}
          className={styles.imageMain}
          style={{
            transform: 'scale(0.5)',
            transition: 'transform 0.3s ease-out',
            transformOrigin: 'center center',
          }}
        >
          <Image
            src={'/images/Hero/imageMain.webp'}
            width={650}
            height={650}
            alt='lumiland'
          />
        </div>
      </div>
    </section>
  );
}
