import Image from "next/image";
import Headers from "./components/NavBar";
import Hero from "./components/Hero";
import Hero2 from "./components/Hero2";
import Progress from "./components/Progress";
import Offer from "./components/Offer";
import Questions from "./components/Questions";
import Logo from "./components/Logo";
import Footer from "./components/Footer";
import Offer_v3 from "./temp/Offer_v3";
import Offer_v4 from "./temp/Offer_v4";
import Offer_v5 from "./temp/Offer_v5";
import { Spain } from "./components/Spain";

export default function Home() {
  return (
    <div className="bg-transparent overflow-hidden">
      <Headers />
      <Hero />
      <Hero2 />
      <Logo />
      <Offer />
     
      {/* <Spain />
      <Progress />
      <Questions />
      <Footer /> */}
       {/* <Offer_v3 />
      <Offer_v4 />
      <Offer_v5 /> */}
    </div>
  );
}
