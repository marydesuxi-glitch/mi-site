import svgPaths from "./svg-onrbjumto2";

function BrandLogo() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Brand Logo">
      <p className="[word-break:break-word] font-['Geist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#1a1a1a] text-[20px] whitespace-nowrap">MI</p>
      <div className="relative shrink-0 size-[4px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" height="4" preserveAspectRatio="none" viewBox="0 0 4 4" width="4">
          <circle cx="2" cy="2" fill="black" id="Ellipse" r="2" />
        </svg>
      </div>
    </div>
  );
}

function MenuTrigger() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Menu Trigger">
      <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
        <g id="Menu Trigger" opacity="0">
          <line id="Line" stroke="#141416" strokeWidth="2" x1="7" x2="25" y1="13" y2="13" />
          <line id="Line_2" stroke="#141416" strokeWidth="2" x1="7" x2="25" y1="17" y2="17" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="Frame">
          <path d={svgPaths.p24b0cb60} id="Vector" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <a href="/CV_Maryna_Ivanova_2026.pdf" download className="content-stretch flex gap-[10px] items-center justify-center px-[16px] py-[6px] relative rounded-[50px] shrink-0" data-name="Button">
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[14px] text-black uppercase whitespace-nowrap">Resume</p>
      <Frame />
    </a>
  );
}

function NavLinks() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-center relative shrink-0" data-name="Nav Links">
      <Button />
    </div>
  );
}

export default function HeaderNavigation() {
  return (
    <div className="bg-white content-stretch flex items-center justify-between px-[40px] py-[20px] relative size-full" data-name="Header Navigation">
      <div aria-hidden className="absolute border-[#ebebeb] border-b border-solid inset-0 pointer-events-none" />
      <BrandLogo />
      <MenuTrigger />
      <NavLinks />
    </div>
  );
}