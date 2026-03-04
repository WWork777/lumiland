// Данные для галереи - все фото из папки Gallery (01–36, 38–87)

const allGalleryFiles = [
  '01.webp', '02.webp', '03.webp', '04.webp', '05.webp', '06.webp', '07.webp', '08.webp', '09.webp', '10.webp',
  '11.webp', '12.webp', '13.webp', '14.webp', '15.webp', '16.webp', '17.webp', '18.webp', '19.webp', '20.webp',
  '21.webp', '22.webp', '23.webp', '24.webp', '25.webp', '26.webp', '27.webp', '28.webp', '29.webp', '30.webp',
  '31.webp', '32.webp', '33.webp', '34.webp', '35.webp', '36.webp', '38.webp', '39.webp', '40.webp', '41.webp',
  '42.webp', '43.webp', '44.webp', '45.webp', '46.webp', '47.webp', '48.webp', '49.webp', '50.webp', '51.webp',
  '52.webp', '53.webp', '54.webp', '55.webp', '56.webp', '57.webp', '58.webp', '59.webp', '60.webp', '61.webp',
  '62.webp', '63.webp', '64.webp', '65.webp', '66.webp', '67.webp', '68.webp', '69.webp', '70.webp', '71.webp',
  '72.webp', '73.webp', '74.webp', '75.webp', '76.webp', '77.webp', '78.webp', '79.webp', '80.webp', '81.webp',
  '82.webp', '83.webp', '84.webp', '85.webp', '86.webp', '87.webp',
];

const base = '/images/Gallery/';

// Верхний слайдер для ПК — первые 43 фото
export const desktopTop = allGalleryFiles.slice(0, 43).map((file, i) => ({
  id: `dt${i + 1}`,
  type: 'photo',
  src: base + file,
  ...([2, 11, 20, 30, 40].includes(i) ? { isWide: true } : {}),
}));

// Нижний слайдер для ПК — остальные фото
export const desktopBottom = allGalleryFiles.slice(43).map((file, i) => ({
  id: `db${i + 1}`,
  type: 'photo',
  src: base + file,
  ...([5, 15, 25, 35].includes(i) ? { isWide: true } : {}),
}));

// Мобильные ряды — равномерно по 4 ряда
const n = allGalleryFiles.length;
const m1 = Math.ceil(n * 0.26);
const m2 = Math.ceil(n * 0.51);
const m3 = Math.ceil(n * 0.76);

export const mobRow1 = allGalleryFiles.slice(0, m1).map((file, i) => ({
  id: `m1_${i + 1}`,
  src: base + file,
  ...([1, 10, 19].includes(i) ? { isWide: true } : {}),
}));

export const mobRow2 = allGalleryFiles.slice(m1, m2).map((file, i) => ({
  id: `m2_${i + 1}`,
  src: base + file,
  ...([2, 11].includes(i) ? { isWide: true } : {}),
}));

export const mobRow3 = allGalleryFiles.slice(m2, m3).map((file, i) => ({
  id: `m3_${i + 1}`,
  src: base + file,
  ...([2, 11].includes(i) ? { isWide: true } : {}),
}));

export const mobRow4 = allGalleryFiles.slice(m3).map((file, i) => ({
  id: `m4_${i + 1}`,
  src: base + file,
  ...([2, 11].includes(i) ? { isWide: true } : {}),
}));
