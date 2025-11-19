import "./globals.scss";
import Header from "./Components/Header/Header";
import YandexMetrika from "./Components/YandexMetrika/YandexMEtrika";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <YandexMetrika />
      </body>
    </html>
  );
}
