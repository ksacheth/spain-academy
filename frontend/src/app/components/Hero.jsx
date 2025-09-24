import Button2 from "./Button2/Button2";
import TextReveal from "./TextReveal";

export default function Hero() {
  return (
    <div
      className="flex h-[clamp(500px,50vw,1000px)] text-black mx-auto " 
    >
      <div className="flex w-[45.8%] shrink-0 flex-col justify-center bg-white pl-18  ">
        <div className="w-[92%] max-w-[943.8464px] mx-auto  ">
          <div className="font-serif leading-[1.14] tracking-[-0.045em] text-[clamp(1.875rem,4.5vw,108px)] text-[#009839]  ">
            <TextReveal>
              <h1>
                The only Study-in- <span className="italic">Spain</span> program
                for Southeast <span className="italic">Asians</span>
              </h1>
            </TextReveal>
          </div>
          <TextReveal>
            <div className="mt-4 font-sans-alt leading-[1.3] tracking-[-0.035em] text-black text-[clamp(1rem,1.5vw,36px)]  ">
              Any questions big or small, We are here to listen, support, and
              guide. So, what are you{" "}
              <span className="text-[#009839] italic">waiting</span> for?"
            </div>
          </TextReveal>
        </div>
        <div className="mt-10  w-fit ml-5">
          <Button2>Book a Consultation</Button2>
        </div>
      </div>
      <div className="grow bg-transparent overflow-visible z-10  ">
        <div className="mx-auto my-auto  -4 max-w-[1214px] relative h-full ">
        <span><img src="Person1.png" alt="Hero Image" className=" absolute  w-[clamp(100px,20vw,448px)]  bottom-0 z-15 " /></span>
        <span><img src="Person2.png" alt="Hero Image" className=" absolute  w-[clamp(100px,27vw,604.8px)] bottom-0 left-[35%]  z-20 " /></span>
        <span><img src="Person3.png" alt="Hero Iage" className=" absolute  w-[clamp(100px,23vw,515.2px)] bottom-0 left-[75%] z-15 " /></span>
        </div>
      </div>
    </div>
  );
}
