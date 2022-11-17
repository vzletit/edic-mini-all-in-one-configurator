const withZeros = (num) => (`0${num}`).slice(-2);
const getSplitters = (date) => date.match(/^\d*(\D)\d*/)[1];

export const dateToString = (date, splitter) => {
  const year = date.getFullYear();
  const monthWithZeros = withZeros(date.getMonth() + 1);
  const dateWithZeros = withZeros(date.getDate());
  return (`${dateWithZeros}${splitter}${monthWithZeros}${splitter}${year}`);
};

export const timeToString = (time, splitter = null) => {
  const hoursWithZeros = withZeros(time.getHours());
  const minuresWithZeros = withZeros(time.getMinutes());
  return (`${hoursWithZeros}${splitter}${minuresWithZeros}`);
};

export const stringToDate = ({ date, time }) => {
  const dateSplitter = getSplitters(date);
  const timeSplitter = getSplitters(time);

  const [day, month, year] = date.split(dateSplitter);
  const [hours, minutes] = time.split(timeSplitter);
  return new Date(year, month - 1, day, hours, minutes);
};

export const completeTimeWithZeros = (num) => `0${num}`.slice(-2);
export const shortenYear = (year) => String(year).slice(-2);

export const getLaterDate = (date1Obj, date2Obj) => (date1Obj > date2Obj ? date1Obj : date2Obj);
