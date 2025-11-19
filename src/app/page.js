import Contacts from "./Components/Contacts/Contacts";
import Hero from "./Components/Hero/Hero";
import Info from "./Components/Info/Info";
import Questions from "./Components/Questions/Questions";

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
