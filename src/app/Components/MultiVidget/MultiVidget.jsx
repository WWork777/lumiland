'use client';

import { useEffect, useState } from 'react';
import Script from 'next/script';
import styles from './styles.module.scss';
import './styles.scss';

export default function MultyVidget() {
  const [widgetLoaded, setWidgetLoaded] = useState(false);

  useEffect(() => {
    if (!widgetLoaded) return;

    const interval = setInterval(() => {
      const multiWrap = document.querySelector('.multi_wrap');
      const top = document.querySelector('.top');

      if (multiWrap) {
        multiWrap.removeAttribute('hidden');
        multiWrap.style.display = 'block';
      }

      if (top) {
        top.removeAttribute('hidden');
        top.style.display = 'block';
      }

      const items = document.querySelectorAll('.tabs_content .item');

      items.forEach((item, index) => {
        if (index === 0) {
          item.removeAttribute('hidden');
          item.style.display = 'block';
        }
      });
    }, 300);

    return () => clearInterval(interval);
  }, [widgetLoaded]);

  return (
    <>
      <h2 className={styles.mainTitle} id="vidget">
        <span className={styles.purpleText}>Приобрести сертификат</span>{' '}
        Lumiland
      </h2>

      {/* jQuery */}
      <Script
        src="https://code.jquery.com/jquery-3.7.1.min.js"
        strategy="afterInteractive"
      />

      {/* Widget */}
      <Script
        id="multy-widget"
        src="https://widget.metechcards.ru/widget/?client_id=a77c8318-6a08-ff86-ec7a-4c6f671c1840&multi=y&color_button=%23dcff00&color_button_text=%23000000&color_background=%23f2e6f5"
        strategy="afterInteractive"
        onLoad={() => {
          setWidgetLoaded(true);
        }}
      />

      <div
        style={{
          width: '100%',
          minHeight: '700px',
          overflow: 'hidden',
        }}
      >
        <div id="certificate_widget"></div>
      </div>
    </>
  );
}
