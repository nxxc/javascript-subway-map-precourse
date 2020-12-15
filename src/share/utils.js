export const checkOverlap = (value, list) => !list.includes(value);

export const checkValueLength = (value, minLength) => value.length >= minLength;

export const checkSameStation = (prevStation, nextStation) =>
  prevStation !== nextStation;

export const customConfirm = (message) => confirm(message);

export const deleteWhiteSpace = (words) => words.replaceAll(' ', '');
