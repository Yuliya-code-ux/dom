import { SITE } from "../data/site";

const strip = [
  `${SITE.totalApartments} квартиры`,
  SITE.perFloor,
  SITE.areaRange,
  `${SITE.parking} машиномест`,
  `Сдача — ${SITE.delivery}`,
];

export function Facts() {
  return (
    <section className="border-y border-line bg-ink-2">
      <div className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-16">
        <ul className="flex flex-wrap items-center gap-x-8 gap-y-4" data-reveal>
          {strip.map((item, i) => (
            <li key={item} className="flex items-center gap-8">
              <span className="font-display text-2xl text-cream md:text-3xl">{item}</span>
              {i < strip.length - 1 && (
                <span className="hidden text-sand md:inline">•</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
