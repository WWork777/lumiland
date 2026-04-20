import Script from 'next/script';
import styles from './styles.module.scss';
export default function Vidget() {
  return (
    <>
    <h2 className={styles.mainTitle}><span className={styles.purpleText}>Приобрести сертификат</span> Lumiland</h2>
      <div id="certificate_widget"></div>
      <Script
        id="metechcards-widget"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(d, w, s) {
              var gcw = d.createElement(s);
              gcw.type = 'text/javascript';
              gcw.async = true;
              gcw.src = 'https://widget.metechcards.ru/widget/?client_id=f448000a-12b4-7096-ed1d-bbe0c0c55a50&color_button=%23dcff00&color_button_text=%23000000&color_background=%23f2e6f5';
              d.body.appendChild(gcw);
            })(document, window, 'script');
          `,
        }}
      />
    </>
  );
}