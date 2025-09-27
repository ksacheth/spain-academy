import Button2 from "./Button2/Button2";
import TextReveal from "./TextReveal";

export default function Hero() {
  return (
    <div className="flex h-[clamp(400px,50vw,1000px)] text-black mx-auto border-2 border-red-800">
      <div className="flex flex-col w-[45.8%] shrink-0 items-center justify-center bg-white border-2 border-red-600 relative">
        <div className="absolute  max-w-[943.8464px] border-2 border-red-400">
          <div className="font-serif leading-[1.25] tracking-[-0.045em] 2xl:text-[5rem] xl:text-[4rem] lg:text-[3.2rem] md:text-[2.5rem] text-[#009839]">
            <TextReveal>
              <h1 className="">
                <span className="block">The only Study-in-</span>{" "}
                <span className="block">
                  <span className="italic">Spain</span> program for
                </span>{" "}
                Southeast <span className="italic">Asians</span>
              </h1>
            </TextReveal>
          </div>
          <TextReveal>
            <div className="mt-4 font-sans-alt leading-[1.25] tracking-[-0.035em] text-black 2xl:text-[1.55rem] xl:text-[1.25rem] lg:text-[1rem] md:text-[0.8rem] ">
              <span className="block">
                Any questions big or small, We are here to listen, support,
              </span>{" "}
              and guide. So, what are you{" "}
              <span className="text-[#009839] italic">waiting</span> for?"
            </div>
          </TextReveal>

          <div className="absolute w-fit ml-5 mt-[2rem]">
            <Button2>Book a Consultation</Button2>
          </div>
        </div>
      </div>
      <div className="grow bg-transparent overflow-visible z-10 border-2 border-red-600">
        <div className="mx-auto my-auto  -4 max-w-[1214px] relative h-full border-2 border-red-400">
          <span>
            <img
              src="Person1.png"
              alt="Hero Image"
              className=" absolute  w-[clamp(100px,20vw,448px)]  bottom-0 z-15 "
            />
          </span>
          <span>
            <img
              src="Person2.png"
              alt="Hero Image"
              className=" absolute  w-[clamp(100px,27vw,604.8px)] bottom-0 left-[35%]  z-20 "
            />
          </span>
          <span>
            <img
              src="Person3.png"
              alt="Hero Iage"
              className=" absolute  w-[clamp(100px,23vw,515.2px)] bottom-0 left-[75%] z-15 "
            />
          </span>
        </div>
      </div>
    </div>
  );
}
