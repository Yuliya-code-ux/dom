export function Location() {
  return (
    <section id="location" className="scroll-mt-24 px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto grid max-w-7xl items-start gap-12 lg:grid-cols-2">
        <div data-reveal>
          <p className="text-xs tracking-[0.28em] text-sand uppercase">Локация</p>
          <h2 className="font-display mt-3 text-4xl text-cream md:text-6xl">
            Тихий квартал
            <br />в центральной части города
          </h2>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-muted">
            Черкесск, улица Ворошилова, 75. Вокруг — сложившаяся малоэтажная
            застройка и школа в соседнем квартале. Дом стоит на собственном
            участке: двор, парковка и площадка находятся внутри периметра.
          </p>
          <ul className="mt-8 space-y-3 text-sm text-cream/80">
            <li className="border-t border-line pt-3">Участок 1 957 м² · застройка 775,28 м² (39%)</li>
            <li className="border-t border-line pt-3">25 машиномест для жителей, 7 — для коммерции</li>
            <li className="border-t border-line pt-3">9 жилых этажей, 1 подземный · школа в соседнем квартале</li>
          </ul>
        </div>
        <div className="grid gap-4" data-reveal>
          <img
            src="/images/aerial.jpg"
            alt="Дом сверху"
            className="h-64 w-full object-cover md:h-80"
          />
          <img
            src="/images/location.jpg"
            alt="Ситуационный план"
            className="w-full bg-cream object-contain"
          />
        </div>
      </div>
    </section>
  );
}
