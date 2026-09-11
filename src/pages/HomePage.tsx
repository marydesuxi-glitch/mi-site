import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import HeaderNavigation from "@/imports/HeaderNavigation/index";
import PortfolioHomepageDektop from "@/imports/PortfolioHomepageDektop/index";
import PortfolioHomepageMobile from "@/imports/PortfolioHomepageMobile-1/index";
import PortfolioHomepageTablet from "@/imports/PortfolioHomepageTablet-1/index";

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
      className={`fixed left-0 top-0 w-full z-50 header-sticky ${scrolled ? "backdrop-blur-sm" : ""}`}
      style={{ opacity: scrolled ? 0.97 : 1 }}
    >
      <HeaderNavigation />
    </div>
  );
}

function DesktopHome() {
  const ref = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const card = el.querySelector('[data-name="project-card-1"]') as HTMLElement | null;
    if (!card) return;
    card.style.cursor = "pointer";
    const handler = () => navigate("/case/home-planner");
    card.addEventListener("click", handler);
    return () => card.removeEventListener("click", handler);
  }, [navigate]);

  return (
    <>
      <Header scrolled={scrolled} />
      <div ref={ref} className="w-full pt-[90px]">
        <PortfolioHomepageDektop />
      </div>
    </>
  );
}

function MobileHome() {
  const ref = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const card = el.querySelector('[data-name="project-card"]') as HTMLElement | null;
    if (!card) return;
    card.style.cursor = "pointer";
    const handler = () => navigate("/case/home-planner");
    card.addEventListener("click", handler);
    return () => card.removeEventListener("click", handler);
  }, [navigate]);

  return (
    <div ref={ref} className="home-mobile-shell w-full min-h-full overflow-x-clip">
      <PortfolioHomepageMobile />
    </div>
  );
}

function TabletHome() {
  const ref = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const card = el.querySelector('[data-name="project-card"]') as HTMLElement | null;
    if (!card) return;
    card.style.cursor = "pointer";
    const handler = () => navigate("/case/home-planner");
    card.addEventListener("click", handler);
    return () => card.removeEventListener("click", handler);
  }, [navigate]);

  return (
    <div ref={ref} className="home-tablet-shell w-full min-h-full overflow-x-clip">
      <PortfolioHomepageTablet />
    </div>
  );
}

export default function HomePage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <>
      <div className="shell-desktop w-full">
        <DesktopHome />
      </div>
      <div className="shell-tablet w-full min-h-full">
        <TabletHome />
      </div>
      <div className="shell-mobile w-full min-h-full">
        <MobileHome />
      </div>
    </>
  );
}
