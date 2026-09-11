import svgPaths from "./svg-y106kzevnh";

function Back() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[27px] shrink-0 size-[36px]" data-name="Back">
      <div aria-hidden className="absolute border-[0.9px] border-black border-solid inset-0 pointer-events-none rounded-[27px]" />
      <div className="flex items-center justify-center relative shrink-0 size-[18px]">
        <div className="-rotate-90 flex-none">
          <div className="overflow-clip relative size-[18px]" data-name="Arrow up">
            <div className="absolute inset-[20.83%]" data-name="Icon">
              <div className="absolute inset-[-8.57%]">
                <svg className="block size-full" fill="none" height="12.3" preserveAspectRatio="none" viewBox="0 0 12.3 12.3" width="12.3">
                  <path d={svgPaths.pdd34600} id="Icon" stroke="#1E1E1E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BrandLogo() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative" data-name="Brand Logo">
      <p className="[word-break:break-word] font-['Cormorant:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#1a1a1a] text-[24px] whitespace-nowrap">AI Redesign</p>
    </div>
  );
}

function Frame2() {
  return <div className="bg-[#171717] h-[1.8px] relative rounded-[7.2px] shrink-0 w-[18px]" data-name="Frame" />;
}

function Frame3() {
  return <div className="bg-[#171717] h-[1.8px] relative rounded-[7.2px] shrink-0 w-[18px]" data-name="Frame" />;
}

function Frame4() {
  return <div className="bg-[#171717] h-[1.8px] relative rounded-[7.2px] shrink-0 w-[18px]" data-name="Frame" />;
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[3.6px] h-[18px] items-center justify-center overflow-clip relative shrink-0" data-name="Frame">
      <Frame2 />
      <Frame3 />
      <Frame4 />
    </div>
  );
}

function Menu() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center opacity-0 relative shrink-0 size-[36px]" data-name="Menu">
      <Frame1 />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-white relative size-full" data-name="Frame">
      <div className="content-stretch flex gap-[24px] items-center px-[16px] py-[20px] relative size-full">
        <Back />
        <BrandLogo />
        <Menu />
      </div>
      <div aria-hidden className="absolute border-[#e0e0e0] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}