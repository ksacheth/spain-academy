"use client";
import { useEffect, useRef } from "react";
export default function Progress() {
  const pathRef = useRef(null);
  const img1Ref = useRef(null); // cat+girl
  const img2Ref = useRef(null);
  const img3Ref = useRef(null);
  const img4Ref = useRef(null);
  const img5Ref = useRef(null);
  const img6Ref = useRef(null);
  const img7Ref = useRef(null);
  const img8Ref = useRef(null);
  const img9Ref = useRef(null);
  const placeOnPath = (pct, imgRef, dy = 0) => {
    const path = pathRef.current;
    const img = imgRef.current;
    const L = path.getTotalLength();
    const { x, y } = path.getPointAtLength(L * pct);

    const w = Number(img.getAttribute("width"));
    const h = Number(img.getAttribute("height"));

    // center on x, sit on the stroke (adjust dy if you want it slightly above)
    img.setAttribute("x", (x - w / 2).toString());
    img.setAttribute("y", (y - h + dy).toString());
  };

  useEffect(() => {
    // initial placement
    placeOnPath(0.08, img1Ref, 42); 
    placeOnPath(0.12, img2Ref, -2);
    placeOnPath(0.248, img3Ref, 0);
    placeOnPath(0.295, img4Ref, 15);
    placeOnPath(0.3814, img5Ref, 130);
    placeOnPath(0.15, img6Ref, -123);
    placeOnPath(0.125, img7Ref, -8);
    placeOnPath(0.265, img8Ref, -140);
    placeOnPath(0.385, img9Ref, 94);

  }, []);
  return (
    <div className="h-[435vh] bg-[#F9F9F9] rounded-[100px] relative">
      <div className="bg-transparent z-3 h-100%">
        <svg
          id="Layer_1"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 585 605"
          className="w-[100] pt-[41vh] overflow-visible "
        >
          <path
            className="fill-none"
            d="M584,0v4h-72.26c-16.85,1.96-32.29,16.74-34.25,33.74-2.58,22.39,1.3,47.45-.98,70.02-1.84,7.43-5.78,14.4-11.52,19.48-7.08,6.28-15.3,9.2-24.73,9.77l-357.03-.03c-17.93,2.13-32.69,16.83-34.75,34.75v230.53c2.03,17.48,16.03,31.7,33.25,34.74h319.03c18.4-1.74,33.62-17.42,35.25-35.74l-.03-127.03c2.21-17.1,14.33-30.98,31.77-33.23,8.92-1.15,22.21-1.34,30.76,1.72,13.82,4.94,23.27,19.24,23.99,33.51l-.03,314.03c1.57,16.15,15.28,29.47,31.26,31.24h30.26s0,2.49,0,2.49H1V0h583Z"
          />
          <rect className="fill-none" width="1" height="624" />
          <path
            className="fill-none"
            d="M584,0h1v624h-1v-5.5c0-203.82,0-407.68,0-611.5V0Z"
          />
          <rect className="fill-none" y="624" width="585" height="1" />
          <path
            ref={pathRef}
            className=" "
            d="M584,4v3h-71.76c-18.19,2.77-31.26,18.17-32.26,36.23-1.13,20.29.87,41.62.03,62.03-2.45,18.91-18.37,33.46-37.24,34.76l-359.53-.03c-16.52,2.91-29.36,15.53-31.75,32.25v229.53c2.47,16.6,15.26,29.51,31.75,32.24h317.03c16.96-2.17,30.13-15.46,32.74-32.25.29-43.81-.64-87.87.48-131.52,2.27-15.95,17.81-31.17,33.75-32.75,6.31-.62,19.93-.49,26.02.5,16.05,2.61,29.84,17.34,31.75,33.25.2,1.67-.4,3.4.5,5l-.02,314.52c2.66,14.73,14.41,25.83,29.25,27.75h29.26s0,2.99,0,2.99h-30.26c-15.97-1.76-29.69-15.08-31.26-31.23l.03-314.03c-.72-14.27-10.17-28.56-23.99-33.51-8.55-3.06-21.84-2.87-30.76-1.72-17.44,2.25-29.56,16.13-31.77,33.23l.03,127.03c-1.63,18.32-16.85,34-35.25,35.75H81.74c-17.22-3.05-31.22-17.27-33.26-34.75v-230.53c2.06-17.92,16.83-32.62,34.76-34.75l357.03.03c9.43-.57,17.65-3.5,24.73-9.77,5.74-5.09,9.67-12.05,11.52-19.48,2.29-22.57-1.6-47.63.98-70.02,1.96-17,17.4-31.78,34.25-33.75h72.26Z"
          />

          <image
            ref={img1Ref}
            href="/1.png"
            width="120" /* SVG units; scales with the viewBox */
            height="120"
            preserveAspectRatio="xMidYMax meet"
            style={{ pointerEvents: "none" }}
          />

          <image
            ref={img2Ref}
            href="/2.png"
            width="220"
            height="600"
            preserveAspectRatio="xMidYMax meet"
            style={{ pointerEvents: "none" }}
          />
          <image 
            ref={img3Ref}
            href="/3.png"
            width="120"
            height="120"
            preserveAspectRatio="xMidYMax meet"
            style={{ pointerEvents: "none" }}
          />
          <image 
            ref={img4Ref}
            href="/4.png"
            width="720"
            height="200"
            preserveAspectRatio="xMidYMax meet"
            style={{ pointerEvents: "none" }}
          />
          <image
            ref={img5Ref}
            href="/5.png"
            width="127"
            height="127"
            preserveAspectRatio="xMidYMax meet"
            style={{ pointerEvents: "none" }}
          />
          <path
            className="cls-4 fill-none "
            d="M584,7c0,203.82,0,407.68,0,611.5h-29.26c-14.84-1.91-26.59-13.01-29.25-27.74l.02-314.52c-.9-1.6-.3-3.33-.5-5-1.91-15.91-15.7-30.64-31.75-33.25-6.09-.99-19.71-1.12-26.02-.5-15.94,1.58-31.48,16.8-33.75,32.75-1.12,43.65-.19,87.71-.48,131.52-2.61,16.79-15.78,30.08-32.74,32.26H83.24c-16.48-2.74-29.28-15.65-31.76-32.25v-229.53c2.4-16.72,15.24-29.34,31.76-32.25l359.53.03c18.87-1.3,34.79-15.84,37.24-34.76.84-20.4-1.16-41.74-.03-62.03,1-18.06,14.07-33.46,32.26-36.24h71.76Z"
          />
        </svg>
      </div>
      <div className="bg-transparent z-3 h-100%">
        <svg
          id="Layer_1"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 585 479"
          className="overflow-visible"
        >
          <path
            className="cls-1 fill-none"
            d="M602,0l-.07,328.43-7.66,2.09-187.04-.04c-20.64-.01-39.61,16.48-41.25,37.25-2.09,26.53,1.76,55.81.04,82.54-1.63,25.3-33.01,27.59-38.39,3.85l-.13-150.87c-1.31-20.31-15.25-35.83-35.3-39.2-69.9-1.31-139.94-.12-209.89-.61-18.47-2.65-32.12-17.51-33.33-36.17,1.76-29.4-2.28-61.42.03-90.52,1.5-18.97,16.95-33.69,35.75-35.25h154.01c51.83-3.16,53.56-81.03,3.47-88H0V0h602Z"
          />
          <path
            className="cls-1 fill-none"
            d="M0,16h241.24c48.34,5.9,45.78,81.48-3.47,83.02H83.76c-19.67,1.86-34.98,17.17-37.25,36.74l.06,93.93c2.43,21.45,20.74,36.81,42.16,36.84l202.04-.04c19.77,2.34,34.01,18.96,34.26,38.74l-.03,149.03c5.02,26.33,41.59,24.81,43.52-2.98,1.87-26.92-2.3-56.75.04-83.46,1.56-17.83,16.46-32.49,34.17-34.33,64.45-.37,129.01.83,193.39-.61l5.87-1.87v148S0,479,0,479V16Z"
          />
          <path
            className=""
            d="M602,0h1v479h-1v-148s-5.88,1.87-5.88,1.87c-64.38,1.44-128.94.24-193.39.61-17.71,1.84-32.61,16.5-34.17,34.33-2.34,26.71,1.83,56.54-.04,83.46-1.93,27.79-38.51,29.31-43.52,2.98l.03-149.03c-.24-19.79-14.49-36.4-34.26-38.74l-202.04.04c-21.42-.03-39.74-15.39-42.16-36.84l-.06-93.93c2.27-19.57,17.58-34.88,37.25-36.75h154.01c49.26-1.53,51.81-77.11,3.47-83H0v-2.51h242.25c50.09,6.98,48.35,84.84-3.47,88.02H84.76c-18.8,1.55-34.24,16.27-35.75,35.24-2.31,29.1,1.73,61.11-.03,90.52,1.21,18.66,14.86,33.52,33.33,36.17,69.95.5,139.99-.7,209.89.61,20.05,3.37,33.99,18.89,35.3,39.2l.13,150.87c5.38,23.74,36.76,21.45,38.39-3.85,1.72-26.73-2.13-56.01-.04-82.54,1.64-20.77,20.6-37.27,41.25-37.25l187.04.04,7.66-2.09.07-328.43Z"
          />
          <image
            ref={img6Ref}
            href="/6.png"
            width="120"
            height="120"
            preserveAspectRatio="xMidYMid meet"
            style={{ pointerEvents: "none" }}
          />
          <image
            ref={img7Ref}
            href="/7.png"
            width="120"
            height="120"
            preserveAspectRatio="xMidYMid meet"
            style={{ pointerEvents: "none" }}
          />
          <image
            ref={img8Ref}
            href="/8.png"
            width="260"
            height="260"
            preserveAspectRatio="xMidYMid meet"
            style={{ pointerEvents: "none" }}
          />
          <image
            ref={img9Ref}
            href="/9.png"
            width="120"
            height="120"
            preserveAspectRatio="xMidYMid meet"
            style={{ pointerEvents: "none" }}
          />  
        </svg>
      </div>
    </div>
  );
}
