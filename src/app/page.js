import Contacts from './Components/Contacts/Contacts';
import Hero from './Components/Hero/Hero';
import Info from './Components/Info/Info';
import Questions from './Components/Questions/Questions';
import Price from './Components/Price/Price';
import Birthday from './Components/Birthday/Birthday';
import Mero from './Components/Mero/Mero.jsx';
import Gallery from './Components/Gallery/Gallery';
import { headers } from 'next/headers';
import MultyVidget from './Components/MultiVidget/MultiVidget';
import WheelOfFortune from './Components/WheelOfFortune/WheelOfFortune';

export async function generateMetadata() {
  const headersList = headers();
  const host = (await headersList).get('host');

  const protocol = 'https';
  const fullURL = `${protocol}://${host}`;

  return {
    title: 'LUMILAND | Первый мультимедийный парк',
    description:
      'LUMILAND в Томске — первый мультимедийный парк, где оживают картины.',
    alternates: {
      canonical: fullURL,
    },
  };
}

export default function Home() {
  return (
    <>
      <Hero />

      <main>
        <Info />
        <Mero />
        <Price />
        <Birthday />

        <MultyVidget />

        <Gallery />
        <Questions />
        <Contacts />
        {/* <WheelOfFortune /> */}
      </main>
    </>
  );
}
