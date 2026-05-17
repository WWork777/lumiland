"use client";
import { useState, useEffect, useRef } from 'react';
import styles from './styles.module.scss';
import './styles.scss';

export default function MultyVidget() {
  const [widgetHeight, setWidgetHeight] = useState('600px');
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const widgetDiv = document.getElementById('certificate_widget');
    if (!widgetDiv) return;

    // Вспомогательная функция для загрузки скрипта и возврата Promise
    const loadScript = (src, id) => {
      return new Promise((resolve, reject) => {
        if (document.getElementById(id)) {
          resolve(); // уже загружен
          return;
        }
        const script = document.createElement('script');
        script.src = src;
        script.id = id;
        script.async = true;
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
      });
    };

    // Идентификаторы, чтобы не дублировать скрипты
    const jqueryId = 'jquery-script';
    const widgetScriptId = 'multy-widget-script';

    // 1. Загружаем jQuery, затем виджет
    loadScript('https://code.jquery.com/jquery-3.7.1.min.js', jqueryId)
      .then(() => loadScript(
        'https://widget.metechcards.ru/widget/?client_id=a77c8318-6a08-ff86-ec7a-4c6f671c1840&multi=y&color_button=%23dcff00&color_button_text=%23000000&color_background=%23f2e6f5',
        widgetScriptId
      ))
      .catch((err) => console.error('Ошибка загрузки скриптов виджета:', err));

    // 2. Наблюдение за высотой виджета
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const h = entry.target.scrollHeight;
        if (h > 0) setWidgetHeight(`${h}px`);
      }
    });
    resizeObserver.observe(widgetDiv);

    // 3. Таймер на случай поздней инициализации
    const timer = setTimeout(() => {
      const h = widgetDiv.scrollHeight;
      if (h > 0) setWidgetHeight(`${h}px`);
    }, 2000);

    // 4. Очистка при размонтировании
    return () => {
      resizeObserver.disconnect();
      clearTimeout(timer);

      // Удаляем оба скрипта
      const jq = document.getElementById(jqueryId);
      if (jq) jq.remove();
      const ws = document.getElementById(widgetScriptId);
      if (ws) ws.remove();

      // Очищаем контейнер
      if (widgetDiv) widgetDiv.innerHTML = '';
    };
  }, []);

  return (
    <>
      <h2 className={styles.mainTitle} id="vidget">
        <span className={styles.purpleText}>Приобрести сертификат</span>{' '}
        Lumiland
      </h2>

      <div
        ref={containerRef}
        style={{
          width: '100%',
          height: widgetHeight,
          overflow: 'hidden',
          transition: 'height 0.2s ease',
          margin: 0,
          padding: 0,
        }}
      >
        <div id="certificate_widget" />
      </div>
    </>
  );
}