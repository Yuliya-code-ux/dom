import type { Room } from "./apartments";

export type LifeShot = {
  src: string;
  caption: string;
};

export type LifeLayout = {
  id: string;
  area: number;
  rooms: 1 | 3 | 4;
  type: string;
  floors: string;
  planImage: string;
  planNote: string;
  roomsList: Room[];
  shots: LifeShot[];
};

export const lifeLayouts: LifeLayout[] = [
  {
    id: "48",
    area: 48.76,
    rooms: 1,
    type: "1А",
    floors: "5–8 этаж",
    planImage: "/images/floor-5-crop.png",
    planNote: "Тип 1А · кухня-столовая 12,18 м², спальня 13,33 м², лоджия 3,37 м²",
    roomsList: [
      { name: "Передняя", area: 9.03 },
      { name: "Санузел", area: 5.94 },
      { name: "Кухня-столовая", area: 12.18 },
      { name: "Лоджия", area: 3.37 },
      { name: "Спальня", area: 13.33 },
      { name: "Гардеробная", area: 4.0 },
    ],
    shots: [
      { src: "/images/life/life-48-kitchen.jpg", caption: "Место, где собираются все" },
      { src: "/images/life/life-48-bedroom.jpg", caption: "Утро начинается здесь" },
      { src: "/images/life/life-48-hall.jpg", caption: "Пространство для своих" },
      { src: "/images/life/life-48-bath.jpg", caption: "Порядок с порога" },
    ],
  },
  {
    id: "119",
    area: 118.81,
    rooms: 3,
    type: "3А",
    floors: "5–9 этаж",
    planImage: "/images/floor-5-crop.png",
    planNote: "Тип 3А · кухня-столовая 20,30 м², гостиная 21,24 м², две спальни",
    roomsList: [
      { name: "Передняя", area: 17.81 },
      { name: "Коридор", area: 2.96 },
      { name: "Санузел", area: 2.98 },
      { name: "Кухня-столовая", area: 20.3 },
      { name: "Лоджия", area: 2.62 },
      { name: "Общая жилая комната", area: 21.24 },
      { name: "Санузел", area: 7.73 },
      { name: "Спальня", area: 22.27 },
      { name: "Спальня", area: 20.9 },
    ],
    shots: [
      { src: "/images/life/life-119-living.jpg", caption: "У каждого — своё пространство.\nИ есть место, где все вместе" },
      { src: "/images/life/life-119-dining.jpg", caption: "Место, где собираются все" },
      { src: "/images/life/life-119-master.jpg", caption: "Утро начинается здесь" },
      { src: "/images/life/life-119-kids.jpg", caption: "Пространство для своих" },
    ],
  },
  {
    id: "137",
    area: 137.49,
    rooms: 3,
    type: "3Б",
    floors: "5–8 этаж",
    planImage: "/images/floor-7-crop.png",
    planNote: "Тип 3Б · кухня-столовая 27,53 м², гостиная 23,53 м²",
    roomsList: [
      { name: "Передняя", area: 24.45 },
      { name: "Коридор", area: 4.0 },
      { name: "Санузел", area: 4.7 },
      { name: "Кухня-столовая", area: 27.53 },
      { name: "Лоджия", area: 2.38 },
      { name: "Общая жилая комната", area: 23.53 },
      { name: "Санузел", area: 7.73 },
      { name: "Спальня", area: 22.27 },
      { name: "Спальня", area: 20.9 },
    ],
    shots: [
      { src: "/images/life/life-137-living.jpg", caption: "Когда дома действительно просторно" },
      { src: "/images/life/life-137-kitchen.jpg", caption: "Место, где собираются все" },
      { src: "/images/life/life-137-bedroom.jpg", caption: "Утро начинается здесь" },
      { src: "/images/life/life-137-kids.jpg", caption: "Пространство для своих" },
      { src: "/images/life/life-137-wardrobe.jpg", caption: "Всё на своих местах" },
    ],
  },
  {
    id: "186",
    area: 186.63,
    rooms: 4,
    type: "4А",
    floors: "9 этаж",
    planImage: "/images/floor-9-crop.png",
    planNote: "Тип 4А · три спальни, гостиная 23,42 м², две лоджии, гардеробная 7,51 м²",
    roomsList: [
      { name: "Передняя", area: 24.99 },
      { name: "Коридор", area: 4.19 },
      { name: "Санузел", area: 4.7 },
      { name: "Кухня-столовая", area: 27.53 },
      { name: "Общая жилая комната", area: 23.42 },
      { name: "Санузел", area: 7.73 },
      { name: "Спальня", area: 17.81 },
      { name: "Лоджия", area: 4.39 },
      { name: "Спальня", area: 20.9 },
      { name: "Спальня", area: 27.64 },
      { name: "Гардеробная", area: 7.51 },
      { name: "Санузел", area: 5.74 },
      { name: "Лоджия", area: 7.9 },
    ],
    shots: [
      { src: "/images/life/life-186-living.jpg", caption: "Когда дома действительно просторно" },
      { src: "/images/life/life-186-dining.jpg", caption: "Место, где собираются все" },
      { src: "/images/life/life-186-master.jpg", caption: "Утро начинается здесь" },
      { src: "/images/life/life-186-private.jpg", caption: "Пространство для своих" },
      { src: "/images/life/life-186-wardrobe.jpg", caption: "Всё на своих местах" },
    ],
  },
];
