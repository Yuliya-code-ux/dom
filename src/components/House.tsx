import { SITE } from "../data/site";
import { ChooseButton } from "./Cta";

const shots = [
  {
    src: "/images/facade-day.jpg",
    title: "Современная архитектура",
    text: "Лаконичный объём, вертикальный ритм фасада и контраст двух фактур кирпича.",
  },
  {
    src: "/images/facade-evening.jpg",
    title: "Уровень дома",
    text: "Каменный цоколь из натурального туфа, архитектурная подсветка, входная группа с навесом.",
  },
  {
    src: "/images/facade-corner.jpg",
    title: "Приватность",
    text: "Закрытая территория и один подъезд. Вы знаете всех, кто живёт рядом.",
  },
];

export function House() {
  return (
    <section id="house" className="scroll-mt-24 px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl" data-reveal>
          <p className="text-xs tracking-[0.28em] text-sand uppercase">О доме</p>
          <h2 className="font-display mt-3 text-4xl text-cream md:text-6xl">
            Камерный формат вместо большого ЖК
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted">
            По чертежу: 9 жилых этажей и 22 квартиры общей площадью 2 441,76 м².
            На типовом этаже две или три квартиры — 46,86–186,69 м². Фасад —
            кирпич двух оттенков, цоколь из натурального туфа. Сдача — {SITE.delivery}.
          </p>
          <ChooseButton className="mt-8 inline-block rounded-full border border-sand/40 px-7 py-3.5 text-sm tracking-[0.16em] text-sand uppercase transition hover:bg-sand hover:text-ink" />
        </div>

        <div className="mt-14 flex gap-5 overflow-x-auto pb-4 no-scrollbar md:grid md:grid-cols-3 md:overflow-visible">
          {shots.map((shot) => (
            <figure
              key={shot.src}
              className="min-w-[80%] snap-center md:min-w-0"
              data-reveal
            >
              <div className="overflow-hidden">
                <img
                  src={shot.src}
                  alt={shot.title}
                  className="h-80 w-full object-cover transition duration-700 hover:scale-105 md:h-[420px]"
                />
              </div>
              <figcaption className="mt-4">
                <p className="font-display text-2xl text-cream">{shot.title}</p>
                <p className="mt-1 text-sm text-muted">{shot.text}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
