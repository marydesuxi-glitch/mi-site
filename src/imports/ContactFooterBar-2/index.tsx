function FooterBrand() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-[280px] relative" data-name="footer-brand">
      <p className="font-['Geist:Bold',sans-serif] font-bold relative shrink-0 text-[#141416] text-[18px] tracking-[1px] uppercase w-full">Maryna Ivanova</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal relative shrink-0 text-[#737373] text-[13px] w-full">Product Designer turning complex ideas into simple experiences</p>
    </div>
  );
}

function NavLinks() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 text-[14px] w-full" data-name="nav-links">
      <p className="font-['Geist:Bold',sans-serif] font-bold relative shrink-0 text-[#1b1b1d] w-full">Home</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal relative shrink-0 text-[#737373] w-full">Cases</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal relative shrink-0 text-[#737373] w-full">Resume</p>
    </div>
  );
}

function NavCol() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start min-w-[120px] relative shrink-0" data-name="nav-col">
      <p className="font-['Geist:Bold',sans-serif] font-bold relative shrink-0 text-[#141416] text-[12px] tracking-[1px] uppercase w-full">Navigation</p>
      <NavLinks />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col font-['Geist:Medium',sans-serif] font-medium gap-[8px] items-start relative shrink-0 text-[#737373] text-[14px] w-full" data-name="Frame">
      <p className="relative shrink-0 w-full">mary.des.uxi@gmail.com</p>
      <a className="relative shrink-0 w-full" href="https://www.linkedin.com/in/mary-ivanova/" target="_blank" rel="noopener noreferrer"><p className="relative shrink-0 w-full underline cursor-pointer">LinkedIn</p></a>
    </div>
  );
}

function ContactCol() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start min-w-[170px] relative shrink-0" data-name="contact-col">
      <p className="font-['Geist:Bold',sans-serif] font-bold relative shrink-0 text-[#141416] text-[12px] tracking-[1px] uppercase w-full">Say Hello</p>
      <Frame />
    </div>
  );
}

function Right() {
  return (
    <div className="content-stretch flex gap-[44px] items-start relative shrink-0" data-name="Right">
      <NavCol />
      <ContactCol />
    </div>
  );
}

function Frame1() {
  return (
    <div className="[word-break:break-word] content-start flex flex-wrap gap-[32px] items-start leading-[normal] relative shrink-0 w-full">
      <FooterBrand />
      <Right />
    </div>
  );
}

function FooterBottom() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start pt-[16px] relative shrink-0 w-full" data-name="footer-bottom">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.06)] border-solid border-t inset-0 pointer-events-none" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#737373] text-[12px] w-full">© 2026</p>
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#737373] text-[12px] w-full">Based in Ukraine</p>
    </div>
  );
}

export default function ContactFooterBar() {
  return (
    <div className="bg-[#fafafa] content-stretch flex flex-col gap-[32px] items-start pb-[32px] pt-[40px] px-[40px] relative size-full" data-name="contact-footer-bar">
      <Frame1 />
      <FooterBottom />
    </div>
  );
}