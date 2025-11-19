import Contacts from "./Components/Contacts/Contacts";
import Hero from "./Components/Hero/Hero";
import Info from "./Components/Info/Info";
import Questions from "./Components/Questions/Questions";
import { Metadata } from 'next';
import { headers } from "next/headers";
export async function generateMetadata() {
  const headersList = headers();
  const host = (await headersList).get("host");
  const protocol = "https"; // Или 'http' если не используете https
  const fullURL = `${protocol}://${host}`;

  return {
    title: "LUMILAND | Первый мультимедийный парк",
    description: "LUMILAND в Томске — первый мультимедийный парк, где оживают картины. Интерактивные инсталляции, цифровое искусство и виртуальная реальность для детей и взрослых. Забронируйте билеты онлайн!",
    keywords: "мультимедийный парк Томск, LUMILAND, Lumiland Томск, цифровое искусство, интерактивный парк, развлечения Томск, куда сходить с ребенком, иммерсивное шоу",
    alternates: {
      canonical: fullURL,
    },
    openGraph: {
      title: "LUMILAND | Первый мультимедийный парк в Томске",
      description: "Откройте новый мир в Томске! LUMILAND — уникальное пространство света, звука и технологий. Интерактивные инсталляции, проекционное шоу, виртуальная реальность. Забронируйте посещение!",
      url: fullURL,
      siteName: "LUMILAND Томск",
      images: [
        {
          url: `/images/og-image.jpg`, // Убедитесь что этот файл существует
          width: 1200,
          height: 630,
          alt: "LUMILAND Томск - мультимедийный парк с цифровым искусством",
        },
      ],
      locale: "ru_RU",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "LUMILAND | Первый мультимедийный парк в Томске",
      description: "Погрузитесь в мир цифрового искусства в первом мультимедийном парке Томска LUMILAND",
      images: [`/images/og-image.jpg`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export default function Home() {
  return (
    <>
    <Hero />
    <main>
      <Info />
      <Questions />
      <Contacts />
    </main>
    </>
  );
}
