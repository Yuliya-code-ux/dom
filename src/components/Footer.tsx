import { SITE } from "../data/site";

export function Footer() {
  return (
    <footer
      id="contacts"
      className="border-t border-line px-5 py-12 pb-28 text-sm text-muted md:px-8 md:pb-12"
    >
      <div className="mx-auto max-w-7xl space-y-8">
        <div className="grid gap-6 md:grid-cols-2 md:gap-12">
          <div>
            <p className="font-display text-2xl text-cream">ВОРОШИЛОВА, 75</p>
            <p className="mt-2 text-cream/80">Строящийся многоквартирный жилой дом</p>
            <p className="mt-1">{SITE.fullAddress}</p>
          </div>
          <div className="space-y-4">
            <div>
              <p className="text-cream/90">Заказчик строительства:</p>
              <p>Индивидуальный предприниматель Эльканов Ханафий Юсуфович</p>
              <p>ИНН 090107099173</p>
              <p>ОГРНИП 325265100110439</p>
            </div>
            <div>
              <p className="text-cream/90">Подрядчик:</p>
              <p>Индивидуальный предприниматель Озов Назир Галимжанович</p>
            </div>
          </div>
        </div>
        <div className="max-w-3xl space-y-3 text-xs leading-relaxed text-muted/80">
          <p>
            Информация, размещённая на сайте, носит информационно-ознакомительный
            характер. Представленные архитектурные и интерьерные изображения
            являются визуализациями. Фактические характеристики объекта
            определяются проектной документацией.
          </p>
          <p>
            Сайт не предназначен для заключения договоров, внесения денежных
            средств или осуществления бронирования объектов недвижимости.
          </p>
        </div>
      </div>
    </footer>
  );
}
