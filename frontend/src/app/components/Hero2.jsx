import TextReveal from "./TextReveal";

export default function Hero2() {
  return (
    <div>
      
        <svg
          id="Layer_1"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 850 120"
          className="-mt-[12vw]"
        >
          <path
            className="fill-[#F9F9F9] w-100% h-100%"
            d="M850,43.5v157.5H0v-112c1.1.13,1.36-.69,1.91-1.34,1.3-1.51,2.34-3.36,3.58-4.92,27.33-34.31,60.77-56.09,106.27-51.26,44.73,4.76,82.96,29.63,118.25,55.75,14.12,8.66,28.34,12.21,44.47,10.53,18.99-1.99,29.19-10.13,45.67-18.36,49.29-24.62,97.84-38.22,153.08-40.42,6.89-.27,13.92.21,20.5.54,31.59,1.59,60.34,7.22,90.13,17.87,20.06,7.17,39.96,17.8,61.41,20.09,31.88,3.41,55.11-9.89,83.59-19.88,14.02-4.92,28.2-9.09,42.3-12.7s27.89-6.65,42.11-7.38c9.06-.47,20.49-.27,29.25,2.71,2.58.88,4.86,2.5,7.48,3.27Z"
          />
        </svg>
      
      <div className="h-[80vh] bg-[#F9F9F9] rounded-b-[70px] flex">
        <div className="flex flex-col w-[60vw] relative ">
          <img src="/logo.png" alt="Logo" className="w-[275px] ml-[7vw]" />
          <div className="absolute w-[41.5vw]  mt-20 border-1 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
            <TextReveal>
              <div className="font-serif text-[clamp(0.01rem,2.5vw,3rem)] leading-[1.14] tracking-[-0.065em] text-black">
              <span className="block"><span className="text-[#009938] italic ">Spain Academy</span> is
              your all-in-one</span> onboarding kit for life in{" "}
              <span className="italic">Spain</span>.
            </div>
            </TextReveal>
            <TextReveal>
              <div className="mt-10  font-serif  text-[clamp(0.01rem,2.5vw,3rem)] leading-[1.14] tracking-[-0.065em] text-black">
              <span className=" text-[#959595]">
                From <span className="italic">visas </span>and{" "}
                <span className="italic">university admissions </span>
              </span>
              <span className="text-[#5A5A5A]">
                {" "}
                to <span className="italic">cultural immersion </span>and
                <span className="italic"> community </span>
              </span>
              <span className="text-[#3C3C3C]">
                <span className="italic">support,</span> we make sure you arrive
              </span>{" "}
              prepared, feel at home,and have everything you need to{" "}
              <span className="text-[#009938] italic">thrive</span>.
            </div>
            </TextReveal>
          </div>
        </div>
        <div className="relative overflow-visible w-[40vw] border-1">
          <img src="/green.png" alt="Hero Image" className="absolute top-[18.18%] left-[27.38%] w-[211px] " />
          <img src="/yellow.png" alt="Hero Image" className="absolute -top-47 left-[75.68%] w-[178px]" />
          <img src="/red.png" alt="Hero Image" className="absolute w-[290px] bottom-0 left-[73.80%]" />
        </div>
      </div>
    </div>
  );
}
