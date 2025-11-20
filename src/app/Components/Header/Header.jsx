'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Header.module.scss';

const navItems = [
  { label: 'О парке', href: '#info' },
  { label: 'Вопрос-ответ', href: '#questions' },
  { label: 'Контакты', href: '#contacts' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={styles.header}>
      <Image src='/icons/logo.svg' width={212} height={53} alt='lumiland' />
      <nav className={styles.navigation}>
        {navItems.map(({ label, href }) => (
          <Link key={label} href={href}>
            {label}
          </Link>
        ))}
      </nav>
      <div className={styles.contacts}>
        <Link href='https://wa.me/qr/D6UDOX4E2TVAO1'>
          <Image
            src='/icons/whatsapp.svg'
            width={36}
            height={36}
            alt='Вотсап'
          />
        </Link>
        <Link href='https://t.me/+79528800330'>
          <Image src='/icons/tg.svg' width={36} height={36} alt='телеграм' />
        </Link>
        <div className={styles.numberGeo}>
          <Link href={'tel:79161920266'}>+7 (952) 880-03-30</Link>
          <span>Томск, Котовского 19/1, ТЦ Смайлcity</span>
        </div>
      </div>
      <button
        type='button'
        className={styles.burgerMenu}
        onClick={toggleMenu}
        aria-expanded={isMenuOpen}
        aria-controls='mobile-nav'
      >
        <svg
          width='35'
          height='35'
          viewBox='0 0 35 35'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <rect width='35' height='35' rx='5' fill='#DCFF00' />
          <rect
            width='18.8426'
            height='18.8426'
            transform='translate(8.07861 8.60218)'
            fill='#DCFF00'
          />
          <path
            d='M15.6045 12.6026C15.001 12.919 14.9936 13.7066 15.5935 14.0157C15.7297 14.0857 15.8585 14.0857 20.2894 14.0783L24.8492 14.0673L24.9927 13.9679C25.07 13.9127 25.1767 13.806 25.2282 13.7287C25.3055 13.6146 25.3202 13.552 25.3202 13.3128C25.3202 13.0736 25.3055 13.0111 25.2282 12.897C25.1767 12.8197 25.07 12.713 24.9927 12.6578L24.8492 12.5584L20.2821 12.551C16.175 12.5437 15.7039 12.5473 15.6045 12.6026Z'
            fill='black'
          />
          <path
            d='M10.0622 17.3353C9.97386 17.3831 9.85241 17.4935 9.78985 17.5782C9.69048 17.7217 9.67944 17.7622 9.67944 18.0198C9.67944 18.27 9.69048 18.3216 9.77881 18.4504C9.83401 18.5277 9.94074 18.6344 10.018 18.6859L10.1542 18.7779H17.4998H24.8455L24.9817 18.6859C25.0589 18.6344 25.1657 18.5277 25.2209 18.4504C25.3092 18.3216 25.3202 18.27 25.3202 18.0235C25.3202 17.7769 25.3092 17.7254 25.2209 17.5966C25.1657 17.5193 25.0589 17.4126 24.9817 17.361L24.8455 17.269L17.5366 17.258L10.2241 17.2506L10.0622 17.3353Z'
            fill='black'
          />
          <path
            d='M10.0622 22.0459C9.97386 22.0938 9.85241 22.2042 9.78985 22.2888C9.69048 22.4323 9.67944 22.4728 9.67944 22.7304C9.67944 22.9807 9.69048 23.0322 9.77881 23.161C9.83401 23.2383 9.94074 23.345 10.018 23.3965L10.1542 23.4885L14.6624 23.4996C17.8421 23.5069 19.2148 23.4996 19.3142 23.4701C19.3878 23.4481 19.5129 23.3781 19.5865 23.3119C20.0061 22.9439 19.9177 22.2925 19.4062 22.0312C19.2737 21.9649 19.1265 21.9613 14.7471 21.9613H10.2241L10.0622 22.0459Z'
            fill='black'
          />
        </svg>
      </button>
      <div
        className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ''}`}
        id='mobile-nav'
      >
        <div className={styles.mobileMenuHeader}>
          <Image src='/icons/logo.svg' width={149} height={37} alt='lumiland' />
          <button
            type='button'
            onClick={closeMenu}
            className={styles.closeButton}
            aria-label='Закрыть меню'
          >
            <span />
            <span />
          </button>
        </div>
        <nav>
          {navItems.map(({ label, href }) => (
            <Link key={label} href={href} onClick={closeMenu}>
              {label}
            </Link>
          ))}
        </nav>
        <div className={styles.mobileContacts}>
          <div className={styles.mobileSocials}>
            <Link href='#'>
              <Image
                src='/icons/whatsapp.svg'
                width={36}
                height={36}
                alt='Вотсап'
              />
            </Link>
            <Link href='#'>
              <Image
                src='/icons/tg.svg'
                width={36}
                height={36}
                alt='телеграм'
              />
            </Link>
          </div>
          <div className={styles.numberGeo}>
            <Link href={'tel:79528800330'}>+7 (952) 880-03-30</Link>
            <span>Томск, Котовского 19/1, ТЦ Смайлcity</span>
          </div>
        </div>
      </div>
      {isMenuOpen && <div className={styles.backdrop} onClick={closeMenu} />}
    </header>
  );
}
