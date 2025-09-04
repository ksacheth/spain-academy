import Image from "next/image";
import Headers from "./components/Header";
import Hero from "./components/Hero";
import Hero2 from "./components/Hero2";
export default function Home() {
  return (
    <div className="bg-white">
      <Headers />
      <Hero />
      <Hero2 />
    </div>
  );
}
