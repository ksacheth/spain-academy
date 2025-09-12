// "use client";
// import { useLayoutEffect, useRef, useEffect } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { MotionPathPlugin } from "gsap/MotionPathPlugin";

// gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

// export default function ProgressFixed() {
//   const root = useRef(null);
//   const pathRef = useRef(null);
//   const img1Ref = useRef(null);
//   const img2Ref = useRef(null);
//   const img3Ref = useRef(null);
//   const img4Ref = useRef(null);
//   const img5Ref = useRef(null);

//   const placeOnPath = (pct, imgRef, dy = 0) => {
//     const path = pathRef.current;
//     const img = imgRef.current;
//     const L = path.getTotalLength();
//     const { x, y } = path.getPointAtLength(L * pct);

//     const w = Number(img.getAttribute("width"));
//     const h = Number(img.getAttribute("height"));

//     img.setAttribute("x", (x - w / 2).toString());
//     img.setAttribute("y", (y - h + dy).toString());
//   };

//   useEffect(() => {
//     placeOnPath(0.08, img1Ref, 42);
//     placeOnPath(0.12, img2Ref, -2);
//     placeOnPath(0.248, img3Ref, 0);
//     placeOnPath(0.295, img4Ref, 15);
//     placeOnPath(0.3814, img5Ref, 130);

//   }, []);

//   useLayoutEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap.set("#dot", {
//         transformOrigin: "50% 50%",
//         transformBox: "fill-box",
//       });

//       gsap.to("#dot", {
//         motionPath: {
//           path: "#motionPath",
//           align: "#motionPath",
//           alignOrigin: [0.5, 0.5],
//           autoRotate: false,
//         },
//         ease: "none",
//         scrollTrigger: {
//           trigger: "#motionPath",
//           start: "top center",
//           end: () =>
//             "+=" +
//             document.querySelector("#Layer_1").getBoundingClientRect().height,
//           scrub: 0.5,
//           markers: false,
//           invalidateOnRefresh: true,
//         },
//       });
//     }, root);
//     return () => ctx.revert();
//   }, []);

//   return (
//     <div ref={root} className="bg-[#F9F9F9] rounded-[100px] py-20">
//       <svg
//         id="Layer_1"
//         xmlns="http://www.w3.org/2000/svg"
//         height="auto"
//         viewBox="0 0 1380 1600"
//         preserveAspectRatio="none"
//         className="mt-20 overflow-visible"
//       >
//         <circle id="dot" r="6" fill="#00D4FF" stroke="white" strokeWidth="2" />
//         <path
//           ref={pathRef}
//           id="motionPath"
//           className="fill-none stroke-[#7C623D]"
//           strokeWidth="6"
//           d="m1393.76655,1396.22683l0,22.72416c0,6.02151 -2.34325,11.80956 -6.51542,16.07036c-4.17214,4.26078 -9.83027,6.65383 -15.73605,6.65383l-55.04763,0c-42.6931,0 -77.30864,-35.35089 -77.30864,-78.95095l0,-720.0528c0,-49.48538 -39.28299,-89.60289 -87.739,-89.60289l-28.30966,0c-48.45601,0 -87.73902,40.1175 -87.73902,89.60289l0,279.59683c0,49.4854 -39.28298,89.60291 -87.74852,89.60291l-702.73124,0c-48.45602,0 -87.73902,-40.1175 -87.73902,-89.60291l0,-513.89122c0,-49.4854 39.28299,-89.60291 87.73902,-89.60291l803.41534,0c48.46555,0 87.74854,-40.1175 87.74854,-89.61261l0,-130.60564c0,-49.49511 39.28299,-89.61261 87.74852,-89.61261l201.27296,0"
//         />
//         <image
//           ref={img1Ref}
//           href="/1.png"
//           width="120"
//           height="120"
//           preserveAspectRatio="xMidYMax meet"
//           style={{ pointerEvents: "none" }}
//         />
//         <image
//           ref={img2Ref}
//           href="/2.png"
//           width="220"
//           height="600"
//           preserveAspectRatio="xMidYMax meet"
//           style={{ pointerEvents: "none" }}
//         />
//         <image
//           ref={img3Ref}
//           href="/3.png"
//           width="120"
//           height="120"
//           preserveAspectRatio="xMidYMax meet"
//           style={{ pointerEvents: "none" }}
//         />
//         <image
//           ref={img4Ref}
//           href="/4.png"
//           width="720"
//           height="200"
//           preserveAspectRatio="xMidYMax meet"
//           style={{ pointerEvents: "none" }}
//         />
//         <image
//           ref={img5Ref}
//           href="/5.png"
//           width="127"
//           height="127"
//           preserveAspectRatio="xMidYMax meet"
//           style={{ pointerEvents: "none" }}
//         />
//       </svg>
//     </div>
//   );
// }

"use client";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import Button2 from "./Button2/Button2";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

export default function ProgressFixed() {
  const root = useRef(null);
  const svgRef = useRef(null);
  const svgRef2 = useRef(null);
  const pathRef = useRef(null);
  const pathRef2 = useRef(null);
  const img1Ref = useRef(null);
  const img2Ref = useRef(null);
  const img3Ref = useRef(null);
  const img4Ref = useRef(null);
  const img5Ref = useRef(null);
  const img6Ref = useRef(null);
  const img7Ref = useRef(null);
  const img8Ref = useRef(null);
  const img9Ref = useRef(null);
  const text1ref = useRef(null);
  const text2ref = useRef(null);
  const text3ref = useRef(null);
  const text4ref = useRef(null);

  const placeOnPath = (pct, imgRef, dy = 0, pathRef) => {
    const path = pathRef.current;
    const img = imgRef.current;
    if (!path || !img) return;
    const L = path.getTotalLength();
    const { x, y } = path.getPointAtLength(L * pct);
    const w =
      Number(img.getAttribute("width")) || img.width?.baseVal?.value || 0;
    const h =
      Number(img.getAttribute("height")) || img.height?.baseVal?.value || 0;
    img.setAttribute("x", String(x - w / 2));
    img.setAttribute("y", String(y - h + dy));
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const placeAll = () => {
        placeOnPath(0.84, img1Ref, 110, pathRef);
        placeOnPath(0.74, img2Ref, 0, pathRef);
        placeOnPath(0.5, img3Ref, 0, pathRef);
        placeOnPath(0.41, img4Ref, 27, pathRef);
        placeOnPath(0.242, img5Ref, 210, pathRef);
        placeOnPath(0.83, text1ref, -250, pathRef);
        placeOnPath(0.75, text2ref, 250, pathRef);
        placeOnPath(0.4, text3ref, 250, pathRef);
      };
      placeAll();

      gsap.set("#dot1", {
        xPercent: -50,
        yPercent: -50,
        transformBox: "fill-box",
        transformOrigin: "50% 50%",
      });

      gsap.set("#dot1", {
        motionPath: {
          path: pathRef.current,
          align: pathRef.current,
          alignOrigin: [0.5, 0.5],
          autoRotate: false,
          start: 1,
          end: 1,
        },
      });

      const getScrollDistance = () =>
        "+=" + (pathRef.current?.getBoundingClientRect().height || 600);

      const tween = gsap.to("#dot1", {
        motionPath: {
          path: pathRef.current,
          align: pathRef.current,
          alignOrigin: [0.5, 0.5],
          autoRotate: false,
          start: 1,
          end: 0,
        },
        ease: "none",
        scrollTrigger: {
          trigger: svgRef.current,
          start: "top 65%",
          end: getScrollDistance,
          scrub: 0.5,
          markers: false,
          invalidateOnRefresh: true,
          onRefresh: placeAll,
        },
      });

      const ro = new ResizeObserver(() => {
        placeAll();
        ScrollTrigger.refresh();
      });
      if (svgRef.current) ro.observe(svgRef.current);

      return () => {
        ro.disconnect();
        tween.scrollTrigger?.kill();
        tween.kill();
      };
    }, root);

    return () => ctx.revert();
  }, []);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const placeAll = () => {
        placeOnPath(0.1, img6Ref, 5, pathRef2);
        placeOnPath(0.26, img7Ref, 40, pathRef2);
        placeOnPath(0.525, img8Ref, 50, pathRef2);
        placeOnPath(0.89, img9Ref, 0, pathRef2);
        placeOnPath(0.52, text4ref, 250, pathRef2);
      };
      placeAll();

      gsap.set("#dot2", {
        xPercent: -50,
        yPercent: -50,
        transformBox: "fill-box",
        transformOrigin: "50% 50%",
      });

      gsap.set("#dot2", {
        motionPath: {
          path: pathRef2.current,
          align: pathRef2.current,
          alignOrigin: [0.5, 0.5],
          autoRotate: false,
          start: 1,
          end: 1,
        },
      });

      const getScrollDistance = () =>
        "+=" + (pathRef2.current?.getBoundingClientRect().height || 600);

      const tween = gsap.to("#dot2", {
        motionPath: {
          path: pathRef2.current,
          align: pathRef2.current,
          alignOrigin: [0.5, 0.5],
          autoRotate: false,
          start: 0,
          end: 1,
        },
        ease: "none",
        scrollTrigger: {
          trigger: svgRef2.current,
          start: "top 50%",
          end: getScrollDistance,
          scrub: 0.5,
          markers: false,
          invalidateOnRefresh: true,
          onRefresh: placeAll,
        },
      });

      const ro = new ResizeObserver(() => {
        placeAll();
        ScrollTrigger.refresh();
      });
      if (svgRef2.current) ro.observe(svgRef2.current);

      return () => {
        ro.disconnect();
        tween.scrollTrigger?.kill();
        tween.kill();
      };
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={root} className="bg-[#F9F9F9] rounded-[100px] py-20 mt-20">
      <div className="bg-transparent h-100%">
        <svg
          ref={svgRef}
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1380 1600"
          preserveAspectRatio="xMidYMid meet"
          className="mt-60 overflow-visible w-full h-auto"
        >
          <circle
            id="dot1"
            r="14"
            fill="#079839"
            stroke="#079839"
            strokeWidth="3"
          />
          <path
            ref={pathRef}
            id="motionPath"
            fill="none"
            stroke="#7C623D"
            strokeWidth="6"
            d="m1393.76655,1396.22683l0,22.72416c0,6.02151 -2.34325,11.80956 -6.51542,16.07036c-4.17214,4.26078 -9.83027,6.65383 -15.73605,6.65383l-55.04763,0c-42.6931,0 -77.30864,-35.35089 -77.30864,-78.95095l0,-720.0528c0,-49.48538 -39.28299,-89.60289 -87.739,-89.60289l-28.30966,0c-48.45601,0 -87.73902,40.1175 -87.73902,89.60289l0,279.59683c0,49.4854 -39.28298,89.60291 -87.74852,89.60291l-702.73124,0c-48.45602,0 -87.73902,-40.1175 -87.73902,-89.60291l0,-513.89122c0,-49.4854 39.28299,-89.60291 87.73902,-89.60291l803.41534,0c48.46555,0 87.74854,-40.1175 87.74854,-89.61261l0,-130.60564c0,-49.49511 39.28299,-89.61261 87.74852,-89.61261l201.27296,0"
          />
          <image
            ref={img1Ref}
            href="/1.png"
            width="300"
            height="300"
            style={{ pointerEvents: "none" }}
          />
          <image
            ref={img2Ref}
            href="/2.png"
            width="440"
            height="415"
            style={{ pointerEvents: "none" }}
          />
          <image
            ref={img3Ref}
            href="/3.png"
            width="215"
            height="290"
            style={{ pointerEvents: "none" }}
          />
          <image
            ref={img4Ref}
            href="/4.png"
            width="750"
            height="450"
            style={{ pointerEvents: "none" }}
          />
          <image
            ref={img5Ref}
            href="/5.png"
            width="127"
            height="208"
            style={{ pointerEvents: "none" }}
          />
          <foreignObject
            ref={text1ref}
            width="380"
            height="160"
            className="overflow-visible"
          >
            <div xmlns="http://www.w3.org/1999/xhtml">
              <div className="text-right flex-col ">
                <div className="font-serif text-[40px] mr-1 text-[#3c3c3c]">
                  Pre-<span className="italic">Arrival</span>
                </div>
                <div className="mt-3 pr-1 tracking-[0.03em] leading-[1.18] text-right text-[17px] font-sans">
                  <span className="block">Pre-departure Support -</span>
                  <span className="block">Student Visa Assistance -</span>
                  <span className="block">Health Insurance Support -</span>
                  <span className="block">Accommodation Arrangements -</span>
                </div>
              </div>
            </div>
          </foreignObject>
          <foreignObject
            ref={text2ref}
            width="500"
            height="160"
            className="overflow-visible"
          >
            <div xmlns="http://www.w3.org/1999/xhtml">
              <div className="text-left flex-col">
                <div className="font-serif text-[40px] text-[#3c3c3c]">
                  Post-<span className="italic">Arrival</span>
                </div>
                <div className="mt-3 tracking-[0.03em] leading-[1.18] text-left text-[17px] pr-10 font-sans">
                  <span className="block">- Airport pick-up</span>
                  <span className="block">
                    - Welcoming Orientation: City tour Cultural Guidance
                  </span>
                  <span className="block">- Bank Account Setup</span>
                  <span className="block">
                    - Mobile Data & Transportation Card Assistance
                  </span>
                  <span className="block">- Residence Permit Application</span>
                </div>
              </div>
            </div>
          </foreignObject>
          <foreignObject
            ref={text3ref}
            width="700"
            height="160"
            className="overflow-visible"
          >
            <div xmlns="http://www.w3.org/1999/xhtml">
              <div className="text-right flex-col tracking-[0.035em] leading-[1.07]">
                <div className="font-serif text-[40px] text-[#3c3c3c] mr-10">
                  <span className="italic">Academic</span> &{" "}
                  <span className="italic">Personal</span> Support During the
                  Program
                </div>
                <div className="mt-3 tracking-[0.03em] leading-[1.18] text-right text-[17px] pr-10 font-sans">
                  <span className="block">Emergency Contacts -</span>
                  <span className="block">Spanish Language Course -</span>
                  <span className="block">University Admission -</span>
                  <span className="block">
                    University Academic Preparation -
                  </span>
                  <span className="block">
                    One-on-one Academic Counseling -
                  </span>
                  <span className="block">
                    Career Guidance & Internship Opportunities -
                  </span>
                  <span className="block">Psychological Counselling -</span>
                  <span className="block">
                    Seminars with Professors and Industry Professionals -
                  </span>
                  <span className="block">Food & Health Advice -</span>
                </div>
              </div>
            </div>
          </foreignObject>
        </svg>
      </div>
      <div className="bg-transparent h-100%">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.0"
          preserveAspectRatio="xMidYMid meet"
          zoomAndPan="magnify"
          className="overflow-visible -mt-85 w-full h-auto"
          viewBox="0 0 1000 1200"
          ref={svgRef2}
        >
          <circle
            id="dot2"
            r="13"
            fill="#079839"
            stroke="white"
            strokeWidth="2"
          />

          <path
            ref={pathRef2}
            id="svg_3"
            fill="none"
            stroke="#7C623D"
            strokeWidth="4"
            d="m-44.25391,145.38282l463.51944,0c37.26171,0 67.46874,30.20703 67.46874,67.46874l0,10.64843c0,37.26172 -30.20703,67.46483 -67.46874,67.46483l-255.35542,0c-37.26171,0 -67.46483,30.20703 -67.46483,67.46874l0,145.41012c0,37.26171 30.20312,67.46483 67.46483,67.46483l338.74603,0c37.26171,0 67.46483,30.20703 67.46483,67.46874l0,249.5898c0,9.23437 3.67187,18.08984 10.19922,24.62109c6.53125,6.53125 15.38672,10.19921 24.62109,10.19921c9.23828,0 18.09374,-3.66797 24.62499,-10.19921c6.52735,-6.53125 10.19531,-15.38672 10.19531,-24.62109l0,-135.73825c0,-37.26171 30.20703,-67.46874 67.46874,-67.46874l313.84369,0c12.41406,0 24.32031,-4.92969 33.09764,-13.70703c8.77734,-8.77734 13.70703,-20.68359 13.70703,-33.09765l0,-46.80468"
          />
          <image
            ref={img6Ref}
            href="/6.png"
            width="180"
            height="180"
            preserveAspectRatio="xMidYMid meet"
            style={{ pointerEvents: "none" }}
          />
          <image
            ref={img7Ref}
            href="/7.png"
            width="150"
            height="150"
            preserveAspectRatio="xMidYMid meet"
            style={{ pointerEvents: "none" }}
          />
          <image
            ref={img8Ref}
            href="/8.png"
            width="430"
            height="430"
            preserveAspectRatio="xMidYMid meet"
            style={{ pointerEvents: "none" }}
          />
          <image
            ref={img9Ref}
            href="/9.png"
            width="220"
            height="220"
            preserveAspectRatio="xMidYMid meet"
            style={{ pointerEvents: "none" }}
          />
          <foreignObject
            ref={text4ref}
            width="330"
            height="160"
            className="overflow-visible tracking-[0.035em] leading-[1.07] text-left"
          >
            <div xmlns="http://www.w3.org/1999/xhtml" className="flex-col">
              <div className="text-left flex-col">
                <div className="font-serif text-[30px] text-[#3c3c3c]">
                  Post-<span className="italic">Program</span> & Alumni Support
                </div>
                <div className="mt-5 tracking-[0.03em] leading-[1.18] text-left text-[14px] pr-10 font-sans">
                  <span className="block">- Continued Legal Support</span>
                  <span className="block">
                    - Erasmus & Study Abroad Guidance
                  </span>
                  <span className="block">
                    - Alumni Network & Career Support{" "}
                  </span>
                </div>
              </div>
            </div>
          </foreignObject>
        </svg>
        <div className="">
          <Button2>Book a Consultation</Button2>
        </div>
      </div>
    </div>
  );
}
