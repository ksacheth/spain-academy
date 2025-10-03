import CenterUnderline from "../templates/underline-center";

export default function Footer() {
  return (
    <>
      <div
        className="sticky bottom-0 left-0 w-full h-[50vh] bg-VividYellow flex justify-center items-center"
        style={{ zIndex: 0 }}
      >
        <div className="relative overflow-hidden w-full h-full flex justify-end px-12 text-right items-start py-12 text-[#ff5941]">
          <div className="flex flex-row space-x-12 sm:pace-x-16  md:space-x-24 text-sm sm:text-lg md:text-xl">
            <ul>
              <li>
                <CenterUnderline>Home</CenterUnderline>
              </li>

              <li>
                <CenterUnderline>Docs</CenterUnderline>
              </li>
              <li>
                <CenterUnderline>Comps</CenterUnderline>
              </li>
            </ul>
            <ul>
              <li className="hover:underline cursor-pointer">Github</li>
              <li className="hover:underline cursor-pointer">Instagram</li>
              <li className="hover:underline cursor-pointer">X (Twitter)</li>
            </ul>
          </div>
          <h2 className="absolute bottom-0 left-0  translate-y-1/3 sm:text-[192px]  text-[80px] text-[#ff5941] font-calendas">
            Spain Academy
          </h2>
        </div>
      </div>
    </>
  );
}
