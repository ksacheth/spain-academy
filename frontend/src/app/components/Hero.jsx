import Button2 from "./Button2/Button2";

export default function Hero() {
  return (
    <div
      className="flex min-h-[500px] bg-blue-200 text-black" // Use min-h instead of a fixed calc for more flexibility
      style={{ height: "calc(100vh - 200px)" }}
    >
      <div className="flex w-[45.833333%] shrink-0 flex-col justify-center bg-white pl-18">
        <div className="border-1 w-[92%] mb-15">
          <div className="font-serif leading-[1.14] tracking-[-0.045em] text-[clamp(1.875rem,4.5vw,8.0625rem)] text-[#009839]">
            <h1>
              The only Study-in- <span className="italic">Spain</span> program
              for Southeast <span className="italic">Asians</span>
            </h1>
          </div>
          <div className="mt-4 font-sans-alt leading-[1.3] tracking-[-0.035em] text-black text-[clamp(1rem,1.5vw,3rem)]">
            Any questions big or small, We are here to listen, support, and
            guide. So, what are you{" "}
            <span className="text-[#009839] italic">waiting</span> for?"
          </div>
        </div>
        <div className="mb-10">
          <Button2>Book a Consultation</Button2>
        </div>
      </div>
      <div className="grow bg-blue-200"></div>
    </div>
  );
}
