import svgPaths from "./svg-573g7fumim";
import imgScreenshot from "./aacd9576352e2b7c2fdfa48ded1009f3c13b322d.png";
import imgIPhone14Pro2 from "./c5454dd63c2c3f96a720608d964ba3c04fcaa97f.png";
import imgIPhone15Pro from "./5e689c3a7d0a91ee7e07f18862b52b1050e14967.png";
import imgRectangle42268 from "./1a96ffd82e1d2a48784aaaaf0f02c3ca37001262.png";
import imgRectangle42271 from "./85acda4a4b3adcec11413d7032e8a4c73e620b0b.png";
import imgRectangle42269 from "./ae389c911c6a4a49a74d576d1615a02bdb73cbf3.png";
import imgRectangle42272 from "./76bfca80eae4b413043ec37cc714cfc15601f32e.png";
import imgRectangle42270 from "./7a0fd4ff58471d7e16f39a38873202b63275a1cc.png";
import imgRectangle42273 from "./5088afce8660c6a0715abe6b0018c6514d1d735d.png";
import imgRectangle42274 from "./f1bd3dadd2c7c084cf2ac53582d87c4540d54ac1.png";
import imgRectangle42275 from "./d34e40cf61dc8277f3c934a5f15f9dac6a28b28a.png";
import imgRectangle42276 from "./14b15e5d9801e361df7e73995570ec107f9bbada.png";
import imgRectangle42277 from "./9426ddbc1f21f333c543b8bb08cac5016a346bb5.png";
import imgRectangle42278 from "./29b3304c83aa90bf05f2daa0a24c45f0790b0e0b.png";

function Shadow() {
  return <div className="absolute bg-black inset-[0_1%] rounded-[50px] shadow-[0px_0px_86.113px_0px_rgba(0,0,0,0.15)]" data-name="Shadow" />;
}

function Lens() {
  return (
    <div className="absolute inset-[23.53%_6.96%_26.47%_78.26%]" data-name="Lens">
      <div className="absolute inset-[0_-25.37%_-25%_-25.37%]">
        <svg className="block size-full" fill="none" height="19.6853" preserveAspectRatio="none" viewBox="0 0 23.3941 19.6853" width="23.3941">
          <g id="Lens">
            <g filter="url(#filter0_f_0_53)" id="Ellipse 1">
              <path d={svgPaths.p22888f40} fill="url(#paint0_linear_0_53)" fillOpacity="0.3" />
            </g>
            <g filter="url(#filter1_f_0_53)" id="Ellipse 2">
              <path d={svgPaths.p12108700} fill="#2C2C2C" />
            </g>
            <g filter="url(#filter2_f_0_53)" id="Ellipse 3">
              <ellipse cx="11.697" cy="6.02138" fill="#616198" rx="1.36941" ry="0.463183" />
            </g>
            <g filter="url(#filter3_f_0_53)" id="Ellipse 4">
              <ellipse cx="11.697" cy="8.80048" fill="#1D6FAB" rx="0.45647" ry="0.463183" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="15.7482" id="filter0_f_0_53" width="23.3941" x="0" y="3.93706">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_0_53" stdDeviation="1.96853" />
            </filter>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="10.962" id="filter1_f_0_53" width="10.8412" x="6.27646" y="2.39311">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_0_53" stdDeviation="0.656176" />
            </filter>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="3.55107" id="filter2_f_0_53" width="5.36353" x="9.01529" y="4.24584">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_0_53" stdDeviation="0.656176" />
            </filter>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="3.55107" id="filter3_f_0_53" width="3.53764" x="9.92823" y="7.02494">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_0_53" stdDeviation="0.656176" />
            </filter>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_53" x1="11.697" x2="11.697" y1="0" y2="15.7482">
              <stop offset="0.34375" stopColor="#6D4767" stopOpacity="0" />
              <stop offset="1" stopColor="#6D4767" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Device() {
  return (
    <div className="absolute contents left-0 top-0" data-name="Device">
      <div className="absolute inset-[0_0_-0.01%_0]" data-name="iPhone14pro2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgIPhone14Pro2} />
      </div>
      <div className="absolute h-[31.496px] left-[189.45px] top-[34.45px] w-[104.988px]" data-name="Island">
        <div className="absolute bg-black inset-0 rounded-[50px]" data-name="Island" />
        <Lens />
      </div>
    </div>
  );
}

function Image() {
  return (
    <div className="absolute content-stretch flex items-center left-[80.29px] pt-[20px] top-0" data-name="Image">
      <div className="h-[805.809px] relative shrink-0 w-[393.706px]" data-name="Device 14PM">
        <Shadow />
        <div className="absolute inset-[1.94%_4.44%_1.94%_4.67%] rounded-[15px]" data-name="Screenshot">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[15px] size-full" src={imgScreenshot} />
        </div>
        <Device />
      </div>
    </div>
  );
}

function HeroVisualBleedWrapper() {
  return (
    <div className="absolute h-[550px] left-[575px] top-0 w-[825px]" data-name="Hero Visual Bleed Wrapper">
      <div className="absolute h-[550px] left-0 top-0 w-[825px]" data-name="iPhone 15 Pro">
        <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgIPhone15Pro} />
      </div>
    </div>
  );
}

function Images() {
  return (
    <div className="-translate-x-1/2 absolute h-[630px] left-1/2 top-[90px] w-[1400px]" data-name="Images">
      <div className="absolute h-[575px] left-[-72px] top-[342px] w-[700px]" data-name="Purple Glow Behind Screen">
        <div className="absolute inset-[-13.91%_-11.43%]">
          <svg className="block size-full" fill="none" height="735" preserveAspectRatio="none" viewBox="0 0 860 735" width="860">
            <g filter="url(#filter0_f_0_59)" id="Purple Glow Behind Screen">
              <ellipse cx="430" cy="367.5" fill="url(#paint0_radial_0_59)" fillOpacity="0.101961" rx="350" ry="287.5" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="735" id="filter0_f_0_59" width="860" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_0_59" stdDeviation="40" />
              </filter>
              <radialGradient cx="0" cy="0" gradientTransform="translate(430 367.5) rotate(90) scale(287.5 350)" gradientUnits="userSpaceOnUse" id="paint0_radial_0_59" r="1">
                <stop stopColor="#7C6EF6" />
                <stop offset="1" stopColor="#7C6EF6" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
      <Image />
      <HeroVisualBleedWrapper />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute bg-[#141416] bottom-[31px] content-stretch flex items-start left-[120px] overflow-clip pb-[7px] pt-[6px] px-[12px] rounded-[7px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[11px] text-white tracking-[0.5px] whitespace-nowrap">AI Tool · AI Redesign</p>
    </div>
  );
}

function HeroSection() {
  return (
    <div className="bg-[rgba(123,123,161,0.1)] border-[#ebebeb] border-b border-solid h-[720px] overflow-clip relative shrink-0 w-full" data-name="Hero Section">
      <Images />
      <Frame />
    </div>
  );
}

function CtaSecondary() {
  return (
    <div className="content-stretch flex items-center px-[20px] py-[14px] relative rounded-[999px] shrink-0" data-name="cta-secondary">
      <div aria-hidden className="absolute border border-[#141414] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <a className="[word-break:break-word] block font-['Geist:SemiBold',sans-serif] font-semibold leading-[0] relative shrink-0 text-[#141414] text-[15px] whitespace-nowrap" href="https://share.icandesign.app/" target="_blank">
        <p className="[text-underline-position:from-font] cursor-pointer decoration-from-font decoration-solid leading-[normal] underline">Home Planner.app ↗</p>
      </a>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[44px] items-start max-w-[800px] min-w-px overflow-clip relative" data-name="Frame">
      <div className="[word-break:break-word] font-['Geist:Bold',sans-serif] font-bold leading-[0] min-w-full relative shrink-0 text-[#171717] text-[52px] tracking-[-1.2px] w-[min-content] whitespace-pre-wrap">
        <p className="leading-[1.06] mb-0">{`Teaching an AI to edit rooms, `}</p>
        <p className="leading-[1.06]">not just talk about them</p>
      </div>
      <CtaSecondary />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start leading-[normal] overflow-clip relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Geist:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#7c6ef6] text-[11px] tracking-[0.5px] whitespace-nowrap">ROLE</p>
      <p className="font-['Geist:Medium',sans-serif] font-medium min-w-full relative shrink-0 text-[#171717] text-[17px] w-[min-content]">Product Designer</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start leading-[normal] overflow-clip relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Geist:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#7c6ef6] text-[11px] tracking-[0.5px] whitespace-nowrap">STATUS</p>
      <p className="font-['Geist:Medium',sans-serif] font-medium min-w-full relative shrink-0 text-[#171717] text-[17px] w-[min-content]">Built · Currently in testing</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start overflow-clip relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#7c6ef6] text-[11px] tracking-[0.5px] whitespace-nowrap">PLATFORM</p>
      <p className="font-['Geist:Medium',sans-serif] font-medium leading-[0] min-w-full relative shrink-0 text-[#171717] text-[17px] w-[min-content]">
        <span className="leading-[normal]">Home</span>
        <span className="leading-[normal]">{` Planner App`}</span>
      </p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[24px] items-start overflow-clip relative shrink-0 w-[350px]" data-name="Frame">
      <Frame4 />
      <Frame5 />
      <Frame6 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-start justify-between overflow-clip pb-[20px] pt-[80px] px-[64px] relative shrink-0 w-[1440px]" data-name="Frame">
      <Frame2 />
      <Frame3 />
    </div>
  );
}

function Frame9() {
  return <div className="bg-[#ccc] h-px relative shrink-0 w-[24px]" data-name="Frame" />;
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[12px] items-center overflow-clip relative shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#7c6ef6] text-[13px] tracking-[0.5px] whitespace-nowrap">01</p>
      <Frame9 />
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#737373] text-[13px] tracking-[1px] uppercase whitespace-nowrap">THE Task</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[28px] items-start overflow-clip pb-[120px] pt-[60px] px-[64px] relative shrink-0 w-[1440px]" data-name="Frame">
      <Frame8 />
      <div className="[word-break:break-word] font-['Geist:Light',sans-serif] font-light leading-[0] min-w-full relative shrink-0 text-[#171717] text-[24px] tracking-[-0.3px] w-[min-content] whitespace-pre-wrap">
        <p className="leading-[1.32] mb-0">{`The initial brief was to create a non-step-by-step AI editing experience. `}</p>
        <p className="leading-[1.32]">One possible direction was an AI chat.</p>
      </div>
    </div>
  );
}

function Frame53() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
      <Frame1 />
      <Frame7 />
    </div>
  );
}

function Frame13() {
  return <div className="bg-[#737373] h-px relative shrink-0 w-[24px]" data-name="Frame" />;
}

function Frame12() {
  return (
    <div className="content-stretch flex gap-[12px] items-center overflow-clip relative shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#7c6ef6] text-[13px] tracking-[0.5px] whitespace-nowrap">02</p>
      <Frame13 />
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#8b8b8b] text-[13px] tracking-[1px] uppercase w-[117px]">THE CHALLENGE</p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col gap-[28px] items-start px-[64px] relative shrink-0 w-[1440px]" data-name="Frame">
      <Frame12 />
      <p className="[word-break:break-word] font-['Geist:Bold',sans-serif] font-bold leading-[normal] min-w-full relative shrink-0 text-[36px] text-white tracking-[-0.5px] w-[min-content]">But I questioned whether another standalone chat was the right solution:</p>
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[0] min-w-full relative shrink-0 text-[#8b8b8b] text-[16px] w-[min-content]">
        <span className="leading-[1.65]">{`If people can already ask ChatGPT for design advice, `}</span>
        <span className="leading-[1.65] text-white">{`why `}</span>
        <span className="leading-[1.65]">{`build another AI chat inside Home Planner? The real opportunity wasn't conversation — it was an AI that understands the exact room a user is working on, and can change it directly.`}</span>
      </p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start max-w-[600px] min-w-px overflow-clip px-[64px] py-[20px] relative" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[0] relative shrink-0 text-[#737373] text-[12px] tracking-[1px] uppercase whitespace-pre">
        <span className="leading-[normal]">{`P.S.   `}</span>
        <span className="leading-[normal]">This changed how I approached history, navigation and waiting states.</span>
      </p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex items-center justify-between pt-[60px] relative shrink-0 w-[1440px]" data-name="Frame">
      <Frame15 />
      <div className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[0] relative shrink-0 text-[17px] text-white w-[600px]">
        <p className="leading-[1.28] mb-0">What if AI worked more like a photo editor — one continuous space,</p>
        <p className="leading-[1.28]">not a single linear conversation?</p>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="bg-[#1b1b1e] content-stretch flex flex-col gap-[28px] items-center overflow-clip px-[64px] py-[100px] relative shrink-0 w-full" data-name="Frame">
      <Frame11 />
      <Frame14 />
    </div>
  );
}

function Frame18() {
  return <div className="bg-[#ccc] h-px relative shrink-0 w-[24px]" data-name="Frame" />;
}

function Frame17() {
  return (
    <div className="content-stretch flex gap-[12px] items-center overflow-clip relative shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#7c6ef6] text-[13px] tracking-[0.5px] whitespace-nowrap">03</p>
      <Frame18 />
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#737373] text-[13px] tracking-[1px] whitespace-nowrap">APPROACH</p>
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex flex-col gap-[28px] items-start max-w-[800px] relative shrink-0 w-full" data-name="Title">
      <Frame17 />
      <p className="[word-break:break-word] font-['Geist:Bold',sans-serif] font-bold leading-[normal] min-w-full relative shrink-0 text-[40px] text-black tracking-[-0.6px] w-[min-content]">Five tools. One continuous canvas.</p>
      <div className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[0] min-w-full relative shrink-0 text-[#737373] text-[14px] w-[min-content] whitespace-pre-wrap">
        <p className="leading-[normal] mb-0">{`Style, Color, Light, Clean, and Renovate each turn a common editing task into a single tap — select, generate — instead of a prompt someone has to compose. For anything else, Add prompt keeps the door open. `}</p>
        <p className="leading-[normal]">Guided tools for predictable tasks. Natural language for everything else.</p>
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[44px] items-start leading-[normal] overflow-clip pt-[16px] relative shrink-0 text-[18px] whitespace-nowrap" data-name="Frame">
      <p className="font-['Geist:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#7c6ef6]">Style</p>
      <p className="font-['Geist:Medium',sans-serif] font-medium relative shrink-0 text-black">Color</p>
      <p className="font-['Geist:Medium',sans-serif] font-medium relative shrink-0 text-black">Light</p>
      <p className="font-['Geist:Medium',sans-serif] font-medium relative shrink-0 text-black">Clean</p>
      <p className="font-['Geist:Medium',sans-serif] font-medium relative shrink-0 text-black">Renovate</p>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col gap-[36px] items-start overflow-clip pb-[40px] pt-[100px] px-[64px] relative shrink-0 w-[1440px]" data-name="Frame">
      <Title />
      <Frame19 />
    </div>
  );
}

function Screens1() {
  return (
    <div className="content-stretch flex items-center justify-between px-[64px] py-[40px] relative shrink-0 w-[1440px]" data-name="Screens">
      <div className="h-[570px] pointer-events-none relative rounded-[20px] shrink-0 w-[270px]">
        <div className="absolute inset-0 overflow-hidden rounded-[20px]">
          <img alt="" className="absolute h-[102.51%] left-0 max-w-none top-[-2.57%] w-full" src={imgRectangle42268} />
        </div>
        <div aria-hidden className="absolute border-2 border-[#e0e0e0] border-solid inset-[-2px] rounded-[22px] shadow-[0px_0px_40px_0px_rgba(35,39,44,0.05)]" />
      </div>
      <div className="h-[486px] relative rounded-[20px] shadow-[0px_0px_40px_0px_rgba(35,39,44,0.05)] shrink-0 w-[230px]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[20px]">
          <img alt="" className="absolute h-[102.51%] left-0 max-w-none top-[-2.57%] w-full" src={imgScreenshot} />
        </div>
      </div>
      <div className="h-[486px] relative rounded-[20px] shadow-[0px_0px_40px_0px_rgba(35,39,44,0.05)] shrink-0 w-[230px]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[20px]">
          <img alt="" className="absolute h-[102.51%] left-0 max-w-none top-[-2.57%] w-full" src={imgRectangle42271} />
        </div>
      </div>
      <div className="h-[486px] relative rounded-[20px] shadow-[0px_0px_40px_0px_rgba(35,39,44,0.05)] shrink-0 w-[230px]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[20px]">
          <img alt="" className="absolute h-[102.51%] left-0 max-w-none top-[-2.57%] w-full" src={imgRectangle42269} />
        </div>
      </div>
      <div className="h-[486px] relative rounded-[20px] shadow-[0px_0px_40px_0px_rgba(35,39,44,0.05)] shrink-0 w-[230px]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[20px]">
          <img alt="" className="absolute h-[102.51%] left-0 max-w-none top-[-2.57%] w-full" src={imgRectangle42272} />
        </div>
      </div>
    </div>
  );
}

function Line() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-[3px] items-start min-w-px relative" data-name="Line">
      <div className="bg-[#141416] flex-[1_0_0] min-h-px relative rounded-[24px] w-full" />
    </div>
  );
}

function Line1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-[3px] items-start min-w-px relative" data-name="Line">
      <div className="bg-[rgba(0,0,0,0.1)] flex-[1_0_0] min-h-px relative w-full" />
    </div>
  );
}

function Line2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-[3px] items-start min-w-px relative" data-name="Line">
      <div className="bg-[rgba(0,0,0,0.1)] flex-[1_0_0] min-h-px relative w-full" />
    </div>
  );
}

function Line3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-[3px] items-start min-w-px relative" data-name="Line">
      <div className="bg-[rgba(0,0,0,0.1)] flex-[1_0_0] min-h-px relative w-full" />
    </div>
  );
}

function Line4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-[3px] items-start min-w-px relative" data-name="Line">
      <div className="bg-[rgba(0,0,0,0.1)] flex-[1_0_0] min-h-px relative w-full" />
    </div>
  );
}

function Lines() {
  return (
    <div className="content-stretch flex items-center px-[64px] py-[24px] relative shrink-0 w-[1440px]" data-name="Lines">
      <Line />
      <Line1 />
      <Line2 />
      <Line3 />
      <Line4 />
    </div>
  );
}

function Screens() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0" data-name="Screens">
      <Screens1 />
      <Lines />
    </div>
  );
}

function AiWorkspaceVisualFullBleed() {
  return (
    <div className="bg-[#fafafa] content-stretch flex flex-col items-start overflow-clip pb-[100px] px-[240px] relative shrink-0 w-full" data-name="AI Workspace Visual (full-bleed)">
      <Frame16 />
      <Screens />
    </div>
  );
}

function Frame54() {
  return (
    <div className="bg-[#141416] content-stretch flex flex-col items-center relative shrink-0 w-full">
      <Frame10 />
      <AiWorkspaceVisualFullBleed />
    </div>
  );
}

function Frame23() {
  return <div className="bg-[#8b8b8b] h-px relative shrink-0 w-[24px]" data-name="Frame" />;
}

function Frame22() {
  return (
    <div className="content-stretch flex gap-[12px] items-center overflow-clip relative shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#7c6ef6] text-[13px] tracking-[0.5px] whitespace-nowrap">04</p>
      <Frame23 />
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#8b8b8b] text-[13px] tracking-[1px] whitespace-nowrap">EDITING WITH VISUAL CONTEXT</p>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-col gap-[28px] items-start overflow-clip pb-[60px] pt-[100px] px-[64px] relative shrink-0 w-[1440px]" data-name="Frame">
      <Frame22 />
      <p className="[word-break:break-word] font-['Geist:Bold',sans-serif] font-bold leading-[normal] max-w-[800px] min-w-full relative shrink-0 text-[40px] text-white tracking-[-0.6px] w-[min-content]">Sometimes showing is easier than describing</p>
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] max-w-[800px] min-w-full relative shrink-0 text-[#8b8b8b] text-[14px] w-[min-content]">For localized changes, users select the area they want AI to work on directly on the image — select an area, choose an action, Generate. This gives AI visual context without requiring a prompt that explains where the change should happen, making the interaction feel less like talking to a chatbot and more like working with an editing tool.</p>
    </div>
  );
}

function ArrowRight() {
  return (
    <div className="relative shrink-0 size-[10.714px]" data-name="arrow-right">
      <svg className="absolute block inset-0 size-full" fill="none" height="10.7143" preserveAspectRatio="none" viewBox="0 0 10.7143 10.7143" width="10.7143">
        <g id="arrow-right">
          <path d={svgPaths.p94fe980} id="Vector" stroke="#E5E5E5" strokeLinecap="round" strokeWidth="1.78571" />
        </g>
      </svg>
    </div>
  );
}

function Frame25() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] content-stretch flex flex-col items-center justify-center relative rounded-[14.286px] shrink-0 size-[28.571px]" data-name="Frame">
      <div aria-hidden className="absolute border-[0.893px] border-[rgba(229,229,229,0.15)] border-solid inset-0 pointer-events-none rounded-[14.286px]" />
      <ArrowRight />
    </div>
  );
}

function ArrowRight1() {
  return (
    <div className="relative shrink-0 size-[10.714px]" data-name="arrow-right">
      <svg className="absolute block inset-0 size-full" fill="none" height="10.7143" preserveAspectRatio="none" viewBox="0 0 10.7143 10.7143" width="10.7143">
        <g id="arrow-right">
          <path d={svgPaths.p94fe980} id="Vector" stroke="#E5E5E5" strokeLinecap="round" strokeWidth="1.78571" />
        </g>
      </svg>
    </div>
  );
}

function Frame26() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] content-stretch flex flex-col items-center justify-center relative rounded-[14.286px] shrink-0 size-[28.571px]" data-name="Frame">
      <div aria-hidden className="absolute border-[0.893px] border-[rgba(229,229,229,0.15)] border-solid inset-0 pointer-events-none rounded-[14.286px]" />
      <ArrowRight1 />
    </div>
  );
}

function ArrowRight2() {
  return (
    <div className="relative shrink-0 size-[10.714px]" data-name="arrow-right">
      <svg className="absolute block inset-0 size-full" fill="none" height="10.7143" preserveAspectRatio="none" viewBox="0 0 10.7143 10.7143" width="10.7143">
        <g id="arrow-right">
          <path d={svgPaths.p94fe980} id="Vector" stroke="#E5E5E5" strokeLinecap="round" strokeWidth="1.78571" />
        </g>
      </svg>
    </div>
  );
}

function Frame27() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] content-stretch flex flex-col items-center justify-center relative rounded-[14.286px] shrink-0 size-[28.571px]" data-name="Frame">
      <div aria-hidden className="absolute border-[0.893px] border-[rgba(229,229,229,0.15)] border-solid inset-0 pointer-events-none rounded-[14.286px]" />
      <ArrowRight2 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex gap-[28px] items-center justify-center px-[64px] relative shrink-0 w-[1440px]" data-name="Frame">
      <div className="h-[528px] relative rounded-[20px] shrink-0 w-[250px]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[20px]">
          <img alt="" className="absolute h-[102.51%] left-0 max-w-none top-[-2.57%] w-full" src={imgRectangle42270} />
        </div>
      </div>
      <Frame25 />
      <div className="h-[528px] relative rounded-[20px] shrink-0 w-[250px]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[20px]">
          <img alt="" className="absolute h-[102.51%] left-0 max-w-none top-[-2.57%] w-full" src={imgRectangle42273} />
        </div>
      </div>
      <Frame26 />
      <div className="h-[528px] relative rounded-[20px] shrink-0 w-[250px]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[20px]">
          <img alt="" className="absolute h-[102.51%] left-0 max-w-none top-[-2.57%] w-full" src={imgRectangle42274} />
        </div>
      </div>
      <Frame27 />
      <div className="h-[528px] relative rounded-[20px] shrink-0 w-[250px]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[20px]">
          <img alt="" className="absolute h-[102.51%] left-0 max-w-none top-[-2.57%] w-full" src={imgRectangle42275} />
        </div>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Text">
      <div className="[word-break:break-word] flex flex-col font-['Geist:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#8b8b8b] text-[12px] text-center uppercase w-full">
        <p className="leading-[normal]">Brush</p>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Text">
      <div className="[word-break:break-word] flex flex-col font-['Geist:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#8b8b8b] text-[12px] text-center uppercase w-full">
        <p className="leading-[normal]">Drawing process</p>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Text">
      <div className="[word-break:break-word] flex flex-col font-['Geist:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#8b8b8b] text-[12px] text-center uppercase w-full">
        <p className="leading-[normal]">Selected</p>
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Text">
      <div className="[word-break:break-word] flex flex-col font-['Geist:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#8b8b8b] text-[12px] text-center uppercase w-full">
        <p className="leading-[normal]">Done</p>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex items-center justify-between px-[93px] relative shrink-0 w-[1440px]" data-name="Text">
      <div className="relative shrink-0 w-[250px]" data-name="Core/Markers">
        <div className="content-stretch flex flex-col gap-[12px] items-start p-[16px] relative size-full">
          <Text1 />
        </div>
      </div>
      <div className="relative shrink-0 w-[250px]" data-name="Core/Markers">
        <div className="content-stretch flex flex-col gap-[12px] items-start p-[16px] relative size-full">
          <Text2 />
        </div>
      </div>
      <div className="relative shrink-0 w-[250px]" data-name="Core/Markers">
        <div className="content-stretch flex flex-col gap-[12px] items-start p-[16px] relative size-full">
          <Text3 />
        </div>
      </div>
      <div className="relative shrink-0 w-[250px]" data-name="Core/Markers">
        <div className="content-stretch flex flex-col gap-[12px] items-start p-[16px] relative size-full">
          <Text4 />
        </div>
      </div>
    </div>
  );
}

function AiWorkspaceVisualFullBleed1() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] h-[688px] items-center justify-center overflow-clip relative shrink-0 w-full" data-name="AI Workspace Visual (full-bleed)">
      <Frame24 />
      <Text />
    </div>
  );
}

function Frame20() {
  return (
    <div className="bg-[#1b1b1e] content-stretch flex flex-col items-center pb-[60px] relative shrink-0 w-full" data-name="Frame">
      <Frame21 />
      <AiWorkspaceVisualFullBleed1 />
    </div>
  );
}

function Frame31() {
  return <div className="bg-[#ccc] h-px relative shrink-0 w-[24px]" data-name="Frame" />;
}

function Frame30() {
  return (
    <div className="content-stretch flex gap-[12px] items-center overflow-clip relative shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#7c6ef6] text-[13px] tracking-[0.5px] whitespace-nowrap">05</p>
      <Frame31 />
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#737373] text-[13px] tracking-[1px] whitespace-nowrap">WHAT MADE IT HARD</p>
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame30 />
      <p className="[word-break:break-word] font-['Geist:Bold',sans-serif] font-bold leading-[normal] max-w-[800px] min-w-full relative shrink-0 text-[#171717] text-[40px] tracking-[-0.6px] w-[min-content]">Designing for a tool that never responds instantly</p>
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] max-w-[800px] min-w-full relative shrink-0 text-[#737373] text-[17px] w-[min-content]">The PM defined the AI tools, prompts, and naming. My responsibility was page architecture, UX, and visual design — turning that functionality into a coherent web product.</p>
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px overflow-clip relative" data-name="Frame">
      <p className="font-['Geist:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#171717] text-[18px] w-full">One change, one generation</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal relative shrink-0 text-[#737373] text-[14px] w-full">Unlike a normal photo editor, nothing here updates instantly — every tweak is a fresh AI render, sometimes taking minutes.</p>
    </div>
  );
}

function Frame33() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="[word-break:break-word] content-stretch flex gap-[40px] items-start leading-[normal] overflow-clip py-[28px] relative rounded-[inherit] size-full">
        <p className="font-['Geist:Light',sans-serif] font-light relative shrink-0 text-[#ccc] text-[28px] whitespace-nowrap">01</p>
        <Frame34 />
      </div>
      <div aria-hidden className="absolute border-[#e0e0e0] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px overflow-clip relative" data-name="Frame">
      <p className="font-['Geist:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#171717] text-[18px] w-full">{`Users shouldn't have to wait on screen`}</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal relative shrink-0 text-[#737373] text-[14px] w-full">People can leave mid-generation and come back later — generation runs in the background instead of blocking the workflow.</p>
    </div>
  );
}

function Frame35() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="[word-break:break-word] content-stretch flex gap-[40px] items-start leading-[normal] overflow-clip py-[28px] relative rounded-[inherit] size-full">
        <p className="font-['Geist:Light',sans-serif] font-light relative shrink-0 text-[#ccc] text-[28px] whitespace-nowrap">02</p>
        <Frame36 />
      </div>
      <div aria-hidden className="absolute border-[#e0e0e0] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px overflow-clip relative" data-name="Frame">
      <p className="font-['Geist:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#171717] text-[18px] w-full">Every result is a version, not a layer</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal relative shrink-0 text-[#737373] text-[14px] w-full">{`Since edits can't stack like in Photoshop, each generation is saved to the gallery with the prompt that produced it, so people can compare and pick up where they left off.`}</p>
    </div>
  );
}

function Frame37() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[40px] items-start leading-[normal] overflow-clip py-[28px] relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Geist:Light',sans-serif] font-light relative shrink-0 text-[#ccc] text-[28px] whitespace-nowrap">03</p>
      <Frame38 />
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip pt-[16px] relative shrink-0 w-full" data-name="Frame">
      <Frame33 />
      <Frame35 />
      <Frame37 />
    </div>
  );
}

function ContextTaskSplit() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[44px] items-start min-w-px relative" data-name="Context Task Split">
      <Frame29 />
      <Frame32 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[25px] top-[28px]" data-name="Group">
      <div className="absolute h-[528px] left-[25px] rounded-[20px] shadow-[0px_0px_40px_0px_rgba(35,39,44,0.05)] top-[28px] w-[250px]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[20px]">
          <img alt="" className="absolute h-[102.51%] left-0 max-w-none top-[-2.57%] w-full" src={imgRectangle42276} />
        </div>
      </div>
      <div className="absolute h-[507px] left-[297px] rounded-[20px] shadow-[0px_0px_40px_0px_rgba(35,39,44,0.05)] top-[174px] w-[240px]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[20px]">
          <img alt="" className="absolute h-[102.51%] left-0 max-w-none top-[-2.57%] w-full" src={imgRectangle42277} />
        </div>
      </div>
    </div>
  );
}

function VisualColumn() {
  return (
    <div className="h-[700px] relative shrink-0 w-[550px]" data-name="Visual Column">
      <Group />
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex gap-[80px] items-end justify-center px-[64px] relative shrink-0 w-[1440px]" data-name="Frame">
      <ContextTaskSplit />
      <VisualColumn />
    </div>
  );
}

function ContextTaskSection() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center pb-[80px] pt-[120px] px-[120px] relative shrink-0 w-full" data-name="Context & Task Section">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[562px] left-[calc(50%+333px)] top-[calc(50%-19px)] w-[584px]" data-name="Ellipse">
        <div className="absolute inset-[-9.79%_-9.42%]">
          <svg className="block size-full" fill="none" height="672" preserveAspectRatio="none" viewBox="0 0 694 672" width="694">
            <g filter="url(#filter0_f_0_58)" id="Ellipse" opacity="0.4">
              <ellipse cx="347" cy="336" fill="url(#paint0_radial_0_58)" fillOpacity="0.6" rx="292" ry="281" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="672" id="filter0_f_0_58" width="694" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_0_58" stdDeviation="27.5" />
              </filter>
              <radialGradient cx="0" cy="0" gradientTransform="translate(347 336) rotate(90) scale(281 292)" gradientUnits="userSpaceOnUse" id="paint0_radial_0_58" r="1">
                <stop stopColor="#7C6EF6" />
                <stop offset="1" stopColor="#FAFAFA" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
      <Frame28 />
    </div>
  );
}

function Frame42() {
  return <div className="bg-[#ccc] h-px relative shrink-0 w-[24px]" data-name="Frame" />;
}

function Frame41() {
  return (
    <div className="content-stretch flex gap-[12px] items-center overflow-clip relative shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#7c6ef6] text-[13px] tracking-[0.5px] whitespace-nowrap">06</p>
      <Frame42 />
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#737373] text-[13px] tracking-[1px] whitespace-nowrap">THE FINAL EXPERIENCE</p>
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0" data-name="Frame">
      <Frame41 />
      <p className="[word-break:break-word] font-['Geist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#171717] text-[36px] tracking-[-0.5px] whitespace-nowrap">A continuous AI workspace for interior design</p>
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] min-w-full relative shrink-0 text-[#737373] text-[17px] w-[min-content]">Together, these patterns turn AI Redesign from a single “change the style” feature into a more flexible AI-powered editing experience.</p>
    </div>
  );
}

function Frame44() {
  return (
    <div className="flex-[1_0_0] min-w-[180px] relative" data-name="Frame">
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start leading-[normal] min-w-[inherit] overflow-clip pt-[16px] relative rounded-[inherit] size-full">
        <p className="font-['Geist:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#171717] text-[15px] whitespace-nowrap">AI Tools</p>
        <p className="font-['Geist:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[#737373] text-[13px] w-[min-content]">for common editing tasks</p>
      </div>
      <div aria-hidden className="absolute border-[#7c6ef6] border-solid border-t-2 inset-0 pointer-events-none" />
    </div>
  );
}

function Frame45() {
  return (
    <div className="flex-[1_0_0] min-w-[180px] relative" data-name="Frame">
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start leading-[normal] min-w-[inherit] overflow-clip pt-[16px] relative rounded-[inherit] size-full">
        <p className="font-['Geist:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#171717] text-[15px] whitespace-nowrap">Natural-Language Prompting</p>
        <p className="font-['Geist:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[#737373] text-[13px] w-[min-content]">for open-ended requests</p>
      </div>
      <div aria-hidden className="absolute border-[#7c6ef6] border-solid border-t-2 inset-0 pointer-events-none" />
    </div>
  );
}

function Frame46() {
  return (
    <div className="flex-[1_0_0] min-w-[180px] relative" data-name="Frame">
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start leading-[normal] min-w-[inherit] overflow-clip pt-[16px] relative rounded-[inherit] size-full">
        <p className="font-['Geist:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#171717] text-[15px] whitespace-nowrap">Visual Selection</p>
        <p className="font-['Geist:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[#737373] text-[13px] w-[min-content]">for localized changes</p>
      </div>
      <div aria-hidden className="absolute border-[#7c6ef6] border-solid border-t-2 inset-0 pointer-events-none" />
    </div>
  );
}

function Frame47() {
  return (
    <div className="flex-[1_0_0] min-w-[180px] relative" data-name="Frame">
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start leading-[normal] min-w-[inherit] overflow-clip pt-[16px] relative rounded-[inherit] size-full">
        <p className="font-['Geist:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#171717] text-[15px] whitespace-nowrap">Asynchronous Generation</p>
        <p className="font-['Geist:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[#737373] text-[13px] w-[min-content]">{`so AI doesn't block the workflow`}</p>
      </div>
      <div aria-hidden className="absolute border-[#7c6ef6] border-solid border-t-2 inset-0 pointer-events-none" />
    </div>
  );
}

function Frame48() {
  return (
    <div className="flex-[1_0_0] min-w-[180px] relative" data-name="Frame">
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start leading-[normal] min-w-[inherit] overflow-clip pt-[16px] relative rounded-[inherit] size-full">
        <p className="font-['Geist:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#171717] text-[15px] whitespace-nowrap">Version History</p>
        <p className="font-['Geist:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[#737373] text-[13px] w-[min-content]">so users can explore past results</p>
      </div>
      <div aria-hidden className="absolute border-[#7c6ef6] border-solid border-t-2 inset-0 pointer-events-none" />
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex gap-[48px] items-start overflow-clip pt-[16px] relative shrink-0 w-full" data-name="Frame">
      <Frame44 />
      <Frame45 />
      <Frame46 />
      <Frame47 />
      <Frame48 />
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex flex-col gap-[44px] items-start overflow-clip px-[64px] py-[100px] relative shrink-0 w-[1440px]" data-name="Frame">
      <Frame40 />
      <Frame43 />
    </div>
  );
}

function Frame52() {
  return <div className="bg-[#ccc] h-px relative shrink-0 w-[24px]" data-name="Frame" />;
}

function Frame51() {
  return (
    <div className="content-stretch flex gap-[12px] items-center overflow-clip relative shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#7c6ef6] text-[13px] tracking-[0.5px] whitespace-nowrap">07</p>
      <Frame52 />
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#737373] text-[13px] tracking-[1px] whitespace-nowrap">OUTCOME</p>
    </div>
  );
}

function Frame50() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start max-w-[600px] min-w-px relative" data-name="Frame">
      <Frame51 />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[1.4] min-w-full relative shrink-0 text-[#171717] text-[22px] w-[min-content]">{`I initiated the concept and designed the initial UX and visual direction. The product was later refined and extended in collaboration with another designer — development is complete and it's currently in testing.`}</p>
      <p className="[word-break:break-word] font-['Geist:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#737373] text-[13px] tracking-[0.3px] whitespace-nowrap">Built · Currently in testing</p>
    </div>
  );
}

function Frame49() {
  return (
    <div className="content-stretch flex gap-[40px] items-center overflow-clip pb-[120px] pt-[100px] px-[64px] relative shrink-0 w-[1440px]" data-name="Frame">
      <Frame50 />
      <div className="aspect-[672/441] flex-[1_0_0] max-h-[459.375px] max-w-[700px] min-h-[183.75px] min-w-[280px] relative">
        <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgRectangle42278} />
      </div>
    </div>
  );
}

function BeforeAndAfterSection() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-[1920px]" data-name="Before and After Section">
      <Frame20 />
      <ContextTaskSection />
      <Frame39 />
      <Frame49 />
    </div>
  );
}

function FooterLeft() {
  return (
    <div className="content-stretch flex gap-[40px] items-center relative shrink-0" data-name="Footer Left">
      <p className="font-['Cormorant_SC:Bold',sans-serif] not-italic relative shrink-0 text-[#1a1a1a] text-[20px]">Maryna Ivanova</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal relative shrink-0 text-[#999] text-[14px]">© 2026</p>
    </div>
  );
}

function FooterRight() {
  return (
    <div className="content-stretch flex font-['Geist:Regular',sans-serif] font-normal gap-[32px] items-center relative shrink-0 text-[#999] text-[14px]" data-name="Footer Right">
      <p className="relative shrink-0">Home</p>
      <p className="relative shrink-0">About</p>
      <p className="relative shrink-0">Cases</p>
      <p className="relative shrink-0">Resume</p>
    </div>
  );
}

function FooterContent() {
  return (
    <div className="[word-break:break-word] content-stretch flex items-center justify-between leading-[normal] relative shrink-0 w-[1280px] whitespace-nowrap" data-name="Footer Content">
      <FooterLeft />
      <FooterRight />
    </div>
  );
}

function FooterSection() {
  return (
    <div className="content-stretch flex flex-col items-center px-[120px] py-[64px] relative shrink-0 w-full" data-name="Footer Section">
      <div aria-hidden className="absolute border-[#ebebeb] border-solid border-t inset-0 pointer-events-none" />
      <FooterContent />
    </div>
  );
}

function BrandLogo() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Brand Logo">
      <p className="[word-break:break-word] font-['Cormorant:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#1a1a1a] text-[24px] whitespace-nowrap">MI</p>
      <div className="relative shrink-0 size-[5px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" height="5" preserveAspectRatio="none" viewBox="0 0 5 5" width="5">
          <circle cx="2.5" cy="2.5" fill="#7C6EF6" id="Ellipse" r="2.5" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Geist:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#666] text-[13px] uppercase whitespace-nowrap">Portfolio</p>
    </div>
  );
}

function NavLinks() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Geist:Medium',sans-serif] font-medium gap-[40px] items-start leading-[normal] relative shrink-0 text-[14px] whitespace-nowrap" data-name="Nav Links">
      <p className="relative shrink-0 text-[#999]">Home</p>
      <p className="relative shrink-0 text-[#999]">About</p>
      <p className="relative shrink-0 text-[#1a1a1a]">Cases</p>
      <p className="relative shrink-0 text-[#999]">Resume</p>
    </div>
  );
}

function HeaderNavigation() {
  return (
    <div className="absolute bg-white content-stretch flex h-[90px] items-center justify-between left-0 px-[120px] py-[32px] top-0 w-[1920px]" data-name="Header Navigation">
      <div aria-hidden className="absolute border-[#ebebeb] border-b border-solid inset-0 pointer-events-none" />
      <BrandLogo />
      <NavLinks />
    </div>
  );
}

export default function HomePlannerLightCase() {
  return (
    <div className="bg-[#fafafa] content-stretch flex flex-col items-center pt-[90px] relative size-full" data-name="home-planner-light-case">
      <HeroSection />
      <Frame53 />
      <Frame54 />
      <BeforeAndAfterSection />
      <FooterSection />
      <HeaderNavigation />
    </div>
  );
}