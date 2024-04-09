export const formatStringAsCurrency = (
  text: string,
  currency: string = 'EUR',
) => {
  return formatNumberAsCurrency(parseFloat(text), currency);
};

export const formatNumberAsCurrency = (
  text: number,
  currency: string = 'EUR',
) => {
  const formatter = Intl.NumberFormat('en', {
    style: 'currency',
    currency: currency,
  });
  return formatter.format(text);
};

export const addLeadingZero = (num: number, places: number = 2) =>
  String(num).padStart(places, '0');

export default {
  formatStringAsCurrency,
  formatNumberAsCurrency,
  addLeadingZero,
};
