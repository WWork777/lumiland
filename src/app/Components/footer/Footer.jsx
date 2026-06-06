import Image from 'next/image';
import Link from "next/link";
import styles from "./styles.module.scss";
export default function Footer() {
    return (
        <div className={styles.footer}>
          <span className={styles.copyright}>
            @ 2026 - Lumi Land. Все права защищены <br />
            <a href="https://virlab42.ru">Сайт разработан компанией <span>Вирлаб</span></a>
          </span>
          
          <div className={styles.socials}>
            <div className={styles.socialsCon}>
              <span className={styles.socialsLabel}>Соц сети:</span>
              <Link href='https://t.me/lumilandkids'>
                <Image
                  src='/icons/tg.svg'
                  width={36}
                  height={36}
                  alt='телеграм'
                />
              </Link>
              <Link href='https://vk.com/lumiland.kids'>
                <Image
                  src='/icons/Vk.svg'
                  width={36}
                  height={36}
                  alt='Вконтакте'
                />
              </Link>
              <Link href='https://pin.it/5ZyschywG'>
                <Image
                  src='/icons/pinterest.svg'
                  width={36}
                  height={36}
                  alt='Pinterest'
                />
              </Link>
              <Link href='https://www.tiktok.com/@lumiland.kids?_r=1&_t=ZS-91YHWj9YweP'>
                <Image
                  src='/icons/tiktok.svg'
                  width={36}
                  height={36}
                  alt='TikTok'
                />
              </Link>
            </div>
            <div className={styles.urData}>
              <span className={styles.socialsLabel}><b>ИП</b> Харитончик Иван Олегович</span>
              <span className={styles.socialsLabel}><b>ИНН</b> 701713554179</span>
              <span className={styles.socialsLabel}><b>Юр. адрес:</b> Томск, ул.Говорова 64-24</span>
            </div>
          </div>
        </div>
    )
}