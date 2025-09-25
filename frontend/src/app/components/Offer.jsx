import "../index.css";

export default function Offer() {
  return (
    <div className="w-full">
      <div className="flex justify-center font-arimo font-bold text-[3.5rem] leading-[1.14] tracking-[-0.045em] mt-[12rem]">
        What We
        <span className="text-[#009938] italic font-noto-serif font-semibold">
          {" "}
          &nbsp;Offer
        </span>
      </div>
      {/* Cards Container */}
      <div className=" flex flex-col justify-center mt-[3rem] items-center gap-10 mb-[10rem]">
        <div className="relative w-[30rem] flex flex-col group">
          {/* Background shadow layer */}
          <div className="cardbg absolute inset-0 rounded-2xl bg-red-200 translate-y-2" />

          {/* Main card */}
          <div className="card relative flex-col justify-between items-start rounded-2xl bg-red-700 px-6 py-5 text-white w-full rotate-[2deg] translate-y-5 shadow-lg transition-all duration-300 ease-out">
            {/* header */}
            <div className="min-w-0">
              <h2 className="text-lg font-bold">The Essentials</h2>
              <p className="text-sm mt-1 text-red-100">
                Language, University &amp; Visa — visas, housing, insurance, and
                everything that gets you here.
              </p>
            </div>

            {/* plus → minus on hover (simple rotate) */}
            <span className="ml-4 text-2xl font-light leading-none transition-transform duration-300 ease-out group-hover:rotate-90">
              +
            </span>
            {/* expandable content */}
            <div className="text1 hidden pr-4">
              <p className="text-sm text-red-50">
                We help you build the foundation for your life in Spain through
                three essential services:
              </p>
              <ul className="mt-2 list-disc pl-5 space-y-1 text-sm text-red-50/90">
                <li>
                  <span className="font-semibold">Language School:</span>{" "}
                  Intensive Spanish language programs to help you gain fluency
                  for academic, social, and everyday life.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="relative w-[32rem]">
          {/* Background shadow layer */}
          <div className="cardbg absolute inset-0  translate-x-4 rounded-2xl bg-[#FEE69E]"></div>

          {/* Main card */}
          <div className=" card relative flex items-center  justify-between rounded-2xl bg-[#FDBD09] px-6 py-5 text-white  rotate-[-3deg]">
            <div>
              <h2 className="text-lg font-bold">The Boosters</h2>
              <p className="text-sm mt-1 text-red-100">
                What takes you from surviving to thriving (mentorship,
                simulations, and real-world prep )
              </p>
            </div>
            <span className="text-2xl font-light">+</span>
          </div>
        </div>

        <div className="relative w-[25rem]">
          {/* Background shadow layer */}
          <div className=" cardbg absolute inset-0  rounded-2xl -translate-x-2 bg-[#A6DCBA] rotate-[-3deg]"></div>

          {/* Main card */}
          <div className="card relative flex items-center justify-between rounded-2xl bg-[#009938] px-6 py-5 text-white rotate-[2deg]">
            <div>
              <h2 className="text-lg font-bold">Future-Proof Tools</h2>
              <p className="text-sm mt-1 text-red-100 pb-[1rem]">
                Career & Future Planning
              </p>
            </div>
            <span className="text-2xl font-light">+</span>
          </div>
        </div>

        <div className=" relative w-[25rem] -mt-8">
          {/* Background shadow layer */}
          <div className=" cardbg absolute inset-0  rounded-2xl translate-x-3 translate-y-2 bg-[#B2B2B2] "></div>

          {/* Main card */}
          <div className="card relative flex items-center justify-between rounded-2xl bg-[#2A2A2A] px-6 py-5 text-white -rotate-[3deg]">
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
