import Image from "next/image";
import Headers from "./components/NavBar";
import Hero from "./components/Hero";
import Hero2 from "./components/Hero2";
import Progress from "./components/Progress";
import Offer from "./components/Offer";
import Questions from "./components/Questions";
import Logo from "./components/Logo";
import Footer from "./components/Footer";
import Offer_v3 from "./components/Offer_v3";
import Offer_v4 from "./components/Offer_v4";
import Offer_v5 from "./components/Offer_v5";

export default function Home() {
  return (
    <div className="bg-transparent overflow-hidden">
      <Headers />
      <Hero />
      <Hero2 />
      <Logo />
      <Offer />
      {/* <Offer_v3 />
      <Offer_v4 />
      <Offer_v5 /> */}
      <Progress />
      <Questions />
      <Footer />
    </div>
  );
}
