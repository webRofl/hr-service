export const snakeCaseToCamelCase = (str: string): string => {
  return str
    .split('')
    .filter((l, idx, arr) => {
      if (l === '_') {
        arr[idx + 1] = arr[idx + 1].toUpperCase();
        return false;
      }
      return true;
    })
    .join('');
};