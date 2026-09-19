import { SITE } from "../data/site";
import { MaxButton } from "./Cta";

export function Finale() {
  return (
    <section className="relative min-h-[80svh] overflow-hidden">
      <img
        src="/images/facade-evening.jpg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-ink/70" />
      <div className="relative flex min-h-[80svh] flex-col items-start justify-end px-5 py-24 md:px-12">
        <p className="text-xs tracking-[0.28em] text-sand uppercase">Следующий шаг</p>
        <h2 className="font-display mt-4 max-w-3xl text-4xl text-cream md:text-6xl">
          Квартир в доме всего 22.
        </h2>
        <p className="mt-4 text-muted">{SITE.fullAddress}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <MaxButton className="rounded-full bg-sand px-7 py-3.5 text-sm tracking-[0.16em] text-ink uppercase hover:bg-sand-2">
            Договориться о встрече
          </MaxButton>
          <a
            href="#contacts"
            className="rounded-full border border-cream/30 px-7 py-3.5 text-sm tracking-[0.16em] text-cream uppercase hover:border-sand hover:text-sand"
          >
            Узнать об объекте
          </a>
        </div>
      </div>
    </section>
  );
}
