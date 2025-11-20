import "./globals.scss";
import Header from "./Components/Header/Header";
import YandexMetrika from "./Components/YandexMetrika/YandexMEtrika";
export const metadata = {
  icons: {
    icon: [
      { rel: "icon", type: "image/svg+xml", url: "/favicon/favicon.svg" },
      {
        rel: "icon",
        type: "image/png",
        sizes: "96x96",
        url: "/favicon/icon1.png",
      },
    ],
    shortcut: "/favicon/favicon.ico",
    apple: "/favicon/apple-icon.png",
  },
  manifest: "/favicon/site.webmanifest",
};
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
