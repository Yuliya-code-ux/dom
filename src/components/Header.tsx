import { SITE, telHref } from "../data/site";
import { ChooseButton, MaxButton } from "./Cta";

const nav = [
  { href: "#life", label: "Дома" },
  { href: "#house", label: "О доме" },
  { href: "#apartments", label: "Квартиры" },
  { href: "#location", label: "Локация" },
];

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-line/60 bg-ink/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 md:px-8">
        <a href="#top" className="min-w-0">
          <p className="font-display text-xl leading-none text-cream md:text-2xl">
            Ворошилова, 75
          </p>
          <p className="mt-1 text-[11px] tracking-[0.18em] text-sand uppercase">
            Всего {SITE.totalApartments} квартиры
          </p>
        </a>

        <nav className="hidden items-center gap-7 text-sm text-cream/75 lg:flex">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-sand">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={telHref}
            className="text-sm tracking-wide text-cream/90 hover:text-sand"
          >
            {SITE.phonePretty}
          </a>
          <ChooseButton className="rounded-full border border-sand/40 px-4 py-2 text-xs tracking-[0.16em] text-sand uppercase transition hover:bg-sand hover:text-ink" />
          <MaxButton className="rounded-full bg-sand px-4 py-2 text-xs tracking-[0.16em] text-ink uppercase transition hover:bg-sand-2" />
        </div>
      </div>
    </header>
  );
}
