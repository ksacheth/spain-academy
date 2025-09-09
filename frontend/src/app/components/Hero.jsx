import Button2 from "./Button2/Button2";

export default function Hero() {
  return (
    <div
      className="flex min-h-[500px] bg-blue-200 text-black" // Use min-h instead of a fixed calc for more flexibility
      style={{ height: "calc(100vh - 168px)" }}
    >
      <div className="flex w-[45.833333%] shrink-0 flex-col justify-center bg-white pl-18">        
        <div className="text-[#009839]">
          <h1 
            // clamp(MIN, PREFERRED, MAX)
            // MIN: 30px (1.875rem)
            // PREFERRED: Scales between 30px and 65px. 4.5vw is a good starting point.
            // MAX: 65px (4.0625rem)
            className="font-serif leading-[1.14] tracking-[-0.045em] text-[clamp(1.875rem,4.5vw,4.0625rem)]"
          >
            The only Study-in- <span className="italic">Spain</span> program for
            Southeast <span className="italic">Asians</span>
          </h1>
        </div>

        
        <div 
          
          className="mt-4 mb-20 pr-22 font-sans-alt leading-[1.3] tracking-[-0.035em] text-black text-[clamp(1rem,1.5vw,1.25rem)]"
        >
          Any questions big or small, We are here to listen, support, and guide.
          So, what are you{" "}
          <span className="text-[#009839] italic">waiting</span> for?"
        </div>

        
        <div className="mb-10">
          <Button2>Book a Consultation</Button2>
        </div>
      </div>
      <div className="grow bg-blue-200"></div>
    </div>
  );
}