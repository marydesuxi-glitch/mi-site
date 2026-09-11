import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import HomePlannerMobile from "@/imports/HomePlannerMobile/index";
import MobileNav from "@/imports/Frame-1/index";
import ContactFooterBar from "@/imports/ContactFooterBar/index";
import HeaderNavigation from "@/imports/HeaderNavigation/index";
import MobileFooter from "@/imports/ContactFooterBar-2/index";
import svgPaths from "@/imports/HomePlannerLightCase/svg-573g7fumim";
import imgScreenshot from "@/imports/HomePlannerLightCase/aacd9576352e2b7c2fdfa48ded1009f3c13b322d.png";
import imgIPhone14Pro2 from "@/imports/HomePlannerLightCase/c5454dd63c2c3f96a720608d964ba3c04fcaa97f.png";
import imgIPhone15Pro from "@/imports/HomePlannerLightCase/5e689c3a7d0a91ee7e07f18862b52b1050e14967.png";
import imgRectangle42268 from "@/imports/HomePlannerLightCase/1a96ffd82e1d2a48784aaaaf0f02c3ca37001262.png";
import imgRectangle42271 from "@/imports/HomePlannerLightCase/85acda4a4b3adcec11413d7032e8a4c73e620b0b.png";
import imgRectangle42269 from "@/imports/HomePlannerLightCase/ae389c911c6a4a49a74d576d1615a02bdb73cbf3.png";
import imgRectangle42272 from "@/imports/HomePlannerLightCase/76bfca80eae4b413043ec37cc714cfc15601f32e.png";
import imgRectangle42270 from "@/imports/HomePlannerLightCase/7a0fd4ff58471d7e16f39a38873202b63275a1cc.png";
import imgRectangle42273 from "@/imports/HomePlannerLightCase/5088afce8660c6a0715abe6b0018c6514d1d735d.png";
import imgRectangle42274 from "@/imports/HomePlannerLightCase/f1bd3dadd2c7c084cf2ac53582d87c4540d54ac1.png";
import imgRectangle42275 from "@/imports/HomePlannerLightCase/d34e40cf61dc8277f3c934a5f15f9dac6a28b28a.png";
import imgRectangle42276 from "@/imports/HomePlannerLightCase/14b15e5d9801e361df7e73995570ec107f9bbada.png";
import imgRectangle42277 from "@/imports/HomePlannerLightCase/9426ddbc1f21f333c543b8bb08cac5016a346bb5.png";
import imgRectangle42278 from "@/imports/HomePlannerLightCase/29b3304c83aa90bf05f2daa0a24c45f0790b0e0b.png";

// ---------- Hooks ----------

function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

function useSectionLineReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".section-line");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

// ---------- Section number label with animated line ----------

function SectionLabel({
  number,
  label,
  lineColor = "#ccc",
  labelColor = "#737373",
}: {
  number: string;
  label: string;
  lineColor?: string;
  labelColor?: string;
}) {
  return (
    <div className="content-stretch flex gap-[12px] items-center overflow-clip relative shrink-0">
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#7c6ef6] text-[13px] tracking-[0.5px] whitespace-nowrap">
        {number}
      </p>
      <div
        className="section-line h-px w-[24px] shrink-0"
        style={{ backgroundColor: lineColor }}
      />
      <p
        className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[13px] tracking-[1px] uppercase whitespace-nowrap"
        style={{ color: labelColor }}
      >
        {label}
      </p>
    </div>
  );
}

// ---------- Design Components ----------

function Shadow() {
  return (
    <div
      className="absolute bg-black inset-[0_1%] rounded-[50px] shadow-[0px_0px_86.113px_0px_rgba(0,0,0,0.15)]"
      data-name="Shadow"
    />
  );
}

function Lens() {
  return (
    <div className="absolute inset-[23.53%_6.96%_26.47%_78.26%]" data-name="Lens">
      <div className="absolute inset-[0_-25.37%_-25%_-25.37%]">
        <svg
          className="block size-full"
          fill="none"
          height="19.6853"
          preserveAspectRatio="none"
          viewBox="0 0 23.3941 19.6853"
          width="23.3941"
        >
          <g id="Lens">
            <g filter="url(#filter0_f_0_53)" id="Ellipse 1">
              <path
                d={svgPaths.p22888f40}
                fill="url(#paint0_linear_0_53)"
                fillOpacity="0.3"
              />
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
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="15.7482"
              id="filter0_f_0_53"
              width="23.3941"
              x="0"
              y="3.93706"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_0_53" stdDeviation="1.96853" />
            </filter>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="10.962"
              id="filter1_f_0_53"
              width="10.8412"
              x="6.27646"
              y="2.39311"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_0_53" stdDeviation="0.656176" />
            </filter>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="3.55107"
              id="filter2_f_0_53"
              width="5.36353"
              x="9.01529"
              y="4.24584"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_0_53" stdDeviation="0.656176" />
            </filter>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="3.55107"
              id="filter3_f_0_53"
              width="3.53764"
              x="9.92823"
              y="7.02494"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_0_53" stdDeviation="0.656176" />
            </filter>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_0_53"
              x1="11.697"
              x2="11.697"
              y1="0"
              y2="15.7482"
            >
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
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={imgIPhone14Pro2}
        />
      </div>
      <div
        className="absolute h-[31.496px] top-[34.45px] w-[104.988px]"
        style={{ left: "calc(50% - 52.494px)" }}
        data-name="Island"
      >
        <div className="absolute bg-black inset-0 rounded-[50px]" data-name="Island" />
        <Lens />
      </div>
    </div>
  );
}

function HeroImage() {
  return (
    <div
      className="absolute content-stretch flex items-center left-[80.29px] pt-[20px] top-0"
      data-name="Image"
    >
      <div className="h-[805.809px] relative shrink-0 w-[393.706px]" data-name="Device 14PM">
        <Shadow />
        <div
          className="absolute inset-[1.94%_4.44%_1.94%_4.67%] rounded-[15px]"
          data-name="Screenshot"
        >
          <img
            alt=""
            className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[15px] size-full"
            src={imgScreenshot}
          />
        </div>
        <Device />
      </div>
    </div>
  );
}

function HeroVisualBleedWrapper() {
  return (
    <div
      className="absolute h-[550px] left-[575px] top-0 w-[825px]"
      data-name="Hero Visual Bleed Wrapper"
    >
      <div className="absolute h-[550px] left-0 top-0 w-[825px]" data-name="iPhone 15 Pro">
        <img
          alt=""
          className="absolute inset-0 max-w-none object-contain pointer-events-none size-full"
          src={imgIPhone15Pro}
        />
      </div>
    </div>
  );
}

function HeroImages() {
  return (
    <div
      className="-translate-x-1/2 absolute h-[630px] left-1/2 top-[90px] w-[1400px]"
      data-name="Images"
    >
      <div
        className="absolute h-[575px] left-[-72px] top-[342px] w-[700px]"
        data-name="Purple Glow Behind Screen"
      >
        <div className="absolute inset-[-13.91%_-11.43%]">
          <svg
            className="block size-full"
            fill="none"
            height="735"
            preserveAspectRatio="none"
            viewBox="0 0 860 735"
            width="860"
          >
            <g filter="url(#filter0_f_0_59)" id="Purple Glow Behind Screen">
              <ellipse
                cx="430"
                cy="367.5"
                fill="url(#paint0_radial_0_59)"
                fillOpacity="0.101961"
                rx="350"
                ry="287.5"
              />
            </g>
            <defs>
              <filter
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
                height="735"
                id="filter0_f_0_59"
                width="860"
                x="0"
                y="0"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  mode="normal"
                  result="shape"
                />
                <feGaussianBlur result="effect1_foregroundBlur_0_59" stdDeviation="40" />
              </filter>
              <radialGradient
                cx="0"
                cy="0"
                gradientTransform="translate(430 367.5) rotate(90) scale(287.5 350)"
                gradientUnits="userSpaceOnUse"
                id="paint0_radial_0_59"
                r="1"
              >
                <stop stopColor="#7C6EF6" />
                <stop offset="1" stopColor="#7C6EF6" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
      <HeroImage />
      <HeroVisualBleedWrapper />
    </div>
  );
}

function HeroSection() {
  return (
    <div
      className="border-[#ebebeb] border-b border-solid h-[720px] overflow-clip relative shrink-0 w-full"
      style={{
        backgroundColor: "rgba(123,123,161,0.1)",
        backgroundImage: `radial-gradient(circle, rgba(100,100,140,0.18) 1px, transparent 1px)`,
        backgroundSize: "28px 28px",
      }}
      data-name="Hero Section"
    >
      <HeroImages />
      <div className="absolute bg-[#141416] bottom-[31px] content-stretch flex items-start left-[120px] overflow-clip pb-[7px] pt-[6px] px-[12px] rounded-[7px]">
        <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[11px] text-white tracking-[0.5px] whitespace-nowrap">
          AI Tool · AI Redesign
        </p>
      </div>
    </div>
  );
}

function IntroSection() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
      {/* Title block */}
      <div className="content-stretch flex items-start justify-between overflow-clip pb-[20px] pt-[80px] px-[64px] relative shrink-0 w-[1440px]">
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[44px] items-start max-w-[800px] min-w-px overflow-clip relative reveal">
          <div className="[word-break:break-word] font-['Geist:Bold',sans-serif] font-bold leading-[0] min-w-full relative shrink-0 text-[#171717] text-[52px] tracking-[-1.2px] w-[min-content] whitespace-pre-wrap">
            <p className="leading-[1.06] mb-0">{`Teaching an AI to edit rooms, `}</p>
            <p className="leading-[1.06]">not just talk about them</p>
          </div>
          <div className="content-stretch flex items-center px-[20px] py-[14px] relative rounded-[999px] shrink-0 cta-btn">
            <div
              aria-hidden
              className="absolute border border-[#141414] border-solid inset-0 pointer-events-none rounded-[999px]"
            />
            <a
              className="[word-break:break-word] block font-['Geist:SemiBold',sans-serif] font-semibold leading-[0] relative shrink-0 text-[#141414] text-[15px] whitespace-nowrap"
              href="https://share.icandesign.app/"
              target="_blank"
              rel="noreferrer"
            >
              <p className="[text-underline-position:from-font] cursor-pointer decoration-from-font decoration-solid leading-[normal] underline">
                Home Planner.app ↗
              </p>
            </a>
          </div>
        </div>
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[24px] items-start overflow-clip relative shrink-0 w-[350px] reveal reveal-delay-1">
          <div className="content-stretch flex flex-col gap-[6px] items-start leading-[normal] overflow-clip relative shrink-0 w-full">
            <p className="font-['Geist:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#7c6ef6] text-[11px] tracking-[0.5px] whitespace-nowrap">
              ROLE
            </p>
            <p className="font-['Geist:Medium',sans-serif] font-medium min-w-full relative shrink-0 text-[#171717] text-[17px] w-[min-content]">
              Product Designer
            </p>
          </div>
          <div className="content-stretch flex flex-col gap-[6px] items-start leading-[normal] overflow-clip relative shrink-0 w-full">
            <p className="font-['Geist:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#7c6ef6] text-[11px] tracking-[0.5px] whitespace-nowrap">
              STATUS
            </p>
            <p className="font-['Geist:Medium',sans-serif] font-medium min-w-full relative shrink-0 text-[#171717] text-[17px] w-[min-content]">
              Built · Currently in testing
            </p>
          </div>
          <div className="content-stretch flex flex-col gap-[6px] items-start overflow-clip relative shrink-0 w-full">
            <p className="font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#7c6ef6] text-[11px] tracking-[0.5px] whitespace-nowrap">
              PLATFORM
            </p>
            <p className="font-['Geist:Medium',sans-serif] font-medium leading-[0] min-w-full relative shrink-0 text-[#171717] text-[17px] w-[min-content]">
              <span className="leading-[normal]">Home</span>
              <span className="leading-[normal]">{` Planner App`}</span>
            </p>
          </div>
        </div>
      </div>

      {/* Task section */}
      <div className="content-stretch flex flex-col gap-[28px] items-start overflow-clip pb-[120px] pt-[60px] px-[64px] relative shrink-0 w-[1440px]">
        <div className="reveal">
          <SectionLabel number="01" label="THE Task" labelColor="#737373" lineColor="#ccc" />
        </div>
        <div className="[word-break:break-word] font-['Geist:Light',sans-serif] font-light leading-[0] min-w-full relative shrink-0 text-[#171717] text-[24px] tracking-[-0.3px] w-[min-content] whitespace-pre-wrap reveal reveal-delay-1">
          <p className="leading-[1.32] mb-0">{`The initial brief was to create a non-step-by-step AI editing experience. `}</p>
          <p className="leading-[1.32]">One possible direction was an AI chat.</p>
        </div>
      </div>
    </div>
  );
}

function ChallengeSection() {
  return (
    <div className="bg-[#1b1b1e] content-stretch flex flex-col gap-[28px] items-center overflow-clip px-[64px] py-[100px] relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[28px] items-start overflow-clip px-[64px] relative shrink-0 w-[1440px]">
        <div className="reveal">
          <SectionLabel number="02" label="THE CHALLENGE" labelColor="#8b8b8b" lineColor="#737373" />
        </div>
        <p className="[word-break:break-word] font-['Geist:Bold',sans-serif] font-bold leading-[normal] min-w-full relative shrink-0 text-[36px] text-white tracking-[-0.5px] w-[min-content] reveal reveal-delay-1">
          But I questioned whether another standalone chat was the right solution:
        </p>
        <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[0] min-w-full relative shrink-0 text-[#8b8b8b] text-[16px] w-[min-content] reveal reveal-delay-2">
          <span className="leading-[1.65]">{`If people can already ask ChatGPT for design advice, `}</span>
          <span className="leading-[1.65] text-white">{`why `}</span>
          <span className="leading-[1.65]">{`build another AI chat inside Home Planner? The real opportunity wasn't conversation — it was an AI that understands the exact room a user is working on, and can change it directly.`}</span>
        </p>
      </div>
      <div className="content-stretch flex items-center justify-between pt-[60px] relative shrink-0 w-[1440px]">
        <div className="content-stretch flex flex-[1_0_0] flex-col items-start max-w-[600px] min-w-px overflow-clip px-[64px] py-[20px] relative reveal">
          <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[0] relative shrink-0 text-[#737373] text-[12px] tracking-[1px] uppercase whitespace-pre">
            <span className="leading-[normal]">{`P.S.   `}</span>
            <span className="leading-[normal]">
              This changed how I approached history, navigation and waiting states.
            </span>
          </p>
        </div>
        <div className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[0] relative shrink-0 text-[17px] text-white w-[600px] reveal reveal-delay-1">
          <p className="leading-[1.28] mb-0">
            What if AI worked more like a photo editor — one continuous space,
          </p>
          <p className="leading-[1.28]">not a single linear conversation?</p>
        </div>
      </div>
    </div>
  );
}

const APPROACH_TOOLS = ["Style", "Color", "Light", "Clean", "Renovate"] as const;
const APPROACH_IMAGES = [
  imgRectangle42268,
  imgScreenshot,
  imgRectangle42271,
  imgRectangle42269,
  imgRectangle42272,
];

function ApproachSection() {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <div className="bg-[#fafafa] content-stretch flex flex-col items-center justify-start overflow-clip pb-[100px] px-[240px] relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[36px] items-start overflow-clip pb-[40px] pt-[100px] px-[64px] relative shrink-0 w-[1440px]">
        <div className="content-stretch flex flex-col gap-[28px] items-start max-w-[800px] relative shrink-0 w-full">
          <div className="reveal">
            <SectionLabel number="03" label="APPROACH" labelColor="#737373" lineColor="#ccc" />
          </div>
          <p className="[word-break:break-word] font-['Geist:Bold',sans-serif] font-bold leading-[normal] min-w-full relative shrink-0 text-[40px] text-black tracking-[-0.6px] w-[min-content] reveal reveal-delay-1">
            Five tools. One continuous canvas.
          </p>
          <div className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[0] min-w-full relative shrink-0 text-[#737373] text-[14px] w-[min-content] whitespace-pre-wrap reveal reveal-delay-2">
            <p className="leading-[normal] mb-0">{`Style, Color, Light, Clean, and Renovate each turn a common editing task into a single tap — select, generate — instead of a prompt someone has to compose. For anything else, Add prompt keeps the door open. `}</p>
            <p className="leading-[normal]">
              Guided tools for predictable tasks. Natural language for everything else.
            </p>
          </div>
        </div>
        <div className="[word-break:break-word] content-stretch flex gap-[44px] items-start leading-[normal] overflow-clip pt-[16px] relative shrink-0 text-[18px] whitespace-nowrap reveal">
          {APPROACH_TOOLS.map((tool, i) => (
            <p
              key={tool}
              onClick={() => setActiveIdx(i)}
              className={`cursor-pointer transition-colors duration-150 relative shrink-0 ${
                i === activeIdx
                  ? "font-['Geist:SemiBold',sans-serif] font-semibold text-[#7c6ef6]"
                  : "font-['Geist:Medium',sans-serif] font-medium text-black"
              }`}
            >
              {tool}
            </p>
          ))}
        </div>
      </div>

      {/* Screens */}
      <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0">
        <div className="content-stretch flex items-center justify-between px-[64px] relative shrink-0 w-[1440px]" style={{ height: 650 }}>
          {APPROACH_IMAGES.map((src, i) => {
            const isActive = i === activeIdx;
            return (
              <div
                key={i}
                style={{
                  height: isActive ? 570 : 486,
                  width: isActive ? 270 : 230,
                  transition: "height 300ms ease, width 300ms ease",
                }}
                onClick={() => setActiveIdx(i)}
                className={`relative rounded-[20px] shadow-[0px_0px_40px_0px_rgba(35,39,44,0.05)] shrink-0 reveal cursor-pointer ${
                  i === 0 ? "" : i <= 1 ? "reveal-delay-1" : "reveal-delay-2"
                }`}
              >
                <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[20px]">
                  <img
                    alt=""
                    className="absolute h-[102.51%] left-0 max-w-none top-[-2.57%] w-full"
                    src={src}
                  />
                </div>
                {isActive && (
                  <div
                    aria-hidden
                    className="absolute border-2 border-[#e0e0e0] border-solid inset-[-2px] rounded-[22px] shadow-[0px_0px_40px_0px_rgba(35,39,44,0.05)]"
                  />
                )}
              </div>
            );
          })}
        </div>

        {/* Lines / scrollbar indicator */}
        <div className="content-stretch flex items-center px-[64px] py-[24px] relative shrink-0 w-[1440px]">
          {/* track */}
          <div className="flex flex-[1_0_0] h-[3px] relative rounded-[24px] w-full overflow-hidden" style={{ backgroundColor: "rgba(0,0,0,0.1)" }}>
            {/* active thumb */}
            <div
              className="absolute top-0 h-full rounded-[24px]"
              style={{
                backgroundColor: "#141416",
                width: "20%",
                left: `${activeIdx * 20}%`,
                transition: "left 300ms ease",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function VisualContextSection() {
  return (
    <div className="bg-[#1b1b1e] content-stretch flex flex-col items-center pb-[60px] relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[28px] items-start overflow-clip pb-[60px] pt-[100px] px-[64px] relative shrink-0 w-[1440px]">
        <div className="reveal">
          <SectionLabel
            number="04"
            label="EDITING WITH VISUAL CONTEXT"
            labelColor="#8b8b8b"
            lineColor="#8b8b8b"
          />
        </div>
        <p className="[word-break:break-word] font-['Geist:Bold',sans-serif] font-bold leading-[normal] max-w-[800px] min-w-full relative shrink-0 text-[40px] text-white tracking-[-0.6px] w-[min-content] reveal reveal-delay-1">
          Sometimes showing is easier than describing
        </p>
        <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] max-w-[800px] min-w-full relative shrink-0 text-[#8b8b8b] text-[14px] w-[min-content] reveal reveal-delay-2">
          For localized changes, users select the area they want AI to work on directly on the image
          — select an area, choose an action, Generate. This gives AI visual context without
          requiring a prompt that explains where the change should happen, making the interaction
          feel less like talking to a chatbot and more like working with an editing tool.
        </p>
      </div>

      {/* Before/After image pairs */}
      <div className="content-stretch flex flex-col gap-[40px] h-[688px] items-center justify-center overflow-clip relative shrink-0 w-full">
        <div className="content-stretch flex gap-[28px] items-center justify-center px-[64px] relative shrink-0 w-[1440px]">
          <div className="h-[528px] relative rounded-[20px] shrink-0 w-[250px] img-hover reveal">
            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[20px]">
              <img
                alt=""
                className="absolute h-[102.51%] left-0 max-w-none top-[-2.57%] w-full"
                src={imgRectangle42270}
              />
            </div>
          </div>
          {/* Arrow */}
          <div className="bg-[rgba(255,255,255,0.05)] content-stretch flex flex-col items-center justify-center relative rounded-[14.286px] shrink-0 size-[28.571px]">
            <div
              aria-hidden
              className="absolute border-[0.893px] border-[rgba(229,229,229,0.15)] border-solid inset-0 pointer-events-none rounded-[14.286px]"
            />
            <div className="relative shrink-0 size-[10.714px]">
              <svg
                className="absolute block inset-0 size-full"
                fill="none"
                height="10.7143"
                preserveAspectRatio="none"
                viewBox="0 0 10.7143 10.7143"
                width="10.7143"
              >
                <g id="arrow-right">
                  <path
                    d={svgPaths.p94fe980}
                    id="Vector"
                    stroke="#E5E5E5"
                    strokeLinecap="round"
                    strokeWidth="1.78571"
                  />
                </g>
              </svg>
            </div>
          </div>
          <div className="h-[528px] relative rounded-[20px] shrink-0 w-[250px] img-hover reveal reveal-delay-1">
            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[20px]">
              <img
                alt=""
                className="absolute h-[102.51%] left-0 max-w-none top-[-2.57%] w-full"
                src={imgRectangle42273}
              />
            </div>
          </div>
          <div className="bg-[rgba(255,255,255,0.05)] content-stretch flex flex-col items-center justify-center relative rounded-[14.286px] shrink-0 size-[28.571px]">
            <div
              aria-hidden
              className="absolute border-[0.893px] border-[rgba(229,229,229,0.15)] border-solid inset-0 pointer-events-none rounded-[14.286px]"
            />
            <div className="relative shrink-0 size-[10.714px]">
              <svg
                className="absolute block inset-0 size-full"
                fill="none"
                height="10.7143"
                preserveAspectRatio="none"
                viewBox="0 0 10.7143 10.7143"
                width="10.7143"
              >
                <g id="arrow-right">
                  <path
                    d={svgPaths.p94fe980}
                    id="Vector"
                    stroke="#E5E5E5"
                    strokeLinecap="round"
                    strokeWidth="1.78571"
                  />
                </g>
              </svg>
            </div>
          </div>
          <div className="h-[528px] relative rounded-[20px] shrink-0 w-[250px] img-hover reveal reveal-delay-1">
            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[20px]">
              <img
                alt=""
                className="absolute h-[102.51%] left-0 max-w-none top-[-2.57%] w-full"
                src={imgRectangle42274}
              />
            </div>
          </div>
          <div className="bg-[rgba(255,255,255,0.05)] content-stretch flex flex-col items-center justify-center relative rounded-[14.286px] shrink-0 size-[28.571px]">
            <div
              aria-hidden
              className="absolute border-[0.893px] border-[rgba(229,229,229,0.15)] border-solid inset-0 pointer-events-none rounded-[14.286px]"
            />
            <div className="relative shrink-0 size-[10.714px]">
              <svg
                className="absolute block inset-0 size-full"
                fill="none"
                height="10.7143"
                preserveAspectRatio="none"
                viewBox="0 0 10.7143 10.7143"
                width="10.7143"
              >
                <g id="arrow-right">
                  <path
                    d={svgPaths.p94fe980}
                    id="Vector"
                    stroke="#E5E5E5"
                    strokeLinecap="round"
                    strokeWidth="1.78571"
                  />
                </g>
              </svg>
            </div>
          </div>
          <div className="h-[528px] relative rounded-[20px] shrink-0 w-[250px] img-hover reveal reveal-delay-2">
            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[20px]">
              <img
                alt=""
                className="absolute h-[102.51%] left-0 max-w-none top-[-2.57%] w-full"
                src={imgRectangle42275}
              />
            </div>
          </div>
        </div>

        {/* Caption labels */}
        <div className="content-stretch flex items-center justify-between px-[93px] relative shrink-0 w-[1440px]">
          {["Brush", "Drawing process", "Selected", "Done"].map((label) => (
            <div key={label} className="relative shrink-0 w-[250px]">
              <div className="content-stretch flex flex-col gap-[12px] items-start p-[16px] relative size-full">
                <div className="[word-break:break-word] flex flex-col font-['Geist:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#8b8b8b] text-[12px] text-center uppercase w-full">
                  <p className="leading-[normal]">{label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function WhatMadeItHardSection() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center pb-[80px] pt-[120px] px-[120px] relative shrink-0 w-full">
      {/* Background ellipse glow */}
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[562px] left-[calc(50%+333px)] top-[calc(50%-19px)] w-[584px]">
        <div className="absolute inset-[-9.79%_-9.42%]">
          <svg
            className="block size-full"
            fill="none"
            height="672"
            preserveAspectRatio="none"
            viewBox="0 0 694 672"
            width="694"
          >
            <g filter="url(#filter0_f_0_58)" id="Ellipse" opacity="0.4">
              <ellipse
                cx="347"
                cy="336"
                fill="url(#paint0_radial_0_58)"
                fillOpacity="0.6"
                rx="292"
                ry="281"
              />
            </g>
            <defs>
              <filter
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
                height="672"
                id="filter0_f_0_58"
                width="694"
                x="0"
                y="0"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_0_58" stdDeviation="27.5" />
              </filter>
              <radialGradient
                cx="0"
                cy="0"
                gradientTransform="translate(347 336) rotate(90) scale(281 292)"
                gradientUnits="userSpaceOnUse"
                id="paint0_radial_0_58"
                r="1"
              >
                <stop stopColor="#7C6EF6" />
                <stop offset="1" stopColor="#FAFAFA" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>

      <div className="content-stretch flex gap-[80px] items-end justify-center px-[64px] relative shrink-0 w-[1440px]">
        {/* Left: text + list */}
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[44px] items-start min-w-px relative">
          <div className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0 w-full">
            <div className="reveal">
              <SectionLabel
                number="05"
                label="WHAT MADE IT HARD"
                labelColor="#737373"
                lineColor="#ccc"
              />
            </div>
            <p className="[word-break:break-word] font-['Geist:Bold',sans-serif] font-bold leading-[normal] max-w-[800px] min-w-full relative shrink-0 text-[#171717] text-[40px] tracking-[-0.6px] w-[min-content] reveal reveal-delay-1">
              Designing for a tool that never responds instantly
            </p>
            <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] max-w-[800px] min-w-full relative shrink-0 text-[#737373] text-[17px] w-[min-content] reveal reveal-delay-2">
              The PM defined the AI tools, prompts, and naming. My responsibility was page
              architecture, UX, and visual design — turning that functionality into a coherent web
              product.
            </p>
          </div>

          <div className="content-stretch flex flex-col items-start overflow-clip pt-[16px] relative shrink-0 w-full">
            {[
              {
                n: "01",
                title: "One change, one generation",
                body: "Unlike a normal photo editor, nothing here updates instantly — every tweak is a fresh AI render, sometimes taking minutes.",
                border: true,
              },
              {
                n: "02",
                title: "Users shouldn't have to wait on screen",
                body: "People can leave mid-generation and come back later — generation runs in the background instead of blocking the workflow.",
                border: true,
              },
              {
                n: "03",
                title: "Every result is a version, not a layer",
                body: "Since edits can't stack like in Photoshop, each generation is saved to the gallery with the prompt that produced it, so people can compare and pick up where they left off.",
                border: false,
              },
            ].map((item, i) => (
              <div
                key={item.n}
                className={`relative shrink-0 w-full reveal${i > 0 ? ` reveal-delay-${i}` : ""}`}
              >
                <div className="[word-break:break-word] content-stretch flex gap-[40px] items-start leading-[normal] overflow-clip py-[28px] relative rounded-[inherit] size-full">
                  <p className="font-['Geist:Light',sans-serif] font-light relative shrink-0 text-[#ccc] text-[28px] whitespace-nowrap">
                    {item.n}
                  </p>
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px overflow-clip relative">
                    <p className="font-['Geist:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#171717] text-[18px] w-full">
                      {item.title}
                    </p>
                    <p className="font-['Geist:Regular',sans-serif] font-normal relative shrink-0 text-[#737373] text-[14px] w-full">
                      {item.body}
                    </p>
                  </div>
                </div>
                {item.border && (
                  <div
                    aria-hidden
                    className="absolute border-[#e0e0e0] border-b border-solid inset-0 pointer-events-none"
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right: stacked images */}
        <div className="h-[700px] relative shrink-0 w-[550px]">
          <div className="absolute h-[528px] left-[25px] rounded-[20px] shadow-[0px_0px_40px_0px_rgba(35,39,44,0.05)] top-[28px] w-[250px] img-hover">
            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[20px]">
              <img
                alt=""
                className="absolute h-[102.51%] left-0 max-w-none top-[-2.57%] w-full"
                src={imgRectangle42276}
              />
            </div>
          </div>
          <div className="absolute h-[507px] left-[297px] rounded-[20px] shadow-[0px_0px_40px_0px_rgba(35,39,44,0.05)] top-[174px] w-[240px] img-hover">
            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[20px]">
              <img
                alt=""
                className="absolute h-[102.51%] left-0 max-w-none top-[-2.57%] w-full"
                src={imgRectangle42277}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FinalExperienceSection() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip px-[64px] py-[100px] relative shrink-0 w-[1440px]" style={{ rowGap: "50px", columnGap: "44px" }}>
      <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0">
        <div className="reveal">
          <SectionLabel
            number="06"
            label="THE FINAL EXPERIENCE"
            labelColor="#737373"
            lineColor="#ccc"
          />
        </div>
        <p className="[word-break:break-word] font-['Geist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#171717] text-[36px] tracking-[-0.5px] whitespace-nowrap reveal reveal-delay-1">
          A continuous AI workspace for interior design
        </p>
        <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] min-w-full relative shrink-0 text-[#737373] text-[17px] w-[min-content] reveal reveal-delay-2">
          Together, these patterns turn AI Redesign from a single "change the style" feature into a
          more flexible AI-powered editing experience.
        </p>
      </div>

      <div className="content-stretch flex gap-[48px] items-start overflow-clip pt-[16px] relative shrink-0 w-full">
        {[
          { title: "AI Tools", desc: "for common editing tasks" },
          { title: "Natural-Language Prompting", desc: "for open-ended requests" },
          { title: "Visual Selection", desc: "for localized changes" },
          { title: "Asynchronous Generation", desc: "so AI doesn't block the workflow" },
          { title: "Version History", desc: "so users can explore past results" },
        ].map((item, i) => (
          <div
            key={item.title}
            className={`flex-[1_0_0] min-w-[180px] relative reveal${i > 0 ? ` reveal-delay-${Math.min(i, 3)}` : ""}`}
          >
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start leading-[normal] min-w-[inherit] overflow-clip pt-[16px] relative rounded-[inherit] size-full">
              <p className="font-['Geist:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#171717] text-[15px] whitespace-nowrap">
                {item.title}
              </p>
              <p className="font-['Geist:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[#737373] text-[13px] w-[min-content]">
                {item.desc}
              </p>
            </div>
            <div
              aria-hidden
              className="absolute border-[#7c6ef6] border-solid border-t-2 inset-0 pointer-events-none"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function OutcomeSection() {
  return (
    <div className="content-stretch flex gap-[40px] items-center overflow-clip pb-[120px] pt-[100px] px-[64px] relative shrink-0 w-[1440px]">
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start max-w-[600px] min-w-px relative">
        <div className="reveal">
          <SectionLabel number="07" label="OUTCOME" labelColor="#737373" lineColor="#ccc" />
        </div>
        <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[1.4] min-w-full relative shrink-0 text-[#171717] text-[17px] w-[min-content] reveal reveal-delay-1">{`I initiated the concept and designed the initial UX and visual direction. The product was later refined and extended in collaboration with another designer — development is complete and it's currently in testing.`}</p>
        <p className="[word-break:break-word] font-['Geist:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#737373] text-[13px] tracking-[0.3px] whitespace-nowrap reveal reveal-delay-2">
          Built · Currently in testing
        </p>
      </div>
      <div className="aspect-[672/441] flex-[1_0_0] max-h-[459.375px] max-w-[700px] min-h-[183.75px] min-w-[280px] relative img-hover reveal reveal-delay-1">
        <img
          alt=""
          className="absolute inset-0 max-w-none object-contain pointer-events-none size-full"
          src={imgRectangle42278}
        />
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="content-stretch flex flex-col items-center px-[120px] py-[64px] relative shrink-0 w-full">
      <div aria-hidden className="absolute border-[#ebebeb] border-solid border-t inset-0 pointer-events-none" />
      <div className="[word-break:break-word] content-stretch flex items-center justify-between leading-[normal] relative shrink-0 w-[1280px] whitespace-nowrap">
        <div className="content-stretch flex gap-[40px] items-center relative shrink-0">
          <p className="font-['Cormorant_SC:Bold',sans-serif] not-italic relative shrink-0 text-[#1a1a1a] text-[20px]">
            Maryna Ivanova
          </p>
          <p className="font-['Geist:Regular',sans-serif] font-normal relative shrink-0 text-[#999] text-[14px]">
            © 2026
          </p>
        </div>
        <div className="content-stretch flex font-['Geist:Regular',sans-serif] font-normal gap-[32px] items-center relative shrink-0 text-[#999] text-[14px]">
          <p className="relative shrink-0 cta-btn cursor-pointer">Home</p>
          <p className="relative shrink-0 cta-btn cursor-pointer">About</p>
          <p className="relative shrink-0 cta-btn cursor-pointer">Cases</p>
          <p className="relative shrink-0 cta-btn cursor-pointer">Resume</p>
        </div>
      </div>
    </div>
  );
}

function Header({ scrolled }: { scrolled: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const logo = el.querySelector('[data-name="Brand Logo"]') as HTMLElement | null;
    if (!logo) return;
    logo.style.cursor = "pointer";
    const handler = () => navigate("/");
    logo.addEventListener("click", handler);
    return () => logo.removeEventListener("click", handler);
  }, [navigate]);

  return (
    <div
      ref={ref}
      className={`fixed left-0 top-0 w-full z-50 header-sticky ${
        scrolled ? "backdrop-blur-sm" : ""
      }`}
      style={{ opacity: scrolled ? 0.97 : 1 }}
    >
      <HeaderNavigation />
    </div>
  );
}

function DesktopApp() {
  const [scrolled, setScrolled] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useScrollReveal();
  useSectionLineReveal();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={containerRef}
      className="bg-[#fafafa] content-stretch flex flex-col items-center pt-[90px] relative min-h-full overflow-x-hidden"
    >
      <Header scrolled={scrolled} />
      <HeroSection />
      <IntroSection />
      <ChallengeSection />
      <div className="bg-[#141416] content-stretch flex flex-col items-center relative shrink-0 w-full">
        <ApproachSection />
      </div>
      <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
        <VisualContextSection />
        <WhatMadeItHardSection />
        <FinalExperienceSection />
        <OutcomeSection />
      </div>
      <ContactFooterBar />
    </div>
  );
}

function MobileShell() {
  const ref = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const backBtn = el.querySelector('[data-name="Back"]') as HTMLElement | null;
    if (backBtn) {
      backBtn.style.cursor = 'pointer';
      backBtn.addEventListener('click', () => navigate('/'));
    }

    const tabsContainer = el.querySelector('[data-name="Tool Tabs (horizontal scroll on mobile)"]');
    // cards are grandchildren: [data-name="Screens"] > Screens1 > card divs
    const screensInner = el.querySelector('[data-name="Screens"] > div');

    if (!tabsContainer || !screensInner) return;

    const tabs = Array.from(tabsContainer.querySelectorAll<HTMLElement>(':scope > div'));
    const cards = Array.from(screensInner.querySelectorAll<HTMLElement>(':scope > div'));

    function setActive(idx: number) {
      tabs.forEach((tab, i) => {
        const p = tab.querySelector('p');
        if (!p) return;
        if (i === idx) {
          tab.style.backgroundColor = '#7c6ef6';
          p.style.color = '#ffffff';
        } else {
          tab.style.backgroundColor = '#f0f0f0';
          p.style.color = '#171717';
        }
      });

      cards.forEach((card, i) => {
        card.style.outline = i === idx ? '2px solid #333333' : 'none';
        card.style.outlineOffset = '3px';
      });

      const activeCard = cards[idx];
      if (activeCard) {
        activeCard.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }

    tabs.forEach((tab, i) => {
      tab.style.cursor = 'pointer';
      tab.addEventListener('click', () => setActive(i));
    });

    cards.forEach((card, i) => {
      card.style.cursor = 'pointer';
      card.addEventListener('click', () => setActive(i));
    });

    setActive(0);
  }, []);

  return (
    <div ref={ref} className="mobile-shell case-shell-mobile w-full min-h-full">
      <div className="mobile-nav-bar sticky top-0 z-50 w-full">
        <MobileNav />
      </div>
      <HomePlannerMobile />
      <MobileFooter />
    </div>
  );
}

export default function CasePage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <>
      <div className="case-shell-desktop w-full min-h-full">
        <DesktopApp />
      </div>
      <MobileShell />
    </>
  );
}
