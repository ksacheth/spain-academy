import Image from "next/image";
import Headers from "./components/Header";
import Hero from "./components/Hero";
import Hero2 from "./components/Hero2";
import ProgressFixed from "./components/progress_fixed";
export default function Home() {
  return (
    <div className="bg-transparent overflow-hidden">
      <Headers />
      <Hero />
      <Hero2 />
      <ProgressFixed />
    </div>
  );
}
