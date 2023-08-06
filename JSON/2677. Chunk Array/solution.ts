const chunk = function (arr: any[], size: number): any[][] {
  let chunkArray: any[][] = [];

  let chunkIndex: number = 0;

  const length: number = arr.length;

  for (
    let currentChunk: number = 0;
    currentChunk < length;
    currentChunk += size
  ) {
    chunkArray[chunkIndex] = arr.slice(currentChunk, currentChunk + size);

    ++chunkIndex;
  }

  return chunkArray;
};
