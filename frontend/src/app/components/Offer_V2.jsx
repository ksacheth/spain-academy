// components/EssentialsCard.tsx
export default function EssentialsCard() {
  return (
    <div className="relative w-fit">
      {/* background shadow */}
      <div className="absolute inset-0 translate-y-2 rounded-3xl bg-rose-200" />

      {/* card */}
      <div
        className="
          group relative w-[420px] rounded-3xl bg-rose-700 text-white
          rotate-[2deg] transition-all duration-300 ease-out
          hover:rotate-0 focus-within:rotate-0
          shadow-lg px-6 py-5 overflow-hidden
        "
      >
        {/* header row */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold">
              The <span className="italic font-extrabold">Essentials</span>
            </h2>
            <p className="mt-1 text-sm text-rose-100">
              Language, University &amp; Visa (Visas, housing, insurance, and
              everything that gets you here.)
            </p>
          </div>

          {/* plus turns to minus on hover */}
          <span
            aria-hidden
            className="ml-2 mt-1 inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-lg leading-none 
                       transition-transform duration-300 group-hover:rotate-90 group-focus-within:rotate-90"
          >
            +
          </span>
        </div>

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
              We help you build the foundation for your life in Spain through
              three essential services:
            </p>
            <ul className="space-y-3 pl-5">
              <li className="list-disc">
                <span className="font-semibold text-white">
                  Language School:
                </span>{" "}
                Intensive Spanish programs for academic, social, and everyday
                life.
              </li>
              <li className="list-disc">
                <span className="font-semibold text-white">
                  Academic Counseling (Entry &amp; University Admissions):
                </span>{" "}
                Pick the right pathway, prep applications, and secure admission.
              </li>
              <li className="list-disc">
                <span className="font-semibold text-white">
                  Visa Processing:
                </span>{" "}
                Full support for student visa, residence permit renewals, and
                university documentation.
              </li>
            </ul>
          </div>

          {/* bottom spacing so the reveal has room */}
          <div className="h-3" />
        </div>

        {/* focus target for keyboard users (tab to expand) */}
        <button
          className="absolute inset-0 -z-10"
          aria-label="Expand card"
          // no onClick needed; focus styles above do the job
        />
      </div>
    </div>
  );
}
