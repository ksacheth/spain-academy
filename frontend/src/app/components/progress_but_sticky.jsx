"use client";
import { useLayoutEffect, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

export default function ProgressFixed() {
  const root = useRef(null);
  const pathRef = useRef(null);
  const img1Ref = useRef(null);
  const img2Ref = useRef(null);
  const img3Ref = useRef(null);
  const img4Ref = useRef(null);
  const img5Ref = useRef(null);

  const placeOnPath = (pct, imgRef, dy = 0) => {
    const path = pathRef.current;
    const img = imgRef.current;
    const L = path.getTotalLength();
    const { x, y } = path.getPointAtLength(L * pct);

    const w = Number(img.getAttribute("width"));
    const h = Number(img.getAttribute("height"));

    img.setAttribute("x", (x - w / 2).toString());
    img.setAttribute("y", (y - h + dy).toString());
  };

  useEffect(() => {
    placeOnPath(0.08, img1Ref, 42);
    placeOnPath(0.12, img2Ref, -2);
    placeOnPath(0.248, img3Ref, 0);
    placeOnPath(0.295, img4Ref, 15);
    placeOnPath(0.3814, img5Ref, 130);

  }, []);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set("#dot", {
        transformOrigin: "50% 50%",
        transformBox: "fill-box",
      });

      gsap.to("#dot", {
        motionPath: {
          path: "#motionPath",
          align: "#motionPath",
          alignOrigin: [0.5, 0.5],
          autoRotate: false,
        },
        ease: "none",
        scrollTrigger: {
          trigger: "#motionPath",
          start: "top center",
          end: () =>
            "+=" +
            document.querySelector("#Layer_1").getBoundingClientRect().height,
          scrub: 0.5,
          markers: false,
          invalidateOnRefresh: true,
        },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={root} className="bg-[#F9F9F9] rounded-[100px] py-20">
      <svg
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        height="auto"
        viewBox="0 0 1380 1600"
        preserveAspectRatio="none"
        className="mt-20 overflow-visible"
      >
        <circle id="dot" r="6" fill="#00D4FF" stroke="white" strokeWidth="2" />
        <path
          ref={pathRef}
          id="motionPath"
          className="fill-none stroke-[#7C623D]"
          strokeWidth="6"
          d="m1393.76655,1396.22683l0,22.72416c0,6.02151 -2.34325,11.80956 -6.51542,16.07036c-4.17214,4.26078 -9.83027,6.65383 -15.73605,6.65383l-55.04763,0c-42.6931,0 -77.30864,-35.35089 -77.30864,-78.95095l0,-720.0528c0,-49.48538 -39.28299,-89.60289 -87.739,-89.60289l-28.30966,0c-48.45601,0 -87.73902,40.1175 -87.73902,89.60289l0,279.59683c0,49.4854 -39.28298,89.60291 -87.74852,89.60291l-702.73124,0c-48.45602,0 -87.73902,-40.1175 -87.73902,-89.60291l0,-513.89122c0,-49.4854 39.28299,-89.60291 87.73902,-89.60291l803.41534,0c48.46555,0 87.74854,-40.1175 87.74854,-89.61261l0,-130.60564c0,-49.49511 39.28299,-89.61261 87.74852,-89.61261l201.27296,0"
        />
        <image
          ref={img1Ref}
          href="/1.png"
          width="120"
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
      </svg>
    </div>
  );
}