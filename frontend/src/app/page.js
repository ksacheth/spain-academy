import Image from "next/image";
import Headers from "./components/Header";
import Hero from "./components/Hero";
import Hero2 from "./components/Hero2";
import Progress from "./components/progress";
export default function Home() {
  return (
    <div className="bg-white">
      <Headers />
      {/* <Hero />
      <Hero2 /> */}
      <Progress />
    </div>
  );
}
