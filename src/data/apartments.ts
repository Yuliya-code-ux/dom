export type AptStatus = "free" | "booked";
export type Wing = "left" | "center" | "right";
export type LayoutKind = "three" | "four" | "first";
export type RoomFilter = "all" | 1 | 3 | 4;

export type Room = {
  name: string;
  area: number;
};

export type Apartment = {
  id: string;
  floor: number;
  wing: Wing;
  type: string;
  rooms: 1 | 3 | 4;
  area: number;
  status: AptStatus;
  roomsList: Room[];
  note?: string;
};

export type FloorInfo = {
  floor: number;
  label: string;
  layout: LayoutKind;
  planImage: string;
  bookedFloor?: boolean;
  caption: string;
};

const r = (name: string, area: number): Room => ({ name, area });

const left3Classic: Room[] = [
  r("Передняя", 17.81),
  r("Коридор", 2.96),
  r("Санузел", 2.98),
  r("Кухня-столовая", 22.08),
  r("Общая жилая комната", 21.24),
  r("Санузел", 7.73),
  r("Спальня", 22.27),
  r("Спальня", 20.9),
];

const left3Loggia: Room[] = [
  r("Передняя", 17.81),
  r("Коридор", 2.96),
  r("Санузел", 2.98),
  r("Кухня-столовая", 20.3),
  r("Лоджия", 2.62),
  r("Общая жилая комната", 21.24),
  r("Санузел", 7.73),
  r("Спальня", 22.27),
  r("Спальня", 20.9),
];

const oneClassic: Room[] = [
  r("Передняя", 9.03),
  r("Санузел", 5.94),
  r("Кухня-столовая", 15.06),
  r("Спальня", 13.33),
  r("Гардеробная", 4.0),
];

const oneLoggia: Room[] = [
  r("Передняя", 9.03),
  r("Санузел", 5.94),
  r("Кухня-столовая", 12.18),
  r("Лоджия", 3.37),
  r("Спальня", 13.33),
  r("Гардеробная", 4.0),
];

const right3Classic: Room[] = [
  r("Передняя", 24.45),
  r("Коридор", 4.0),
  r("Санузел", 4.7),
  r("Кухня-столовая", 29.97),
  r("Общая жилая комната", 23.53),
  r("Санузел", 7.73),
  r("Спальня", 22.27),
  r("Спальня", 20.9),
];

const right3Loggia: Room[] = [
  r("Передняя", 24.45),
  r("Коридор", 4.0),
  r("Санузел", 4.7),
  r("Кухня-столовая", 27.53),
  r("Лоджия", 2.38),
  r("Общая жилая комната", 23.53),
  r("Санузел", 7.73),
  r("Спальня", 22.27),
  r("Спальня", 20.9),
];

const fourClassic: Room[] = [
  r("Передняя", 24.99),
  r("Коридор", 4.19),
  r("Санузел", 4.79),
  r("Кухня-столовая", 29.97),
  r("Общая жилая комната", 23.42),
  r("Санузел", 7.73),
  r("Спальня", 17.81),
  r("Лоджия", 4.39),
  r("Спальня", 20.9),
  r("Спальня", 27.64),
  r("Гардеробная", 7.51),
  r("Санузел", 5.74),
  r("Лоджия", 7.9),
];

const fourLoggia: Room[] = [
  r("Передняя", 24.99),
  r("Коридор", 4.19),
  r("Санузел", 4.7),
  r("Кухня-столовая", 27.53),
  r("Общая жилая комната", 23.42),
  r("Санузел", 7.73),
  r("Спальня", 17.81),
  r("Лоджия", 4.39),
  r("Спальня", 20.9),
  r("Спальня", 27.64),
  r("Гардеробная", 7.51),
  r("Санузел", 5.74),
  r("Лоджия", 7.9),
];

function apt(
  floor: number,
  wing: Wing,
  type: string,
  rooms: 1 | 3 | 4,
  area: number,
  roomsList: Room[],
  status: AptStatus = "free",
): Apartment {
  return {
    id: `f${floor}-${wing}`,
    floor,
    wing,
    type,
    rooms,
    area,
    status,
    roomsList,
  };
}

export const apartments: Apartment[] = [
  apt(2, "left", "3Г", 3, 118.87, left3Classic),
  apt(2, "center", "1Б", 1, 46.86, oneClassic),
  apt(2, "right", "3Г", 3, 137.66, right3Classic),

  apt(3, "left", "3Б", 3, 118.87, left3Classic),
  apt(3, "center", "1Б", 1, 46.86, oneClassic),
  apt(3, "right", "3Г", 3, 137.55, right3Classic),

  apt(4, "left", "3Б", 3, 118.87, left3Classic, "booked"),
  apt(4, "right", "4Б", 4, 186.69, fourClassic),

  apt(5, "left", "3А", 3, 118.81, left3Loggia),
  apt(5, "center", "1А", 1, 48.76, oneLoggia),
  apt(5, "right", "3Б", 3, 137.49, right3Loggia),

  apt(6, "left", "3А", 3, 118.81, left3Loggia),
  apt(6, "center", "1А", 1, 48.76, oneLoggia),
  apt(6, "right", "3Б", 3, 137.49, right3Loggia),

  apt(7, "left", "3А", 3, 118.81, left3Loggia),
  apt(7, "center", "1А", 1, 48.76, oneLoggia),
  apt(7, "right", "3Б", 3, 137.49, right3Loggia, "booked"),

  apt(8, "left", "3А", 3, 118.81, left3Loggia),
  apt(8, "center", "1А", 1, 48.76, oneLoggia),
  apt(8, "right", "3Б", 3, 137.49, right3Loggia),

  apt(9, "left", "3А", 3, 118.81, left3Loggia),
  apt(9, "right", "4А", 4, 186.63, fourLoggia),
];

export const floors: FloorInfo[] = [
  {
    floor: 9,
    label: "9 этаж",
    layout: "four",
    planImage: "/images/floor-9-crop.png",
    caption: "Две квартиры на этаже · трёхкомнатная и четырёхкомнатная",
  },
  {
    floor: 8,
    label: "8 этаж",
    layout: "three",
    planImage: "/images/floor-7-crop.png",
    caption: "Три квартиры на этаже · 1-комнатная и две трёхкомнатные",
  },
  {
    floor: 7,
    label: "7 этаж",
    layout: "three",
    planImage: "/images/floor-7-crop.png",
    caption: "Три квартиры на этаже · 1-комнатная и две трёхкомнатные",
  },
  {
    floor: 6,
    label: "6 этаж",
    layout: "three",
    planImage: "/images/floor-5-crop.png",
    caption: "Три квартиры на этаже · 1-комнатная и две трёхкомнатные",
  },
  {
    floor: 5,
    label: "5 этаж",
    layout: "three",
    planImage: "/images/floor-5-crop.png",
    caption: "Три квартиры на этаже · 1-комнатная и две трёхкомнатные",
  },
  {
    floor: 4,
    label: "4 этаж",
    layout: "four",
    planImage: "/images/floor-4-crop.png",
    caption: "Две квартиры на этаже · трёхкомнатная и четырёхкомнатная",
  },
  {
    floor: 3,
    label: "3 этаж",
    layout: "three",
    planImage: "/images/floor-3-crop.png",
    caption: "Три квартиры на этаже · 1-комнатная и две трёхкомнатные",
  },
  {
    floor: 2,
    label: "2 этаж",
    layout: "three",
    planImage: "/images/floor-2-crop.png",
    caption: "Три квартиры на этаже · 1-комнатная и две трёхкомнатные",
  },
  {
    floor: 1,
    label: "1 этаж",
    layout: "first",
    planImage: "/images/floor-1-crop.png",
    bookedFloor: true,
    caption: "Нежилые помещения первого этажа",
  },
];

export function apartmentsOnFloor(floor: number) {
  return apartments.filter((a) => a.floor === floor);
}

export function roomsLabel(n: 1 | 3 | 4) {
  if (n === 1) return "1-комнатная";
  if (n === 3) return "3-комнатная";
  return "4-комнатная";
}
