import localStore from '../data/localStore.ts';

export const formatStringAsCurrency = (
  text: string,
  currency: string = localStore.getSessionData().currency ?? 'EUR',
) => {
  return formatNumberAsCurrency(parseFloat(text), currency);
};

export const formatNumberAsCurrency = (
  text: number,
  currency: string = localStore.getSessionData().currency ?? 'EUR',
) => {
  const formatter = Intl.NumberFormat('en', {
    style: 'currency',
    currency: currency,
  });
  return formatter.format(text);
};

export const isNumber = (value: unknown) => {
  return typeof value === 'number';
};

export const formatNumberAsPercentage = (
  value: number,
  forceLeadingSign: boolean = false,
) => {
  if (!isNumber(value)) return '';
  return `${forceLeadingSign && value > 0 ? '+' : ''}${value.toFixed(2)}%`;
};

export const addLeadingZero = (num: number, places: number = 2) =>
  String(num).padStart(places, '0');

export const checkIfFieldsAreFilled = (
  fieldsArr: string[],
  emptyStr: string = '',
) => {
  for (const field of fieldsArr) if (!field || field == emptyStr) return false;
  return true;
};

export const convertStringToFloat = (str: string): number => {
  if (str.includes(',')) {
    // It's a PT-pt currency format
    return parseFloat(str.replace('.', '').replace(',', '.'));
  } else {
    return parseFloat(str);
  }
};

export default {
  formatStringAsCurrency,
  formatNumberAsCurrency,
  addLeadingZero,
  checkIfFieldsAreFilled,
  convertStringToFloat,
};
