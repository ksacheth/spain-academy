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
        {/* Red card - expandable */}
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
            {/* expandable content */}
            <div
              className="
                    pointer-events-none
                    max-h-0 opacity-0 translate-y-2
                    transition-all duration-300 ease-out
                    group-hover:max-h-[520px] group-hover:opacity-100 group-hover:translate-y-0
                    group-focus-within:max-h-[520px] group-focus-within:opacity-100 group-focus-within:translate-y-0
                  "
            >
              <div className="mt-5 text-[15px] leading-6 text-rose-100">
                <p className="mb-3 font-medium text-white/90">
                  We help you build the foundation for your life in Spain
                  through three essential services:
                </p>
                <ul className="space-y-3 pl-5">
                  <li className="list-disc">
                    <span className="font-semibold text-white">
                      Language School:
                    </span>{" "}
                    Intensive Spanish programs for academic, social, and
                    everyday life.
                  </li>
                  <li className="list-disc">
                    <span className="font-semibold text-white">
                      Academic Counseling (Entry &amp; University Admissions):
                    </span>{" "}
                    Pick the right pathway, prep applications, and secure
                    admission.
                  </li>
                  <li className="list-disc">
                    <span className="font-semibold text-white">
                      Visa Processing:
                    </span>{" "}
                    Full support for student visa, residence permit renewals,
                    and university documentation.
                  </li>
                </ul>
              </div>

              {/* bottom spacing so the reveal has room */}
              <div className="h-3" />
            </div>
          </div>
        </div>

        {/* Yellow card */}
        <div className="relative w-[32rem] flex flex-col group">
          {/* Background shadow layer */}
          <div className="cardbg absolute inset-0  translate-x-4 rounded-2xl bg-[#FEE69E]" />

          {/* Main card */}
          <div className=" card relative flex-col items-start  justify-between rounded-2xl bg-[#FDBD09] px-6 py-5 text-white  rotate-[-3deg] shadow-lg transition-all duration-300 ease-out">
            <div>
              <h2 className="text-lg font-bold">The Boosters</h2>
              <p className="text-sm mt-1 text-red-100">
                What takes you from surviving to thriving (mentorship,
                simulations, and real-world prep )
              </p>
            </div>
            <div
              className="
                    pointer-events-none
                    max-h-0 opacity-0 translate-y-2
                    transition-all duration-300 ease-out
                    group-hover:max-h-[520px] group-hover:opacity-100 group-hover:translate-y-0
                    group-focus-within:max-h-[520px] group-focus-within:opacity-100 group-focus-within:translate-y-0
                  "
            >
              <div className="mt-5 text-[15px] leading-6 text-rose-100">
                <p className="mb-3 font-medium text-white/90">
                  We help you build the foundation for your life in Spain
                  through three essential services:
                </p>
                <ul className="space-y-3 pl-5">
                  <li className="list-disc">
                    <span className="font-semibold text-white">
                      Language School:
                    </span>{" "}
                    Intensive Spanish programs for academic, social, and
                    everyday life.
                  </li>
                  <li className="list-disc">
                    <span className="font-semibold text-white">
                      Academic Counseling (Entry &amp; University Admissions):
                    </span>{" "}
                    Pick the right pathway, prep applications, and secure
                    admission.
                  </li>
                  <li className="list-disc">
                    <span className="font-semibold text-white">
                      Visa Processing:
                    </span>{" "}
                    Full support for student visa, residence permit renewals,
                    and university documentation.
                  </li>
                </ul>
              </div>

              {/* bottom spacing so the reveal has room */}
              <div className="h-3" />
            </div>
          </div>
        </div>

        {/* Green card */}
        <div className="relative w-[25rem] flex flex-col group">
          {/* Background shadow layer */}
          <div className=" cardbg absolute inset-0  rounded-2xl -translate-x-2 bg-[#A6DCBA] rotate-[-3deg]"></div>

          {/* Main card */}
          <div className="card relative flex-col items-start justify-between rounded-2xl bg-[#009938] px-6 py-5 text-white rotate-[2deg] shadow-lg transition-all duration-300 ease-out">
            <div>
              <h2 className="text-lg font-bold">Future-Proof Tools</h2>
              <p className="text-sm mt-1 text-red-100 pb-[1rem]">
                Career & Future Planning
              </p>
            </div>
            <div
              className="
                    pointer-events-none
                    max-h-0 opacity-0 translate-y-2
                    transition-all duration-300 ease-out
                    group-hover:max-h-[520px] group-hover:opacity-100 group-hover:translate-y-0
                    group-focus-within:max-h-[520px] group-focus-within:opacity-100 group-focus-within:translate-y-0
                  "
            >
              <div className="mt-5 text-[15px] leading-6 text-rose-100">
                <p className="mb-3 font-medium text-white/90">
                  We help you build the foundation for your life in Spain
                  through three essential services:
                </p>
                <ul className="space-y-3 pl-5">
                  <li className="list-disc">
                    <span className="font-semibold text-white">
                      Language School:
                    </span>{" "}
                    Intensive Spanish programs for academic, social, and
                    everyday life.
                  </li>
                  <li className="list-disc">
                    <span className="font-semibold text-white">
                      Academic Counseling (Entry &amp; University Admissions):
                    </span>{" "}
                    Pick the right pathway, prep applications, and secure
                    admission.
                  </li>
                  <li className="list-disc">
                    <span className="font-semibold text-white">
                      Visa Processing:
                    </span>{" "}
                    Full support for student visa, residence permit renewals,
                    and university documentation.
                  </li>
                </ul>
              </div>

              {/* bottom spacing so the reveal has room */}
              <div className="h-3" />
            </div>
          </div>
        </div>

        {/* Black card */}
        <div className=" relative w-[25rem] -mt-8 flex flex-col group">
          {/* Background shadow layer */}
          <div className=" cardbg absolute inset-0  rounded-2xl translate-x-3 translate-y-2 bg-[#B2B2B2] "></div>

          {/* Main card */}
          <div className="card relative flex-col items-start justify-between rounded-2xl bg-[#2A2A2A] px-6 py-5 text-white -rotate-[3deg] shadow-lg transition-all duration-300 ease-out">
            <div>
              <h2 className="text-lg font-bold">Real Life in Spain</h2>
              <p className="text-sm mt-1 text-red-100 pb-[1rem]">
                Cultural Integration & Local Experiences
              </p>
            </div>
            <div
              className="
                    pointer-events-none
                    max-h-0 opacity-0 translate-y-2
                    transition-all duration-300 ease-out
                    group-hover:max-h-[520px] group-hover:opacity-100 group-hover:translate-y-0
                    group-focus-within:max-h-[520px] group-focus-within:opacity-100 group-focus-within:translate-y-0
                  "
            >
              <div className="mt-5 text-[15px] leading-6 text-rose-100">
                <p className="mb-3 font-medium text-white/90">
                  We help you build the foundation for your life in Spain
                  through three essential services:
                </p>
                <ul className="space-y-3 pl-5">
                  <li className="list-disc">
                    <span className="font-semibold text-white">
                      Language School:
                    </span>{" "}
                    Intensive Spanish programs for academic, social, and
                    everyday life.
                  </li>
                  <li className="list-disc">
                    <span className="font-semibold text-white">
                      Academic Counseling (Entry &amp; University Admissions):
                    </span>{" "}
                    Pick the right pathway, prep applications, and secure
                    admission.
                  </li>
                  <li className="list-disc">
                    <span className="font-semibold text-white">
                      Visa Processing:
                    </span>{" "}
                    Full support for student visa, residence permit renewals,
                    and university documentation.
                  </li>
                </ul>
              </div>

              {/* bottom spacing so the reveal has room */}
              <div className="h-3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
