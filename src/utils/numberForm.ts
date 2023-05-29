export const addNumberCommas = (numebr: number) => {
  let returnString = numebr?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return returnString;
}