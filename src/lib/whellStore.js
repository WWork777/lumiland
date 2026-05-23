// Временное хранилище в памяти (при перезапуске сервера данные сбрасываются)
// Для продакшена замените на Redis, PostgreSQL или другое постоянное хранилище
const spinMap = new Map(); // ключ: IP, значение: timestamp последнего вращения

/**
 * Получить время последнего вращения для IP
 * @param {string} ip
 * @returns {Promise<number|null>}
 */
export async function getLastSpinTime(ip) {
  return spinMap.get(ip) || null;
}

/**
 * Сохранить время последнего вращения для IP
 * @param {string} ip
 * @param {number} timestamp
 */
export async function setLastSpinTime(ip, timestamp) {
  spinMap.set(ip, timestamp);
}