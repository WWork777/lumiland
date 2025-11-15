import Image from "next/image";
import styles from "./Header.module.scss";
import Link from "next/link";
export default function Header() {
    return (
        <header className={styles.header}>
            <Image src="/icons/logo.svg" width={212} height={53} alt="lumiland"/>
            <nav className={styles.navigation}>
                <span>О парке</span>
                <span>Вопрос-ответ</span>
                <span>Контакты</span>
            </nav>
            <div className={styles.contacts}>
                <Link href="#"><Image src="/icons/vk.svg" width={36} height={36} alt="Вконтакте" /></Link>
                <Link href="#"><Image src="/icons/whatsapp.svg" width={36} height={36} alt="Вотсап" /></Link>
                <Link href="#"><Image src="/icons/tg.svg" width={36} height={36} alt="телеграм" /></Link>
                <div className={styles.NumberGeo}>
                    <span>+7 (916) 19-20-266</span>
                    <span>Томск, Котовского 19/1, ТЦ Смайлcity</span>
                </div>
            </div>
        </header>
    )
}