const filter = function (
  arr: number[],
  fn: (n: number, i: number) => any
): number[] {
  const filteredArray: number[] = [];

  for (let index = 0; index < arr.length; ++index) {
    if (fn(arr[index], index)) {
      filteredArray.push(arr[index]);
    }
  }

  return filteredArray;
};
