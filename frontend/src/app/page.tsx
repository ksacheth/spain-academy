import Headers from "./components/NavBar";
import Hero from "./components/Hero";
import Hero2 from "./components/Hero2";
import Progress from "./components/Progress";
import Offer from "./components/Offer";
import Questions from "./components/Questions";
import Logo from "./components/Logo";
import Footer from "./components/Footer";
import { Spain } from "./components/Spain";
import { ReactLenis } from "lenis/react";
import StackingCardsDemo from "./components/Stacking";
import Team from "./components/Team";
import NavbarDemo from "./components/NavBar_v2";

export default function Home() {
  return (
    <ReactLenis root>
      <div className="w-screen ">
        {/* <Headers /> */}
        <NavbarDemo />
        <Hero />
        <Hero2 />
        <Logo />

        <Offer />
        <Spain />
        <Progress />
        <StackingCardsDemo />
        <Questions />

        {/* <Offer_v3 />
         <Offer_v4 />
        <Offer_v5 /> */}

        {/* <Team /> */}
      </div>
      <Footer />
    </ReactLenis>
  );
}
