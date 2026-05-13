'use client';

import { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import './styles.scss';
export default function MultyVidget() {
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
          @media (max-width: 766px) {
            .tabs.top_item, .top .top_item {
                margin-left: 0 !important;
                margin-right: 0 !important;
                
                /* Дополнительный совет: если экран меньше 350px (например, старые iPhone), 
                   жесткая ширина 350px вызовет горизонтальный скролл. 
                   Лучше добавить это: */
                width: 100% !important; 
                max-width: 400px !important;
                justify-content: center;
            }
          }
            @media (max-width: 400px) {
            .top .top_item { 
                .item{
                    padding:5px !important;
                } 
            }
            }
        </style>
        
        <!-- Загружаем jQuery -->
        <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
      </head>
      <body>
        <div id="certificate_widget"></div>
        
        <!-- Скрипт самого Мульти-виджета -->
        <script src="https://widget.metechcards.ru/widget/?client_id=a77c8318-6a08-ff86-ec7a-4c6f671c1840&multi=y&color_button=%23dcff00&color_button_text=%23000000&color_background=%23f2e6f5"></script>
        
        <!-- Скрипт, который измеряет высоту виджета и отправляет её в Next.js -->
        <script>
          const sendHeight = () => {
            const height = document.body.scrollHeight;
            // Обратите внимание: здесь уникальный type для мульти-виджета
            window.parent.postMessage({ type: 'resize-multy-vidget', height: height }, '*');
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
      // Ловим сообщение именно от мульти-виджета
      if (event.data?.type === 'resize-multy-vidget') {
        setIframeHeight(`${event.data.height}px`);
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  return (
    <>
      <h2 className={styles.mainTitle}>
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
        title="Мульти-сертификат"
      />
    </>
  );
}
