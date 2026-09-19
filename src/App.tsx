import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { Header } from "./components/Header";
import { StickyBar } from "./components/StickyBar";
import { Hero } from "./components/Hero";
import { Facts } from "./components/Facts";
import { Life } from "./components/Life";
import { House } from "./components/House";
import { Yard } from "./components/Yard";
import { Apartments } from "./components/Apartments";
import { Location } from "./components/Location";
import { Finale } from "./components/Finale";
import { Footer } from "./components/Footer";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.08,
    });

    lenis.on("scroll", ScrollTrigger.update);
    const ticker = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(ticker);
    gsap.ticker.lagSmoothing(0);

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    const ctx = gsap.context(() => {
      if (reduced) {
        gsap.set("[data-reveal]", { opacity: 1, y: 0 });
        return;
      }
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: isMobile ? 16 : 36 },
          {
            opacity: 1,
            y: 0,
            duration: 1.05,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
            },
          },
        );
      });
    });

    return () => {
      ctx.revert();
      gsap.ticker.remove(ticker);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="bg-ink text-cream">
      <Header />
      <main>
        <Hero />
        <Facts />
        <Life />
        <House />
        <Yard />
        <Apartments />
        <Location />
        <Finale />
      </main>
      <Footer />
      <StickyBar />
    </div>
  );
}
