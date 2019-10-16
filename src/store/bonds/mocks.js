import { TIME_INTERVAL } from './types';


/**
 * Генерирует случайную последовательность данных
 * @param {string} isin идентификатор облигации
 * @param {TIME_INTERVAL} TIME_INTERVAL тип интервала
 * @returns {object} 'ответ сервера'
 */
export async function getBondData(isin, interval) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        const data = generateBondData(isin, interval);
        resolve(data);
      }
      catch (ex) {
        reject(ex);
      }
    }, getRandom(0, 200));
  });
}


export function generateBondData(isin, interval) {
  const dateEnd = new Date();

  let numIntervals = getRandom(10, 20);
  if (interval === TIME_INTERVAL.Max){
    interval = TIME_INTERVAL.Year;
    numIntervals = getRandom(15, 25);
  }

  let dateStart = changeDate(new Date(), interval, numIntervals, -1);

  let startDataItem = getNextDataItem();
  startDataItem.date = dateStart;

  let data = [startDataItem];
  for (let index = 1; index < numIntervals; index++) {
    const nextDataItem = getNextDataItem(data[index - 1], interval);
    data.push(nextDataItem);
  }

  return {
    isin,
    dateStart,
    dateEnd,
    data
  };
}


export function getNextDataItem(prevItem, interval) {
  let nextItem = {
    date: new Date(),
    spread: round2fixed(getRandom(10, 20)),
    yield: round2fixed(getRandom(100, 200)),
    price: round2fixed(getRandom(1000, 2000))
  };

  if (prevItem === undefined) {
    return nextItem;
  }

  nextItem.date = changeDate(prevItem.date, interval, 1, 1);

  const direction = parseInt(nextItem.spread) % 2 === 0 ? 1 : -1;
  
  nextItem.spread = round2fixed(prevItem.spread + direction * getRandom(0.1, 1));
  nextItem.yield = round2fixed(prevItem.yield + direction * getRandom(1, 2));
  nextItem.price = round2fixed(prevItem.price + direction * getRandom(10, 20));

  return nextItem;
}


function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}


function changeDate(date, interval, numIntervals, direction) {
  let newDate = new Date(date.valueOf());

  switch (interval) {

    case TIME_INTERVAL.Max:
    case TIME_INTERVAL.Week:
      newDate.setDate(newDate.getDate() + 7 * numIntervals * direction);
      break;

    case TIME_INTERVAL.Month:
      newDate.setMonth(newDate.getMonth() + 1 * numIntervals * direction);
      break;

    case TIME_INTERVAL.Quarter:
      newDate.setMonth(newDate.getMonth() + 3 * numIntervals * direction);
      break;

    case TIME_INTERVAL.Year:
      newDate.setFullYear(newDate.getFullYear() + 1 * numIntervals * direction);
      break;
  
    default:
      break;
  }

  return newDate;
}


function round2fixed(number) {
  return parseFloat(number.toFixed(2));
}