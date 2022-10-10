export const paginateArray = (array: any, perPage: any, page: any) =>
  array.slice((page - 1) * perPage, page * perPage);

export const sortCompare = (key: any) => (a: any, b: any) => {
  const fieldA = a[key];
  const fieldB = b[key];

  let comparison = 0;
  if (fieldA > fieldB) {
    comparison = 1;
  } else if (fieldA < fieldB) {
    comparison = -1;
  }
  return comparison;
};

export const getRandomInt = (min: any, max: any) => {
  if (min > max) {
    const temp = max;
    /* eslint-disable no-param-reassign */
    max = min;
    min = temp;
    /* eslint-enable */
  }

  if (min <= 0) {
    return Math.floor(Math.random() * (max + Math.abs(min) + 1)) + min;
  }
  return Math.floor(Math.random() * max) + min;
};

export const randomDate = (start: any, end: any) => {
  const diff = end.getTime() - start.getTime();
  const newDiff = diff * Math.random();
  const date = new Date(start.getTime() + newDiff);
  return date;
};
