function FooterBrand() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0" data-name="footer-brand">
      <p className="font-['Geist:Bold',sans-serif] font-bold relative shrink-0 text-[#141416] text-[18px] tracking-[1px] uppercase whitespace-nowrap">Maryna Ivanova</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal relative shrink-0 text-[#737373] text-[14px] w-[360px]">Product Designer turning complex ideas into simple experiences</p>
    </div>
  );
}

function FooterRight() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start justify-center relative shrink-0 w-full" data-name="Footer Right">
      <p className="font-['Geist:Bold',sans-serif] font-bold relative shrink-0 text-[#1b1b1d] w-full">Home</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal relative shrink-0 text-[#737373] w-full">Cases</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal relative shrink-0 text-[#737373] w-full">Resume</p>
    </div>
  );
}

function LinksCol() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[120px]" data-name="links-col">
      <p className="font-['Geist:Bold',sans-serif] font-bold relative shrink-0 text-[#141416] tracking-[1px] uppercase whitespace-nowrap">Navigation</p>
      <FooterRight />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col font-['Geist:Medium',sans-serif] font-medium gap-[12px] items-start relative shrink-0 text-[#737373] w-full" data-name="Frame">
      <p className="relative shrink-0 whitespace-nowrap">mary.des.uxi@gmail.com</p>
      <a className="min-w-full relative shrink-0 w-[min-content]" href="https://www.linkedin.com/in/mary-ivanova/" target="_blank" rel="noopener noreferrer"><p className="min-w-full relative shrink-0 w-[min-content] underline cursor-pointer">LinkedIn</p></a>
    </div>
  );
}

function ContactCol() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative self-stretch shrink-0" data-name="contact-col">
      <p className="font-['Geist:Bold',sans-serif] font-bold relative shrink-0 text-[#141416] tracking-[1px] uppercase whitespace-nowrap">Say Hello</p>
      <Frame />
    </div>
  );
}

function FooterLinks() {
  return (
    <div className="content-stretch flex gap-[60px] items-start relative shrink-0 text-[12px]" data-name="footer-links">
      <LinksCol />
      <ContactCol />
    </div>
  );
}

function FooterTop() {
  return (
    <div className="[word-break:break-word] content-stretch flex items-start justify-between leading-[normal] relative shrink-0 w-full" data-name="footer-top">
      <FooterBrand />
      <FooterLinks />
    </div>
  );
}

function FooterBottom() {
  return (
    <div className="content-stretch flex items-start justify-between pt-[24px] relative shrink-0 w-full" data-name="footer-bottom">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.06)] border-solid border-t inset-0 pointer-events-none" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">© 2026</p>
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">Based in Ukraine</p>
    </div>
  );
}

export default function ContactFooterBar() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start pb-[40px] pt-[80px] px-[120px] relative size-full" data-name="contact-footer-bar">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.06)] border-solid border-t inset-0 pointer-events-none" />
      <FooterTop />
      <FooterBottom />
    </div>
  );
}