import Image from "next/image";
import Headers from "./components/NavBar";
import Hero from "./components/Hero";
import Hero2 from "./components/Hero2";
import Progress from "./components/Progress";
import Offer from "./components/Offer";
import Questions from "./components/Questions";

export default function Home() {
  return (
    <div className="bg-transparent overflow-hidden">
      <Headers />
      <Hero />
      <Hero2 />
      <Offer />
      <Progress/>
      <Questions />
    </div>
  );
}
