interface ISelectData<T, K extends keyof T> {
  name: string;
  value: T[K];
}

export const convertArrayToSelectData = <T, K extends keyof T>(
  data: Array<T>,
  name: Array<keyof T>,
  value: K,
): Array<ISelectData<T, K>> =>
  data.map((obj) => ({
    value: obj[value],
    name: name.reduce((prev, current) => {
      if (prev) {
        return `${prev} ${obj[current]}`;
      }

      return `${obj[current]}`;
    }, ''),
  }));

export const getItemsString = (items: string[]): string => {
  const notEmptyItems = items.filter((item) => !!item.trim());

  if (!notEmptyItems.length) {
    return '';
  }

  return notEmptyItems.length === 1 ? notEmptyItems[0] : notEmptyItems.join(', ');
};

export const getItemsStringGeneric = <T, K extends keyof T>(array: Array<T>, name: K) => {
  return getItemsString(array.map((item) => String(item[name])));
};
