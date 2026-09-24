import { useEffect, useState } from "react";
import { lifeLayouts } from "../data/life";
import { fmtArea, openLayout } from "../data/site";
import { roomsLabel } from "../data/apartments";

export function Life() {
  const [layoutId, setLayoutId] = useState(lifeLayouts[1].id);
  const [shot, setShot] = useState(0);
  const [mode, setMode] = useState<"interior" | "plan">("interior");
  const layout = lifeLayouts.find((item) => item.id === layoutId) ?? lifeLayouts[0];
  const current = layout.shots[shot] ?? layout.shots[0];

  useEffect(() => {
    setShot(0);
    setMode("interior");
  }, [layoutId]);

  return (
    <section id="life" className="scroll-mt-24 px-5 py-16 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl" data-reveal>
          <p className="text-xs tracking-[0.28em] text-sand uppercase">Представьте себя дома</p>
          <h2 className="font-display mt-3 text-4xl text-cream md:text-6xl">
            У каждого — своё пространство.
            <br />
            И есть место, где все вместе
          </h2>
        </div>

        <div className="mt-10 flex flex-wrap gap-2" data-reveal>
          {lifeLayouts.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setLayoutId(item.id)}
              className={`rounded-full px-5 py-2.5 text-sm transition ${
                layoutId === item.id
                  ? "bg-sand text-ink"
                  : "border border-line text-muted hover:text-cream"
              }`}
            >
              <span className="font-display text-lg">{fmtArea(item.area)} м²</span>
              <span className="ml-2 text-[11px] tracking-[0.12em] uppercase">
                {roomsLabel(item.rooms)}
              </span>
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_280px]" data-reveal>
          <div>
            <div className="relative aspect-[4/5] min-h-[58svh] overflow-hidden bg-[#ece6dc] md:aspect-[16/10] md:min-h-0">
              <img
                src={layout.planImage}
                alt={`Планировка ${fmtArea(layout.area)} м²`}
                className={`absolute inset-0 h-full w-full object-contain transition-opacity duration-700 ${
                  mode === "plan" ? "opacity-100" : "opacity-0"
                }`}
              />
              <img
                src={current.src}
                alt={current.caption}
                className={`absolute inset-0 h-full w-full object-cover object-center transition duration-700 ${
                  mode === "interior" ? "scale-100 opacity-100" : "scale-[1.04] opacity-0"
                }`}
              />
              {mode === "interior" && (
                <p className="font-display absolute bottom-5 left-5 hidden max-w-md whitespace-pre-line text-3xl text-cream drop-shadow md:block">
                  {current.caption}
                </p>
              )}
            </div>
            {mode === "interior" && (
              <p className="font-display mt-3 whitespace-pre-line text-xl leading-snug text-cream md:hidden">
                {current.caption}
              </p>
            )}

            <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
              <div className="flex rounded-full border border-line p-1">
                <button
                  type="button"
                  onClick={() => setMode("plan")}
                  className={`rounded-full px-4 py-2 text-xs tracking-[0.16em] uppercase ${
                    mode === "plan" ? "bg-sand text-ink" : "text-muted"
                  }`}
                >
                  Планировка
                </button>
                <button
                  type="button"
                  onClick={() => setMode("interior")}
                  className={`rounded-full px-4 py-2 text-xs tracking-[0.16em] uppercase ${
                    mode === "interior" ? "bg-sand text-ink" : "text-muted"
                  }`}
                >
                  В интерьере
                </button>
              </div>
              <p className="text-[11px] leading-relaxed text-muted/80">
                Изображения являются концептуальной визуализацией возможного
                интерьера. Комплектация квартиры определяется условиями договора.
              </p>
            </div>

            {mode === "interior" && (
              <div className="mt-4 flex gap-2 overflow-x-auto no-scrollbar">
                {layout.shots.map((item, i) => (
                  <button
                    key={item.src}
                    type="button"
                    onClick={() => setShot(i)}
                    className={`h-16 w-24 shrink-0 overflow-hidden border ${
                      shot === i ? "border-sand" : "border-transparent opacity-70"
                    }`}
                  >
                    <img src={item.src} alt="" className="h-full w-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          <aside className="border border-line bg-ink-2 p-6">
            <p className="text-[11px] tracking-[0.2em] text-sand uppercase">
              {layout.floors} · тип {layout.type}
            </p>
            <p className="font-display mt-2 text-4xl text-cream">{fmtArea(layout.area)} м²</p>
            <p className="mt-1 text-sm text-muted">{roomsLabel(layout.rooms)}</p>
            <p className="mt-4 text-sm text-cream/75">{layout.planNote}</p>
            <ul className="mt-5 space-y-1.5 text-sm text-muted">
              {layout.roomsList.slice(0, 6).map((room) => (
                <li key={room.name + room.area} className="flex justify-between gap-3">
                  <span>{room.name}</span>
                  <span className="text-cream/70">{fmtArea(room.area)}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 grid gap-2">
              <button
                type="button"
                onClick={() => {
                  setMode("plan");
                }}
                className="rounded-full border border-sand/40 py-3 text-xs tracking-[0.16em] text-sand uppercase hover:bg-sand hover:text-ink"
              >
                Посмотреть планировку
              </button>
              <button
                type="button"
                onClick={() => openLayout({ rooms: layout.rooms, area: layout.area })}
                className="rounded-full bg-sand py-3 text-xs tracking-[0.16em] text-ink uppercase hover:bg-sand-2"
              >
                Посмотреть планировки
              </button>
              <a
                href="#contacts"
                className="rounded-full border border-line py-3 text-center text-xs tracking-[0.16em] text-muted uppercase hover:text-cream"
              >
                Узнать об объекте
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
