'use client';

import styles from './styles.module.scss';
import { useState, useEffect } from 'react';

export default function Vidget() {
  // Состояние для хранения высоты iframe
  const [iframeHeight, setIframeHeight] = useState('600px');

  const iframeContent = `
    <!DOCTYPE html>
    <html lang="ru">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          /* overflow: hidden отключает внутренний скролл браузера */
          body { margin: 0; padding: 0; overflow: hidden; }
        </style>
        
        <!-- Загружаем jQuery -->
        <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
      </head>
      <body>
        <div id="certificate_widget"></div>
        
        <script src="https://widget.metechcards.ru/widget/?client_id=f448000a-12b4-7096-ed1d-bbe0c0c55a50&color_button=%23dcff00&color_button_text=%23000000&color_background=%23f2e6f5"></script>
        
        <!-- Скрипт, который измеряет высоту виджета и отправляет её в Next.js -->
        <script>
          const sendHeight = () => {
            const height = document.body.scrollHeight;
            window.parent.postMessage({ type: 'resize-vidget', height: height }, '*');
          };
          
          const observer = new ResizeObserver(sendHeight);
          observer.observe(document.body);
          
          window.onload = sendHeight;
        </script>
      </body>
    </html>
  `;

  useEffect(() => {
    const handleMessage = (event) => {
      // Проверяем, что сообщение именно от этого виджета
      if (event.data?.type === 'resize-vidget') {
        setIframeHeight(`${event.data.height}px`);
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  return (
    <>
      <h2 className={styles.mainTitle} >
        <span className={styles.purpleText}>Приобрести сертификат</span>{' '}
        Lumiland
      </h2>
      <iframe
        srcDoc={iframeContent}
        scrolling="no"
        style={{
          width: '100%',
          height: iframeHeight,
          border: 'none',
          transition: 'height 0.2s ease',
        }}
        title="Одиночный сертификат"
      />
    </>
  );
}
