"use client";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import Lenis from "lenis";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import Button2 from "./Button2/Button2";
import TextReveal from "./TextReveal";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

export default function Progress() {
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
  const dotRef1 = useRef(null);
  const dotRef2 = useRef(null);

  const dot1LabelRef = useRef(null); // NEW: label ref for dot1
  const dot2LabelRef = useRef(null);

  const placeOnPath = (pct, imgRef, dy = 0, whichPathRef) => {
    const path = whichPathRef.current;
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

  const makeLabelUpdater = (milestones, labelEl) => {
    // milestones: [{ pct: 0.0..1.0, text: "any" }, ...] sorted ascending
    let lastIndex = -1;
    return (progress) => {
      if (!labelEl) return;
      // find the last milestone whose pct <= progress
      let idx = -1;
      for (let i = 0; i < milestones.length; i++) {
        if (progress >= milestones[i].pct) idx = i;
        else break;
      }
      if (idx !== -1 && idx !== lastIndex) {
        labelEl.textContent = milestones[idx].text;
        lastIndex = idx;
      }
    };
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

      const dot1Milestones = [
        { pct: 0.0, text: "01" },
        { pct: 0.33, text: "02" },
        { pct: 0.88, text: "03" },
      ];
      const updateDot1Label = makeLabelUpdater(
        dot1Milestones,
        dot1LabelRef.current
      );
      // Initialize
      updateDot1Label(0);

      // Reverse along path: start 1 -> end 0
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

        onUpdate: function () {
          const traveled = this.progress(); // 0..1 regardless of path direction
          updateDot1Label(traveled);
        },

        scrollTrigger: {
          trigger: svgRef.current,
          start: "top 65%",
          end: () =>
            "+=" + (pathRef.current?.getBoundingClientRect().height || 600),
          scrub: { delay: 0.6, ease: "power2.out" },
          markers: false,
          invalidateOnRefresh: true,
          onRefresh: () => {
            placeAll();
            // keep label in sync after refresh
            const st = ScrollTrigger.getById?.("__dot1__");
            // If you want, assign an id; here we just reset to 0
            updateDot1Label(0);
          },
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

      const dot2Milestones = [
        { pct: 0.0, text: "03" },
        { pct: 0.6, text: "04" },
      ];
      const updateDot2Label = makeLabelUpdater(
        dot2Milestones,
        dot2LabelRef.current
      );
      updateDot2Label(0);

      // Forward along path: start 0 -> end 1
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

        onUpdate: function () {
          const traveled = this.progress(); // 0..1 traveled
          updateDot2Label(traveled);
        },

        scrollTrigger: {
          trigger: svgRef2.current,
          start: "top 45%",
          end: () =>
            "+=" + (pathRef2.current?.getBoundingClientRect().height || 600),
          scrub: { delay: 0.6, ease: "power2.out" },
          markers: false,
          invalidateOnRefresh: true,
          onRefresh: () => {
            placeAll();
            updateDot2Label(0);
          },
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
    <div ref={root} className="bg-[#F9F9F9] rounded-[100px] mt-20 pt-[15vw]">
      <div className="bg-transparent h-100% relative ">
        <div className=" absolute -top-1/15 right-2/9">
          <div className="text-right flex-col ">
            <TextReveal>
              <div className="font-serif xl:text-[2.8rem] lg:text-[2.3rem] md:text-[1.8rem] sm:text-[1.5rem] text-[1rem] mr-1 text-[#3c3c3c]">
                Pre-<span className="italic">Arrival</span>
              </div>
            </TextReveal>
            <TextReveal>
              <div className="mt-3 pr-1 tracking-[0.03em] leading-[1.18] text-right xl:text-[1.5rem] lg:text-[1.3rem] md:text-[1rem] sm:text-[0.9rem] text-[0.5rem] font-sans">
                <span className="block">Pre-departure Support -</span>
                <span className="block">Student Visa Assistance -</span>
                <span className="block">Health Insurance Support -</span>
                <span className="block">Accommodation Arrangements -</span>
              </div>
            </TextReveal>
          </div>
        </div>
        <div className="absolute top-2/7 left-1/6">
          <div className="text-left flex-col">
            <TextReveal>
              <div className="font-serif xl:text-[2.8rem] lg:text-[2.3rem] md:text-[1.8rem] sm:text-[1.5rem] text-[1rem] text-[#3c3c3c]">
                Post-<span className="italic">Arrival</span>
              </div>
            </TextReveal>
            <TextReveal>
              <div className="mt-3 tracking-[0.03em] leading-[1.18] text-left xl:text-[1.5rem] lg:text-[1.3rem] md:text-[1rem] sm:text-[0.9rem] text-[0.5rem] pr-10 font-sans">
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
            </TextReveal>
          </div>
        </div>
        <div className="absolute bottom-1/22 right-1/6">
          <div className="text-right flex-col tracking-[0.035em] leading-[1.25]">
            <TextReveal>
              <div className="font-serif xl:text-[2.6rem] lg:text-[2.1rem] md:text-[1.7rem] sm:text-[1.3rem] text-[1rem] text-[#3c3c3c]">
                <span className="block">
                  <span className="italic">Academic</span> &{" "}
                  <span className="italic">Personal</span> Support
                </span>{" "}
                During the Program
              </div>
            </TextReveal>
            <TextReveal>
              <div className="mt-3 tracking-[0.03em] leading-[1.18] text-right xl:text-[1.3rem] lg:text-[1.1rem] md:text-[0.8rem] sm:text-[0.6rem] text-[0.5rem] font-sans">
                <span className="block">Emergency Contacts -</span>
                <span className="block">Spanish Language Course -</span>
                <span className="block">University Admission -</span>
                <span className="block">University Academic Preparation -</span>
                <span className="block">One-on-one Academic Counseling -</span>
                <span className="block">
                  Career Guidance & Internship Opportunities -
                </span>
                <span className="block">Psychological Counselling -</span>
                <span className="block">
                  Seminars with Professors and Industry Professionals -
                </span>
                <span className="block">Food & Health Advice -</span>
              </div>
            </TextReveal>
          </div>
        </div>
        <svg
          ref={svgRef}
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1370 1450"
          preserveAspectRatio="xMidYMid meet"
          className="overflow-visible w-full h-auto"
        >
          <path
            ref={pathRef}
            className=""
            id="motionPath"
            fill="none"
            stroke="#7C623D"
            strokeWidth="6"
            d="m1393.76655,1396.22683l0,22.72416c0,6.02151 -2.34325,11.80956 -6.51542,16.07036c-4.17214,4.26078 -9.83027,6.65383 -15.73605,6.65383l-55.04763,0c-42.6931,0 -77.30864,-35.35089 -77.30864,-78.95095l0,-720.0528c0,-49.48538 -39.28299,-89.60289 -87.739,-89.60289l-28.30966,0c-48.45601,0 -87.73902,40.1175 -87.73902,89.60289l0,279.59683c0,49.4854 -39.28298,89.60291 -87.74852,89.60291l-702.73124,0c-48.45602,0 -87.73902,-40.1175 -87.73902,-89.60291l0,-513.89122c0,-49.4854 39.28299,-89.60291 87.73902,-89.60291l803.41534,0c48.46555,0 87.74854,-40.1175 87.74854,-89.61261l0,-130.60564c0,-49.49511 39.28299,-89.61261 87.74852,-89.61261l201.27296,0"
          />
          <g id="dot1" ref={dotRef1}>
            <circle r="18" fill="#079839" stroke="#079839" strokeWidth="3" />
            <text
              ref={dot1LabelRef}
              id="dot1Label"
              fontSize="18"
              fontWeight="500"
              fontFamily="ui-sans-serif, system-ui, sans-serif"
              fill="white"
              textAnchor="middle"
              dominantBaseline="middle"
            >
              1
            </text>
          </g>
          <image
            ref={img1Ref}
            href="/1.webp"
            width="300"
            height="300"
            style={{ pointerEvents: "none" }}
          />
          <image
            ref={img2Ref}
            href="/2.webp"
            width="440"
            height="415"
            style={{ pointerEvents: "none" }}
          />
          <image
            ref={img3Ref}
            href="/3.webp"
            width="215"
            height="290"
            style={{ pointerEvents: "none" }}
          />
          <image
            ref={img4Ref}
            href="/4.webp"
            width="750"
            height="450"
            style={{ pointerEvents: "none" }}
          />
          <image
            ref={img5Ref}
            href="/5.webp"
            width="127"
            height="208"
            style={{ pointerEvents: "none" }}
          />
          {/* <foreignObject
            ref={text1ref}
            width="400"
            height="160"
            className="overflow-visible"
          >
            <div xmlns="http://www.w3.org/1999/xhtml">
              <div className="text-right flex-col ">
                <TextReveal>
                  <div className="font-serif text-[40px] mr-1 text-[#3c3c3c]">
                    Pre-<span className="italic">Arrival</span>
                  </div>
                </TextReveal>
                <TextReveal>
                  <div className="mt-3 pr-1 tracking-[0.03em] leading-[1.18] text-right text-[17px] font-sans">
                    <span className="block">Pre-departure Support -</span>
                    <span className="block">Student Visa Assistance -</span>
                    <span className="block">Health Insurance Support -</span>
                    <span className="block">Accommodation Arrangements -</span>
                  </div>
                </TextReveal>
              </div>
            </div>
          </foreignObject> */}
          {/* <foreignObject
            ref={text2ref}
            width="500"
            height="160"
            className="overflow-visible"
          >
            <div xmlns="http://www.w3.org/1999/xhtml">
              <div className="text-left flex-col">
                <TextReveal>
                  <div className="font-serif text-[40px] text-[#3c3c3c]">
                    Post-<span className="italic">Arrival</span>
                  </div>
                </TextReveal>
                <TextReveal>
                  <div className="mt-3 tracking-[0.03em] leading-[1.18] text-left text-[17px] pr-10 font-sans">
                    <span className="block">- Airport pick-up</span>
                    <span className="block">
                      - Welcoming Orientation: City tour Cultural Guidance
                    </span>
                    <span className="block">- Bank Account Setup</span>
                    <span className="block">
                      - Mobile Data & Transportation Card Assistance
                    </span>
                    <span className="block">
                      - Residence Permit Application
                    </span>
                  </div>
                </TextReveal>
              </div>
            </div>
          </foreignObject> */}
          {/* <foreignObject
            ref={text3ref}
            width="700"
            height="160"
            className="overflow-visible"
          >
            <div xmlns="http://www.w3.org/1999/xhtml">
              <div className="text-right flex-col tracking-[0.035em] leading-[1.07]">
                <TextReveal>
                  <div className="font-serif text-[40px] text-[#3c3c3c] mr-10">
                    <span className="italic">Academic</span> &{" "}
                    <span className="italic">Personal</span> Support During the
                    Program
                  </div>
                </TextReveal>
                <TextReveal>
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
                </TextReveal>
              </div>
            </div>
          </foreignObject> */}
        </svg>
      </div>
      <div className="bg-transparent h-100%  relative">
        <div className="absolute bottom-3/10 left-1/7 ">
          <div className="text-left flex-col">
            <TextReveal>
              <div className="font-serif xl:text-[2.8rem] lg:text-[2.3rem] md:text-[1.8rem] sm:text-[1.5rem] text-[1rem] text-[#3c3c3c]">
                <span className="block">
                  Post-<span className="italic">Program</span> &
                </span>{" "}
                <span className="block -mt-[0.6rem]">Alumni Support</span>
              </div>
            </TextReveal>
            <TextReveal>
              <div className="mt-5 tracking-[0.03em] leading-[1.18] text-left xl:text-[1.5rem] lg:text-[1.3rem] md:text-[1rem] sm:text-[0.9rem] text-[0.5rem] pr-10 font-sans">
                <span className="block">- Continued Legal Support</span>
                <span className="block">- Erasmus & Study Abroad Guidance</span>
                <span className="block">
                  - Alumni Network & Career Support{" "}
                </span>
              </div>
            </TextReveal>
          </div>
        </div>
        <div className="absolute left-1/7 bottom-2/9">
          <Button2>Book a Consultation</Button2>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.0"
          preserveAspectRatio="xMidYMid meet"
          zoomAndPan="magnify"
          className="overflow-visible -mt-[15vw] w-full"
          viewBox="0 0 1000 1200"
          ref={svgRef2}
        >
          <path
            ref={pathRef2}
            id="svg_3"
            fill="none"
            stroke="#7C623D"
            strokeWidth="4"
            d="m-44.25391,145.38282l463.51944,0c37.26171,0 67.46874,30.20703 67.46874,67.46874l0,10.64843c0,37.26172 -30.20703,67.46483 -67.46874,67.46483l-255.35542,0c-37.26171,0 -67.46483,30.20703 -67.46483,67.46874l0,145.41012c0,37.26171 30.20312,67.46483 67.46483,67.46483l338.74603,0c37.26171,0 67.46483,30.20703 67.46483,67.46874l0,249.5898c0,9.23437 3.67187,18.08984 10.19922,24.62109c6.53125,6.53125 15.38672,10.19921 24.62109,10.19921c9.23828,0 18.09374,-3.66797 24.62499,-10.19921c6.52735,-6.53125 10.19531,-15.38672 10.19531,-24.62109l0,-135.73825c0,-37.26171 30.20703,-67.46874 67.46874,-67.46874l313.84369,0c12.41406,0 24.32031,-4.92969 33.09764,-13.70703c8.77734,-8.77734 13.70703,-20.68359 13.70703,-33.09765l0,-46.80468"
          />
          <g id="dot2" ref={dotRef2}>
            <circle r="13" fill="#079839" stroke="white" strokeWidth="0" />
            <text
              ref={dot2LabelRef}
              id="dot2Label"
              fontSize="13"
              fontFamily="ui-sans-serif, system-ui, sans-serif"
              fill="white"
              textAnchor="middle"
              dominantBaseline="middle"
            >
              1
            </text>
          </g>

          <image
            ref={img6Ref}
            href="/6.webp"
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
            href="/8.webp"
            width="430"
            height="430"
            preserveAspectRatio="xMidYMid meet"
            style={{ pointerEvents: "none" }}
          />
          <image
            ref={img9Ref}
            href="/9.webp"
            width="220"
            height="220"
            preserveAspectRatio="xMidYMid meet"
            style={{ pointerEvents: "none" }}
          />
          {/* <foreignObject
            ref={text4ref}
            width="330"
            height="160"
            className="overflow-visible tracking-[0.035em] leading-[1.07] text-left"
          >
            <div xmlns="http://www.w3.org/1999/xhtml" className="flex-col">
              <div className="text-left flex-col">
                <TextReveal>
                  <div className="font-serif text-[30px] text-[#3c3c3c]">
                    Post-<span className="italic">Program</span> & Alumni
                    Support
                  </div>
                </TextReveal>
                <TextReveal>
                  <div className="mt-5 tracking-[0.03em] leading-[1.18] text-left text-[14px] pr-10 font-sans">
                    <span className="block">- Continued Legal Support</span>
                    <span className="block">
                      - Erasmus & Study Abroad Guidance
                    </span>
                    <span className="block">
                      - Alumni Network & Career Support{" "}
                    </span>
                  </div>
                </TextReveal>
              </div>
            </div>
          </foreignObject> */}
        </svg>
      </div>
    </div>
  );
}
