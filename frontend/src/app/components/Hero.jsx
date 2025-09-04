import Button2 from "./Button2/Button2";
export default function Hero() {
  return (
    <div
      className="bg-blue-200 flex text-black overflow-visible"
      style={{ height: "calc(100vh - 168px)" }}
    >
      <div className="bg-white w-[45.833333%] shrink-0 pl-18 ">
        <div className="text-[#009839] pt-18 mb-4">
          <h1 className="tracking-[-0.045em] leading-[1.14] text-[65px] font-serif">
            The only Study-in- <span className="italic">Spain</span> program for
            Southeast <span className="italic">Asians</span>
          </h1>
        </div>
        <div className="text-black text-[20px]  pr-22 mb-20 font-sans-alt tracking-[-0.035em] leading-[1.3] ">
          Any questions big or small, We are here to listen, support, and guide.
          So, what are you{" "}
          <span className="text-[#009839] italic">waiting</span> for?"
        </div>
        <div className=" mb-10">
          <Button2>Book a Consultation</Button2>
        </div>
      </div>
      <div></div>
    </div>
  );
}
