const sortBy = function (arr: any[], fn: Function): any[] {
  return arr.sort((a, b) => fn(a) - fn(b));
};
