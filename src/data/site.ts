export const SITE = {
  name: "Ворошилова, 75",
  city: "Черкесск",
  address: "ул. Ворошилова, 75",
  fullAddress: "г. Черкесск, ул. Ворошилова, 75",
  delivery: "1 квартал 2029",
  phone: "+79275167777",
  phonePretty: "+7 927 516-77-77",
  maxUrl:
    "https://max.ru/u/f9LHodD0cOJEtc0R6zHEznGRMDfDaswMU483TCWvsg1Xi0soLm_3F3C-qGI",
  totalApartments: 22,
  availableApartments: 20,
  perFloor: "2–3 квартиры на этаже",
  areaRange: "46,86–186,69 м²",
  apartmentsArea: "2 441,76 м²",
  plot: "1 957 м²",
  coverage: "39%",
  parking: 25,
  commercialParking: 7,
  floors: 9,
  basement: 1,
} as const;

export const telHref = `tel:${SITE.phone}`;

export function fmtArea(n: number) {
  return n.toLocaleString("ru-RU", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

export const OPEN_LAYOUT_EVENT = "open-layout";

export type OpenLayoutDetail = {
  rooms: 1 | 3 | 4;
  area: number;
};

export function openLayout(detail: OpenLayoutDetail) {
  window.dispatchEvent(new CustomEvent(OPEN_LAYOUT_EVENT, { detail }));
  document.getElementById("apartments")?.scrollIntoView({ behavior: "smooth", block: "start" });
}
