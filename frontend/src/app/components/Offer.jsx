export default function Offer() {
  return (
    <div className="h-[100svh]">
      <div className="flex justify-center font-arimo font-bold text-[3.5rem] leading-[1.14] tracking-[-0.045em] mt-[12rem]">
        What We
        <span className="text-[#009938] italic font-noto-serif font-semibold">
          {" "}
          &nbsp;Offer
        </span>
      </div>
      <div className="flex flex-col justify-center mt-[3rem] items-center gap-10">
        <div className="relative w-fit ">
          {/* Background shadow layer */}
          <div className="absolute inset-0  rounded-2xl bg-red-200"></div>

          {/* Main card */}
          <div className="relative flex items-center  translate-y-5 justify-between rounded-2xl bg-red-700 px-6 py-5 text-white w-[420px] rotate-[2deg]">
            <div>
              <h2 className="text-lg font-bold">The Essentials</h2>
              <p className="text-sm mt-1 text-red-100">
                Language, University &amp; Visa Visas, housing, insurance, and
                everything that gets you here.
              </p>
            </div>
            <span className="text-2xl font-light">+</span>
          </div>
        </div>


        <div className="relative w-[32rem]">
          {/* Background shadow layer */}
          <div className="absolute inset-0  translate-x-4 rounded-2xl bg-[#FEE69E] h-[8rem]"></div>

          {/* Main card */}
          <div className="relative flex items-center  justify-between rounded-2xl bg-[#FDBD09] px-6 py-5 text-white  rotate-[-3deg] h-[8rem]">
            <div>
              <h2 className="text-lg font-bold">The Boosters</h2>
              <p className="text-sm mt-1 text-red-100">
                What takes you from surviving to thriving (mentorship, simulations, and real-world prep )
              </p>
            </div>
            <span className="text-2xl font-light">+</span>
          </div>
        </div>


        <div className="relative w-[25rem]">
          {/* Background shadow layer */}
          <div className="absolute inset-0  rounded-2xl -translate-x-2 bg-[#A6DCBA] rotate-[-3deg]"></div>

          {/* Main card */}
          <div className="relative flex items-center justify-between rounded-2xl bg-[#009938] px-6 py-5 text-white rotate-[2deg]">
            <div>
              <h2 className="text-lg font-bold">Future-Proof Tools</h2>
              <p className="text-sm mt-1 text-red-100 pb-[1rem]">
                Career & Future Planning
              </p>
            </div>
            <span className="text-2xl font-light">+</span>
          </div>
        </div>


        <div className="relative w-[25rem] -mt-8 -z-1">
          {/* Background shadow layer */}
          <div className="absolute inset-0  rounded-2xl translate-x-3 translate-y-2 bg-[#B2B2B2] "></div>

          {/* Main card */}
          <div className="relative flex items-center justify-between rounded-2xl bg-[#2A2A2A] px-6 py-5 text-white -rotate-[3deg]">
            <div>
              <h2 className="text-lg font-bold">Real Life in Spain</h2>
              <p className="text-sm mt-1 text-red-100 pb-[1rem]">
                Cultural Integration & Local Experiences
              </p>
            </div>
            <span className="text-2xl font-light">+</span>
          </div>
        </div>
      </div>
    </div>
  );
}
