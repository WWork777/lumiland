import Image from "next/image";
import styles from "./Hero.module.scss";
export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.imageTop}>
                <div className={styles.imageLeft}>
                    <Image src={'/images/Hero/imageLeft.webp'} width={260} height={260} alt="lumiland"/>
                </div>
                <div className={styles.imageRight}>
                    <Image src={'/images/Hero/imageRight.webp'} width={260} height={260} alt="lumiland"/>
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
                <h1><span>открытие первого</span><br/><span>мультимедийного</span><br/><span>парка в томске</span><br/><span>уже в декабре</span></h1>
                <div className={styles.Geo}>
                    <Image src={'/icons/geo.svg'} width={53} height={53} alt="ул. Котовского 19/1, ТЦ Смайлcity"/>
                    <span>ул. Котовского 19/1,<br />ТЦ Смайлcity</span>
                </div>
                <div className={styles.WhiteBg}></div>
                <div className={styles.imageMain}>
                    <Image src={'/images/Hero/imageMain.webp'} width={526} height={526} alt="lumiland"/>
                </div>
            </div>
        </section>
    )
}