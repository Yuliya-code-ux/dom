import { useEffect, useMemo, useRef, useState } from "react";
import {
  apartments,
  apartmentsOnFloor,
  floors,
  roomsLabel,
  type Apartment,
  type RoomFilter,
} from "../data/apartments";
import { OPEN_LAYOUT_EVENT, SITE, telHref, type OpenLayoutDetail } from "../data/site";
import { MaxButton } from "./Cta";
import { FloorPlan } from "./FloorPlan";

const filters: { id: RoomFilter; label: string }[] = [
  { id: "all", label: "Все" },
  { id: 1, label: "1к" },
  { id: 3, label: "3к" },
  { id: 4, label: "4к" },
];

export function Apartments() {
  const [floor, setFloor] = useState(5);
  const [filter, setFilter] = useState<RoomFilter>("all");
  const [selectedId, setSelectedId] = useState<string | null>("f5-left");
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [firstFloorPicked, setFirstFloorPicked] = useState(false);
  const skipFilterJump = useRef(false);

  const info = floors.find((f) => f.floor === floor)!;
  const lots = apartmentsOnFloor(floor);

  const matches = (apt: Apartment) => filter === "all" || apt.rooms === filter;

  useEffect(() => {
    const el = document.querySelector<HTMLElement>(`[data-floor="${floor}"]`);
    const scroller = el?.parentElement;
    if (!el || !scroller) return;
    const left = el.offsetLeft - scroller.clientWidth / 2 + el.clientWidth / 2;
    scroller.scrollTo({ left: Math.max(0, left), behavior: "smooth" });
  }, [floor]);

  useEffect(() => {
    function onOpen(e: Event) {
      const detail = (e as CustomEvent<OpenLayoutDetail>).detail;
      if (!detail) return;
      skipFilterJump.current = true;
      setFilter(detail.rooms);
      const match =
        [...apartments]
          .filter((a) => Math.abs(a.area - detail.area) < 1)
          .sort((a, b) => {
            const free = Number(b.status === "free") - Number(a.status === "free");
            if (free) return free;
            return Math.abs(a.area - detail.area) - Math.abs(b.area - detail.area);
          })[0] ??
        apartments.find((a) => a.rooms === detail.rooms && a.status === "free");
      if (match) {
        setFloor(match.floor);
        setSelectedId(match.id);
        setFirstFloorPicked(false);
      }
    }
    window.addEventListener(OPEN_LAYOUT_EVENT, onOpen);
    return () => window.removeEventListener(OPEN_LAYOUT_EVENT, onOpen);
  }, []);

  useEffect(() => {
    if (filter === "all") return;
    if (skipFilterJump.current) {
      skipFilterJump.current = false;
      return;
    }
    const currentOk = apartmentsOnFloor(floor).some(
      (a) => a.rooms === filter && a.status === "free",
    );
    if (currentOk) return;
    const next = floors.find((f) =>
      apartmentsOnFloor(f.floor).some((a) => a.rooms === filter && a.status === "free"),
    );
    if (next) handleFloor(next.floor);
  }, [filter]);

  const selected = useMemo(
    () => lots.find((a) => a.id === selectedId && a.status !== "booked") ?? null,
    [lots, selectedId],
  );

  function handleFloor(next: number) {
    setFloor(next);
    setFirstFloorPicked(false);
    const nextLots = apartmentsOnFloor(next);
    const preferred =
      nextLots.find((a) => a.status === "free" && matches(a)) ??
      nextLots.find((a) => a.status === "free") ??
      null;
    setSelectedId(preferred?.id ?? null);
  }

  function handleSelect(apt: Apartment) {
    setSelectedId(apt.id);
  }

  return (
    <section id="apartments" className="scroll-mt-24 bg-ink-2 py-24 pb-36 md:py-32 md:pb-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between" data-reveal>
          <div>
            <p className="text-xs tracking-[0.28em] text-sand uppercase">Выбор квартиры</p>
            <h2 className="font-display mt-3 text-4xl text-cream md:text-6xl">
              22 квартиры на 9 этажей
            </h2>
            <p className="mt-3 max-w-xl text-sm text-muted">
              По чертежу: 22 квартиры, 2–3 на жилом этаже, площади 46,86–186,69 м².
              Сдача — {SITE.delivery}. Выберите этаж — откроется планировка.
            </p>
          </div>
          <div className="flex gap-2">
            {filters.map((item) => (
              <button
                key={String(item.id)}
                type="button"
                onClick={() => setFilter(item.id)}
                className={`rounded-full px-4 py-2 text-xs tracking-[0.16em] uppercase transition ${
                  filter === item.id
                    ? "bg-sand text-ink"
                    : "border border-line text-muted hover:text-cream"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[220px_1fr_320px]">
          <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar lg:flex-col lg:overflow-visible">
            {floors.map((item) => {
              const floorLots = apartmentsOnFloor(item.floor);
              const hasMatch =
                item.bookedFloor ||
                filter === "all" ||
                floorLots.some((a) => a.rooms === filter);
              const inactiveFloor =
                item.bookedFloor || floorLots.every((a) => a.status === "booked");
              const active = floor === item.floor;
              return (
                <button
                  key={item.floor}
                  type="button"
                  data-floor={item.floor}
                  onClick={() => handleFloor(item.floor)}
                  className={`min-w-[148px] border px-4 py-3 text-left transition lg:min-w-0 ${
                    active
                      ? "border-sand bg-sand text-ink lg:translate-x-2"
                      : "border-line/80 bg-ink/40 hover:border-sand/40"
                  } ${hasMatch && !inactiveFloor ? "" : "opacity-35"}`}
                >
                  <div className="flex items-baseline justify-between gap-3">
                    <span className={`font-display text-2xl ${active ? "text-ink" : "text-cream"}`}>
                      {item.floor}
                    </span>
                  </div>
                  <p className={`mt-1 text-xs ${active ? "text-ink/70" : "text-muted"}`}>
                    {item.label}
                  </p>
                </button>
              );
            })}
          </div>

          <div>
            <p className="mb-3 text-sm text-muted">{info.caption}</p>
            <div className="relative overflow-hidden bg-[#ece6dc]">
              <img src={info.planImage} alt={info.label} className="block w-full" />
              <FloorPlan
                layout={info.layout}
                apartments={lots}
                selectedId={selectedId}
                hoveredId={hoveredId}
                filterActive={matches}
                onHover={setHoveredId}
                onSelect={handleSelect}
                onBookedFloor={() => setFirstFloorPicked(true)}
              />
            </div>
          </div>

          <aside className="mb-8 border border-line bg-ink p-6 md:mb-0">
            {info.bookedFloor ? (
              <FirstFloorCard highlighted={firstFloorPicked} />
            ) : selected ? (
              <ApartmentCard apt={selected} />
            ) : (
              <p className="text-sm text-muted">
                Нажмите на квартиру на плане этажа.
              </p>
            )}
          </aside>
        </div>
      </div>
    </section>
  );
}

function FirstFloorCard({ highlighted }: { highlighted: boolean }) {
  return (
    <div>
      <h3 className="font-display text-3xl text-cream">1 этаж</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted">
        Нежилые помещения первого этажа. Квартиры — со 2 по 9 этаж.
      </p>
      {highlighted && (
        <p className="mt-3 text-sm text-sand">
          Планировки квартир — выше, начиная со 2 этажа.
        </p>
      )}
      <CtaRow />
    </div>
  );
}

function ApartmentCard({ apt }: { apt: Apartment }) {
  return (
    <div>
      <p className="text-[11px] tracking-[0.2em] text-muted uppercase">
        {apt.floor} этаж · тип {apt.type}
      </p>
      <h3 className="font-display mt-2 text-3xl text-cream">{roomsLabel(apt.rooms)}</h3>
      <p className="mt-1 text-2xl text-sand">{apt.area.toLocaleString("ru-RU")} м²</p>
      <ul className="mt-5 max-h-56 space-y-1.5 overflow-y-auto text-sm text-muted">
        {apt.roomsList.map((room, i) => (
          <li key={`${room.name}-${i}`} className="flex justify-between gap-4">
            <span>{room.name}</span>
            <span className="text-cream/80">{room.area.toLocaleString("ru-RU")}</span>
          </li>
        ))}
      </ul>
      <CtaRow />
    </div>
  );
}

function CtaRow() {
  return (
    <div className="mt-6 grid gap-2">
      <MaxButton className="rounded-full bg-sand py-3 text-center text-xs tracking-[0.16em] text-ink uppercase hover:bg-sand-2">
        Договориться о встрече
      </MaxButton>
      <a
        href="#contacts"
        className="rounded-full border border-sand/40 py-3 text-center text-xs tracking-[0.16em] text-sand uppercase hover:bg-sand hover:text-ink"
      >
        Узнать об объекте
      </a>
      <p className="pt-1 text-center text-[11px] text-muted">
        <a href={telHref}>{SITE.phonePretty}</a>
      </p>
    </div>
  );
}
