// components/Hero/Hero.jsx
'use client';

import Image from "next/image";
import styles from "./Hero.module.scss";
import { useEffect, useRef } from "react";

export default function Hero() {
    const imageMainRef = useRef(null);
    const maxScrollRef = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
            let currentProgress = Math.min(scrollTop / scrollHeight, 1);
            
            // Сохраняем максимальный прогресс
            currentProgress = Math.pow(currentProgress, 0.5);
            maxScrollRef.current = Math.max(maxScrollRef.current, currentProgress);
            
            // Масштабируем от 0.5 до 1
            const scale = 0.5 + (maxScrollRef.current * 0.4);
            
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
                    <Image src={'/images/Hero/imageLeft.webp'} width={260} height={260} alt="lumiland"/>
                </div>
                <div className={styles.imageRight}>
                    <Image src={'/images/Hero/imageRight.webp'} width={281} height={282} alt="lumiland"/>
                </div>
            </div>
            <div className={styles.imageBg}>
                <div className={styles.imageBgLeft}>
                    <Image src={'/images/Hero/imageBgLeft.webp'} width={464} height={460} alt="lumiland" />
                </div>
                <div className={styles.imageBgRight}>
                    <Image src={'/images/Hero/imageBgRight.webp'} width={1000} height={700} alt="lumiland" />
                </div>
            </div>
            <div className={styles.heroContent}>
                <div className={styles.sloganTop}>
                    <p>Детские и взрослые мечты сбываются в LUMILAND</p>
                </div>
                <h1><span>ОТКРЫТИЕ ПЕРВОГО</span><br/><span>МУЛЬТИМЕДИЙНОГО</span><br/><span>ПАРКА В ТОМСКЕ</span><br/><span>УЖЕ В ДЕКАБРЕ</span></h1>
                <div className={styles.geo}>
                    <Image src={'/icons/geo.svg'} width={53} height={53} alt="ул. Котовского 19/1, ТЦ Смайлcity"/>
                    <span>ул. Котовского 19/1,<br />ТЦ Смайлcity</span>
                </div>
                <div className={styles.WhiteBg}></div>
                <div 
                    ref={imageMainRef}
                    className={styles.imageMain}
                    style={{ 
                        transform: 'scale(0.5)',
                        transition: 'transform 0.3s ease-out',
                        transformOrigin: 'center center'
                    }}
                >
                    <Image src={'/images/Hero/imageMain.webp'} width={526} height={526} alt="lumiland"/>
                </div>
            </div>
        </section>
    )
}