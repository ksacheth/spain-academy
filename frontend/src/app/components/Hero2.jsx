export default function Hero2() {
  return (
    <div>
      <div className="-mt-54 ">
        <svg
          id="Layer_1"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 850 125"
        >
          <path
            className="fill-[#F9F9F9]"
            d="M850,43.5v157.5H0v-112c1.1.13,1.36-.69,1.91-1.34,1.3-1.51,2.34-3.36,3.58-4.92,27.33-34.31,60.77-56.09,106.27-51.26,44.73,4.76,82.96,29.63,118.25,55.75,14.12,8.66,28.34,12.21,44.47,10.53,18.99-1.99,29.19-10.13,45.67-18.36,49.29-24.62,97.84-38.22,153.08-40.42,6.89-.27,13.92.21,20.5.54,31.59,1.59,60.34,7.22,90.13,17.87,20.06,7.17,39.96,17.8,61.41,20.09,31.88,3.41,55.11-9.89,83.59-19.88,14.02-4.92,28.2-9.09,42.3-12.7s27.89-6.65,42.11-7.38c9.06-.47,20.49-.27,29.25,2.71,2.58.88,4.86,2.5,7.48,3.27Z"
          />
          <path
            className="fill-transparent"
            d="M0,84V0h850v40c-1.33-.78-3.06-1.74-4.48-2.27-6.65-2.48-14.87-3.65-21.74-3.75-14.68-.21-29.93,2.04-44.43,5.11-18.37,3.88-38.89,10.67-56.49,17.01-27.19,9.8-47.08,22.11-78.09,18.38-20.54-2.47-36.69-11.97-55.63-18.87-21.83-7.96-43.95-13.47-66.79-16.74-71.16-10.17-142.51,5.88-206.7,39.03-16.73,9.59-32.32,18.43-52.42,17.12-21.77-1.41-33.31-12.55-50.26-24.24-31.07-21.44-65.52-39.63-103.71-42.79-39.24-3.25-71.18,13.23-97.27,41.76L0,84Z"
          />
          <path
            className="fill-none"
            d="M850,40v3.5c-2.62-.77-4.91-2.39-7.48-3.27-8.76-2.98-20.19-3.18-29.25-2.71-14.22.74-28.18,3.82-42.11,7.38s-28.28,7.78-42.3,12.7c-28.48,9.99-51.71,23.29-83.59,19.88-21.44-2.29-41.34-12.93-61.41-20.09-29.79-10.64-58.54-16.28-90.13-17.87-6.58-.33-13.61-.82-20.5-.54-55.24,2.2-103.79,15.8-153.08,40.42-16.47,8.23-26.68,16.38-45.67,18.36-16.12,1.69-30.35-1.87-44.47-10.53-35.3-26.12-73.52-50.99-118.25-55.75-45.5-4.84-78.94,16.95-106.27,51.26-1.24,1.56-2.28,3.4-3.58,4.92-.55.65-.81,1.47-1.91,1.34v-5l11.99-14.26c26.09-28.53,58.04-45,97.27-41.76,38.19,3.16,72.64,21.36,103.71,42.79,16.94,11.69,28.49,22.83,50.26,24.24,20.1,1.31,35.69-7.54,52.42-17.12,64.19-33.15,135.54-49.2,206.7-39.03,22.84,3.27,44.96,8.78,66.79,16.74,18.94,6.91,35.08,16.4,55.63,18.87,31.01,3.73,50.89-8.58,78.09-18.38,17.6-6.34,38.12-13.13,56.49-17.01,14.51-3.07,29.75-5.31,44.43-5.11,6.87.1,15.09,1.27,21.74,3.75,1.43.53,3.15,1.49,4.48,2.27Z"
          />
        </svg>
      </div>
      <div className="bg-[#F9F9F9] h-173 rounded-b-[70px] px-10 flex">
        <div className="w-[53vw]">
          <img
            src="/logo.png"
            alt="logo"
            className="pt-10 ml-20 h-16 w-auto sm:h-20 md:h-28 lg:h-36 xl:h-45"
          />
          <div className="font-serif text-black text-4xl mt-10 ml-25 mb-10 mr-10 tracking-[-0.065em] leading-[1.14] ">
            <span className="text-[#009938] italic ">Spain Academy</span> is
            your all-in-one onboarding kit for life in{" "}
            <span className="italic">Spain</span>.
          </div>
          <div className="font-serif ml-25 text-black text-4xl mb-10 tracking-[-0.065em] leading-[1.14] mr-20">
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
        </div>
        <div>
          <img
            src="/pattern.png"
            alt="pattern"
            className="ml-20 mb-10 w-[clamp(240px,60vw,700px)] h-auto"
          />
        </div>
      </div>
      <div className="bg-white h-screen">hi</div>
    </div>
  );
}
