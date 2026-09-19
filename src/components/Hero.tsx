import { SITE } from "../data/site";
import { ChooseButton, MaxButton } from "./Cta";

export function Hero() {
  return (
    <section id="top" className="relative h-[100svh] min-h-[640px] overflow-hidden">
      <img
        src="/images/hero-evening.jpg"
        alt="Дом на Ворошилова, 75"
        className="ken-burns absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/45 to-ink/20" />

      <div className="relative flex h-full flex-col justify-end px-5 pb-28 md:px-12 md:pb-16">
        <p className="text-xs tracking-[0.28em] text-sand uppercase">
          Ворошилова, 75
        </p>
        <h1 className="font-display mt-4 max-w-4xl text-5xl leading-[0.95] text-cream md:text-7xl lg:text-8xl">
          Дом для немногих.
          <br />
          Всего 22 квартиры
        </h1>
        <p className="mt-6 max-w-xl text-base text-cream/80 md:text-lg">
          Современный малоквартирный дом в {SITE.city}е. {SITE.perFloor}, площади {SITE.areaRange}.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <ChooseButton className="rounded-full bg-sand px-7 py-3.5 text-sm tracking-[0.16em] text-ink uppercase transition hover:bg-sand-2" />
          <MaxButton className="rounded-full border border-cream/30 px-7 py-3.5 text-sm tracking-[0.16em] text-cream uppercase transition hover:border-sand hover:text-sand" />
        </div>
      </div>
    </section>
  );
}
