export function Yard() {
  return (
    <section id="yard" className="scroll-mt-24 bg-ink-2 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid items-end gap-10 lg:grid-cols-2">
          <div data-reveal>
            <p className="text-xs tracking-[0.28em] text-sand uppercase">Двор и парковка</p>
            <h2 className="font-display mt-3 text-4xl text-cream md:text-6xl">
              Машины внизу.
              <br />
              Дети наверху.
            </h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-muted">
              Парковка по генплану — 25 мест для жителей под стилобатом. Над ней
              детская площадка с покрытием из резиновой крошки. Двор закрыт,
              сквозного проезда нет.
            </p>
          </div>
          <p className="text-sm text-sand" data-reveal>
            25 машиномест · закрытая территория · площадка на кровле паркинга
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          <img
            src="/images/building-yard.png"
            alt="Дом и площадка над парковкой"
            className="h-80 w-full object-cover object-[center_72%] md:col-span-2 md:h-[520px]"
            data-reveal
          />
          <div className="grid gap-4">
            <img
              src="/images/parking.png"
              alt="Парковка под площадкой"
              className="h-40 w-full object-cover md:h-[252px]"
              data-reveal
            />
            <img
              src="/images/playground.jpg"
              alt="Детская площадка"
              className="h-40 w-full object-cover md:h-[252px]"
              data-reveal
            />
          </div>
        </div>
      </div>
    </section>
  );
}
